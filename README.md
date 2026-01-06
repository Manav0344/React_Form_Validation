# React Form Validation

**Live Demo:** [https://Manav0344.github.io/React_Form_Validation](https://Manav0344.github.io/React_Form_Validation)

---

## Table of Contents

- [Overview](#overview)  
- [Technologies Used](#technologies-used)  
- [Features](#features)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Deployment](#deployment)  
- [Contributing](#contributing)  
- [License](#license)

---

## Overview

This is a **React.js Form Validation project** built using **Vite, TailwindCSS, and React Hooks**.  
The form validates user input in real-time and displays proper error messages for invalid fields.  
It includes **name, email, password, and confirm password fields**, and shows a **success message** upon valid submission.

The project is designed for **learning purposes** and demonstrates **modern React form handling and TailwindCSS styling**.

---

## Technologies Used

- **React.js** (v19.x)  
- **Vite** (Build Tool)  
- **TailwindCSS** (for styling)  
- **PostCSS & Autoprefixer** (for CSS processing)  
- **gh-pages** (for GitHub Pages deployment)  

---

## Features

- Real-time **form validation**  
- Error messages for:
  - Required fields  
  - Invalid email format  
  - Password length (<6 characters)  
  - Password mismatch  
- **Responsive design** using TailwindCSS  
- **Success message** on valid form submission  
- Hover effects and smooth animations  
- **Easy deployment** to GitHub Pages  

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Manav0344/React_Form_Validation.git
```

2. Navigate to the project folder:

```bash
cd React_Form_Validation
```

3. Install dependencies:

```bash
npm install
```

---

## Usage

1. Start the development server:

```bash
npm run dev
```

2. Open the app in your browser:

```
http://localhost:5173/
```

3. Fill out the form fields and see **validation in action**.  

4. Build the project for production:

```bash
npm run build
```

---

## Deployment

This project is deployed to **GitHub Pages**.  

To deploy:

1. Make sure `gh-pages` is installed:

```bash
npm install --save-dev gh-pages
```

2. Add the following to `package.json`:

```json
"homepage": "https://Manav0344.github.io/React_Form_Validation",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update `vite.config.js` with:

```js
export default defineConfig({
  base: "/React_Form_Validation/",
  plugins: [react()]
});
```

4. Deploy to GitHub Pages:

```bash
npm run deploy
```

Your live app will be available at:

```
https://Manav0344.github.io/React_Form_Validation
```

---

## Contributing

Contributions are welcome!  
If you want to contribute:

1. Fork the repository  
2. Create a new branch: `git checkout -b feature/YourFeature`  
3. Commit your changes: `git commit -m "Add new feature"`  
4. Push to your branch: `git push origin feature/YourFeature`  
5. Open a Pull Request  

---

## License

This project is **open-source** and available under the **MIT License**.

---

> **Author:** Manav Solanki  
> **GitHub:** [https://github.com/Manav0344](https://github.com/Manav0344)  

<img width="1360" height="693" alt="screencapture-127-0-0-1-5500-index-html-2026-01-05-18_46_30" src="https://github.com/user-attachments/assets/d192a61b-f1ba-4e19-a6e7-3c10280a1749" />
