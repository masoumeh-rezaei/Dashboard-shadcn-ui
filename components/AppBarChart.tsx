'use client';

import React, { lazy, Suspense } from "react";
import type { ChartConfig } from "@/components/ui/chart";


const ChartContainer = lazy(() =>
    import("@/components/ui/chart").then(m => ({ default: m.ChartContainer }))
);
const ChartLegend = lazy(() =>
    import("@/components/ui/chart").then(m => ({ default: m.ChartLegend }))
);
const ChartLegendContent = lazy(() =>
    import("@/components/ui/chart").then(m => ({ default: m.ChartLegendContent }))
);
const ChartTooltip = lazy(() =>
    import("@/components/ui/chart").then(m => ({ default: m.ChartTooltip }))
);
const ChartTooltipContent = lazy(() =>
    import("@/components/ui/chart").then(m => ({ default: m.ChartTooltipContent }))
);

const BarChart = lazy(() =>
    import("recharts").then(m => ({ default: m.BarChart }))
);
const Bar = lazy(() =>
    import("recharts").then(m => ({ default: m.Bar }))
);
const CartesianGrid = lazy(() =>
    import("recharts").then(m => ({ default: m.CartesianGrid }))
);
const XAxis = lazy(() =>
    import("recharts").then(m => ({ default: m.XAxis }))
);

const chartData = [
    { month: "January", total: 186, successful: 80 },
    { month: "February", total: 305, successful: 200 },
    { month: "March", total: 237, successful: 120 },
    { month: "April", total: 73, successful: 190 },
    { month: "May", total: 209, successful: 130 },
    { month: "June", total: 214, successful: 140 },
];

const chartConfig = {
    total: {
        label: "Total",
        color: "var(--chart-1)",
    },
    successful: {
        label: "Successful",
        color: "var(--chart-4)",
    },
} satisfies ChartConfig;

const AppBarChart = () => {
    return (
        <div>
            <h1 className="text-lg font-medium mb-0">Total Revenue</h1>

            <Suspense fallback={<div>Loading chart...</div>}>
                <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                    <BarChart data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar dataKey="total" fill="var(--color-total)" radius={4} />
                        <Bar dataKey="successful" fill="var(--color-successful)" radius={4} />
                    </BarChart>
                </ChartContainer>
            </Suspense>
        </div>
    );
};

export default AppBarChart;
