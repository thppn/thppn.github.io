fetch(`data/projects.json?nocache=${Date.now()}`)
    .then(res => res.json())
    .then(data => {
    const container = document.getElementById('projects');
    data.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card'
        card.innerHTML = `
			<h3 class="project-title">${project.name}</h3>
			<p class="project-desc">${project.description}</p>
			<div class="project-links">
			<a target="_blank" rel="noopener noreferrer" href="${project.demo}">Live Demo</a>
			<a target="_blank" rel="noopener noreferrer" href="${project.repo}">Source Code</a>
			</div>
        `;
        container.appendChild(card);
    });
    });
