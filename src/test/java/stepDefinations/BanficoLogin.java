package stepDefinations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BanficoLogin {
	
	public static WebDriver driver;
	
	
	@Given("^go to login page$")
	public void go_to_login_page() throws Throwable {
	    
		System.setProperty("webdriver.chrome.driver", "C://Tushar//Cucumber_Learning//CucumberProject//target//chromedriver.exe");
		driver.get("https://developer.banka.banfico.net/");
		driver.manage().window().maximize();
		
	}

	@Given("^select SignIn menu button$")
	public void select_SignIn_menu_button() throws Throwable {
	   
		driver.findElement(By.linkText("Sign in")).click();
		
	}

	@When("^Enter username and password$")
	public void enter_username_and_password() throws Throwable {
	 
		driver.findElement(By.xpath("//input[@name='username']")).sendKeys("tushar@banfico.com");
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys("V@iq9w2w");
	}

	@When("^Click on Sign in button$")
	public void click_on_Sign_in_button() throws Throwable {

		driver.findElement(By.xpath("//input[@name='login']")).click();
		
	}

	@Then("^User navigate to welcome page$")
	public void user_navigate_to_welcome_page() throws Throwable {
	   
		driver.getTitle();
		driver.close();
		
		
	}

	

}
