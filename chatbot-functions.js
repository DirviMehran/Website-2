function openChatbot() {
    console.log("openChatbot called");
    document.getElementById('chatbot-container').style.display = 'flex';
    resetChat();
}

function closeChatbot() {
    console.log("closeChatbot called");
    document.getElementById('chatbot-container').style.display = 'none';
    resetChat(); // Reset chat when closed
}

function resetChat() {
    document.getElementById('chatbot-messages').innerHTML = `
        <div class="bot-message">Hello! I'm Dr. Mehran Ullah's Virtual Assistant. How can I assist you today?</div>
        ${getOptionsHTML()}
    `;
    lastTopic = '';
}

function sendPredefinedMessage(topic) {
    lastTopic = topic;
    addMessage('user', formatTopicForDisplay(topic));
    const response = getBotResponse(topic);
    setTimeout(() => {
        addMessage('bot', response);
        appendOptions();
    }, 600);
}

function addMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'bot' ? 'bot-message' : 'user-message';
    messageDiv.innerText = text;
    document.getElementById('chatbot-messages').appendChild(messageDiv);
    scrollChatToBottom();
}

function appendOptions() {
    const messages = document.getElementById('chatbot-messages');
    const options = document.createElement('div');
    options.innerHTML = getOptionsHTML();
    messages.appendChild(options);
    scrollChatToBottom();
}

function getOptionsHTML() {
    return `
        <div class="options">
            <button onclick="sendPredefinedMessage('research')">Research</button>
            <button onclick="sendPredefinedMessage('teaching')">Teaching</button>
            <button onclick="sendPredefinedMessage('phd')">PhD Supervision</button>
            <button onclick="sendPredefinedMessage('contact')">Contact</button>
            <button onclick="sendPredefinedMessage('profiles')">Profiles &amp; Links</button>
        </div>
    `;
}

function formatTopicForDisplay(topic) {
    const topics = {
        'research': "Tell me about Dr. Mehran Ullah's research",
        'teaching': "What does Dr. Mehran Ullah teach?",
        'phd': "Does Dr. Mehran Ullah supervise PhD students?",
        'contact': "How can I contact Dr. Mehran Ullah?",
        'profiles': "Where can I find his profiles?"
    };
    return topics[topic] || topic;
}

function getBotResponse(topic) {
    const responses = {
        'research': "Dr. Mehran Ullah specializes in sustainable supply chains, optimization, AI applications in logistics, and circular economy models.",
        'teaching': "Dr. Mehran Ullah teaches courses in logistics, supply chain management, operations research, project management, and data science.",
        'phd': "Yes, Dr. Ullah supervises PhD students in supply chain management, sustainability, AI applications, and decision support systems.",
        'contact': "You can reach Dr. Mehran Ullah at mehran.ullah@uws.ac.uk.",
        'profiles': "You can find Dr. Mehran Ullah's professional profiles (LinkedIn, ORCID, Google Scholar, Scopus, and UWS Research Portal) directly at the top of this page in the Profile Links section."
    };
    return responses[topic] || "I'm here to assist you.";
}

function scrollChatToBottom() {
    const messages = document.getElementById('chatbot-messages');
    messages.scrollTop = messages.scrollHeight;
}

// Attach functions to the global window object so inline event handlers can access them:
window.openChatbot = openChatbot;
window.closeChatbot = closeChatbot;
window.sendPredefinedMessage = sendPredefinedMessage;
