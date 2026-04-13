Blockly.Blocks['movesteps'] = {
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
