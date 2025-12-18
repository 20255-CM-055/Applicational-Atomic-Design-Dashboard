# 📊 Applicational Atomic Design – Sales Dashboard (Next.js 15)

This project is a **basic sales dashboard application** built using **Next.js 15**, **TypeScript**, and **Tailwind CSS**, following the **Applicational Atomic Design** methodology.

It demonstrates how to structure a real-world application using **Atomic Design principles extended with application behavior and domain logic**, rather than UI size alone.

---

## 🚀 Live Demo

👉 **Home Page:** `/`
👉 **Dashboard:** `/dashboard`

(The dashboard displays sales data for different years using charts.)

---

## 🧠 What is Applicational Atomic Design?

Applicational Atomic Design is based on **Atomic Design by Brad Frost**, with additional focus on:

* Application behavior
* Domain models
* Clear responsibility boundaries
* Global state awareness

Instead of classifying components by size, components are classified by **behavior and responsibility**.

---

## 🧩 Atomic Structure Used in This Project

```
components/
├── atoms/        → Basic UI elements (no logic, no state)
├── molecules/    → Domain-aware components (no global state)
├── organisms/    → Stateful, data-driven widgets
├── templates/    → Layouts that place organisms
├── components/   → Guards / wrappers (auth, role-based, etc.)
```

### Layer Responsibilities

| Layer     | Responsibility                     |
| --------- | ---------------------------------- |
| Atoms     | Pure UI, no logic                  |
| Molecules | Domain behavior, no global state   |
| Organisms | Uses state, data, acts as a widget |
| Templates | Layout and composition             |
| Pages     | Route-level orchestration          |

---

## ✨ Features

* 📊 Sales dashboard with charts
* 📅 Year-wise sales data (2022, 2023, 2024)
* 🧱 Applicational Atomic Design architecture
* 🎨 Styled using Tailwind CSS
* ⚡ Built with Next.js 15 App Router
* 📦 TypeScript for type safety

---

## 📈 Sales Data

Sales data is **mocked** and inspired by Kaggle-style datasets.

Each year contains quarterly sales values:

* **2022**
* **2023**
* **2024**

Users can switch between years to view sales data visually.

---

## 🧰 Tech Stack

* **Next.js 15**
* **React 18**
* **TypeScript**
* **Tailwind CSS (v4)**
* **Recharts** (for charts)
* **Vercel** (deployment)

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── dashboard/
│       └── page.tsx
│
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
│   └── components/
│
├── data/
│   └── sales.ts
│
└── lib/
    └── types.ts
```

---

## 🧪 Handling Charts in Next.js

Chart libraries like **Recharts are not SSR-safe**.
To avoid hydration errors, the chart component is **dynamically imported with SSR disabled**:

```ts
dynamic(() => import(...), { ssr: false })
```

This is the **recommended and production-safe approach** in Next.js.

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Development Server

```bash
npm run dev
```

Open:

* `http://localhost:3000`
* `http://localhost:3000/dashboard`

---

## 🌱 Future Enhancements

The architecture supports easy extension. Possible improvements include:

* 🔍 **Custom Filter Input**
  Allow users to set a sales threshold.

* 🌐 **API Integration**
  Replace mock data with real API data.

* 📊 **Multiple Chart Types**
  Switch between Bar, Line, and Pie charts.

* 🔐 **Authentication & Role-based Pages**

---

## 🎯 What This Project Demonstrates

* Clean architectural thinking
* Modern Next.js 15 practices
* Proper separation of concerns
* Handling real-world SSR issues
* Scalable component design




