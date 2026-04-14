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

Blockly.Blocks['movex'] = {
init: function() {
        this.appendDummyInput()
            .appendField("move x by")
            .appendField(new Blockly.FieldNumber(10), "STEPS");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#4C97FF");
  }
};

Blockly.Blocks['movey'] = {
init: function() {
        this.appendDummyInput()
            .appendField("move y by")
            .appendField(new Blockly.FieldNumber(10), "x");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#4C97FF");
  }
};

Blockly.Blocks['goto'] = {
init: function() {
        this.appendDummyInput()
            .appendField("move to x:")
            .appendField(new Blockly.FieldNumber(10), "x")
            .appendField("y:")
            .appendField(new Blockly.FieldNumber(10), "Y");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#4C97FF");
  }
};

Blockly.Blocks['mouse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mouse on?");
    
    // 1. Remove setPreviousStatement and setNextStatement
    // 2. Add an output set to 'Boolean'
    this.setOutput(true, "Boolean");
    
    this.setColour("#62f5d3");
  }
};

Blockly.Blocks['key'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("if")
        .appendField(new Blockly.FieldDropdown([
          ["any", "any"], 
          ["space", "SPACE"], 
          ["up arrow", "UP"], 
          ["down arrow", "DOWN"]
        ]), "KEY")
        .appendField("key pressed");
    
    // 1. Remove setPreviousStatement and setNextStatement
    // 2. Add an output set to 'Boolean'
    this.setOutput(true, "Boolean");
    
    this.setColour("#62f5d3");
  }
};
