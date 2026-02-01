// The Hat Block
Blockly.Blocks['my_hat_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when clicked");
    this.setNextStatement(true, null); // Only a bottom notch
    this.setColour(60);
  }
};

// A normal block to snap under it
Blockly.Blocks['my_action_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("do something cool");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  }
};
