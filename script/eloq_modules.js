

const ordinal = require("ordinal");
const { days, months } = require("date-names");


module.exports.formatDate = function (date, format) {
    let f;
    return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
        if (tag == "YYYY") return date.getFullYear();
        if (tag == "M") return date.getMonth();
        if (tag == "MMMM") return months[date.getMonth()];
        if (tag == "D") return date.getDate();
        if (tag == "Do") return ordinal(date.getDate());
        if (tag == "dddd") return days[date.getDay()];
    });
};

//console.log(require.cache);

//console.log(f);

const { formatDate } = require("./eloq_modules");

console.log(formatDate(new Date(2020, 01, 08),
    "dddd the Do"));
// → Friday the 13th
