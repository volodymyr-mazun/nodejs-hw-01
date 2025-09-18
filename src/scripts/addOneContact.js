
//---------ДОДАВАННЯ ОДНОГО ЗГЕНЕРОВАНОГО КОНТАКТУ----------

import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
    try {
        const contacts = await readContacts();                    //читає існуючі контакти
        const newContact = createFakeContact();                   //один новий випадковий контакт
        const updated = [...contacts, newContact];                //в кінець масиву
            await writeContacts(updated);                         //перезапис
                console.log('Added contact:', newContact.id);
                console.log(`Total contacts: ${updated.length}`);
    } catch (error) {
                console.error('Error adding contact:', error);
    }
};

addOneContact();
