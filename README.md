<div align="center">
  <h1 align="center">fxtoor - AI & Cybersecurity Tools Directory</h1>
  <p align="center">
    An auto-updating directory of AI & Cybersecurity tools, powered by a Gemini-based AI agent that writes its own blog posts.
  </p>
  <a href="https://farhan-ansari-1.github.io/fxtoor/"><strong>🚀 View Live Demo</strong></a>
</div>

<br />

## ✨ Features

-   **Curated List:** A handpicked collection of top-tier AI and Cybersecurity tools.
-   **🤖 AI-Powered Blog:** Features a fully automated blog where a Gemini-based AI agent writes, formats, and publishes new articles on AI and Cybersecurity.
-   **⚡️ Auto-Deployment:** The entire site, including new blog posts, is automatically built and deployed to GitHub Pages.
-   **🔍 Powerful Filtering & Search:** Instantly find tools by category, sub-category, type (Free/Paid), or keywords.
-   **🌓 Light & Dark Mode:** Switch between light and dark themes for a comfortable viewing experience.
-   **📱 Fully Responsive:** A seamless experience on desktop, tablet, and mobile devices.

---

## 🤖 How The Automation Works

This project uses a CI/CD pipeline with GitHub Actions to automate content creation and deployment.

1.  **Trigger:** The `Generate New Blog Post` workflow is manually triggered.
2.  **Execute Agent:** It runs the `blog_agent.py` script.
3.  **Generate Content:** The script calls the **Google Gemini API** to generate a unique blog post about AI or Cybersecurity in a specific Hinglish format.
4.  **Save & Commit:** The agent creates a new Markdown file for the post, updates the central `posts.json` file, and commits these changes to the repository.
5.  **Deploy (Manual):** The `Deploy static content to Pages` workflow can then be run manually to build the React app and deploy the latest version to GitHub Pages.

---

## 🚀 Tech Stack

-   **Frontend:** React
-   **Build Tool:** Vite
-   **Styling:** Tailwind CSS
-   **Routing:** React Router
-   **Automation:** GitHub Actions & Python
-   **AI:** Google Gemini
-   **Deployment:** GitHub Pages

## 🛠️ Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

You need to have **Node.js (version 20 or higher)** and **npm** installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Farhan-Ansari-1/fxtoor.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd fxtoor
    ```

3.  **Install NPM packages:**
    ```sh
    npm install
    ```

4.  **(Optional) Set up Environment Variables:**
    To run the blog generation script locally, create a `.env` file in the root directory and add your Gemini API key:
    ```
    GEMINI_API_KEY="YOUR_API_KEY_HERE"
    ```

## 📜 Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode. Open `http://localhost:5173` to view it in your browser.

### `npm run build`

Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`

Runs a local server to preview the production build from the `dist` folder. This is useful for testing before deployment.

## 🤝 Contributing

Contributions are welcome! If you have a tool suggestion, find a bug, or want to improve something, feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License.
