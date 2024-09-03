import path from "path"

import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  resolve: {
    alias: {
      "@app": path.resolve("src/app"),
      "@components": path.resolve("src/components"),
      "@constants": path.resolve("src/constants"),
      "@elements": path.resolve("src/elements"),
      "@modules": path.resolve("src/modules"),
      "@pages": path.resolve("src/pages"),
      "@state": path.resolve("src/state"),
      "@type": path.resolve("src/types"),
      "@utils": path.resolve("src/utils"),
      "@locales": path.resolve("src/locales"),
    },
  },
}
