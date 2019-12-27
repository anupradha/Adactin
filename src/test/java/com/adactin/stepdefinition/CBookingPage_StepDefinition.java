package com.adactin.stepdefinition;

import com.adactin.baseclass.BaseClass;
import com.adactin.pom.BookingPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CBookingPage_StepDefinition extends BaseClass {
	
	BookingPage bp=new BookingPage(driver);
	
	@Given("^user select valid selectbn$")
	public void user_select_valid_selectbn() throws Throwable {
		 clickOnElement(bp.getSelectbtn1());
		 
	}

	@When("^user verify the click the selecthotelpage$")
	public void user_verify_the_click_the_selecthotelpage() throws Throwable {
		clickOnElement(bp.getcontinuebtn());
	}
}

