package com.cucumber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions
(
		dryRun=false,
		strict=false,
		monochrome=false,
		features= {"src/test/Resources"},
		glue= {"com.cucumber"},
		plugin= {
				"html:target/site/cucumber-html",
				"json:target/cucumber1.json"}
		)
public class MyRunnerAnyName 
{

}
