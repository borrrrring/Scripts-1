{
  "id": "sunert.app.sub",
  "name": "Sunert 签到应用订阅",
  "author": "@Sunert",
  "icon": "https://avatars2.githubusercontent.com/u/47924389?s=460&u=5152f048a9e8aaa45102763a578172407c40fcc8&v=4",
  "repo": "https://github.com/Sunert/Scripts/tree/master",
  "apps": [
    {
      "id": "weibo",
      "name": "新浪微博",
      "keys": ["sy_payheader_wb", "sy_token_wb"],
      "author": "@sunert",
      "repo": "https://github.com/Sunert/Scripts/blob/master/Task/weibo.js",
      "icons": ["https://raw.githubusercontent.com/Orz-3/mini/master/weibo.png", "https://raw.githubusercontent.com/Orz-3/task/master/weibo.png"],
      "script": "https://github.com/Sunert/Scripts/raw/master/Task/weibo.js"
    },
    {
      "id": "youth",
      "name": "中青看点",
      "keys": ["youthheader_zq", "read_zq", "red_zq", "readtime_zq"],
      "author": "@sunert",
      "settings": [
        {
         "id": "notifytimes",
         "name": "通知频率 (点击查看设置说明)",
         "val": "",
         "type": "number",
         "desc": "设定通知频率，前三次为全部通知，之后转盘次数/设定频率整除时通知，如设置0为无通知，设置1为全部通知，设置其他数可整除余0时通知，默认值50"
         },
         {
          "id": "zqlogs",
          "name": "调试日志",
          "val": false,
          "type": "boolean",
          "desc": "调试日志开关，默认关闭"
         }
       ],
      "repo": "https://github.com/Sunert/Scripts/blob/master/Task/youth.js",
      "icons": ["https://raw.githubusercontent.com/Orz-3/mini/master/youth.png", "https://raw.githubusercontent.com/Orz-3/task/master/youth.png"],
      "script": "https://github.com/Sunert/Scripts/raw/master/Task/youth.js"
    },
    {
      "id": "youthGain",
      "name": "中青浏览赚",
      "keys": ["youth_start", "youth_end"],
      "author": "@sunert",
      "repo": "https://github.com/Sunert/Scripts/blob/master/Task/youth_gain.js",
      "icons": ["https://raw.githubusercontent.com/Orz-3/mini/master/youth.png", "https://raw.githubusercontent.com/Orz-3/task/master/youth.png"],
      "script": "https://github.com/Sunert/Scripts/raw/master/Task/youth_gain.js"
    },
    {
      "id": "dianshijia",
      "name": "电视家",
      "keys": ["sy_signheader_dsj", "drawal_dsj"],
      "author": "@sunert",
      "settings": [{
        "id": "REWARD",
        "name": "额外签到奖励",
        "val": "55",
        "type": "radios",
        "desc": "",
        "items": [{
          "key": "55",
          "label": "提现额度"
        }, {
          "key": "44",
          "label": "1天VIP"
        }, {
          "key": "42",
          "label": "1888金币"
       }]
      }],
      "repo": "https://github.com/Sunert/Scripts/blob/master/Task/dianshijia.js",
      "icons": ["https://raw.githubusercontent.com/Orz-3/mini/master/dianshijia.png", "https://raw.githubusercontent.com/Orz-3/task/master/dianshijia.png"],
      "script": "https://github.com/Sunert/Scripts/raw/master/Task/dianshijia.js"
    },
    {
      "id": "kuaishou",
      "name": "快手极速版",
      "keys": ["cookie_ks"],
      "author": "@sunert",
      "repo": "https://github.com/Sunert/Scripts/blob/master/Task/kuaishou.js",
      "icons": ["https://raw.githubusercontent.com/Orz-3/mini/master/kuaishou.png", "https://raw.githubusercontent.com/Orz-3/task/master/kuaishou.png"],
      "script": "https://github.com/Sunert/Scripts/raw/master/Task/kuaishou.js"
    },
    {
      "id": "sinanews",
      "name": "新浪新闻",
      "keys": ["sy_signurl_snews", "sy_info_snews", "sy_ck_snews", "sy_infoheader_snews"],
      "author": "@sunert",
      "repo": "https://github.com/Sunert/Scripts/blob/master/Task/sinanews.js",
      "icons": ["https://raw.githubusercontent.com/Orz-3/mini/master/sinanews.png", "https://raw.githubusercontent.com/Orz-3/task/master/sinanews.png"],
      "script": "https://github.com/Sunert/Scripts/raw/master/Task/sinanews.js"
    },
    {
      "id": "NOWLIVE",
      "name": "NOW直播",
      "keys": ["now_qq", "nowqq_cookie"],
      "author": "@sunert",
      "repo": "https://github.com/Sunert/Scripts/blob/master/Task/NOWLIVE.js",
      "icons": ["https://github.com/Sunert/ProxyConfig/raw/master/QuantumultX/Rules/Images/ICON/NOWLIVE_mini.png", "https://github.com/Sunert/ProxyConfig/raw/master/QuantumultX/Rules/Images/ICON/NOWLIVE.png"],
      "script": "https://github.com/Sunert/Scripts/raw/master/Task/NOWLIVE.js"
    },
    {
      "id": "chinatelecomEnquiry",
      "name": "电信套餐查询",
      "keys": ["china_telecom_authToken_10000", "china_telecom_cookie"],
      "settings": [
       {
        "id": "Mon",
        "name": "查询月份", 
        "val":  "2020-08", 
        "type": "month", 
        "desc": "填入账单月份，可查最近六个月，本月账单下月可查" 
         }
       ],
      "author": "@sunert",
      "repo": "https://github.com/Sunert/Scripts/blob/master/Task/telecomInfinity.js",
      "icons": ["https://raw.githubusercontent.com/Orz-3/mini/master/telecominfinty.png", "https://raw.githubusercontent.com/Orz-3/task/master/telecominfinty.png"],
      "script": "https://github.com/Sunert/Scripts/raw/master/Task/telecomInfinity.js"
    },
    {
      "id": "jddj",
      "name": "京东到家",
      "keys": ["sy_cookie_dj"],
      "author": "@sunert",
      "repo": "https://github.com/Sunert/Scripts/blob/master/Task/jddj.js",
      "icons": ["https://raw.githubusercontent.com/Orz-3/mini/master/jddj.png", "https://raw.githubusercontent.com/Orz-3/task/master/jddj.png"],
      "script": "https://raw.githubusercontent.com/Sunert/Scripts/master/Task/jddj.js"
    },
    {
      "id": "TVlist",
      "name": "电视预告",
      "keys": ["c"],
      "settings": [{ 
         "id": "c", 
         "name": "电视台", 
         "val": "cctv8", 
         "type": "text", 
         "desc": "请填写小写英文台标，示例: 北京: btv1 | 湖南: hunan | 浙江: zhejiang 河南: henan| 江苏: jiangsu|广东: guangdong 更多电视台请参加电视家网络列表" }],
      "author": "@sunert",
      "repo": "https://github.com/Sunert/Scripts/blob/master/Task/tvpreview.js",
      "icons": ["https://github.com/Sunert/ProxyConfig/raw/master/QuantumultX/Rules/Images/ICON/tvpreview_mini.png", "https://github.com/Sunert/ProxyConfig/raw/master/QuantumultX/Rules/Images/ICON/tvpreview.png"],
      "script": "https://github.com/Sunert/Scripts/raw/master/Task/tvpreview.js"
    },
    {
      "id": "moji",
      "name": "墨迹天气",
      "keys": ["city","citynum","cut","day_desc","hour_desc","index_desc"],
      "settings": [{ 
         "id": "city", 
         "name": "城市", 
         "val": "北京", 
         "type": "text", 
         "desc": "请填写中文地区"
         },
         {
          "id": "citynum",
          "name": "城市序号",
          "val": "",
          "type": "number",
          "placeholder": "默认1 (点击以展开说明)",
          "desc": "选择地区，请填写日志内冒号前的数字序号"
          },
          {
          "id": "cut",
          "name": "精简日志模式",
          "val": false,
          "type": "boolean",
          "desc": "显示详情描述，默认关闭日志"
          },
          {
          "id": "day_desc",
          "name": "每周天气",
          "val": true,
          "type": "boolean",
          "desc": "每周天气接口，可显示6天天气情况"
          },
          {
          "id": "hour_desc",
          "name": "小时天气",
          "val": false,
          "type": "boolean",
          "desc": "未来6小时天气情况"
          },
          {
          "id": "forty_desc",
          "name": "40天预告",
          "val": false,
          "type": "boolean",
          "desc": "未来40天天气预告"
          },
          {
          "id": "index_desc",
          "name": "生活指数",
          "val": true,
          "type": "boolean",
          "desc": "可显示生活指数情况"
         }],
      "author": "@sunert",
      "repo": "https://github.com/Sunert/Scripts/blob/master/Task/moji.js",
      "icons": ["https://github.com/Sunert/ProxyConfig/raw/master/QuantumultX/Rules/Images/ICON/moji_mini.png", "https://github.com/Sunert/ProxyConfig/raw/master/QuantumultX/Rules/Images/ICON/moji.png"],
      "script": "https://github.com/Sunert/Scripts/raw/master/Task/moji.js"
    },
    {
      "id": "jukan",
      "name": "聚看点",
      "keys": ["jukan_ck","jukan_body"],
      "author": "@sunert",
      "repo": "https://github.com/Sunert/Scripts/blob/master/Task/jukan.js",
       "settings": [
        {
          "id": "jukan_cash",
          "name": "提现金额",
          "val": "",
          "type": "number",
          "placeholder": "默认30 (点击以展开说明)",
          "desc": "仅允许填入数字，所选金额可见聚看点APP"
        },
        {
          "id": "jukan_name",
          "name": "微信真实姓名",
          "val": "",
          "type": "textarea",
          "placeholder": "填入微信真实姓名"
        }],
      "icons": ["https://github.com/Sunert/ProxyConfig/raw/master/QuantumultX/Rules/Images/ICON/jukan_mini.png", "https://github.com/Sunert/ProxyConfig/raw/master/QuantumultX/Rules/Images/ICON/jukan.png"],
      "script": "https://github.com/Sunert/Scripts/raw/master/Task/jukan.js"
    },
    {
      "id": "mydigit",
      "name": "数码之家",
      "keys": ["sign_mydigit"],
      "author": "@sunert",
      "repo": "https://github.com/Sunert/Scripts/blob/master/Task/mydigit.js",
      "icons": ["https://raw.githubusercontent.com/Orz-3/mini/master/mydigit.png", "https://raw.githubusercontent.com/Orz-3/task/master/mydigit.png"],
      "script": "https://github.com/Sunert/Scripts/raw/master/Task/mydigit.js"
    },
    {
      "id": "txnews",
      "name": "腾讯新闻",
      "keys": ["sy_signurl_txnews", "sy_cookie_txnews","video_txnews"],
      "author": "@sunert",
      "settings": [
        {
          "id": "notifynum",
          "name": "通知频率",
          "val": "",
          "type": "number",
          "placeholder": "默认50 (点击以展开说明)",
          "desc": "阅读篇数间隔通知开为1，常关为0(默认50篇)"
        },
        {
          "id": "delay",
          "name": "延迟时间(毫秒)",
          "val": "",
          "type": "number",
          "placeholder": "默认200 (点击以展开说明)",
          "desc": "接口延迟时间"
        }          
      ],
       "repo": "https://github.com/Sunert/Scripts/blob/master/Task/txnews.js",
       "icons": ["https://raw.githubusercontent.com/Orz-3/mini/master/txnews.png", "https://raw.githubusercontent.com/Orz-3/task/master/txnews.png"],
       "script": "https://github.com/Sunert/Scripts/raw/master/Task/txnews.js"
    },
    {
      "id": "jingxi",
      "name": "京喜",
      "keys": ["CookieJD", "CookieJD2"],
      "author": "@sunert",
      "repo": "https://github.com/Sunert/Scripts/blob/master/Task/jingxi.js",
      "icons": ["https://raw.githubusercontent.com/Orz-3/mini/master/jingxi.png", "https://raw.githubusercontent.com/Orz-3/task/master/jingxi.png"],
       "script": "https://github.com/Sunert/Scripts/raw/master/Task/jingxi.js"
    },
    {
      "id": "translate",
      "name": "谷歌翻译",
      "keys": [],
      "settings": [{ 
         "id": "word", 
         "name": "原文", 
         "val": "Hello World", 
         "type": "textarea", 
         "placeholder": "Hello World",
         "desc": "兼容中英文短语翻译，填入原文后手动运行" }],
      "author": "@sunert",
      "repo": "https://github.com/Sunert/Scripts/blob/master/Task/tvpreview.js",
      "icons": ["https://raw.githubusercontent.com/Orz-3/mini/master/translate.png", "https://raw.githubusercontent.com/Orz-3/task/master/translate.png"],
      "script": "https://github.com/Sunert/Scripts/raw/master/Task/translate.js"
    },
    {
      "id": "exchange rate",
      "name": "汇率换算",
      "keys": [],
      "settings": [
         { 
         "id": "froma", 
         "name": "使用币", 
         "val": "人民币", 
         "type": "text", 
         "desc": "填写中文币种,注意澳门元为澳门帕塔卡，香港元为港币，台湾为新台币"     
         },
         { 
         "id": "toex", 
         "name": "兑换币", 
         "val": "港币", 
         "type": "text", 
         "desc": "填写中文币种,注意澳门元为澳门帕塔卡，香港元为港币，台湾为新台币"     
         },
         { 
         "id": "numex", 
         "name": "兑换金额", 
         "val": "10", 
         "type": "number", 
         "desc": "填写数字"     
         }
        ],
      "author": "@sunert",
      "repo": "https://github.com/Sunert/Scripts/blob/master/Task/exchangeRate.js",
      "icons": ["https://raw.githubusercontent.com/Orz-3/mini/master/exchangerate.png", "https://raw.githubusercontent.com/Orz-3/task/master/exchangerate.png"],
      "script": "https://github.com/Sunert/Scripts/raw/master/Task/exchangeRate.js"
    },
    {
      "id": "trainquery",
      "name": "列车时刻",
      "keys": [],
      "settings": [
       {
         "id": "people",
         "name": "乘客类型",
         "val": "ADULT",
         "type": "radios",
         "desc": "成人/学生", 
         "items": [
            {
              "key": "ADULT",
              "label": "成人"
            },
            {
              "key": "0X00",
              "label": "学生"
            }]
         },
         { 
          "id": "left", 
          "name": "出发站点", 
          "val": "北京", 
          "type": "text", 
          "desc": "填入中文站点" 
         },
         { 
          "id": "end", 
          "name": "目的地", 
          "val": "上海", 
          "type": "text", 
          "desc": "填入中文站点" 
         },
         { 
          "id": "leavedate", 
          "name": "出发时间", 
          "val": "2020-08-15", 
          "type": "date", 
          "desc": "填入出发日期，请按照格式填写" 
         },
         { 
          "id": "setrain", 
          "name": "列车车次", 
          "val": "G5", 
          "type": "text", 
          "desc": "填入列车车次或者列车序号，列车序号请查看日志详情" 
         }
         ],
      "author": "@sunert",
      "repo": "https://github.com/Sunert/Scripts/blob/master/Task/trainquery.js",
      "icons": ["https://raw.githubusercontent.com/Orz-3/mini/master/12306.png", "https://raw.githubusercontent.com/Orz-3/task/master/12306.png"],
      "script": "https://github.com/Sunert/Scripts/raw/master/Task/trainquery.js"
    }
  ]
}
