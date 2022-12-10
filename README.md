## 此專案用於學習VUE3

[Firebase Hosting ](https://vue3-learn-d164d.web.app/)

使用 VUE + Vite 做專案配置
使用 Vue Router 做頁面的配置切換
使用 Pinia 做跨組件/頁面共享狀態
專案的寫法皆使用Composition API
使用 SCSS 做內容樣式
使用 axios 抓取API

### 專案資料夾結構

|-- assets <br>
| &ensp;   |-- img <br>
| &ensp;   |-- scss <br>
|-- components <br>
|-- composables <br>
|-- router <br>
|-- stores <br>
|-- views <br>
| &ensp;   |-- viewPage <br>
| &ensp; &ensp;       |-- section <br>

assets      img資料夾   使用到的圖片，scss資料夾 main.scss 為全域樣式，reset.css重置樣式。 <br>
components  頁面上的使用到的組件。 <br>
composables 可重複使用之函式/功能。 <br>
router      index.js 不同頁面的切換路徑設定。<br>        
stores      使用pinia放置不同頁面之共享狀態，可使views頁面專注於畫面的呈現。<br>
views       各頁面的版面配置，section資料夾為該頁面下之部分頁面。<br>
