const generateManager = function (employeeArray) {
    return `
    <div class="card has-text-centered">
        <div class="card-header is-flex is-justify-content-center is-flex-direction-column py-2 has-background-warning">
            <h1 class="is-size-4 has-text-weight-semibold">
            ${employeeArray[0].name} </h1>
            <h2 class="is-size-5">
            Manager </h2>
        </div>
        <div class="card-content">
            ID: ${employeeArray[0].id} <br>
            Email: <a href="mailto:${employeeArray[0].email}">${employeeArray[0].email}</a><br>
            Office number: ${employeeArray[0].officeNumber}
        </div>
    </div>
    `;
}

const generateEngineer = function (employeeArray) {
    return `
    <div class="card has-text-centered">
        <div class="card-header is-flex is-justify-content-center is-flex-direction-column py-2 has-background-warning">
            <h1 class="is-size-4 has-text-weight-semibold">
            ${employeeArray[1].name} </h1>
            <h2 class="is-size-5">
            Engineer </h2>
        </div>
        <div class="card-content">
            ID: ${employeeArray[1].id} <br>
            Email: <a href="mailto:${employeeArray[1].email}">${employeeArray[1].email}</a><br>
            GitHub: <a href="https://github.com/${employeeArray[1].github}">${employeeArray[1].github}</a>
        </div>
    </div>
    `;
}

const generateIntern = function (employeeArray) {
    return `
    <div class="card has-text-centered">
        <div class="card-header is-flex is-justify-content-center is-flex-direction-column py-2 has-background-warning">
            <h1 class="is-size-4 has-text-weight-semibold">
            ${employeeArray[2].name} </h1>
            <h2 class="is-size-5">
            Intern </h2>
        </div>
        <div class="card-content">
            ID: ${employeeArray[2].id} <br>
            Email: <a href="mailto:${employeeArray[2].email}">${employeeArray[2].email}</a><br>
            School: ${employeeArray[2].school}
        </div>
    </div>
    `;
}

const generatePage = function (employeeArray) {
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
            ${generateManager(employeeArray)}
            ${generateEngineer(employeeArray)}
            ${generateIntern(employeeArray)}
        </section>
        <footer class="footer has-background-primary">
        </footer>
    </body>
    </html>
    `
} 

module.exports = generatePage;
