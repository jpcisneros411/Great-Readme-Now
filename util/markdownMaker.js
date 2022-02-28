function markdownMaker(mkdwn){
 //Making the readme   
    return `#${mkdwn.title}
    ##Table of Contents

    --[Description](#description)

    --[Install](#installation_instructions)

    --[Usage](#usage_information)

    --[Contributions](#contributing)

    --[Testing](#testing)

    --[Questions and Other Inquiries](#questions)

    --[License](#licenses)


    ##Description
    ${mkdwn.description}
    ##Install
    ${mkdwn.installation_instructions}
    ##Usage
    ${mkdwn.usage_information}
    ##Contributions
    ${mkdwn.contributing}
    ##Testing
    ${mkdwn.testing}
    ##Questions and Other Inquiries
    [Email me at: ](mailto:${mkdwn.email_address}.com)
    [View my repos: ](${mkdwn.creator_Github})
    `;

}

module.exports= markdownMaker;