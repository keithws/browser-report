# browser-report
Report browser settings like whatsmybrowser.org

# useage
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

* add optional call to a service to get the remote IP address, consider ipify.org
* report the client's preferred language for displaying pages
* report the client's Date and Time and Time Zone
