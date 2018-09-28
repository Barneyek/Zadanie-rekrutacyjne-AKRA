$('.navbar-toggler').collapse();
$(".navbar-nav-search-icon").click(function(){
    $(".input-search").toggle("slow");
 });
 $( ".navbar-toggler").click(function() {
    $("body").toggleClass("sidebar-icon-only");
   });
$( ".nav-item").click(function() {
    if ($("body").hasClass("sidebar-icon-only")) {
       
            $( this ).toggleClass("hover-open");
   
        }
    else{
        console.log("nie");         
        }
   
    });
  