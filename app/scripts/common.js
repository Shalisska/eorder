$(document).ready(function(){ 
	$("#action-order_item a").click(function(e){
		e.preventDefault();
		$(this).tab('show');
	});
});
