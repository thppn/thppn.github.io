fetch(`data/timeline.json?nocache=${Date.now()}`)
    .then(res => res.json())
    .then(data => {
    const container = document.getElementById('timeline');
    const length = data.length;
    var i = 0;
    data.forEach(slot => {
        const card = document.createElement('li');
        card.innerHTML = `
        <div class="${length % i++ === 0 ? 'direction-l' : 'direction-r'}">
            <div class="flag-wrapper">
                <span class="hexa"></span>
                <span class="flag">${slot.title}</span>
                <span class="time-wrapper"><span class="time">${slot.date}</span></span>
            </div>
            <div class="desc project-card">
                <a target="_blank" rel="noopener noreferrer" href="${slot.link || '#'}">${slot.description}</a>
            </div>
        </div>
        `;
        container.appendChild(card);
    });
});
