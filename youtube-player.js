// ========== YouTube Video Integration ==========

// YouTube Player variables
let youtubePlayer = null;
let isYouTubeAPIReady = false;
const YOUTUBE_VIDEO_ID = 'wKEI9n_Xs5Q';

// Load YouTube iframe API
function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// This function is called by YouTube API when ready
window.onYouTubeIframeAPIReady = function () {
    isYouTubeAPIReady = true;
    console.log('YouTube API Ready');
};

// Initialize YouTube player
function initializeYouTubePlayer() {
    if (!isYouTubeAPIReady) {
        console.log('YouTube API not ready yet');
        return;
    }

    const playerContainer = document.getElementById('youtubePlayerContainer');
    if (!playerContainer) {
        console.error('YouTube player container not found');
        return;
    }

    youtubePlayer = new YT.Player('youtubePlayerContainer', {
        height: '315',
        width: '100%',
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
            'playsinline': 1,
            'rel': 0,
            'modestbranding': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    console.log('YouTube player ready');
}

function onPlayerStateChange(event) {
    // Optional: Handle player state changes
}

// Play video at specific timestamp
function playVideoAtTimestamp(seconds) {
    if (!youtubePlayer) {
        // Try to initialize if not already done
        if (isYouTubeAPIReady) {
            initializeYouTubePlayer();
            // Wait a bit for player to initialize
            setTimeout(() => {
                if (youtubePlayer && youtubePlayer.seekTo) {
                    youtubePlayer.seekTo(seconds, true);
                    youtubePlayer.playVideo();
                }
            }, 1000);
        }
        return;
    }

    if (youtubePlayer.seekTo) {
        youtubePlayer.seekTo(seconds, true);
        youtubePlayer.playVideo();
    }
}

// Load YouTube API on page load
loadYouTubeAPI();
