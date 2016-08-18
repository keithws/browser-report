# browser-report
Report browser settings like [whatsmybrowser.org][1] in a JavaScript object.

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

The goal is to correctly identify all browsers included on caniuse.com according to their [browser usage table][3]. As of February 4, 2016, their browser usage table accounts for 97.9% of global usage based on data from [StatCounter GlobalStats][4]. Note, see the TODO section for which browsers are missing test cases.

Coverage, as of February 4, 2016, is __97.88%__ = (97.9% - 0.02%).

# Benchmarks

The script file size is roughly 3K when gzipped and roughly 2K when uglified and gzipped.

# TODO

In chronological order (oldest first); not in order of priority.

* add support for bower, component, jam, and spm
* server side support (node)
	* not all information is available server side
	* but a lot of information can be extracted from the user agent
	* and the remote IP address is available
* report on other/all plugins
* report on value for font size of root element
* report on the client's Do-Not-Track setting
* add test cases for
	* Opera Mobile (0.02%)
* report if the client supports third-party cookies
* check caniuse usage table and update tests and coverage

#Change Log

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
  [4]: http://gs.statcounter.com/
  [5]: http://stackoverflow.com/questions/9514179/how-to-find-the-operating-system-version-using-javascript
  [6]: https://github.com/keithws/browser-report/blob/master/LICENSE
  [7]: https://github.com/faisalman/ua-parser-js
