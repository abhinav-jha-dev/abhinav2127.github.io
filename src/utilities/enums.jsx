export const experienceType = { Organization: "Organization", Project: "Project" }

export const repositoryStatus = {
    Created: 0,
    Hold: 1,
    Development: 2,
    Completed: 3,
    Ongoing: 4
};

export const appModule = {
    Organization: 0,
    Repositories: 1,
    Skills: 2,
    Education: 3
};

export const repMarkdowns = {
    CbreProject: 0,
    BingoProject: 1,
    HaymarketProject: 2
}

export const repType = {
    Organization: 0,
    Opensource: 1
}

export const employedAs = {
    FullTime: 0,
    Contract: 1
}

export const experienceLevels = {
    FundamentalAwareness: 0,
    Novice: 1,
    Intermediate: 2,
    Advanced: 3,
    Expert: 4
}

export const modalType = {
    Markdown: 0,
    Simple: 1
}

export const markdownKeys = {
    Experience: "ExperienceKey",
    Resume: "ResumeKey",
    Cv: "CVKey"
}

export const resumeRole = {
    FullStackDeveloperDotNet: 0
}

export const experienceCategory = {
    Professional: 1,
    Educational: 2
}

export const projectType = {
    Package: 1,
    Application: 2
}

export const skillLevelColorCode = {
    Advance: "#319409",
    Intermediate: "#101694",
    Basic: "#6C2200",
    Default: "#424242"
}

export const getKeyByEnumValue = function (enumType, value, isWordSpace) {
    let keyValue = Object.keys(enumType).find(key => enumType[key] === value);
    if (isWordSpace)
        return keyValue.replace(/([a-z])([A-Z])/g, '$1 $2');
    return keyValue;
}