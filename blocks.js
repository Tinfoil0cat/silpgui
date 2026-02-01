Blockly.Blocks['event_start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when clicked");
    
    // Top-level block: No previous statement allowed
    this.setPreviousStatement(false);
    
    // Bottom connection allowed
    this.setNextStatement(true, null);
    
    this.setColour('#FFBF00');
  }
};

Blockly.Blocks['action_move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move steps");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4C97FF');
  }
};
