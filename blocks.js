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
Blockly.Blocks['flagtap'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when green flag tapped");
    
    // In Zelos, having a Next but NO Previous 
    // automatically renders the "Hat" shape.
    this.setNextStatement(true, null); 
    
    this.setColour(60); // Scratch-style yellow/gold
    this.setTooltip("Starts the script.");
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
