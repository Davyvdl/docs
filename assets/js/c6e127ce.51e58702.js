"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[1947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>P});var a=n(7462),r=n(7294),s=n(6010),o=n(2466),l=n(6775),i=n(1980),c=n(7392),u=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[i,c]=h({queryString:n,groupId:a}),[d,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=i??d;return m({value:e,tabValues:s})?e:null})();(0,r.useEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),y(e)}),[c,y,s]),tabValues:s}}var g=n(2389);const k="tabList__CuJ",b="tabItem_LNqP";function f(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(d(t),i(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},o,{className:(0,s.Z)("tabs__item",b,null==o?void 0:o.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=y(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",k)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function P(e){const t=(0,g.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},8618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),s=n(4866),o=n(5162);const l={sidebar_label:"Execute Relay Transactions",sidebar_position:3},i="Execute Relay Transactions",c={unversionedId:"guides/key-manager/execute-relay-transactions",id:"guides/key-manager/execute-relay-transactions",title:"Execute Relay Transactions",description:"The LSP6 KeyManager standard enables anybody to execute a transaction on behalf of a Universal Profile, given they have a valid transaction which has been signed by a key that controls the Universal Profile.",source:"@site/docs/guides/key-manager/execute-relay-transactions.md",sourceDirName:"guides/key-manager",slug:"/guides/key-manager/execute-relay-transactions",permalink:"/guides/key-manager/execute-relay-transactions",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/guides/key-manager/execute-relay-transactions.md",tags:[],version:"current",lastUpdatedAt:1676678146,formattedLastUpdatedAt:"Feb 17, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"Execute Relay Transactions",sidebar_position:3},sidebar:"guidesSidebar",previous:{title:"Get controller addresses",permalink:"/guides/key-manager/get-controllers"},next:{title:"Upgrade LSP6 Key Manager",permalink:"/guides/key-manager/upgrade-lsp6"}},u={},d=[{value:"Generate the signed transaction payload",id:"generate-the-signed-transaction-payload",level:2},{value:"Step 1 - Setup imports and constants",id:"step-1---setup-imports-and-constants",level:3},{value:"Step 2 - Prepare the contact instances",id:"step-2---prepare-the-contact-instances",level:3},{value:"Step 3 - Get nonce of the controller address",id:"step-3---get-nonce-of-the-controller-address",level:3},{value:"Step 4 - Encode a transaction ABI",id:"step-4---encode-a-transaction-abi",level:3},{value:"Step 5 - Sign the transaction",id:"step-5---sign-the-transaction",level:3},{value:"Execute via <code>executeRelayCall</code>",id:"execute-via-executerelaycall",level:2},{value:"Final code",id:"final-code",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"execute-relay-transactions"},"Execute Relay Transactions"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp6-key-manager"},"LSP6 KeyManager")," standard enables anybody to execute a transaction on behalf of a Universal Profile, given they have a valid transaction which has been signed by a key that controls the Universal Profile."),(0,r.kt)("p",null,"Relayed execution enables use cases such as Transaction Relayer Services to be possible where users can send their transaction details to a third party to be executed, moving the gas cost burden away from the user who owns the Universal Profile."),(0,r.kt)("p",null,"For example, Alice can send an encoded transaction which updates the ",(0,r.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp3-universal-profile-metadata"},"LSP3Profile")," picture on her Universal Profile to a second user, Bob, who executes the transaction and pays the gas cost of the transaction on behalf of Alice."),(0,r.kt)("p",null,"To execute the transaction, Bob needs to know:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the encoded ABI of the transaction that will get executed,"),(0,r.kt)("li",{parentName:"ul"},"the transaction signature,"),(0,r.kt)("li",{parentName:"ul"},"the nonce of the key that signed the transaction.")),(0,r.kt)("p",null,"The transaction is then executed via the ",(0,r.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp6-key-manager"},"LSP6KeyManager")," function ",(0,r.kt)("inlineCode",{parentName:"p"},"executeRelayCall"),"."),(0,r.kt)("h2",{id:"generate-the-signed-transaction-payload"},"Generate the signed transaction payload"),(0,r.kt)("p",null,"This example shows how to prepare a transaction to be executed by a third party. This logic can be implemented client-side and then sent to a third-party application or service such as a Transaction Relay service to be executed."),(0,r.kt)("p",null,"Make sure you have the following dependencies installed before beginning this tutorial."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can use either ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/web3/web3.js"},(0,r.kt)("inlineCode",{parentName:"a"},"web3.js"))," or ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ethers-io/ethers.js/"},(0,r.kt)("inlineCode",{parentName:"a"},"ethers.js"))),(0,r.kt)("li",{parentName:"ul"},"You MUST install ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/lsp-smart-contracts/"},(0,r.kt)("inlineCode",{parentName:"a"},"@lukso/lsp-smart-contracts"))),(0,r.kt)("li",{parentName:"ul"},"You SHOULD install ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/tools-eip191-signer"},(0,r.kt)("inlineCode",{parentName:"a"},"@lukso/eip191-signer.js")))),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Install the dependencies"',title:'"Install',the:!0,'dependencies"':!0},"npm install web3 @lukso/lsp-smart-contracts @lukso/eip191-signer.js\n"))),(0,r.kt)(o.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Install the dependencies"',title:'"Install',the:!0,'dependencies"':!0},"npm install ethers @lukso/lsp-smart-contracts @lukso/eip191-signer.js\n")))),(0,r.kt)("h3",{id:"step-1---setup-imports-and-constants"},"Step 1 - Setup imports and constants"),(0,r.kt)("p",null,"To encode a transaction, we need the address of the Universal Profile smart contract and the private key of a controller key with sufficient ",(0,r.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp6-key-manager#permissions"},"LSP6 permissions")," to execute the transaction."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Imports & Constants"',title:'"Imports',"&":!0,'Constants"':!0},"import UniversalProfileContract from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport KeyManagerContract from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';\nimport { EIP191Signer } from '@lukso/eip191-signer.js';\nimport { LSP6_VERSION } from '@lukso/lsp-smart-contracts/constants';\nimport Web3 from 'web3';\n\nconst web3 = new Web3('https://rpc.l16.lukso.network');\nconst universalProfileAddress = '0x...';\nconst msgValue = 0; // Amount of native tokens to be sent\n\n// setup the Universal Profile controller account\nconst controllerPrivateKey = '0x...';\nconst controllerAccount = web3.eth.accounts.wallet.add(controllerPrivateKey);\n"))),(0,r.kt)(o.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Imports & Constants"',title:'"Imports',"&":!0,'Constants"':!0},"import UniversalProfileContract from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport KeyManagerContract from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';\nimport { EIP191Signer } from '@lukso/eip191-signer.js';\nimport { LSP6_VERSION } from '@lukso/lsp-smart-contracts/constants';\nimport { ethers } from 'ethers';\n\nconst provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');\nconst universalProfileAddress = '0x...';\nconst msgValue = 0; // Amount of native tokens to be sent\n\n// setup the Universal Profile controller account\nconst controllerPrivateKey = '0x...';\nconst controllerAccount = new ethers.Wallet(controllerPrivateKey).connect(\n  provider,\n);\n")))),(0,r.kt)("h3",{id:"step-2---prepare-the-contact-instances"},"Step 2 - Prepare the contact instances"),(0,r.kt)("p",null,"We will get the contract instances for the ",(0,r.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp0-erc725account"},(0,r.kt)("strong",{parentName:"a"},"Universal Profile"))," and ",(0,r.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp6-key-manager"},(0,r.kt)("strong",{parentName:"a"},"Key Manager"))," for further use in the guide."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Contract instances"',title:'"Contract','instances"':!0},"const universalProfile = new web3.eth.Contract(\n  UniversalProfileContract.abi,\n  universalProfileAddress,\n);\n\nconst keyManagerAddress = await universalProfile.methods.owner().call();\nconst keyManager = new web3.eth.Contract(\n  KeyManagerContract.abi,\n  keyManagerAddress,\n);\n"))),(0,r.kt)(o.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Contract instances"',title:'"Contract','instances"':!0},"const universalProfile = new ethers.Contract(\n  universalProfileAddress,\n  UniversalProfileContract.abi,\n);\n\nconst keyManagerAddress = await universalProfile.owner();\nconst keyManager = new ethers.Contract(\n  keyManagerAddress,\n  KeyManagerContract.abi,\n);\n")))),(0,r.kt)("h3",{id:"step-3---get-nonce-of-the-controller-address"},"Step 3 - Get nonce of the controller address"),(0,r.kt)("p",null,"Get the ",(0,r.kt)("inlineCode",{parentName:"p"},"nonce")," of the controller key from the KeyManager by instantiating the KeyManager smart contract instance and calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"getNonce")," function."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"channelId")," is used to prevent nonce conflicts when multiple apps send transactions to the same KeyManager at the same time. Read more about ",(0,r.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp6-key-manager#out-of-order-execution"},"out of order execution here"),"."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Get the controller key nonce"',title:'"Get',the:!0,controller:!0,key:!0,'nonce"':!0},"const channelId = 0;\nconst nonce = await keyManager.methods\n  .getNonce(controllerAccount.address, channelId)\n  .call();\n"))),(0,r.kt)(o.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Get the controller key nonce"',title:'"Get',the:!0,controller:!0,key:!0,'nonce"':!0},"const channelId = 0;\nconst nonce = await keyManager.getNonce(controllerAccount.address, channelId);\n")))),(0,r.kt)("h3",{id:"step-4---encode-a-transaction-abi"},"Step 4 - Encode a transaction ABI"),(0,r.kt)("p",null,"Encode the ABI of the transaction you want to be executed. In this case, a LYX transfer to a recipient address."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Encode transaction ABI"',title:'"Encode',transaction:!0,'ABI"':!0},"const abiPayload = universalProfile.methods[\n  'execute(uint256,address,uint256,bytes)'\n](\n  0, // Operation type: CALL\n  '0x...', // Recipient address\n  web3.utils.toWei('1'), // Value\n  '0x', // Data\n).encodeABI();\n"))),(0,r.kt)(o.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Encode transaction ABI"',title:'"Encode',transaction:!0,'ABI"':!0},"const abiPayload = universalProfile.interface.encodeFunctionData(\n  'execute(uint256,address,uint256,bytes)',\n  [\n    0, // Operation type: CALL\n    '0x...', // Recipient address\n    web3.utils.toWei('1'), // Value\n    '0x', // Data\n  ],\n);\n")))),(0,r.kt)("admonition",{title:"ERC725X execute",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can find more information about the ",(0,r.kt)("a",{parentName:"p",href:"../../standards/smart-contracts/erc725-contract#execute---erc725x"},"ERC725X ",(0,r.kt)("inlineCode",{parentName:"a"},"execute")," call here"),".")),(0,r.kt)("h3",{id:"step-5---sign-the-transaction"},"Step 5 - Sign the transaction"),(0,r.kt)("p",null,"Afterward, sign the transaction message from the controller key of the Universal Profile."),(0,r.kt)("p",null,"The message is constructed by signing the ",(0,r.kt)("inlineCode",{parentName:"p"},"keyManagerAddress"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"keyManagerVersion"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"chainId"),", signer ",(0,r.kt)("inlineCode",{parentName:"p"},"nonce"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"abiPayload"),"."),(0,r.kt)("p",null,"For more information check: ",(0,r.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp6-key-manager#how-to-sign-relay-transactions"},(0,r.kt)("strong",{parentName:"a"},"How to sign relay transactions?"))),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Sign the transaction"',title:'"Sign',the:!0,'transaction"':!0},"const chainId = await web3.eth.getChainId(); // will be 2828 on L16\n\nlet encodedMessage = web3.utils.encodePacked(\n  { value: LSP6_VERSION, type: 'uint256' },\n  { value: chainId, type: 'uint256' },\n  { value: nonce, type: 'uint256' },\n  { value: msgValue, type: 'uint256' },\n  { value: abiPayload, type: 'bytes' },\n);\n\nlet eip191Signer = new EIP191Signer();\n\nlet { signature } = await eip191Signer.signDataWithIntendedValidator(\n  keyManagerAddress,\n  encodedMessage,\n  controllerPrivateKey,\n);\n"))),(0,r.kt)(o.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Sign the transaction"',title:'"Sign',the:!0,'transaction"':!0},"const { chainId } = await provider.getNetwork(); // will be 2828 on L16\n\nlet encodedMessage = web3.utils.encodePacked(\n  { value: LSP6_VERSION, type: 'uint256' },\n  { value: chainId, type: 'uint256' },\n  { value: nonce, type: 'uint256' },\n  { value: msgValue, type: 'uint256' },\n  { value: abiPayload, type: 'bytes' },\n);\n\nlet eip191Signer = new EIP191Signer();\n\nlet { signature } = await eip191Signer.signDataWithIntendedValidator(\n  keyManagerAddress,\n  encodedMessage,\n  controllerPrivateKey,\n);\n")))),(0,r.kt)("p",null,"Now the ",(0,r.kt)("inlineCode",{parentName:"p"},"signature"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"abiPayload"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"nonce")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"keyManagerAddress")," can be sent to a third party to execute the transaction using ",(0,r.kt)("a",{parentName:"p",href:"../../standards/smart-contracts/lsp6-key-manager#executerelaycall"},(0,r.kt)("inlineCode",{parentName:"a"},"executeRelayCall")),"."),(0,r.kt)("h2",{id:"execute-via-executerelaycall"},"Execute via ",(0,r.kt)("inlineCode",{parentName:"h2"},"executeRelayCall")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This example shows how a third party can execute a transaction on behalf of another user.")),(0,r.kt)("p",null,"To execute a signed transaction ABI payload requires:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("strong",{parentName:"li"},"KeyManager contract address")),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("strong",{parentName:"li"},"transaction ABI payload")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"signed transaction payload")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nonce")," of the controller key which signed the transaction.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To get the KeyManager address from the UniversalProfile address, call the ",(0,r.kt)("inlineCode",{parentName:"p"},"owner")," function on the Universal Profile contract.")),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Send the transaction"',title:'"Send',the:!0,'transaction"':!0},"const executeRelayCallTransaction = await keyManager.methods[\n  'executeRelayCall(bytes,uint256,bytes)'\n](signature, nonce, abiPayload).send({\n  from: controllerAccount.address,\n  gasLimit: 300_000,\n});\n"))),(0,r.kt)(o.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Send the transaction"',title:'"Send',the:!0,'transaction"':!0},"const executeRelayCallTransaction = await keyManager\n  .connect(controllerAccount)\n  ['executeRelayCall(bytes,uint256,bytes)'](signature, nonce, abiPayload);\n")))),(0,r.kt)("admonition",{title:"LSP6KeyManager executeRelayCall",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can find more information about the ",(0,r.kt)("a",{parentName:"p",href:"../../standards/smart-contracts/lsp6-key-manager#executerelaycall"},"LSP6KeyManager ",(0,r.kt)("inlineCode",{parentName:"a"},"executeRelayCall")," here"),".")),(0,r.kt)("h2",{id:"final-code"},"Final code"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Final code"',title:'"Final','code"':!0},"import UniversalProfileContract from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport KeyManagerContract from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';\nimport { EIP191Signer } from '@lukso/eip191-signer.js';\nimport { LSP6_VERSION } from '@lukso/lsp-smart-contracts/constants';\nimport Web3 from 'web3';\n\nconst web3 = new Web3('https://rpc.l16.lukso.network');\nconst universalProfileAddress = '0x...';\nconst msgValue = 0; // Amount of native tokens to be sent\n\n// setup the Universal Profile controller account\nconst controllerPrivateKey = '0x...';\nconst controllerAccount = web3.eth.accounts.wallet.add(controllerPrivateKey);\n\nconst universalProfile = new web3.eth.Contract(\n  UniversalProfileContract.abi,\n  universalProfileAddress,\n);\n\nconst keyManagerAddress = await universalProfile.methods.owner().call();\nconst keyManager = new web3.eth.Contract(\n  KeyManagerContract.abi,\n  keyManagerAddress,\n);\n\nconst channelId = 0;\nconst nonce = await keyManager.methods\n  .getNonce(controllerAccount.address, channelId)\n  .call();\n\nconst abiPayload = universalProfile.methods[\n  'execute(uint256,address,uint256,bytes)'\n](\n  0, // Operation type: CALL\n  '0x...', // Recipient address\n  web3.utils.toWei('1'), // Value\n  '0x', // Data\n).encodeABI();\n\nconst chainId = await web3.eth.getChainId(); // will be 2828 on L16\n\nlet encodedMessage = web3.utils.encodePacked(\n  { value: LSP6_VERSION, type: 'uint256' },\n  { value: chainId, type: 'uint256' },\n  { value: nonce, type: 'uint256' },\n  { value: msgValue, type: 'uint256' },\n  { value: abiPayload, type: 'bytes' },\n);\n\nlet eip191Signer = new EIP191Signer();\n\nlet { signature } = await eip191Signer.signDataWithIntendedValidator(\n  keyManagerAddress,\n  encodedMessage,\n  controllerPrivateKey,\n);\n\nconst executeRelayCallTransaction = await keyManager.methods[\n  'executeRelayCall(bytes,uint256,bytes)'\n](signature, nonce, abiPayload).send({\n  from: controllerAccount.address,\n  gasLimit: 300_000,\n});\n"))),(0,r.kt)(o.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Final code"',title:'"Final','code"':!0},"import UniversalProfileContract from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport KeyManagerContract from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';\nimport { EIP191Signer } from '@lukso/eip191-signer.js';\nimport { LSP6_VERSION } from '@lukso/lsp-smart-contracts/constants';\nimport { ethers } from 'ethers';\n\nconst provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');\nconst universalProfileAddress = '0x...';\nconst msgValue = 0; // Amount of native tokens to be sent\n\n// setup the Universal Profile controller account\nconst controllerPrivateKey = '0x...';\nconst controllerAccount = new ethers.Wallet(controllerPrivateKey).connect(\n  provider,\n);\n\nconst universalProfile = new ethers.Contract(\n  universalProfileAddress,\n  UniversalProfileContract.abi,\n);\n\nconst keyManagerAddress = await universalProfile.owner();\nconst keyManager = new ethers.Contract(\n  keyManagerAddress,\n  KeyManagerContract.abi,\n);\n\nconst channelId = 0;\nconst nonce = await keyManager.getNonce(controllerAccount.address, channelId);\n\nconst abiPayload = universalProfile.interface.encodeFunctionData(\n  'execute(uint256,address,uint256,bytes)',\n  [\n    0, // Operation type: CALL\n    '0x...', // Recipient address\n    web3.utils.toWei('1'), // Value\n    '0x', // Data\n  ],\n);\n\nconst { chainId } = await provider.getNetwork(); // will be 2828 on L16\n\nlet encodedMessage = web3.utils.encodePacked(\n  { value: LSP6_VERSION, type: 'uint256' },\n  { value: chainId, type: 'uint256' },\n  { value: nonce, type: 'uint256' },\n  { value: msgValue, type: 'uint256' },\n  { value: abiPayload, type: 'bytes' },\n);\n\nlet eip191Signer = new EIP191Signer();\n\nlet { signature } = await eip191Signer.signDataWithIntendedValidator(\n  keyManagerAddress,\n  encodedMessage,\n  controllerPrivateKey,\n);\n\nconst executeRelayCallTransaction = await keyManager\n  .connect(controllerAccount)\n  ['executeRelayCall(bytes,uint256,bytes)'](signature, nonce, abiPayload);\n")))))}m.isMDXComponent=!0}}]);