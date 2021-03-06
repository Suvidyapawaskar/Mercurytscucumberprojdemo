#Author: Suvidya Pawaskar
#Feature: Login
#Date:9-1-2018

@Login
Feature: Login feature
  Verify the login feature of Mercury tours application
  
Background: User accesses login page of Mercury tours application
When user opens "chrome" browser
And user enters application url "http://newtours.demoaut.com/mercurywelcome.php"
And user waits "5" seconds to page load
And user maximizes login page


  @SmokeTest
  Scenario: Verify that valid user able to login into Mercury tours application by using valid username and password
  Given user is Login page of Mercury tours application
  When user enters "Suvidyap1" as username
  And user enters "P@ssword1" as password
  And user clicks on Sign In button
  Then user is on Flight Finder page
  When user clicks on Sign OFF button
  Then user is Sign on page

 @SmokeTest
 Scenario: Verify that invalid user not able to login into Mercury tours application by using invalid username and password
 Given user is Login page of Mercury tours application
 When user enters "Suvidyap" as username
 And user enters "P@ssword" as password 
 And user clicks on Sign In button
 Then user is Sign on page
 