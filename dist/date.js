"use strict";
module.exports.getDate = getDate;
function getDate() {
    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return new Date().toLocaleDateString('th-TH', dateOptions);
}
// module.exports.otherFunction = otherFunction;
// function otherFunction() {
//     return 'otherFunction'
// }
//# sourceMappingURL=date.js.map