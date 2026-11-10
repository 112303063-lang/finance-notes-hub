# Finance Notes Hub｜財經知識筆記網站

Finance Notes Hub 是一個**簡潔、容易擴充的財經知識學習網站**，使用 **HTML、CSS 與 JavaScript** 建立。專案透過 **[AGENTS.md](AGENTS.md)** 記錄 AI 開發與維護規範，讓未來新增筆記或頁面時，能維持一致的內容格式與網頁風格。

## 一、網站功能

- **四大財經分類**：財務會計（Financial Accounting）、公司理財（Corporate Finance）、投資學（Investment）與經濟學（Economics）。
- **八篇財經筆記**：提供英文概念解釋、繁體中文標題、重要公式與實際例子。
- **即時搜尋功能**：支援英文與繁體中文關鍵字搜尋。
- **響應式網頁設計**：可以在電腦、平板及手機上瀏覽分類卡片與筆記內頁。
- **可重複使用的開發流程**：讓 AI 依照 `AGENTS.md` 的規則新增分類、筆記及頁面。
- **容易部署**：不需要後端、資料庫、額外套件、建置指令或 API Key。

## 二、如何在電腦上開啟網站

最簡單的方式是直接用瀏覽器開啟專案根目錄中的 `index.html`。

也可以在專案資料夾中啟動本機靜態網站伺服器：

```bash
python3 -m http.server 8000
```

再透過瀏覽器開啟：`http://localhost:8000`

## 三、如何透過 GitHub Pages 發布網站

1. 在 GitHub 建立一個**公開（Public）**的 Repository，例如 `finance-notes-hub`。
2. 將本專案的**所有檔案與子資料夾**上傳到 Repository，並確認 `index.html` 位於 Repository 的最上層（根目錄）。
3. 進入 Repository 的 **Settings → Pages**。
4. 在 **Build and deployment** 中選擇 **Deploy from a branch**，將分支設為 `main`、資料夾設為 `/(root)`，然後按下儲存。
5. 等 GitHub 顯示網站已發布後，開啟以下網址（請將 `YOUR-USERNAME` 換成自己的 GitHub 帳號名稱）：

   `https://YOUR-USERNAME.github.io/finance-notes-hub/`

6. 實際點擊一個分類與一篇筆記，確認所有連結都能正常開啟。

**提醒：** 本專案已準備好供上傳，但下載或解壓縮檔案並不代表網站已經自動發布到 GitHub Pages。若 Repository 名稱不同，網站網址也會跟著改變。

## 四、未來如何新增內容？

新增筆記前，AI 應先閱讀 **[AGENTS.md](AGENTS.md) 第七章**，遵守專案規定的命名方式、頁面樣板與內容結構。

例如，可以告訴 AI：

> 請先閱讀 AGENTS.md，再依照其中的規則，在 Corporate Finance 分類下新增一篇 Internal Rate of Return（IRR，內部報酬率）的筆記。

AI 應依照既有流程：

1. 在 `assets/js/data.js` 加入符合格式的筆記資料。
2. 參考既有筆記頁面，建立 `notes/irr.html`。
3. 檢查新筆記是否出現在正確的分類與搜尋結果中。
4. 測試新頁面與既有導覽連結是否正常。

因為網站使用統一的資料結構與共用樣式，所以**新增一篇筆記不需要重新製作首頁或分類頁面**。這也是本次專案設計最重要的延伸性。

## 五、專案檔案結構

```text
finance-notes-hub/
├── AGENTS.md                  # AI 開發規則
├── README.md                  # 專案說明（本文件）
├── index.html                 # 網站首頁
├── about.html                 # 網站介紹
├── assets/
│   ├── css/
│   │   └── style.css          # 全站共用樣式
│   └── js/
│       ├── data.js            # 分類與筆記資料
│       └── app.js             # 網站互動與顯示功能
├── topics/                    # 四個財經分類頁面
└── notes/                     # 八篇財經筆記頁面
```

## 六、教育用途聲明

本網站內容僅供一般財經知識學習使用，不構成個人化投資建議。網站範例經過簡化，實際分析時應考慮更完整的資訊與假設。
