const calculateFee = async amount => {

    const stockxFees = {
        1: 9.5 * amount,
        2: 9.5 * amount,
        3: 9.5 * amount,
        4: 9.5 * amount,
    };

    console.log(stockxFees); // this will log to the console what the stockxFees gets set to

    const goatFees = 0 * amount;
    const ebayFees = 0 * amount;
    const paypalFees = 0 * amount;
    const grailedFees = 0 * amount;
    
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