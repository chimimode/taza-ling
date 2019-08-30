module.exports = {
    //"parser": "babel-eslint",
    //"extends": "airbnb-base",
    "extends": "airbnb-base",
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "plugins": [ "import", "html" ],
    "rules": {
        // 0 "off", 1 "warn" 2 "error"
        "no-console": "warn",
        "quotes": [ "error", "single" ],
        "no-underscore-dangle": "warn",
        "no-plusplus": [ "error", { "allowForLoopAfterthoughts": true }],
        "comma-dangle": [ "error", "never"],
    }
};
