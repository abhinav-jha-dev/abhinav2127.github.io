import Data from './db.json';
import * as SkillApi from './skill';
import { repType } from '../utilities/enums';

function getAll() {
    return Data.repositories.sort((a, b) => {
        return b.status - a.status;
    });
}

function getOrganizationRepositories() {
    return Data.repositories.filter(x => x.type == repType.Organization).sort((a, b) => {
        return b.status - a.status;
    });
}

function getOpensourceRepositories() {
    return Data.repositories.filter(x => x.type == repType.Opensource).sort((a, b) => {
        return b.status - a.status;
    });
}

function getById(id) {
    return getAll().find(x => x.repId = id);
}

function getBySkill(skillId) {
    return getAll().filter(x => x.skillIds.includes(skillId))
}

function getResumeRepositories(id) {
    let resume = Data.resume.find(x => x.roleId == id);
    return Data.repositories.filter(x => resume.repositories.includes(x.repId));
}

export {
    getAll,
    getById,
    getBySkill,
    getOrganizationRepositories,
    getOpensourceRepositories,
    getResumeRepositories
}