(function() {
var app = angular.module('store', []);

app.controller('StoreController', function() {
		this.products = [
			{
				name: 'Dodecahedron',
				price: 2.95,
				description: '. . .',
				canPurchase: false,
				soldOut: true,
				image: 'img/gem-03.gif' 
			}, {
				name: 'Pentagonal Gem',
				price: 5.95,
				description: 'Origin of the Pentagonal Gem is unknown, hence it\'s low value. It has a very high shine and 12 sides',
				canPurchase: false,
				soldOut: false,
				image: 'img/gem-01.gif'
			}
		];
	});

app.controller('PanelController', function() {
		this.tab = 1;
		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		}
});










})();