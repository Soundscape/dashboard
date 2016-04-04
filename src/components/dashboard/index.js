import {app} from '../../app.module';
import './dashboard.controller';

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'components/dashboard/dashboard.html',
      controller: 'DashboardController'
    });
}]);
