import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "mf_shell_app",
  remotes: {
    provider: "provider@http://localhost:3001/mf-manifest.json",
  },
  shareStrategy: "loaded-first",
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
});
