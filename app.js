// Application Data
const tradingData = {
    // Multi-timeframe Analysis Data (from instructions)
    multi_timeframe_analysis: {
        BTC_USDT: {
            "1m": {score: 78, signal: "Нейтральный", strength: "Слабый", trend: "➡️"},
            "5m": {score: 85, signal: "Бычий", strength: "Средний", trend: "↗️"},
            "1h": {score: 92, signal: "Бычий", strength: "Сильный", trend: "↗️"},
            "4h": {score: 94, signal: "Бычий", strength: "Очень сильный", trend: "↗️"},
            "1d": {score: 87, signal: "Бычий", strength: "Сильный", trend: "↗️"},
            consensus: "Бычий",
            consensus_count: "4/5",
            recommendation: "Сильный бычий сигнал - рекомендуется покупка"
        },
        ETH_USDT: {
            "1m": {score: 72, signal: "Медвежий", strength: "Слабый", trend: "↘️"},
            "5m": {score: 76, signal: "Нейтральный", strength: "Средний", trend: "➡️"},
            "1h": {score: 89, signal: "Бычий", strength: "Сильный", trend: "↗️"},
            "4h": {score: 91, signal: "Бычий", strength: "Сильный", trend: "↗️"},
            "1d": {score: 85, signal: "Бычий", strength: "Сильный", trend: "↗️"},
            consensus: "Смешанный",
            consensus_count: "3/5",
            recommendation: "Противоречивые сигналы - ожидание подтверждения"
        },
        SOL_USDT: {
            "1m": {score: 89, signal: "Бычий", strength: "Сильный", trend: "↗️"},
            "5m": {score: 92, signal: "Бычий", strength: "Сильный", trend: "↗️"},
            "1h": {score: 88, signal: "Бычий", strength: "Сильный", trend: "↗️"},
            "4h": {score: 90, signal: "Бычий", strength: "Сильный", trend: "↗️"},
            "1d": {score: 86, signal: "Бычий", strength: "Сильный", trend: "↗️"},
            consensus: "Бычий",
            consensus_count: "5/5",
            recommendation: "Исключительно сильный консенсус - отличная возможность"
        },
        ADA_USDT: {
            "1m": {score: 74, signal: "Нейтральный", strength: "Средний", trend: "➡️"},
            "5m": {score: 79, signal: "Бычий", strength: "Средний", trend: "↗️"},
            "1h": {score: 82, signal: "Бычий", strength: "Сильный", trend: "↗️"},
            "4h": {score: 85, signal: "Бычий", strength: "Сильный", trend: "↗️"},
            "1d": {score: 80, signal: "Бычий", strength: "Средний", trend: "↗️"},
            consensus: "Бычий",
            consensus_count: "4/5",
            recommendation: "Умеренно положительно"
        }
    },
    
    
    // Correlation Matrix Data (from instructions)
    correlation_matrix: {
        BTC: {ETH: 0.78, SOL: 0.65, ADA: 0.72},
        ETH: {BTC: 0.78, SOL: 0.83, ADA: 0.69},
        SOL: {BTC: 0.65, ETH: 0.83, ADA: 0.58},
        ADA: {BTC: 0.72, ETH: 0.69, SOL: 0.58}
    },
    
    // Kelly Criterion Data (from instructions)
    kelly_criterion: {
        recommended_size: 2.3,
        max_safe_size: 4.1,
        current_risk: "optimal"
    },
    
    // Portfolio Sectors Data (from instructions)
    portfolio_sectors: {
        "Layer 1": {allocation: 45, risk: "medium", correlation: 0.74},
        "DeFi": {allocation: 25, risk: "high", correlation: 0.68},
        "Gaming": {allocation: 15, risk: "high", correlation: 0.45},
        "Infrastructure": {allocation: 15, risk: "low", correlation: 0.32}
    },
    
    // Trading Psychology Data (from instructions)
    trading_psychology: {
        current_mood: "confident",
        stress_level: 3,
        recent_emotions: ["FOMO", "confident", "analytical"],
        break_needed: false,
        trades_since_break: 12
    },
    
    // Performance Metrics Data (from instructions)
    performance_metrics: {
        sharpe_ratio: 1.87,
        sortino_ratio: 2.34,
        calmar_ratio: 1.45,
        max_drawdown: -4.2,
        rolling_7d: +12.3,
        rolling_30d: +28.7,
        vs_btc_hodl: +15.4,
        alpha: 0.23,
        beta: 0.78
    },
    
    // Social Sentiment Data (from instructions)
    social_sentiment: {
        twitter_mentions: 15420,
        reddit_sentiment: 0.74,
        fear_greed_index: 68,
        google_trends: 87,
        overall_sentiment: "bullish"
    },
    
    // External Events Data (from instructions)
    external_events: {
        next_fomc: "2024-01-31",
        impact_level: "high",
        whale_alerts: 3,
        large_transactions: 12.5
    },
    
    // Advanced Orders Data (from instructions)
    advanced_orders: {
        trailing_stops: 2,
        oco_orders: 1,
        iceberg_orders: 0,
        twap_active: 1
    },
    
    // Security Status Data (from instructions)
    security_status: {
        hardware_wallet: "connected",
        two_factor: "enabled",
        ip_whitelist: "active",
        last_audit: "2024-01-15",
        risk_level: "low"
    },
    
    // Monte Carlo Data (from instructions)
    monte_carlo: {
        scenarios_run: 10000,
        confidence_95: "+2847 USDT",
        confidence_50: "+4234 USDT",
        probability_profit: 0.73,
        expected_return: "+3456 USDT"
    },
    // Market Scanning Data
    market_scanning: {
        total_pairs: 1500,
        currently_scanning: 1247,
        scan_progress: 83,
        last_update: "23 seconds ago",
        scan_status: "active"
    },
    
    filtering_stages: {
        stage1: {
            name: "Технический анализ",
            input: 1500,
            output: 127,
            criteria: "Паттерны, уровни поддержки/сопротивления"
        },
        stage2: {
            name: "Анализ объемов",
            input: 127,
            output: 43,
            criteria: "Ликвидность, аномальные объемы"
        },
        stage3: {
            name: "Анализ настроений",
            input: 43,
            output: 18,
            criteria: "Новости, социальные сети"
        },
        stage4: {
            name: "Оценка рисков",
            input: 18,
            output: 8,
            criteria: "Волатильность, корреляции"
        },
        stage5: {
            name: "Финальный рейтинг",
            input: 8,
            output: 5,
            criteria: "ИИ-скоринг, приоритизация"
        }
    },
    
    market_conditions: {
        sentiment: "Bullish",
        volatility: "Medium",
        news_impact: "Low",
        total_volume_24h: "47.2B USDT",
        active_pairs: 1247,
        opportunities_found: 5,
        success_rate: "0.33%"
    },
    
    ai_reasoning: {
        "BTC_USDT": {
            technical_score: 94,
            volume_score: 87,
            sentiment_score: 91,
            risk_score: 88,
            overall_confidence: 94,
            reasons: [
                "Сильный пробой восходящего треугольника",
                "Объем выше среднего на 340%",
                "15 положительных новостей за 24ч",
                "Низкая корреляция с текущими позициями",
                "Оптимальное соотношение риск/доходность 1:3.2"
            ]
        },
        "ETH_USDT": {
            technical_score: 89,
            volume_score: 92,
            sentiment_score: 85,
            risk_score: 91,
            overall_confidence: 91,
            reasons: [
                "Отскок от ключевого уровня поддержки",
                "Институциональные покупки +2.3M ETH",
                "Обновления сети Ethereum 2.0",
                "Снижение корреляции с BTC",
                "Историческая точность паттерна 89%"
            ]
        }
    },
    
    scanning_pairs: [
        "Анализируется: ATOM/USDT - Technical: 78%",
        "Анализируется: LINK/USDT - Volume: 45%",
        "Анализируется: DOT/USDT - Sentiment: 67%",
        "Анализируется: UNI/USDT - Risk: 23%",
        "Анализируется: AAVE/USDT - Final: 91%"
    ],
    // Trade History Data
    tradeHistory: [
        {
            pair: "BTC/USDT",
            strategy: "Breakout Pattern",
            entry_price: 65420.30,
            exit_price: 67234.50,
            entry_time: "2024-01-15 09:30",
            exit_time: "2024-01-15 14:45",
            duration: "5h 15m",
            pnl_usd: "+136.42",
            pnl_percent: "+2.77%",
            quantity: 0.0752,
            closure_reason: "Take Profit",
            status: "profitable"
        },
        {
            pair: "ETH/USDT",
            strategy: "Support Bounce",
            entry_price: 2780.40,
            exit_price: 2734.20,
            entry_time: "2024-01-14 16:20",
            exit_time: "2024-01-14 18:10",
            duration: "1h 50m",
            pnl_usd: "-86.15",
            pnl_percent: "-1.66%",
            quantity: 1.8642,
            closure_reason: "Stop Loss",
            status: "losing"
        },
        {
            pair: "SOL/USDT",
            strategy: "Momentum Trade",
            entry_price: 138.75,
            exit_price: 144.20,
            entry_time: "2024-01-14 11:15",
            exit_time: "2024-01-14 17:30",
            duration: "6h 15m",
            pnl_usd: "+38.67",
            pnl_percent: "+3.93%",
            quantity: 7.0891,
            closure_reason: "Manual Close",
            status: "profitable"
        },
        {
            pair: "ADA/USDT",
            strategy: "Mean Reversion",
            entry_price: 0.3567,
            exit_price: 0.3689,
            entry_time: "2024-01-13 14:45",
            exit_time: "2024-01-13 20:20",
            duration: "5h 35m",
            pnl_usd: "+35.89",
            pnl_percent: "+3.42%",
            quantity: 2941.18,
            closure_reason: "Take Profit",
            status: "profitable"
        }
    ],
    
    // Account Statistics
    accountStats: {
        total_trades: 67,
        winning_trades: 45,
        losing_trades: 22,
        win_rate: "67.2%",
        total_profit: "+1,247.83 USDT",
        avg_win: "+42.15 USDT",
        avg_loss: "-23.67 USDT",
        best_trade: "+189.42 USDT",
        worst_trade: "-67.23 USDT",
        profit_factor: 2.31,
        current_balance: "10,247.83 USDT",
        daily_pnl: "+324.67 USDT"
    },
    confirmationIcons: [
        {
            name: "Technical Analysis",
            icon: "📊", 
            active: true,
            description: "Технический анализ активен"
        },
        {
            name: "Sentiment Analysis",
            icon: "💬",
            active: true, 
            description: "Анализ настроений активен"
        },
        {
            name: "Volume Analysis",
            icon: "📈",
            active: false,
            description: "Анализ объемов"
        },
        {
            name: "Price Action", 
            icon: "📉",
            active: true,
            description: "Price Action анализ"
        },
        {
            name: "Risk Management",
            icon: "🛡️",
            active: true,
            description: "Управление рисками активно"
        },
        {
            name: "News Filter",
            icon: "📰", 
            active: false,
            description: "Фильтр новостей"
        }
    ],
    
    settingsParameters: {
        basic: {
            tradeSizePercent: { value: 3, min: 1, max: 10, unit: "%" },
            tpSiRatio: { value: 2, min: 1, max: 5, unit: "" },
            minTakeProfit: { value: 2, min: 0.5, max: 10, unit: "%" },
            maxTradesHour: { value: 3, min: 1, max: 20, unit: "" },
            maxDrawdown: { value: 20, min: 5, max: 50, unit: "%" }
        },
        advanced: {
            stopLossDistance: { value: 3, min: 1, max: 10, unit: "%" },
            riskPerTrade: { value: 2, min: 0.5, max: 5, unit: "%" },
            minVolumeFilter: { value: 1000000, min: 100000, max: 10000000, unit: "USDT" },
            volatilityThreshold: { value: 15, min: 5, max: 50, unit: "%" },
            rsiLevels: { value: 70, min: 50, max: 90, unit: "" },
            maPeriod: { value: 20, min: 5, max: 200, unit: "periods" }
        }
    },
    activeTrades: [
        {
            pair: "BTC/USDT",
            entry_price: 66420.50,
            current_price: 67845.32,
            quantity: 0.0753,
            pnl_usd: "+107.23",
            pnl_percent: "+2.14%",
            pnl_value: 2.14,
            time_open: "2h 15m",
            stop_loss: 64800.00,
            take_profit: 69500.00,
            status: "profitable",
            individual_settings: {
                position_size: 3,
                risk_percent: 2,
                sl_distance: 3,
                tp_ratio: 2.5,
                adjustable: true,
                preset: "moderate"
            }
        },
        {
            pair: "ETH/USDT",
            entry_price: 2680.40,
            current_price: 2634.87,
            quantity: 1.8645,
            pnl_usd: "-84.91",
            pnl_percent: "-1.70%",
            pnl_value: -1.70,
            time_open: "45m",
            stop_loss: 2580.00,
            take_profit: 2780.00,
            status: "losing",
            individual_settings: {
                position_size: 2,
                risk_percent: 1.5,
                sl_distance: 2.5,
                tp_ratio: 2,
                adjustable: true,
                preset: "conservative"
            }
        },
        {
            pair: "SOL/USDT",
            entry_price: 141.25,
            current_price: 142.76,
            quantity: 7.0891,
            pnl_usd: "+10.71",
            pnl_percent: "+1.07%",
            pnl_value: 1.07,
            time_open: "1h 32m",
            stop_loss: 135.00,
            take_profit: 148.50,
            status: "profitable",
            individual_settings: {
                position_size: 4,
                risk_percent: 3,
                sl_distance: 4,
                tp_ratio: 3,
                adjustable: true,
                preset: "aggressive"
            }
        },
        {
            pair: "ADA/USDT",
            entry_price: 0.3398,
            current_price: 0.3421,
            quantity: 2941.18,
            pnl_usd: "+6.77",
            pnl_percent: "+0.68%",
            pnl_value: 0.68,
            time_open: "3h 22m",
            stop_loss: 0.3250,
            take_profit: 0.3580,
            status: "profitable",
            individual_settings: {
                position_size: 2.5,
                risk_percent: 2.2,
                sl_distance: 3.2,
                tp_ratio: 2.8,
                adjustable: true,
                preset: "moderate"
            }
        },
        {
            pair: "DOGE/USDT",
            entry_price: 0.1289,
            current_price: 0.1247,
            quantity: 7758.97,
            pnl_usd: "-32.58",
            pnl_percent: "-3.26%",
            pnl_value: -3.26,
            time_open: "6h 45m",
            stop_loss: 0.1180,
            take_profit: 0.1420,
            status: "losing",
            individual_settings: {
                position_size: 1.5,
                risk_percent: 1.2,
                sl_distance: 2.2,
                tp_ratio: 1.8,
                adjustable: true,
                preset: "conservative"
            }
        }
    ],
    
    strategies: [
        { name: "Breakout Pattern", description: "Торговля на пробоях уровней сопротивления" },
        { name: "Support Bounce", description: "Отскок от уровней поддержки" },
        { name: "Momentum Trading", description: "Следование за импульсом цены" },
        { name: "Mean Reversion", description: "Возврат к среднему значению" },
        { name: "Trend Following", description: "Следование за трендом" }
    ],
    
    backtestResults: {
        total_trades: 127,
        winning_trades: 89,
        losing_trades: 38,
        win_rate: "70.1%",
        total_profit: "+2,847.53 USDT",
        max_drawdown: "-4.2%",
        sharpe_ratio: 1.87,
        profit_factor: 2.34,
        avg_win: "45.23 USDT",
        avg_loss: "-23.17 USDT"
    },
    tradingPairs: [
        { symbol: "BTC/USDT", price: 67845.32, change: "+2.4%", volume: "1.2B" },
        { symbol: "ETH/USDT", price: 2634.87, change: "-0.8%", volume: "856M" },
        { symbol: "ADA/USDT", price: 0.3421, change: "+5.2%", volume: "124M" },
        { symbol: "SOL/USDT", price: 142.76, change: "+1.9%", volume: "432M" },
        { symbol: "DOGE/USDT", price: 0.1247, change: "-1.2%", volume: "67M" }
    ],
    
    tradingOpportunities: [
        {
            pair: "BTC/USDT",
            strategy: "Breakout Pattern",
            profit_expectation: "3.2%",
            success_probability: "94%",
            stop_loss: "66200",
            take_profit: "70100",
            timeframe: "4h",
            ai_score: 94,
            confirmed_by: ["technical", "sentiment"],
            individual_settings: {
                position_size: 3,
                risk_percent: 2,
                sl_distance: 3,
                tp_ratio: 2.5,
                preset: "moderate"
            }
        },
        {
            pair: "ETH/USDT",
            strategy: "Support Bounce",
            profit_expectation: "2.8%",
            success_probability: "91%",
            stop_loss: "2580",
            take_profit: "2710",
            timeframe: "2h",
            ai_score: 91,
            confirmed_by: ["technical"],
            individual_settings: {
                position_size: 2,
                risk_percent: 1.5,
                sl_distance: 2.5,
                tp_ratio: 2,
                preset: "conservative"
            }
        },
        {
            pair: "SOL/USDT",
            strategy: "Momentum Trade",
            profit_expectation: "4.1%",
            success_probability: "92%",
            stop_loss: "138.50",
            take_profit: "148.60",
            timeframe: "6h",
            ai_score: 92,
            confirmed_by: ["technical", "sentiment"],
            individual_settings: {
                position_size: 4,
                risk_percent: 3,
                sl_distance: 4,
                tp_ratio: 3,
                preset: "aggressive"
            }
        },
        {
            pair: "ADA/USDT",
            strategy: "Reversal Signal",
            profit_expectation: "5.3%",
            success_probability: "90%",
            stop_loss: "0.325",
            take_profit: "0.360",
            timeframe: "8h",
            ai_score: 90,
            confirmed_by: ["sentiment"],
            individual_settings: {
                position_size: 2.5,
                risk_percent: 2.2,
                sl_distance: 3.2,
                tp_ratio: 2.8,
                preset: "moderate"
            }
        },
        {
            pair: "DOGE/USDT",
            strategy: "Volume Spike",
            profit_expectation: "2.1%",
            success_probability: "88%",
            stop_loss: "0.122",
            take_profit: "0.127",
            timeframe: "1h",
            ai_score: 88,
            confirmed_by: ["technical"],
            individual_settings: {
                position_size: 1.5,
                risk_percent: 1.2,
                sl_distance: 2.2,
                tp_ratio: 1.8,
                preset: "conservative"
            }
        }
    ],
    
    systemStatus: {
        quantitative_analysis: {
            status: "active",
            accuracy: "94.2%",
            signals_processed: 1247
        },
        sentiment_analysis: {
            status: "active",
            accuracy: "89.7%",
            news_sources: 45,
            social_sentiment: "bullish"
        }
    },
    
    accountInfo: {
        balance: "10,247.83",
        currency: "USDT",
        daily_pnl: "+324.67",
        open_positions: 3,
        total_trades: 47,
        success_rate: "91.5%"
    }
};

