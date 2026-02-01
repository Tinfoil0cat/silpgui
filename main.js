/**
 * Configure and Inject the Workspace
 */
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    renderer: 'zelos', // Applies the rounded Scratch-like look
    theme: 'zelos',    // Applies the high-contrast Zelos colors
    grid: {
        spacing: 25,
        length: 3,
        colour: '#ddd',
        snap: true
    },
    zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0
    },
    trashcan: true
});

/**
 * Keep the workspace full-screen on window resize
 */
window.addEventListener('resize', () => {
    Blockly.svgResize(workspace);
}, false);
