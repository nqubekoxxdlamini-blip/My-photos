const photos = [
    {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop',
        title: 'Mountain Landscape'
    },
    {
        url: 'https://images.unsplash.com/photo-1471879832106-c7ab9019e38d?w=500&h=500&fit=crop',
        title: 'Forest Path'
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    photos.forEach(photo => {
        const div = document.createElement('div');
        div.className = 'photo-item';
        div.innerHTML = `<img src="${photo.url}" alt="${photo.title}">`;
        gallery.appendChild(div);
    });
});