// Global State
let autoTradingEnabled = false;
let paperTradingMode = true;
let selectedOpportunity = null;
let currentTab = 'dashboard';
let backtestRunning = false;
let priceUpdateInterval;
let selectedTrade = null;
let tradeClosureQueue = [];
let autoCloseCheckInterval;
let notificationQueue = [];
let chartInstances = {};
let riskLevels = {
    conservative: { min: 0, max: 30, color: 'conservative' },
    moderate: { min: 30, max: 70, color: 'moderate' },
    aggressive: { min: 70, max: 100, color: 'aggressive' }
};

// DOM Elements
const elements = {
    // Tab Navigation
    tabBtns: document.querySelectorAll('.tab-btn'),
    tabContents: document.querySelectorAll('.tab-content'),
    
    // Active Trades
    tradesContainer: document.getElementById('tradesContainer'),
    
    // Trade History
    historyContainer: document.getElementById('historyContainer'),
    exportHistoryBtn: document.getElementById('exportHistoryBtn'),
    refreshHistoryBtn: document.getElementById('refreshHistoryBtn'),
    totalCompletedTrades: document.getElementById('totalCompletedTrades'),
    winRatePercent: document.getElementById('winRatePercent'),
    totalProfitHistory: document.getElementById('totalProfitHistory'),
    avgWinAmount: document.getElementById('avgWinAmount'),
    avgLossAmount: document.getElementById('avgLossAmount'),
    profitFactor: document.getElementById('profitFactor'),
    historyPeriodFilter: document.getElementById('historyPeriodFilter'),
    historyPairFilter: document.getElementById('historyPairFilter'),
    historyStrategyFilter: document.getElementById('historyStrategyFilter'),
    historyResultFilter: document.getElementById('historyResultFilter'),
    profitChart: document.getElementById('profitChart'),
    strategyChart: document.getElementById('strategyChart'),
    refreshTradesBtn: document.getElementById('refreshTrades'),
    closeAllTradesBtn: document.getElementById('closeAllTrades'),
    totalPnl: document.getElementById('totalPnl'),
    totalVolume: document.getElementById('totalVolume'),
    avgHoldTime: document.getElementById('avgHoldTime'),
    
    // Strategy Testing
    strategySelect: document.getElementById('strategySelect'),
    startDate: document.getElementById('startDate'),
    endDate: document.getElementById('endDate'),
    initialCapital: document.getElementById('initialCapital'),
    riskPerTradeTest: document.getElementById('riskPerTradeTest'),
    runBacktestBtn: document.getElementById('runBacktest'),
    testingResults: document.getElementById('testingResults'),
    opportunitiesContainer: document.getElementById('opportunitiesContainer'),
    refreshBtn: document.getElementById('refreshOpportunities'),
    autoTradingToggle: document.getElementById('autoTrading'),
    paperTradingToggle: document.getElementById('paperToggle'),
    startTradingBtn: document.getElementById('startTradingBtn'),
    stopAllBtn: document.getElementById('stopAllBtn'),
    historyBtn: document.getElementById('historyBtn'),
    settingsBtn: document.getElementById('settingsBtn'),
    tradeModal: document.getElementById('tradeModal'),
    modalClose: document.getElementById('modalClose'),
    modalCancel: document.getElementById('modalCancel'),
    modalConfirm: document.getElementById('modalConfirm'),
    modalTitle: document.getElementById('modalTitle'),
    modalBody: document.getElementById('modalBody'),
    notifications: document.getElementById('notifications'),
    marketChart: document.getElementById('marketChart'),
    aiScore: document.getElementById('aiScore'),
    balance: document.getElementById('balance'),
    dailyPnl: document.getElementById('dailyPnl'),
    openPositions: document.getElementById('openPositions'),
    successRate: document.getElementById('successRate'),
    
    // Risk Management Sliders
    riskPerTrade: document.getElementById('riskPerTrade'),
    maxDailyLoss: document.getElementById('maxDailyLoss'),
    maxPositions: document.getElementById('maxPositions')
};

// Trade History Functions
function renderTradeHistory() {
    if (!elements.historyContainer) return;
    
    elements.historyContainer.innerHTML = '';
    
    const filteredHistory = filterTradeHistory();
    
    if (filteredHistory.length === 0) {
        elements.historyContainer.innerHTML = `
            <div class="results-placeholder">
                <i class="fas fa-history"></i>
                <h3>История сделок пуста</h3>
                <p>Нет сделок, соответствующих выбранным фильтрам</p>
            </div>
        `;
        return;
    }
    
    filteredHistory.forEach((trade, index) => {
        const historyElement = createHistoryElement(trade, index);
        elements.historyContainer.appendChild(historyElement);
    });
}

function createHistoryElement(trade, index) {
    const historyDiv = document.createElement('div');
    historyDiv.className = `history-item ${trade.status}`;
    historyDiv.setAttribute('data-index', index);
    
    const pairSymbol = trade.pair.split('/')[0];
    const isProfit = parseFloat(trade.pnl_usd.replace(/[^\d.-]/g, '')) > 0;
    
    historyDiv.innerHTML = `
        <div class="history-header">
            <div class="history-pair">
                <div class="pair-icon">${pairSymbol.slice(0, 3)}</div>
                <div>
                    <div class="pair-name">${trade.pair}</div>
                    <div class="strategy-name">${trade.strategy}</div>
                </div>
            </div>
            <div class="history-status ${trade.status}">
                ${trade.status === 'profitable' ? 'Прибыль' : 'Убыток'}
            </div>
        </div>
        
        <div class="history-details">
            <div class="history-metric">
                <span class="history-metric-label">Вход</span>
                <span class="history-metric-value">${formatCurrency(trade.entry_price)}</span>
            </div>
            <div class="history-metric">
                <span class="history-metric-label">Выход</span>
                <span class="history-metric-value">${formatCurrency(trade.exit_price)}</span>
            </div>
            <div class="history-metric">
                <span class="history-metric-label">P&L</span>
                <span class="history-metric-value ${trade.status === 'profitable' ? 'profit' : 'loss'}">
                    ${trade.pnl_usd} (${trade.pnl_percent})
                </span>
            </div>
            <div class="history-metric">
                <span class="history-metric-label">Количество</span>
                <span class="history-metric-value">${trade.quantity}</span>
            </div>
            <div class="history-metric">
                <span class="history-metric-label">Длительность</span>
                <span class="history-metric-value">${trade.duration}</span>
            </div>
            <div class="history-metric">
                <span class="history-metric-label">Причина закрытия</span>
                <div class="closure-reason ${getClosureReasonClass(trade.closure_reason)}">
                    <i class="${getClosureReasonIcon(trade.closure_reason)}"></i>
                    ${trade.closure_reason}
                </div>
            </div>
        </div>
        
        <div class="history-timeline">
            <small style="color: var(--text-secondary);">
                <i class="fas fa-clock"></i> ${trade.entry_time} → ${trade.exit_time}
            </small>
        </div>
    `;
    
    return historyDiv;
}

function filterTradeHistory() {
    let filtered = [...tradingData.tradeHistory];
    
    // Period filter
    const periodFilter = elements.historyPeriodFilter?.value;
    if (periodFilter && periodFilter !== 'all') {
        // Implement period filtering logic
        const now = new Date();
        const filterDate = new Date();
        
        switch (periodFilter) {
            case 'today':
                filterDate.setHours(0, 0, 0, 0);
                break;
            case 'week':
                filterDate.setDate(now.getDate() - 7);
                break;
            case 'month':
                filterDate.setMonth(now.getMonth() - 1);
                break;
            case 'quarter':
                filterDate.setMonth(now.getMonth() - 3);
                break;
        }
        
        filtered = filtered.filter(trade => {
            const tradeDate = new Date(trade.exit_time);
            return tradeDate >= filterDate;
        });
    }
    
    // Pair filter
    const pairFilter = elements.historyPairFilter?.value;
    if (pairFilter && pairFilter !== 'all') {
        filtered = filtered.filter(trade => trade.pair === pairFilter);
    }
    
    // Strategy filter
    const strategyFilter = elements.historyStrategyFilter?.value;
    if (strategyFilter && strategyFilter !== 'all') {
        filtered = filtered.filter(trade => trade.strategy === strategyFilter);
    }
    
    // Result filter
    const resultFilter = elements.historyResultFilter?.value;
    if (resultFilter && resultFilter !== 'all') {
        filtered = filtered.filter(trade => trade.status === resultFilter);
    }
    
    return filtered;
}

function getClosureReasonClass(reason) {
    switch (reason) {
        case 'Take Profit': return 'take-profit';
        case 'Stop Loss': return 'stop-loss';
        case 'Manual Close': return 'manual-close';
        default: return 'manual-close';
    }
}

function getClosureReasonIcon(reason) {
    switch (reason) {
        case 'Take Profit': return 'fas fa-target';
        case 'Stop Loss': return 'fas fa-shield-alt';
        case 'Manual Close': return 'fas fa-hand-paper';
        default: return 'fas fa-times';
    }
}

function updateHistoryStats() {
    const stats = tradingData.accountStats;
    
    if (elements.totalCompletedTrades) {
        elements.totalCompletedTrades.textContent = stats.total_trades;
    }
    
    if (elements.winRatePercent) {
        elements.winRatePercent.textContent = stats.win_rate;
    }
    
    if (elements.totalProfitHistory) {
        elements.totalProfitHistory.textContent = stats.total_profit;
        elements.totalProfitHistory.className = `stat-value ${stats.total_profit.includes('+') ? 'positive' : 'negative'}`;
    }
    
    if (elements.avgWinAmount) {
        elements.avgWinAmount.textContent = stats.avg_win;
    }
    
    if (elements.avgLossAmount) {
        elements.avgLossAmount.textContent = stats.avg_loss;
    }
    
    if (elements.profitFactor) {
        elements.profitFactor.textContent = stats.profit_factor;
    }
}

// Trade Closure Functions
function closeTradeWithReason(index, reason) {
    const trade = tradingData.activeTrades[index];
    if (!trade) return;
    
    const pnl = parseFloat(trade.pnl_usd.replace(/[^\d.-]/g, ''));
    const isProfit = pnl > 0;
    
    // Create history entry
    const historyEntry = {
        pair: trade.pair,
        strategy: 'Active Trading', // Could be derived from trade data
        entry_price: trade.entry_price,
        exit_price: trade.current_price,
        entry_time: new Date(Date.now() - parseTimeToMs(trade.time_open)).toISOString().slice(0, 16).replace('T', ' '),
        exit_time: new Date().toISOString().slice(0, 16).replace('T', ' '),
        duration: trade.time_open,
        pnl_usd: trade.pnl_usd,
        pnl_percent: trade.pnl_percent,
        quantity: trade.quantity,
        closure_reason: reason,
        status: isProfit ? 'profitable' : 'losing'
    };
    
    // Add to history
    tradingData.tradeHistory.unshift(historyEntry);
    
    // Remove from active trades
    tradingData.activeTrades.splice(index, 1);
    
    // Update account balance
    updateAccountBalanceFromTrade(pnl);
    
    // Update statistics
    updateAccountStats(isProfit, pnl);
    
    // Show notification
    showTradeClosedNotification(trade, reason, pnl);
    
    // Refresh displays
    if (currentTab === 'active-trades') {
        renderActiveTrades();
        updateTradesSummary();
    }
    
    if (currentTab === 'trade-history') {
        renderTradeHistory();
        updateHistoryStats();
    }
    
    // Update trade count badge
    updateTradeCountBadge();
    
    // Initialize history count badge with current stats
    const historyCount = document.querySelector('.history-count');
    if (historyCount) {
        historyCount.textContent = tradingData.accountStats.total_trades;
    }
    
    return historyEntry;
}

function parseTimeToMs(timeStr) {
    const match = timeStr.match(/(\d+)h\s*(\d+)m/);
    if (match) {
        return (parseInt(match[1]) * 60 + parseInt(match[2])) * 60 * 1000;
    }
    
    const minMatch = timeStr.match(/(\d+)m/);
    if (minMatch) {
        return parseInt(minMatch[1]) * 60 * 1000;
    }
    
    return 0;
}

function updateAccountBalanceFromTrade(pnl) {
    const currentBalance = parseFloat(tradingData.accountInfo.balance.replace(',', ''));
    const newBalance = currentBalance + pnl;
    
    tradingData.accountInfo.balance = formatCurrency(newBalance);
    
    if (elements.balance) {
        elements.balance.textContent = formatCurrency(newBalance);
    }
}

function updateAccountStats(isProfit, pnl) {
    const stats = tradingData.accountStats;
    
    stats.total_trades += 1;
    
    if (isProfit) {
        stats.winning_trades += 1;
    } else {
        stats.losing_trades += 1;
    }
    
    stats.win_rate = ((stats.winning_trades / stats.total_trades) * 100).toFixed(1) + '%';
    
    const currentProfit = parseFloat(stats.total_profit.replace(/[^\d.-]/g, ''));
    const newProfit = currentProfit + pnl;
    stats.total_profit = (newProfit >= 0 ? '+' : '') + formatCurrency(Math.abs(newProfit)) + ' USDT';
    
    // Update daily P&L
    const currentDailyPnl = parseFloat(stats.daily_pnl.replace(/[^\d.-]/g, ''));
    const newDailyPnl = currentDailyPnl + pnl;
    stats.daily_pnl = (newDailyPnl >= 0 ? '+' : '') + formatCurrency(Math.abs(newDailyPnl)) + ' USDT';
    
    if (elements.dailyPnl) {
        elements.dailyPnl.textContent = stats.daily_pnl;
        elements.dailyPnl.className = `balance-change ${newDailyPnl >= 0 ? 'positive' : 'negative'}`;
    }
}

