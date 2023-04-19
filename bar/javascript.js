var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['United States', 'Saudi Arabia', 'Canada', 'Germany', 'Italy'],
        datasets: [{
            label: 'Countries',
            data: [45986, 37531, 37314, 36953, 36073],
            backgroundColor: [
                '#0000cd'
            ]
        },
    
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'GDP Per Capita By Region',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'The United States took the top spot for GDP per capita, surpassing the second top country, Saudi Arabia by 8,455.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});