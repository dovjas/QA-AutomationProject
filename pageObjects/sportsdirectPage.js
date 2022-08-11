const sportsdirCommands = {
    // Test case 1

    prepareWebsite: function (){
        this.navigate()
        // Cookies,stay on Latvian web and Sign In
         this.click('@allowCookies')
         this.click('@latvianWeb')
         this.click('@signInBtn')
    },
    attemptLogin:function(loginData){
        //Login Values
        this.setValue('@emailInput', loginData.email)
        this.setValue('@passwordInput', loginData.password)
        this.click('@loginBtn')
    },
    validateErrorMsg: function(loginData){
         // Validate error message
         this.assert.visible('@erorrMsg')
         this.assert.containsText('@erorrMsg',loginData.errorMsg)
    },
    
    // Test case 2
    openSignInForm : function (){
        this.navigate()
        this.click('@signInBtn')
    },
    loginValAttempt: function(accountData){
        this.setValue('@emailInput', accountData.email)
        this.setValue('@passwordInput', accountData.password)
        this.click('@loginBtn')
        this.click('@accountBtn')
    },
    validateIsLoggedIn: function(){
        this.assert.visible('@logoutBtn')
    }
}

module.exports = {
    url:'https://lv.sportsdirect.com/',
    commands:[sportsdirCommands],
    elements:{
        allowCookies: '#onetrust-accept-btn-handler',
        latvianWeb:'#CountryRedirectStayLink',
        signInBtn:'.SignInLink',
        emailInput:'#Login_EmailAddress',
        passwordInput:'#Login_Password',
        loginBtn:'#LoginButton',
        erorrMsg:'.field-validation-error',
        accountBtn:'#divAccount',
        logoutBtn: "ul.sidebar-nav a[href*='logoff']"
    }
}