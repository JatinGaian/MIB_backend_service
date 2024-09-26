var axios = require("axios");
require("dotenv").config();

const username = process.env.ATLASSIAN_USERNAME;
const password = process.env.ATLASSIAN_API_KEY;
const domain = process.env.DOMAIN;

const auth = {
    username: username,
    password: password,
};

// Fetches board details associated with a given sprint ID
async function get_board_details_by_sprintId(sprintId) {
    try {
        const baseUrl = `https://${domain}.atlassian.net`;

        // Step 1: Fetch Sprint Details to get originBoardId
        const sprintConfig = {
            method: "get",
            url: `${baseUrl}/rest/agile/1.0/sprint/${sprintId}`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic a2FtYXRoLmFAbW9iaXVzZHRhYXMuYWk6QVRBVFQzeEZmR0YwY3hhcGlodWMxc1NtWDVYTTdOa05vb0l4eDJDaWJ5MnFwbS1yTDNpT2JUTklCUURVakFMVWRUZjhpQ2hBQTYzdE5aeXFUSnBxSDNKSnJ6YXlIOWI2UEtvYktlajdLOUE5dDZaaExtcG9DSXE0ZUxXLXRKVlRDU3lkZTd5Q2JxOVFxQVF6NkdqdnNnRTNRZklwTHVXa28wcHRTX2dZVk1sb1VoY3dfam4zbXRBPTlDOEQ4NkU1` // Use Basic Auth with the encoded token
            },
        };

        const sprintResponse = await axios.request(sprintConfig);
        // const boardId = sprintResponse.data.originBoardId;

        // if (!boardId) {
        //     throw new Error(`No originBoardId found for sprint ID ${sprintId}`);
        // }

        // Step 2: Fetch Board Details using the boardId
        // const boardConfig = {
        //     method: "get",
        //     url: `${baseUrl}/rest/agile/1.0/board/${boardId}`,
        //     headers: { "Content-Type": "application/json" },
        //     auth: auth,
        // };

        // const boardResponse = await axios.request(boardConfig);
        // return boardResponse.data;
        return sprintResponse.data.originBoardId
    } catch (error) {
        console.log("error: ");
        console.log(error?.response?.data.errors);
        throw error; // Re-throwing the error for handling at a higher level if needed
    }
}

module.exports = get_board_details_by_sprintId;
