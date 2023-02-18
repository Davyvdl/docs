"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[3607],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||s;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(6010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>y});var a=r(7462),n=r(7294),s=r(6010),o=r(2466),i=r(6775),l=r(1980),c=r(7392),u=r(12);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=p(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[l,c]=m({queryString:r,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),v=(()=>{const e=l??d;return f({value:e,tabValues:s})?e:null})();(0,n.useEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,s]),tabValues:s}}var v=r(2389);const b="tabList__CuJ",k="tabItem_LNqP";function w(e){let{className:t,block:r,selectedValue:i,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,r=u.indexOf(t),a=c[r].value;a!==i&&(d(t),l(a))},f=e=>{var t;let r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;r=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;r=u[t]??u[u.length-1];break}}null==(t=r)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:f,onClick:p},o,{className:(0,s.Z)("tabs__item",k,null==o?void 0:o.className,{"tabs__item--active":i===t})}),r??t)})))}function P(e){let{lazy:t,children:r,selectedValue:a}=e;if(t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=h(e);return n.createElement("div",{className:(0,s.Z)("tabs-container",b)},n.createElement(w,(0,a.Z)({},e,t)),n.createElement(P,(0,a.Z)({},e,t)))}function y(e){const t=(0,v.Z)();return n.createElement(g,(0,a.Z)({key:String(t)},e))}},6304:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=r(7462),n=(r(7294),r(3905)),s=r(4866),o=r(5162);const i={sidebar_label:"Check if an address is a UP",sidebar_position:6},l="How to check if an address is a Universal Profile?",c={unversionedId:"guides/universal-profile/check-if-address-is-universal-profile",id:"guides/universal-profile/check-if-address-is-universal-profile",title:"How to check if an address is a Universal Profile?",description:"You may want to read the Standard Detection page first.",source:"@site/docs/guides/universal-profile/check-if-address-is-universal-profile.md",sourceDirName:"guides/universal-profile",slug:"/guides/universal-profile/check-if-address-is-universal-profile",permalink:"/guides/universal-profile/check-if-address-is-universal-profile",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/guides/universal-profile/check-if-address-is-universal-profile.md",tags:[],version:"current",lastUpdatedAt:1676652076,formattedLastUpdatedAt:"Feb 17, 2023",sidebarPosition:6,frontMatter:{sidebar_label:"Check if an address is a UP",sidebar_position:6},sidebar:"guidesSidebar",previous:{title:"Interact with Contracts",permalink:"/guides/universal-profile/interact-with-contracts"}},u={},d=[{value:"Setup",id:"setup",level:2},{value:"Step 1 - Check address format",id:"step-1---check-address-format",level:2},{value:"Step 2 - Check the contract supports the <code>LSP0ERC725Account</code> interface using ERC165",id:"step-2---check-the-contract-supports-the-lsp0erc725account-interface-using-erc165",level:2},{value:"Step 3 - Check supported standard",id:"step-3---check-supported-standard",level:2},{value:"Final Code",id:"final-code",level:2}],p={toc:d};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-check-if-an-address-is-a-universal-profile"},"How to check if an address is a Universal Profile?"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You may want to read the ",(0,n.kt)("a",{parentName:"p",href:"/standards/standard-detection"},"Standard Detection")," page first.")),(0,n.kt)("p",null,"To check if an address is a ",(0,n.kt)("a",{parentName:"p",href:"/standards/universal-profile/introduction"},"Universal Profile")," we need to perform 3 checks:"),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)("p",null,"Make sure you have the following dependencies installed before beginning this tutorial."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can use either ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/web3/web3.js"},(0,n.kt)("inlineCode",{parentName:"a"},"web3.js"))," or ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ethers-io/ethers.js/"},(0,n.kt)("inlineCode",{parentName:"a"},"ethers.js"))),(0,n.kt)("li",{parentName:"ul"},"You MUST install ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/lsp-smart-contracts/"},(0,n.kt)("inlineCode",{parentName:"a"},"@lukso/lsp-smart-contracts")))),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Install the dependencies"',title:'"Install',the:!0,'dependencies"':!0},"npm install web3 @lukso/lsp-smart-contracts\n"))),(0,n.kt)(o.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Install the dependencies"',title:'"Install',the:!0,'dependencies"':!0},"npm install ethers @lukso/lsp-smart-contracts\n")))),(0,n.kt)("h2",{id:"step-1---check-address-format"},"Step 1 - Check address format"),(0,n.kt)("p",null,"This first basic test can be performed via regular expression or 3rd party library function. For example this is how we can achieve this using Web3js ",(0,n.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/en/v1.2.11/web3-utils.html#isaddress"},(0,n.kt)("inlineCode",{parentName:"a"},"isAddress")),":"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import { isAddress } from 'web3-utils';\n\nif (!isAddress(address)) {\n  throw new Error('Invalid address');\n}\n"))),(0,n.kt)(o.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import { isAddress } from 'ethers';\n\nif (!isAddress(address)) {\n  throw new Error('Invalid address');\n}\n")))),(0,n.kt)("h2",{id:"step-2---check-the-contract-supports-the-lsp0erc725account-interface-using-erc165"},"Step 2 - Check the contract supports the ",(0,n.kt)("inlineCode",{parentName:"h2"},"LSP0ERC725Account")," interface using ERC165"),(0,n.kt)("p",null,"This is next check that makes sure we deal with a smart contract that supports the ",(0,n.kt)("inlineCode",{parentName:"p"},"LSP0ERC725Account")," interface (",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-165"},"EIP-165"),"). For this we need to create an ",(0,n.kt)("inlineCode",{parentName:"p"},"universalProfile")," contract instance and call ",(0,n.kt)("inlineCode",{parentName:"p"},"supportsInterface(..)")," method."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Universal Profiles inherit ",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-165"},(0,n.kt)("strong",{parentName:"a"},"ERC165")),", therefore by creating an instance of the Universal Profile contract you have access to the ",(0,n.kt)("inlineCode",{parentName:"p"},"supportsInterface(..)")," method.")),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport { INTERFACE_IDS } from '@lukso/lsp-smart-contracts/constants';\nimport Web3 from 'web3';\n\nconst web3 = new Web3('https://rpc.l16.lukso.network');\n\nconst universalProfileAddress = '0x...'; // The address of the contract that you are verifying\nconst unviersalProfile = new web3.eth.Contract(UniversalProfile.abi, universalProfileAddress);\n\nconst supportsLSP0Interface = await universalProfile.methods.supportsInterface(INTERFACE_IDS.LSP0ERC725Account).call();\n// true or false -> if false, this address is not a Universal Profile.\nif (!supportsLSP0Interface) {\n  throw new Error('Contract does not support LSP0ERC725Account interface');\n}\n"))),(0,n.kt)(o.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport { INTERFACE_IDS } from '@lukso/lsp-smart-contracts/constants';\nimport { ethers } from 'ethers';\n\nconst provider = new ethers.JsonRpcProvider('https://rpc.l14.lukso.network');\n\nconst universalProfileAddress = '0x...'; // The address of the contract that you are verifying\nconst unviersalProfile = new ethers.Contract(universalProfileAddress, UniversalProfile.abi, provider);\n\nconst supportsLSP0Interface = await universalProfile.supportsInterface(INTERFACE_IDS.LSP0ERC725Account);\n// true or false -> if false, this address is not a Universal Profile.\nif (!supportsLSP0Interface) {\n  throw new Error('Contract does not support LSP0ERC725Account interface');\n}\n")))),(0,n.kt)("h2",{id:"step-3---check-supported-standard"},"Step 3 - Check supported standard"),(0,n.kt)("p",null,"Last but not least we should perform a check over ",(0,n.kt)("inlineCode",{parentName:"p"},"LSP3UniversalProfile")," standard. For this we need to call ",(0,n.kt)("inlineCode",{parentName:"p"},"getData")," with the ",(0,n.kt)("inlineCode",{parentName:"p"},"SupportedStandards:LSP3UniversalProfile")," key."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Universal Profiles inherit ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md#erc725y"},(0,n.kt)("strong",{parentName:"a"},"ERC725Y")),", therefore by creating an instance of the Universal Profile contract you have access to the ",(0,n.kt)("inlineCode",{parentName:"p"},"getData(..)")," method.")),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport { SupportedStandards } from '@lukso/lsp-smart-contracts/constants';\nimport Web3 from 'web3';\n\nconst web3 = new Web3('https://rpc.l16.lukso.network');\n\nconst universalProfileAddress = \"0x...\"; // The address of the contract that you are verifying\nconst unviersalProfile = new web3.eth.Contract(UniversalProfile.abi, universalProfileAddress);\n\nconst supportedStandard = await unviersalProfile.methods['getData(bytes32)'](SupportedStandards.LSP3UniversalProfile.key).call();\n\nif (supportedStandard !== SupportedStandards.LSP3UniversalProfile.value) {\n  throw new Error('Address does not support LSP3UniversalProfile standard');\n}\n"))),(0,n.kt)(o.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport { SupportedStandards } from '@lukso/lsp-smart-contracts/constants';\nimport { ethers } from 'ethers';\n\nconst provider = new ethers.JsonRpcProvider('https://rpc.l14.lukso.network');\n\nconst universalProfileAddress = '0x...'; // The address of the contract that you are verifying\nconst unviersalProfile = new ethers.Contract(universalProfileAddress, UniversalProfile.abi, provider);\n\nconst supportedStandard = await unviersalProfile['getData(bytes32)'](SupportedStandards.LSP3UniversalProfile.key);\n\nif (supportedStandard !== SupportedStandards.LSP3UniversalProfile.value) {\n  throw new Error('Address does not support LSP3UniversalProfile standard');\n}\n")))),(0,n.kt)("h2",{id:"final-code"},"Final Code"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport { INTERFACE_IDS, SupportedStandards } from '@lukso/lsp-smart-contracts/constants';\nimport Web3 from 'web3';\n\nconst web3 = new Web3('https://rpc.l16.lukso.network');\n\nif (!web3.utils.isAddress(address)) {\n  throw new Error('Invalid address');\n}\n\n// We assume that the contract is a Universal Profile\nconst universalProfileAddress = '0x...'; // The address of the contract that you are verifying\nconst unviersalProfile = new web3.eth.Contract(UniversalProfile.abi, universalProfileAddress);\n\nconst supportsLSP0Interface = await universalProfile.methods.supportsInterface(INTERFACE_IDS.LSP0ERC725Account).call();\n// true or false -> if false, this address is not a Universal Profile.\nif (!supportsLSP0Interface) {\n  throw new Error('Contract does not support LSP0ERC725Account interface');\n}\n\nconst supportedStandard = await unviersalProfile.methods['getData(bytes32)'](SupportedStandards.LSP3UniversalProfile.key).call();\n\nif (supportedStandard !== SupportedStandards.LSP3UniversalProfile.value) {\n  throw new Error('Address does not support LSP3UniversalProfile standard');\n}\n"))),(0,n.kt)(o.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport { INTERFACE_IDS, SupportedStandards } from '@lukso/lsp-smart-contracts/constants';\nimport { isAddress, ethers } from 'ethers';\n\nconst provider = new ethers.JsonRpcProvider('https://rpc.l14.lukso.network');\n\nif (!isAddress(address)) {\n  throw new Error('Invalid address');\n}\n\n// We assume that the contract is a Universal Profile\nconst universalProfileAddress = '0x...'; // The address of the contract that you are verifying\nconst unviersalProfile = new ethers.Contract(universalProfileAddress, UniversalProfile.abi, provider);\n\nconst supportsLSP0Interface = await universalProfile.supportsInterface(INTERFACE_IDS.LSP0ERC725Account);\n// true or false -> if false, this address is not a Universal Profile.\nif (!supportsLSP0Interface) {\n  throw new Error('Contract does not support LSP0ERC725Account interface');\n}\n\nconst supportedStandard = await unviersalProfile['getData(bytes32)'](SupportedStandards.LSP3UniversalProfile.key);\n\nif (supportedStandard !== SupportedStandards.LSP3UniversalProfile.value) {\n  throw new Error('Address does not support LSP3UniversalProfile standard');\n}\n")))))}f.isMDXComponent=!0}}]);