function showTradeClosedNotification(trade, reason, pnl) {
    const isProfit = pnl > 0;
    const title = isProfit ? 'Прибыльная сделка закрыта' : 'Убыточная сделка закрыта';
    const message = `${trade.pair}: ${trade.pnl_usd} (${trade.pnl_percent}) - ${reason}`;
    
    showNotification(title + '\n' + message, isProfit ? 'success' : 'warning', 8000);
}

// Automatic Trade Closure System
function startAutoCloseMonitoring() {
    autoCloseCheckInterval = setInterval(() => {
        checkForAutoClosures();
    }, 5000); // Check every 5 seconds
}

function checkForAutoClosures() {
    // Create a copy to avoid issues with array modification during iteration
    const tradesToCheck = [...tradingData.activeTrades];
    
    tradesToCheck.forEach((trade, originalIndex) => {
        // Find current index (may have changed due to closures)
        const currentIndex = tradingData.activeTrades.findIndex(t => 
            t.pair === trade.pair && t.entry_price === trade.entry_price
        );
        
        if (currentIndex === -1) return; // Trade already closed
        
        const currentTrade = tradingData.activeTrades[currentIndex];
        const currentPrice = currentTrade.current_price;
        
        // Check if price has reached TP or SL levels
        const tpReached = currentPrice >= currentTrade.take_profit;
        const slReached = currentPrice <= currentTrade.stop_loss;
        
        if (tpReached && !currentTrade.autoClosing) {
            currentTrade.autoClosing = true;
            
            // Update final values
            currentTrade.current_price = currentTrade.take_profit;
            const priceDiff = currentTrade.take_profit - currentTrade.entry_price;
            const pnlUsd = priceDiff * currentTrade.quantity;
            const pnlPercent = (priceDiff / currentTrade.entry_price) * 100;
            
            currentTrade.pnl_usd = '+' + formatCurrency(Math.abs(pnlUsd));
            currentTrade.pnl_percent = '+' + pnlPercent.toFixed(2) + '%';
            currentTrade.pnl_value = parseFloat(pnlPercent.toFixed(2));
            currentTrade.status = 'profitable';
            
            showNotification(`🎯 Take Profit достигнут!\n${currentTrade.pair}: ${currentTrade.pnl_usd} (${currentTrade.pnl_percent})`, 'success', 6000);
            
            setTimeout(() => {
                const finalIndex = tradingData.activeTrades.findIndex(t => 
                    t.pair === currentTrade.pair && t.entry_price === currentTrade.entry_price
                );
                if (finalIndex !== -1) {
                    closeTradeWithReason(finalIndex, 'Take Profit');
                }
            }, 2000);
            
        } else if (slReached && !currentTrade.autoClosing) {
            currentTrade.autoClosing = true;
            
            // Update final values
            currentTrade.current_price = currentTrade.stop_loss;
            const priceDiff = currentTrade.stop_loss - currentTrade.entry_price;
            const pnlUsd = priceDiff * currentTrade.quantity;
            const pnlPercent = (priceDiff / currentTrade.entry_price) * 100;
            
            currentTrade.pnl_usd = (pnlUsd >= 0 ? '+' : '') + formatCurrency(Math.abs(pnlUsd));
            currentTrade.pnl_percent = pnlPercent.toFixed(2) + '%';
            currentTrade.pnl_value = parseFloat(pnlPercent.toFixed(2));
            currentTrade.status = 'losing';
            
            showNotification(`🛡️ Stop Loss сработал!\n${currentTrade.pair}: ${currentTrade.pnl_usd} (${currentTrade.pnl_percent})`, 'warning', 6000);
            
            setTimeout(() => {
                const finalIndex = tradingData.activeTrades.findIndex(t => 
                    t.pair === currentTrade.pair && t.entry_price === currentTrade.entry_price
                );
                if (finalIndex !== -1) {
                    closeTradeWithReason(finalIndex, 'Stop Loss');
                }
            }, 2000);
        }
    });
}

// Tab Navigation Functions
function switchTab(tabName) {
    currentTab = tabName;
    
    // Update tab buttons
    elements.tabBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tabName) {
            btn.classList.add('active');
        }
    });
    
    // Update tab content
    elements.tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.id === `${tabName}-content`) {
            content.classList.add('active');
        }
    });
    
    // Initialize tab-specific content
    if (tabName === 'active-trades') {
        renderActiveTrades();
        updateTradesSummary();
    } else if (tabName === 'strategy-testing') {
        populateStrategySelect();
    } else if (tabName === 'trade-history') {
        renderTradeHistory();
        updateHistoryStats();
        initializePerformanceCharts();
    }
}

// Active Trades Functions
function renderActiveTrades() {
    if (!elements.tradesContainer) return;
    
    elements.tradesContainer.innerHTML = '';
    
    tradingData.activeTrades.forEach((trade, index) => {
        const tradeElement = createTradeElement(trade, index);
        elements.tradesContainer.appendChild(tradeElement);
    });
}

function createPnlCircularIndicator(trade, index, isLarge = false) {
    const pnlValue = trade.pnl_value || parseFloat(trade.pnl_percent.replace(/[^\d.-]/g, ''));
    const isProfit = pnlValue > 0;
    const isLoss = pnlValue < 0;
    const isNeutral = Math.abs(pnlValue) < 0.5; // Break-even zone
    
    // Enhanced calculation for better visual representation
    const maxDisplayPercent = 15; // Maximum percentage for full circle
    const normalizedPercent = Math.min(Math.abs(pnlValue), maxDisplayPercent);
    const progressPercent = (normalizedPercent / maxDisplayPercent) * 100;
    const circumference = 100; // SVG path circumference
    const dashArray = `${progressPercent}, ${circumference}`;
    
    // Enhanced gradient definitions
    let gradientId;
    if (isNeutral) {
        gradientId = `neutral-gradient-${index}`;
    } else if (isProfit) {
        gradientId = `profit-gradient-${index}`;
    } else {
        gradientId = `loss-gradient-${index}`;
    }
    
    const containerClass = isLarge ? 'pnl-indicator-large' : 'trade-metric';
    const indicatorClass = isLarge ? 'pnl-circular-indicator pnl-indicator-large' : 'pnl-circular-indicator';
    
    return `
        <div class="${containerClass}">
            ${!isLarge ? '<span class="trade-metric-label">P&L</span>' : ''}
            <div class="${indicatorClass}" data-pnl="${pnlValue}">
                <div class="circular-progress">
                    <svg class="circular-svg" viewBox="0 0 36 36">
                        <defs>
                            <linearGradient id="profit-gradient-${index}" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#22c55e" />
                                <stop offset="30%" stop-color="#16a34a" />
                                <stop offset="70%" stop-color="#15803d" />
                                <stop offset="100%" stop-color="#166534" />
                            </linearGradient>
                            <radialGradient id="loss-gradient-${index}" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stop-color="#fca5a5" />
                                <stop offset="40%" stop-color="#ef4444" />
                                <stop offset="80%" stop-color="#dc2626" />
                                <stop offset="100%" stop-color="#991b1b" />
                            </radialGradient>
                            <linearGradient id="neutral-gradient-${index}" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#fbbf24" />
                                <stop offset="50%" stop-color="#f59e0b" />
                                <stop offset="100%" stop-color="#d97706" />
                            </linearGradient>
                        </defs>
                        <path class="circle-bg" 
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                              fill="none" 
                              stroke="var(--border-color)" 
                              stroke-width="3" 
                              opacity="0.2"/>
                        <path class="circle-progress" 
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                              fill="none" 
                              stroke="url(#${gradientId})" 
                              stroke-width="${isLarge ? '6' : '4'}" 
                              stroke-dasharray="${dashArray}" 
                              stroke-linecap="round"/>
                    </svg>
                    <div class="pnl-percentage">${trade.pnl_percent}</div>
                </div>
                <div class="pnl-value">${trade.pnl_usd}</div>
            </div>
        </div>
    `;
}

function createTradeElement(trade, index) {
    const tradeDiv = document.createElement('div');
    tradeDiv.className = 'trade-item';
    tradeDiv.setAttribute('data-index', index);
    
    const pairSymbol = trade.pair.split('/')[0];
    const isProfit = parseFloat(trade.pnl_usd.replace(/[^\d.-]/g, '')) > 0;
    
    tradeDiv.innerHTML = `
        <div class="trade-header">
            <div class="trade-pair">
                <div class="pair-icon">${pairSymbol.slice(0, 3)}</div>
                <div>
                    <div class="pair-name">${trade.pair}</div>
                    <div class="timeframe">Открыто: ${trade.time_open}</div>
                </div>
            </div>
            <div class="trade-status ${trade.status}">
                ${trade.status === 'profitable' ? 'Прибыль' : 'Убыток'}
            </div>
        </div>
        
        <div class="lifecycle-state active">
            <i class="fas fa-chart-line"></i>
            Активная позиция
        </div>
        
        <div class="trade-details">
            <div class="trade-metric">
                <span class="trade-metric-label">Цена входа</span>
                <span class="trade-metric-value">${formatCurrency(trade.entry_price)}</span>
            </div>
            <div class="trade-metric">
                <span class="trade-metric-label">Текущая цена</span>
                <span class="trade-metric-value">${formatCurrency(trade.current_price)}</span>
            </div>
            <div class="trade-metric">
                <span class="trade-metric-label">Количество</span>
                <span class="trade-metric-value">${trade.quantity}</span>
            </div>
            ${createPnlCircularIndicator(trade, index, true)}
            <div class="trade-metric">
                <span class="trade-metric-label">Stop Loss</span>
                <span class="trade-metric-value">${formatCurrency(trade.stop_loss)}</span>
            </div>
            <div class="trade-metric">
                <span class="trade-metric-label">Take Profit</span>
                <span class="trade-metric-value">${formatCurrency(trade.take_profit)}</span>
            </div>
        </div>
        
        <div class="individual-settings" id="tradeSettings${index}">
            <div class="settings-toggle" onclick="toggleTradeSettings(${index})">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-sliders-h"></i>
                    <span>Настройки позиции</span>
                </div>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="settings-content" id="tradeSettingsContent${index}">
                <div class="preset-buttons">
                    <button class="preset-btn conservative ${trade.individual_settings.preset === 'conservative' ? 'active' : ''}" onclick="applyTradePreset(${index}, 'conservative')">Консервативный</button>
                    <button class="preset-btn moderate ${trade.individual_settings.preset === 'moderate' ? 'active' : ''}" onclick="applyTradePreset(${index}, 'moderate')">Умеренный</button>
                    <button class="preset-btn aggressive ${trade.individual_settings.preset === 'aggressive' ? 'active' : ''}" onclick="applyTradePreset(${index}, 'aggressive')">Агрессивный</button>
                </div>
                <div class="settings-row">
                    <div class="setting-control">
                        <label class="setting-label">Stop Loss (${formatCurrency(trade.stop_loss)})</label>
                        <input type="number" class="setting-input" value="${trade.stop_loss}" onchange="updateTradeSetting(${index}, 'stop_loss', this.value)">
                    </div>
                    <div class="setting-control">
                        <label class="setting-label">Take Profit (${formatCurrency(trade.take_profit)})</label>
                        <input type="number" class="setting-input" value="${trade.take_profit}" onchange="updateTradeSetting(${index}, 'take_profit', this.value)">
                    </div>
                </div>
                <div class="settings-row">
                    <div class="setting-control">
                        <label class="setting-label">Риск на сделку: ${trade.individual_settings.risk_percent}%</label>
                        <input type="range" class="setting-slider" min="0.5" max="5" step="0.1" value="${trade.individual_settings.risk_percent}" onchange="updateTradeSlider(${index}, 'risk_percent', this.value)">
                    </div>
                    <div class="setting-control">
                        <label class="setting-label">TP/SL Ratio: ${trade.individual_settings.tp_ratio}</label>
                        <input type="range" class="setting-slider" min="1" max="5" step="0.1" value="${trade.individual_settings.tp_ratio}" onchange="updateTradeSlider(${index}, 'tp_ratio', this.value)">
                    </div>
                </div>
            </div>
        </div>
        
        <div class="trade-actions">
            <button class="btn secondary small" onclick="viewTradeDetails(${index})">
                <i class="fas fa-eye"></i> Подробнее
            </button>
            <button class="close-position-btn" onclick="closeTrade(${index})" title="Закрыть позицию">
                <i class="fas fa-times"></i> Закрыть позицию
            </button>
        </div>
    `;
    
    return tradeDiv;
}

function updateTradesSummary() {
    let totalPnl = 0;
    let totalVolume = 0;
    let totalTime = 0;
    
    tradingData.activeTrades.forEach(trade => {
        const pnlValue = parseFloat(trade.pnl_usd.replace(/[^\d.-]/g, ''));
        totalPnl += pnlValue;
        totalVolume += trade.entry_price * trade.quantity;
        
        // Convert time to minutes for averaging
        const timeStr = trade.time_open;
        const hours = timeStr.includes('h') ? parseInt(timeStr.split('h')[0]) : 0;
        const minutes = timeStr.includes('m') ? parseInt(timeStr.split('m')[0].split(' ').pop()) : 0;
        totalTime += (hours * 60) + minutes;
    });
    
    if (elements.totalPnl) {
        elements.totalPnl.textContent = `${totalPnl > 0 ? '+' : ''}${formatCurrency(totalPnl)} USDT`;
        elements.totalPnl.className = `summary-value ${totalPnl > 0 ? 'positive' : 'negative'}`;
    }
    
    if (elements.totalVolume) {
        elements.totalVolume.textContent = `${formatCurrency(totalVolume)} USDT`;
    }
    
    if (elements.avgHoldTime) {
        const avgMinutes = tradingData.activeTrades.length > 0 ? totalTime / tradingData.activeTrades.length : 0;
        const avgHours = Math.floor(avgMinutes / 60);
        const avgMins = Math.floor(avgMinutes % 60);
        elements.avgHoldTime.textContent = `${avgHours}h ${avgMins}m`;
    }
}

function viewTradeDetails(index) {
    const trade = tradingData.activeTrades[index];
    selectedTrade = { ...trade, index };
    
    elements.modalTitle.textContent = `Детали позиции: ${trade.pair}`;
    elements.modalBody.innerHTML = `
        <div class="trade-detail-body">
            <div class="detail-section">
                <h4>Информация о позиции</h4>
                <div class="detail-grid">
                    <div class="detail-item">
                        <strong>Торговая пара:</strong>
                        <span>${trade.pair}</span>
                    </div>
                    <div class="detail-item">
                        <strong>Цена входа:</strong>
                        <span>${formatCurrency(trade.entry_price)}</span>
                    </div>
                    <div class="detail-item">
                        <strong>Текущая цена:</strong>
                        <span>${formatCurrency(trade.current_price)}</span>
                    </div>
                    <div class="detail-item">
                        <strong>Количество:</strong>
                        <span>${trade.quantity}</span>
                    </div>
                    <div class="detail-item">
                        <strong>Время в позиции:</strong>
                        <span>${trade.time_open}</span>
                    </div>
                </div>
            </div>
            
            <div class="detail-section">
                <h4>P&L и Управление рисками</h4>
                <div class="detail-grid">
                    <div class="detail-item">
                        <strong>Текущий P&L:</strong>
                        <span style="color: ${parseFloat(trade.pnl_usd.replace(/[^\d.-]/g, '')) > 0 ? 'var(--success)' : 'var(--danger)'}">
                            ${trade.pnl_usd} (${trade.pnl_percent})
                        </span>
                    </div>
                    <div class="detail-item">
                        <strong>Stop Loss:</strong>
                        <span>${formatCurrency(trade.stop_loss)}</span>
                    </div>
                    <div class="detail-item">
                        <strong>Take Profit:</strong>
                        <span>${formatCurrency(trade.take_profit)}</span>
                    </div>
                    <div class="detail-item">
                        <strong>Объем позиции:</strong>
                        <span>${formatCurrency(trade.entry_price * trade.quantity)} USDT</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    elements.modalConfirm.textContent = '❌ Закрыть позицию';
    elements.modalConfirm.className = 'btn danger';
    elements.modalConfirm.onclick = () => closeTradeManual(index);
    elements.tradeModal.style.display = 'block';
}

function toggleTradeSettings(index) {
    const toggle = document.querySelector(`#tradeSettings${index} .settings-toggle`);
    const content = document.getElementById(`tradeSettingsContent${index}`);
    
    if (content.classList.contains('active')) {
        content.classList.remove('active');
        toggle.classList.remove('active');
    } else {
        content.classList.add('active');
        toggle.classList.add('active');
    }
}

