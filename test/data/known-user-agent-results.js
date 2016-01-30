var expectedResults = [
  {
    "device": "UC Browser — Android — Speed Mode On",
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
    "device": "UC Browser — Android — Speed Mode Off",
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
    "device": "Samsung Galaxy S4",
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
    "device": "Samsung Galaxy S III",
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
    "device": "Samsung Galaxy Note 3",
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
    "device": "Samsung Galaxy Note II",
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
    "device": "Nokia Lumia 520",
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
    "device": "Nokia Lumia 625",
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
    "device": "LG Optimus L70",
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
    "device": "Google Nexus 10",
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
    "device": "Google Nexus 4",
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
    "device": "Google Nexus 6",
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
    "device": "Google Nexus 5",
    "userAgent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.76 Mobile Safari/537.36",
    "expectedReport": {
      "browser": {
        "name": "Chrome for Android",
        "version": "46.0.2490.76"
      },
      "os": {
        "name": "Android",
        "version": "6.0"
      }
    }
  },
  {
    "device": "Firefox — Android",
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
    "device": "Firefox — iOS",
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
    "device": "Firefox — Windows",
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:40.0) Gecko/20100101 Firefox/40.0",
    "expectedReport": {
      "browser": {
        "name": "Firefox",
        "version": "40.0"
      },
      "os": {
        "name": "Windows",
        "version": "10.0"
      }
    }
  },
  {
    "device": "Firefox — Mac",
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:40.0) Gecko/20100101 Firefox/40.0",
    "expectedReport": {
      "browser": {
        "name": "Firefox",
        "version": "40.0"
      },
      "os": {
        "name": "OS X",
        "version": "10.11"
      }
    }
  },
  {
    "device": "Chrome — Windows",
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36",
    "expectedReport": {
      "browser": {
        "name": "Chrome",
        "version": "44.0.2403.157"
      },
      "os": {
        "name": "Windows",
        "version": "10.0"
      }
    }
  },
  {
    "device": "Chrome — Mac",
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36",
    "expectedReport": {
      "browser": {
        "name": "Chrome",
        "version": "44.0.2403.157"
      },
      "os": {
        "name": "OS X",
        "version": "10.11.0"
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
  }
];
