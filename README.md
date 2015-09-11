# browser-report
Report browser settings like whatsmybrowser.org

# usage
Load this script into a browser and call `browserReport()` to get back an object with the following keys.

	{
		"browser": {
			"name": …,
			"version": …,
			"size": …
		},
		"cookies": …,
		"flash": {
			"version": …
		},
		"ip": …,
		"java": {
			"version": …
		},
		"os": {
			"name": …,
			"version": …
		},
		"screen": {
			"size": …,
			"colors": …,
			"resolution": …
		},
		"scripts": …,
		"userAgent": …,
		"websockets": …
	}


# todo

* add package manager support
* report the client's preferred language for displaying pages
* report the client's Date and Time and Time Zone
* add optional call to a service to get the remote IP address, consider ipify.org
* support server side?

