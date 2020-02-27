# Readme Generator
Create a command-line application that dynamically generates a README.md from a user's input. The application will be invoked with the following command:

```sh
node index.js
```
The user will be prompted for their GitHub username, which will be used to make a call to the GitHub API to retrieve their profile image. 

The user be prompted with some additional questions listed below. 
* GitHub email: 
* Project title 
* Description 
* General info 
* Installation 
* License 
* Contributing 
* Tests 

Based on the answers to the above questions, a README.md file will be generated.

**Location of generated README.md file:**
`/Develop/generated-readme/README.md`

**Note:** In `Develop/images` folder there is a screenshot `usage-image.png` of my answers/response to all the above questions, based on which the README.md file in `/Develop/generated-readme` folder was generated

## User Story
```
AS A developer

I WANT a README generator

SO THAT I can easily put together a good README for a new project
```

## Video of Generated README.md file
[!Genereated Readme Video](generated_readme.mov)
