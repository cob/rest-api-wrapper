import path from "path";
import {defineConfig} from "vite";

const workingDir = path.resolve("./")
const parentPackageJson = require(`${workingDir}/../../package.json`)
const workspacePackageJson = require(`${workingDir}/package.json`)

const getParentPackageName = (): string => {
    return parentPackageJson.name;
};

const getWorkspacePackageName = (): string => {
    return workspacePackageJson.name.substring(3)
};

const getPackageNameCamelCase = () => {
    try {
        // return getParentPackageName() + "/" + getWorkspacePackageName()
        return getWorkspacePackageName()
    } catch (err) {
        throw new Error("Name property in package.json is missing.");
    }
};

const fileName = {
    es: `${getPackageNameCamelCase()}.mjs`,
    cjs: `${getPackageNameCamelCase()}.cjs`
};

module.exports = defineConfig({
    base: "./",
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve("./", "src/index.ts"),
            name: getPackageNameCamelCase(),
            formats: ["es", "cjs"],
            fileName: (format) => {
                // @ts-ignore
                return fileName[format];
            }
        }
    },
    resolve: {
        alias: {
            "@/": `${path.resolve("./", "src")}/`
        }
    }
});