function toggleOpportunitySettings(index) {
    const toggle = document.querySelector(`#opportunitySettings${index} .settings-toggle`);
    const content = document.getElementById(`opportunitySettingsContent${index}`);
    
    if (content.classList.contains('active')) {
        content.classList.remove('active');
        toggle.classList.remove('active');
    } else {
        content.classList.add('active');
        toggle.classList.add('active');
    }
}

function applyTradePreset(index, preset) {
    const presetSettings = tradingData.presetOptions[preset];
    const trade = tradingData.activeTrades[index];
    
    trade.individual_settings = {
        ...trade.individual_settings,
        ...presetSettings,
        preset: preset
    };
    
    renderActiveTrades();
    showNotification(`Применены ${preset === 'conservative' ? 'консервативные' : preset === 'moderate' ? 'умеренные' : 'агрессивные'} настройки для ${trade.pair}`, 'success');
}

function applyOpportunityPreset(index, preset) {
    const presetSettings = tradingData.presetOptions[preset];
    const opportunity = tradingData.tradingOpportunities[index];
    
    opportunity.individual_settings = {
        ...opportunity.individual_settings,
        ...presetSettings,
        preset: preset
    };
    
    renderTradingOpportunities();
    showNotification(`Применены ${preset === 'conservative' ? 'консервативные' : preset === 'moderate' ? 'умеренные' : 'агрессивные'} настройки для ${opportunity.pair}`, 'success');
}

function updateTradeSetting(index, setting, value) {
    const trade = tradingData.activeTrades[index];
    trade[setting] = parseFloat(value);
    showNotification(`${setting === 'stop_loss' ? 'Stop Loss' : 'Take Profit'} обновлен для ${trade.pair}`, 'success');
}

function updateTradeSlider(index, setting, value) {
    const trade = tradingData.activeTrades[index];
    trade.individual_settings[setting] = parseFloat(value);
    
    // Update label
    const label = document.querySelector(`#tradeSettingsContent${index} .setting-control label:has(+ input[onchange*="${setting}"])`);
    if (label) {
        if (setting === 'risk_percent') {
            label.textContent = `Риск на сделку: ${value}%`;
        } else if (setting === 'tp_ratio') {
            label.textContent = `TP/SL Ratio: ${value}`;
        }
    }
    
    showNotification(`Настройка обновлена для ${trade.pair}`, 'info');
}

function updateOpportunitySlider(index, setting, value) {
    const opportunity = tradingData.tradingOpportunities[index];
    opportunity.individual_settings[setting] = parseFloat(value);
    
    // Update label
    const label = document.querySelector(`#opportunitySettingsContent${index} .setting-control label:has(+ input[onchange*="${setting}"])`);
    if (label) {
        if (setting === 'position_size') {
            label.textContent = `Размер позиции: ${value}%`;
        } else if (setting === 'risk_percent') {
            label.textContent = `Риск на сделку: ${value}%`;
        } else if (setting === 'sl_distance') {
            label.textContent = `SL дистанция: ${value}%`;
        } else if (setting === 'tp_ratio') {
            label.textContent = `TP/SL Ratio: ${value}`;
        }
    }
    
    showNotification(`Настройка обновлена для ${opportunity.pair}`, 'info');
}

function closeTradeManual(index) {
    showConfirmationModal(
        'Закрытие позиции',
        `Вы уверены, что хотите закрыть позицию ${tradingData.activeTrades[index].pair}?<br><br>Текущий P&L: <strong>${tradingData.activeTrades[index].pnl_usd}</strong>`,
        () => {
            closeTradeWithReason(index, 'Manual Close');
            elements.tradeModal.style.display = 'none';
        }
    );
}

function closeTrade(index) {
    showConfirmationModal(
        'Закрытие позиции',
        `Вы уверены, что хотите закрыть позицию ${tradingData.activeTrades[index].pair}?`,
        () => {
            const trade = tradingData.activeTrades[index];
            const pnl = parseFloat(trade.pnl_usd.replace(/[^\d.-]/g, ''));
            
            tradingData.activeTrades.splice(index, 1);
            
            if (currentTab === 'active-trades') {
                renderActiveTrades();
                updateTradesSummary();
            }
            
            // Update trade count badge
            const tradeCount = document.querySelector('.trade-count');
            if (tradeCount) {
                tradeCount.textContent = tradingData.activeTrades.length;
            }
            
            updateAccountInfo();
            
            showNotification(
                `Позиция ${trade.pair} закрыта с P&L: ${trade.pnl_usd}`,
                pnl > 0 ? 'success' : 'warning'
            );
            
            elements.tradeModal.style.display = 'none';
        }
    );
}

function closeAllTradesManual() {
    if (tradingData.activeTrades.length === 0) {
        showNotification('Нет активных позиций для закрытия', 'info');
        return;
    }
    
    let totalPnl = 0;
    tradingData.activeTrades.forEach(trade => {
        totalPnl += parseFloat(trade.pnl_usd.replace(/[^\d.-]/g, ''));
    });
    
    showConfirmationModal(
        'Закрытие всех позиций',
        `Вы уверены, что хотите закрыть все ${tradingData.activeTrades.length} позиций?<br><br>Общий P&L: <strong>${totalPnl > 0 ? '+' : ''}${formatCurrency(Math.abs(totalPnl))} USDT</strong>`,
        () => {
            const tradesToClose = [...tradingData.activeTrades];
            tradesToClose.forEach((trade, index) => {
                closeTradeWithReason(0, 'Manual Close'); // Always close index 0 as array shrinks
            });
            
            showNotification(
                `Все позиции закрыты. Общий P&L: ${totalPnl > 0 ? '+' : ''}${formatCurrency(Math.abs(totalPnl))} USDT`,
                totalPnl > 0 ? 'success' : 'warning'
            );
        }
    );
}

function closeAllTrades() {
    showConfirmationModal(
        'Закрытие всех позиций',
        `Вы уверены, что хотите закрыть все ${tradingData.activeTrades.length} позиций?`,
        () => {
            let totalPnl = 0;
            tradingData.activeTrades.forEach(trade => {
                totalPnl += parseFloat(trade.pnl_usd.replace(/[^\d.-]/g, ''));
            });
            
            tradingData.activeTrades = [];
            
            if (currentTab === 'active-trades') {
                renderActiveTrades();
                updateTradesSummary();
            }
            
            // Update trade count badge
            const tradeCount = document.querySelector('.trade-count');
            if (tradeCount) {
                tradeCount.textContent = '0';
            }
            
            updateAccountInfo();
            showNotification(
                `Все позиции закрыты. Общий P&L: ${totalPnl > 0 ? '+' : ''}${formatCurrency(totalPnl)} USDT`,
                totalPnl > 0 ? 'success' : 'warning'
            );
        }
    );
}

// Strategy Testing Functions
function populateStrategySelect() {
    if (!elements.strategySelect) return;
    
    elements.strategySelect.innerHTML = '';
    tradingData.strategies.forEach(strategy => {
        const option = document.createElement('option');
        option.value = strategy.name.toLowerCase().replace(/\s+/g, '-');
        option.textContent = strategy.name;
        elements.strategySelect.appendChild(option);
    });
}

function runBacktest() {
    if (backtestRunning) return;
    
    backtestRunning = true;
    const button = elements.runBacktestBtn;
    const originalText = button.innerHTML;
    
    // Show loading state
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Выполняется тест...';
    button.disabled = true;
    
    // Create loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = `
        <div class="loading-content">
            <div class="loading-spinner"></div>
            <h3>Выполнение бэктеста</h3>
            <p>Анализ исторических данных...</p>
            <div class="progress-bar">
                <div class="progress-fill" id="progressFill"></div>
            </div>
            <p id="progressText">0%</p>
        </div>
    `;
    
    elements.testingResults.style.position = 'relative';
    elements.testingResults.appendChild(loadingOverlay);
    
    // Simulate progress
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        
        if (progressFill) progressFill.style.width = `${progress}%`;
        if (progressText) progressText.textContent = `${Math.floor(progress)}%`;
        
        if (progress >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => {
                showBacktestResults();
                if (loadingOverlay.parentNode) {
                    loadingOverlay.parentNode.removeChild(loadingOverlay);
                }
                button.innerHTML = originalText;
                button.disabled = false;
                backtestRunning = false;
            }, 500);
        }
    }, 200);
}

function showBacktestResults() {
    const results = tradingData.backtestResults;
    
    elements.testingResults.innerHTML = `
        <div class="backtest-results">
            <div class="results-header">
                <h3>Результаты бэктеста</h3>
                <p>Стратегия: ${elements.strategySelect.options[elements.strategySelect.selectedIndex].text}</p>
            </div>
            
            <div class="results-stats">
                <div class="stat-card">
                    <div class="stat-value">${results.total_trades}</div>
                    <div class="stat-label">Всего сделок</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${results.win_rate}</div>
                    <div class="stat-label">Процент прибыльных</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value" style="color: var(--success)">${results.total_profit}</div>
                    <div class="stat-label">Общая прибыль</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${results.max_drawdown}</div>
                    <div class="stat-label">Макс. просадка</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${results.sharpe_ratio}</div>
                    <div class="stat-label">Коэф. Шарпа</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${results.profit_factor}</div>
                    <div class="stat-label">Фактор прибыли</div>
                </div>
            </div>
            
            <div class="equity-chart">
                <h4>Кривая доходности</h4>
                <canvas id="equityChart" width="600" height="300"></canvas>
            </div>
            
            <div class="detailed-stats" style="margin-top: 2rem;">
                <h4>Детальная статистика</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                    <div>
                        <p><strong>Прибыльные сделки:</strong> ${results.winning_trades}</p>
                        <p><strong>Убыточные сделки:</strong> ${results.losing_trades}</p>
                        <p><strong>Средняя прибыль:</strong> ${results.avg_win}</p>
                    </div>
                    <div>
                        <p><strong>Средний убыток:</strong> ${results.avg_loss}</p>
                        <p><strong>Коэффициент Шарпа:</strong> ${results.sharpe_ratio}</p>
                        <p><strong>Фактор прибыли:</strong> ${results.profit_factor}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Draw equity curve
    setTimeout(() => {
        drawEquityCurve();
    }, 100);
}

function drawEquityCurve() {
    const canvas = document.getElementById('equityChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Generate sample equity curve data
    const dataPoints = 50;
    const data = [];
    let equity = 10000;
    
    for (let i = 0; i < dataPoints; i++) {
        const change = (Math.random() - 0.3) * 200; // Slight upward bias
        equity += change;
        data.push({
            x: (i / (dataPoints - 1)) * width,
            y: height - ((equity - 8000) / 6000) * height // Scale to canvas
        });
    }
    
    // Draw grid
    ctx.strokeStyle = '#2d3548';
    ctx.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
        const y = (i / 4) * height;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }
    
    // Draw area under curve
    ctx.fillStyle = 'rgba(34, 197, 94, 0.1)';
    ctx.beginPath();
    ctx.moveTo(0, height);
    for (let i = 0; i < data.length; i++) {
        ctx.lineTo(data[i].x, data[i].y);
    }
    ctx.lineTo(width, height);
    ctx.closePath();
    ctx.fill();
    
    // Draw line
    ctx.strokeStyle = '#22c55e';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(data[0].x, data[0].y);
    for (let i = 1; i < data.length; i++) {
        ctx.lineTo(data[i].x, data[i].y);
    }
    ctx.stroke();
}

// Enhanced Risk Management Functions
function updateRiskSlider(sliderId) {
    const slider = document.getElementById(sliderId);
    if (!slider) return;
    
    const value = parseInt(slider.value);
    const max = parseInt(slider.max);
    const percentage = (value / max) * 100;
    
    // Determine risk level and color
    let riskLevel = 'conservative';
    let riskText = 'Консервативный';
    
    if (percentage >= riskLevels.aggressive.min) {
        riskLevel = 'aggressive';
        riskText = 'Агрессивный';
    } else if (percentage >= riskLevels.moderate.min) {
        riskLevel = 'moderate';
        riskText = 'Умеренный';
    }
    
    // Update slider class
    slider.className = `slider ${riskLevel}`;
    
    // Update value display
    const valueDisplay = slider.nextElementSibling;
    if (valueDisplay && valueDisplay.classList.contains('value-display')) {
        if (sliderId === 'maxPositions') {
            valueDisplay.innerHTML = `${value} <span class="risk-level-indicator ${riskLevel}">${riskText}</span>`;
        } else {
            valueDisplay.innerHTML = `${value}% <span class="risk-level-indicator ${riskLevel}">${riskText}</span>`;
        }
    }
}

// Confirmation Modal Function
function showConfirmationModal(title, message, onConfirm) {
    elements.modalTitle.textContent = title;
    elements.modalBody.innerHTML = `
        <div class="confirmation-modal">
            <div class="confirmation-icon">
                <i class="fas fa-exclamation-triangle" style="color: var(--warning); font-size: 3rem;"></i>
            </div>
            <div class="confirmation-text" style="text-align: center; margin: 1.5rem 0;">
                <p style="font-size: 1.1rem; line-height: 1.6; margin: 0;">${message}</p>
            </div>
        </div>
    `;
    
    elements.modalConfirm.textContent = '✅ Подтвердить';
    elements.modalConfirm.className = 'btn primary';
    elements.modalConfirm.onclick = () => {
        onConfirm();
        elements.tradeModal.style.display = 'none';
    };
    
    elements.tradeModal.style.display = 'block';
}

// Enhanced Trade Price Updates with Auto-Close Detection
function updateTradePrices() {
    tradingData.activeTrades.forEach(trade => {
        // Simulate price changes
        const change = (Math.random() - 0.5) * 0.02; // ±2% random change
        const newPrice = trade.current_price * (1 + change);
        trade.current_price = parseFloat(newPrice.toFixed(2));
        
        // Recalculate P&L
        const priceDiff = trade.current_price - trade.entry_price;
        const pnlUsd = priceDiff * trade.quantity;
        const pnlPercent = (priceDiff / trade.entry_price) * 100;
        
        trade.pnl_usd = (pnlUsd >= 0 ? '+' : '') + formatCurrency(Math.abs(pnlUsd));
        trade.pnl_percent = (pnlPercent >= 0 ? '+' : '') + pnlPercent.toFixed(2) + '%';
        trade.pnl_value = parseFloat(pnlPercent.toFixed(2)); // Add pnl_value for circular indicators
        trade.status = pnlUsd >= 0 ? 'profitable' : 'losing';
        
        // Update time
        const timeMatch = trade.time_open.match(/(\d+)h (\d+)m/);
        if (timeMatch) {
            let hours = parseInt(timeMatch[1]);
            let minutes = parseInt(timeMatch[2]) + 1;
            if (minutes >= 60) {
                hours += 1;
                minutes = 0;
            }
            trade.time_open = `${hours}h ${minutes}m`;
        } else {
            const minMatch = trade.time_open.match(/(\d+)m/);
            if (minMatch) {
                const minutes = parseInt(minMatch[1]) + 1;
                if (minutes >= 60) {
                    trade.time_open = `1h 0m`;
                } else {
                    trade.time_open = `${minutes}m`;
                }
            }
        }
    });
    
    // Update display if on active trades tab
    if (currentTab === 'active-trades') {
        renderActiveTrades();
        updateTradesSummary();
    }
    
    // Check for auto-close conditions
    tradingData.activeTrades.forEach((trade, index) => {
        if (trade.current_price >= trade.take_profit * 0.999) { // Close to TP
            if (!trade.autoCloseNotified) {
                showNotification(`🎯 ${trade.pair} приближается к Take Profit! Текущий P&L: ${trade.pnl_usd}`, 'success');
                trade.autoCloseNotified = true;
            }
        } else if (trade.current_price <= trade.stop_loss * 1.001) { // Close to SL
            if (!trade.autoCloseNotified) {
                showNotification(`🛡️ ${trade.pair} приближается к Stop Loss! Текущий P&L: ${trade.pnl_usd}`, 'warning');
                trade.autoCloseNotified = true;
            }
        }
    });
}

