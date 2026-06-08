import { defineConfig } from "allure";

export default defineConfig({
  name: "Playwright Test Report",

  results: "./allure-results",
  output: "./allure-report",

  plugins: {
    awesome: {
      options: {
        groupBy: ["severity", "suite", "status"]
      }
    },

    customLabels: {
      options: {
        attachments: {
          severity: "severity",
          epic: "epic",
          feature: "feature",
          story: "story"
        }
      }
    },

    tabs: {
      options: {
        enabled: true
      }
    },

    widgets: {
      options: {
        widgets: [
          {
            type: "testResultSeverities",
            title: "Test results by severities",
            levels: ["blocker", "critical", "normal", "minor", "trivial"],
            statuses: ["passed", "failed", "broken", "skipped", "unknown"],
            includeUnset: true
          }
        ]
      }
    }
  }
});
