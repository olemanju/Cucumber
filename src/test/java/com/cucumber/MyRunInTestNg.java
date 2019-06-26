package com.cucumber;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(
		features= {"src/test/Resources"},
		glue= {"com.cucumber"},
		
		plugin= {"html:target/cucumber-reports/cucumber-pretty",
						"json:target/cucumber-reports/cucumberTestReport.json",
						"return:target/cucumber-reports/return.txt"
				}			
		
		)
public class MyRunInTestNg extends AbstractTestNGCucumberTests
{
	
	

}
