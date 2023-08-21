import Data from './db.json';

function getSkillsByCategories() {
    return Data.skills;
}

function getCategoryById(id) {
    return Data.skills.find(x => x.categoryId === id);
}

function getAllSkills() {
    var skills = [];
    Data.skills.map(x => {
        x.subSkills.map(y => {
            skills.push(y);
        });
    });
    return skills;
}

function getSkillById(id) {
    var skills = getAllSkills();
    return skills.find(x => x.id === id);
}

function getSkillByIds(ids) {
    var skills = getAllSkills();
    let output = [];
    ids.map(id => {
        output.push(skills.find(x => x.skillId === id));
    });
    return output;
}

function getSkillByResumeRoles(roleId) {
    let output = [];
    let roleInfo = Data.resume.find(x => x.roleId === roleId);
    roleInfo.skillCategories.map(val => {
        let category = JSON.parse(JSON.stringify(Data.skills.find(x => x.categoryId === val.id)));
        category.subSkills = category.subSkills.filter(x => val.skills.includes(x.skillId));
        output.push(category);
    });
    return output;
}

export {
    getSkillsByCategories,
    getCategoryById,
    getAllSkills,
    getSkillById,
    getSkillByIds,
    getSkillByResumeRoles
}