var chartData = {
      labels: ['2020 - 01', '2020 - 02', '2020 - 03', '2020 - 04', '2020 - 05', '2020 - 06', '2020 - 07', '2020 - 08', '2020 - 09', '2020 - 10','2020 - 11', '2020 - 12'],
      datasets: [{
        type: 'line',
        label: 'Availability',
        borderColor: '#2e7c16',
        borderWidth: 2,
        fill: false,
        data: [-260, -190, -188, -217, -212, -500, -316, -246, -246, -246, -246, -246]
      }]

    };

   
      var ctx = document.getElementById('Singlebar').getContext('2d');
      ctx.height = 50;
      window.myMixedChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
			    plugins:{
  labels: {
    render: 'label'
  }
},
			tooltips: {
        enabled: true,
		titleAlign : 'left',
		bodyAlign : 'left',
		footerAlign : 'left',
		titleMarginBottom : 1,
        bodySpacing : 1,
        yPadding : 2,
		mode: 'nearest'
    },

          legend: {
            display: false
          },
          
          title: {
            display: true,
            text: 'Availability'
          },
          
          scales: {
						xAxes: [{
							stacked: true,
							display : false
						}],
						yAxes: [{
							stacked: true
						}]
					},
					responsive: true,
          maintainAspectRatio: false
        }
      });
   