
//--------ГЕНЕРАЦІЯ НОВИХ КОНТАКТІВ ТА ЇХ ЗБЕРЕЖЕННЯ---------

import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    try {
        const contacts = await readContacts();                                   //читає існуючі контакти
        const newContacts = Array.from({ length: number }, createFakeContact);   //маисв довжиною number, для кожного елемента createFakeContact
        const updatedContacts = [...contacts, ...newContacts];                   //обєднує старі та нові контакти
            await writeContacts(updatedContacts);                                //запис оновленого масиву
            console.log(`${number} contacts generated.`);                        //повідомлення, контакти згенерованні
    } catch (error) {
            console.error('Error generated contacts', error);
    }
};

generateContacts(5);
