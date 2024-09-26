var axios = require("axios");
const { storyConvertor } = require("../Utils/storyConvertor");
require("dotenv").config();

const username = process.env.ATLASSIAN_USERNAME;
const password = process.env.ATLASSIAN_API_KEY;
const domain = process.env.DOMAIN;

const auth = {
    username: username,
    password: password,
};

// Gets all issues including backlogs and issues of every status in a particular project using the Jira Cloud REST API
async function get_project_all_detailed_issues(projectId) {
    try {
        const baseUrl = `https://${domain}.atlassian.net`;
        // Modify the JQL query to include all issues, including those in the backlog (sprint is EMPTY)
        const jqlQuery = `project = "${projectId}" AND (sprint is EMPTY OR sprint is not EMPTY)`;
        let startAt = 0;
        let maxResults = 100;
        let allIssues = [];

        while (true) {
            const config = {
                method: "get",
                params: {
                    expand: 'changelog'
                },
                // url: `${baseUrl}/rest/api/2/search?jql=${encodeURIComponent(jqlQuery)}&fields=key,${fields}&startAt=${startAt}&maxResults=${maxResults}`,
                url: `${baseUrl}/rest/api/2/search?jql=${encodeURIComponent(jqlQuery)}&startAt=${startAt}&maxResults=${maxResults}`,
                // url: `${baseUrl}/rest/api/2/search&startAt=${startAt}&maxResults=${maxResults}`,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Basic a2FtYXRoLmFAbW9iaXVzZHRhYXMuYWk6QVRBVFQzeEZmR0YwY3hhcGlodWMxc1NtWDVYTTdOa05vb0l4eDJDaWJ5MnFwbS1yTDNpT2JUTklCUURVakFMVWRUZjhpQ2hBQTYzdE5aeXFUSnBxSDNKSnJ6YXlIOWI2UEtvYktlajdLOUE5dDZaaExtcG9DSXE0ZUxXLXRKVlRDU3lkZTd5Q2JxOVFxQVF6NkdqdnNnRTNRZklwTHVXa28wcHRTX2dZVk1sb1VoY3dfam4zbXRBPTlDOEQ4NkU1` // Use Basic Auth with the encoded token
                },
            };
            // const config = {
            //     method: "get",
            //     params: {
            //         jql: `project=${projectId}`,
            //         expand: 'changelog',
            //         startAt: startAt,
            //         maxResults: maxResults
            //     },
            //     url: `${baseUrl}/rest/api/2/search`,
            //     headers: { "Content-Type": "application/json" },
            //     auth: auth,
            // };


            const response = await axios.request(config);
            const issues = response.data.issues;
            allIssues = allIssues.concat(issues);

            if (issues.length < maxResults) {
                break;
            }

            startAt += maxResults;
        }
        return allIssues

    } catch (error) {
        console.log("Error fetching issue details: ");
        console.log(error.response?.data?.errors ? error.response?.data?.errors : error.response);
    }
}

module.exports = get_project_all_detailed_issues;


// const issueDetails = issues?.map(issue => {
//     const blockedBy = issue?.fields?.issuelinks
//         ?.filter(link => link.type.inward === "is blocked by")
//         ?.map(link => ({
//             id: link.inwardIssue.id,
//             key: link.inwardIssue.key,
//             summary: link.inwardIssue.fields.summary,
//             status: link.inwardIssue.fields.status.name,
//             priority: link.inwardIssue.fields.priority.name,
//             type: link.inwardIssue.fields.issuetype.name
//         })) || [];

//     const blocks = issue?.fields?.issuelinks
//         ?.filter(link => link.type.outward === "blocks")
//         ?.map(link => ({
//             id: link.outwardIssue.id,
//             key: link.outwardIssue.key,
//             summary: link.outwardIssue.fields.summary,
//             status: link.outwardIssue.fields.status.name,
//             priority: link.outwardIssue.fields.priority.name,
//             type: link.outwardIssue.fields.issuetype.name
//         })) || [];

//     return {
//         key: issue.key,
//         summary: issue.fields.summary,
//         storyPoints: issue.fields.customfield_10020 || 0,
//         sprintName: issue.fields.customfield_10018 ? issue.fields.customfield_10018[0]?.name : null,
//         status: issue.fields.status.name,
//         projectName: issue.fields.project.name,
//         projectKey: issue.fields.project.key,
//         projectImage: issue.fields.project?.avatarUrls["32x32"],
//         issueType: issue.fields.issuetype.name,
//         blockedBy: blockedBy,  // Correctly adding blockedBy here
//         blocks: blocks         // Correctly adding blocks here
//     };
// });
