function loadChatbot() {
    const chatbotHTML = `
        <div id="chatbot-container">
            <div id="chatbot-header">
                Virtual Assistant - Dr. Mehran Ullah
                <button onclick="closeChatbot()">×</button>
            </div>
            <div id="chatbot-messages">
                <div class="bot-message">Hello! I'm Dr. Mehran Ullah's Virtual Assistant. How can I assist you today?</div>
                <div id="chat-options" class="options">
                    <button onclick="sendPredefinedMessage('research')">Research</button>
                    <button onclick="sendPredefinedMessage('teaching')">Teaching</button>
                    <button onclick="sendPredefinedMessage('phd')">PhD Supervision</button>
                    <button onclick="sendPredefinedMessage('contact')">Contact</button>
                    <button onclick="sendPredefinedMessage('profiles')">Profiles & Links</button>
                </div>
            </div>
        </div>
        <button id="chatbot-toggle-btn" onclick="openChatbot()">Chat with my Virtual Assistant</button>
    `;
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    // Optionally, load the corresponding CSS and other JavaScript functions here.
}

document.addEventListener('DOMContentLoaded', loadChatbot);
