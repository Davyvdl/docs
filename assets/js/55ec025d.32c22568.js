"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[267],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),y=o,d=m["".concat(c,".").concat(y)]||m[y]||u[y]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7727:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:1.3},c="Reactive Deployment",l={unversionedId:"tools/lsp-factoryjs/reactive-deployment",id:"tools/lsp-factoryjs/reactive-deployment",isDocsHomePage:!1,title:"Reactive Deployment",description:"lsp-factory.js uses RxJS to deploy Universal Profiles. This can be leveraged to achieve reactive deployment of Universal Profiles.",source:"@site/docs/tools/lsp-factoryjs/reactive-deployment.md",sourceDirName:"tools/lsp-factoryjs",slug:"/tools/lsp-factoryjs/reactive-deployment",permalink:"/tools/lsp-factoryjs/reactive-deployment",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/tools/lsp-factoryjs/reactive-deployment.md",tags:[],version:"current",sidebarPosition:1.3,frontMatter:{sidebar_position:1.3},sidebar:"toolsSidebar",previous:{title:"Constructing LSP3 Metadata",permalink:"/tools/lsp-factoryjs/constructing-lsp3-data"},next:{title:"Deploying Digital Assets",permalink:"/tools/lsp-factoryjs/digital-assets"}},p=[{value:"Use cases",id:"use-cases",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reactive-deployment"},"Reactive Deployment"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"lsp-factory.js")," uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ReactiveX/rxjs"},"RxJS")," to deploy Universal Profiles. This can be leveraged to achieve reactive deployment of Universal Profiles."),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"deployReactive()")," function with ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe()")," to listen for deployment events."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let deploymentEvents = [];\n\nlspFactory.LSP3UniversalProfile\n  .deployReactive(// ... omitted for brevity)\n  .subscribe({\n    next: (deploymentEvent: DeploymentEvent<any>) => {\n      deploymentEvents.push(deploymentEvent);\n    },\n    complete: () => {\n      console.log(deploymentEvents);\n    },\n  });\n")),(0,a.kt)("p",null,"The function defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"next")," will be called whenever a new deployment event is created. In this case we are simply pushing every deployment event into a ",(0,a.kt)("inlineCode",{parentName:"p"},"deploymentEvents")," array."),(0,a.kt)("p",null,"The function defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"complete")," will be called once after deployment is finished. Here we log the ",(0,a.kt)("inlineCode",{parentName:"p"},"deploymentEvents")," array."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="console.log(deploymentEvents) output"',title:'"console.log(deploymentEvents)','output"':!0},"[\n  { type: 'PROXY',        contractName: 'ERC725Account',                                              status: 'PENDING',  transaction:  {} },\n  { type: \"PROXY\",        contractName: 'ERC725Account',                                              status: 'PENDING',  receipt:      {} },\n  { type: \"PROXY\",        contractName: 'ERC725Account',           functionName: 'initialize',        status: 'PENDING',  transaction:  {} },\n  { type: \"PROXY\",        contractName: 'ERC725Account',           functionName: 'initialize',        status: 'COMPLETE', receipt:      {} },\n\n  { type: 'CONTRACT',     contractName: 'KeyManager',                                                 status: 'PENDING',  transaction:  {} },\n  { type: \"PROXY\",        contractName: 'UniversalReceiver...',                                       status: 'PENDING',  transaction:  {} },\n  { type: 'CONTRACT',     contractName: 'KeyManager',                                                 status: 'COMPLETE', receipt:      {} },\n  { type: \"PROXY\",        contractName: 'UniversalReceiver...',                                       status: 'PENDING',  receipt:      {} },\n  { type: \"PROXY\",        contractName: 'UniversalReceiver...',    functionName: 'initialize',        status: 'PENDING',  transaction:  {} },\n  { type: \"PROXY\",        contractName: 'UniversalReceiver...',    functionName: 'initialize',        status: 'COMPLETE', receipt:      {} },\n\n  { type: 'TRANSACTION',  contractName: 'ERC725Account',           functionName: 'setDataMultiple',   status: 'PENDING',  transaction:  {} },\n  { type: 'TRANSACTION',  contractName: 'ERC725Account',           functionName: 'setDataMultiple',   status: 'COMPLETE', receipt:      {} },\n\n  { type: 'TRANSACTION',  contractName: 'ERC725Account',           functionName: 'transferOwnership', status: 'PENDING',  transaction:  {} },\n  { type: 'TRANSACTION',  contractName: 'ERC725Account',           functionName: 'transferOwnership', status: 'COMPLETE', receipt:      {} },\n];\n")),(0,a.kt)("h2",{id:"use-cases"},"Use cases"),(0,a.kt)("p",null,"Reactive Deployment may be useful for certain front end behaviours to give better feedback to users when they trigger a UP deployment from a user interface. For example you may want to implement a loading bar to tell users how deployment is progressing, or display details and addresses of the contracts as they are deployed."))}m.isMDXComponent=!0}}]);