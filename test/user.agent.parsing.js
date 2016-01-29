

describe("User Agent Matching", function () {
    expectedResults.forEach(function (item) {
        var expected = item.expectedReport;
        var message = "should correctly identify {device}";

        message = message.replace("{device}", item.device);

        it(message, function () {
            var report = window.browserReportSync(item.userAgent);

            report.browser.name.should.equal(expected.browser.name);
            report.browser.version.should.equal(expected.browser.version);
            report.os.name.should.equal(expected.os.name);
            report.os.version.should.equal(expected.os.version);
        });
    });
});
