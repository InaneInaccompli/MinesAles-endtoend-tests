module.exports = {
    'Test de la page contact': function (browser) {
        browser
            .url('http://localhost:9090/contact')
            .waitForElementVisible('body', 5000)
            .assert.visible('form', 'Le formulaire de contact est visible')
            .setValue('input[name="firstName"]', 'Utilisateur')
            .setValue('input[name="lastName"]', 'Test')
            .setValue('input[name="mobilePhone"]', '0610203040')
            .setValue('input[name="arrivedAt"]', '21/01/2025')
            .setValue('input[name="departureAt"]', '21/01/2025')
            .setValue('input[name="email"]', 'test@example.com')
            .setValue('textarea[name="message"]', 'Test')
            .click('button[type="submit"]')
            .pause(1000)
            .assert.urlContains('/contact', 'Reste sur la page de contact après la soumission')
            .end();
    }
};