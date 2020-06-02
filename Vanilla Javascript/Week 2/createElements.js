function buildElements() {
    for (var i = 0; i < 15; i += 1) {
        setTimeout(() => {
            var imageBox = document.createElement('div');
            imageBox.className = 'imageBox';
            document.getElementById('outerBox').appendChild(imageBox);
        }, 250 * i);
    }
}