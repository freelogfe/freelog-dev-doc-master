(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{385:function(t,v,_){"use strict";_.r(v);var n=_(46),s=Object(n.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[_("strong",[t._v("创建广告")]),t._v(" "),_("font",{attrs:{color:"blue"}},[_("strong",[t._v("/v2/activities/ads/create")])]),t._v(" "),_("strong",[t._v("POST")]),t._v(" "),_("strong",[t._v("JSON")])],1),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",[t._v("参数类型")]),t._v(" "),_("th",[t._v("参数描述")]),t._v(" "),_("th",[t._v("必选")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("place")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("1：首页，顶部公告栏 2：首页，右侧浮窗 3：浏览页，右侧Banner 4：发现页，顶部Banner")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("title")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("标题")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("startTime")]),t._v(" "),_("td",[t._v("Date")]),t._v(" "),_("td",[t._v("开始时间")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("limitTime")]),t._v(" "),_("td",[t._v("Date")]),t._v(" "),_("td",[t._v("结束时间")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("persist")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("是否永久，若此参数为true，将忽略掉开始、结束时间")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("cover")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("封面")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("linkActivityId")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("运营活动ID，若不为null，则忽略link字段，不会校验所填写的ID是否存在")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("link")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("链接，当linkActivityId为空时生效")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("priority")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("权重")]),t._v(" "),_("td",[t._v("是")])])])]),t._v(" "),_("p",[_("strong",[t._v("编辑广告")]),t._v(" "),_("font",{attrs:{color:"blue"}},[_("strong",[t._v("/v2/activities/ads/update")])]),t._v(" "),_("strong",[t._v("PUT")]),t._v(" "),_("strong",[t._v("JSON")])],1),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",[t._v("参数类型")]),t._v(" "),_("th",[t._v("参数描述")]),t._v(" "),_("th",[t._v("必选")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("_id")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("_id")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("place")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("1：首页，顶部公告栏 2：首页，右侧浮窗 3：浏览页，右侧Banner 4：发现页，顶部Banner")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("title")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("标题")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("startTime")]),t._v(" "),_("td",[t._v("Date")]),t._v(" "),_("td",[t._v("开始时间")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("limitTime")]),t._v(" "),_("td",[t._v("Date")]),t._v(" "),_("td",[t._v("结束时间")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("persist")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("是否永久，若此参数为true，将忽略掉开始、结束时间")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("cover")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("封面")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("linkActivityId")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("运营活动ID，若不为null，则忽略link字段，不会校验所填写的ID是否存在")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("link")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("链接，当linkActivityId为空时生效")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("priority")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("权重")]),t._v(" "),_("td",[t._v("是")])])])]),t._v(" "),_("p",[_("strong",[t._v("暂停/恢复")]),t._v(" "),_("font",{attrs:{color:"blue"}},[_("strong",[t._v("/v2/activities/ads/updateStatus")])]),t._v(" "),_("strong",[t._v("PUT")]),t._v(" "),_("strong",[t._v("JSON")])],1),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",[t._v("参数类型")]),t._v(" "),_("th",[t._v("参数描述")]),t._v(" "),_("th",[t._v("必选")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("_id")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("_id")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("status")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("1：已排期 2：投放中 3：已结束 4：已停用 （传入4表示暂停，传入其他或不传，将自动纠正为1,2,3几种状态）")]),t._v(" "),_("td",[t._v("是")])])])]),t._v(" "),_("p",[_("strong",[t._v("修改广告权重")]),t._v(" "),_("font",{attrs:{color:"blue"}},[_("strong",[t._v("/v2/activities/ads/updatePriority")])]),t._v(" "),_("strong",[t._v("PUT")]),t._v(" "),_("strong",[t._v("JSON")])],1),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",[t._v("参数类型")]),t._v(" "),_("th",[t._v("参数描述")]),t._v(" "),_("th",[t._v("必选")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("_id")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("_id")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("priority")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("权重")]),t._v(" "),_("td",[t._v("是")])])])]),t._v(" "),_("p",[_("strong",[t._v("列出广告")]),t._v(" "),_("font",{attrs:{color:"blue"}},[_("strong",[t._v("/v2/activities/ads/list")])]),t._v(" "),_("strong",[t._v("GET")]),t._v(" "),_("strong",[t._v("QUERY")])],1),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",[t._v("参数类型")]),t._v(" "),_("th",[t._v("参数描述")]),t._v(" "),_("th",[t._v("必选")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("skipSize")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("略过的数目")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("pageSize")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("页面大小")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("flag")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("查询标记 0：全部 1：已排期 2：投放中 3：已停用 4：已结束")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("title")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v('标题，若不使用该条件，将其置为空字符串""')]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("place")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("1：首页，顶部公告栏 2：首页，右侧浮窗 3：浏览页，右侧Banner 4：发现页，顶部Banner")]),t._v(" "),_("td",[t._v("是")])])])]),t._v(" "),_("p",[_("strong",[t._v("返回结构：")])]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('{\n  "ret": 0,\n  "errCode": 0,\n  "errcode": 0,\n  "msg": "success",\n  "data": {\n    "num": 2,\n    "ads": [\n      {\n        "_id": "6254f27fe1c88b10e40ac139",\n        "place": 1,\n        "title": "贪玩蓝月",\n        "status": 2,\n        "ev": 3,\n        "pv": 1,\n        "cvr": 0.3333333333333333,\n        "cover": "123",\n        "linkActivityId": "624fa25afc00a42be8d8f5a1",\n        "linkActivityTitle": "十个亿八个亿谈笑间",\n        "linkActivity": "https://mtc9ci.axshare.com/start.html#p=%E7%BF%BB%E8%AF%91%E7%AE%A1%E7%90%86&id=osbczx&g=1",\n        "persist": true,\n        "priority": 1\n      },\n      {\n        "_id": "6254f2bfe1c88b10e40ac13c",\n        "place": 1,\n        "title": "末日争霸",\n        "status": 2,\n        "ev": 0,\n        "pv": 0,\n        "cover": "abc",\n        "linkActivityId": "624fa25afc00a42be8d8f5a1",\n        "linkActivityTitle": "十个亿八个亿谈笑间",\n        "linkActivity": "https://mtc9ci.axshare.com/start.html#p=%E7%BF%BB%E8%AF%91%E7%AE%A1%E7%90%86&id=osbczx&g=1",\n        "persist": true,\n        "priority": 1\n      }\n    ]\n  }\n}\n')])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br"),_("span",{staticClass:"line-number"},[t._v("10")]),_("br"),_("span",{staticClass:"line-number"},[t._v("11")]),_("br"),_("span",{staticClass:"line-number"},[t._v("12")]),_("br"),_("span",{staticClass:"line-number"},[t._v("13")]),_("br"),_("span",{staticClass:"line-number"},[t._v("14")]),_("br"),_("span",{staticClass:"line-number"},[t._v("15")]),_("br"),_("span",{staticClass:"line-number"},[t._v("16")]),_("br"),_("span",{staticClass:"line-number"},[t._v("17")]),_("br"),_("span",{staticClass:"line-number"},[t._v("18")]),_("br"),_("span",{staticClass:"line-number"},[t._v("19")]),_("br"),_("span",{staticClass:"line-number"},[t._v("20")]),_("br"),_("span",{staticClass:"line-number"},[t._v("21")]),_("br"),_("span",{staticClass:"line-number"},[t._v("22")]),_("br"),_("span",{staticClass:"line-number"},[t._v("23")]),_("br"),_("span",{staticClass:"line-number"},[t._v("24")]),_("br"),_("span",{staticClass:"line-number"},[t._v("25")]),_("br"),_("span",{staticClass:"line-number"},[t._v("26")]),_("br"),_("span",{staticClass:"line-number"},[t._v("27")]),_("br"),_("span",{staticClass:"line-number"},[t._v("28")]),_("br"),_("span",{staticClass:"line-number"},[t._v("29")]),_("br"),_("span",{staticClass:"line-number"},[t._v("30")]),_("br"),_("span",{staticClass:"line-number"},[t._v("31")]),_("br"),_("span",{staticClass:"line-number"},[t._v("32")]),_("br"),_("span",{staticClass:"line-number"},[t._v("33")]),_("br"),_("span",{staticClass:"line-number"},[t._v("34")]),_("br"),_("span",{staticClass:"line-number"},[t._v("35")]),_("br"),_("span",{staticClass:"line-number"},[t._v("36")]),_("br"),_("span",{staticClass:"line-number"},[t._v("37")]),_("br"),_("span",{staticClass:"line-number"},[t._v("38")]),_("br"),_("span",{staticClass:"line-number"},[t._v("39")]),_("br"),_("span",{staticClass:"line-number"},[t._v("40")]),_("br")])]),_("p",[_("strong",[t._v("结构参数：")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",[t._v("参数类型")]),t._v(" "),_("th",[t._v("参数描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("_id")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("_id")])]),t._v(" "),_("tr",[_("td",[t._v("place")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("1：首页，顶部公告栏 2：首页，右侧浮窗 3：浏览页，右侧Banner 4：发现页，顶部Banner")])]),t._v(" "),_("tr",[_("td",[t._v("title")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("标题")])]),t._v(" "),_("tr",[_("td",[t._v("status")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("1：已排期 2：投放中 3：已结束 4：已停用 （传入4表示暂停，传入其他或不传，将自动纠正为1,2,3几种状态）")])]),t._v(" "),_("tr",[_("td",[t._v("ev")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("曝光量")])]),t._v(" "),_("tr",[_("td",[t._v("pv")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("点击量")])]),t._v(" "),_("tr",[_("td",[t._v("cvr")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("曝光率")])]),t._v(" "),_("tr",[_("td",[t._v("startTime")]),t._v(" "),_("td",[t._v("Date")]),t._v(" "),_("td",[t._v("开始时间")])]),t._v(" "),_("tr",[_("td",[t._v("limitTime")]),t._v(" "),_("td",[t._v("Date")]),t._v(" "),_("td",[t._v("结束时间")])]),t._v(" "),_("tr",[_("td",[t._v("persist")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("是否永久，若此参数为true，将忽略掉开始、结束时间")])]),t._v(" "),_("tr",[_("td",[t._v("cover")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("封面")])]),t._v(" "),_("tr",[_("td",[t._v("linkActivityId")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("链接活动ID")])]),t._v(" "),_("tr",[_("td",[t._v("linkActivityTitle")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("链接活动标题")])]),t._v(" "),_("tr",[_("td",[t._v("linkActivity")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("链接活动")])]),t._v(" "),_("tr",[_("td",[t._v("link")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("链接")])]),t._v(" "),_("tr",[_("td",[t._v("priority")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("权重")])])])]),t._v(" "),_("p",[_("strong",[t._v("查询广告")]),t._v(" "),_("font",{attrs:{color:"blue"}},[_("strong",[t._v("/v2/activities/ads/find")])]),t._v(" "),_("strong",[t._v("GET")]),t._v(" "),_("strong",[t._v("QUERY")])],1),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",[t._v("参数类型")]),t._v(" "),_("th",[t._v("参数描述")]),t._v(" "),_("th",[t._v("必选")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("_id")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("_id")]),t._v(" "),_("td",[t._v("是")])])])]),t._v(" "),_("p",[_("strong",[t._v("返回结构：")])]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('{\n  "ret": 0,\n  "errCode": 0,\n  "errcode": 0,\n  "msg": "success",\n  "data": {\n    "_id": "6254f27fe1c88b10e40ac139",\n    "place": 1,\n    "title": "贪玩蓝月",\n    "status": 2,\n    "ev": 3,\n    "pv": 1,\n    "cvr": 0.3333333333333333,\n    "cover": "123",\n    "linkActivityId": "624fa25afc00a42be8d8f5a1",\n    "linkActivityTitle": "十个亿八个亿谈笑间",\n    "linkActivity": "https://mtc9ci.axshare.com/start.html#p=%E7%BF%BB%E8%AF%91%E7%AE%A1%E7%90%86&id=osbczx&g=1",\n    "persist": true,\n    "priority": 1\n  }\n}\n')])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br"),_("span",{staticClass:"line-number"},[t._v("10")]),_("br"),_("span",{staticClass:"line-number"},[t._v("11")]),_("br"),_("span",{staticClass:"line-number"},[t._v("12")]),_("br"),_("span",{staticClass:"line-number"},[t._v("13")]),_("br"),_("span",{staticClass:"line-number"},[t._v("14")]),_("br"),_("span",{staticClass:"line-number"},[t._v("15")]),_("br"),_("span",{staticClass:"line-number"},[t._v("16")]),_("br"),_("span",{staticClass:"line-number"},[t._v("17")]),_("br"),_("span",{staticClass:"line-number"},[t._v("18")]),_("br"),_("span",{staticClass:"line-number"},[t._v("19")]),_("br"),_("span",{staticClass:"line-number"},[t._v("20")]),_("br"),_("span",{staticClass:"line-number"},[t._v("21")]),_("br")])]),_("p",[_("strong",[t._v("结构参数：")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",[t._v("参数类型")]),t._v(" "),_("th",[t._v("参数描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("_id")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("_id")])]),t._v(" "),_("tr",[_("td",[t._v("place")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("1：首页，顶部公告栏 2：首页，右侧浮窗 3：浏览页，右侧Banner 4：发现页，顶部Banner")])]),t._v(" "),_("tr",[_("td",[t._v("title")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("标题")])]),t._v(" "),_("tr",[_("td",[t._v("status")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("1：已排期 2：投放中 3：已结束 4：已停用 （传入4表示暂停，传入其他或不传，将自动纠正为1,2,3几种状态）")])]),t._v(" "),_("tr",[_("td",[t._v("ev")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("曝光量")])]),t._v(" "),_("tr",[_("td",[t._v("pv")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("点击量")])]),t._v(" "),_("tr",[_("td",[t._v("cvr")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("曝光率")])]),t._v(" "),_("tr",[_("td",[t._v("startTime")]),t._v(" "),_("td",[t._v("Date")]),t._v(" "),_("td",[t._v("开始时间")])]),t._v(" "),_("tr",[_("td",[t._v("limitTime")]),t._v(" "),_("td",[t._v("Date")]),t._v(" "),_("td",[t._v("结束时间")])]),t._v(" "),_("tr",[_("td",[t._v("persist")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("是否永久，若此参数为true，将忽略掉开始、结束时间")])]),t._v(" "),_("tr",[_("td",[t._v("cover")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("封面")])]),t._v(" "),_("tr",[_("td",[t._v("linkActivityId")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("链接活动ID")])]),t._v(" "),_("tr",[_("td",[t._v("linkActivityTitle")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("链接活动标题")])]),t._v(" "),_("tr",[_("td",[t._v("linkActivity")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("链接活动")])]),t._v(" "),_("tr",[_("td",[t._v("link")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("链接")])]),t._v(" "),_("tr",[_("td",[t._v("priority")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("权重")])])])]),t._v(" "),_("p",[_("strong",[t._v("访问广告（埋点）")]),t._v(" "),_("font",{attrs:{color:"blue"}},[_("strong",[t._v("/v2/activities/ads/visit")])]),t._v(" "),_("strong",[t._v("GET")]),t._v(" "),_("strong",[t._v("QUERY")])],1),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",[t._v("参数类型")]),t._v(" "),_("th",[t._v("参数描述")]),t._v(" "),_("th",[t._v("必选")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("_id")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("_id")]),t._v(" "),_("td",[t._v("是")])])])]),t._v(" "),_("p",[_("strong",[t._v("点击广告（埋点）")]),t._v(" "),_("font",{attrs:{color:"blue"}},[_("strong",[t._v("/v2/activities/ads/click")])]),t._v(" "),_("strong",[t._v("GET")]),t._v(" "),_("strong",[t._v("QUERY")])],1),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",[t._v("参数类型")]),t._v(" "),_("th",[t._v("参数描述")]),t._v(" "),_("th",[t._v("必选")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("_id")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("_id")]),t._v(" "),_("td",[t._v("是")])])])])])}),[],!1,null,null,null);v.default=s.exports}}]);