(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{509:function(e,t,o){"use strict";o.r(t);var n=o(43),a=Object(n.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("💡 Learn more : "),o("a",{attrs:{href:"https://docs.microsoft.com/cli/azure?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Command-Line Interface (CLI)"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h4",{attrs:{id:"configure-the-azure-cli-to-set-defaults-and-more"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-azure-cli-to-set-defaults-and-more","aria-hidden":"true"}},[e._v("#")]),e._v(" Configure the Azure CLI to set Defaults and More")]),e._v(" "),o("p",[e._v("In my last tip, I covered using the "),o("code",[e._v("--output Table")]),e._v(" parameter to customize the results from the Azure CLI. You can also set it as a default amongst other thing. Simply run "),o("code",[e._v("az configure")]),e._v(" and you'll see the following :")]),e._v(" "),o("pre",[o("code",[e._v("Your settings can be found at /home/mbcrump/.azure/config\nYour current configuration is as follows:\n\n[cloud]\nname = AzureCloud\n\n[core]\nfirst_run = yes\noutput = table\ncollect_telemetry = yes\n\n[logging]\nenable_log_file = no\n\nDo you wish to change your settings? (y/N):\n")])]),e._v(" "),o("p",[e._v("If you press Y, then you'll get an option to change the default output as shown below:")]),e._v(" "),o("pre",[o("code",[e._v("What default output format would you like?\n [1] json - JSON formatted output that most closely matches API responses\n [2] jsonc - Colored JSON formatted output that most closely matches API responses\n [3] table - Human-readable output format\n [4] tsv - Tab and Newline delimited, great for GREP, AWK, etc.\n")])]),e._v(" "),o("p",[e._v("If you make a selection, then you'll see an option to add file logging:")]),e._v(" "),o("pre",[o("code",[e._v("Would you like to enable logging to file?\n")])]),e._v(" "),o("p",[e._v("And finally an option to opt into data collection:")]),e._v(" "),o("pre",[o("code",[e._v('Microsoft would like to collect anonymous Azure CLI usage data to improve our CLI.  Participation is voluntary and when you choose to participate, your device automatically sends information to Microsoft about how you use Azure CLI.  To update your choice, run "az configure" again.\nSelect y to enable data collection. (Y/n):\n')])]),e._v(" "),o("p",[e._v("Here is a sample of setting the configuration and running a command:")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/azuretip8.gif")}})])},[],!1,null,null,null);t.default=a.exports}}]);