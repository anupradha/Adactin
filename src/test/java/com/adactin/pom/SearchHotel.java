package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchHotel {
	public static WebDriver driver;
	
	@FindBy(xpath="//select[@name='location']")
	private WebElement location;
	
	@FindBy(xpath="//select[@name='hotels']")
	private WebElement hotel;
	
	@FindBy(xpath="//select[@name='room_type']")
	private WebElement roomtype;
	
	@FindBy(xpath="//select[@name='room_nos']")
	private WebElement norooms;
	
	@FindBy(xpath="//input[@name='datepick_in']")
	private WebElement checkin;
	
	@FindBy(xpath="//input[@name='datepick_out']")
	private WebElement checkout;
	
	@FindBy(xpath="//select[@name='adult_room']")
	private WebElement adultroom;
	
	@FindBy(xpath="//select[@name='child_room']")
	private WebElement children;
	
	@FindBy(xpath="//input[@name='Submit']")
	private WebElement selectbtn;
	
	public SearchHotel(WebDriver ldriver) {
		this.driver=ldriver;
		PageFactory.initElements(driver, this);
	}
	
	public WebElement getlocation(){
		return location;
	}
	public WebElement gethotel(){
		return hotel;
	}
	public WebElement getroomtype(){
		return roomtype;
	}
	public WebElement getnorooms(){
		return norooms;
	}
	public WebElement getcheckin(){
		return checkin;
	}
	public WebElement getchechout(){
		return checkout;
	}
	public WebElement getadultroom(){
		return adultroom;
	}
	public WebElement getchildren(){
		return children;
	}
	public WebElement getsearchbtn(){
		return selectbtn;
		
	}
	
		
		
	}
	
	
	
