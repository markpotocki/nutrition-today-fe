// Constants
const API_URL = '';
const STORAGE_STATE_KEY = 'auth-state';
const STORAGE_PKCE_KEY = 'auth-pkce';

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
            }, {
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

function createResultsRadarGraph(targetID, data) {
    const config = {
        type: 'radar',
        data: data,
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            }
        }
    };

    const ctx = document.getElementById(targetID).getContext('2d');
    const chart = new Chart(ctx, config);
}

// initProfilePage initializes dynamic data for the profile page
function initProfilePage() {
    // Loading page
    toggleLoading(true);

    // Fill in the profile information
    fillProfileInformation('Person A', '154', '294 lb', "12'4", 'images/sample-image.webp');

    // Create the results graph
    goals = [400, 390, 380, 370, 360, 350, 340, 330, 320, 310, 300, 290];
    results = [405, 385, 375, 342, 317, 342, 323, 312, 0, 0, 0, 0];
    createResultsChart('goals-chart', results.map(x => calculateBMI(x, 148)), goals.map(x => calculateBMI(x, 148)));

    // Page loaded
    toggleLoading(false);
}


function initResultsPage() {
    const DAILY_RESULTS_GRAPH_OUT_ID = 'daily-result-chart';
    const WEEKLY_RESULTS_GRAPH_OUT_ID = 'weekly-result-chart';
    toggleLoading(true);

    // Results need to be normalized by the goal so the values aren't drastically different
    // from eachother. Ie calories of 1500 on a goal of 2000 should be graphed as .75 rather
    // than 1500.
    dailyResultsGraph = {
        labels: [
            'Calories',
            'Protein',
            'Carbohydrates',
            'Fats',
            'Water'
        ],
        datasets: [{
            label: 'Actual',
            data: [.75, 1.2, 1.1, .64, .3],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
            label: 'Goal',
            data: [1, 1, 1, 1, 1],
            fill: true,
            backgroundColor: 'rgba(0, 253, 253, 0.2)',
            borderColor: 'rgb(0, 253, 253)',
            pointBackgroundColor: 'rgb(0, 253, 253)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(0, 253, 253)'
        }]
    };

    // Weekly Result chart
    weeklyResultsGraph = {
        labels: [
            'Calories',
            'Protein',
            'Carbohydrates',
            'Fats',
            'Water'
        ],
        datasets: [{
            label: 'Actual',
            data: [1.2, .83, .94, 1.2, .3],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
            label: 'Goal',
            data: [1, 1, 1, 1, 1],
            fill: true,
            backgroundColor: 'rgba(0, 253, 253, 0.2)',
            borderColor: 'rgb(0, 253, 253)',
            pointBackgroundColor: 'rgb(0, 253, 253)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(0, 253, 253)'
        }]
    };

    createResultsRadarGraph(DAILY_RESULTS_GRAPH_OUT_ID, dailyResultsGraph);
    createResultsRadarGraph(WEEKLY_RESULTS_GRAPH_OUT_ID, weeklyResultsGraph);

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
       document.getElementsByClassName('errorUsername')[0].style='display:none;';
   }else
   {
       document.getElementsByClassName('errorUsername')[0].style='display:block;';
   }
}
//created function for Age using this.value
function Password(value)
{
//made an if/else condition depending if a real number is used
	if(value.length >=5)
	{
       document.getElementsByClassName('errorPassword')[0].style='display:none;';
      
	}else
	{
       document.getElementsByClassName('errorPassword')[0].style='display:block;';
	}
}

function Foodname(value)
{
//made an if/else condition depending on length of letterss
	if(value.length >= 2)
   {
       document.getElementsByClassName('errorFoodname')[0].style='display:none;';
   }else
   {
       document.getElementsByClassName('errorFoodname')[0].style='display:block;';
   }
}

// ** Authentication ** //
const oauthEndpoint = 'https://nutritiontoday.auth.us-east-2.amazoncognito.com'
const clientID = '1gfvsni539okobihuqfg6647jb';
const redirectURI = 'http://localhost:8080/callback.html';

