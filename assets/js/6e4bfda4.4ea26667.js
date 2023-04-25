"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[8059],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>w});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(n),w=a,m=d["".concat(p,".").concat(w)]||d[w]||h[w]||o;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function w(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"LSP14 - Ownable 2-Step",sidebar_position:3},s="LSP14 - Ownable 2-Step",i={unversionedId:"standards/generic-standards/lsp14-ownable-2-step",id:"standards/generic-standards/lsp14-ownable-2-step",title:"LSP14 - Ownable 2-Step",description:"LSP14 - Ownable 2-Step",source:"@site/docs/standards/generic-standards/lsp14-ownable-2-step.md",sourceDirName:"standards/generic-standards",slug:"/standards/generic-standards/lsp14-ownable-2-step",permalink:"/standards/generic-standards/lsp14-ownable-2-step",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/generic-standards/lsp14-ownable-2-step.md",tags:[],version:"current",lastUpdatedAt:1682408402,formattedLastUpdatedAt:"Apr 25, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"LSP14 - Ownable 2-Step",sidebar_position:3},sidebar:"standardsSidebar",previous:{title:"LSP1 - Universal Receiver Delegate",permalink:"/standards/generic-standards/lsp1-universal-receiver-delegate"},next:{title:"LSP2 - ERC725Y JSON Schema",permalink:"/standards/generic-standards/lsp2-json-schema"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"What does this standard represent ?",id:"what-does-this-standard-represent-",level:2},{value:"Transferring the contract ownership",id:"transferring-the-contract-ownership",level:3},{value:"Transfer Ownership Hook",id:"transfer-ownership-hook",level:4},{value:"Accept Ownership Hooks",id:"accept-ownership-hooks",level:4},{value:"Renouncing the contract ownership",id:"renouncing-the-contract-ownership",level:3}],l={toc:c};function h(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lsp14---ownable-2-step"},"LSP14 - Ownable 2-Step"),(0,a.kt)("admonition",{title:"Standard Document",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-14-Ownable2Step.md"},"LSP14 - Ownable 2-Step"))),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In the current ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-173"},"EIP173 - Contract Ownership Standard")," standard (EIP173), ownership of a contract is transferred directly in one transaction via ",(0,a.kt)("inlineCode",{parentName:"p"},"transferOwnership(...)"),". This presents some risks. For instance if the new owner:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"is an EOA that lost its private key."),(0,a.kt)("li",{parentName:"ul"},"is an ",(0,a.kt)("inlineCode",{parentName:"li"},"address")," entered incorrectly.")),(0,a.kt)("p",null,"Renouncing ownership of the contract in ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-173"},"EIP173 - Contract Ownership Standard")," is also done in one transaction. If the owner accidentally calls ",(0,a.kt)("inlineCode",{parentName:"p"},"renounceOwnership()"),", this leads to losing access to the contract."),(0,a.kt)("p",null,"What is needed is a safer mechanism for managing contract ownership."),(0,a.kt)("h2",{id:"what-does-this-standard-represent-"},"What does this standard represent ?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"LSP14 - Ownable2Step")," is an extended version of ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-173"},"EIP173 - Contract Ownership Standard")," that uses a 2-step process for transferring and renouncing ownership."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"LSP14 - Ownable2Step")," modifies the processes of ",(0,a.kt)("em",{parentName:"p"},"tranferring and renouncing ownership")," in the following way:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"For ",(0,a.kt)("em",{parentName:"p"},"transferring ownership")," the method ",(0,a.kt)("inlineCode",{parentName:"p"},"transferOwnership(...)")," is modified in a way so the ",(0,a.kt)("strong",{parentName:"p"},"address")," passed as parameter will not be the owner directly but a pending owner. A new method is introduced, ",(0,a.kt)("inlineCode",{parentName:"p"},"acceptOwnership()"),", which should be called by the ",(0,a.kt)("strong",{parentName:"p"},"pending owner")," in order for the process of ",(0,a.kt)("em",{parentName:"p"},"transferring ownership")," to be complete.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"For ",(0,a.kt)("em",{parentName:"p"},"renouncing ownership")," the method ",(0,a.kt)("inlineCode",{parentName:"p"},"renounceOwnership()")," is modified in the following way. The ",(0,a.kt)("strong",{parentName:"p"},"owner")," of the contract need to firstly initiate the process of ",(0,a.kt)("em",{parentName:"p"},"renouncing ownership")," which starts a countdown of ",(0,a.kt)("strong",{parentName:"p"},"200 blocks")," which are broken into two ",(0,a.kt)("em",{parentName:"p"},"distinct periods"),". The ",(0,a.kt)("strong",{parentName:"p"},"first 100 blocks")," are meant to be waited, a period when one can reflect upon the desire of renouncing ownership of the contract. The ",(0,a.kt)("strong",{parentName:"p"},"second 100 blocks")," are meant for confirming the ownership renouncement process. After a total of ",(0,a.kt)("strong",{parentName:"p"},"200 blocks")," pass from the initiation, the process is restarted."))),(0,a.kt)("p",null,"In addition, this standard defines hooks that call the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp0-erc725-account#universalreceiver"},"universalReceiver(...)"))," function of the current owner and new owner, if these addresses are contracts that implement LSP1."),(0,a.kt)("h3",{id:"transferring-the-contract-ownership"},"Transferring the contract ownership"),(0,a.kt)("p",null,"The control of the contract is fully transferred ",(0,a.kt)("em",{parentName:"p"},"once the new owner has accepted the new ownership"),". The 2 steps of ownership transfer are described below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The previous owner transfers ownership to a new owner via the ",(0,a.kt)("a",{parentName:"li",href:"/standards/smart-contracts/lsp14-ownable-2-step#transferownership"},(0,a.kt)("inlineCode",{parentName:"a"},"transferOwnership(...)"))," function.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Transfer Ownership",src:n(2024).Z,width:"1938",height:"515"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"The new owner claims ownership of the contract by calling the ",(0,a.kt)("a",{parentName:"li",href:"/standards/smart-contracts/lsp14-ownable-2-step#acceptownership"},(0,a.kt)("inlineCode",{parentName:"a"},"acceptOwnership()")),"` function.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Accept Ownership",src:n(7186).Z,width:"2648",height:"849"})),(0,a.kt)("p",null,"By making the new owner accept ownership explicitly, ",(0,a.kt)("strong",{parentName:"p"},"LSP14 - Ownable2Step")," ensures that the new owner has access to his address."),(0,a.kt)("h4",{id:"transfer-ownership-hook"},"Transfer Ownership Hook"),(0,a.kt)("p",null,"This hook is designed to ",(0,a.kt)("em",{parentName:"p"},"notify the new owner")," of the contract that he should accept ownership.\nThe hook is executed whenever the owner ",(0,a.kt)("em",{parentName:"p"},"initiates the process of transferring ownership")," and only if the new owner is a contract that ",(0,a.kt)("strong",{parentName:"p"},"implements LSP1"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Transfer Ownership Notification",src:n(4393).Z,width:"2413",height:"932"})),(0,a.kt)("h4",{id:"accept-ownership-hooks"},"Accept Ownership Hooks"),(0,a.kt)("p",null,"These hooks are designed to ",(0,a.kt)("em",{parentName:"p"},"notify the previous and new owner")," when ownership of the contract has been fully transferred. One hook notifies the previous owner and the second one notifies the new owner.\nEach hook is executed whenever the ",(0,a.kt)("em",{parentName:"p"},"new owner confirms the process of tranferring ownership"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The hook that notifies the previous owner is only executed if the previous owner is a contract that ",(0,a.kt)("strong",{parentName:"li"},"implements LSP1"),"."),(0,a.kt)("li",{parentName:"ul"},"The hook that notifies the new owner is only executed if the new owner is a contract that ",(0,a.kt)("strong",{parentName:"li"},"implements LSP1"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Accept Ownership Notification",src:n(2646).Z,width:"2475",height:"908"})),(0,a.kt)("h3",{id:"renouncing-the-contract-ownership"},"Renouncing the contract ownership"),(0,a.kt)("p",null,"The control of the contract is refully renounced ",(0,a.kt)("em",{parentName:"p"},"once the owner of the contract confirmes the ownership renouncement"),". The 2 steps of ownership renouncement are described below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The owner initiates the process of ownerhsip renouncement via the ",(0,a.kt)("a",{parentName:"p",href:"/standards/smart-contracts/lsp14-ownable-2-step#renounceownership"},"'renounceOwnership()'")," function.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After waiting for 200 blocks to pass from the intiation of the ownership renouncement process the owner has a window of 200 block for confirming the renouncement via ",(0,a.kt)("a",{parentName:"p",href:"/standards/smart-contracts/lsp14-ownable-2-step#renounceownership"},"'renounceOwnership()'"),". If the owner doesn't confirm in that window of time, the process cannot be confirmed and the owner must start again if it was intended to renounce ownership."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Renounce Ownership",src:n(5539).Z,width:"3324",height:"1203"})))}h.isMDXComponent=!0},2646:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/accept-ownership-notification-28add1b54eaf7a199b67acd33f66aa9a.jpeg"},7186:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/accept-ownership-7af5143013ef19d31ec8fd54d85bbdce.jpeg"},5539:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/renounce-ownership-f275d0a82612db5dc5ddf9be320f76bc.jpeg"},4393:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/transfer-ownership-notification-c7512e54088f107acc3b65d9adc98de3.jpeg"},2024:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/transfer-ownership-896f04977f780d018400d7f7e2e5ce70.jpeg"}}]);