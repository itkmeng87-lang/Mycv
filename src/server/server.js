const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const axios = require('axios');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", 
    methods: ["GET", "POST"]
  }
});

const TELEGRAM_BOT_TOKEN = '8445881677:AAHfA7bfLmev9EkOA8iHMYPR-zNm6lyHjgo'; //
const TELEGRAM_CHAT_ID = '1822911898'; 

io.on('connection', (socket) => {
  console.log(`👤 Client Connected: ${socket.id}`);

  // client_transmit_message
  socket.on('client_transmit_message', async (data) => {
    console.log("📩 ទទួលបានទិន្នន័យពី Form:", data);
    
    // Show in telegram
    const telegramMessage = `
📩 *មានសារថ្មីពីទម្រង់ទំនាក់ទំនង!*
──────────────────────
👤 *ឈ្មោះ:* ${data.sender}
📧 *អ៊ីមែល:* ${data.email}
📝 *គម្រោង:* ${data.content}
🕒 *ម៉ោង:* ${data.timestamp}
    `;

    try {
      // Called Telegram API 
      await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'Markdown'
      });
      console.log("✅ បញ្ជូនទៅ Telegram ជោគជ័យ!");
    } catch (error) {
      console.error("❌ មិនអាចផ្ញើទៅ Telegram បានទេ:", error.message);
    }
  });

  socket.on('disconnect', () => {
    console.log(`❌ Client Disconnected: ${socket.id}`);
  });
});

server.listen(3001, () => {
  console.log('🚀 Server is running on http://localhost:3001');
});