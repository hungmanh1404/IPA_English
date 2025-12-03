// Comprehensive phoneme pronunciation data with articulation details
const phonemeData = {
    // Vowels - Monophthongs (long)
    'ee': {
        text: 'sheep',
        rate: 0.8,
        ipa: 'iː',
        type: 'Long Vowel (Monophthong)',
        tongue: 'High and forward, close to the hard palate',
        lips: 'Spread and slightly tense',
        jaw: 'Nearly closed',
        voicing: 'Voiced',
        diagram: 'vowel-front-high',
        tips: 'Keep your tongue high and forward. Smile slightly to spread your lips.'
    },
    'ih': {
        text: 'ship',
        rate: 0.8,
        ipa: 'ɪ',
        type: 'Short Vowel',
        tongue: 'High-front, but lower and more relaxed than /iː/',
        lips: 'Slightly spread, relaxed',
        jaw: 'Slightly more open than /iː/',
        voicing: 'Voiced',
        diagram: 'vowel-front-high',
        tips: 'More relaxed than "ee". Tongue is slightly lower.'
    },
    'uh': {
        text: 'good',
        rate: 0.8,
        ipa: 'ʊ',
        type: 'Short Vowel',
        tongue: 'High-back, relaxed',
        lips: 'Rounded but relaxed',
        jaw: 'Nearly closed',
        voicing: 'Voiced',
        diagram: 'vowel-back-high',
        tips: 'Round your lips slightly. Tongue pulled back and up.'
    },
    'oo': {
        text: 'moon',
        rate: 0.8,
        ipa: 'uː',
        type: 'Long Vowel (Monophthong)',
        tongue: 'High-back, tense',
        lips: 'Rounded and protruded',
        jaw: 'Nearly closed',
        voicing: 'Voiced',
        diagram: 'vowel-back-high',
        tips: 'Push your lips forward in a tight circle. Tongue high and back.'
    },
    'ear': {
        text: 'ear',
        rate: 0.8,
        ipa: 'ɪə',
        type: 'Diphthong',
        tongue: 'Starts high-front, glides to mid-central',
        lips: 'Starts spread, relaxes',
        jaw: 'Slightly open',
        voicing: 'Voiced',
        diagram: 'vowel-front-high',
        tips: 'Start with "ih" sound and glide to schwa.'
    },
    'air': {
        text: 'train',
        rate: 0.8,
        ipa: 'eɪ',
        type: 'Diphthong',
        tongue: 'Starts mid-front, glides high-front',
        lips: 'Spread, becoming more tense',
        jaw: 'Starts slightly open, closes',
        voicing: 'Voiced',
        diagram: 'vowel-front-mid',
        tips: 'Glide from "eh" to "ee". Your jaw closes as you pronounce it.'
    },
    'eh': {
        text: 'bed',
        rate: 0.8,
        ipa: 'e',
        type: 'Short Vowel',
        tongue: 'Mid-front',
        lips: 'Spread, relaxed',
        jaw: 'Half-open',
        voicing: 'Voiced',
        diagram: 'vowel-front-mid',
        tips: 'Tongue in middle position. Mouth more open than "ee".'
    },
    'uh2': {
        text: 'about',
        rate: 0.8,
        ipa: 'ə',
        type: 'Short Vowel (Schwa)',
        tongue: 'Mid-central, completely relaxed',
        lips: 'Neutral, relaxed',
        jaw: 'Half-open',
        voicing: 'Voiced',
        diagram: 'vowel-central',
        tips: 'The most relaxed vowel. Tongue and lips in neutral position.'
    },
    'er': {
        text: 'bird',
        rate: 0.8,
        ipa: 'ɜː',
        type: 'Long Vowel',
        tongue: 'Mid-central, slightly curled back',
        lips: 'Neutral to slightly rounded',
        jaw: 'Half-open',
        voicing: 'Voiced',
        diagram: 'vowel-central',
        tips: 'Curl your tongue slightly back. Longer than schwa.'
    },
    'or': {
        text: 'door',
        rate: 0.8,
        ipa: 'ɔː',
        type: 'Long Vowel',
        tongue: 'Mid-back',
        lips: 'Rounded',
        jaw: 'Half-open to open',
        voicing: 'Voiced',
        diagram: 'vowel-back-mid',
        tips: 'Round your lips. Tongue back and down.'
    },
    'oor': {
        text: 'tour',
        rate: 0.8,
        ipa: 'ʊə',
        type: 'Diphthong',
        tongue: 'Starts high-back, glides to mid-central',
        lips: 'Starts rounded, relaxes',
        jaw: 'Opens slightly',
        voicing: 'Voiced',
        diagram: 'vowel-back-high',
        tips: 'Start with "uh" and glide to schwa.'
    },
    'oy': {
        text: 'boy',
        rate: 0.8,
        ipa: 'ɔɪ',
        type: 'Diphthong',
        tongue: 'Starts mid-back, glides high-front',
        lips: 'Starts rounded, becomes spread',
        jaw: 'Closes during glide',
        voicing: 'Voiced',
        diagram: 'vowel-back-mid',
        tips: 'Start with rounded lips for "aw", then glide to "ee".'
    },
    'oh': {
        text: 'coat',
        rate: 0.8,
        ipa: 'əʊ',
        type: 'Diphthong',
        tongue: 'Starts mid-central, glides high-back',
        lips: 'Starts neutral, becomes rounded',
        jaw: 'Closes during glide',
        voicing: 'Voiced',
        diagram: 'vowel-central',
        tips: 'Start neutral, then round lips and raise tongue back.'
    },
    'ae': {
        text: 'cat',
        rate: 0.8,
        ipa: 'æ',
        type: 'Short Vowel',
        tongue: 'Low-front',
        lips: 'Spread',
        jaw: 'Wide open',
        voicing: 'Voiced',
        diagram: 'vowel-front-low',
        tips: 'Open your mouth wide. Tongue low and forward.'
    },
    'uh3': {
        text: 'cup',
        rate: 0.8,
        ipa: 'ʌ',
        type: 'Short Vowel',
        tongue: 'Mid-central, slightly back',
        lips: 'Neutral, relaxed',
        jaw: 'Half-open',
        voicing: 'Voiced',
        diagram: 'vowel-central',
        tips: 'Similar to schwa but slightly more open and stressed.'
    },
    'ar': {
        text: 'car',
        rate: 0.8,
        ipa: 'ɑː',
        type: 'Long Vowel',
        tongue: 'Low-back',
        lips: 'Neutral to slightly rounded',
        jaw: 'Wide open',
        voicing: 'Voiced',
        diagram: 'vowel-back-low',
        tips: 'Open mouth wide. Tongue low and back.'
    },
    'o': {
        text: 'hot',
        rate: 0.8,
        ipa: 'ɒ',
        type: 'Short Vowel',
        tongue: 'Low-back',
        lips: 'Slightly rounded',
        jaw: 'Open',
        voicing: 'Voiced',
        diagram: 'vowel-back-low',
        tips: 'Similar to "ar" but shorter and lips slightly rounded.'
    },
    'air2': {
        text: 'hair',
        rate: 0.8,
        ipa: 'eə',
        type: 'Diphthong',
        tongue: 'Starts mid-front, glides to mid-central',
        lips: 'Starts spread, relaxes',
        jaw: 'Half-open',
        voicing: 'Voiced',
        diagram: 'vowel-front-mid',
        tips: 'Start with "eh" and glide to schwa.'
    },
    'eye': {
        text: 'high',
        rate: 0.8,
        ipa: 'aɪ',
        type: 'Diphthong',
        tongue: 'Starts low-front, glides high-front',
        lips: 'Starts open, becomes spread',
        jaw: 'Starts open, closes',
        voicing: 'Voiced',
        diagram: 'vowel-front-low',
        tips: 'Start with mouth wide open, then close while raising tongue.'
    },
    'ow': {
        text: 'house',
        rate: 0.8,
        ipa: 'aʊ',
        type: 'Diphthong',
        tongue: 'Starts low-front, glides high-back',
        lips: 'Starts open, becomes rounded',
        jaw: 'Starts open, closes',
        voicing: 'Voiced',
        diagram: 'vowel-front-low',
        tips: 'Start with mouth open, then round lips and raise tongue back.'
    },

    // Consonants - Plosives
    'p': {
        text: 'pen',
        rate: 0.7,
        ipa: 'p',
        type: 'Voiceless Plosive',
        tongue: 'Neutral position',
        lips: 'Pressed together, then released with air burst',
        jaw: 'Slightly open',
        voicing: 'Voiceless (no vocal cord vibration)',
        diagram: 'consonant-bilabial',
        tips: 'Press lips together tightly, build up air pressure, then release explosively.'
    },
    'b': {
        text: 'ball',
        rate: 0.7,
        ipa: 'b',
        type: 'Voiced Plosive',
        tongue: 'Neutral position',
        lips: 'Pressed together, then released',
        jaw: 'Slightly open',
        voicing: 'Voiced (vocal cords vibrate)',
        diagram: 'consonant-bilabial',
        tips: 'Same as /p/ but with vocal cord vibration. Feel the buzz in your throat.'
    },
    't': {
        text: 'table',
        rate: 0.7,
        ipa: 't',
        type: 'Voiceless Plosive',
        tongue: 'Tip touches alveolar ridge (behind upper teeth)',
        lips: 'Neutral',
        jaw: 'Slightly open',
        voicing: 'Voiceless',
        diagram: 'consonant-alveolar',
        tips: 'Touch tongue tip to the ridge behind your upper teeth, then release sharply.'
    },
    'd': {
        text: 'dog',
        rate: 0.7,
        ipa: 'd',
        type: 'Voiced Plosive',
        tongue: 'Tip touches alveolar ridge',
        lips: 'Neutral',
        jaw: 'Slightly open',
        voicing: 'Voiced',
        diagram: 'consonant-alveolar',
        tips: 'Same position as /t/ but with vocal cord vibration.'
    },
    'k': {
        text: 'key',
        rate: 0.7,
        ipa: 'k',
        type: 'Voiceless Plosive',
        tongue: 'Back touches soft palate (velum)',
        lips: 'Neutral',
        jaw: 'Slightly open',
        voicing: 'Voiceless',
        diagram: 'consonant-velar',
        tips: 'Raise back of tongue to soft palate, build pressure, then release.'
    },
    'g': {
        text: 'green',
        rate: 0.7,
        ipa: 'g',
        type: 'Voiced Plosive',
        tongue: 'Back touches soft palate',
        lips: 'Neutral',
        jaw: 'Slightly open',
        voicing: 'Voiced',
        diagram: 'consonant-velar',
        tips: 'Same as /k/ but with vocal cord vibration.'
    },

    // Consonants - Affricates
    'ch': {
        text: 'chips',
        rate: 0.7,
        ipa: 'tʃ',
        type: 'Voiceless Affricate',
        tongue: 'Starts at alveolar ridge, releases with friction',
        lips: 'Slightly rounded and protruded',
        jaw: 'Slightly open',
        voicing: 'Voiceless',
        diagram: 'consonant-postalveolar',
        tips: 'Combine /t/ and /ʃ/ sounds. Start with tongue at ridge, release with "sh".'
    },
    'j': {
        text: 'jam',
        rate: 0.7,
        ipa: 'dʒ',
        type: 'Voiced Affricate',
        tongue: 'Starts at alveolar ridge, releases with friction',
        lips: 'Slightly rounded and protruded',
        jaw: 'Slightly open',
        voicing: 'Voiced',
        diagram: 'consonant-postalveolar',
        tips: 'Combine /d/ and /ʒ/ sounds. Same as /tʃ/ but voiced.'
    },

    // Consonants - Fricatives
    'f': {
        text: 'fire',
        rate: 0.7,
        ipa: 'f',
        type: 'Voiceless Fricative',
        tongue: 'Neutral or slightly raised',
        lips: 'Upper teeth touch lower lip',
        jaw: 'Slightly open',
        voicing: 'Voiceless',
        diagram: 'consonant-labiodental',
        tips: 'Gently bite your lower lip with upper teeth. Force air through the gap.'
    },
    'v': {
        text: 'video',
        rate: 0.7,
        ipa: 'v',
        type: 'Voiced Fricative',
        tongue: 'Neutral or slightly raised',
        lips: 'Upper teeth touch lower lip',
        jaw: 'Slightly open',
        voicing: 'Voiced',
        diagram: 'consonant-labiodental',
        tips: 'Same as /f/ but with vocal cord vibration. Feel the buzz.'
    },
    'th': {
        text: 'thick',
        rate: 0.7,
        ipa: 'θ',
        type: 'Voiceless Fricative',
        tongue: 'Tip between or behind upper and lower teeth',
        lips: 'Neutral',
        jaw: 'Slightly open',
        voicing: 'Voiceless',
        diagram: 'consonant-dental',
        tips: 'Place tongue tip between teeth. Blow air through the gap.'
    },
    'dh': {
        text: 'this',
        rate: 0.7,
        ipa: 'ð',
        type: 'Voiced Fricative',
        tongue: 'Tip between or behind upper and lower teeth',
        lips: 'Neutral',
        jaw: 'Slightly open',
        voicing: 'Voiced',
        diagram: 'consonant-dental',
        tips: 'Same as /θ/ but with vocal cord vibration.'
    },
    's': {
        text: 'see',
        rate: 0.7,
        ipa: 's',
        type: 'Voiceless Fricative',
        tongue: 'Tip near alveolar ridge, creating narrow channel',
        lips: 'Slightly spread',
        jaw: 'Nearly closed',
        voicing: 'Voiceless',
        diagram: 'consonant-alveolar',
        tips: 'Keep tongue close to ridge behind teeth. Force air through narrow gap.'
    },
    'z': {
        text: 'zebra',
        rate: 0.7,
        ipa: 'z',
        type: 'Voiced Fricative',
        tongue: 'Tip near alveolar ridge',
        lips: 'Slightly spread',
        jaw: 'Nearly closed',
        voicing: 'Voiced',
        diagram: 'consonant-alveolar',
        tips: 'Same as /s/ but with vocal cord vibration. Feel the buzz.'
    },
    'sh': {
        text: 'shop',
        rate: 0.7,
        ipa: 'ʃ',
        type: 'Voiceless Fricative',
        tongue: 'Raised toward hard palate, tip behind alveolar ridge',
        lips: 'Rounded and protruded',
        jaw: 'Slightly open',
        voicing: 'Voiceless',
        diagram: 'consonant-postalveolar',
        tips: 'Round and push lips forward. Tongue further back than /s/.'
    },
    'zh': {
        text: 'measure',
        rate: 0.7,
        ipa: 'ʒ',
        type: 'Voiced Fricative',
        tongue: 'Raised toward hard palate, tip behind alveolar ridge',
        lips: 'Rounded and protruded',
        jaw: 'Slightly open',
        voicing: 'Voiced',
        diagram: 'consonant-postalveolar',
        tips: 'Same as /ʃ/ but with vocal cord vibration.'
    },
    'h': {
        text: 'house',
        rate: 0.7,
        ipa: 'h',
        type: 'Voiceless Fricative',
        tongue: 'Position depends on following vowel',
        lips: 'Position depends on following vowel',
        jaw: 'Open',
        voicing: 'Voiceless',
        diagram: 'consonant-glottal',
        tips: 'Breathe out forcefully from the throat. Mouth shape matches next vowel.'
    },

    // Consonants - Nasals and Approximants
    'm': {
        text: 'man',
        rate: 0.7,
        ipa: 'm',
        type: 'Nasal',
        tongue: 'Neutral',
        lips: 'Pressed together, air flows through nose',
        jaw: 'Closed',
        voicing: 'Voiced',
        diagram: 'consonant-bilabial',
        tips: 'Close lips completely. Let sound come out through your nose. Hum.'
    },
    'n': {
        text: 'no',
        rate: 0.7,
        ipa: 'n',
        type: 'Nasal',
        tongue: 'Tip touches alveolar ridge, air flows through nose',
        lips: 'Neutral',
        jaw: 'Slightly open',
        voicing: 'Voiced',
        diagram: 'consonant-alveolar',
        tips: 'Touch tongue to ridge behind teeth. Sound comes through nose.'
    },
    'ng': {
        text: 'sing',
        rate: 0.7,
        ipa: 'ŋ',
        type: 'Nasal',
        tongue: 'Back touches soft palate, air flows through nose',
        lips: 'Neutral',
        jaw: 'Slightly open',
        voicing: 'Voiced',
        diagram: 'consonant-velar',
        tips: 'Raise back of tongue to soft palate. Sound comes through nose.'
    },
    'l': {
        text: 'light',
        rate: 0.7,
        ipa: 'l',
        type: 'Lateral Approximant',
        tongue: 'Tip touches alveolar ridge, air flows around sides',
        lips: 'Neutral',
        jaw: 'Slightly open',
        voicing: 'Voiced',
        diagram: 'consonant-alveolar',
        tips: 'Touch tongue tip to ridge. Let air flow around the sides of tongue.'
    },
    'r': {
        text: 'right',
        rate: 0.7,
        ipa: 'r',
        type: 'Approximant',
        tongue: 'Tip curled back (retroflex) or bunched up',
        lips: 'Slightly rounded',
        jaw: 'Slightly open',
        voicing: 'Voiced',
        diagram: 'consonant-postalveolar',
        tips: 'Curl tongue tip back or bunch it up. Don\'t touch the roof of mouth.'
    },
    'w': {
        text: 'win',
        rate: 0.7,
        ipa: 'w',
        type: 'Approximant',
        tongue: 'Back raised toward soft palate',
        lips: 'Rounded and protruded',
        jaw: 'Nearly closed',
        voicing: 'Voiced',
        diagram: 'consonant-velar',
        tips: 'Round lips tightly and push forward. Raise back of tongue.'
    },
    'y': {
        text: 'yes',
        rate: 0.7,
        ipa: 'j',
        type: 'Approximant',
        tongue: 'Front raised high toward hard palate',
        lips: 'Spread',
        jaw: 'Nearly closed',
        voicing: 'Voiced',
        diagram: 'vowel-front-high',
        tips: 'Raise front of tongue high. Similar to "ee" but as a consonant.'
    }
};

