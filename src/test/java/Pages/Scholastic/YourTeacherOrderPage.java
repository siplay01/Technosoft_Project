package Pages.Scholastic;

import Pages.BasePage;
import org.openqa.selenium.By;

public class YourTeacherOrderPage extends BasePage {

    By qtyCheckBox = By.xpath("(//td[@class=' item-qty'])[3]//input");
    By qtyCheckBox2 = By.xpath("(//td[@class=' item-qty'])[5]");
    By warningMsgElem = By.xpath("//div[@class='info-modal-content']");
    By arrowMsg = By.xpath("//div[@class='arrow']");
    By closeMsg = By.xpath("//i[contains(@class, 'close')]");
    By enterItemFld = By.id("item-number");
    By addBtn = By.id("btn-add");
    By reviewCartBtn = By.xpath("//button[contains(text(), 'Review Cart')]");


    public void clickedOnPriceQTYBox() {
        clickThis(qtyCheckBox);
    }

    public boolean isWarningMsgVisible(String warningMsg) {
        if (isElementDisplayed(warningMsgElem)) {
            return warningMsg.contains(getTextValue(warningMsgElem));
        } else return false;
    }

    public boolean isWarningMsgNOTVisible() {
        type(qtyCheckBox, "9");
        clickThis(qtyCheckBox2);
        return !isElementDisplayed(warningMsgElem);
    }

    public void locationOf() {
        locationOfElement(warningMsgElem);
        locationOfElement(qtyCheckBox);
        locationOfElement(qtyCheckBox2);
        locationOfElement(arrowMsg);
    }


    public void addItem(String[] listOfItems) {
        for (String s : listOfItems) {
            if (isElementExist(By.xpath("//li[@class='ui-menu-item']"))) sleepFor(1);
            type(enterItemFld, s);
            clickThis(addBtn);
        }
    }

    public void goesReviewCart() {
        clickThis(reviewCartBtn);
    }
}
