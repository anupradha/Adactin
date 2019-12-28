package com.adactin.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;
import com.adactin.helper.FileReaderManager;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\java\\com\\adactin\\feature", 
					glue = "com\\adactin\\stepdefinition", 
					plugin = {"com.cucumber.listener.ExtentCucumberFormatter:Report/reports.html", "html:Report" },
					monochrome = true, 
					dryRun = false, 
					strict = true)
// tags = {"@login,@SearchHotel"}
public class CucumberRunner {

	public static WebDriver driver;

	@BeforeClass
	public static void setup() throws Exception {
		String browserName = FileReaderManager.getInstance().getCrInstance().browsername();
		driver = BaseClass.browserLaunch(browserName);
	}

	@AfterClass
	public static void tearDown() {
		driver.quit();
	}
}
