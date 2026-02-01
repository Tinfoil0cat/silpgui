Blockly.Blocks['scratch_hat'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when green flag clicked");
    this.setNextStatement(true, null);
    // Explicitly setting previous to null helps the renderer identify it as a top-level block
    this.setPreviousStatement(false); 
    this.setColour(60);
  }
};
