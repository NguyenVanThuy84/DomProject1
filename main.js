/**
 * Dom Event
 * imput/select
 * keyup / keydown
 */
// // var inputElement = document.querySelector('input[name="text"]');
// // inputElement.onchange = function(e){
// //     console.log(e.target.value);
// }
// var inputElement = document.querySelector('input[name="text"]');
// inputElement.oninput = function(e){
//     console.log(e.target.value);
// }
var checkboxElement = document.querySelector('input[name="checkbox"]');
checkboxElement.onchange = function(e){
    console.log(e.target.checked);
}
var selectElement = document.querySelector('select');
selectElement.onchange = function(e){
    console.log(e.target.value);
}
var keydownElement = document.querySelector('input[name="text"]');
keydownElement.onkeyup = function(e){
    console.log(e.which);
    switch(e.which){
        case 27:
        console.log('Exit');
            break;
    }
}
