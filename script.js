const weatherData = {

    sunny: {
        icon: "☀️",
        title: "Sunny",
        temperature: 32,
        feelsLike: 34,
        humidity: 42,
        wind: 12,
        visibility: 10,
        number: "01",

        description:
            "Clear skies with bright sunshine and a warm, cheerful atmosphere.",

        mood:
            "Perfect day to step outside and enjoy the sunshine!",

        background:
            "radial-gradient(circle at center, rgba(254,240,138,.7), rgba(219,234,254,.6))",

        iconBackground: "#fff7d6"
    },


    cloudy: {
        icon: "☁️",
        title: "Cloudy",
        temperature: 26,
        feelsLike: 27,
        humidity: 62,
        wind: 10,
        visibility: 8,
        number: "02",

        description:
            "Soft clouds cover the sky, creating a calm and comfortable atmosphere.",

        mood:
            "A calm cloudy day — perfect for relaxing or getting things done.",

        background:
            "radial-gradient(circle at center, rgba(203,213,225,.8), rgba(226,232,240,.65))",

        iconBackground: "#f1f5f9"
    },


    rainy: {
        icon: "🌧️",
        title: "Rainy",
        temperature: 22,
        feelsLike: 23,
        humidity: 82,
        wind: 14,
        visibility: 5,
        number: "03",

        description:
            "Rain showers are falling with cool air and a refreshing atmosphere.",

        mood:
            "A cozy rainy day — grab a hot drink and enjoy the sound of rain.",

        background:
            "radial-gradient(circle at center, rgba(147,197,253,.75), rgba(219,234,254,.7))",

        iconBackground: "#e0f2fe"
    },


    stormy: {
        icon: "⛈️",
        title: "Stormy",
        temperature: 20,
        feelsLike: 21,
        humidity: 88,
        wind: 30,
        visibility: 4,
        number: "04",

        description:
            "Thunder, lightning and heavy rain create a dramatic stormy sky.",

        mood:
            "Better stay indoors and enjoy the dramatic view from a safe place.",

        background:
            "radial-gradient(circle at center, rgba(196,181,253,.75), rgba(224,231,255,.7))",

        iconBackground: "#ede9fe"
    },


    snowy: {
        icon: "❄️",
        title: "Snowy",
        temperature: -2,
        feelsLike: -6,
        humidity: 76,
        wind: 9,
        visibility: 7,
        number: "05",

        description:
            "Snowflakes fill the air, creating a peaceful and chilly winter scene.",

        mood:
            "Bundle up! It is a beautiful chilly day outside.",

        background:
            "radial-gradient(circle at center, rgba(186,230,253,.8), rgba(240,249,255,.8))",

        iconBackground: "#e0f2fe"
    },


    windy: {
        icon: "💨",
        title: "Windy",
        temperature: 24,
        feelsLike: 22,
        humidity: 48,
        wind: 34,
        visibility: 9,
        number: "06",

        description:
            "Strong winds move through the area with a fresh and energetic feel.",

        mood:
            "Hold onto your hat! It is a breezy and energetic day.",

        background:
            "radial-gradient(circle at center, rgba(165,243,252,.75), rgba(236,254,255,.75))",

        iconBackground: "#cffafe"
    },


    foggy: {
        icon: "🌫️",
        title: "Foggy",
        temperature: 17,
        feelsLike: 16,
        humidity: 91,
        wind: 5,
        visibility: 2,
        number: "07",

        description:
            "A layer of fog covers the surroundings and reduces visibility.",

        mood:
            "A mysterious morning — slow down and enjoy the peaceful atmosphere.",

        background:
            "radial-gradient(circle at center, rgba(226,232,240,.85), rgba(248,250,252,.85))",

        iconBackground: "#f1f5f9"
    }

};


const forecastData = [
    {
        day: "SUN",
        icon: "☀️",
        high: 32,
        low: 23
    },

    {
        day: "MON",
        icon: "🌤️",
        high: 30,
        low: 22
    },

    {
        day: "TUE",
        icon: "🌧️",
        high: 25,
        low: 20
    },

    {
        day: "WED",
        icon: "☁️",
        high: 27,
        low: 21
    },

    {
        day: "THU",
        icon: "☀️",
        high: 31,
        low: 22
    },

    {
        day: "FRI",
        icon: "💨",
        high: 28,
        low: 20
    },

    {
        day: "SAT",
        icon: "⛈️",
        high: 23,
        low: 19
    }
];


const weatherSelect =
    document.getElementById("weatherSelect");

const weatherIcon =
    document.getElementById("weatherIcon");

const weatherTitle =
    document.getElementById("weatherTitle");

const weatherDescription =
    document.getElementById("weatherDescription");

const weatherMood =
    document.getElementById("weatherMood");

const weatherVisual =
    document.getElementById("weatherVisual");

const temperature =
    document.getElementById("temperature");

const feelsLike =
    document.getElementById("feelsLike");

const humidity =
    document.getElementById("humidity");

const wind =
    document.getElementById("wind");

const visibility =
    document.getElementById("visibility");

const conditionNumber =
    document.getElementById("conditionNumber");

const weatherEffects =
    document.getElementById("weatherEffects");

const recentList =
    document.getElementById("recentList");

const themeToggle =
    document.getElementById("themeToggle");

const quickButtons =
    document.querySelectorAll(
        ".quick-buttons button"
    );


/* =========================
   FORECAST
========================= */

