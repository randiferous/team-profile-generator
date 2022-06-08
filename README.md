# Team Profile Generator

The purpose of this assignment was for students to exercise their knowledge of Object-Oriented Programming and Test-Driven Development, as well as being able to implement the Inquirer module and the File System module from Node.js.

## Description

For this assignment, students had to create a Team Profile Generator.  The generator appears in the form of a command-line application and allows a user to input information that will help generate an HTML file that would result in a webpage showing this information.   Specifically, the generator asks for information about a Manager, Engineer, and Intern, for which a user may provide a name, employee ID, email address, office number, GitHub username, or a school.

## Installation/Usage

First, you should clone this repository into your local file. Then, within the file directory, open a command-line such as Git Bash, and type the command "node index.js" to begin the prompts. Once you finish answering the questions, find your new "index.html" file within the "dist" folder and open it on your browser.  There, you will see your Team Profile!

## Reflection

This was another challenging assignment due my unfamiliarity with the syntatical logic of ES6 and the usage of third-party modules.  I had to rewrite the tests for the employee objects multiple times to make sure they were understandable, concise, and consistent. I was particular confused about how to override a parent class method, and what was the purpose of doing so.

Then, as I was working on the inquirer prompts, there came that dreaded moment where I realized there were multiple ways to go about completing this project, and I had to really think about which path would make the most sense to me and also be technically doable given my current level of knowledge.  I decided to split the prompts into multiple functions based on what role was being filled in for. While this approach probably used more code than what would be ideal, I was able to understand the flow of the code, which was the priority.

The most difficult part of this project was definitely figuring out how to get prompt responses onto the template literal. There were many things to be mindful of, such as having an array, creating an object to push into that array, and making sure references to employee objects are in place in the index.js file. Then there was the issue of how and when to call the writeFile function, and ensuring that the array includes the proper information to transfer to the page template.  In order to deal with all of these issues, it was very important for me to take things step-by-step and console log many times along the way (key lessons we learned early in the bootcamp!)

## Walkthrough Video