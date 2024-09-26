function changeIssueFields(responseArray) {
    return responseArray.map(issue => {
        // Transform avatarUrls if they exist
        const transformAvatarUrls = (avatarUrls) => {
            if (!avatarUrls) return avatarUrls; // Return as is if avatarUrls is not present
            return {
                sixteen: avatarUrls['16x16'],
                twentyfour: avatarUrls['24x24'],
                thirtytwo: avatarUrls['32x32'],
                fourtyeight: avatarUrls['48x48']
            };
        };

        return {
            ...issue,
            fields: {
                ...issue.fields,
                // Rename custom fields
                acceptanceCriteria: issue.fields.customfield_10156,
                storyPoint: issue.fields.customfield_10020,
                storyPointEstimate: issue.fields.customfield_10026,
                teamDetails: issue.fields.customfield_10001,
                // Transform avatarUrls in assignee, creator, reporter
                assignee: issue.fields.assignee
                    ? {
                        ...issue.fields.assignee,
                        avatarUrls: transformAvatarUrls(issue.fields.assignee.avatarUrls),
                    }
                    : issue.fields.assignee,
                creator: issue.fields.creator
                    ? {
                        ...issue.fields.creator,
                        avatarUrls: transformAvatarUrls(issue.fields.creator.avatarUrls),
                    }
                    : issue.fields.creator,
                reporter: issue.fields.reporter
                    ? {
                        ...issue.fields.reporter,
                        avatarUrls: transformAvatarUrls(issue.fields.reporter.avatarUrls),
                    }
                    : issue.fields.reporter,
                project: issue.fields.project
                    ? {
                        ...issue.fields.project,
                        avatarUrls: transformAvatarUrls(issue.fields.project.avatarUrls),
                    }
                    : issue.fields.project,
            }
        };
    });
}

module.exports = { changeIssueFields };