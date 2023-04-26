var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            
            {
                label: 'Maryland',
                data: [10, 13,	13,	10,	18, 13,	16,	18,	16, 18, 12, 9],
                fill: false,
                borderColor: '#d11141',
                backgroundColor: '#d11141',
                tension: 0.1}  
            
            ,{
            
            label: 'Washington DC',
            data: [1, 1, 0, 2, 0, 1, 0, 1, 0, 0, 0, 0],
            fill: false,
            borderColor: '#00b159',
            backgroundColor: '#00b159',
            tension: 0.1}

            ,{
            
                label: 'Virginia',
                data: [9, 17,	18,	16,	21, 20,	20,	22,	22, 17, 15, 3],
                fill: false,
                borderColor: '#0000ff',
                backgroundColor: '#0000ff',
                tension: 0.1}
        ]
    },
    options: {
        responsive: true,
        interaction: {
            intersect: false,
            mode: 'index',
          },
        plugins: {
            title: {
                display: true,
                text: 'Hate Crimes in MD, DC and VA in 2000',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Reported hate crimes in Maryland and Virginia seemed to follow a trend of growth at the beginning of the year and a decline at the end. Washington D.C. was the outlier of the border-sharing states and territory, with only seven reported hate crimes in 2000.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});