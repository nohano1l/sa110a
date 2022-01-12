### 腳本(複製)
以下腳本皆是複製參考資料的腳本(有小部分自己理解後，加入註解)
### 重點釐清(複製)
重點釐清是複製參考資料的關鍵知識點(有自己理解後，取出自己覺得比較重要的部分)
### 執行步驟(模仿)
執行步驟皆是自己實作後，把參考資料沒寫到的部分，或事實做遇到的問題加進去
### 圖片(原創)
圖片是自己實做完後，電腦的截圖

# Unit Test in Unity

## Unity Test Runner
unity內建的test runner製作單元測試可測unity兩種環境，Play Mode和Editor Mode。

1. 新建項目，在 Assets 目錄下創建 Scripts 文件夾。
2. 在 Assets/Scripts 下新建一個C# 腳本作為待測試模塊，命名為[SampleClass.cs](https://github.com/nohano1l/sa110a/blob/master/hw/finalproject/script/SampleClass.cs)
3. 新建項目，在 Assets 目錄下創建 Tests 文件夾。
4. 點擊 Window -> General -> Test Runner
5. 在 Assets/Scripts 下新建一個 Assembly Definition，命名為Scripts

### Editor Mode


6. 點選 Tests 文件夾，點擊 Test Runner/EditMode ，Create EditMode Test Assembly Folder，命名 EditMode
7. 點擊 Test Runner/EditMode ，Create Test Script in current folder，新增腳本
8. 點擊 Assets/Tests/EditMode/EditMode.asmdef，在 Assembly Definition References 加入 Scripts ，並且 Apply
9. 點擊 Test Runner/EditMode/Run All

[Calculator.cs](https://github.com/nohano1l/sa110a/blob/master/hw/finalproject/editmode/Calculate.cs)

[SampleTests.cs](https://github.com/nohano1l/sa110a/blob/master/hw/finalproject/editmode/SampleTests.cs)

![edittest_demo](https://github.com/nohano1l/sa110a/blob/master/hw/finalproject/image/editmode.png)

### Play Mode

10. 點選 Tests 文件夾，點擊 Test Runner/PlayMode ，Create PlayMode Test Assembly Folder，命名 PlayMode
11. 點擊 Test Runner/PlayMode ，Create Test Script in current folder，新增腳本
12. 點擊 Assets/Tests/PlayMode/PlayMode.asmdef，在 Assembly Definition References 加入 Scripts ，並且 Apply
13. 點擊 Test Runner/PlayMode/Run All

[SceneLoading.cs](https://github.com/nohano1l/sa110a/blob/master/hw/finalproject/playmode/SceneLoading.cs)

```
注意:記得在 File/Build Setting 把場景加進去!
```

[ShouldUpdatePosition.cs](https://github.com/nohano1l/sa110a/blob/master/hw/finalproject/playmode/ShouldUpdatePosition.cs)

![playtest_demo](https://github.com/nohano1l/sa110a/blob/master/hw/finalproject/image/playmode.png)

## 重點釐清

* 測試函數要標上 [Test] 或者 [UnityTest] 屬性才會被Test Runner 識別，前者是普通測試，後者俱有跳過幀的能力（可使用yield return null，根據測試模式決定是跳EditorApplication.update 還是update）。
*  [UnityTest] 在 Edit Mode 中是跳過EditorApplication.update, 在PlayMode 中是跳過 Monobehavior 的 Update。要測試涉及到遊戲內Update 相關內容時，必須將測試寫為 PlayMode 測試; Edit Mode 的測試只用於與Update 無關或者與 Editor 的 Update 相關的內容（主要是編輯器插件關注）。

    總結：顯式或涉及 Update 的測試內容全部需要放在 Play Mode 下，其他的在 Edit Mode 下。
*  Play Mode 測試運行時會新建臨時場景，運行後自動刪除，而 Edit Mode 則不會。
* 使用 Assert 類語法對關注的值進行測試，具體可用內容參見 NUnit 文檔。

## 參考資料

[Unit Test in Unity(筆記1)](https://hackmd.io/@jackchen/rkNRwuLmI)

[單元測試簡介](https://blog.csdn.net/techfield/article/details/82970557)

[Unit Tests in Unity](https://www.youtube.com/watch?v=PDYB32qAsLU&ab_channel=InfallibleCode)