async function redirectLogin() {
    // Generate state key
    const stateKeyLength = 32;
    const authState = btoa(createRandomKey(stateKeyLength));
    // Save State
    sessionStorage.setItem(STORAGE_STATE_KEY, authState);

    // RFC 7636 - Generate PKCE code
    const pkceKeyLength = 64; // Between 43 and 128
    const pkceVerifierCode = createRandomKey(pkceKeyLength);
    const encoder = new TextEncoder();
    const hash = await crypto.subtle.digest('SHA-256', encoder.encode(pkceVerifierCode));
    const pkceChallengeCode = urlBase64Encode(String.fromCharCode(...new Uint8Array(hash)));
    // Save PKCE
    sessionStorage.setItem(STORAGE_PKCE_KEY, pkceVerifierCode);

    // Redirect to the login page
    

    window.location = `${oauthEndpoint}/oauth2/authorize?response_type=code&client_id=${clientID}&redirect_uri=${redirectURI}&state=${authState}&code_challenge=${pkceChallengeCode}&code_challenge_method=S256`;
}

function urlBase64Encode(str) {
    return btoa(str).replaceAll('+', '-').replaceAll('/', '_').replaceAll('=', '');
}

function createRandomKey(length) {
    const randomNumbers = new Uint8Array(length);
    crypto.getRandomValues(randomNumbers);
    return urlBase64Encode(String.fromCharCode(...new Uint8Array(randomNumbers)));
}

async function handleOauthCallback() {
    const params = new URLSearchParams(window.location.search);

    // If param code is present, need to trade for token
    const code = params.get('code');
    const state = params.get('state');
    await fetchToken(code, state);
}

function fetchToken(code, state) {
    // State must match or fail flow
    if (sessionStorage.getItem(STORAGE_STATE_KEY) === null || 
        sessionStorage.getItem(STORAGE_STATE_KEY) != state) {
        failAuthenticationFlow('state_change', 'state from server did not match expected');
    }

    // Retrieve code verifier
    codeVerifier = sessionStorage.getItem(STORAGE_PKCE_KEY);
    if (codeVerifier === null) {
        failAuthenticationFlow('no_verifier', 'no code verifier is available to send');
    }

    // Fetch the token
    request_url = `${oauthEndpoint}/oauth2/token`;
    const data = new URLSearchParams();
    data.append('grant_type', 'authorization_code');
    data.append('client_id', clientID);
    data.append('redirect_uri', redirectURI);
    data.append('code', code);
    data.append('code_verifier', codeVerifier);
    return fetch(request_url, {
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.json())
    .then(tokens => {
        saveIDToken(tokens['id_token']);
        saveAccessToken(tokens['access_token']);
        saveRefreshToken(tokens['refresh_token'])
    })
    .catch(err => failAuthenticationFlow('token_fetch', err))
}

function refreshAuthentication() {
    
}

const A_TOKEN_STORAGE_KEY = 'access';
const R_TOKEN_STORAGE_KEY = 'refresh';
const I_TOKEN_STORAGE_KEY = 'id';

function saveIDToken(token) {
    localStorage.setItem(I_TOKEN_STORAGE_KEY, token);
}

function getIDToken() {
    return localStorage.getItem(I_TOKEN_STORAGE_KEY);
}

function saveAccessToken(token) {
    localStorage.setItem(A_TOKEN_STORAGE_KEY, token);
}

function getAccessToken() {
    return localStorage.getItem(A_TOKEN_STORAGE_KEY);
}

function saveRefreshToken(token) {
    localStorage.setItem(R_TOKEN_STORAGE_KEY, token);
}

function getRefreshToken() {
    return localStorage.getItem(R_TOKEN_STORAGE_KEY);
}

function failAuthenticationFlow(status, message) {
    console.error(message);
    window.location = `/login.html?error=${status}`
}


