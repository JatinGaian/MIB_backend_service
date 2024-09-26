var axios = require("axios");
require("dotenv").config();

const username = process.env.ATLASSIAN_USERNAME;
const password = process.env.ATLASSIAN_API_KEY;
const domain = process.env.DOMAIN;

const auth = {
    username: username,
    password: password,
};

// Gets all issues in a particular project using the Jira Cloud REST API
async function getProjectIssues(projectIdOrKey) {
    try {
        const baseUrl = `https://${domain}.atlassian.net`;
        const jqlQuery = `project = "${projectIdOrKey}"`;
        const fields = "summary,customfield_10020,customfield_10026,customfield_10018"; // Fields to retrieve
        let startAt = 0;
        let maxResults = 100;
        let allIssues = [];

        while (true) {
            const config = {
                method: "get",
                url: `${baseUrl}/rest/api/2/search?jql=${encodeURIComponent(jqlQuery)}&fields=key,${fields}&startAt=${startAt}&maxResults=${maxResults}`,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Basic a2FtYXRoLmFAbW9iaXVzZHRhYXMuYWk6QVRBVFQzeEZmR0YwY3hhcGlodWMxc1NtWDVYTTdOa05vb0l4eDJDaWJ5MnFwbS1yTDNpT2JUTklCUURVakFMVWRUZjhpQ2hBQTYzdE5aeXFUSnBxSDNKSnJ6YXlIOWI2UEtvYktlajdLOUE5dDZaaExtcG9DSXE0ZUxXLXRKVlRDU3lkZTd5Q2JxOVFxQVF6NkdqdnNnRTNRZklwTHVXa28wcHRTX2dZVk1sb1VoY3dfam4zbXRBPTlDOEQ4NkU1` // Use Basic Auth with the encoded token
                },
            };

            const response = await axios.request(config);
            const issues = response.data.issues;

            const issueDetails = issues.map(issue => ({
                key: issue.key,
                summary: issue.fields.summary,
                storyPoints: issue?.fields?.customfield_10020 ?? issue?.fields?.customfield_10026 ?? 0,
                sprintName: issue.fields.customfield_10018 ? issue.fields.customfield_10018[0]?.name : null
            }));

            allIssues = allIssues.concat(issueDetails);

            if (issues.length < maxResults) {
                break;
            }

            startAt += maxResults;
        }

        return allIssues;
    } catch (error) {
        console.log("Error fetching issue details: ");
        console.log(error.response?.data?.errors ? error.response?.data?.errors : error.response);
    }
}

module.exports = getProjectIssues;
