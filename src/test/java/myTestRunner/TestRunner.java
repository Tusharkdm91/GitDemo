package myTestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
	//	features="Features"
		features="C://Tushar//Cucumber_Learning//CucumberProject//Features//banficologin.feature",
		glue="stepDefinations",
		//dryRun=true,
		format = {"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml_output/cucumber.xml"}
		)

public class TestRunner {
	
	

}
