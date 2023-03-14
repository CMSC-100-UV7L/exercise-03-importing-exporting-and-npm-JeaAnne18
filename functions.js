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


