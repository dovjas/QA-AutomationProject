const gitlabCommands = {
    prepareWebsite: function (){
        this.navigate()
    },
    // Count number of blogs
    countBlogComp: function(count){
        return this.api.elements('css selector','@mainComponents', result => {
            const components = result.value;
            const compTotal = components.length
     
            this.assert.deepStrictEqual(count, compTotal)
        })
    },
    // Validate if Blog titles are unique
    isTitleUnique: function(title){
        return this.api.elements('css selector','@blogTitle', result =>{
            const blogElements = result.value;
            let blogTitles =  [];

            blogElements.forEach(element => {
                blogTitles.push(Object.values(element)[0])
            });

            blogTitles.forEach(component=>{
                this.api.elementIdText(component,result =>{
                    const text = result.value

                    this.verify.notDeepStrictEqual(title,text)
                });
            });
        } );
    },

    // Each blog post description (excerpt) does not exceed 145 character
    descriptionChar: function(charNumb){
        return this.api.elements('css selector','@description',result =>{
            const descriptionEl = result.value;
            let descValues = [];
            
            descriptionEl.forEach(element =>{
                descValues.push(Object.values(element)[0])
            })
            
            descValues.forEach(component => {
                this.api.elementIdText(component,result=>{
                    const text = result.value;
                    const textLength = text.length;
                    
                    this.assert.ok(textLength < charNumb, 'Less than 145 charackters')
                })
            })
           


         

    })
}

}


module.exports = {
    url : 'https://about.gitlab.com/blog/',
    commands:[gitlabCommands],
    elements: {
        firstBlog: 'div.blog-recent-post-grid .flex-col:nth-of-type(1)',
        secondBlog:'div.blog-recent-post-grid .flex-col:nth-of-type(2)',
        thirdBlog:'div.blog-recent-post-grid .flex-col:nth-of-type(3)',
        mainComponents: '.flex-col',
        blogTitle: '.flex-col h3',
        description:'.flex-col .blog-card-excerpt'
    }

}