import {app} from '../../app.module';

app.directive('menu', [function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'shared/menu/index.html',
    controller: ['$scope', function($scope) {
    }]
  }
}]);
