$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("scholastic/CreateAccount.feature");
formatter.feature({
  "line": 2,
  "name": "Create an Account",
  "description": "",
  "id": "create-an-account",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Verify that User can create a new teacher account in taxable state using Zip Code",
  "description": "",
  "id": "create-an-account;verify-that-user-can-create-a-new-teacher-account-in-taxable-state-using-zip-code",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User clicked on \u0027Create an Account\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User chose \u0027Teacher/Administrator/Homeschooler\u0027 option",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User entered \u003cUserTitle\u003e, \u003cFirstName\u003e, \u003cLastName\u003e, \u003cUserEmail\u003e, \u003cUserPassword\u003e on Cœreate Teacher Account screen",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User searched for school by \u0027\u003cUserZIP\u003e\u0027, \u0027\u003cSchoolName\u003e\u0027 on My School screen",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Selected Role: \u0027Teacher (by Grade)\u0027, Grade: \u00271st Grade\u0027, 1 student on My Role screen",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User chose \u0027Preferred Reading Level System\u0027 on Customize Your Experience screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User verified that Class Code is the same on Home-Page and MyAccount-Page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User verified that Teacher name is the same on MyAccount-Page and name used with registration form",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User verified that the address is the same on MyAccount-Page and address used with registration form",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "create-an-account;verify-that-user-can-create-a-new-teacher-account-in-taxable-state-using-zip-code;",
  "rows": [
    {
      "cells": [
        "UserTitle",
        "FirstName",
        "LastName",
        "UserEmail",
        "UserPassword",
        "UserZIP",
        "SchoolName"
      ],
      "line": 18,
      "id": "create-an-account;verify-that-user-can-create-a-new-teacher-account-in-taxable-state-using-zip-code;;1"
    },
    {
      "cells": [
        "Mr.",
        "Jacob",
        "Smith",
        "13JSmith@mail.ml",
        "JSmith123",
        "10012",
        "Scholastic+Book+Clubs"
      ],
      "line": 19,
      "id": "create-an-account;verify-that-user-can-create-a-new-teacher-account-in-taxable-state-using-zip-code;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5180863530,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify that User can create a new teacher account in taxable state using Zip Code",
  "description": "",
  "id": "create-an-account;verify-that-user-can-create-a-new-teacher-account-in-taxable-state-using-zip-code;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User clicked on \u0027Create an Account\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User chose \u0027Teacher/Administrator/Homeschooler\u0027 option",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User entered Mr., Jacob, Smith, 13JSmith@mail.ml, JSmith123 on Cœreate Teacher Account screen",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User searched for school by \u002710012\u0027, \u0027Scholastic+Book+Clubs\u0027 on My School screen",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Selected Role: \u0027Teacher (by Grade)\u0027, Grade: \u00271st Grade\u0027, 1 student on My Role screen",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User chose \u0027Preferred Reading Level System\u0027 on Customize Your Experience screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User verified that Class Code is the same on Home-Page and MyAccount-Page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User verified that Teacher name is the same on MyAccount-Page and name used with registration form",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User verified that the address is the same on MyAccount-Page and address used with registration form",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAccountSD.createAccount()"
});
formatter.result({
  "duration": 565292737,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSD.chooseTeacherOption()"
});
formatter.result({
  "duration": 1317423554,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "10012",
      "offset": 29
    },
    {
      "val": "Scholastic+Book+Clubs",
      "offset": 38
    }
  ],
  "location": "CreateAccountSD.userSearchesForSchoolOnMySchoolScreenByZIP(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Teacher (by Grade)",
      "offset": 21
    },
    {
      "val": "1st Grade",
      "offset": 50
    },
    {
      "val": "1",
      "offset": 62
    }
  ],
  "location": "CreateAccountSD.userSelectRoleGradeEnterNumStudentOnMyRoleScreen(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountSD.userChoosePreferredReadingLevelSystemOnCustomizeYourExperienceScreen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountSD.isClassCodeSame()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountSD.isNameSame()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountSD.isAddressSame()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 20,
      "value": "#      | Ms.       | Olive     | Miller   | OMiller@mail.ml | OMiller123   | 10003   | qw                    |"
    },
    {
      "line": 21,
      "value": "#      | Mrs.      | Silvia    | Brown    | SBrown@mail.ml  | SBrown123    | 99012   | qw                    |"
    },
    {
      "line": 22,
      "value": "#      | Other     | Matt      | Wilson   | MWilson@mail.ml | MWilson123   | 33123   | qwe                   |"
    }
  ],
  "line": 26,
  "name": "Verify that User can create a new teacher account in NON-taxable state using Zip Code",
  "description": "",
  "id": "create-an-account;verify-that-user-can-create-a-new-teacher-account-in-non-taxable-state-using-zip-code",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User clicked on \u0027Create an Account\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User chose \u0027Teacher/Administrator/Homeschooler\u0027 option",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User entered \u003cUserTitle\u003e, \u003cFirstName\u003e, \u003cLastName\u003e, \u003cUserEmail\u003e, \u003cUserPassword\u003e on Create Teacher Account screen",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User searched for school by \u0027\u003cUserZIP\u003e\u0027, \u0027\u003cSchoolName\u003e\u0027 on My School screen",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User Selected Role: \u0027Teacher (by Grade)\u0027, Grade: \u00271st Grade\u0027, 1 student on My Role screen",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User chose \u0027Preferred Reading Level System\u0027 on Customize Your Experience screen",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User verified that Class Code is the same on Home-Page and MyAccount-Page",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User verified that Teacher name is the same on MyAccount-Page and name used with registration form",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User verified that the address is the same on MyAccount-Page and address used with registration form",
  "keyword": "And "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "create-an-account;verify-that-user-can-create-a-new-teacher-account-in-non-taxable-state-using-zip-code;",
  "rows": [
    {
      "cells": [
        "UserTitle",
        "FirstName",
        "LastName",
        "UserEmail",
        "UserPassword",
        "UserZIP",
        "SchoolName"
      ],
      "line": 39,
      "id": "create-an-account;verify-that-user-can-create-a-new-teacher-account-in-non-taxable-state-using-zip-code;;1"
    },
    {
      "cells": [
        "Ms.",
        "Olive",
        "Miller",
        "2OMiller@mail.ml",
        "OMiller123",
        "99518",
        "Adak School"
      ],
      "line": 40,
      "id": "create-an-account;verify-that-user-can-create-a-new-teacher-account-in-non-taxable-state-using-zip-code;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4277485684,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Verify that User can create a new teacher account in NON-taxable state using Zip Code",
  "description": "",
  "id": "create-an-account;verify-that-user-can-create-a-new-teacher-account-in-non-taxable-state-using-zip-code;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@Smoke"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User clicked on \u0027Create an Account\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User chose \u0027Teacher/Administrator/Homeschooler\u0027 option",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User entered Ms., Olive, Miller, 2OMiller@mail.ml, OMiller123 on Create Teacher Account screen",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User searched for school by \u002799518\u0027, \u0027Adak School\u0027 on My School screen",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User Selected Role: \u0027Teacher (by Grade)\u0027, Grade: \u00271st Grade\u0027, 1 student on My Role screen",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User chose \u0027Preferred Reading Level System\u0027 on Customize Your Experience screen",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User verified that Class Code is the same on Home-Page and MyAccount-Page",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User verified that Teacher name is the same on MyAccount-Page and name used with registration form",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User verified that the address is the same on MyAccount-Page and address used with registration form",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAccountSD.createAccount()"
});
formatter.result({
  "duration": 146450957,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSD.chooseTeacherOption()"
});
formatter.result({
  "duration": 1558098436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ms.",
      "offset": 13
    },
    {
      "val": "Olive",
      "offset": 18
    },
    {
      "val": "Miller",
      "offset": 25
    },
    {
      "val": "2OMiller@mail.ml",
      "offset": 33
    },
    {
      "val": "OMiller123",
      "offset": 51
    }
  ],
  "location": "CreateAccountSD.userEntersTitleNameEmailPasswordOnCreateTeacherAccountScreen(String,String,String,String,String)"
});
formatter.result({
  "duration": 2359507049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99518",
      "offset": 29
    },
    {
      "val": "Adak School",
      "offset": 38
    }
  ],
  "location": "CreateAccountSD.userSearchesForSchoolOnMySchoolScreenByZIP(String,String)"
});
formatter.result({
  "duration": 5226254454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teacher (by Grade)",
      "offset": 21
    },
    {
      "val": "1st Grade",
      "offset": 50
    },
    {
      "val": "1",
      "offset": 62
    }
  ],
  "location": "CreateAccountSD.userSelectRoleGradeEnterNumStudentOnMyRoleScreen(String,String,String)"
});
formatter.result({
  "duration": 2197049331,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSD.userChoosePreferredReadingLevelSystemOnCustomizeYourExperienceScreen()"
});
formatter.result({
  "duration": 11506127504,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSD.isClassCodeSame()"
});
formatter.result({
  "duration": 2759677186,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSD.isNameSame()"
});
formatter.result({
  "duration": 26800705,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSD.isAddressSame()"
});
formatter.result({
  "duration": 93576846,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 41,
      "value": "#      | Mr.       | Jacob     | Smith    | 12fmith@mail.ml | JSmith123    | 10012   | Scholastic+Book+Clubs |"
    },
    {
      "line": 42,
      "value": "#      | Mrs.      | Silvia    | Brown    | SBrown@mail.ml  | SBrown123    | 99012   | qw                    |"
    },
    {
      "line": 43,
      "value": "#      | Other     | Matt      | Wilson   | MWilson@mail.ml | MWilson123   | 33123   | qwe                   |"
    }
  ],
  "line": 47,
  "name": "Verify that User can create a new teacher account in taxable state using School Search",
  "description": "",
  "id": "create-an-account;verify-that-user-can-create-a-new-teacher-account-in-taxable-state-using-school-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User clicked on \u0027Create an Account\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "User chose \u0027Teacher/Administrator/Homeschooler\u0027 option",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User entered \u003cUserTitle\u003e, \u003cFirstName\u003e, \u003cLastName\u003e, \u003cUserEmail\u003e, \u003cUserPassword\u003e on Create Teacher Account screen",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User searched for school by \u0027\u003cState\u003e\u0027, \u0027\u003cCity\u003e\u0027 and \u003cSchoolName\u003e on My School screen",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User Selected Role: \u0027Teacher (by Grade)\u0027, Grade: \u00271st Grade\u0027, 1 student on My Role screen",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User chose \u0027Preferred Reading Level System\u0027 on Customize Your Experience screen",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User verified that Class Code is the same on Home-Page and MyAccount-Page",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "User verified that Teacher name is the same on MyAccount-Page and name used with registration form",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User verified that the address is the same on MyAccount-Page and address used with registration form",
  "keyword": "And "
});
formatter.examples({
  "line": 59,
  "name": "",
  "description": "",
  "id": "create-an-account;verify-that-user-can-create-a-new-teacher-account-in-taxable-state-using-school-search;",
  "rows": [
    {
      "cells": [
        "UserTitle",
        "FirstName",
        "LastName",
        "UserEmail",
        "UserPassword",
        "State",
        "City",
        "SchoolName"
      ],
      "line": 60,
      "id": "create-an-account;verify-that-user-can-create-a-new-teacher-account-in-taxable-state-using-school-search;;1"
    },
    {
      "cells": [
        "Mrs.",
        "Silvia",
        "Brown",
        "1SBrown@mail.ml",
        "SBrown123",
        "New York",
        "New York",
        "Scholastic+Book+Clubs"
      ],
      "line": 61,
      "id": "create-an-account;verify-that-user-can-create-a-new-teacher-account-in-taxable-state-using-school-search;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4699755763,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Verify that User can create a new teacher account in taxable state using School Search",
  "description": "",
  "id": "create-an-account;verify-that-user-can-create-a-new-teacher-account-in-taxable-state-using-school-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@Smoke"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User clicked on \u0027Create an Account\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "User chose \u0027Teacher/Administrator/Homeschooler\u0027 option",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User entered Mrs., Silvia, Brown, 1SBrown@mail.ml, SBrown123 on Create Teacher Account screen",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User searched for school by \u0027New York\u0027, \u0027New York\u0027 and Scholastic+Book+Clubs on My School screen",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User Selected Role: \u0027Teacher (by Grade)\u0027, Grade: \u00271st Grade\u0027, 1 student on My Role screen",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User chose \u0027Preferred Reading Level System\u0027 on Customize Your Experience screen",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User verified that Class Code is the same on Home-Page and MyAccount-Page",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "User verified that Teacher name is the same on MyAccount-Page and name used with registration form",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User verified that the address is the same on MyAccount-Page and address used with registration form",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAccountSD.createAccount()"
});
formatter.result({
  "duration": 140852650,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSD.chooseTeacherOption()"
});
formatter.result({
  "duration": 1581020637,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrs.",
      "offset": 13
    },
    {
      "val": "Silvia",
      "offset": 19
    },
    {
      "val": "Brown",
      "offset": 27
    },
    {
      "val": "1SBrown@mail.ml",
      "offset": 34
    },
    {
      "val": "SBrown123",
      "offset": 51
    }
  ],
  "location": "CreateAccountSD.userEntersTitleNameEmailPasswordOnCreateTeacherAccountScreen(String,String,String,String,String)"
});
formatter.result({
  "duration": 2288289694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New York",
      "offset": 29
    },
    {
      "val": "New York",
      "offset": 41
    },
    {
      "val": "Scholastic+Book+Clubs",
      "offset": 55
    }
  ],
  "location": "CreateAccountSD.userSearchesForSchoolOnMySchoolScreenByState(String,String,String)"
});
formatter.result({
  "duration": 14240406228,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.id: button-search (tried for 10 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u00270x0001F60E.local\u0027, ip: \u0027fe80:0:0:0:1c44:204e:1b8f:d5a8%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: /var/folders/y9/6hvhdv613g7...}, goog:chromeOptions: {debuggerAddress: localhost:54213}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 921abc168e66e74138b30bcfc9c23a97\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat Pages.BasePage.waitForElement(BasePage.java:124)\n\tat Pages.BasePage.clickThis(BasePage.java:65)\n\tat Pages.Scholastic.HomePage.clickSearchSchool(HomePage.java:105)\n\tat StepDefinition.Scholastic.CreateAccountSD.userSearchesForSchoolOnMySchoolScreenByState(CreateAccountSD.java:53)\n\tat ✽.And User searched for school by \u0027New York\u0027, \u0027New York\u0027 and Scholastic+Book+Clubs on My School screen(scholastic/CreateAccount.feature:51)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teacher (by Grade)",
      "offset": 21
    },
    {
      "val": "1st Grade",
      "offset": 50
    },
    {
      "val": "1",
      "offset": 62
    }
  ],
  "location": "CreateAccountSD.userSelectRoleGradeEnterNumStudentOnMyRoleScreen(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountSD.userChoosePreferredReadingLevelSystemOnCustomizeYourExperienceScreen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountSD.isClassCodeSame()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountSD.isNameSame()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountSD.isAddressSame()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("scholastic/EnterOrder.feature");
