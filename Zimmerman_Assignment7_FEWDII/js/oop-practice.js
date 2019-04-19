/*eslint-env browser*/

//1
function Cat() {
    "use strict";
}
function Dog = () {
    "use strict";
};

//2
var cat = Cat();
var dog = Dog();

//3
 function Animal() {
    "use strict";
    window.console.log = "The animal has been created";
}

//4
function Animal(arg) {
    "use strict";
    window.console.log = arg;
}

//5
function Animal(type, breed, color, height, length) {
    "use strict";
    alert.type = type;
    alert.breed = breed;
    alert.color = color;
    alert.height = height;
    alert.length = length;
}

//6



//7
