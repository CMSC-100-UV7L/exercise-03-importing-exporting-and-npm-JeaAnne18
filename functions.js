/* 
Exercise 3 - Importing/Exporting; NPM

author: Jea Anne Gadil
section: UV7L

Description:
    Two(2) functions were created namely generateUniqueID and addAccount. The generateUniqueID return a unique id by concatenating the first letter of the first name (converted to lowercase), 
    the last name (converted to lowercase), and a “unique” alphanumeric string of length 8. On the other hand, addAccount has an input parameter of array
    with first name, last name, email, and age as its values. If the conditions are true such as: all fields are present, the first name, last name, and email are non-empty strings,
    the email is in a valid format (use the validator package), and age is at least 18, the data will be saved  into a new line of file called users.txt.

*/


//import packages
import validator from 'validator';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

//returns the uniqueId of the user
function generateUniqueID (firstName, lastName) {
    const firstLetter = firstName[0];

    const uuid = uuidv4().substring(0,8); //uuid that trims up to 8 alphanumeric string
    const uniqueId = firstLetter.toLowerCase()+lastName.toLowerCase()+uuid; //concatenation of the data
    return uniqueId; //returns uniqueId

}


function addAccount(data) {
    //variable declarations
    const fN = data[0];
    const lN = data[1];
    const emailAdd = data[2];
    const age = data[3]; 
    const uniqueId = generateUniqueID(fN, lN);
    const info = fN + "," + lN + "," + emailAdd + "," + age + "," + uniqueId;

    //checks if all fields are present
    if(data.length == 4) {
        if(data[0] && data[1] && data[2] == "") { //checks whether the first name, last name, and email are non-empty strings. if so, return false. otherwise, true
            return false;
        } else {
            if(validator.isEmail(data[2]) == true) { //checks the email using validator 
                if(data[3]>= 18) { //checks the age. must be 18 yrs and older
                    fs.appendFileSync('users.txt', info + "\n"); //append the info to the users.txt file
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
}

//export
export {addAccount};