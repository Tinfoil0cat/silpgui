const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    renderer: 'zelos', 
    rendererOverrides: {
        // IMPORTANT: This tells Zelos "If a block has no top connection, draw a Hat"
        startHats: true 
    },
    grid: {
        spacing: 25,
        length: 3,
        colour: '#ccc',
        snap: true
    },
    zoom: {
        controls: true,
        wheel: true,
        startScale: 0.9
    }
});

// Auto-resize
window.addEventListener('resize', () => {
    Blockly.svgResize(workspace);
}, false);
