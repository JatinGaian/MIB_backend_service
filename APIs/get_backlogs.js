var axios = require("axios");
require("dotenv").config();

const username = process.env.ATLASSIAN_USERNAME;
const password = process.env.ATLASSIAN_API_KEY;
const domain = process.env.DOMAIN;

const auth = {
    username: username,
    password: password,
};

// Function to get backlog issues for a specific board
async function get_backlogs(boardId) {
    try {
        const baseUrl = `https://${domain}.atlassian.net`;

        // JQL query to get issues in the backlog (not in any sprint) for a specific board
        // const jqlQuery = `sprint is EMPTY AND board = ${boardId} ORDER BY rank`;
        const config = {
            method: "get",
            url: `${baseUrl}/rest/agile/1.0/board/${boardId}/backlog?maxResults=1000`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic a2FtYXRoLmFAbW9iaXVzZHRhYXMuYWk6QVRBVFQzeEZmR0YwY3hhcGlodWMxc1NtWDVYTTdOa05vb0l4eDJDaWJ5MnFwbS1yTDNpT2JUTklCUURVakFMVWRUZjhpQ2hBQTYzdE5aeXFUSnBxSDNKSnJ6YXlIOWI2UEtvYktlajdLOUE5dDZaaExtcG9DSXE0ZUxXLXRKVlRDU3lkZTd5Q2JxOVFxQVF6NkdqdnNnRTNRZklwTHVXa28wcHRTX2dZVk1sb1VoY3dfam4zbXRBPTlDOEQ4NkU1` // Use Basic Auth with the encoded token
            },
            // auth: auth,
        };

        const response = await axios.request(config);
        // const issues = response.data.issues;

        // Extracting relevant information from the issues
        // const result = issues.map((issue) => ({
        //     issue_id: issue.id,
        //     issue_key: issue.key,
        //     summary: issue.fields.summary,
        //     project: issue.fields.project ? issue.fields.project.name : null,
        // }));

        return response.data;
    } catch (error) {
        console.log("Error fetching backlog issues: ");
        console.log(error?.response?.data?.errors);
        throw error;
    }
}

module.exports = get_backlogs;


