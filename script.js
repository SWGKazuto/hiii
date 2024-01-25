// script.js
function submitForm(event) {
    event.preventDefault();
    const userName = document.getElementById('name').value;
    localStorage.setItem('userName', userName);
    window.location.href = 'wish.html';
}

document.addEventListener('DOMContentLoaded', function () {
    const userNameElement = document.getElementById('userName');
    const storedUserName = localStorage.getItem('userName');

    if (storedUserName) {
        userNameElement.textContent = storedUserName;
    } else {
        // Redirect to the main page if there's no stored username
        window.location.href = 'index.html';
    }
    var video = document.getElementById('birthdayVideo');
    var playButton = document.getElementById('playVideoBtn');

    playButton.addEventListener('click', function() {
        // Check if the video is paused or ended before playing
        if (video.paused || video.ended) {
            video.play();
        } else {
            // Pause the video if it's already playing
            video.pause();
        }
    });
});
