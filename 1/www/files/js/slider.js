(function( $ ){

  $.fn.slider = function() {
 	  
	      var self = $(this);		  
	  
		  var name = self.selector;
		  var btns = '<span class="'+name.substr(1)+'__prev"></span><span class="'+name.substr(1)+'__next"></span>';	
 		  var cells = self.closest(name).find(name+"__content");		
		
		  if(self.find(name+"__cell").length<1) return;
 
		  self.append(btns);
		  
		  
		  var prev = function(index){
		  
				 if (index<=0) return;		 
	 	 			         
				 index--;  		  
		  
				 self.find(name+"__cell").removeClass("current");
				 self.find(name+"__cell").eq(index).addClass("current");

				 changeArr(); 

		  }
	  
		  var next = function(index){
		  
				if (index>=cells.length) return;

				index++;  
				  
				self.find(name+"__cell").removeClass("current");
				self.find(name+"__cell").eq(index).addClass("current");		

				changeArr(); 				
				
		  }
		  
 	
		  self.on("mousedown selectstart",name+"__prev, "+name+"__next",function(event){
		
				  cells = $(this).closest(name).find(name+"__content");
				  var index = cells.find(".current").index();
					
					switch("."+$(this).attr("class")){	   
						
					   case name+"__prev":
						
						  prev(index);						  
						  break;		  
						   
					   case name+"__next":
					 
						  next(index);
						  break;	
						   
					}	   
 				   
 
				  event.preventDefault();
				  
				  return false;	
			})                 	  
	  
			
		  var startX = 0;
		  var marker = true;
		  var koef = 20;
	  
		  self.on("touchstart",function(event){
		
			    startX = event.originalEvent.touches[0].clientX;				
				marker = true; 				
 				 
 				self.on("touchmove",function(e){
			  
						var posX = e.originalEvent.touches[0].clientX;
						var index = cells.find(".current").index();
							  
						if(startX-posX>0 && Math.abs(startX-posX)>koef && marker){
					
						   prev(index);						  
						   marker = false;
						   
						   return false;

						}else if(startX-posX<0 && Math.abs(startX-posX)>koef && marker){
			  
						   next(index);
						   marker = false;
						   
						    return false;
							
						}
						
						
						  
				}) 	
					
				self.on("touchend",function(event){
					 
					 self.unbind("touchmove");
					   
				})  
				
		 }) 


		var changeArr = function(){
		
		    $(name+"__next, "+name+"__prev").removeClass("disable");
			console.log(name+"__next");
			
			var index = cells.find(".current").index();
			var length = cells.find(".current").length;
			
			if(index==0) $(name+"__prev").addClass("disable");
			if(index==length) $(name+"__next").addClass("disable");
 
		};	
	  
	  	changeArr(); 
		 
 	  
  };
})( jQuery );