(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{540:function(n,s,t){"use strict";t.r(s);var e=t(46),a=Object(e.a)({},(function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[t("strong",[n._v("创建资源属性")]),n._v(" "),t("font",{attrs:{color:"blue"}},[t("strong",[n._v("/v2/resources/attrs/create")])]),n._v(" "),t("strong",[n._v("POST")]),n._v(" "),t("strong",[n._v("JSON")])],1),n._v(" "),t("table",[t("thead",[t("tr",[t("th",[n._v("参数名")]),n._v(" "),t("th",[n._v("参数类型")]),n._v(" "),t("th",[n._v("参数描述")]),n._v(" "),t("th",[n._v("必选")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("name")]),n._v(" "),t("td",[n._v("string")]),n._v(" "),t("td",[n._v("名称")]),n._v(" "),t("td",[n._v("是")])]),n._v(" "),t("tr",[t("td",[n._v("note")]),n._v(" "),t("td",[n._v("string")]),n._v(" "),t("td",[n._v("备注")]),n._v(" "),t("td",[n._v("否")])]),n._v(" "),t("tr",[t("td",[n._v("key")]),n._v(" "),t("td",[n._v("string")]),n._v(" "),t("td",[n._v("键")]),n._v(" "),t("td",[n._v("是")])]),n._v(" "),t("tr",[t("td",[n._v("format")]),n._v(" "),t("td",[n._v("number")]),n._v(" "),t("td",[n._v("值格式 1：文本 2：数值  3：时间 4：日期 5：日期和时间")]),n._v(" "),t("td",[n._v("是")])]),n._v(" "),t("tr",[t("td",[n._v("formatUnit")]),n._v(" "),t("td",[n._v("string")]),n._v(" "),t("td",[n._v("格式单位")]),n._v(" "),t("td",[n._v("否")])]),n._v(" "),t("tr",[t("td",[n._v("autoConvert")]),n._v(" "),t("td",[n._v("boolean")]),n._v(" "),t("td",[n._v("是否自动转换")]),n._v(" "),t("td",[n._v("否")])]),n._v(" "),t("tr",[t("td",[n._v("insertMode")]),n._v(" "),t("td",[n._v("number")]),n._v(" "),t("td",[n._v("录入方式 1：系统解析")]),n._v(" "),t("td",[n._v("是")])])])]),n._v(" "),t("p",[t("strong",[n._v("返回结构：")])]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('{\n  "ret": 0,\n  "errCode": 0,\n  "errcode": 0,\n  "msg": "success",\n  "data": {\n    "format": 1,\n    "insertMode": 1,\n    "dependencies": 0,\n    "_id": "63f42af0df0ee80d40eb21a9",\n    "name": "像素",\n    "note": "像素",\n    "key": "pixel",\n    "createDate": "2023-02-21T02:22:40.664Z",\n    "updateDate": "2023-02-21T02:22:40.664Z"\n  }\n}\n')])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br")])]),t("p",[t("strong",[n._v("列出资源属性")]),n._v(" "),t("font",{attrs:{color:"blue"}},[t("strong",[n._v("/v2/resources/attrs/list")])]),n._v(" "),t("strong",[n._v("GET")]),n._v(" "),t("strong",[n._v("QUERY")])],1),n._v(" "),t("table",[t("thead",[t("tr",[t("th",[n._v("参数名")]),n._v(" "),t("th",[n._v("参数类型")]),n._v(" "),t("th",[n._v("参数描述")]),n._v(" "),t("th",[n._v("必选")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("skip")]),n._v(" "),t("td",[n._v("number")]),n._v(" "),t("td",[n._v("跳过的数目")]),n._v(" "),t("td",[n._v("是")])]),n._v(" "),t("tr",[t("td",[n._v("limit")]),n._v(" "),t("td",[n._v("number")]),n._v(" "),t("td",[n._v("查询的数目")]),n._v(" "),t("td",[n._v("是")])]),n._v(" "),t("tr",[t("td",[n._v("nameOrKey")]),n._v(" "),t("td",[n._v("string")]),n._v(" "),t("td",[n._v("名称或者键")]),n._v(" "),t("td",[n._v("否")])])])]),n._v(" "),t("p",[t("strong",[n._v("返回结构：")])]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('{\n  "ret": 0,\n  "errCode": 0,\n  "errcode": 0,\n  "msg": "success",\n  "data": {\n    "num": 7,\n    "resourceAttrs": {\n      "skip": 0,\n      "limit": 10,\n      "totalItem": 7,\n      "dataList": [\n        {\n          "format": 1,\n          "insertMode": 1,\n          "dependencies": 0,\n          "_id": "63f330b7a743752d6897dc03",\n          "name": "MIME类型",\n          "key": "mime",\n          "createDate": "2023-02-20T08:35:03.977Z",\n          "updateDate": "2023-02-20T08:35:03.977Z"\n        },\n        {\n          "format": 1,\n          "insertMode": 1,\n          "dependencies": 0,\n          "_id": "63f42af0df0ee80d40eb21a9",\n          "name": "像素",\n          "note": "像素",\n          "key": "pixel",\n          "createDate": "2023-02-21T02:22:40.664Z",\n          "updateDate": "2023-02-21T02:22:40.664Z"\n        },\n        {\n          "format": 1,\n          "insertMode": 1,\n          "dependencies": 0,\n          "_id": "63f330b7a743752d6897dbfc",\n          "name": "大小",\n          "key": "file_size",\n          "createDate": "2023-02-20T08:35:03.925Z",\n          "updateDate": "2023-02-20T08:35:03.925Z"\n        },\n        {\n          "format": 1,\n          "insertMode": 1,\n          "dependencies": 0,\n          "_id": "63f330b7a743752d6897dc01",\n          "name": "字数",\n          "key": "words_count",\n          "createDate": "2023-02-20T08:35:03.971Z",\n          "updateDate": "2023-02-20T08:35:03.971Z"\n        },\n        {\n          "format": 1,\n          "insertMode": 1,\n          "dependencies": 0,\n          "_id": "63f330b7a743752d6897dc05",\n          "name": "尺寸",\n          "key": "dimensions",\n          "createDate": "2023-02-20T08:35:03.984Z",\n          "updateDate": "2023-02-20T08:35:03.984Z"\n        },\n        {\n          "format": 1,\n          "insertMode": 1,\n          "dependencies": 0,\n          "_id": "63f330b7a743752d6897dbff",\n          "name": "时长",\n          "key": "duration",\n          "createDate": "2023-02-20T08:35:03.963Z",\n          "updateDate": "2023-02-20T08:35:03.963Z"\n        },\n        {\n          "format": 1,\n          "insertMode": 1,\n          "dependencies": 0,\n          "_id": "63f330b7a743752d6897dc07",\n          "name": "节拍",\n          "key": "tempo",\n          "createDate": "2023-02-20T08:35:03.990Z",\n          "updateDate": "2023-02-20T08:35:03.990Z"\n        }\n      ]\n    }\n  }\n}\n')])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br"),t("span",{staticClass:"line-number"},[n._v("24")]),t("br"),t("span",{staticClass:"line-number"},[n._v("25")]),t("br"),t("span",{staticClass:"line-number"},[n._v("26")]),t("br"),t("span",{staticClass:"line-number"},[n._v("27")]),t("br"),t("span",{staticClass:"line-number"},[n._v("28")]),t("br"),t("span",{staticClass:"line-number"},[n._v("29")]),t("br"),t("span",{staticClass:"line-number"},[n._v("30")]),t("br"),t("span",{staticClass:"line-number"},[n._v("31")]),t("br"),t("span",{staticClass:"line-number"},[n._v("32")]),t("br"),t("span",{staticClass:"line-number"},[n._v("33")]),t("br"),t("span",{staticClass:"line-number"},[n._v("34")]),t("br"),t("span",{staticClass:"line-number"},[n._v("35")]),t("br"),t("span",{staticClass:"line-number"},[n._v("36")]),t("br"),t("span",{staticClass:"line-number"},[n._v("37")]),t("br"),t("span",{staticClass:"line-number"},[n._v("38")]),t("br"),t("span",{staticClass:"line-number"},[n._v("39")]),t("br"),t("span",{staticClass:"line-number"},[n._v("40")]),t("br"),t("span",{staticClass:"line-number"},[n._v("41")]),t("br"),t("span",{staticClass:"line-number"},[n._v("42")]),t("br"),t("span",{staticClass:"line-number"},[n._v("43")]),t("br"),t("span",{staticClass:"line-number"},[n._v("44")]),t("br"),t("span",{staticClass:"line-number"},[n._v("45")]),t("br"),t("span",{staticClass:"line-number"},[n._v("46")]),t("br"),t("span",{staticClass:"line-number"},[n._v("47")]),t("br"),t("span",{staticClass:"line-number"},[n._v("48")]),t("br"),t("span",{staticClass:"line-number"},[n._v("49")]),t("br"),t("span",{staticClass:"line-number"},[n._v("50")]),t("br"),t("span",{staticClass:"line-number"},[n._v("51")]),t("br"),t("span",{staticClass:"line-number"},[n._v("52")]),t("br"),t("span",{staticClass:"line-number"},[n._v("53")]),t("br"),t("span",{staticClass:"line-number"},[n._v("54")]),t("br"),t("span",{staticClass:"line-number"},[n._v("55")]),t("br"),t("span",{staticClass:"line-number"},[n._v("56")]),t("br"),t("span",{staticClass:"line-number"},[n._v("57")]),t("br"),t("span",{staticClass:"line-number"},[n._v("58")]),t("br"),t("span",{staticClass:"line-number"},[n._v("59")]),t("br"),t("span",{staticClass:"line-number"},[n._v("60")]),t("br"),t("span",{staticClass:"line-number"},[n._v("61")]),t("br"),t("span",{staticClass:"line-number"},[n._v("62")]),t("br"),t("span",{staticClass:"line-number"},[n._v("63")]),t("br"),t("span",{staticClass:"line-number"},[n._v("64")]),t("br"),t("span",{staticClass:"line-number"},[n._v("65")]),t("br"),t("span",{staticClass:"line-number"},[n._v("66")]),t("br"),t("span",{staticClass:"line-number"},[n._v("67")]),t("br"),t("span",{staticClass:"line-number"},[n._v("68")]),t("br"),t("span",{staticClass:"line-number"},[n._v("69")]),t("br"),t("span",{staticClass:"line-number"},[n._v("70")]),t("br"),t("span",{staticClass:"line-number"},[n._v("71")]),t("br"),t("span",{staticClass:"line-number"},[n._v("72")]),t("br"),t("span",{staticClass:"line-number"},[n._v("73")]),t("br"),t("span",{staticClass:"line-number"},[n._v("74")]),t("br"),t("span",{staticClass:"line-number"},[n._v("75")]),t("br"),t("span",{staticClass:"line-number"},[n._v("76")]),t("br"),t("span",{staticClass:"line-number"},[n._v("77")]),t("br"),t("span",{staticClass:"line-number"},[n._v("78")]),t("br"),t("span",{staticClass:"line-number"},[n._v("79")]),t("br"),t("span",{staticClass:"line-number"},[n._v("80")]),t("br"),t("span",{staticClass:"line-number"},[n._v("81")]),t("br"),t("span",{staticClass:"line-number"},[n._v("82")]),t("br"),t("span",{staticClass:"line-number"},[n._v("83")]),t("br"),t("span",{staticClass:"line-number"},[n._v("84")]),t("br"),t("span",{staticClass:"line-number"},[n._v("85")]),t("br"),t("span",{staticClass:"line-number"},[n._v("86")]),t("br"),t("span",{staticClass:"line-number"},[n._v("87")]),t("br")])]),t("p",[t("strong",[n._v("结构参数：")])]),n._v(" "),t("table",[t("thead",[t("tr",[t("th",[n._v("参数名")]),n._v(" "),t("th",[n._v("参数类型")]),n._v(" "),t("th",[n._v("参数描述")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("name")]),n._v(" "),t("td",[n._v("string")]),n._v(" "),t("td",[n._v("名称")])]),n._v(" "),t("tr",[t("td",[n._v("note")]),n._v(" "),t("td",[n._v("string")]),n._v(" "),t("td",[n._v("备注")])]),n._v(" "),t("tr",[t("td",[n._v("key")]),n._v(" "),t("td",[n._v("string")]),n._v(" "),t("td",[n._v("键")])]),n._v(" "),t("tr",[t("td",[n._v("format")]),n._v(" "),t("td",[n._v("number")]),n._v(" "),t("td",[n._v("值格式 1：文本 2：数值  3：时间 4：日期 5：日期和时间")])]),n._v(" "),t("tr",[t("td",[n._v("formatUnit")]),n._v(" "),t("td",[n._v("string")]),n._v(" "),t("td",[n._v("格式单位")])]),n._v(" "),t("tr",[t("td",[n._v("autoConvert")]),n._v(" "),t("td",[n._v("boolean")]),n._v(" "),t("td",[n._v("是否自动转换")])]),n._v(" "),t("tr",[t("td",[n._v("insertMode")]),n._v(" "),t("td",[n._v("number")]),n._v(" "),t("td",[n._v("录入方式 1：系统解析")])]),n._v(" "),t("tr",[t("td",[n._v("dependencies")]),n._v(" "),t("td",[n._v("number")]),n._v(" "),t("td",[n._v("依赖数")])])])]),n._v(" "),t("p",[t("strong",[n._v("编辑资源属性 /resources/attrs/update")]),n._v("\tPOST\tJSON")]),n._v(" "),t("table",[t("thead",[t("tr",[t("th",[n._v("参数名")]),n._v(" "),t("th",[n._v("参数类型")]),n._v(" "),t("th",[n._v("参数描述")]),n._v(" "),t("th",[n._v("必选")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("name")]),n._v(" "),t("td",[n._v("string")]),n._v(" "),t("td",[n._v("名称")]),n._v(" "),t("td",[n._v("是")])]),n._v(" "),t("tr",[t("td",[n._v("note")]),n._v(" "),t("td",[n._v("string")]),n._v(" "),t("td",[n._v("备注")]),n._v(" "),t("td",[n._v("是")])]),n._v(" "),t("tr",[t("td",[n._v("format")]),n._v(" "),t("td",[n._v("number")]),n._v(" "),t("td",[n._v("值格式 1：文本 2：数值  3：时间 4：日期 5：日期和时间")]),n._v(" "),t("td",[n._v("是")])]),n._v(" "),t("tr",[t("td",[n._v("formatUnit")]),n._v(" "),t("td",[n._v("string")]),n._v(" "),t("td",[n._v("格式单位")]),n._v(" "),t("td",[n._v("否")])]),n._v(" "),t("tr",[t("td",[n._v("autoConvert")]),n._v(" "),t("td",[n._v("boolean")]),n._v(" "),t("td",[n._v("是否自动转换")]),n._v(" "),t("td",[n._v("否")])]),n._v(" "),t("tr",[t("td",[n._v("key")]),n._v(" "),t("td",[n._v("string")]),n._v(" "),t("td",[n._v("键")]),n._v(" "),t("td",[n._v("是")])])])]),n._v(" "),t("p",[t("strong",[n._v("返回结构：")])]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('{\n  "ret": 0,\n  "errCode": 0,\n  "errcode": 0,\n  "msg": "success",\n  "data": null\n}\n')])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br")])]),t("p",[t("strong",[n._v("通过key取资源属性")]),n._v(" "),t("font",{attrs:{color:"blue"}},[t("strong",[n._v("/v2/resources/attrs/getInfoByKey")])]),n._v(" "),t("strong",[n._v("GET")]),n._v(" "),t("strong",[n._v("QUERY")])],1),n._v(" "),t("table",[t("thead",[t("tr",[t("th",[n._v("参数名")]),n._v(" "),t("th",[n._v("参数类型")]),n._v(" "),t("th",[n._v("参数描述")]),n._v(" "),t("th",[n._v("必选")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("key")]),n._v(" "),t("td",[n._v("string")]),n._v(" "),t("td",[n._v("键")]),n._v(" "),t("td",[n._v("是")])])])]),n._v(" "),t("p",[t("strong",[n._v("返回结构：")])]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('{\n  "ret": 0,\n  "errCode": 0,\n  "errcode": 0,\n  "msg": "success",\n  "data": {\n    "format": 1,\n    "insertMode": 1,\n    "dependencies": 0,\n    "_id": "63f330b7a743752d6897dbfc",\n    "name": "大小",\n    "key": "file_size",\n    "createDate": "2023-02-20T08:35:03.925Z",\n    "updateDate": "2023-02-20T08:35:03.925Z"\n  }\n}\n')])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br")])]),t("p",[t("strong",[n._v("结构参数：")])]),n._v(" "),t("table",[t("thead",[t("tr",[t("th",[n._v("参数名")]),n._v(" "),t("th",[n._v("参数类型")]),n._v(" "),t("th",[n._v("参数描述")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("name")]),n._v(" "),t("td",[n._v("string")]),n._v(" "),t("td",[n._v("名称")])]),n._v(" "),t("tr",[t("td",[n._v("note")]),n._v(" "),t("td",[n._v("string")]),n._v(" "),t("td",[n._v("备注")])]),n._v(" "),t("tr",[t("td",[n._v("key")]),n._v(" "),t("td",[n._v("string")]),n._v(" "),t("td",[n._v("键")])]),n._v(" "),t("tr",[t("td",[n._v("format")]),n._v(" "),t("td",[n._v("number")]),n._v(" "),t("td",[n._v("值格式 1：文本 2：数值  3：时间 4：日期 5：日期和时间")])]),n._v(" "),t("tr",[t("td",[n._v("formatUnit")]),n._v(" "),t("td",[n._v("string")]),n._v(" "),t("td",[n._v("格式单位")])]),n._v(" "),t("tr",[t("td",[n._v("autoConvert")]),n._v(" "),t("td",[n._v("boolean")]),n._v(" "),t("td",[n._v("是否自动转换")])]),n._v(" "),t("tr",[t("td",[n._v("insertMode")]),n._v(" "),t("td",[n._v("number")]),n._v(" "),t("td",[n._v("录入方式 1：系统解析")])]),n._v(" "),t("tr",[t("td",[n._v("dependencies")]),n._v(" "),t("td",[n._v("number")]),n._v(" "),t("td",[n._v("依赖数")])])])])])}),[],!1,null,null,null);s.default=a.exports}}]);