# Personal-Calorie-Tracker

Overview:

A Code: You capstone project utilizing 3rd party API's while also highlighting HTML, CSS, and JavaScript abilities.

## Project Overview:

This project was designed to help those looking to track calories in order to lose weight. By calculating BMR, you are able to get your daily calories at rest, but what if you are exercising as well? This application lets you look up exercises and their calorie burn per hour to help you find that out and calculates your daily updated calorie total when you're also exercising. Input the prompts, then look up the exercise you are going to do, then add the calories you calculate to burn on each given day and the application updates that BMR to suggest how many calories for that given day.




## Capstone Requirements Fulfilled


| Requirement | Implementation |
|-------------|----------------|
| **Retrieve data from a third-party API** | • Calories Burned API for Exercise Calories burned <br> |
| **Create a node.js web server using a modern framework such as Express.js** | • Built a robust Express server with multiple routes<br>• Implemented API endpoints for the exercise data. |
| **Use a regular expression to validate user input and either prevent the invalid input or inform the user about it** | • Each of the inputs will pop up a error message if nothing is inputed. Telling the user this must be filled out.<br>• |
| **Convert user input between two formats and display the result.** | • The inputs are taken in lbs, and inches. Formuala on the backend transfers to kg's & cm's.<br> |


## How to Download
1. Set up: Before installing the application, you'll need to obtain the API key from  https://api-ninjas.com/api/caloriesburned:

    . Copy the X-Api-Key located near the top right, has a copy button.


2. **Clone the repository using GIT**
   ```bash
   git clone https://github.com/CarlChapman95/The-Capstone-Final
   ```

3. **Navigate to the project directory**
   ```bash
   cd Capstone_Redux
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```
5. **Create environment variables file**
   Create a file named `.env` in the project root directory with the following content:

   ```env
    API_KEY= "Paste the X-API-KEY here"
   ```

6. **Start the server**
   ```bash
   npm run dev
   ```
   CTRL + Click on the server link. You will press CTRL + C while in the terminal to stop the server and continue Git usability.


## Usage: 

You will need to fill out all prompted inputs, but then it will calculate your BMR, and give suggestions for exercises you can use to calculate and submit your total calories burned for each day.

## Contributing:

Please submit any ideas to crabb.chap@gmail.com. Thank you! I look forward to seeing them!


## Credits:

First off, I would like to credit my great friend Arden Azar. He sat with me through much of the project guiding me as he is a seasoned web designer and very knowledgeable. ChatGPT was used for reference. Utilized to understand element's such as the API pull and how to structure the HTML for easy Flex utilization. Also for any general questions I had throughout the project.
