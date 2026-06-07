import { defineConfig } from "allure";

export default defineConfig({
  name: "Playwright Test Report",

  // Location of Allure results (JSON files with test results and attachments)
  results: "./allure-results",
  output: "./allure-report",

  plugins: {
    awesome: {
      options: {
        // What to group tests by in the UI
        groupBy: ["severity", "suite", "status"]
      }
    },

    // Mapping of custom attachment names to labels in the UI
    customLabels: {
      options: {
        attachments: {
          severity: "severity",     // attachment name → label name
          epic: "epic",
          feature: "feature",
          story: "story"
        }
      }
    },

    // Optional: custom tabs in the UI
    tabs: {
      options: {
        enabled: true
      }
    }
  }
});
