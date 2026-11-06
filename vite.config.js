import { defineConfig } from "vite";

export default defineConfig({
    // Базовый путь должен быть маленькими буквами и со слэшами по бокам
    base: "/cakes/",

    build: {
        // Указываем Vite собирать проект в папку docs вместо dist
        outDir: "docs",
        // Очищать папку docs перед каждой новой сборкой
        emptyOutDir: true,
    },
});
