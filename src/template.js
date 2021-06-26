const internTemplating = internData => {
    if (!internData) {
        return ''
    }

    internData.forEach(element => {
        console.log(`
        <div class="card">
        <article class="panel is-link">
            <div class="panel-heading">
                <img class="is-vcentered" src='../images/Legosi-png.png'>
                <p class="title is-3">${element.name}</p>
                <p class="title is-4">Intern</p>
            </div>
            <a class="panel-block">
                <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                ID: ${element.id}
            </a>
            <a class="panel-block">
                <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                Email: ${element.email}
            </a>
            <a class="panel-block">
                <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                School: ${element.school}
            </a>
        </article>
    </div>    
        `)
    });
}

const managerTemplating = managerData => {
    if (!managerData) {
        return ''
    }

    managerData.forEach(element => {
        console.log(`
        <div class="card">
        <article class="panel is-link">
            <div class="panel-heading">
                <img class="is-vcentered" src='../images/Legosi-png.png'>
                <p class="title is-3">${element.name}</p>
                <p class="title is-4">Intern</p>
            </div>
            <a class="panel-block">
                <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                ID: ${element.id}
            </a>
            <a class="panel-block">
                <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                Email: ${element.email}
            </a>
            <a class="panel-block">
                <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                School: ${element.office}
            </a>
        </article>
    </div>    
        `)
    });
}

const engineerTemplating = engineerData => {
    if (!engineerData) {
        return ''
    }

    engineerData.forEach(element => {
        console.log(`
        <div class="card">
        <article class="panel is-link">
            <div class="panel-heading">
                <img class="is-vcentered" src='../images/Legosi-png.png'>
                <p class="title is-3">${element.name}</p>
                <p class="title is-4">Intern</p>
            </div>
            <a class="panel-block">
                <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                ID: ${element.id}
            </a>
            <a class="panel-block">
                <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                Email: ${element.email}
            </a>
            <a class="panel-block">
                <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                School: ${element.github}
            </a>
        </article>
    </div>    
        `)
    });
}

module.exports = { internTemplating, managerTemplating, engineerTemplating }