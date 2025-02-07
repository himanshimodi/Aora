# Aora - Video Sharing App

![Aora Logo](#)  <!-- Add logo here -->

Aora is a modern **video-sharing application** built using **React Native, Appwrite, and Tailwind CSS**. It allows users to upload, browse, and share videos with a seamless experience.

## 📌 Features

- **User Authentication**: Sign up and log in securely using email and password.
- **Upload & Store Videos**: Users can upload videos with thumbnails using Appwrite Storage.
- **Video Streaming**: Play videos directly from the app.
- **Search & Filter**: Easily find videos by title or creator.
- **User Profiles**: Each user has a personalized profile with their uploaded videos.
- **Responsive UI**: Designed with Tailwind CSS for a smooth experience across devices.

## 🏗 Tech Stack

- **Frontend**: React Native, Javascript, Tailwind CSS
- **Backend**: Appwrite
- **Database**: Appwrite Databases
- **Storage**: Appwrite Storage

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/himanshimodi/Aora.git
cd Aora
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env.local` file in the root directory and add the following:
```sh
EXPO_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
EXPO_PUBLIC_APPWRITE_PROJECT_ID=
EXPO_PUBLIC_APPWRITE_DATABASE_ID=
EXPO_PUBLIC_APPWRITE_USER_COLLECTION_ID=
EXPO_PUBLIC_APPWRITE_VIDEO_COLLECTION_ID=
EXPO_PUBLIC_APPWRITE_STORAGE_ID=
```
Replace the values with your Appwrite credentials.

### 4️⃣ Start the App
```sh
npx expo start
```
Choose an option:
- Open in an **Android emulator**
- Open in an **iOS simulator**
- Use **Expo Go** to test on a physical device

---

## 📷 Screenshots

### 🔹 Home Page
![Home Page](#)  

### 🔹 Upload Video Page
![Upload Video](#)  

### 🔹 Video Playback Page
![Video Playback](#)  

---

