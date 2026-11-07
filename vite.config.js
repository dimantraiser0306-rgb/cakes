import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    base: "/cakes/",
    build: {
        outDir: "docs",
    },
});
