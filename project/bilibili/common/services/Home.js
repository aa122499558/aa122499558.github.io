var d = "http://slebee.me/api/bilibili";


m1.service('home',function($http){
    var self = this;
    this.data={
        hot:[
            {pic:'http://i0.hdslb.com/bfs/archive/792c855cda31f4692f6e4ca834f7116c956a9ef5.jpg_320x200.jpg', title:'Vocaloid心做', up:'IA', hits:112354},
            {pic:'http://i2.hdslb.com/bfs/archive/c6fda885826cc97256d0da15fb812e476c5a8173.jpg', title:'绝园的暴风雨', up:'だれ?', hits:12354},
            {pic:'http://i2.hdslb.com/160_100/u_f/7b28ca7dfe3558f6c004297db7d1f461.jpg', title:'【きじねこ】箱庭的梦', up:'きじねこ', hits:12354},
            {pic:'http://i2.hdslb.com/160_100/u_f/00ead07eec838e66621149e71013a84e.jpg', title:'【きじねこ】夜咄DECEIVE', up:'きじねこ', hits:12354},
            {pic:'http://i1.hdslb.com/bfs/archive/8310a78fb6d8e61214cc3e2d7a00e7c0316b70f0.jpg_320x200.jpg', title:'逆转裁判动画化决定', up:'だれ?', hits:12354},
            {pic:'http://i2.hdslb.com/320_200/video/f6/f663f6a8bcf7e72d21d93e57944515aa.jpg', title:'【lovelive】2期BD 第7巻特典CD 試聴【11分钟耐久】', up:'だれ??', hits:12354},
            {pic:'http://i2.hdslb.com/bfs/archive/2d513e3cd6871d367c4a2483775e6e688673b3a8.jpg_320x200.jpg', title:'を歌わせて頂きました。', up:'だれ??', hits:12354},
            {pic:'http://i2.hdslb.com/bfs/archive/bb008b5f54079c34f48cc76d27a775fd1f05a973.jpg_320x200.jpg', title:'同样的话', up:'だれ??', hits:12354}
        ],
        slider:[
            {pic:'http://i0.hdslb.com/group1/M00/B7/21/oYYBAFcYbjSAdisAAAIalH-hOy8113.png',title:'我的故事我做主'},
            {pic:'http://i0.hdslb.com/group1/M00/B7/26/oYYBAFcdkNCACRnGAAC5J0AW_zc083.jpg',title:'每个平凡的日常,都是生活的奇迹'}
        ],
        recommend:{
            title:"推广啊",
            data:[
                {pic:"http://i2.hdslb.com/bfs/archive/280340f24ee7c5273a048d8c25600efc46900ea6.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【致敬纯白】中华娘连唱【中文V家原曲毁灭者 致敬系】",dm:"501"},
                {pic:"http://i2.hdslb.com/bfs/archive/1671e23647c370bacd230878dbbb8528927b2e0a.jpg_320x200.jpg",up:"だれ?",play:"1537",title:"【预告】崎玉VS超人-街机模式 [第3集] 预告片II",dm:"554"},
                {pic:"http://i2.hdslb.com/bfs/archive/0f180b0727af3e86a103bfa6d7e33c82c64c021e.jpg_320x200.jpg",up:"だれ?",play:"2545",title:"辐射大讲堂 第三季 大结局 中文字幕r",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/archive/b25cf8de4c6e604d15efb5b6525f373221c20a30.jpg_320x200.jpg",up:"だれ?",play:"5542345",title:"【第三期】无节操的动漫羞耻片段，你敢点进来吗？",dm:"1277"},
                {pic:"http://i2.hdslb.com/bfs/archive/7d4ffc90f56a102a0f81ef05573eb83c8f2a5c34.jpg_320x200.jpg",up:"だれ?",play:"5542345",title:"火柴人 -  魔法 VS 机械",dm:"1277"}
            ]
        },
        live:{
            title:"正在直播",
            data:[
                {pic:"http://i2.hdslb.com/bfs/archive/280340f24ee7c5273a048d8c25600efc46900ea6.jpg_320x200.jpg",play:"だれ?",title:"【致敬纯白】中华娘连唱【中文V家原曲毁灭者 致敬系】",dm:"501",icon:'http://i1.hdslb.com/bfs/face/10f2a92a95e5b118910547c388e5c23a5e15b6f1.gif'},
                {pic:"http://i2.hdslb.com/bfs/archive/280340f24ee7c5273a048d8c25600efc46900ea6.jpg_320x200.jpg",play:"だれ?",title:"【致敬纯白】中华娘连唱【中文V家原曲毁灭者 致敬系】",dm:"501",icon:'http://i1.hdslb.com/bfs/face/10f2a92a95e5b118910547c388e5c23a5e15b6f1.gif'},
                {pic:"http://i2.hdslb.com/bfs/archive/280340f24ee7c5273a048d8c25600efc46900ea6.jpg_320x200.jpg",play:"だれ?",title:"【致敬纯白】中华娘连唱【中文V家原曲毁灭者 致敬系】",dm:"501",icon:'http://i1.hdslb.com/bfs/face/10f2a92a95e5b118910547c388e5c23a5e15b6f1.gif'},
                {pic:"http://i2.hdslb.com/bfs/archive/280340f24ee7c5273a048d8c25600efc46900ea6.jpg_320x200.jpg",play:"だれ?",title:"【致敬纯白】中华娘连唱【中文V家原曲毁灭者 致敬系】",dm:"501",icon:'http://i1.hdslb.com/bfs/face/10f2a92a95e5b118910547c388e5c23a5e15b6f1.gif'},
                {pic:"http://i2.hdslb.com/bfs/archive/280340f24ee7c5273a048d8c25600efc46900ea6.jpg_320x200.jpg",play:"だれ?",title:"【致敬纯白】中华娘连唱【中文V家原曲毁灭者 致敬系】",dm:"501",icon:'http://i1.hdslb.com/bfs/face/10f2a92a95e5b118910547c388e5c23a5e15b6f1.gif'},
                {pic:"http://i2.hdslb.com/bfs/archive/280340f24ee7c5273a048d8c25600efc46900ea6.jpg_320x200.jpg",play:"だれ?",title:"【致敬纯白】中华娘连唱【中文V家原曲毁灭者 致敬系】",dm:"501",icon:'http://i1.hdslb.com/bfs/face/10f2a92a95e5b118910547c388e5c23a5e15b6f1.gif'},
                {pic:"http://i2.hdslb.com/bfs/archive/280340f24ee7c5273a048d8c25600efc46900ea6.jpg_320x200.jpg",play:"だれ?",title:"【致敬纯白】中华娘连唱【中文V家原曲毁灭者 致敬系】",dm:"501",icon:'http://i1.hdslb.com/bfs/face/10f2a92a95e5b118910547c388e5c23a5e15b6f1.gif'},
                {pic:"http://i2.hdslb.com/bfs/archive/280340f24ee7c5273a048d8c25600efc46900ea6.jpg_320x200.jpg",play:"だれ?",title:"【致敬纯白】中华娘连唱【中文V家原曲毁灭者 致敬系】",dm:"501",icon:'http://i1.hdslb.com/bfs/face/10f2a92a95e5b118910547c388e5c23a5e15b6f1.gif'},
                {pic:"http://i2.hdslb.com/bfs/archive/280340f24ee7c5273a048d8c25600efc46900ea6.jpg_320x200.jpg",play:"だれ?",title:"【致敬纯白】中华娘连唱【中文V家原曲毁灭者 致敬系】",dm:"501",icon:'http://i1.hdslb.com/bfs/face/10f2a92a95e5b118910547c388e5c23a5e15b6f1.gif'},
                {pic:"http://i2.hdslb.com/bfs/archive/280340f24ee7c5273a048d8c25600efc46900ea6.jpg_320x200.jpg",play:"だれ?",title:"【致敬纯白】中华娘连唱【中文V家原曲毁灭者 致敬系】",dm:"501",icon:'http://i1.hdslb.com/bfs/face/10f2a92a95e5b118910547c388e5c23a5e15b6f1.gif'}
            ]
        },
        musicList:{
            title:"音乐",
            data:[
                {pic:"http://i2.hdslb.com/bfs/archive/75bb1fc5c5912234e3b80d17a1a191aab476d528.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"盘点B站最受欢迎的动画女声优",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/archive/2228bf71452939f252f11675d99f0ee8e4dafdf1.jpg_320x200.jpg",up:"だれ?",play:"1537",title:"【东方MMD】战斗?of?红魔馆Ⅱ 前篇【强烈推荐】",dm:"554"},
                {pic:"http://i1.hdslb.com/bfs/archive/5cce2e1a6788df12315ab6c9f1b01686a6e09571.jpg_320x200.jpg",up:"だれ?",play:"2545",title:"【藏雅/误解AMV】back to december",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/archive/659971f6f44d04dacbc36e13bf13fc8a26c56ae1.jpg_320x200.jpg",up:"だれ?",play:"5542345",title:"【刹那】初音未来的消失",dm:"1277"},
                {pic:"http://i0.hdslb.com/320_200/video/83/83d811d8617de009be6390da7befec30.jpg",up:"だれ?",play:"55254",title:"【剧场预告风】炽翼天使【进击的巨人】",dm:"20"},
                {pic:"http://i1.hdslb.com/bfs/archive/50166f2bae3de9cab35ebf55c06eca0816b0d703.jpg_320x200.jpg",up:"だれ?",play:"222",title:"【多素材AMV】再见了，我最最喜欢的你",dm:"284"},
                {pic:"http://i0.hdslb.com/320_200/video/81/8199f3677414f70c49738298f2700ea1.jpg",up:"だれ?",play:"45245",title:"【深爱】黑粉【MAD】（无战斗场景）",dm:"153"},
                {pic:"http://i0.hdslb.com/bfs/archive/69684dc0ebd1bb10ee20d4653f008b8030a4b3c6.jpg_320x200.jpg",up:"だれ?",play:"4254",title:"【BGM音萌系】变态王子与不笑猫",dm:"5133"},
                {pic:"http://i0.hdslb.com/320_200/video/e5/e597cef23c3c03b21905ac72bb8011ac.jpg",up:"だれ?",play:"452542",title:"【银魂】Can also meet again？",dm:"132"},
                {pic:"http://i0.hdslb.com/bfs/archive/514b0ce92f53c1c6d7d706c15cabed8a64a08424.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【ASMV/国漫/燃向】Tidsa/弱者[先行版]",dm:"221"},
                {pic:"http://i0.hdslb.com/bfs/archive/514b0ce92f53c1c6d7d706c15cabed8a64a08424.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【ASMV/国漫/燃向】Tidsa/弱者[先行版]",dm:"221"}
            ]
        },
        musicRanking:[
            {pic:"http://i0.hdslb.com/bfs/archive/405a1b1666bd3c61c028beee82866b6f38dab412.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"盘点B站最受欢迎的动画女声优",dm:"501"},
            {pic:"http://i2.hdslb.com/bfs/archive/60c3ef2352600da09738f9eb86f29700ef41d5c2.jpg_320x200.jpg",up:"だれ?",play:"1537",title:"【东方MMD】战斗?of?红魔馆Ⅱ 前篇【强烈推荐】",dm:"554"},
            {pic:"http://i0.hdslb.com/bfs/archive/9f40622654ff93f8ff07c5dbe7e805edea42c5a0.jpg_320x200.jpg",up:"だれ?",play:"2545",title:"【藏雅/误解AMV】back to december",dm:"501"},
            {pic:"http://i1.hdslb.com/bfs/archive/63c8a21835a6da81e25eac5622210c4d330ef25e.jpg_320x200.jpg",up:"だれ?",play:"5542345",title:"【魔卡少女樱】Sakura（狼樱）[你知道吗，我喜欢你][刚好，我也喜欢你]",dm:"1277"},
            {pic:"http://i0.hdslb.com/bfs/archive/adc2a16454bde8dbc06e06ff4764941cab3b7213.jpg_320x200.jpg",up:"だれ?",play:"55254",title:"【剧场预告风】炽翼天使【进击的巨人】",dm:"20"},
            {pic:"http://i0.hdslb.com/group1/M00/9A/21/oYYBAFbhHWyAUiHOAAH-Thrg05o546.jpg_320x200.jpg",up:"だれ?",play:"222",title:"【多素材AMV】再见了，我最最喜欢的你",dm:"284"},
            {pic:"http://i2.hdslb.com/bfs/archive/3a0dc71987d6df88647f7503a25c831aa4e71825.jpg_320x200.jpg",up:"だれ?",play:"45245",title:"【深爱】黑粉【MAD】（无战斗场景）",dm:"153"}
        ],
        animateSlider:[
            {pic:'http://i0.hdslb.com/bfs/bangumi/bb8876fa127f98f248c256b9641f2a96d7176237.jpg',title:'动画1'},
            {pic:'http://i0.hdslb.com/bfs/bangumi/f9898548e43926dcfc0217db4cdfff6dba4deace.jpg',title:'动画2'},
            {pic:'http://i0.hdslb.com/bfs/bangumi/05e8fe7fd9dc344e5f9ab5212235933fcd909e96.jpg',title:'动画3'}
        ],
        animateRecommend:[
            {pic:"http://i0.hdslb.com/bfs/bangumi/16310b7d56e20f1e15822cb99097175808a239b5.jpg",up:"だれ?",play:"4",title:"火星异种 REVENGE",dm:"501"},
            {pic:"http://i0.hdslb.com/bfs/bangumi/e8b014ac131db47b267d1ac3a04417267ec857a6.jpg",up:"だれ?",play:"5",title:"迷家",dm:"554"},
            {pic:"http://i0.hdslb.com/bfs/bangumi/84529c2b8a872209ada6768c3bddb0ef31d7ae85.jpg",up:"だれ?",play:"8",title:"魔笛MAGI 辛巴达的冒险",dm:"501"},
            {pic:"http://i0.hdslb.com/bfs/bangumi/f8d11b31e6756ba356c5ab39f549b1ceca611a37.jpg",up:"だれ?",play:"2",title:"影鳄 承",dm:"1277"}
        ],
        animateList:{
            title:"动画",
            data:[
                {pic:"http://i0.hdslb.com/bfs/archive/405a1b1666bd3c61c028beee82866b6f38dab412.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"盘点B站最受欢迎的动画女声优",dm:"501"},
                {pic:"http://i2.hdslb.com/bfs/archive/60c3ef2352600da09738f9eb86f29700ef41d5c2.jpg_320x200.jpg",up:"だれ?",play:"1537",title:"【东方MMD】战斗?of?红魔馆Ⅱ 前篇【强烈推荐】",dm:"554"},
                {pic:"http://i0.hdslb.com/bfs/archive/9f40622654ff93f8ff07c5dbe7e805edea42c5a0.jpg_320x200.jpg",up:"だれ?",play:"2545",title:"【藏雅/误解AMV】back to december",dm:"501"},
                {pic:"http://i1.hdslb.com/bfs/archive/63c8a21835a6da81e25eac5622210c4d330ef25e.jpg_320x200.jpg",up:"だれ?",play:"5542345",title:"【魔卡少女樱】Sakura（狼樱）[你知道吗，我喜欢你][刚好，我也喜欢你]",dm:"1277"},
                {pic:"http://i0.hdslb.com/bfs/archive/adc2a16454bde8dbc06e06ff4764941cab3b7213.jpg_320x200.jpg",up:"だれ?",play:"55254",title:"【剧场预告风】炽翼天使【进击的巨人】",dm:"20"},
                {pic:"http://i0.hdslb.com/group1/M00/9A/21/oYYBAFbhHWyAUiHOAAH-Thrg05o546.jpg_320x200.jpg",up:"だれ?",play:"222",title:"【多素材AMV】再见了，我最最喜欢的你",dm:"284"},
                {pic:"http://i2.hdslb.com/bfs/archive/3a0dc71987d6df88647f7503a25c831aa4e71825.jpg_320x200.jpg",up:"だれ?",play:"45245",title:"【深爱】黑粉【MAD】（无战斗场景）",dm:"153"},
                {pic:"http://i2.hdslb.com/bfs/archive/729a9dfdb8851e0d889c22854178889635ba4224.jpg_320x200.jpg",up:"だれ?",play:"4254",title:"【BGM音萌系】变态王子与不笑猫",dm:"5133"},
                {pic:"http://i0.hdslb.com/320_200/video/cf/cfe6d0a38e585bd33ba4c575b124b1d7.jpg",up:"だれ?",play:"452542",title:"【银魂】Can also meet again？",dm:"132"},
                {pic:"http://i2.hdslb.com/bfs/archive/fb5ae6a56166d3ba296a58a57eb0f0a36d45ea3d.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【ASMV/国漫/燃向】Tidsa/弱者[先行版]",dm:"221"}
            ]
        },
        animateRanking:[
            {pic:"http://i2.hdslb.com/bfs/archive/75bb1fc5c5912234e3b80d17a1a191aab476d528.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"盘点B站最受欢迎的动画女声优",dm:"501"},
            {pic:"http://i0.hdslb.com/bfs/archive/2228bf71452939f252f11675d99f0ee8e4dafdf1.jpg_320x200.jpg",up:"だれ?",play:"1537",title:"【东方MMD】战斗?of?红魔馆Ⅱ 前篇【强烈推荐】",dm:"554"},
            {pic:"http://i1.hdslb.com/bfs/archive/5cce2e1a6788df12315ab6c9f1b01686a6e09571.jpg_320x200.jpg",up:"だれ?",play:"2545",title:"【藏雅/误解AMV】back to december",dm:"501"},
            {pic:"http://i0.hdslb.com/bfs/archive/659971f6f44d04dacbc36e13bf13fc8a26c56ae1.jpg_320x200.jpg",up:"だれ?",play:"5542345",title:"【刹那】初音未来的消失",dm:"1277"},
            {pic:"http://i0.hdslb.com/320_200/video/83/83d811d8617de009be6390da7befec30.jpg",up:"だれ?",play:"55254",title:"【剧场预告风】炽翼天使【进击的巨人】",dm:"20"},
            {pic:"http://i1.hdslb.com/bfs/archive/50166f2bae3de9cab35ebf55c06eca0816b0d703.jpg_320x200.jpg",up:"だれ?",play:"222",title:"【多素材AMV】再见了，我最最喜欢的你",dm:"284"},
            {pic:"http://i0.hdslb.com/320_200/video/81/8199f3677414f70c49738298f2700ea1.jpg",up:"だれ?",play:"45245",title:"【深爱】黑粉【MAD】（无战斗场景）",dm:"153"}
        ],
        liveRanking:[
            {pic:"http://i0.hdslb.com/bfs/face/d26890e2f93ddfab10f2e21f93222ecab5da8e8a.gif",up:"だれ?",play:"245",title:"哔哩哔哩音乐台",con:"【官方】哔哩哔哩音乐台"},
            {pic:"http://i0.hdslb.com/bfs/face/d26890e2f93ddfab10f2e21f93222ecab5da8e8a.gif",up:"だれ?",play:"1537",title:"哔哩哔哩音乐台二",con:"【官方】哔哩哔哩音乐台"},
            {pic:"http://i0.hdslb.com/bfs/face/d26890e2f93ddfab10f2e21f93222ecab5da8e8a.gif",up:"だれ?",play:"2545",title:"哔哩哔哩音乐台三",con:"【官方】哔哩哔哩音乐台"},
            {pic:"http://i0.hdslb.com/bfs/face/d26890e2f93ddfab10f2e21f93222ecab5da8e8a.gif",up:"だれ?",play:"5545",title:"哔哩哔哩音乐台四",con:"【官方】哔哩哔哩音乐台"},
            {pic:"http://i0.hdslb.com/bfs/face/d26890e2f93ddfab10f2e21f93222ecab5da8e8a.gif",up:"だれ?",play:"54",title:"哔哩哔哩音乐台五",con:"【官方】哔哩哔哩音乐台"},
            {pic:"http://i0.hdslb.com/bfs/face/d26890e2f93ddfab10f2e21f93222ecab5da8e8a.gif",up:"だれ?",play:"222",title:"哔哩哔哩音乐台六",con:"【官方】哔哩哔哩音乐台"}
        ]
    };
    this.ajaxData = function (cal) {
        $http({
            url:d + "?name=home",
            method:'GET'
        }).success(function(data,header,config,status){
            self.data = data.data;

            of = true;

            cal();
        }).error(function(data,header,config,status){

        });

    }
});

m1.service('animate',function($http){
    var self = this;
    this.data = {
        home:{
            slider:[
                {pic:'http://i0.hdslb.com/group1/M00/B7/27/oYYBAFce5_2AJbXcAAEcVX31XCM006.jpg'},
                {pic:'http://i0.hdslb.com/group1/M00/B7/24/oYYBAFcZ8zCATEqoAAEK00YYq5E382.jpg'},
                {pic:'http://i0.hdslb.com/group1/M00/B7/1C/oYYBAFcVpXOAcMc8AADx6xfKCac911.jpg'}
            ],
            hot:[
                {pic:'http://i2.hdslb.com/bfs/archive/a3f169a09839f0801563a4a0c4747ec097185db7.jpg_320x200.jpg', title:'【全职高手】/【语翼配音组】全职高手之全员闹微博配音剧', up:'だれ?', hits:112354},
                {pic:'http://i1.hdslb.com/bfs/archive/f462e7b7cff822edf1a4a9b13b7d0fe036303ea0.jpg_320x200.jpg', title:'【综漫/甜】CANT TAKE MY EYES OFF YOU', up:'だれ?', hits:12354},
                {pic:'http://i1.hdslb.com/bfs/archive/1444063d1021163f644a420bb75eefb64085784b.jpg_320x200.jpg', title:'【日语配音】幻想万华镜  巨大妖怪传说之章', up:'きじねこ', hits:12354},
                {pic:'http://i1.hdslb.com/bfs/archive/f0bddd76ed8811e855451629ed08aad4303b8bfb.jpg_320x200.jpg', title:'萝莉控福音【三妈MMD】麻烦鬼【三妈式初音眼镜娘】', up:'きじねこ', hits:12354},
                {pic:'http://i2.hdslb.com/bfs/archive/35e9707971ec47efbc5a2259b67763ee983a5c7d.jpg_320x200.jpg', title:'【春物/MAD】我的青春恋爱物语——谎 言！！！', up:'だれ?', hits:12354},
                {pic:'http://i1.hdslb.com/320_200/video/74/74ff1bf25d237facee0c88cc6731ebc0.jpg', title:'【逗比战争】你还太年轻', up:'だれ??', hits:12354},
                {pic:'http://i2.hdslb.com/bfs/archive/2d513e3cd6871d367c4a2483775e6e688673b3a8.jpg_320x200.jpg', title:'を歌わせて頂きました。', up:'だれ??', hits:12354},
                {pic:'http://i2.hdslb.com/bfs/archive/bb008b5f54079c34f48cc76d27a775fd1f05a973.jpg_320x200.jpg', title:'同样的话', up:'だれ??', hits:12354}
            ],
            MAD:{
                title:"MAD",
                data:[
                    {pic:"http://i1.hdslb.com/320_200/u_f/39cdfb449dac96aaf758caca57771b09.png",up:"だれ?",play:"21045",title:"三笠日记~The Diary of Mikasa",dm:"501"},
                    {pic:"http://i1.hdslb.com/320_200/u_user/47c9f6648a4530d30f2fec8ff63a41c1.jpg",up:"だれ?",play:"1537",title:"【综漫MAD】THE HELL SONG 【燃】",dm:"554"},
                    {pic:"http://i2.hdslb.com/bfs/archive/35e9707971ec47efbc5a2259b67763ee983a5c7d.jpg_320x200.jpg",up:"だれ?",play:"2545",title:"【春物/MAD】我的青春恋爱物语——谎 言！！！",dm:"501"},
                    {pic:"http://i1.hdslb.com/bfs/archive/f462e7b7cff822edf1a4a9b13b7d0fe036303ea0.jpg_320x200.jpg",up:"だれ?",play:"5542345",title:"【综漫/甜】CAN'T TAKE MY EYES OFF YOU",dm:"1277"},
                    {pic:"http://i1.hdslb.com/320_200/video/74/74ff1bf25d237facee0c88cc6731ebc0.jpg",up:"だれ?",play:"55254",title:"【血族BLOODLINE】露露缇雅降临",dm:"20"},
                    {pic:"http://i1.hdslb.com/bfs/archive/87b594ad9ae4ce41788a69746097ae21c01aea47.jpg_320x200.jpg",up:"だれ?",play:"222",title:"【MAD AMV】我也来放污毒根本停不下来【超时空要塞 禁绝边境线 giligili eye 最污版】",dm:"284"},
                    {pic:"http://i0.hdslb.com/bfs/archive/28dc99d0e195939d9ba2d8c470da6101b70d0927.jpg_320x200.jpg",up:"だれ?",play:"45245",title:"[SNS] • 脱衣彩排",dm:"153"},
                    {pic:"http://i1.hdslb.com/bfs/archive/b2a81e33054872e93b639721da34e7c6edd7b5b1.jpg_320x200.jpg",up:"だれ?",play:"4254",title:"【乐高】【超蝙】Sugar",dm:"5133"},
                    {pic:"http://i2.hdslb.com/bfs/archive/82908856e666b439723e36262b264e20db3c9373.jpg_320x200.jpg",up:"だれ?",play:"452542",title:"【多素材/高燃】What Are You Waiting For?",dm:"132"},
                    {pic:"http://i0.hdslb.com/bfs/archive/abb4090fe7d54b329c0c51cbb4e24a7e7abc95d2.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【多素材/催泪向】有思念你的人在的地方,就是你的归处。",dm:"221"},
                    {pic:"http://i1.hdslb.com/320_200/video/69/698334b85c098b0478674dca8da86f98.jpg",up:"だれ?",play:"2452",title:"今日你所唾弃的国漫，是明日你所高不可攀的",dm:"221"},
                    {pic:"http://i0.hdslb.com/320_200/u_user/d55634023c85efd3d4bb6069860b600c.jpg",up:"だれ?",play:"2452",title:"【AMV】【狼与香辛料】The Fox",dm:"221"},
                    {pic:"http://i0.hdslb.com/bfs/archive/118a526abf849e2e100e7f29da28492557cf649b.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【第一视角】Re：从零开始的异世界生活8-----不要优雅，我要污",dm:"221"},
                    {pic:"http://i1.hdslb.com/320_200/u_user/890e8a1f731a464af2daa94305285aa3.jpg",up:"だれ?",play:"2452",title:"【日本票选“最令人感动的动漫”Top10（误）】",dm:"221"},
                    {pic:"http://i0.hdslb.com/bfs/archive/514b0ce92f53c1c6d7d706c15cabed8a64a08424.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【ASMV/国漫/燃向】Tidsa/弱者[先行版]",dm:"221"},
                    {pic:"http://i0.hdslb.com/bfs/archive/514b0ce92f53c1c6d7d706c15cabed8a64a08424.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【ASMV/国漫/燃向】Tidsa/弱者[先行版]",dm:"221"},
                    {pic:"http://i0.hdslb.com/bfs/archive/514b0ce92f53c1c6d7d706c15cabed8a64a08424.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【ASMV/国漫/燃向】Tidsa/弱者[先行版]",dm:"221"},
                    {pic:"http://i0.hdslb.com/bfs/archive/514b0ce92f53c1c6d7d706c15cabed8a64a08424.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【ASMV/国漫/燃向】Tidsa/弱者[先行版]",dm:"221"},
                    {pic:"http://i0.hdslb.com/bfs/archive/514b0ce92f53c1c6d7d706c15cabed8a64a08424.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【ASMV/国漫/燃向】Tidsa/弱者[先行版]",dm:"221"},
                    {pic:"http://i0.hdslb.com/bfs/archive/514b0ce92f53c1c6d7d706c15cabed8a64a08424.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【ASMV/国漫/燃向】Tidsa/弱者[先行版]",dm:"221"}
                ]
            },
            madRanking:[
                {pic:"http://i1.hdslb.com/bfs/archive/f462e7b7cff822edf1a4a9b13b7d0fe036303ea0.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【综漫/甜】CAN'T TAKE MY EYES OFF YOU",dm:"501"},
                {pic:"http://i1.hdslb.com/bfs/archive/b9425201c21a2c3bbc21b3508ffe2b2266a1bce1.jpg_320x200.jpg",up:"だれ?",play:"1537",title:"我想触碰你的所有【从零开始的异世界】",dm:"554"},
                {pic:"http://i2.hdslb.com/bfs/archive/f38738b3256288e6a5a4e820444784c2cb1b166a.jpg_320x200.jpg",up:"だれ?",play:"2545",title:"【E.M.T】献给最爱的爱密莉亚，一次次的轮回，只为守护你的微笑，守护你的一切",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/archive/659971f6f44d04dacbc36e13bf13fc8a26c56ae1.jpg_320x200.jpg",up:"だれ?",play:"5542345",title:"【刹那】初音未来的消失",dm:"1277"},
                {pic:"http://i0.hdslb.com/320_200/video/83/83d811d8617de009be6390da7befec30.jpg",up:"だれ?",play:"55254",title:"【剧场预告风】炽翼天使【进击的巨人】",dm:"20"},
                {pic:"http://i1.hdslb.com/bfs/archive/50166f2bae3de9cab35ebf55c06eca0816b0d703.jpg_320x200.jpg",up:"だれ?",play:"222",title:"【多素材AMV】再见了，我最最喜欢的你",dm:"284"},
                {pic:"http://i0.hdslb.com/320_200/video/81/8199f3677414f70c49738298f2700ea1.jpg",up:"だれ?",play:"45245",title:"【深爱】黑粉【MAD】（无战斗场景）",dm:"153"},
                {pic:"http://i0.hdslb.com/bfs/archive/69684dc0ebd1bb10ee20d4653f008b8030a4b3c6.jpg_320x200.jpg",up:"だれ?",play:"4254",title:"【BGM音萌系】变态王子与不笑猫",dm:"5133"},
                {pic:"http://i0.hdslb.com/320_200/video/e5/e597cef23c3c03b21905ac72bb8011ac.jpg",up:"だれ?",play:"452542",title:"【银魂】Can also meet again？",dm:"132"},
                {pic:"http://i0.hdslb.com/320_200/video/83/83d811d8617de009be6390da7befec30.jpg",up:"だれ?",play:"55254",title:"【剧场预告风】炽翼天使【进击的巨人】",dm:"20"}
            ],
            MMD:{
                title:"MMD",
                data:[
                    {pic:"http://i1.hdslb.com/bfs/archive/96b6d5e2822a6cb383c9a01ebc5fa8cd3c5571a3.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【剑网三MMD】明唐百合的被害妄想携带女子",dm:"501"},
                    {pic:"http://i1.hdslb.com/bfs/archive/426b1e46520ad9d3600ce1314ad977aa84d58792.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"如果腿不够白不是MIKU！胸一定要平！",dm:"501"},
                    {pic:"http://i1.hdslb.com/bfs/archive/891277d2f385adf8b28446faac9cc35d186fb68d.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【東方MMD】物欲默示录",dm:"501"},
                    {pic:"http://i1.hdslb.com/bfs/archive/feca6bb3638100d10a51636c612034c277d93665.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【东方MMD】女子力爆表的妹红【红衣烈舞】",dm:"501"},
                    {pic:"http://i2.hdslb.com/320_200/video/4f/4f9d87b411c49417952d388651db0b78.jpg",up:"だれ?",play:"21045",title:"【APH/MMD】为什么会这样…【预告风寸剧】",dm:"501"},
                    {pic:"http://i2.hdslb.com/bfs/archive/3b75736aa13a4f0b8d8207daabdfa4af8c346a2f.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"孔雀miku的pink cat",dm:"501"},
                    {pic:"http://i2.hdslb.com/bfs/archive/60c0270c28020fcc2a61b4acb6ff7dd083878196.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【MMD】谁家丢的狂三 ？ 老夫捡回家后身体一天不如一天",dm:"501"},
                    {pic:"http://i1.hdslb.com/320_200/video/47/4768c5ed39afd820763cf631109ea12b.jpg",up:"だれ?",play:"21045",title:"【战国BASARA MMD】左近teamo",dm:"501"},
                    {pic:"http://i2.hdslb.com/320_200/video/d4/d467ac3b67748b605a4ad4aa31495ec2.jpg",up:"だれ?",play:"21045",title:"【战国BASARA MMD】左近x6的Magnet",dm:"501"},
                    {pic:"http://i0.hdslb.com/bfs/archive/96df5e9faede7c9cc6186c2036c26734f8271ea0.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【剑三/MMD】三只琴爹的everybody（高能慎入）",dm:"501"},
                    {pic:"http://i2.hdslb.com/320_200/u_user/245ff7571f84bac46b3bd41ab42372a2.jpg",up:"だれ?",play:"21045",title:"【剑网三MMD】庄花的惊鸿舞",dm:"501"},
                    {pic:"http://i2.hdslb.com/320_200/video/8f/8f6723d5209d8e26b97628906b994b01.jpg",up:"だれ?",play:"21045",title:"【MMD刀剑乱舞】监护人们 的 Happy Halloween！",dm:"501"},
                    {pic:"http://i2.hdslb.com/bfs/archive/b85b31aec10510ac8dd6c288ef487b0bea8c6621.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【MMD偶像梦幻祭】方糖歌曲与苦味舞步【羽风薰】",dm:"501"},
                    {pic:"http://i2.hdslb.com/bfs/archive/8279af6fd83356f99c9b5d845afb8f984399a0a9.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【APH/MMD】WAVE【恶友味音痴】",dm:"501"},
                    {pic:"http://i0.hdslb.com/320_200/video/da/da66876a24482c1c670d455ca0d3a408.jpg",up:"だれ?",play:"21045",title:"【东方偶像乡 MMD】斯卡雷特三姐妹（大雾），红魔馆里提前到来的万圣节",dm:"501"}
                ]
            },
            mmdRanking:[
                {pic:"http://i2.hdslb.com/bfs/archive/a183f402a7be1473d3db14e1f313c6b550c830cd.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"御姐声线系列【公式版HAKU】幽灵法则【大神犬PV付】",dm:"501"},
                {pic:"http://i1.hdslb.com/bfs/archive/feca6bb3638100d10a51636c612034c277d93665.jpg_320x200.jpg",up:"だれ?",play:"1537",title:"【东方MMD】女子力爆表的妹红【红衣烈舞】",dm:"554"},
                {pic:"http://i0.hdslb.com/bfs/archive/44985aefa59f07d311892f22b3e07169008808d2.jpg_320x200.jpg",up:"だれ?",play:"2545",title:"【东方MMD】蕾米莉亚，丧失记忆了【全程高能】",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/archive/659971f6f44d04dacbc36e13bf13fc8a26c56ae1.jpg_320x200.jpg",up:"だれ?",play:"5542345",title:"【刹那】初音未来的消失",dm:"1277"},
                {pic:"http://i0.hdslb.com/320_200/video/83/83d811d8617de009be6390da7befec30.jpg",up:"だれ?",play:"55254",title:"【剧场预告风】炽翼天使【进击的巨人】",dm:"20"},
                {pic:"http://i1.hdslb.com/bfs/archive/50166f2bae3de9cab35ebf55c06eca0816b0d703.jpg_320x200.jpg",up:"だれ?",play:"222",title:"【多素材AMV】再见了，我最最喜欢的你",dm:"284"},
                {pic:"http://i0.hdslb.com/320_200/video/81/8199f3677414f70c49738298f2700ea1.jpg",up:"だれ?",play:"45245",title:"【深爱】黑粉【MAD】（无战斗场景）",dm:"153"},
                {pic:"http://i0.hdslb.com/bfs/archive/69684dc0ebd1bb10ee20d4653f008b8030a4b3c6.jpg_320x200.jpg",up:"だれ?",play:"4254",title:"【BGM音萌系】变态王子与不笑猫",dm:"5133"},
                {pic:"http://i0.hdslb.com/320_200/video/e5/e597cef23c3c03b21905ac72bb8011ac.jpg",up:"だれ?",play:"452542",title:"【银魂】Can also meet again？",dm:"132"},
                {pic:"http://i0.hdslb.com/320_200/video/83/83d811d8617de009be6390da7befec30.jpg",up:"だれ?",play:"55254",title:"【剧场预告风】炽翼天使【进击的巨人】",dm:"20"}
            ],
            move:{
                title:"短片",
                data:[
                    {pic:"http://i1.hdslb.com/bfs/archive/1e45678f399e359cc10e9209a8b0ba27bdb0bfb9.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【真人鬼畜配音】疯狂动物城（一人役）",dm:"501"},
                    {pic:"http://i0.hdslb.com/bfs/archive/f6ab8da3679a694867c4e1533b828ca79e999f87.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"上海话的甲铁城你hold住吗 EP02",dm:"501"},
                    {pic:"http://i0.hdslb.com/bfs/archive/3aa83a5ca6d19414ea88c661d98c18cd030036b1.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【黑榜社】【火柴人RHG】章瑜(Glacier) vs. 般若(Hannya) Round 1",dm:"501"},
                    {pic:"http://i1.hdslb.com/320_200/video/cf/cf18e0f55160fc12f3da86be09d12991.jpg",up:"だれ?",play:"21045",title:"我家大师兄脑子有坑 动态漫画第一话【星之声配音组】",dm:"501"},
                    {pic:"http://i0.hdslb.com/320_200/u_user/bf77246be1ddbd6f072aefc8e5d53b64.jpg",up:"だれ?",play:"21045",title:"(时光钟摆) 中日字幕--音悦Tai",dm:"501"},
                    {pic:"http://i1.hdslb.com/bfs/archive/1444063d1021163f644a420bb75eefb64085784b.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【日语配音】幻想万华镜  巨大妖怪传说之章",dm:"501"},
                    {pic:"http://i0.hdslb.com/group1/M00/8B/55/oYYBAFbdgjGAX5bqAABdcBZ6bnk309.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【有声漫画】日语配音非人哉第二弹——白龙篇",dm:"501"},
                    {pic:"http://i2.hdslb.com/320_200/video/d9/d971173de5c3cdb196b016a2b013b65a.jpg",up:"だれ?",play:"21045",title:"【动画短片】俄语版前进达瓦里西，Вперед, товарищи!！！",dm:"501"},
                    {pic:"http://i1.hdslb.com/320_200/video/3e/3ee67c548ccc70e0c7a1dd24a0d59c41.jpg",up:"だれ?",play:"21045",title:"【APH米英】【黑桃手書】DEVOTION",dm:"501"},
                    {pic:"http://i2.hdslb.com/320_200/video/c1/c1af8cc2bb0b727ace7cb26bc9f263fc.jpg",up:"だれ?",play:"21045",title:"高达定格动画：光二分之一 Gundam stop motion：The Light One-half",dm:"501"},
                    {pic:"http://i2.hdslb.com/320_200/video/0d/0d85b7aa01888dc66be9c12bbcf47f00.jpg",up:"だれ?",play:"21045",title:"【手书】双猴-《斗战》",dm:"501"},
                    {pic:"http://i1.hdslb.com/320_200/u_user/c7581c3eee0adabe48d0b0084bd4131c.jpg",up:"だれ?",play:"21045",title:"【HTF拟人化】○○为讯息接收器之类是也【军人中心】",dm:"501"},
                    {pic:"http://i1.hdslb.com/320_200/video/cf/cf18e0f55160fc12f3da86be09d12991.jpg",up:"だれ?",play:"21045",title:"我家大师兄脑子有坑 动态漫画第一话【星之声配音组】",dm:"501"},
                    {pic:"http://i0.hdslb.com/320_200/video/8c/8cbcdadc55b76edcfdab6943eb74e51b.jpg",up:"だれ?",play:"21045",title:"【刀剑乱舞】不善言辞的山姥切国広超可爱",dm:"501"},
                    {pic:"http://i1.hdslb.com/bfs/archive/f2d5477c9d1c61ca1134cae9e377fd5adc5f3726.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"CLANNAD配音练习！（正常向）",dm:"501"}
                ]
            },
            moveRanking:[
                {pic:"http://i0.hdslb.com/bfs/archive/8b53cee04733c880c3bac8261ff759b13e567bc6.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【唐山葬·中配15】之前的十四集都是一场污梦？【奇响天外】",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/archive/0972fd655b8976c21ae255937f90bec5170c5ebf.jpg_320x200.jpg",up:"だれ?",play:"1537",title:"萧炎忙碌收集药材，有人趁机诱骗薰儿【斗破苍穹第7集】",dm:"554"},
                {pic:"http://i1.hdslb.com/bfs/archive/def3cff2f303f2df893586daaf7cad0e6c029d1e.jpg_320x200.jpg",up:"だれ?",play:"2545",title:"【配音东方手书】某个误会 - 作者桐谷",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/archive/659971f6f44d04dacbc36e13bf13fc8a26c56ae1.jpg_320x200.jpg",up:"だれ?",play:"5542345",title:"【刹那】初音未来的消失",dm:"1277"},
                {pic:"http://i0.hdslb.com/320_200/video/83/83d811d8617de009be6390da7befec30.jpg",up:"だれ?",play:"55254",title:"【剧场预告风】炽翼天使【进击的巨人】",dm:"20"},
                {pic:"http://i1.hdslb.com/bfs/archive/50166f2bae3de9cab35ebf55c06eca0816b0d703.jpg_320x200.jpg",up:"だれ?",play:"222",title:"【多素材AMV】再见了，我最最喜欢的你",dm:"284"},
                {pic:"http://i0.hdslb.com/320_200/video/81/8199f3677414f70c49738298f2700ea1.jpg",up:"だれ?",play:"45245",title:"【深爱】黑粉【MAD】（无战斗场景）",dm:"153"},
                {pic:"http://i0.hdslb.com/bfs/archive/69684dc0ebd1bb10ee20d4653f008b8030a4b3c6.jpg_320x200.jpg",up:"だれ?",play:"4254",title:"【BGM音萌系】变态王子与不笑猫",dm:"5133"},
                {pic:"http://i0.hdslb.com/320_200/video/e5/e597cef23c3c03b21905ac72bb8011ac.jpg",up:"だれ?",play:"452542",title:"【银魂】Can also meet again？",dm:"132"},
                {pic:"http://i0.hdslb.com/320_200/video/83/83d811d8617de009be6390da7befec30.jpg",up:"だれ?",play:"55254",title:"【剧场预告风】炽翼天使【进击的巨人】",dm:"20"}
            ]
        },
        MAD:{
            label:["全部标签","静止系MAD","MEP","MSMP","MAD","AMV","多素材","综漫","燃香","fate","罪恶网管","秒速五厘米","特辑","冰果"],
            new:{
                title:"最新动态",
                data:[
                    {pic:"http://i1.hdslb.com/320_200/video/9b/9b64b06c7de8363cbeb6a6cad060c321.jpg",up:"だれ?",play:"21045",title:"【综漫 燃 新素材】有生之年必不辱最强之名",dm:"501"},
                    {pic:"http://i1.hdslb.com/bfs/archive/64472339d324833851d5877de9636206bfbcfa56.jpg_320x200.jpg",up:"だれ?",play:"1537",title:"【东方MMD】战斗?of?红魔馆Ⅱ 前篇【强烈推荐】",dm:"554"},
                    {pic:"http://i1.hdslb.com/bfs/archive/9182bd49614be256a5e89567182b5c70603c5c17.jpg_320x200.jpg",up:"だれ?",play:"2545",title:"【藏雅/误解AMV】back to december",dm:"501"},
                    {pic:"http://i0.hdslb.com/bfs/archive/35e9707971ec47efbc5a2259b67763ee983a5c7d.jpg_320x200.jpg",up:"だれ?",play:"5542345",title:"【杀铃】无论阻隔我们的是多么巨大的险阻，我都只想见证你的笑容与泪水",dm:"1277"},
                    {pic:"http://i0.hdslb.com/bfs/archive/626e8f40c2c521f711d48a1ebbd84bf91565c055.jpg_320x200.jpg",up:"だれ?",play:"55254",title:"【刀剑/鼬佐/黑岩】 看到最后你肯定会想刷一个弹幕",dm:"20"}
                ]
            },
            ranking:[
                {pic:"http://i1.hdslb.com/bfs/archive/37d0ce6b4cdd6e74b40465552e590abea2a44391.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【高能无违和】听说你们听腻了奇迹再现？",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/archive/3c234f38df7c2c6ed3ebc8a0f7b92741b5970cb1.jpg_320x200.jpg",up:"だれ?",play:"1537",title:"【Fate/stay night-震撼高燃-AMV】荆棘前路，命运之战",dm:"554"},
                {pic:"http://i1.hdslb.com/bfs/archive/43d6861f7e59bccef32f9366b465cdfb3ffad74f.jpg_320x200.jpg",up:"だれ?",play:"2545",title:"【MAD】 Re:从零开始的异世界生活 【反复抗争的故事】",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/archive/659971f6f44d04dacbc36e13bf13fc8a26c56ae1.jpg_320x200.jpg",up:"だれ?",play:"5542345",title:"【僕街/MAD】只有我看见了，你的故事 / Last Revival",dm:"1277"},
                {pic:"http://i0.hdslb.com/320_200/video/83/83d811d8617de009be6390da7befec30.jpg",up:"だれ?",play:"55254",title:"【剧场预告风】炽翼天使【进击的巨人】",dm:"20"},
                {pic:"http://i1.hdslb.com/bfs/archive/50166f2bae3de9cab35ebf55c06eca0816b0d703.jpg_320x200.jpg",up:"だれ?",play:"222",title:"【多素材AMV】再见了，我最最喜欢的你",dm:"284"},
                {pic:"http://i0.hdslb.com/320_200/video/81/8199f3677414f70c49738298f2700ea1.jpg",up:"だれ?",play:"45245",title:"【深爱】黑粉【MAD】（无战斗场景）",dm:"153"},
                {pic:"http://i2.hdslb.com/bfs/archive/75bb1fc5c5912234e3b80d17a1a191aab476d528.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"盘点B站最受欢迎的动画女声优",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/archive/2228bf71452939f252f11675d99f0ee8e4dafdf1.jpg_320x200.jpg",up:"だれ?",play:"1537",title:"【东方MMD】战斗?of?红魔馆Ⅱ 前篇【强烈推荐】",dm:"554"},
                {pic:"http://i1.hdslb.com/bfs/archive/5cce2e1a6788df12315ab6c9f1b01686a6e09571.jpg_320x200.jpg",up:"だれ?",play:"2545",title:"【藏雅/误解AMV】back to december",dm:"501"}
            ],
            mainList:{
                title:"最新动态",
                data:[
                    {pic:"http://i0.hdslb.com/bfs/archive/a54c3c24efd69bbf2fa6839e42f19e7c825896ec.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"盘点B站最受欢迎的动画女声优",dm:"501",con:"咲saki【天才麻將少女MAD】燦爛綻放"},
                    {pic:"http://i0.hdslb.com/bfs/archive/a323ab6cc7ce7e982798ab55d6fcb6972656caf7.jpg_320x200.jpg",up:"だれ?",play:"1537",title:"【东方MMD】战斗?of?红魔馆Ⅱ 前篇【强烈推荐】",dm:"554",con:"自制 你今天giligili eye 了吗 いけないボーダーライ 跟我一起唱giligili eye 无耻求关注啊啊啊啊啊"},
                    {pic:"http://i0.hdslb.com/bfs/archive/9a63b67e944940ad400bcb328c0976720bcd9e08.jpg_320x200.jpg",up:"だれ?",play:"2545",title:"【藏雅/误解AMV】back to december",dm:"501",con:"[MAD] 咲-Saki- 宮永 咲 VS 天江 衣"},
                    {pic:"http://i2.hdslb.com/bfs/archive/ddd1391c117cd44b235aa18e2fb4696213abe7fa.jpg_320x200.jpg",up:"だれ?",play:"5542345",title:"咲saki【MAD】",dm:"1277",con:"https://www.youtube.com/watch?v=h8fhRlS_sLg youtube的高观看视频，侵权私信自删"},
                    {pic:"http://i1.hdslb.com/bfs/archive/4dc4ff656d8cebe3f2a91be57b977e014b8b5283.jpg_320x200.jpg",up:"だれ?",play:"55254",title:"东京异世界→_→",dm:"20",con:"自制 bgm；unravel"},
                    {pic:"http://i1.hdslb.com/bfs/archive/4eaff0a88c1ae0431612e3f72eeaeff8c28e6567.jpg_320x200.jpg",up:"だれ?",play:"55254",title:"【MAD】咲　saki　「The　Pretender」",dm:"20",con:"https://www.youtube.com/watch?v=NUPDAI9V-zw youtube的高评分作品，侵权自删"},
                    {pic:"http://i1.hdslb.com/bfs/archive/d10f78e6215a89b8d338d729f7ad0a4e322be121.jpg_320x200.jpg",up:"だれ?",play:"55254",title:"境界的彼方 栗山未来",dm:"20",con:"自制 新人初投  大神勿喷啊啊啊啊啊啊"},
                    {pic:"http://i0.hdslb.com/bfs/archive/7be198b3632c56caa6ad9d406fb0b066dbc1d133.jpg_320x200.jpg",up:"だれ?",play:"55254",title:"【黑槍客】刀劍神域",dm:"20",con:"BGM：小缘 《无心》 使用素材：《四月是你的谎言》"},
                    {pic:"http://i2.hdslb.com/bfs/archive/737b0c1b7b05e5099e747b4ccf3052da551375e4.jpg_320x200.jpg",up:"だれ?",play:"55254",title:"【空之境界】Brave shine-Amier 生为斩、不朽辉光",dm:"20",con:"自制 动画：狐妖小红娘。。。 bgm：呦猫-梦回还"},
                    {pic:"http://i0.hdslb.com/bfs/archive/3f8bbc611467b21f93f6112334dcd1bef36cea1a.jpg_320x200.jpg",up:"だれ?",play:"55254",title:"惟愿你的笑容如星空永恒",dm:"20",con:"自制 第一次做AMV了0v0昆，BGM：花ハ踊レヤいろはにほ"},
                    {pic:"http://i0.hdslb.com/bfs/archive/51557bbe3aa69d60400ed876e107570a280bc923.jpg_320x200.jpg",up:"だれ?",play:"55254",title:"【K | 尊礼】永远的赤之王——周防尊",dm:"20",con:"新人第一次做MAD，基本是在高考前烧的。剧情到小说第七卷。"},
                    {pic:"http://i0.hdslb.com/bfs/archive/926d34d4fd5934c4fcd4eeb17951c427edeff40f.jpg_320x200.jpg",up:"だれ?",play:"55254",title:"【AMV/花开物语】奋斗的青春最美丽",dm:"20",con:"youtu.be/-5_sVeLRw58 AMV Heroic Strike 来自：VermillionAMV bg"},
                    {pic:"http://i0.hdslb.com/bfs/archive/1c08b70233823b1e1a4ee700ed5347b6b4a2b292.jpg_320x200.jpg",up:"だれ?",play:"55254",title:"【冰菓♥误解向MAD】醉生梦死桃花面，镜花水月非人间。",dm:"20",con:"自制 被手游勾起了兴趣又没得玩，下软件，免费的，很认真。。。"},
                    {pic:"http://i2.hdslb.com/bfs/archive/b6dd39a3f98c828b8af55994dbc06e8b805ef4df.jpg_320x200.jpg",up:"だれ?",play:"55254",title:"【未闻花名】超和平 Busters",dm:"20",con:"YouTube https://youtu.be/O6WtmlY5AXQ，Super Peace Busters - "},
                    {pic:"http://i0.hdslb.com/bfs/archive/f0e48702ca991f4525db1f9dbce5bc08e5da5f51.jpg_320x200.jpg",up:"だれ?",play:"55254",title:"[god knows]来看一对最好的朋友（百合）",dm:"20",con:"这次我敢发毒誓，这样的冰菓你也见过的话我就。。。。 爱咋地咋地"},
                    {pic:"http://i1.hdslb.com/bfs/archive/d00228c34eab5a42b64a920c86e732f00c5c1528.jpg_320x200.jpg",up:"だれ?",play:"55254",title:"【AMV】 一拳超人 - 英雄的葬歌",dm:"20",con:"自制 纪念花开物语 送给那些奋斗着的人们 第一部作品 新人无奈 没法很"},
                    {pic:"http://i1.hdslb.com/bfs/archive/fa635c8ee349925d3999c5ec46963f6ed1cb0190.jpg_320x200.jpg",up:"だれ?",play:"55254",title:"[剧透向]路人女主的养成方法",dm:"20",con:"自制 给周防尊. 源：K BGM：遠藤幹雄 - Suoh MiKoto 剪辑：桢子Kren"},
                    {pic:"http://i0.hdslb.com/bfs/archive/3a44864e94c62c03558993dfc42e5fb4e75593f6.jpg_320x200.jpg",up:"だれ?",play:"55254",title:"【萌新试水】夏之篇：盛放",dm:"20",con:"自制 【唯愿你的笑容如星空永恒】即将分离，我们都路就在当下，走好每天"},
                    {pic:"http://i0.hdslb.com/bfs/archive/85bc6113b2e540939bddeaa0f4f5685827a252be.jpg_320x200.jpg",up:"だれ?",play:"55254",title:"【综·国漫/MAD/燃·虐】国漫！国漫！国漫！",dm:"20",con:"自制 &amp;quot;只要是活着的东西，就算是神也要杀给你看。&am"},
                    {pic:"http://i2.hdslb.com/bfs/archive/dc013e2f37dd8146072d14f1cb0c2eb8d183b159.jpg_320x200.jpg",up:"だれ?",play:"55254",title:"【四月/无心】梦醒犹记四月谎",dm:"20",con:"自制 我的第三部影片 還請多多支持"}
                ]
            }
        },
        MMD:{
            label:["全部标签","舞蹈MMD","剧情MMD","原创模型","模型配布"],
            new:{
                title:"最新动态",
                data:[
                    {pic:"http://i1.hdslb.com/bfs/archive/16dea1d4aadb2c3f7e53c08037e2263573fdebcf.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【东方绅士系列+舔腿向】童♥声♥R♥摇的♥狐耳勇仪姐~~",dm:"501"},
                    {pic:"http://i2.hdslb.com/320_200/video/9b/9b0613f0f400ad8dc03e21d36a84d425.jpg",up:"だれ?",play:"1537",title:"【APH/MMD】太陽三人組的TOXIC",dm:"554"},
                    {pic:"http://i2.hdslb.com/bfs/archive/8b731352d943e2b8bf811a0f7e181e3098510354.jpg_320x200.jpg",up:"だれ?",play:"2545",title:"【Lamb】弱音姐姐在健身房的舞蹈！！还有小电视的模型配布ww",dm:"501"},
                    {pic:"http://i1.hdslb.com/320_200/video/1e/1e5850cd966b5071446f7e482655f59b.jpg",up:"だれ?",play:"5542345",title:"【APH/MMD】全是普爷的EYE",dm:"1277"},
                    {pic:"http://i0.hdslb.com/bfs/archive/ea542d7c0a1396aa10b585a4033a30e025d69c73.png_320x200.png",up:"だれ?",play:"55254",title:"【MMD x YanSim】Saki Miyu is Frightened",dm:"20"}
                ]
            },
            ranking:[
                {pic:"http://i0.hdslb.com/bfs/archive/2c609ba071fbefc8b972719e3507dcf4f034cd4f.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"不会发光的身材不是好身材 Telephone 弱音 Haku",dm:"501"},
                {pic:"http://i2.hdslb.com/bfs/archive/efc49681db726c852397845e8241f77c9392be7e.jpg_320x200.jpg",up:"だれ?",play:"1537",title:"【MMD】扑克小猫的说谎家【结尾含带有毒物质】",dm:"554"},
                {pic:"http://i0.hdslb.com/bfs/archive/60b58cbc1a1ac5bfa94a4731d814b134ce5c50f8.jpg_320x200.jpg",up:"だれ?",play:"2545",title:"【MMD】miku＆IA的Womanizer",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/archive/659971f6f44d04dacbc36e13bf13fc8a26c56ae1.jpg_320x200.jpg",up:"だれ?",play:"5542345",title:"【僕街/MAD】只有我看见了，你的故事 / Last Revival",dm:"1277"},
                {pic:"http://i0.hdslb.com/320_200/video/83/83d811d8617de009be6390da7befec30.jpg",up:"だれ?",play:"55254",title:"【剧场预告风】炽翼天使【进击的巨人】",dm:"20"},
                {pic:"http://i1.hdslb.com/bfs/archive/50166f2bae3de9cab35ebf55c06eca0816b0d703.jpg_320x200.jpg",up:"だれ?",play:"222",title:"【多素材AMV】再见了，我最最喜欢的你",dm:"284"},
                {pic:"http://i0.hdslb.com/320_200/video/81/8199f3677414f70c49738298f2700ea1.jpg",up:"だれ?",play:"45245",title:"【深爱】黑粉【MAD】（无战斗场景）",dm:"153"},
                {pic:"http://i2.hdslb.com/bfs/archive/75bb1fc5c5912234e3b80d17a1a191aab476d528.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"盘点B站最受欢迎的动画女声优",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/archive/2228bf71452939f252f11675d99f0ee8e4dafdf1.jpg_320x200.jpg",up:"だれ?",play:"1537",title:"【东方MMD】战斗?of?红魔馆Ⅱ 前篇【强烈推荐】",dm:"554"},
                {pic:"http://i1.hdslb.com/bfs/archive/5cce2e1a6788df12315ab6c9f1b01686a6e09571.jpg_320x200.jpg",up:"だれ?",play:"2545",title:"【藏雅/误解AMV】back to december",dm:"501"}
            ],
            mainList:{
                title:"最新动态",
                data:[
                    {pic:"http://i0.hdslb.com/bfs/archive/289e59a599b18792771347aed0e4b986c0462008.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【精神污染向】【MMD】ECHO【cover】",dm:"501",con:"https://youtu.be/ymqzkIFE048 转自油土鳖。作者的订阅还比较少"},
                    {pic:"http://i2.hdslb.com/bfs/archive/7a80699508541a9935c72dba27f226b0cf143b9c.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【进击的MMD】Masked bitcH【模型测试】",dm:"501",con:"sm29052386 【進撃のMMD】Masked bitcH【モデルテスト】，作"},
                    {pic:"http://i0.hdslb.com/bfs/archive/96b6d5e2822a6cb383c9a01ebc5fa8cd3c5571a3.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【剑网三MMD】明唐百合的被害妄想携带女子",dm:"501",con:"自制 【Model】 西山居 【绑骨】夙柒月 【Action】 moka 【Camera】 "},
                    {pic:"http://i2.hdslb.com/bfs/archive/eebcb3d8b657921ff4d66a421723228af713e4fb.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【MMD】- ECHO - 【Miku人偶】",dm:"501",con:"https://www.youtube.com/watch?v=VVA9_p8W7MI"},
                    {pic:"http://i1.hdslb.com/bfs/archive/0c66d3dc423c616db186cd6239b2a0900636d8e4.png_320x200.png",up:"だれ?",play:"21045",title:"【MMD】 Mozaik Role - 三只loli【IA,MIKU,RIN】",dm:"501",con:"https://www.youtube.com/watch?v=XXXJyXPKqYw "},
                    {pic:"http://i1.hdslb.com/bfs/archive/9120400c6c9e0ff76eb39c5deaa66554e78313d8.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【JOJO的奇妙MMD】二乔的RATHER BE",dm:"501",con:"自制 中考结束 摸鱼复健!!!不得不说切な顔P様的STAGE真是太好看"},
                    {pic:"http://i2.hdslb.com/bfs/archive/cc86a25ebe85c95e65ab46d4ee55770fe0023cb3.png_320x200.png",up:"だれ?",play:"21045",title:"【MMD刀剑乱舞】Scream【一期与明石】",dm:"501",con:"sm26686615 自搬运、侵删。 教育方針が合わなさそうな保護者二人で"},
                    {pic:"http://i0.hdslb.com/bfs/archive/c21415bbc2cd571db4986692183d4d70580222c3.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【MMD】初音三妈式泳装福利",dm:"501",con:"sm29004036 原UP - Hibiki 求关注~求硬币~"},
                    {pic:"http://i1.hdslb.com/bfs/archive/b69b7da688069c81eaf7506ad4e44a4124bd197c.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【MMD】Masked BitcH「ver 2」",dm:"501",con:"YouTube 作者：Принцесса Лилиан "},
                    {pic:"http://i0.hdslb.com/bfs/archive/bd323f5010e715fb11af16b3943b25d866c82722.png_320x200.png",up:"だれ?",play:"21045",title:"【MMD】- Unravel -【初音】",dm:"501",con:"https://www.youtube.com/watch?v=JUpq-CTiiTM "},
                    {pic:"http://i2.hdslb.com/bfs/archive/6c518626708fc6da15fe661615819b363f281113.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【MMD】Hibikase「Punk Vokaloid」ver.2",dm:"501",con:"YouTube 作者：Принцесса Лилиан 链接：https://www.youtube.com"},
                    {pic:"http://i2.hdslb.com/bfs/archive/e44e932d83c447c597597cfca6cd56a51e42db86.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"大公主（疑心暗鬼）",dm:"501",con:"自制 MMD: TDA Miku Lace Dress Blue BGM:疑心暗鬼 动作数据：西谷"},
                    {pic:"http://i1.hdslb.com/bfs/archive/acf6a668c4b1d3c36150be271e828d8d9940cbbc.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【疑心暗鬼】福利向",dm:"501",con:"自制 BGM：疑心暗鬼 模型：nya兽"},
                    {pic:"http://i2.hdslb.com/bfs/archive/d234e51d79a3f835881612b2bdb8a7ce6a24310f.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【MMD阿松】20组的torio松～波～",dm:"501",con:"sm29041305 はあ、夜に眠るの・・・"},
                    {pic:"http://i1.hdslb.com/320_200/u_user/4ff2cf31bd8e86f11665b830c0d1d989.jpg",up:"だれ?",play:"21045",title:"【MMD刀剑乱舞】[A]ddiction【药研藤四郎】",dm:"501",con:"sm28477193 自搬运、侵删。 お借りしたものは動画内"},
                    {pic:"http://i1.hdslb.com/bfs/archive/e0f8877d7c28c8ce01a954e52fb84c8d65dd40a1.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"Twinkle world",dm:"501",con:"自制 新版的不能傳~繼續用舊版bilibili 台灣地區被封鎖了拉QAQ "},
                    {pic:"http://i1.hdslb.com/bfs/archive/45a1b22b35d18ef163a4862447ccaf4a13da2a2c.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【MMD】这个夏天与泳装更配哦~",dm:"501",con:"自制 model：TDA HAKU BIKINI，TDA MIKU BIKINI，TDA LUKA "},
                    {pic:"http://i2.hdslb.com/bfs/archive/94e79d34d97a838c60959bd65ea725051cde161e.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【Blender渲染】Lamb【ONE】",dm:"501",con:"https://www.youtube.com/watch?v=sElibfBCnXw 转自油土鳖 "},
                    {pic:"http://i0.hdslb.com/bfs/archive/dd14b46d11abb547318d1d83b07778180d6d50a1.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【MMD阿松】 Chained Up",dm:"501",con:"sm29036505 ・着せ替え、(少々)肌の露出に注意です"},
                    {pic:"http://i1.hdslb.com/bfs/archive/3c23af10d9eb6a258e3ea305e8c43b43002757b6.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【MMD】ECHO【初音，巡音，弱音-  性感女仆装】",dm:"501",con:"https://www.youtube.com/watch?v=OzRSx6DZOow 作者：Pia 3"}
                ]
            }
        }
    };
    this.ajaxData = function (cal) {
        $http({
            url:d + "?name=home",
            method:'GET'
        }).success(function(data,header,config,status){

            //self.data.home.slider = data.data.slider;

            cal();
        }).error(function(data,header,config,status){

        });

    }
});

m1.service('newAnimate',function($http){
    var self = this;
    this.data = {
        home:{
            slider:[
                {pic:"http://i0.hdslb.com/group1/M00/B7/44/oYYBAFc5MXmALCCSAAHu003nz5M494.jpg",s_pic:"http://i0.hdslb.com/group1/M00/B7/05/oYYBAFb-IiiAai74AAAMbkI6mlg682.jpg",title:"Re:从零开始的异世界生活 07"},
                {pic:"http://i0.hdslb.com/group1/M00/B7/33/oYYBAFcoTAeAFkZqAAIPUVE3k1w023.jpg",s_pic:"http://i0.hdslb.com/group1/M00/B7/33/oYYBAFcoTGiAZrh6AAAMcyZKhfk412.jpg",title:"乃木坂春香的秘密"},
                {pic:"http://i0.hdslb.com/group1/M00/B7/33/oYYBAFcoPeKAfSVfAAH9r2hwhxY642.jpg",s_pic:"http://i0.hdslb.com/group1/M00/B7/33/oYYBAFcoPlmAVLIJAAAMKWEoWtE822.jpg",title:"超时空要塞Frontier"},
                {pic:"http://i0.hdslb.com/group1/M00/B7/47/oYYBAFc70cSAQHyzAAJfY2HjkAE299.jpg",s_pic:"http://i0.hdslb.com/group1/M00/B7/08/oYYBAFcEfOKAeX8AAAAQdGuzWoQ184.jpg",title:"双星之阴阳师 07"}
            ],
            hot:[
                {pic:"http://i2.hdslb.com/bfs/archive/bc0057196a9aed25ec75054f81a6ec15d7e652ec.jpg_320x200.jpg",class:"pv",title:"【7月】Ange Vierge 正式PV1",con:"アニメ「アンジュ・ヴィエルジュ」ＰＶ"},
                {pic:"http://i0.hdslb.com/bfs/archive/4ca0dd7e1ab54ded67ffa693090d877770efcb99.jpg_320x200.jpg",class:"pv",title:"【剧场版】加速世界 INFINITE BURST CM",con:"TV アクセル・ワールド INFINITE∞BURST CM"},
                {pic:"http://i0.hdslb.com/group1/M00/B7/37/oYYBAFcsAPOAGM4jAADoh2_4VPA281.jpg",class:"话题",title:"bilibili正版完结番（四）",con:"(/≥▽≤/)"},
                {pic:"http://i0.hdslb.com/group1/M00/B7/44/oYYBAFc5NYiAamB2AADzK3ml8jM763.jpg",class:"话题",title:"国产新作很强势！",con:"你所知道不知道的国产新作连载强势来袭~"},
                {pic:"http://i2.hdslb.com/bfs/archive/a4b7c47b9f609da7a896c7c89e0c112edbd64a8f.jpg_320x200.jpg",class:"bilibili正版",title:"【4月】Crane Game Girls 07【独家正版】",con:"#07 违背的约定"},
                {pic:"http://i2.hdslb.com/bfs/archive/85d88831f41fbf0524c21b5f807eb91c51655de7.jpg_320x200.jpg",class:"bilibili正版",title:"【4月】鬼斩 07【独家正版】",con:"#07 醉生梦死"},
                {pic:"http://i0.hdslb.com/bfs/archive/c339f3149e07d411cf439713dff95b77b0e0bec1.jpg_320x200.jpg",class:"pv",title:"【4月】线上游戏的老婆不可能是女生？ 04",con:"fwaf福娃发往分"}
            ],
            mainList:{
                list1:{
                    title:"连载动画",
                    data:[
                        {pic:"http://i0.hdslb.com/bfs/archive/d5a159cc633d25a2032356c760f62eb3bc360c6b.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【4月】在下坂本有何贵干？ 06【独家正版】",dm:"501"},
                        {pic:"http://i1.hdslb.com/bfs/archive/e173bfcae2cce0c4f3d28695332e9d7b1793b3c9.jpg_320x200.jpg",up:"だれ?",play:"1537",title:"【4月】线上游戏的老婆不可能是女生？ 07",dm:"554"},
                        {pic:"http://i1.hdslb.com/bfs/archive/94ab2c948f115838bfb51b9ffdd650dfc54647e5.jpg_320x200.jpg",up:"だれ?",play:"2545",title:"【4月】学战都市Asterisk 13【独家正版】",dm:"501"},
                        {pic:"http://i1.hdslb.com/bfs/archive/be2e7c1eae4af5d6adea80cf037aa3d97d8e568b.jpg_320x200.jpg",up:"だれ?",play:"5542345",title:"【4月】超时空要塞Δ 02【幻之x诸神xDHR/NEO·QSW】",dm:"1277"},
                        {pic:"http://i0.hdslb.com/bfs/archive/ee0ce5a0d0bead4673d5eb01ed584b0a1409ba2c.jpg_320x200.jpg",play:"55254",title:"【4月】在下坂本有何贵干？ 03【独家正版】",dm:"20"},
                        {pic:"http://i2.hdslb.com/bfs/archive/8fc79cff6af2bda9e93d68d4d25eec11bfe93cdc.jpg_320x200.jpg",up:"だれ?",play:"222",title:"【4月】线上游戏的老婆不可能是女生？ 06",dm:"284"},
                        {pic:"http://i1.hdslb.com/bfs/archive/35d28c654f4335898eaf33303ffaefb4708a98a2.jpg_320x200.jpg",up:"だれ?",play:"45245",title:"【生肉】妖精的尾巴OAD 08",dm:"153"},
                        {pic:"http://i2.hdslb.com/bfs/archive/0eb0d0389fc58f7bcec873656c386021e67b2016.jpg_320x200.jpg",up:"だれ?",play:"4254",title:"【4月】线上游戏的老婆不可能是女生？ 01",dm:"5133"},
                        {pic:"http://i0.hdslb.com/bfs/archive/21ce97c885a2c1e25c53458209f6e1ef9ac18d31.jpg_320x200.jpg",up:"だれ?",play:"452542",title:"【4月】迷家 07【独家正版】",dm:"132"},
                        {pic:"http://i0.hdslb.com/bfs/archive/8a8df4601537984b12b9e57439c7fd713e46713c.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【10月】恐怖！僵尸猫 33【独家正版】",dm:"221"},
                        {pic:"http://i1.hdslb.com/bfs/archive/47f500044de05c5891ebac183b9b300de419ff26.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【4月】黑色残骸 03【F宅x袋鼠xDHR】",dm:"221"},
                        {pic:"http://i0.hdslb.com/bfs/archive/e759a72ab170c907659506add08cd4e292906f31.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【4月】未来卡搭档对战DDD 04【生肉】",dm:"221"},
                        {pic:"http://i0.hdslb.com/bfs/archive/bfc7caa58a18e8411305a9109ab617e1f778c204.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【4月】在下坂本有何贵干？ 04【独家正版】",dm:"221"},
                        {pic:"http://i2.hdslb.com/bfs/archive/4a0cc49f63ef98c44cb47591c3a9eb17130d8ac4.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【OVA】黑塔利亚 第六季 The World Twinkle 17【独家正版】",dm:"221"},
                        {pic:"http://i2.hdslb.com/bfs/archive/985dcbc4dced78755a8265a08d7e963d36a73060.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【4月】线上游戏的老婆不可能是女生？ 03",dm:"221"},
                        {pic:"http://i2.hdslb.com/bfs/archive/985dcbc4dced78755a8265a08d7e963d36a73060.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【4月】线上游戏的老婆不可能是女生？ 03",dm:"221"}
                    ],
                    ranking:[
                        {pic:"http://i2.hdslb.com/bfs/archive/8fc79cff6af2bda9e93d68d4d25eec11bfe93cdc.jpg_320x200.jpg",up:"だれ?",play:"222",title:"【4月】线上游戏的老婆不可能是女生？ 06",dm:"284"},
                        {pic:"http://i1.hdslb.com/bfs/archive/35d28c654f4335898eaf33303ffaefb4708a98a2.jpg_320x200.jpg",up:"だれ?",play:"45245",title:"【生肉】妖精的尾巴OAD 08",dm:"153"},
                        {pic:"http://i2.hdslb.com/bfs/archive/0eb0d0389fc58f7bcec873656c386021e67b2016.jpg_320x200.jpg",up:"だれ?",play:"4254",title:"【4月】线上游戏的老婆不可能是女生？ 01",dm:"5133"},
                        {pic:"http://i0.hdslb.com/bfs/archive/21ce97c885a2c1e25c53458209f6e1ef9ac18d31.jpg_320x200.jpg",up:"だれ?",play:"452542",title:"【4月】迷家 07【独家正版】",dm:"132"},
                        {pic:"http://i0.hdslb.com/bfs/archive/8a8df4601537984b12b9e57439c7fd713e46713c.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【10月】恐怖！僵尸猫 33【独家正版】",dm:"221"},
                        {pic:"http://i1.hdslb.com/bfs/archive/47f500044de05c5891ebac183b9b300de419ff26.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【4月】黑色残骸 03【F宅x袋鼠xDHR】",dm:"221"},
                        {pic:"http://i0.hdslb.com/bfs/archive/e759a72ab170c907659506add08cd4e292906f31.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【4月】未来卡搭档对战DDD 04【生肉】",dm:"221"},
                        {pic:"http://i0.hdslb.com/bfs/archive/bfc7caa58a18e8411305a9109ab617e1f778c204.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【4月】在下坂本有何贵干？ 04【独家正版】",dm:"221"},
                        {pic:"http://i2.hdslb.com/bfs/archive/4a0cc49f63ef98c44cb47591c3a9eb17130d8ac4.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【OVA】黑塔利亚 第六季 The World Twinkle 17【独家正版】",dm:"221"},
                        {pic:"http://i2.hdslb.com/bfs/archive/985dcbc4dced78755a8265a08d7e963d36a73060.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【4月】线上游戏的老婆不可能是女生？ 03",dm:"221"}
                    ]
                },
                list2:{
                    title:"完结动画",
                    data:[
                        {pic:"http://i0.hdslb.com/320_200/video/a4/a4ff34b87a8e71409d69dcac35994044.jpg",up:"だれ?",play:"21045",title:"【合集】希德尼娅的骑士 第一季",dm:"501"},
                        {pic:"http://i0.hdslb.com/bfs/archive/86a59d44087d26abe74261b72b1765d4987a36da.jpg_320x200.jpg",up:"だれ?",play:"1537",title:"【BDRip】八犬传-东方八犬异闻 1080P 双语字幕【诸神字幕组】",dm:"554"},
                        {pic:"http://i2.hdslb.com/320_200/u_user/2ae25c29acd013d2403b836b1566c3b8.jpg",up:"だれ?",play:"2545",title:"【天降之物BDRIP】第一季",dm:"501"},
                        {pic:"http://i2.hdslb.com/user/704/70432/13104449668e07bb1fd8796e03.gif",up:"だれ?",play:"5542345",title:"反叛的鲁路修（第二季25话全）【BDRip】",dm:"1277"},
                        {pic:"http://i1.hdslb.com/320_200/video/82/82139a538890412c853ff70cf1eb45e3.jpg",play:"55254",title:"【合集】归宅部活动记录",dm:"20"},
                        {pic:"http://i0.hdslb.com/320_200/video/21/21c4e9fbf4951faf3106bc95f3f1931d.jpg",up:"だれ?",play:"222",title:"【1080P/BDRip】神薙 【澄空】",dm:"284"},
                        {pic:"http://i1.hdslb.com/bfs/archive/ddc783b15e1c7ac9d80774e011ea3632ae8e6d24.jpg_320x200.jpg",up:"だれ?",play:"45245",title:"【合集】逮捕令（全系列）",dm:"153"},
                        {pic:"http://i1.hdslb.com/bfs/archive/bca26f3285f7a0a9618c929c577d2a4008d663ab.jpg_320x200.jpg",up:"だれ?",play:"4254",title:"【第三季】Code Lyoko 虚幻勇士 至NET奇兵 中英双语字幕 高清收藏版【冰灵】",dm:"5133"},
                        {pic:"http://i1.hdslb.com/320_200/video/94/94603cb4e8be087ffd1008daaf2fefd1.jpg",up:"だれ?",play:"452542",title:"【合集】梦幻妖子【全24话】",dm:"132"},
                        {pic:"http://i2.hdslb.com/320_200/u_f/7ce9ee266ea3ff4f68248917e5a9ea42.jpg",up:"だれ?",play:"2452",title:"【4月/完结】命运石之门",dm:"221"},
                        {pic:"http://i2.hdslb.com/320_200/video/d6/d65f11e34cba9026e461ad6602047752.jpg",up:"だれ?",play:"2452",title:" [X2&HKG] 黑之契约者 第一季 BDrip 1080p 01-26",dm:"221"},
                        {pic:"http://i0.hdslb.com/320_200/u_f/873803ba24fcc4c933828514d1cbaf53.jpg",up:"だれ?",play:"2452",title:"【合集】冰菓 Hyouka【独家正版】",dm:"221"},
                        {pic:"http://i0.hdslb.com/group1/M00/8D/D8/oYYBAFbeVCaARU-1AACu6XEofds765.jpg",up:"だれ?",play:"2452",title:"【合集】某科学的超电磁炮S（第二季）",dm:"221"},
                        {pic:"http://i2.hdslb.com/320_200/video/54/549d9701a5eb3f671265c50188a85431.jpg",up:"だれ?",play:"2452",title:"【合集】我的妹妹不可能那么可爱",dm:"221"},
                        {pic:"http://i1.hdslb.com/320_200/video/e4/e404f9a4508dd3b7cb4adba7e095a07c.jpg",up:"だれ?",play:"2452",title:"【DVDRip】野良神 OAD 01-02【极影】",dm:"221"},
                        {pic:"http://i1.hdslb.com/320_200/video/a6/a62a06f393465bbbd54b71fb40f15ec0.jpg",up:"だれ?",play:"2452",title:"【合集】花开物语",dm:"221"},
                        {pic:"http://i1.hdslb.com/bfs/archive/0596a652989cbac8d2f20a4e57ecdb6f64b19dfa.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"小马宝莉 友谊的魔力 第一季",dm:"221"},
                        {pic:"http://i2.hdslb.com/320_200/video/1b/1b0a20cfa0bafe1f036265388028c8ae.jpg",up:"だれ?",play:"2452",title:"【合集】夏目友人帐",dm:"221"},
                        {pic:"http://i2.hdslb.com/320_200/video/ba/baa80b00f2732b8eedc8594cb1020b3a.jpg",up:"だれ?",play:"2452",title:"【官方中文】Fate/Zero",dm:"221"},
                        {pic:"http://i2.hdslb.com/320_200/u_user/df2642df5ca3eb1acc54fe81c602e201.jpg",up:"だれ?",play:"2452",title:"【4月】线上游戏的老婆不可能是女生？ 03",dm:"221"}
                    ],
                    ranking:[
                        {pic:"http://i0.hdslb.com/320_200/video/a4/a4ff34b87a8e71409d69dcac35994044.jpg",up:"だれ?",play:"21045",title:"【合集】希德尼娅的骑士 第一季",dm:"501"},
                        {pic:"http://i0.hdslb.com/bfs/archive/86a59d44087d26abe74261b72b1765d4987a36da.jpg_320x200.jpg",up:"だれ?",play:"1537",title:"【BDRip】八犬传-东方八犬异闻 1080P 双语字幕【诸神字幕组】",dm:"554"},
                        {pic:"http://i2.hdslb.com/320_200/u_user/2ae25c29acd013d2403b836b1566c3b8.jpg",up:"だれ?",play:"2545",title:"【天降之物BDRIP】第一季",dm:"501"},
                        {pic:"http://i2.hdslb.com/user/704/70432/13104449668e07bb1fd8796e03.gif",up:"だれ?",play:"5542345",title:"反叛的鲁路修（第二季25话全）【BDRip】",dm:"1277"},
                        {pic:"http://i1.hdslb.com/320_200/video/82/82139a538890412c853ff70cf1eb45e3.jpg",play:"55254",title:"【合集】归宅部活动记录",dm:"20"},
                        {pic:"http://i0.hdslb.com/320_200/video/21/21c4e9fbf4951faf3106bc95f3f1931d.jpg",up:"だれ?",play:"222",title:"【1080P/BDRip】神薙 【澄空】",dm:"284"},
                        {pic:"http://i1.hdslb.com/bfs/archive/ddc783b15e1c7ac9d80774e011ea3632ae8e6d24.jpg_320x200.jpg",up:"だれ?",play:"45245",title:"【合集】逮捕令（全系列）",dm:"153"},
                        {pic:"http://i1.hdslb.com/bfs/archive/bca26f3285f7a0a9618c929c577d2a4008d663ab.jpg_320x200.jpg",up:"だれ?",play:"4254",title:"【第三季】Code Lyoko 虚幻勇士 至NET奇兵 中英双语字幕 高清收藏版【冰灵】",dm:"5133"},
                    ]
                }
            }
        },
        continuity:{
            label:["全部标签","BILIBILI正版","OVA•OAD","剧场版","特点","特典","番外","疾风传","RE：从零开始的异世界生活","fate","罪恶网管","秒速五厘米","泡面烦","冰果"],
            new:{
                title:"最新动态",
                data:[
                    {pic:"http://i1.hdslb.com/320_200/video/9b/9b64b06c7de8363cbeb6a6cad060c321.jpg",up:"だれ?",play:"21045",title:"【综漫 燃 新素材】有生之年必不辱最强之名",dm:"501"},
                    {pic:"http://i1.hdslb.com/bfs/archive/64472339d324833851d5877de9636206bfbcfa56.jpg_320x200.jpg",up:"だれ?",play:"1537",title:"【东方MMD】战斗?of?红魔馆Ⅱ 前篇【强烈推荐】",dm:"554"},
                    {pic:"http://i1.hdslb.com/bfs/archive/9182bd49614be256a5e89567182b5c70603c5c17.jpg_320x200.jpg",up:"だれ?",play:"2545",title:"【藏雅/误解AMV】back to december",dm:"501"},
                    {pic:"http://i0.hdslb.com/bfs/archive/35e9707971ec47efbc5a2259b67763ee983a5c7d.jpg_320x200.jpg",up:"だれ?",play:"5542345",title:"【杀铃】无论阻隔我们的是多么巨大的险阻，我都只想见证你的笑容与泪水",dm:"1277"},
                    {pic:"http://i0.hdslb.com/bfs/archive/626e8f40c2c521f711d48a1ebbd84bf91565c055.jpg_320x200.jpg",up:"だれ?",play:"55254",title:"【刀剑/鼬佐/黑岩】 看到最后你肯定会想刷一个弹幕",dm:"20"}
                ]
            },
            ranking:[
                {pic:"http://i2.hdslb.com/bfs/archive/d45440607b3aa35a6fadd459a6e90336d70edbee.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【4月】在下坂本有何贵干？ 09【独家正版】",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/archive/5247922a6207274c37fa5c3362c3c93c38eeb572.jpg_320x200.jpg",up:"だれ?",play:"1537",title:"【4月】Re：从零开始的异世界生活 11",dm:"554"},
                {pic:"http://i0.hdslb.com/bfs/archive/40060ca6503fda9389a020dfbff385dabad61a66.jpg_320x200.jpg",up:"だれ?",play:"2545",title:"【4月】甲铁城的卡巴内瑞 09",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/archive/659971f6f44d04dacbc36e13bf13fc8a26c56ae1.jpg_320x200.jpg",up:"だれ?",play:"5542345",title:"【僕街/MAD】只有我看见了，你的故事 / Last Revival",dm:"1277"},
                {pic:"http://i0.hdslb.com/320_200/video/83/83d811d8617de009be6390da7befec30.jpg",up:"だれ?",play:"55254",title:"【剧场预告风】炽翼天使【进击的巨人】",dm:"20"},
                {pic:"http://i1.hdslb.com/bfs/archive/50166f2bae3de9cab35ebf55c06eca0816b0d703.jpg_320x200.jpg",up:"だれ?",play:"222",title:"【多素材AMV】再见了，我最最喜欢的你",dm:"284"},
                {pic:"http://i0.hdslb.com/320_200/video/81/8199f3677414f70c49738298f2700ea1.jpg",up:"だれ?",play:"45245",title:"【深爱】黑粉【MAD】（无战斗场景）",dm:"153"},
                {pic:"http://i2.hdslb.com/bfs/archive/75bb1fc5c5912234e3b80d17a1a191aab476d528.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"盘点B站最受欢迎的动画女声优",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/archive/2228bf71452939f252f11675d99f0ee8e4dafdf1.jpg_320x200.jpg",up:"だれ?",play:"1537",title:"【东方MMD】战斗?of?红魔馆Ⅱ 前篇【强烈推荐】",dm:"554"},
                {pic:"http://i1.hdslb.com/bfs/archive/5cce2e1a6788df12315ab6c9f1b01686a6e09571.jpg_320x200.jpg",up:"だれ?",play:"2545",title:"【藏雅/误解AMV】back to december",dm:"501"}
            ],
            mainList:{
                title:"最新动态",
                data:[
                    {pic:"http://i0.hdslb.com/bfs/archive/5dbe10d9090251c9edca140a20a4a87f12bb7270.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【1月】火影忍者 疾风传 685",dm:"501",con:"#685 「阿修罗与因陀罗」【应官方要求，本片字幕全网统一为优土译制"},
                    {pic:"http://i2.hdslb.com/bfs/archive/a9017370cbffb7797cbac90ebab5ecda95288297.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【4月】战魂王：双子神驭 11",dm:"501",con:"直传 战魂王过去历代作品人气投票，封顶的一作则会商品化"},
                    {pic:"http://i1.hdslb.com/bfs/archive/be712ec357f3d13a682501addbf499392a44040c.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【小剧场】弱酸性百万亚瑟王 29【F宅】",dm:"501",con:"~ 啊 香菜的节操一地都是"},
                    {pic:"http://i1.hdslb.com/bfs/archive/e1fa2a9eeaeeb9373e8dfb74103547aa96b72f81.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【WEB】田中君总是如此慵懒小剧场 26『茶叶棍』【字幕】",dm:"501",con:"（@tanaka_anime) Twitter 自翻 田中是好哥哥啊 想把好运给妹妹 オリ"},
                    {pic:"http://i1.hdslb.com/320_200/u_user/696139dfb0bfbab3efbf1e6d78d0495e.jpg",up:"だれ?",play:"21045",title:"【4月】喧闹一家亲 S01E06【迪幻】",dm:"501",con:"迪幻字幕组 十一个孩子闹翻天，每天早晨像打仗。为了拉拢林肯的决定性"},
                    {pic:"http://i2.hdslb.com/bfs/archive/7b2c208bdda38db7a56e36172be9b9a9be0eeefc.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【2月】莉露莉露妖精莉露 妖精之门 19【字幕】",dm:"501",con:"直传 竟然用眼泪熬汤……"},
                    {pic:"http://i0.hdslb.com/bfs/archive/3af93792bd6e099b68a2a52a5897f2796b1ca14b.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【生肉】弱酸性百万亚瑟王 #29",dm:"501",con:"youtube 友情　強さの秘訣"},
                    {pic:"http://i0.hdslb.com/bfs/archive/46f59cc10efde39c8004bef5b5add1ebdabe2133.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【4月】代号D机关 Joker Game 11【DMG动漫国】",dm:"501",con:"感谢动漫国的精彩制作，感谢科普君的用心科普"},
                    {pic:"http://i2.hdslb.com/320_200/u_user/75e62496485423dac423bbe5b206e6f0.jpg",up:"だれ?",play:"21045",title:"【OVA】动画未来2016 SP04 Kacchikenee! 【生肉】",dm:"501",con:"动画未来2016最后一部，前三部已经有字幕版了"},
                    {pic:"http://i1.hdslb.com/bfs/archive/44632c382f39e40333e16b2be679b8682776e29d.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【4月】游戏王重制版 战斗都市篇40话（90集）【生肉】",dm:"501",con:"小暗 【4月】游戏王重制版 战斗都市篇40话（90集）【生肉】"},
                    {pic:"http://i2.hdslb.com/320_200/u_user/d2f2b007cdf227c554327caf5a317c14.jpg",up:"だれ?",play:"21045",title:"【WEB】最终幻想15 BROTHERHOOD 02",dm:"501",con:"直传 诺克提斯和伙伴们的冒险还在继续，普朗托救助了一只受伤小狗"},
                    {pic:"http://i1.hdslb.com/bfs/archive/e14bae8eade88c4b0905144a1b1e0b3c97f45eb8.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【2016/日语生肉】终极蜘蛛侠大战邪恶六人组 S04E11",dm:"501",con:"Amazon 前排出售纸巾 自录，有顿卡 "},
                    {pic:"http://i1.hdslb.com/bfs/archive/9e6eacf667018ab094b231955d4de5979f869076.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【4月】忍者乱太郎 第24季 36【花語字幕組】",dm:"501",con:"花語字幕組微博：http://weibo.com/hasub 这个是童年 "},
                    {pic:"http://i2.hdslb.com/bfs/archive/b73b62336b1652869705f745abfab50bb2430787.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【4月】代号D机关 11【生肉】",dm:"501",con:"~ #11 「柩」"},
                    {pic:"http://i1.hdslb.com/bfs/archive/73b17799aa32d713f90c6e6258e5defceaf9debe.png_320x200.png",up:"だれ?",play:"21045",title:"【WEB】最终幻想15 BROTHERHOOD 01",dm:"501",con:"《Before the Storm》诺克提斯与同伴们在冒险途中"},
                    {pic:"http://i2.hdslb.com/bfs/archive/d6c225fb3a3c473931e1adaf12db001d5037ce8d.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【6月】猪猪秀 00-01",dm:"501",con:"新动画来啦 ~(～o￣▽￣)～o ~。。。"},
                    {pic:"http://i1.hdslb.com/bfs/archive/7394769e12e295617efb87333f570d00e68b76c9.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【2016/英语生肉】终极蜘蛛侠: 大战邪恶六人组 S04E10【英文字幕】",dm:"501",con:"看到最后一幕差点泪崩（/TДT)/好虐(´；ω；`)"},
                    {pic:"http://i2.hdslb.com/bfs/archive/e2348b90946a0f6e2f7e0c3ca5aef25fb6bdac83.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【美国/生肉/2016】McTucky Fried High S02 麦克塔基炸物高中第二季",dm:"501",con:"https://youtu.be/VjGRX2JVbvM 搬运自McTucky Fried High"},
                    {pic:"http://i2.hdslb.com/bfs/archive/1f639fc29ffb78677543477b5b0836e74075c87b.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【WEB】田中君总是如此慵懒小剧场 25【字幕】",dm:"501",con:"『女子力』（@tanaka_anime) Twitter 自翻 "},
                    {pic:"http://i2.hdslb.com/bfs/archive/7ca9681e06485fe5f6b22ab891f3683bcec7d1b7.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【1月/SP】红壳的潘多拉 SP01【生肉】",dm:"501",con:"BY ReinForce SP1 BDRIP 虽然看得懂"}
                ]
            }
        },
        end:{
            label:["全部标签","静止系MAD","MEP","MSMP","MAD","AMV","多素材","综漫","燃香","fate","罪恶网管","秒速五厘米","特辑","冰果"],
            new:{
                title:"最新动态",
                data:[
                    {pic:"http://i1.hdslb.com/320_200/video/9b/9b64b06c7de8363cbeb6a6cad060c321.jpg",up:"だれ?",play:"21045",title:"【综漫 燃 新素材】有生之年必不辱最强之名",dm:"501"},
                    {pic:"http://i1.hdslb.com/bfs/archive/64472339d324833851d5877de9636206bfbcfa56.jpg_320x200.jpg",up:"だれ?",play:"1537",title:"【东方MMD】战斗?of?红魔馆Ⅱ 前篇【强烈推荐】",dm:"554"},
                    {pic:"http://i1.hdslb.com/bfs/archive/9182bd49614be256a5e89567182b5c70603c5c17.jpg_320x200.jpg",up:"だれ?",play:"2545",title:"【藏雅/误解AMV】back to december",dm:"501"},
                    {pic:"http://i0.hdslb.com/bfs/archive/35e9707971ec47efbc5a2259b67763ee983a5c7d.jpg_320x200.jpg",up:"だれ?",play:"5542345",title:"【杀铃】无论阻隔我们的是多么巨大的险阻，我都只想见证你的笑容与泪水",dm:"1277"},
                    {pic:"http://i0.hdslb.com/bfs/archive/626e8f40c2c521f711d48a1ebbd84bf91565c055.jpg_320x200.jpg",up:"だれ?",play:"55254",title:"【刀剑/鼬佐/黑岩】 看到最后你肯定会想刷一个弹幕",dm:"20"}
                ]
            },
            ranking:[
                {pic:"http://i2.hdslb.com/bfs/archive/37c3eae009675d0c29639db90803f5f60cbbbf24.jpg",up:"だれ?",play:"21045",title:"【合集】食梦者 / 爆漫王 第一季【独家正版】",dm:"501"},
                {pic:"http://i1.hdslb.com/bfs/archive/1d1393e47ef7e898879fadcdf31d6231aca4cfd2.jpg_320x200.jpg",up:"だれ?",play:"1537",title:"蜡笔小新特别篇SP[2001-10-05]魔法师小新哦（全）、我家没怎么盖哦（全）【独偶字幕】",dm:"554"},
                {pic:"http://i1.hdslb.com/bfs/archive/99259c2da7b4e8c2801c2cec1b36607609477c78.jpg_320x200.jpg",up:"だれ?",play:"2545",title:"【OAD】野良神OAD 03-04【WOLF字幕组】",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/archive/659971f6f44d04dacbc36e13bf13fc8a26c56ae1.jpg_320x200.jpg",up:"だれ?",play:"5542345",title:"【僕街/MAD】只有我看见了，你的故事 / Last Revival",dm:"1277"},
                {pic:"http://i0.hdslb.com/320_200/video/83/83d811d8617de009be6390da7befec30.jpg",up:"だれ?",play:"55254",title:"【剧场预告风】炽翼天使【进击的巨人】",dm:"20"},
                {pic:"http://i1.hdslb.com/bfs/archive/50166f2bae3de9cab35ebf55c06eca0816b0d703.jpg_320x200.jpg",up:"だれ?",play:"222",title:"【多素材AMV】再见了，我最最喜欢的你",dm:"284"},
                {pic:"http://i0.hdslb.com/320_200/video/81/8199f3677414f70c49738298f2700ea1.jpg",up:"だれ?",play:"45245",title:"【深爱】黑粉【MAD】（无战斗场景）",dm:"153"},
                {pic:"http://i2.hdslb.com/bfs/archive/75bb1fc5c5912234e3b80d17a1a191aab476d528.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"盘点B站最受欢迎的动画女声优",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/archive/2228bf71452939f252f11675d99f0ee8e4dafdf1.jpg_320x200.jpg",up:"だれ?",play:"1537",title:"【东方MMD】战斗?of?红魔馆Ⅱ 前篇【强烈推荐】",dm:"554"},
                {pic:"http://i1.hdslb.com/bfs/archive/5cce2e1a6788df12315ab6c9f1b01686a6e09571.jpg_320x200.jpg",up:"だれ?",play:"2545",title:"【藏雅/误解AMV】back to december",dm:"501"}
            ],
            mainList:{
                title:"最新动态",
                data:[
                    {pic:"http://i1.hdslb.com/bfs/archive/d17806eb2a7b8537a9cb43dcf772ae18ea59d445.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"新番哆啦A梦[SP故事重制]将○○上交给魔王殿下…恶魔城的秘密【129.3】",dm:"501",con:"内容被吞了"},
                    {pic:"http://i2.hdslb.com/bfs/archive/693d299cef4c533c5ef458d0f63275435aa5bfef.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【480P/DVDRip】【时间飞船第四季time bokanS4】【1981年番】【53集全】【日语无字】",dm:"501",con:"内容被吞了"},
                    {pic:"http://i2.hdslb.com/bfs/archive/62cabc8ec3b06cb97b755c4258e3655c0f8b4540.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【熟肉】忍者神龟2003版 第六季",dm:"501",con:"内容被吞了"},
                    {pic:"http://i0.hdslb.com/bfs/archive/649ba0e7731653c7f5920cb603f9caf998c48489.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【720P/DVDRip】米高梅早期动画 Goin' to Heaven on a Mule (bad) [Sunset",dm:"501",con:"内容被吞了"},
                    {pic:"http://i1.hdslb.com/bfs/archive/e92782e2441a9cc0fa49493ac4e4ec6ea48e7714.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【BDrip1080P】我家也有外星人 NieA Under 7",dm:"501",con:"内容被吞了"},
                    {pic:"http://i2.hdslb.com/bfs/archive/2d936b4400938e2205768718c3ddd0a0980fff33.jpg",up:"だれ?",play:"21045",title:"【合集】海底小纵队 特别篇",dm:"501",con:"内容被吞了"},
                    {pic:"http://i0.hdslb.com/bfs/archive/5096a6af01873508ef2f6000fa9486fc37d11d84.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【DVDrip】钢壳都市雷吉欧斯【HKG字幕】",dm:"501",con:"内容被吞了"},
                    {pic:"http://i0.hdslb.com/bfs/archive/26a31b63a7f128866c67104d24d66866b6073795.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【480p】Foster's Home for Imaginary Friends 第一季全10集+第二季13集+先导",dm:"501",con:"内容被吞了"},
                    {pic:"http://i1.hdslb.com/bfs/archive/310be206e2ff3fdce17699445654db00d9d782a0.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【BD1080P/720P】【剧场版】少女与战车+OVA+副音轨【字幕内详】",dm:"501",con:"内容被吞了"},
                    {pic:"http://i1.hdslb.com/bfs/archive/36246424651e96c511cde7d0cdb61976f8fbb16f.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"Voltron.Legendary.Defender.S1【英字】",dm:"501",con:"内容被吞了"},
                    {pic:"http://i0.hdslb.com/bfs/archive/d260de59f0bf0835e13ab45427202dd0b118e938.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【480P/DVDRIP】游戏王5D'S OVA【NW-sartiend】",dm:"501",con:"内容被吞了"},
                    {pic:"http://i1.hdslb.com/bfs/archive/e534ff224fa6d774972e96cdb2d18ff092bc1e4d.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【480P】X Maiden【生肉】",dm:"501",con:"内容被吞了"},
                    {pic:"http://i0.hdslb.com/bfs/archive/4e6c555cebab11e52fad884ce4d0c822b4e2335f.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【480P/DVDRip】漫威超级英雄系列 绿巨人篇(1966)【英语生肉】",dm:"501",con:"内容被吞了"},
                    {pic:"http://i1.hdslb.com/bfs/archive/edded47c5aadbf96dba2cd3c865854a23e5396dc.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【BD1080P】【SP】迷糊餐厅 第三季 14 【光荣字幕·暗】",dm:"501",con:"内容被吞了"},
                    {pic:"http://i0.hdslb.com/bfs/archive/a3400dd0e586af98c09461b02fd852b4aa8ec57b.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【6月/生肉】史努比新短片合集",dm:"501",con:"内容被吞了"},
                    {pic:"http://i0.hdslb.com/bfs/archive/39314139dd87f53f3a3e04004e526f3530f61aca.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【720P】哥谭妹子第三季(2002)【双语/闪电字幕组】",dm:"501",con:"内容被吞了"},
                    {pic:"http://i0.hdslb.com/bfs/archive/e57af6c6ebb48aab2038e871d3f60cdabe94605f.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【720P】哥谭妹子第二季(2001)【双语/闪电字幕组】",dm:"501",con:"内容被吞了"},
                    {pic:"http://i0.hdslb.com/bfs/archive/c8a6ea5747a35de77f5c5a18a64b843f58c90b56.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【480P】海王子 剧场版 (1972)",dm:"501",con:"内容被吞了"},
                    {pic:"http://i1.hdslb.com/bfs/archive/0e45eef5f90cd91d83c34b8116862e205e669c43.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【720P】哥谭妹子第一季(2000)【双语/闪电字幕组】",dm:"501",con:"内容被吞了"},
                    {pic:"http://i2.hdslb.com/bfs/archive/50ffbf2382d828a968eedadf4aaebd3b02242ce0.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【1080P】面包超人 第24部剧场版-复活吧香蕉岛（日语中字）",dm:"501",con:"内容被吞了"}
                ]
            }
        }
    };
    this.ajaxData = function(){
        $http({
            url:d+"?name=sliderHome",
            method:'GET'
        }).success(function(data){

        })
    }
});

m1.service('music',function($http){
    var self = this;
    this.data = {
        home:{
            slider:[
                {pic:'http://i0.hdslb.com/group1/M00/B7/1F/oYYBAFcXaHaAC1IGAAB0YDtFnV4927.jpg'},
                {pic:'http://i1.hdslb.com/promote/6c3bb708e1af5e4fce1304f5934d2291.jpg'}
            ],
            hot:[
                {pic:'http://i0.hdslb.com/320_200/u_f/982426770b56a72969a1c24e41ef749c.png', title:'【Vmoe字幕组】Jin / Live In Mekakucity Summer\'13【阳炎演唱会】', up:'IA', hits:112354},
                {pic:'http://i1.hdslb.com/320_200/u_user/ce874a60b10dea7bd6c04ceef239aad2.png', title:'【自编曲小提琴演奏】Days（阳炎ED）【海鸟】', up:'だれ?', hits:12354},
                {pic:'http://i2.hdslb.com/160_100/u_f/7b28ca7dfe3558f6c004297db7d1f461.jpg', title:'【きじねこ】箱庭的梦', up:'きじねこ', hits:12354},
                {pic:'http://i2.hdslb.com/160_100/u_f/00ead07eec838e66621149e71013a84e.jpg', title:'【きじねこ】夜咄DECEIVE', up:'きじねこ', hits:12354},
                {pic:'http://i0.hdslb.com/320_200/video/0c/0c6bd82f09d952ea7b62d65a799e8a19.jpg', title:'【125人接力合唱】阳炎计划曲翻唱混合', up:'だれ?', hits:12354},
                {pic:'http://i2.hdslb.com/320_200/video/f6/f663f6a8bcf7e72d21d93e57944515aa.jpg', title:'【lovelive】2期BD 第7巻特典CD 試聴【11分钟耐久】', up:'だれ??', hits:12354},
                {pic:'http://i2.hdslb.com/bfs/archive/2d513e3cd6871d367c4a2483775e6e688673b3a8.jpg_320x200.jpg', title:'を歌わせて頂きました。', up:'だれ??', hits:12354},
                {pic:'http://i2.hdslb.com/bfs/archive/bb008b5f54079c34f48cc76d27a775fd1f05a973.jpg_320x200.jpg', title:'同样的话', up:'だれ??', hits:12354}
            ],
            cover:{
                title:"翻唱",
                data:[
                    {pic:"http://i2.hdslb.com/320_200/user/331/33153/1348185279a3b4e5e0d786c26a.jpg",up:"だれ?",play:"21045",title:"【红婷婷】Children Record",dm:"501"},
                    {pic:"http://i1.hdslb.com/video/98/985247f5471099dd388f2be01e6eff35.jpg",up:"だれ?",play:"1537",title:"【赤ティン】Happy Halloween",dm:"554"},
                    {pic:"http://i2.hdslb.com/video/bf/bf6c0e9beb1bfc4192025c5b3d1de36f.jpg",up:"だれ?",play:"2545",title:"【赤ティン】幽灵屋的上吊少女",dm:"501"},
                    {pic:"http://i0.hdslb.com/video/5a/5a61ba87f75fe2580d285fe5183df2b4.jpg",up:"だれ?",play:"5542345",title:"【赤ティン】想·要·成·为·好·朋·友",dm:"1277"},
                    {pic:"http://i0.hdslb.com/bfs/archive/62f62937e112d33899de9c10f52d766026c5241c.jpg",up:"だれ?",play:"55254",title:"【赤ティン】脱獄",dm:"20"},
                    {pic:"http://i1.hdslb.com/video/19/1932841da81d8fe65346da66bc5af7b4.jpg",up:"だれ?",play:"222",title:"【赤ティン】无需言语的约定",dm:"284"},
                    {pic:"http://i2.hdslb.com/video/1b/1b744c5cde15f2a72ae80b6981a0b5ec.jpg",up:"だれ?",play:"45245",title:"【赤ティン】幽灵法则",dm:"153"},
                    {pic:"http://i1.hdslb.com/video/3f/3f47fd52e0a619722edef11495d2161e.jpg",up:"だれ?",play:"4254",title:"【初音ミク】银莲花【赤ティン】",dm:"5133"},
                    {pic:"http://i2.hdslb.com/video/34/34f18d720083f5561752e2435c35d25f.jpg",up:"だれ?",play:"452542",title:"【赤ティン】让其响彻",dm:"132"},
                    {pic:"http://i2.hdslb.com/u_f/7c45d923101cbbc6755a54029f15762b.jpg",up:"だれ?",play:"2452",title:"【赤ティン】孩子气的战争",dm:"221"},
                    {pic:"http://i1.hdslb.com/u_f/c127a313346b55ba1f01f2a062417353.jpg",up:"だれ?",play:"2452",title:"【赤ティン】界外科学",dm:"221"},
                    {pic:"http://i1.hdslb.com/video/2f/2f04f34004d8a449694b2f3fdab718a8.jpg",up:"だれ?",play:"2452",title:"【赤ティン】鲁莽冲撞女孩",dm:"221"},
                    {pic:"http://i0.hdslb.com/bfs/archive/251b33d964c2733708e98433ad536da4249a29b1.jpg",up:"だれ?",play:"2452",title:"【赤ティン】Dance Dance 颓废",dm:"221"},
                    {pic:"http://i0.hdslb.com/video/00/000e7078669b3219b86d18f7b5c1f288.jpg",up:"だれ?",play:"2452",title:"【赤ティン】人生多别离",dm:"221"},
                    {pic:"http://i1.hdslb.com/u_f/7e84fd16c010aed905d3a33b742d1315.jpg",up:"だれ?",play:"2452",title:"【赤ティン】四十七",dm:"221"},
                    {pic:"http://i0.hdslb.com/bfs/archive/514b0ce92f53c1c6d7d706c15cabed8a64a08424.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【ASMV/国漫/燃向】Tidsa/弱者[先行版]",dm:"221"},
                    {pic:"http://i0.hdslb.com/bfs/archive/514b0ce92f53c1c6d7d706c15cabed8a64a08424.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【ASMV/国漫/燃向】Tidsa/弱者[先行版]",dm:"221"},
                    {pic:"http://i0.hdslb.com/bfs/archive/514b0ce92f53c1c6d7d706c15cabed8a64a08424.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【ASMV/国漫/燃向】Tidsa/弱者[先行版]",dm:"221"},
                    {pic:"http://i0.hdslb.com/bfs/archive/514b0ce92f53c1c6d7d706c15cabed8a64a08424.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【ASMV/国漫/燃向】Tidsa/弱者[先行版]",dm:"221"},
                    {pic:"http://i0.hdslb.com/bfs/archive/514b0ce92f53c1c6d7d706c15cabed8a64a08424.jpg_320x200.jpg",up:"だれ?",play:"2452",title:"【ASMV/国漫/燃向】Tidsa/弱者[先行版]",dm:"221"}
                ]
            },
            coverRanking:[
                {pic:"http://i1.hdslb.com/video/19/1932841da81d8fe65346da66bc5af7b4.jpg",up:"だれ?",play:"222",title:"【赤ティン】无需言语的约定",dm:"284"},
                {pic:"http://i2.hdslb.com/video/1b/1b744c5cde15f2a72ae80b6981a0b5ec.jpg",up:"だれ?",play:"45245",title:"【赤ティン】幽灵法则",dm:"153"},
                {pic:"http://i1.hdslb.com/video/3f/3f47fd52e0a619722edef11495d2161e.jpg",up:"だれ?",play:"4254",title:"【初音ミク】银莲花【赤ティン】",dm:"5133"},
                {pic:"http://i2.hdslb.com/video/34/34f18d720083f5561752e2435c35d25f.jpg",up:"だれ?",play:"452542",title:"【赤ティン】让其响彻",dm:"132"},
                {pic:"http://i2.hdslb.com/u_f/7c45d923101cbbc6755a54029f15762b.jpg",up:"だれ?",play:"2452",title:"【赤ティン】孩子气的战争",dm:"221"},
                {pic:"http://i1.hdslb.com/u_f/c127a313346b55ba1f01f2a062417353.jpg",up:"だれ?",play:"2452",title:"【赤ティン】界外科学",dm:"221"},
                {pic:"http://i1.hdslb.com/video/2f/2f04f34004d8a449694b2f3fdab718a8.jpg",up:"だれ?",play:"2452",title:"【赤ティン】鲁莽冲撞女孩",dm:"221"},
                {pic:"http://i0.hdslb.com/bfs/archive/251b33d964c2733708e98433ad536da4249a29b1.jpg",up:"だれ?",play:"2452",title:"【赤ティン】Dance Dance 颓废",dm:"221"},
                {pic:"http://i0.hdslb.com/video/00/000e7078669b3219b86d18f7b5c1f288.jpg",up:"だれ?",play:"2452",title:"【赤ティン】人生多别离",dm:"221"},
                {pic:"http://i1.hdslb.com/u_f/7e84fd16c010aed905d3a33b742d1315.jpg",up:"だれ?",play:"2452",title:"【赤ティン】四十七",dm:"221"},
            ],
            play:{
                title:"演奏",
                data:[
                    {pic:"http://i2.hdslb.com/bfs/archive/11f112b700a339abf7689ec19860cedfba552bc4.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【西洋乐器大赛】钢琴 未闻花名ED～Secret Base～",dm:"501"},
                    {pic:"http://i0.hdslb.com/bfs/archive/faf070e02bd3f7fb90cb8ad5b806d576c9253ffd.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"东京喰种OP unravel电吉他cover",dm:"501"},
                    {pic:"http://i1.hdslb.com/320_200/video/73/7300502cf1436918c3215e2c90ac95d0.jpg",up:"だれ?",play:"21045",title:"【情人节/新春特制】V.K克钢琴曲4首 （琴之翼+花水月+镜夜+亚特兰蒂斯之恋）",dm:"501"},
                    {pic:"http://i0.hdslb.com/bfs/archive/a57ed803ea9e6be9ab2a3bde075571c30826115f.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【penbeat】禁忌的边界线（超时空要塞△）",dm:"501"},
                    {pic:"http://i1.hdslb.com/bfs/archive/e98cf29a47c08ee352e682846e7fbeee49a843d2.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【电吉他/樱日和】翻弹死神片尾曲《樱日和》",dm:"501"},
                    {pic:"http://i1.hdslb.com/bfs/archive/f8798428e97147cf73675b77102b2d77132f22f2.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【古筝】《灌篮高手》主题曲《好想大声说爱你》",dm:"501"},
                    {pic:"http://i2.hdslb.com/bfs/archive/ad3fb6902034741f7c57da3ffb097af3450d4aa2.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"Polyphia - Finale  (Piano & Drum Cover)",dm:"501"},
                    {pic:"http://i1.hdslb.com/bfs/archive/1f34a0eeba4964cdcc9338200fb946c9a005d7b8.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【钢琴+吉他】 斑马斑马-宋冬野",dm:"501"},
                    {pic:"http://i2.hdslb.com/320_200/video/75/75b7b949014889aad559ede5af7c554c.jpg",up:"だれ?",play:"21045",title:"【绝美指弹吉他】未闻花名ED「secret base~你给我的所有」",dm:"501"},
                    {pic:"http://i1.hdslb.com/320_200/video/65/6568f1469f8b9661c9fa734b707340e8.jpg",up:"だれ?",play:"21045",title:"[PaRaD1SE]乐园追放 ED EONIAN 钢琴",dm:"501"},
                    {pic:"http://i2.hdslb.com/bfs/archive/7d7e3e220f552534d88c226f27fd482f10de925e.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【ED】 Re：从零开始的异世界生活 ED - STYX HELIX 钢琴演奏（完整版）",dm:"501"},
                    {pic:"http://i1.hdslb.com/bfs/archive/99e2070b6b32778447926947f66fb01db638d2ae.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【古筝】大鱼海棠 曲 《大鱼》",dm:"501"},
                    {pic:"",up:"だれ?",play:"21045",title:"",dm:"501"},
                    {pic:"",up:"だれ?",play:"21045",title:"",dm:"501"},
                    {pic:"",up:"だれ?",play:"21045",title:"",dm:"501"}
                ]
            },
            playRanking:[
                {pic:"http://i0.hdslb.com/bfs/archive/a1c9599ad66c5cc4d62b06356fa99dcc6465674e.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【昼夜】鸟之诗",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/archive/8550810a33397735c66d8283e569bdcf4ade89c3.jpg_320x200.jpg",up:"だれ?",play:"1537",title:"【小提琴重奏】悬空【绾绾X白日梦】时之歌Project",dm:"554"},
                {pic:"http://i2.hdslb.com/bfs/archive/356111763c35dfdc73b5267dbc2e9f8a33c2a4f7.jpg_320x200.jpg",up:"だれ?",play:"2545",title:"渚（nagisa）木吉他翻弹",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/archive/659971f6f44d04dacbc36e13bf13fc8a26c56ae1.jpg_320x200.jpg",up:"だれ?",play:"5542345",title:"【刹那】初音未来的消失",dm:"1277"},
                {pic:"http://i0.hdslb.com/320_200/video/83/83d811d8617de009be6390da7befec30.jpg",up:"だれ?",play:"55254",title:"【剧场预告风】炽翼天使【进击的巨人】",dm:"20"},
                {pic:"http://i1.hdslb.com/bfs/archive/50166f2bae3de9cab35ebf55c06eca0816b0d703.jpg_320x200.jpg",up:"だれ?",play:"222",title:"【多素材AMV】再见了，我最最喜欢的你",dm:"284"},
                {pic:"http://i0.hdslb.com/320_200/video/81/8199f3677414f70c49738298f2700ea1.jpg",up:"だれ?",play:"45245",title:"【深爱】黑粉【MAD】（无战斗场景）",dm:"153"},
                {pic:"http://i0.hdslb.com/bfs/archive/69684dc0ebd1bb10ee20d4653f008b8030a4b3c6.jpg_320x200.jpg",up:"だれ?",play:"4254",title:"【BGM音萌系】变态王子与不笑猫",dm:"5133"},
                {pic:"http://i0.hdslb.com/320_200/video/e5/e597cef23c3c03b21905ac72bb8011ac.jpg",up:"だれ?",play:"452542",title:"【银魂】Can also meet again？",dm:"132"},
                {pic:"http://i0.hdslb.com/320_200/video/83/83d811d8617de009be6390da7befec30.jpg",up:"だれ?",play:"55254",title:"【剧场预告风】炽翼天使【进击的巨人】",dm:"20"}
            ],
            v:{
                title:"Vocaloid",
                data:[
                    {pic:"http://i0.hdslb.com/bfs/archive/6deb11ff3a4723f27fe7fc2ab393576c1812736f.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"周刊VOCALOID中文排行榜♪201",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/bfs/archive/21c95e0d4877fe9425d8137098de175674c9c572.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"周刊VOCALOID中文排行榜♪200",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/320_200/video/9d/9dc7a161243fe6a7378c22408ea7711d.jpg",up:"だれ?",play:"21045",title:"【人力vocaloid合作】圣地亚哥唱片2015金曲CD",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/bfs/archive/ddd104297302cc8399875e38c47bd638238426b9.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【洛天依】江南雨【VOCALOID原创曲】",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i2.hdslb.com/320_200/u_user/f8048d619e9244c5172013ea68072123.jpg",up:"だれ?",play:"21045",title:"【1 new】Vocaloid传说级名曲补完计划(10989L下载)",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/bfs/archive/835c446c88d7e130f52a57bc5a8608c25f99f761.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"週刊VOCALOID&amp;UTAURankin",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/bfs/archive/3f01a9b06dc99cab0940da69b421c71a7e960ec5.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"周刊VOCALOID中文排行榜♪199",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/bfs/archive/592a47bf9e7887c3e84c212f17490a08d95003db.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【全明星】【人力VOCALOID合作】《圣地亚哥慢歌王》专辑",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/320_200/video/fd/fdcd3bdac7f8d0a42524a5a08ef3da26.jpg",up:"だれ?",play:"21045",title:"【年榜】VOCALOID中文曲 2015",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/bfs/archive/cc07ae752b52a2e552a4ce952417bb4f36ff8b82.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"周刊VOCALOID中文排行榜♪198",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/bfs/archive/a7feab103121acde6289eb055752a3526e6aced1.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"週刊VOCALOID &amp; UTAU RANKING　#451・393",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/bfs/archive/173a7a9ffbd3ae7136e9c47ac6077274362e89d1.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【作业用BGM】The VOCALOID World Arrangement Vol.01【mp3配布】",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/bfs/archive/6908c46bbb3fdf7c22686a47e24d2536d54ec940.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"周刊VOCALOID中文排行榜♪197",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/bfs/archive/ccd79bc79b342f908af9725ebd0f47e9d44b99af.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【修正版】週刊VOCALOID&amp;UTAU RANKING #449・391",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/bfs/archive/41cf04859c6a419f44f852c77a149820289210ee.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"周刊VOCALOID中文排行榜♪196",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i1.hdslb.com/320_200/video/05/050c899bfd886f96f4643858bbd03186.jpg",up:"だれ?",play:"21045",title:"【鏡音リン】孟姜女【VOCALOID原创曲】",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/bfs/archive/b41ac6e6d8b8f3ac8139c3c35f12d280c8ec44a1.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"周刊VOCALOID中文排行榜♪195",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/bfs/archive/e51a40800ee9479a8f4bbceba1a474f63521cc52.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"周刊VOCALOID中文排行榜♪194",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i1.hdslb.com/320_200/video/4f/4f0d801f0e00d7eaff6afcfde836b605.jpg",up:"だれ?",play:"21045",title:"【GYARI（ココアシガレットP）】这些VOCALOID们只是重复着“Tetteyterettey”",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/320_200/video/6e/6ef8c115fd11dac43f6d25170d294953.jpg",up:"だれ?",play:"21045",title:"NicoNico超Party 2015~VOCALOID/UTAU~部分",dm:"501",con:"简介被不明生物吞了？"}
                ]
            },
            vRanking:[
                {pic:"http://i0.hdslb.com/bfs/archive/6deb11ff3a4723f27fe7fc2ab393576c1812736f.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"周刊VOCALOID中文排行榜♪201",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/archive/21c95e0d4877fe9425d8137098de175674c9c572.jpg_320x200.jpg",up:"だれ?",play:"1537",title:"周刊VOCALOID中文排行榜♪200",dm:"554"},
                {pic:"http://i0.hdslb.com/320_200/video/9d/9dc7a161243fe6a7378c22408ea7711d.jpg",up:"だれ?",play:"2545",title:"周刊VOCALOID中文排行榜♪205",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/archive/659971f6f44d04dacbc36e13bf13fc8a26c56ae1.jpg_320x200.jpg",up:"だれ?",play:"5542345",title:"【刹那】初音未来的消失",dm:"1277"},
                {pic:"http://i0.hdslb.com/320_200/video/83/83d811d8617de009be6390da7befec30.jpg",up:"だれ?",play:"55254",title:"【剧场预告风】炽翼天使【进击的巨人】",dm:"20"},
                {pic:"http://i1.hdslb.com/bfs/archive/50166f2bae3de9cab35ebf55c06eca0816b0d703.jpg_320x200.jpg",up:"だれ?",play:"222",title:"【多素材AMV】再见了，我最最喜欢的你",dm:"284"},
                {pic:"http://i0.hdslb.com/320_200/video/81/8199f3677414f70c49738298f2700ea1.jpg",up:"だれ?",play:"45245",title:"【深爱】黑粉【MAD】（无战斗场景）",dm:"153"},
                {pic:"http://i0.hdslb.com/bfs/archive/69684dc0ebd1bb10ee20d4653f008b8030a4b3c6.jpg_320x200.jpg",up:"だれ?",play:"4254",title:"【BGM音萌系】变态王子与不笑猫",dm:"5133"},
                {pic:"http://i0.hdslb.com/320_200/video/e5/e597cef23c3c03b21905ac72bb8011ac.jpg",up:"だれ?",play:"452542",title:"【银魂】Can also meet again？",dm:"132"},
                {pic:"http://i0.hdslb.com/320_200/video/83/83d811d8617de009be6390da7befec30.jpg",up:"だれ?",play:"55254",title:"【剧场预告风】炽翼天使【进击的巨人】",dm:"20"}
            ]
        },
        cover:{
            label:["全部标签","日语翻唱","Nico男声","Nico女声","akatin","kejineko","Nico男","灯油","maji","limit","刚兵","mahumahu","特辑","亚沙","丁屋","和风乐团","铃华子","jin","kejineko1","Nico男1","灯油1","maji1","limit1","刚兵1","mahumah1u","特1辑","亚1沙","丁屋1","和风乐团1","铃华子2","jin2","jin3","和风乐团4","红婷婷"],
            new:{
                title:"最新动态",
                data:[
                    {pic:"http://i0.hdslb.com/160_100/video/61/61823aa29cbc7259b034a1c5f492b64a.jpg",up:"だれ?",play:"21045",title:"【ほるん】月光 / 鬼束千寻",dm:"501"},
                    {pic:"http://i2.hdslb.com/160_100/user/1389/138942/13173852998c4ef1d8fcd5f325.jpg",up:"だれ?",play:"1537",title:"【灯油】『千本桜』を歌わせて頂きました。",dm:"554"},
                    {pic:"http://i2.hdslb.com/160_100/u_f/185f77d1ef3a763b1f2ddfdb8e301b52.jpg",up:"だれ?",play:"2545",title:"【激燃合唱】虚无光阴的回忆【-6人-】",dm:"501"},
                    {pic:"http://i2.hdslb.com/160_100/u_f/f143868f4a8ac773d01814170253f9f9.jpeg",up:"だれ?",play:"5542345",title:"【きじねこ】献给空想少女的情书",dm:"1277"},
                    {pic:"http://i2.hdslb.com/160_100/u_f/00ead07eec838e66621149e71013a84e.jpg",up:"だれ?",play:"55254",title:"【きじねこ】夜咄DECEIVE",dm:"20"}
                ]
            },
            ranking:[
                {pic:"http://i0.hdslb.com/160_100/u_f/c94fbbfdd6959e741248b352cf0161e9.jpg",up:"だれ?",play:"21045",title:"【電池切れｘかましょ】文乃的幸福理論",dm:"501"},
                {pic:"http://i2.hdslb.com/160_100/u_f/dc27cb6cfc331397ec00b3a90d562be6.jpg",up:"だれ?",play:"1537",title:"【灯油】Orange",dm:"554"},
                {pic:"http://i0.hdslb.com/160_100/u_f/78e42569dbd65091052f13e9e287bc8a.jpg",up:"だれ?",play:"2545",title:"【赤ティン】Orange",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/archive/659971f6f44d04dacbc36e13bf13fc8a26c56ae1.jpg_320x200.jpg",up:"だれ?",play:"5542345",title:"【僕街/MAD】只有我看见了，你的故事 / Last Revival",dm:"1277"},
                {pic:"http://i0.hdslb.com/320_200/video/83/83d811d8617de009be6390da7befec30.jpg",up:"だれ?",play:"55254",title:"【剧场预告风】炽翼天使【进击的巨人】",dm:"20"},
                {pic:"http://i1.hdslb.com/bfs/archive/50166f2bae3de9cab35ebf55c06eca0816b0d703.jpg_320x200.jpg",up:"だれ?",play:"222",title:"【多素材AMV】再见了，我最最喜欢的你",dm:"284"},
                {pic:"http://i0.hdslb.com/320_200/video/81/8199f3677414f70c49738298f2700ea1.jpg",up:"だれ?",play:"45245",title:"【深爱】黑粉【MAD】（无战斗场景）",dm:"153"},
                {pic:"http://i2.hdslb.com/bfs/archive/75bb1fc5c5912234e3b80d17a1a191aab476d528.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"盘点B站最受欢迎的动画女声优",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/archive/2228bf71452939f252f11675d99f0ee8e4dafdf1.jpg_320x200.jpg",up:"だれ?",play:"1537",title:"【东方MMD】战斗?of?红魔馆Ⅱ 前篇【强烈推荐】",dm:"554"},
                {pic:"http://i1.hdslb.com/bfs/archive/5cce2e1a6788df12315ab6c9f1b01686a6e09571.jpg_320x200.jpg",up:"だれ?",play:"2545",title:"【藏雅/误解AMV】back to december",dm:"501"}
            ],
            mainList:{
                title:"最新动态",
                data:[
                    {pic:"http://i2.hdslb.com/320_200/u_user/c92e47315cd98707866dd65b6cda1a55.jpg",up:"だれ?",play:"21045",title:"【作业BGM】NICO唱见路人转粉系列翻唱选集",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i1.hdslb.com/320_200/u_user/06db8600fcc1a59c41345ed967aeac8c.jpg",up:"だれ?",play:"21045",title:"nico唱见人气排行榜",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i1.hdslb.com/320_200/u_f/73fab5b047a81f8fc6f286423aa70b5c.jpg",up:"だれ?",play:"21045",title:"现场唱功很差的NICO唱见",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/320_200/video/b9/b9879bebc1e169f1d7bab357d54ae55a.jpg",up:"だれ?",play:"21045",title:"【腐向】色气满满小黄歌—nico唱见新社会人【娇喘】",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/320_200/u_f/0a18b56d5dd795966dd7f6bee58cb628.jpg",up:"だれ?",play:"21045",title:"nico唱见起床铃系列",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/320_200/u_f/44756178a1062d26c39a0f19e91f5d4e.jpg",up:"だれ?",play:"21045",title:"http://i0.hdslb.com/320_200/u_f/44756178a1062d26c39a0f19e91f5d4e.jpg",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/320_200/u_f/d1dcae588a2c4f0e943c66f852058687.jpg",up:"だれ?",play:"21045",title:"NICO唱见人气度TOP100【VOCALOID曲限定】",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i2.hdslb.com/320_200/u_user/e3edc39dfbd3b8695f261031b1326b4c.jpg",up:"だれ?",play:"21045",title:"【作业BGM】NICO名唱见路人转粉系列翻唱选第三弹",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/320_200/u_f/a642bf8ccf9daaaffad9eea79bbc69ff.jpg",up:"だれ?",play:"21045",title:"【合集】Nico名唱见动漫歌曲翻唱巡回2012",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/320_200/video/8f/8f59d0fbfd5d6db7e439f346ef3b5f9e.jpg",up:"だれ?",play:"21045",title:"【听歌向】nico的唱见不可能辣么可爱【我喜欢的女声都不是开口跪（十二）】",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i2.hdslb.com/320_200/video/25/25b478727418545130b782c6e132964d.jpg",up:"だれ?",play:"21045",title:"【nico唱见靴子しゅーず叙述解说】歌本 11月 2015動画",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i2.hdslb.com/320_200/user/1869/186935/1326163519e2189124fdd8f467.jpg",up:"だれ?",play:"21045",title:"nico名唱见性别转换合集",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i1.hdslb.com/320_200/u_f/ae2c85ff24fd609c00570c8ddbab74ff.jpg",up:"だれ?",play:"21045",title:"NICO唱见歌手与日本专业歌手唱功对比",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/320_200/u_user/f7f734b4fa7d6396872d77caa8bd2073.jpg",up:"だれ?",play:"21045",title:"【2014年】nico唱见人气度排行【TOP50（VOCALOID曲限定）】",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i2.hdslb.com/320_200/u_f/99c87a248b2d2daaef48dd6804671819.jpg",up:"だれ?",play:"21045",title:"【作业BGM】NICO唱见路人转粉系列选第五弹【合唱】",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/320_200/u_f/2e0334732fd69390879da2f6a161a34f.jpg",up:"だれ?",play:"21045",title:"【新榜单】NICO动画唱见人气排行TOP100",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i2.hdslb.com/320_200/video/8d/8dccd0beb954b57edd38160da7ea4ebb.jpg",up:"だれ?",play:"21045",title:"【考古/黑历史向】NICO唱见们初投稿整理（不定期更新）",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i1.hdslb.com/320_200/u_user/bd61e03b00592b32ed58803f432ec0eb.jpg",up:"だれ?",play:"21045",title:"【作业BGM】NICO唱见路人转粉翻唱选第四弹【主冷门向】",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/bfs/archive/f65230e40520337ed11e5cefc854b5bd9f5a2504.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【听歌向】NICO唱见akatin红婷婷10首最好听的歌曲，有乖有熊",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i2.hdslb.com/320_200/u_f/5be301cfc0d18da50db51de247db3c36.jpg",up:"だれ?",play:"21045",title:"【高音系男子注意】NICO男性唱见音域大调查",dm:"501",con:"简介被不明生物吞了？"}
                ]
            }
        },
        v:{
            label:["全部标签","日语翻唱","Nico男声","Nico女声","akatin","kejineko","Nico男","灯油","maji","limit","刚兵","mahumahu","特辑","亚沙","丁屋","和风乐团","铃华子","jin","kejineko1","Nico男1","灯油1","maji1","limit1","刚兵1","mahumah1u","特1辑","亚1沙","丁屋1","和风乐团1","铃华子2","jin2","jin3","和风乐团4","红婷婷"],
            new:{
                title:"最新动态",
                data:[
                    {pic:"http://i0.hdslb.com/bfs/archive/6deb11ff3a4723f27fe7fc2ab393576c1812736f.jpg_160x100.jpg",up:"だれ?",play:"21045",title:"周刊VOCALOID中文排行榜♪201",dm:"501"},
                    {pic:"http://i0.hdslb.com/bfs/archive/21c95e0d4877fe9425d8137098de175674c9c572.jpg_160x100.jpg",up:"だれ?",play:"1537",title:"周刊VOCALOID中文排行榜♪200",dm:"554"},
                    {pic:"http://i0.hdslb.com/bfs/archive/3f01a9b06dc99cab0940da69b421c71a7e960ec5.jpg_160x100.jpg",up:"だれ?",play:"2545",title:"周刊VOCALOID中文排行榜♪199",dm:"501"},
                    {pic:"http://i0.hdslb.com/bfs/archive/67ac5dc718edd64b7cea7d5ad8fac6d4432045ed.jpg_160x100.jpg",up:"だれ?",play:"5542345",title:"周刊VOCALOID中文排行榜♪198",dm:"1277"},
                    {pic:"http://i0.hdslb.com/bfs/archive/6908c46bbb3fdf7c22686a47e24d2536d54ec940.jpg_160x100.jpg",up:"だれ?",play:"55254",title:"周刊VOCALOID中文排行榜♪197",dm:"20"}
                ]
            },
            ranking:[
                {pic:"http://i0.hdslb.com/bfs/archive/3d6a0d3b57927ac48907f449ec746cc3fb9623c4.jpg_160x100.jpg",up:"だれ?",play:"21045",title:"周刊VOCALOID中文排行榜♪190",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/archive/e25fe57be9ab56f07196ef79fb6cc481bfcb41e0.jpg_160x100.jpg",up:"だれ?",play:"1537",title:"周刊VOCALOID中文排行榜♪189",dm:"554"},
                {pic:"http://i0.hdslb.com/bfs/archive/67ac5dc718edd64b7cea7d5ad8fac6d4432045ed.jpg_160x100.jpg",up:"だれ?",play:"2545",title:"周刊VOCALOID中文排行榜♪188",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/archive/659971f6f44d04dacbc36e13bf13fc8a26c56ae1.jpg_320x200.jpg",up:"だれ?",play:"5542345",title:"【僕街/MAD】只有我看见了，你的故事 / Last Revival",dm:"1277"},
                {pic:"http://i0.hdslb.com/320_200/video/83/83d811d8617de009be6390da7befec30.jpg",up:"だれ?",play:"55254",title:"【剧场预告风】炽翼天使【进击的巨人】",dm:"20"},
                {pic:"http://i1.hdslb.com/bfs/archive/50166f2bae3de9cab35ebf55c06eca0816b0d703.jpg_320x200.jpg",up:"だれ?",play:"222",title:"【多素材AMV】再见了，我最最喜欢的你",dm:"284"},
                {pic:"http://i0.hdslb.com/320_200/video/81/8199f3677414f70c49738298f2700ea1.jpg",up:"だれ?",play:"45245",title:"【深爱】黑粉【MAD】（无战斗场景）",dm:"153"},
                {pic:"http://i2.hdslb.com/bfs/archive/75bb1fc5c5912234e3b80d17a1a191aab476d528.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"盘点B站最受欢迎的动画女声优",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/archive/2228bf71452939f252f11675d99f0ee8e4dafdf1.jpg_320x200.jpg",up:"だれ?",play:"1537",title:"【东方MMD】战斗?of?红魔馆Ⅱ 前篇【强烈推荐】",dm:"554"},
                {pic:"http://i1.hdslb.com/bfs/archive/5cce2e1a6788df12315ab6c9f1b01686a6e09571.jpg_320x200.jpg",up:"だれ?",play:"2545",title:"【藏雅/误解AMV】back to december",dm:"501"}
            ],
            mainList:{
                title:"最新动态",
                data:[
                    {pic:"http://i0.hdslb.com/bfs/archive/6deb11ff3a4723f27fe7fc2ab393576c1812736f.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"周刊VOCALOID中文排行榜♪201",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/bfs/archive/21c95e0d4877fe9425d8137098de175674c9c572.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"周刊VOCALOID中文排行榜♪200",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/320_200/video/9d/9dc7a161243fe6a7378c22408ea7711d.jpg",up:"だれ?",play:"21045",title:"【人力vocaloid合作】圣地亚哥唱片2015金曲CD",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/bfs/archive/ddd104297302cc8399875e38c47bd638238426b9.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【洛天依】江南雨【VOCALOID原创曲】",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i2.hdslb.com/320_200/u_user/f8048d619e9244c5172013ea68072123.jpg",up:"だれ?",play:"21045",title:"【1 new】Vocaloid传说级名曲补完计划(10989L下载)",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/bfs/archive/835c446c88d7e130f52a57bc5a8608c25f99f761.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"週刊VOCALOID&amp;UTAURankin",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/bfs/archive/3f01a9b06dc99cab0940da69b421c71a7e960ec5.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"周刊VOCALOID中文排行榜♪199",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/bfs/archive/592a47bf9e7887c3e84c212f17490a08d95003db.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【全明星】【人力VOCALOID合作】《圣地亚哥慢歌王》专辑",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/320_200/video/fd/fdcd3bdac7f8d0a42524a5a08ef3da26.jpg",up:"だれ?",play:"21045",title:"【年榜】VOCALOID中文曲 2015",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/bfs/archive/cc07ae752b52a2e552a4ce952417bb4f36ff8b82.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"周刊VOCALOID中文排行榜♪198",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/bfs/archive/a7feab103121acde6289eb055752a3526e6aced1.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"週刊VOCALOID &amp; UTAU RANKING　#451・393",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/bfs/archive/173a7a9ffbd3ae7136e9c47ac6077274362e89d1.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【作业用BGM】The VOCALOID World Arrangement Vol.01【mp3配布】",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/bfs/archive/6908c46bbb3fdf7c22686a47e24d2536d54ec940.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"周刊VOCALOID中文排行榜♪197",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/bfs/archive/ccd79bc79b342f908af9725ebd0f47e9d44b99af.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"【修正版】週刊VOCALOID&amp;UTAU RANKING #449・391",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/bfs/archive/41cf04859c6a419f44f852c77a149820289210ee.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"周刊VOCALOID中文排行榜♪196",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i1.hdslb.com/320_200/video/05/050c899bfd886f96f4643858bbd03186.jpg",up:"だれ?",play:"21045",title:"【鏡音リン】孟姜女【VOCALOID原创曲】",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/bfs/archive/b41ac6e6d8b8f3ac8139c3c35f12d280c8ec44a1.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"周刊VOCALOID中文排行榜♪195",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/bfs/archive/e51a40800ee9479a8f4bbceba1a474f63521cc52.jpg_320x200.jpg",up:"だれ?",play:"21045",title:"周刊VOCALOID中文排行榜♪194",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i1.hdslb.com/320_200/video/4f/4f0d801f0e00d7eaff6afcfde836b605.jpg",up:"だれ?",play:"21045",title:"【GYARI（ココアシガレットP）】这些VOCALOID们只是重复着“Tetteyterettey”",dm:"501",con:"简介被不明生物吞了？"},
                    {pic:"http://i0.hdslb.com/320_200/video/6e/6ef8c115fd11dac43f6d25170d294953.jpg",up:"だれ?",play:"21045",title:"NicoNico超Party 2015~VOCALOID/UTAU~部分",dm:"501",con:"简介被不明生物吞了？"}

                ]
            }
        }
    };
    this.ajaxData = function(){
        $http({
            url:d+"?name=sliderHome",
            method:'GET'
        }).success(function(data){

        })
    }
});

m1.service('public',function($http){
    var self = this;
    this.data={
        newAnimate:{
            new:[
                {pic:"http://i0.hdslb.com/bfs/bangumi/16310b7d56e20f1e15822cb99097175808a239b5.jpg",up:"だれ?",play:"4",title:"火星异种 REVENGE",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/bangumi/e8b014ac131db47b267d1ac3a04417267ec857a6.jpg",up:"だれ?",play:"5",title:"迷家",dm:"554"},
                {pic:"http://i0.hdslb.com/bfs/bangumi/84529c2b8a872209ada6768c3bddb0ef31d7ae85.jpg",up:"だれ?",play:"8",title:"魔笛MAGI 辛巴达的冒险",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/bangumi/f8d11b31e6756ba356c5ab39f549b1ceca611a37.jpg",up:"だれ?",play:"2",title:"影鳄 承",dm:"1277"},
                {pic:"http://i0.hdslb.com/bfs/bangumi/6a2f11cc8674281eb235095b7707a5476b1a1b4e.jpg",up:"だれ?",play:"1",title:"宇宙巡警露露子",dm:"20"},
                {pic:"http://i0.hdslb.com/bfs/bangumi/065d59b6c646ac5397a9aed384dc9a776361bcc7.jpg",up:"だれ?",play:"9",title:"镇魂街",dm:"284"},
                {pic:"http://i0.hdslb.com/bfs/bangumi/6cd2975b28bb7bc0866cfe748aa172e0776bbebb.jpg",up:"だれ?",play:"9",title:"勇者大冒险 第二季",dm:"153"},
                {pic:"http://i0.hdslb.com/bfs/bangumi/a5cc873ffd3765472c1e7444962aafeed4e71f73.jpg",up:"だれ?",play:"7",title:"在下坂本，有何贵干？",dm:"153"},
                {pic:"http://i0.hdslb.com/bfs/bangumi/56778dffcbfd2c2481012689db97105a6d14a14e.jpg",up:"だれ?",play:"2",title:"黑色残骸",dm:"153"},
                {pic:"http://i0.hdslb.com/sp/19/19d92659f69c03bc7dadef740d15625b.jpg",up:"だれ?",play:"2",title:"恐怖！僵尸猫",dm:"153"},
                {pic:"http://i0.hdslb.com/sp/19/19d92659f69c03bc7dadef740d15625b.jpg",up:"だれ?",play:"9",title:"线上游戏的老婆不可能是女生？",dm:"153"},
                {pic:"http://i0.hdslb.com/bfs/bangumi/d3daba3fd0771e3c295bbcc61d4bad3f80a4fe47.jpg",up:"11?",play:"45245",title:"Anne Happy",dm:"153"},
                {pic:"http://i0.hdslb.com/bfs/bangumi/d3daba3fd0771e3c295bbcc61d4bad3f80a4fe47.jpg",up:"11?",play:"45245",title:"Anne Happy",dm:"153"},
                {pic:"http://i0.hdslb.com/bfs/bangumi/d3daba3fd0771e3c295bbcc61d4bad3f80a4fe47.jpg",up:"11?",play:"45245",title:"Anne Happy",dm:"153"},
                {pic:"http://i0.hdslb.com/bfs/bangumi/d3daba3fd0771e3c295bbcc61d4bad3f80a4fe47.jpg",up:"11?",play:"45245",title:"Anne Happy",dm:"153"},
                {pic:"http://i0.hdslb.com/bfs/bangumi/16310b7d56e20f1e15822cb99097175808a239b5.jpg",up:"だれ?",play:"4",title:"火星异种 REVENGE",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/bangumi/e8b014ac131db47b267d1ac3a04417267ec857a6.jpg",up:"だれ?",play:"5",title:"迷家",dm:"554"},
                {pic:"http://i0.hdslb.com/bfs/bangumi/84529c2b8a872209ada6768c3bddb0ef31d7ae85.jpg",up:"だれ?",play:"8",title:"魔笛MAGI 辛巴达的冒险",dm:"501"},
                {pic:"http://i0.hdslb.com/bfs/bangumi/f8d11b31e6756ba356c5ab39f549b1ceca611a37.jpg",up:"だれ?",play:"2",title:"影鳄 承",dm:"1277"},
                {pic:"http://i0.hdslb.com/bfs/bangumi/6a2f11cc8674281eb235095b7707a5476b1a1b4e.jpg",up:"だれ?",play:"1",title:"宇宙巡警露露子",dm:"20"},
                {pic:"http://i0.hdslb.com/bfs/bangumi/065d59b6c646ac5397a9aed384dc9a776361bcc7.jpg",up:"だれ?",play:"9",title:"镇魂街",dm:"284"},
                {pic:"http://i0.hdslb.com/bfs/bangumi/6cd2975b28bb7bc0866cfe748aa172e0776bbebb.jpg",up:"だれ?",play:"9",title:"勇者大冒险 第二季",dm:"153"},
                {pic:"http://i0.hdslb.com/bfs/bangumi/a5cc873ffd3765472c1e7444962aafeed4e71f73.jpg",up:"だれ?",play:"7",title:"在下坂本，有何贵干？",dm:"153"},
                {pic:"http://i0.hdslb.com/bfs/bangumi/56778dffcbfd2c2481012689db97105a6d14a14e.jpg",up:"だれ?",play:"2",title:"黑色残骸",dm:"153"},
                {pic:"http://i0.hdslb.com/sp/19/19d92659f69c03bc7dadef740d15625b.jpg",up:"だれ?",play:"2",title:"恐怖！僵尸猫",dm:"153"},
                {pic:"http://i0.hdslb.com/sp/19/19d92659f69c03bc7dadef740d15625b.jpg",up:"だれ?",play:"9",title:"线上游戏的老婆不可能是女生？",dm:"153"},
                {pic:"http://i0.hdslb.com/bfs/bangumi/d3daba3fd0771e3c295bbcc61d4bad3f80a4fe47.jpg",up:"11?",play:"45245",title:"Anne Happy",dm:"153"},
                {pic:"http://i0.hdslb.com/bfs/bangumi/d3daba3fd0771e3c295bbcc61d4bad3f80a4fe47.jpg",up:"11?",play:"45245",title:"Anne Happy",dm:"153"},
                {pic:"http://i0.hdslb.com/bfs/bangumi/d3daba3fd0771e3c295bbcc61d4bad3f80a4fe47.jpg",up:"11?",play:"45245",title:"Anne Happy",dm:"153"},
                {pic:"http://i0.hdslb.com/bfs/bangumi/d3daba3fd0771e3c295bbcc61d4bad3f80a4fe47.jpg",up:"11?",play:"45245",title:"Anne Happy",dm:"153"}
            ],
            day:[
                [
                    {pic:"http://i0.hdslb.com/bfs/bangumi/16310b7d56e20f1e15822cb99097175808a239b5.jpg",up:"だれ?",play:"4",title:"火星异种 REVENGE",dm:"501"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/e8b014ac131db47b267d1ac3a04417267ec857a6.jpg",up:"だれ?",play:"5",title:"迷家",dm:"554"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/84529c2b8a872209ada6768c3bddb0ef31d7ae85.jpg",up:"だれ?",play:"8",title:"魔笛MAGI 辛巴达的冒险",dm:"501"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/f8d11b31e6756ba356c5ab39f549b1ceca611a37.jpg",up:"だれ?",play:"2",title:"影鳄 承",dm:"1277"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/6a2f11cc8674281eb235095b7707a5476b1a1b4e.jpg",up:"だれ?",play:"1",title:"宇宙巡警露露子",dm:"20"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/065d59b6c646ac5397a9aed384dc9a776361bcc7.jpg",up:"だれ?",play:"9",title:"镇魂街",dm:"284"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/6cd2975b28bb7bc0866cfe748aa172e0776bbebb.jpg",up:"だれ?",play:"9",title:"勇者大冒险 第二季",dm:"153"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/a5cc873ffd3765472c1e7444962aafeed4e71f73.jpg",up:"だれ?",play:"7",title:"在下坂本，有何贵干？",dm:"153"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/56778dffcbfd2c2481012689db97105a6d14a14e.jpg",up:"だれ?",play:"2",title:"黑色残骸",dm:"153"},
                    {pic:"http://i0.hdslb.com/sp/19/19d92659f69c03bc7dadef740d15625b.jpg",up:"だれ?",play:"2",title:"恐怖！僵尸猫",dm:"153"},
                    {pic:"http://i0.hdslb.com/sp/19/19d92659f69c03bc7dadef740d15625b.jpg",up:"だれ?",play:"9",title:"线上游戏的老婆不可能是女生？",dm:"153"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/d3daba3fd0771e3c295bbcc61d4bad3f80a4fe47.jpg",up:"11?",play:"45245",title:"Anne Happy",dm:"153"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/d3daba3fd0771e3c295bbcc61d4bad3f80a4fe47.jpg",up:"11?",play:"45245",title:"Anne Happy",dm:"153"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/d3daba3fd0771e3c295bbcc61d4bad3f80a4fe47.jpg",up:"11?",play:"45245",title:"Anne Happy",dm:"153"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/d3daba3fd0771e3c295bbcc61d4bad3f80a4fe47.jpg",up:"11?",play:"45245",title:"Anne Happy",dm:"153"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/16310b7d56e20f1e15822cb99097175808a239b5.jpg",up:"だれ?",play:"4",title:"火星异种 REVENGE",dm:"501"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/e8b014ac131db47b267d1ac3a04417267ec857a6.jpg",up:"だれ?",play:"5",title:"迷家",dm:"554"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/84529c2b8a872209ada6768c3bddb0ef31d7ae85.jpg",up:"だれ?",play:"8",title:"魔笛MAGI 辛巴达的冒险",dm:"501"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/f8d11b31e6756ba356c5ab39f549b1ceca611a37.jpg",up:"だれ?",play:"2",title:"影鳄 承",dm:"1277"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/6a2f11cc8674281eb235095b7707a5476b1a1b4e.jpg",up:"だれ?",play:"1",title:"宇宙巡警露露子",dm:"20"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/065d59b6c646ac5397a9aed384dc9a776361bcc7.jpg",up:"だれ?",play:"9",title:"镇魂街",dm:"284"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/6cd2975b28bb7bc0866cfe748aa172e0776bbebb.jpg",up:"だれ?",play:"9",title:"勇者大冒险 第二季",dm:"153"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/a5cc873ffd3765472c1e7444962aafeed4e71f73.jpg",up:"だれ?",play:"7",title:"在下坂本，有何贵干？",dm:"153"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/56778dffcbfd2c2481012689db97105a6d14a14e.jpg",up:"だれ?",play:"2",title:"黑色残骸",dm:"153"},
                    {pic:"http://i0.hdslb.com/sp/19/19d92659f69c03bc7dadef740d15625b.jpg",up:"だれ?",play:"2",title:"恐怖！僵尸猫",dm:"153"},
                    {pic:"http://i0.hdslb.com/sp/19/19d92659f69c03bc7dadef740d15625b.jpg",up:"だれ?",play:"9",title:"线上游戏的老婆不可能是女生？",dm:"153"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/d3daba3fd0771e3c295bbcc61d4bad3f80a4fe47.jpg",up:"11?",play:"45245",title:"Anne Happy",dm:"153"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/d3daba3fd0771e3c295bbcc61d4bad3f80a4fe47.jpg",up:"11?",play:"45245",title:"Anne Happy",dm:"153"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/d3daba3fd0771e3c295bbcc61d4bad3f80a4fe47.jpg",up:"11?",play:"45245",title:"Anne Happy",dm:"153"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/d3daba3fd0771e3c295bbcc61d4bad3f80a4fe47.jpg",up:"11?",play:"45245",title:"Anne Happy",dm:"153"}

                ],
                [
                    {pic:"http://i0.hdslb.com/bfs/bangumi/16310b7d56e20f1e15822cb99097175808a239b5.jpg",up:"だれ?",play:"4",title:"火星异种 REVENGE周二",dm:"501"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/e8b014ac131db47b267d1ac3a04417267ec857a6.jpg",up:"だれ?",play:"5",title:"迷家周二",dm:"554"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/84529c2b8a872209ada6768c3bddb0ef31d7ae85.jpg",up:"だれ?",play:"8",title:"魔笛MAGI 辛巴达的冒险周二",dm:"501"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/f8d11b31e6756ba356c5ab39f549b1ceca611a37.jpg",up:"だれ?",play:"2",title:"影鳄 承周二",dm:"1277"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/6a2f11cc8674281eb235095b7707a5476b1a1b4e.jpg",up:"だれ?",play:"1",title:"宇宙巡警露露子周二",dm:"20"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/065d59b6c646ac5397a9aed384dc9a776361bcc7.jpg",up:"だれ?",play:"9",title:"镇魂街周二",dm:"284"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/6cd2975b28bb7bc0866cfe748aa172e0776bbebb.jpg",up:"だれ?",play:"9",title:"勇者大冒险 第二季周二",dm:"153"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/a5cc873ffd3765472c1e7444962aafeed4e71f73.jpg",up:"だれ?",play:"7",title:"在下坂本，有何贵干？周二",dm:"153"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/56778dffcbfd2c2481012689db97105a6d14a14e.jpg",up:"だれ?",play:"2",title:"黑色残骸周二",dm:"153"},
                    {pic:"http://i0.hdslb.com/sp/19/19d92659f69c03bc7dadef740d15625b.jpg",up:"だれ?",play:"2",title:"恐怖！僵尸猫周二",dm:"153"}

                ],
                [
                    {pic:"http://i0.hdslb.com/bfs/bangumi/16310b7d56e20f1e15822cb99097175808a239b5.jpg",up:"だれ?",play:"4",title:"火星异种 REVENGE周三",dm:"501"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/e8b014ac131db47b267d1ac3a04417267ec857a6.jpg",up:"だれ?",play:"5",title:"迷家周三",dm:"554"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/84529c2b8a872209ada6768c3bddb0ef31d7ae85.jpg",up:"だれ?",play:"8",title:"魔笛MAGI 辛巴达的冒险周三",dm:"501"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/f8d11b31e6756ba356c5ab39f549b1ceca611a37.jpg",up:"だれ?",play:"2",title:"影鳄 承周三",dm:"1277"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/6a2f11cc8674281eb235095b7707a5476b1a1b4e.jpg",up:"だれ?",play:"1",title:"宇宙巡警露露子周三",dm:"20"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/065d59b6c646ac5397a9aed384dc9a776361bcc7.jpg",up:"だれ?",play:"9",title:"镇魂街周三",dm:"284"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/6cd2975b28bb7bc0866cfe748aa172e0776bbebb.jpg",up:"だれ?",play:"9",title:"勇者大冒险 第二季周三",dm:"153"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/a5cc873ffd3765472c1e7444962aafeed4e71f73.jpg",up:"だれ?",play:"7",title:"在下坂本，有何贵干周三？",dm:"153"}

                ],
                [
                    {pic:"http://i0.hdslb.com/bfs/bangumi/16310b7d56e20f1e15822cb99097175808a239b5.jpg",up:"だれ?",play:"4",title:"火星异种 REVENGE周四",dm:"501"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/e8b014ac131db47b267d1ac3a04417267ec857a6.jpg",up:"だれ?",play:"5",title:"迷家周四",dm:"554"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/84529c2b8a872209ada6768c3bddb0ef31d7ae85.jpg",up:"だれ?",play:"8",title:"魔笛MAGI 辛巴达的冒险周四",dm:"501"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/f8d11b31e6756ba356c5ab39f549b1ceca611a37.jpg",up:"だれ?",play:"2",title:"影鳄 承周四",dm:"1277"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/6a2f11cc8674281eb235095b7707a5476b1a1b4e.jpg",up:"だれ?",play:"1",title:"宇宙巡警露露子周四",dm:"20"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/065d59b6c646ac5397a9aed384dc9a776361bcc7.jpg",up:"だれ?",play:"9",title:"镇魂街周四",dm:"284"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/6cd2975b28bb7bc0866cfe748aa172e0776bbebb.jpg",up:"だれ?",play:"9",title:"勇者大冒险 第二季周四",dm:"153"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/a5cc873ffd3765472c1e7444962aafeed4e71f73.jpg",up:"だれ?",play:"7",title:"在下坂本，有何贵干周四？",dm:"153"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/56778dffcbfd2c2481012689db97105a6d14a14e.jpg",up:"だれ?",play:"2",title:"黑色残骸周四",dm:"153"},
                    {pic:"http://i0.hdslb.com/sp/19/19d92659f69c03bc7dadef740d15625b.jpg",up:"だれ?",play:"2",title:"恐怖！僵尸猫周四",dm:"153"}

                ],
                [
                    {pic:"http://i0.hdslb.com/bfs/bangumi/16310b7d56e20f1e15822cb99097175808a239b5.jpg",up:"だれ?",play:"4",title:"火星异种 REVENGE周五",dm:"501"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/e8b014ac131db47b267d1ac3a04417267ec857a6.jpg",up:"だれ?",play:"5",title:"迷家周五",dm:"554"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/84529c2b8a872209ada6768c3bddb0ef31d7ae85.jpg",up:"だれ?",play:"8",title:"魔笛MAGI 辛巴达的冒险周五",dm:"501"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/f8d11b31e6756ba356c5ab39f549b1ceca611a37.jpg",up:"だれ?",play:"2",title:"影鳄 承周五",dm:"1277"}

                ],
                [
                    {pic:"http://i0.hdslb.com/bfs/bangumi/16310b7d56e20f1e15822cb99097175808a239b5.jpg",up:"だれ?",play:"4",title:"火星异种 REVENGE周六",dm:"501"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/e8b014ac131db47b267d1ac3a04417267ec857a6.jpg",up:"だれ?",play:"5",title:"迷家周六",dm:"554"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/84529c2b8a872209ada6768c3bddb0ef31d7ae85.jpg",up:"だれ?",play:"8",title:"魔笛MAGI 辛巴达的冒险周六",dm:"501"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/f8d11b31e6756ba356c5ab39f549b1ceca611a37.jpg",up:"だれ?",play:"2",title:"影鳄 承周六",dm:"1277"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/6a2f11cc8674281eb235095b7707a5476b1a1b4e.jpg",up:"だれ?",play:"1",title:"宇宙巡警露露子周六",dm:"20"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/065d59b6c646ac5397a9aed384dc9a776361bcc7.jpg",up:"だれ?",play:"9",title:"镇魂街周六",dm:"284"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/6cd2975b28bb7bc0866cfe748aa172e0776bbebb.jpg",up:"だれ?",play:"9",title:"勇者大冒险 第二季周六",dm:"153"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/a5cc873ffd3765472c1e7444962aafeed4e71f73.jpg",up:"だれ?",play:"7",title:"在下坂本，有何贵干周六？",dm:"153"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/56778dffcbfd2c2481012689db97105a6d14a14e.jpg",up:"だれ?",play:"2",title:"黑色残骸周六",dm:"153"},
                    {pic:"http://i0.hdslb.com/sp/19/19d92659f69c03bc7dadef740d15625b.jpg",up:"だれ?",play:"2",title:"恐怖！僵尸猫周六",dm:"153"}

                ],
                [
                    {pic:"http://i0.hdslb.com/bfs/bangumi/16310b7d56e20f1e15822cb99097175808a239b5.jpg",up:"だれ?",play:"4",title:"火星异种 REVENGE周日",dm:"501"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/e8b014ac131db47b267d1ac3a04417267ec857a6.jpg",up:"だれ?",play:"5",title:"迷周日",dm:"554"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/84529c2b8a872209ada6768c3bddb0ef31d7ae85.jpg",up:"だれ?",play:"8",title:"魔笛MAGI 辛巴达的冒险周日",dm:"501"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/f8d11b31e6756ba356c5ab39f549b1ceca611a37.jpg",up:"だれ?",play:"2",title:"影鳄 承周日",dm:"1277"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/6a2f11cc8674281eb235095b7707a5476b1a1b4e.jpg",up:"だれ?",play:"1",title:"宇宙巡警露露子周日",dm:"20"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/065d59b6c646ac5397a9aed384dc9a776361bcc7.jpg",up:"だれ?",play:"9",title:"镇魂街周日",dm:"284"},
                    {pic:"http://i0.hdslb.com/bfs/bangumi/6cd2975b28bb7bc0866cfe748aa172e0776bbebb.jpg",up:"だれ?",play:"9",title:"勇者大冒险 第二季周日",dm:"153"}

                ]
            ]
        }
    };
    this.ajaxData = function () {
        $http({
            url:d + "?name=sliderHome",
            method:'GET'
        }).success(function(data,header,config,status){

        }).error(function(data,header,config,status){

        });

    }
});

m1.factory('nav',function(){
    return[
        {title:"动画",list:{area:[{t:"MAD·AMV",link:"#MAD"},{t:"MMD·3D",link:"#MMD"}]},link:"#animate"},
        {title:"音乐",list:{area:[{t:"翻唱",link:"#cover"},{t:"Vocaloid",link:"#vocaloid"}]},link:"#music",name:"#music"},
        {title:"番剧",list:{area:[{t:"连载动画",link:"#continuity"},{t:"完结动画",link:"#end"}]},link:"#newAnimate"},
        {title:"舞蹈",list:{area:[{t:"宅舞",link:"javascript:void(expression)"},{t:"三次元舞蹈",link:"javascript:void(expression)"}]},link:"javascript:void(expression)"},
        {title:"游戏",list:{area:[{t:"单机",link:"javascript:void"},{t:"网游",link:"javascript:void"}]},link:"javascript:void"},
        {title:"科技",list:{area:[{t:"人文",link:"javascript:void"},{t:"纪录片",link:"javascript:void"}]},link:"javascript:void"},
        {title:"娱乐",list:{area:[{t:"搞笑",link:"javascript:void"},{t:"生活",link:"javascript:void"}]},link:"javascript:void"},
        {title:"鬼畜",list:{area:[{t:"鬼畜调教",link:"javascript:void"},{t:"音MAD",link:"javascript:void"},{t:"教程演示",link:"#"}]},link:"javascript:void"},
        {title:"电影",list:{area:[{t:"短片",link:"javascript:void"},{t:"欧美电影",link:"javascript:void"}]},link:"javascript:void"}
    ]
});

angular.module('myApp').config( [
    '$compileProvider',
    function( $compileProvider )
    {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|sms):/);
        // Angular v1.2 之前使用 $compileProvider.urlSanitizationWhitelist(...)
    }
]);
