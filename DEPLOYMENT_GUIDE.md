# Portfolio Deployment Guide

Follow these simple steps to put your portfolio website online so that recruiters at **Afford Medical Technologies** can view it.

---

## Part 1: Push Your Code to GitHub

Since you have Git installed, you can upload this code directly to your GitHub account:

### Step 1: Open Terminal in the Portfolio Folder
In VS Code, open the folder `akarshana-portfolio`. Then open a terminal (Ctrl+` or Terminal -> New Terminal).

### Step 2: Initialize Git and Commit
Run these commands in order:
```bash
# Initialize git repository
git init

# Add all files to staging area
git add .

# Create your first commit
git commit -m "feat: initial commit of React portfolio website"
```

### Step 3: Connect to a New GitHub Repository
1. Go to [github.com](https://github.com/) and log in.
2. Click the **"New"** button to create a new repository.
3. Name it `akarshana-portfolio`. Make it **Public**.
4. Leave "Add a README", ".gitignore", and "License" **unchecked** (since they are already in your project or we want a clean push).
5. Click **Create repository**.
6. Copy the command lines under *"…or push an existing repository from the command line"*. They will look like this:
   ```bash
   git branch -M main
   git remote add origin https://github.com/akarshanaragu/akarshana-portfolio.git
   git push -u origin main
   ```
7. Run those commands in your local terminal. Your code will now be live on GitHub!

---

## Part 2: Publish Your Website (Hosting)

We highly recommend using **Vercel** because it is free, takes under 2 minutes, and was built specifically for modern frontend frameworks like React + Vite.

### Option A: Hosting on Vercel (Recommended 🚀)
1. Go to [vercel.com](https://vercel.com/) and click **Sign Up**.
2. Select **"Continue with GitHub"** to link your accounts.
3. Once logged in, click **"Add New..."** -> **"Project"**.
4. You will see a list of your GitHub repositories. Click **"Import"** next to `akarshana-portfolio`.
5. Under **Framework Preset**, Vercel will automatically detect **Vite**.
6. You don't need to change any build settings! Simply click **"Deploy"**.
7. Wait 30 seconds. Your site is live! Vercel will provide you with a URL like `akarshana-portfolio.vercel.app`.
8. *Bonus:* Every time you run `git push`, Vercel automatically rebuilds and redeploys your changes.

### Option B: Hosting on GitHub Pages
If you prefer keeping everything on GitHub:
1. Install the `gh-pages` package in your project:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Open `package.json` and add a `homepage` field at the top level:
   ```json
   "homepage": "https://akarshanaragu.github.io/akarshana-portfolio",
   ```
3. In `package.json`, add these scripts under `"scripts"`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Configure your `vite.config.js` to include the base path:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/akarshana-portfolio/'
   })
   ```
5. Run the deployment command in your terminal:
   ```bash
   npm run deploy
   ```
6. Your site will be published at `https://akarshanaragu.github.io/akarshana-portfolio`.
