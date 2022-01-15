package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import static utils.Action.*;
import static utils.Asserts.*;
import attributesPage.StoreAttribute;
 
public class StorePage extends StoreAttribute{
	private WebDriver driver;

	 
	public StorePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
 
	public void search(String item) {
		click(driver, search, 2);
		setText(driver, search, item, 1);
		click(driver,buttonSearch , 1);
	}
	
	public void validateStockNotExist(String expected) {
		assertEqualsGetText(driver, assertSearchAlert, 5, expected);
	}
	
	public void validateStockExist(String expected) {
		assertEqualsGetText(driver, assertItem, 5, expected);
	}
}
