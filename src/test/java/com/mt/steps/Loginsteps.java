package com.mt.steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Loginsteps {
	
	public WebDriver driver;
	
	@When("^user opens \"(.*)\" browser$")
	public String Open_browser(String browsername)
	{
		if(browsername.equalsIgnoreCase("chrome"))
		{("In open browser method");
		        System.out.println("Welcome");
			System.out.println("In open browser method");
			System.setProperty("webdriver.chrome.driver","G:\\Selenium Setup\\setup1\\chromedriver_win32 (8)\\chromedriver.exe");
			driver = new ChromeDriver();
			System.out.println("Chrome browser is opened successfully");
		}
		else if (browsername.equalsIgnoreCase("ie"))
		{
			System.setProperty("webdriver.ie.driver","G:\\Selenium Setup\\setup1\\IEDriverServer_x64_3.14.0 (8)\\IEDriverServer.exe");
			driver = new InternetExplorerDriver();
			System.out.println("IE browser is opened successfully");
		}
		else
		{
			System.setProperty("webdriver.gecko.driver","G:\\Selenium Setup\\setup1\\geckodriver-v0.21.0-win64\\geckodriver.exe");
			driver = new FirefoxDriver();
			System.out.println("Fire fox browser is opened successfully");
		}
		
		return browsername;
		
	}
	
	@And("^user enters application url \"(.*)\"$")
	public String EnterApplicationurl(String url)
	{
		driver.get(url);
		System.out.println("Application url is entered successfully");
		return url;
		
	}
	
	@And("^user waits \"(.*)\" seconds to page load$")
	public void PageLoad(int timeoutseconds)
	{
		driver.manage().timeouts().pageLoadTimeout(timeoutseconds, TimeUnit.SECONDS);
	}
	
	
	@And("^user maximizes login page$")
	public void Maximize_browser()
	{
		driver.manage().window().maximize();
	}
	
	
	@Given("^user is Login page of Mercury tours application$")
	public void verify_Loginpage()
	{
		boolean act_flag=driver.findElement(By.xpath("//img[@src='/images/featured_destination.gif']")).isDisplayed();
		System.out.println("Image is displayed:"+act_flag);
	}
	
	@When("^user enters \"(.*)\" as username$")
	public String EnterUsername(String username)
	{
		driver.findElement(By.xpath("//input[@name='userName']")).sendKeys(username);
		return username;
		
	}
	
	@And("^user enters \"(.*)\" as password$")
	public String EnterPassword(String password)
	{
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);
		return password;
		
	}

	@And("^user clicks on Sign In button$")
	public void ClickonSignIn()
	{
		driver.findElement(By.xpath("//input[@name='login']")).click();
	}
	
	@Then("^user is on Flight Finder page$")
	public void VerifyFlightfinderpage()
	{
		boolean act_flag1=driver.findElement(By.xpath("//img[@src='/images/masts/mast_flightfinder.gif']")).isDisplayed();
		System.out.println("Flight finder page is opened"+act_flag1);
	}
	
	
	@When("^user clicks on Sign OFF button$")
	public void ClickonSignOFF()
	{
		driver.findElement(By.linkText("SIGN-OFF")).click();
	}
	
	 @Then("^user is Sign on page$")
  	public void VerifySignonpage()
	{
		boolean act_flag2=driver.findElement(By.xpath("//img[@src='/images/masts/mast_signon.gif']")).isDisplayed();
		System.out.println("Sign on image is displayed:"+act_flag2);
	}
	
}
