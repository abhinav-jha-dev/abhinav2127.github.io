import Data from './db.json';
import { appModule } from '../utilities/enums';
import * as OrganizationApi from './organization';
import { getExperiencePeriod } from '../utilities/extensions';

function getOrganizationTimeline() {
    return Data.experience.filter((x) => x.type == appModule.Organization).map(x => {
        x['organization'] = OrganizationApi.getById(x.typeId);
        x['toDate'] = !x.isWorking ? x.toDate : new Date().toString();
        x['experience'] = getExperiencePeriod(x.fromDate, x.toDate);
        return x;
    }).sort((a, b) => {
        // @ts-ignore
        return new Date(b.fromDate) - new Date(a.fromDate);
    });
}

function getEducationTimeline() {
    return Data.educations.sort((a, b) => {
        return b.endYear - a.endYear;
    })
}

function filterExperienceByYear(typeId, year) {
    return Data.experience.filter((x) => x.type == typeId &&
        (new Date(x.fromDate).getFullYear() <= year &&
            (x.toDate == "" ? new Date().getFullYear() : new Date(x.toDate).getFullYear()) >= year)).map(x => {
                x['organization'] = OrganizationApi.getById(x.typeId);
                x['toDate'] = !x.isWorking ? x.toDate : new Date().toString();
                x['experience'] = getExperiencePeriod(x.fromDate, x.toDate);
                return x;
            }).sort((a, b) => {
                // @ts-ignore
                return new Date(b.fromDate) - new Date(a.fromDate);
            });
}

function getTotalExperience(typeId) {
    let fromYear, expStartDate, toYear, totalExperience;
    fromYear = new Date(Data.experience[0].fromDate).getFullYear();
    expStartDate = Data.experience[0].fromDate;
    Data.experience.filter((x) => x.type == typeId).map(x => {
        toYear = new Date().getFullYear();
        if (new Date(x.fromDate).getFullYear() <= fromYear) {
            expStartDate = x.fromDate;
            fromYear = new Date(x.fromDate).getFullYear();
        }
    });
    totalExperience = getExperiencePeriod(expStartDate, new Date().toString());
    return {
        "fromYear": fromYear,
        "toYear": toYear,
        "totalExperience": totalExperience
    };
}

export {
    getOrganizationTimeline,
    getTotalExperience,
    filterExperienceByYear,
    getEducationTimeline
}