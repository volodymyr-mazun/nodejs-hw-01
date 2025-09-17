
//----------ЗАПИСУВАННЯ ДАНИХ--------

import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));  //перезаписує файл, конвертує у JSON із відступами
    } catch (error) {
        console.error('Error writing contacts:', error);
    }
};