// SVG diagram generator
function createMouthDiagram(diagramType) {
    const diagrams = {
        'vowel-front-high': `
            <svg viewBox="0 0 300 250" class="diagram-svg">
                <!-- Head outline -->
                <path d="M 50 50 Q 50 20 80 20 L 220 20 Q 250 20 250 50 L 250 200 Q 250 230 220 230 L 80 230 Q 50 230 50 200 Z" 
                      fill="#fef8f5" stroke="#8b7355" stroke-width="2"/>
                
                <!-- Hard palate -->
                <path d="M 100 80 Q 150 70 200 80" fill="none" stroke="#d4a574" stroke-width="3"/>
                <text x="105" y="65" font-size="10" fill="#8b7355">Hard Palate</text>
                
                <!-- Soft palate -->
                <path d="M 200 80 Q 220 85 230 100" fill="none" stroke="#d4a574" stroke-width="3" stroke-dasharray="3,3"/>
                <text x="200" y="95" font-size="10" fill="#8b7355">Soft Palate</text>
                
                <!-- Tongue - HIGH and FORWARD -->
                <ellipse cx="140" cy="110" rx="60" ry="25" fill="#ffb6c1" stroke="#ff69b4" stroke-width="2"/>
                <text x="120" y="115" font-size="11" font-weight="bold" fill="#c71585">Tongue</text>
                <text x="115" y="127" font-size="9" fill="#c71585">(High & Forward)</text>
                
                <!-- Teeth -->
                <rect x="90" y="75" width="8" height="15" fill="white" stroke="#8b7355"/>
                <rect x="202" y="75" width="8" height="15" fill="white" stroke="#8b7355"/>
                <text x="75" y="85" font-size="10" fill="#8b7355">Teeth</text>
                
                <!-- Lips -->
                <path d="M 85 150 Q 150 155 215 150" fill="none" stroke="#d4756c" stroke-width="4" stroke-linecap="round"/>
                <text x="130" y="175" font-size="10" fill="#8b7355">Lips: Spread</text>
                
                <!-- Air flow arrow -->
                <path d="M 140 130 L 140 145" stroke="#4a90e2" stroke-width="2" marker-end="url(#arrowblue)"/>
                <defs>
                    <marker id="arrowblue" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="#4a90e2"/>
                    </marker>
                </defs>
            </svg>
        `,
        'vowel-back-high': `
            <svg viewBox="0 0 300 250" class="diagram-svg">
                <path d="M 50 50 Q 50 20 80 20 L 220 20 Q 250 20 250 50 L 250 200 Q 250 230 220 230 L 80 230 Q 50 230 50 200 Z" 
                      fill="#fef8f5" stroke="#8b7355" stroke-width="2"/>
                <path d="M 100 80 Q 150 70 200 80" fill="none" stroke="#d4a574" stroke-width="3"/>
                <text x="105" y="65" font-size="10" fill="#8b7355">Hard Palate</text>
                <path d="M 200 80 Q 220 85 230 100" fill="none" stroke="#d4a574" stroke-width="3" stroke-dasharray="3,3"/>
                <text x="200" y="95" font-size="10" fill="#8b7355">Soft Palate</text>
                
                <!-- Tongue - HIGH and BACK -->
                <ellipse cx="190" cy="105" rx="50" ry="25" fill="#ffb6c1" stroke="#ff69b4" stroke-width="2"/>
                <text x="170" y="110" font-size="11" font-weight="bold" fill="#c71585">Tongue</text>
                <text x="170" y="122" font-size="9" fill="#c71585">(High & Back)</text>
                
                <rect x="90" y="75" width="8" height="15" fill="white" stroke="#8b7355"/>
                <rect x="202" y="75" width="8" height="15" fill="white" stroke="#8b7355"/>
                
                <!-- Rounded lips -->
                <ellipse cx="150" cy="150" rx="25" ry="15" fill="none" stroke="#d4756c" stroke-width="4"/>
                <text x="120" y="175" font-size="10" fill="#8b7355">Lips: Rounded</text>
                
                <path d="M 180 120 L 165 145" stroke="#4a90e2" stroke-width="2" marker-end="url(#arrowblue2)"/>
                <defs>
                    <marker id="arrowblue2" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="#4a90e2"/>
                    </marker>
                </defs>
            </svg>
        `,
        'vowel-front-mid': `
            <svg viewBox="0 0 300 250" class="diagram-svg">
                <path d="M 50 50 Q 50 20 80 20 L 220 20 Q 250 20 250 50 L 250 200 Q 250 230 220 230 L 80 230 Q 50 230 50 200 Z" 
                      fill="#fef8f5" stroke="#8b7355" stroke-width="2"/>
                <path d="M 100 80 Q 150 70 200 80" fill="none" stroke="#d4a574" stroke-width="3"/>
                <text x="105" y="65" font-size="10" fill="#8b7355">Hard Palate</text>
                <path d="M 200 80 Q 220 85 230 100" fill="none" stroke="#d4a574" stroke-width="3" stroke-dasharray="3,3"/>
                
                <!-- Tongue - MID and FORWARD -->
                <ellipse cx="135" cy="125" rx="55" ry="22" fill="#ffb6c1" stroke="#ff69b4" stroke-width="2"/>
                <text x="115" y="130" font-size="11" font-weight="bold" fill="#c71585">Tongue</text>
                <text x="110" y="142" font-size="9" fill="#c71585">(Mid & Forward)</text>
                
                <rect x="90" y="75" width="8" height="15" fill="white" stroke="#8b7355"/>
                <rect x="202" y="75" width="8" height="15" fill="white" stroke="#8b7355"/>
                <path d="M 85 150 Q 150 157 215 150" fill="none" stroke="#d4756c" stroke-width="4" stroke-linecap="round"/>
                <text x="125" y="175" font-size="10" fill="#8b7355">Lips: Spread</text>
            </svg>
        `,
        'vowel-central': `
            <svg viewBox="0 0 300 250" class="diagram-svg">
                <path d="M 50 50 Q 50 20 80 20 L 220 20 Q 250 20 250 50 L 250 200 Q 250 230 220 230 L 80 230 Q 50 230 50 200 Z" 
                      fill="#fef8f5" stroke="#8b7355" stroke-width="2"/>
                <path d="M 100 80 Q 150 70 200 80" fill="none" stroke="#d4a574" stroke-width="3"/>
                <text x="105" y="65" font-size="10" fill="#8b7355">Hard Palate</text>
                <path d="M 200 80 Q 220 85 230 100" fill="none" stroke="#d4a574" stroke-width="3" stroke-dasharray="3,3"/>
                
                <!-- Tongue - CENTRAL (relaxed) -->
                <ellipse cx="155" cy="130" rx="50" ry="20" fill="#ffb6c1" stroke="#ff69b4" stroke-width="2"/>
                <text x="135" y="135" font-size="11" font-weight="bold" fill="#c71585">Tongue</text>
                <text x="130" y="147" font-size="9" fill="#c71585">(Central/Relaxed)</text>
                
                <rect x="90" y="75" width="8" height="15" fill="white" stroke="#8b7355"/>
                <rect x="202" y="75" width="8" height="15" fill="white" stroke="#8b7355"/>
                <path d="M 90 150 Q 150 155 210 150" fill="none" stroke="#d4756c" stroke-width="3" stroke-linecap="round"/>
                <text x="125" y="175" font-size="10" fill="#8b7355">Lips: Neutral</text>
            </svg>
        `,
        'vowel-back-mid': `
            <svg viewBox="0 0 300 250" class="diagram-svg">
                <path d="M 50 50 Q 50 20 80 20 L 220 20 Q 250 20 250 50 L 250 200 Q 250 230 220 230 L 80 230 Q 50 230 50 200 Z" 
                      fill="#fef8f5" stroke="#8b7355" stroke-width="2"/>
                <path d="M 100 80 Q 150 70 200 80" fill="none" stroke="#d4a574" stroke-width="3"/>
                <text x="105" y="65" font-size="10" fill="#8b7355">Hard Palate</text>
                <path d="M 200 80 Q 220 85 230 100" fill="none" stroke="#d4a574" stroke-width="3" stroke-dasharray="3,3"/>
                
                <!-- Tongue - MID and BACK -->
                <ellipse cx="180" cy="120" rx="48" ry="22" fill="#ffb6c1" stroke="#ff69b4" stroke-width="2"/>
                <text x="160" y="125" font-size="11" font-weight="bold" fill="#c71585">Tongue</text>
                <text x="160" y="137" font-size="9" fill="#c71585">(Mid & Back)</text>
                
                <rect x="90" y="75" width="8" height="15" fill="white" stroke="#8b7355"/>
                <rect x="202" y="75" width="8" height="15" fill="white" stroke="#8b7355"/>
                <ellipse cx="150" cy="152" rx="22" ry="13" fill="none" stroke="#d4756c" stroke-width="3"/>
                <text x="120" y="175" font-size="10" fill="#8b7355">Lips: Rounded</text>
            </svg>
        `,
        'vowel-front-low': `
            <svg viewBox="0 0 300 250" class="diagram-svg">
                <path d="M 50 50 Q 50 20 80 20 L 220 20 Q 250 20 250 50 L 250 200 Q 250 230 220 230 L 80 230 Q 50 230 50 200 Z" 
                      fill="#fef8f5" stroke="#8b7355" stroke-width="2"/>
                <path d="M 100 80 Q 150 70 200 80" fill="none" stroke="#d4a574" stroke-width="3"/>
                <text x="105" y="65" font-size="10" fill="#8b7355">Hard Palate</text>
                <path d="M 200 80 Q 220 85 230 100" fill="none" stroke="#d4a574" stroke-width="3" stroke-dasharray="3,3"/>
                
                <!-- Tongue - LOW and FORWARD -->
                <ellipse cx="125" cy="155" rx="50" ry="18" fill="#ffb6c1" stroke="#ff69b4" stroke-width="2"/>
                <text x="105" y="160" font-size="11" font-weight="bold" fill="#c71585">Tongue</text>
                <text x="105" y="172" font-size="9" fill="#c71585">(Low & Forward)</text>
                
                <rect x="90" y="75" width="8" height="15" fill="white" stroke="#8b7355"/>
                <rect x="202" y="75" width="8" height="15" fill="white" stroke="#8b7355"/>
                <path d="M 80 145 Q 150 165 220 145" fill="none" stroke="#d4756c" stroke-width="4" stroke-linecap="round"/>
                <text x="110" y="190" font-size="10" fill="#8b7355">Lips: Wide Open</text>
            </svg>
        `,
        'vowel-back-low': `
            <svg viewBox="0 0 300 250" class="diagram-svg">
                <path d="M 50 50 Q 50 20 80 20 L 220 20 Q 250 20 250 50 L 250 200 Q 250 230 220 230 L 80 230 Q 50 230 50 200 Z" 
                      fill="#fef8f5" stroke="#8b7355" stroke-width="2"/>
                <path d="M 100 80 Q 150 70 200 80" fill="none" stroke="#d4a574" stroke-width="3"/>
                <text x="105" y="65" font-size="10" fill="#8b7355">Hard Palate</text>
                <path d="M 200 80 Q 220 85 230 100" fill="none" stroke="#d4a574" stroke-width="3" stroke-dasharray="3,3"/>
                
                <!-- Tongue - LOW and BACK -->
                <ellipse cx="170" cy="150" rx="45" ry="18" fill="#ffb6c1" stroke="#ff69b4" stroke-width="2"/>
                <text x="150" y="155" font-size="11" font-weight="bold" fill="#c71585">Tongue</text>
                <text x="150" y="167" font-size="9" fill="#c71585">(Low & Back)</text>
                
                <rect x="90" y="75" width="8" height="15" fill="white" stroke="#8b7355"/>
                <rect x="202" y="75" width="8" height="15" fill="white" stroke="#8b7355"/>
                <ellipse cx="150" cy="155" rx="30" ry="18" fill="none" stroke="#d4756c" stroke-width="4"/>
                <text x="110" y="190" font-size="10" fill="#8b7355">Lips: Open & Rounded</text>
            </svg>
        `,
        'consonant-bilabial': `
            <svg viewBox="0 0 300 250" class="diagram-svg">
                <path d="M 50 50 Q 50 20 80 20 L 220 20 Q 250 20 250 50 L 250 200 Q 250 230 220 230 L 80 230 Q 50 230 50 200 Z" 
                      fill="#fef8f5" stroke="#8b7355" stroke-width="2"/>
                <path d="M 100 80 Q 150 70 200 80" fill="none" stroke="#d4a574" stroke-width="3"/>
                <text x="105" y="65" font-size="10" fill="#8b7355">Hard Palate</text>
                
                <!-- Tongue neutral -->
                <ellipse cx="150" cy="140" rx="45" ry="18" fill="#ffb6c1" stroke="#ff69b4" stroke-width="2"/>
                <text x="130" y="145" font-size="11" font-weight="bold" fill="#c71585">Tongue</text>
                
                <rect x="90" y="75" width="8" height="15" fill="white" stroke="#8b7355"/>
                <rect x="202" y="75" width="8" height="15" fill="white" stroke="#8b7355"/>
                
                <!-- LIPS PRESSED TOGETHER -->
                <line x1="85" y1="150" x2="215" y2="150" stroke="#d4756c" stroke-width="6" stroke-linecap="round"/>
                <text x="100" y="175" font-size="10" font-weight="bold" fill="#d4756c">Lips: Pressed</text>
                
                <!-- Air pressure indication -->
                <circle cx="150" cy="130" r="3" fill="#ff6b6b"/>
                <circle cx="160" cy="128" r="3" fill="#ff6b6b"/>
                <circle cx="140" cy="128" r="3" fill="#ff6b6b"/>
                <text x="110" y="120" font-size="9" fill="#ff6b6b">Air Pressure</text>
            </svg>
        `,
        'consonant-labiodental': `
            <svg viewBox="0 0 300 250" class="diagram-svg">
                <path d="M 50 50 Q 50 20 80 20 L 220 20 Q 250 20 250 50 L 250 200 Q 250 230 220 230 L 80 230 Q 50 230 50 200 Z" 
                      fill="#fef8f5" stroke="#8b7355" stroke-width="2"/>
                <path d="M 100 80 Q 150 70 200 80" fill="none" stroke="#d4a574" stroke-width="3"/>
                
                <ellipse cx="150" cy="140" rx="45" ry="18" fill="#ffb6c1" stroke="#ff69b4" stroke-width="2"/>
                <text x="130" y="145" font-size="11" font-weight="bold" fill="#c71585">Tongue</text>
                
                <!-- Upper teeth -->
                <rect x="90" y="75" width="8" height="18" fill="white" stroke="#8b7355" stroke-width="2"/>
                <text x="70" y="85" font-size="10" fill="#8b7355">Upper Teeth</text>
                
                <!-- Lower lip touching upper teeth -->
                <path d="M 85 155 Q 95 148 98 90" fill="none" stroke="#d4756c" stroke-width="5" stroke-linecap="round"/>
                <text x="100" y="175" font-size="10" font-weight="bold" fill="#d4756c">Lower Lip</text>
                
                <!-- Air flow -->
                <path d="M 105 100 L 115 110" stroke="#4a90e2" stroke-width="2" marker-end="url(#arrowblue3)"/>
                <path d="M 105 105 L 120 115" stroke="#4a90e2" stroke-width="2" marker-end="url(#arrowblue3)"/>
                <text x="115" y="125" font-size="9" fill="#4a90e2">Air</text>
                <defs>
                    <marker id="arrowblue3" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="#4a90e2"/>
                    </marker>
                </defs>
            </svg>
        `,
        'consonant-dental': `
            <svg viewBox="0 0 300 250" class="diagram-svg">
                <path d="M 50 50 Q 50 20 80 20 L 220 20 Q 250 20 250 50 L 250 200 Q 250 230 220 230 L 80 230 Q 50 230 50 200 Z" 
                      fill="#fef8f5" stroke="#8b7355" stroke-width="2"/>
                <path d="M 100 80 Q 150 70 200 80" fill="none" stroke="#d4a574" stroke-width="3"/>
                
                <!-- Tongue between teeth -->
                <ellipse cx="110" cy="100" rx="25" ry="12" fill="#ffb6c1" stroke="#ff69b4" stroke-width="2"/>
                <text x="85" y="105" font-size="10" font-weight="bold" fill="#c71585">Tongue Tip</text>
                
                <!-- Upper teeth -->
                <rect x="90" y="75" width="8" height="18" fill="white" stroke="#8b7355" stroke-width="2"/>
                <!-- Lower teeth -->
                <rect x="90" y="105" width="8" height="18" fill="white" stroke="#8b7355" stroke-width="2"/>
                <text x="65" y="115" font-size="9" fill="#8b7355">Between Teeth</text>
                
                <!-- Air flow -->
                <path d="M 105 95 L 120 105" stroke="#4a90e2" stroke-width="2" marker-end="url(#arrowblue4)"/>
                <defs>
                    <marker id="arrowblue4" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="#4a90e2"/>
                    </marker>
                </defs>
            </svg>
        `,
        'consonant-alveolar': `
            <svg viewBox="0 0 300 250" class="diagram-svg">
                <path d="M 50 50 Q 50 20 80 20 L 220 20 Q 250 20 250 50 L 250 200 Q 250 230 220 230 L 80 230 Q 50 230 50 200 Z" 
                      fill="#fef8f5" stroke="#8b7355" stroke-width="2"/>
                
                <!-- Alveolar ridge highlighted -->
                <path d="M 100 80 Q 150 70 200 80" fill="none" stroke="#ff6b6b" stroke-width="4"/>
                <text x="95" y="65" font-size="10" font-weight="bold" fill="#ff6b6b">Alveolar Ridge</text>
                
                <!-- Tongue tip touching ridge -->
                <ellipse cx="120" cy="85" rx="20" ry="10" fill="#ffb6c1" stroke="#ff69b4" stroke-width="2"/>
                <ellipse cx="150" cy="130" rx="45" ry="18" fill="#ffb6c1" stroke="#ff69b4" stroke-width="2"/>
                <text x="130" y="135" font-size="11" font-weight="bold" fill="#c71585">Tongue</text>
                
                <rect x="90" y="75" width="8" height="15" fill="white" stroke="#8b7355"/>
                <rect x="202" y="75" width="8" height="15" fill="white" stroke="#8b7355"/>
                
                <path d="M 90 150 Q 150 155 210 150" fill="none" stroke="#d4756c" stroke-width="3"/>
            </svg>
        `,
        'consonant-postalveolar': `
            <svg viewBox="0 0 300 250" class="diagram-svg">
                <path d="M 50 50 Q 50 20 80 20 L 220 20 Q 250 20 250 50 L 250 200 Q 250 230 220 230 L 80 230 Q 50 230 50 200 Z" 
                      fill="#fef8f5" stroke="#8b7355" stroke-width="2"/>
                <path d="M 100 80 Q 150 70 200 80" fill="none" stroke="#d4a574" stroke-width="3"/>
                
                <!-- Tongue raised behind alveolar ridge -->
                <ellipse cx="145" cy="95" rx="35" ry="15" fill="#ffb6c1" stroke="#ff69b4" stroke-width="2"/>
                <text x="120" y="100" font-size="10" font-weight="bold" fill="#c71585">Tongue</text>
                <text x="110" y="112" font-size="9" fill="#c71585">(Behind Ridge)</text>
                
                <rect x="90" y="75" width="8" height="15" fill="white" stroke="#8b7355"/>
                <rect x="202" y="75" width="8" height="15" fill="white" stroke="#8b7355"/>
                
                <!-- Rounded lips -->
                <ellipse cx="150" cy="150" rx="25" ry="15" fill="none" stroke="#d4756c" stroke-width="4"/>
                <text x="120" y="175" font-size="10" fill="#8b7355">Lips: Rounded</text>
            </svg>
        `,
        'consonant-velar': `
            <svg viewBox="0 0 300 250" class="diagram-svg">
                <path d="M 50 50 Q 50 20 80 20 L 220 20 Q 250 20 250 50 L 250 200 Q 250 230 220 230 L 80 230 Q 50 230 50 200 Z" 
                      fill="#fef8f5" stroke="#8b7355" stroke-width="2"/>
                <path d="M 100 80 Q 150 70 200 80" fill="none" stroke="#d4a574" stroke-width="3"/>
                
                <!-- Soft palate/velum highlighted -->
                <path d="M 200 80 Q 220 85 230 100" fill="none" stroke="#ff6b6b" stroke-width="4" stroke-dasharray="3,3"/>
                <text x="185" y="95" font-size="10" font-weight="bold" fill="#ff6b6b">Soft Palate</text>
                
                <!-- Tongue back raised to velum -->
                <ellipse cx="195" cy="95" rx="30" ry="15" fill="#ffb6c1" stroke="#ff69b4" stroke-width="2"/>
                <ellipse cx="150" cy="130" rx="45" ry="18" fill="#ffb6c1" stroke="#ff69b4" stroke-width="2"/>
                <text x="125" y="135" font-size="11" font-weight="bold" fill="#c71585">Tongue Back</text>
                
                <rect x="90" y="75" width="8" height="15" fill="white" stroke="#8b7355"/>
                <path d="M 90 150 Q 150 155 210 150" fill="none" stroke="#d4756c" stroke-width="3"/>
            </svg>
        `,
        'consonant-glottal': `
            <svg viewBox="0 0 300 250" class="diagram-svg">
                <path d="M 50 50 Q 50 20 80 20 L 220 20 Q 250 20 250 50 L 250 200 Q 250 230 220 230 L 80 230 Q 50 230 50 200 Z" 
                      fill="#fef8f5" stroke="#8b7355" stroke-width="2"/>
                <path d="M 100 80 Q 150 70 200 80" fill="none" stroke="#d4a574" stroke-width="3"/>
                
                <!-- Tongue neutral -->
                <ellipse cx="150" cy="130" rx="45" ry="18" fill="#ffb6c1" stroke="#ff69b4" stroke-width="2"/>
                <text x="130" y="135" font-size="11" font-weight="bold" fill="#c71585">Tongue</text>
                
                <rect x="90" y="75" width="8" height="15" fill="white" stroke="#8b7355"/>
                <path d="M 90 150 Q 150 155 210 150" fill="none" stroke="#d4756c" stroke-width="3"/>
                
                <!-- Glottis/throat indication -->
                <circle cx="220" cy="150" r="15" fill="none" stroke="#ff6b6b" stroke-width="3"/>
                <text x="195" y="180" font-size="10" font-weight="bold" fill="#ff6b6b">From Throat</text>
                
                <!-- Air flow from throat -->
                <path d="M 210 150 L 180 145" stroke="#4a90e2" stroke-width="2" marker-end="url(#arrowblue5)"/>
                <defs>
                    <marker id="arrowblue5" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="#4a90e2"/>
                    </marker>
                </defs>
            </svg>
        `
    };

    return diagrams[diagramType] || diagrams['vowel-central'];
}

