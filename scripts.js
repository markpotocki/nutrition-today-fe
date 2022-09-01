
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

// initProfilePage initializes dynamic data for the profile page
function initProfilePage() {
    // Create the results graph
    goals = [400, 390, 380, 370, 360, 350, 340, 330, 320, 310, 300, 290];
    results = [405, 385, 375, 342, 317, 342, 323, 312, 272, 298, 293, 287];
    createResultsChart('goals-chart', results, goals);
}