/* eslint no-unused-vars: "off" */
var expectedResults = [
    {
        "device": "Edge 14",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.82 Safari/537.36 Edge/14.14316",
        "expectedReport": {
            "browser": {
                "name": "Edge",
                "version": "14.14316"
            },
            "os": {
                "name": "Windows",
                "version": "10.0"
            }
        }
    },
    {
        "device": "Edge 13",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586",
        "expectedReport": {
            "browser": {
                "name": "Edge",
                "version": "13.10586"
            },
            "os": {
                "name": "Windows",
                "version": "10.0"
            }
        }
    },
    {
        "device": "Edge 13 — Windows Phone 10 — Nokia Lumia 1520",
        "userAgent": "Mozilla/5.0 (Windows Phone 10.0; Android 5.1.1; NOKIA; Lumia 1520) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/13.10586",
        "expectedReport": {
            "browser": {
                "name": "Edge",
                "version": "13.10586"
            },
            "os": {
                "name": "Windows Phone",
                "version": "10.0"
            }
        }
    },
    {
        "device": "Edge 12",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136",
        "expectedReport": {
            "browser": {
                "name": "Edge",
                "version": "12.10136"
            },
            "os": {
                "name": "Windows",
                "version": "10.0"
            }
        }
    },
    {
        "device": "Internet Explorer 11",
        "userAgent": "Mozilla/5.0 (Windows NT 6.3; Win64, x64; Trident/7.0; rv:11.0) like Gecko",
        "expectedReport": {
            "browser": {
                "name": "Internet Explorer",
                "version": "11.0"
            },
            "os": {
                "name": "Windows",
                "version": "8.1"
            }
        }
    },
    {
        "device": "Internet Explorer 10",
        "userAgent": "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Win64; x64; Trident/6.0)",
        "expectedReport": {
            "browser": {
                "name": "Internet Explorer",
                "version": "10.0"
            },
            "os": {
                "name": "Windows",
                "version": "8"
            }
        }
    },
    {
        "device": "Internet Explorer 9 — Windows 7",
        "userAgent": "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)",
        "expectedReport": {
            "browser": {
                "name": "Internet Explorer",
                "version": "9.0"
            },
            "os": {
                "name": "Windows",
                "version": "7"
            }
        }
    },
    {
        "device": "Internet Explorer 9 — Windows Vista",
        "userAgent": "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Trident/5.0)",
        "expectedReport": {
            "browser": {
                "name": "Internet Explorer",
                "version": "9.0"
            },
            "os": {
                "name": "Windows",
                "version": "Vista"
            }
        }
    },
    {
        "device": "Internet Explorer 8",
        "userAgent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)",
        "expectedReport": {
            "browser": {
                "name": "Internet Explorer",
                "version": "8.0"
            },
            "os": {
                "name": "Windows",
                "version": "Vista"
            }
        }
    },
    {
        "device": "Internet Explorer 7",
        "userAgent": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)",
        "expectedReport": {
            "browser": {
                "name": "Internet Explorer",
                "version": "7.0"
            },
            "os": {
                "name": "Windows",
                "version": "Vista"
            }
        }
    },
    {
        "device": "Internet Explorer 6",
        "userAgent": "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)",
        "expectedReport": {
            "browser": {
                "name": "Internet Explorer",
                "version": "6.0"
            },
            "os": {
                "name": "Windows",
                "version": "XP"
            }
        }
    },
    {
        "device": "Firefox — Windows",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:50.0) Gecko/20100101 Firefox/50.0",
        "expectedReport": {
            "browser": {
                "name": "Firefox",
                "version": "50.0"
            },
            "os": {
                "name": "Windows",
                "version": "10.0"
            }
        }
    },
    {
        "device": "Firefox — Mac",
        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:50.0) Gecko/20100101 Firefox/50.0",
        "expectedReport": {
            "browser": {
                "name": "Firefox",
                "version": "50.0"
            },
            "os": {
                "name": "OS X",
                "version": "10.12"
            }
        }
    },
    {
        "device": "Chrome — Windows",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36",
        "expectedReport": {
            "browser": {
                "name": "Chrome",
                "version": "55.0.2883.87"
            },
            "os": {
                "name": "Windows",
                "version": "10.0"
            }
        }
    },
    {
        "device": "Chrome — Mac",
        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36",
        "expectedReport": {
            "browser": {
                "name": "Chrome",
                "version": "55.0.2883.95"
            },
            "os": {
                "name": "OS X",
                "version": "10.12.2"
            }
        }
    },
    {
        "device": "Safari",
        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/601.4.4 (KHTML, like Gecko) Version/9.0.3 Safari/601.4.4",
        "expectedReport": {
            "browser": {
                "name": "Safari",
                "version": "9.0.3"
            },
            "os": {
                "name": "OS X",
                "version": "10.11.0"
            }
        }
    },
    {
        "device": "Opera 42 — Windows",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2393.94 Safari/537.36 OPR/42.0.2393.94",
        "expectedReport": {
            "browser": {
                "name": "Opera",
                "version": "42.0.2393.94"
            },
            "os": {
                "name": "Windows",
                "version": "10.0"
            }
        }
    },
    {
        "device": "Opera 29 — Mac",
        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.82 Safari/537.36 OPR/29.0.1795.41 (Edition beta)",
        "expectedReport": {
            "browser": {
                "name": "Opera",
                "version": "29.0.1795.41"
            },
            "os": {
                "name": "OS X",
                "version": "10.10.2"
            }
        }
    },
    {
        "device": "Opera 15 — Windows",
        "userAgent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.52 Safari/537.36 OPR/15.0.1147.100",
        "expectedReport": {
            "browser": {
                "name": "Opera",
                "version": "15.0.1147.100"
            },
            "os": {
                "name": "Windows",
                "version": "7"
            }
        }
    },
    {
        "device": "Opera 12.1 — Windows",
        "userAgent": "Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14",
        "expectedReport": {
            "browser": {
                "name": "Opera",
                "version": "12.14"
            },
            "os": {
                "name": "Windows",
                "version": "Vista"
            }
        }
    },
    {
        "device": "Opera 10.1 — Windows",
        "userAgent": "Opera/9.80 (Windows NT 6.0; U; en) Presto/2.2.15 Version/10.10",
        "expectedReport": {
            "browser": {
                "name": "Opera",
                "version": "10.10"
            },
            "os": {
                "name": "Windows",
                "version": "Vista"
            }
        }
    },
    {
        "device": "Opera 9 — Windows",
        "userAgent": "Opera/9.27 (Windows NT 5.1; U; en)",
        "expectedReport": {
            "browser": {
                "name": "Opera",
                "version": "9.27"
            },
            "os": {
                "name": "Windows",
                "version": "XP"
            }
        }
    },
    {
        "device": "Safari — iOS 10 — iPhone",
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/10.0 Mobile/14A300 Safari/602.1",
        "expectedReport": {
            "browser": {
                "name": "Safari",
                "version": "10.0"
            },
            "os": {
                "name": "iOS",
                "version": "10.0"
            }
        }
    },
    {
        "device": "Safari — iOS 9.1 — iPhone",
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
        "expectedReport": {
            "browser": {
                "name": "Safari",
                "version": "9.0"
            },
            "os": {
                "name": "iOS",
                "version": "9.1"
            }
        }
    },
    {
        "device": "Opera Mini 8 — Android",
        "userAgent": "Opera/9.80 (Android; Opera Mini/8.0.1807/36.1609; U; en) Presto/2.12.423 Version/12.16",
        "expectedReport": {
            "browser": {
                "name": "Opera Mini",
                "version": "8.0.1807"
            },
            "os": {
                "name": "Android",
                "version": null
            }
        }
    },
    {
        "device": "Android Browser — Android 4.3 — Samsung Galaxy Note 3",
        "userAgent": "Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
        "expectedReport": {
            "browser": {
                "name": "Android Browser",
                "version": "4.0"
            },
            "os": {
                "name": "Android",
                "version": "4.3"
            }
        }
    },
    {
        "device": "Android Browser — Android 4.1 — Samsung Galaxy Note II",
        "userAgent": "Mozilla/5.0 (Linux; U; Android 4.1; en-us; GT-N7100 Build/JRO03C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
        "expectedReport": {
            "browser": {
                "name": "Android Browser",
                "version": "4.0"
            },
            "os": {
                "name": "Android",
                "version": "4.1"
            }
        }
    },
    {
        "device": "Android Browser — Android 4.0 — Samsung Galaxy S III",
        "userAgent": "Mozilla/5.0 (Linux; U; Android 4.0; en-us; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
        "expectedReport": {
            "browser": {
                "name": "Android Browser",
                "version": "4.0"
            },
            "os": {
                "name": "Android",
                "version": "4.0"
            }
        }
    },
    {
        "device": "BlackBerry 10 — BlackBerry 10 — BlackBerry Z10",
        "userAgent": "Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.1.0.1429 Mobile Safari/537.10+",
        "expectedReport": {
            "browser": {
                "name": "BlackBerry",
                "version": "10.1.0.1429"
            },
            "os": {
                "name": "BlackBerry",
                "version": "10.1.0.1429"
            }
        }
    },
    {
        "device": "BlackBerry 7 — BlackBerry Tablet OS — BlackBerry PlayBook",
        "userAgent": "Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.0.0; en-US) AppleWebKit/535.8+ (KHTML, like Gecko) Version/7.2.0.0 Safari/535.8+",
        "expectedReport": {
            "browser": {
                "name": "BlackBerry",
                "version": "7.2.0.0"
            },
            "os": {
                "name": "BlackBerry Tablet OS",
                "version": "2.0.0"
            }
        }
    },
    {
        "device": "BlackBerry 6 — BlackBerryOS — BlackBerry 9800",
        "userAgent": "Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en-US) AppleWebKit/534.8+ (KHTML, like Gecko) Version/6.0.0.466 Mobile Safari/534.8+",
        "expectedReport": {
            "browser": {
                "name": "BlackBerry",
                "version": "6.0.0.466"
            },
            "os": {
                "name": "BlackBerryOS",
                "version": "6.0.0.466"
            }
        }
    },
    {
        "device": "Chrome for Android 55 — Android 6.0 — Google Nexus 5",
        "userAgent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2490.76 Mobile Safari/537.36",
        "expectedReport": {
            "browser": {
                "name": "Chrome for Android",
                "version": "55.0.2490.76"
            },
            "os": {
                "name": "Android",
                "version": "6.0"
            }
        }
    },
    {
        "device": "Chrome for Android 46 — Android 5.1 — Google Nexus 6",
        "userAgent": "Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.76 Mobile Safari/537.36",
        "expectedReport": {
            "browser": {
                "name": "Chrome for Android",
                "version": "46.0.2490.76"
            },
            "os": {
                "name": "Android",
                "version": "5.1.1"
            }
        }
    },
    {
        "device": "Chrome for Android 46 — Android 4.4 — Google Nexus 4",
        "userAgent": "Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.76 Mobile Safari/537.36",
        "expectedReport": {
            "browser": {
                "name": "Chrome for Android",
                "version": "46.0.2490.76"
            },
            "os": {
                "name": "Android",
                "version": "4.4.2"
            }
        }
    },
    {
        "device": "Chrome for Android 46 — Android 4.2 — Samsung Galaxy S4",
        "userAgent": "Mozilla/5.0 (Linux; Android 4.2.2; GT-I9505 Build/JDQ39) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.76 Mobile Safari/537.36",
        "expectedReport": {
            "browser": {
                "name": "Chrome for Android",
                "version": "46.0.2490.76"
            },
            "os": {
                "name": "Android",
                "version": "4.2.2"
            }
        }
    },
    {
        "device": "Chrome 46 — Android 4.3 — Google Nexus 10",
        "userAgent": "Mozilla/5.0 (Linux; Android 4.3; Nexus 10 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.76 Safari/537.36",
        "expectedReport": {
            "browser": {
                "name": "Chrome",
                "version": "46.0.2490.76"
            },
            "os": {
                "name": "Android",
                "version": "4.3"
            }
        }
    },
    {
        "device": "WebView on Android 46 — Android 4.4 — LG Optimus L70",
        "userAgent": "Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; LGMS323 Build/KOT49I.MS32310c) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/46.0.2490.76 Mobile Safari/537.36",
        "expectedReport": {
            "browser": {
                "name": "WebView on Android",
                "version": "46.0.2490.76"
            },
            "os": {
                "name": "Android",
                "version": "4.4.2"
            }
        }
    },
    {
        "device": "Firefox for Android 41 — Android 4.4",
        "userAgent": "Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0",
        "expectedReport": {
            "browser": {
                "name": "Firefox for Android",
                "version": "41.0"
            },
            "os": {
                "name": "Android",
                "version": "4.4"
            }
        }
    },
    {
        "device": "Firefox for iOS 1.0 — iOS 8.3",
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) FxiOS/1.0 Mobile/12F69 Safari/600.1.4",
        "expectedReport": {
            "browser": {
                "name": "Firefox for iOS",
                "version": "1.0"
            },
            "os": {
                "name": "iOS",
                "version": "8.3"
            }
        }
    },
    {
        "device": "IE Mobile 11 — Window Phone 8.1 — Nokia Lumia 625",
        "userAgent": "Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 625) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537",
        "expectedReport": {
            "browser": {
                "name": "IE Mobile",
                "version": "11.0"
            },
            "os": {
                "name": "Windows Phone",
                "version": "8.1"
            }
        }
    },
    {
        "device": "IE Mobile 10 — Window Phone 8.0 — Nokia Lumia 520",
        "userAgent": "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 520)",
        "expectedReport": {
            "browser": {
                "name": "IE Mobile",
                "version": "10.0"
            },
            "os": {
                "name": "Windows Phone",
                "version": "8.0"
            }
        }
    },
    {
        "device": "UC Browser 11 — Android 5.1 — Speed Mode On",
        "userAgent": "UCWEB/2.0 (Linux; U; Adr 5.1; en-US; Lenovo Z90a40 Build/LMY47O) U2/1.0.0 UCBrowser/11.1.5.890 U2/1.0.0 Mobile",
        "expectedReport": {
            "browser": {
                "name": "UC Browser for Android",
                "version": "11.1.5.890"
            },
            "os": {
                "name": "Android",
                "version": "5.1"
            }
        }
    },
    {
        "device": "UC Browser 11 — Android 5.1 — Speed Mode Off",
        "userAgent": "Mozilla/5.0 (Linux; U; Android 5.1; en-US; Lenovo Z90a40 Build/LMY47O) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/11.1.5.890 U3/0.8.0 Mobile Safari/534.30",
        "expectedReport": {
            "browser": {
                "name": "UC Browser for Android",
                "version": "11.1.5.890"
            },
            "os": {
                "name": "Android",
                "version": "5.1"
            }
        }
    },
    {
        "device": "UC Browser 8.6 — Android 2.3 — Speed Mode On",
        "userAgent": "UCWEB/2.0 (Linux; U; Adr 2.3; en-US; MI-ONEPlus) U2/1.0.0 UCBrowser/8.6.0.199 U2/1.0.0 Mobile",
        "expectedReport": {
            "browser": {
                "name": "UC Browser for Android",
                "version": "8.6.0.199"
            },
            "os": {
                "name": "Android",
                "version": "2.3"
            }
        }
    },
    {
        "device": "UC Browser 8.6 — Android 2.3 — Speed Mode Off",
        "userAgent": "Mozilla/5.0 (Linux; U; Android 2.3; zh-CN; MI-ONEPlus) AppleWebKit/534.13 (KHTML, like Gecko) UCBrowser/8.6.0.199 U3/0.8.0 Mobile Safari/534.13",
        "expectedReport": {
            "browser": {
                "name": "UC Browser for Android",
                "version": "8.6.0.199"
            },
            "os": {
                "name": "Android",
                "version": "2.3"
            }
        }
    },
    {
        "device": "Samsung Internet 4.0 — Android 5.0",
        "userAgent": "Mozilla/5.0 (Linux; Android 5.0.2; SAMSUNG SM-G925F Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/4.0 Chrome/44.0.2403.133 Mobile Safari/537.36",
        "expectedReport": {
            "browser": {
                "name": "Samsung Internet",
                "version": "4.0"
            },
            "os": {
                "name": "Android",
                "version": "5.0.2"
            }
        }
    },
    {
        "device": "Opera Mobile 15.0 — Android 4.4.4",
        "userAgent": "Mozilla/5.0 (Linux; Android 4.4.4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.52 Safari/537.36 Mobile OPR/15.0.1147.100",
        "expectedReport": {
            "browser": {
                "name": "Opera Mobile",
                "version": "15.0.1147.100"
            },
            "os": {
                "name": "Android",
                "version": "4.4.4"
            }
        }
    },
    {
        "device": "Opera Mobile 14.0 — Android 2.3.4 — Sony MT11i Xperia neo V",
        "userAgent": "Mozilla/5.0 (Linux; Android 2.3.4; MT11i Build/4.0.2.A.0.62) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.123 Mobile Safari/537.22 OPR/14.0.1025.52315",
        "expectedReport": {
            "browser": {
                "name": "Opera Mobile",
                "version": "14.0.1025.52315"
            },
            "os": {
                "name": "Android",
                "version": "2.3.4"
            }
        }
    },
    {
        "device": "Opera Mobile 11.1 — Windows 7 — Tablet",
        "userAgent": "Opera/9.80 (Windows NT 6.1; Opera Tablet/15165; U; en) Presto/2.8.149 Version/11.1",
        "expectedReport": {
            "browser": {
                "name": "Opera Mobile",
                "version": "11.1"
            },
            "os": {
                "name": "Windows",
                "version": "7"
            }
        }
    },
    {
        "device": "Opera Mobile 10.5 — Android 2.2",
        "userAgent": "Opera/9.80 (Android 2.2; Opera Mobi/-2118645896; U; pl) Presto/2.7.60 Version/10.5",
        "expectedReport": {
            "browser": {
                "name": "Opera Mobile",
                "version": "10.5"
            },
            "os": {
                "name": "Android",
                "version": "2.2"
            }
        }
    },
];