// Initialize speech synthesis
let synth = window.speechSynthesis;
let currentUtterance = null;

// Get American English voice
function getAmericanVoice() {
    const voices = synth.getVoices();
    const usVoice = voices.find(voice =>
        voice.lang === 'en-US' && voice.name.includes('Google')
    ) || voices.find(voice =>
        voice.lang === 'en-US'
    ) || voices[0];

    return usVoice;
}

// Load voices
if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = getAmericanVoice;
}

// Play phoneme sound
function playPhoneme(soundKey) {
    if (synth.speaking) {
        synth.cancel();
    }

    const soundData = phonemeData[soundKey];
    if (!soundData) return;

    currentUtterance = new SpeechSynthesisUtterance(soundData.text);
    currentUtterance.voice = getAmericanVoice();
    currentUtterance.lang = 'en-US';
    currentUtterance.rate = soundData.rate;
    currentUtterance.pitch = 1.0;
    currentUtterance.volume = 1.0;

    synth.speak(currentUtterance);
}

// Update pronunciation guide
function updatePronunciationGuide(soundKey) {
    const data = phonemeData[soundKey];
    if (!data) return;

    const guideContent = document.getElementById('guideContent');

    const html = `
        <div class="guide-active">
            <div class="phoneme-display">
                <div class="ipa-large">${data.ipa}</div>
                <div class="example-word">"${data.text}"</div>
            </div>
            
            <div class="mouth-diagram">
                <h3>Mouth Position</h3>
                ${createMouthDiagram(data.diagram)}
            </div>
            
            <div class="articulation-details">
                <h3>How to Pronounce</h3>
                
                <div class="detail-item">
                    <div class="detail-label">Type</div>
                    <div class="detail-value">${data.type}</div>
                </div>
                
                <div class="detail-item">
                    <div class="detail-label">Tongue Position</div>
                    <div class="detail-value">${data.tongue}</div>
                </div>
                
                <div class="detail-item">
                    <div class="detail-label">Lip Shape</div>
                    <div class="detail-value">${data.lips}</div>
                </div>
                
                <div class="detail-item">
                    <div class="detail-label">Jaw</div>
                    <div class="detail-value">${data.jaw}</div>
                </div>
                
                <div class="detail-item">
                    <div class="detail-label">Voicing</div>
                    <div class="detail-value">${data.voicing}</div>
                </div>
                
                <div class="detail-item">
                    <div class="detail-label">💡 Tips</div>
                    <div class="detail-value"><strong>${data.tips}</strong></div>
                </div>
            </div>
        </div>
    `;

    guideContent.innerHTML = html;
}

