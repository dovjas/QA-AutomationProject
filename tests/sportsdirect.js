module.exports = {
    'Log in - invalid credentials': client =>{
        let sportsdirectPage = client.page.sportsdirectPage();
        const loginData = {
            email:'demotest@demotest.com',
            password:'fakepassword2222',
            errorMsg:'This email address or password is incorrect'
        }

        sportsdirectPage.prepareWebsite();
        sportsdirectPage.attemptLogin(loginData);
        sportsdirectPage.validateErrorMsg(loginData);
    },
    'Log in - valid credentials': client =>{
        let sportsdirectPage = client.page.sportsdirectPage();
        const accountData = {
            email:'dovydas.jaseliunas@gmail.com',
            password:'Lakunas1'
        }

        sportsdirectPage.openSignInForm();
        sportsdirectPage.loginValAttempt(accountData);
        sportsdirectPage.validateIsLoggedIn();
    }

}