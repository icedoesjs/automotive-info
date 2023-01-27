// Check if a nested object key exists
export function checkNested(obj /*, level1, level2, ... levelN*/) {
    var args = Array.prototype.slice.call(arguments, 1);

    for (var i = 0; i < args.length; i++) {
        if (!obj || !obj.hasOwnProperty(args[i])) {
            return false;
        }
        obj = obj[args[i]];
    }
    return true;
}

// Get all options and return them in an array
export function loopOptions(obj) {
    var options = [];
    if (!obj.length) {
        options.push("No Addons Found");
        return options;
    }
    obj.forEach(opt => {
        opt.options.forEach(i => {
            options.push(i.name)
        })
    });
    return options;
}


export function getColors(obj) {
    var colors = [];
    obj.forEach(c => {
        colors.push(`${c.name}:${c.id}`)
    });
    return colors;
}

// Make first letter of each word capital
export function properWord(str) {
    str = str.split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    };

    return str.join(" ");
}

// Get the amount of years ago a year was 
export function yearsSince(year) {
    let currentYear = new Date().getFullYear();
    return currentYear - year + " Years Ago";
}

// Convert an object (in this case nested with arrays) into an array
export function toArray(obj) {
    return Object.keys(obj).map((key) => [key, obj[key]]);
}

// Get all makes for search page 
export function getMakes(obj) {
    let array = toArray(obj);
    let makes = [];
    array.forEach(m => {
        makes.push(m[0])
    });
    return makes;
}

// Get all models for search page 
export function getModels(obj) {
    let models = [];
    Object.keys(obj).forEach(m => {
        models.push(obj[m])
    });
    return models;
}