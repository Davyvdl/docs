"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[6775],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2855:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=["components"],o={sidebar_position:1.1,title:"LSP3UniversalProfile"},s="LSP3UniversalProfile",p={unversionedId:"tools/lsp-factoryjs/classes/lsp3-universal-profile",id:"tools/lsp-factoryjs/classes/lsp3-universal-profile",title:"LSP3UniversalProfile",description:"deploy",source:"@site/docs/tools/lsp-factoryjs/classes/lsp3-universal-profile.md",sourceDirName:"tools/lsp-factoryjs/classes",slug:"/tools/lsp-factoryjs/classes/lsp3-universal-profile",permalink:"/tools/lsp-factoryjs/classes/lsp3-universal-profile",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/tools/lsp-factoryjs/classes/lsp3-universal-profile.md",tags:[],version:"current",sidebarPosition:1.1,frontMatter:{sidebar_position:1.1,title:"LSP3UniversalProfile"},sidebar:"toolsSidebar",previous:{title:"Contract Deployment Options",permalink:"/tools/lsp-factoryjs/deployment/contract-deployment-options"},next:{title:"LSP4DigitalAssetMetadata",permalink:"/tools/lsp-factoryjs/classes/lsp4-digital-asset-metadata"}},c={},d=[{value:"deploy",id:"deploy",level:2},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Example",id:"example",level:4},{value:"getDeployedByteCode",id:"getdeployedbytecode",level:2},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Example",id:"example-1",level:4},{value:"uploadProfileData",id:"uploadprofiledata",level:2},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Example",id:"example-2",level:4}],m={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lsp3universalprofile"},"LSP3UniversalProfile"),(0,l.kt)("h2",{id:"deploy"},"deploy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"lspFactory.LSP3UniversalProfile.deploy(\n  profileDeploymentOptions,\n  contractDeploymentOptions?\n);\n")),(0,l.kt)("p",null,"Deploys and ",(0,l.kt)("strong",{parentName:"p"},"configures")," a ",(0,l.kt)("a",{parentName:"p",href:"../../../standards/universal-profile/introduction"},"Universal Profile")," to the blockchain. It will deploy the following contracts:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../../standards/universal-profile/lsp0-erc725account"},"LSP0 ERC725 Account")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../../standards/universal-profile/lsp6-key-manager"},"LSP6 Key Manager"))),(0,l.kt)("p",null,"Then, it will:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"upload metadata to IPFS and set the ",(0,l.kt)("a",{parentName:"li",href:"../../../standards/universal-profile/lsp3-universal-profile-metadata"},"LSP3 Universal Profile")," metadata."),(0,l.kt)("li",{parentName:"ul"},"attach the Universal Receiver Delegate to the LSP0 ERC725 Account."),(0,l.kt)("li",{parentName:"ul"},"set the Key Manager as the owner of the LSP0 ERC725 Account."),(0,l.kt)("li",{parentName:"ul"},"give all ",(0,l.kt)("a",{parentName:"li",href:"../../../standards/universal-profile/lsp6-key-manager#-types-of-permissions"},"permissions")," to the ",(0,l.kt)("inlineCode",{parentName:"li"},"controllingAccounts"),".")),(0,l.kt)("p",null,"By default a ",(0,l.kt)("a",{parentName:"p",href:"../../../standards/universal-profile/lsp1-universal-receiver-delegate"},"LSP1 Universal Receiver Delegate")," contract will not be deployed, instead the ",(0,l.kt)("inlineCode",{parentName:"p"},"Universal Receiver Delegate")," contract specified in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/tools-lsp-factory/blob/main/src/versions.json"},"versions file")," will be attached to the Universal Profile. A custom Universal Receiver Delegate can be optionally deployed by passing an address or custom bytecode inside the ",(0,l.kt)("a",{parentName:"p",href:"../deployment/contract-deployment-options"},"ContractDeploymentOptions object"),"."),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"profileDeploymentOptions")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"Object"),": The options used for deployment.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"controllingAccounts")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"string[]"),": A list of accounts (public addresses) which will be granted ",(0,l.kt)("a",{parentName:"li",href:"../../../../../standards/universal-profile/lsp6-key-manager#-address-permissions"},"all permissions")," on the newly created Universal Profile."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lsp3Profile?")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"Object"),": If set, the created Universal Profile will be populated with these values.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": The name of the Universal Profile."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"description")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": The description of the Universal Profile."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"profileImage?")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"File | ImageBuffer | ImageMetadata[]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"backgroundImage?")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"File | ImageBuffer | ImageMetadata[]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tags?")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"string[]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"links?")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"{title: string, url: string}[]")))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"contractDeploymentOptions?")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"Object"),": Specify contract deployment details. See ",(0,l.kt)("a",{parentName:"li",href:"../deployment/contract-deployment-options"},"Contract Deployment Options specification")," for more information.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"version?")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": Sets the global contract version to be deployed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"deployReactive?")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": Whether to return an ",(0,l.kt)("a",{parentName:"li",href:"https://rxjs.dev/guide/observable"},"RxJS Observable")," of deployment events. Defaults to false."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ERC725Account?")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"Object"),": Specify deployment options for ERC725Account contract. See ",(0,l.kt)("a",{parentName:"li",href:"../deployment/contract-deployment-options#custom-universal-profile-deployment"},"Contract Deployment Options specification"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UniversalReceiverDelegate?")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"Object"),": Specify deployment options for UniversalReceiverDelegate contract. See ",(0,l.kt)("a",{parentName:"li",href:"../deployment/contract-deployment-options#custom-universal-profile-deployment"},"Contract Deployment Options specification"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"KeyManager?")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"Object"),": Specify deployment options for KeyManager contract. See ",(0,l.kt)("a",{parentName:"li",href:"../deployment/contract-deployment-options#custom-universal-profile-deployment"},"Contract Deployment Options specification"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"uploadOptions?")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"Object"),": Specify how the metadata should be uploaded.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ipfsClientOptions?")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"Object"),": IPFS Client Options as defined by the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ipfs/js-ipfs/tree/master/packages/ipfs-http-client#createoptions"},"ipfs-http-client library")," used internally.")))))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"Object"),">"," | ",(0,l.kt)("inlineCode",{parentName:"p"},"Observable"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"Object"),">"),(0,l.kt)("p",null,"Returns a Promise with object containing deployed contract details.\nIf ",(0,l.kt)("inlineCode",{parentName:"p"},"deployReactive")," flag is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"ContractDeploymentOptions")," object, returns an ",(0,l.kt)("a",{parentName:"p",href:"https://rxjs.dev/guide/observable"},"RxJS Observable")," of deployment events."),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Universal Profile Deployment"',title:'"Universal',Profile:!0,'Deployment"':!0},"await lspFactory.LSP3UniversalProfile.deploy({\n  controllingAccounts: ['0xb74a88C43BCf691bd7A851f6603cb1868f6fc147'],\n  lsp3Profile: {\n    name: 'My Universal Profile',\n    description: 'My cool Universal Profile',\n    tags: ['Fashion', 'Design'],\n    links: [{ title: 'My Website', url: 'www.my-website.com' }],\n  },\n});\n\n/**\n{\n  ERC725Account: {\n    address: '0xaEc61B848954e4d69B1283810df8A7fB9bA23BF2',\n    receipt: {\n      to: null,\n      from: '0x9Fba07e245B415cC9580BD6c890a9fd7D22e20db',\n      contractAddress: '0xaEc61B848954e4d69B1283810df8A7fB9bA23BF2',\n      transactionIndex: 0,\n      gasUsed: [BigNumber],\n      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n      blockHash: '0x48950fa6dfae12c7c6f172820bb0a7976da1c97ea541d2966bd2a9f39f3eb952',\n      transactionHash: '0xfb5d45fda891c47efa1a14748939d51bed58a9406c6ff685e0fdc8655a880d6e',\n      logs: [],\n      blockNumber: 12028255,\n      confirmations: 1,\n      cumulativeGasUsed: [BigNumber],\n      status: 1,\n      type: 0,\n      byzantium: true,\n      events: []\n    }\n  },\n  UniversalReceiverDelegate: {\n    address: '0xd92C7cA9c493aFC0DF51cE480ec7bB7DC8394549',\n    receipt: {\n      to: null,\n      from: '0x9Fba07e245B415cC9580BD6c890a9fd7D22e20db',\n      contractAddress: '0xd92C7cA9c493aFC0DF51cE480ec7bB7DC8394549',\n      transactionIndex: 0,\n      gasUsed: [BigNumber],\n      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n      blockHash: '0x8b793e53ffe5ad6853cc06f0ca8879f8b0f0c32f69791e96d657d7fde8313d35',\n      transactionHash: '0x12e38b93709116da42e0c69af65f6096fa7b380ccb02ced4e3e431297c05e704',\n      logs: [],\n      blockNumber: 12028257,\n      confirmations: 1,\n      cumulativeGasUsed: [BigNumber],\n      status: 1,\n      type: 0,\n      byzantium: true,\n      events: []\n    }\n  },\n  KeyManager: {\n    address: '0xdbD3297B9bD80cA20cA75a644b1Fa903B05A2Fc3',\n    receipt: {\n      to: null,\n      from: '0x9Fba07e245B415cC9580BD6c890a9fd7D22e20db',\n      contractAddress: '0xdbD3297B9bD80cA20cA75a644b1Fa903B05A2Fc3',\n      transactionIndex: 1,\n      gasUsed: [BigNumber],\n      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n      blockHash: '0x8b793e53ffe5ad6853cc06f0ca8879f8b0f0c32f69791e96d657d7fde8313d35',\n      transactionHash: '0x1183a1c9a64b88bb8e7da67805125d5b8e63c7dc8fab11dce350ee0c0995060b',\n      logs: [],\n      blockNumber: 12028257,\n      confirmations: 1,\n      cumulativeGasUsed: [BigNumber],\n      status: 1,\n      type: 0,\n      byzantium: true,\n      events: []\n    }\n  }\n}\n*/\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Reactive Universal Profile Deployment"',title:'"Reactive',Universal:!0,Profile:!0,'Deployment"':!0},"await lspFactory.LSP3UniversalProfile.deploy(\n  {\n    controllingAccounts: ['0x9Fba07e245B415cC9580BD6c890a9fd7D22e20db'],\n  },\n  {\n    deployReactive: true,\n  }\n).subscribe({\n  next: (deploymentEvent) => {\n    console.log(deploymentEvent);\n  },\n  complete: () => {\n    console.log('Deployment Complete');\n  },\n});\n\n/**\n{\n  type: 'PROXY',\n  contractName: 'ERC725Account',\n  status: 'PENDING',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'PROXY',\n  contractName: 'ERC725Account',\n  status: 'PENDING',\n  receipt: {\n    ...\n  }\n}\n{\n  type: 'PROXY',\n  contractName: 'ERC725Account',\n  functionName: 'initialize',\n  status: 'PENDING',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'PROXY',\n  contractName: 'ERC725Account',\n  functionName: 'initialize',\n  status: 'COMPLETE',\n  receipt: {\n    ...\n  }\n}\n{\n  type: 'CONTRACT',\n  status: 'PENDING',\n  contractName: 'KeyManager',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'PROXY',\n  contractName: 'UniversalReceiverDelegate',\n  status: 'PENDING',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'CONTRACT',\n  contractName: 'KeyManager',\n  status: 'COMPLETE',\n  receipt: {\n    ...\n  }\n}\n{\n  type: 'PROXY',\n  contractName: 'UniversalReceiverDelegate',\n  status: 'PENDING',\n  receipt: {\n    ...\n  }\n}\n{\n  type: 'PROXY',\n  contractName: 'UniversalReceiverDelegate',\n  functionName: 'initialize',\n  status: 'PENDING',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'PROXY',\n  contractName: 'UniversalReceiverDelegate',\n  functionName: 'initialize',\n  status: 'COMPLETE',\n  receipt: {\n    ...\n  }\n}\n{\n  type: 'TRANSACTION',\n  contractName: 'ERC725Account',\n  functionName: 'setData',\n  status: 'PENDING',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'TRANSACTION',\n  contractName: 'ERC725Account',\n  functionName: 'setData',\n  status: 'COMPLETE',\n  receipt: {\n    ...\n  }\n}\n{\n  type: 'TRANSACTION',\n  status: 'PENDING',\n  contractName: 'ERC725Account',\n  functionName: 'transferOwnership',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'TRANSACTION',\n  contractName: 'ERC725Account',\n  functionName: 'transferOwnership',\n  status: 'COMPLETE',\n  receipt: {\n    ...\n  }\n}\nDeployment Complete\n*/\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"getdeployedbytecode"},"getDeployedByteCode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"lspFactory.LSP3UniversalProfile.getDeployedByteCode(contractAddress);\n")),(0,l.kt)("p",null,"Fetches bytecode deployed at provided contract address."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"contractAddress")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": The address of the contract.")),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,l.kt)("p",null,"Bytecode deployed at provided contract address."),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"await lspFactory.LSP3UniversalProfile.getDeployedByteCode(\n  '0xd92C7cA9c493aFC0DF51cE480ec7bB7DC8394549'\n);\n\n// 0x363d3d373d3d3d363d736533158b042775e2fdfef3ca1a782efdbb8eb9b15af43d82803e903d91602b57fd5bf3\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"uploadprofiledata"},"uploadProfileData"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"LSP3UniversalProfile.uploadProfileData(profileData, uploadOptions?);\n")),(0,l.kt)("p",null,"Uploads the ",(0,l.kt)("a",{parentName:"p",href:"../../../standards/universal-profile/lsp3-universal-profile-metadata"},"LSP3Profile")," data to the desired endpoint. This can be an ",(0,l.kt)("inlineCode",{parentName:"p"},"https")," URL either pointing to\na public, centralized storage endpoint or an IPFS Node / Cluster."),(0,l.kt)("p",null,"Will upload and process passed images."),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"profileData")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"Object")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"uploadOptions?")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"Object"))),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"LSP3ProfileDataForEncoding"),">"),(0,l.kt)("p",null,"Processed ",(0,l.kt)("a",{parentName:"p",href:"../../../standards/universal-profile/lsp3-universal-profile-metadata"},"LSP3")," data and upload URL."),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"await LSP3UniversalProfile.uploadProfileData({\n  name: 'My Universal Profile',\n  description: 'My cool Universal Profile',\n  tags: ['Fashion', 'Design'],\n  links: [{ title: 'My Website', url: 'www.my-website.com' }],\n  profileImage: [\n    {\n      width: 500,\n      height: 500,\n      hashFunction: 'keccak256(bytes)',\n      hash: '0xfdafad027ecfe57eb4ad047b938805d1dec209d6e9f960fc320d7b9b11cbed14',\n      url: 'ipfs://QmPLqMFHxiUgYAom3Zg4SiwoxDaFcZpHXpCmiDzxrtjSGp',\n    },\n  ],\n  backgroundImage: [\n    {\n      width: 500,\n      height: 500,\n      hashFunction: 'keccak256(bytes)',\n      hash: '0xfdafad027ecfe57eb4ad047b938805d1dec209d6e9f960fc320d7b9b11cbed14',\n      url: 'ipfs://QmPLqMFHxiUgYAom3Zg4SiwoxDaFcZpHXpCmiDzxrtjSGp',\n    },\n  ],\n});\n\n/**\n{\n  profile: {\n    LSP3Profile: {\n      name: 'My Universal Profile',\n      description: 'My cool Universal Profile',\n      tags: [Array],\n      links: [Array],\n      profileImage: [Array],\n      backgroundImage: [Array]\n    }\n  },\n  url: 'ipfs://QmS7NCnoXub7ju13HZuDzJpWqWq15Nev4CC18821qBNbkx'\n}\n*/\n")))}u.isMDXComponent=!0}}]);