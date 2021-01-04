package Pages.Scholastic;

import DriverWrapper.Web;
import Pages.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

public class StudentFlyerOrdersPage extends BasePage {

    By studentNameField = By.id("student-name");
    By itemNumberField = By.id("item-number");
    By addBtn = By.id("btn-add");
    By errorMsg = By.xpath("//span[contains(text(), 'Please enter a valid item number.')]");
    By qtyFld = By.xpath("(//input[@class='input-qty numericenteronly'])[1]");
    By studentNameLocator = By.xpath("//td[@class=' studentName']");
    By itemNumLocator = By.xpath("//td[@class=' itemNum details-control']/a");
    By quantityLocator = By.xpath("//td[@class=' item-qty']/input[@type='text']");
    By reviewCart = By.xpath("//button[contains(text(), 'Review Cart')]");

    String tempDataHolder = "";


    public void enterSfoSearchValues(String studentName, String itemNumber) {
        type(studentNameField, studentName);
        type(itemNumberField, itemNumber);
        clickThis(addBtn);
    }

    public boolean isErrorMsgDisplayed() {
        return Web.getDriver().findElement(errorMsg).isDisplayed();
    }


    public void enterItem(String itemNumber, String qty) {
        type(itemNumberField, itemNumber);
        clickThis(addBtn);
        type(qtyFld, qty);
    }

    public void enterStudentName(String studentName) {
        tempDataHolder = studentName;
        type(studentNameField, studentName);
    }

    public boolean isNameCorrect(String studentName) {
        boolean result = true;
        List<WebElement> listNames = findElementsUsingFluentWait(studentNameLocator);
        for (WebElement element : listNames) {
            if (!studentName.equals(element.getText()))
                result = false;
        }
        return result;
    }

    public boolean isItemNumCorrect(String[] listOfItems) {
        boolean result = true;
        List<WebElement> listItemNums = findElementsUsingFluentWait(itemNumLocator);
        int x = 0;
        for (int i = (listOfItems.length-1); i >= 0; i--) {
            if (!listOfItems[i].equals(listItemNums.get(x).getText())) {
                result = false;
                break;
            }
            x++;
        }
        return result;
    }

    public boolean isQtyCorrect(String[] listOfItems) {
        boolean result = true;
        List<WebElement> listItemNums = findElementsUsingFluentWait(quantityLocator);
        int x = 0;
        for (int i = (listOfItems.length-1); i >= 0; i--) {
            if (!listOfItems[i].equals(listItemNums.get(x).getAttribute("value"))) {
                result = false;
                break;
            }
            x++;
        }
        return result;
    }

    public void goesToCart() {
        clickThis(reviewCart);
    }

    public boolean isNamesCorrect(String[] listOfNames) {
        boolean result = true;
        List<WebElement> listItemNums = findElementsUsingFluentWait(studentNameLocator);
        int x = 0;
        for (int i = (listOfNames.length-1); i >= 0; i--) {
            if (!listOfNames[i].equals(listItemNums.get(x).getText())) {
                result = false;
                break;
            }
            x++;
        }
        return result;
    }
}
