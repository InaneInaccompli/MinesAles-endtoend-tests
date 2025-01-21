module.exports = {
    'Test de la page tarification': function (browser) {
        browser
            .url('http://localhost:9090/pricing')
            .waitForElementVisible('body', 5000)
            .assert.visible('#tarifs-pricing', 'La table de tarification est visible')
            .assert.elementPresent('#tarifs-pricing > .row', 'La section contient une div avec la classe "row"')
            .elements('css selector', '#tarifs-pricing .row > .col-4', function (result) {
                browser.assert.strictEqual(result.value.length, 3, 'La section contient exactement 3 colonnes');
            })
            .elements('css selector', '#tarifs-pricing .col-4 .card', function (result) {
                browser.assert.strictEqual(result.value.length, 3, 'Chaque colonne contient une carte');
            })
            .end();
    }
};