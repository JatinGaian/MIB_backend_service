var axios = require("axios");
require("dotenv").config();

// const username = process.env.ATLASSIAN_USERNAME;
// const password = process.env.ATLASSIAN_API_KEY;
// const domain = process.env.DOMAIN;

const domain = "mobiusdtaas";
const encodedToken = process.env.ENCODED_TOKEN
// const encodedToken = Buffer.from(`${username}:${password}`).toString('base64');
// console.log(encodedToken)

//Gets all boards using the Jira Cloud REST API with pagination
async function get_all_boards() {
  try {
    const baseUrl = "https://" + domain + ".atlassian.net";
    let startAt = 0;
    let allBoards = [];

    while (true) {
      const config = {
        method: "get",
        url: `${baseUrl}/rest/agile/1.0/board?startAt=${startAt}&type=scrum`,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Basic a2FtYXRoLmFAbW9iaXVzZHRhYXMuYWk6QVRBVFQzeEZmR0YwY3hhcGlodWMxc1NtWDVYTTdOa05vb0l4eDJDaWJ5MnFwbS1yTDNpT2JUTklCUURVakFMVWRUZjhpQ2hBQTYzdE5aeXFUSnBxSDNKSnJ6YXlIOWI2UEtvYktlajdLOUE5dDZaaExtcG9DSXE0ZUxXLXRKVlRDU3lkZTd5Q2JxOVFxQVF6NkdqdnNnRTNRZklwTHVXa28wcHRTX2dZVk1sb1VoY3dfam4zbXRBPTlDOEQ4NkU1` // Use Basic Auth with the encoded token
        },
        // auth: auth,
      };

      const response = await axios.request(config);
      const boards = response.data.values;
      allBoards = allBoards.concat(boards);

      if (boards.length == 0) {
        // If the number of boards retrieved is less than 50, it means we've reached the end
        break;
      } else {
        // Increment startAt for the next pagination
        startAt += 50;
      }
    }

    return allBoards;
  } catch (error) {
    console.log("error: ");
    console.log(error?.response?.data.errors);
    throw error; // Re-throwing the error for handling at a higher level if needed
  }
}

module.exports = get_all_boards;
