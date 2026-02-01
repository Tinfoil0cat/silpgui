/**
 * Initialize the Blockly workspace
 */
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    renderer: 'zelos', // The magic string for the Scratch-like UI
    grid: {
        spacing: 25,
        length: 3,
        colour: '#ccc',
        snap: true
    },
    zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2
    },
    trashcan: true
});

/**
 * Handle window resizing to keep the workspace full-screen
 */
window.addEventListener('resize', () => {
    Blockly.svgResize(workspace);
}, false);
