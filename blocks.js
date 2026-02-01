// 1. The Hat Block (Event)
Blockly.Blocks['event_when_run'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when program starts");
    this.setNextStatement(true, null); // Has a notch below
    this.setColour(60);                // Scratch gold
    this.setTooltip("The starting point.");
  }
};

// 2. A Standard Action Block (Statement)
Blockly.Blocks['my_custom_action'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move")
        .appendField(new Blockly.FieldNumber(10), "STEPS")
        .appendField("steps");
    this.setPreviousStatement(true, null); // Notch above
    this.setNextStatement(true, null);     // Notch below
    this.setColour(230);
  }
};
