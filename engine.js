module.exports = {
 
    waitFor: function (_by) {
        var el = element(_by);
        browser.wait(
            protractor.ExpectedConditions.visibilityOf(el),
            20000
        );
    }
}
