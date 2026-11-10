# AGENTS.md — Finance Notes Hub 專案開發規範

> **給 AI 開發工具的指示：** 在新增、修改或刪除任何專案檔案前，請先閱讀本文件。本文件是 Finance Notes Hub 的統一開發規範。若使用者的新要求與本文件衝突，應先確認需求，並在必要時同步更新本文件。

## 1. 專案目的

**Finance Notes Hub** 是給大學生及初學者使用的免費財經知識整理網站，透過精簡說明、公式及例題，協助使用者理解四個領域：

1. **Financial Accounting（財務會計）**
2. **Corporate Finance（公司理財）**
3. **Investment（投資學）**
4. **Economics（經濟學）**

網站以**正確、容易理解、設計一致、可持續擴充**為優先。內容僅用於教育，不提供個人化投資建議。

**長期目標：** 未來使用者只需說「在 Corporate Finance 新增一篇 IRR 筆記」，AI 就可以照本文件的規則完成筆記資料、頁面及導覽，不必重新詢問網站的設計與檔案安排。

## 2. 技術與部署規則

- 僅使用原生 **HTML、CSS、JavaScript**，不使用 React、Node.js 建置程序、套件管理器、後端或資料庫。
- 網站須適用於 **GitHub Pages**，包括 `https://USERNAME.github.io/REPOSITORY/` 這種放在儲存庫子目錄下的網址。
- 不得使用 `/assets/...`、`/notes/...` 這類從網站根目錄開始的絕對路徑。
- 首頁與 About 頁設定 `data-root="."`，分類及筆記子頁設定 `data-root=".."`，由 `assets/js/app.js` 處理相對連結。
- 分類及筆記資料集中存於 `assets/js/data.js`，並在 `app.js` 之前載入。不要為了取得本機 JSON 而依賴 `fetch()`。
- 不加入前端 API Key、秘密資訊、追蹤碼或不必要的外部依賴。
- 所有頁面都須兼顧手機顯示、無障礙操作及載入速度。

## 3. 標準檔案結構

```text
finance-notes-hub/
├── AGENTS.md                     # 本文件：AI 開發與維護規範
├── README.md                     # 專案介紹、使用及部署方法
├── index.html                    # 首頁：分類卡片、筆記及搜尋
├── about.html                    # 網站目的與介紹
├── assets/
│   ├── css/style.css             # 全站共用樣式
│   └── js/
│       ├── data.js               # 分類與筆記的唯一資料來源
│       └── app.js                # 渲染、搜尋與導覽功能
├── topics/
│   ├── accounting.html
│   ├── corporate-finance.html
│   ├── investment.html
│   └── economics.html
└── notes/
    ├── npv.html
    ├── wacc.html
    └── ...                        # 每篇筆記有一個 HTML 頁面外殼
```

**重要架構：** 內容與版型分離。筆記文字應放在 `data.js`，不要重複貼進多個 HTML 檔。分類頁及筆記頁只提供共用的 HTML 頁面外殼，`app.js` 依 `data-category` 或 `data-note` 顯示內容。

## 4. 視覺設計規範

- **風格：** 簡潔、現代、清楚、專業但親切；避免過多動畫、彈窗、雜亂圖表與跑馬燈。
- **固定配色：** 深藍 `#102744`、強調藍 `#235CE3`、文字 `#14233D`、次要文字 `#61718B`、背景 `#F8FAFD`、卡片白色 `#FFFFFF`。
- **字體：** 標題使用 Manrope、內文使用 DM Sans，保留系統備用字體。
- **版面：** 主要內容置中，最大寬度約 1180px；卡片為圓角、細邊框、適當留白。
- **響應式：** 分類卡片在桌機／平板／手機分別為每列 4／2／1 張；筆記卡片為 3／2／1 張。
- **無障礙：** 標題層級正確、連結名稱清楚、搜尋框有標籤、鍵盤焦點可見、顏色對比足夠。
- 新增頁面時**重用既有 CSS 樣式及渲染方式**，不得擅自另外設計一套視覺系統。

## 5. 分類與檔案命名

目前固定四個分類：

| 分類 ID | 顯示名稱 | 中文 |
| --- | --- | --- |
| `accounting` | Financial Accounting | 財務會計 |
| `corporate-finance` | Corporate Finance | 公司理財 |
| `investment` | Investment | 投資學 |
| `economics` | Economics | 經濟學 |

- ID 與檔名採用**英文小寫 kebab-case**，例如 `interest-rate-parity`、`cash-flow-statement`。
- 筆記頁面放在 `notes/<note-id>.html`；分類頁面放在 `topics/<category-id>.html`。
- 檔名不得包含空格、中文、英文大寫或不必要的特殊符號。
- 每個 ID 必須唯一；發布後原則上不任意變更，避免舊網址失效。
- **除非使用者明確要求，不得新增第五個分類。**

## 6. 每篇筆記的必備內容

每一篇筆記都必須有以下四個區塊，順序不可任意變動：

1. **Core idea（核心概念）：** 用初學者聽得懂的方式定義概念並說明直覺。
2. **Formula（公式）或 Key distinction（重要區別）：** 若有公式，說明符號、單位、假設；沒有公式則改寫重要區別。
3. **Example（實際例子）：** 簡單、正確的數字計算或商業情境。
4. **Remember（重點整理）：** 用簡短重點幫助複習。

筆記資料必須新增至 `window.FINANCE_DATA.notes`。格式範例：

