# browser-report
Report browser settings like [whatsmybrowser.org][1] in a plain-old JavaScript object.

[![npm version](https://badge.fury.io/js/browser-report.svg)](https://badge.fury.io/js/browser-report)
[![dependencies](https://img.shields.io/david/keithws/browser-report.svg)](https://david-dm.org/keithws/browser-report)
[![dev dependencies](https://img.shields.io/david/dev/keithws/browser-report.svg)](https://david-dm.org/keithws/browser-report?type=dev)
![npm downloads per month](https://img.shields.io/npm/dm/browser-report.svg)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/browser-report.svg)
[![npm license](https://img.shields.io/npm/l/browser-report.svg?color=blue)](https://github.com/keithws/browser-report/blob/master/LICENSE)

Often, when a visitor to your website reports an issue, it can be difficult or impossible to reproduce the same issue without asking your visitor what software and settings they use.

Lately, in this situation, I ask my visitors to send me the report from whatsmybrowser.org. But then, I realized that most of that information is available, via JavaScript, by parsing the user agent when the visitor is submitting their issue. So I set out to create a script that would provide that information.

Note, this is meant for reporting and not for application logic; your application should use feature detection, not browser detection. Therefore, only the most common browser names and OS names are reported, see the [Coverage](#coverage) section below for more details. The full user agent string is always provided and it can help you identify any browser. If you need to report on every browser and OS or other information in the user agent string, then take a look at [platform.js][2] and/or [UAParser.js][7].

# Usage
Package manager support is planned, but for now load this script into a browser and call `browserReport()` with a callback. Note, some values maybe `null` if the information is not available.

## Asynchronous Usage

    <script src="browser-report.js"></script>
    <script>
        browserReport(function (err, report) {
            if (err) {
                throw err;
            }
            console.log(report);
        });
    </script>

## Synchronous Usage

Note, the remote client IP address is not available in the synchronous function call.

    <script src="browser-report.js"></script>
    <script>
        var report = browserReportSync();
        console.log(report);
    </script>

## Report Object Format

The report object has the following keys and value types.

    {
        "browser": {
            "name": (string),
            "version": (string)
        },
        "cookies": (boolean),
        "flash": {
            "version": (string)
        },
        "ip": (string),
        "java": {
            "version": (string)
        },
        "lang": (array || string),
        "os": {
            "name": (string),
            "version": (string)
        },
        "screen": {
            "colors": (number),
            "dppx": (number),
            "height": (number),
            "width": (number)
        },
        "scripts": (boolean),
        "timestamp": (string),
        "userAgent": (string),
        "viewport": {
            "height": (number),
            "layout": {
                "height": (number),
                "width": (number)
            }
            "width": (number),
            "zoom": (number)
        }
        "websockets": (boolean)
    }

# Coverage

The goal is to correctly identify all browsers included on caniuse.com according to their [browser usage table][3]. As of March 2019, their browser usage table accounts for 98.43% of global usage based on data from [StatCounter GlobalStats Browser Market Share][4].

Browser test coverage, as of v2.2.10, matches at __98.43%__

Operating systems are also correctly identified for the top seven operating systems as reported by [StatCounter GlobalStats OS Market Share][8]. As of February 2019, the top seven accounts for 94.7% of global traffic.

Operating system test coverage, as of v2.2.11, matches the top seven at __94.7%__

# Benchmarks

The script file size is roughly 4K when gzipped and roughly 2K when minified and gzipped. The synchronous call takes about 4ms on a 2.6 GHz Intel Core i7 with Google Chrome 72. The asynchronous call is largely dependent on how long it takes for ipify.org to respond with the IP address.

# TODO

In chronological order (oldest first); not in order of priority. Contributions welcome!

* add module support for node, es2016, commonJS, and bower
* server side support (node)
    * not all information is available server side
    * but a lot of information can be extracted from the user agent
    * and the remote IP address is available
* report on other/all plugins (may not be needed anymore)
* report on value for font size of root element (not in node)
* report on the client's Do-Not-Track setting (may not be needed anymore)
* report if the client supports third-party cookies
* add custom website
* run tests with mocha cli (requires module support)
* setup travis-ci (requests tests with mocha cli)
* get browser-report on cdnjs.com


# Change Log

*2.2.11 – March 25, 2019*

* added support for detecting Chrome OS
* added support for detecting KaiOS
* added tests to make sure OS detection works correctly for top 7 operating systems as reported by StatCounter GlobalStats

*2.2.10 – March 21, 2019*

* updated test cases based on lastest stats from caniuse.com
    * added nine new test cases
    * updated eight existing test cases
* added support for Android versions that are single numbers
* added support for reporting mobile QQ Browsers correctly
* upgraded dev dependencies
* minor code changes for new version of eslint
* minor test changes for new version of mocha
* added badges ✅

*2.2.9 – August 13, 2018*

* fixed bug in version number for Android Browser
* updated test cases based on lastest stats from caniuse.com
* added performance marks and measures to sample page
* updated documentation

*2.2.8 – January 18, 2017*

* added test cases for detecting Opera Mobile
* added test cases for detecting Samsung Internet
* added test cases for detecting UC Browser 11
* added test case for detecting Safari on iOS 10
* added test case for detecting Opera 42 on Windows
* added test case for detecting Edge 14 on Windows
* updated test cases for major browsers to latest versions

*2.2.7 – July 11, 2016*

* updated cookie detection to workaround Microsoft Edge behavior

*2.2.6 — February 4, 2016*

* Updated browser usage stats
* Updated benchmarks
* Updated build to run tests before build
* Simplified code for deprecated values

*2.2.5 — February 2, 2016*

* converted Markdown links to references
* updated documentation
* fixed bugs in IE8
* updated sample to run in IE 8, 7, and 6

*2.2.4 — February 1, 2016*

* added test cases and detection for
    * Opera Mini
    * Opera 15 and above
    * Opera 12 and below
    * Opera 9 and below
    * BlackBerry Browser 6, 7, and 10

*2.2.3 – January 29, 2016*

* added test cases
    * Firefox on Android and iOS
    * UC Browser for Android
* improved browser and os detection

*2.2.2 – January 29, 2016*

* added test case for Nokia Lumia 625
* improved browser and os detection

*2.2.1 – January 29, 2016*

* added unit tests
* improved browser and os detection

*2.2.0 – January 14, 2016*

* added raw values for width and height of screen
* added value for dots per pixel (dppx) of screen
* deprecated screen.size and screen.resolution
* added raw values for width and height of visual viewport
* deprecated browser.size
* added raw values for width and height of layout viewport
* added value for zoom level of visual viewport

*2.1.0 – January 13, 2016*

* added a sample webpage

*2.0.1 - December 21, 2015*

* fixed bug in IE8 when checking plugins

*2.0.0 – October 26, 2015*

* `browserReport()` is now async and expects a callback
* the previous synchronous function can still be found in `browserReportSync()`
* the remote client IP address is now reported from ipify.org
* a random UUID is now generated for cookie test instead of using the same UUID every time
* report now includes the client's preferred language(s) for displaying pages
* report now includes a timestamp with the client's locale date, time and time zone

*1.0.0 — September 11, 2015*

* initial version
* reports the same browser details as whatsmybrowser.org, except IP address

# Inspiration
This [Q&A on StackOverflow][5] is what got me started on creating this.

# License
browser-report is available under the [MIT License][6].


  [1]: http://www.whatsmybrowser.org
  [2]: https://github.com/bestiejs/platform.js
  [3]: http://caniuse.com/usage-table
  [4]: http://gs.statcounter.com/browser-market-share
  [5]: http://stackoverflow.com/questions/9514179/how-to-find-the-operating-system-version-using-javascript
  [6]: https://github.com/keithws/browser-report/blob/master/LICENSE
  [7]: https://github.com/faisalman/ua-parser-js
  [8]: http://gs.statcounter.com/os-market-share
