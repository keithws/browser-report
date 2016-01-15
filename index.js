/*
* Report browser settings like whatsmybrowser.org
* Inspired by
* http://stackoverflow.com/questions/9514179/how-to-find-the-operating-system-version-using-javascript
*/
(function () {
    "use strict";

    var extractDataFromClient;

    extractDataFromClient = function () {
        var report, match, uuid;

        // initialize object to store results
        report = {
            "browser": {
                "name": null,
                "version": null
            },
            "cookies": null,
            "flash": {
                "version": null
            },
            "ip": null,
            "java": {
                "version": null
            },
            "os": {
                "name": null,
                "version": null
            },
            "screen": {
                "colors": null,
                "dppx": null,
                "height": null,
                "width": null
            },
            "scripts": true,
            "userAgent": navigator.userAgent,
            "viewport": {
                "height": null,
                "layout": {
                    "height": null,
                    "width": null
                },
                "width": null,
                "zoom": null
            },
            "websockets": null
        };


        // extract browser name from user agent
        match = navigator.userAgent.match(/^(\w+)\//);
        if (match && match[1]) {
            report.browser.name = match[1];
        }

        if (navigator.userAgent.indexOf("Chrome") >= 0) {
            report.browser.name = "Chrome";
        }

        if (navigator.userAgent.indexOf("Firefox") >= 0) {
            report.browser.name = "Firefox";
        }

        if (navigator.userAgent.match(/(Edge|Trident|MSIE)/)) {
            report.browser.name = "Internet Explorer";
        }

        if (navigator.userAgent.indexOf("Safari") >= 0) {
            if (!(navigator.userAgent.indexOf("Chrome") >= 0)) {
                report.browser.name = "Safari";
            }
        }


        // extract browser version number from user agent
        match = null;

        switch (report.browser.name) {
        case "Chrome":
            match = navigator.userAgent.match(/Chrome\/((\d+\.)+\d+)/);
            break;
        case "Firefox":
            match = navigator.userAgent.match(/Firefox\/((\d+\.)+\d+)/);
            break;
        case "Internet Explorer":

            if (navigator.userAgent.indexOf("Edge") >= 0) {
                match = navigator.userAgent.match(/Edge\/((\d+\.)+\d+)/);
            } else if (navigator.userAgent.indexOf("rv:11") >= 0) {
                match = navigator.userAgent.match(/rv:((\d+\.)+\d+)/);
            } else if (navigator.userAgent.indexOf("MSIE") >= 0) {
                match = navigator.userAgent.match(/MSIE\ ((\d+\.)+\d+)/);
            }

            break;
        case "Safari":
            match = navigator.userAgent.match(/Version\/((\d+\.)+\d+)/);
            break;
        default:
            match = navigator.userAgent.match(/\/((\d+\.)+\d+)$/);
            break;
        }

        if (match && match[1]) {
            report.browser.version = match[1];
        }

        // pull in browser window size from the visual viewport
        report.viewport.width = window.innerWidth;
        report.viewport.height = window.innerHeight;

        // deprecate report.browser.size
        Object.defineProperty(report.browser, "size", {
            get: function () {
                console.warn("browser.size is deprecated; use viewport.width and viewport.height");
                return report.viewport.width + " x " + report.viewport.height;
            }
        });

        // pull in raw values for layout viewport
        report.viewport.layout.width = document.documentElement.clientWidth;
        report.viewport.layout.height = document.documentElement.clientHeight;

        // define viewport zoom property
        report.viewport.zoom = report.viewport.layout.width / report.viewport.width;


        // are cookies enabled
        report.cookies = !!navigator.cookieEnabled;

        // double check if cookies are enabled
        if (!report.cookies) {

            // generate UUID
            uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
            uuid = uuid.replace(/[xy]/g, function (c) {
                var r, v;

                r = Math.random() * 16 | 0;
                v = c === 'x'
                    ? r
                    : (r & 0x3 | 0x8);

                return v.toString(16);
            });
            document.cookie = uuid;

            if (document.cookie.indexOf(uuid) >= 0) {
                report.cookies = true;
            }

            document.cookie = uuid + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }


        // check plugins
        (function (plugins) {
            var i, l, plugin;

            if (plugins) {
                l = plugins.length;

                for (i = 0; i < l; i += 1) {
                    plugin = plugins.item(i);

                    // what version of Adobe Flash
                    if (plugin.name.indexOf("Flash") >= 0) {
                        match = plugin.description.match(/\b((\d+\.)+\d+)\b/);
                        if (match && match[1]) {
                            report.flash.version = match[1];
                        }
                    }

                    // what version of Java
                    if (plugin.name.indexOf("Java") >= 0) {
                        match = plugin.description.match(/\b((\d+\.)+\d+)\b/);
                        if (match && match[1]) {
                            report.java.version = match[1];
                        }
                    }
                }
            }
        }(navigator.plugins));


        // extract operating system name from user agent
        if (navigator.userAgent.indexOf("Windows") >= 0) {
            report.os.name = "Windows";
        }

        if (navigator.userAgent.indexOf("OS X") >= 0) {
            report.os.name = "OS X";
        }

        if (navigator.userAgent.indexOf("Linux") >= 0) {
            report.os.name = "Linux";
        }

        if (navigator.userAgent.indexOf("like Mac OS X") >= 0) {
            report.os.name = "iOS";
        }

        if (navigator.userAgent.indexOf("Android") >= 0) {
            report.os.name = "Android";
        }


        // extract operating system version from user agent
        match = null;

        switch (report.os.name) {
        case "Windows":
            if (navigator.userAgent.indexOf("Win16") >= 0) {
                report.os.version = "3.1.1";
            } else {
                match = navigator.userAgent.match(/Win(?:dows)?[\ _]?(?:(?:NT|9x)\ )?((?:(\d+\.)*\d+)|XP|ME|CE)\b/);

                if (match && match[1]) {
                    switch (match[1]) {
                    case "6.3":
                        match[1] = "8.1";
                        break;
                    case "6.2":
                        match[1] = "8";
                        break;
                    case "6.1":
                        match[1] = "7";
                        break;
                    case "6.0":
                        match[1] = "Vista";
                        break;
                    case "5.2":
                        match[1] = "Server 2003";
                        break;
                    case "5.1":
                        match[1] = "XP";
                        break;
                    case "5.0":
                        match[1] = "2000";
                        break;
                    case "4.9":
                    case "4.9.0":
                        match[1] = "ME";
                        break;
                    default:
                        // nothing
                        break;
                    }
                }
            }
            break;
        case "OS X":
            match = navigator.userAgent.match(/OS\ X\ ((\d+[._])+\d+)\b/);
            break;
        case "Linux":
            // linux user agent strings do not usually include the version
            report.os.version = null;
            break;
        case "iOS":
            match = navigator.userAgent.match(/OS\ ((\d+[._])+\d+)\ like\ Mac\ OS\ X/);
            break;
        case "Android":
            match = navigator.userAgent.match(/Android\ ((\d+[._])+\d+)/);
            break;
        default:
            // no good default behavior
            report.os.version = null;
            break;
        }

        if (match && match[1]) {

            // replace underscores in version number with periods
            match[1] = match[1].replace(/_/g, ".");
            report.os.version = match[1];
        }


        // pull in screen info from W3C standard properties
        report.screen.width = screen.width;
        report.screen.height = screen.height;
        report.screen.colors = screen.colorDepth;
        if (window.devicePixelRatio && !isNaN(window.devicePixelRatio)) {
            report.screen.dppx = window.devicePixelRatio;
        } else {
            report.screen.dppx = 1;
        }

        // deprecate report.screen.size
        Object.defineProperty(report.screen, "size", {
            get: function () {
                console.warn("screen.size is deprecated; use screen.width and screen.height");
                return report.screen.width + " x " + report.screen.height;
            }
        });

        // deprecate report.screen.resolution
        Object.defineProperty(report.screen, "resolution", {
            get: function () {
                console.warn("screen.resolution is deprecated; multiply screen.width and screen.height by screen.dppx");
                return (report.screen.dppx * report.screen.width) + " x " + (report.screen.dppx * report.screen.height);
            }
        });


        // are web sockets supported
        report.websockets = !!window.WebSocket;


        // preferred language(s) for displaying pages
        report.lang = navigator.languages || navigator.language;


        // local date, time, and time zone
        report.timestamp = (new Date()).toString();


        return report;
    };


    /*
     * asynchronous version includes the remote client IP address
     * uses ipify.org API
     */
    window.browserReport = window.browserReport || function (callback) {
        var report, newScriptTag, existingScriptTag;

        report = extractDataFromClient();

        // use ipify.org to get the remote client ip address
        // define function to handle data from ipify.org
        window.getip = window.getip || function (data) {
            report.ip = data.ip;
            callback(null, report);
        };

        // inject script tag get JSONP response from ipify.org
        newScriptTag = document.createElement("script");
        newScriptTag.src = "https://api.ipify.org?format=jsonp&callback=getip";
        existingScriptTag = document.getElementsByTagName("script")[0];
        existingScriptTag.parentNode.insertBefore(newScriptTag, existingScriptTag);

        // report on errors
        newScriptTag.onerror = callback;

    };


    /*
     * synchronous version returns report immediately
     * but does not include the remote client IP address
     */
    window.browserReportSync = window.browserReportSync || function () {
        return extractDataFromClient();
    };
}());
