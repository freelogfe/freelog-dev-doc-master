(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{423:function(t,a,s){"use strict";s.r(a);var e=s(46),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"发送短信或邮件验证码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送短信或邮件验证码"}},[t._v("#")]),t._v(" 发送短信或邮件验证码")]),t._v(" "),s("h3",{attrs:{id:"调用方式-post"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调用方式-post"}},[t._v("#")]),t._v(" 调用方式: POST")]),t._v(" "),s("h3",{attrs:{id:"接口地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口地址"}},[t._v("#")]),t._v(" 接口地址:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("https://api.freelog.com/v2/messages/send\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"body传入参数说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#body传入参数说明"}},[t._v("#")]),t._v(" body传入参数说明：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("必选")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型及范围")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("loginName")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("必选")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("注册的登录名,手机号或者邮箱")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("authCodeType")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("必选")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("验证码类型,详见下面的枚举")])])])]),t._v(" "),s("h3",{attrs:{id:"验证码类型枚举"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#验证码类型枚举"}},[t._v("#")]),t._v(" 验证码类型枚举：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("验证码类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("register")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("注册账号")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("resetPassword")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("重置登录密码")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("activateTransactionAccount")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("激活个人交易账户")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("updateTransactionAccountPwd")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("更新交易账户密码")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("updateMobileOrEmail")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("绑定或换绑个人登录邮箱手机号")])])])]),t._v(" "),s("h3",{attrs:{id:"body示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#body示例"}},[t._v("#")]),t._v(" body示例")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"loginName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"18923803593"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"authCodeType"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"register"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"返回说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回说明"}},[t._v("#")]),t._v(" 返回说明：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("返回值字段")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("字段类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("字段说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("[data]")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("bool")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否成功")])])])]),t._v(" "),s("h3",{attrs:{id:"返回示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回示例"}},[t._v("#")]),t._v(" 返回示例")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ret"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"errcode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"msg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);