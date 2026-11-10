/* Finance Notes Hub — canonical content manifest. Follow AGENTS.md before editing. */
window.FINANCE_DATA = {
  "categories": [
    {
      "id": "accounting",
      "name": "Financial Accounting",
      "zh": "財務會計",
      "icon": "▦",
      "summary": "Read financial statements and understand what numbers reveal.",
      "accent": "blue"
    },
    {
      "id": "corporate-finance",
      "name": "Corporate Finance",
      "zh": "公司理財",
      "icon": "◈",
      "summary": "Learn valuation, discount rates, and capital budgeting.",
      "accent": "violet"
    },
    {
      "id": "investment",
      "name": "Investment",
      "zh": "投資學",
      "icon": "↗",
      "summary": "Explore investing principles, assets, and risk.",
      "accent": "mint"
    },
    {
      "id": "economics",
      "name": "Economics",
      "zh": "經濟學",
      "icon": "◎",
      "summary": "Connect interest rates, exchange rates, and economic activity.",
      "accent": "amber"
    }
  ],
  "notes": [
    {
      "id": "financial-statements",
      "category": "accounting",
      "title": "The Three Financial Statements",
      "zh": "三大財務報表",
      "level": "Beginner",
      "minutes": 5,
      "summary": "Understand the income statement, balance sheet, and cash flow statement.",
      "sections": [
        {
          "title": "Core idea",
          "body": "The income statement tracks performance over a period, the balance sheet shows financial position at a point in time, and the cash flow statement explains changes in cash."
        },
        {
          "title": "Key relationship",
          "formula": "Assets = Liabilities + Equity",
          "body": "The balance sheet must balance. Net income affects retained earnings, while cash flow reconciles accounting profits to actual cash movements."
        },
        {
          "title": "Example",
          "body": "A company sells a product on credit for $100. Revenue may rise immediately, while cash does not increase until the customer pays."
        },
        {
          "title": "Remember",
          "bullets": [
            "Profit is not the same as cash.",
            "The balance sheet is a snapshot; the other statements cover a period."
          ]
        }
      ]
    },
    {
      "id": "financial-ratios",
      "category": "accounting",
      "title": "Financial Ratios 101",
      "zh": "財務比率入門",
      "level": "Beginner",
      "minutes": 4,
      "summary": "Use basic ratios to evaluate liquidity and profitability.",
      "sections": [
        {
          "title": "Core idea",
          "body": "Ratios help compare companies across time, but they work best alongside industry and accounting context."
        },
        {
          "title": "Useful formulas",
          "formula": "Current Ratio = Current Assets / Current Liabilities",
          "body": "A higher current ratio can indicate a larger short-term liquidity cushion, although excessive working capital is not always efficient."
        },
        {
          "title": "Example",
          "body": "If current assets are $240 and current liabilities are $120, the current ratio is 2.0."
        },
        {
          "title": "Remember",
          "bullets": [
            "ROE = Net Income / Average Shareholders’ Equity.",
            "Compare ratios with relevant peers and prior periods."
          ]
        }
      ]
    },
    {
      "id": "npv",
      "category": "corporate-finance",
      "title": "Net Present Value (NPV)",
      "zh": "淨現值",
      "level": "Beginner",
      "minutes": 6,
      "summary": "Decide whether a project creates value by discounting expected cash flows.",
      "sections": [
        {
          "title": "Core idea",
          "body": "Money received in the future is worth less than money available today. NPV discounts expected cash flows at a rate that reflects their risk."
        },
        {
          "title": "Formula",
          "formula": "NPV = − Initial Investment + Σ [CFₜ / (1 + r)ᵗ]",
          "body": "CFₜ is cash flow in period t, and r is the appropriate discount rate."
        },
        {
          "title": "Example",
          "body": "A project costs $1,000 today and pays $600 in each of the next two years. At a 10% discount rate, NPV ≈ −1,000 + 545.45 + 495.87 = $41.32."
        },
        {
          "title": "Decision rule",
          "bullets": [
            "NPV > 0: generally accept, assuming the forecasts and discount rate are appropriate.",
            "NPV < 0: generally reject."
          ]
        }
      ]
    },
    {
      "id": "wacc",
      "category": "corporate-finance",
      "title": "Weighted Average Cost of Capital (WACC)",
      "zh": "加權平均資金成本",
      "level": "Intermediate",
      "minutes": 6,
      "summary": "Estimate a company’s blended cost of equity and after-tax debt.",
      "sections": [
        {
          "title": "Core idea",
          "body": "WACC measures the weighted required return to providers of capital. It is often used to discount free cash flow to the firm when the project risk and financing assumptions are appropriate."
        },
        {
          "title": "Formula",
          "formula": "WACC = (E / V) × Rₑ + (D / V) × Rᴅ × (1 − T)",
          "body": "E is market value of equity, D is market value of interest-bearing debt, V = E + D, Rₑ is cost of equity, Rᴅ is cost of debt, and T is the applicable tax rate."
        },
        {
          "title": "Example",
          "body": "Suppose 60% equity costs 12%, 40% debt costs 6%, and the tax rate is 20%. WACC = 0.6 × 12% + 0.4 × 6% × (1 − 0.2) = 9.12%."
        },
        {
          "title": "Remember",
          "bullets": [
            "Use market-value weights where possible.",
            "WACC is not a universal discount rate for projects with very different risk."
          ]
        }
      ]
    },
    {
      "id": "stocks-bonds",
      "category": "investment",
      "title": "Stocks vs. Bonds",
      "zh": "股票與債券",
      "level": "Beginner",
      "minutes": 4,
      "summary": "Compare ownership claims with debt claims.",
      "sections": [
        {
          "title": "Core idea",
          "body": "Stocks represent residual ownership, while bonds are contractual lending claims. Their cash flows, legal priority, and risks differ."
        },
        {
          "title": "Key distinction",
          "body": "Common shareholders may receive dividends and benefit from earnings growth, while bondholders generally receive contractual coupons and principal subject to credit risk."
        },
        {
          "title": "Example",
          "body": "A bond with a fixed coupon can fall in market price when yields rise. A stock can also decline if investors expect lower future earnings."
        },
        {
          "title": "Remember",
          "bullets": [
            "Neither asset class is risk-free.",
            "Diversification can reduce some risks, but not eliminate market risk."
          ]
        }
      ]
    },
    {
      "id": "diversification",
      "category": "investment",
      "title": "Diversification & Risk",
      "zh": "分散投資與風險",
      "level": "Beginner",
      "minutes": 5,
      "summary": "See why asset correlation matters more than just the number of holdings.",
      "sections": [
        {
          "title": "Core idea",
          "body": "Combining assets with imperfectly correlated returns may reduce portfolio volatility. Concentration increases exposure to company-specific shocks."
        },
        {
          "title": "Formula",
          "formula": "Portfolio Return = Σ (Weightᵢ × Returnᵢ)",
          "body": "Portfolio risk also depends on each asset’s volatility and how returns move together."
        },
        {
          "title": "Example",
          "body": "Holding two stocks from different sectors may diversify risk better than holding two nearly identical companies, even if the number of holdings is the same."
        },
        {
          "title": "Remember",
          "bullets": [
            "Diversification cannot completely remove systematic market risk.",
            "Consider fees, time horizon, and personal risk tolerance."
          ]
        }
      ]
    },
    {
      "id": "interest-rates",
      "category": "economics",
      "title": "Interest Rates & Bonds",
      "zh": "利率與債券價格",
      "level": "Beginner",
      "minutes": 5,
      "summary": "Understand why bond prices typically fall when market yields increase.",
      "sections": [
        {
          "title": "Core idea",
          "body": "A fixed stream of bond payments is discounted at the market yield. A higher discount rate reduces the present value of those payments."
        },
        {
          "title": "Formula",
          "formula": "Bond Price = Σ [Couponₜ / (1 + y)ᵗ] + Face Value / (1 + y)ᴺ",
          "body": "Here y is the periodic market yield and N is the number of periods."
        },
        {
          "title": "Example",
          "body": "If a bond pays a fixed coupon and newly issued comparable bonds offer higher yields, investors generally pay less for the older bond."
        },
        {
          "title": "Remember",
          "bullets": [
            "Bond prices and yields generally move in opposite directions.",
            "Duration is one measure of interest-rate sensitivity."
          ]
        }
      ]
    },
    {
      "id": "exchange-rates",
      "category": "economics",
      "title": "Exchange Rate Basics",
      "zh": "匯率基礎",
      "level": "Beginner",
      "minutes": 5,
      "summary": "Read currency quotations and avoid confusing appreciation with depreciation.",
      "sections": [
        {
          "title": "Core idea",
          "body": "An exchange rate expresses the price of one currency in terms of another. Always identify which currency is the base and which is the quote currency."
        },
        {
          "title": "Key distinction",
          "body": "A rise in TWD per USD means the US dollar buys more Taiwan dollars, not that the Taiwan dollar appreciates."
        },
        {
          "title": "Example",
          "body": "If USD/TWD rises from 30 to 32 (TWD per USD), one US dollar buys more Taiwan dollars: USD appreciates against TWD, and TWD depreciates against USD."
        },
        {
          "title": "Remember",
          "bullets": [
            "The direction of an exchange-rate change depends on quote convention.",
            "Interest rates and expected future exchange rates both matter for currency returns."
          ]
        }
      ]
    }
  ]
};
