Feature: Login functionality for adactin application 

Background: 
  Given the user is logged in the application 
  Then goes to landing page 
	
@login 
Scenario Outline: Successful click login into the adactin application with valid credential 
  When user enter application url 
  And user enter "<username>" as username 
  And user enter "<password>" as password 
  Then user verify the username in the homepage 
	
	Examples: 
	    |username|password|
		|Prabhuvenkat|prabhu9619|
		|Mahamilky|hari.9500|
		|anuamu04|9003881833|
		
@SearchHotel 
Scenario: Successfull select SearchHotel into the adactin application with valid credential 
  When user enter valid location 
  And user enter valid hotel 
  And user enter valid roomtype 
  And user enter valid norooms 
  And user enter valid checkin 
  And user enter valid checkout 
  And user enter valid adultroom 
  And user enter valid children  
  Then user select valid selectbtn 
  
 @BookingPage 
 Scenario: Successfull select BookingPage into the adactin application with valid credential 
  When user select valid selectbn 
  Then user verify the click the selecthotelpage
   
  @ConfirmationPage
 Scenario: Successfull select ConfirmationPage into the adactin application with valid credential 
  When user enter valid firstname 
  And user enter valid Lastname 
  And user enter valid Address 
  And user enter valid Creditno 
  And user enter valid Cardtype 
  And user enter valid Selectmonth 
  And user enter valid Selectyear 
  And user enter valid Ccvno 
  And user verify the booknow in the Paymentpage 
  Then user click the logoutbtn 
			
			
