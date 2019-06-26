package com.cucumber;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Mynew 
{
	@Given("I want to go ANZ office")
	public void i_went_to_office()
	{
		System.out.println("I am new to cucumber");
	}
	
	@When("I swipe my card")
	public void i_will_Swipe()
	{
		System.out.println("I swipe my card");
	}
	
	
	
	@And("I show the id card")
	public void i_show_id()
	{
		System.out.println("I show the id card");
	}
	
	@Then("I must move to 8th floor")
	public void i_must_move()
	{
		System.out.println("I must move to 8th floor");
	}
}
