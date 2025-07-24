Here's a clean and simple `README.md` tailored for your **Clear Cache Chrome Extension**:

---

# 🧹 Clear Cache – Chrome Extension

A minimal Chrome extension that lets you **clear cache and site data** for the **current domain** with just a right-click.

## 🧠 What It Does

Normally, clearing cache for a specific site involves:

> Settings → Privacy & Security → Cookies & Other Site Data → See all site data → Search domain → Remove

**Clear Cache** simplifies this to a single action:

✅ **Right-click → “Clear Cache” → Done**

No need to dig through settings — just clear data for the active tab’s domain instantly.

## ⚙️ How It Works

* Adds a context menu option: **“Clear Cache”**
* When clicked, it clears:

  * Cookies
  * Cache
  * Local Storage
  * Session Storage
  * IndexedDB
  * Service Workers
* Only affects the **current site/domain** shown in the address bar

## 🚀 How to Install

1. Clone or download this repo.
2. Go to `chrome://extensions/`
3. Enable **Developer Mode**
4. Click **Load unpacked**
5. Select the extension folder

## 🧪 Test It Out

1. Open any website.
2. Right-click anywhere on the page.
3. Select **"Clear Cache"**
4. The page will reload with a clean cache for that domain.

## 🔐 Permissions Used

* `browsingData`
* `tabs`
* `contextMenus`
* `activeTab`

These are required to detect the current domain and clear data programmatically.

## 📄 License

MIT!
