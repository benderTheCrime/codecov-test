module.exports = {
    isNullOrUndefined,
    isPOJsO,
};

function isNullOrUndefined(value) {
    return value == null;
}

function isPOJsO(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}