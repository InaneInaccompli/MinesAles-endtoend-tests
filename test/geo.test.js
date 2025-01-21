module.exports = {
    'Test de la page géolocalisation': function (browser) {
        browser
            .url('http://localhost:9090/geo')
            .waitForElementVisible('body', 5000)
            .waitForElementVisible('iframe', 1000)
            .assert.visible('iframe', 'La carte est visible')
            .assert.textContains('main', 'Nos meilleures adresses')
            .assert.textContains('main', 'A proximité')
            .end();
    }
};