package StepDefinition.Scholastic;

import Pages.Scholastic.*;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class EnterOrderSD {

    MyAccountPage myAccPage = new MyAccountPage();
    StudentFlyerOrdersPage sfoPage = new StudentFlyerOrdersPage();
    YourTeacherOrderPage ytoPage = new YourTeacherOrderPage();
    CartPage cartPage = new CartPage();
    CheckOutPage checkOutPage = new CheckOutPage();
    OrderConformationPage orderCnfPage = new OrderConformationPage();


    @When("^User navigated to Student Flyer Orders$")
    public void userNavigatedToStudentFlyerOrders() {
        myAccPage.goesToStudentFlyerOrders();
    }

    @When("^User entered (.+) and (.+)$")
    public void userEnterStudentNameAndItemNumber(String studentName, String itemNumber) {
        sfoPage.enterSfoSearchValues(studentName, itemNumber);
    }

    @When("^User verified that teacher gets error for invalid item number in SFO \\(Student Flyer Order\\)$")
    public void userVerifiedThatTeacherGetsErrorForInvalidItemNumberInSFOStudentFlyerOrder() {
        Assert.assertTrue(sfoPage.isErrorMsgDisplayed(), "Error message Not displayed");
    }

    @When("^User navigated to Your Teacher Orders$")
    public void userNavigatedToYourTeacherOrders() {
        myAccPage.goesToYourTeacherOrders();
    }


    @When("^User clicked on Price-QTY box$")
    public void userClickedOnPriceQTYBox() {
        ytoPage.clickedOnPriceQTYBox();

    }

    @Then("^User verified that a jumper right above the box with message: (.+) is visible$")
    public void verifyThatAJumperRightAboveTheBox(String warningMsg) {
        Assert.assertTrue(ytoPage.isWarningMsgVisible(warningMsg), "Warning message is NOT visible");
        ytoPage.locationOf();
        Assert.assertTrue(ytoPage.isWarningMsgNOTVisible(), "Warning message is visible");
    }

    @When("^User entered (.+) then added (.+), (.+), (.+), (.+), (.+), (.+)$")
    public void userEnteredStudentNameThenAddedItems(String studentName, String item1, String qty1, String item2, String qty2, String item3, String qty3 ) {
        sfoPage.enterStudentName(studentName);
        sfoPage.enterItem(item1, qty1);
        sfoPage.enterItem(item2, qty2);
        sfoPage.enterItem(item3, qty3);
    }


    @Then("^User verified correct student name, item number and quantity gets added under SFO (.+), (.+), (.+), (.+), (.+), (.+), (.+)$")
    public void verifyCorrectStudentNameItemNumberAndQuantityGetsAddedUnderSFO(String studentName, String item1, String qty1, String item2, String qty2, String item3, String qty3) {
        String[] listOfItems = {item1, item2, item3};
        String[] listOfQty = {qty1, qty2, qty3};
        Assert.assertTrue(sfoPage.isNameCorrect(studentName), "Student's name is NOT correct");
        Assert.assertTrue(sfoPage.isItemNumCorrect(listOfItems), "Item Numbers are NOT correct for student");
        Assert.assertTrue(sfoPage.isQtyCorrect(listOfQty), "Quantity is NOT correct for student");
    }


    @Then("^User verified correct Student-total \\(amount, items and quantity\\) and SFO Total (.+), (.+), (.+), (.+), (.+), (.+)$")
    public void verifyCorrectStudentTotalAmountItemsAndQuantityAndSFOTotal(String item1, String qty1, String item2, String qty2, String item3, String qty3) {
        String[] listOfItems = {item1, item2, item3};
        String[] listOfQty = {qty1, qty2, qty3};
        sfoPage.goesToCart();
        Assert.assertTrue(cartPage.isStudentTotalCorrect(), "Student Total is NOT correct");
        Assert.assertTrue(cartPage.isAmountCorrect(), "Student Amount is NOT correct");
        Assert.assertTrue(cartPage.isSFOCorrect(), "Student SFO is NOT correct");
        Assert.assertTrue(cartPage.isItemNumCorrect(listOfItems), "Item Numbers are NOT correct for student");
        Assert.assertTrue(cartPage.isQtyCorrect(listOfQty), "Quantity is NOT correct for student");

    }

    @When("^User entered: (.+), (.+), (.+), (.+), (.+), (.+), (.+), (.+), (.+), (.+), (.+), (.+), (.+)$")
    public void userEnteredStudentsNamesItemsQty(String studentName1, String item1, String qty1, String item2, String qty2, String studentName2, String item3, String qty3, String studentName3, String item4, String qty4, String item5, String qty5) {
        sfoPage.enterStudentName(studentName1);
        sfoPage.enterItem(item1, qty1);
        sfoPage.enterItem(item2, qty2);
        sfoPage.enterStudentName(studentName2);
        sfoPage.enterItem(item3, qty3);
        sfoPage.enterStudentName(studentName3);
        sfoPage.enterItem(item4, qty4);
        sfoPage.enterItem(item5, qty5);

    }

    @Then("^User verified correct students names, item numbers and quantity gets added under SFO (.+), (.+), (.+), (.+), (.+), (.+), (.+), (.+), (.+), (.+), (.+), (.+), (.+)$")
    public void verifyCorrectStudentsNamesItemNumbersAndQuantityGetsAddedUnderSFO(String studentName1, String item1, String qty1, String item2, String qty2, String studentName2, String item3, String qty3, String studentName3, String item4, String qty4, String item5, String qty5) {
        String[] listOfItems = {item1, item2, item3, item4, item5};
        String[] listOfQty = {qty1, qty2, qty3, qty4, qty5};
        String[] listOfNames = {studentName1, studentName1, studentName2, studentName3, studentName3};
        Assert.assertTrue(sfoPage.isNamesCorrect(listOfNames), "Student Name is NOT correct");
        Assert.assertTrue(sfoPage.isItemNumCorrect(listOfItems), "Item numbers are NOT correct for students");
        Assert.assertTrue(sfoPage.isQtyCorrect(listOfQty), "Quantity is NOT correct for students");
    }

    @Then("^User verified correct Students-total \\(amount, items and quantity\\) for every student and SFO Total (.+), (.+), (.+), (.+), (.+), (.+), (.+), (.+), (.+), (.+), (.+), (.+), (.+)$")
    public void verifyCorrectStudentsTotalAmountItemsAndQuantityForEveryStudentAndSFO(String studentName1, String item1, String qty1, String item2, String qty2, String studentName2, String item3, String qty3, String studentName3, String item4, String qty4, String item5, String qty5) {
        String[] listOfItems = {item1, item2, item3, item4, item5};
        String[] listOfQty = {qty1, qty2, qty3, qty4, qty5};

        sfoPage.goesToCart();
        Assert.assertTrue(cartPage.isStudentsTotalCorrect(), "Student Total is NOT correct");
        Assert.assertTrue(cartPage.isAmountCorrect(), "Student Amount is NOT correct");
        Assert.assertTrue(cartPage.isSFOCorrect(), "Student SFO is NOT correct");
        Assert.assertTrue(cartPage.isItemNumCorrectForStudents(listOfItems), "Item numbers are NOT correct for students");
        Assert.assertTrue(cartPage.isQtyCorrectForStudents(listOfQty), "Quantity is NOT correct for students");
    }

    @Then("^User verified zero tax for only SFO order in the checkout$")
    public void verifyZeroTaxForOnlySFOOrderInTheCheckout() {
        sfoPage.goesToCart();
        cartPage.goesCheckOut();
        Assert.assertTrue(cartPage.isTaxZero(), "Taxes are NOT zero");
    }

    @When("^User deleted (.+) for (.+)$")
    public void userDeletedItemForStudentName(String itemNum, String studentName) {
        sfoPage.goesToCart();
        cartPage.storeValue();
        cartPage.deleteItem(itemNum, studentName);
    }

    @Then("^User verified (.+) is deleted for (.+)$")
    public void userVerifiedItemIsDeletedForStudentName(String itemNum, String studentName) {
        Assert.assertTrue(cartPage.isItemDeleted(itemNum, studentName), "Element is present");
        Assert.assertTrue(cartPage.isAmountUpdated(), "Amount is NOT updated");
        Assert.assertTrue(cartPage.isQtyUpdated(), "Quantity is NOT updated");
    }

    @When("^User navigated to Your Teacher Order$")
    public void userNavigatedToYourTeacherOrder() {
        myAccPage.goesToYourTeacherOrders();
        myAccPage.goesByItem();
    }

    @When("^User entered (.+), (.+), (.+), (.+), (.+)$")
    public void userEnteredItems(String item1, String item2, String item3, String item4, String item5) {
        String[] listOfItems = {item1, item2, item3, item4, item5};
        ytoPage.addItem(listOfItems);
    }

    @Then("^User verified zero tax for only SFO-YTO order in the checkout$")
    public void verifyZeroTaxForOnlySFOYTOOrderInTheCheckout() {
        ytoPage.goesReviewCart();
        cartPage.goesCheckOut();
        Assert.assertTrue(cartPage.isTaxZero(), "Taxes are NOT zero");
    }

    @Then("^User verified non-zero tax for only SFO-YTO order in the checkout$")
    public void verifyNonZeroTaxForOnlySFOYTOOrderInTheCheckout() {
        ytoPage.goesReviewCart();
        cartPage.goesCheckOut();
        Assert.assertFalse(cartPage.isTaxZero(), "Taxes are zero");
    }

    @When("^User navigated to Payment$")
    public void userNavigatedToPayment() {
        ytoPage.goesReviewCart();
        cartPage.goesCheckOut();
        cartPage.continueCheckout();
    }

    @When("^User added new CreditCard to payment method$")
    public void userAddedNewCreditCardToPaymentMethod() {
        checkOutPage.enterNewCard();
        checkOutPage.goesToPayment();
    }

    @Then("^User verified 'Thank you' message and order receipt reference number are displayed$")
    public void verifyThankYouMessageAndOrderReceiptReferenceNumberAreDisplayed() {
        Assert.assertTrue(orderCnfPage.isThankUMsgDisplayed());
        Assert.assertTrue(orderCnfPage.isOrderReceiptReferenceNumberDisplayed());

    }



}
