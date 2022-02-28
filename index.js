var inquirer = require('inquirer');
//const prompts = require('inquirer');

function userInput(){
//this is going to ask the user questions like "what does this do or that do title etc."
    return 
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your Project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Tell the world about your project. What should people know?'
        },
        {
            type: 'input',
            name: "installation_instructions",
            message: "What steps are necessary for a someone to install your project?"
        },
        {
            type: "input",
            name: "usage_information",
            message: "How can your project be used? How do you use it?"
        },
        {
            type: "input",
            name:"contributing",
            message:"What steps are necessary to become a contributor to this project? Who is/has contributed to this project?"
        },
        {
            type: "input",
            name:"testing",
            message:"What tests are included in this project? How can this project be tested?"
        }

    ])
}

async function init(){
    //
}

init();