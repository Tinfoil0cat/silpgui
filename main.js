const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    renderer: 'zelos', 
    rendererOverrides: {
        // THIS is what forces the cap on blocks with no previous connection
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

window.addEventListener('resize', () => {
    Blockly.svgResize(workspace);
}, false);
