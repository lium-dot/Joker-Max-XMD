<p align="center">
  <img src="https://files.catbox.moe/pk48i2.jpg" alt="JOKER MAX XMD" width="400">
</p>

<h1 align="center">🃏 JOKER MAX XMD</h1>
<h3 align="center">The Ultimate Multi-Platform Bot Solution</h3>
<p align="center">
  <strong>⚡ Powered by <a href="https://github.com/iconic05">Iconic Tech</a> | 🤝 Partnered with <a href="https://github.com/iconic05/Queen-ruva-ai-beta">Queen Ruva AI Beta</a></strong>
</p>

---

## ⚠️ IMPORTANT NOTE
**This bot works with only 25 coins and more! Unlimited panel bot will not be recognized.**

---

## 🌟 CORE FEATURES  
- **WhatsApp Automation**  
  - Bulk messaging  
  - Smart auto-replies  
  - Advanced group management tools  
- **TikTok Growth Suite**  
  - Auto-engagement system  
  - View boosting capabilities  
- **Katapult Integration**  
  - High-performance hosting solution  
- **Web Panel Control**  
  - Real-time bot management dashboard  
- **Multi-Device Ready**  
  - 24/7 uninterrupted operation  

---

## 🔗 OFFICIAL LINKS  

| Platform          | Badge | Link |
|-------------------|-------|------|
| **GitHub Repo**   | ![GitHub](https://img.shields.io/badge/Source-Code-success) | [Joker-Max Source](https://github.com/iconic05/Joker-max) |
| **WhatsApp Group**| ![WhatsApp](https://img.shields.io/badge/Community-Chat-green) | [Join Community](https://chat.whatsapp.com/YOUR_INVITE) |
| **Control Panel** | ![Dashboard](https://img.shields.io/badge/Control-Panel-blue) | [Dashboard](https://bot-hosting.net/?aff=1274828280750407803) |

---

## 🚀 DEPLOYMENT OPTIONS

### Free Hosting Solutions
[![Deploy on Render](https://img.shields.io/badge/Render-Free_Hosting-blue?style=for-the-badge)](https://bot-hosting.net/?aff=1274828280750407803)  
[![Katapult Hosting](https://img.shields.io/badge/Katapult-Optimized-orange?style=for-the-badge)](https://dashboard.katabump.com/auth/login#daeae7)  

### Termux ON TERMUX(ANDROID)
```bash
#!/bin/bash

# System Update
clear
echo "[+] Updating system packages..."
pkg update -y && pkg upgrade -y

# Install Dependencies
echo "[+] Installing required dependencies..."
pkg install -y git nodejs ffmpeg imagemagick libwebp

# Clone Repository
echo "[+] Downloading Joker-Max-XMD..."
if [ -d "Joker-Max-XMD" ]; then
    echo "[!] Repository already exists. Pulling latest changes..."
    cd Joker-Max-XMD
    git pull
else
    git clone https://github.com/iconic05/Joker-Max-XMD.git
    cd Joker-Max-XMD
fi

# Install Node Modules
echo "[+] Installing node modules..."
npm install
npm install -g npm@latest
npm audit fix --force

# Additional Setup
echo "[+] Performing additional setup..."
pkg install python -y
npm install --global yarn
yarn install

# Start Bot
clear
cat << "EOF"
  _____  _               __  __       __  __         
 |  __ \| |             |  \/  |     |  \/  |        
 | |__) | | _____      _| \  / | __ _| \  / | ___    
 |  ___/| |/ _ \ \ /\ / / |\/| |/ _` | |\/| |/ _ \   
 | |    | | (_) \ V  V /| |  | | (_| | |  | |  __/   
 |_|    |_|\___/ \_/\_/ |_|  |_|\__,_|_|  |_|\___|   
EOF

echo "[+] Installation complete!"
echo "[+] Starting Joker-Max-XMD..."
node .
