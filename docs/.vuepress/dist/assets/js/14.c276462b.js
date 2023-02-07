(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{402:function(t,v,_){"use strict";_.r(v);var s=_(46),n=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[_("strong",[t._v("创建活动")]),t._v(" "),_("font",{attrs:{color:"blue"}},[_("strong",[t._v("/v2/activities/create")])]),t._v(" "),_("strong",[t._v("POST")]),t._v(" "),_("strong",[t._v("JSON")])],1),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",[t._v("参数类型")]),t._v(" "),_("th",[t._v("参数描述")]),t._v(" "),_("th",[t._v("必选")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("title")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("标题")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("startTime")]),t._v(" "),_("td",[t._v("Date")]),t._v(" "),_("td",[t._v("开始时间")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("limitTime")]),t._v(" "),_("td",[t._v("Date")]),t._v(" "),_("td",[t._v("结束时间")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("persist")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("是否永久，若此参数为true，将忽略掉开始、结束时间")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("cover")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("封面")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("link")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("链接")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("publishDate")]),t._v(" "),_("td",[t._v("Date")]),t._v(" "),_("td",[t._v("发布时间，立即发布时，请将该参数置为当前时间")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("isDraft")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("是否草稿")]),t._v(" "),_("td",[t._v("是")])])])]),t._v(" "),_("p",[_("strong",[t._v("编辑活动")]),t._v(" "),_("font",{attrs:{color:"blue"}},[_("strong",[t._v("/v2/activities/update")])]),t._v(" "),_("strong",[t._v("PUT")]),t._v(" "),_("strong",[t._v("JSON")])],1),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",[t._v("参数类型")]),t._v(" "),_("th",[t._v("参数描述")]),t._v(" "),_("th",[t._v("必选")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("_id")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("_id")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("title")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("标题")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("startTime")]),t._v(" "),_("td",[t._v("Date")]),t._v(" "),_("td",[t._v("开始时间")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("limitTime")]),t._v(" "),_("td",[t._v("Date")]),t._v(" "),_("td",[t._v("结束时间")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("persist")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("是否永久，若此参数为true，将忽略掉开始、结束时间")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("cover")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("封面")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("link")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("链接")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("publishDate")]),t._v(" "),_("td",[t._v("Date")]),t._v(" "),_("td",[t._v("发布时间，立即发布时，请将该参数置为当前时间")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("isDraft")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("是否草稿")]),t._v(" "),_("td",[t._v("是")])])])]),t._v(" "),_("p",[_("strong",[t._v("暂停/恢复活动")]),t._v(" "),_("font",{attrs:{color:"blue"}},[_("strong",[t._v("/v2/activities/updateStatus")])]),t._v(" "),_("strong",[t._v("PUT")]),t._v(" "),_("strong",[t._v("JSON")])],1),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",[t._v("参数类型")]),t._v(" "),_("th",[t._v("参数描述")]),t._v(" "),_("th",[t._v("必选")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("_id")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("_id")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("status")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("状态 1：正常 2：暂停")]),t._v(" "),_("td",[t._v("是")])])])]),t._v(" "),_("p",[_("strong",[t._v("列出活动")]),t._v(" "),_("font",{attrs:{color:"blue"}},[_("strong",[t._v("/v2/activities/list")])]),t._v(" "),_("strong",[t._v("GET")]),t._v(" "),_("strong",[t._v("QUERY")])],1),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",[t._v("参数类型")]),t._v(" "),_("th",[t._v("参数描述")]),t._v(" "),_("th",[t._v("必选")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("skipSize")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("略过的数目")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("pageSize")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("页面大小")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("flag")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("查询标记 0：全部 1：未发布 2：已暂停 3：未开始 4：进行中 5：已结束 6：草稿")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("title")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v('标题，若不使用该条件，将其置为空字符串""')]),t._v(" "),_("td",[t._v("是")])])])]),t._v(" "),_("p",[_("strong",[t._v("返回结构：")])]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('{\n  "ret": 0,\n  "errCode": 0,\n  "errcode": 0,\n  "msg": "success",\n  "data": {\n    "num": 1,\n    "activities": [\n      {\n        "_id": "624d511e9e383e0a482c6279",\n        "title": "",\n        "startTime": null,\n        "limitTime": null,\n        "persist": true,\n        "cover": "",\n        "link": "",\n        "publishDate": "2022-04-06T08:36:46.251Z",\n        "status": 1,\n        "isDraft": true,\n        "__v": 0\n      }\n    ]\n  }\n}\n')])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br"),_("span",{staticClass:"line-number"},[t._v("10")]),_("br"),_("span",{staticClass:"line-number"},[t._v("11")]),_("br"),_("span",{staticClass:"line-number"},[t._v("12")]),_("br"),_("span",{staticClass:"line-number"},[t._v("13")]),_("br"),_("span",{staticClass:"line-number"},[t._v("14")]),_("br"),_("span",{staticClass:"line-number"},[t._v("15")]),_("br"),_("span",{staticClass:"line-number"},[t._v("16")]),_("br"),_("span",{staticClass:"line-number"},[t._v("17")]),_("br"),_("span",{staticClass:"line-number"},[t._v("18")]),_("br"),_("span",{staticClass:"line-number"},[t._v("19")]),_("br"),_("span",{staticClass:"line-number"},[t._v("20")]),_("br"),_("span",{staticClass:"line-number"},[t._v("21")]),_("br"),_("span",{staticClass:"line-number"},[t._v("22")]),_("br"),_("span",{staticClass:"line-number"},[t._v("23")]),_("br"),_("span",{staticClass:"line-number"},[t._v("24")]),_("br")])]),_("p",[_("strong",[t._v("结构参数：")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",[t._v("参数类型")]),t._v(" "),_("th",[t._v("参数描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("_id")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("_id")])]),t._v(" "),_("tr",[_("td",[t._v("title")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("标题")])]),t._v(" "),_("tr",[_("td",[t._v("startTime")]),t._v(" "),_("td",[t._v("Date")]),t._v(" "),_("td",[t._v("开始时间")])]),t._v(" "),_("tr",[_("td",[t._v("limitTime")]),t._v(" "),_("td",[t._v("Date")]),t._v(" "),_("td",[t._v("结束时间")])]),t._v(" "),_("tr",[_("td",[t._v("persist")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("是否永久，若此参数为true，将忽略掉开始、结束时间")])]),t._v(" "),_("tr",[_("td",[t._v("cover")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("封面")])]),t._v(" "),_("tr",[_("td",[t._v("link")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("链接")])]),t._v(" "),_("tr",[_("td",[t._v("publishDate")]),t._v(" "),_("td",[t._v("Date")]),t._v(" "),_("td",[t._v("发布时间，立即发布时，请将该参数置为当前时间")])]),t._v(" "),_("tr",[_("td",[t._v("status")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("状态 1：正常 2：暂停")])]),t._v(" "),_("tr",[_("td",[t._v("isDraft")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("是否草稿")])])])]),t._v(" "),_("p",[_("strong",[t._v("列出非草稿/非已结束的活动")]),t._v(" "),_("font",{attrs:{color:"blue"}},[_("strong",[t._v("/v2/activities/list2")])]),t._v(" "),_("strong",[t._v("GET")]),t._v(" "),_("strong",[t._v("QUERY")]),t._v(" "),_("strong",[t._v("（返回结构同列出活动）")])],1),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",[t._v("参数类型")]),t._v(" "),_("th",[t._v("参数描述")]),t._v(" "),_("th",[t._v("必选")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("title")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v('标题，若不使用该条件，将其置为空字符串""')]),t._v(" "),_("td",[t._v("是")])])])]),t._v(" "),_("p",[_("strong",[t._v("查询活动")]),t._v(" "),_("font",{attrs:{color:"blue"}},[_("strong",[t._v("/v2/activities/find")])]),t._v(" "),_("strong",[t._v("GET")]),t._v(" "),_("strong",[t._v("QUERY")])],1),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",[t._v("参数类型")]),t._v(" "),_("th",[t._v("参数描述")]),t._v(" "),_("th",[t._v("必选")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("_id")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("_id")]),t._v(" "),_("td",[t._v("是")])])])]),t._v(" "),_("p",[_("strong",[t._v("返回结构：")])]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('{\n  "ret": 0,\n  "errCode": 0,\n  "errcode": 0,\n  "msg": "success",\n  "data": {\n    "_id": "624d5afd5915985c8c8bb3a3",\n    "title": "",\n    "startTime": null,\n    "limitTime": null,\n    "persist": true,\n    "cover": "",\n    "link": "",\n    "publishDate": null,\n    "status": 1,\n    "isDraft": true,\n    "__v": 0\n  }\n}\n')])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br"),_("span",{staticClass:"line-number"},[t._v("10")]),_("br"),_("span",{staticClass:"line-number"},[t._v("11")]),_("br"),_("span",{staticClass:"line-number"},[t._v("12")]),_("br"),_("span",{staticClass:"line-number"},[t._v("13")]),_("br"),_("span",{staticClass:"line-number"},[t._v("14")]),_("br"),_("span",{staticClass:"line-number"},[t._v("15")]),_("br"),_("span",{staticClass:"line-number"},[t._v("16")]),_("br"),_("span",{staticClass:"line-number"},[t._v("17")]),_("br"),_("span",{staticClass:"line-number"},[t._v("18")]),_("br"),_("span",{staticClass:"line-number"},[t._v("19")]),_("br")])]),_("p",[_("strong",[t._v("结构参数：")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",[t._v("参数类型")]),t._v(" "),_("th",[t._v("参数描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("_id")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("_id")])]),t._v(" "),_("tr",[_("td",[t._v("title")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("标题")])]),t._v(" "),_("tr",[_("td",[t._v("startTime")]),t._v(" "),_("td",[t._v("Date")]),t._v(" "),_("td",[t._v("开始时间")])]),t._v(" "),_("tr",[_("td",[t._v("limitTime")]),t._v(" "),_("td",[t._v("Date")]),t._v(" "),_("td",[t._v("结束时间")])]),t._v(" "),_("tr",[_("td",[t._v("persist")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("是否永久，若此参数为true，将忽略掉开始、结束时间")])]),t._v(" "),_("tr",[_("td",[t._v("cover")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("封面")])]),t._v(" "),_("tr",[_("td",[t._v("link")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("链接")])]),t._v(" "),_("tr",[_("td",[t._v("publishDate")]),t._v(" "),_("td",[t._v("Date")]),t._v(" "),_("td",[t._v("发布时间，立即发布时，请将该参数置为当前时间")])]),t._v(" "),_("tr",[_("td",[t._v("status")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("状态 1：正常 2：暂停")])]),t._v(" "),_("tr",[_("td",[t._v("isDraft")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("是否草稿")])])])])])}),[],!1,null,null,null);v.default=n.exports}}]);