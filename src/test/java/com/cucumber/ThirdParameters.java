package com.cucumber;

import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ThirdParameters 
{
	 @Given("^I lived in ([a-zA-Z]{1,})$")
	    public void i_live_in_otherplace(String place)
	    {
	    	System.out.println("I live in "+place+".");
	    }
	    
	    @And ("^I want to go to on Office$")
	    public void i_want_togo_holiday()
	    {
	    	System.out.println("I want to go to Holiday");
	    }

	    @And("^we are ([\\d+]) Adults in the group$")
	    public void adulst(int people)
	    {
	    	System.out.println("we are "+people+" Adults");
	    }
	    
	    @And("^we tried to book it on ([^\"]*) to ([^\"]*)$")
	    public void BookTheDates(String fromDate, String enddate)
	    {
	    	System.out.println("My travel is on "+fromDate+"and "+enddate+".");
	    }
	    
	    @When("^I go to AgentOffice$")
	    public void goto_Agent()
	    {
	    	System.out.println("Go to Agent");
	    }
	    
	    @Then("^I should pay 5000 as a Advance$")
	    public void pay_Advance()
	    {
	    	System.out.println("Pay Advnace amount");
	    }
	    
	    @But("^I asked for some discount$")
	    public void discount()
	    {
	    	System.out.println("I have asked for discount");
	    }

}
