$(".navbar-nav-search-icon").click(function () {
   $(".input-search").toggle("slow");
});
$(".navbar-toggler").click(function () {
   $("body").toggleClass("sidebar-icon-only");
   $(".sidebar-min").toggleClass("active");
});
$(".nav-item").hover(function () {
   if ($("body").hasClass("sidebar-icon-only")) {

      $(this).toggleClass("hover-open");

   }
});
