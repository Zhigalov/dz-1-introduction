var array = [];
var maxIntValue = 20;
var arrayLength = 7;

function getRandomInt() {
    'use strict';
    return Math.floor(Math.random() * maxIntValue);
}

function arrayToString() {
    'use strict';
    var i, arrayString = "";
    for (i = 0; i < arrayLength; i = i + 1) {
        arrayString += array[i] + "\t";
    }
    return arrayString;
}

function CreateArray() {
    'use strict';
    var i;
    for (i = 0; i < arrayLength; i = i + 1) {
        array[i] = getRandomInt();
    }
    document.getElementById("OriginalArray").innerHTML = arrayToString();
}

function addStep() {
    'use strict';
    var step = document.createElement('li');
    step.innerHTML = arrayToString();
    document.getElementById('RangeSteps').appendChild(step);
}

function clearSteps() {
    'use strict';
    var element = document.getElementById('RangeSteps');
    while (element.childNodes[0]) {
        element.removeChild(element.childNodes[0]);
    }
}

function RangeArray() {
    'use strict';
    clearSteps();
    var i, j, value;
    for (i = 0; i < arrayLength - 1; i = i + 1) {
        for (j = 0; j < arrayLength - i - 1; j = j + 1) {
            if (array[j] > array[j + 1]) {
                value = array[j];
                array[j] = array[j + 1];
                array[j + 1] = value;

                addStep();
            }
        }
    }
}