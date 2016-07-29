var app = {
     onload: function(){
        this.w = window.outerWidth;
        this.h = window.outerHeight;
    },

    randomPosition: function() {
        var randomX = Math.floor((Math.random() * (this.w-100)));
        var randomY = Math.floor((Math.random() * (this.h-100)));
        this.el.style.left = randomX+'px';
        this.el.style.top = randomY+'px';
    },

    initialize: function(element) {
        this.onload();
        this.el = element;
        this.randomPosition();
        this.addListener();
    },

    addListener: function() {
        this.el.addEventListener('click', this.changePosition.bind(this), true);
    },

    changePosition: function() {
        var x = Math.floor((Math.random() * (this.w-100)));
        var y = Math.floor((Math.random() * (this.h-100)));
        this.el.style.left = x+'px';
        this.el.style.top = y+'px';
    }
};

app.initialize(document.getElementById('box'));



