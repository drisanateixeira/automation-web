package pageObjects;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import static utils.Action.*;
import static utils.Asserts.*;
import attributesPage.SearchCepAttribute;

public class SearchCepPage extends SearchCepAttribute {

	private WebDriver driver;

	public SearchCepPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public void getURL(String url) {
		getBrowser(driver, url);
	}
 
	public void inputDataCep(String value) {
 		validateElement(driver, address, 3);
		click(driver, address, 0);
		setTextAndEnter(driver, address, value, 0);
	}
	
	public void validate(String key, String message) {
		switch (key) {
		case "invalid":
			assertEqualsGetText(driver, validateMessageCepInvalid, 3, message);
			break;

		case "valid":
			assertEqualsGetText(driver, validateMessageCepValid, 3, message);
			break;
		}
	}
	
	public void backToMenu(String title) {
		click(driver, menu, 2);
		click(driver, buttonBackToMenu, 2);
		 assertEqualsGetText(driver, titleScreen, 0, title);
	}
 
}
