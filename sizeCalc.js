// this will contain a mapping from US => other sizes
const sizeMap = {

}

const convertSize = async size => sizeMap[size] || undefined;

module.exports = {
    convertSize,
};