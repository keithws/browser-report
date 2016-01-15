# browser-report
Report browser settings like [whatsmybrowser.org](http://www.whatsmybrowser.org) in a JavaScript object.

Often, when a visitor to your website reports an issue, it can be difficult or impossible to reproduce the same issue without asking your visitor what software and settings they use.

Lately, in this situation, I ask my visitors to send me the report from whatsmybrowser.org. But then, I realized that most of that information is available, via JavaScript, when the visitor is submitting their issue. So I set out to create a script that would provide the that information.

Note, this is meant for reporting and not for application logic; your application should use feature detection, not browser detection. Therefore, only the most common browser names and OS names are reported. The full user agent string is always provided and it can help you identify any browser. If you need to report on every browser and OS, take a look at [platform.js](https://github.com/bestiejs/platform.js).

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

# Todo

* add package manager support
* server side support (node)
	* not all information is available server side
	* but a lot of information can be extracted from the user agent
	* and the remote IP address is available
* report on other/all plugins
* add value for font size of root element
* include the client's Do-Not-Track setting

#Change Log

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
This [Q&A on StackOverflow](http://stackoverflow.com/questions/9514179/how-to-find-the-operating-system-version-using-javascript) is what got me started on creating this.

# License
browser-report is available under the [MIT License](https://github.com/keithws/browser-report/blob/master/LICENSE).
