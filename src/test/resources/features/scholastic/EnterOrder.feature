@Regression
Feature: Enter Order

  Scenario Outline: Verify teacher gets error for invalid item number in SFO (Student Flyer Order)
    When User logged in with valid <Login> and <Password>
    And User navigated to Student Flyer Orders
    And User entered <studentName> and <itemNumber>
    Then User verified that teacher gets error for invalid item number in SFO (Student Flyer Order)

    Examples:
      | Login           | Password   | studentName | itemNumber |
      | OMiller@mail.ml | OMiller123 | Harry       | 111        |
#      | JSmith@mail.ml  | JSmith123  | Harry       | 111        |

  Scenario Outline: Verify YOUR TEACHER ORDER-By Flyer jumper
    When User logged in with valid <Login> and <Password>
    And User navigated to Your Teacher Orders
    And User clicked on Price-QTY box
    Then User verified that a jumper right above the box with message: All student paper flyer orders MUST be entered in the Student Flyer Orders tab. is visible

    Examples:
      | Login           | Password   |
      | OMiller@mail.ml | OMiller123 |
#      | JSmith@mail.ml | JSmith123

  Scenario Outline: Teacher can add multiple books for a student in SFO (Student Flyer Order)
    When User logged in with valid <Login> and <Password>
    And User navigated to Student Flyer Orders
    And User entered <studentName> then added <item1>, <qty1>, <item2>, <qty2>, <item3>, <qty3>
    Then User verified correct <studentName>, item number <item1>, <item2>, <item3> and quantity <qty1>, <qty2>, <qty3> gets added under SFO
    And User verified correct Student-total (amount, items and quantity) and SFO Total <item1>, <qty1>, <item2>, <qty2>, <item3>, <qty3>

    Examples:
      | Login           | Password   | studentName | item1 | qty1 | item2 | qty2 | item3 | qty3 |
      | OMiller@mail.ml | OMiller123 | Harry       | 35J3  | 2    | 35N3  | 4    | 16B3  | 1    |
#      | JSmith@mail.ml  | JSmith123  | Harry       | 51V1  | 5    | 42J4  | 1    | 42V1  | 2    |

  Scenario Outline: Teacher can add multiple books for a students in SFO (Student Flyer Order)
    When User logged in with valid <Login> and <Password>
    And User navigated to Student Flyer Orders
    And User entered: <studentName1>, <item1>, <qty1>, <item2>, <qty2>, <studentName2>, <item3>, <qty3>, <studentName3>, <item4>, <qty4>, <item5>, <qty5>
    Then User verified correct students names <studentName1>, <studentName2>, <studentName3>, item numbers <studentName1>, <item1>, <item2>, <item3>, <item4>, <item5> and quantity <qty1>, <qty2>, <qty3>, <qty4>, <qty5> gets added under SFO
    And User verified correct Students-total (amount, items and quantity) for every student and SFO Total <studentName1>, <item1>, <qty1>, <item2>, <qty2>, <studentName2>, <item3>, <qty3>, <studentName3>, <item4>, <qty4>, <item5>, <qty5>
    Examples:
      | Login          | Password  | studentName1 | item1 | qty1 | item2 | qty2 | studentName2 | item3 | qty3 | studentName3 | item4 | qty4 | item5 | qty5 |
      | JSmith@mail.ml | JSmith123 | Harry        | 51V1  | 5    | 42J4  | 1    | John         | 42V1  | 2    | Michael      | 31B5  | 4    | 34B4  | 10   |
#      | SBrown@mail.ml | SBrown123 | Harry        | 51V1  | 5    | 42J4  | 1    | John         | 42V1  | 2    | Michael      | 31B5  | 4    | 34B4  | 10   |

  Scenario Outline: SFO order has zero tax
    When User logged in with valid <Login> and <Password>
    And User navigated to Student Flyer Orders
    And User entered: <studentName1>, <item1>, <qty1>, <item2>, <qty2>, <studentName2>, <item3>, <qty3>, <studentName3>, <item4>, <qty4>, <item5>, <qty5>
    Then User verified zero tax for only SFO order in the checkout
    Examples:
      | Login          | Password  | studentName1 | item1 | qty1 | item2 | qty2 | studentName2 | item3 | qty3 | studentName3 | item4 | qty4 | item5 | qty5 |
      | SBrown@mail.ml | SBrown123 | Harry        | 51V1  | 5    | 42J4  | 1    | John         | 42V1  | 2    | Michael      | 31B5  | 4    | 34B4  | 10   |
