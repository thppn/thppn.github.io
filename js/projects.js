fetch(`data/projects.json?nocache=${Date.now()}`)
    .then(res => res.json())
    .then(data => {
    const container = document.getElementById('projects');
    data.forEach(project => {
        const card = document.createElement('div');
        card.className = "project-container"
        card.innerHTML = `
        <div class="project-image">
            <img src="${project.img}"></img>
        </div>
        <div class="lang">
            <h4>Languages</h4>
            <ul>
                <li>${project.lang[0]}</li>
                <li>${project.lang[1]}</li>
            </ul>
        </div>
        <div class="year">
            <h4>Year</h4>
                <span>${project.year}</span>
            </div>
        <div class="tech">
            <h4>Tech</h4>
            <ul>
                <li>${project.tags[0]}</li>
                <li>${project.tags[1]}</li>
                <li>${project.tags[2]}</li>
            </ul>
        </div>
        <div class="project-name">
            ${project.name}
        </div>`
        card.innerHTML += `
        <div class="project-links">
            <a target="_blank" rel="noopener noreferrer" href="${project.demo}">Demo</a>
            <a target="_blank" rel="noopener noreferrer" href="${project.repo}">Code</a>
        </div>`

        container.appendChild(card);
    });
    });