// Performance Charts
function initializePerformanceCharts() {
    if (typeof Chart === 'undefined') {
        // Load Chart.js if not available
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
        script.onload = () => {
            drawProfitChart();
            drawStrategyChart();
        };
        document.head.appendChild(script);
    } else {
        drawProfitChart();
        drawStrategyChart();
    }
}

function drawProfitChart() {
    const canvas = elements.profitChart;
    if (!canvas || !canvas.getContext) return;
    
    // Destroy existing chart if it exists
    if (chartInstances.profitChart) {
        chartInstances.profitChart.destroy();
    }
    
    const ctx = canvas.getContext('2d');
    
    // Generate sample profit data over time
    const labels = [];
    const data = [];
    let cumulativeProfit = 0;
    
    for (let i = 0; i < 30; i++) {
        const date = new Date();
        date.setDate(date.getDate() - (29 - i));
        labels.push(date.toLocaleDateString('ru-RU', { month: 'short', day: 'numeric' }));
        
        const dailyChange = (Math.random() - 0.3) * 100; // Slight upward bias
        cumulativeProfit += dailyChange;
        data.push(cumulativeProfit);
    }
    
    chartInstances.profitChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Накопленная прибыль (USDT)',
                data: data,
                borderColor: '#22c55e',
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#94a3b8'
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#94a3b8'
                    }
                }
            }
        }
    });
}

function drawStrategyChart() {
    const canvas = elements.strategyChart;
    if (!canvas || !canvas.getContext) return;
    
    // Destroy existing chart if it exists
    if (chartInstances.strategyChart) {
        chartInstances.strategyChart.destroy();
    }
    
    const ctx = canvas.getContext('2d');
    
    chartInstances.strategyChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Breakout Pattern', 'Support Bounce', 'Momentum Trade', 'Mean Reversion'],
            datasets: [{
                data: [35, 25, 20, 20],
                backgroundColor: [
                    '#1FB8CD',
                    '#FFC185', 
                    '#B4413C',
                    '#ECEBD5'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#94a3b8',
                        padding: 20,
                        font: {
                            size: 12
                        }
                    }
                }
            }
        }
    });
}

// Global functions for onclick handlers
window.viewTradeDetails = viewTradeDetails;
window.closeTrade = closeTradeManual;
window.closeTradeWithReason = closeTradeWithReason;
window.closeAllTrades = closeAllTradesManual;
window.toggleTradeSettings = toggleTradeSettings;
window.toggleOpportunitySettings = toggleOpportunitySettings;
window.applyTradePreset = applyTradePreset;
window.applyOpportunityPreset = applyOpportunityPreset;
window.updateTradeSetting = updateTradeSetting;
window.updateTradeSlider = updateTradeSlider;
window.updateOpportunitySlider = updateOpportunitySlider;

// Utility Functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('ru-RU', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}

function getRandomChange() {
    return (Math.random() - 0.5) * 10; // Random change between -5% and +5%
}

