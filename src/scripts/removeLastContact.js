
//-----------ВИДАЛЕННЯ ОСТАННЬОГО КОНТАКТУ------------

import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
    try {
        const contacts = await readContacts();                    //читає список контактів
        if (!Array.isArray(contacts) || contacts.length === 0) {  //якщо не масив або порожній
            console.log('No contacts to remove.');
            return; }
        const removed = contacts.pop();                           //видаляє останній елемент
        await writeContacts(contacts);                            //запис оновленого масиву
            console.log(`Last contact removed: ${removed?.name ?? 'Unnamed'} (id: ${removed?.id ?? 'n/a'})`,);
            console.log(`Contacts left: ${contacts.length}`);     //залишок контактів
    } catch (error) {
            console.error('Error removing last contact:', error);
    }
};

removeLastContact();
