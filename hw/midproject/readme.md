### js檔(複製)
以下.js檔皆是使用忠誠老師上課的教材，執行結果皆是自己實作後的數據。
### 簡介(複製)
簡介參考維基百科的內容來做說明，少部分是自己的註解

# 蒙地卡羅演算法(Monte Carlo Algorithm)

也稱統計類比方法，是1940年代中期由於科學技術的發展和電腦的發明，而提出的一種以機率統計理論為指導的數值計算方法。是指使用亂數（或更常見的偽亂數）來解決很多計算問題的方法。

20世紀40年代，在科學家馮·紐曼、斯塔尼斯拉夫·烏拉姆和尼古拉斯·梅特羅波利斯於洛斯阿拉莫斯國家實驗室為核武器計劃工作時，發明了蒙地卡羅方法。因為烏拉姆的叔叔經常在摩納哥的蒙地卡羅賭場輸錢得名，而蒙地卡羅方法正是以機率為基礎的方法。

與它對應的是確定性演算法。

蒙地卡羅方法在金融工程學、總體經濟學、生物醫學、計算物理學（如粒子輸運計算、量子熱力學計算、空氣動力學計算）、機器學習等領域應用廣泛。

## 亂數 Randmon

想要取得亂數，必須要有一個亂數產生器，而大多數亂數產生器都是偽亂數。

偽亂數是透過改變全域變數來產生亂數，產生的亂數是固定的，也會有分布不均的疑慮，所以常常需要加入時間來產生亂數

[random2.js](https://github.com/nohano1l/sa110a/blob/master/hw/midproject/random/random2.js)
```
$ deno run random2Test.js
0.45231413352303207
0.7940094328951091
0.377391537418589 
0.8408720137085766
0.19487653020769358
0.8352998823393136
0.8078417882788926
0.6857897664885968
0.2777199756819755
0.04474068386480212

$ deno run random2Test.js 
0.45231413352303207
0.7940094328951091
0.377391537418589
0.8408720137085766
0.19487653020769358
0.8352998823393136
0.8078417882788926
0.6857897664885968
0.2777199756819755
0.04474068386480212
```

[random.js](https://github.com/nohano1l/sa110a/blob/master/hw/midproject/random/random.js)

```
$ deno run randomTest.js
0.7171174332615919
0.7293836148892296
0.784159832255682
0.12410088831893518
0.7603205843624892
0.09977590314520057
0.12062554826843552
0.457413513744541
0.5230907545228547
0.5640156976514845

$ deno run randomTest.js 
0.9524242251500254
0.878103924827883
0.48844044317183943
0.3730130240874132
0.023779242634191178
0.10907235863851383
0.26819062869253685
0.06540039666288067
0.3312234599434305
0.235381966267596
```

## 算Pi
利用亂數產生在圓內的機率當圓面積，求π的大概值

![沒有很喜歡這張圖，但還是放一下](https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Pi_30K.gif/330px-Pi_30K.gif)

[monteCarloPi.js](https://github.com/nohano1l/sa110a/blob/master/hw/midproject/monte/monteCarloPi.js)
```
$ node monteCarloPi.js 
MonteCarloPi(1000000)= 3.141028

$ node monteCarloPi.js 
MonteCarloPi(1000000)= 3.143348
```

## 馬可夫鏈(Markov chain)

又稱離散時間馬可夫鏈（discrete-time Markov chain，縮寫為DTMC），因俄國數學家安德烈·馬可夫得名，為狀態空間中經過從一個狀態到另一個狀態的轉換的隨機過程。該過程要求具備「無記憶」的性質：下一狀態的機率分布只能由當前狀態決定，在時間序列中它前面的事件均與之無關。這種特定類型的「無記憶性」稱作馬可夫性質。

![跟下面的程式碼沒關係，但還是放一下](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Markovkate_01.svg/330px-Markovkate_01.svg.png)

[prob.js](https://github.com/nohano1l/sa110a/blob/master/hw/midproject/markov/prob.js)

### 確定性機率

[markov.js](https://github.com/nohano1l/sa110a/blob/master/hw/midproject/markov/markov.js)

```
$ deno run markov.js 
P( [ "b", "a", "b", "b" ] )= 0.06
```

### 蒙地卡羅馬可夫鏈

[mcmc.js](https://github.com/nohano1l/sa110a/blob/master/hw/midproject/markov/mcmc.js)

```
$ deno run mcmc.js
P( [ "b", "a", "b", "b" ] )= 0.05864
$ deno run mcmc.js 
P( [ "b", "a", "b", "b" ] )= 0.05973
$ deno run mcmc.js 
P( [ "b", "a", "b", "b" ] )= 0.06055
```

## 參考資料

[維基百科](https://zh.wikipedia.org/wiki/%E8%92%99%E5%9C%B0%E5%8D%A1%E7%BE%85%E6%96%B9%E6%B3%95)

[programmermedia.org](https://programmermedia.org/root/%E9%99%B3%E9%8D%BE%E8%AA%A0/%E8%AA%B2%E7%A8%8B/%E8%BB%9F%E9%AB%94%E5%B7%A5%E7%A8%8B%E8%88%87%E6%BC%94%E7%AE%97%E6%B3%95/alg/_doc/03-monteCarlo.md)