formatter.feature({
  "line": 2,
  "name": "Add Student Flyer Order",
  "description": "",
  "id": "add-student-flyer-order",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Verify teacher gets error for invalid item number in SFO (Student Flyer Order)",
  "description": "",
  "id": "add-student-flyer-order;verify-teacher-gets-error-for-invalid-item-number-in-sfo-(student-flyer-order)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User logged in with valid \u003cLogin\u003e and \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User navigated to Student Flyer Orders",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter \u003cstudentName\u003e and \u003citemNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User verified that teacher gets error for invalid item number in SFO (Student Flyer Order)",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "add-student-flyer-order;verify-teacher-gets-error-for-invalid-item-number-in-sfo-(student-flyer-order);",
  "rows": [
    {
      "cells": [
        "Login",
        "Password",
        "studentName",
        "itemNumber"
      ],
      "line": 12,
      "id": "add-student-flyer-order;verify-teacher-gets-error-for-invalid-item-number-in-sfo-(student-flyer-order);;1"
    },
    {
      "cells": [
        "OMiller@mail.ml",
        "OMiller123",
        "Harry",
        "111"
      ],
      "line": 13,
      "id": "add-student-flyer-order;verify-teacher-gets-error-for-invalid-item-number-in-sfo-(student-flyer-order);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5451339627,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify teacher gets error for invalid item number in SFO (Student Flyer Order)",
  "description": "",
  "id": "add-student-flyer-order;verify-teacher-gets-error-for-invalid-item-number-in-sfo-(student-flyer-order);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User logged in with valid OMiller@mail.ml and OMiller123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User navigated to Student Flyer Orders",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter Harry and 111",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User verified that teacher gets error for invalid item number in SFO (Student Flyer Order)",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "OMiller@mail.ml",
      "offset": 26
    },
    {
      "val": "OMiller123",
      "offset": 46
    }
  ],
  "location": "RecommendationsSD.userLoggedInWithValidLoginAndPassword(String,String)"
});
formatter.result({
  "duration": 11291640292,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.id: loginModalBtn (tried for 10 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u00270x0001F60E.local\u0027, ip: \u0027fe80:0:0:0:1c44:204e:1b8f:d5a8%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: /var/folders/y9/6hvhdv613g7...}, goog:chromeOptions: {debuggerAddress: localhost:54261}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: aa5a9e425cd8113ad91b5e94fc6bedfe\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat Pages.BasePage.waitForElement(BasePage.java:124)\n\tat Pages.BasePage.clickThis(BasePage.java:65)\n\tat Pages.Scholastic.HomePage.loggIn(HomePage.java:191)\n\tat StepDefinition.Scholastic.RecommendationsSD.userLoggedInWithValidLoginAndPassword(RecommendationsSD.java:21)\n\tat ✽.When User logged in with valid OMiller@mail.ml and OMiller123(scholastic/EnterOrder.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "location": "EnterOrderSD.userNavigatedToStudentFlyerOrders()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 11
    },
    {
      "val": "111",
      "offset": 21
    }
  ],
  "location": "EnterOrderSD.userEnterStudentNameAndItemNumber(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EnterOrderSD.userVerifiedThatTeacherGetsErrorForInvalidItemNumberInSFOStudentFlyerOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 14,
      "value": "#      | JSmith@mail.ml  | JSmith123  |"
    },
    {
      "line": 15,
      "value": "#      | OMiller@mail.ml | OMiller123 |"
    },
    {
      "line": 17,
      "value": "#  URL: https://clubs3qa1.scholastic.com/"
    },
    {
      "line": 18,
      "value": "#  Login"
    },
    {
      "line": 19,
      "value": "#  Go to ENTER ORDERSS"
    },
    {
      "line": 20,
      "value": "#  elect YOUR TEACHER ORDER"
    },
    {
      "line": 21,
      "value": "#  Go to BY FLYER tab"
    },
    {
      "line": 22,
      "value": "#  Click on Price-QTY box"
    },
    {
      "line": 23,
      "value": "#"
    },
    {
      "line": 24,
      "value": "#  VERIFICATION"
    },
    {
      "line": 25,
      "value": "#  Teacher sees a jumper right above the box with message:"
    },
    {
      "line": 26,
      "value": "#  Heading - IMPORTANTMessage - All student paper flyer orders MUST be entered in the Student Flyer Orders tab."
    },
    {
      "line": 27,
      "value": "#  Enter data in the clicked Price-QTY boxClick on X on the jumper.Click on another Price-QTY box"
    },
    {
      "line": 28,
      "value": "#"
    },
    {
      "line": 29,
      "value": "#  VERIFICATION"
    },
    {
      "line": 30,
      "value": "#  Teacher does NOT see any jumper."
    }
  ],
  "line": 33,
  "name": "Verify YOUR TEACHER ORDER-By Flyer jumper",
  "description": "",
  "id": "add-student-flyer-order;verify-your-teacher-order-by-flyer-jumper",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User logged in with valid \u003cLogin\u003e and \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User navigated to Your Teacher Orders",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User clicked on Price-QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User verified that a jumper right above the box with message: All student paper flyer orders MUST be entered in the Student Flyer Orders tab. are visible",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "add-student-flyer-order;verify-your-teacher-order-by-flyer-jumper;",
  "rows": [
    {
      "cells": [
        "Login",
        "Password"
      ],
      "line": 40,
      "id": "add-student-flyer-order;verify-your-teacher-order-by-flyer-jumper;;1"
    },
    {
      "cells": [
        "OMiller@mail.ml",
        "OMiller123"
      ],
      "line": 41,
      "id": "add-student-flyer-order;verify-your-teacher-order-by-flyer-jumper;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5298555219,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Verify YOUR TEACHER ORDER-By Flyer jumper",
  "description": "",
  "id": "add-student-flyer-order;verify-your-teacher-order-by-flyer-jumper;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@Smoke"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User logged in with valid OMiller@mail.ml and OMiller123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User navigated to Your Teacher Orders",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User clicked on Price-QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User verified that a jumper right above the box with message: All student paper flyer orders MUST be entered in the Student Flyer Orders tab. are visible",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "OMiller@mail.ml",
      "offset": 26
    },
    {
      "val": "OMiller123",
      "offset": 46
    }
  ],
  "location": "RecommendationsSD.userLoggedInWithValidLoginAndPassword(String,String)"
});
formatter.result({
  "duration": 8180518098,
  "status": "passed"
});
formatter.match({
  "location": "EnterOrderSD.userNavigatedToYourTeacherOrders()"
});
formatter.result({
  "duration": 2593363867,
  "status": "passed"
});
formatter.match({
  "location": "EnterOrderSD.userClickedOnPriceQTYBox()"
});
formatter.result({
  "duration": 174169143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All student paper flyer orders MUST be entered in the Student Flyer Orders tab.",
      "offset": 62
    }
  ],
  "location": "EnterOrderSD.verifyThatAJumperRightAboveTheBox(String)"
});
formatter.result({
  "duration": 2469708120,
  "status": "passed"
});
formatter.uri("scholastic/MyAccount.feature");
formatter.feature({
  "line": 2,
  "name": "Add Credit Card",
  "description": "",
  "id": "add-credit-card",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Verify teacher can add only 3 credit cards under My Credit Cards in My Accounts",
  "description": "",
  "id": "add-credit-card;verify-teacher-can-add-only-3-credit-cards-under-my-credit-cards-in-my-accounts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User logged in with valid \u003cLogin\u003e and \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User navigated to My Account page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User added CreditCard to payment method",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User verified when user try to add 4th credit card, get error msgYou can only store three credit cards",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "add-credit-card;verify-teacher-can-add-only-3-credit-cards-under-my-credit-cards-in-my-accounts;",
  "rows": [
    {
      "cells": [
        "Login",
        "Password"
      ],
      "line": 12,
      "id": "add-credit-card;verify-teacher-can-add-only-3-credit-cards-under-my-credit-cards-in-my-accounts;;1"
    },
    {
      "cells": [
        "OMiller@mail.ml",
        "OMiller123"
      ],
      "line": 13,
      "id": "add-credit-card;verify-teacher-can-add-only-3-credit-cards-under-my-credit-cards-in-my-accounts;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7331486933,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify teacher can add only 3 credit cards under My Credit Cards in My Accounts",
  "description": "",
  "id": "add-credit-card;verify-teacher-can-add-only-3-credit-cards-under-my-credit-cards-in-my-accounts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User logged in with valid OMiller@mail.ml and OMiller123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User navigated to My Account page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User added CreditCard to payment method",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User verified when user try to add 4th credit card, get error msgYou can only store three credit cards",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "OMiller@mail.ml",
      "offset": 26
    },
    {
      "val": "OMiller123",
      "offset": 46
    }
  ],
  "location": "RecommendationsSD.userLoggedInWithValidLoginAndPassword(String,String)"
});
formatter.result({
  "duration": 8274416628,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSD.userNavigatedToMyAccountPage()"
});
formatter.result({
  "duration": 2852836076,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSD.userAddedCreditCardToPaymentMethod()"
});
formatter.result({
  "duration": 104540060,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSD.verifyWhenUserTryToAddThCreditCardGetErrorMsg()"
});
formatter.result({
  "duration": 171822505,
  "status": "passed"
});
formatter.uri("scholastic/Recommendations.feature");
formatter.feature({
  "line": 2,
  "name": "Recommendations for Students",
  "description": "",
  "id": "recommendations-for-students",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Verify that Teacher can add books in Recommendations List from Quick View",
  "description": "",
  "id": "recommendations-for-students;verify-that-teacher-can-add-books-in-recommendations-list-from-quick-view",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User logged in with valid \u003cLogin\u003e and \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User searched for \u0027\u003cItem\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User added Book to ‘Recommendations to Students’ from \u0027Quick Look\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User verified that the item is added in Recommendations to Students Lists under My Lists",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "recommendations-for-students;verify-that-teacher-can-add-books-in-recommendations-list-from-quick-view;",
  "rows": [
    {
      "cells": [
        "Login",
        "Password",
        "Item"
      ],
      "line": 12,
      "id": "recommendations-for-students;verify-that-teacher-can-add-books-in-recommendations-list-from-quick-view;;1"
    },
    {
      "cells": [
        "OMiller@mail.ml",
        "OMiller123",
        "Harry"
      ],
      "line": 13,
      "id": "recommendations-for-students;verify-that-teacher-can-add-books-in-recommendations-list-from-quick-view;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5025623998,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify that Teacher can add books in Recommendations List from Quick View",
  "description": "",
  "id": "recommendations-for-students;verify-that-teacher-can-add-books-in-recommendations-list-from-quick-view;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User logged in with valid OMiller@mail.ml and OMiller123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User searched for \u0027Harry\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User added Book to ‘Recommendations to Students’ from \u0027Quick Look\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User verified that the item is added in Recommendations to Students Lists under My Lists",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "OMiller@mail.ml",
      "offset": 26
    },
    {
      "val": "OMiller123",
      "offset": 46
    }
  ],
  "location": "RecommendationsSD.userLoggedInWithValidLoginAndPassword(String,String)"
});
formatter.result({
  "duration": 8431587940,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 19
    }
  ],
  "location": "RecommendationsSD.userSearchedForBookName(String)"
});
formatter.result({
  "duration": 2884099723,
  "status": "passed"
});
formatter.match({
  "location": "RecommendationsSD.userAddedBookToRecommendationsToStudentsFromQuickLook()"
});
formatter.result({
  "duration": 6383846811,
  "status": "passed"
});
formatter.match({
  "location": "RecommendationsSD.verifyThatTheItemIsAddedInRecommendationsToStudentsListsUnderMyLists()"
});
formatter.result({
  "duration": 51560189,
  "status": "passed"
});
});