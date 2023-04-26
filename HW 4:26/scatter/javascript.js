var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#3cba9f",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }
              , { 
                data: [
                {x: 68.3, y: 5878},
                ],
                label: "Idonesia",
                borderColor: "#800080",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, {

                data: [
                    {x: 71.9, y: 11461},
                    ],
                    label: "Brazil",
                    borderColor: "#008080",
                    backgroundColor:"rgb(255,165,0,0.1)",
                    borderWidth:2,
              } , { 
                data: [
                {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "#FF0000",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, {

                data: [
                    {x: 62.6, y: 3366},
                    ],
                    label: "Pakistan",
                    borderColor: "#0000FF",
                    backgroundColor:"rgb(255,165,0,0.1)",
                    borderWidth:2,
              } , { 
                data: [
                {x: 65.8, y: 1632},
                ],
                label: "Bangladesh",
                borderColor: "#FF00FF",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, {

                data: [
                    {x: 81.1, y: 32193},
                    ],
                    label: "Japan",
                    borderColor: "#808000",
                    backgroundColor:"rgb(255,165,0,0.1)",
                    borderWidth:2,
              }
            ]
          },
          options: {
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GPD per Capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life Expectancy'
                  }
              }
            }
          }
        });