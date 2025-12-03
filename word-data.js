// Word-level IPA transcriptions for all example words
const wordTranscriptions = {
    // Vowel /iː/
    'sheep': '/ʃiːp/',
    'eagle': '/ˈiːɡl/',
    'field': '/fiːld/',

    // Vowel /ɪ/
    'ship': '/ʃɪp/',
    'busy': '/ˈbɪzi/',
    'started': '/ˈstɑːrtɪd/',

    // Vowel /ʊ/
    'good': '/ɡʊd/',
    'put': '/pʊt/',
    'should': '/ʃʊd/',

    // Vowel /uː/
    'moon': '/muːn/',
    'grew': '/ɡruː/',
    'through': '/θruː/',

    // Diphthong /ɪə/
    'ear': '/ɪr/',
    'here': '/hɪr/',
    'career': '/kəˈrɪr/',

    // Diphthong /eɪ/
    'train': '/treɪn/',
    'say': '/seɪ/',
    'plane': '/pleɪn/',

    // Vowel /e/
    'bed': '/bed/',
    'dead': '/ded/',
    'said': '/sed/',

    // Schwa /ə/
    'about': '/əˈbaʊt/',
    'police': '/pəˈliːs/',
    'the': '/ðə/',

    // Vowel /ɜː/
    'bird': '/bɜːrd/',
    'hurt': '/hɜːrt/',
    'work': '/wɜːrk/',

    // Vowel /ɔː/
    'door': '/dɔːr/',
    'walk': '/wɔːk/',
    'saw': '/sɔː/',

    // Diphthong /ʊə/
    'your': '/jʊr/',
    'sure': '/ʃʊr/',
    'tourist': '/ˈtʊrɪst/',

    // Diphthong /ɔɪ/
    'boy': '/bɔɪ/',
    'point': '/pɔɪnt/',
    'oil': '/ɔɪl/',

    // Diphthong /əʊ/
    'coat': '/koʊt/',
    'low': '/loʊ/',
    'note': '/noʊt/',

    // Vowel /æ/
    'apple': '/ˈæpl/',
    'cat': '/kæt/',
    'mat': '/mæt/',

    // Vowel /ʌ/
    'up': '/ʌp/',
    'money': '/ˈmʌni/',
    'cut': '/kʌt/',

    // Vowel /ɑː/
    'car': '/kɑːr/',
    'bath': '/bæθ/',
    'safari': '/səˈfɑːri/',

    // Vowel /ɒ/
    'not': '/nɑːt/',
    'what': '/wɑːt/',
    'because': '/bɪˈkɔːz/',

    // Diphthong /eə/
    'hair': '/her/',
    'careful': '/ˈkerfəl/',
    'there': '/ðer/',

    // Diphthong /aɪ/
    'by': '/baɪ/',
    'high': '/haɪ/',
    'fine': '/faɪn/',

    // Diphthong /aʊ/
    'now': '/naʊ/',
    'our': '/aʊr/',
    'house': '/haʊs/',

    // Consonant /p/
    'pen': '/pen/',
    'hopping': '/ˈhɑːpɪŋ/',
    'jump': '/dʒʌmp/',

    // Consonant /b/
    'ball': '/bɔːl/',
    'hobby': '/ˈhɑːbi/',
    'herb': '/ɜːrb/',

    // Consonant /t/
    'table': '/ˈteɪbl/',
    'little': '/ˈlɪtl/',
    'watched': '/wɑːtʃt/',

    // Consonant /d/
    'dog': '/dɔːɡ/',
    'added': '/ˈædɪd/',
    'played': '/pleɪd/',

    // Affricate /tʃ/
    'chips': '/tʃɪps/',
    'itch': '/ɪtʃ/',
    'picture': '/ˈpɪktʃər/',

    // Affricate /dʒ/
    'jam': '/dʒæm/',
    'danger': '/ˈdeɪndʒər/',
    'fudge': '/fʌdʒ/',

    // Consonant /k/
    'key': '/kiː/',
    'luck': '/lʌk/',

    // Consonant /g/
    'green': '/ɡriːn/',
    'hug': '/hʌɡ/',
    'league': '/liːɡ/',

    // Consonant /f/
    'fire': '/ˈfaɪər/',
    'laugh': '/læf/',
    'phone': '/foʊn/',

    // Consonant /v/
    'video': '/ˈvɪdioʊ/',
    'move': '/muːv/',
    'of': '/ʌv/',

    // Consonant /θ/
    'thick': '/θɪk/',
    'healthy': '/ˈhelθi/',
    'teeth': '/tiːθ/',

    // Consonant /ð/
    'mother': '/ˈmʌðər/',
    'this': '/ðɪs/',
    'with': '/wɪð/',

    // Consonant /s/
    'see': '/siː/',
    'city': '/ˈsɪti/',
    'notice': '/ˈnoʊtɪs/',

    // Consonant /z/
    'zebra': '/ˈziːbrə/',
    'cosy': '/ˈkoʊzi/',
    'has': '/hæz/',

    // Consonant /ʃ/
    'shop': '/ʃɑːp/',
    'nation': '/ˈneɪʃn/',
    'special': '/ˈspeʃl/',

    // Consonant /ʒ/
    'television': '/ˈtelɪvɪʒn/',
    'visual': '/ˈvɪʒuəl/',
    'leisure': '/ˈliːʒər/',

    // Consonant /m/
    'man': '/mæn/',
    'tummy': '/ˈtʌmi/',
    'lamb': '/læm/',

    // Consonant /n/
    'no': '/noʊ/',
    'funny': '/ˈfʌni/',
    'knife': '/naɪf/',

    // Consonant /ŋ/
    'sing': '/sɪŋ/',
    'uncle': '/ˈʌŋkl/',
    'angry': '/ˈæŋɡri/',

    // Consonant /j/
    'yes': '/jes/',
    'onion': '/ˈʌnjən/',
    'view': '/vjuː/',

    // Consonant /l/
    'light': '/laɪt/',
    'smelly': '/ˈsmeli/',
    'feel': '/fiːl/',

    // Consonant /r/
    'right': '/raɪt/',
    'berry': '/ˈberi/',
    'wrong': '/rɔːŋ/',

    // Consonant /w/
    'win': '/wɪn/',
    'where': '/wer/',
    'one': '/wʌn/',

    // Consonant /h/
    'hungry': '/ˈhʌŋɡri/',
    'who': '/huː/'
};

// Function to get IPA transcription for a word
function getWordTranscription(word) {
    return wordTranscriptions[word.toLowerCase()] || `/${word}/`;
}

// Function to speak a single word
function speakWord(word) {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(word);
    const voices = window.speechSynthesis.getVoices();
    const usVoice = voices.find(v => v.lang === 'en-US' && v.name.includes('Google')) ||
        voices.find(v => v.lang === 'en-US') ||
        voices[0];

    utterance.voice = usVoice;
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    window.speechSynthesis.speak(utterance);
}
