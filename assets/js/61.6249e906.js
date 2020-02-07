(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{366:function(t,s,a){"use strict";a.r(s);var e=a(43),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("App Service Documentation"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h4",{attrs:{id:"use-powershell-to-quickly-see-if-your-deployment-slot-swapped-successfully"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-powershell-to-quickly-see-if-your-deployment-slot-swapped-successfully","aria-hidden":"true"}},[t._v("#")]),t._v(" Use PowerShell to quickly see if your Deployment Slot Swapped Successfully")]),t._v(" "),a("p",[t._v("A common scenario after sending a swap action to Azure App Service is to check its progress. While you can easily use the Azure Portal, another alternative that I often use is PowerShell.")]),t._v(" "),a("p",[t._v("You'll quickly learn that "),a("code",[t._v("Microsoft.Web/sites/slots/slotsswap/action")]),t._v(' contains the information "Succeeded" that you are looking for at the 50th character if you start digging around in the PowerShell and Azure docs.')]),t._v(" "),a("p",[t._v("We can wrap this up in a bow with the following line:")]),t._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$a")]),t._v(" = Get"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzureRmLog "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ResourceGroupName <ResourceGroupName> "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Where-Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("operationname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-contains")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Microsoft.Web/sites/slots/slotsswap/action"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-eq")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Succeeded'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eventtimestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("operationname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resourceid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("substring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("50"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("Now if you paste this in PowerShell, you should get the following:")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/powershellslot1.png")}}),t._v(" "),a("p",[t._v("As always, I hoped this help someone out there!")])])},[],!1,null,null,null);s.default=n.exports}}]);