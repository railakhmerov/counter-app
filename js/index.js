let counterText = document.querySelector('[data__text-value = "counter value"]');
let counterButton_1 = document.querySelector('[data__pool = "1"]');
let counterButton_2 = document.querySelector('[data__pool = "2"]');
let clearButton = document.querySelector('[data__clear-button="clear btn"]');

let counter = 0;
// Увеличение счетчика на 1 по клику
counterButton_1.addEventListener('click', function() {
    counter = counter + 1;
    counterText.innerHTML = counter;
});
// Увеличение счетчика на 2 по клику
counterButton_2.addEventListener('click', function() {
    counter = counter + 2;
    counterText.innerHTML = counter;
})
// Сброс счетчика по клику
clearButton.addEventListener('click', function () { 
    counter = 0;
    counterText.innerHTML = counter;
})