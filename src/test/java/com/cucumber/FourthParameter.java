package com.cucumber;

import java.util.List;
import java.util.Map;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;

public class FourthParameter 
{
	 @Given("^I was in ([a-zA-Z]{1,})$")
	    public void i_live_in_other(String place)
	    {
	    	System.out.println("I was in "+place+".");
	    }
	    

	    @And("^we are group ([\\d+]) Adults$")
	    public void adulst(int people, List<String> details)
	    {
	    	System.out.println("we are group of " +people+" Adults Namely "+details.toString()+".");
	    }
	    
	    @And("^we orderd ([\\d+]) varities of Food$")
	    public void orderFood(int cnt, List<Map<String,String>> names)
	    {
	    	System.out.println("we ordered " +cnt+" Adults Namely "+names.toString()+".");
	    }
	    
	   

}
