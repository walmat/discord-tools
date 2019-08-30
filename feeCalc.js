// fill these values in...
const feeMap = {
    // stockx has different levels, so let's make sure we include those...
    stockx: {
        1: 9.5,
        2: 0,
        3: 0,
        4: 0,
    },
    goat: 0,
    ebay: 0,
    paypal: 0,
    grailed: 0,
};

const calculateFee = async amount => {
    // you can create a loop to iterate over these, but let's just do it statically...
    const stockxFees = {
        1: feeMap[stockx[1]] * amount,
        2: feeMap[stockx[2]] * amount,
        3: feeMap[stockx[3]] * amount,
        4: feeMap[stockx[4]] * amount,
    };

    const goatFees = feeMap[goat] * amount;
    const ebayFees = feeMap[ebay] * amount;
    const paypalFees = feeMap[paypal] * amount;
    const grailedFees = feeMap[grailed] * amount;
    
    // return an object of all these fees
    return {
        stockxFees,
        goatFees,
        ebayFees,
        paypalFees,
        grailedFees,
    };
};

module.exports = {
    calculateFee,
}