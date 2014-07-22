(function($) {

jQuery.extend(jQuery.easing,{
    easeOutExpo: function (x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    }
});

$.fn.bSlider = function(settings)
{
	settings = $.extend({}, $.fn.bSlider.defaults, settings);
 
	this.each(
		function()
		{

			var self = $(this);
			
			var slider_content = self.find("ul");
			var width_frame = self.find("ul li:first").width();
			var animate = true, link_num=0;
			var speed = 500;
			
					var fswitch = function(){
						
						$(".b-slider__nav span").removeClass("current");					 
						$(".b-slider__nav span").eq(link_num).addClass("current");
						
					}
					

					var scrollRight = function(num){
						
						width_frame = self.find("ul li:first").width();
						
						animate = false;
						if(num==undefined) num=1;
						fswitch();

						for(var i=0; i<num; i++){
 						    self.find("li:last").prependTo(slider_content);
						}		
						
 
						slider_content.css("margin-left", -width_frame*num).animate({
							'margin-left': 0
						}, speed, 'easeOutExpo', function () {

							animate = true;		
						});
							
						clearInterval(sInterval);
						sInterval = setInterval(autoSlide,delay);									

					}
			  

					var scrollLeft = function(num){
						
						width_frame = self.find("ul li:first").width();
						
						animate = false;						
						if(num==undefined) num=1;
						fswitch();

 
						slider_content.animate({
							'margin-left': -width_frame*num
						}, speed, 'easeOutExpo', function () {
                         
							for(var i=0; i<num; i++){
								self.find("li:first").appendTo(slider_content);
							}
							
							slider_content.css("margin-left", "0");
						    
							animate = true;	
							
						});
							
						    clearInterval(sInterval);
							sInterval = setInterval(autoSlide,delay);		

					}
					 
					
						self.on("mousedown selectstart touchstart",".b-slider__nav span", function (e) {
 
                            if(!animate) return false;
							
							link_num = $(this).index();
							current_num = self.find(".b-slider__nav span.current").index()
							
							if(link_num>current_num)
							     scrollLeft(link_num-current_num)
							
							if(link_num<current_num)
							     scrollRight(current_num-link_num)
							
							fswitch();
 
 
							return false;
							
						});	
					
 
			   
				  
				   if(self.find("li").length>1) {
				
						self.mousewheel(function(objEvent, intDelta){ 
						
							if (intDelta < 0 && animate) {
						        link_num = $(".b-slider__nav span.current").index()+1<$(".b-slider__nav span").length ? $(".b-slider__nav span.current").index()+1 : 0;
							    scrollLeft();
							}	
							if (intDelta > 0 && animate) {
						        link_num = $(".b-slider__nav span.current").index()-1>=0 ? $(".b-slider__nav span.current").index()-1 : $(".b-slider__nav span").length-1;
							    scrollRight();
							}	
							
							return false;
						});
						
				   
						
						var switchs="<span class=\"current\">&bull;</span>";
 
                        for(var i=1; i<self.find("li").length; i++) 						   
						    switchs += "<span>&bull;</span>";
												
					    $("<div class=\"b-slider__nav\">"+switchs+"</div>").prependTo(self); 
						
 					 
					 
				   }
				   
						  var startX = 0;
						  var marker = true;
						  var koef = 20;
					  
						  self.on("touchstart",function(event){
						
								startX = event.originalEvent.touches[0].clientX;				
								marker = true; 				
								 
								self.on("touchmove",function(e){
							  
										var posX = e.originalEvent.touches[0].clientX;

										if(startX-posX>0 && Math.abs(startX-posX)>koef && marker){
									
										   link_num = $(".b-slider__nav span.current").index()+1<$(".b-slider__nav span").length ? $(".b-slider__nav span.current").index()+1 : 0;

										   scrollLeft();
											
										   marker = false;
										   
										   return false;

										}else if(startX-posX<0 && Math.abs(startX-posX)>koef && marker){
										   
										   link_num = $(".b-slider__nav span.current").index()-1>=0 ? $(".b-slider__nav span.current").index()-1 : $(".b-slider__nav span").length-1;

										   scrollRight();
										   
										   marker = false;
										   
											return false;
											
										}
										
										
										  
								}) 	
									
								self.on("touchend",function(event){
										  
								     link_num = $(".b-slider__nav span.current").index()-1>=0 ? $(".b-slider__nav span.current").index()-1 : $(".b-slider__nav span").length-1;
									 
									 self.unbind("touchmove");
									   
								})  
								
						 })

						var autoSlide = function(){
						
						    link_num = $(".b-slider__nav span.current").index()+1<$(".b-slider__nav span").length ? $(".b-slider__nav span.current").index()+1 : 0;
														   
							$(".b-slider__nav span").eq(link_num).mousedown();
						
						};
						
						var delay = 5000;
						
						var sInterval = setInterval(autoSlide,delay);		
									   
				   
				   
				   
				   
				   
				   
				   
				   
				   
				   
				   
				   
				   

                   $(window).resize(function(){
				      self.find("li").css({"width":self.width()}); 				   
				   })				   
	  
				      self.find("li").css({"width":self.width()}); 				   
			 
		}
	)
};


$.fn.bSlider.defaults = {};



})(jQuery);