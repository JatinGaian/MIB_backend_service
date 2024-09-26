// var axios = require("axios");

// const data = [
//     {
//         "entity": {
//             "id": "102595"
//         }
//     },
//     {
//         "entity": {
//             "id": "10259622"
//         }
//     },
//     {
//         "entity": {
//             "id": "102596223"
//         }
//     },
//     {
//         "entity": {
//             "id": "102596224"
//         }
//     },
//     {
//         "entity": {
//             "id": "102810"
//         }
//     },
//     {
//         "entity": {
//             "id": "102811"
//         }
//     },
//     {
//         "entity": {
//             "id": "102813"
//         }
//     },
//     {
//         "entity": {
//             "id": "102814"
//         }
//     },
//     {
//         "entity": {
//             "id": "102854"
//         }
//     },
//     {
//         "entity": {
//             "id": "102855"
//         }
//     },
//     {
//         "entity": {
//             "id": "102858"
//         }
//     }
// ]


// const deleteInstances = async () => {
//     for (let i = 0; i < data.length; i++) {
//         try {
//             const currentObject = data[i]?.entity;  // Get the current object from the array

//             const response = await axios.request({
//                 method: 'DELETE',
//                 url: `https://ig.gov-cloud.ai/tf-entity-ingestion/v1.0/schemas/66e2cba9f604240f964045eb/instances`,
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI3Ny1NUVdFRTNHZE5adGlsWU5IYmpsa2dVSkpaWUJWVmN1UmFZdHl5ejFjIn0.eyJleHAiOjE3MjEyNDM4MDQsImlhdCI6MTcyMTIwNzgwNCwianRpIjoiZTMyOWJkODgtNTA3OS00NTU2LWEwYzItNjMxOWQwMWNiNGNjIiwiaXNzIjoiaHR0cDovL2tleWNsb2FrLmtleWNsb2FrLnN2Yy5jbHVzdGVyLmxvY2FsOjgwODAvcmVhbG1zL21hc3RlciIsImF1ZCI6WyJCT0xUWk1BTk5fQk9UIiwiTU9ORVQiLCJIT0xBQ1JBQ1kiLCJhY2NvdW50IiwiVklOQ0kiXSwic3ViIjoiMzAzN2RmNmItYTRhNS00MTU2LWExMjgtZDBlN2RhMzljMDc4IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiUEFTQ0FMX0lOVEVMTElHRU5DRSIsInNlc3Npb25fc3RhdGUiOiJjZDc4NWZiMy1jNzY2LTRhMTMtOWM2ZS0yZDk5YmU1MGNkMjQiLCJuYW1lIjoibW9iaXVzIG1vYml1cyIsImdpdmVuX25hbWUiOiJtb2JpdXMiLCJmYW1pbHlfbmFtZSI6Im1vYml1cyIsInByZWZlcnJlZF91c2VybmFtZSI6InBhc3N3b3JkX3RlbmFudF9tb2JpdXNAbW9iaXVzZHRhYXMuYWkiLCJlbWFpbCI6InBhc3N3b3JkX3RlbmFudF9tb2JpdXNAbW9iaXVzZHRhYXMuYWkiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLW1hc3RlciIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJCT0xUWk1BTk5fQk9UIjp7InJvbGVzIjpbIkJPTFRaTUFOTl9CT1RfVVNFUiJdfSwiUEFTQ0FMX0lOVEVMTElHRU5DRSI6eyJyb2xlcyI6WyJQQVNDQUxfSU5URUxMSUdFTkNFX1VTRVIiLCJQQVNDQUxfSU5URUxMSUdFTkNFX0FETUlOIl19LCJNT05FVCI6eyJyb2xlcyI6WyJNT05FVF9VU0VSIl19LCJIT0xBQ1JBQ1kiOnsicm9sZXMiOlsiU1VQRVJBRE1JTiIsIkhPTEFDUkFDWV9VU0VSIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX0sIlZJTkNJIjp7InJvbGVzIjpbIlZJTkNJX1VTRVIiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiJjZDc4NWZiMy1jNzY2LTRhMTMtOWM2ZS0yZDk5YmU1MGNkMjQiLCJ0ZW5hbnRJZCI6IjMwMzdkZjZiLWE0YTUtNDE1Ni1hMTI4LWQwZTdkYTM5YzA3OCJ9.eaqPIPTS_TpejcSTV9Wj0RGdpVfq1NB_LZ2zwHG0GOFuR5a8Uw71hq2WsYwWesu2JQ1W0_2AB4SfLOqcM0KLMcqiyctlrRtRH-PwHTmUBF0Cuxa5CHzPk3UQ_VDt9lcRea7RzSLpbH6zWbJBkGeJTaFgD3QBL3nPfhsGRnLahUmiPb51JbPA7K8jxYCQyRpzJKemeZhr1tvMGaBrYsfLVbRYQ5XXeq0oZGanqFDUMEl2jt9ypQ4mq9YQrmTxHRzFOoHqaX1cDoPjW2MWi5jXzV5dRQmMEd4eMNIttf6ktBSU45rlduaCaa9CW9BK5F_Pxq-QSwvuIDPeoAP88s5g-Q`  // Use the appropriate token
//                 },
//                 data: currentObject  // Send the current object as the body for DELETE request
//             });

//             console.log(`Successfully deleted object ${i + 1}:`, response.data);

//         } catch (error) {
//             console.error(`Error deleting object ${i + 1}:`, error);
//         }
//     }
// };

// async function executeDelete() {
//     await deleteInstances();
//     console.log("All instances deleted");
// }

// executeDelete();

function flattenObject(obj, parentKey = '', res = {}) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = parentKey ? `${parentKey}.${key}` : key;
            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                // Recursive call for nested objects
                flattenObject(obj[key], newKey, res);
            } else {
                // Base case for values
                res[newKey] = obj[key];
            }
        }
    }
    return res;
}

const flatObject = flattenObject({
    "expand": "renderedFields,names,schema,operations,editmeta,changelog,versionedRepresentations,customfield_10105.properties,customfield_10106.properties,customfield_10024.requestTypePractice,customfield_10120.properties,customfield_10121.properties,customfield_10122.properties",
    "id": "102811",
    "self": "https://mobiusdtaas.atlassian.net/rest/api/3/issue/102811",
    "key": "MIB-215",
    "changelog": {
        "startAt": 0,
        "maxResults": 14,
        "total": 14,
        "histories": [
            {
                "id": "486511",
                "author": {
                    "self": "https://mobiusdtaas.atlassian.net/rest/api/3/user?accountId=712020%3A5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "accountId": "712020:5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "emailAddress": "kushal.g@mobiusdtaas.ai",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png"
                    },
                    "displayName": "Kushal Ganji",
                    "active": true,
                    "timeZone": "Asia/Beirut",
                    "accountType": "atlassian"
                },
                "created": "2024-09-16T20:13:01.620+0300",
                "items": [
                    {
                        "field": "resolution",
                        "fieldtype": "jira",
                        "fieldId": "resolution",
                        "from": null,
                        "fromString": null,
                        "to": "10000",
                        "toString": "Done"
                    },
                    {
                        "field": "status",
                        "fieldtype": "jira",
                        "fieldId": "status",
                        "from": "10349",
                        "fromString": "In Progress",
                        "to": "10001",
                        "toString": "Done"
                    }
                ]
            },
            {
                "id": "486510",
                "author": {
                    "self": "https://mobiusdtaas.atlassian.net/rest/api/3/user?accountId=712020%3A5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "accountId": "712020:5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "emailAddress": "kushal.g@mobiusdtaas.ai",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png"
                    },
                    "displayName": "Kushal Ganji",
                    "active": true,
                    "timeZone": "Asia/Beirut",
                    "accountType": "atlassian"
                },
                "created": "2024-09-16T20:12:18.246+0300",
                "items": [
                    {
                        "field": "description",
                        "fieldtype": "jira",
                        "fieldId": "description",
                        "from": null,
                        "fromString": "Integrate Interaction Bar with PI\n\n* Replace POST call of Local Node.js service with PI POST call.\n* Replace GET call of Local Node.js service with PI GET call.\n* Modify the code where fetching data need to reusable as in the current code its written multiple times.\n\nModify the code for fetching the data according to the structure of the data available in PI.",
                        "to": null,
                        "toString": "Integrate Interaction Bar with PI\n\n* Add the POST and GET calls in services file\n* Call the functions in services file for GET and POST\n* Modify the code in Interaction Bar and Member Details Components"
                    }
                ]
            },
            {
                "id": "486412",
                "author": {
                    "self": "https://mobiusdtaas.atlassian.net/rest/api/3/user?accountId=712020%3A5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "accountId": "712020:5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "emailAddress": "kushal.g@mobiusdtaas.ai",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png"
                    },
                    "displayName": "Kushal Ganji",
                    "active": true,
                    "timeZone": "Asia/Beirut",
                    "accountType": "atlassian"
                },
                "created": "2024-09-16T13:01:32.285+0300",
                "items": [
                    {
                        "field": "summary",
                        "fieldtype": "jira",
                        "fieldId": "summary",
                        "from": null,
                        "fromString": "ATF_React Integrate Interaction Bar with PI",
                        "to": null,
                        "toString": "ATF_React Integrate Interaction Bar with MOBIUS_PI"
                    }
                ]
            },
            {
                "id": "486370",
                "author": {
                    "self": "https://mobiusdtaas.atlassian.net/rest/api/3/user?accountId=712020%3A5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "accountId": "712020:5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "emailAddress": "kushal.g@mobiusdtaas.ai",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png"
                    },
                    "displayName": "Kushal Ganji",
                    "active": true,
                    "timeZone": "Asia/Beirut",
                    "accountType": "atlassian"
                },
                "created": "2024-09-16T12:10:44.905+0300",
                "items": [
                    {
                        "field": "description",
                        "fieldtype": "jira",
                        "fieldId": "description",
                        "from": null,
                        "fromString": "Integrate Interaction Bar with PI\n\n* Replace POST call of Local Node.js service with PI POST call.\n* Replace GET call of Local Node.js service with PI GET call.\n\nModify the code for fetching the data according to the structure of the data available in PI.",
                        "to": null,
                        "toString": "Integrate Interaction Bar with PI\n\n* Replace POST call of Local Node.js service with PI POST call.\n* Replace GET call of Local Node.js service with PI GET call.\n* Modify the code where fetching data need to reusable as in the current code its written multiple times.\n\nModify the code for fetching the data according to the structure of the data available in PI."
                    }
                ]
            },
            {
                "id": "486351",
                "author": {
                    "self": "https://mobiusdtaas.atlassian.net/rest/api/3/user?accountId=712020%3A5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "accountId": "712020:5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "emailAddress": "kushal.g@mobiusdtaas.ai",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png"
                    },
                    "displayName": "Kushal Ganji",
                    "active": true,
                    "timeZone": "Asia/Beirut",
                    "accountType": "atlassian"
                },
                "created": "2024-09-16T10:01:06.228+0300",
                "items": [
                    {
                        "field": "status",
                        "fieldtype": "jira",
                        "fieldId": "status",
                        "from": "10009",
                        "fromString": "To Do",
                        "to": "10349",
                        "toString": "In Progress"
                    }
                ]
            },
            {
                "id": "486347",
                "author": {
                    "self": "https://mobiusdtaas.atlassian.net/rest/api/3/user?accountId=712020%3A5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "accountId": "712020:5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "emailAddress": "kushal.g@mobiusdtaas.ai",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png"
                    },
                    "displayName": "Kushal Ganji",
                    "active": true,
                    "timeZone": "Asia/Beirut",
                    "accountType": "atlassian"
                },
                "created": "2024-09-16T09:48:42.258+0300",
                "items": [
                    {
                        "field": "description",
                        "fieldtype": "jira",
                        "fieldId": "description",
                        "from": null,
                        "fromString": "Integrate Interaction Bar with PI\n\n* Replace POST call of Local Node.js service with PI POST call.\n* Replace GET call of Local Node.js service with PI GET call.\n\nModify the code for fetching the data according to the structure of the data available in PI",
                        "to": null,
                        "toString": "Integrate Interaction Bar with PI\n\n* Replace POST call of Local Node.js service with PI POST call.\n* Replace GET call of Local Node.js service with PI GET call.\n\nModify the code for fetching the data according to the structure of the data available in PI."
                    }
                ]
            },
            {
                "id": "486346",
                "author": {
                    "self": "https://mobiusdtaas.atlassian.net/rest/api/3/user?accountId=712020%3A5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "accountId": "712020:5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "emailAddress": "kushal.g@mobiusdtaas.ai",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png"
                    },
                    "displayName": "Kushal Ganji",
                    "active": true,
                    "timeZone": "Asia/Beirut",
                    "accountType": "atlassian"
                },
                "created": "2024-09-16T09:48:35.066+0300",
                "items": [
                    {
                        "field": "Team",
                        "fieldtype": "custom",
                        "fieldId": "customfield_10001",
                        "from": null,
                        "fromString": null,
                        "to": null,
                        "toString": "Ram Kishore - Frontend Engineering Team"
                    }
                ]
            },
            {
                "id": "486345",
                "author": {
                    "self": "https://mobiusdtaas.atlassian.net/rest/api/3/user?accountId=712020%3A5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "accountId": "712020:5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "emailAddress": "kushal.g@mobiusdtaas.ai",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png"
                    },
                    "displayName": "Kushal Ganji",
                    "active": true,
                    "timeZone": "Asia/Beirut",
                    "accountType": "atlassian"
                },
                "created": "2024-09-16T09:48:18.033+0300",
                "items": [
                    {
                        "field": "description",
                        "fieldtype": "jira",
                        "fieldId": "description",
                        "from": null,
                        "fromString": "Integrate Interaction Bar with PI\n\n* Replace POST call of Local Node.js service with PI POST call.\n* Replace GET call of Local Node.js service with PI GET call.",
                        "to": null,
                        "toString": "Integrate Interaction Bar with PI\n\n* Replace POST call of Local Node.js service with PI POST call.\n* Replace GET call of Local Node.js service with PI GET call.\n\nModify the code for fetching the data according to the structure of the data available in PI"
                    }
                ]
            },
            {
                "id": "486344",
                "author": {
                    "self": "https://mobiusdtaas.atlassian.net/rest/api/3/user?accountId=712020%3A5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "accountId": "712020:5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "emailAddress": "kushal.g@mobiusdtaas.ai",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png"
                    },
                    "displayName": "Kushal Ganji",
                    "active": true,
                    "timeZone": "Asia/Beirut",
                    "accountType": "atlassian"
                },
                "created": "2024-09-16T09:47:39.984+0300",
                "items": [
                    {
                        "field": "description",
                        "fieldtype": "jira",
                        "fieldId": "description",
                        "from": null,
                        "fromString": null,
                        "to": null,
                        "toString": "Integrate Interaction Bar with PI\n\n* Replace POST call of Local Node.js service with PI POST call.\n* Replace GET call of Local Node.js service with PI GET call."
                    }
                ]
            },
            {
                "id": "486328",
                "author": {
                    "self": "https://mobiusdtaas.atlassian.net/rest/api/3/user?accountId=712020%3A5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "accountId": "712020:5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "emailAddress": "kushal.g@mobiusdtaas.ai",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png"
                    },
                    "displayName": "Kushal Ganji",
                    "active": true,
                    "timeZone": "Asia/Beirut",
                    "accountType": "atlassian"
                },
                "created": "2024-09-16T09:35:38.598+0300",
                "items": [
                    {
                        "field": "assignee",
                        "fieldtype": "jira",
                        "fieldId": "assignee",
                        "from": null,
                        "fromString": null,
                        "to": "712020:5cec603e-f7f9-4bbe-853d-faf3158621e0",
                        "toString": "Kushal Ganji",
                        "tmpFromAccountId": null,
                        "tmpToAccountId": "712020:5cec603e-f7f9-4bbe-853d-faf3158621e0"
                    }
                ]
            },
            {
                "id": "486327",
                "author": {
                    "self": "https://mobiusdtaas.atlassian.net/rest/api/3/user?accountId=712020%3A5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "accountId": "712020:5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "emailAddress": "kushal.g@mobiusdtaas.ai",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png"
                    },
                    "displayName": "Kushal Ganji",
                    "active": true,
                    "timeZone": "Asia/Beirut",
                    "accountType": "atlassian"
                },
                "created": "2024-09-16T09:35:33.977+0300",
                "items": [
                    {
                        "field": "Story Points",
                        "fieldtype": "custom",
                        "fieldId": "customfield_10020",
                        "from": null,
                        "fromString": null,
                        "to": null,
                        "toString": "1"
                    }
                ]
            },
            {
                "id": "486326",
                "author": {
                    "self": "https://mobiusdtaas.atlassian.net/rest/api/3/user?accountId=712020%3A5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "accountId": "712020:5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "emailAddress": "kushal.g@mobiusdtaas.ai",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png"
                    },
                    "displayName": "Kushal Ganji",
                    "active": true,
                    "timeZone": "Asia/Beirut",
                    "accountType": "atlassian"
                },
                "created": "2024-09-16T09:35:24.537+0300",
                "items": [
                    {
                        "field": "Epic Link",
                        "fieldtype": "custom",
                        "fieldId": "customfield_10013",
                        "from": null,
                        "fromString": null,
                        "to": "77404",
                        "toString": "MIB-18"
                    }
                ]
            },
            {
                "id": "486324",
                "author": {
                    "self": "https://mobiusdtaas.atlassian.net/rest/api/3/user?accountId=712020%3A5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "accountId": "712020:5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "emailAddress": "kushal.g@mobiusdtaas.ai",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png"
                    },
                    "displayName": "Kushal Ganji",
                    "active": true,
                    "timeZone": "Asia/Beirut",
                    "accountType": "atlassian"
                },
                "created": "2024-09-16T09:35:24.487+0300",
                "items": [
                    {
                        "field": "IssueParentAssociation",
                        "fieldtype": "jira",
                        "from": null,
                        "fromString": null,
                        "to": "77404",
                        "toString": "MIB-18"
                    }
                ]
            },
            {
                "id": "486323",
                "author": {
                    "self": "https://mobiusdtaas.atlassian.net/rest/api/3/user?accountId=712020%3A5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "accountId": "712020:5cec603e-f7f9-4bbe-853d-faf3158621e0",
                    "emailAddress": "kushal.g@mobiusdtaas.ai",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png"
                    },
                    "displayName": "Kushal Ganji",
                    "active": true,
                    "timeZone": "Asia/Beirut",
                    "accountType": "atlassian"
                },
                "created": "2024-09-16T09:35:18.396+0300",
                "items": [
                    {
                        "field": "Sprint",
                        "fieldtype": "custom",
                        "fieldId": "customfield_10018",
                        "from": "",
                        "fromString": "",
                        "to": "1531",
                        "toString": "MIB Sprint 4"
                    }
                ]
            }
        ]
    },
    "fields": {
        "statuscategorychangedate": "2024-09-16T20:13:01.620+0300",
        "parent": {
            "id": "77404",
            "key": "MIB-18",
            "self": "https://mobiusdtaas.atlassian.net/rest/api/3/issue/77404",
            "fields": {
                "summary": "MIB - Mobius IntelliBoard",
                "status": {
                    "self": "https://mobiusdtaas.atlassian.net/rest/api/3/status/10349",
                    "description": "This issue is being actively worked on at the moment by the assignee.",
                    "iconUrl": "https://mobiusdtaas.atlassian.net/",
                    "name": "In Progress",
                    "id": "10349",
                    "statusCategory": {
                        "self": "https://mobiusdtaas.atlassian.net/rest/api/3/statuscategory/4",
                        "id": 4,
                        "key": "indeterminate",
                        "colorName": "yellow",
                        "name": "In Progress"
                    }
                },
                "priority": {
                    "self": "https://mobiusdtaas.atlassian.net/rest/api/3/priority/10001",
                    "iconUrl": "https://mobiusdtaas.atlassian.net/images/icons/priority_major.gif",
                    "name": "90",
                    "id": "10001"
                },
                "issuetype": {
                    "self": "https://mobiusdtaas.atlassian.net/rest/api/3/issuetype/10000",
                    "id": "10000",
                    "description": "A collection of related bugs, stories, and tasks.",
                    "iconUrl": "https://mobiusdtaas.atlassian.net/images/icons/issuetypes/epic.svg",
                    "name": "Epic",
                    "subtask": false,
                    "hierarchyLevel": 1
                }
            }
        },
        "customfield_10190": null,
        "customfield_10193": null,
        "customfield_10194": null,
        "customfield_10195": null,
        "fixVersions": [],
        "customfield_10110": null,
        "customfield_10111": null,
        "resolution": {
            "self": "https://mobiusdtaas.atlassian.net/rest/api/3/resolution/10000",
            "id": "10000",
            "description": "Work has been completed on this issue.",
            "name": "Done"
        },
        "customfield_10112": null,
        "customfield_10113": null,
        "customfield_10114": null,
        "customfield_10105": null,
        "customfield_10106": null,
        "customfield_10108": null,
        "customfield_10109": null,
        "lastViewed": "2024-09-19T09:28:31.212+0300",
        "customfield_10180": null,
        "customfield_10181": null,
        "customfield_10182": null,
        "customfield_10183": null,
        "customfield_10184": null,
        "customfield_10185": null,
        "customfield_10186": null,
        "customfield_10187": null,
        "priority": {
            "self": "https://mobiusdtaas.atlassian.net/rest/api/3/priority/10002",
            "iconUrl": "https://mobiusdtaas.atlassian.net/images/icons/priority_major.gif",
            "name": "80",
            "id": "10002"
        },
        "customfield_10188": null,
        "customfield_10068": null,
        "customfield_10189": null,
        "customfield_10101": null,
        "labels": [],
        "aggregatetimeoriginalestimate": null,
        "timeestimate": null,
        "versions": [],
        "issuelinks": [],
        "assignee": {
            "self": "https://mobiusdtaas.atlassian.net/rest/api/3/user?accountId=712020%3A5cec603e-f7f9-4bbe-853d-faf3158621e0",
            "accountId": "712020:5cec603e-f7f9-4bbe-853d-faf3158621e0",
            "emailAddress": "kushal.g@mobiusdtaas.ai",
            "avatarUrls": {
                "48x48": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                "24x24": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                "16x16": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                "32x32": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png"
            },
            "displayName": "Kushal Ganji",
            "active": true,
            "timeZone": "Asia/Beirut",
            "accountType": "atlassian"
        },
        "status": {
            "self": "https://mobiusdtaas.atlassian.net/rest/api/3/status/10001",
            "description": "",
            "iconUrl": "https://mobiusdtaas.atlassian.net/",
            "name": "Done",
            "id": "10001",
            "statusCategory": {
                "self": "https://mobiusdtaas.atlassian.net/rest/api/3/statuscategory/3",
                "id": 3,
                "key": "done",
                "colorName": "green",
                "name": "Done"
            }
        },
        "components": [],
        "customfield_10170": null,
        "customfield_10171": null,
        "customfield_10172": null,
        "customfield_10173": null,
        "customfield_10174": null,
        "customfield_10175": null,
        "customfield_10176": null,
        "customfield_10177": [],
        "customfield_10178": null,
        "customfield_10179": null,
        "customfield_10203": null,
        "customfield_10204": null,
        "customfield_10205": null,
        "aggregatetimeestimate": null,
        "creator": {
            "self": "https://mobiusdtaas.atlassian.net/rest/api/3/user?accountId=712020%3A5cec603e-f7f9-4bbe-853d-faf3158621e0",
            "accountId": "712020:5cec603e-f7f9-4bbe-853d-faf3158621e0",
            "emailAddress": "kushal.g@mobiusdtaas.ai",
            "avatarUrls": {
                "48x48": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                "24x24": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                "16x16": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                "32x32": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png"
            },
            "displayName": "Kushal Ganji",
            "active": true,
            "timeZone": "Asia/Beirut",
            "accountType": "atlassian"
        },
        "subtasks": [],
        "reporter": {
            "self": "https://mobiusdtaas.atlassian.net/rest/api/3/user?accountId=712020%3A5cec603e-f7f9-4bbe-853d-faf3158621e0",
            "accountId": "712020:5cec603e-f7f9-4bbe-853d-faf3158621e0",
            "emailAddress": "kushal.g@mobiusdtaas.ai",
            "avatarUrls": {
                "48x48": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                "24x24": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                "16x16": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                "32x32": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png"
            },
            "displayName": "Kushal Ganji",
            "active": true,
            "timeZone": "Asia/Beirut",
            "accountType": "atlassian"
        },
        "aggregateprogress": {
            "progress": 0,
            "total": 0
        },
        "customfield_10165": null,
        "customfield_10166": null,
        "customfield_10167": null,
        "customfield_10168": null,
        "customfield_10169": null,
        "progress": {
            "progress": 0,
            "total": 0
        },
        "votes": {
            "self": "https://mobiusdtaas.atlassian.net/rest/api/3/issue/MIB-215/votes",
            "votes": 0,
            "hasVoted": false
        },
        "worklog": {
            "startAt": 0,
            "maxResults": 20,
            "total": 0,
            "worklogs": []
        },
        "issuetype": {
            "self": "https://mobiusdtaas.atlassian.net/rest/api/3/issuetype/10001",
            "id": "10001",
            "description": "Created by Jira Agile - do not edit or delete. Issue type for a user story.",
            "iconUrl": "https://mobiusdtaas.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
            "name": "Story",
            "subtask": false,
            "avatarId": 10315,
            "hierarchyLevel": 0
        },
        "timespent": null,
        "customfield_10030": null,
        "project": {
            "self": "https://mobiusdtaas.atlassian.net/rest/api/3/project/10356",
            "id": "10356",
            "key": "MIB",
            "name": "Mobius Intelliboard",
            "projectTypeKey": "software",
            "simplified": false,
            "avatarUrls": {
                "48x48": "https://mobiusdtaas.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                "24x24": "https://mobiusdtaas.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                "16x16": "https://mobiusdtaas.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                "32x32": "https://mobiusdtaas.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
            }
        },
        "customfield_10031": null,
        "customfield_10032": null,
        "customfield_10033": null,
        "aggregatetimespent": null,
        "customfield_10156": null,
        "customfield_10157": null,
        "customfield_10148": null,
        "customfield_10028": null,
        "customfield_10029": null,
        "resolutiondate": "2024-09-16T20:13:01.609+0300",
        "workratio": -1,
        "issuerestriction": {
            "issuerestrictions": {

            },
            "shouldDisplay": false
        },
        "watches": {
            "self": "https://mobiusdtaas.atlassian.net/rest/api/3/issue/MIB-215/watchers",
            "watchCount": 1,
            "isWatching": false
        },
        "created": "2024-09-16T09:35:09.277+0300",
        "customfield_10020": 1,
        "customfield_10023": null,
        "customfield_10024": null,
        "customfield_10025": [],
        "customfield_10026": null,
        "customfield_10147": null,
        "customfield_10016": null,
        "customfield_10138": null,
        "customfield_10017": "10349_*:*_1_*:*_36715392_*|*_10009_*:*_1_*:*_1556951_*|*_10001_*:*_1_*:*_0",
        "customfield_10018": [
            {
                "id": 1531,
                "name": "MIB Sprint 4",
                "state": "active",
                "boardId": 425,
                "goal": "",
                "startDate": "2024-09-16T06:33:54.000Z",
                "endDate": "2024-09-20T17:30:00.000Z"
            }
        ],
        "customfield_10019": "1|i05bre:",
        "updated": "2024-09-16T20:13:01.620+0300",
        "timeoriginalestimate": null,
        "customfield_10130": null,
        "description": {
            "type": "doc",
            "version": 1,
            "content": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Integrate Interaction Bar with PI"
                        }
                    ]
                },
                {
                    "type": "bulletList",
                    "content": [
                        {
                            "type": "listItem",
                            "content": [
                                {
                                    "type": "paragraph",
                                    "content": [
                                        {
                                            "type": "text",
                                            "text": "Add the POST and GET calls in services file"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "listItem",
                            "content": [
                                {
                                    "type": "paragraph",
                                    "content": [
                                        {
                                            "type": "text",
                                            "text": "Call the functions in services file for GET and POST"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "listItem",
                            "content": [
                                {
                                    "type": "paragraph",
                                    "content": [
                                        {
                                            "type": "text",
                                            "text": "Modify the code in Interaction Bar and Member Details Components"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "customfield_10131": null,
        "customfield_10132": null,
        "customfield_10133": null,
        "customfield_10134": null,
        "customfield_10013": "MIB-18",
        "customfield_10014": null,
        "customfield_10135": null,
        "timetracking": {

        },
        "customfield_10015": {
            "hasEpicLinkFieldDependency": false,
            "showField": false,
            "nonEditableReason": {
                "reason": "PLUGIN_LICENSE_ERROR",
                "message": "The Parent Link is only available to Jira Premium users."
            }
        },
        "customfield_10136": null,
        "customfield_10126": null,
        "customfield_10005": null,
        "customfield_10006": null,
        "customfield_10127": null,
        "customfield_10007": null,
        "security": null,
        "customfield_10008": null,
        "attachment": [],
        "customfield_10009": null,
        "summary": "ATF_React Integrate Interaction Bar with MOBIUS_PI",
        "customfield_10120": null,
        "customfield_10121": null,
        "customfield_10000": "{pullrequest={dataType=pullrequest, state=MERGED, stateCount=1}, json={\"cachedValue\":{\"errors\":[],\"summary\":{\"pullrequest\":{\"overall\":{\"count\":1,\"lastUpdated\":\"2024-09-16T14:01:14.000+0300\",\"stateCount\":1,\"state\":\"MERGED\",\"dataType\":\"pullrequest\",\"open\":false},\"byInstanceType\":{\"GitHub\":{\"count\":1,\"name\":\"GitHub\"}}}}},\"isStale\":false}}",
        "customfield_10001": {
            "id": "ef5f611a-c12b-4cf6-8d7b-a6341004652f",
            "name": "Ram Kishore - Frontend Engineering Team",
            "avatarUrl": "",
            "isVisible": true,
            "title": "Ram Kishore - Frontend Engineering Team",
            "isShared": true
        },
        "customfield_10122": null,
        "customfield_10123": null,
        "customfield_10002": [],
        "customfield_10124": null,
        "customfield_10003": null,
        "customfield_10125": null,
        "customfield_10004": {
            "self": "https://mobiusdtaas.atlassian.net/rest/api/3/customFieldOption/10002",
            "value": "Moderate / Limited",
            "id": "10002"
        },
        "customfield_10115": null,
        "customfield_10116": null,
        "customfield_10117": null,
        "environment": null,
        "customfield_10118": null,
        "duedate": null,
        "comment": {
            "comments": [
                {
                    "self": "https://mobiusdtaas.atlassian.net/rest/api/3/issue/102811/comment/41565",
                    "id": "41565",
                    "author": {
                        "self": "https://mobiusdtaas.atlassian.net/rest/api/3/user?accountId=712020%3A5cec603e-f7f9-4bbe-853d-faf3158621e0",
                        "accountId": "712020:5cec603e-f7f9-4bbe-853d-faf3158621e0",
                        "emailAddress": "kushal.g@mobiusdtaas.ai",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                            "24x24": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                            "16x16": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                            "32x32": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png"
                        },
                        "displayName": "Kushal Ganji",
                        "active": true,
                        "timeZone": "Asia/Beirut",
                        "accountType": "atlassian"
                    },
                    "body": {
                        "type": "doc",
                        "version": 1,
                        "content": [
                            {
                                "type": "bulletList",
                                "content": [
                                    {
                                        "type": "listItem",
                                        "content": [
                                            {
                                                "type": "paragraph",
                                                "content": [
                                                    {
                                                        "type": "text",
                                                        "text": "Added the POST and GET calls in services file"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "listItem",
                                        "content": [
                                            {
                                                "type": "paragraph",
                                                "content": [
                                                    {
                                                        "type": "text",
                                                        "text": "Called the functions in services file for GET and POST Calls for Interactions"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "listItem",
                                        "content": [
                                            {
                                                "type": "paragraph",
                                                "content": [
                                                    {
                                                        "type": "text",
                                                        "text": "Modified the code in Interaction Bar and Member Details Components"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    "updateAuthor": {
                        "self": "https://mobiusdtaas.atlassian.net/rest/api/3/user?accountId=712020%3A5cec603e-f7f9-4bbe-853d-faf3158621e0",
                        "accountId": "712020:5cec603e-f7f9-4bbe-853d-faf3158621e0",
                        "emailAddress": "kushal.g@mobiusdtaas.ai",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                            "24x24": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                            "16x16": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png",
                            "32x32": "https://secure.gravatar.com/avatar/28f1932ff4f08e1ce2fc2663a41c0cae?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKG-4.png"
                        },
                        "displayName": "Kushal Ganji",
                        "active": true,
                        "timeZone": "Asia/Beirut",
                        "accountType": "atlassian"
                    },
                    "created": "2024-09-16T20:12:56.435+0300",
                    "updated": "2024-09-16T20:12:56.435+0300",
                    "jsdPublic": true
                }
            ],
            "self": "https://mobiusdtaas.atlassian.net/rest/api/3/issue/102811/comment",
            "maxResults": 1,
            "total": 1,
            "startAt": 0
        }
    }
})

console.log(flatObject);
