application.controller("account", function ($scope, data) {
	$scope.accounts = [];
	$scope.busy = true;

	data.getAccounts().then(function (d) {
		$scope.busy = false;
		$scope.accounts = d;
	});
});