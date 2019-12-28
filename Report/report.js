$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AdactinProject.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality for adactin application",
  "description": "",
  "id": "login-functionality-for-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Successful click login into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successful-click-login-into-the-adactin-application-with-valid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter \"\u003cusername\u003e\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enter \"\u003cpassword\u003e\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user verify the username in the homepage",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login-functionality-for-adactin-application;successful-click-login-into-the-adactin-application-with-valid-credential;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "login-functionality-for-adactin-application;successful-click-login-into-the-adactin-application-with-valid-credential;;1"
    },
    {
      "cells": [
        "Prabhuvenkat",
        "prabhu9619"
      ],
      "line": 16,
      "id": "login-functionality-for-adactin-application;successful-click-login-into-the-adactin-application-with-valid-credential;;2"
    },
    {
      "cells": [
        "Mahamilky",
        "hari.9500"
      ],
      "line": 17,
      "id": "login-functionality-for-adactin-application;successful-click-login-into-the-adactin-application-with-valid-credential;;3"
    },
    {
      "cells": [
        "anuamu04",
        "9003881833"
      ],
      "line": 18,
      "id": "login-functionality-for-adactin-application;successful-click-login-into-the-adactin-application-with-valid-credential;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 952900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is logged in the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "ALogin_StepDefinition.the_user_is_logged_in_the_application()"
});
formatter.result({
  "duration": 146962900,
  "status": "passed"
});
formatter.match({
  "location": "ALogin_StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 70200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Successful click login into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successful-click-login-into-the-adactin-application-with-valid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter \"Prabhuvenkat\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enter \"prabhu9619\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user verify the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "ALogin_StepDefinition.user_enter_application_url()"
});
formatter.result({
  "duration": 6411674500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prabhuvenkat",
      "offset": 12
    }
  ],
  "location": "ALogin_StepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 246606400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prabhu9619",
      "offset": 12
    }
  ],
  "location": "ALogin_StepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 156569400,
  "status": "passed"
});
formatter.match({
  "location": "ALogin_StepDefinition.user_verify_the_username_in_the_homepage()"
});
formatter.result({
  "duration": 7065334200,
  "status": "passed"
});
formatter.after({
  "duration": 174600,
  "status": "passed"
});
formatter.before({
  "duration": 81000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is logged in the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "ALogin_StepDefinition.the_user_is_logged_in_the_application()"
});
formatter.result({
  "duration": 78900,
  "status": "passed"
});
formatter.match({
  "location": "ALogin_StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 64100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Successful click login into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successful-click-login-into-the-adactin-application-with-valid-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter \"Mahamilky\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enter \"hari.9500\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user verify the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "ALogin_StepDefinition.user_enter_application_url()"
});
formatter.result({
  "duration": 591208500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mahamilky",
      "offset": 12
    }
  ],
  "location": "ALogin_StepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 192963100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hari.9500",
      "offset": 12
    }
  ],
  "location": "ALogin_StepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 157738400,
  "status": "passed"
});
formatter.match({
  "location": "ALogin_StepDefinition.user_verify_the_username_in_the_homepage()"
});
formatter.result({
  "duration": 1310864500,
  "status": "passed"
});
formatter.after({
  "duration": 83700,
  "status": "passed"
});
formatter.before({
  "duration": 75900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is logged in the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "ALogin_StepDefinition.the_user_is_logged_in_the_application()"
});
formatter.result({
  "duration": 77300,
  "status": "passed"
});
formatter.match({
  "location": "ALogin_StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 109700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Successful click login into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successful-click-login-into-the-adactin-application-with-valid-credential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter \"anuamu04\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enter \"9003881833\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user verify the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "ALogin_StepDefinition.user_enter_application_url()"
});
formatter.result({
  "duration": 495998200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anuamu04",
      "offset": 12
    }
  ],
  "location": "ALogin_StepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 281286400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9003881833",
      "offset": 12
    }
  ],
  "location": "ALogin_StepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 259879200,
  "status": "passed"
});
formatter.match({
  "location": "ALogin_StepDefinition.user_verify_the_username_in_the_homepage()"
});
formatter.result({
  "duration": 6214942900,
  "status": "passed"
});
formatter.after({
  "duration": 113500,
  "status": "passed"
});
formatter.before({
  "duration": 146800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is logged in the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "ALogin_StepDefinition.the_user_is_logged_in_the_application()"
});
formatter.result({
  "duration": 91100,
  "status": "passed"
});
formatter.match({
  "location": "ALogin_StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 67200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Successfull select SearchHotel into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-select-searchhotel-into-the-adactin-application-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@SearchHotel"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "user enter valid location",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user enter valid hotel",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user enter valid roomtype",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user enter valid norooms",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user enter valid checkin",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user enter valid checkout",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user enter valid adultroom",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user enter valid children",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user select valid selectbtn",
  "keyword": "Then "
});
formatter.match({
  "location": "BSearchHotel_StepDefinition.user_enter_valid_location()"
});
formatter.result({
  "duration": 333322700,
  "status": "passed"
});
formatter.match({
  "location": "BSearchHotel_StepDefinition.user_enter_valid_hotel()"
});
formatter.result({
  "duration": 201382800,
  "status": "passed"
});
formatter.match({
  "location": "BSearchHotel_StepDefinition.user_enter_valid_roomtype()"
});
formatter.result({
  "duration": 327517900,
  "status": "passed"
});
formatter.match({
  "location": "BSearchHotel_StepDefinition.user_enter_valid_norooms()"
});
formatter.result({
  "duration": 261166500,
  "status": "passed"
});
formatter.match({
  "location": "BSearchHotel_StepDefinition.user_enter_valid_checkin()"
});
formatter.result({
  "duration": 505455300,
  "status": "passed"
});
formatter.match({
  "location": "BSearchHotel_StepDefinition.user_enter_valid_checkout()"
});
formatter.result({
  "duration": 255320200,
  "status": "passed"
});
formatter.match({
  "location": "BSearchHotel_StepDefinition.user_enter_valid_adultroom()"
});
formatter.result({
  "duration": 190349000,
  "status": "passed"
});
formatter.match({
  "location": "BSearchHotel_StepDefinition.user_enter_valid_children()"
});
formatter.result({
  "duration": 251108700,
  "status": "passed"
});
formatter.match({
  "location": "BSearchHotel_StepDefinition.user_select_valid_selectbtn()"
});
formatter.result({
  "duration": 5148016000,
  "status": "passed"
});
formatter.after({
  "duration": 246900,
  "status": "passed"
});
formatter.before({
  "duration": 261500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is logged in the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "ALogin_StepDefinition.the_user_is_logged_in_the_application()"
});
formatter.result({
  "duration": 444500,
  "status": "passed"
});
formatter.match({
  "location": "ALogin_StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 205900,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Successfull select BookingPage into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-select-bookingpage-into-the-adactin-application-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@BookingPage"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "user select valid selectbn",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "user verify the click the selecthotelpage",
  "keyword": "Then "
});
formatter.match({
  "location": "CBookingPage_StepDefinition.user_select_valid_selectbn()"
});
formatter.result({
  "duration": 142093900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\"radiobutton_0\"]\"}\n  (Session info: chrome\u003d79.0.3945.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-FKL6C47\u0027, ip: \u0027192.168.173.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 78.0.3904.105 (60e2d8774a81..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54866}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 3446017bbe0dd0bc621ec92da5edc321\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\"radiobutton_0\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat com.adactin.baseclass.BaseClass.clickOnElement(BaseClass.java:80)\r\n\tat com.adactin.stepdefinition.CBookingPage_StepDefinition.user_select_valid_selectbn(CBookingPage_StepDefinition.java:21)\r\n\tat ✽.When user select valid selectbn(AdactinProject.feature:34)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CBookingPage_StepDefinition.user_verify_the_click_the_selecthotelpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1146212500,
  "status": "passed"
});
formatter.before({
  "duration": 71500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is logged in the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "ALogin_StepDefinition.the_user_is_logged_in_the_application()"
});
formatter.result({
  "duration": 250500,
  "status": "passed"
});
formatter.match({
  "location": "ALogin_StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 151200,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Successfull select ConfirmationPage into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-select-confirmationpage-into-the-adactin-application-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@ConfirmationPage"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "user enter valid firstname",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user enter valid Lastname",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user enter valid Address",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user enter valid Creditno",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user enter valid Cardtype",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user enter valid Selectmonth",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "user enter valid Selectyear",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user enter valid Ccvno",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user verify the booknow in the Paymentpage",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user click the logoutbtn",
  "keyword": "Then "
});
formatter.match({
  "location": "DConfirmationPage_StepDefinition.user_enter_valid_firstname()"
});
formatter.result({
  "duration": 33930500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027first_name\u0027]\"}\n  (Session info: chrome\u003d79.0.3945.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-FKL6C47\u0027, ip: \u0027192.168.173.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 78.0.3904.105 (60e2d8774a81..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54866}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 3446017bbe0dd0bc621ec92da5edc321\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027first_name\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\r\n\tat com.adactin.baseclass.BaseClass.inputOnElement(BaseClass.java:76)\r\n\tat com.adactin.stepdefinition.DConfirmationPage_StepDefinition.user_enter_valid_firstname(DConfirmationPage_StepDefinition.java:22)\r\n\tat ✽.When user enter valid firstname(AdactinProject.feature:39)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DConfirmationPage_StepDefinition.user_enter_valid_Lastname()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DConfirmationPage_StepDefinition.user_enter_valid_Address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DConfirmationPage_StepDefinition.user_enter_valid_Creditno()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DConfirmationPage_StepDefinition.user_enter_valid_Cardtype()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DConfirmationPage_StepDefinition.user_enter_valid_Selectmonth()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DConfirmationPage_StepDefinition.user_enter_valid_Selectyear()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DConfirmationPage_StepDefinition.user_enter_valid_Ccvno()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DConfirmationPage_StepDefinition.user_verify_the_booknow_in_the_Paymentpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DConfirmationPage_StepDefinition.user_click_the_logoutbtn()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 632863300,
  "status": "passed"
});
});