#!/usr/bin/env python3
"""
Script to insert video section into the updatePronunciationGuide function
"""

# Read the script.js file
with open('script.js', 'r') as f:
    lines = f.readlines()

# Find the line with "</div>" after phoneme-display
# We need to insert the video section after line 969
insert_position = 969  # After the closing </div> of phoneme-display

# Video section HTML to insert
video_section = '''            
            ${data.videoTimestamp ? `
            <div class="video-section">
                <h3>Video Tutorial</h3>
                <div class="video-player-wrapper">
                    <div id="youtubePlayerContainer"></div>
                </div>
                <button class="play-video-btn" onclick="playVideoAtTimestamp(${data.videoTimestamp})">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                    Play Video Tutorial
                </button>
            </div>
            ` : ''}
'''

# Insert the video section
lines.insert(insert_position, video_section + '\n')

# Also need to add initialization code after guideContent.innerHTML = html;
# Find line 1012 (now 1013 after insertion) and add after it
for i, line in enumerate(lines):
    if 'guideContent.innerHTML = html;' in line:
        init_code = '''    
    // Initialize YouTube player after DOM update
    if (data.videoTimestamp && typeof initializeYouTubePlayer === 'function') {
        setTimeout(() => initializeYouTubePlayer(), 100);
    }
'''
        lines.insert(i + 1, init_code)
        break

# Write the modified content back
with open('script.js', 'w') as f:
    f.writelines(lines)

print("Successfully updated script.js with video integration!")
