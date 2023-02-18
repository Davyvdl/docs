"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[8935],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const s="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(7462),r=n(7294),s=n(6010),l=n(2466),o=n(6775),i=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=d(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[i,u]=b({queryString:n,groupId:a}),[p,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),f=(()=>{const e=i??p;return m({value:e,tabValues:s})?e:null})();(0,r.useEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),k(e)}),[u,k,s]),tabValues:s}}var f=n(2389);const h="tabList__CuJ",g="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:o,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(p(t),i(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,s.Z)("tabs__item",g,null==l?void 0:l.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=k(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",h)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function T(e){const t=(0,f.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},8399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),s=n(4866),l=n(5162);const o={sidebar_label:"Mint an LSP7 Digital Asset (Token)",sidebar_position:2},i="Create an LSP7 Digital Asset (Token)",u={unversionedId:"guides/digital-assets/mint-lsp7-digital-asset",id:"guides/digital-assets/mint-lsp7-digital-asset",title:"Create an LSP7 Digital Asset (Token)",description:"This guide will teach you how to mint some (LSP7 Digital Asset) tokens to your Universal Profile.",source:"@site/docs/guides/digital-assets/mint-lsp7-digital-asset.md",sourceDirName:"guides/digital-assets",slug:"/guides/digital-assets/mint-lsp7-digital-asset",permalink:"/guides/digital-assets/mint-lsp7-digital-asset",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/guides/digital-assets/mint-lsp7-digital-asset.md",tags:[],version:"current",lastUpdatedAt:1676652076,formattedLastUpdatedAt:"Feb 17, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"Mint an LSP7 Digital Asset (Token)",sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"Create an LSP7 Digital Asset (Token)",permalink:"/guides/digital-assets/create-lsp7-digital-asset"},next:{title:"Transfer an LSP7 Digital Asset (Token)",permalink:"/guides/digital-assets/transfer-lsp7-digital-asset"}},c={},p=[{value:"Mint tokens for your Universal Profile",id:"mint-tokens-for-your-universal-profile",level:2},{value:"Step 1 - Setup imports and constants",id:"step-1---setup-imports-and-constants",level:3},{value:"Step 2 - Instantiate contracts",id:"step-2---instantiate-contracts",level:3},{value:"Step 3 - Send transaction",id:"step-3---send-transaction",level:3},{value:"Final code",id:"final-code",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-an-lsp7-digital-asset-token"},"Create an LSP7 Digital Asset (Token)"),(0,r.kt)("p",null,"This guide will teach you how to mint some (",(0,r.kt)("a",{parentName:"p",href:"../../standards/nft-2.0/lsp7-digital-asset"},(0,r.kt)("strong",{parentName:"a"},"LSP7 Digital Asset")),") tokens to your ",(0,r.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp0-erc725account"},(0,r.kt)("strong",{parentName:"a"},"Universal Profile")),"."),(0,r.kt)("h2",{id:"mint-tokens-for-your-universal-profile"},"Mint tokens for your Universal Profile"),(0,r.kt)("p",null,"The code snippet below shows how to mint 100 tokens with your Universal Profile as a beneficiary."),(0,r.kt)("p",null,"Make sure you have the following dependencies installed before beginning this tutorial."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can use either ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/web3/web3.js"},(0,r.kt)("inlineCode",{parentName:"a"},"web3.js"))," or ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ethers-io/ethers.js/"},(0,r.kt)("inlineCode",{parentName:"a"},"ethers.js"))),(0,r.kt)("li",{parentName:"ul"},"You MUST install ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/lsp-smart-contracts/"},(0,r.kt)("inlineCode",{parentName:"a"},"@lukso/lsp-smart-contracts")))),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Install the dependencies"',title:'"Install',the:!0,'dependencies"':!0},"npm install web3 @lukso/lsp-smart-contracts\n"))),(0,r.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Install the dependencies"',title:'"Install',the:!0,'dependencies"':!0},"npm install ethers @lukso/lsp-smart-contracts\n")))),(0,r.kt)("h3",{id:"step-1---setup-imports-and-constants"},"Step 1 - Setup imports and constants"),(0,r.kt)("p",null,"At this point you will need a private key in order to mint some tokens as well as the ",(0,r.kt)("inlineCode",{parentName:"p"},"LSP7Mintable")," ",(0,r.kt)("em",{parentName:"p"},"token contract address"),".\nWe will import ",(0,r.kt)("inlineCode",{parentName:"p"},"LSP7Mintable")," in order to get the ",(0,r.kt)("em",{parentName:"p"},"ABI")," of the contract that we will interact with."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import LSP7Mintable from '@lukso/lsp-smart-contracts/artifacts/LSP7Mintable.json';\nimport Web3 from 'web3';\n\nconst web3 = new Web3('https://rpc.l16.lukso.network');\nconst privateKey = '0x...';\nconst myTokenAddress = '0x...';\n\n// setup your EOA\nconst account = web3.eth.accounts.wallet.add(privateKey);\n"))),(0,r.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import LSP7Mintable from '@lukso/lsp-smart-contracts/artifacts/LSP7Mintable.json';\nimport { ethers } from 'ethers';\n\nconst provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');\nconst privateKey = '0x...';\nconst myTokenAddress = '0x...';\n\n// setup your EOA\nconst myEOA = new ethers.Wallet(privateKey).connect(provider);\n")))),(0,r.kt)("h3",{id:"step-2---instantiate-contracts"},"Step 2 - Instantiate contracts"),(0,r.kt)("p",null,"At this point, the ",(0,r.kt)("inlineCode",{parentName:"p"},"LPS7Mintable")," contract is being prepared for the following intercation. We construct an instance of a contract, using ",(0,r.kt)("em",{parentName:"p"},"contract ABI")," and ",(0,r.kt)("em",{parentName:"p"},"contract address"),"."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const myToken = new web3.eth.Contract(LSP7Mintable.abi, myTokenAddress);\n"))),(0,r.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const myToken = new ethers.Contract(myTokenAddress, LSP7Mintable.abi);\n")))),(0,r.kt)("h3",{id:"step-3---send-transaction"},"Step 3 - Send transaction"),(0,r.kt)("p",null,"Finally, we send the transaction and mint some tokens to the Universal Profile of your choosing."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The contract that we are using as a example in this guied allows minting Digital Assets ",(0,r.kt)("strong",{parentName:"p"},"only to the owner")," of the contract. There might be contracts that don't have this ",(0,r.kt)("em",{parentName:"p"},"requirement"),".")),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"await myToken.methods.mint('<up-address>', 100, false, '0x').send({\n  from: myEOA,\n});\n"))),(0,r.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"await myToken.connect(myEOA).mint('<up-address>', 100, false, '0x');\n")))),(0,r.kt)("h3",{id:"final-code"},"Final code"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import LSP7Mintable from '@lukso/lsp-smart-contracts/artifacts/LSP7Mintable.json';\nimport Web3 from 'web3';\n\nconst web3 = new Web3('https://rpc.l16.lukso.network');\nconst privateKey = '0x...';\nconst myTokenAddress = '0x...';\n\n// setup your EOA\nconst account = web3.eth.accounts.wallet.add(privateKey);\n\nconst myToken = new web3.eth.Contract(LSP7Mintable.abi, myTokenAddress);\n\nawait myToken.methods.mint('<up-address>', 100, false, '0x').send({\n  from: myEOA,\n});\n"))),(0,r.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import LSP7Mintable from '@lukso/lsp-smart-contracts/artifacts/LSP7Mintable.json';\nimport { ethers } from 'ethers';\n\nconst provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');\nconst privateKey = '0x...';\nconst myTokenAddress = '0x...';\n\n// setup your EOA\nconst myEOA = new ethers.Wallet(privateKey).connect(provider);\n\nconst myToken = new ethers.Contract(myTokenAddress, LSP7Mintable.abi);\n\nawait myToken.connect(myEOA).mint('<up-address>', 100, false, '0x');\n")))))}m.isMDXComponent=!0}}]);