function showNotification(message, type = 'info', duration = 5000) {
    const notification = document.createElement('div');
    notification.className = `notification-toast ${type}`;
    
    // Handle multi-line messages
    const formattedMessage = message.replace(/\n/g, '<br>');
    
    notification.innerHTML = `
        <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
            <i class="fas ${
                type === 'success' ? 'fa-check-circle' :
                type === 'warning' ? 'fa-exclamation-triangle' :
                type === 'error' ? 'fa-times-circle' :
                'fa-info-circle'
            }" style="margin-top: 0.1rem; flex-shrink: 0;"></i>
            <div style="flex: 1;">
                <div style="font-weight: 600; margin-bottom: 0.25rem; font-size: 0.9rem;">
                    ${type === 'success' ? 'Успешно' : 
                      type === 'warning' ? 'Внимание' : 
                      type === 'error' ? 'Ошибка' : 
                      'Информация'}
                </div>
                <div style="font-size: 0.85rem; line-height: 1.4;">
                    ${formattedMessage}
                </div>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="background: none; border: none; color: var(--text-secondary); cursor: pointer; padding: 0; margin-left: 0.5rem;">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add to notifications container
    if (!elements.notifications.querySelector('.notification-container')) {
        const container = document.createElement('div');
        container.className = 'notification-container';
        container.style.cssText = `
            position: fixed;
            top: 100px;
            right: 2rem;
            z-index: 1001;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            pointer-events: none;
        `;
        elements.notifications.appendChild(container);
    }
    
    const container = elements.notifications.querySelector('.notification-container');
    container.appendChild(notification);
    notification.style.pointerEvents = 'auto';
    
    // Auto-remove after duration
    setTimeout(() => {
        notification.style.animation = 'slideInToast 0.3s ease reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, duration);
}

// Chart Functionality
function drawMarketChart() {
    const canvas = elements.marketChart;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Generate sample data points
    const dataPoints = 50;
    const data = [];
    for (let i = 0; i < dataPoints; i++) {
        data.push({
            x: (i / (dataPoints - 1)) * width,
            y: height / 2 + Math.sin(i * 0.2) * 30 + Math.random() * 20 - 10
        });
    }
    
    // Draw grid
    ctx.strokeStyle = '#2d3548';
    ctx.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
        const y = (i / 4) * height;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }
    
    // Draw area under curve
    ctx.fillStyle = 'rgba(59, 130, 246, 0.1)';
    ctx.beginPath();
    ctx.moveTo(0, height);
    for (let i = 0; i < data.length; i++) {
        ctx.lineTo(data[i].x, data[i].y);
    }
    ctx.lineTo(width, height);
    ctx.closePath();
    ctx.fill();
    
    // Draw line
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(data[0].x, data[0].y);
    for (let i = 1; i < data.length; i++) {
        ctx.lineTo(data[i].x, data[i].y);
    }
    ctx.stroke();
}

// Trading Opportunities
function renderTradingOpportunities() {
    if (!elements.opportunitiesContainer) return;
    
    elements.opportunitiesContainer.innerHTML = '';
    
    if (tradingData.tradingOpportunities.length === 0) {
        elements.opportunitiesContainer.innerHTML = `
            <div class="results-placeholder">
                <i class="fas fa-search"></i>
                <h3>Поиск возможностей...</h3>
                <p>Поиск новых торговых сигналов на рынке</p>
            </div>
        `;
        return;
    }
    
    tradingData.tradingOpportunities.forEach((opportunity, index) => {
        const card = createOpportunityCard(opportunity, index);
        elements.opportunitiesContainer.appendChild(card);
    });
}

function createOpportunityCard(opportunity, index) {
    const card = document.createElement('div');
    card.className = 'opportunity-card';
    card.setAttribute('data-index', index);
    
    const pairSymbol = opportunity.pair.split('/')[0];
    const isPositiveChange = parseFloat(opportunity.profit_expectation) > 0;
    const confirmedSystems = opportunity.confirmed_by.length;
    
    // Get AI scoring data from tradingData.ai_reasoning
    const aiData = tradingData.ai_reasoning[opportunity.pair.replace('/', '_')] || {
        technical_score: opportunity.ai_score || 90,
        volume_score: opportunity.ai_score || 90,
        sentiment_score: opportunity.ai_score || 90,
        risk_score: opportunity.ai_score || 90,
        overall_confidence: opportunity.ai_score || 90,
        reasons: [
            "Сильный технический сигнал обнаружен",
            "Объемы подтверждают движение",
            "Позитивный рыночный сентимент",
            "Оптимальное соотношение риск/доходность"
        ]
    };
    
    card.innerHTML = `
        <div class="card-header">
            <div class="trading-pair">
                <div class="pair-icon">${pairSymbol.slice(0, 3)}</div>
                <div>
                    <div class="pair-name">${opportunity.pair}</div>
                    <div class="strategy-name">${opportunity.strategy}</div>
                </div>
            </div>
            <div class="ai-confidence-badge">
                <div class="confidence-circle">
                    <span class="confidence-value">${aiData.overall_confidence}%</span>
                </div>
                <div class="confidence-label">AI Confidence</div>
            </div>
        </div>
        
        <div class="ai-scoring-section">
            <h4>AI Анализ</h4>
            <div class="scoring-grid">
                <div class="score-item">
                    <div class="score-bar">
                        <div class="score-fill technical" style="width: ${aiData.technical_score}%"></div>
                    </div>
                    <div class="score-info">
                        <span class="score-label">Технический</span>
                        <span class="score-value">${aiData.technical_score}/100</span>
                    </div>
                </div>
                <div class="score-item">
                    <div class="score-bar">
                        <div class="score-fill volume" style="width: ${aiData.volume_score}%"></div>
                    </div>
                    <div class="score-info">
                        <span class="score-label">Объемы</span>
                        <span class="score-value">${aiData.volume_score}/100</span>
                    </div>
                </div>
                <div class="score-item">
                    <div class="score-bar">
                        <div class="score-fill sentiment" style="width: ${aiData.sentiment_score}%"></div>
                    </div>
                    <div class="score-info">
                        <span class="score-label">Сентимент</span>
                        <span class="score-value">${aiData.sentiment_score}/100</span>
                    </div>
                </div>
                <div class="score-item">
                    <div class="score-bar">
                        <div class="score-fill risk" style="width: ${aiData.risk_score}%"></div>
                    </div>
                    <div class="score-info">
                        <span class="score-label">Риск</span>
                        <span class="score-value">${aiData.risk_score}/100</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="ai-explanation-panel">
            <h4>Почему выбрана эта пара:</h4>
            <div class="explanation-list">
                ${aiData.reasons.map(reason => `
                    <div class="explanation-item">
                        <i class="fas fa-check-circle"></i>
                        <span>${reason}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="card-content">
            <div class="metric">
                <span class="metric-label">Ожидаемая прибыль</span>
                <span class="metric-value profit">+${opportunity.profit_expectation}</span>
            </div>
            <div class="metric">
                <span class="metric-label">Таймфрейм</span>
                <span class="metric-value">${opportunity.timeframe}</span>
            </div>
            <div class="metric">
                <span class="metric-label">Stop Loss</span>
                <span class="metric-value">${opportunity.stop_loss}</span>
            </div>
            <div class="metric">
                <span class="metric-label">Take Profit</span>
                <span class="metric-value">${opportunity.take_profit}</span>
            </div>
        </div>
        
        <div class="confirmation-systems">
            <div class="system-badge ${opportunity.confirmed_by.includes('technical') ? 'confirmed' : ''}">
                <i class="fas fa-chart-bar"></i> Технический
            </div>
            <div class="system-badge ${opportunity.confirmed_by.includes('sentiment') ? 'confirmed' : ''}">
                <i class="fas fa-newspaper"></i> Сентимент
            </div>
        </div>
        
        <div class="individual-settings" id="opportunitySettings${index}">
            <div class="settings-toggle" onclick="toggleOpportunitySettings(${index})">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-sliders-h"></i>
                    <span>Настройки сделки</span>
                </div>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="settings-content" id="opportunitySettingsContent${index}">
                <div class="preset-buttons">
                    <button class="preset-btn conservative ${opportunity.individual_settings.preset === 'conservative' ? 'active' : ''}" onclick="applyOpportunityPreset(${index}, 'conservative')">Консервативный</button>
                    <button class="preset-btn moderate ${opportunity.individual_settings.preset === 'moderate' ? 'active' : ''}" onclick="applyOpportunityPreset(${index}, 'moderate')">Умеренный</button>
                    <button class="preset-btn aggressive ${opportunity.individual_settings.preset === 'aggressive' ? 'active' : ''}" onclick="applyOpportunityPreset(${index}, 'aggressive')">Агрессивный</button>
                </div>
                <div class="settings-row">
                    <div class="setting-control">
                        <label class="setting-label">Размер позиции: ${opportunity.individual_settings.position_size}%</label>
                        <input type="range" class="setting-slider" min="1" max="10" step="0.5" value="${opportunity.individual_settings.position_size}" onchange="updateOpportunitySlider(${index}, 'position_size', this.value)">
                    </div>
                    <div class="setting-control">
                        <label class="setting-label">Риск на сделку: ${opportunity.individual_settings.risk_percent}%</label>
                        <input type="range" class="setting-slider" min="0.5" max="5" step="0.1" value="${opportunity.individual_settings.risk_percent}" onchange="updateOpportunitySlider(${index}, 'risk_percent', this.value)">
                    </div>
                </div>
                <div class="settings-row">
                    <div class="setting-control">
                        <label class="setting-label">SL дистанция: ${opportunity.individual_settings.sl_distance}%</label>
                        <input type="range" class="setting-slider" min="1" max="10" step="0.5" value="${opportunity.individual_settings.sl_distance}" onchange="updateOpportunitySlider(${index}, 'sl_distance', this.value)">
                    </div>
                    <div class="setting-control">
                        <label class="setting-label">TP/SL Ratio: ${opportunity.individual_settings.tp_ratio}</label>
                        <input type="range" class="setting-slider" min="1" max="5" step="0.1" value="${opportunity.individual_settings.tp_ratio}" onchange="updateOpportunitySlider(${index}, 'tp_ratio', this.value)">
                    </div>
                </div>
            </div>
        </div>
        
        <div class="card-actions">
            <button class="btn secondary small" onclick="viewOpportunityDetails(${index})">
                <i class="fas fa-eye"></i> Подробнее
            </button>
            <button class="btn primary small" onclick="activateOpportunity(${index})" 
                    title="Активировать сделку">
                <i class="fas fa-rocket"></i> Активировать
            </button>
        </div>
    `;
    
    return card;
}

function viewOpportunityDetails(index) {
    const opportunity = tradingData.tradingOpportunities[index];
    selectedOpportunity = opportunity;
    
    elements.modalTitle.textContent = `Детали сделки: ${opportunity.pair}`;
    elements.modalBody.innerHTML = `
        <div style="display: grid; gap: 1.5rem;">
            <div class="detail-section">
                <h4>Информация о сделке</h4>
                <div class="detail-grid">
                    <div><strong>Стратегия:</strong> ${opportunity.strategy}</div>
                    <div><strong>Таймфрейм:</strong> ${opportunity.timeframe}</div>
                    <div><strong>AI Скор:</strong> <span style="color: var(--success)">${opportunity.ai_score}%</span></div>
                    <div><strong>Ожидаемая прибыль:</strong> <span style="color: var(--success)">+${opportunity.profit_expectation}</span></div>
                </div>
            </div>
            
            <div class="detail-section">
                <h4>Управление рисками</h4>
                <div class="detail-grid">
                    <div><strong>Stop Loss:</strong> ${opportunity.stop_loss} USDT</div>
                    <div><strong>Take Profit:</strong> ${opportunity.take_profit} USDT</div>
                    <div><strong>Риск/Доходность:</strong> 1:${(parseFloat(opportunity.profit_expectation) / 2).toFixed(1)}</div>
                    <div><strong>Макс. убыток:</strong> 2% от депозита</div>
                </div>
            </div>
            
            <div class="detail-section">
                <h4>AI Анализ</h4>
                <div class="reasoning-list">
                    ${opportunity.confirmed_by.includes('technical') ? 
                        '<div class="reasoning-point"><i class="fas fa-chart-line"></i> Технический анализ подтверждает прорыв ключевого уровня сопротивления</div>' : ''}
                    ${opportunity.confirmed_by.includes('sentiment') ? 
                        '<div class="reasoning-point"><i class="fas fa-newspaper"></i> Позитивный сентимент рынка и благоприятные новости</div>' : ''}
                    <div class="reasoning-point"><i class="fas fa-shield-alt"></i> Риски минимальны благодаря четким уровням стоп-лосса</div>
                </div>
            </div>
        </div>
        
        <style>
            .detail-section { background: var(--tertiary-bg); padding: 1rem; border-radius: 6px; }
            .detail-section h4 { margin-bottom: 0.75rem; color: var(--text-primary); }
            .detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.9rem; }
            .reasoning-list { display: flex; flex-direction: column; gap: 0.5rem; }
            .reasoning-point { display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; }
            .reasoning-point i { color: var(--accent-blue); }
        </style>
    `;
    
    elements.tradeModal.style.display = 'block';
}

function activateOpportunity(index) {
    const opportunity = tradingData.tradingOpportunities[index];
    
    // Convert opportunity to active trade
    const newTrade = {
        pair: opportunity.pair,
        entry_price: parseFloat(opportunity.take_profit) * 0.95, // Simulate entry near current price
        current_price: parseFloat(opportunity.take_profit) * 0.95,
        quantity: (opportunity.individual_settings.position_size * 100) / (parseFloat(opportunity.take_profit) * 0.95), // Calculate based on position size
        pnl_usd: "+0.00",
        pnl_percent: "+0.00%", 
        pnl_value: 0,
        time_open: "0m",
        stop_loss: parseFloat(opportunity.stop_loss),
        take_profit: parseFloat(opportunity.take_profit),
        status: "profitable",
        individual_settings: opportunity.individual_settings,
        autoCloseNotified: false
    };
    
    // Add to active trades
    tradingData.activeTrades.push(newTrade);
    
    if (paperTradingMode) {
        showNotification(`📊 Бумажная сделка активирована: ${opportunity.pair}\nРазмер позиции: ${opportunity.individual_settings.position_size}%`, 'success');
    } else {
        showNotification(`💰 Реальная сделка активирована: ${opportunity.pair}\nРазмер позиции: ${opportunity.individual_settings.position_size}%`, 'success');
    }
    
    // Update trade count badge
    updateTradeCountBadge();
    
    // Remove the opportunity from the list
    setTimeout(() => {
        tradingData.tradingOpportunities.splice(index, 1);
        renderTradingOpportunities();
    }, 1500);
    
    // Update account info
    updateAccountInfo();
}

// Account Management
function updateAccountInfo() {
    const balance = parseFloat(tradingData.accountInfo.balance.replace(',', ''));
    const change = getRandomChange();
    const newBalance = balance + change;
    
    elements.balance.textContent = formatCurrency(newBalance);
    tradingData.accountInfo.balance = formatCurrency(newBalance);
    
    if (change > 0) {
        elements.dailyPnl.textContent = `+${formatCurrency(Math.abs(change))} USDT`;
        elements.dailyPnl.className = 'balance-change positive';
    } else {
        elements.dailyPnl.textContent = `-${formatCurrency(Math.abs(change))} USDT`;
        elements.dailyPnl.className = 'balance-change negative';
    }
    
    // Update open positions
    const newPositions = Math.max(0, tradingData.accountInfo.open_positions + (Math.random() > 0.5 ? 1 : -1));
    elements.openPositions.textContent = newPositions;
    tradingData.accountInfo.open_positions = newPositions;
}

// Confirmation Icons System
function renderConfirmationIcons() {
    const container = document.getElementById('confirmationIcons');
    if (!container) return;
    
    container.innerHTML = '';
    
    tradingData.confirmationIcons.forEach((icon, index) => {
        const iconElement = document.createElement('div');
        iconElement.className = `confirmation-icon ${icon.active ? 'active' : ''}`;
        iconElement.setAttribute('data-index', index);
        iconElement.setAttribute('title', icon.description);
        
        iconElement.innerHTML = `
            <div class="icon-symbol">${icon.icon}</div>
            <div class="icon-label">${icon.name}</div>
        `;
        
        iconElement.addEventListener('click', () => toggleConfirmationIcon(index));
        container.appendChild(iconElement);
    });
}

function toggleConfirmationIcon(index) {
    const icon = tradingData.confirmationIcons[index];
    icon.active = !icon.active;
    
    const iconElement = document.querySelector(`[data-index="${index}"]`);
    if (iconElement) {
        iconElement.classList.toggle('active', icon.active);
    }
    
    showNotification(
        `${icon.name} ${icon.active ? 'активирован' : 'деактивирован'}`,
        icon.active ? 'success' : 'info'
    );
    
    // Update system effectiveness based on active confirmations
    updateSystemEffectiveness();
}

function updateSystemEffectiveness() {
    const activeCount = tradingData.confirmationIcons.filter(icon => icon.active).length;
    const totalCount = tradingData.confirmationIcons.length;
    const effectiveness = Math.round((activeCount / totalCount) * 100);
    
    // Update AI score based on active systems
    const baseScore = 85;
    const bonusScore = (activeCount * 2.5);
    const newScore = Math.min(98, baseScore + bonusScore);
    
    if (elements.aiScore) {
        elements.aiScore.textContent = `${newScore.toFixed(1)}%`;
    }
}

// Enhanced Settings Sliders System
function initializeSettingsSliders() {
    // Basic settings sliders
    const basicSliders = [
        'tradeSizePercent', 'tpSiRatio', 'minTakeProfit', 
        'maxTradesHour', 'maxDrawdown'
    ];
    
    // Advanced settings sliders  
    const advancedSliders = [
        'stopLossDistance', 'riskPerTradeAdvanced', 'minVolumeFilter',
        'volatilityThreshold', 'rsiLevels', 'maPeriod'
    ];
    
    [...basicSliders, ...advancedSliders].forEach(sliderId => {
        const slider = document.getElementById(sliderId);
        if (slider) {
            setupSlider(slider, sliderId);
        }
    });
}

function setupSlider(slider, sliderId) {
    // Initialize value display
    updateSliderValue(slider, sliderId);
    
    // Add event listener
    slider.addEventListener('input', function() {
        updateSliderValue(this, sliderId);
    });
    
    // Add hover effect for thumb position
    slider.addEventListener('mousemove', function(e) {
        const rect = slider.getBoundingClientRect();
        const percentage = ((e.clientX - rect.left) / rect.width) * 100;
        slider.style.setProperty('--thumb-position', `${percentage}%`);
    });
}

function updateSliderValue(slider, sliderId) {
    const value = parseFloat(slider.value);
    const valueDisplay = document.getElementById(sliderId + 'Value');
    
    if (!valueDisplay) return;
    
    let displayValue;
    let riskLevel = 'conservative';
    
    // Format value based on slider type
    switch (sliderId) {
        case 'minVolumeFilter':
            displayValue = `${(value / 1000000).toFixed(1)}M USDT`;
            break;
        case 'maPeriod':
            displayValue = `${value} periods`;
            break;
        case 'tpSiRatio':
        case 'rsiLevels':
            displayValue = value.toString();
            break;
        default:
            displayValue = `${value}%`;
    }
    
    // Determine risk level based on value and slider type
    const percentage = ((value - parseFloat(slider.min)) / (parseFloat(slider.max) - parseFloat(slider.min))) * 100;
    
    if (percentage >= 70) {
        riskLevel = 'aggressive';
    } else if (percentage >= 30) {
        riskLevel = 'moderate';
    }
    
    // Update display
    valueDisplay.textContent = displayValue;
    valueDisplay.className = `slider-value ${riskLevel}`;
    
    // Save setting value
    saveSettingValue(sliderId, value);
}

function saveSettingValue(sliderId, value) {
    // In a real application, this would save to backend/localStorage
    // For now, we'll update our local data structure
    const settingMap = {
        'tradeSizePercent': ['basic', 'tradeSizePercent'],
        'tpSiRatio': ['basic', 'tpSiRatio'],
        'minTakeProfit': ['basic', 'minTakeProfit'],
        'maxTradesHour': ['basic', 'maxTradesHour'], 
        'maxDrawdown': ['basic', 'maxDrawdown'],
        'stopLossDistance': ['advanced', 'stopLossDistance'],
        'riskPerTradeAdvanced': ['advanced', 'riskPerTrade'],
        'minVolumeFilter': ['advanced', 'minVolumeFilter'],
        'volatilityThreshold': ['advanced', 'volatilityThreshold'],
        'rsiLevels': ['advanced', 'rsiLevels'],
        'maPeriod': ['advanced', 'maPeriod']
    };
    
    const mapping = settingMap[sliderId];
    if (mapping && tradingData.settingsParameters[mapping[0]][mapping[1]]) {
        tradingData.settingsParameters[mapping[0]][mapping[1]].value = value;
    }
}

// Settings and Controls (Legacy)
function updateRiskSettings() {
    const riskPerTrade = document.getElementById('riskPerTrade');
    const maxDailyLoss = document.getElementById('maxDailyLoss');
    const maxPositions = document.getElementById('maxPositions');
    
    if (riskPerTrade) {
        // Initialize with current value
        updateRiskSlider('riskPerTrade');
        riskPerTrade.addEventListener('input', function() {
            updateRiskSlider('riskPerTrade');
        });
    }
    
    if (maxDailyLoss) {
        // Initialize with current value
        updateRiskSlider('maxDailyLoss');
        maxDailyLoss.addEventListener('input', function() {
            updateRiskSlider('maxDailyLoss');
        });
    }
    
    if (maxPositions) {
        // Initialize with current value
        updateRiskSlider('maxPositions');
        maxPositions.addEventListener('input', function() {
            updateRiskSlider('maxPositions');
        });
    }
}

// System Status Updates
function updateSystemStatus() {
    const quantAnalysis = document.getElementById('quantAnalysis');
    const sentimentAnalysis = document.getElementById('sentimentAnalysis');
    
    // Simulate random status updates
    if (Math.random() > 0.95) {
        const statuses = ['active', 'warning', 'error'];
        const newStatus = statuses[Math.floor(Math.random() * statuses.length)];
        
        const dot = quantAnalysis.querySelector('.status-dot');
        dot.className = `status-dot ${newStatus}`;
        
        if (newStatus === 'error') {
            showNotification('Система квантового анализа временно недоступна', 'warning');
        }
    }
}

// Multi-timeframe Analysis Functions
function renderMultiTimeframeAnalysis() {
    const container = document.getElementById('timeframeGrid');
    if (!container) return;
    
    const data = tradingData.multi_timeframe_analysis.BTC_USDT;
    const timeframes = ['1m', '5m', '1h', '4h', '1d'];
    
    container.innerHTML = '';
    
    timeframes.forEach(tf => {
        const tfData = data[tf];
        const tfElement = document.createElement('div');
        tfElement.className = 'timeframe-item';
        
        tfElement.innerHTML = `
            <div class="timeframe-label">${tf}</div>
            <div class="timeframe-score" style="color: ${getSignalColor(tfData.signal)}">${tfData.score}</div>
            <div class="timeframe-signal ${tfData.signal}">${getSignalText(tfData.signal)}</div>
            <div class="timeframe-strength">${getStrengthText(tfData.strength)}</div>
        `;
        
        container.appendChild(tfElement);
    });
}

function getSignalColor(signal) {
    switch(signal) {
        case 'bullish': return 'var(--success)';
        case 'bearish': return 'var(--danger)';
        default: return 'var(--warning)';
    }
}

function getSignalText(signal) {
    switch(signal) {
        case 'bullish': return 'Бычий';
        case 'bearish': return 'Медвежий';
        default: return 'Нейтральный';
    }
}

function getStrengthText(strength) {
    switch(strength) {
        case 'very_strong': return 'Очень сильный';
        case 'strong': return 'Сильный';
        case 'medium': return 'Средний';
        case 'weak': return 'Слабый';
        default: return strength;
    }
}

// Correlation Matrix Functions
function renderCorrelationMatrix() {
    const container = document.getElementById('correlationMatrix');
    if (!container) return;
    
    const matrix = tradingData.correlation_matrix;
    const assets = Object.keys(matrix);
    
    container.innerHTML = '';
    
    assets.forEach(asset1 => {
        assets.forEach(asset2 => {
            const correlation = asset1 === asset2 ? 1.0 : matrix[asset1][asset2] || 0;
            const cellElement = document.createElement('div');
            cellElement.className = `correlation-cell ${getCorrelationLevel(correlation)}`;
            
            cellElement.innerHTML = `
                <div class="correlation-value">${correlation.toFixed(2)}</div>
                <div class="correlation-pair">${asset1}-${asset2}</div>
            `;
            
            container.appendChild(cellElement);
        });
    });
}

function getCorrelationLevel(value) {
    if (value >= 0.8) return 'correlation-high';
    if (value >= 0.6) return 'correlation-medium';
    return 'correlation-low';
}

// Portfolio Heat Map Functions
function renderPortfolioHeatmap() {
    const container = document.getElementById('portfolioHeatmap');
    if (!container) return;
    
    const sectors = tradingData.portfolio_sectors;
    container.innerHTML = '';
    
    Object.entries(sectors).forEach(([sector, data]) => {
        const sectorElement = document.createElement('div');
        sectorElement.className = `heatmap-sector ${data.risk}`;
        
        sectorElement.innerHTML = `
            <div class="sector-name">${sector}</div>
            <div class="sector-allocation">${data.allocation}%</div>
            <div class="sector-risk">Риск: ${getRiskText(data.risk)}</div>
            <div class="sector-correlation">Корреляция: ${data.correlation}</div>
        `;
        
        container.appendChild(sectorElement);
    });
}

function getRiskText(risk) {
    switch(risk) {
        case 'high': return 'Высокий';
        case 'medium': return 'Средний';
        case 'low': return 'Низкий';
        default: return risk;
    }
}

// Trading Psychology Functions
function updateTradingPsychology() {
    const psych = tradingData.trading_psychology;
    
    // Update current mood
    const moodElement = document.getElementById('currentMood');
    if (moodElement) {
        moodElement.textContent = getMoodText(psych.current_mood);
        moodElement.className = `mood-value ${psych.current_mood}`;
    }
    
    // Update stress level
    const stressElement = document.getElementById('stressFill');
    const stressValueElement = document.getElementById('stressValue');
    
    if (stressElement) {
        stressElement.style.width = `${(psych.stress_level / 10) * 100}%`;
    }
    
    if (stressValueElement) {
        stressValueElement.textContent = `${psych.stress_level}/10`;
    }
    
    // Update emotion tags
    const emotionTagsElement = document.getElementById('emotionTags');
    if (emotionTagsElement) {
        emotionTagsElement.innerHTML = '';
        psych.recent_emotions.forEach(emotion => {
            const tag = document.createElement('span');
            tag.className = `emotion-tag ${emotion === 'confident' ? 'confident' : ''}`;
            tag.textContent = getEmotionText(emotion);
            emotionTagsElement.appendChild(tag);
        });
    }
}

function getMoodText(mood) {
    switch(mood) {
        case 'confident': return 'Уверенный';
        case 'nervous': return 'Нервный';
        case 'greedy': return 'Жадный';
        case 'fearful': return 'Напуганный';
        default: return mood;
    }
}

function getEmotionText(emotion) {
    switch(emotion) {
        case 'confident': return 'Уверенность';
        case 'analytical': return 'Аналитический';
        default: return emotion;
    }
}

// Advanced Analytics Functions
function updatePerformanceMetrics() {
    const metrics = tradingData.performance_metrics;
    
    const elements = {
        'sharpeRatio': metrics.sharpe_ratio,
        'sortinoRatio': metrics.sortino_ratio,
        'calmarRatio': metrics.calmar_ratio,
        'alphaValue': metrics.alpha,
        'betaValue': metrics.beta,
        'hodlExcess': `+${metrics.vs_btc_hodl}%`
    };
    
    Object.entries(elements).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value;
        }
    });
}

// Kelly Criterion Functions
function updateKellyCriterion() {
    const kelly = tradingData.kelly_criterion;
    
    const recommendedElement = document.getElementById('kellyRecommended');
    const maxSafeElement = document.getElementById('kellyMaxSafe');
    const riskElement = document.getElementById('kellyRisk');
    
    if (recommendedElement) {
        recommendedElement.textContent = `${kelly.recommended_size}%`;
    }
    
    if (maxSafeElement) {
        maxSafeElement.textContent = `${kelly.max_safe_size}%`;
    }
    
    if (riskElement) {
        riskElement.textContent = getKellyRiskText(kelly.current_risk);
        riskElement.className = `kelly-status ${kelly.current_risk}`;
    }
}

function getKellyRiskText(risk) {
    switch(risk) {
        case 'optimal': return 'Оптимальный';
        case 'conservative': return 'Консервативный';
        case 'aggressive': return 'Агрессивный';
        default: return risk;
    }
}

