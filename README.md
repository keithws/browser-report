# browser-report
Report browser settings like [whatsmybrowser.org](http://www.whatsmybrowser.org).

Often, when a visitor to your website reports an issue, it can be difficult or impossible to reproduce the same issue without asking your visitor what software and settings they use.

Lately, in this situation, I ask my visitors to send me the report from whatsmybrowser.org. But then, I realized that most of that information is available, via JavaScript, when the visitor is submitting their issue. So I set out to create a script that would provide the that information.

Note, this is meant for reporting and not for application logic; your application should use feature detection, not browser detection. Therefore, only the most common browser names and OS names are reported. The full user agent string is always provided and it can help you identify any browser. If you need to report on every browser and OS, take a look at [platform.js](https://github.com/bestiejs/platform.js).

# Usage
Load this script into a browser and call `browserReport()` to get back an object with the following keys and value types. Note, some values maybe `null` if the information is not available.

	{
		"browser": {
			"name": (string),
			"size": (string: width x hieght),
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
		"os": {
			"name": (string),
			"version": (string)
		},
		"screen": {
			"colors": (number),
			"resolution": (string: width x hieght),
			"size": (string: width x hieght)
		},
		"scripts": (boolean),
		"userAgent": (string),
		"websockets": (boolean)
	}

# Todo

* add package manager support
* generate UUID for cookie test instead of using the same UUID every time
* report the client's preferred language for displaying pages
* report the client's Date and Time and Time Zone
* add optional call to a service to get the remote IP address, consider ipify.org
* server side support (node)
	* not all information is available server side
	* but a lot of information can be extracted from the user agent
	* and the remote IP address is available
* report on other/all plugins

#Change Log

*1.0.0 — September 11, 2015*

* initial version
* reports the same browser details as whatsmybrowser.org, except IP address

# Inspiration
This [Q&A on StackOverflow](http://stackoverflow.com/questions/9514179/how-to-find-the-operating-system-version-using-javascript) is what got me started on creating this.

# License
browser-report is available under the [MIT License](https://github.com/keithws/browser-report/blob/master/LICENSE).
