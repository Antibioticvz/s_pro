#!/usr/bin/env node
const inquirer = require("inquirer");

(async () => {
  const { framework } = await inquirer.prompt([
    {
      type: "list",
      message: "Pick the framework you're using:",
      name: "framework",
      choices: ["react-app", "react-app ts", "NO"]
    }
  ])
  if(framework !== 'NO'){
    
    exec('echo Hi!')
    console.log("Project successfully created")
    console.log("Happy codding!")
  }

})()
