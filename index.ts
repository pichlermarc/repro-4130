import {diag, DiagConsoleLogger, DiagLogLevel} from '@opentelemetry/api';
import {PeriodicExportingMetricReader, ConsoleMetricExporter, MeterProvider} from '@opentelemetry/sdk-metrics';

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.ALL);

const reader = new PeriodicExportingMetricReader(
    {
        exporter: new ConsoleMetricExporter()
    }
);

const provider = new MeterProvider({
});
provider.addMetricReader(reader);

const meter = provider.getMeter('my.meter');
const counter = meter.createCounter('my.counter');

// not adding anything to the counter still exports

provider.forceFlush();