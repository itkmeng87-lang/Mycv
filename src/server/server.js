const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const axios = require('axios');

const app = express();
const server = http.createServer(app);

// បង្កើត Socket Server និងអនុញ្ញាតឱ្យ React (Port 5173) ភ្ជាប់មកបាន
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", 
    methods: ["GET", "POST"]
  }
});

// ព័ត៌មាន Telegram Bot របស់អ្នក
const TELEGRAM_BOT_TOKEN = '8445881677:AAHfA7bfLmev9EkOA8iHMYPR-zNm6lyHjgo'; //
const TELEGRAM_CHAT_ID = '1822911898'; 

// ចាប់ផ្តើមបើករន្ធស្ដាប់ការភ្ជាប់ពី React
io.on('connection', (socket) => {
  console.log(`👤 Client Connected: ${socket.id}`);

  // ស្ដាប់ព្រឹត្តិការណ៍ 'client_transmit_message' ដែលផ្ញើមកពី ContactForm.jsx
  socket.on('client_transmit_message', async (data) => {
    console.log("📩 ទទួលបានទិន្នន័យពី Form:", data);

    // រៀបចំទម្រង់សារសម្រាប់បង្ហាញលើ Telegram
    const telegramMessage = `
📩 *មានសារថ្មីពីទម្រង់ទំនាក់ទំនង!*
──────────────────────
👤 *ឈ្មោះ:* ${data.sender}
📧 *អ៊ីមែល:* ${data.email}
📝 *គម្រោង:* ${data.content}
🕒 *ម៉ោង:* ${data.timestamp}
    `;

    try {
      // ហៅទៅកាន់ Telegram API ដើម្បីបាញ់សារចូល Chat របស់អ្នក
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

// ឱ្យ Server រត់នៅលើ Port 3001
server.listen(3001, () => {
  console.log('🚀 Server is running on http://localhost:3001');
});