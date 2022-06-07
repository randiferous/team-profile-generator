const generateManager = function (managerArray) {
    return `
    <div class="card has-text-centered">
        <div class="card-header is-flex is-justify-content-center is-flex-direction-column py-2 has-background-warning">
            <h1 class="is-size-4 has-text-weight-semibold">
            ${managerArray[0].name} </h1>
            <h2 class="is-size-5">
            Manager </h2>
        </div>
        <div class="card-content">
            ID: ${managerArray[0].id} <br>
            Email: <a href="mailto:${managerArray[0].email}">${managerArray[0].email}</a><br>
            Office number: ${managerArray[0].officeNumber}
        </div>
    </div>
    `;
}

const generatePage = function (managerArray) {
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
        <section class="section my-6 is-flex is-justify-content-center">
            ${generateManager(managerArray)}
        </section>
    </body>
    </html>
    `
} 

module.exports = generatePage;
