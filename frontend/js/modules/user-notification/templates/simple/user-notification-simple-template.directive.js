(function() {
  'use strict';

  angular.module('esn.user-notification')
    .directive('esnUserNotificationSimpleTemplate', esnUserNotificationSimpleTemplate);

  function esnUserNotificationSimpleTemplate() {
    return {
      controller: controller,
      restrict: 'E',
      replace: true,
      scope: {
        notification: '='
      },
      templateUrl: '/views/modules/user-notification/templates/simple/user-notification-simple-template.html'
    };

    function controller($scope) {
      var acknowledging = false;

      $scope.acknowledge = function() {
        if (acknowledging) {
          return;
        }
        acknowledging = true;
        $scope.notification.setAcknowledged(true).catch(function(error) {
          $scope.error = error;
        });
      };
    }
  }
})();
