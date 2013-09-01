application.factory('data', function ($q, $timeout) {
	function getAccounts() {
		var accounts = [
		{
			name: 'Bank of Ukraine',
			balance: '₴100 000,00',
			active: true,
			transaction: {
				ammount: '₴25 000,00',
				date: '18.04.2013 19:00:45',
				category: 'Salary',
				income: true
			}
		},
		{
			name: 'Bank of Amerika',
			balance: '$25,000.00',
			active: true,
			transaction: {
				ammount: '$1,000.00',
				date: '18.04.2013 19:00:45',
				category: 'Transport',
				income: false
			}
		},
		{
			name: 'Bank of Germany',
			balance: '100.000,00 €',
			active: true,
			transaction: {
				ammount: '5.000,00 €',
				date: '18.04.2013 19:00:45',
				category: 'Debit',
				income: true
			}
		},
		{
			name: 'Bank of History',
			balance: '0,00 €',
			active: false,
			transaction: {
				ammount: '1.000,00 €',
				date: '18.04.2013 19:00:45',
				category: 'Discharge',
				income: false
			}
		}];
		var defer = $q.defer();

		$timeout(function() { return accounts; }, 1000).then(function (d) {
			defer.resolve(d);
		});

		return defer.promise;
	}	

	return {
		getAccounts: getAccounts
	}
})