'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
  $scope.phones = [
    {'name': '"Nexus S><&',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': '\'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'display:none;behavior:url("http://www.evil.com/")',
     'snippet': 'The Next, Next Generation tablet.'}
/*
    {'name': 'javascript:alert(0)', 
     'snippet': 'The Next, Next Generation tablet.'}
*/
  ];
});