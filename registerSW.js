if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/jsapi-cli-vitest/sw.js', { scope: '/jsapi-cli-vitest/' })})}