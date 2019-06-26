#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: Example of scenario outline 
  I want to use this template for my feature file

  @tag1
  Scenario Outline: Title of your scenario
   
		Given I though to stay in <Source_place>
    And we are group 3 Adults 
    |Selva|Vijay|Srini|
    And we orderd 3 varities of Food
    |Selva|NagMohan|Priya    |
    |veg		|Egg						|NonVeg|
    |2				|	3							|5						|
    And we went to see <Destination>
    And Returned on <ReturnDate>
    
    Examples:
    |Source_place|ReturnDate      |Destination|
    |Sydney					|25th June 2019|Canada				|
    |Bangalore			|12th May 2018 |England			|
  
