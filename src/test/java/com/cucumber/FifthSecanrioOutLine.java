package com.cucumber;

import java.util.List;
import java.util.Map;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;


public class FifthSecanrioOutLine
{
	
	@BeforeMethod()
	public void execute_This()
	{
		System.out.println("This would be executed first");
	}
	
	@AfterMethod()
	public void execute_Next()
	{
		System.out.println("This would be executed Last");
	}
	 @Given("^I though to stay in ([a-zA-Z]{1,})$")
	    public void i_live_in_other(String place)
	    {
	    	System.out.println("I though to stay in "+place);
	    }
	    

	    @And("^we went to see ([a-zA-Z]{1,})$")
	    public void place_toSee(String name )
	    {
	    	System.out.println("We want see "+ name);
	    }
	    
	    @And("^Returned on ([^\"]*)$")
	    public void return_date(String retrnDate)
	    {
	    	System.out.println("Our Retun date is " + retrnDate);
	    }
}
