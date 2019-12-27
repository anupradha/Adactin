package com.adactin.baseclass;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.IOException;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriver.TargetLocator;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

public class BaseClass {

	public static WebDriver driver;

	public static WebDriver browserLaunch(String browserName) {
		try {
			if (browserName.equalsIgnoreCase("chrome")) {
				System.setProperty("webdriver.chrome.driver",
						System.getProperty("user.dir") + "\\driver\\chromedriver.exe");
				driver = new ChromeDriver();

			} else if (browserName.equalsIgnoreCase("firefox")) {
				System.setProperty("webdriver.gecko.driver",
						System.getProperty("user.dir") + "\\driver\\geckodriver.exe");
				driver = new FirefoxDriver();

			} else if (browserName.equalsIgnoreCase("ie")) {
				System.setProperty("webdriver.ie.driver", System.getProperty("user.dir") + "\\driver\\iedriver.exe");
				driver = new InternetExplorerDriver();

			} else {
				System.out.println("invalid browsername");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		driver.manage().window().maximize();

		return driver;
	}

	public static void getUrl(String url) {
		driver.get(url);

	}

	public static void getcurrenturl(String url) {
		driver.getCurrentUrl();
	}

	public static void getattribute(WebElement element) {
		element.getAttribute("value");

	}

	public static void getattribute1(WebElement element) {
		element.getAttribute("Attribute");

	}

	public static void inputOnElement(WebElement element, String value) {
		element.sendKeys(value);
	}

	public static void clickOnElement(WebElement element) {
		element.click();

	}

	public static void clearElement(WebElement element) {
		element.clear();

	}
	public static void gettext(WebElement element) {
		element.getText();
	}


	public static void isSelected(WebElement element) {
		if (element.isSelected()) {
			System.out.println("Element is choosen");
		}
	}

	public static void isEnabled(WebElement element) {
		if (element.isEnabled()) {
			System.out.println("Element is Editable");
		}
	}

	public static void isDisplayed(WebElement element) {
		if (element.isDisplayed()) {
			System.out.println("Element is viewable");
		}
	}

	public static void dropDown(WebElement element, String option, String value) {
		Select s = new Select(element);
		try {
			if (option.equals("index")) {
				s.selectByIndex(Integer.parseInt(value));
			} else if (option.equals("value")) {
				s.selectByValue(value);
			} else if (option.equals("text")) {
				s.selectByVisibleText(value);
			}

		} catch (NumberFormatException e) {
			e.printStackTrace();

		}
	}
	public static void getoptions (WebElement element) {
		Select s = new Select(element);	
	List<WebElement>options=s.getOptions();
	for(WebElement webElement:options);
	}

	public static void driverQuit(WebElement element) {
		driver.quit();
	}

	public static void ScrollUp(Object element) {

		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeAsyncScript("window.ScrollBy(0,-1000)");

	}

	public static void ScrollDown(Object element) {

		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeAsyncScript("window.ScrollBy(0,-1000)");

	}

	public static void screenshot(String name) throws IOException {
		TakesScreenshot ts = (TakesScreenshot) driver;
		File srcfile = ts.getScreenshotAs(OutputType.FILE);
		File destfile = new File("location" + name + "png");
		FileUtils.copyFile(srcfile, destfile);

	}

	public static void navigateTo(WebElement element) {
		driver.navigate().to("url");
	}

	public static void navigateBack(WebElement element) {
		driver.navigate().back();
	}

	public static void navigateForward(WebElement element) {
		driver.navigate().forward();
	}

	public static void navigateRefresh(WebElement element) {
		driver.navigate().refresh();
	}

	public static void accept(WebElement element) throws InterruptedException {
		Alert alert = driver.switchTo().alert();
		alert.accept();
		Thread.sleep(3000);
	}

	public static void dismiss(WebElement element) throws InterruptedException {
		Alert alert = driver.switchTo().alert();
		alert.dismiss();
		Thread.sleep(3000);
	}

	public static void sendkeys(WebElement element, WebElement element1) throws InterruptedException {
		Alert alert = driver.switchTo().alert();
		alert.sendKeys("Testing.demo");
		Thread.sleep(3000);
	}

	public static void iframes(WebElement element, WebElement element1, WebElement element2)

			throws InterruptedException {
		element.click();
		Thread.sleep(2000);

		driver.switchTo().frame("index");
		element2.sendKeys("anu");
	}

	public static void Doubleclick(WebElement element) {
		Actions ac1 = new Actions(driver);
		ac1.doubleClick().build().perform();
	}

	public static void click(WebElement element) {
		Actions ac2 = new Actions(driver);
		ac2.click().build().perform();
	}

	public static void rightclick(WebElement element) {
		Actions ac3 = new Actions(driver);
		ac3.contextClick().build().perform();
	}

	public static void sendkeysActions(WebElement element, String value) {
		Actions ac4 = new Actions(driver);
		ac4.sendKeys(element, value).build().perform();
	}

	public static void dragdrop(WebElement element, WebElement element1) {
		Actions ac5 = new Actions(driver);
		ac5.dragAndDrop(element, element1).build().perform();
	}

	public static void robot() throws InterruptedException, AWTException {
		Robot r = new Robot();

		r.keyPress(KeyEvent.VK_DOWN);
		r.keyRelease(KeyEvent.VK_DOWN);
		Thread.sleep(2000);

		r.keyPress(KeyEvent.VK_DOWN);
		r.keyRelease(KeyEvent.VK_DOWN);
	}

	public static void browserclose(WebElement element) {
		driver.close();
	}

	
	public static void gettitle(String element) {
		driver.switchTo().window(element).getTitle();
	}

}
