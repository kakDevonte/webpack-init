import { createRoot } from "react-dom/client";
import { App } from "@/app";

import "@elephas/layout/styles.min.css";
import "@elephas/core/styles.min.css";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
