package attributesPage;

import org.openqa.selenium.By;

public class StoreAttribute {
 
	protected static final By search = By.id("search_query_top");
	protected static final By buttonSearch = By.xpath("//button[@name='submit_search']");
	protected static final By assertSearchAlert = By.xpath("//*[@id='center_column']//*[@class='alert alert-warning']");
	protected static final By assertItem = By.xpath("//*[@itemprop='name']");
	
	}
