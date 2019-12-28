package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;
import com.adactin.helper.PageObjectManager;
import com.adactin.pom.SearchHotel;
import com.adactin.runner.CucumberRunner;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BSearchHotel_StepDefinition extends BaseClass {
	public static WebDriver driver = CucumberRunner.driver;
	public static PageObjectManager pom = new PageObjectManager(driver);


	@When("^user enter valid location$")
	public void user_enter_valid_location() throws Throwable {

		dropDown(pom.getSh().getlocation(), "value", "London");
	}

	@And("^user enter valid hotel$")
	public void user_enter_valid_hotel() throws Throwable {

		dropDown(pom.getSh().gethotel(), "value", "Hotel Creek");

	}

	@And("^user enter valid roomtype$")
	public void user_enter_valid_roomtype() throws Throwable {

		dropDown(pom.getSh().getroomtype(), "value", "Deluxe");

	}

	@And("^user enter valid norooms$")
	public void user_enter_valid_norooms() throws Throwable {

		dropDown(pom.getSh().getnorooms(), "index", "1");

	}

	@And("^user enter valid checkin$")
	public void user_enter_valid_checkin() throws Throwable {

		clearElement(pom.getSh().getcheckin());
		inputOnElement(pom.getSh().getcheckin(), "27/12/2019");

	}

	@And("^user enter valid checkout$")
	public void user_enter_valid_checkout() throws Throwable {

		clearElement(pom.getSh().getchechout());
		inputOnElement(pom.getSh().getchechout(), "29/12/2019");

	}

	@And("^user enter valid adultroom$")
	public void user_enter_valid_adultroom() throws Throwable {

		dropDown(pom.getSh().getadultroom(), "index", "1");

	}

	@And("^user enter valid children$")
	public void user_enter_valid_children() throws Throwable {

		dropDown(pom.getSh().getchildren(), "index", "1");
	}

	@Then("^user select valid selectbtn$")
	public void user_select_valid_selectbtn() throws Throwable {

		clickOnElement(pom.getSh().getsearchbtn());

	}

}
