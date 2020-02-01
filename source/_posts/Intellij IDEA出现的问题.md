---
title: 关于Intellij IDEA可运行但出现警告的解决方法
top: false
cover: false
toc: true
mathjax: false
comments: true
summary: 初学Java时出现的莫名其妙的警告问题及编译时出现“main mathod is not found in class”错误的解决方案
tags: '-Java -Intellij IDEA'
categories: Java
abbrlink: f99f
date: 2020-01-31 22:55:33
password:
---
#### 为什么选择Intellij IDEA

初学Java，eclipse太老，个人倾向于Intellij IDEA，且Intellij IDEA功能更加多样化，还可用于Android的开发，所以使用

#### 出现的问题

配置Java环境网上教程很多，本文不做赘述   
简要论述下个人运行时出现的问题   
+ 编译运行时可以正确输出，但是在目录上出现红色波浪线
+ 编译的那个“小锤”旁边“main”出现小红叉，如图：
![](https://note.youdao.com/yws/api/personal/file/WEB48e9a8ebd374ee5ea08b1e35a43b8aad?method=download&shareKey=6c8cc2337794a7ee982cd99bd2a9ad00)
**解决办法：**
file --> Project structure --> 左侧点击SDKs --> 将JDK home path的路径改成配置Java环境时使用的jdk路径即可
下面的path会自动配置，apply即可。 


