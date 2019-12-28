package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;
import com.adactin.helper.FileReaderManager;
import com.adactin.helper.PageObjectManager;
import com.adactin.pom.LoginPage;
import com.adactin.runner.CucumberRunner;

import cucumber.api.java.en.*;

public class ALogin_StepDefinition extends BaseClass {
	public static WebDriver driver = CucumberRunner.driver;
public static PageObjectManager pom = new PageObjectManager(driver);

	@Given("^the user is logged in the application$")
	public void the_user_is_logged_in_the_application() throws Throwable {

		System.out.println("User starts to login into the application");
	}

	@Then("^goes to landing page$")
	public void goes_to_landing_page() throws Throwable {
		System.out.println("User logged on");
	}

	@When("^user enter application url$")
	public void user_enter_application_url() throws Throwable {
		String url = FileReaderManager.getInstance().getCrInstance().geturl();
		getUrl(url);
	}

	@And("^user enter \"([^\"]*)\" as username$")
	public void user_enter_as_username(String arg1) throws Throwable {
		//LoginPage lp = new LoginPage(driver);
		inputOnElement(pom.getLp().getUserName(), arg1);
	}

	@And("^user enter \"([^\"]*)\" as password$")
	public void user_enter_as_password(String arg1) throws Throwable {
		//LoginPage lp = new LoginPage(driver);
		inputOnElement(pom.getLp().getPassword(), arg1);
	}

	@Then("^user verify the username in the homepage$")
	public void user_verify_the_username_in_the_homepage() throws Throwable {

		//LoginPage lp = new LoginPage(driver);
		clickOnElement(pom.getLp().getLoginbtn());

	}

}