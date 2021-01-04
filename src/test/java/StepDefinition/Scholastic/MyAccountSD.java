package StepDefinition.Scholastic;

import Pages.BasePage;
import Pages.Scholastic.HomePage;
import Pages.Scholastic.MyAccountPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class MyAccountSD extends BasePage {

    HomePage homePage = new HomePage();
    MyAccountPage myAccPage = new MyAccountPage();

    @When("^User navigated to My Account page$")
    public void userNavigatedToMyAccountPage() {
        homePage.clickMyAccount();
    }

    @When("^User added CreditCard to payment method$")
    public void userAddedCreditCardToPaymentMethod() {
        myAccPage.addCreditCard();
    }

    @Then("^User verified when user try to add 4th credit card, get error msgYou can only store three credit cards$")
    public void verifyWhenUserTryToAddThCreditCardGetErrorMsg() {
        Assert.assertTrue(myAccPage.isErrorMsgDisplayed(), "Error message is NOT displayed");
    }
}
