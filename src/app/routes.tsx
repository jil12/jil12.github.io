import { createBrowserRouter } from "react-router";
import { Portfolio } from "./pages/Portfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Portfolio,
  },
  {
    path: "/case-study/texas-immersive",
    lazy: () =>
      import("./pages/case-studies/texas-immersive").then((m) => ({
        Component: m.TexasImmersive,
      })),
  },
  {
    path: "/case-study/ez-line",
    lazy: () => import("./pages/case-studies/ez-line").then((m) => ({ Component: m.EZLine })),
  },
  {
    path: "/case-study/datafeel-haptics",
    lazy: () =>
      import("./pages/case-studies/datafeel-haptics").then((m) => ({
        Component: m.DataFeelHaptics,
      })),
  },
  {
    path: "/case-study/enterprise-rag",
    lazy: () =>
      import("./pages/case-studies/enterprise-rag").then((m) => ({
        Component: m.EnterpriseRag,
      })),
  },
  {
    path: "/case-study/llm-judge",
    lazy: () => import("./pages/case-studies/llm-judge").then((m) => ({ Component: m.LlmJudge })),
  },
  {
    path: "/case-study/tagtrails-ux",
    lazy: () =>
      import("./pages/case-studies/tagtrails-ux").then((m) => ({
        Component: m.TagTrailsUx,
      })),
  },
]);
