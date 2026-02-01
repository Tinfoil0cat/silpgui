Blockly.Blocks['scratch_event_hat'] = {
  init: function() {
    // 1. The Text and Icon
    this.appendDummyInput()
        .appendField("when")
        .appendField(new Blockly.FieldImage(
            "https://upload.wikimedia.org/wikipedia/commons/2/25/Green_Flag_Icon.svg", 
            24, 
            24, 
            "flag"
        ))
        .appendField("clicked");

    // 2. Connections
    this.setNextStatement(true, null); // Notch at bottom
    // NO previous statement allowed for hat blocks

    // 3. The Visuals
    this.setColour('#FFBF00'); // Exact Scratch "Events" color
    
    // 4. THE MAGIC COMMAND
    // This explicitly tells the Zelos renderer: "Draw the curved cap here"
    this.hat = 'cap'; 
  }
};

Blockly.Blocks['scratch_move_steps'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move")
        .appendField(new Blockly.FieldNumber(10), "STEPS")
        .appendField("steps");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4C97FF'); // Exact Scratch "Motion" color
  }
};
