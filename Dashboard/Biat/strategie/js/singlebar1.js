var chartData = {
      labels: ['2019 - 08', '2019 - 07', '2019 - 06', '2019 - 05', '2019 - 04', '2019 - 03', '2019 - 02', '2019 - 01'],
      datasets: [{
        type: 'line',
        label: 'Availability',
        borderColor: '#2e7c16',
        borderWidth: 2,
        fill: false,
        data: [-260, -190, -188, -217, -212, -500, -316, -246]
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
   