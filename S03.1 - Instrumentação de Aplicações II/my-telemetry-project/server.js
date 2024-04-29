const express = require('express');
const { PrometheusExporter } = require('@opentelemetry/exporter-prometheus');
const { MeterProvider } = require('@opentelemetry/sdk-metrics-base');

const PORT = 4200;
const app = express();

// Setup OpenTelemetry Prometheus exporter
const exporter = new PrometheusExporter({ port: 9464 }, () => {
  console.log('Prometheus scrape endpoint: http://localhost:9464/metrics');
});

// MeterProvider for handling metrics
const meter = new MeterProvider({
  exporter,
  interval: 1000,
}).getMeter('api-metrics');

// Counter metric for requests
const requestCounter = meter.createCounter('requests', {
  description: 'Counts the number of requests received',
});

// Handle requests
app.get('/', (req, res) => {
  requestCounter.add(1);  // Increment request count
  res.send(`Current Time: ${new Date().toISOString()}`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
