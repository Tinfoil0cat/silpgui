Blockly.Blocks['when_flag_clicked'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("when")
      .appendField(new Blockly.FieldImage(
        "https://scratch.mit.edu/static/assets/38aa57841cf7733951ec650117a3a992.svg",
        24, 
        24, 
        "*" // Alt text (required for clean console)
      ))
      .appendField("clicked");

    // "Hat" logic: No previous statement, yes next statement
    this.setPreviousStatement(false); 
    this.setNextStatement(true, null);

    this.setColour("#FFBF00");
    
    // REMOVED: this.setStyle('hat_block'); 
    // Reason: Unless you define a custom theme object with this name, 
    // this line overrides your setColour and makes the block black/gray.
  }
};
