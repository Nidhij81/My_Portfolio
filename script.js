// Dynamically load projects from projects.json
fetch('projects.json')
    .then(response => response.json())
    .then(projects => {
        const list = document.getElementById('projects-list');
        projects.forEach(proj => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <h3>${proj.title}</h3>
                <p>${proj.description}</p>
                <a href="${proj.link}" target="_blank">View Project</a>
            `;
            list.appendChild(card);
        });
    });

// Contact form handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    };

    fetch('http://localhost:5000/contact', { // Change to deployed backend URL
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(res => res.json())
      .then(resp => {
        document.getElementById('form-response').textContent = resp.message;
        form.reset();
      }).catch(() => {
        document.getElementById('form-response').textContent = "Server error. Please try again later.";
      });
});
