const inquirer = require('inquirer')

inquirer.prompt([
    {
        type: "input",
        name: "username",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "education",
        message: "What is your most relevant education?"
    },
    {
        type: "input",
        name: "job",
        message: "What was/is your most recent and relevant job position?"
    },
    {
        type: "input",
        name: "funFact",
        message: "Tell me a fun fact about yourself!"
    },
    {
        type: "input",
        name: "githubUsername",
        message: "What is GitHub profile username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "list",
        name: "color",
        message: "Choose one of the folloring colors for your portfolio theme!",
        choices: ["pink", "blue", "green", "purple", "orange", "red", "white"]
    }
]).then ((data) => {
    const filledFormText = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Portfolio</title>
</head>
<body class="${data.color}">
    <header>
        <h1>Welcome to ${data.username}'s Portfolio!</h1>
    </header>
    <main>
        <div>
            <h2>Relevant education</h2>
            <p>${data.education}</p>
        </div>
        <div>
            <h2>Last/current Job</h2>
            <p>${data.job}</p>
        </div>
        <div>
            <h2>Fun fact about me</h2>
            <p>${data.funFact}</p>
        </div>
        <div>
            <h2>My GitHuhb profile</h2>
            <p><a href="https://github.com/${data.githubUsername}" target="_blank">${data.githubUsername}</a></p>
        </div>
        <div>
            <h2>Contact me</h2>
            <p>${data.email}</p>
        </div>
    </main>
</body>
</html>
`
const fs = require('fs')
fs.writeFile("index.html", filledFormText, (err) => {
    if(err){
        throw err
    }
})
})

