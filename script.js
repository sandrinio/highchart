Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        align: 'left',
        text: 'Balance Over Time Graph'
    },
    subtitle: {
        text:
            'Selected date'
    },
    xAxis: {
        categories: ['USA', 'China', 'Brazil', 'EU', 'Argentina', 'India'],
        crosshair: true,
        reversed: true,
        accessibility: {
            description: 'Time Period'
        }
    },
    yAxis: {
        opposite: true,
    },

    plotOptions: {
        column: {
            pointPadding: 0,
            borderWidth: 0
        }
    },

    series: [
        {
            data: [387749, 280000, 129000, 64300, 54000, 34300]
        }
    ]
       
});
