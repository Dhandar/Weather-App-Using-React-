# 🌦️ SkyCast — Weather App

A modern, responsive weather application built with **React.js** and **Material UI** that lets users check real-time weather information for any city using the OpenWeather API.

## ✨ Features

- 🌍 **City Search:** Search for weather information by city name.
- 🌡️ **Real-Time Weather:** Display the current temperature in Celsius.
- 💧 **Humidity Details:** View the current humidity percentage.
- 🌤️ **Weather Conditions:** Display weather descriptions and relevant icons.
- 🌡️ **Temperature Range:** View minimum and maximum temperatures.
- 🤗 **Feels-Like Temperature:** Check the perceived temperature.
- 🖼️ **Dynamic Weather Images:** Display images based on weather conditions.
- ⚠️ **Error Handling:** Show a message when a city cannot be found.
- 📱 **Responsive UI:** A modern interface designed for desktop and mobile screens.
- 🎨 **Modern Design:** Gradient backgrounds, rounded cards, and interactive hover effects.

## 🛠️ Technologies Used

- **Frontend:** React.js
- **Language:** JavaScript (ES6+)
- **UI Library:** Material UI (MUI)
- **Styling:** CSS3
- **API:** OpenWeather API
- **Build Tool:** Vite
- **Version Control:** Git and GitHub

## 📸 Screenshots

Add screenshots of your application here after running it locally.

```md
![SkyCast Weather App](./screenshots/weather-app.png)
```

To add a screenshot:

1. Create a `screenshots` folder in your project.
2. Capture your running application.
3. Save the image as `weather-app.png` inside that folder.
4. Commit and push the screenshot to GitHub.

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual repository URL.

### 2. Navigate to the project directory

```bash
cd your-project-folder
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure the API key

Create an account at [OpenWeather](https://openweathermap.org/api) and obtain an API key.

Create a `.env` file in the project root:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

In your React code, access the key using:

```js
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
```

**Important:** Environment variables prefixed with `VITE_` are exposed in the browser bundle. Do not treat this API key as a secret. For production, use a backend proxy if the key needs to remain private. Add `.env` to `.gitignore` and never commit your actual key.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL shown in your terminal, usually:

```text
http://localhost:5173
```

## 📂 Project Structure

```text
weather-app/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBox.jsx
│   │   ├── SearchBox.css
│   │   ├── InfoBox.jsx
│   │   └── InfoBox.css
│   ├── WeatherApp.jsx
│   ├── WeatherApp.css
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .gitignore
├── index.html
├── package.json
└── README.md
```

*Note: Update the structure above to match your actual project folders and filenames.*

## 🌐 API Integration

This project uses the OpenWeather Current Weather API to retrieve weather data.

**API endpoint:**

```text
https://api.openweathermap.org/data/2.5/weather
```

The application retrieves the following information:

- City name
- Current temperature
- Minimum and maximum temperatures
- Humidity
- Feels-like temperature
- Weather description

Temperature values are requested in Celsius using the `units=metric` parameter.

## 🧠 What I Learned

While building this project, I practiced:

- Building reusable React components.
- Managing state with the `useState` Hook.
- Passing data between components using props.
- Handling form submissions and input changes.
- Fetching API data using `async/await` and `fetch()`.
- Handling API errors and displaying conditional messages.
- Styling components with CSS and Material UI.
- Creating a responsive user interface.
- Organizing and maintaining a React project.

## 🔮 Future Improvements

- [ ] Add a loading indicator while fetching weather data.
- [ ] Add a five-day weather forecast.
- [ ] Display wind speed and atmospheric pressure.
- [ ] Use weather-specific icons and background images.
- [ ] Save recent searches.
- [ ] Improve accessibility and keyboard navigation.
- [ ] Deploy the application online.

## 👩‍💻 Author

**Sushmita Dhandar**

Aspiring Software Developer | MERN Stack Developer

- GitHub: [Visit my GitHub profile](https://github.com/)
- LinkedIn: [Connect with me on LinkedIn](https://www.linkedin.com/)

*Replace the profile links above with your actual GitHub and LinkedIn URLs.*

## 📄 License

This project is open source and available for learning and educational purposes. You may add an MIT License if you want to allow reuse under its terms.
