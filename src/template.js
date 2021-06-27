const internTemplating = internData => {
    if (!internData) {
        return ''
    }
    let allInterns = ''

    internData.forEach(element => {
        allInterns = allInterns + `
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
        `
    });
    return allInterns;
}

const managerTemplating = managerData => {
    if (!managerData) {
        return ''
    }
    let allManagers = ''

    managerData.forEach(element => {
        allManagers = allManagers + `
        <div class="card">
        <article class="panel is-link">
            <div class="panel-heading">
                <img class="is-vcentered" src='../images/Legosi-png.png'>
                <p class="title is-3">${element.name}</p>
                <p class="title is-4">Manager</p>
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
                Office Number: ${element.officeNumber}
            </a>
        </article>
    </div>    
        `
    });
    return allManagers
}

const engineerTemplating = engineerData => {
    if (!engineerData) {
        return ''
    }
    let allEngineers = ''

    engineerData.forEach(element => {
        allEngineers = allEngineers + `
        <div class="card">
        <article class="panel is-link">
            <div class="panel-heading">
                <img class="is-vcentered" src='../images/Legosi-png.png'>
                <p class="title is-3">${element.name}</p>
                <p class="title is-4">Engineer</p>
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
                GitHub: ${element.github}
            </a>
        </article>
    </div>    
        `
    });
    return allEngineers
}



const htmlTemplate = employeeData => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="../src/style.css">
    <title>Employees</title>
</head>

<body>
    <header class="title is-2">
        Employees
    </header>

    <main>
        ${employeeData}
    </main>
</body>

</html>
    `
}
module.exports = { internTemplating, managerTemplating, engineerTemplating, htmlTemplate }