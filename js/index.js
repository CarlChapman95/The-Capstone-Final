const API_Key = "IutftG3Aph5/vSlfraZSbw==gageCUIXswz2MjjH";
let bmi = 0;
const exerciseCalories = {
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0,
    sunday: 0
};

function getCaloriesBurned(activity) {
$.ajax({
    method: 'GET',
    url: url: '/api/caloriesburned?activity=' + activity,
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
        const resultsDiv = document.getElementById('Monday_Result');

        if (result.length > 0) {
  let output = '';

  result.forEach(data => {
    output += `
      <div class="result-entry">
        <p><strong>Activity:</strong> ${data.name}</p>
        <p><strong>Calories burned per hour:</strong> ${data.calories_per_hour}</p>
        <p><strong>Duration (mins):</strong> ${data.duration_minutes}</p>
        <p><strong>Total calories burned:</strong> ${data.total_calories}</p>
        <hr />
      </div>
    `;
  });

  resultsDiv.innerHTML = output;
} else {
  resultsDiv.innerHTML = '<p>No data found for that activity.</p>';
}
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
        document.getElementById('Monday_Result').innerHTML = '<p>Failed to load.</p>';
    }
});
}



document.getElementById('calorie-form').addEventListener('submit', function (e) {
    e.preventDefault();

    var weight = parseFloat(document.getElementById('weight').value);
    weight = weight / 2.20462;
    var height = parseFloat(document.getElementById('height').value);
    height = height * 2.54;
    var age = parseFloat(document.getElementById('age').value);
    var sex = document.getElementById('sex').value;

    if(!weight || !height || !age || !sex) {
        document.getElementById('result').innerText = "You need to fill out all forms.";
        return;
    }

    if (sex === 'male') {
        bmi = 664.7 + (13.75 * weight) + (1.85 * height) -(4.676 * age);
    }else {
        bmi = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age)
    }
    document.getElementById('result').innerText = `Estimated daily calories: ${Math.round(bmi)} kcal`;
    var Monday_Cal = bmi;
    var Tuesday_Cal = bmi;
    var Wednesday_Cal = bmi;
    var Thursday_Cal = bmi;
    var Friday_Cal = bmi;
    var Saturday_Cal = bmi;
    var Sunday_Cal = bmi;    
    // document.getElementById('Monday_Cal').innerText = ` ${Math.round(Monday_Cal)} kcal`;
    // document.getElementById('Tuesday_Cal').innerText = ` ${Math.round(Tuesday_Cal)} kcal`;
    // document.getElementById('Wednesday_Cal').innerText = ` ${Math.round(Wednesday_Cal)} kcal`;
    // document.getElementById('Thursday_Cal').innerText = ` ${Math.round(Thursday_Cal)} kcal`;
    // document.getElementById('Friday_Cal').innerText = ` ${Math.round(Friday_Cal)} kcal`;
    // document.getElementById('Saturday_Cal').innerText = ` ${Math.round(Saturday_Cal)} kcal`;
    // document.getElementById('Sunday_Cal').innerText = ` ${Math.round(Sunday_Cal)} kcal`;
});

document.getElementById('Monday_Select').addEventListener('change', function () {
    const activity = this.value;
    if (activity){
        getCaloriesBurned(activity);
    }
});



function addCalories(day) {
    const input = document.getElementById(`${day}-input`);
    const added = parseInt(input.value, 10);

    if(isNaN(added)) {
        alert("You need to enter a valid number.");
        return;
    }
    if(bmi > 0) {
    const newTotal = Math.round(bmi + added);
    document.getElementById(`${day}-total`).innerHTML = `<strong>Total Cal's for the day is ${newTotal} kcal</strong>`;
    } else {
        document.getElementById(`${day}-total`).textContent = `You need to submit the BMR form so we can calculate your total calories.`;
    }
}