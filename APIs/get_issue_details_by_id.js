var axios = require("axios");
require("dotenv").config();

const username = process.env.ATLASSIAN_USERNAME;
const password = process.env.ATLASSIAN_API_KEY;
const domain = process.env.DOMAIN;

const auth = {
    username: username,
    password: password,
};

// Function to get issues for a specific user by email in open sprints
async function get_issue_details_by_id(id) {
    try {
        const baseUrl = `https://${domain}.atlassian.net`;
        const config = {
            method: "get",
            url: `${baseUrl}/rest/agile/1.0/issue/${id}`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic a2FtYXRoLmFAbW9iaXVzZHRhYXMuYWk6QVRBVFQzeEZmR0YwY3hhcGlodWMxc1NtWDVYTTdOa05vb0l4eDJDaWJ5MnFwbS1yTDNpT2JUTklCUURVakFMVWRUZjhpQ2hBQTYzdE5aeXFUSnBxSDNKSnJ6YXlIOWI2UEtvYktlajdLOUE5dDZaaExtcG9DSXE0ZUxXLXRKVlRDU3lkZTd5Q2JxOVFxQVF6NkdqdnNnRTNRZklwTHVXa28wcHRTX2dZVk1sb1VoY3dfam4zbXRBPTlDOEQ4NkU1` // Use Basic Auth with the encoded token
            },
        };

        const response = await axios.request(config);

        return response.data;
    } catch (error) {
        console.log("Error fetching issues: ");
        console.log(error?.response?.data?.errors);
        throw error;
    }
}

module.exports = get_issue_details_by_id;