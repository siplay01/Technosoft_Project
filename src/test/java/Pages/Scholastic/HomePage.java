package Pages.Scholastic;

import DriverWrapper.Web;
import Pages.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;


public class HomePage extends BasePage {

    By signInHeader = By.xpath("//a[contains(text(),'Sign In') and contains(@class,'signin pureguest')]");
    By signInEmail = By.id("dwfrm_login_username");
    By signInPassword = By.id("dwfrm_login_password");
    By signInButton = By.id("loginModalBtn");
    By signInError = By.xpath("//div[@id='errorAccountLocked1']//div[contains(text(),'Please try again.') and @class='content-asset ']");
    By nextBtn = By.xpath("//button[@type='submit' and contains(., 'NEXT')]");
    By createAccountBtn = By.xpath("//a[@class='create-account-trigger']");
    By nextBtnOnFirstPg = By.xpath("//a[contains(text(), 'Next')]");
    By accountTeacherChoice = By.xpath("//label[@for='acccountTeacther']");

    By dropDown = By.className("custom-select");
    By titleMr = By.xpath("//li[@data-label='mr.']");
    By titleMs = By.xpath("//li[@data-label='ms.']");
    By titleMrs = By.xpath("//li[@data-label='mrs.']");
    By titleOther = By.xpath("//li[@data-label='Other.']");
    By firstNameFld = By.id("dwfrm_profile_customer_firstname");
    By lastNameFld = By.id("dwfrm_profile_customer_lastname");
    By emailFld = By.name("dwfrm_profile_customer_email");
    By passwordFld = By.id("dwfrm_profile_login_password");
    By checkBox = By.id("dwfrm_registration_termsofuseteacher");

    By schoolZip = By.id("dwfrm_myschool_schoolzip");
    By searchSchoolBtn = By.id("button-search");
    By searchSchoolFld = By.id("dwfrm_searchschool_schoolvalue");
    By selectSchoolName = By.xpath("//li[@class='ui-menu-item']");

    By selectStateDrpDwn = By.xpath("//div[@class='custom-select']");
    By cityElem = By.xpath("//li[@class='custom-option select-option']/*[contains(text(), ' New York')]");

    By selectState = By.xpath("//option[@label='New York']");
    By cityField = By.name("dwfrm_myschool_schoolcity");
    By selectCity = By.xpath("//li[@class='ui-menu-item']");

    By schoolName = By.className("school-name");
    By schoolAddress = By.className("school-add");
    By schoolState = By.className("school-state");

    By roleByGrade = By.xpath("//li[@data-label='teacher (by grade)']");
    By gradeDrpDwn = By.xpath("(//div[@class ='custom-select'])[4]");
    By grade1stGrade = By.xpath("//li[@data-label='1st grade']");
    By numOfStudentsFld = By.id("dwfrm_myrole_students");

    By readingLvlGuided = By.xpath("//li[@data-label='guided reading level (grl)']");
    By continueToSiteBtn = By.xpath("//button[@type='submit' and contains(text(), 'CONTINUE TO SITE')]");

    By closeNtf = By.xpath("//span[@class='notification-close']");
    By classCode = By.xpath("(//div[@class='value'])[1]");

    By myAccountBtn = By.xpath("//span[@class='hide-mobile user-account-name']");
    By profileBtn = By.xpath("//a[@title='Profile']");

    By searchFld = By.xpath("//input[@data-placeholder='Search by Title, Author, Item # or Keyword']");


    public void clickCreateAccount() {  clickThis(createAccountBtn); }

    public void chooseTeacherOption() { clickThis(accountTeacherChoice); }

    public void clickNextOnCreateAcc() { clickThis(nextBtnOnFirstPg); }

    public void selectTitle(String title) {
        clickThis(dropDown);
        switch (title) {
            case "Mr." -> clickThis(titleMr);
            case "Ms." -> clickThis(titleMs);
            case "Mrs." -> clickThis(titleMrs);
            case "Other" -> clickThis(titleOther);
        }
    }

    public void enterFirstName(String firstName) { type(firstNameFld, firstName); }

    public void enterLastName(String lastName) { type(lastNameFld,lastName); }

    public void enterEmail(String userEmail) { type(emailFld,userEmail); }

    public void enterPass(String userPassword) { type(passwordFld, userPassword);}

    public void clickCheckbox() { Web.getDriver().findElement(checkBox).sendKeys(Keys.SPACE); }

    public void clickNext() { clickThis(nextBtn); }

    public void enterZip(String userZip) { type(schoolZip, userZip); }

    public void clickSearchSchool() { clickThis(searchSchoolBtn); }

    public void enterSchoolName(String schoolName) { type(searchSchoolFld, schoolName.substring(0,(schoolName.length()-1))); }

    public void selectSchool(String schoolName) {
        clickThis(searchSchoolFld);
        clickThis(selectSchoolName);
    }

    public void selectRole(String userRole) {
        clickThis(dropDown);
        clickThis(roleByGrade);
    }

    public void selectGrade(String userGrade) {
        clickThis(gradeDrpDwn);
        clickThis(grade1stGrade);
    }

    public void enterNumStudents(String numStudents) {
        type(numOfStudentsFld, numStudents);
    }

    public void selectPreferredSystem() {
        clickThis(dropDown);
        clickThis(readingLvlGuided);
        clickThis(continueToSiteBtn);
        closeOfferNtf();
    }

    public void closeOfferNtf() {
        if(isElementDisplayed(closeNtf)) clickThis(closeNtf);
    }

    public String getClassCode() {
        return getTextValue(classCode);
    }

    public void clickMyAccount() {
        clickThis(myAccountBtn);
        clickThis(profileBtn);
    }

    public String getSchoolAddress() {
        String schAdd = getTextValue(schoolAddress);
        String schSt = getTextValue(schoolState);
        return  schAdd + " " + schSt;
    }

    public void selectStateAndCity(String userState, String userCity) {
        waitForElement(selectStateDrpDwn);
        setCursor(selectStateDrpDwn);
        waitForElement(selectStateDrpDwn);
        clickThis(selectStateDrpDwn);
        String temp = "//li[@class='custom-option select-option']/*[contains(text(), ' " + userState + "')]";
        WebElement cityElemt = Web.getDriver().findElement(By.xpath(temp));
        scrollIntoView(cityElemt);
        clickThis(cityElem);
        waitForElement(cityField);
        clickThis(cityField);
        type(cityField, userCity.substring(0, (userCity.length()-1)));
        waitForElement(selectCity);
        clickThis(selectCity);
    }

    public void clickSignInFromHeader() { clickThis(signInHeader); }

    public void enterSignInEmail(String email) { type(signInEmail, email); }

    public void enterSignInPassword(String pass) { type(signInPassword, pass); }

    public void clickSignInButton() {  clickThis(signInButton); }

    public boolean isSignInErrorDisplayed() { return isElementDisplayed(signInError); }

    public void loggIn(String userLogin, String userPassword) {
        clickThis(signInHeader);
        type(signInEmail, userLogin);
        type(signInPassword, userPassword);
        clickThis(signInButton);
        closeOfferNtf();
    }

    public void searchFor(String item) {
        type(searchFld, item);
        pressEnter(searchFld);
    }

}
