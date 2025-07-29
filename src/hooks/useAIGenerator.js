// hooks/useAIGenerator.js
import { useState } from 'react';
import axios from 'axios';

const useAIGenerator = () => {
  const [isLoading, setIsLoading] = useState(false);


  // Intelligent local code generation function (unused for now)
  /*
  const generateIntelligentCode = (prompt) => {
    const lowerPrompt = prompt.toLowerCase();
    
    // Pattern matching for different types of applications
    if (lowerPrompt.includes('calculator') || lowerPrompt.includes('calc')) {
      return generateCalculator(prompt);
    } else if (lowerPrompt.includes('todo') || lowerPrompt.includes('task')) {
      return generateTodoApp(prompt);
    } else if (lowerPrompt.includes('tic tac toe') || lowerPrompt.includes('ttt')) {
      return generateTicTacToe(prompt);
    } else if (lowerPrompt.includes('clock') || lowerPrompt.includes('time')) {
      return generateClock(prompt);
    } else if (lowerPrompt.includes('counter')) {
      return generateCounter(prompt);
    } else if (lowerPrompt.includes('quiz') || lowerPrompt.includes('trivia')) {
      return generateQuiz(prompt);
    } else if (lowerPrompt.includes('weather')) {
      return generateWeatherApp(prompt);
    } else if (lowerPrompt.includes('form') || lowerPrompt.includes('contact')) {
      return generateContactForm(prompt);
    } else {
      return generateGenericApp(prompt);
    }
  };
  */

  // Calculator Generator
  const generateCalculator = (prompt) => {
    return {
      'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator - ${prompt}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="calculator">
        <div class="display">
            <div class="previous-operand" data-previous-operand></div>
            <div class="current-operand" data-current-operand>0</div>
        </div>
        <button data-all-clear class="span-two">AC</button>
        <button data-delete>DEL</button>
        <button data-operation>÷</button>
        <button data-number>1</button>
        <button data-number>2</button>
        <button data-number>3</button>
        <button data-operation>×</button>
        <button data-number>4</button>
        <button data-number>5</button>
        <button data-number>6</button>
        <button data-operation>+</button>
        <button data-number>7</button>
        <button data-number>8</button>
        <button data-number>9</button>
        <button data-operation>-</button>
        <button data-number>.</button>
        <button data-number>0</button>
        <button data-equals class="span-two">=</button>
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
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.calculator {
    display: grid;
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: minmax(120px, auto) repeat(5, 80px);
    gap: 10px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 25px 50px rgba(0,0,0,0.15);
    animation: slideUp 0.8s ease-out;
}

.display {
    grid-column: span 4;
    background: #f8f9fa;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    padding: 20px;
    border-radius: 15px;
    word-wrap: break-word;
    word-break: break-all;
    border: 2px solid #e9ecef;
}

.previous-operand {
    color: #6c757d;
    font-size: 1.2rem;
}

.current-operand {
    color: #333;
    font-size: 2rem;
    font-weight: bold;
}

button {
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 600;
    border: none;
    border-radius: 15px;
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

button:active {
    transform: translateY(0);
}

.span-two {
    grid-column: span 2;
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

@media (max-width: 480px) {
    .calculator {
        grid-template-columns: repeat(4, 70px);
        grid-template-rows: minmax(100px, auto) repeat(5, 70px);
        gap: 8px;
        padding: 15px;
    }
    
    button {
        font-size: 1.2rem;
    }
    
    .current-operand {
        font-size: 1.5rem;
    }
}

.container {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 25px 50px rgba(0,0,0,0.15);
    text-align: center;
    max-width: 600px;
    animation: slideUp 0.8s ease-out;
}

.header h1 {
    color: #333;
    margin-bottom: 10px;
    font-size: 2.5rem;
    font-weight: 700;
}

.subtitle {
    color: #666;
    font-size: 1.1rem;
    margin-bottom: 30px;
    font-style: italic;
}

.content {
    margin-top: 30px;
}

.card {
    background: #f8f9fa;
    padding: 25px;
    border-radius: 15px;
    margin-bottom: 25px;
    border-left: 4px solid #667eea;
}

.card h2 {
    color: #333;
    margin-bottom: 15px;
    font-size: 1.5rem;
}

.card ul {
    list-style: none;
    text-align: left;
}

.card li {
    padding: 8px 0;
    color: #555;
    position: relative;
    padding-left: 20px;
}

.card li:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #28a745;
    font-weight: bold;
}

.actions {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
}

.btn {
    padding: 12px 30px;
    border: none;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
}

.btn.primary {
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
}

.btn.secondary {
    background: white;
    color: #667eea;
    border: 2px solid #667eea;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
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

@media (max-width: 480px) {
    .container {
        padding: 25px;
    }
    
    .header h1 {
        font-size: 2rem;
    }
    
    .actions {
        flex-direction: column;
    }
}`,
      'script.js': `console.log('🚀 Generated project loaded!');
console.log('Prompt:', '${prompt}');

function showInfo() {
    alert('🎉 This project was generated based on your prompt: "${prompt}"\\n\\nFeatures include:\\n• Modern responsive design\\n• CSS animations\\n• Interactive JavaScript\\n• Professional styling');
}

function showDemo() {
    const demo = document.createElement('div');
    demo.innerHTML = \`
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 1000;">
            <div style="background: white; padding: 30px; border-radius: 15px; text-align: center; max-width: 400px;">
                <h3>🎭 Demo Mode</h3>
                <p>This is a demonstration of the generated project functionality.</p>
                <button onclick="this.parentElement.parentElement.remove()" style="margin-top: 20px; padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 8px; cursor: pointer;">Close</button>
            </div>
        </div>
    \`;
    document.body.appendChild(demo);
}

// Add some interactive effects  
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    
    // Add subtle animation on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        container.style.transform = \`translateY(\${scrolled * 0.1}px)\`;
    });
    
console.log('✨ Interactive effects loaded!');

let currentOperand = '';
let previousOperand = '';
let operation = undefined;

const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');

allClearButton.addEventListener('click', () = 3e {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
});

deleteButton.addEventListener('click', () = 3e {
    currentOperand = currentOperand.toString().slice(0, -1);
    updateDisplay();
});

numberButtons.forEach(button = 3e {
    button.addEventListener('click', () = 3e {
        if (button.textContent === '.' && currentOperand.includes('.')) return;
        currentOperand = currentOperand.toString() + button.textContent.toString();
        updateDisplay();
    });
});

operationButtons.forEach(button = 3e {
    button.addEventListener('click', () = 3e {
        if (currentOperand === '') return;
        if (previousOperand !== '') {
            compute();
        }
        operation = button.textContent;
        previousOperand = currentOperand;
        currentOperand = '';
    });
});

equalsButton.addEventListener('click', button = 3e {
    compute();
    updateDisplay();
});

function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '×':
            computation = prev * current;
            break;
        case '÷':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentOperand = computation;
    operation = undefined;
    previousOperand = '';
}

function updateDisplay() {
    document.querySelector('[data-current-operand]').textContent = currentOperand;
    document.querySelector('[data-previous-operand]').textContent = previousOperand + (operation || '');
}

console.log('🔢 Calculator functions initialized!');
});`
    };
  };

  // Generic App Generator (fallback)
  const generateGenericApp = (prompt) => {
    return {
      'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated: ${prompt}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 ${prompt}</h1>
            <p class="subtitle">AI-Generated Application</p>
        </div>
        <div class="content">
            <div class="card">
                <h2>✨ Features</h2>
                <ul>
                    <li>Responsive design</li>
                    <li>Modern CSS animations</li>
                    <li>Interactive elements</li>
                    <li>Professional styling</li>
                </ul>
            </div>
            <div class="actions">
                <button onclick="showInfo()" class="btn primary">Learn More</button>
                <button onclick="showDemo()" class="btn secondary">Demo</button>
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
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.container {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 25px 50px rgba(0,0,0,0.15);
    text-align: center;
    max-width: 600px;
    animation: slideUp 0.8s ease-out;
}

.header h1 {
    color: #333;
    margin-bottom: 10px;
    font-size: 2.5rem;
    font-weight: 700;
}

.subtitle {
    color: #666;
    font-size: 1.1rem;
    margin-bottom: 30px;
    font-style: italic;
}

.content {
    margin-top: 30px;
}

.card {
    background: #f8f9fa;
    padding: 25px;
    border-radius: 15px;
    margin-bottom: 25px;
    border-left: 4px solid #667eea;
}

.card h2 {
    color: #333;
    margin-bottom: 15px;
    font-size: 1.5rem;
}

.card ul {
    list-style: none;
    text-align: left;
}

.card li {
    padding: 8px 0;
    color: #555;
    position: relative;
    padding-left: 20px;
}

.card li:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #28a745;
    font-weight: bold;
}

.actions {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
}

.btn {
    padding: 12px 30px;
    border: none;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
}

.btn.primary {
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
}

.btn.secondary {
    background: white;
    color: #667eea;
    border: 2px solid #667eea;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
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

@media (max-width: 480px) {
    .container {
        padding: 25px;
    }
    
    .header h1 {
        font-size: 2rem;
    }
    
    .actions {
        flex-direction: column;
    }
}`,
      'script.js': `console.log('🚀 Generated project loaded!');
console.log('Prompt:', '${prompt}');

function showInfo() {
    alert('🎉 This project was generated based on your prompt: "${prompt}"\n\nFeatures include:\n• Modern responsive design\n• CSS animations\n• Interactive JavaScript\n• Professional styling');
}

function showDemo() {
    const demo = document.createElement('div');
    demo.innerHTML = \`
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 1000;">
            <div style="background: white; padding: 30px; border-radius: 15px; text-align: center; max-width: 400px;">
                <h3>🎭 Demo Mode</h3>
                <p>This is a demonstration of the generated project functionality.</p>
                <button onclick="this.parentElement.parentElement.remove()" style="margin-top: 20px; padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 8px; cursor: pointer;">Close</button>
            </div>
        </div>
    \`;
    document.body.appendChild(demo);
}

// Add some interactive effects  
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    
    // Add subtle animation on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        container.style.transform = \`translateY(\${scrolled * 0.1}px)\`;
    });
    
    console.log('✨ Interactive effects loaded!');
});`
    };
  };

  // Add placeholder functions for other generators
  const generateTodoApp = (prompt) => generateGenericApp(prompt);
  const generateTicTacToe = (prompt) => generateGenericApp(prompt);
  const generateClock = (prompt) => generateGenericApp(prompt);
  const generateCounter = (prompt) => generateGenericApp(prompt);
  const generateQuiz = (prompt) => generateGenericApp(prompt);
  const generateWeatherApp = (prompt) => generateGenericApp(prompt);
  const generateContactForm = (prompt) => generateGenericApp(prompt);

  const generateCode = async (prompt) => {
    if (!prompt.trim()) {
      throw new Error('Prompt cannot be empty');
    }
    
    setIsLoading(true);
    
    console.log('🚀 Starting code generation for prompt:', prompt);
    console.log('📊 Environment variables:', {
      REACT_APP_API_URL: process.env.REACT_APP_API_URL,
      NODE_ENV: process.env.NODE_ENV,
      allEnvVars: Object.keys(process.env).filter(key => key.startsWith('REACT_APP_'))
    });
    
    // Get backend API URL
    const apiUrl = process.env.REACT_APP_API_URL;
    console.log('🔗 API URL from env:', apiUrl);
    
    if (!apiUrl || apiUrl === 'undefined' || apiUrl.trim() === '') {
      setIsLoading(false);
      throw new Error('❌ REACT_APP_API_URL is not configured. Please check your .env file.');
    }
    
    try {
      console.log(`🌐 Attempting backend API generation: ${apiUrl}/api/generate`);
      console.log('📝 Request payload:', { prompt });
      
      const startTime = Date.now();
      const response = await axios.post(`${apiUrl}/api/generate`, { prompt }, {
        timeout: 300000, // Increased timeout to 5 minutes (300 seconds) for AI generation
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      
      const duration = Date.now() - startTime;
      console.log(`✅ API Response received in ${duration}ms`);
      console.log('📊 API Response status:', response.status);
      console.log('📦 API Response data:', response.data);
      
      if (!response.data) {
        throw new Error('❌ Empty response from API');
      }
      
      if (!response.data.files || typeof response.data.files !== 'object') {
        console.error('❌ Invalid response structure:', response.data);
        throw new Error(`❌ API response does not contain valid files. Got: ${JSON.stringify(response.data)}`);
      }
      
      const fileKeys = Object.keys(response.data.files);
      if (fileKeys.length === 0) {
        throw new Error('❌ API returned empty files object');
      }
      
      console.log(`🎉 Successfully generated with backend API! Files: ${fileKeys.join(', ')}`);
      setIsLoading(false);
      return response.data.files;
      
    } catch (apiError) {
      setIsLoading(false);
      
      console.error('💥 Backend API generation failed:', {
        message: apiError.message,
        status: apiError.response?.status,
        statusText: apiError.response?.statusText,
        data: apiError.response?.data,
        url: apiError.config?.url,
        code: apiError.code,
        timeout: apiError.code === 'ECONNABORTED'
      });
      
      // Create detailed error message based on error type
      let errorMessage = '❌ API Generation Failed: ';
      
      if (apiError.code === 'ECONNABORTED') {
        errorMessage += 'Request timed out. The API is taking too long to respond.';
      } else if (apiError.response?.status >= 500) {
        errorMessage += `Server error (${apiError.response.status}): ${apiError.response.statusText || 'Internal server error'}`;
      } else if (apiError.response?.status === 404) {
        errorMessage += 'API endpoint not found. Check if the backend server is running and the /api/generate endpoint exists.';
      } else if (apiError.response?.status === 400) {
        errorMessage += `Bad request: ${apiError.response.data?.error || 'Invalid request format'}`;
      } else if (!apiError.response) {
        errorMessage += 'Network error or CORS issue. Cannot connect to the backend server.';
      } else {
        errorMessage += `Unexpected error: ${apiError.message}`;
      }
      
      // Add debugging information
      errorMessage += `\n\nDebugging Info:\n- API URL: ${apiUrl}/api/generate\n- Status: ${apiError.response?.status || 'No response'}\n- Error Code: ${apiError.code || 'Unknown'}`;
      
      throw new Error(errorMessage);
    }
  };

  return {
    generateCode,
    isLoading
  };
};

export default useAIGenerator;
