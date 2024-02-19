document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audio-player');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentSongIndex = 0;
    const songs = ['song1.mp3', 'song2.mp3'];

    function updateAudio() {
        audioPlayer.src = songs[currentSongIndex];
    }

    function togglePlayPause() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = 'Play';
        }
    }

    function playNextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        updateAudio();
        audioPlayer.play();
    }

    function playPrevSong() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        updateAudio();
        audioPlayer.play();
    }

    playPauseBtn.addEventListener('click', togglePlayPause);
    nextBtn.addEventListener('click', playNextSong);
    prevBtn.addEventListener('click', playPrevSong);
});
