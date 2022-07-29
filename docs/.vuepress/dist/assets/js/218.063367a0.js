(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{593:function(t,s,a){"use strict";a.r(s);var n=a(46),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"presentable授权业务逻辑实现过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#presentable授权业务逻辑实现过程"}},[t._v("#")]),t._v(" presentable授权业务逻辑实现过程")]),t._v(" "),a("h2",{attrs:{id:"c端消费者授权流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c端消费者授权流程"}},[t._v("#")]),t._v(" C端消费者授权流程")]),t._v(" "),a("p",[t._v("1.授权服务检测用户是否与presentable签订合约,并且合约设置为默认执行态.")]),t._v(" "),a("p",[t._v("2.如果授权服务检测结果为否,则遍历当前presentable的授权策略,如果有任意策略能通过免费策略授权检测,则系统自动隐式为消费者创建合约.否则终止授权,返回未找到可用合约错误码.")]),t._v(" "),a("p",[t._v("3.如果授权服务检测结果为是,授权服务则继续检测当前默认执行合约是否依然满足合约的身份限制部分.如果不满足,则终止授权,返回身份授权失败错误码")]),t._v(" "),a("p",[t._v("4.授权服务继续检测当前默认执行合约的状态机部分,如果合约当前状态未获得active授权.则终止授权,返回合约未激活错误码")]),t._v(" "),a("p",[t._v("5.以上4条检测通过,则C端消费者合约获得授权,授权服务会进行presentable与源资源之间的授权.")]),t._v(" "),a("p",[t._v("6.特别说明:如果当前不存在登录用户,则授权服务直接遍历检测presentable的授权策略中是否存在免费的授权策略,如果存在,则通过消费者合约部分授权.")]),t._v(" "),a("p",[t._v("流程图如下:\n"),a("img",{attrs:{src:"/images/%E6%B6%88%E8%B4%B9%E8%80%85%E6%8E%88%E6%9D%83%E6%B5%81%E7%A8%8B%E5%9B%BE.jpg",alt:"avatar"}})]),t._v(" "),a("h2",{attrs:{id:"节点资源授权流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#节点资源授权流程"}},[t._v("#")]),t._v(" 节点资源授权流程")]),t._v(" "),a("p",[t._v("1.授权服务根据presentable检索得到presentable的授权树数据(数据结构后面说明).然后把授权树数据分为节点-资源合约和资源-资源合约两部分")]),t._v(" "),a("p",[t._v("2.授权服务遍历节点-资源合约的当前状态,检测是否获得active授权,如果有任意合约未获得active授权,则终止授权,返回节点与资源的合约未激活错误码")]),t._v(" "),a("p",[t._v("3.授权服务遍历节点-资源合约的身份限制部分(节点是否符合身份限制).如果有任意合约不满足身份授权.则终止授权,返回节点与资源的合约未获得身份授权")]),t._v(" "),a("p",[t._v("4.授权服务遍历资源-资源合约的当前状态,检测是否获得active授权,如果有任意合约未获得active授权,则终止授权,返回资源与资源的合约未激活错误码(此错误节点已经无法处理,属于上游违约)")]),t._v(" "),a("p",[t._v("5.授权服务遍历资源-资源合约的身份限制部分(合约的乙方是否符合身份限制).如果有任意合约不满足身份授权.则终止授权,返回资源与资源的合约未获得身份授权(此错误节点已经无法处理,属于上游违约)")]),t._v(" "),a("p",[t._v("6.以上检测如果通过,则整个presentable授权链通过授权.")]),t._v(" "),a("p",[t._v("流程图如下:\n"),a("img",{attrs:{src:"/images/%E8%8A%82%E7%82%B9%E8%B5%84%E6%BA%90%E6%8E%88%E6%9D%83%E6%B5%81%E7%A8%8B%E5%9B%BE.jpg",alt:"avatar"}})]),t._v(" "),a("h2",{attrs:{id:"授权方案详细说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#授权方案详细说明"}},[t._v("#")]),t._v(" 授权方案详细说明")]),t._v(" "),a("p",[t._v("1.根据freelog的业务设计原则,每一个资源都允许存在多个授权方案.")]),t._v(" "),a("p",[t._v("2.每个授权方案主要包含声明部分,上抛部分以及策略部分.")]),t._v(" "),a("p",[t._v("3.声明部分和上抛部分的数据来源于其主体所依赖的资源的授权方案.在创建授权方案的过程中,由资源作者主动选择处理与不处理的部分.依赖树也是在这个时候逐步转变成授权树.")]),t._v(" "),a("p",[t._v("4.授权方案选择不同的声明与上抛,则对应的授权树也会发生变化.但是授权方案对应的主体资源的依赖树则在资源创建时就已经确定.")]),t._v(" "),a("p",[t._v("5.依赖树主要是体现出资源的实际依赖物理结构,授权树主要体现的是依赖树上不同的节点之间的合约授权关系.")]),t._v(" "),a("p",[t._v("6.依赖树上的各个节点由多个不同角色和身份的用户各自承担部分授权,从而完成整个依赖树的授权.用来记录不同节点之间的授权部分的数据,称之为授权树")]),t._v(" "),a("h2",{attrs:{id:"授权树演变过程说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#授权树演变过程说明"}},[t._v("#")]),t._v(" 授权树演变过程说明")]),t._v(" "),a("p",[t._v("下图所示为资源的依赖树:\n"),a("img",{attrs:{src:"/images/%E8%B5%84%E6%BA%90%E4%BE%9D%E8%B5%96.jpg",alt:"avatar"}})]),t._v(" "),a("p",[t._v("A.假设所有的资源的资源都有且只存在一个名为AN1的授权方案,并且授权方案中全部处理掉所有依赖,零上抛资源.则所有复合资源的AN1授权方案对应的授权树与其依赖树结构一致.")]),t._v(" "),a("p",[t._v("B.假设以后A1资源新建一个名为A1-AN2的授权方案,并且授权方案选择声明处理A2,上抛B2和C2. 然后A资源也新建一个名为A-AN2的授权方案,并且在依赖处理上选择A1-AN2,B1-AN1,B2-AN1,C2-AN1,C1-AN1(零上抛),则A-AN2的授权树结构如下\n"),a("img",{attrs:{src:"/images/%E6%8E%88%E6%9D%83%E6%A0%911.jpg",alt:"avatar"}})]),t._v(" "),a("p",[t._v("C.假设以后D2资源新建一个名为D2-AN2的授权方案,并且声明处理A3,上抛C2. 然后B1资源也选择新建一个B1-AN2的授权方案.并且在依赖上选择了A2-AN1,D2-AN2,C2-AN1(零上抛),则B1-AN2的授权树结构如下\n"),a("img",{attrs:{src:"/images/%E6%8E%88%E6%9D%83%E6%A0%912.jpg",alt:"avatar"}})]),t._v(" "),a("p",[t._v("D.假设以后A资源新建一个名为A-AN3的授权方案.并且在依赖处理上选择了A1-AN2,B1-AN2,B2-AN1,C2-AN1,C1-AN1(零上抛),则A-AN3的授权树结构如下\n"),a("img",{attrs:{src:"/images/%E6%8E%88%E6%9D%83%E6%A0%913.jpg",alt:"avatar"}})]),t._v(" "),a("p",[t._v("E.假设资源B1以后新建一个名为B1-AN3的授权方案,并且在依赖处理上选择了A2-AN1,D2-AN2,然后上抛了资源C2,然后资源A也新建了一个名为A1-AN4的授权方案,并且在依赖处理上选择了A1-AN2,B1-AN3,B2-AN1,C2-AN1,C1-AN1(零上抛),则A-AN4的授权树结构如下\n"),a("img",{attrs:{src:"/images/%E6%8E%88%E6%9D%83%E6%A0%914.jpg",alt:"avatar"}}),t._v("\n此时我们发现资源A1-AN4在依赖上存在重复的依赖C2,然后系统进行了合并处理.只需要签约一次即可.")]),t._v(" "),a("p",[t._v("F.为了方便查看演变过程,上面图例中授权树使用的是资源名称作为标记.真实的授权树其实标记的是资源的授权方案.因为只有授权方案中的上抛才会发生变动.条件E的实际授权结果为\n"),a("img",{attrs:{src:"/images/%E6%8E%88%E6%9D%83%E6%A0%915.jpg",alt:"avatar"}})]),t._v(" "),a("p",[t._v("G.授权树的实际数据结构即把F的图例转变成数据存储.授权服务根据授权树结构中的授权方案ID获得当前方案下声明以来时绑定的合约.然后对合约授权即可.大概数据结构如下")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"authSchemeId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A1-AN2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"resourceId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"parentAuthSchemeId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A-AN4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deep"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"authSchemeId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B2-AN1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"resourceId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"parentAuthSchemeId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A-AN4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deep"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"authSchemeId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C2-AN2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"resourceId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"parentAuthSchemeId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A-AN4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deep"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"authSchemeId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B1-AN3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"resourceId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"parentAuthSchemeId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A-AN4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deep"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"authSchemeId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C1-AN2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"resourceId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"parentAuthSchemeId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A-AN4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deep"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"authSchemeId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A2-AN1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"resourceId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"parentAuthSchemeId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A1-AN2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deep"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"authSchemeId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A2-AN1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"resourceId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"parentAuthSchemeId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B1-AN3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deep"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"authSchemeId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"D2-AN2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"resourceId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"D2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"parentAuthSchemeId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B1-AN3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deep"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"authSchemeId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A3-AN1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"resourceId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"parentAuthSchemeId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"D2-AN2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deep"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);