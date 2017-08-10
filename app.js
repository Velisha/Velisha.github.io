var mainapp = angular.module("mainapp",["ngRoute"]);

mainapp.config(function($routeProvider){
$routeProvider
.when('/',{
templateUrl :'home.html',
//controller:'HomeController'
})
.when('/About',{
templateUrl:'about.html',
//controller:'AboutController'
})
.when('/Skills',{
templateUrl:'skills.html',
//controller:'SkillsController'
})
.when('/Work',{
templateUrl:'work.html',
//controller:'WorkController'
})
.when('/Contact',{
templateUrl:'contact.html',
//controller:'ContactController'
})
.otherwise({
redirectTo:'/Home'
});
});

