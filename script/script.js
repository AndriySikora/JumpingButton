var element = document.getElementById('box');

window.onload = function(){
	var w = window.outerWidth;
    var h = window.outerHeight;
    var randomX = Math.floor((Math.random() * (w-100)));
    var randomY = Math.floor((Math.random() * (h-100)));
    element.style.left = randomX+'px';
    element.style.top = randomY+'px';
}

element.addEventListener('click', changePosition, true);

function changePosition(){
	var w = window.outerWidth;
    var h = window.outerHeight;
    var x = Math.floor((Math.random() * (w-100)));
    var y = Math.floor((Math.random() * (h-100)));
    element.style.left = x+'px';
    element.style.top = y+'px';
}



