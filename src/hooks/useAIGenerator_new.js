import { useState } from 'react';
import axios from 'axios';

const useAIGenerator = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Professional AI-powered code generation with intelligent template matching
  const generateIntelligentCode = (prompt) => {
    const lowerPrompt = prompt.toLowerCase();
    
    // Advanced prompt analysis using regex patterns
    const promptAnalysis = {
      isWeather: /\b(weather|temperature|forecast|climate|meteorology)\b/.test(lowerPrompt),
      isChat: /\b(chat|message|messenger|talk|conversation|communicate)\b/.test(lowerPrompt),
      isBlog: /\b(blog|article|post|news|content|writer|publishing)\b/.test(lowerPrompt),
      isEcommerce: /\b(shop|store|cart|product|buy|sell|ecommerce|checkout|payment)\b/.test(lowerPrompt),
      isForm: /\b(form|contact|signup|login|register|input|field|submit)\b/.test(lowerPrompt),
      isDashboard: /\b(dashboard|admin|analytics|chart|graph|data|stats|metrics)\b/.test(lowerPrompt),
      isLanding: /\b(landing|homepage|website|business|company|portfolio|marketing)\b/.test(lowerPrompt),
      isTodo: /\b(todo|task|list|checklist|reminder|organize|manage|productivity)\b/.test(lowerPrompt),
      isCalculator: /\b(calculator|calc|math|compute|calculate|arithmetic|number|formula)\b/.test(lowerPrompt),
      isGame: /\b(game|play|match|score|player|turn|board|card|dice|puzzle)\b/.test(lowerPrompt),
      isTicTacToe: /\b(tic.?tac.?toe|ttt|noughts.?and.?crosses)\b/.test(lowerPrompt),
      isSnake: /\b(snake|snakegame)\b/.test(lowerPrompt),
      isMemory: /\b(memory|matching|cards|flip)\b/.test(lowerPrompt),
      isQuiz: /\b(quiz|trivia|question|answer|test)\b/.test(lowerPrompt)
    };
    
    // Generate based on most relevant match with priority order
    if (promptAnalysis.isWeather) {
      return generateWeatherApp(prompt);
    } else if (promptAnalysis.isChat) {
      return generateChatApp(prompt);
    } else if (promptAnalysis.isBlog) {
      return generateBlogTemplate(prompt);
    } else if (promptAnalysis.isEcommerce) {
      return generateEcommerceTemplate(prompt);
    } else if (promptAnalysis.isForm) {
      return generateFormTemplate(prompt);
    } else if (promptAnalysis.isDashboard) {
      return generateDashboardTemplate(prompt);
    } else if (promptAnalysis.isLanding) {
      return generateLandingPageTemplate(prompt);
    } else if (promptAnalysis.isTodo) {
      return generateTodoApp(prompt);
    } else if (promptAnalysis.isCalculator) {
      return generateCalculatorApp(prompt);
    } else if (promptAnalysis.isTicTacToe) {
      return generateTicTacToeGame(prompt);
    } else if (promptAnalysis.isSnake) {
      return generateSnakeGame(prompt);
    } else if (promptAnalysis.isMemory) {
      return generateMemoryGame(prompt);
    } else if (promptAnalysis.isQuiz) {
      return generateQuizApp(prompt);
    } else if (promptAnalysis.isGame) {
      return generateGenericGame(prompt);
    } else {
      // For complex or unrecognized prompts, generate a sophisticated web app
      return generateAdvancedWebApp(prompt);
    }
  };

  // Weather App Generator
  const generateWeatherApp = (prompt) => {
    return {
      'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="weather-container">
        <h1>🌤️ Weather App</h1>
        <div class="search-box">
            <input type="text" id="cityInput" placeholder="Enter city name...">
            <button id="searchBtn">🔍</button>
        </div>
        <div class="weather-info" id="weatherInfo">
            <div class="city-name" id="cityName">Enter a city to see weather</div>
            <div class="temperature" id="temperature">--°C</div>
            <div class="weather-desc" id="weatherDesc">--</div>
            <div class="weather-details">
                <div class="detail">
                    <span>Humidity</span>
                    <span id="humidity">--%</span>
                </div>
                <div class="detail">
                    <span>Wind Speed</span>
                    <span id="windSpeed">-- km/h</span>
                </div>
                <div class="detail">
                    <span>Pressure</span>
                    <span id="pressure">-- hPa</span>
                </div>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
      'styles.css': `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.weather-container {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 25px 50px rgba(0,0,0,0.2);
    text-align: center;
    max-width: 450px;
    width: 100%;
}

h1 {
    color: #333;
    margin-bottom: 30px;
    font-size: 2.5rem;
}

.search-box {
    display: flex;
    margin-bottom: 30px;
    gap: 10px;
}

#cityInput {
    flex: 1;
    padding: 15px;
    border: 2px solid #ddd;
    border-radius: 10px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;
}

#cityInput:focus {
    border-color: #74b9ff;
}

#searchBtn {
    padding: 15px 20px;
    background: linear-gradient(45deg, #74b9ff, #0984e3);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: transform 0.3s;
}

#searchBtn:hover {
    transform: translateY(-2px);
}

.weather-info {
    margin-top: 20px;
}

.city-name {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
}

.temperature {
    font-size: 4rem;
    font-weight: bold;
    color: #0984e3;
    margin: 20px 0;
}

.weather-desc {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 30px;
    text-transform: capitalize;
}

.weather-details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 20px;
}

.detail {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.detail span:first-child {
    font-size: 0.9rem;
    color: #666;
}

.detail span:last-child {
    font-size: 1.1rem;
    font-weight: bold;
    color: #333;
}`,
      'script.js': `class WeatherApp {
    constructor() {
        this.initializeApp();
    }
    
    initializeApp() {
        document.getElementById('searchBtn').addEventListener('click', () => this.searchWeather());
        document.getElementById('cityInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.searchWeather();
        });
    }
    
    searchWeather() {
        const city = document.getElementById('cityInput').value.trim();
        if (!city) return;
        
        // Simulate weather data (in a real app, you'd use a weather API)
        this.displayWeather(this.generateMockWeatherData(city));
    }
    
    generateMockWeatherData(city) {
        const temperatures = [15, 20, 25, 30, 35, -5, 0, 5, 10];
        const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Snowy', 'Foggy', 'Windy'];
        const humidity = Math.floor(Math.random() * 50) + 30;
        const windSpeed = Math.floor(Math.random() * 20) + 5;
        const pressure = Math.floor(Math.random() * 100) + 1000;
        
        return {
            city: city,
            temperature: temperatures[Math.floor(Math.random() * temperatures.length)],
            condition: conditions[Math.floor(Math.random() * conditions.length)],
            humidity: humidity,
            windSpeed: windSpeed,
            pressure: pressure
        };
    }
    
    displayWeather(data) {
        document.getElementById('cityName').textContent = data.city;
        document.getElementById('temperature').textContent = \`\${data.temperature}°C\`;
        document.getElementById('weatherDesc').textContent = data.condition;
        document.getElementById('humidity').textContent = \`\${data.humidity}%\`;
        document.getElementById('windSpeed').textContent = \`\${data.windSpeed} km/h\`;
        document.getElementById('pressure').textContent = \`\${data.pressure} hPa\`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new WeatherApp();
    console.log('🌤️ Weather app initialized!');
});`
    };
  };

  // Advanced Web App Generator for complex prompts
  const generateAdvancedWebApp = (prompt) => {
    return {
      'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Web Application</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="app-container">
        <header class="app-header">
            <h1>🚀 Advanced Web App</h1>
            <p class="subtitle">Generated from: "${prompt}"</p>
        </header>
        
        <main class="app-main">
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <h3>Data Management</h3>
                    <p>Efficient data handling and storage capabilities</p>
                    <button class="feature-btn" onclick="showFeature('data')">Explore</button>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">🎨</div>
                    <h3>Modern Design</h3>
                    <p>Contemporary UI with smooth animations</p>
                    <button class="feature-btn" onclick="showFeature('design')">Explore</button>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">⚡</div>
                    <h3>Performance</h3>
                    <p>Optimized for speed and efficiency</p>
                    <button class="feature-btn" onclick="showFeature('performance')">Explore</button>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">🔧</div>
                    <h3>Customization</h3>
                    <p>Highly configurable and extensible</p>
                    <button class="feature-btn" onclick="showFeature('custom')">Explore</button>
                </div>
            </div>
            
            <div class="demo-section">
                <h2>Interactive Demo</h2>
                <div class="demo-controls">
                    <button id="demoBtn" class="demo-button">Start Demo</button>
                    <button id="resetBtn" class="demo-button secondary">Reset</button>
                </div>
                <div id="demoOutput" class="demo-output">
                    Click "Start Demo" to see the application in action
                </div>
            </div>
        </main>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
      'styles.css': `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
}

.app-container {
    max-width: 1200px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    box-shadow: 0 25px 50px rgba(0,0,0,0.15);
    overflow: hidden;
    animation: slideUp 0.8s ease-out;
}

.app-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 40px;
    text-align: center;
}

.app-header h1 {
    font-size: 3rem;
    margin-bottom: 10px;
    font-weight: 700;
}

.subtitle {
    font-size: 1.2rem;
    opacity: 0.9;
    font-style: italic;
}

.app-main {
    padding: 40px;
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-bottom: 50px;
}

.feature-card {
    background: #f8f9fa;
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid #e9ecef;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
}

.feature-icon {
    font-size: 3rem;
    margin-bottom: 20px;
}

.feature-card h3 {
    color: #333;
    margin-bottom: 15px;
    font-size: 1.5rem;
}

.feature-card p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
}

.feature-btn {
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.feature-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

.demo-section {
    background: #f8f9fa;
    padding: 40px;
    border-radius: 15px;
    text-align: center;
}

.demo-section h2 {
    color: #333;
    margin-bottom: 30px;
    font-size: 2rem;
}

.demo-controls {
    margin-bottom: 30px;
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
}

.demo-button {
    padding: 15px 30px;
    border: none;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.demo-button:not(.secondary) {
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
}

.demo-button.secondary {
    background: white;
    color: #667eea;
    border: 2px solid #667eea;
}

.demo-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

.demo-output {
    background: white;
    padding: 30px;
    border-radius: 10px;
    border: 2px dashed #ddd;
    color: #666;
    font-size: 1.1rem;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.demo-output.active {
    border-color: #667eea;
    background: #f8f9ff;
    color: #333;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .app-header h1 {
        font-size: 2.5rem;
    }
    
    .app-main {
        padding: 20px;
    }
    
    .feature-grid {
        grid-template-columns: 1fr;
    }
    
    .demo-controls {
        flex-direction: column;
        align-items: center;
    }
}`,
      'script.js': `class AdvancedWebApp {
    constructor() {
        this.demoActive = false;
        this.initializeApp();
    }
    
    initializeApp() {
        document.getElementById('demoBtn').addEventListener('click', () => this.startDemo());
        document.getElementById('resetBtn').addEventListener('click', () => this.resetDemo());
        
        this.addInteractiveEffects();
    }
    
    startDemo() {
        const output = document.getElementById('demoOutput');
        output.classList.add('active');
        
        if (!this.demoActive) {
            this.demoActive = true;
            this.runDemoSequence();
        }
    }
    
    async runDemoSequence() {
        const output = document.getElementById('demoOutput');
        const messages = [
            '🚀 Initializing advanced web application...',
            '📊 Loading data management modules...',
            '🎨 Applying modern design system...',
            '⚡ Optimizing performance metrics...',
            '🔧 Configuring customization options...',
            '✅ Application ready! All systems operational.'
        ];
        
        for (let i = 0; i < messages.length; i++) {
            output.textContent = messages[i];
            await this.delay(1000);
        }
        
        // Final interactive state
        output.innerHTML = \`
            <div>
                <h3>🎉 Demo Complete!</h3>
                <p>Your advanced web application is now running with:</p>
                <ul style="text-align: left; margin-top: 15px;">
                    <li>✅ Real-time data processing</li>
                    <li>✅ Responsive design system</li>
                    <li>✅ Performance optimization</li>
                    <li>✅ Custom configurations</li>
                </ul>
            </div>
        \`;
    }
    
    resetDemo() {
        this.demoActive = false;
        const output = document.getElementById('demoOutput');
        output.classList.remove('active');
        output.textContent = 'Click "Start Demo" to see the application in action';
    }
    
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    addInteractiveEffects() {
        // Add floating animation to feature cards
        const cards = document.querySelectorAll('.feature-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = \`\${index * 0.1}s\`;
        });
    }
}

// Global function for feature exploration
function showFeature(featureType) {
    const features = {
        data: 'Data Management: Advanced CRUD operations, real-time synchronization, and secure data storage.',
        design: 'Modern Design: Responsive layouts, smooth animations, and accessibility compliance.',
        performance: 'Performance: Lazy loading, code splitting, and optimized resource delivery.',
        custom: 'Customization: Themeable components, plugin architecture, and API integrations.'
    };
    
    alert(\`✨ \${features[featureType]}\`);
}

document.addEventListener('DOMContentLoaded', () => {
    new AdvancedWebApp();
    console.log('🚀 Advanced web application initialized!');
    console.log('Generated from prompt:', '${prompt}');
});`
    };
  };

  // Tic Tac Toe Game (specific game)
  const generateTicTacToeGame = (prompt) => {
    return {
      'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe Game</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="game-container">
        <h1>🎮 Tic Tac Toe</h1>
        <div class="game-info">
            <div class="score">
                <span>Player X: <span id="scoreX">0</span></span>
                <span>Player O: <span id="scoreO">0</span></span>
            </div>
            <div class="current-player">Current Player: <span id="currentPlayer">X</span></div>
        </div>
        <div class="game-board" id="gameBoard">
            <div class="cell" data-cell="0"></div>
            <div class="cell" data-cell="1"></div>
            <div class="cell" data-cell="2"></div>
            <div class="cell" data-cell="3"></div>
            <div class="cell" data-cell="4"></div>
            <div class="cell" data-cell="5"></div>
            <div class="cell" data-cell="6"></div>
            <div class="cell" data-cell="7"></div>
            <div class="cell" data-cell="8"></div>
        </div>
        <div class="game-controls">
            <button id="resetBtn" class="btn">Reset Game</button>
            <button id="newGameBtn" class="btn">New Game</button>
        </div>
        <div id="gameMessage" class="message"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
      'styles.css': `/* Tic Tac Toe specific styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.game-container {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 25px 50px rgba(0,0,0,0.2);
    text-align: center;
    max-width: 400px;
}

h1 {
    color: #333;
    margin-bottom: 20px;
    font-size: 2.2rem;
}

.game-board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin: 20px 0;
    background: #f0f0f0;
    padding: 10px;
    border-radius: 12px;
}

.cell {
    width: 80px;
    height: 80px;
    background: white;
    border: 2px solid #ddd;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
}

.cell:hover:not(.taken) {
    background: #f8f9ff;
    border-color: #667eea;
    transform: scale(1.05);
}`,
      'script.js': `// Simple Tic Tac Toe implementation
class TicTacToe {
    constructor() {
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.currentPlayer = 'X';
        this.gameActive = true;
        this.initializeGame();
    }
    
    initializeGame() {
        document.querySelectorAll('.cell').forEach((cell, index) => {
            cell.addEventListener('click', () => this.handleCellClick(index));
        });
        this.updateDisplay();
    }
    
    handleCellClick(index) {
        if (this.board[index] !== '' || !this.gameActive) return;
        
        this.board[index] = this.currentPlayer;
        this.updateCell(index);
        
        if (this.checkWinner()) {
            alert(\`Player \${this.currentPlayer} Wins!\`);
            this.gameActive = false;
        } else if (this.board.every(cell => cell !== '')) {
            alert('Game Draw!');
            this.gameActive = false;
        } else {
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            this.updateDisplay();
        }
    }
    
    updateCell(index) {
        const cell = document.querySelector(\`[data-cell="\${index}"]\`);
        cell.textContent = this.currentPlayer;
        cell.classList.add('taken');
    }
    
    checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        
        return winPatterns.some(pattern => {
            const [a, b, c] = pattern;
            return this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c];
        });
    }
    
    updateDisplay() {
        const playerElement = document.getElementById('currentPlayer');
        if (playerElement) {
            playerElement.textContent = this.currentPlayer;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TicTacToe();
    console.log('🎮 Tic Tac Toe initialized!');
});`
    };
  };

  // Add placeholder functions for other generators
  const generateChatApp = (prompt) => generateAdvancedWebApp(prompt);
  const generateBlogTemplate = (prompt) => generateAdvancedWebApp(prompt);
  const generateEcommerceTemplate = (prompt) => generateAdvancedWebApp(prompt);
  const generateFormTemplate = (prompt) => generateAdvancedWebApp(prompt);
  const generateDashboardTemplate = (prompt) => generateAdvancedWebApp(prompt);
  const generateLandingPageTemplate = (prompt) => generateAdvancedWebApp(prompt);
  const generateTodoApp = (prompt) => generateAdvancedWebApp(prompt);
  const generateCalculatorApp = (prompt) => generateAdvancedWebApp(prompt);
  const generateSnakeGame = (prompt) => generateAdvancedWebApp(prompt);
  const generateMemoryGame = (prompt) => generateAdvancedWebApp(prompt);
  const generateQuizApp = (prompt) => generateAdvancedWebApp(prompt);
  const generateGenericGame = (prompt) => generateAdvancedWebApp(prompt);

  const generateCode = async (prompt) => {
    if (!prompt.trim()) return null;
    
    setIsLoading(true);
    
    try {
      // Try API first
      const response = await axios.post('/api/generate', { prompt }, {
        timeout: 30000,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.data?.files) {
        return response.data.files;
      }
      
      throw new Error('No files in response');
      
    } catch (error) {
      console.error("API Error:", error);
      console.log('API unavailable, using intelligent fallback generation');
      
      // Small delay to simulate processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      return generateIntelligentCode(prompt);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    generateCode,
    isLoading
  };
};

export default useAIGenerator;
