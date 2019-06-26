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
Feature: Second with out Regular exoressions
  I want to use this template for my feature file

  @tag1
  Scenario: I want to Book Hotel
    Given I live in Melbourne
    And I want to go to on Holiday
    And we are 4 Adults
    And we want to book it on 1st June 2019 to 10th June 2019
    When I go to Agent
    Then I should pay 500 as a Advance
    But I asked for discount

 