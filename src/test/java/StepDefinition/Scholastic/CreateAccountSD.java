package StepDefinition.Scholastic;

import Pages.Scholastic.HomePage;
import Pages.Scholastic.MyAccountPage;
import cucumber.api.java.en.*;
import org.testng.Assert;

public class CreateAccountSD {

    String tempDataHolder1 = "";
    String tempDataHolder2 = "";

    HomePage homePage = new HomePage();
    MyAccountPage myAccPage = new MyAccountPage();

    @When("^User clicked on 'Create an Account'$")
    public void createAccount() {
        homePage.clickCreateAccount();
    }

    @When("^User chose 'Teacher/Administrator/Homeschooler' option$")
    public void chooseTeacherOption() {
        homePage.chooseTeacherOption();
        homePage.clickNextOnCreateAcc();
    }

    @When("^User entered (.+), (.+), (.+), (.+), (.+) on Create Teacher Account screen$")
    public void userEntersTitleNameEmailPasswordOnCreateTeacherAccountScreen(String userTitle, String firstName, String lastName, String userEmail, String userPassword) {
        tempDataHolder1 = userTitle + " " + firstName + " " + lastName;

        homePage.selectTitle(userTitle);
        homePage.enterFirstName(firstName);
        homePage.enterLastName(lastName);
        homePage.enterEmail(userEmail);
        homePage.enterPass(userPassword);
        homePage.clickCheckbox();
        homePage.clickNext();
    }

    @When("^User searched for school by '(.+)', '(.+)' on My School screen$")
    public void userSearchesForSchoolOnMySchoolScreenByZIP(String userZip, String schoolName) {
        homePage.enterZip(userZip);
        homePage.clickSearchSchool();
        homePage.enterSchoolName(schoolName);
        homePage.selectSchool(schoolName);
        tempDataHolder2 = homePage.getSchoolAddress();
        homePage.clickNext();
    }

    @When("^User searched for school by '(.+)', '(.+)' and (.+) on My School screen$")
    public void userSearchesForSchoolOnMySchoolScreenByState(String userState, String userCity, String schoolName) {
        homePage.selectStateAndCity(userState, userCity);
        homePage.clickSearchSchool();
        homePage.enterSchoolName(schoolName);
        homePage.selectSchool(schoolName);
        tempDataHolder2 = homePage.getSchoolAddress();
        homePage.clickNext();
    }

    @When("^User Selected Role: '(.+)', Grade: '(.+)', (.+) student on My Role screen$")
    public void userSelectRoleGradeEnterNumStudentOnMyRoleScreen(String userRole, String userGrade, String numStudents) {
        homePage.selectRole(userRole);
        homePage.selectGrade(userGrade);
        homePage.enterNumStudents(numStudents);
        homePage.clickNext();
    }

    @When("^User chose 'Preferred Reading Level System' on Customize Your Experience screen$")
    public void userChoosePreferredReadingLevelSystemOnCustomizeYourExperienceScreen() {
        homePage.selectPreferredSystem();
    }

    @Then("^User verified that Class Code is the same on Home-Page and MyAccount-Page$")
    public void isClassCodeSame() {
        String classCodeHPg = homePage.getClassCode();
        homePage.clickMyAccount();
        String classCodeAPg = myAccPage.getClassCode();
        Assert.assertEquals(classCodeAPg, classCodeHPg, "CLASS CODE allocated to the teacher, present on Home-Page and MyAccount-Page NOT equal.");
    }

    @Then("^User verified that Teacher name is the same on MyAccount-Page and name used with registration form$")
    public void isNameSame() {
        String name = myAccPage.getTeacherName();
        Assert.assertEquals(tempDataHolder1, name, "Teacher name is present on MyAccount-Page is NOT the same name used with registration form.");
    }

    @Then("^User verified that the address is the same on MyAccount-Page and address used with registration form$")
    public void isAddressSame() {
        String address = myAccPage.getAddress();
        Assert.assertEquals(tempDataHolder2, address, "Address is NOT the same on MyAccount-Page and address used with registration form");
    }


}
