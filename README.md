# Reproducer for https://github.com/open-telemetry/opentelemetry-js/issues/4130

## Instructions

- `npm install`
- `npm run start`
- metric without data points is exported (NOTE: removing creation of the instrument will yield no results as the `ConsoleMetricExporter` does loop through metrics to log them. As there are no metrics, nothing is logged but they still reach the exporter, which should not be the case)