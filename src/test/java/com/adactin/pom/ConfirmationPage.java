package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ConfirmationPage {
	
	public WebDriver driver;
	
	@FindBy(xpath="//input[@id='first_name']")
	private WebElement firstname;
	
	@FindBy(xpath="//input[@id='last_name']")
	private WebElement lasttname;
	
	@FindBy(xpath="//textarea[@id='address']")
	private WebElement address;
	
	@FindBy(xpath="//input[@id='cc_num']")
	private WebElement creditno;
	
	@FindBy(xpath="//select[@id='cc_type']")
	private WebElement cardtype;
	
	@FindBy(xpath="//select[@id='cc_exp_month']")
	private WebElement selectmonth;
	
	@FindBy(xpath="//select[@id='cc_exp_year']")
	private WebElement selectyear;
	
	@FindBy(xpath="//input[@id='cc_cvv']")
	private WebElement ccvno;
	
	@FindBy(xpath="//input[@id='book_now']")
	private WebElement booknowbtn;
	
	@FindBy(xpath="//input[@id='logout']")
	private WebElement logout ;
	
	public ConfirmationPage(WebDriver ldriver) {
		this.driver=ldriver;
		PageFactory.initElements(driver, this);
	}

	public WebDriver getDriver() {
		return driver;
	}

	public WebElement getFirstname() {
		return firstname;
	}

	public WebElement getLasttname() {
		return lasttname;
	}

	public WebElement getAddress() {
		return address;
	}

	public WebElement getCreditno() {
		return creditno;
	}

	public WebElement getCardtype() {
		return cardtype;
	}

	public WebElement getSelectmonth() {
		return selectmonth;
	}

	public WebElement getSelectyear() {
		return selectyear;
	}

	public WebElement getCcvno() {
		return ccvno;
	}

	public WebElement getBooknowbtn() {
		return booknowbtn;
	}

	public WebElement getLogout() {
		return logout;
	}
}