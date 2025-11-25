import os
import json
import re
import requests # google-generativeai ki jagah requests ka istemal
from datetime import datetime
import subprocess
from dotenv import load_dotenv

# --- Configuration ---
POSTS_JSON_PATH = "public/posts.json"
POSTS_MD_DIR = "public/posts"
GIT_USERNAME = "github-actions[bot]"
GIT_EMAIL = "github-actions[bot]@users.noreply.github.com"
# ----------------------

def configure_git():
    """Git ko configure karta hai taaki workflow me commit/push sahi ho."""
    try:
        subprocess.run(["git", "config", "user.name", GIT_USERNAME], check=True)
        subprocess.run(["git", "config", "user.email", GIT_EMAIL], check=True)
        print(f"Git user '{GIT_USERNAME}' set ho gaya.")
    except subprocess.CalledProcessError as e:
        print(f"Git configure karte waqt error: {e}")
        pass


def generate_blog_post(api_key):
    """Gemini API ko direct call karke blog post generate karta hai."""
    print("Blog post generate ho raha hai (direct API call)...")

    # Sahi model 'gemini-1.0-pro' ke saath v1beta endpoint ka istemal
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent?key={api_key}"

    headers = {
        "Content-Type": "application/json"
    }

    prompt = """
    You are a friendly and engaging tech dost (friend) who writes blog posts for Indian college students.
    Your tone must be casual, easy-to-understand, and use a mix of Hindi and English (Hinglish).
    Do NOT write any introductory text like "Here is your blog post".

    Your Mission:
    1.  Silently choose a trending topic in AI or Cybersecurity that is interesting for a college student.
    2.  Write a complete blog post of about 250-350 words.

    Content Style (Very Important):
    -   **Highlight Key Terms:** Use `**bold text**` for important technical terms (e.g., **Phishing**, **LLM**).
    -   **Emphasize Points:** Use `*italic text*` to emphasize certain words or phrases.
    -   **Create a "Pro Tip" section:** Use a Markdown blockquote `> Pro Tip: ...` to give a special piece of advice. This should be a standout point.
    -   **Use Bullet Points:** Include a section with 2-3 bullet points (using '*') for key takeaways.

    Output Format (Strictly follow this):
    -   Line 1: An engaging title for the blog post, starting with "# ".
    -   Line 2: A single blank line.
    -   Line 3 onwards: The full body of the blog post, following all the content style rules above.

    Rules:
    -   The final output must ONLY be the blog post itself. No extra text.

    Ab, ek dum mast blog post likho!
    """

    data = {
        "contents": [{
            "parts": [{
                "text": prompt
            }]
        }]
    }

    try:
        response = requests.post(url, headers=headers, json=data, timeout=60)
        response.raise_for_status() # Agar 4xx ya 5xx error ho to exception raise karega

        result = response.json()

        # API response se text extract karna
        content = result['candidates'][0]['content']['parts'][0]['text']
        print("Blog post generate ho gaya!")
        return content

    except requests.exceptions.RequestException as e:
        print(f"API call karte waqt error: {e}")
        # Agar response me body ho to use bhi print karein
        if e.response is not None:
            print(f"Error Response Body: {e.response.text}")
        return None
    except (KeyError, IndexError) as e:
        print(f"API response ka format ajeeb hai: {e}")
        print(f"Full Response: {result}")
        return None


def parse_and_save_post(content):
    """AI content ko title/slug me convert karke MD file aur posts.json me save karta hai."""
    try:
        lines = content.strip().split('\n')
        title_line = lines[0]
        post_content = '\n'.join(lines[1:]).strip()

        if not title_line.startswith('#'):
            raise ValueError("Generated content me title (# ...) nahi mila.")

        title = title_line.replace('#', '').strip()

        slug = re.sub(r"[^\w\s-]", "", title).strip().lower()
        slug = re.sub(r"[-\s]+", "-", slug)

        excerpt = " ".join(post_content.split()[:20]) + "..."

        with open(POSTS_JSON_PATH, "r", encoding="utf-8") as f:
            posts = json.load(f)

        new_id = str(len(posts) + 1)

        new_post = {
            "id": new_id,
            "title": title,
            "slug": slug,
            "date": datetime.now().strftime("%Y-%m-%d"),
            "excerpt": excerpt
        }

        posts.append(new_post)

        with open(POSTS_JSON_PATH, "w", encoding="utf-8") as f:
            json.dump(posts, f, indent=2, ensure_ascii=False)

        md_filename = f"{POSTS_MD_DIR}/{slug}.md"

        with open(md_filename, "w", encoding="utf-8") as f:
            f.write(post_content)

        print(f"Markdown save ho gaya: {md_filename}")

        return [POSTS_JSON_PATH, md_filename]

    except Exception as e:
        print(f"Post save karte waqt error: {e}")
        return None


def push_to_github(files_to_add, commit_message):
    """Changes ko commit + push karta hai."""
    if not files_to_add:
        print("Koi new file nahi — push skip kar diya.")
        return

    try:
        for file in files_to_add:
            subprocess.run(["git", "add", file], check=True)

        subprocess.run(["git", "commit", "-m", commit_message], check=True)
        subprocess.run(["git", "push"], check=True)

        print("Commit + push successful.")

    except Exception as e:
        print(f"Git push error: {e}")


def main():
    load_dotenv()
    api_key = os.getenv("GEMINI_API_KEY")

    if not api_key:
        print("GEMINI_API_KEY missing!")
        return

    # Ab hum genai.configure() nahi kar rahe

    configure_git()

    blog = generate_blog_post(api_key) # API key ko function me pass kar rahe hain
    if blog:
        saved = parse_and_save_post(blog)
        if saved:
            slug_from_path = os.path.basename(saved[1]).replace('.md', '')
            push_to_github(saved, f"feat(blog): Add new post '{slug_from_path}'")


if __name__ == "__main__":
    main()
