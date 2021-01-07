package Pages.Scholastic;

import DriverWrapper.Web;
import Pages.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

public class MyAccountPage extends BasePage {

    By classCode = By.xpath("//div[@class='classcode']/span");
    By name = By.xpath("(//div[@class='text-blk']/span)[1]");
    By school = By.xpath("(//div[@class='text-blk']/span)[3]");
    By address = By.xpath("(//div[@class='text-blk']/span)[4]");
    By state = By.xpath("(//div[@class='text-blk']/span)[5]");
    By zip = By.xpath("(//div[@class='text-blk']/span)[6]");
    By addCard = By.xpath("//a[@class='custom-tooltip tooltipstered']");
    By cardNumFld = By.xpath("//input[contains(@id,'newcreditcard_number')]");
    By expMonth = By.xpath("//select[contains(@id,'newcreditcard_month')]");
    By month = By.xpath("//li[@data-label='04']");
    By expYear = By.xpath("//select[contains(@id,'newcreditcard_year')]");
    By year = By.xpath("//li[@data-label='2023']");
    By cvnCode = By.xpath("//input[contains(@id,'newcreditcard_cvn')]");
    By firstNameFld = By.xpath("//input[contains(@id,'address_firstname')]");
    By lastNameFld = By.xpath("//input[contains(@id,'address_lastname')]");
    By addressFld = By.xpath("//input[contains(@id,'address_address1')]");
    By zipFld = By.xpath("//input[contains(@id,'address_postal')]");
    By phoneFld = By.xpath("//input[contains(@id,'address_phone')]");
    By saveBtn = By.id("applyBtn");
    By creditCardList = By.xpath("//div[@class='cards-section']//div[contains(@class, 'cardname')]");
    By errorMsg = By.xpath("//div[contains(text(), 'You can only store three credit cards') and @class='tooltipster-body']");
    By enterOrdersElm = By.xpath("(//a[@id='enter-orders'])[2]");
    By studentFlyerOrdersElm = By.xpath("(//li[@id='student-flyer-orders'])[2]");
    By yourTeacherOrdersElm = By.xpath("(//li[@id='your-teacher-order'])[2]");
    By byItem = By.xpath("(//a[contains(text(), 'By Item#')])[1]");


    public String getClassCode() {
        return getTextValue(classCode);
    }

    public String getTeacherName() {
        return getTextValue(name);
    }

    public String getAddress() {
        String addr = getTextValue(address);
        String st = getTextValue(state);
        String zipCode = getTextValue(zip);
        return addr + " " + st + " " + zipCode;
    }

    public boolean isErrorMsgDisplayed() {
        clickThis(addCard);
        return Web.getDriver().findElement(errorMsg).isDisplayed();
    }

    public void addCreditCard() {
        List<WebElement> creditCardsList = Web.getDriver().findElements(creditCardList);
        if (creditCardsList.size() == 3) {
            return;
        } else {
            type(cardNumFld, "4111111111111111");
            clickThis(expMonth);
            clickThis(month);
            clickThis(expYear);
            clickThis(year);
            type(cvnCode, "111");
            type(firstNameFld, "Test");
            type(lastNameFld, "Test");
            type(addressFld, "123 Test");
            type(zipFld, "10036");
            type(phoneFld, "9299999999");
            clickThis(saveBtn);
        }
    }

    public void goesToStudentFlyerOrders() {
        setCursor(enterOrdersElm);
        clickThis(studentFlyerOrdersElm);
    }

    public void goesToYourTeacherOrders() {
        setCursor(enterOrdersElm);
        clickThis(yourTeacherOrdersElm);
    }

    public void goesByItem() {
        clickThis(byItem);
    }
}
