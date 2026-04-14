Blockly.Blocks['movesteps'] = {
init: function() {
        this.appendDummyInput()
            .appendField("move")
            .appendField(new Blockly.FieldNumber(10), "STEPS")
            .appendField("steps");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#4C97FF");
  }
};
