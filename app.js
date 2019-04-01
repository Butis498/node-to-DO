const argv = require('./config/config').argv;
const toDO = require('./to-do/to-do');
const colors = require('colors');


let comand = argv._[0];

switch (comand) {
    case 'create':
        let task = toDO.create(argv.description);
        console.log(task);
        break;

    case 'list':

        let list = toDO.getList();


        for (let task of list) {
            console.log('========To DO ========='.green);
            console.log(task.description);
            console.log('Satus: ', task.completed);
            console.log('======================='.green);

        }
        break;
    case 'update':

        let updated = toDO.update(argv.description, argv.completed);


        console.log(updated);
        break;

    case 'delete':

        let deleted = toDO.deletes(argv.description);
        console.log(deleted);
        break;

    default:
        console.log('Invalid command');
        break;
}