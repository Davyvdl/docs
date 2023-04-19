"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[7442],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3414:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={title:"Universal Profile",description:"Universal Profile Frequently Asked Questions",sidebar_position:2},i="Frequently Asked Questions",l={unversionedId:"faq/universal-profile",id:"faq/universal-profile",title:"Universal Profile",description:"Universal Profile Frequently Asked Questions",source:"@site/docs/faq/universal-profile.md",sourceDirName:"faq",slug:"/faq/universal-profile",permalink:"/faq/universal-profile",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/faq/universal-profile.md",tags:[],version:"current",lastUpdatedAt:1650994851,formattedLastUpdatedAt:"Apr 26, 2022",sidebarPosition:2,frontMatter:{title:"Universal Profile",description:"Universal Profile Frequently Asked Questions",sidebar_position:2},sidebar:"faqSidebar",previous:{title:"Running a Validator",permalink:"/faq/network/validator"},next:{title:"Help",permalink:"/faq/help"}},s={},p=[{value:"Where are my keys? Can I use MetaMask or a hardware wallet?",id:"where-are-my-keys-can-i-use-metamask-or-a-hardware-wallet",level:2},{value:"Can I send ethereum ETH/Token/NFTs to my Universal Profile address?",id:"can-i-send-ethereum-ethtokennfts-to-my-universal-profile-address",level:2},{value:"Will my Universal Profile and assets be migrated to the mainnet?",id:"will-my-universal-profile-and-assets-be-migrated-to-the-mainnet",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,n.kt)("h2",{id:"where-are-my-keys-can-i-use-metamask-or-a-hardware-wallet"},"Where are my keys? Can I use MetaMask or a hardware wallet?"),(0,n.kt)("p",null,"When you create a Universal Profile from ",(0,n.kt)("a",{parentName:"p",href:"https://universalprofile.cloud"},"UniversalProfile.cloud")," or ",(0,n.kt)("a",{parentName:"p",href:"https://thedematerialised.com/"},"The Dematerialised"),", a wallet is made in your browser's ",(0,n.kt)("inlineCode",{parentName:"p"},"localStorage"),". A login link containing an encrypted private key is emailed to you.\nThe email backup is a temporary method to manage your keys while the LUKSO team is working on custom tools to manage your Universal Profile account. These websites do not support MetaMask or hardware wallets yet."),(0,n.kt)("p",null,"If you are a Dapp developer, you can connect your Dapp to MetaMask and sign/send transactions from the EOA provided by MetaMask. You will need to connect MetaMask to the ",(0,n.kt)("a",{parentName:"p",href:"/networks/l14-testnet"},"L14 Testnet")," and probably send the transaction through the ",(0,n.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp6-key-manager"},"Key Manager")," that owns the Universal Profile. You will also need to know with which Universal Profile smart contract address the EOA provided by MetaMask can interact."),(0,n.kt)("h2",{id:"can-i-send-ethereum-ethtokennfts-to-my-universal-profile-address"},"Can I send ethereum ETH/Token/NFTs to my Universal Profile address?"),(0,n.kt)("p",null,"Your Universal Profile smart contract is deployed on the ",(0,n.kt)("a",{parentName:"p",href:"/networks/l14-testnet"},"LUKSO L14")," network, a different network than the Ethereum mainnet. Therefore, it is not possible to send ETH to your Universal Profile address. Users will lose their assets if you send ETH, tokens, or NFTs from the Ethereum mainnet to your Universal Profile smart contract address."),(0,n.kt)("h2",{id:"will-my-universal-profile-and-assets-be-migrated-to-the-mainnet"},"Will my Universal Profile and assets be migrated to the mainnet?"),(0,n.kt)("p",null,"LUKSO will migrate to mainnet all the Universal Profiles created on:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://thedematerialised.com"},"The Dematerialised")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://universalprofile.cloud"},"Universal Profile"))),(0,n.kt)("p",null,"The migration includes all the NFTs issued by ",(0,n.kt)("a",{parentName:"p",href:"https://lukso.network/"},"LUKSO")," and ",(0,n.kt)("a",{parentName:"p",href:"https://thedematerialised.com"},"The Dematerialised"),"."),(0,n.kt)("p",null,"If your app deploys its contracts and Universal Profiles, you will be responsible for migrating them to the mainnet."))}d.isMDXComponent=!0}}]);