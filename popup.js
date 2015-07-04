/// <reference path="typings/angularjs/angular.d.ts"/>
/**
 * https://github.com/Definitelytyped/tsd#readme
 * https://docs.angularjs.org/guide/services
 * https://developer.chrome.com/extensions/samples
 * https://developer.chrome.com/extensions
 * https://github.com/GoogleChrome/chrome-app-samples/blob/master/samples/gdrive/main.html
 * https://developer.chrome.com/apps/angular_framework
 * https://angularjs.org/
 * https://github.com/Definitelytyped/tsd#readme 
 * http://ionicons.com/
**/

var app = angular.module('myapp',[]);

app.controller("mainController", function ($scope, $http) {

    $scope.urlList = [];

    /**
     * Pega a url de todas as tabs atualmente abertas
     */
    $scope.getTabsUrl = function() {
        getTabsUrl(function(tabsUrl) {
            $scope.$apply(function(){
                $scope.urlList = tabsUrl;
            });
        });
    };
    
});

function getTabsUrl(callback) {
    
    var queryInfo = {
        // active: true, // Indica que deve pegar as informações apenas da tab atualmente ativa.
        // currentWindow: true // Indica que deve ler as tabs da janela atual.
    };
    
    chrome.tabs.query(queryInfo, function(tabs) {
        callback(tabs);
    });
};