// Initialize phonemes
function initializePhonemes() {
    const phonemeCells = document.querySelectorAll('.phoneme-cell');

    phonemeCells.forEach(cell => {
        cell.addEventListener('click', function () {
            const soundKey = this.getAttribute('data-sound');

            // Add playing animation
            this.classList.add('playing');
            setTimeout(() => {
                this.classList.remove('playing');
            }, 600);

            // Play sound
            playPhoneme(soundKey);

            // Update pronunciation guide
            updatePronunciationGuide(soundKey);
        });

        // Keyboard accessibility
        cell.setAttribute('tabindex', '0');
        cell.setAttribute('role', 'button');
        cell.setAttribute('aria-label', `Pronounce ${cell.querySelector('.ipa').textContent}`);

        cell.addEventListener('keypress', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// Add speaker buttons to phoneme cells for isolated phoneme pronunciation
function addPhonemeSpeakers() {
    const phonemeCells = document.querySelectorAll('.phoneme-cell');

    phonemeCells.forEach(cell => {
        const soundKey = cell.getAttribute('data-sound');
        const ipaSymbol = cell.querySelector('.ipa').textContent;

        // Create speaker button
        const speakerBtn = document.createElement('span');
        speakerBtn.className = 'phoneme-speaker';
        speakerBtn.innerHTML = `
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
            </svg>
        `;
        speakerBtn.setAttribute('title', `Pronounce phoneme ${ipaSymbol}`);
        speakerBtn.setAttribute('role', 'button');
        speakerBtn.setAttribute('tabindex', '0');
        speakerBtn.setAttribute('aria-label', `Pronounce phoneme ${ipaSymbol}`);

        // Click handler for isolated phoneme sound
        speakerBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering cell click

            // Visual feedback
            speakerBtn.style.transform = 'scale(1.4)';
            setTimeout(() => {
                speakerBtn.style.transform = '';
            }, 200);

            // Pronounce just the phoneme sound
            pronouncePhoneme(ipaSymbol);
        });

        // Keyboard support
        speakerBtn.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.stopPropagation();
                speakerBtn.click();
            }
        });

        // Add to cell
        cell.appendChild(speakerBtn);
    });
}

