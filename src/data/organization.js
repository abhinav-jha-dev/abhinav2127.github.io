import Data from './db.json';

function getAll() {
    return Data.organizations.sort((a, b) => {
        return a.workStatus - b.workStatus;
    });
}

function getNonProfits() {
    return Data.nonProfitOrganizations;
}

function getById(id) {
    return getAll().find(x => x.orgId == id);
}

function getByIds(ids) {
    return getAll().filter(x => ids.includes(x.orgId));
}

function getByName(name) {
    return getAll().find(x => x.name == name);
}

function getNonProfitByName(name) {
    return getNonProfits().find(x => x.name == name);
}

export {
    getAll,
    getById,
    getByName,
    getByIds,
    getNonProfits,
    getNonProfitByName
}