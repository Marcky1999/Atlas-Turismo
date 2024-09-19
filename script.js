const button = document.getElementById('button');
button.addEventListener(mouseover, function() {
button.style.backgroundColor = 'lightgreen';
button.style.color = 'white';
});
button.addEventListener(mouseout, function() {
button.style.backgroundColor = 'lightblue';
button.style.color = 'purple';
});