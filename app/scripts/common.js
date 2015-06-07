$(document).ready(function () {
	$('.chart').easyPieChart({
		scaleColor: false,
		trackColor: '#e5e5e5',
		barColor: '#3da8d0',
		lineWidth: 6,
		lineCap: 'butt',
		size: 110
	});
	
	var date = new Date();
	var sec_chart, min_chart, hour_chart, day_chart;

	var chartind = function() {

	var date_new = new Date();

	if (date != date_new) {
		date = new Date();
		
		var mlsec = date.getMilliseconds();
		var sec = date.getSeconds();
		var min = date.getMinutes();
		var hour = date.getHours();

		sec_chart = parseInt(100 / 1000 * mlsec);
		min_chart = parseInt(100 / 60 * sec);
		hour_chart = parseInt(100 / 60 * min);
		day_chart = parseInt(100 / 24 * hour);

		$('#sec').data('easyPieChart').update(sec_chart);
		$('#min').data('easyPieChart').update(min_chart);
		$('#hour').data('easyPieChart').update(hour_chart);
		$('#day').data('easyPieChart').update(day_chart);
	}
	
	setTimeout(chartind, 100);
	};
	
chartind();
});