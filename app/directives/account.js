application.directive('account', function () {
	return {
		restrict: 'E',
		templateUrl: 'app/templates/account.htm',
		replace: true,
		scope: {
			account: '='
		}
	}
});