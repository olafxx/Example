(function( $ ){

  $.fn.commentsScroll = function() {
  
 
		return this.each(function() {
 		
					var that = $(this);						
				 
					var item = that.context.className;
					var count_items = that.find("."+item+"__item").length;
					
					if(count_items<2) return;

		  
					var content = {
						
						animate : true,
						duration : 500,
						obj : that.find("."+item+"__move"),
						
						widthItem : function(option){
							   
							   var option = option == undefined ? "first-child" : option;
							   
							   return this.obj.find("."+item+"__item:"+option).width()+parseInt(this.obj.find("."+item+"__item:"+option).css("padding-right"));		
							
						},
						heightItem : function(option){
							
							   var option = option == undefined ? "first-child" : option;

							   return this.obj.find("."+item+"__item:"+option).height();		
							
						},
						
						moveRight : function(){ 
						
							 var that = this;					 
							 if(!that.animate) return;
							 
							 
							 that.animate = false;
		 
							 that.obj.animate({"left":-that.widthItem("first-child")},this.duration,function(){  
																						
								  that.animate = true; 
								  that.obj.find("."+item+"__item:first-child").appendTo(that.obj);
								  that.obj.css({"left":0});

							 });
							 
							 that.obj.closest("."+item+"__overflow").animate({"height":this.obj.find("."+item+"__item").eq(1).height()},this.duration);
							 
						},	
						
						moveLeft : function(){ 
							
							 var that = this;					 
							 if(!that.animate) return;
							 
							 
							 that.animate = false; 
							
							 that.obj.find("."+item+"__item:last-child").prependTo(that.obj);
							 that.obj.css({"left":-that.widthItem("last-child")});
							 
							 that.obj.closest(".comments__overflow").animate({"height":that.heightItem("first-child")},this.duration);
							 
							 that.obj.animate({"left":0},this.duration,function(){  
																						
								  that.animate = true; 
		 
							 });
							   
						}				
						
					}
					
					
					
					
					
					that.find("."+item+"__overflow").css({"height":content.heightItem("first-child")});
																				   
					that.append('<span class="left"></span><span class="right"></span>');
					
					that.on("click",".left",function(){
												 
						 content.moveLeft();
													 
					})

					that.on("click",".right",function(){
												 
						 content.moveRight();
													 
					})

					
				
       });

  };
})( jQuery );