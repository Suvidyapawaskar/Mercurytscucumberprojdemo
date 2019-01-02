$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login26.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Suvidya Pawaskar"
    },
    {
      "line": 2,
      "value": "#Feature: Login"
    },
    {
      "line": 3,
      "value": "#Date:9-1-2018"
    }
  ],
  "line": 6,
  "name": "Login feature",
  "description": "Verify the login feature of Mercury tours application",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 5,
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Verify that valid user able to login into Mercury tours application by using valid username and password",
  "description": "",
  "id": "login-feature;verify-that-valid-user-able-to-login-into-mercury-tours-application-by-using-valid-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user is Login page of Mercury tours application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user enters \"\u003cusername\u003e\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters \"\u003cpassword\u003e\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user is on Flight Finder page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user clicks on Sign OFF button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user is Sign on page",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "login-feature;verify-that-valid-user-able-to-login-into-mercury-tours-application-by-using-valid-username-and-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 27,
      "id": "login-feature;verify-that-valid-user-able-to-login-into-mercury-tours-application-by-using-valid-username-and-password;;1"
    },
    {
      "cells": [
        "Suvidyap1",
        "P@ssword1"
      ],
      "line": 28,
      "id": "login-feature;verify-that-valid-user-able-to-login-into-mercury-tours-application-by-using-valid-username-and-password;;2"
    },
    {
      "cells": [
        "Suvidyap2",
        "P@ssword2"
      ],
      "line": 29,
      "id": "login-feature;verify-that-valid-user-able-to-login-into-mercury-tours-application-by-using-valid-username-and-password;;3"
    },
    {
      "cells": [
        "Suvidyap3",
        "P@ssword3"
      ],
      "line": 30,
      "id": "login-feature;verify-that-valid-user-able-to-login-into-mercury-tours-application-by-using-valid-username-and-password;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 9,
  "name": "User accesses login page of Mercury tours application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 10,
  "name": "user opens \"chrome\" browser",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters application url \"http://newtours.demoaut.com/mercurywelcome.php\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user waits \"5\" seconds to page load",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user maximizes login page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 12
    }
  ],
  "location": "Loginsteps.Open_browser(String)"
});
formatter.result({
  "duration": 12197284699,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot find Chrome binary\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 786 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-IUV45J7\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_77\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$new$0(JsonWireProtocolResponse.java:53)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$getResponseFunction$2(JsonWireProtocolResponse.java:91)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:122)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:125)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:212)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:130)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.mt.steps.Loginsteps.Open_browser(Loginsteps.java:26)\r\n\tat ✽.When user opens \"chrome\" browser(Login26.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://newtours.demoaut.com/mercurywelcome.php",
      "offset": 29
    }
  ],
  "location": "Loginsteps.EnterApplicationurl(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "Loginsteps.PageLoad(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginsteps.Maximize_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "Verify that valid user able to login into Mercury tours application by using valid username and password",
  "description": "",
  "id": "login-feature;verify-that-valid-user-able-to-login-into-mercury-tours-application-by-using-valid-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Login"
    },
    {
      "line": 16,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user is Login page of Mercury tours application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user enters \"Suvidyap1\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters \"P@ssword1\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user is on Flight Finder page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user clicks on Sign OFF button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user is Sign on page",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginsteps.verify_Loginpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Suvidyap1",
      "offset": 13
    }
  ],
  "location": "Loginsteps.EnterUsername(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "P@ssword1",
      "offset": 13
    }
  ],
  "location": "Loginsteps.EnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginsteps.ClickonSignIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginsteps.VerifyFlightfinderpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginsteps.ClickonSignOFF()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginsteps.VerifySignonpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 9,
  "name": "User accesses login page of Mercury tours application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 10,
  "name": "user opens \"chrome\" browser",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters application url \"http://newtours.demoaut.com/mercurywelcome.php\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user waits \"5\" seconds to page load",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user maximizes login page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 12
    }
  ],
  "location": "Loginsteps.Open_browser(String)"
});
formatter.result({
  "duration": 1890036715,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot find Chrome binary\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 58 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-IUV45J7\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_77\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$new$0(JsonWireProtocolResponse.java:53)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$getResponseFunction$2(JsonWireProtocolResponse.java:91)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:122)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:125)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:212)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:130)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.mt.steps.Loginsteps.Open_browser(Loginsteps.java:26)\r\n\tat ✽.When user opens \"chrome\" browser(Login26.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://newtours.demoaut.com/mercurywelcome.php",
      "offset": 29
    }
  ],
  "location": "Loginsteps.EnterApplicationurl(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "Loginsteps.PageLoad(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginsteps.Maximize_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 29,
  "name": "Verify that valid user able to login into Mercury tours application by using valid username and password",
  "description": "",
  "id": "login-feature;verify-that-valid-user-able-to-login-into-mercury-tours-application-by-using-valid-username-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Login"
    },
    {
      "line": 16,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user is Login page of Mercury tours application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user enters \"Suvidyap2\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters \"P@ssword2\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user is on Flight Finder page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user clicks on Sign OFF button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user is Sign on page",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginsteps.verify_Loginpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Suvidyap2",
      "offset": 13
    }
  ],
  "location": "Loginsteps.EnterUsername(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "P@ssword2",
      "offset": 13
    }
  ],
  "location": "Loginsteps.EnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginsteps.ClickonSignIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginsteps.VerifyFlightfinderpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginsteps.ClickonSignOFF()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginsteps.VerifySignonpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 9,
  "name": "User accesses login page of Mercury tours application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 10,
  "name": "user opens \"chrome\" browser",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters application url \"http://newtours.demoaut.com/mercurywelcome.php\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user waits \"5\" seconds to page load",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user maximizes login page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 12
    }
  ],
  "location": "Loginsteps.Open_browser(String)"
});
formatter.result({
  "duration": 3156162653,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot find Chrome binary\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 138 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-IUV45J7\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_77\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$new$0(JsonWireProtocolResponse.java:53)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$getResponseFunction$2(JsonWireProtocolResponse.java:91)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:122)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:125)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:212)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:130)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.mt.steps.Loginsteps.Open_browser(Loginsteps.java:26)\r\n\tat ✽.When user opens \"chrome\" browser(Login26.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://newtours.demoaut.com/mercurywelcome.php",
      "offset": 29
    }
  ],
  "location": "Loginsteps.EnterApplicationurl(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "Loginsteps.PageLoad(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginsteps.Maximize_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 30,
  "name": "Verify that valid user able to login into Mercury tours application by using valid username and password",
  "description": "",
  "id": "login-feature;verify-that-valid-user-able-to-login-into-mercury-tours-application-by-using-valid-username-and-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Login"
    },
    {
      "line": 16,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user is Login page of Mercury tours application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user enters \"Suvidyap3\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters \"P@ssword3\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user is on Flight Finder page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user clicks on Sign OFF button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user is Sign on page",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginsteps.verify_Loginpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Suvidyap3",
      "offset": 13
    }
  ],
  "location": "Loginsteps.EnterUsername(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "P@ssword3",
      "offset": 13
    }
  ],
  "location": "Loginsteps.EnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginsteps.ClickonSignIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginsteps.VerifyFlightfinderpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginsteps.ClickonSignOFF()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginsteps.VerifySignonpage()"
});
formatter.result({
  "status": "skipped"
});
});