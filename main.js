/**
 * Initialize the Blockly workspace
 */
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    renderer: 'zelos',
    theme: 'zelos', // Using the Zelos theme helps with colors
    // This setting ensures blocks with no previous statement look like hats
    horizontalLayout: false,
    theme: {
        'componentStyles': {
            'workspaceBackgroundColour': '#F9F9F9'
        },
        'blockStyles': {
            'hat_blocks': {
                'hat': 'cap' // Forces the 'cap' look
            }
        }
    }
});
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
