var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');
var user = { message: "" };

var arrayOfPossibleMessage = [
    { message: "hii", response: "hello" },
    { message: "how are you", response: "I am good" },
    { message: "who created you?", response: "My creater is mr. Prashant Srivastava" },
    { message: "hi", response: "Hello! How can I assist you today?" },
    { message: "hello", response: "Hi there! How can I help you?" },
    { message: "how are you", response: "I'm doing well, thank you for asking." },
    { message: "what's up", response: "Not much, just here to help. How about you?" },
    { message: "what can you do", response: "I can assist you with a variety of tasks, from answering questions to providing recommendations." },
    { message: "who are you", response: "I'm a chatbot designed to assist you with tasks and provide information." },
    { message: "where are you from", response: "I exist in the digital realm, so you can find me wherever you have internet access!" },
    { message: "tell me a joke", response: "Sure! Why did the scarecrow win an award? Because he was outstanding in his field!" },
    { message: "thanks", response: "You're welcome! If you have any more questions, feel free to ask." },
    { message: "bye", response: "Goodbye! If you need assistance in the future, don't hesitate to reach out." }
];

function sendMessage(userMessage) {
    var messageElement = document.createElement('div');
    messageElement.style.textAlign = "right";
    messageElement.style.margin = "10px";
    messageElement.innerHTML = "<span> You: </span>" + "<span>" + userMessage + "</span>";

    chatContainer.appendChild(messageElement);
}

function chatbotResponse(userMessageText) {
    var chatbotmessage = "";

    if (userMessageText === "hi") {
        chatbotmessage = "hello";
    } else if (userMessageText.length >= 5) {
        var result = arrayOfPossibleMessage.filter(val => val.message.includes(userMessageText.toLowerCase()));

        if (result.length > 0) {
            var response = result[0].response;
            chatbotmessage = response;
        }else{
            chatbotmessage="please send another message";
        }
    }else{
        chatbotmessage = "Please send different message";
    }

    var messageElement = document.createElement('div');
    messageElement.innerHTML = "<span>Chatbot: </span>" +
        "<span>" + chatbotmessage + "</span>";


        setTimeout(()=>{
            messageElement.animate([{easing:"ease-in", opacity:0.3},{opacity:1}], {duration:1000})
            chatContainer.appendChild(messageElement);
            chatContainer.scrollTop=chatContainer.scrollHeight;
        },1000)
            
    
}

sendBtn.addEventListener('click', function (e) {
    var userMessage = textbox.value;
    if (userMessage === "") {
        alert("Please enter a message");
    } else {
        let userMessageText = userMessage.trim();
        user.message = userMessageText;
        textbox.value = "";
        sendMessage(userMessageText);
        chatbotResponse(userMessageText);
    }
});
