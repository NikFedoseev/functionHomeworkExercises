# Homework

## ladder
```
ladder = {
	step: 0,
	up() {
		...
	},
	down() {
		...
	},
	showStep() {
		...
	}
 }
 ```
Реализовать методы к объекту ladder так, чтобы можно было их вызывать следующим образом:
ladder.up().up().showStep()


## pseudoRouter

В этом задании вы должны разработать простой "маршрутизатор".  
Маршрутизатор должен принимать привязки для данного URL, метода http и функцию коллбек, которая срабатывает только при данном URL и методe http.  

Когда приходит запрос со связанным URL-адресом и методом, он должен вернуть результат действия колбека.  

Пример использования:
```
const router = new Router;
const callback = function() {
	return 'hello world';
}

router.bind('/hello', 'GET', callback);

router.runRequest('/hello', 'GET') // returns 'hello world';
```

Учесть, что ункцию колбек можно переопределить, например:
```
const router = new Router;
const callback = function() {
	return 'hello world';
}

const callback2 = function() {
	return 'hello world 2';
}

router.bind('/hello', 'GET', callback);
router.bind('/hello', 'GET', callback2);
router.runRequest('/hello', 'GET') // returns 'hello world 2';
```

Если бы обращаемся к несуществующему URL или методу то должно вернуться   

```
'Error 404: Not Found'
```

## PointAbstraction 

Создать абстракцию для работы с точками на плоскости.
Для этого:
- Создать фунцию конструктор которая будет принимать два значения x и y и возвращать точку.
- Создать селекторы getX и getY которые принимают на фход точку и возвращают соответственно x и у координаты.
- Создать функцию toString, которая возвращает строковое представление точки.
- Создать функцию getDistance которая считает расстояние между двумя точками.
- Создать функцию getQuadrant которая выводит четверть в которой находится точка (eсли точка лежит на одной из осей функция должна вывести null)

Расстояние между двумя точками:
sqrt( (x2 - x1)^2 + (y2 - y1)^2 )

Пример использования:
```
const point1 = makePoint(1,3)
const point2 = makePoint(2,5)

getX(point1) // return 1
getY(point1) // return 3

toString(point1) // return [1, 3]

getDistance(point1, point2) // return 2.23606797749979
getQuadrant(point1) // return 1
```

## RadioButtons
В каждой строке содержится по 3 радио кнопки, со значениями 1, 2 и 3;  
Необходимо выбрать в каждой строке по радиокнопке и посчитать сумму их значений.  
Сумма должна выводится в div c классом sum и только после того как во всех строках выбрано по одной радиокнопке.  
При выборе другой радиокнопки значние должно пересчитываться  

Для хранения данных использовать объект, где ключом будет арибут name радиокнопки а значением атрибут value радиокнопки  

[https://codepen.io/nikfedoseev/pen/bGGePEZ](https://codepen.io/nikfedoseev/pen/bGGePEZ)

## Тесты
Таски для запуска тестов в package.json
