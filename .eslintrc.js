module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "airbnb-base",
    "plugins": [ "import", "html" ],
    "rules": {
        // 0 "off", 1 "warn" 2 "error"
        "no-console": "warn",
        "quotes": [ "error", "single" ],
        "no-underscore-dangle": "warn",
        "no-plusplus": [ "error", { "allowForLoopAfterthoughts": true }],
        "comma-dangle": [ "error", "never"]
    }
};
