import { defineConfig } from "vite";

export default defineConfig({

    root: "html",

    server: {
        fs: {
            allow: [".."]
        }
    },

    build: {
        outDir: "../dist",
        emptyOutDir: true
    }

});