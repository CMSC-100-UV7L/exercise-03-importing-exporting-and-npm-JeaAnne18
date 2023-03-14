//import packages
import validator from 'validator';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';


function generateUniqueID (firstName, lastName) {
    const firstLetter = firstName[0];

    const uuid = uuidv4().substring(0,8);
    const uniqueId = firstLetter.toLowerCase()+lastName.toLowerCase()+uuid;
    return uniqueId;

}


function addAccount(data) {
    const fN = data[0];
    const lN = data[1];
    const emailAdd = data[2];
    const age = data[3]; 
    const uniqueId = generateUniqueID(fN, lN);
    const info = fN + "," + lN + "," + emailAdd + "," + age + "," + uniqueId;
    if(data.length == 4) {
        if(data[0] && data[1] && data[2] == "") {
            return false;
        } else {
            if(validator.isEmail(data[2]) == true) {
                if(data[3]>= 18) {
                    fs.appendFileSync('users.txt', info + "\n");
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



export {addAccount};