const argv = require('yargs')

const description = {
    description: {
        demand: true,
        alias: 'd',
        desc: 'Description of task'
    }
}

const status = {
    default: true,
    alias: 's',
    desc: 'Marcs as compplete a task'

}

.command('create', 'creates a task', description)
    .command('update', 'updates all tasks', { description, status })
    .command('delete', 'deletes element', description)
    .help().argv;


module.exports = {
    argv
}