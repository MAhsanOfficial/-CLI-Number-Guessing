#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    { name: "UserGuessNumber", type: "number", message: "Please Guess the Number Between 1-10:" }
]);
if (answer.UserGuessNumber === randomNumber) {
    console.log(`Congrulations! You Guessted Right Number.`);
}
else {
    console.log("You Guess Wrong Number.!");
}
