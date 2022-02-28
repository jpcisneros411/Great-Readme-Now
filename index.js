var inquirer = require('inquirer');
//const prompts = require('inquirer');

function userInput(){
//this is going to ask the user questions like "what does this do or that do title etc."
    return 
    inquirer.prompt([
        {
            //For title
            type: 'input',
            name: 'title',
            message: 'What is the name of your Project?'
        },
        {
            //For description
            type: 'input',
            name: 'description',
            message: 'Tell the world about your project. What should people know?'
        },
        {
            //for install
            type: 'input',
            name: "installation_instructions",
            message: "What steps are necessary for a someone to install your project?"
        },
        {
            //for usage
            type: "input",
            name: "usage_information",
            message: "How can your project be used? How do you use it?"
        },
        {   
            //for contribution
            type: "input",
            name:"contributing",
            message:"What steps are necessary to become a contributor to this project? Who is/has contributed to this project?"
        },
        {
            //for tests
            type: "input",
            name:"testing",
            message:"What tests are included in this project? How can this project be tested?"
        },
        {
            //for licenses
            type: "checkbox",
            name: "licenses",
            message: "Which license is this?",
            choices: [
                { name: 'MIT License',short:'MIT',value:"MIT",checked:false},
                { name: 'GNU GPLv3',short:'GPL',value:"GPL",checked:false},
                { name: 'Apache License 2.0',short:'Apache',value:"Apache",checked:false}
            ]
        },
        {
            type: "input",
            name: "email_address",
            message: "Where should people e-mail if they have questions/comments concern?"
        },
        {
            type: "input",
            name: "creator_Github",
            message: "What is the address of your Github Profile?"
        }


    ]);
}

async function init(){
    //
}

init();