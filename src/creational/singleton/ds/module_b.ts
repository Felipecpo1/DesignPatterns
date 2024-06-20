import {MyDatabaseClassic} from '../ds/my-database-classic'
import { myDatabaseClassic as myDatabaseClassicFromA } from './module_a';

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: 'Viviane', age:47});
myDatabaseClassic.add({ name: 'Luiz', age:52});
myDatabaseClassic.add({ name: 'Beatriz', age:24});
myDatabaseClassic.show()

console.log( myDatabaseClassic === myDatabaseClassicFromA)