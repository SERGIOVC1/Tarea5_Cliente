document.getElementById('botonRojo').addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
    document.body.style.color = 'rgb(243, 122, 122)';
});

document.getElementById('botonAzul').addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue';
    document.body.style.color = 'lightblue';
});

document.getElementById('botonVerde').addEventListener('click', function() {
    document.body.style.backgroundColor = 'green';
    document.body.style.color = 'lightgreen';
});

document.getElementById('botonReset').addEventListener('click',function(){
document.body.style.backgroundColor='black';
document.body.style.color='white';
});