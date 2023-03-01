(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{538:function(s,n,t){"use strict";t.r(n);var e=t(46),a=Object(e.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("strong",[s._v("创建资源属性")]),s._v(" "),t("font",{attrs:{color:"blue"}},[t("strong",[s._v("/v2/resources/attrs/create")])]),s._v(" "),t("strong",[s._v("POST")]),s._v(" "),t("strong",[s._v("JSON")])],1),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("参数名")]),s._v(" "),t("th",[s._v("参数类型")]),s._v(" "),t("th",[s._v("参数描述")]),s._v(" "),t("th",[s._v("必选")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("name")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("名称")]),s._v(" "),t("td",[s._v("是")])]),s._v(" "),t("tr",[t("td",[s._v("note")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("备注")]),s._v(" "),t("td",[s._v("否")])]),s._v(" "),t("tr",[t("td",[s._v("key")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("键")]),s._v(" "),t("td",[s._v("是")])]),s._v(" "),t("tr",[t("td",[s._v("format")]),s._v(" "),t("td",[s._v("number")]),s._v(" "),t("td",[s._v("值格式 1：文本 2：数值  3：时间 4：日期 5：日期和时间")]),s._v(" "),t("td",[s._v("是")])]),s._v(" "),t("tr",[t("td",[s._v("insertMode")]),s._v(" "),t("td",[s._v("number")]),s._v(" "),t("td",[s._v("录入方式 1：系统解析")]),s._v(" "),t("td",[s._v("是")])])])]),s._v(" "),t("p",[t("strong",[s._v("返回结构：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n  "ret": 0,\n  "errCode": 0,\n  "errcode": 0,\n  "msg": "success",\n  "data": {\n    "format": 1,\n    "insertMode": 1,\n    "dependencies": 0,\n    "_id": "63f42af0df0ee80d40eb21a9",\n    "name": "像素",\n    "note": "像素",\n    "key": "pixel",\n    "createDate": "2023-02-21T02:22:40.664Z",\n    "updateDate": "2023-02-21T02:22:40.664Z"\n  }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[t("strong",[s._v("列出资源属性")]),s._v(" "),t("font",{attrs:{color:"blue"}},[t("strong",[s._v("/v2/resources/attrs/list")])]),s._v(" "),t("strong",[s._v("GET")]),s._v(" "),t("strong",[s._v("QUERY")])],1),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("参数名")]),s._v(" "),t("th",[s._v("参数类型")]),s._v(" "),t("th",[s._v("参数描述")]),s._v(" "),t("th",[s._v("必选")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("skip")]),s._v(" "),t("td",[s._v("number")]),s._v(" "),t("td",[s._v("跳过的数目")]),s._v(" "),t("td",[s._v("是")])]),s._v(" "),t("tr",[t("td",[s._v("limit")]),s._v(" "),t("td",[s._v("number")]),s._v(" "),t("td",[s._v("查询的数目")]),s._v(" "),t("td",[s._v("是")])]),s._v(" "),t("tr",[t("td",[s._v("nameOrKey")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("名称或者键")]),s._v(" "),t("td",[s._v("否")])])])]),s._v(" "),t("p",[t("strong",[s._v("返回结构：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n  "ret": 0,\n  "errCode": 0,\n  "errcode": 0,\n  "msg": "success",\n  "data": {\n    "num": 7,\n    "resourceAttrs": {\n      "skip": 0,\n      "limit": 10,\n      "totalItem": 7,\n      "dataList": [\n        {\n          "format": 1,\n          "insertMode": 1,\n          "dependencies": 0,\n          "_id": "63f330b7a743752d6897dc03",\n          "name": "MIME类型",\n          "key": "mime",\n          "createDate": "2023-02-20T08:35:03.977Z",\n          "updateDate": "2023-02-20T08:35:03.977Z"\n        },\n        {\n          "format": 1,\n          "insertMode": 1,\n          "dependencies": 0,\n          "_id": "63f42af0df0ee80d40eb21a9",\n          "name": "像素",\n          "note": "像素",\n          "key": "pixel",\n          "createDate": "2023-02-21T02:22:40.664Z",\n          "updateDate": "2023-02-21T02:22:40.664Z"\n        },\n        {\n          "format": 1,\n          "insertMode": 1,\n          "dependencies": 0,\n          "_id": "63f330b7a743752d6897dbfc",\n          "name": "大小",\n          "key": "file_size",\n          "createDate": "2023-02-20T08:35:03.925Z",\n          "updateDate": "2023-02-20T08:35:03.925Z"\n        },\n        {\n          "format": 1,\n          "insertMode": 1,\n          "dependencies": 0,\n          "_id": "63f330b7a743752d6897dc01",\n          "name": "字数",\n          "key": "words_count",\n          "createDate": "2023-02-20T08:35:03.971Z",\n          "updateDate": "2023-02-20T08:35:03.971Z"\n        },\n        {\n          "format": 1,\n          "insertMode": 1,\n          "dependencies": 0,\n          "_id": "63f330b7a743752d6897dc05",\n          "name": "尺寸",\n          "key": "dimensions",\n          "createDate": "2023-02-20T08:35:03.984Z",\n          "updateDate": "2023-02-20T08:35:03.984Z"\n        },\n        {\n          "format": 1,\n          "insertMode": 1,\n          "dependencies": 0,\n          "_id": "63f330b7a743752d6897dbff",\n          "name": "时长",\n          "key": "duration",\n          "createDate": "2023-02-20T08:35:03.963Z",\n          "updateDate": "2023-02-20T08:35:03.963Z"\n        },\n        {\n          "format": 1,\n          "insertMode": 1,\n          "dependencies": 0,\n          "_id": "63f330b7a743752d6897dc07",\n          "name": "节拍",\n          "key": "tempo",\n          "createDate": "2023-02-20T08:35:03.990Z",\n          "updateDate": "2023-02-20T08:35:03.990Z"\n        }\n      ]\n    }\n  }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br"),t("span",{staticClass:"line-number"},[s._v("80")]),t("br"),t("span",{staticClass:"line-number"},[s._v("81")]),t("br"),t("span",{staticClass:"line-number"},[s._v("82")]),t("br"),t("span",{staticClass:"line-number"},[s._v("83")]),t("br"),t("span",{staticClass:"line-number"},[s._v("84")]),t("br"),t("span",{staticClass:"line-number"},[s._v("85")]),t("br"),t("span",{staticClass:"line-number"},[s._v("86")]),t("br"),t("span",{staticClass:"line-number"},[s._v("87")]),t("br")])]),t("p",[t("strong",[s._v("结构参数：")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("参数名")]),s._v(" "),t("th",[s._v("参数类型")]),s._v(" "),t("th",[s._v("参数描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("name")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("名称")])]),s._v(" "),t("tr",[t("td",[s._v("note")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("备注")])]),s._v(" "),t("tr",[t("td",[s._v("key")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("键")])]),s._v(" "),t("tr",[t("td",[s._v("format")]),s._v(" "),t("td",[s._v("number")]),s._v(" "),t("td",[s._v("值格式 1：文本 2：数值  3：时间 4：日期 5：日期和时间")])]),s._v(" "),t("tr",[t("td",[s._v("insertMode")]),s._v(" "),t("td",[s._v("number")]),s._v(" "),t("td",[s._v("录入方式 1：系统解析")])]),s._v(" "),t("tr",[t("td",[s._v("dependencies")]),s._v(" "),t("td",[s._v("number")]),s._v(" "),t("td",[s._v("依赖数")])])])]),s._v(" "),t("p",[t("strong",[s._v("编辑资源属性 /resources/attrs/update")]),s._v("\tPOST\tJSON")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("参数名")]),s._v(" "),t("th",[s._v("参数类型")]),s._v(" "),t("th",[s._v("参数描述")]),s._v(" "),t("th",[s._v("必选")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("name")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("名称")]),s._v(" "),t("td",[s._v("是")])]),s._v(" "),t("tr",[t("td",[s._v("note")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("备注")]),s._v(" "),t("td",[s._v("是")])]),s._v(" "),t("tr",[t("td",[s._v("format")]),s._v(" "),t("td",[s._v("number")]),s._v(" "),t("td",[s._v("值格式 1：文本 2：数值  3：时间 4：日期 5：日期和时间")]),s._v(" "),t("td",[s._v("是")])]),s._v(" "),t("tr",[t("td",[s._v("key")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("键")]),s._v(" "),t("td",[s._v("是")])])])]),s._v(" "),t("p",[t("strong",[s._v("返回结构：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n  "ret": 0,\n  "errCode": 0,\n  "errcode": 0,\n  "msg": "success",\n  "data": null\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[t("strong",[s._v("通过key取资源属性")]),s._v(" "),t("font",{attrs:{color:"blue"}},[t("strong",[s._v("/v2/resources/attrs/getInfoByKey")])]),s._v(" "),t("strong",[s._v("GET")]),s._v(" "),t("strong",[s._v("QUERY")])],1),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("参数名")]),s._v(" "),t("th",[s._v("参数类型")]),s._v(" "),t("th",[s._v("参数描述")]),s._v(" "),t("th",[s._v("必选")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("key")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("键")]),s._v(" "),t("td",[s._v("是")])])])]),s._v(" "),t("p",[t("strong",[s._v("返回结构：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n  "ret": 0,\n  "errCode": 0,\n  "errcode": 0,\n  "msg": "success",\n  "data": {\n    "format": 1,\n    "insertMode": 1,\n    "dependencies": 0,\n    "_id": "63f330b7a743752d6897dbfc",\n    "name": "大小",\n    "key": "file_size",\n    "createDate": "2023-02-20T08:35:03.925Z",\n    "updateDate": "2023-02-20T08:35:03.925Z"\n  }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[t("strong",[s._v("结构参数：")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("参数名")]),s._v(" "),t("th",[s._v("参数类型")]),s._v(" "),t("th",[s._v("参数描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("name")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("名称")])]),s._v(" "),t("tr",[t("td",[s._v("note")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("备注")])]),s._v(" "),t("tr",[t("td",[s._v("key")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("键")])]),s._v(" "),t("tr",[t("td",[s._v("format")]),s._v(" "),t("td",[s._v("number")]),s._v(" "),t("td",[s._v("值格式 1：文本 2：数值  3：时间 4：日期 5：日期和时间")])]),s._v(" "),t("tr",[t("td",[s._v("insertMode")]),s._v(" "),t("td",[s._v("number")]),s._v(" "),t("td",[s._v("录入方式 1：系统解析")])]),s._v(" "),t("tr",[t("td",[s._v("dependencies")]),s._v(" "),t("td",[s._v("number")]),s._v(" "),t("td",[s._v("依赖数")])])])])])}),[],!1,null,null,null);n.default=a.exports}}]);