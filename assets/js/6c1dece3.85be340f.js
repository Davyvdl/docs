"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[4140],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(t),u=r,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8064:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=["components"],o={sidebar_position:1.2},s=void 0,d={unversionedId:"tools/lsp-factoryjs/classes/LSP3UniversalProfile",id:"tools/lsp-factoryjs/classes/LSP3UniversalProfile",isDocsHomePage:!1,title:"LSP3UniversalProfile",description:"deploy",source:"@site/docs/tools/lsp-factoryjs/classes/LSP3UniversalProfile.md",sourceDirName:"tools/lsp-factoryjs/classes",slug:"/tools/lsp-factoryjs/classes/LSP3UniversalProfile",permalink:"/tools/lsp-factoryjs/classes/LSP3UniversalProfile",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/tools/lsp-factoryjs/classes/LSP3UniversalProfile.md",tags:[],version:"current",sidebarPosition:1.2,frontMatter:{sidebar_position:1.2},sidebar:"toolsSidebar",previous:{title:"Fungible Token (LSP7)",permalink:"/tools/lsp-factoryjs/deployment/fungible-token"},next:{title:"DigitalAsset",permalink:"/tools/lsp-factoryjs/classes/DigitalAsset"}},p=[{value:"deploy",id:"deploy",children:[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Returns",id:"returns",children:[],level:3},{value:"Example",id:"example",children:[],level:3}],level:2},{value:"deployReactive",id:"deployreactive",children:[{value:"Parameters",id:"parameters-1",children:[],level:3},{value:"Returns",id:"returns-1",children:[],level:3},{value:"Example",id:"example-1",children:[],level:3}],level:2},{value:"deployBaseContracts",id:"deploybasecontracts",children:[{value:"Returns",id:"returns-2",children:[],level:3},{value:"Example",id:"example-2",children:[],level:3}],level:2},{value:"getDeployedByteCode",id:"getdeployedbytecode",children:[{value:"Parameters",id:"parameters-2",children:[],level:3},{value:"Returns",id:"returns-3",children:[],level:3},{value:"Example",id:"example-3",children:[],level:3}],level:2},{value:"uploadProfileData",id:"uploadprofiledata",children:[{value:"Parameters",id:"parameters-3",children:[],level:3},{value:"Returns",id:"returns-4",children:[],level:3},{value:"Example",id:"example-4",children:[],level:3}],level:2}],c={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"deploy"},"deploy"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"deploy"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"profileDeploymentOptions"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"contractDeploymentOptions?"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"Object"),">"),(0,l.kt)("p",null,"Deploys a ",(0,l.kt)("a",{parentName:"p",href:"../../../standards/universal-profile/introduction"},"UniversalProfile")," to the blockchain and uploads LSP3 Profile data to IPFS"),(0,l.kt)("p",null,"Asyncronous version of ",(0,l.kt)("inlineCode",{parentName:"p"},"deployReactive"),"."),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"profileDeploymentOptions")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"Object"),": The options used for deployment.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"controllingAccounts")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"string[]"),": A list of accounts (public addresses) which will be granted ",(0,l.kt)("a",{parentName:"li",href:"../../../../../standards/universal-profile/lsp6-key-manager#-address-permissions"},"all permissions")," on the newly created Universal Profile."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lsp3Profile?")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"Object"),": If set, the created Universal Profile will be populated with these values.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": The name of the Universal Profile"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"description")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": The description of the Universal Profile"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"profileImage?")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"File | ImageBuffer | LSP3ProfileImage[]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"backgroundImage?")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"File | ImageBuffer | LSP3ProfileImage[]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tags?")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"string[]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"links?")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"{title: string, url: string}[]")))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"contractDeploymentOptions?")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"Object"))),(0,l.kt)("h3",{id:"returns"},"Returns"),(0,l.kt)("p",null,"Promise with object containing deployed contract details"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"Object"),">"),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"await lspFactory.LSP3UniversalProfile.deploy({\n  controllingAccounts: ['0xb74a88C43BCf691bd7A851f6603cb1868f6fc147'],\n  lsp3Profile: {\n    name: 'My Universal Profile',\n    description: 'My cool Universal Profile',\n    tags: ['Fashion', 'Design'],\n    links: [{ title: 'My Website', url: 'www.my-website.com' }],\n  },\n});\n\n/**\n{\n  ERC725Account: {\n    address: '0xaEc61B848954e4d69B1283810df8A7fB9bA23BF2',\n    receipt: {\n      to: null,\n      from: '0x9Fba07e245B415cC9580BD6c890a9fd7D22e20db',\n      contractAddress: '0xaEc61B848954e4d69B1283810df8A7fB9bA23BF2',\n      transactionIndex: 0,\n      gasUsed: [BigNumber],\n      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n      blockHash: '0x48950fa6dfae12c7c6f172820bb0a7976da1c97ea541d2966bd2a9f39f3eb952',\n      transactionHash: '0xfb5d45fda891c47efa1a14748939d51bed58a9406c6ff685e0fdc8655a880d6e',\n      logs: [],\n      blockNumber: 12028255,\n      confirmations: 1,\n      cumulativeGasUsed: [BigNumber],\n      status: 1,\n      type: 0,\n      byzantium: true,\n      events: []\n    }\n  },\n  UniversalReceiverDelegate: {\n    address: '0xd92C7cA9c493aFC0DF51cE480ec7bB7DC8394549',\n    receipt: {\n      to: null,\n      from: '0x9Fba07e245B415cC9580BD6c890a9fd7D22e20db',\n      contractAddress: '0xd92C7cA9c493aFC0DF51cE480ec7bB7DC8394549',\n      transactionIndex: 0,\n      gasUsed: [BigNumber],\n      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n      blockHash: '0x8b793e53ffe5ad6853cc06f0ca8879f8b0f0c32f69791e96d657d7fde8313d35',\n      transactionHash: '0x12e38b93709116da42e0c69af65f6096fa7b380ccb02ced4e3e431297c05e704',\n      logs: [],\n      blockNumber: 12028257,\n      confirmations: 1,\n      cumulativeGasUsed: [BigNumber],\n      status: 1,\n      type: 0,\n      byzantium: true,\n      events: []\n    }\n  },\n  KeyManager: {\n    address: '0xdbD3297B9bD80cA20cA75a644b1Fa903B05A2Fc3',\n    receipt: {\n      to: null,\n      from: '0x9Fba07e245B415cC9580BD6c890a9fd7D22e20db',\n      contractAddress: '0xdbD3297B9bD80cA20cA75a644b1Fa903B05A2Fc3',\n      transactionIndex: 1,\n      gasUsed: [BigNumber],\n      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n      blockHash: '0x8b793e53ffe5ad6853cc06f0ca8879f8b0f0c32f69791e96d657d7fde8313d35',\n      transactionHash: '0x1183a1c9a64b88bb8e7da67805125d5b8e63c7dc8fab11dce350ee0c0995060b',\n      logs: [],\n      blockNumber: 12028257,\n      confirmations: 1,\n      cumulativeGasUsed: [BigNumber],\n      status: 1,\n      type: 0,\n      byzantium: true,\n      events: []\n    }\n  }\n}\n*/\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"deployreactive"},"deployReactive"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"deployReactive"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"profileDeploymentOptions"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"contractDeploymentOptions?"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Observable"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"LSP3AccountDeploymentEvent")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"DeploymentEventTransaction"),">"),(0,l.kt)("p",null,"Deploys a ",(0,l.kt)("a",{parentName:"p",href:"../../../standards/universal-profile/introduction"},"UniversalProfile")," and uploads LSP3 Profile data to IPFS."),(0,l.kt)("h3",{id:"parameters-1"},"Parameters"),(0,l.kt)("p",null,"Same as for the ",(0,l.kt)("a",{parentName:"p",href:"./LSP3UniversalProfile#parameters"},"asynchronous version"),"."),(0,l.kt)("h3",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://rxjs.dev/"},"RxJS")," Observable which emits events as UniversalProfile contracts are deployed."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Observable"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"LSP3AccountDeploymentEvent")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"DeploymentEventTransaction"),">"),(0,l.kt)("h3",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"await lspFactory.LSP3UniversalProfile.deployReactive({\n  controllingAccounts: ['0x9Fba07e245B415cC9580BD6c890a9fd7D22e20db'],\n}).subscribe({\n  next: (deploymentEvent) => {\n    console.log(deploymentEvent);\n  },\n  complete: () => {\n    console.log('Deployment Complete');\n  },\n});\n\n/**\n{\n  type: 'PROXY',\n  contractName: 'ERC725Account',\n  status: 'PENDING',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'PROXY',\n  contractName: 'ERC725Account',\n  status: 'PENDING',\n  receipt: {\n    ...\n  }\n}\n{\n  type: 'PROXY',\n  contractName: 'ERC725Account',\n  functionName: 'initialize',\n  status: 'PENDING',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'PROXY',\n  contractName: 'ERC725Account',\n  functionName: 'initialize',\n  status: 'COMPLETE',\n  receipt: {\n    ...\n  }\n}\n{\n  type: 'CONTRACT',\n  status: 'PENDING',\n  contractName: 'KeyManager',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'PROXY',\n  contractName: 'UniversalReceiverDelegate',\n  status: 'PENDING',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'CONTRACT',\n  contractName: 'KeyManager',\n  status: 'COMPLETE',\n  receipt: {\n    ...\n  }\n}\n{\n  type: 'PROXY',\n  contractName: 'UniversalReceiverDelegate',\n  status: 'PENDING',\n  receipt: {\n    ...\n  }\n}\n{\n  type: 'PROXY',\n  contractName: 'UniversalReceiverDelegate',\n  functionName: 'initialize',\n  status: 'PENDING',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'PROXY',\n  contractName: 'UniversalReceiverDelegate',\n  functionName: 'initialize',\n  status: 'COMPLETE',\n  receipt: {\n    ...\n  }\n}\n{\n  type: 'TRANSACTION',\n  contractName: 'ERC725Account',\n  functionName: 'setData',\n  status: 'PENDING',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'TRANSACTION',\n  contractName: 'ERC725Account',\n  functionName: 'setData',\n  status: 'COMPLETE',\n  receipt: {\n    ...\n  }\n}\n{\n  type: 'TRANSACTION',\n  status: 'PENDING',\n  contractName: 'ERC725Account',\n  functionName: 'transferOwnership',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'TRANSACTION',\n  contractName: 'ERC725Account',\n  functionName: 'transferOwnership',\n  status: 'COMPLETE',\n  receipt: {\n    ...\n  }\n}\nDeployment Complete\n*/\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"deploybasecontracts"},"deployBaseContracts"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"deployBaseContracts"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"DeployedContracts"),">"),(0,l.kt)("p",null,"Deploys ",(0,l.kt)("a",{parentName:"p",href:"../../../standards/universal-profile/introduction"},"UniversalProfile")," base contracts."),(0,l.kt)("h3",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,"Promise with object containing base contract details."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"DeployedContracts"),">"),(0,l.kt)("h3",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"await lspFactory.LSP3UniversalProfile.deployBaseContracts();\n\n/**\n{\n  UniversalReceiverDelegate: {\n    address: '0xd87F7B3B115dd23e8226d8394996Ba4341D602dB',\n    receipt: {\n      to: null,\n      from: '0x9Fba07e245B415cC9580BD6c890a9fd7D22e20db',\n      contractAddress: '0xd87F7B3B115dd23e8226d8394996Ba4341D602dB',\n      transactionIndex: 1,\n      gasUsed: [BigNumber],\n      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n      blockHash: '0x80b0811c3d57039ca6626a195ea3610de05b13ca0d639e9eed25dda984bd82b3',\n      transactionHash: '0xadbbd68ff72846c5331475ce8b1f114a8f418e7ab0922bc3b76fed0b966f7c81',\n      logs: [],\n      blockNumber: 12028282,\n      confirmations: 1,\n      cumulativeGasUsed: [BigNumber],\n      status: 1,\n      type: 0,\n      byzantium: true,\n      events: []\n    }\n  },\n  ERC725Account: {\n    address: '0xA59C5b8Dd18063C977d8B060FC689dd637142DCf',\n    receipt: {\n      to: null,\n      from: '0x9Fba07e245B415cC9580BD6c890a9fd7D22e20db',\n      contractAddress: '0xA59C5b8Dd18063C977d8B060FC689dd637142DCf',\n      transactionIndex: 0,\n      gasUsed: [BigNumber],\n      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n      blockHash: '0x80b0811c3d57039ca6626a195ea3610de05b13ca0d639e9eed25dda984bd82b3',\n      transactionHash: '0xc1b6b6b71e051ed43d25c5237d873bae11149f49dc926c55cd2741279c16833a',\n      logs: [],\n      blockNumber: 12028282,\n      confirmations: 1,\n      cumulativeGasUsed: [BigNumber],\n      status: 1,\n      type: 0,\n      byzantium: true,\n      events: []\n    }\n  }\n}\n*/\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"getdeployedbytecode"},"getDeployedByteCode"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"getDeployedByteCode"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"contractAddress"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,l.kt)("p",null,"Fetches bytecode deployed at provided contract address."),(0,l.kt)("h3",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"contractAddress")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string"))))),(0,l.kt)("h3",{id:"returns-3"},"Returns"),(0,l.kt)("p",null,"Bytecode deployed at provided contract address"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,l.kt)("h3",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"await lspFactory.LSP3UniversalProfile.getDeployedByteCode(\n  '0xd92C7cA9c493aFC0DF51cE480ec7bB7DC8394549',\n);\n\n// 0x363d3d373d3d3d363d736533158b042775e2fdfef3ca1a782efdbb8eb9b15af43d82803e903d91602b57fd5bf3\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"uploadprofiledata"},"uploadProfileData"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,l.kt)("strong",{parentName:"p"},"uploadProfileData"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"profileData"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"uploadOptions?"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"LSP3ProfileDataForEncoding"),">"),(0,l.kt)("p",null,"Uploads the ",(0,l.kt)("a",{parentName:"p",href:"../../../standards/universal-profile/lsp3-universal-profile"},"LSP3Profile")," data to the desired endpoint. This can be an ",(0,l.kt)("inlineCode",{parentName:"p"},"https")," URL either pointing to\na public, centralized storage endpoint or an IPFS Node / Cluster."),(0,l.kt)("p",null,"Will upload and process passed images."),(0,l.kt)("h3",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"profileData")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"ProfileDataBeforeUpload"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"uploadOptions?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"ProfileUploadOptions"))))),(0,l.kt)("h3",{id:"returns-4"},"Returns"),(0,l.kt)("p",null,"Processed ",(0,l.kt)("a",{parentName:"p",href:"../../../standards/universal-profile/lsp3-universal-profile"},"LSP3")," Data and upload url."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"LSP3ProfileDataForEncoding"),">"),(0,l.kt)("h3",{id:"example-4"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"await LSP3UniversalProfile.uploadProfileData({\n  name: 'My Universal Profile',\n  description: 'My cool Universal Profile',\n  tags: ['Fashion', 'Design'],\n  links: [{ title: 'My Website', url: 'www.my-website.com' }],\n  profileImage: [\n    {\n      width: 500,\n      height: 500,\n      hashFunction: 'keccak256(bytes)',\n      hash: '0xfdafad027ecfe57eb4ad047b938805d1dec209d6e9f960fc320d7b9b11cbed14',\n      url: 'ipfs://QmPLqMFHxiUgYAom3Zg4SiwoxDaFcZpHXpCmiDzxrtjSGp',\n    },\n  ],\n  backgroundImage: [\n    {\n      width: 500,\n      height: 500,\n      hashFunction: 'keccak256(bytes)',\n      hash: '0xfdafad027ecfe57eb4ad047b938805d1dec209d6e9f960fc320d7b9b11cbed14',\n      url: 'ipfs://QmPLqMFHxiUgYAom3Zg4SiwoxDaFcZpHXpCmiDzxrtjSGp',\n    },\n  ],\n});\n\n/**\n{\n  profile: {\n    LSP3Profile: {\n      name: 'My Universal Profile',\n      description: 'My cool Universal Profile',\n      tags: [Array],\n      links: [Array],\n      profileImage: [Array],\n      backgroundImage: [Array]\n    }\n  },\n  url: 'ipfs://QmS7NCnoXub7ju13HZuDzJpWqWq15Nev4CC18821qBNbkx'\n}\n*/\n")))}m.isMDXComponent=!0}}]);