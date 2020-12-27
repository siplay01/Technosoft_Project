package StepDefinition.Scholastic;

import Pages.Scholastic.MyAccountPage;
import Pages.Scholastic.StudentFlyerOrdersPage;
import Pages.Scholastic.YourTeacherOrderPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.Assert;

public class EnterOrderSD {

    MyAccountPage myAccPage = new MyAccountPage();
    StudentFlyerOrdersPage sfoPage = new StudentFlyerOrdersPage();
    YourTeacherOrderPage ytoPage = new YourTeacherOrderPage();


    @And("^User navigated to Student Flyer Orders$")
    public void userNavigatedToStudentFlyerOrders() {
        myAccPage.goesToStudentFlyerOrders();
    }

    @And("^User enter (.+) and (.+)$")
    public void userEnterStudentNameAndItemNumber(String studentName, String itemNumber) {
        sfoPage.enterSfoSearchValues(studentName, itemNumber);
    }

    @Then("^User verified that teacher gets error for invalid item number in SFO \\(Student Flyer Order\\)$")
    public void userVerifiedThatTeacherGetsErrorForInvalidItemNumberInSFOStudentFlyerOrder() {
        Assert.assertTrue(sfoPage.isErrorMsgDisplayed());
    }

    @And("^User navigated to Your Teacher Orders$")
    public void userNavigatedToYourTeacherOrders() {
        myAccPage.goesToYourTeacherOrders();
    }


    @And("^User clicked on Price-QTY box$")
    public void userClickedOnPriceQTYBox() {
        ytoPage.clickedOnPriceQTYBox();

    }

    @Then("^User verified that a jumper right above the box with message: (.+) are visible$")
    public void verifyThatAJumperRightAboveTheBox(String warningMsg) {
        Assert.assertTrue(ytoPage.isWarningMsgVisible(warningMsg));
        ytoPage.locationOf1();
        Assert.assertTrue(ytoPage.isWarningMsgNOTVisible());
    }
}
