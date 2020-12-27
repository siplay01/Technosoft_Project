package Pages.Scholastic;

import DriverWrapper.Web;
import Pages.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;

public class SearchPage extends BasePage {

    By quickViewBtn = By.xpath("(//a[@class='quickview'])[1]");
    By recommendedBtn = By.xpath("(//span[@class='icon-button-icon'])[1]");
    By productImg = By.xpath("(//div[@class='product-tile'])[1]");
    By recommendToStudsChekBox = By.xpath("//input[@class='wishlist-dialog-checkbox recommended']");
    By closeQW = By.xpath("//span[@class='ui-button-icon ui-icon ui-icon-closethick']");
    By myLists = By.xpath("//span[contains(text(), 'My Lists')]");
    By recommendToStudsList = By.xpath("//li[@class='recommend']");
    By bookNameLocator = By.xpath("//a[@class='product-name-qv']");


    public String addToRecommendations() {
        setCursor(productImg);
        clickThis(quickViewBtn);
        String bookName = getTextValue(bookNameLocator);
        clickThis(recommendedBtn);
        Web.getDriver().findElement(recommendToStudsChekBox).sendKeys(Keys.SPACE);
        clickThis(closeQW);
        sleepFor(2);
        clickThis(myLists);
        clickThis(recommendToStudsList);
        return bookName;
    }
}