```js
{
  "id": "new-concept",
  "category": "corporate-finance",
  "title": "New Concept",
  "zh": "中文標題",
  "level": "Beginner",
  "minutes": 5,
  "summary": "One-sentence summary.",
  "sections": [
    {"title": "Core idea", "body": "Definition and intuition."},
    {"title": "Formula", "formula": "Clearly defined formula", "body": "Explain variables and assumptions."},
    {"title": "Example", "body": "Short numeric or business example."},
    {"title": "Remember", "bullets": ["Takeaway one.", "Takeaway two."]}
  ]
}
```

內容規範：

- 每篇英文筆記建議約 **150–300 字**；使用簡潔、專業且容易理解的英文，搭配正確的繁體中文標題。
- `level` 使用 `Beginner` 或 `Intermediate`；`minutes` 使用整數。
- 計算題必須核對公式、數值、單位與四捨五入方式；有必要時寫明假設及限制。
- 不得虛構財經事實、保證投資報酬或加入未經查證的投資預測。
- 顯示筆記資料時使用 `textContent`，不要直接用 `innerHTML` 插入來源不明的字串。
- 未經使用者要求，不得任意改動原有筆記內容。

## 7. 新增一篇筆記的標準流程（最重要）

**使用範例：**「請在 Corporate Finance 新增一篇 Internal Rate of Return（IRR）筆記。」

1. **確認 ID：** 選擇 `irr` 等不重複的英文小寫 ID；先檢查 `data.js` 中是否已有相同筆記。
2. **撰寫內容：** 依第 6 節建立四個區塊，核對定義、公式及例題。
3. **更新資料：** 在 `assets/js/data.js` 的 `notes` 陣列新增**一筆**資料，並指定既有分類 ID（此例為 `corporate-finance`）。
4. **建立 HTML：** 複製 `notes/wacc.html` 的頁面外殼成 `notes/irr.html`，把 `data-note` 改成 `irr`；保留 `data-page="note"`、`data-root=".."`、共用資產路徑和 `id="article-content"`。
5. **更新顯示：** 首頁筆記清單、搜尋、分類頁面及筆記數量應由 `data.js` 自動產生；**不得只為新增卡片而手動修改首頁**。
6. **檢查功能：** 開啟 `notes/irr.html`，確認四段內容、中文標題、分類清單、首頁搜尋、返回連結及手機排版均正常。
7. **同步文件：** 確認 `README.md` 資訊仍正確；只有當架構或規則改變時，才調整 `AGENTS.md`。

**完成標準：** 新筆記可以正常開啟、出現在正確分類及搜尋結果、版型與舊筆記一致，且不影響其他頁面。

## 8. 修改既有筆記的流程

1. 先按 ID 在 `assets/js/data.js` 找到正確筆記，避免重複建立。
2. 只修改必要的欄位；除非明確要求，保留原 ID 與分類。
3. 再次檢查中文標題、公式、例題與四段格式。
4. 測試該筆記、所屬分類頁和首頁搜尋功能。

## 9. 新增分類的流程（僅在使用者要求時）

1. 在 `data.js` 的 `categories` 陣列加入新分類，包含 `id`、`name`、`zh`、`icon`、`summary` 及既有 CSS 強調色樣式。
2. 複製 `topics/accounting.html` 成 `topics/<new-id>.html`，修改 `data-category`，保留 `data-root=".."`。
3. 依第 7 節新增至少一篇相關筆記，或清楚顯示目前沒有內容。
4. 確認首頁能自動顯示新分類、連結正常，且新增分類後各螢幕寬度的排版仍正常。

## 10. 每次修改後的測試清單

- [ ] 修改前已閱讀 `AGENTS.md`。
- [ ] HTML 路徑及 `data-page`、`data-root`、`data-note`／`data-category` 正確。
- [ ] 所有筆記 ID 唯一，所屬分類存在，且都有四個內容區塊。
- [ ] 每個 `notes/<id>.html` 都有對應的 `data.js` 筆記資料；沒有漏建或多餘頁面。
- [ ] 首頁 → 分類 → 筆記 → 返回，以及 About 頁的導覽正常。
- [ ] 可用英文標題、中文標題與相關關鍵字搜尋。
- [ ] 手機版排版及鍵盤焦點可正常使用。
- [ ] 沒有失效連結、必要圖片缺失、前端金鑰或不必要的建置依賴。
- [ ] 部署後已確認 GitHub Pages 網址，包含儲存庫子路徑，都能正常使用。

**未實際測試的項目必須明確告知，不能假裝已測試成功。**

## 11. 已有的擴充示範

`assets/js/data.js` 中的 `wacc` 筆記資料與 `notes/wacc.html`，是本專案「可重複擴充」的實際範例。未來 AI 可用同一流程新增 `irr`、`capm`、`roe` 等筆記，而不用重新設計整個網站。

**核心概念：一次訂好規則，未來持續新增內容時都遵循同一套標準。**

## 12. AI 完工時的回報格式

每次完成新增或修改後，請簡短回報：

1. **新增或修改的檔案：** 列出檔名。
2. **本次變更內容：** 簡述新增或修正了什麼。
3. **測試結果：** 說明實際完成的檢查。
4. **待處理事項：** 明確指出尚未驗證或無法完成的事項。

在 GitHub Pages 尚未正式啟用並實際驗證前，不得宣稱網站已成功公開上線。
