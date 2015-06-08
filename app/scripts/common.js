//$(document).ready(function () {
//	$('.chart').easyPieChart({
//		scaleColor: false,
//		trackColor: '#e5e5e5',
//		barColor: '#3da8d0',
//		lineWidth: 6,
//		lineCap: 'butt',
//		size: 110
//	});
//	
//	var date = new Date();
//	var sec_chart, min_chart, hour_chart, day_chart;

//	var chartind = function() {
//
//	var date_new = new Date();
//
//	if (date != date_new) {
//		date = new Date();
//		
//		var mlsec = date.getMilliseconds();
//		var sec = date.getSeconds();
//		var min = date.getMinutes();
//		var hour = date.getHours();
//
//		sec_chart = parseInt(100 / 1000 * mlsec);
//		min_chart = parseInt(100 / 60 * sec);
//		hour_chart = parseInt(100 / 60 * min);
//		day_chart = parseInt(100 / 24 * hour);
//
//		$('#sec').data('easyPieChart').update(sec_chart);
//		$('#min').data('easyPieChart').update(min_chart);
//		$('#hour').data('easyPieChart').update(hour_chart);
//		$('#day').data('easyPieChart').update(day_chart);
//	}
//	
//	setTimeout(chartind, 100);
//	};
//	
//chartind();
//});


function clock(){
  //var pies = document.querySelectorAll('.pie');
  
	var charts = document.querySelectorAll('.chart');
	
  var now = new Date();
  var mlsec = now.getMilliseconds();
  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr  = now.getHours();
  hr = hr>=12 ? hr-12 : hr;
  
  for (var i = 0; i < charts.length; i++) {
    var chart = charts[i];
	var pie = chart.querySelector('canvas');
  
  var ctx = pie.getContext('2d');
    
  ctx.save();
  ctx.clearRect(0,0,150,150);
  ctx.translate(75,75);
  ctx.scale(0.4,0.4);
  ctx.rotate(-Math.PI/2);
  
  var time;
  if(chart.classList.contains('chart_day')) {
    time = hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec;
  } else if(chart.classList.contains('chart_hour')) {
    time = (Math.PI/30)*min + (Math.PI/1800)*sec;
  } else if(chart.classList.contains('chart_min')) {
    time = sec * Math.PI/30;
  } else {
    time = (mlsec/10) * Math.PI/30;
  }
  
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = '#325FA2';
  ctx.arc(0,0,142,0,time,false);
  ctx.stroke();

  ctx.restore();
  
  };
  
  window.requestAnimationFrame(clock);
  
};

clock();