// Mindfulness Timer Function
function startMindfulnessSession() {
    const duration = 60; // 1 minute
    let timeLeft = duration;
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="fas fa-meditation"></i> Медитация перед сделкой</h3>
                <span class="close" onclick="this.closest('.modal').remove()">&times;</span>
            </div>
            <div class="modal-body" style="text-align: center; padding: 3rem;">
                <div style="font-size: 3rem; font-weight: 700; color: var(--accent-blue); margin-bottom: 1rem;" id="timerDisplay">${timeLeft}</div>
                <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 2rem;">Сосредоточьтесь на дыхании и освободите разум от эмоций</p>
                <div style="width: 100%; height: 8px; background: var(--tertiary-bg); border-radius: 4px; overflow: hidden;">
                    <div style="height: 100%; background: var(--gradient-primary); width: 100%; transition: width 1s linear;" id="timerProgress"></div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    const timerDisplay = modal.querySelector('#timerDisplay');
    const timerProgress = modal.querySelector('#timerProgress');
    
    const interval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        timerProgress.style.width = `${(timeLeft / duration) * 100}%`;
        
        if (timeLeft <= 0) {
            clearInterval(interval);
            timerDisplay.textContent = '✅';
            timerProgress.style.width = '0%';
            
            setTimeout(() => {
                modal.remove();
                showNotification('🧘‍♂️ Медитация завершена!\nВы готовы к осознанной торговле', 'success', 5000);
                
                // Update stress level after meditation
                tradingData.trading_psychology.stress_level = Math.max(1, tradingData.trading_psychology.stress_level - 2);
                updateTradingPsychology();
            }, 1000);
        }
    }, 1000);
}

// Advanced Order Management Functions
function renderAdvancedOrders() {
    // This would render the current advanced orders
    const container = document.getElementById('advancedOrdersList');
    if (!container) return;
    
    // Implementation for displaying active advanced orders
    // Already has static content in HTML for demo
}

// Security Functions
function updateSecurityStatus() {
    // Security status is already displayed in HTML
    // This function could be used to periodically check security status
    const security = tradingData.security_status;
    
    // Show security alerts if needed
    if (Math.random() > 0.95) {
        showNotification('🔒 Система безопасности: Все системы функционируют нормально', 'success', 3000);
    }
}

// Enhanced Tab Switching with New Features
function switchTabEnhanced(tabName) {
    currentTab = tabName;
    
    // Update tab buttons
    elements.tabBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tabName) {
            btn.classList.add('active');
        }
    });
    
    // Update tab content
    elements.tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.id === `${tabName}-content`) {
            content.classList.add('active');
        }
    });
    
    // Initialize tab-specific content
    switch(tabName) {
        case 'dashboard':
            renderMultiTimeframeAnalysis();
            renderCorrelationMatrix();
            renderPortfolioHeatmap();
            updateTradingPsychology();
            updatePerformanceMetrics();
            updateKellyCriterion();
            break;
        case 'active-trades':
            renderActiveTrades();
            updateTradesSummary();
            break;
        case 'advanced-orders':
            renderAdvancedOrders();
            break;
        case 'strategy-testing':
            populateStrategySelect();
            break;
        case 'trade-history':
            renderTradeHistory();
            updateHistoryStats();
            initializePerformanceCharts();
            break;
        case 'security':
            updateSecurityStatus();
            break;
    }
}

// Dynamic Risk Assessment Functions
function calculateATRBasedStopLoss(pair, volatility) {
    // ATR-based dynamic stop loss calculation
    const basePrice = tradingData.tradingPairs.find(p => p.symbol === pair)?.price || 100;
    const atrMultiplier = 2.0; // Standard ATR multiplier
    const dynamicStopDistance = (volatility / 100) * basePrice * atrMultiplier;
    
    return {
        stopLoss: basePrice - dynamicStopDistance,
        distance: dynamicStopDistance,
        percentage: (dynamicStopDistance / basePrice) * 100
    };
}

function assessPortfolioRisk() {
    const sectors = tradingData.portfolio_sectors;
    let totalRisk = 0;
    let totalAllocation = 0;
    
    Object.values(sectors).forEach(sector => {
        const riskWeight = sector.risk === 'high' ? 3 : sector.risk === 'medium' ? 2 : 1;
        totalRisk += sector.allocation * riskWeight;
        totalAllocation += sector.allocation;
    });
    
    const avgRisk = totalRisk / totalAllocation;
    return {
        riskScore: avgRisk,
        riskLevel: avgRisk > 2.5 ? 'high' : avgRisk > 1.5 ? 'medium' : 'low',
        recommendation: avgRisk > 2.5 ? 'Снизьте экспозицию в высокорисковых секторах' : 'Риск портфеля в пределах нормы'
    };
}

