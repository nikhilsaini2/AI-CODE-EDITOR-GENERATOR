// Simple API test
const axios = require('axios');

async function testAPI() {
    try {
        console.log('Testing API connection...');
        const response = await axios.post('https://ai-code-editor-generator.onrender.com/api/generate', {
            prompt: 'create a simple calculator'
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 30000
        });
        
        console.log('Status:', response.status);
        console.log('Data keys:', Object.keys(response.data));
        console.log('Files available:', Object.keys(response.data.files || {}));
        console.log('Success!');
    } catch (error) {
        console.error('Error:', error.message);
        console.error('Status:', error.response?.status);
        console.error('Data:', error.response?.data);
    }
}

testAPI();
