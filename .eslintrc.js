module.exports = {
    "extends": "standard",
    "plugins": [
        "standard",
        "promise"
    ],
    "rules": {
        "eqeqeq": "off",
        "no-unused-vars": ["error", { "varsIgnorePattern": "React" }]
    },

    "globals": {
        "$": false,
        "FB": false,
        "twttr": false,
        "instgrm": false
    }
};
