"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[2023],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||p[c]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={title:"Running a node",sidebar_position:2},i="Running a node",l={unversionedId:"networks/mainnet/running-a-node",id:"networks/mainnet/running-a-node",title:"Running a node",description:"\u26a0\ufe0f The Mainnet of LUKSO has not started yet!",source:"@site/docs/networks/mainnet/running-a-node.md",sourceDirName:"networks/mainnet",slug:"/networks/mainnet/running-a-node",permalink:"/networks/mainnet/running-a-node",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/networks/mainnet/running-a-node.md",tags:[],version:"current",lastUpdatedAt:1683794774,formattedLastUpdatedAt:"May 11, 2023",sidebarPosition:2,frontMatter:{title:"Running a node",sidebar_position:2},sidebar:"networksSidebar",previous:{title:"Network parameters",permalink:"/networks/mainnet/parameters"},next:{title:"Network parameters",permalink:"/networks/testnet/parameters"}},s={},u=[{value:"The Network start process",id:"the-network-start-process",level:2},{value:"Becoming a Genesis Validator",id:"becoming-a-genesis-validator",level:3},{value:"Starting the network",id:"starting-the-network",level:3},{value:"Network Architecture",id:"network-architecture",level:2},{value:"Client Support",id:"client-support",level:2},{value:"System Requirements",id:"system-requirements",level:2},{value:"Ports",id:"ports",level:2},{value:"Using the LUKSO CLI",id:"using-the-lukso-cli",level:2},{value:"Installing",id:"installing",level:3},{value:"Initializing a working directory",id:"initializing-a-working-directory",level:3},{value:"Installing clients",id:"installing-clients",level:3},{value:"Running the mainnet",id:"running-the-mainnet",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Need help?",id:"need-help",level:2},{value:"Further Information",id:"further-information",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-a-node"},"Running a node"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u26a0\ufe0f The Mainnet of LUKSO has not started yet!"),(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udca1 If you want to become a genesis validator on mainnet, prepare your validator keys and deposit LYXe using our ",(0,r.kt)("a",{parentName:"p",href:"https://deposit.mainnet.lukso.network"},"Validator Deposit Launchpad"),".")),(0,r.kt)("h2",{id:"the-network-start-process"},"The Network start process"),(0,r.kt)("p",null,"LUKSO will start as a PoS Blockchain with an Initial Genesis Validator Set that anyone can join."),(0,r.kt)("p",null,"Once deployed on Ethereum, the Genesis Validator Smart contract will allow users to deposit LYXe and become Genesis Validators for LUKSO Mainnet. For each validator, you run, you must generate a validator key and deposit 32 LYXe. There will be no limit on the number of validators you can run."),(0,r.kt)("p",null,"Only become a Genesis Validator if you know how to run a node continuously 24/7. This is not delegated Proof of Stake!"),(0,r.kt)("h3",{id:"becoming-a-genesis-validator"},"Becoming a Genesis Validator"),(0,r.kt)("p",null,"The window for becoming a Genesis Validator will be around 3 weeks before launch (or longer if needed). At least ",(0,r.kt)("strong",{parentName:"p"},"4,096 genesis validators")," are ideal for the mainnet start. The Genesis Validator Deposit Smart Contract will be frozen once enough validator keys are registered. The freeze function of the Genesis Validator Contract has a 1-week delay to allow anyone a fair chance to participate."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h3",{parentName:"admonition",id:"the-staking-deposit-website"},"The staking deposit website"),(0,r.kt)("h3",{parentName:"admonition",id:"-httpsdepositmainnetluksonetwork"},"\ud83d\udc49 ",(0,r.kt)("a",{parentName:"h3",href:"https://deposit.mainnet.lukso.network"},"https://deposit.mainnet.lukso.network"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h3",{parentName:"admonition",id:"genesis-validator-smart-contract-address-on-ethereum"},"Genesis Validator Smart Contract Address on Ethereum"),(0,r.kt)("h3",{parentName:"admonition",id:"-0x42000421dd80d1e90e56e87e6ee18d7770b9f8cc"},"\ud83d\udc49 ",(0,r.kt)("a",{parentName:"h3",href:"https://etherscan.io/address/0x42000421dd80D1e90E56E87e6eE18D7770b9F8cC"},"0x42000421dd80D1e90E56E87e6eE18D7770b9F8cC"))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Make sure to always double check the address and that the URL is hosted under ",(0,r.kt)("strong",{parentName:"p"},"lukso.network"),"!",(0,r.kt)("br",{parentName:"p"}),"\n","\ud83d\udc49 deposit.mainnet.",(0,r.kt)("strong",{parentName:"p"},"lukso.network"))),(0,r.kt)("h3",{id:"starting-the-network"},"Starting the network"),(0,r.kt)("p",null,"Once the Genesis Validator Contract is frozen, participants can choose and download the two genesis files: ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.ssz")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json")," from the ",(0,r.kt)("a",{parentName:"p",href:"https://deposit.mainnet.lukso.network"},"deposit website"),". These files will be the network\u2019s starting point and determine the initial network state. The ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.ssz")," will contain all Genesis Validator keys and the network start time, estimated to be 1 week after the Genesis Validator Contract freeze."),(0,r.kt)("p",null,"The second file, ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json")," contains the initial balances of the network. It will include the initial balances and total supply of LYX. The community will choose to set the initial supply at 35M, 42M (the LUKSO team's suggestion), or 100M."),(0,r.kt)("p",null,"Genesis Validators must run the network clients with the downloaded genesis files before the network's starting time. The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/tools-lukso-cli"},"LUKSO CLI")," will make this process easy and will be provided beforehand."),(0,r.kt)("h2",{id:"network-architecture"},"Network Architecture"),(0,r.kt)("p",null,"LUKSO's Blockchain Architecture runs the Ethereum protocol and consists of 2 to 4 clients:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The consensus client running Casper the Friendly Finality Gadget (Casper FFG) plus LMD-GHOST fork choice algorithm (",(0,r.kt)("a",{parentName:"li",href:"https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/gasper/"},"More on the Gasper Consensus"),")"),(0,r.kt)("li",{parentName:"ul"},"The execution client, ",(0,r.kt)("a",{parentName:"li",href:"https://ethereum.org/en/developers/docs/ethereum-stack/"},"running the Ethereum Virtual Machine"))),(0,r.kt)("p",null,"If you are running a validating node, you will also run:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The validator client, if you want to run a validating node"),(0,r.kt)("li",{parentName:"ul"},"The slasher client, if you want to run a validating node")),(0,r.kt)("h2",{id:"client-support"},"Client Support"),(0,r.kt)("p",null,"LUKSO runs the Ethereum protocol, meaning most Ethereum clients will run the LUKSO Blockchain."),(0,r.kt)("p",null,"Currently tested execution clients are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ethereum/go-ethereum"},"Geth"))),(0,r.kt)("p",null,"Currently tested consensus clients are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/prysmaticlabs/prysm"},"Prysm"))),(0,r.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Settings"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operating System"),(0,r.kt)("td",{parentName:"tr",align:null},"Linux or MacOS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number of CPU cores"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RAM"),(0,r.kt)("td",{parentName:"tr",align:null},"16 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSD"),(0,r.kt)("td",{parentName:"tr",align:null},"100 GB")))),(0,r.kt)("h2",{id:"ports"},"Ports"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Port"),(0,r.kt)("th",{parentName:"tr",align:null},"Protocol"),(0,r.kt)("th",{parentName:"tr",align:null},"Client"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"30303"),(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"execution syncing"),(0,r.kt)("td",{parentName:"tr",align:null},"port must be open")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"30303"),(0,r.kt)("td",{parentName:"tr",align:null},"UDP"),(0,r.kt)("td",{parentName:"tr",align:null},"execution discovery"),(0,r.kt)("td",{parentName:"tr",align:null},"port must be open")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13000"),(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"consensus syncing"),(0,r.kt)("td",{parentName:"tr",align:null},"port must be open")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"12000"),(0,r.kt)("td",{parentName:"tr",align:null},"UDP"),(0,r.kt)("td",{parentName:"tr",align:null},"consensus discovery"),(0,r.kt)("td",{parentName:"tr",align:null},"port must be open")))),(0,r.kt)("h2",{id:"using-the-lukso-cli"},"Using the LUKSO CLI"),(0,r.kt)("p",null,"The LUKSO CLI allows you to install, run and manage clients that run the LUKSO network.\nIt also allows you to run clients as a validator."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The LUKSO CLI is running natively on the node's operating system. We are currently working on providing an additional container setup via Docker to support running multiple blockchain networks on one single node. Containers will also allow running the LUKSO testnet and mainnet on one device.")),(0,r.kt)("h3",{id:"installing"},"Installing"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Right now, the CLI can run devnets and our official testnet. Mainnet functionality and the related genesis files will be provided after the ",(0,r.kt)("a",{parentName:"p",href:"https://deposit.mainnet.lukso.network"},"Validator Deposit Launchpad")," has been frozen. The unlock will happen with another version update that has to be downloaded, overwriting the current version."),(0,r.kt)("p",{parentName:"admonition"},"The current development state can be followed in the repository of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/tools-lukso-cli/"},"LUKSO CLI"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Download the LUKSO CLI\n$ curl https://install.lukso.network | sh\n")),(0,r.kt)("h3",{id:"initializing-a-working-directory"},"Initializing a working directory"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For extended documentation, please have a look at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/tools-lukso-cli/#lukso-cli"},"official LUKSO CLI documentation"),".")),(0,r.kt)("p",null,"Before installing the clients, you need to create and initialize a working directory to store configs, optional validator keys, and data of your clients."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Change [directory_name] with the folder name you want\n$ mkdir [directory_name]\n\n# Change to the folder\n$ cd ./[directory_name]\n\n# Initialize the folder.\n# Creates the necessary folder struture, and downloads all network configs from https://github.com/lukso-network/network-configs\n$ lukso init\n")),(0,r.kt)("h3",{id:"installing-clients"},"Installing clients"),(0,r.kt)("p",null,"Now you can install the clients that you wish to run. These clients will install globally but are set as default clients within your working directories config. So make sure to run it within the working folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# within the working folder run\n$ lukso install\n")),(0,r.kt)("h3",{id:"running-the-mainnet"},"Running the mainnet"),(0,r.kt)("p",null,"The following command will spin up your execution and consensus client and connect to the public testnet.\nYou can see the running clients' status and logs using the ",(0,r.kt)("inlineCode",{parentName:"p"},"lukso status")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"lukso logs execution")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"lukso logs consensus")," commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ lukso start\n\n# Check the status of runningh clients\n$ lukso status\n\n# Check the logs of a running client\n$ lukso logs execution\n# Or\n$ lukso logs consensus\n\n# Stop all running clients\n$ lukso stop\n\n")),(0,r.kt)("h3",{id:"documentation"},"Documentation"),(0,r.kt)("p",null,"For more details to the commands look at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/tools-lukso-cli/blob/main/README.md"},"README of the LUKSO CLI"),"."),(0,r.kt)("h2",{id:"need-help"},"Need help?"),(0,r.kt)("p",null,"Ask your question in the validators channel on the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/lukso"},"official LUKSO Discord server"),"."),(0,r.kt)("h2",{id:"further-information"},"Further Information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/lukso/the-puzzle-comes-together-milestone-update-2022-7b69571f63a2"},"LUKSO Mainnet Start Process Update #1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/lukso/lukso-mainnet-timeline-and-process-dd997fe811c8"},"LUKSO Mainnet Start Process Update #2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/lukso/its-happening-the-genesis-validators-are-coming-ce5e07935df6"},"LUKSO Mainnet Start Process Update #3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/lukso/genesis-validators-deposit-smart-contract-freeze-and-testnet-launch-c5f7b568b1fc"},"Genesis Validators Deposit Smart Contract Freeze and Testnet Launch"))))}p.isMDXComponent=!0}}]);