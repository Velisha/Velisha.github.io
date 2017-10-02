(function() {
   var mainapp = angular.module("myapp",["ngRoute"]);
mainapp.config (function($routeProvider){
    console.log('routeProvider')
    $routeProvider
    .when("/",{
        templateUrl:"templates/home.html"
    })
    .when("/about",{
        templateUrl:"templates/about.html"
    })
    .when("/skills",{
        templateUrl:"templates/skills.html"
    })
    .when("/work",{
        templateUrl:"templates/work.html"
    })
     .when("/contact",{
        templateUrl:"templates/contact.html"
    })
    .otherwise({
        redirectTo:"/",
    });
});
})();