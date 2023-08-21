import { skillLevelColorCode, repositoryStatus } from '../utilities/enums';

const replaceBySymbol = function (source, index, replacement, replaceFor) {
    return source.substr(0, index) + replacement + source.substr(index + replaceFor.length);
}

function getRandomColor(type) {
    return skillLevelColorCode[type];
}

function covertToDate(dateString) {
    let date = new Date(dateString);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    return months[date.getMonth()] + "' " + date.getFullYear();
}

function getExperiencePeriod(fromDate, toDate) {
    var e = new Date(toDate);
    var b = new Date(fromDate);
    var bMonth = b.getMonth();
    var bYear = b.getFullYear();
    var eYear = e.getFullYear();
    var eMonth = e.getMonth();
    var bDay = b.getDate();
    var eDay = e.getDate() + 1;

    if ((eMonth == 0) || (eMonth == 2) || (eMonth == 4) || (eMonth == 6) || (eMonth == 7) || (eMonth == 9) || (eMonth == 11)) {
        var eDays = 31;
    }

    if ((eMonth == 3) || (eMonth == 5) || (eMonth == 8) || (eMonth == 10)) {
        var eDays = 30;
    }

    if (eMonth == 1 && ((eYear % 4 == 0) && (eYear % 100 != 0)) || (eYear % 400 == 0)) {
        var eDays = 29;
    }

    if (eMonth == 1 && ((eYear % 4 != 0) || (eYear % 100 == 0))) {
        var eDays = 28;
    }

    if ((bMonth == 0) || (bMonth == 2) || (bMonth == 4) || (bMonth == 6) || (bMonth == 7) || (bMonth == 9) || (bMonth == 11)) {
        var bDays = 31;
    }

    if ((bMonth == 3) || (bMonth == 5) || (bMonth == 8) || (bMonth == 10)) {
        var bDays = 30;
    }

    if (bMonth == 1 && ((bYear % 4 == 0) && (bYear % 100 != 0)) || (bYear % 400 == 0)) {
        var bDays = 29;
    }

    if (bMonth == 1 && ((bYear % 4 != 0) || (bYear % 100 == 0))) {
        var bDays = 28;
    }

    var FirstMonthDiff = bDays - bDay + 1;
    if (eDay - bDay < 0) {
        eMonth = eMonth - 1;
        eDay = eDay + eDays;
    }

    var daysDiff = eDay - bDay;
    if (eMonth - bMonth < 0) {
        eYear = eYear - 1;
        eMonth = eMonth + 12;
    }

    var monthDiff = eMonth - bMonth;
    var yearDiff = eYear - bYear;
    if (daysDiff == eDays) {
        daysDiff = 0;
        monthDiff = monthDiff + 1;
        if (monthDiff == 12) {
            monthDiff = 0;
            yearDiff = yearDiff + 1;
        }
    }

    if ((FirstMonthDiff != bDays) && (eDay - 1 == eDays)) {
        daysDiff = FirstMonthDiff;
    }

    return yearDiff + " years(s)" + " " + monthDiff + " month(s)";
}

const fetchMarkdownData = async (module) => {
    const response = await fetch(module).then((response) => {
        if (response.ok) return response.text();
        else return Promise.reject("Didn't fetch text correctly");
    })
    return await response;
}

const getStyleByRepositoryStatus = function (status) {
    switch (status) {
        case repositoryStatus.Created:
            return "primary";
        case repositoryStatus.Development:
            return "warning";
        case repositoryStatus.Hold:
            return "danger";
        case repositoryStatus.Completed:
            return "success";
        case repositoryStatus.Ongoing:
            return "light"
    }
}

function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return false;
        }
    }

    return JSON.stringify(obj) === JSON.stringify({});
}

function getMarkdownContentByKey(markdownText, key) {
    let startIndex = markdownText.lastIndexOf("<!-- " + key + " -->");
    let endIndex = markdownText.indexOf("<!-- End" + key + " -->");
    return markdownText.substring(startIndex, endIndex).replace(/<!--.*?-->/sg, "").replace(/^\s+|\s+$/g, '');
}

var DURATION_IN_SECONDS = {
    epochs: ['year', 'month', 'day', 'hour', 'minute'],
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60
};

function getDuration(seconds) {
    var epoch, interval;

    for (var i = 0; i < DURATION_IN_SECONDS.epochs.length; i++) {
        epoch = DURATION_IN_SECONDS.epochs[i];
        interval = Math.floor(seconds / DURATION_IN_SECONDS[epoch]);
        if (interval >= 1) {
            return {
                interval: interval,
                epoch: epoch
            };
        }
    }

};

function timeSince(date) {
    var seconds = Math.floor((new Date() - new Date(date)) / 1000);
    var duration = getDuration(seconds);
    var suffix = (duration.interval > 1 || duration.interval === 0) ? 's' : '';
    return duration.interval + ' ' + duration.epoch + suffix;
};

function markDownTextToPdfTexts(mdText) {
    let text = mdText;
    // replace key from string to *
    ['`', "<b>", "<b> ", '</b>'].forEach((val) => {
        while (text.indexOf(val) > 0) {
            text = replaceAttributeWithText(text, val, "*");
        }
    });
    return text;
}

function replaceAttributeWithText(source, symbol, text) {
    let index = source.indexOf(symbol);
    source = replaceBySymbol(source, index, text, symbol);
    let nextIndex = source.indexOf(symbol, index);
    source = replaceBySymbol(source, nextIndex, "*", symbol);
    return source;
}

export {
    getRandomColor,
    getExperiencePeriod,
    covertToDate,
    fetchMarkdownData,
    getStyleByRepositoryStatus,
    isEmpty,
    getMarkdownContentByKey,
    timeSince,
    markDownTextToPdfTexts
}