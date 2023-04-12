import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import {reactClickToComponent} from "vite-plugin-react-click-to-component";
import tsconfigPaths from "vite-tsconfig-paths";
import sassDts from "vite-plugin-sass-dts";

export default defineConfig({
	css: {
		modules: {
			localsConvention: "camelCase",
		},
	},
	plugins: [
		react(),
		reactClickToComponent(),
		tsconfigPaths(),
		sassDts({
			typeName: {
				replacement: "styles",
			},
		}),
	],
});
