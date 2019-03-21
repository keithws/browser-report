/* global describe, it, should, expectedResults */

describe("User Agent Matching", function () {
    expectedResults.forEach(function (item) {
        var expected = item.expectedReport;
        var message = "should correctly identify {device}";

        message = message.replace("{device}", item.device);

        it(message, function () {
            var report = window.browserReportSync(item.userAgent);

            // add some custom data to the report
            if (report.browser.version) {
                report.browser.majorVersion = report.browser.version.split(".")[0];
            }

            for (var key in expected.browser) {
                try {
                    report.browser[key].should.equal(expected.browser[key]);
                } catch (err) {
                    /* eslint-disable no-console */
                    console.log(report);
                    /* eslint-enable no-console */
                    throw err;
                }
            }
            report.os.name.should.equal(expected.os.name);

            // handle os version being null
            should(report.os.version).be.exactly(expected.os.version);
        });
    });
});
