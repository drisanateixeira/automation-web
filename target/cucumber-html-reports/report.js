$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/searchCeep.feature");
formatter.feature({
  "name": "Search CEP and validate",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.background({
  "name": "Search CEP",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the site \"https://buscacepinter.correios.com.br/app/endereco/index.php\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchCepStep.accessURL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search and validate CEP",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@severity\u003dcritical"
    }
  ]
});
formatter.step({
  "name": "click in the search field and set CEP \"80700000\"",
  "keyword": "When "
});
formatter.match({
  "location": "SearchCepStep.inputCEP(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate that the CEP is \"invalid\" and validate the message \"Não há dados a serem exibidos\"",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCepStep.validateMenssage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "go back to the menu and validate the title \"Busca CEP\"",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCepStep.backToMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click in the search field and set CEP \"81280-140\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCepStep.inputCEP(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate that the CEP is \"valid\" and validate the message \"Avenida Juscelino Kubitschek de Oliveira - até 2199 - lado ímpar\"",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCepStep.validateMenssage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/store.feature");
formatter.feature({
  "name": "Store",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.scenario({
  "name": "Search item and validate it does not exist",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the site \"http://automationpractice.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchCepStep.accessURL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I seach the item \"camiseta\"",
  "keyword": "When "
});
formatter.match({
  "location": "StoreStep.searchItem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the message \"No results were found for your search camiseta\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StoreStep.validateStockNotExist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search item and validate it is in stock",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the site \"http://automationpractice.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchCepStep.accessURL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I seach the item \"blouse\"",
  "keyword": "When "
});
formatter.match({
  "location": "StoreStep.searchItem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate that it exists in stock \"Blouse\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StoreStep.validateStockExist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});