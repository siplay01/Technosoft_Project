@Regression
Feature: Add Credit Card

  @Smoke
  Scenario Outline: Verify teacher can add only 3 credit cards under My Credit Cards in My Accounts
    When User logged in with valid <Login> and <Password>
    And User navigated to My Account page
    And User added CreditCard to payment method
    Then User verified when user try to add 4th credit card, get error msgYou can only store three credit cards

    Examples:
      | Login           | Password   |
      | OMiller@mail.ml | OMiller123 |
#      | JSmith@mail.ml  | JSmith123  |
#      | OMiller@mail.ml | OMiller123 |