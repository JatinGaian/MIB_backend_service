var axios = require("axios");
require("dotenv").config();

const username = process.env.ATLASSIAN_USERNAME;
const password = process.env.ATLASSIAN_API_KEY;
const domain = process.env.DOMAIN;

const auth = {
    username: username,
    password: password,
};

// Function to change the assignee of a specific issue
async function change_issue_assignee(issueId, newAssigneeAccountId) {
    try {
        const baseUrl = `https://${domain}.atlassian.net`;
        const config = { 
            method: "put",
            url: `${baseUrl}/rest/api/3/issue/${issueId}/assignee`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic a2FtYXRoLmFAbW9iaXVzZHRhYXMuYWk6QVRBVFQzeEZmR0YwY3hhcGlodWMxc1NtWDVYTTdOa05vb0l4eDJDaWJ5MnFwbS1yTDNpT2JUTklCUURVakFMVWRUZjhpQ2hBQTYzdE5aeXFUSnBxSDNKSnJ6YXlIOWI2UEtvYktlajdLOUE5dDZaaExtcG9DSXE0ZUxXLXRKVlRDU3lkZTd5Q2JxOVFxQVF6NkdqdnNnRTNRZklwTHVXa28wcHRTX2dZVk1sb1VoY3dfam4zbXRBPTlDOEQ4NkU1` // Use Basic Auth with the encoded token
            },
            data: JSON.stringify({
                accountId: newAssigneeAccountId
            })
        };


        const response = await axios.request(config);
        console.log(`Assignee changed successfully for issue ${issueId}`);
        return response.data;
    } catch (error) {
        console.log("Error changing the assignee: ");
        console.log(error?.response?.data?.errors || error.message);
        throw error;
    }
}

module.exports = change_issue_assignee;
