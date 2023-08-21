import Data from './db.json';
import { SkillApi } from './app-data';

function getPersonData() {
    return Data.person;
}

function getContactDetails() {
    return Data.contact;
}

function getOverviewSkillsDetails() {
    let skillData = Data.overview.skillCategories;
    let skillCategoryData = SkillApi.getSkillsByCategories();
    let skillsData = SkillApi.getAllSkills();

    skillData.map((x) => {
        x["name"] = skillCategoryData.find(y => y.categoryId == x.id).category;
        x.subSkills.map(y => {
            y["name"] = skillsData.find(k => k.skillId == y.id).title;
        })
    });

    return skillData;
}

function getOverviewRepositories() {
    let repIds = Data.overview.repositories;
    return Data.repositories.filter(x => repIds.includes(x.repId))
}

function getResumeProfessionalSummary(roleId) {
    return Data.resume.find(x => x.roleId == roleId).summary;
}

export {
    getContactDetails,
    getPersonData,
    getOverviewSkillsDetails,
    getOverviewRepositories,
    getResumeProfessionalSummary
}