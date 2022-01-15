#Author: Adara Drisana Teixeira dos Santos

@test
Feature: Search CEP and validate

  Background: Search CEP
    Given I access the site "https://buscacepinter.correios.com.br/app/endereco/index.php"

  @severity=critical
  Scenario: Search and validate CEP
    When click in the search field and set CEP "80700000"
    And validate that the CEP is "invalid" and validate the message "Não há dados a serem exibidos"
    And go back to the menu and validate the title "Busca CEP"
    Then click in the search field and set CEP "81280-140"
    And validate that the CEP is "valid" and validate the message "Avenida Juscelino Kubitschek de Oliveira - até 2199 - lado ímpar"
    