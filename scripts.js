// Constants
const API_URL = '';

// goals-chart
// createResultsChart takes a targetID of a canvas element and 
// loads the bar chart using the results stored in results and
// goals.
// @param targetID: ID of the canvas element to render in
// @param results: array of the results
// @param goals: array of the goals
function createResultsChart(targetID, results, goals) {
    const ctx = document.getElementById(targetID).getContext('2d');
    const resultsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Goal',
                data: goals,
                backgroundColor: [
                    'rgba(255,99,132,0.2)'
                ],
                borderColor: [
                    'rgb(255,99,132,1)'
                ],
                borderWidth: 1
            },{
                label: 'Actual',
                data: results,
                backgroundColor: [
                    'rgba(75,192,192,0.2)'
                ],
                borderColor: [
                    'rgb(75,192,192,1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// fillProfileInformation fills the information for the user's profile
// on the profile page.
// @param name: name of the user
// @param age: age of the user
// @param weight: weight in lbs of the user
// @param height: height of the user in inches
// @param imageURL: URL of the profile image for the user
function fillProfileInformation(name, age, weight, height, imageURL) {
    document.getElementById('name').innerText = name;
    document.getElementById('age').innerText = age;
    document.getElementById('weight').innerText = weight;
    document.getElementById('height').innerText = height;
    document.getElementById('profile-image').src = imageURL;
}

// toggleLoading hides the contentID and displays the loading spinner on the page.
// @param isLoading: bool indicating if loading is occuring
// @param loadingSpinnerID: ID of the loading spinner element
// @param contentID: ID of the content to hide during load
function toggleLoading(isLoading, loadingSpinnerID = 'loading-spinner', contentID = 'content') {
    const spinner = document.getElementById(loadingSpinnerID);
    const content = document.getElementById(contentID);
    if (isLoading) {
        content.classList.add('d-none'); // Hide the content until loaded
        spinner.classList.remove('d-none'); // Show the spinner until loaded
    } else {
        content.classList.remove('d-none'); // Show loaded content
        spinner.classList.add('d-none'); // Hide spinner from loaded content
    }
}

// calculateBMI calcualtes the BMI of a weight and height
// @param weight: number weight in pounds
// @param height: number height in inches
function calculateBMI(weight, height) {
    const bmi = 703 * weight / Math.pow(height, 2)
    return Math.round(bmi * 100) / 100 // Trim to 2 decimal places
}

// initProfilePage initializes dynamic data for the profile page
function initProfilePage() {
    // Loading page
    toggleLoading(true);

    // Fill in the profile information
    fillProfileInformation('Person A', '154', '294 lb', '12\'4"', 'images/sample-image.webp');

    // Create the results graph
    goals = [400, 390, 380, 370, 360, 350, 340, 330, 320, 310, 300, 290];
    results = [405, 385, 375, 342, 317, 342, 323, 312, 0, 0, 0, 0];
    createResultsChart('goals-chart', results.map(x => calculateBMI(x, 148)), goals.map(x => calculateBMI(x, 148)));

    // Page loaded
    toggleLoading(false);
}

function submitRegistrationForm(e) {
    e.preventDefault();
    const REGISTRATION_FORM_ID = 'registration-form';
    const registrationForm = document.getElementById(REGISTRATION_FORM_ID);
    const data = new FormData(registrationForm);

    console.log(data);
    // TODO add POST
    
}

function initRegisterPage() {
    const REGISTRATION_FORM_ID = 'registration-form';
    const registrationForm = document.getElementById(REGISTRATION_FORM_ID);
    registrationForm.addEventListener('submit', submitRegistrationForm);
}

//created function for Username using this.value
function Username(value)
{
//made an if/else condition depending on length of letters
	if(value.length >= 5)
   {
       document.getElementsByClassName("errorUsername")[0].style="display:none;";
   }else
   {
       document.getElementsByClassName("errorUsername")[0].style="display:block;";
   }
}
//created function for Age using this.value
function Password(value)
{
//made an if/else condition depending if a real number is used
	if(value.length >=5)
	{
       document.getElementsByClassName("errorPassword")[0].style="display:none;";
      
	}else
	{
       document.getElementsByClassName("errorPassword")[0].style="display:block;";
	}
}

function Foodname(value)
{
//made an if/else condition depending on length of letterss
	if(value.length >= 2)
   {
       document.getElementsByClassName("errorFoodname")[0].style="display:none;";
   }else
   {
       document.getElementsByClassName("errorFoodname")[0].style="display:block;";
   }
}

