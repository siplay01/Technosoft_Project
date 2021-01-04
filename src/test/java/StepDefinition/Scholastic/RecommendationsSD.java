package StepDefinition.Scholastic;

import Pages.Scholastic.HomePage;
import Pages.Scholastic.MyAccountPage;
import Pages.Scholastic.SearchPage;
import Pages.Scholastic.WishlistPage;
import cucumber.api.java.en.*;
import org.testng.Assert;

public class RecommendationsSD {

    HomePage homePage = new HomePage();
    MyAccountPage myAccPage = new MyAccountPage();
    SearchPage searchPage = new SearchPage();
    WishlistPage wishlistPage = new WishlistPage();

    String selectedBook = "";

    @When("^User logged in with valid (.+) and (.+)$")
    public void userLoggedInWithValidLoginAndPassword(String userLogin, String userPassword) {
        homePage.loggIn(userLogin, userPassword);
    }

    @When("^User searched for '(.+)'$")
    public void userSearchedForBookName(String item) {
        homePage.searchFor(item);
    }

    @When("^User added Book to ‘Recommendations to Students’ from 'Quick Look'$")
    public void userAddedBookToRecommendationsToStudentsFromQuickLook() {
        selectedBook = searchPage.addToRecommendations();
    }

    @Then("^User verified that the item is added in Recommendations to Students Lists under My Lists$")
    public void verifyThatTheItemIsAddedInRecommendationsToStudentsListsUnderMyLists() {
    Assert.assertTrue(wishlistPage.isElemPresent(selectedBook), "Item NOT added in Recommendations");
    }


}
