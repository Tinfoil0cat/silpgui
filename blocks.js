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
            .appendField("go to x:")
            .appendField(new Blockly.FieldNumber(0), "x")
            .appendField("y:")
            .appendField(new Blockly.FieldNumber(0), "Y");
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
    
    this.setColour("#28bd52");
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
    
    this.setColour("#28bd52");
  }
};

Blockly.Blocks['if'] = {
  init: function() {
    this.appendValueInput('CONDITION')
        .setCheck('Boolean')
        .appendField('if');
    this.appendStatementInput('DO')
        .appendField('');
    
    // Step 2: Apply the Hex Color
    this.setColour('#ffb300'); // Use any hex code here
    
    this.setTooltip('Custom if block');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['start'] = {
init: function() {
        this.appendDummyInput()
            .appendField("when")
            // This loads the actual Scratch green flag SVG
            .appendField(new Blockly.FieldImage("https://silp-gui.vercel.app/y_start2.png", 20, 20))
            .appendField("clicked");
        this.setNextStatement(true, null);
        this.setColour("#FFBF00"); // Scratch Events Yellow
  }
};

Blockly.Blocks['movey'] = {
init: function() {
        this.appendDummyInput()
            .appendField("move y by")
            .appendField(new Blockly.FieldNumber(10), "STEPS");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#4C97FF");
  }
};

Blockly.Blocks['tap'] = {
init: function() {
        this.appendDummyInput()
            .appendField("when")
            // This loads the actual Scratch green flag SVG
            .appendField("this char")
            .appendField("clicked");
        this.setNextStatement(true, null);
        this.setColour("#FFBF00"); // Scratch Events Yellow
  }
};

Blockly.Blocks['nextcos'] = {
init: function() {
        this.appendDummyInput()
            .appendField("next")
            .appendField("costume");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#9966ff");
  }
};

Blockly.Blocks['forever_loop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("forever");
    this.appendStatementInput("DO")
        .appendField("");
    this.setPreviousStatement(true, null);
    this.setNextStatement(false, null);
    // Use the hex string here
    this.setColour("#ffb300"); 
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

