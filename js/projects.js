fetch(`data/projects.json?nocache=${Date.now()}`)
    .then(res => res.json())
    .then(data => {
    const container = document.getElementById('projects');
    data.forEach(project => {
        const card = document.createElement('div');
        card.className = "project-container";

        // Image and name
        card.innerHTML = `
        <div class="project-image">
            <img src="${project.img}" alt="${project.name}">
        </div>
        <div class="project-name">
            ${project.name}
        </div>
        <div class="year">
            <h4>Year</h4>
            <span>${project.year}</span>
        </div>`;

        // First up to 3 languages
        const langList = project.lang.slice(0, 3).map(lang => `<li>${lang}</li>`).join('');
        card.innerHTML += `
        <div class="lang">
            <h4>Languages</h4>
            <ul>${langList}</ul>
        </div>`;

        // First up to 3 tags (tech)
        const tagList = project.tags.slice(0, 3).map(tag => `<li>${tag}</li>`).join('');
        card.innerHTML += `
        <div class="tech">
            <h4>Tech</h4>
            <ul>${tagList}</ul>
        </div>`;

        // Links
        card.innerHTML += `
        <div class="project-links">
            <a target="_blank" rel="noopener noreferrer" href="${project.demo}">Demo</a>
            <a target="_blank" rel="noopener noreferrer" href="${project.repo}">Code</a>
        </div>`;

        container.appendChild(card);
    });
    });
