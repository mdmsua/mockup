application.controller("account", function ($scope) {
	$scope.accounts = [
	{
		name: 'Bank of Ukraine',
		balance: '₴100 000,00',
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
		transaction: {
			ammount: '5.000,00 €',
			date: '18.04.2013 19:00:45',
			category: 'Debit',
			income: true
		}
	}];
});