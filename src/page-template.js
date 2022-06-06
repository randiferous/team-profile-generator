const generateManager = managerResponse => {
    if (!managerResponse) {
        return ''
    }

    return `
    `
}

module.exports = template => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile Generator</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <link rel="stylesheet" href="style.css">

    <body>
        ${generateManager}
    </body>
    </html>
    `

}