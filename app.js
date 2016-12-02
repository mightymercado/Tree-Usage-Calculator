app = angular.module("carbon-footprint", []);

app.controller("calculatorController", function($scope) {
	$scope.paper_size = "Letter";
	$scope.page_count = 20;
	$scope.quantity = 20;
	$scope.Math = Math;
	$scope.paper = {
		"Statement" 	: { width : 5.5,	height: 8.5 	},
		"Executie" 	: { width : 7.25,	height: 10.5 	},
		"Tabloid" 	: { width : 11.0,	height: 17.0	},
		"Letter"	: { width : 8.5,	height: 11.0	},
		"Folio" 	: { width : 8.5,	height: 13.0 	},
		"Legal" 	: { width : 8.5,	height: 14.0 	},
		"A3" 		: { width : 11.69,	height: 16.54 	},
		"A4" 		: { width : 8.27,	height: 11.69 	},
		"A5" 		: { width : 5.83,	height: 8.27 	},
		"B4" 		: { width : 9.84,	height: 13.90 	},
		"B5" 		: { width : 6.93,	height: 9.84 	}
	};
	
	$scope.numberOfTrees = function() {
		return ($scope.page_count * $scope.quantity) / $scope.numberOfPapers();
	};
	
	$scope.relativePercent = function() {
		return (
			$scope.paper[$scope.paper_size].width *
			$scope.paper[$scope.paper_size].height
		) / (
			$scope.paper["Letter"].width *
			$scope.paper["Letter"].height
		);
	};
	
	$scope.numberOfPapers = function() {
		return ($scope.relativePercent() * 8333.33);
	};
	
	$scope.getNumber = function(num) {
		return new Array(num);
	};

	$scope.sizes = Object.keys($scope.paper);
});
