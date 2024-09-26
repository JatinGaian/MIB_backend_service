const calculateSprintDuration = (sprintStartDate, sprintEndDate) => {
    const startDate = new Date(sprintStartDate);
    const endDate = new Date(sprintEndDate);

    // Calculate the difference in time
    const timeDifference = endDate - startDate;

    // Convert the time difference from milliseconds to days
    const durationInDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return durationInDays;
};

module.exports = { calculateSprintDuration };