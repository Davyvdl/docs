"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[239],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return a?r.createElement(h,o(o({ref:t},d),{},{components:a})):r.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1945:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(3117),n=(a(7294),a(3905));const i={sidebar_label:"Introduction",sidebar_position:1},o="Universal Profiles",s={unversionedId:"standards/universal-profile/introduction",id:"standards/universal-profile/introduction",title:"Universal Profiles",description:"The Guides Section will take you through the process of creating a Universal Profile and deploying it on the L14 testnet.",source:"@site/docs/standards/universal-profile/introduction.md",sourceDirName:"standards/universal-profile",slug:"/standards/universal-profile/introduction",permalink:"/standards/universal-profile/introduction",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/universal-profile/introduction.md",tags:[],version:"current",lastUpdatedAt:1661785174,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction",sidebar_position:1},sidebar:"standardsSidebar",previous:{title:"LSP2 - ERC725Y JSON Schema",permalink:"/standards/generic-standards/lsp2-json-schema"},next:{title:"LSP0 - ERC725 Account",permalink:"/standards/universal-profile/lsp0-erc725account"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Universal Profile Architecture",id:"universal-profile-architecture",level:2},{value:"Universal Profiles Standards",id:"universal-profiles-standards",level:2},{value:"Adding profile information",id:"adding-profile-information",level:2},{value:"References",id:"references",level:2}],d={toc:c};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"universal-profiles"},"Universal Profiles"),(0,n.kt)("admonition",{title:"Useful Tip",type:"success"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("a",{parentName:"p",href:"../../guides/universal-profile/create-profile"},"Guides Section")," will take you through the process of creating a Universal Profile and deploying it on the ",(0,n.kt)("a",{parentName:"p",href:"/networks/l14-testnet"},"L14 testnet"),".",(0,n.kt)("br",{parentName:"p"}),"\n","You can also browse the already deployed Universal Profiles on ",(0,n.kt)("a",{parentName:"p",href:"https://universalprofile.cloud/"},"universalprofile.cloud"),".")),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Building an identity on top of keys is almost impossible because keys are likely to be leaked or lost forever. Holding assets and building a reputation on these keys makes it worse. A better representation of identity would be with blockchain-based accounts."),(0,n.kt)("p",null,"Blockchain-based accounts can change the way of interacting on-chain, allowing the usage of multiple components together. Used in combination with a Controller (see ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/standards/universal-profile/lsp6-key-manager"},"LSP6 - Key Manager")),"), they could allow any entity to execute or set some data on your profile directly or via relay execution. Finally, developers could use contracts for social recovery if keys are lost. All these components together can enhance the blockchain experience."),(0,n.kt)("h2",{id:"universal-profile-architecture"},"Universal Profile Architecture"),(0,n.kt)("p",null,"The diagram below shows the standard architecture used by LUKSO for Universal Profile."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Universal Profile architecture",src:a(212).Z,width:"1397",height:"715"})),(0,n.kt)("h2",{id:"universal-profiles-standards"},"Universal Profiles Standards"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Standard"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"LSP0-ERC725Account",src:a(2087).Z,width:"835",height:"1197"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("a",{parentName:"strong",href:"/standards/universal-profile/lsp0-erc725account"},"LSP0 - ERC725Account")),": This standard represents the core account contract. It consists of ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md#erc725x"},"ERC725X"),", allowing a contract to interact with any address or smart contract on the blockchain, and ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md#erc725y"},"ERC725Y"),", a generic key-value store that allows storing an unlimited amount of data in the smart contract. It also contains ",(0,n.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-1271"},"ERC1271")," to verify if messages were signed by the ERC725Account's owner. If the owner is a Key Manager supporting ERC1271, it will delegate the call to the KeyManager. Lastly, it contains the ",(0,n.kt)("a",{parentName:"td",href:"/standards/generic-standards/lsp1-universal-receiver"},"LSP1 - UniversalReceiver"),", which allows this contract to be notified of any incoming asset. Using the ",(0,n.kt)("a",{parentName:"td",href:"/standards/universal-profile/lsp1-universal-receiver-delegate"},"LSP1 - UniversalReceiverDelegate")," logic, you can delegate the universal receiver call that an asset will do to an external contract, customizing the behaviour you want towards the asset. More on that below.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"LSP6-KeyManager",src:a(9397).Z,width:"835",height:"1197"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("a",{parentName:"strong",href:"/standards/universal-profile/lsp6-key-manager"},"LSP6 - KeyManager")),": A standard representing a smart contract that can act as the owner of an ",(0,n.kt)("a",{parentName:"td",href:"/standards/universal-profile/lsp0-erc725account"},"LSP0 - ERC725Account"),". It reads permissions of addresses from the ERC725Account's key-value store, and restricts access based on these permissions. Transactions can be executed directly by permissioned users or by anyone with the help of a signed message by permissioned users.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"LSP1 - UniversalReceiverDelegate",src:a(123).Z,width:"813",height:"1229"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("a",{parentName:"strong",href:"/standards/universal-profile/lsp1-universal-receiver-delegate"},"LSP1 - UniversalReceiverDelegate")),": By setting the ",(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("a",{parentName:"strong",href:"../generic-standards/lsp1-universal-receiver#extension"},(0,n.kt)("inlineCode",{parentName:"a"},"LSP1 - UniversalReceiverDelegate")))," data key in your ERC725Account to a contract address, you can delegate any call to the ",(0,n.kt)("inlineCode",{parentName:"td"},"universalReceiver(...)")," function of the account to this contract, which allows you to revert on certain incoming assets or add other logic. The ",(0,n.kt)("a",{parentName:"td",href:"/standards/smart-contracts/lsp1-universal-receiver-delegate-up"},"standard ",(0,n.kt)("strong",{parentName:"a"},"LSP1 - UniversalReceiverDelegate")," implementation")," will write every ",(0,n.kt)("a",{parentName:"td",href:"/standards/nft-2.0/introduction"},"LSP7 and LSP8")," asset you receive into your ERC725Account using the ",(0,n.kt)("a",{parentName:"td",href:"/standards/universal-profile/lsp5-received-assets"},"LSP5 - ReceivedAsset")," standard. This allows any interface to list all token contracts that hold a balance of your account, right from the smart contract.")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"An LSP0-ERC725Account can work standalone and doesn't require a Key Manager or a Universal Receiver Delegate, but this will limit the user experience.")),(0,n.kt)("h2",{id:"adding-profile-information"},"Adding profile information"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/standards/universal-profile/lsp0-erc725account"},"LSP0 - ERC725Account"))," standard represents a blockchain-based account that does not contain any metadata describing the account. It's important to standardize specific data keys to give the account a unique character and look like a typical ",(0,n.kt)("strong",{parentName:"p"},"Web2 profile"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/standards/universal-profile/lsp3-universal-profile-metadata"},"LSP3 - UniversalProfile Metadata"))," is a standard used to add profile information by setting its defined data keys in the account storage. The combination of these two standards forms a ",(0,n.kt)("strong",{parentName:"p"},"Universal Profile"),"."),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-0-ERC725Account.md"},"LUKSO Standards Proposals: LSP0 - ERC725 Account (Standard Specification, GitHub)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-3-UniversalProfile-Metadata.md"},"LUKSO Standards Proposals: LSP3 - Universal Profile Metadata (Standard Specification, GitHub)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-6-KeyManager.md"},"LUKSO Standards Proposals: LSP6 - Key Manager (Standard Specification, GitHub)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/lsp-universalprofile-smart-contracts/tree/develop/contracts/LSP1UniversalReceiver"},"LSP1 Universal Receiver: Solidity implementations (GitHub)"))))}p.isMDXComponent=!0},2087:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/lsp0-erc725account-contract-27390da7030e4347f4b6442bba7fda8c.jpeg"},123:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/lsp1-universal-receiver-delegate-contract-6530506505cba34d1a7e124b31125be6.jpeg"},9397:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/lsp6-key-manager-contract-c3492e2841646d1052489a879d170c82.jpeg"},212:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/universal-profile-architecture-abbd32a02506373c378a1c29a6831879.jpeg"}}]);