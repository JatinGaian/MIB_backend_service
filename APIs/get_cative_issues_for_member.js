var axios = require("axios");
require("dotenv").config();

const username = process.env.ATLASSIAN_USERNAME;
const password = process.env.ATLASSIAN_API_KEY;
const domain = process.env.DOMAIN;

const auth = {
    username: username,
    password: password,
};

// Function to get issues for a specific user by email in active sprints
async function get_active_issues_for_member(accountId) {
    try {
        const baseUrl = `https://${domain}.atlassian.net`;
        const jqlQuery = `assignee = "${accountId}"`;
        let startAt = 0;
        let maxResults = 100;
        let allSprints = new Set();

        while (true) {
            const config = {
                method: "get",
                url: `${baseUrl}/rest/api/2/search?jql=${encodeURIComponent(jqlQuery)}&startAt=${startAt}&maxResults=${maxResults}`,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Basic a2FtYXRoLmFAbW9iaXVzZHRhYXMuYWk6QVRBVFQzeEZmR0YwY3hhcGlodWMxc1NtWDVYTTdOa05vb0l4eDJDaWJ5MnFwbS1yTDNpT2JUTklCUURVakFMVWRUZjhpQ2hBQTYzdE5aeXFUSnBxSDNKSnJ6YXlIOWI2UEtvYktlajdLOUE5dDZaaExtcG9DSXE0ZUxXLXRKVlRDU3lkZTd5Q2JxOVFxQVF6NkdqdnNnRTNRZklwTHVXa28wcHRTX2dZVk1sb1VoY3dfam4zbXRBPTlDOEQ4NkU1` // Use Basic Auth with the encoded token
                },
            };

            const response = await axios.request(config);
            const issues = response.data.issues;

            issues.forEach(issue => {
                const sprints = issue.fields.sprint || issue.fields.customfield_10020; // Replace with your sprint field key if different
                if (sprints) {
                    sprints.forEach(sprint => allSprints.add(sprint));
                }
            });

            if (issues.length < maxResults) {
                break;
            }

            startAt += maxResults;
        }

        return Array.from(allSprints);
    } catch (error) {
        console.log("Error fetching sprints: ");
        console.log(error?.response?.data?.errors);
        throw error;
    }
}

module.exports = get_active_issues_for_member;
