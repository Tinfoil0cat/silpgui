const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    renderer: 'zelos',
    theme: 'zelos',
    rendererOverrides: {
        // This is the specific property Zelos looks for to render the "Cap"
        'ADD_HAT': true
    }
});

window.addEventListener('resize', () => {
    Blockly.svgResize(workspace);
}, false);
