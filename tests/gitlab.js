module.exports = {
    '3 Blog posts are displayed': client => {
        let gitlabPage = client.page.gitlabPage();
        const blogData = {
            firstBlogTitle:"Securing the software supply chain through automated attestation",
            secondBlogTitle:"How to use virtual reality for team building",
            thirdBlogTitle:"Decomposing the GitLab backend database, Part 2: Final migration and results"
        }

        gitlabPage.prepareWebsite();
        gitlabPage.countBlogComp(3);
        gitlabPage.isTitleUnique();
        gitlabPage.descriptionChar(145);
    }
}