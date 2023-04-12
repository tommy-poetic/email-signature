import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import {reactClickToComponent} from "vite-plugin-react-click-to-component";
import tsconfigPaths from "vite-tsconfig-paths";
import sassDts from "vite-plugin-sass-dts";
import unfonts from "unplugin-fonts/vite.js";

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
		unfonts({
			custom: {
				families: [{
					name: "Urbanist",
					local: "Urbanist",
					src: "./src/assets/Urbanist/*.ttf",
				}],
			},
		}),
	],
});
