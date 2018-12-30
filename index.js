var app = angular.module("portfolioApp", ["ngRoute"]); 

app.config(function($routeProvider, $locationProvider){
    $routeProvider.when("/", 
                        {
                            templateUrl: "about.html",
                            title: "About"
                        })
                  .when("/education", 
                        {
                            templateUrl: "education.html",
                            title: "Education"
                        })
                  .when("/experience", 
                        {
                            templateUrl: "experience.html",
                            title: "Experience"
                        })
                  .when("/skills", 
                        {
                            templateUrl: "skills.html",
                            title: "Skills"
                        });
});

app.controller("controller", function($scope, $location){
    var controller = $scope;
    
    controller.isActive = function(path) {
        return path == $location.path();
    };
});

$(function(){    
    M.AutoInit();
});