package Pages.Scholastic;

import DriverWrapper.Web;
import Pages.BasePage;
import org.openqa.selenium.By;

public class StudentFlyerOrdersPage extends BasePage {

    By studentNameField = By.id("student-name");
    By itemNumberField = By.id("item-number");
    By addBtn = By.id("btn-add");
    By errorMsg = By.xpath("//span[contains(text(), 'Please enter a valid item number.')]");

    public void enterSfoSearchValues(String studentName, String itemNumber) {
        type(studentNameField, studentName);
        type(itemNumberField, itemNumber);
        clickThis(addBtn);
    }

    public boolean isErrorMsgDisplayed() {
        return Web.getDriver().findElement(errorMsg).isDisplayed();
    }


}
