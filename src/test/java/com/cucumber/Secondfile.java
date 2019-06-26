package com.cucumber;

import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Secondfile 
{
	
	/* Given I live in Melbourne
	    And I want to go to on Holiday
	    And we are 4 Adults
	    And we want to book it on 1st June 2019 to 10th June 2019
	    When I go to Agent
	    Then I should pay 500 $ as a Advance
	    But I asked for discount*/

	    @Given("^I live in Melbourne$")
	    public void i_live()
	    {
	    	System.out.println("I live in Melbourne");
	    }
	    
	    @And ("^I want to go to on Holiday$")
	    public void i_want_togo_holiday()
	    {
	    	System.out.println("I want to go to Holiday");
	    }

	    @And("^we are 4 Adults$")
	    public void adulst()
	    {
	    	System.out.println("we are 4 Adults");
	    }
	    
	    @And("^we want to book it on 1st June 2019 to 10th June 2019$")
	    public void BookTheDates()
	    {
	    	System.out.println("Book the dates");
	    }
	    
	    @When("^I go to Agent$")
	    public void goto_Agent()
	    {
	    	System.out.println("Go to Agent");
	    }
	    
	    @Then("^I should pay 500 as a Advance$")
	    public void pay_Advance()
	    {
	    	System.out.println("Pay Advnace amount");
	    }
	    
	    @But("^I asked for discount$")
	    public void discount()
	    {
	    	System.out.println("I have asked for discount");
	    }
}
