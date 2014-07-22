(function( $ ){

  $.fn.miniGallery = function() {
		 
		return this.each(function() {
		
			var that = $(this);						
		 
			var item = that.context.className;
			var big_img = that.find("."+item+"__big_img img");	
			var count_items = that.find("."+item+"__move li").length;
			
			if(count_items<3) return;

  
			var content = {
				
				ulrBigImg : "big",
				animate : true,
				duration : 500,
				obj : that.find("."+item+"__move"),
				
				widthItem : function(option){
					   
					   var option = option == undefined ? "first-child" : option;
					   
					   return this.obj.find("li:"+option).width()+parseInt(this.obj.find("li:"+option).css("padding-right"));		
					
				}, 
				
				moveRight : function(){ 
				
                     var that = this;					 
                     if(!that.animate) return;
					 
					 
					 that.animate = false;
 
					 that.obj.animate({"left":-that.widthItem("first-child")},this.duration,function(){  
																				
						  that.animate = true; 
						  that.obj.find("li:first-child").appendTo(that.obj.find("ul"));
						  that.obj.css({"left":0});

					 });
					 
 					 
				},	
				
				moveLeft : function(){ 
					
                     var that = this;					 
                     if(!that.animate) return;
					 
					 
					 that.animate = false; 
  					
					 that.obj.find("li:last-child").prependTo(that.obj.find("ul"));
					 that.obj.css({"left":-that.widthItem("last-child")});
					 
 					 
					 that.obj.animate({"left":0},this.duration,function(){  
																				
						  that.animate = true; 
 
					 });
					   
				},
				
				prevImg :  function(onLink){ 
				
                     var that = this;
					 that.obj.find("a").removeClass("current")
					 onLink.addClass("current");


                     big_img.attr({"src":onLink.attr("href")});
					 
					 var urlBigImg = onLink.attr("href");
					
					 var after = urlBigImg.replace(/.*\//ig,"");					 
					 var before = urlBigImg.replace(after,"");					 
					 urlBigImg = before +this.ulrBigImg+"/"+after;
 
                     big_img.parent("a").attr({"href":urlBigImg});
 				   
				}
				
			}
			
			
			
			
 			
 																		   
			that.find("."+item+"__prev").append('<span class="left"></span><span class="right"></span>');
			
			that.on("click",".left",function(){
										 
		         content.moveLeft();
 											 
			})

			that.on("click",".right",function(){
										 
		         content.moveRight();
 											 
			})


			that.on("click","ul a",function(){

				 content.prevImg($(this));
				 return false;
 											 
			})			
 		
  

       });

  };
})( jQuery );