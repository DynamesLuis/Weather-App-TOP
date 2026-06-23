function firstLetterToUpperCase(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function shortenDayText(day) {
    return day.substring(0, 3);
}

export {
    firstLetterToUpperCase,
    shortenDayText
}