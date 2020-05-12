document.querySelector('#userInput').addEventListener('keyup', fetchData);

function fetchData() {
    var target = document.getElementById('userInput');
    document.getElementById('container').innerHTML = target.value;
}