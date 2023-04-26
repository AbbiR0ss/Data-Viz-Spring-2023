var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2010', '2011', '2012', '2013','2017','2018','2019','2020'],
        datasets: [{
            label: 'Hate Crimes Reported',
            data: [5, 4, 2, 2, 10, 3, 4 ,1],
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
                text: 'Hate Crimes Reported in Arkansas 2010-2020',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'From 2010 to 2020 there were 31 hate crimes reported in Arkansas, 10 of those were reported in 2017. Years with no reports were not included'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});