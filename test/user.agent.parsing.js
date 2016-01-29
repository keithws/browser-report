

describe("User Agent Matching", function () {
    expectedResults.forEach(function (item) {
        var expected = item.expectedReport;
        var message = "should correctly identify {browser.name} {browser.version} on {os.name} {os.version}";

        message = message.replace("{browser.name}", expected.browser.name);
        message = message.replace("{browser.version}", expected.browser.version);
        message = message.replace("{os.name}", expected.os.name);
        message = message.replace("{os.version}", expected.os.version);

        it(message, function () {
            var report = window.browserReportSync(item.userAgent);

            report.browser.name.should.equal(expected.browser.name);
            report.browser.version.should.equal(expected.browser.version);
            report.os.name.should.equal(expected.os.name);
            report.os.version.should.equal(expected.os.version);
        });
    });
});
