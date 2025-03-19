# AI Recipe Generater App [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome#readme)

An AI-powered website that suggests recipes based on the ingredients you have on hand. Built with **React**, **Hugging Face Inference API**, and **Mistral AI**.

---

## 🚀 Live Demo  
👉 [https://cookhubai.netlify.app/](https://cookhubai.netlify.app/)  

---

## 🖥️ **Project Overview**
AI Recipe Generator allows you to:  
✅ Add ingredients you have on hand  
✅ Generate a recipe  
✅ View the recipe in markdown format  

---

## 🏗️ **Tech Stack**
- **Frontend:** React (Vite) + CSS  
- **AI Model:** Mistral-8x7B-Instruct-v0.1 (via Hugging Face)  
- **Deployment:** Netlify  

---

## 📸 **Screenshots**
### ✅ Add Ingredients
![Add Ingredients](https://github.com/zaib-shekh/Cook-Hub/blob/main/src/assets/recipe-ingredient.png)

### ✅ Suggested Recipe
![Suggested Recipe](https://github.com/zaib-shekh/Cook-Hub/blob/main/src/assets/generated-recipe.png)

---

## 🚀 **Getting Started**
### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/your-username/ai-recipe-generator.git
cd ai-recipe-generator
```
2️⃣ Install Dependencies
```bash
npm install
```
3️⃣ Set Up Environment Variables
Create a .env file in the root directory:
```plaintext
VITE_HF_ACCESS_TOKEN=your_huggingface_token_here
```
4️⃣ Run the App Locally
```bash
npm run dev
```
### 🛠️ How to Use

Enter the ingredients you have
Click "Add ingredient"
Once you have added enough ingredients, click "Get a recipe"
AI will generate a recipe based on the provided ingredients

---

### 🧠 How It Works
Uses Hugging Face's @huggingface/inference package to interact with the Mistral AI model
Sends user-provided ingredients to the model as a prompt
Formats the response using ReactMarkdown to display it properly

---

### 🏆 Features
✅ Add multiple ingredients
✅ Uses Mistral-8x7B-Instruct-v0.1 for generating recipes
✅ Clean and responsive UI
✅ Handles errors gracefully

---

### 🌐 Deploy on Netlify
Create a Netlify account
Import the GitHub repo
Set the environment variable in Netlify:
Key: VITE_HF_ACCESS_TOKEN
Value: your_huggingface_token_here
Deploy 🚀

--- 

### 🔥 Folder Structure
```css
├── src
│   ├── components
│   │   ├── ClaudeRecipe.jsx
│   │   ├── Header.jsx
│   │   ├── IngredientsList.jsx
│   ├── App.jsx
│   ├── Main.jsx
│   ├── ai.js
├── .env
├── .gitignore
├── netlify.toml
├── package.json
├── README.md
└── vite.config.js
```
--- 

### 🐛 Troubleshooting
If you get a 401 Unauthorized error:
✅ Ensure the token is set correctly in .env
✅ Ensure the token permissions allow inference
✅ Ensure environment variable is set in Netlify

---

### 🤝 Contributing
Pull requests are welcome! If you’d like to contribute, please fork the repo and submit a pull request.
