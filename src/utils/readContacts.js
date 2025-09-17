
//----------ЗЧИТУВАННЯ ДАНИХ З ФАЙЛУ---------

import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const readContacts = async () => {
    try {
        const contact = await fs.readFile(PATH_DB, 'utf-8');
        return contact.trim() ? JSON.parse(contact) : [];      //файл не пустий парсимо рядок в JSON
    } catch (error) {
        if (error.code === 'ENOENT') return [];
            console.error('Error reading contacts:', error);
            return [];
    }
};
