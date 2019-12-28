package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;
import com.adactin.helper.PageObjectManager;
import com.adactin.pom.BookingPage;
import com.adactin.runner.CucumberRunner;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CBookingPage_StepDefinition extends BaseClass {
	public static WebDriver driver = CucumberRunner.driver;
	public static PageObjectManager pom = new PageObjectManager(driver);

	
	
	@When("^user select valid selectbn$")
	public void user_select_valid_selectbn() throws Throwable {
		 clickOnElement(pom.getBp().getSelectbtn1());
		 
	}

	@Then("^user verify the click the selecthotelpage$")
	public void user_verify_the_click_the_selecthotelpage() throws Throwable {
		clickOnElement(pom.getBp().getcontinuebtn());
	}
}

