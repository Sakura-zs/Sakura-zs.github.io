---
abbrlink: f6d
title: C++函数
top: false
cover: false
toc: true
mathjax: false
comments: true
date: 2020-01-27 14:43:48
password:
summary: 在学习c++过程中总结的一些常用函数，并不定期更新
tags: C++函数
categories: C++
---

### **头文件\<ctype\>**
|单字节|宽字节|描述|
|-----|------|----|
|isalnum|iswalnum|是否为数字字母|
|isalpha|iswalpha|是否为字母|
|islower|iswlower|是否为小写字母|
|isupper|iswupper|是否为大写字母|
|isdigit|iswdigit|是否为数字|
|isxdigit|iswxdigit|是否为16进制数字|
|ispunct|iswpunct|是否为标点|
|tolower|towlower|转换为小写|
|toupper|towupper|转换为大写|

---

---


### **头文件\<stdio.h\>**
#### sprintf(s,"abcd")函数
> 可以将字符串"abcd"输出到字符串s里

---
---

### **头文件\<algorithm\>**
#### find函数
```c++
代码：
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int main()
{
    vector<int> nums={8,7,5,4,2,9,6,1,3,0};
    cout << find(nums.begin(),nums.end(),4)-nums.begin();
}
输出：3
```

#### reverse(a,a+4);函数
> 可以将a到a+4之间的数进行反转

```
代码：
    int a[10]={10,11,12,13,14,15};
    reverse(a,a+4);

输出：13,12,11,10,14,15
```

> 对于string字符串依然可使用

```
    string str = "abcdefghi";
    reverse(str.begin()+2, str.begin()+6);//对a[2]~a[5]逆转*左闭右开*
输出：abfedcghi
```

#### cmp函数

```c
1.对于int数组
bool cmp(int a, int b)
{
	return a > b;  //可以理解为当a>b时把a放在b前面 
}
int main(){
    int a[4]={3,1,4,2};
    sort(a,a+4,cmp);
    输出a数组；
}
输出：4,3,2,1

2.对于char数组
bool cmp(char a, char b)
{   return a > b;  //可以理解为当a>b时把a放在b前面 }
int main(){
    char a[4]={'a','b','c','d'};
    sort(a,a+4,cmp);
    输出数组a；}
输出：d,c,b,a

3.对于结构体数组
struct node｛
	int x, y;
}ssd[10];
bool cmp(node a, node b)
{	return a.x>b.x;  }
int main(){
    ssd[0].x =2;ssd[0].y=2;
	ssd[1].x =1;ssd[1].y=3;
	ssd[2].x =3;ssd[2].y=1;
	sort(ssd, ssd+3, cmp);
    输出结构体数组的x成员；
}
输出：3,2,1
```

---
---

|函数|作用|写法|
|---|---|---|
|lower_bound|寻找数组或容器中(first,last)范围内第一个值大于等于val的元素位置，如果是数组则返回该位置的指针，容器则返回该位置的迭代器|lower_bound(first,last,val)|
|upper_bound|与上述相同，寻找**大于**的数|upper_bound(first,last,val)|
|count|可计算出在(first，last)范围内val出现的次数；|count(first,last,val)|
|all_of|所有数据都满足第三个参数所表示的函数则返回true，否则返回false；|all_of(s,s+10,[](int i){return i>0;})|
|none_of|与上述函数相反|none_of(first,last,[](int i){return i>0;})|
|any_of|在(开始，结束)这个范围，判断是否有一个元素满足fn函数；|any_of(first,last,[](int i){return i>0;})|
|next_permutation|求出全排列的下一个排列|next_permutation(a,a+3);|
|fill|将数组前五位赋值位233|fill(a,a+5,233)|
|sort|将数组前五位排序|升序:sort(a,a+4,less<int>());   降序:sort(a,a+5,greater<int>())|
|equal|判断两范围是否相等|equal(a,a+10,s)|
|find|在范围内寻找val的位置|find(first,last,val)|
|find_if|返回第一个值满足给定条件的元素指针|find_if(s,s+5,[](int i){return i>0;})|
|find_if_not|返回第一个不满足给定条件的元素指针|与上同|

---
---


### **头文件\<cmath\>**
|函数|作用|用法|
|---|---|---|
|hypot|求三角形的斜边|hypot(double x,double y)|
