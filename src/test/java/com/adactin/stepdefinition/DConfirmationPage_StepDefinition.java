package com.adactin.stepdefinition;

import com.adactin.baseclass.BaseClass;
import com.adactin.pom.ConfirmationPage;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DConfirmationPage_StepDefinition  extends BaseClass{
	

	@Given("^user enter valid firstname$")
	public void user_enter_valid_firstname() throws Throwable {
		ConfirmationPage cp=new   ConfirmationPage(driver);
	     inputOnElement(cp.getFirstname(),"anu");
	}

	@When("^user enter valid Lastname$")
	public void user_enter_valid_Lastname() throws Throwable {
		ConfirmationPage cp=new   ConfirmationPage(driver);
		inputOnElement(cp.getLasttname(),"amu");
		 
	}

	@And("^user enter valid Address$")
	public void user_enter_valid_Address() throws Throwable {
		ConfirmationPage cp=new   ConfirmationPage(driver);
		inputOnElement(cp.getAddress(),"chennai");
		 

	}

	@And("^user enter valid Creditno$")
	public void user_enter_valid_Creditno() throws Throwable {
		ConfirmationPage cp=new   ConfirmationPage(driver);
		inputOnElement(cp.getCreditno(),"1122 3344 5566 7788");
		 
	}

	@And("^user enter valid Cardtype$")
	public void user_enter_valid_Cardtype() throws Throwable {
		ConfirmationPage cp=new   ConfirmationPage(driver);
		dropDown(cp.getCardtype(), "value","VISA");
		 
	}

	@And("^user enter valid Selectmonth$")
	public void user_enter_valid_Selectmonth() throws Throwable {
		ConfirmationPage cp=new   ConfirmationPage(driver);
		dropDown(cp.getSelectmonth(),"text","April");
		 	   
	}

	@And("^user enter valid Selectyear$")
	public void user_enter_valid_Selectyear() throws Throwable {
		ConfirmationPage cp=new   ConfirmationPage(driver);
		dropDown(cp.getSelectyear(),"value","2020");
		
	}

	@And("^user enter valid Ccvno$")
	public void user_enter_valid_Ccvno() throws Throwable {
		ConfirmationPage cp=new   ConfirmationPage(driver);
		 inputOnElement(cp.getCcvno(),"123");
		 

	}

	@And("^user verify the booknow in the Paymentpage$")
	public void user_verify_the_booknow_in_the_Paymentpage() throws Throwable {
		ConfirmationPage cp=new   ConfirmationPage(driver);
		clickOnElement(cp.getBooknowbtn());
		 Thread.sleep(8000);
		
	}

	@Then("^user click the logoutbtn$")
	public void user_click_the_logoutbtn() throws Throwable {
		ConfirmationPage cp=new   ConfirmationPage(driver);
		 clickOnElement(cp.getLogout());
	    
	}
}