module.exports = {
    // config for a library is scoped under "dependency" key
    dependency: {
        platforms: {
            ios: {},
            android: {}, // projects are grouped into "platforms"
        },
        // hooks are considered anti-pattern, please avoid them
        hooks: {
            prelink: "node ./node_modules/rn-fetch-blob/scripts/prelink.js",
        },
    },
};