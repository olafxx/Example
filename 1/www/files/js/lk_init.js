jQuery(function($) { 
   
   
	/**/
	
		 $(".b-bill").on("mousedown",".btnSlideDown",function(){
	 
			  var self = $(this);
			  self.removeClass("btnSlideDown").addClass("btnSlideUp");
			  var show_class = self.data("lk_order");
			  self.closest(".b-bill").find("."+show_class).show();	 

			  return false;
		 
		 
		 });
		
		 $(".b-bill").on("mousedown",".btnSlideUp",function(){
	 
			  var self = $(this);
			  self.removeClass("btnSlideUp").addClass("btnSlideDown");
			  var show_class = self.data("lk_order");
			  self.closest(".b-bill").find("."+show_class).hide();

			  return false;
		 
		 });
		
	/**/



	
	 
});