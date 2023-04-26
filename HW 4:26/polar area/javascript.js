var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: [
              'White',
              'Black or African American',
              'Multiple',
              'Native American or Alaska Native',
              'Asian'
            ],
            datasets: [{
              label: 'Race of Hate Crime Offenders in Arkansas 2000-2020',
              data: [464, 192, 16, 5, 2],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)'
              ]
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Race of Hate Crime Offenders in Arkansas 2000-2020'
              }
            }
          }
        });