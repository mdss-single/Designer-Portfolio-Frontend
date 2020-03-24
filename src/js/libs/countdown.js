(function ( $ ) {
	function pad(n) {
		return (n < 10) ? ("0" + n) : n;
	}

	$.fn.showclock = function() {
		
		var currentDate=new Date();
		var fieldDate=$(this).data('countdown').split('-');
		var futureDate=new Date(fieldDate[0],fieldDate[1]-1,fieldDate[2]);
		var seconds=futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

		if(seconds<=0 || isNaN(seconds)){
			this.hide();
			return this;
		}

		var days=Math.floor(seconds/86400);
		seconds=seconds%86400;
		
		var hours=Math.floor(seconds/3600);
		seconds=seconds%3600;

		var minutes=Math.floor(seconds/60);
		seconds=Math.floor(seconds%60);
		
		var html="";

		if(days!=0){
			html+="<div class='coming-soon__count-item'>"
				html+="<div class='coming-soon__count-title'>Days</div>";
				html+="<div class='coming-soon__count-value'>"+pad(days)+"</div>";
			html+="</div>";
		}

		html+="<div class='coming-soon__count-item'>"
			html+="<div class='coming-soon__count-title'>Hours</div>";
			html+="<div class='coming-soon__count-value'>"+pad(hours)+"</div>";
		html+="</div>";

		html+="<div class='coming-soon__count-item'>"
			html+="<div class='coming-soon__count-title'>Minutes</div>";
			html+="<div class='coming-soon__count-value'>"+pad(minutes)+"</div>";
		html+="</div>";

		html+="<div class='coming-soon__count-item'>"
			html+="<div class='coming-soon__count-title'>Seconds</div>";
			html+="<div class='coming-soon__count-value'>"+pad(seconds)+"</div>";
		html+="</div>";

		this.html(html);
	};

	$.fn.countdown = function() {
		var el=$(this);
		el.showclock();
		setInterval(function(){
			el.showclock();	
		},1000);
		
	}

}(jQuery));