
//-----------КІЛЬКІСТЬ КОНТАКТІВ В МАСИВІ-----------

import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
    try {
        const contacts = await readContacts();             //читає існуючі контакти
        const count = contacts.length;                     //довжина масива і кількість
            return count;
    } catch (error) {
        console.error('Error counting contacts:', error);
        return 0;
    }
};

console.log(await countContacts());
