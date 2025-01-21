module.exports = {
    'Test de la page avis': function (browser) {
        browser
            .url('http://localhost:9090/feedback')
            .waitForElementVisible('body', 5000)
            .assert.visible('form', 'Le formulaire de contact est visible')
            .setValue('input[name="name"]', 'testadminuser')
            .setValue('textarea[name="message"]', 'Test')
            .click('button[type="submit"]')
            .pause(1000)
            .assert.urlContains('/feedback', 'Reste sur la page de contact après la soumission')
            .end();
    }
};