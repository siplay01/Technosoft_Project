package Pages.Scholastic;

import DriverWrapper.Web;
import Pages.BasePage;
import org.openqa.selenium.*;

public class WishlistPage extends BasePage {

    By bookNameLocator = By.xpath("//img[@title= 'Harry Potter and the Deathly Hallows']");

    public boolean isElemPresent(String selectedBook) {
        String temp = "//img[@title='" + selectedBook + "']";
        WebElement cityElemt = Web.getDriver().findElement(By.xpath(temp));
        return cityElemt.isDisplayed();
    }
}
