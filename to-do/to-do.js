const fs = require('fs');

let listToDO = [];

const saveDB = () => {
    let data = JSON.stringify(listToDO);

    fs.writeFile('./DB/data.json', data, (err) => {
        if (err) {
            throw new Error('Error', err);
        }
    });

}



const loadDB = () => {

    try {
        listToDO = require('../DB/data.json');
    } catch (error) {
        listToDO = [];
    }


}

const getList = () => {

    loadDB();


    return listToDO;

}

const create = (description) => {

    loadDB();

    let toDO = {
        description: description,
        completed: false
    }

    listToDO.push(toDO);

    saveDB();

    return toDO;
}

const update = (description, status = true) => {
    loadDB();

    let index = listToDO.findIndex(task => {
        return task.description === description;
    });

    if (index >= 0) {
        listToDO[index].completed = status;
        saveDB();
        return true;

    } else {
        return false;
    }
}

const deletes = (description) => {

    loadDB();

    let newList = listToDO.filter(task => {
        return task.description !== description;
    });

    if (listToDO.length === newList.length) {
        return false;
    } else {
        listToDO = newList;
        saveDB();
        return true;
    }


}

module.exports = {
    create,
    getList,
    update,
    deletes

}