
'use client'

import dynamic from "next/dynamic"
const MarketOverview = dynamic(() => import("react-ts-tradingview-widgets").then(module => module.MarketOverview), { ssr: false })

function MarketOverviewCharts() {
    return (
        <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full border dark:border-section bg-transparent">
            </div>

            <MarketOverview
                colorTheme="dark"
                width='100%'
                height={450}
                dateRange="1D"
                showChart={true}
                locale="en"
                largeChartUrl=""
                isTransparent={false}
                showSymbolLogo={true}
                showFloatingTooltip={false}
                plotLineColorGrowing="rgba(41, 98, 255, 1)"
                plotLineColorFalling="rgba(41, 98, 255, 1)"
                gridLineColor="rgba(240, 243, 250, 0)"
                scaleFontColor="rgba(106, 109, 120, 1)"
                belowLineFillColorGrowing="rgba(41, 98, 255, 0.12)"
                belowLineFillColorFalling="rgba(41, 98, 255, 0.12)"
                belowLineFillColorGrowingBottom="rgba(41, 98, 255, 0)"
                belowLineFillColorFallingBottom="rgba(41, 98, 255, 0)"
                symbolActiveColor="rgba(41, 98, 255, 0.12)"
                copyrightStyles={{
                    span: { fontSize: "11px" }
                }}
                tabs={[
                    {
                        "title": "Indices",
                        "symbols": [
                            {
                                "s": "FOREXCOM:SPXUSD",
                                "d": "S&P 500"
                            },
                            {
                                "s": "FOREXCOM:NSXUSD",
                                "d": "US 100"
                            },
                            {
                                "s": "FOREXCOM:DJI",
                                "d": "Dow 30"
                            },
                            {
                                "s": "INDEX:NKY",
                                "d": "Nikkei 225"
                            },
                            {
                                "s": "INDEX:DEU40",
                                "d": "DAX Index"
                            },
                            {
                                "s": "FOREXCOM:UKXGBP",
                                "d": "UK 100"
                            },
                            {
                                "s": "BITSTAMP:BTCUSD"
                            }
                        ],
                        "originalTitle": "Indices"
                    },
                    {
                        "title": "Bonds",
                        "symbols": [
                            {
                                "s": "CBOT:ZB1!",
                                "d": "T-Bond"
                            },
                            {
                                "s": "CBOT:UB1!",
                                "d": "Ultra T-Bond"
                            },
                            {
                                "s": "EUREX:FGBL1!",
                                "d": "Euro Bund"
                            },
                            {
                                "s": "EUREX:FBTP1!",
                                "d": "Euro BTP"
                            },
                            {
                                "s": "EUREX:FGBM1!",
                                "d": "Euro BOBL"
                            }
                        ],
                        "originalTitle": "Bonds"
                    },
                    {
                        "title": "Forex",
                        "symbols": [
                            {
                                "s": "FX:EURUSD",
                                "d": "EUR to USD"
                            },
                            {
                                "s": "FX:GBPUSD",
                                "d": "GBP to USD"
                            },
                            {
                                "s": "FX:USDJPY",
                                "d": "USD to JPY"
                            },
                            {
                                "s": "FX:USDCHF",
                                "d": "USD to CHF"
                            },
                            {
                                "s": "FX:AUDUSD",
                                "d": "AUD to USD"
                            },
                            {
                                "s": "FX:USDCAD",
                                "d": "USD to CAD"
                            }
                        ],
                        "originalTitle": "Forex"
                    }
                ]}
            />
        </div>

    )
}

export default MarketOverviewCharts