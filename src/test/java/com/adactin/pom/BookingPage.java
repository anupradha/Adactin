package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookingPage {
	
	public static WebDriver driver;
	
	  @FindBy(xpath="//input[@id=\"radiobutton_0\"]")
	  private WebElement selectbtn1;
	  
	  @FindBy(xpath="//input[@id=\"continue\"]")
	  private WebElement continuebtn;
	  
	  public BookingPage (WebDriver ldriver) {
		  this.driver=ldriver;
		  PageFactory.initElements(driver, this);
	  }
	  public WebElement getSelectbtn1() {
		return selectbtn1;
	  }
	  public WebElement getcontinuebtn() {
		return continuebtn;
		  
	  }
}
