package stepDefinitions;

import cucumber.api.java.en.When;
import pageObjects.StorePage;
import utils.Browser;
import cucumber.api.java.en.Then;

public class StoreStep extends Browser {
	StorePage store = new StorePage(driver);

 
	@When("I seach the item {string}")
	public void searchItem(String item) {
		store.search(item);
	}

	@Then("validate the message {string}")
	public void validateStockNotExist(String expected) {
		store.validateStockNotExist(expected);
	}

	@Then("validate that it exists in stock {string}")
	public void validateStockExist(String expected) {
		store.validateStockExist(expected);
	}

}
