package attributesPage;

import org.openqa.selenium.By;


public class SearchCepAttribute   {
	 
	protected static final By validateMessageCepInvalid = By.id("mensagem-resultado");
 	protected static final By address = By.id("endereco");
	protected static final By validateMessageCepValid = By.xpath("//td[@data-th='Logradouro/Nome']");
	protected static final By buttonBackToMenu = By.xpath("//*[text()='Voltar ao menu']");
	protected static final By titleScreen = By.cssSelector("#titulo_tela");
 	protected static final By menu = By.xpath("//section[@id='menu']/a[1]");
	 
}
