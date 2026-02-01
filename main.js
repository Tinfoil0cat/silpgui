const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    renderer: 'zelos', // The Scratch 3.0 renderer
    grid: {
        spacing: 25,
        length: 3,
        colour: '#ccc',
        snap: true
    },
    zoom: {
        controls: true,
        wheel: true,
        startScale: 0.8 // Scratch blocks are big; 0.8 feels more native
    }
});

// Resizing logic
window.addEventListener('resize', () => {
    Blockly.svgResize(workspace);
}, false);