// Enhanced Notification System
function showAdvancedNotification(title, message, type = 'info', actions = null) {
    const notification = document.createElement('div');
    notification.className = `notification-toast ${type}`;
    
    let actionsHtml = '';
    if (actions) {
        actionsHtml = `
            <div style="margin-top: 1rem; display: flex; gap: 0.5rem; justify-content: flex-end;">
                ${actions.map(action => `
                    <button onclick="${action.callback}" class="btn ${action.style || 'secondary'} small">
                        ${action.label}
                    </button>
                `).join('')}
            </div>
        `;
    }
    
    notification.innerHTML = `
        <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
            <i class="fas ${type === 'success' ? 'fa-check-circle' :
                type === 'warning' ? 'fa-exclamation-triangle' :
                type === 'error' ? 'fa-times-circle' :
                'fa-info-circle'}" style="margin-top: 0.1rem; flex-shrink: 0;"></i>
            <div style="flex: 1;">
                <div style="font-weight: 600; margin-bottom: 0.25rem; font-size: 0.9rem;">
                    ${title}
                </div>
                <div style="font-size: 0.85rem; line-height: 1.4;">
                    ${message}
                </div>
                ${actionsHtml}
            </div>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="background: none; border: none; color: var(--text-secondary); cursor: pointer; padding: 0;">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    const container = document.querySelector('.notification-container') || (() => {
        const cont = document.createElement('div');
        cont.className = 'notification-container';
        cont.style.cssText = `
            position: fixed;
            top: 100px;
            right: 2rem;
            z-index: 1001;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            pointer-events: none;
        `;
        elements.notifications.appendChild(cont);
        return cont;
    })();
    
    container.appendChild(notification);
    notification.style.pointerEvents = 'auto';
    
    // Auto-remove after 8 seconds if no actions
    if (!actions) {
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideInToast 0.3s ease reverse';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            }
        }, 8000);
    }
}

// Market Analysis Alerts
function checkMarketConditions() {
    const sentiment = tradingData.social_sentiment;
    const events = tradingData.external_events;
    
    // Fear & Greed Index alerts
    if (sentiment.fear_greed_index >= 80) {
        showAdvancedNotification(
            '⚠️ Индекс страха и жадности: Крайняя жадность',
            `Текущий уровень: ${sentiment.fear_greed_index}/100. Рынок может быть перекуплен.`,
            'warning',
            [
                { label: 'Подробнее', callback: 'showMarketAnalysis()', style: 'primary' },
                { label: 'Игнорировать', callback: 'this.closest(".notification-toast").remove()' }
            ]
        );
    }
    
    // Whale alerts
    if (events.whale_alerts > 2) {
        showAdvancedNotification(
            '🐋 Активность крупных игроков',
            `Обнаружено ${events.whale_alerts} крупных транзакций на сумму ${events.large_transactions}M USDT`,
            'info'
        );
    }
}

// Stress Management System
function monitorTradingStress() {
    const psych = tradingData.trading_psychology;
    
    if (psych.stress_level >= 7) {
        showAdvancedNotification(
            '🧘‍♂️ Высокий уровень стресса',
            'Рекомендуется сделать перерыв или провести медитацию перед следующей сделкой.',
            'warning',
            [
                { label: 'Медитация', callback: 'startMindfulnessSession()', style: 'primary' },
                { label: 'Перерыв', callback: 'startTradingBreak()', style: 'secondary' }
            ]
        );
    }
}

// Trading Break System
function startTradingBreak() {
    const breakDuration = 15 * 60 * 1000; // 15 minutes
    const breakEndTime = Date.now() + breakDuration;
    
    showNotification(
        '⏰ Торговый перерыв начат\nДлительность: 15 минут\nВсе торговые функции временно заблокированы',
        'info',
        5000
    );
    
    // Disable trading buttons
    const tradingButtons = document.querySelectorAll('.btn.primary');
    tradingButtons.forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = '0.5';
    });
    
    // Start countdown
    const breakInterval = setInterval(() => {
        const timeLeft = breakEndTime - Date.now();
        
        if (timeLeft <= 0) {
            clearInterval(breakInterval);
            
            // Re-enable trading buttons
            tradingButtons.forEach(btn => {
                btn.disabled = false;
                btn.style.opacity = '1';
            });
            
            showNotification('✅ Торговый перерыв завершен\nВы можете возобновить торговлю', 'success');
            
            // Reduce stress level
            tradingData.trading_psychology.stress_level = Math.max(1, tradingData.trading_psychology.stress_level - 3);
            updateTradingPsychology();
        }
    }, 1000);
}

// Enhanced Performance Tracking
function calculateAdvancedMetrics() {
    const trades = tradingData.activeTrades;
    const history = tradingData.tradeHistory;
    
    // Calculate Maximum Adverse Excursion (MAE)
    let totalMAE = 0;
    history.forEach(trade => {
        const entryPrice = parseFloat(trade.entry_price);
        const exitPrice = parseFloat(trade.exit_price);
        const mae = Math.abs(Math.min(0, (exitPrice - entryPrice) / entryPrice));
        totalMAE += mae;
    });
    
    const avgMAE = totalMAE / history.length || 0;
    
    // Calculate rolling Sharpe ratio
    const returns = history.slice(-30).map(trade => {
        return parseFloat(trade.pnl_percent.replace(/[^\d.-]/g, ''));
    });
    
    const avgReturn = returns.reduce((a, b) => a + b, 0) / returns.length || 0;
    const stdDev = Math.sqrt(
        returns.reduce((sum, ret) => sum + Math.pow(ret - avgReturn, 2), 0) / returns.length
    ) || 1;
    
    const rollingSharpe = avgReturn / stdDev;
    
    return {
        mae: avgMAE,
        rollingSharpe: rollingSharpe,
        totalTrades: history.length,
        avgReturn: avgReturn
    };
}

// Global functions for new features
window.startMindfulnessSession = startMindfulnessSession;
window.startTradingBreak = startTradingBreak;
window.showMarketAnalysis = function() {
    showNotification('📊 Анализ рынка\nОткрываем детальный анализ рыночных условий...', 'info');
};

// Event Listeners
function setupEventListeners() {
    // Tab Navigation
    elements.tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.dataset.tab;
            switchTab(tabName);
        });
    });
    
    // Active Trades Events
    if (elements.refreshTradesBtn) {
        elements.refreshTradesBtn.addEventListener('click', () => {
            elements.refreshTradesBtn.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                elements.refreshTradesBtn.style.transform = 'rotate(0deg)';
                renderActiveTrades();
                updateTradesSummary();
                showNotification('Активные сделки обновлены', 'success');
            }, 600);
        });
    }
    
    if (elements.closeAllTradesBtn) {
        elements.closeAllTradesBtn.addEventListener('click', closeAllTradesManual);
    }
    
    // Trade History Events
    if (elements.refreshHistoryBtn) {
        elements.refreshHistoryBtn.addEventListener('click', () => {
            elements.refreshHistoryBtn.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                elements.refreshHistoryBtn.style.transform = 'rotate(0deg)';
                renderTradeHistory();
                updateHistoryStats();
                showNotification('История сделок обновлена', 'success');
            }, 600);
        });
    }
    
    if (elements.exportHistoryBtn) {
        elements.exportHistoryBtn.addEventListener('click', () => {
            exportTradeHistory();
            showNotification('История сделок экспортирована', 'success');
        });
    }
    
    // History filter events
    [elements.historyPeriodFilter, elements.historyPairFilter, 
     elements.historyStrategyFilter, elements.historyResultFilter].forEach(filter => {
        if (filter) {
            filter.addEventListener('change', () => {
                renderTradeHistory();
            });
        }
    });
    
    // Strategy Testing Events
    if (elements.runBacktestBtn) {
        elements.runBacktestBtn.addEventListener('click', runBacktest);
    }
    // Refresh opportunities
    elements.refreshBtn.addEventListener('click', () => {
        elements.refreshBtn.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            elements.refreshBtn.style.transform = 'rotate(0deg)';
            renderTradingOpportunities();
            showNotification('Торговые возможности обновлены', 'success');
        }, 600);
    });
    
    // Auto trading toggle
    elements.autoTradingToggle.addEventListener('change', function() {
        autoTradingEnabled = this.checked;
        if (autoTradingEnabled) {
            showNotification('Автоматическая торговля включена', 'success');
            elements.startTradingBtn.innerHTML = '<i class="fas fa-pause"></i> Приостановить';
        } else {
            showNotification('Автоматическая торговля отключена', 'info');
            elements.startTradingBtn.innerHTML = '<i class="fas fa-play"></i> Начать торговлю';
        }
    });
    
    // Paper trading toggle
    elements.paperTradingToggle.addEventListener('change', function() {
        paperTradingMode = this.checked;
        if (paperTradingMode) {
            showNotification('Включен режим бумажной торговли', 'info');
        } else {
            showNotification('Включен режим реальной торговли', 'warning');
        }
    });
    
    // Start/Stop trading buttons
    elements.startTradingBtn.addEventListener('click', function() {
        if (!autoTradingEnabled) {
            elements.autoTradingToggle.checked = true;
            elements.autoTradingToggle.dispatchEvent(new Event('change'));
        } else {
            elements.autoTradingToggle.checked = false;
            elements.autoTradingToggle.dispatchEvent(new Event('change'));
        }
    });
    
    elements.stopAllBtn.addEventListener('click', function() {
        autoTradingEnabled = false;
        elements.autoTradingToggle.checked = false;
        showNotification('Все торговые операции остановлены', 'warning');
        elements.startTradingBtn.innerHTML = '<i class="fas fa-play"></i> Начать торговлю';
    });
    
    // History button
    elements.historyBtn.addEventListener('click', function() {
        showNotification('Открытие истории сделок...', 'info');
        // In a real app, this would open a history modal or navigate to history page
    });
    
    // Settings button
    elements.settingsBtn.addEventListener('click', function() {
        showNotification('Открытие настроек...', 'info');
        // In a real app, this would open settings modal
    });
    
    // Modal controls
    elements.modalClose.addEventListener('click', function() {
        elements.tradeModal.style.display = 'none';
    });
    
    elements.modalCancel.addEventListener('click', function() {
        elements.tradeModal.style.display = 'none';
    });
    
    elements.modalConfirm.addEventListener('click', function() {
        if (selectedOpportunity) {
            const index = tradingData.tradingOpportunities.findIndex(
                op => op.pair === selectedOpportunity.pair
            );
            if (index !== -1) {
                activateOpportunity(index);
            }
        } else if (selectedTrade) {
            closeTradeManual(selectedTrade.index);
        }
        elements.tradeModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === elements.tradeModal) {
            elements.tradeModal.style.display = 'none';
        }
    });
}

// AI Market Scanning Functions
function startMarketScanning() {
    // Update scanning progress every 2 seconds
    marketScanningInterval = setInterval(() => {
        updateScanningProgress();
        updateScanningFeed();
        updateLastScanTime();
    }, 2000);
    
    // Update opportunities every 30 seconds
    updateOpportunitiesInterval = setInterval(() => {
        refreshOpportunities();
    }, 30000);
    
    // Start the scanning feed
    startScanningFeed();
}

function updateScanningProgress() {
    const scanData = tradingData.market_scanning;
    
    // Simulate scanning progress
    if (scanData.scan_status === 'active') {
        scanData.currently_scanning = Math.min(
            scanData.currently_scanning + Math.floor(Math.random() * 20),
            scanData.total_pairs
        );
        
        scanData.scan_progress = Math.floor(
            (scanData.currently_scanning / scanData.total_pairs) * 100
        );
        
        // Reset when complete
        if (scanData.currently_scanning >= scanData.total_pairs) {
            scanData.currently_scanning = Math.floor(Math.random() * 100) + 50;
            
            // Sometimes find new opportunities
            if (Math.random() > 0.7) {
                generateNewOpportunity();
            }
        }
    }
    
    // Update UI elements
    const progressFill = document.getElementById('scanProgress');
    const progressText = document.getElementById('scanProgressText');
    
    if (progressFill) {
        progressFill.style.width = `${scanData.scan_progress}%`;
    }
    
    if (progressText) {
        progressText.textContent = `Анализируется: ${scanData.currently_scanning}/${scanData.total_pairs} пар (${scanData.scan_progress}%)`;
    }
}

function updateScanningFeed() {
    const feedContent = document.getElementById('feedContent');
    if (!feedContent || !scanningFeedActive) return;
    
    // Generate new scanning item
    const pairs = ['ATOM/USDT', 'LINK/USDT', 'DOT/USDT', 'UNI/USDT', 'AAVE/USDT', 'MATIC/USDT', 'ADA/USDT', 'SOL/USDT'];
    const analyses = ['Technical', 'Volume', 'Sentiment', 'Risk', 'Final'];
    const randomPair = pairs[Math.floor(Math.random() * pairs.length)];
    const randomAnalysis = analyses[Math.floor(Math.random() * analyses.length)];
    const randomScore = Math.floor(Math.random() * 100);
    
    const feedItem = document.createElement('div');
    feedItem.className = 'feed-item';
    feedItem.innerHTML = `
        <div class="feed-item-content">
            <div class="feed-icon">
                <i class="fas fa-search"></i>
            </div>
            <div class="feed-text">
                <span class="feed-pair">${randomPair}</span>
                <span class="feed-analysis">${randomAnalysis}: ${randomScore}%</span>
            </div>
            <div class="feed-timestamp">
                ${new Date().toLocaleTimeString('ru-RU', { timeStyle: 'medium' })}
            </div>
        </div>
    `;
    
    // Add animation
    feedItem.style.opacity = '0';
    feedItem.style.transform = 'translateX(-20px)';
    
    feedContent.insertBefore(feedItem, feedContent.firstChild);
    
    // Animate in
    setTimeout(() => {
        feedItem.style.transition = 'all 0.3s ease';
        feedItem.style.opacity = '1';
        feedItem.style.transform = 'translateX(0)';
    }, 10);
    
    // Keep only last 10 items
    while (feedContent.children.length > 10) {
        feedContent.removeChild(feedContent.lastChild);
    }
    
    // Occasionally show discovery notifications
    if (randomScore > 95) {
        showNotification(`🔍 Обнаружена высококачественная возможность!\n${randomPair} - ${randomAnalysis}: ${randomScore}%`, 'success', 4000);
    }
}

function startScanningFeed() {
    const feedContent = document.getElementById('feedContent');
    if (!feedContent) return;
    
    // Initial feed items
    tradingData.scanning_pairs.forEach((item, index) => {
        setTimeout(() => {
            const feedItem = document.createElement('div');
            feedItem.className = 'feed-item';
            feedItem.innerHTML = `
                <div class="feed-item-content">
                    <div class="feed-icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <div class="feed-text">
                        <span>${item}</span>
                    </div>
                    <div class="feed-timestamp">
                        ${new Date().toLocaleTimeString('ru-RU', { timeStyle: 'medium' })}
                    </div>
                </div>
            `;
            feedContent.appendChild(feedItem);
        }, index * 300);
    });
}

function toggleScanningFeed() {
    scanningFeedActive = !scanningFeedActive;
    const toggleIcon = document.getElementById('feedToggleIcon');
    
    if (toggleIcon) {
        toggleIcon.className = scanningFeedActive ? 'fas fa-pause' : 'fas fa-play';
    }
    
    showNotification(
        `Лента сканирования ${scanningFeedActive ? 'включена' : 'приостановлена'}`,
        'info'
    );
}

function updateLastScanTime() {
    lastScanUpdate += 2; // 2 seconds per update
    const lastUpdate = document.getElementById('lastUpdate');
    
    if (lastUpdate) {
        let timeText;
        if (lastScanUpdate < 60) {
            timeText = `${lastScanUpdate} сек назад`;
        } else {
            const minutes = Math.floor(lastScanUpdate / 60);
            timeText = `${minutes} мин назад`;
        }
        
        lastUpdate.textContent = `Последнее обновление: ${timeText}`;
        
        // Reset periodically
        if (lastScanUpdate > 300) { // 5 minutes
            lastScanUpdate = 0;
            showNotification('🔄 Обновление сканирования завершено\nНовый цикл анализа начат', 'success');
        }
    }
}

function generateNewOpportunity() {
    // Simulate discovery of a new high-confidence opportunity
    const pairs = ['AVAX/USDT', 'NEAR/USDT', 'FTM/USDT', 'ALGO/USDT'];
    const strategies = ['Breakout Pattern', 'Support Bounce', 'Momentum Trade'];
    
    const newOpportunity = {
        pair: pairs[Math.floor(Math.random() * pairs.length)],
        strategy: strategies[Math.floor(Math.random() * strategies.length)],
        profit_expectation: `${(2 + Math.random() * 4).toFixed(1)}%`,
        success_probability: `${85 + Math.floor(Math.random() * 15)}%`,
        stop_loss: (100 + Math.random() * 50).toFixed(2),
        take_profit: (150 + Math.random() * 50).toFixed(2),
        timeframe: ['1h', '2h', '4h', '6h'][Math.floor(Math.random() * 4)],
        ai_score: 85 + Math.floor(Math.random() * 15),
        confirmed_by: ['technical', 'sentiment'],
        individual_settings: {
            position_size: 3,
            risk_percent: 2,
            sl_distance: 3,
            tp_ratio: 2.5,
            preset: 'moderate'
        }
    };
    
    tradingData.tradingOpportunities.unshift(newOpportunity);
    
    // Keep only top 5 opportunities
    if (tradingData.tradingOpportunities.length > 5) {
        tradingData.tradingOpportunities.pop();
    }
    
    renderTradingOpportunities();
    
    showNotification(
        `🎆 Новая возможность обнаружена!\n${newOpportunity.pair} - ${newOpportunity.strategy}\nУровень доверия AI: ${newOpportunity.ai_score}%`,
        'success',
        8000
    );
}

function refreshOpportunities() {
    // Simulate market scanning completion and opportunity refresh
    showNotification('🔄 Обновление...\nПоиск новых возможностей', 'info', 3000);
    
    // Sometimes generate new opportunity
    if (Math.random() > 0.6) {
        setTimeout(() => {
            generateNewOpportunity();
        }, 2000);
    }
    
    // Update market conditions occasionally
    if (Math.random() > 0.7) {
        const sentiments = ['Bullish', 'Bearish', 'Neutral'];
        const volatilities = ['Low', 'Medium', 'High'];
        const newsImpacts = ['Low', 'Medium', 'High'];
        
        tradingData.market_conditions.sentiment = sentiments[Math.floor(Math.random() * sentiments.length)];
        tradingData.market_conditions.volatility = volatilities[Math.floor(Math.random() * volatilities.length)];
        tradingData.market_conditions.news_impact = newsImpacts[Math.floor(Math.random() * newsImpacts.length)];
        
        updateMarketOverview();
    }
}

function updateMarketOverview() {
    const marketOverview = document.getElementById('marketOverview');
    if (!marketOverview) return;
    
    const conditions = tradingData.market_conditions;
    const stats = marketOverview.querySelector('.overview-stats');
    
    if (stats) {
        stats.innerHTML = `
            <div class="stat-item">
                <span class="stat-label">Всего пар:</span>
                <span class="stat-value">${conditions.active_pairs}+</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Найдено возможностей:</span>
                <span class="stat-value highlight">${conditions.opportunities_found} из ${conditions.active_pairs} (${conditions.success_rate})</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Настроение рынка:</span>
                <span class="stat-value ${conditions.sentiment.toLowerCase()}">${conditions.sentiment}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Волатильность:</span>
                <span class="stat-value">${conditions.volatility}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Новостной фон:</span>
                <span class="stat-value">${conditions.news_impact}</span>
            </div>
        `;
    }
}

// Global functions for onclick handlers
window.viewOpportunityDetails = viewOpportunityDetails;
window.activateOpportunity = activateOpportunity;
window.toggleScanningFeed = toggleScanningFeed;

// Export Functions
function exportTradeHistory() {
    const history = filterTradeHistory();
    const csvContent = convertHistoryToCSV(history);
    downloadCSV(csvContent, 'trade_history.csv');
}

function convertHistoryToCSV(history) {
    const headers = [
        'Пара', 'Стратегия', 'Вход', 'Выход', 'Время входа', 'Время выхода',
        'Длительность', 'P&L USD', 'P&L %', 'Количество', 'Причина закрытия', 'Статус'
    ];
    
    let csv = headers.join(',') + '\n';
    
    history.forEach(trade => {
        const row = [
            trade.pair,
            `"${trade.strategy}"`,
            trade.entry_price,
            trade.exit_price,
            `"${trade.entry_time}"`,
            `"${trade.exit_time}"`,
            `"${trade.duration}"`,
            `"${trade.pnl_usd}"`,
            `"${trade.pnl_percent}"`,
            trade.quantity,
            `"${trade.closure_reason}"`,
            trade.status
        ];
        csv += row.join(',') + '\n';
    });
    
    return csv;
}

function downloadCSV(csvContent, filename) {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Real-time Updates
function startRealTimeUpdates() {
    // Update trade prices every 3 seconds
    priceUpdateInterval = setInterval(() => {
        updateTradePrices();
    }, 3000);
    // Update AI score periodically
    setInterval(() => {
        const newScore = (90 + Math.random() * 8).toFixed(1);
        elements.aiScore.textContent = newScore + '%';
    }, 5000);
    
    // Update system status
    setInterval(() => {
        updateSystemStatus();
    }, 10000);
    
    // Update account info periodically
    setInterval(() => {
        if (autoTradingEnabled) {
            updateAccountInfo();
        }
    }, 15000);
    
    // Redraw chart periodically
    setInterval(() => {
        drawMarketChart();
    }, 3000);
}

// Enhanced Initialization for New Features
function initializeAdvancedFeatures() {
    // Initialize multi-timeframe analysis
    renderMultiTimeframeAnalysis();
    
    // Initialize correlation matrix
    renderCorrelationMatrix();
    
    // Initialize portfolio heatmap
    renderPortfolioHeatmap();
    
    // Initialize trading psychology
    updateTradingPsychology();
    
    // Initialize performance metrics
    updatePerformanceMetrics();
    
    // Initialize Kelly criterion
    updateKellyCriterion();
    
    // Set up mindfulness button
    const mindfulnessBtn = document.getElementById('mindfulnessBtn');
    if (mindfulnessBtn) {
        mindfulnessBtn.addEventListener('click', startMindfulnessSession);
    }
    
    // Start periodic checks
    setInterval(() => {
        checkMarketConditions();
        monitorTradingStress();
        updateSecurityStatus();
    }, 30000); // Check every 30 seconds
    
    // Advanced performance monitoring
    setInterval(() => {
        const metrics = calculateAdvancedMetrics();
        
        // Update performance display
        const currentSharpe = document.getElementById('sharpeRatio');
        if (currentSharpe && metrics.rollingSharpe) {
            currentSharpe.textContent = metrics.rollingSharpe.toFixed(2);
        }
        
        // Check for performance alerts
        if (metrics.rollingSharpe < 0.5) {
            showNotification(
                '📉 Низкая эффективность стратегии\nТекущий коэффициент Шарпа: ' + metrics.rollingSharpe.toFixed(2) + '\nРекомендуется пересмотреть торговую стратегию',
                'warning'
            );
        }
    }, 60000); // Check every minute
}

// Enhanced Tab Switching Override
function switchTab(tabName) {
    switchTabEnhanced(tabName);
}

// Initialize trade count badge
function updateTradeCountBadge() {
    const tradeCount = document.querySelector('.trade-count');
    if (tradeCount) {
        tradeCount.textContent = tradingData.activeTrades.length;
    }
    
    const historyCount = document.querySelector('.history-count');
    if (historyCount) {
        historyCount.textContent = tradingData.accountStats.total_trades;
    }
}

// Initialization
function init() {
    // Initialize advanced features first
    initializeAdvancedFeatures();
    
    // Initialize trade count badge
    updateTradeCountBadge();
    
    // Render initial data
    renderTradingOpportunities();
    
    // Initialize confirmation icons
    renderConfirmationIcons();
    
    // Initialize enhanced settings sliders
    initializeSettingsSliders();
    
    // Set up legacy risk settings sliders
    updateRiskSettings();
    
    // Set up event listeners
    setupEventListeners();
    
    // Draw initial chart
    drawMarketChart();
    
    // Update system effectiveness initially
    updateSystemEffectiveness();
    
    // Start real-time updates
    startRealTimeUpdates();
    
    // Start auto-close monitoring
    startAutoCloseMonitoring();
    
    // Start market scanning
    startMarketScanning();
    
    // Initialize market overview
    updateMarketOverview();
    
    // Show welcome notification
    setTimeout(() => {
        showNotification('🚀 IZBA INVEST успешно запущен. Добро пожаловать!\nАвтоматическое управление сделками активировано', 'success');
    }, 1000);
    
    // Show initial system status
    setTimeout(() => {
        showNotification(`📈 Система мониторинга: ${tradingData.activeTrades.length} активных позиций\n💰 Текущий баланс: ${tradingData.accountInfo.balance}`, 'info');
    }, 3000);
    
    // Initialize with dashboard tab
    switchTab('dashboard');
    
    // Add dynamic daily summary notification
    setTimeout(() => {
        const stats = tradingData.accountStats;
        const winRate = parseFloat(stats.win_rate.replace('%', ''));
        const dailyProfit = parseFloat(stats.daily_pnl.replace(/[^\d.-]/g, ''));
        
        let summaryMessage = `📈 Сводка за сегодня:`;
        summaryMessage += `\n• Процент прибыльных сделок: ${stats.win_rate}`;
        summaryMessage += `\n• Дневной P&L: ${stats.daily_pnl}`;
        summaryMessage += `\n• Общий баланс: ${stats.current_balance}`;
        
        const notificationType = dailyProfit > 0 ? 'success' : dailyProfit < 0 ? 'warning' : 'info';
        
        showNotification(summaryMessage, notificationType, 10000);
    }, 5000);
}

// Start the application when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
javascript
function renderMultiTimeframeTable(pair = 'BTC_USDT') {
    // ... (весь код функции из предыдущего сообщения)
}
function renderMultiTimeframeTable(pair = 'BTC_USDT') {
    const data = tradingData.multi_timeframe_analysis[pair];
    if (!data) return;
    
    const tbody = document.querySelector('#timeframeTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    const timeframes = ['1m', '5m', '1h', '4h', '1d'];
    timeframes.forEach(tf => {
        const tfData = data[tf];
        const row = document.createElement('tr');
        
        // Цвет в зависимости от сигнала
        let signalColor = tfData.signal === 'Бычий' ? '#28a745' : 
                         tfData.signal === 'Медвежий' ? '#dc3545' : '#6c757d';
        
        row.innerHTML = `
            <td>${tf}</td>
            <td>${tfData.score}</td>
            <td style="color: ${signalColor}; font-weight: bold;">${tfData.trend} ${tfData.signal}</td>
            <td>${tfData.strength}</td>
        `;
        tbody.appendChild(row);
    });
    
    // Обновить заголовок
    const header = document.querySelector('#selectedPairHeader');
    if (header) {
        header.textContent = pair.replace('_', '/');
    }
    
    // Обновить рекомендацию
    const recBlock = document.querySelector('#aiRecommendation');
    if (recBlock) {
        const icon = data.consensus === 'Бычий' ? '🟢' : 
                    data.consensus === 'Медвежий' ? '🔴' : '🟡';
        recBlock.innerHTML = `${icon} <strong>Консенсус: ${data.consensus} (${data.consensus_count})</strong> - ${data.recommendation}`;
    }
}

// Добавить обработчик для селектора
document.addEventListener('DOMContentLoaded', function() {
    const assetSelector = document.querySelector('#assetSelector');
    if (assetSelector) {
        assetSelector.addEventListener('change', function(e) {
            renderMultiTimeframeTable(e.target.value);
        });
    }
    
    // Первоначальный рендер
    renderMultiTimeframeTable('BTC_USDT');
});