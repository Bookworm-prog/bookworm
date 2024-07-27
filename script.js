function addSoundCloudEmbed(url) {
    const embedContainer = document.getElementById('soundcloud-embed-container');
    
    if (!embedContainer) {
        console.error('SoundCloud embed container not found.');
        return;
    }

    const iframe = document.createElement('iframe');
    
    iframe.width = '100%';
    iframe.height = '166';
    iframe.scrolling = 'no';
    iframe.frameBorder = 'no';
    iframe.allow = 'autoplay';
    iframe.src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;

    embedContainer.appendChild(iframe);
}

// List of your SoundCloud track URLs (base URLs only)
const soundCloudLinks = [
    'https://soundcloud.com/kvmi7einxn/electric-butterfly',
    'https://soundcloud.com/kvmi7einxn/anthrax'
];

// Add all SoundCloud embeds to the page
document.addEventListener('DOMContentLoaded', () => {
    soundCloudLinks.forEach(url => addSoundCloudEmbed 'https://soundcloud.com/kvmi7einxn/electric-butterfly',
    'https://soundcloud.com/kvmi7einxn/anthrax'
    (url));
});

