"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[5793],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=r,y=f["".concat(i,".").concat(d)]||f[d]||u[d]||a;return n?o.createElement(y,s(s({ref:t},p),{},{components:n})):o.createElement(y,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1326:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),s=["components"],l={sidebar_position:1.3,title:"Fungible Token (LSP7)"},i="Deploying LSP7 Digital Asset",c={unversionedId:"tools/lsp-factoryjs/deployment/fungible-token",id:"tools/lsp-factoryjs/deployment/fungible-token",title:"Fungible Token (LSP7)",description:"LSP7 is a standard for either fungible or non-fungible tokens based on the ERC20 token standard.",source:"@site/docs/tools/lsp-factoryjs/deployment/fungible-token.md",sourceDirName:"tools/lsp-factoryjs/deployment",slug:"/tools/lsp-factoryjs/deployment/fungible-token",permalink:"/tools/lsp-factoryjs/deployment/fungible-token",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/tools/lsp-factoryjs/deployment/fungible-token.md",tags:[],version:"current",sidebarPosition:1.3,frontMatter:{sidebar_position:1.3,title:"Fungible Token (LSP7)"},sidebar:"toolsSidebar",previous:{title:"NFT2.0 (LSP7, LSP8)",permalink:"/tools/lsp-factoryjs/deployment/nft"},next:{title:"Contract Deployment Options",permalink:"/tools/lsp-factoryjs/deployment/contract-deployment-options"}},p={},u=[],f={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploying-lsp7-digital-asset"},"Deploying LSP7 Digital Asset"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-7-DigitalAsset.md"},"LSP7")," is a standard for either fungible or non-fungible tokens based on the ERC20 token standard."),(0,a.kt)("p",null,"To create a LSP7 Fungible token use ",(0,a.kt)("inlineCode",{parentName:"p"},"LSP7DigitalAsset.deploy()")," method and set ",(0,a.kt)("inlineCode",{parentName:"p"},"isNFT")," parameter to false."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import LSP7 from '@lukso/lsp-smart-contracts/artifacts/LSP7DigitalAsset.json';\nimport { LSPFactory } from '@lukso/lsp-factory.js';\n\nconst lspFactory = new LSPFactory('https://rpc.l14.lukso.network', {\n  '0x...',\n  22,\n});\n\n\nconst myDigitalAsset = await lspFactory.LSP7DigitalAsset.deploy({\n    name: \"My token\",\n    symbol: \"TKN\",\n    ownerAddress: \"0x..\", // Account which will own the Token Contract\n    isNFT: false,\n})\n\nconst myNFT = new web3.eth.Contract(\n    LSP7.abi,\n    myDigitalAsset.LSP7DigitalAsset.address\n);\n\nconst totalSupply = myNFT.methods.totalSupply().call()\n")),(0,a.kt)("p",null,"This will deploy an LSP7 smart contract which can have many tokens which can be fractionalised."))}d.isMDXComponent=!0}}]);