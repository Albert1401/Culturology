angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('main/partials/main.tpl.html','<div ng-controller="mainController as vm" class="main-map">\r\n    <ul class="left-list">\r\n        <li ng-click="vm.selectAge(age)" ng-repeat="age in vm.ages" ng-class="{active: vm.selectedAge === age}">\r\n            <a>{{::age.name}}</a>\r\n        </li>\r\n    </ul>\r\n    <div class="map">\r\n        <leaflet id="spb" center="vm.center" width="100%" height="100%">\r\n        </leaflet>\r\n    </div>\r\n</div>');}]);