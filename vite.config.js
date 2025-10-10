import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Developer-Portfolio-Part-3/", // <-- اضافه کن مسیر ریپوزیتوری GitHub
  plugins: [react()]
});
