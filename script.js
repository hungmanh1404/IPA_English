// Phoneme pronunciation data with accurate American English sounds
const phonemeData = {
    // Vowels - Monophthongs (long)
    'ee': { text: 'sheep', rate: 0.8 },
    'ih': { text: 'ship', rate: 0.8 },
    'uh': { text: 'good', rate: 0.8 },
    'oo': { text: 'moon', rate: 0.8 },
    'ear': { text: 'ear', rate: 0.8 },
    'air': { text: 'train', rate: 0.8 },
    
    // Vowels - Short
    'eh': { text: 'bed', rate: 0.8 },
    'uh2': { text: 'about', rate: 0.8 },
    'er': { text: 'bird', rate: 0.8 },
    'or': { text: 'door', rate: 0.8 },
    'oor': { text: 'tour', rate: 0.8 },
    'oy': { text: 'boy', rate: 0.8 },
    'oh': { text: 'coat', rate: 0.8 },
    
    // Vowels - Diphthongs
    'ae': { text: 'cat', rate: 0.8 },
    'uh3': { text: 'cup', rate: 0.8 },
    'ar': { text: 'car', rate: 0.8 },
    'o': { text: 'hot', rate: 0.8 },
    'air2': { text: 'hair', rate: 0.8 },
    'eye': { text: 'high', rate: 0.8 },
    'ow': { text: 'house', rate: 0.8 },
    
    // Consonants - Plosives
    'p': { text: 'pen', rate: 0.7 },
    'b': { text: 'ball', rate: 0.7 },
    't': { text: 'table', rate: 0.7 },
    'd': { text: 'dog', rate: 0.7 },
    'k': { text: 'key', rate: 0.7 },
    'g': { text: 'green', rate: 0.7 },
    
    // Consonants - Affricates
    'ch': { text: 'chips', rate: 0.7 },
    'j': { text: 'jam', rate: 0.7 },
    
    // Consonants - Fricatives
    'f': { text: 'fire', rate: 0.7 },
    'v': { text: 'video', rate: 0.7 },
    'th': { text: 'thick', rate: 0.7 },
    'dh': { text: 'this', rate: 0.7 },
    's': { text: 'see', rate: 0.7 },
    'z': { text: 'zebra', rate: 0.7 },
    'sh': { text: 'shop', rate: 0.7 },
    'zh': { text: 'measure', rate: 0.7 },
    'h': { text: 'house', rate: 0.7 },
    
    // Consonants - Nasals and Approximants
    'm': { text: 'man', rate: 0.7 },
    'n': { text: 'no', rate: 0.7 },
    'ng': { text: 'sing', rate: 0.7 },
    'l': { text: 'light', rate: 0.7 },
    'r': { text: 'right', rate: 0.7 },
    'w': { text: 'win', rate: 0.7 },
    'y': { text: 'yes', rate: 0.7 }
};

// Initialize speech synthesis
let synth = window.speechSynthesis;
let currentUtterance = null;

// Get American English voice
function getAmericanVoice() {
    const voices = synth.getVoices();
    // Prefer US English voices
    const usVoice = voices.find(voice => 
        voice.lang === 'en-US' && voice.name.includes('Google')
    ) || voices.find(voice => 
        voice.lang === 'en-US'
    ) || voices[0];
    
    return usVoice;
}

// Load voices (needed for some browsers)
if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = getAmericanVoice;
}

// Play phoneme sound
function playPhoneme(soundKey) {
    // Cancel any ongoing speech
    if (synth.speaking) {
        synth.cancel();
    }
    
    const soundData = phonemeData[soundKey];
    if (!soundData) {
        console.warn(`No sound data for: ${soundKey}`);
        return;
    }
    
    // Create utterance
    currentUtterance = new SpeechSynthesisUtterance(soundData.text);
    currentUtterance.voice = getAmericanVoice();
    currentUtterance.lang = 'en-US';
    currentUtterance.rate = soundData.rate;
    currentUtterance.pitch = 1.0;
    currentUtterance.volume = 1.0;
    
    // Speak
    synth.speak(currentUtterance);
}

// Add click handlers to all phoneme cells
function initializePhonemes() {
    const phonemeCells = document.querySelectorAll('.phoneme-cell');
    
    phonemeCells.forEach(cell => {
        cell.addEventListener('click', function() {
            const soundKey = this.getAttribute('data-sound');
            
            // Add playing animation
            this.classList.add('playing');
            setTimeout(() => {
                this.classList.remove('playing');
            }, 600);
            
            // Play sound
            playPhoneme(soundKey);
        });
        
        // Add keyboard accessibility
        cell.setAttribute('tabindex', '0');
        cell.setAttribute('role', 'button');
        cell.setAttribute('aria-label', `Pronounce ${cell.querySelector('.ipa').textContent}`);
        
        cell.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for voices to load
    setTimeout(() => {
        getAmericanVoice();
        initializePhonemes();
    }, 100);
    
    // Show browser compatibility message if needed
    if (!('speechSynthesis' in window)) {
        alert('Sorry, your browser does not support text-to-speech. Please use a modern browser like Chrome, Firefox, or Safari.');
    }
});

// Handle page visibility to stop speech when tab is hidden
document.addEventListener('visibilitychange', function() {
    if (document.hidden && synth.speaking) {
        synth.cancel();
    }
});
