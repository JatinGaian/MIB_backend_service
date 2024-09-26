const calculateRemainingDays = (sprintEndDate) => {
    const currentDate = new Date();
    const endDate = new Date(sprintEndDate);

    // Calculate the difference in time
    const timeDifference = endDate - currentDate;

    // Convert the time difference from milliseconds to days
    const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return remainingDays >= 0 ? remainingDays : 0; // If the sprint has ended, return 0
};

module.exports = { calculateRemainingDays };