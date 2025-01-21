module.exports = {
    'Test de la page login': function (browser) {
        const loginCredentials = {
            name: 'testadminuser',
            password: 'testadminuser',
        };

        browser
            .url('http://localhost:9090/login')
            .waitForElementVisible('body', 1000)
            .setValue('input[name="name"]', loginCredentials.name)
            .setValue('input[name="password"]', loginCredentials.password)
            .click('button[type="submit"]')
            .pause(1000)
            .assert.urlContains('/admin', 'Redirection vers la page admin après connexion')
            .end()
    }
}