# BMI Calculator + Goal Tracker

A simple and responsive **BMI Calculator + Goal Tracker** built with React and TypeScript. It calculates BMI live as the user enters their height and weight and allows users to save and manage previous BMI calculations.

## ✨ Features

* 🎯 **Live BMI Calculation** — BMI updates automatically as height and weight change.
* 📝 **Controlled Inputs** — Height and weight are managed using React state.
* 💾 **Save Entries** — Save valid BMI calculations to a history list.
* 📋 **Entry History** — View previously saved BMI calculations.
* 🗑️ **Delete Entries** — Remove individual saved entries.
* 📊 **BMI Categories** — Underweight, Normal weight, Overweight, and Obese.
* 🛡️ **Input Validation** — Handles empty, zero, and invalid values safely.
* 📱 **Responsive UI** — Works across different screen sizes.

## 🧮 BMI Formula

```text
BMI = weight (kg) / height (m)²
```

Example:

```text
Height: 170 cm
Weight: 65 kg

BMI = 65 / (1.70 × 1.70)
BMI = 22.49
```

### BMI Categories

| BMI         | Category      |
| ----------- | ------------- |
| < 18.5      | Underweight   |
| 18.5 – 24.9 | Normal weight |
| 25 – 29.9   | Overweight    |
| ≥ 30        | Obese         |

## 🛠️ Tech Stack

* React
* TypeScript
* Vite
* CSS
* Oxlint

## 📁 Project Structure

```text
bmi-calculator/
├── src/
│   ├── components/
│   │   ├── BMICalculator.tsx
│   │   ├── BMIResult.tsx
│   │   ├── EntryList.tsx
│   │   └── EntryItem.tsx
│   ├── bmi.ts
│   ├── types.ts
│   ├── App.tsx
│   ├── App.css
│   └── index.css
├── index.html
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

* Node.js
* npm

### Installation

```bash
git clone https://github.com/AbdulhamidN/bmi-calculator-shiera-m4w2.git
cd bmi-calculator-shiera-m4w2
npm install
```

### Run Locally

```bash
npm run dev
```

The application will be available at the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## 🔍 Validation

The project was validated with:

```bash
npm run lint
npm run build
```

Both checks pass successfully.

## 🌐 Live Demo

[View the BMI Calculator](https://bmi-calculator-on-m4w2.vercel.app/)

## 📄 License

This project is created for educational and learning purposes.
