package com.adactin.stepdefinition;

import com.adactin.baseclass.BaseClass;
import com.adactin.pom.SearchHotel;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BSearchHotel_StepDefinition extends BaseClass {
	
	SearchHotel sh=new SearchHotel(driver);
	@Given("^user enter valid location$")
	public void user_enter_valid_location() throws Throwable {
		
		 dropDown(sh.getlocation(),"value","London");   
	}

	@When("^user enter valid hotel$")
	public void user_enter_valid_hotel() throws Throwable {
	   
		dropDown(sh.gethotel(),"value","Hotel Creek");
		 
	}

	@And("^user enter valid roomtype$")
	public void user_enter_valid_roomtype() throws Throwable {
	   
		dropDown(sh.getroomtype(),"value","Deluxe");
		 
	}

	@And("^user enter valid norooms$")
	public void user_enter_valid_norooms() throws Throwable {
	   
		dropDown(sh.getnorooms(),"index","1");
		 
	}

	@And("^user enter valid checkin$")
	public void user_enter_valid_checkin() throws Throwable {
	   
		clearElement(sh.getcheckin());
		inputOnElement(sh.getcheckin(),"27/12/2019");
		 
	}

	@And("^user enter valid checkout$")
	public void user_enter_valid_checkout() throws Throwable {
		
		 clearElement(sh.getchechout());
		 inputOnElement(sh.getchechout(),"29/12/2019");
		 
	}

	@And("^user enter valid adultroom$")
	public void user_enter_valid_adultroom() throws Throwable {
	   
		dropDown(sh.getadultroom(),"index","1");
		
	     
	}

	@And("^user enter valid children$")
	public void user_enter_valid_children() throws Throwable {
	   
		 dropDown(sh.getchildren(),"index","1");
		 	}

	@Then("^user select valid selectbtn$")
	public void user_select_valid_selectbtn() throws Throwable {
	   
		clickOnElement(sh.getsearchbtn());

	}

}
