(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{394:function(t,a,s){"use strict";s.r(a);var e=s(46),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"后台批量审核内测申请"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后台批量审核内测申请"}},[t._v("#")]),t._v(" 后台批量审核内测申请")]),t._v(" "),s("blockquote",[s("p",[t._v("只能操作待审核的记录,其他状态的申请记录将被忽略")])]),t._v(" "),s("h3",{attrs:{id:"调用方式-put"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调用方式-put"}},[t._v("#")]),t._v(" 调用方式: PUT")]),t._v(" "),s("h3",{attrs:{id:"接口地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口地址"}},[t._v("#")]),t._v(" 接口地址:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("https://api.freelog.com/v1/testQualifications/beta/apply/batch\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"body传入参数说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#body传入参数说明"}},[t._v("#")]),t._v(" body传入参数说明：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("必选")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型及范围")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("recordIds")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("必选")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string[]")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("申请记录ID")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("status")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("必选")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("审核状态 ( 1:审核通过  2:审核不通过 )")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("auditMsg")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("可选")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("审核描述(可填写拒绝原因等)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("remark")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("可选")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("备注(可填写拒绝原因等)")])])])]),t._v(" "),s("h3",{attrs:{id:"body示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#body示例"}},[t._v("#")]),t._v(" body示例")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"recordIds"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5e047e3b509201111476b722"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"auditMsg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"审核通过"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"remark"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h3",{attrs:{id:"返回说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回说明"}},[t._v("#")]),t._v(" 返回说明：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("返回值字段")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("字段类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("字段说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("[data]")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否操作成功")])])])]),t._v(" "),s("h3",{attrs:{id:"返回示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回示例"}},[t._v("#")]),t._v(" 返回示例")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ret"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"errcode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"msg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);