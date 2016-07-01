var element = document.getElementById('box');

element.addEventListener('click', changePosition, true);

function changePosition(){
	var w = window.outerWidth;
    var h = window.outerHeight;
    var x = Math.floor((Math.random() * (w-100)));
    var y = Math.floor((Math.random() * (h-100)));
    element.style.top = y+'px';
    element.style.left = x+'px';


}