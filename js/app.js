// Creacion del modelo
var app = angular.module('myApp',[]);

// Ceacion del controlador
app.controller('AlumnosCtrl', function($scope){
	// Declaracion del modelo de datos
	$scope.alumnos = [
			{nombre:"Juan Blanco", telefono:"123456789",curso:"Segundo ESO"},
			{nombre:"Viktor Benitex", telefono:"123456789",curso:"Tercero ESO"},
			{nombre:"Lozano Garcia", telefono:"123456789",curso:"Primero ESO"},
			{nombre:"Mono Nono", telefono:"123456789",curso:"Segundo ESO"}
		];
});

