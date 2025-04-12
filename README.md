## 🌦️ Weather Dashboard

This is a simple, clean weather dashboard that fetches real-time weather data using the **OpenWeather API**.  
It displays the weather for any city, town, or village in India with a responsive and user-friendly interface.

---

### 📁 Project Structure

The project contains three main files and a folder for assets:

1. **`index.html`**
   - Contains the structure of the webpage.
   - Connected to `style.css` for styling and `app.js` for logic.

2. **`style.css`**
   - Handles all the styling and design aspects of the webpage.

3. **`app.js`**
   - Contains the JavaScript logic for fetching and displaying weather data.

4. **`/assets/`**
   - Contains all image and icon assets used in the project.

---

### 🔑 How to Get and Use the OpenWeather API Key

Follow these steps to get your own API key and connect it to the project:

#### 📌 Step-by-Step Guide:

1. **Create an Account**  
   Go to [https://home.openweathermap.org/users/sign_up](https://home.openweathermap.org/users/sign_up) and sign up for a free account.

2. **Generate an API Key**
   - After logging in, navigate to the **API keys** section in your account.
   - Click **"Create Key"** and give it a name.
   - Copy the generated API key.

3. **Add the API Key in Your Code**
   - Open the `app.js` file in this project.
   - Find the line where the API key is defined:
     ```js
     const apiKey = "YOUR_API_KEY_HERE";
     ```
   - Replace `"YOUR_API_KEY_HERE"` with your actual API key:
     ```js
     const apiKey = "abc123yourapikey";
     ```

4. **Save the file** and open `index.html` in your browser to start using the weather dashboard.

