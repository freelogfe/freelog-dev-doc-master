(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{622:function(e,r,t){"use strict";t.r(r);var n=t(46),a=Object(n.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"presentable授权流程说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#presentable授权流程说明"}},[e._v("#")]),e._v(" presentable授权流程说明")]),e._v(" "),t("p",[e._v("1.presentable服务检查presentable策略中规定的用户身份,如果满足身份策略,则调用授权服务(segment2),如果不满足,否则直接返回对应错误码(error-handler)")]),e._v(" "),t("p",[e._v("2.授权服务检查用户与节点之间的合同信息.如果用户合同是激活态,则进行资源合同授权(segment3),如果合同不是激活态或者没有合同,否则返回对应错误码(error-handler)")]),e._v(" "),t("p",[e._v("3.授权服务检查节点是否符合资源合同中规定的身份策略.如果满足,则检查合同是否是激活态,否则返回对应的错误码(error-handler)")]),e._v(" "),t("p",[e._v("##error-handler:")]),e._v(" "),t("p",[e._v("1.如果presentable身份策略不满足,则直接返回错误码")]),e._v(" "),t("p",[e._v("2.如果授权服务返回的合同不是激活态,则直接返回错误码")]),e._v(" "),t("p",[e._v("3.如果授权服务返回的用户没有合同,并且policy是initial-terminat模式,则默认自动创建合同,然后再次请求授权服务")]),e._v(" "),t("p",[e._v("4.如果授权服务返回节点与资源的合同不是激活态,则直接返回对应错误码")])])}),[],!1,null,null,null);r.default=a.exports}}]);