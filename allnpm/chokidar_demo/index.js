const rollup = require("rollup");
const chokidar = require("chokidar");

rollup
    .rollup({
        input: "main.js",
    })
    .then(async (bundle) => {
        await bundle.write({
            file: "bundle.js",
        });

        chokidar
            .watch(".", {
                ignored: ["**/node_modules/**", "**/.git/**"],
            })
            .on("all", (event, path) => {
                console.log(event, path);
            });
    });