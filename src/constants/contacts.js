// export const PATH_DB =

import path from 'node:path';                                        //модуль для роботи зі шляхами файлів
import { fileURLToPath } from 'node:url';                            //функція перетворює URL формат у файловий шлях

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);                              //поточна папка (src)

export const PATH_DB = path.resolve(dirname, '../db', 'db.json');    //path.resolve збирає абсолютний шлях

// '../db'   - піднімаємося на рівень вище й заходимо в папку db
// 'db.json' - назва файлу
