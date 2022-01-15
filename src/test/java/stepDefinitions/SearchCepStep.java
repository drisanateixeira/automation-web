package stepDefinitions;

import pageObjects.SearchCepPage;
import utils.Browser;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
public class SearchCepStep extends Browser{

    SearchCepPage search = new SearchCepPage(driver);
	 
	@Given("I access the site {string}")
	public void accessURL(String url) {
		search.getURL(url);
	}
	
	@When("click in the search field and set CEP {string}")
	public void inputCEP(String value) {
		search.inputDataCep(value);
	}
	
	@When("go back to the menu and validate the title {string}")
	public void backToMenu(String title) {
		search.backToMenu(title);
	}
	 
	@When("validate that the CEP is {string} and validate the message {string}")
	public void validateMenssage(String key, String message) {
		search.validate( key, message);
	}	 
}
