
//---------ПОВЕРНЕННЯ МАСИВУ КОНТАКТІВ---------

import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
    try {
        const contacts = await readContacts();
        return contacts;                                 //повернення масиву контактів
    } catch (error) {
        console.error('Error getting contacts:', error);
        return [];                                       //повернення порожнього масиву
    }
};

console.log(await getAllContacts());
