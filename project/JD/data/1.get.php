<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$news = array(
	array('img'=>'http://m.360buyimg.com/mobilecms/s276x276_jfs/t1012/317/1276928417/132318/ca80f7c3/558a7174N6c0fc5e0.jpg','title'=>'牛奶啊ThinkPad 原装笔记本电脑双肩背包（0A33911）适合15.服务范围','price'=>'1156.00'),
	array('img'=>'//m.360buyimg.com/mobilecms/s276x276_jfs/t1837/6/1160437553/166610/2e6dfd21/56497781N9deca1d2.jpg','title'=>'牛奶啊ThinkPad 原装笔记本电脑双肩背包（0A33911）适合15.服务范围','price'=>'2356.00'),
	array('img'=>'http://m.360buyimg.com/mobilecms/s276x276_jfs/t2347/202/831203560/128709/8e0d557e/562e041aNd9a24ceb.jpg','price'=>'896.00','title'=>'牛奶啊ThinkPad 原装笔记本电脑双肩背包（0A33911）适合15.服务范围'),
	array('img'=>'http://m.360buyimg.com/mobilecms/s276x276_jfs/t1012/317/1276928417/132318/ca80f7c3/558a7174N6c0fc5e0.jpg','title'=>'牛奶啊ThinkPad 原装笔记本电脑双肩背包（0A33911）适合15.服务范围','price'=>'1776.00')
);

echo json_encode($news);
