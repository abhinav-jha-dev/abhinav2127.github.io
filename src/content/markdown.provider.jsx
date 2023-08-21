import { appModule, getKeyByEnumValue } from '../utilities/enums';
/* filter  */
function injectMarkdown(moduleType, fileName) {
    return import('./' + getKeyByEnumValue(appModule, moduleType) +"/"+ fileName);
}

export {
    injectMarkdown
}