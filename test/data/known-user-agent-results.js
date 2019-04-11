/* eslint no-unused-vars: "off" */
var expectedResults = [
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
        "device": "Edge 18",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/18.17763",
        "expectedReport": {
            "browser": {
                "name": "Edge",
                "majorVersion": "18"
            },
            "os": {
                "name": "Windows",
                "version": "10.0"
            }
        }
    },
    {
        "device": "Edge 17",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134",
        "expectedReport": {
            "browser": {
                "name": "Edge",
                "version": "17.17134"
            },
            "os": {
                "name": "Windows",
                "version": "10.0"
            }
        }
    },
    {
        "device": "Edge 16",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; WebView/3.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299",
        "expectedReport": {
            "browser": {
                "name": "Edge",
                "version": "16.16299"
            },
            "os": {
                "name": "Windows",
                "version": "10.0"
            }
        }
    },
    {
        "device": "Edge 15",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063",
        "expectedReport": {
            "browser": {
                "name": "Edge",
                "version": "15.15063"
            },
            "os": {
                "name": "Windows",
                "version": "10.0"
            }
        }
    },
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
        "device": "Firefox — Windows",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
        "expectedReport": {
            "browser": {
                "name": "Firefox",
                "version": "66.0"
            },
            "os": {
                "name": "Windows",
                "version": "10.0"
            }
        }
    },
    {
        "device": "Firefox — Mac",
        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:66.0) Gecko/20100101 Firefox/66.0",
        "expectedReport": {
            "browser": {
                "name": "Firefox",
                "version": "66.0"
            },
            "os": {
                "name": "macOS",
                "version": "10.14"
            }
        }
    },
    {
        "device": "Chrome — Windows",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36",
        "expectedReport": {
            "browser": {
                "name": "Chrome",
                "majorVersion": "73"
            },
            "os": {
                "name": "Windows",
                "version": "10.0"
            }
        }
    },
    {
        "device": "Chrome — Mac",
        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36",
        "expectedReport": {
            "browser": {
                "name": "Chrome",
                "majorVersion": "73"
            },
            "os": {
                "name": "macOS",
                "version": "10.14.3"
            }
        }
    },
    {
        "device": "Chrome 72 — Chromebook",
        "userAgent": "Mozilla/5.0 (X11; CrOS x86_64 11316.165.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.122 Safari/537.36",
        "expectedReport": {
            "browser": {
                "name": "Chrome",
                "majorVersion": "72"
            },
            "os": {
                "name": "Chrome OS",
                "version": "72.0.3626.122"
            }
        }
    },
    {
        "device": "Chrome 55 — Chromebook",
        "userAgent": "Mozilla/5.0 (X11; CrOS x86_64 8872.76.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.105 Safari/537.36",
        "expectedReport": {
            "browser": {
                "name": "Chrome",
                "majorVersion": "55"
            },
            "os": {
                "name": "Chrome OS",
                "version": "55.0.2883.105"
            }
        }
    },
    {
        "device": "Chrome 30 — Chromebook",
        "userAgent": "Mozilla/5.0 (X11; CrOS armv7l 4537.56.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.38 Safari/537.36",
        "expectedReport": {
            "browser": {
                "name": "Chrome",
                "version": "30.0.1599.38"
            },
            "os": {
                "name": "Chrome OS",
                "version": "30.0.1599.38"
            }
        }
    },
    {
        "device": "Safari 12 — macOS Mojave",
        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0.3 Safari/605.1.15",
        "expectedReport": {
            "browser": {
                "name": "Safari",
                "version": "12.0.3",
                "majorVersion": "12"
            },
            "os": {
                "name": "macOS",
                "version": "10.14.3"
            }
        }
    },
    {
        "device": "Safari 11 — macOS Sierra",
        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1.2 Safari/605.1.15",
        "expectedReport": {
            "browser": {
                "name": "Safari",
                "version": "11.1.2",
                "majorVersion": "11"
            },
            "os": {
                "name": "macOS",
                "version": "10.12.6"
            }
        }
    },
    {
        "device": "Opera 58 — Windows",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36 OPR/58.0.3135.114",
        "expectedReport": {
            "browser": {
                "name": "Opera",
                "majorVersion": "58"
            },
            "os": {
                "name": "Windows",
                "version": "10.0"
            }
        }
    },
    {
        "device": "Opera 53 — Mac",
        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.170 Safari/537.36 OPR/53.0.2907.68",
        "expectedReport": {
            "browser": {
                "name": "Opera",
                "majorVersion": "53"
            },
            "os": {
                "name": "macOS",
                "version": "10.13.5"
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
        "device": "Safari — iOS 12 — iPhone",
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1",
        "expectedReport": {
            "browser": {
                "name": "Safari",
                "version": "12.0"
            },
            "os": {
                "name": "iOS",
                "version": "12.1.4"
            }
        }
    },
    {
        "device": "Safari — iOS 11 — iPhone",
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
        "expectedReport": {
            "browser": {
                "name": "Safari",
                "version": "11.0"
            },
            "os": {
                "name": "iOS",
                "version": "11.0"
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
        "device": "Opera Mini 32 — Android",
        "userAgent": "Opera/9.80 (Android; Opera Mini/32.0/88.150; U; sr) Presto/2.12 Version/12.16",
        "expectedReport": {
            "browser": {
                "name": "Opera Mini",
                "majorVersion": "32"
            },
            "os": {
                "name": "Android",
                "version": null
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
        "device": "Android Browser — Android 4.4.4 — Samsung Galaxy Grand Prime",
        "userAgent": "Mozilla/5.0 (Linux; U; Android 4.4.4; pt-br; SM-G530BT Build/KTU84P) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
        "expectedReport": {
            "browser": {
                "name": "Android Browser",
                "version": "4.4.4"
            },
            "os": {
                "name": "Android",
                "version": "4.4.4"
            }
        }
    },
    {
        "device": "Android Browser — Android 4.4.2",
        "userAgent": "Mozilla/5.0 (Linux; U; Android 4.4.2; zh-cn; Q40; Android/4.4.2; Release/12.15.2015) AppleWebKit/534.30 (KHTML, like Gecko) Mobile Safari/534.30",
        "expectedReport": {
            "browser": {
                "name": "Android Browser",
                "version": "4.4.2"
            },
            "os": {
                "name": "Android",
                "version": "4.4.2"
            }
        }
    },
    {
        "device": "Android Browser — Android 4.3 — Samsung Galaxy Note 3",
        "userAgent": "Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
        "expectedReport": {
            "browser": {
                "name": "Android Browser",
                "version": "4.3"
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
                "version": "4.1"
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
    {
        "device": "Chrome for Android 73 — Android 9.0",
        "userAgent": "Mozilla/5.0 (Linux; Android 9; SM-G960U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Mobile Safari/537.36",
        "expectedReport": {
            "browser": {
                "name": "Chrome for Android",
                "majorVersion": "73"
            },
            "os": {
                "name": "Android",
                "version": "9"
            }
        }
    },
    {
        "device": "Chrome for Android 71 — Android 6.0",
        "userAgent": "Mozilla/5.0 (Linux; Android 6.0; CAM-L03) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.99 Mobile Safari/537.36",
        "expectedReport": {
            "browser": {
                "name": "Chrome for Android",
                "majorVersion": "71"
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
        "device": "Firefox for Android 64 — Android 9",
        "userAgent": "Mozilla/5.0 (Android 9; Mobile; rv:64.0) Gecko/64.0 Firefox/64.0",
        "expectedReport": {
            "browser": {
                "name": "Firefox for Android",
                "majorVersion": "64"
            },
            "os": {
                "name": "Android",
                "version": "9"
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
        "device": "UC Browser 12 — Android 6",
        "userAgent": "Mozilla/5.0 (Linux; U; Android 6.0; en-US; CPH1609 Build/MRA58K) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UCBrowser/12.10.2.1164 Mobile Safari/537.36",
        "expectedReport": {
            "browser": {
                "name": "UC Browser for Android",
                "majorVersion": "12"
            },
            "os": {
                "name": "Android",
                "version": "6.0"
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
        "device": "Samsung Internet 9.0 — Android 9",
        "userAgent": "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G965F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.0 Chrome/67.0.3396.87 Mobile Safari/537.36",
        "expectedReport": {
            "browser": {
                "name": "Samsung Internet",
                "majorVersion": "9"
            },
            "os": {
                "name": "Android",
                "version": "9"
            }
        }
    },
    {
        "device": "Samsung Internet 8.2 — Android 8",
        "userAgent": "Mozilla/5.0 (Linux; Android 8.0.0; SAMSUNG SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/8.2 Chrome/63.0.3239.111 Mobile Safari/537.36",
        "expectedReport": {
            "browser": {
                "name": "Samsung Internet",
                "version": "8.2"
            },
            "os": {
                "name": "Android",
                "version": "8.0.0"
            }
        }
    },
    {
        "device": "Samsung Internet 7.2 — Android 7.0",
        "userAgent": "Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-J330FN Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/7.2 Chrome/59.0.3071.125 Mobile Safari/537.36",
        "expectedReport": {
            "browser": {
                "name": "Samsung Internet",
                "version": "7.2"
            },
            "os": {
                "name": "Android",
                "version": "7.0"
            }
        }
    },
    {
        "device": "Samsung Internet 5.0 — Android 5.0",
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
        "device": "QQ Browser 9 — Android 8",
        "userAgent": "Mozilla/5.0 (Linux; U; Android 8.1.0; zh-cn; vivo X21A Build/OPM1.171019.011) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/9.1 Mobile Safari/537.36",
        "expectedReport": {
            "browser": {
                "name": "QQ Browser",
                "majorVersion": "9"
            },
            "os": {
                "name": "Android",
                "version": "8.1.0"
            }
        }
    },
    {
        "device": "QQ Browser 5 — Android 4.4.2",
        "userAgent": "Mozilla/5.0 (Linux; U; Android 4.4.2; zh-cn; GT-I9500 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko)Version/4.0 MQQBrowser/5.0 QQ-URL-Manager Mobile Safari/537.36",
        "expectedReport": {
            "browser": {
                "name": "QQ Browser",
                "majorVersion": "5"
            },
            "os": {
                "name": "Android",
                "version": "4.4.2"
            }
        }
    },
    {
        "device": "Android",
        "userAgent": "Mozilla/5.0 (Linux; Android 9; ONEPLUS A6003) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Mobile Safari/537.36",
        "expectedReport": {
            "browser": {
                "name": "Chrome for Android",
                "majorVersion": "73"
            },
            "os": {
                "name": "Android",
                "version": "9"
            }
        }
    },
    {
        "device": "Windows 10",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36",
        "expectedReport": {
            "browser": {
                "name": "Chrome",
                "majorVersion": "72"
            },
            "os": {
                "name": "Windows",
                "version": "10.0"
            }
        }
    },
    {
        "device": "Firefox 32 on Windows 10 (NT 6.4)",
        "userAgent": "Mozilla/5.0 (Windows NT 6.4; WOW64; rv:32.0) Gecko/20100101 Firefox/32.0",
        "expectedReport": {
            "browser": {
                "name": "Firefox",
                "majorVersion": "32"
            },
            "os": {
                "name": "Windows",
                "version": "10.0"
            }
        }
    },
    {
        "device": "iOS",
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1",
        "expectedReport": {
            "browser": {
                "name": "Safari",
                "majorVersion": "12"
            },
            "os": {
                "name": "iOS",
                "version": "12.1.4"
            }
        }
    },
    {
        "device": "OS X",
        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36",
        "expectedReport": {
            "browser": {
                "name": "Chrome",
                "majorVersion": "72"
            },
            "os": {
                "name": "macOS",
                "version": "10.14.3"
            }
        }
    },
    {
        "device": "Linux",
        "userAgent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:66.0) Gecko/20100101 Firefox/66.0",
        "expectedReport": {
            "browser": {
                "name": "Firefox",
                "majorVersion": "66"
            },
            "os": {
                "name": "Linux",
                "version": null
            }
        }
    },
    {
        "device": "Chrome OS",
        "userAgent": "Mozilla/5.0 (X11; CrOS x86_64 11316.165.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.122 Safari/537.36",
        "expectedReport": {
            "browser": {
                "name": "Chrome",
                "majorVersion": "72"
            },
            "os": {
                "name": "Chrome OS",
                "version": "72.0.3626.122"
            }
        }
    },
    {
        "device": "KaiOS",
        "userAgent": "Mozilla/5.0 (Mobile; LYF/F90M/LYF_F90M_000-03-12-110119; Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5",
        "expectedReport": {
            "browser": {
                "name": "Firefox for Android",
                "majorVersion": "48"
            },
            "os": {
                "name": "KaiOS",
                "version": "2.5"
            }
        }
    }
    /*
    {
        "device": "Samsung",
        "userAgent": "??? What is the Samsung OS? It's not Tizen and I don't believe it's Bada.",
        "expectedReport": {
            "browser": {
                "name": "",
                "majorVersion": ""
            },
            "os": {
                "name": "Samsung",
                "version": ""
            }
        }
    },
    */
    /*
     * not enough traffic
     * only used by the S40 Ovi Browser
    {
        "device": "Series 40",
        "notes": "By Nokia, also known as S40",
        "userAgent": "",
        "expectedReport": {
            "browser": {
                "name": "",
                "majorVersion": ""
            },
            "os": {
                "name": "Series 40",
                "version": ""
            }
        }
    },
    {
        "device": "Nokia Unknown",
        "userAgent": "",
        "expectedReport": {
            "browser": {
                "name": "",
                "majorVersion": ""
            },
            "os": {
                "name": "Nokia Unknown",
                "version": ""
            }
        }
    },
    */
];
