import {MyDatabaseClassic} from '../ds/my-database-classic'

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: 'Felipe', age:30});
myDatabaseClassic.add({ name: 'Caio', age:28});
myDatabaseClassic.add({ name: 'Rodrigo', age:25});

export { myDatabaseClassic };

