var expectedResults = [
  {
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
