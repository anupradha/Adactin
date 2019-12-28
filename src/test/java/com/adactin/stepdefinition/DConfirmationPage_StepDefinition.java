package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;
import com.adactin.helper.PageObjectManager;
import com.adactin.pom.ConfirmationPage;
import com.adactin.runner.CucumberRunner;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DConfirmationPage_StepDefinition  extends BaseClass{
	public static WebDriver driver = CucumberRunner.driver;
	public static PageObjectManager pom = new PageObjectManager(driver);

	
	@When("^user enter valid firstname$")
	public void user_enter_valid_firstname() throws Throwable {
		
	     inputOnElement(pom.getCp().getFirstname(),"anu");
	}

	@And("^user enter valid Lastname$")
	public void user_enter_valid_Lastname() throws Throwable {
		inputOnElement(pom.getCp().getLasttname(),"amu");
		 
	}

	@And("^user enter valid Address$")
	public void user_enter_valid_Address() throws Throwable {
		inputOnElement(pom.getCp().getAddress(),"chennai");
		 

	}

	@And("^user enter valid Creditno$")
	public void user_enter_valid_Creditno() throws Throwable {
		inputOnElement(pom.getCp().getCreditno(),"1122 3344 5566 7788");
		 
	}

	@And("^user enter valid Cardtype$")
	public void user_enter_valid_Cardtype() throws Throwable {
		dropDown(pom.getCp().getCardtype(), "value","VISA");
		 
	}

	@And("^user enter valid Selectmonth$")
	public void user_enter_valid_Selectmonth() throws Throwable {
		dropDown(pom.getCp().getSelectmonth(),"text","April");
		 	   
	}

	@And("^user enter valid Selectyear$")
	public void user_enter_valid_Selectyear() throws Throwable {
		dropDown(pom.getCp().getSelectyear(),"value","2020");
		
	}

	@And("^user enter valid Ccvno$")
	public void user_enter_valid_Ccvno() throws Throwable {
		 inputOnElement(pom.getCp().getCcvno(),"123");
		 

	}

	@And("^user verify the booknow in the Paymentpage$")
	public void user_verify_the_booknow_in_the_Paymentpage() throws Throwable {
		clickOnElement(pom.getCp().getBooknowbtn());
		 Thread.sleep(8000);
		
	}

	@Then("^user click the logoutbtn$")
	public void user_click_the_logoutbtn() throws Throwable {
		 clickOnElement(pom.getCp().getLogout());
	    
	}
}