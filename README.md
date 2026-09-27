# 🌤️ Weather Icon Display

A modern, interactive, and responsive Weather Icon Display Dashboard built using HTML5, CSS3, and JavaScript.

This project displays different weather conditions using static JavaScript data and dynamically updates the weather icon, temperature, humidity, wind speed, visibility, theme, and forecast information.

## 🎯 Veda Technology - Task 27

---

## 🚀 Live Demo

https://vanshika2723.github.io/Weather-Icon-Display/

## 💻 GitHub Repository

https://github.com/vanshika2723/Weather-Icon-Display.git

---

## ✨ Features

### 🌦️ Multiple Weather Conditions

The application supports:

- ☀️ Sunny
- ☁️ Cloudy
- 🌧️ Rainy
- ⛈️ Stormy
- ❄️ Snowy
- 💨 Windy
- 🌫️ Foggy

Selecting a weather condition dynamically updates the dashboard.

### 🌡️ Dynamic Weather Information

The dashboard displays:

- Temperature
- Feels Like Temperature
- Humidity
- Wind Speed
- Visibility
- Weather Description
- Weather Mood
- Weather Icon

### 🎨 Dynamic Weather Themes

The interface changes visually according to the selected weather condition.

Examples:

- ☀️ Sunny - Warm theme
- ☁️ Cloudy - Cloudy theme
- 🌧️ Rainy - Cool blue theme
- ⛈️ Stormy - Dark storm theme
- ❄️ Snowy - Icy theme
- 💨 Windy - Fresh windy theme
- 🌫️ Foggy - Soft fog theme

### 🌧️ Animated Weather Effects

The project includes:

- Rain animation
- Snowfall animation
- Floating clouds
- Floating stars
- Animated weather icons
- Smooth transitions

### 🌙 Dark / Light Mode

Users can switch between:

- ☀️ Light Mode
- 🌙 Dark Mode

### ⚡ Quick Weather Selection

Weather conditions can be selected quickly using interactive weather buttons.

### 📅 7-Day Forecast

The dashboard includes a static seven-day forecast with:

- Day
- Weather icon
- High temperature
- Low temperature

### 🕘 Recently Viewed

Recently selected weather conditions are displayed in the dashboard.

### 📍 Location Display

The project displays a static sample location:

Jaipur, India

### 📱 Responsive Design

The website works across:

- Desktop
- Laptop
- Tablet
- Mobile

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Website structure |
| CSS3 | Styling, animations and responsive design |
| JavaScript | Dynamic functionality |
| Google Fonts | Typography |
| Git | Version control |
| GitHub | Repository hosting |
| GitHub Pages | Deployment |

---

## 📂 Project Structure

```text
Weather-Icon-Display/
│
├── index.html
├── style.css
├── script.js
└── README.md

**## ⚙️ How It Works**

The project uses a JavaScript object to store static weather information.

Example:

```javascript
const weatherData = {
    sunny: {
        icon: "☀️",
        title: "Sunny",
        temperature: 32,
        feelsLike: 34,
        humidity: 42,
        wind: 12,
        visibility: 10
    }
};
**###🔧 Git Commands Used**
git init

git add .

git commit -m "Complete Task 27 Weather Icon Display"

git branch -M main

git remote add origin https://github.com/vanshika2723/Weather-Icon-Display.git

git push -u origin main

**If the remote repository already exists:**

git remote set-url origin https://github.com/vanshika2723/Weather-Icon-Display.git

git push -u origin main
