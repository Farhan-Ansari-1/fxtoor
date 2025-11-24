import os
import json
import re
from datetime import datetime
import subprocess
import google.generativeai as genai
from dotenv import load_dotenv

# --- कॉन्फ़िगरेशन ---
POSTS_JSON_PATH = "public/posts.json"
POSTS_MD_DIR = "public/posts"
GIT_USERNAME = "github-actions[bot]"
GIT_EMAIL = "github-actions[bot]@users.noreply.github.com"
# ---

def configure_git():
    """Git कॉन्फ़िगरेशन सेट करता है।"""
    try:
        subprocess.run(["git", "config", "user.name", GIT_USERNAME], check=True)
        subprocess.run(["git", "config", "user.email", GIT_EMAIL], check=True)
        print(f"Git user '{GIT_USERNAME}' के रूप में कॉन्फ़िगर किया गया।")
    except subprocess.CalledProcessError as e:
        print(f"Git कॉन्फ़िगर करते समय त्रुटि: {e}")
        pass

def generate_blog_post():
    """Gemini API का उपयोग करके ब्लॉग पोस्ट जेनरेट करता है।"""
    print("ब्लॉग पोस्ट जेनरेशन शुरू हो रहा है...")
    try:
        model = genai.GenerativeModel('gemini-pro')
        prompt = """
        AI (Artificial Intelligence) या Cybersecurity में किसी ट्रेंडिंग टॉपिक पर लगभग 200-300 शब्दों का एक ब्लॉग पोस्ट लिखें।

        ब्लॉग पोस्ट का फॉर्मेट ऐसा होना चाहिए:
        - सबसे ऊपर एक आकर्षक टाइटल, जिसके शुरू में # हो। (उदाहरण: # AI: Cybersecurity का भविष्य)
        - फिर कंटेंट सरल और आकर्षक भाषा में।
        - आखिर में एक निष्कर्ष।

        यह ब्लॉग पोस्ट एक टेक वेबसाइट के लिए है। भाषा सरल रखें। शीर्षक और सामग्री के बीच एक खाली लाइन छोड़ दें।
        """
        response = model.generate_content(prompt)
        print("ब्लॉग पोस्ट सफलतापूर्वक जेनरेट हो गया।")
        return response.text
    except Exception as e:
        print(f"ब्लॉग पोस्ट जेनरेट करते समय त्रुटि: {e}")
        return None

def parse_and_save_post(content):
    """जेनरेट किए गए कंटेंट को पार्स करता है, .md और .json फाइल को अपडेट करता है।"""
    try:
        # टाइटल और कंटेंट को अलग करें
        lines = content.strip().split('\n')
        title_line = lines[0]
        post_content = '\n'.join(lines[1:]).strip()

        if not title_line.startswith('#'):
            raise ValueError("जेनरेट किए गए कंटेंट में टाइटल नहीं मिला।")

        title = title_line.replace('#', '').strip()

        # slug बनाएँ
        slug = re.sub(r'[^\w\s-]', '', title).strip().lower()
        slug = re.sub(r'[-\s]+', '-', slug)

        # excerpt बनाएँ
        excerpt = ' '.join(post_content.split()[:20]) + '...'

        # posts.json पढ़ें
        with open(POSTS_JSON_PATH, 'r', encoding='utf-8') as f:
            posts = json.load(f)

        # नया पोस्ट ऑब्जेक्ट बनाएँ
        new_id = str(len(posts) + 1)
        new_post = {
            "id": new_id,
            "title": title,
            "slug": slug,
            "date": datetime.now().strftime("%Y-%m-%d"),
            "excerpt": excerpt
        }

        # posts.json में नया पोस्ट जोड़ें
        posts.append(new_post)
        with open(POSTS_JSON_PATH, 'w', encoding='utf-8') as f:
            json.dump(posts, f, indent=2, ensure_ascii=False)
        print(f"'{POSTS_JSON_PATH}' अपडेट किया गया।")

        # .md फाइल सेव करें
        md_filename = f"{POSTS_MD_DIR}/{slug}.md"
        with open(md_filename, 'w', encoding='utf-8') as f:
            f.write(post_content)
        print(f"ब्लॉग पोस्ट '{md_filename}' में सेव किया गया।")

        return [POSTS_JSON_PATH, md_filename]

    except Exception as e:
        print(f"पोस्ट को सेव करते समय त्रुटि: {e}")
        return None

def push_to_github(files_to_add, commit_message):
    """नई फाइलों को GitHub पर पुश करता है।"""
    if not files_to_add:
        print("कोई फाइल नहीं, GitHub पर पुश नहीं किया जा रहा है।")
        return

    try:
        print(f"'{' '.join(files_to_add)}' को GitHub पर पुश किया जा रहा है...")
        for file in files_to_add:
            subprocess.run(["git", "add", file], check=True)
        
        subprocess.run(["git", "commit", "-m", commit_message], check=True)
        subprocess.run(["git", "push"], check=True)
        print("फाइलें सफलतापूर्वक GitHub पर पुश हो गईं।")
    except subprocess.CalledProcessError as e:
        print(f"Git कमांड चलाते समय त्रुटि: {e}")
    except Exception as e:
        print(f"GitHub पर पुश करते समय एक अप्रत्याशित त्रुटि हुई: {e}")

def main():
    """मुख्य फ़ंक्शन जो एजेंट को चलाता है।"""
    load_dotenv()
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        print("त्रुटि: GEMINI_API_KEY नहीं मिला।")
        return

    genai.configure(api_key=api_key)
    
    configure_git()

    blog_content = generate_blog_post()
    if blog_content:
        saved_files = parse_and_save_post(blog_content)
        if saved_files:
            commit_msg = f"feat(blog): Add new post '{saved_files[1]}'"
            push_to_github(saved_files, commit_msg)

if __name__ == "__main__":
    main()
