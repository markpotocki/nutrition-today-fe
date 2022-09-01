
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

function fillProfileInformation(name, age, weight, height, imageURL) {
    document.getElementById('name').innerText = name;
    document.getElementById('age').innerText = age;
    document.getElementById('weight').innerText = weight;
    document.getElementById('height').innerText = height;
    document.getElementById('profile-image').src = imageURL;
}

// toggleLoading hides the contentID and displays the loading spinner on the page.
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

// initProfilePage initializes dynamic data for the profile page
function initProfilePage() {
    // Loading page
    toggleLoading(true);

    // Fill in the profile information
    fillProfileInformation('Person A', '154', '294 lb', '12\'4"', 'images/sample-image.webp');

    // Create the results graph
    goals = [400, 390, 380, 370, 360, 350, 340, 330, 320, 310, 300, 290];
    results = [405, 385, 375, 342, 317, 342, 323, 312, 0, 0, 0, 0];
    createResultsChart('goals-chart', results, goals);

    // Page loaded
    toggleLoading(false);
}