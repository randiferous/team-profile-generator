const generateManager = function (manager) {
    return `
    <div class="card has-text-centered">
        <div class="card-header is-flex is-justify-content-center is-flex-direction-column py-2 has-background-warning">
            <h1 class="is-size-4 has-text-weight-semibold">
            ${manager.name} </h1>
            <h2 class="is-size-5">
            Manager </h2>
        </div>
        <div class="card-content">
            ID: ${manager.id} <br>
            Email: <a href="mailto:${manager.email}" target="_blank">${manager.email}</a><br>
            Office number: ${manager.officeNumber}
        </div>
    </div>
    `;
}

const generateEngineer = function (engineer) {
    return `
    <div class="card has-text-centered">
        <div class="card-header is-flex is-justify-content-center is-flex-direction-column py-2 has-background-warning">
            <h1 class="is-size-4 has-text-weight-semibold">
            ${engineer.name} </h1>
            <h2 class="is-size-5">
            Engineer </h2>
        </div>
        <div class="card-content">
            ID: ${engineer.id} <br>
            Email: <a href="mailto:${engineer.email}" target="_blank">${engineer.email}</a><br>
            GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a>
        </div>
    </div>
    `;
}

const generateIntern = function (intern) {
    return `
    <div class="card has-text-centered">
        <div class="card-header is-flex is-justify-content-center is-flex-direction-column py-2 has-background-warning">
            <h1 class="is-size-4 has-text-weight-semibold">
            ${intern.name} </h1>
            <h2 class="is-size-5">
            Intern </h2>
        </div>
        <div class="card-content">
            ID: ${intern.id} <br>
            Email: <a href="mailto:${intern.email}" target="_blank">${intern.email}</a><br>
            School: ${intern.school}
        </div>
    </div>
    `;
}

const generatePage = function (employeeArray) {
    const employeeCards = [];

    for (let i = 0; i < employeeArray.length; i++) {

        if (employeeArray[i].getRole() === 'Manager') {
            const manager = employeeArray[i];
            const managerCard = generateManager(manager)
            employeeCards.push(managerCard);
        }
        else if (employeeArray[i].getRole() === 'Engineer') {
            const engineer = employeeArray[i];
            const engineerCard = generateEngineer(engineer)
            employeeCards.push(engineerCard);
        }
        else if (employeeArray[i].getRole() === 'Intern') {
            const intern = employeeArray[i];
            const internCard = generateIntern(intern)
            employeeCards.push(internCard);
        }
    }

    return `
    <!DOCTYPE html>
    <html lang="en" class="has-background-light">
    
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile Generator</title>
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <link rel="stylesheet" href="style.css">
    
    <body>
        <nav class="navbar has-background-primary">
            <p class="nav-item mx-auto my-6 is-size-2 has-text-weight-bold">
            My Team
            </p>
        </nav>
        <section class="section my-6 is-flex is-justify-content-center is-justify-content-space-evenly">
            ${employeeCards}
        </section>
        <footer class="footer has-background-primary">
        </footer>
    </body>
    </html>
    `
} 

module.exports = generatePage;
