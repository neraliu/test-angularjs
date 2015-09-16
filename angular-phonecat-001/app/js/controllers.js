'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.',
     'data1':'\'" ><&',
     'data2':'\'" ><&',
     'data3':'" style="color:red',
     'data4':'\' style="color:red',
     'data5':' style="color:red"',
     'data6':'x:expression(alert(0));',
     'data7':':;[]{}()',
     'data8':'javascript:alert(0)',
     'data9':'\''
    }
  ];
});
