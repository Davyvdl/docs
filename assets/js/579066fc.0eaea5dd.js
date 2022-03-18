"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[6752],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=o.createContext({}),c=function(t){var e=o.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=c(t.components);return o.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),f=c(n),d=r,m=f["".concat(i,".").concat(d)]||f[d]||u[d]||a;return n?o.createElement(m,l(l({ref:e},p),{},{components:n})):o.createElement(m,l({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,l=new Array(a);l[0]=f;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:r,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2467:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),l=["components"],s={sidebar_position:1.2,title:"NFT2.0 (LSP7, LSP8)"},i="Deploying NFT 2.0",c={unversionedId:"tools/lsp-factoryjs/deployment/nft",id:"tools/lsp-factoryjs/deployment/nft",title:"NFT2.0 (LSP7, LSP8)",description:"LSP7 NFT",source:"@site/docs/tools/lsp-factoryjs/deployment/nft.md",sourceDirName:"tools/lsp-factoryjs/deployment",slug:"/tools/lsp-factoryjs/deployment/nft",permalink:"/tools/lsp-factoryjs/deployment/nft",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/tools/lsp-factoryjs/deployment/nft.md",tags:[],version:"current",sidebarPosition:1.2,frontMatter:{sidebar_position:1.2,title:"NFT2.0 (LSP7, LSP8)"},sidebar:"toolsSidebar",previous:{title:"Universal Profile",permalink:"/tools/lsp-factoryjs/deployment/universal-profile"},next:{title:"Fungible Token (LSP7)",permalink:"/tools/lsp-factoryjs/deployment/fungible-token"}},p={},u=[{value:"LSP7 NFT",id:"lsp7-nft",level:3},{value:"LSP8 NFT",id:"lsp8-nft",level:3}],f={toc:u};function d(t){var e=t.components,n=(0,r.Z)(t,l);return(0,a.kt)("wrapper",(0,o.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploying-nft-20"},"Deploying NFT 2.0"),(0,a.kt)("h3",{id:"lsp7-nft"},"LSP7 NFT"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-7-DigitalAsset.md"},"LSP7")," is a standard for either fungible or non-fungible tokens based on the ERC20 token standard."),(0,a.kt)("p",null,"LSP7 allows one smart contract to have many indivisible NFTs, for example an NFT collection."),(0,a.kt)("p",null,"To deploy a LSP7 NFT call ",(0,a.kt)("inlineCode",{parentName:"p"},"LSP7DigitalAsset.deploy()")," and set ",(0,a.kt)("inlineCode",{parentName:"p"},"isNFT")," to true."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import LSP7DigitalAsset from '@lukso/lsp-smart-contracts/artifacts/LSP7DigitalAsset.json';\nimport { LSPFactory } from '@lukso/lsp-factory.js';\n\nconst lspFactory = new LSPFactory('https://rpc.l14.lukso.network', {\n  '0x...',\n  22,\n});\n\nconst myDigitalAsset = await lspFactory.LSP7DigitalAsset.deploy({\n    name: \"My token\",\n    symbol: \"TKN\",\n    ownerAddress: \"0x..\", // Account which will own the Token Contract\n    isNFT: true,\n})\n\nconst myNFT = new web3.eth.Contract(\n    LSP7DigitalAsset.abi,\n    myDigitalAsset.LSP7DigitalAsset.address\n);\n\nconst totalSupply = myNFT.methods.totalSupply().call()\n")),(0,a.kt)("h3",{id:"lsp8-nft"},"LSP8 NFT"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-8-IdentifiableDigitalAsset.md"},"LSP8")," is based on the ERC721 token standard. LSP8 digital assets are identifiable, non-fungible tokens which can be uniquely traded and given metadata using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md"},"ERC725Y"),"."),(0,a.kt)("p",null,"LSP8 NFTs are smart contracts which relate to one identifiable token."),(0,a.kt)("p",null,"To deploy LSP8 NFT"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import LSP8IdentifiableDigitalAsset from '@lukso/lsp-smart-contracts/artifacts/LSP8IdentifiableDigitalAsset.json';\nimport { LSPFactory } from '@lukso/lsp-factory.js';\n\nconst lspFactory = new LSPFactory('https://rpc.l14.lukso.network', {\n  '0x...',\n  22,\n});\n\n\nconst myDigitalAsset =\n  lspFactory.LSP8IdentifiableDigitalAsset.deploy({\n    name: \"My token\",\n    symbol: \"TKN\",\n    ownerAddress: \"0x...\", // Account which will own the Token Contract\n  })\n\nconst myNFT = new web3.eth.Contract(\n    LSP8IdentifiableDigitalAsset.abi,\n    myDigitalAsset.LSP8IdentifiableDigitalAsset.address\n);\n\nconst totalSupply = myNFT.methods.totalSupply().call()\n")))}d.isMDXComponent=!0}}]);