@Regression
Feature: Create an Account

  Scenario Outline: Verify that User can create a new teacher account in taxable state using Zip Code
    When User clicked on 'Create an Account'
    And User chose 'Teacher/Administrator/Homeschooler' option
    And User entered <UserTitle>, <FirstName>, <LastName>, <UserEmail>, <UserPassword> on Create Teacher Account screen
    And User searched for school by '<UserZIP>', '<SchoolName>' on My School screen
    And User Selected Role: 'Teacher (by Grade)', Grade: '1st Grade', 1 student on My Role screen
    And User chose 'Preferred Reading Level System' on Customize Your Experience screen

    Then User verified that Class Code is the same on Home-Page and MyAccount-Page
    And User verified that Teacher name is the same on MyAccount-Page and name used with registration form
    And User verified that the address is the same on MyAccount-Page and address used with registration form

    Examples:
      | UserTitle | FirstName | LastName | UserEmail        | UserPassword | UserZIP | SchoolName            |
      | Mr.       | Jacob     | Smith    | 14JSmith@mail.ml | JSmith123    | 10012   | Scholastic+Book+Clubs |
#      | Ms.       | Olive     | Miller   | OMiller@mail.ml | OMiller123   | 10003   | qw                    |
#      | Mrs.      | Silvia    | Brown    | SBrown@mail.ml  | SBrown123    | 99012   | qw                    |
#      | Other     | Matt      | Wilson   | MWilson@mail.ml | MWilson123   | 33123   | qwe                   |


  Scenario Outline: Verify that User can create a new teacher account in NON-taxable state using Zip Code
    When User clicked on 'Create an Account'
    And User chose 'Teacher/Administrator/Homeschooler' option
    And User entered <UserTitle>, <FirstName>, <LastName>, <UserEmail>, <UserPassword> on Create Teacher Account screen
    And User searched for school by '<UserZIP>', '<SchoolName>' on My School screen
    And User Selected Role: 'Teacher (by Grade)', Grade: '1st Grade', 1 student on My Role screen
    And User chose 'Preferred Reading Level System' on Customize Your Experience screen

    Then User verified that Class Code is the same on Home-Page and MyAccount-Page
    And User verified that Teacher name is the same on MyAccount-Page and name used with registration form
    And User verified that the address is the same on MyAccount-Page and address used with registration form

    Examples:
      | UserTitle | FirstName | LastName | UserEmail        | UserPassword | UserZIP | SchoolName  |
      | Ms.       | Olive     | Miller   | 21Miller@mail.ml | OMiller123   | 99518   | Adak School |
#      | Mr.       | Jacob     | Smith    | 12fmith@mail.ml | JSmith123    | 10012   | Scholastic+Book+Clubs |
#      | Mrs.      | Silvia    | Brown    | SBrown@mail.ml  | SBrown123    | 99012   | qw                    |
#      | Other     | Matt      | Wilson   | MWilson@mail.ml | MWilson123   | 33123   | qwe                   |


  Scenario Outline: Verify that User can create a new teacher account in taxable state using School Search
    When User clicked on 'Create an Account'
    And User chose 'Teacher/Administrator/Homeschooler' option
    And User entered <UserTitle>, <FirstName>, <LastName>, <UserEmail>, <UserPassword> on Create Teacher Account screen
    And User searched for school by '<State>', '<City>' and <SchoolName> on My School screen
    And User Selected Role: 'Teacher (by Grade)', Grade: '1st Grade', 1 student on My Role screen
    And User chose 'Preferred Reading Level System' on Customize Your Experience screen

    Then User verified that Class Code is the same on Home-Page and MyAccount-Page
    And User verified that Teacher name is the same on MyAccount-Page and name used with registration form
    And User verified that the address is the same on MyAccount-Page and address used with registration form

    Examples:
      | UserTitle | FirstName | LastName | UserEmail       | UserPassword | State    | City     | SchoolName            |
      | Mrs.      | Silvia    | Brown    | 2SBrown@mail.ml | SBrown123    | New York | New York | Scholastic+Book+Clubs |
#      | Ms.       | Olive     | Miller   | 2OMiller@mail.ml | OMiller123   | 99518    |          | Adak School           |
#      | Mr.       | Jacob     | Smith    | 15fmith@mail.ml  | JSmith123    | 10012    |          | Scholastic+Book+Clubs |
#      | Other     | Matt      | Wilson   | MWilson@mail.ml  | MWilson123   | 99518    |          | Adak School           |