// Pronounce isolated phoneme sound
function pronouncePhoneme(ipaSymbol) {
    if (synth.speaking) {
        synth.cancel();
    }

    // Map IPA symbols to pronounceable sounds
    const phonemeMap = {
        // Vowels
        'iː': 'eee',
        'ɪ': 'ih',
        'ʊ': 'uh',
        'uː': 'ooo',
        'ɪə': 'ear',
        'eɪ': 'ay',
        'e': 'eh',
        'ə': 'uh',
        'ɜː': 'er',
        'ɔː': 'aw',
        'ʊə': 'oor',
        'ɔɪ': 'oy',
        'əʊ': 'oh',
        'æ': 'ah',
        'ʌ': 'uh',
        'ɑː': 'aah',
        'ɒ': 'oh',
        'eə': 'air',
        'aɪ': 'eye',
        'aʊ': 'ow',
        // Consonants
        'p': 'puh',
        'b': 'buh',
        't': 'tuh',
        'd': 'duh',
        'tʃ': 'ch',
        'dʒ': 'j',
        'k': 'kuh',
        'g': 'guh',
        'f': 'fff',
        'v': 'vvv',
        'θ': 'th',
        'ð': 'th',
        's': 'sss',
        'z': 'zzz',
        'ʃ': 'sh',
        'ʒ': 'zh',
        'm': 'mmm',
        'n': 'nnn',
        'ŋ': 'ng',
        'j': 'yuh',
        'l': 'lll',
        'r': 'rrr',
        'w': 'wuh',
        'h': 'huh'
    };

    const sound = phonemeMap[ipaSymbol] || ipaSymbol;

    const utterance = new SpeechSynthesisUtterance(sound);
    utterance.voice = getAmericanVoice();
    utterance.lang = 'en-US';
    utterance.rate = 0.6; // Slower for isolated sounds
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    synth.speak(utterance);
}


