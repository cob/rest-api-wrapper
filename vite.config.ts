import path from "path";
import { defineConfig } from "vite";
import packageJson from "./package.json";

const getPackageName = () => {
  return packageJson.name;
};

const getPackageNameCamelCase = () => {
  try {
    return getPackageName().replace(/-./g, (char) => char[1].toUpperCase());
  } catch (err) {
    throw new Error("Name property in package.json is missing.");
  }
};

const fileName = {
  es: `${getPackageName()}.js`,
  cjs: `${getPackageName()}.cjs`
};

module.exports = defineConfig({
  base: "./",
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
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
      "@/": `${path.resolve(__dirname, "src")}/`
    }
  }
});
