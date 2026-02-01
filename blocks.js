// Define a custom "Statement" block (has notches)
Blockly.Blocks['my_custom_action'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("perform action")
        .appendField(new Blockly.FieldTextInput("default"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Does something cool.");
  }
};

// Define a custom "Reporter" block (rounded in Zelos)
Blockly.Blocks['my_custom_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get sensor value");
    this.setOutput(true, "Number");
    this.setColour(160);
  }
};
