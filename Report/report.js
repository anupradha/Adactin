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
  "duration": 736300,
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
  "duration": 156206200,
  "status": "passed"
});
formatter.match({
  "location": "ALogin_StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 408300,
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
  "duration": 5658055500,
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
  "duration": 231087200,
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
  "duration": 132306700,
  "status": "passed"
});
formatter.match({
  "location": "ALogin_StepDefinition.user_verify_the_username_in_the_homepage()"
});
formatter.result({
  "duration": 1494399800,
  "status": "passed"
});
formatter.after({
  "duration": 211600,
  "status": "passed"
});
formatter.before({
  "duration": 73100,
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
  "duration": 115700,
  "status": "passed"
});
formatter.match({
  "location": "ALogin_StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 56900,
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
  "duration": 524106000,
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
  "duration": 137570800,
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
  "duration": 110944900,
  "status": "passed"
});
formatter.match({
  "location": "ALogin_StepDefinition.user_verify_the_username_in_the_homepage()"
});
formatter.result({
  "duration": 1065314000,
  "status": "passed"
});
formatter.after({
  "duration": 97100,
  "status": "passed"
});
formatter.before({
  "duration": 87100,
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
  "duration": 72200,
  "status": "passed"
});
formatter.match({
  "location": "ALogin_StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 91200,
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
  "duration": 614896600,
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
  "duration": 131535200,
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
  "duration": 138363500,
  "status": "passed"
});
formatter.match({
  "location": "ALogin_StepDefinition.user_verify_the_username_in_the_homepage()"
});
formatter.result({
  "duration": 1168840900,
  "status": "passed"
});
formatter.after({
  "duration": 98600,
  "status": "passed"
});
formatter.before({
  "duration": 107700,
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
  "duration": 211800,
  "status": "passed"
});
formatter.match({
  "location": "ALogin_StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 69400,
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
  "duration": 296820400,
  "status": "passed"
});
formatter.match({
  "location": "BSearchHotel_StepDefinition.user_enter_valid_hotel()"
});
formatter.result({
  "duration": 156493700,
  "status": "passed"
});
formatter.match({
  "location": "BSearchHotel_StepDefinition.user_enter_valid_roomtype()"
});
formatter.result({
  "duration": 144578300,
  "status": "passed"
});
formatter.match({
  "location": "BSearchHotel_StepDefinition.user_enter_valid_norooms()"
});
formatter.result({
  "duration": 165922500,
  "status": "passed"
});
formatter.match({
  "location": "BSearchHotel_StepDefinition.user_enter_valid_checkin()"
});
formatter.result({
  "duration": 213011800,
  "status": "passed"
});
formatter.match({
  "location": "BSearchHotel_StepDefinition.user_enter_valid_checkout()"
});
formatter.result({
  "duration": 185547000,
  "status": "passed"
});
formatter.match({
  "location": "BSearchHotel_StepDefinition.user_enter_valid_adultroom()"
});
formatter.result({
  "duration": 164495300,
  "status": "passed"
});
formatter.match({
  "location": "BSearchHotel_StepDefinition.user_enter_valid_children()"
});
formatter.result({
  "duration": 227403800,
  "status": "passed"
});
formatter.match({
  "location": "BSearchHotel_StepDefinition.user_select_valid_selectbtn()"
});
formatter.result({
  "duration": 1773796300,
  "status": "passed"
});
formatter.after({
  "duration": 76400,
  "status": "passed"
});
formatter.before({
  "duration": 71000,
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
  "duration": 558000,
  "status": "passed"
});
formatter.match({
  "location": "ALogin_StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 61400,
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
  "duration": 98231400,
  "status": "passed"
});
formatter.match({
  "location": "CBookingPage_StepDefinition.user_verify_the_click_the_selecthotelpage()"
});
formatter.result({
  "duration": 1498976100,
  "status": "passed"
});
formatter.after({
  "duration": 67400,
  "status": "passed"
});
formatter.before({
  "duration": 66400,
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
  "duration": 64700,
  "status": "passed"
});
formatter.match({
  "location": "ALogin_StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 69000,
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
  "duration": 119204300,
  "status": "passed"
});
formatter.match({
  "location": "DConfirmationPage_StepDefinition.user_enter_valid_Lastname()"
});
formatter.result({
  "duration": 101180200,
  "status": "passed"
});
formatter.match({
  "location": "DConfirmationPage_StepDefinition.user_enter_valid_Address()"
});
formatter.result({
  "duration": 152056100,
  "status": "passed"
});
formatter.match({
  "location": "DConfirmationPage_StepDefinition.user_enter_valid_Creditno()"
});
formatter.result({
  "duration": 214724600,
  "status": "passed"
});
formatter.match({
  "location": "DConfirmationPage_StepDefinition.user_enter_valid_Cardtype()"
});
formatter.result({
  "duration": 168662900,
  "status": "passed"
});
formatter.match({
  "location": "DConfirmationPage_StepDefinition.user_enter_valid_Selectmonth()"
});
formatter.result({
  "duration": 169815900,
  "status": "passed"
});
formatter.match({
  "location": "DConfirmationPage_StepDefinition.user_enter_valid_Selectyear()"
});
formatter.result({
  "duration": 162065200,
  "status": "passed"
});
formatter.match({
  "location": "DConfirmationPage_StepDefinition.user_enter_valid_Ccvno()"
});
formatter.result({
  "duration": 97510300,
  "status": "passed"
});
formatter.match({
  "location": "DConfirmationPage_StepDefinition.user_verify_the_booknow_in_the_Paymentpage()"
});
formatter.result({
  "duration": 8100922500,
  "status": "passed"
});
formatter.match({
  "location": "DConfirmationPage_StepDefinition.user_click_the_logoutbtn()"
});
formatter.result({
  "duration": 952010700,
  "status": "passed"
});
formatter.after({
  "duration": 75200,
  "status": "passed"
});
});