import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
    client: "@hey-api/client-fetch",
    input: "openapi/locationforecast.json",
    output: {
        path: "src/clients/locationforecast",
        format: "prettier",
        lint: "eslint",
    },
    plugins: [
        "@hey-api/schemas",
        "@hey-api/types",
        {
            asClass: true,
            name: "@hey-api/services",
        },
    ],
});
