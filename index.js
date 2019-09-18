/**
 * index.js
 * 
 * What it Does:
 *   It also loads the .internals/config.json which is a bundle of current customization
 *   to the json files in the .koji directory
 * 
 * How to Use:
 *   Make sure this file has a script tag in index.html
 *   eg. <script src="./index.js"></script>
 */

// import and load koji configs
import Koji from '@withkoji/vcc'

// set app name
const config = Koji.config;

// listen for config change events
Koji.on('change', (scope, key, value) => {

    // update configs and re-render
    config[scope][key] = value
    render();
})

// render app
const render = () => {
    document.body.innerHTML = `
        <h1>
            ${config.settings.name}
        </h1>
    `
};

render();