function renderForecast() {

    const forecastGrid =
        document.getElementById("forecastGrid");

    forecastGrid.innerHTML = "";

    forecastData.forEach(item => {

        const card =
            document.createElement("div");

        card.className =
            "forecast-card";

        card.innerHTML = `
            <span class="day">
                ${item.day}
            </span>

            <span class="forecast-icon">
                ${item.icon}
            </span>

            <strong>
                ${item.high}°
            </strong>

            <small>
                ${item.low}°
            </small>
        `;

        forecastGrid.appendChild(card);

    });
}


/* =========================
   UPDATE WEATHER
========================= */

function updateWeather(weatherKey) {

    if (!weatherKey) {

        weatherIcon.textContent = "🌤️";

        weatherTitle.textContent =
            "Select Weather";

        weatherDescription.textContent =
            "Choose a weather condition below to discover its weather profile.";

        weatherMood.textContent =
            "Your weather mood will appear here.";

        temperature.textContent =
            "--";

        feelsLike.textContent =
            "--°";

        humidity.textContent =
            "--%";

        wind.textContent =
            "-- km/h";

        visibility.textContent =
            "-- km";

        conditionNumber.textContent =
            "00";

        weatherVisual.style.background =
            "radial-gradient(circle at center, rgba(255,255,255,.95), rgba(219,234,254,.65))";

        weatherIcon.style.background =
            "rgba(255,255,255,.72)";

        createWeatherEffect("");

        return;
    }


    const weather =
        weatherData[weatherKey];


    /* Animation */

    weatherIcon.classList.remove(
        "animate"
    );

    void weatherIcon.offsetWidth;

    weatherIcon.classList.add(
        "animate"
    );


    /* Main information */

    weatherIcon.textContent =
        weather.icon;

    weatherTitle.textContent =
        weather.title;

    weatherDescription.textContent =
        weather.description;

    weatherMood.textContent =
        weather.mood;

    temperature.textContent =
        weather.temperature;

    feelsLike.textContent =
        `${weather.feelsLike}°`;

    humidity.textContent =
        `${weather.humidity}%`;

    wind.textContent =
        `${weather.wind} km/h`;

    visibility.textContent =
        `${weather.visibility} km`;

    conditionNumber.textContent =
        weather.number;


    /* Dynamic theme */

    weatherVisual.style.background =
        weather.background;

    weatherIcon.style.background =
        weather.iconBackground;


    /* Effects */

    createWeatherEffect(
        weatherKey
    );


    /* History */

    addToRecent(
        weatherKey
    );
}


/* =========================
   WEATHER EFFECTS
========================= */

function createWeatherEffect(type) {

    weatherEffects.innerHTML = "";

    if (
        type !== "rainy" &&
        type !== "stormy" &&
        type !== "snowy"
    ) {
        return;
    }


    const count =
        type === "snowy"
            ? 35
            : 45;


    for (
        let i = 0;
        i < count;
        i++
    ) {

        const element =
            document.createElement("div");


        if (type === "snowy") {

            element.className =
                "snowflake";

            element.textContent =
                "•";

            element.style.left =
                `${Math.random() * 100}%`;

            element.style.fontSize =
                `${Math.random() * 10 + 7}px`;

            element.style.animationDuration =
                `${Math.random() * 4 + 4}s`;

            element.style.animationDelay =
                `${Math.random() * 4}s`;

        } else {

            element.className =
                "raindrop";

            element.style.left =
                `${Math.random() * 100}%`;

            element.style.animationDuration =
                `${Math.random() * 0.7 + 0.6}s`;

            element.style.animationDelay =
                `${Math.random() * 2}s`;

        }


        weatherEffects.appendChild(
            element
        );
    }
}


/* =========================
   RECENT HISTORY
========================= */

let recentWeather = [];


function addToRecent(weatherKey) {

    recentWeather =
        recentWeather.filter(
            item => item !== weatherKey
        );

    recentWeather.unshift(
        weatherKey
    );

    recentWeather =
        recentWeather.slice(0, 4);


    renderRecent();
}


function renderRecent() {

    if (
        recentWeather.length === 0
    ) {

        recentList.innerHTML = `
            <p class="empty-recent">
                Select a weather condition to create history.
            </p>
        `;

        return;
    }


    recentList.innerHTML = "";


    recentWeather.forEach(
        weatherKey => {

            const weather =
                weatherData[weatherKey];


            const item =
                document.createElement("div");

            item.className =
                "recent-item";

            item.innerHTML = `
                <span>
                    ${weather.icon}
                </span>

                <span>
                    ${weather.title}
                </span>
            `;

            recentList.appendChild(
                item
            );

        }
    );
}


/* =========================
   DROPDOWN
========================= */

weatherSelect.addEventListener(
    "change",
    function () {

        updateWeather(
            this.value
        );

    }
);


/* =========================
   QUICK BUTTONS
========================= */

quickButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            const weather =
                this.dataset.weather;

            weatherSelect.value =
                weather;

            updateWeather(
                weather
            );

        }
    );

});


/* =========================
   DARK MODE
========================= */

themeToggle.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "dark"
        );

        const isDark =
            document.body.classList.contains(
                "dark"
            );

        this.textContent =
            isDark
                ? "☀️"
                : "🌙";

    }
);


/* =========================
   DATE
========================= */

function updateDate() {

    const now =
        new Date();

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];


    document.getElementById(
        "currentDay"
    ).textContent =
        days[now.getDay()];


    document.getElementById(
        "currentDate"
    ).textContent =
        `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
}


/* =========================
   INITIALIZE
========================= */

renderForecast();

renderRecent();

updateDate();