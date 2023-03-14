# Exercise 3 - Importing/Exporting; NPM
### Author: Jea Anne Gadil
    
### Student Number: 2021-13355
### Section: UV-7L

## Description
      Two(2) functions were created namely generateUniqueID and addAccount. The generateUniqueID return a unique id by concatenating the first letter of the first name (converted to lowercase), 
      the last name (converted to lowercase), and a “unique” alphanumeric string of length 8. On the other hand, addAccount has an input parameter of array
      with first name, last name, email, and age as its values. If the conditions are true such as: all fields are present, the first name, last name, and email are non-empty strings,
      the email is in a valid format (use the validator package), and age is at least 18, the data will be saved  into a new line of file called users.txt.

## Things done in the code
    - created two (2) functions in the functions.js: generateUniqueID and addAccount.
    - generateUniqueID return a uniqueId that will later on be used in the addAccount function.
    - addAccount appends the info to the users.txt if all the said requirements are met. Returns true if appended. Otherwis, false.
    - test.js is where the test cases are found.

