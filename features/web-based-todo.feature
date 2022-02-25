Feature: Adding a TODO item
  Scenario: Add a TODO item
    Given Empty ToDo list
    When I write "buy some milk" to <text box> and click to <add button>
    Then I should see "buy some milk" item in ToDo list
