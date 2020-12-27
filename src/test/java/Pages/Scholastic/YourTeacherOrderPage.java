package Pages.Scholastic;

import DriverWrapper.Web;
import Pages.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

public class YourTeacherOrderPage extends BasePage {

    By qtyCheckBox = By.xpath("(//td[@class=' item-qty'])[3]//input");
    By qtyCheckBox2 = By.xpath("(//td[@class=' item-qty'])[5]");
    By warningMsgElem = By.xpath("//div[@class='info-modal-content']");
    By arrowMsg = By.xpath("//div[@class='arrow']");
    By closeMsg = By.xpath("//i[contains(@class, 'close')]");
    public void clickedOnPriceQTYBox() {
        clickThis(qtyCheckBox);
    }

    public boolean isWarningMsgVisible(String warningMsg) {
        if(isElementDisplayed(warningMsgElem)) {
            return warningMsg.contains(getTextValue(warningMsgElem));
        } else return false;
    }

    public boolean isWarningMsgNOTVisible() {
        type(qtyCheckBox,"9");
        clickThis(qtyCheckBox2);
        sleepFor(2);
        return !isElementDisplayed(warningMsgElem);
    }


    public void locationOf1() {
        locationOfElement(warningMsgElem);
        locationOfElement(qtyCheckBox);
        locationOfElement(qtyCheckBox2);
        locationOfElement(arrowMsg);
    }
}
