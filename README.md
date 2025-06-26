# ALIGHT-FRONTEND-CHALLENGE

## 🧾 Description

This is a client-side application for the ALIGHT Challenge, built with NextJs. You can run the frontend locally by following the setup instructions below. Clone the repo, set up your environment, and get started!

## 🔗 Live Preview

You can view a live version of this frontend (if deployed) at:  
👉 [https://frontend-alight-challenge.netlify.app](https://frontend-alight-challenge.netlify.app)

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

## ✅ Prerequisite installation

- nodejs v18.18.0

## 🛠 Installation

1. **Clone the Repository**

    ```bash
    git clone git@github.com:lcdamy/frontend_alight_challenge.git
    cd frontend_alight_challenge
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

## 🏃‍♂️ Running in Development

To start the server in development mode, follow these steps:

1. Copy the example environment file:

    ```bash
    cp .env.example .env
    ```

2. Start the server:

    ```bash
    npm run dev
    ```

## 🏗️ Building for Production

To build the project for production, run:
```bash
npm run build
```

> **Note:** The built files will be in the `.next` directory.

📁 Folder Structure

```
frontend_alight_challenge/
├── public/                     # Static assets (images, fonts, etc.)
├── src/
│   ├── app/                    # Application routing and authentication API
│   ├── components/             # Reusable UI components
│   ├── hooks/                  # Custom React hooks (e.g., API calls)
│   ├── lib/                    # Constants, types, utility functions, and validation
│   └── store/                  # Zustand state management store
├── .env                        # Environment variables
├── .gitignore                  # Git ignore rules
├── package.json                # Project metadata and dependencies
└── README.md
```

## 👥 Contributors

- [lcdamy](https://www.linkedin.com/in/pierre-damien-murindangabo-cyuzuzo-709b53151/)
