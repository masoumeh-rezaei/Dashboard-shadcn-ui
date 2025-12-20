"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"
import { cn } from "@/lib/utils"

/* ---------------------------------- */
/* Theme & Config */
/* ---------------------------------- */

const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
    [k: string]: {
        label?: React.ReactNode
        icon?: React.ComponentType
    } & (
        | { color?: string; theme?: never }
        | { color?: never; theme: Record<keyof typeof THEMES, string> }
        )
}

/* ---------------------------------- */
/* Context */
/* ---------------------------------- */

type ChartContextProps = {
    config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
    const context = React.useContext(ChartContext)
    if (!context) {
        throw new Error("useChart must be used within ChartContainer")
    }
    return context
}

/* ---------------------------------- */
/* Container */
/* ---------------------------------- */

function ChartContainer({
                            id,
                            className,
                            children,
                            config,
                            ...props
                        }: React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ComponentProps<
        typeof RechartsPrimitive.ResponsiveContainer
    >["children"]
}) {
    const uniqueId = React.useId()
    const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

    return (
        <ChartContext.Provider value={{ config }}>
            <div
                data-chart={chartId}
                className={cn(
                    "flex aspect-video justify-center text-xs",
                    className
                )}
                {...props}
            >
                <ChartStyle id={chartId} config={config} />
                <RechartsPrimitive.ResponsiveContainer>
                    {children}
                </RechartsPrimitive.ResponsiveContainer>
            </div>
        </ChartContext.Provider>
    )
}

/* ---------------------------------- */
/* Style */
/* ---------------------------------- */

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
    const colorConfig = Object.entries(config).filter(
        ([, config]) => config.theme || config.color
    )

    if (!colorConfig.length) {
        return null
    }

    return (
        <style
            dangerouslySetInnerHTML={{
                __html: Object.entries(THEMES)
                    .map(
                        ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
                            .map(([key, itemConfig]) => {
                                const color =
                                    itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
                                    itemConfig.color
                                return color ? `  --color-${key}: ${color};` : null
                            })
                            .join("\n")}
}
`
                    )
                    .join("\n"),
            }}
        />
    )
}

/* ---------------------------------- */
/* Tooltip */
/* ---------------------------------- */

const ChartTooltip = RechartsPrimitive.Tooltip

type SafePayloadItem = {
    name?: string
    dataKey?: string
    value?: number
    color?: string
    payload?: Record<string, unknown>
}

function ChartTooltipContent({
                                 active,
                                 payload,
                                 className,
                                 label,
                             }: {
    active?: boolean
    payload?: SafePayloadItem[]
    label?: React.ReactNode
    className?: string
}) {
    const { config } = useChart()

    if (!active || !payload || payload.length === 0) return null

    return (
        <div
            className={cn(
                "rounded-lg border bg-background px-3 py-2 text-xs shadow",
                className
            )}
        >
            {label && <div className="mb-1 font-medium">{label}</div>}
            <div className="grid gap-1">
                {payload.map((item, i) => {
                    const key = String(item.dataKey || item.name || i)
                    const itemConfig = getPayloadConfigFromPayload(
                        config,
                        item,
                        key
                    )

                    return (
                        <div key={i} className="flex justify-between gap-4">
              <span className="text-muted-foreground">
                {itemConfig?.label || item.name || key}
              </span>
                            {typeof item.value === "number" && (
                                <span className="font-mono">
                  {item.value.toLocaleString()}
                </span>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

/* ---------------------------------- */
/* Legend */
/* ---------------------------------- */

const ChartLegend = RechartsPrimitive.Legend

type SafeLegendItem = {
    value?: string
    dataKey?: string
    color?: string
    type?: string
}

function ChartLegendContent({
                                payload,
                                verticalAlign,
                                className,
                            }: {
    payload?: SafeLegendItem[]
    verticalAlign?: "top" | "bottom"
    className?: string
}) {
    const { config } = useChart()

    if (!payload || payload.length === 0) return null

    return (
        <div
            className={cn(
                "flex justify-center gap-4",
                verticalAlign === "top" ? "pb-3" : "pt-3",
                className
            )}
        >
            {payload.map((item, i) => {
                const key = String(item.dataKey || item.value || i)
                const itemConfig = getPayloadConfigFromPayload(
                    config,
                    item,
                    key
                )

                return (
                    <div key={i} className="flex items-center gap-2">
            <span
                className="h-2 w-2 rounded-sm"
                style={{ backgroundColor: item.color }}
            />
                        <span>{itemConfig?.label || item.value || key}</span>
                    </div>
                )
            })}
        </div>
    )
}

/* ---------------------------------- */
/* Helpers */
/* ---------------------------------- */

function getPayloadConfigFromPayload(
    config: ChartConfig,
    payload: unknown,
    key: string
) {
    if (!payload || typeof payload !== "object") return undefined
    return config[key]
}

/* ---------------------------------- */
/* Exports */
/* ---------------------------------- */

export {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,
    ChartStyle,
}