#      | JSmith@mail.ml | JSmith123 | Harry        | 51V1  | 5    | 42J4  | 1    | John         | 42V1  | 2    | Michael      | 31B5  | 4    | 34B4  | 10   |

  Scenario Outline: User can delete item on Cart page
    When User logged in with valid <Login> and <Password>
    And User navigated to Student Flyer Orders
    And User entered: <studentName1>, <item1>, <qty1>, <item2>, <qty2>, <studentName2>, <item3>, <qty3>, <studentName3>, <item4>, <qty4>, <item5>, <qty5>
    And User deleted <item1> for <studentName1>
    Then User verified <item1> is deleted for <studentName1>
    Examples:
      | Login          | Password  | studentName1 | item1 | qty1 | item2 | qty2 | studentName2 | item3 | qty3 | studentName3 | item4 | qty4 | item5 | qty5 |
      | SBrown@mail.ml | SBrown123 | Harry        | 51V1  | 5    | 42J4  | 1    | John         | 42V1  | 2    | Michael      | 31B5  | 4    | 34B4  | 10   |
#      | JSmith@mail.ml | JSmith123 | Harry        | 51V1  | 5    | 42J4  | 1    | John         | 42V1  | 2    | Michael      | 31B5  | 4    | 34B4  | 10   |

  Scenario Outline: Verify zero tax for SFO-YTO orders in the checkout for teacher with non-tax state school
    When User logged in with valid <Login> and <Password>
    And User navigated to Your Teacher Order
    And User entered <item1>, <item2>, <item3>, <item4>, <item5>
    Then User verified zero tax for only SFO-YTO order in the checkout

    Examples:
      | Login           | Password   | item1 | item2 | item3 | item4 | item5 |
      | OMiller@mail.ml | OMiller123 | 51V1  | 31B5  | 42J4  | 34B4  | 42V1  |
#      | JSmith@mail.ml  | JSmith123  | 51V1  | 31B5  | 42J4  | 34B4  | 42V1  |

  Scenario Outline: Verify non-zero tax for SFO-YTO orders in the checkout for teacher with non-tax state school
    When User logged in with valid <Login> and <Password>
    And User navigated to Your Teacher Order
    And User entered <item1>, <item2>, <item3>, <item4>, <item5>
    Then User verified non-zero tax for only SFO-YTO order in the checkout

    Examples:
      | Login          | Password  | item1 | item2 | item3 | item4 | item5 |
      | JSmith@mail.ml | JSmith123 | 51V1  | 31B5  | 42J4  | 34B4  | 42V1  |
#      | OMiller@mail.ml | OMiller123 | 51V1  | 31B5  | 42J4  | 34B4  | 42V1  |

  Scenario Outline: Verify user can place an order by adding a new credit card
    When User logged in with valid <Login> and <Password>
    And User navigated to Your Teacher Order
    And User entered <item1>, <item2>, <item3>, <item4>, <item5>
    And User navigated to Payment
    And User added new CreditCard to payment method
    Then User verified 'Thank you' message and order receipt reference number are displayed

    Examples:
      | Login          | Password  | item1 | item2 | item3 | item4 | item5 |
      | JSmith@mail.ml | JSmith123 | 51V1  | 31B5  | 42J4  | 34B4  | 42V1  |
#      | OMiller@mail.ml | OMiller123 | 51V1  | 31B5  | 42J4  | 34B4  | 42V1  |

  Scenario Outline: User can place an order using the added credit cards
    When User logged in with valid <Login> and <Password>
    And User navigated to Your Teacher Order
    And User entered <item1>, <item2>, <item3>, <item4>, <item5>
    And User navigated to Payment
    Then User verified that he can place an order using the added credit cards

    Examples:
      | Login          | Password  | item1 | item2 | item3 | item4 | item5 |
      | JSmith@mail.ml | JSmith123 | 51V1  | 31B5  | 42J4  | 34B4  | 42V1  |
#      | OMiller@mail.ml | OMiller123 | 51V1  | 31B5  | 42J4  | 34B4  | 42V1  |