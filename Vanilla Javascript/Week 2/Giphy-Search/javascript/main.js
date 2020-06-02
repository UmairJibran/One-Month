document.querySelector('#userInput').addEventListener('keyup', () => fetchDataByKeys(event));

function fetchData() {
    var target = document.getElementById('userInput');
    fetchAPI(target.value);
}

function fetchDataByKeys(event) {
    var target = document.getElementById('userInput');
    if (event.which === 13)
        fetchAPI(target.value);
}

/* API Fetching */
function fetchAPI(keyWords) {
    var urlAPI = "http://api.giphy.com/v1/gifs/search?q=" + keyWords + "&api_key=QiKof8cm65kZs9x0MBSgyIocLyPnoK0Z";
    var giphyAJAXCall = new XMLHttpRequest();
    giphyAJAXCall.open('GET', urlAPI);
    giphyAJAXCall.send();
    giphyAJAXCall.addEventListener('load', () => onDataLoad(event));
}

function onDataLoad(event) {
    document.getElementById('container').innerHTML = '';
    var json = event.target.response;
    var response = JSON.parse(json);
    var imageURLs = response.data;
    if (imageURLs.length < 1)
        nothingFound();
    else
        imageURLs.forEach(function (imageURL) {
            var gifURL = imageURL.images.fixed_height.url;
            displayOnScreen(gifURL);
        });
}

function nothingFound() {
    var searchedGIF = document.querySelector('#userInput');
    var noData = document.createElement('h1');
    noData.innerHTML = "<font color='red'>No thing found for " + searchedGIF.value + "</font>";
    document.querySelector('#container').appendChild(noData);
}

/* Displaying it on the Screen/DOM Manipulation */

function displayOnScreen(loadedData) {
    for (var i = 0; i < loadedData.length; i++)
        if (loadedData[i] === ' ')
            loadedData[i] = '+';
    var img = document.createElement('img');
    img.src = loadedData;
    img.className = 'image-box';
    document.getElementById('container').appendChild(img);
}