// Enhance example words with IPA transcriptions and speaker icons
function enhanceExampleWords() {
    const exampleContainers = document.querySelectorAll('.examples');

    exampleContainers.forEach(container => {
        const spans = container.querySelectorAll('span');

        spans.forEach(span => {
            const word = span.textContent.trim();
            const ipa = getWordTranscription(word);

            // Create new structure
            const wordDiv = document.createElement('div');
            wordDiv.className = 'example-word';

            // Word text
            const wordText = document.createElement('span');
            wordText.className = 'word-text';
            wordText.textContent = word;

            // IPA transcription
            const wordIpa = document.createElement('span');
            wordIpa.className = 'word-ipa';
            wordIpa.textContent = ipa;

            // Speaker icon
            const speakerIcon = document.createElement('span');
            speakerIcon.className = 'speaker-icon';
            speakerIcon.innerHTML = `
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
            `;
            speakerIcon.setAttribute('title', `Pronounce "${word}"`);
            speakerIcon.setAttribute('role', 'button');
            speakerIcon.setAttribute('tabindex', '0');
            speakerIcon.setAttribute('aria-label', `Pronounce ${word}`);

            // Add click handler
            speakerIcon.addEventListener('click', (e) => {
                e.stopPropagation();
                speakWord(word);

                // Visual feedback
                speakerIcon.style.transform = 'scale(1.3)';
                setTimeout(() => {
                    speakerIcon.style.transform = '';
                }, 200);
            });

            // Keyboard support
            speakerIcon.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    speakerIcon.click();
                }
            });

            // Assemble
            wordDiv.appendChild(wordText);
            wordDiv.appendChild(wordIpa);
            wordDiv.appendChild(speakerIcon);

            // Replace original span
            span.replaceWith(wordDiv);
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        getAmericanVoice();
        initializePhonemes();
        enhanceExampleWords(); // Add IPA and speaker icons
        addPhonemeSpeakers(); // Add phoneme speaker buttons
    }, 100);

    if (!('speechSynthesis' in window)) {
        alert('Sorry, your browser does not support text-to-speech. Please use a modern browser like Chrome, Firefox, or Safari.');
    }
});


// Handle page visibility
document.addEventListener('visibilitychange', function () {
    if (document.hidden && synth.speaking) {
        synth.cancel();
    }
});
