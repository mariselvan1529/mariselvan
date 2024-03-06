angular.module('productCatalogApp', [])
    .controller('productCatalogController', function($scope) {
        $scope.products = [
            { name: 'SAMSUNG', category: 'Category 1', price: 50, features: ['Feature 1', 'Feature 2'] },
            { name: 'ONEPLUS', category: 'Category 2', price: 70, features: ['Feature 1', 'Feature 3'] },
            { name: 'IPHONE', category: 'Category 1', price: 60, features: ['Feature 2', 'Feature 4'] },
            { name: 'VIVO', category: 'Category 3', price: 80, features: ['Feature 3', 'Feature 4'] },
            { name: 'OPPO', category: 'Category 2', price: 90, features: ['Feature 1', 'Feature 4'] },
            { name: 'REDMI', category: 'Category 1', price: 100, features: ['Feature 2', 'Feature 3'] }
        ];

        $scope.categories = ['Category 1', 'Category 2', 'Category 3'];
        $scope.features = ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'];

        $scope.selectedCategory = '';
        $scope.selectedFeature = '';

        $scope.applyFilters = function() {
            $scope.filteredProducts = $scope.products.filter(function(product) {
                return (!$scope.selectedCategory || product.category === $scope.selectedCategory) &&
                       (!$scope.selectedFeature || product.features.includes($scope.selectedFeature));
            });
        };

        // Initialize filteredProducts with all products
        $scope.applyFilters();
    });
