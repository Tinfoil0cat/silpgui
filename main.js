const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    renderer: 'zelos',
    // THIS is the part that actually draws the "Hat" cap
    rendererOverrides: {
        'ADD_HAT': true
    },
    zoom: {
        controls: true,
        wheel: true
    }
});

// Resizer
window.addEventListener('resize', () => {
    Blockly.svgResize(workspace);
}, false);
