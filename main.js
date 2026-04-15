// Create a theme that enables hats for all "start" blocks
const hatTheme = Blockly.Theme.defineTheme('hat_theme', {
    'base': Blockly.Themes.Classic,
    'startHats': true // This enables the rounded top for blocks with no top notch
});

const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    renderer: 'zelos', 
    theme: hatTheme, // Apply the theme here
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
