"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[5021],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,c=u["".concat(s,".").concat(m)]||u[m]||k[m]||o;return a?r.createElement(c,l(l({ref:t},d),{},{components:a})):r.createElement(c,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8488:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:3},l="Become a validator",i={unversionedId:"networks/l16-testnet/validator",id:"networks/l16-testnet/validator",title:"Become a validator",description:"Stop your node",source:"@site/docs/networks/l16-testnet/validator.md",sourceDirName:"networks/l16-testnet",slug:"/networks/l16-testnet/validator",permalink:"/networks/l16-testnet/validator",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/networks/l16-testnet/validator.md",tags:[],version:"current",lastUpdatedAt:1656582311,formattedLastUpdatedAt:"6/30/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"networksSidebar",previous:{title:"Start your L16 node",permalink:"/networks/l16-testnet/start-node"},next:{title:"Backup and recovery",permalink:"/networks/l16-testnet/node-backup"}},s={},p=[{value:"Stop your node",id:"stop-your-node",level:2},{value:"Setup Validator",id:"setup-validator",level:2},{value:"Submit the transaction.",id:"submit-the-transaction",level:2},{value:"Make a dry run first",id:"make-a-dry-run-first",level:3},{value:"Deposit your validators",id:"deposit-your-validators",level:3},{value:"Start your validator node",id:"start-your-validator-node",level:2},{value:"Terminology",id:"terminology",level:2},{value:"Validator Node",id:"validator-node",level:3},{value:"Validator Keystore",id:"validator-keystore",level:3},{value:"Validator Key",id:"validator-key",level:3},{value:"Validator Key State",id:"validator-key-state",level:3},{value:"How Validator Keys are created",id:"how-validator-keys-are-created",level:2},{value:"An Example",id:"an-example",level:3},{value:"Node Setup Example",id:"node-setup-example",level:3},{value:"Need help?",id:"need-help",level:2}],d={toc:p};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"become-a-validator"},"Become a validator"),(0,n.kt)("h2",{id:"stop-your-node"},"Stop your node"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"lukso network stop\n")),(0,n.kt)("h2",{id:"setup-validator"},"Setup Validator"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"lukso network validator setup\n")),(0,n.kt)("p",null," This will create a key store and a transaction wallet. The purpose of the transaction wallet is to call and pay for the deposit transaction. "),(0,n.kt)("p",null,"Check if the wallet has enough funds"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"lukso network validator describe\n")),(0,n.kt)("p",null," Visit the ",(0,n.kt)("a",{parentName:"p",href:"https://faucet.l16.lukso.network"},"Faucet")," and paste the transaction wallet public address into the field and choose the amount of LYXt you wany yo receive."),(0,n.kt)("p",null," Transfer ",(0,n.kt)("strong",{parentName:"p"},"enough")," (#validators x staking_amount ",(0,n.kt)("strong",{parentName:"p"},"+ extra LYXt to pay deposit fees"),") funds to the transaction wallet public's address."),(0,n.kt)("h2",{id:"submit-the-transaction"},"Submit the transaction."),(0,n.kt)("h3",{id:"make-a-dry-run-first"},"Make a dry run first"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"lukso network validator deposit --dry\n")),(0,n.kt)("p",null," This will give you the possibility to peek in what is going to happen without executing a transaction."),(0,n.kt)("h3",{id:"deposit-your-validators"},"Deposit your validators"),(0,n.kt)("p",null," :::danger\nIf you are 100% sure that everything is correct you can deposit your LYXt, you will lose all your LYXt if you made a mistake\n:::"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"lukso network validator deposit\n")),(0,n.kt)("p",null," It can take up to eight hours before your validator becomes active, but you can already start your validator in the meantime."),(0,n.kt)("p",null," Once you deposited LYXt make sure to create a backup."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"lukso network validator backup\n")),(0,n.kt)("p",null," Store the file ",(0,n.kt)("strong",{parentName:"p"},"node_recovery.json")," somewhere safe and offline."),(0,n.kt)("h2",{id:"start-your-validator-node"},"Start your validator node"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"lukso network start\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"lukso network validator start\n")),(0,n.kt)("p",null,"Check the status of your validator, it can take up to 8 hours before your validators become active"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"lukso network validator describe\n")),(0,n.kt)("p",null,"Make sure everything is working correctly by checking the stats pages:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://stats.execution.l16.lukso.network"},"Execution stats"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://stats.execution.l16.lukso.network"},"Consensus stats")),(0,n.kt)("p",null," You can also check your ",(0,n.kt)("a",{parentName:"p",href:"/networks/l16-testnet/l16-logs"},"logs"),"."),(0,n.kt)("h2",{id:"terminology"},"Terminology"),(0,n.kt)("h3",{id:"validator-node"},"Validator Node"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Validator Node")," is a combination of services and an underlying keystore that if run together are\nsyncing, validating and proposing blocks. In most cases it can be described as a directory that contains",(0,n.kt)("br",{parentName:"p"}),"\n","all necessary information to ",(0,n.kt)("em",{parentName:"p"},"run")," this node. At LUKSO the directory has the following structure:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"configs"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"configs.yaml"),"   // configuration of consensus service"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"genesis.json"),"   // configuration of execution service"))),(0,n.kt)("li",{parentName:"ul"},"data",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"execution_data"),"   // db of execution service"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"consensus_data"),"   // db of consensus service"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"validator_data"),"   // db of validator service"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"keystore")," ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"prysm/direct/account/all-accounts.keystore.json"),"     // keystore of valdiator keys"),(0,n.kt)("li",{parentName:"ul"},"..."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"password.txt"),"        // password of keystore"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"docker-compose.yaml")," // describes how to run the docker images"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"node_config.yaml"),"   // adjustable values on how to run the nodes"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},".env"),"   // auto genrated file derived from ",(0,n.kt)("strong",{parentName:"li"},"node_config.yaml"))),(0,n.kt)("h3",{id:"validator-keystore"},"Validator Keystore"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Validator Keystore")," is a directory with private key in formats for the respective validator service\nversion (Teku, Lighthouse, Prysm,...). The keystore has a fixed number of keys. If you need to change\nthe number of keys you ",(0,n.kt)("strong",{parentName:"p"},"must")," create a new keystore. There is always ",(0,n.kt)("strong",{parentName:"p"},"one")," ",(0,n.kt)("strong",{parentName:"p"},"Validator Keystore")," for\none ",(0,n.kt)("strong",{parentName:"p"},"Validator Node")),(0,n.kt)("h3",{id:"validator-key"},"Validator Key"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Validator Key")," is a private key that can have an active balance and is used to sign attestations\nand proposed blocks. The key can have an arbitrary amount of staked LYX but it ",(0,n.kt)("strong",{parentName:"p"},"won't")," change the reward.\nIt is possible to deposit LYX multiple time to this validator key and that is important for the case the ",(0,n.kt)("strong",{parentName:"p"},"Validator Key")," missed duties and lost balance."),(0,n.kt)("h3",{id:"validator-key-state"},"Validator Key State"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Validator Key State")," is the state of one particular key. A ",(0,n.kt)("strong",{parentName:"p"},"Validator Keystore")," can have many\nkeys being in many states. When firstly created all the ",(0,n.kt)("strong",{parentName:"p"},"Validator Keys")," are in the state\nNOT_DEPOSITED. (NOTE: If the keystore was recreated the state my differ for some keys)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"State"),(0,n.kt)("th",{parentName:"tr",align:null},"Acitvated By"),(0,n.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"NOT_DEPOSITED"),(0,n.kt)("td",{parentName:"tr",align:null},"..."),(0,n.kt)("td",{parentName:"tr",align:null},"The keystore was created for the first time")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PENDING"),(0,n.kt)("td",{parentName:"tr",align:null},"A deposit with ",(0,n.kt)("em",{parentName:"td"},"min staking amount")," was made"),(0,n.kt)("td",{parentName:"tr",align:null},"There is a proven stake deposited in the Deposit Contract")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ACTIVE"),(0,n.kt)("td",{parentName:"tr",align:null},"The deposit was observed by the consensus network"),(0,n.kt)("td",{parentName:"tr",align:null},"The validator is eligible to be selected to propose and attest in the upcoming epochs")))),(0,n.kt)("h2",{id:"how-validator-keys-are-created"},"How Validator Keys are created"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Validator Key")," is always part of a ",(0,n.kt)("strong",{parentName:"p"},"Validator Keystore")," - as a single key or a combination of many. The keys\nare being derived by a ",(0,n.kt)("a",{parentName:"p",href:"https://wolovim.medium.com/ethereum-201-mnemonics-bb01a9108c38"},"Mnemonic"),".\nA Mnemonic can potentially create an infinite amount of keys. It is important to understand that\nthese keys are indexed. There is a possibility to (theoretically) create a certain range."),(0,n.kt)("p",null,"Once a mnemonic is known the creation of ",(0,n.kt)("strong",{parentName:"p"},"Validator Keystores")," is ",(0,n.kt)("strong",{parentName:"p"},"not")," random but ",(0,n.kt)("strong",{parentName:"p"},"deterministic"),"."),(0,n.kt)("h3",{id:"an-example"},"An Example"),(0,n.kt)("p",null,"Given a mnemonic ",(0,n.kt)("em",{parentName:"p"},"m"),". We create a keystore from position 0 to 2. This could result into:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Keystore A"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Key0: 0x8154..12"),(0,n.kt)("li",{parentName:"ul"},"Key1: 0x7361..45"),(0,n.kt)("li",{parentName:"ul"},"Key2: 0x7481..fe")))),(0,n.kt)("p",null,"Now let's assume we deleted this keystore, and we create a new one from position 1 to 3. This results into:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Keystore B"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Key1: 0x7361..45"),(0,n.kt)("li",{parentName:"ul"},"Key2: 0x7481..fe"),(0,n.kt)("li",{parentName:"ul"},"Key3: 0x78ca..89")))),(0,n.kt)("p",null,"As you can see the Key1 and Key2 are the same in ",(0,n.kt)("strong",{parentName:"p"},"Keystore A")," and ",(0,n.kt)("strong",{parentName:"p"},"Keystore B"),". This mechanism\nallows for great power to rearrange your node setup."),(0,n.kt)("h3",{id:"node-setup-example"},"Node Setup Example"),(0,n.kt)("p",null,"Let's assume - given a mnemonic ",(0,n.kt)("em",{parentName:"p"},"m")," - we want to create 2 nodes with 30 keys in\n",(0,n.kt)("strong",{parentName:"p"},"Node A")," and 16 keys in the other ",(0,n.kt)("strong",{parentName:"p"},"Node B"),".  Given our mnemonic ",(0,n.kt)("em",{parentName:"p"},"m")," we would\ne.g. have the following setup:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Node A")," has a keystore with keys from position ",(0,n.kt)("em",{parentName:"p"},"0")," to position ",(0,n.kt)("em",{parentName:"p"},"29"),"\n",(0,n.kt)("strong",{parentName:"p"},"Node B")," has a keystore with keys from position ",(0,n.kt)("em",{parentName:"p"},"30")," to position ",(0,n.kt)("em",{parentName:"p"},"45")),(0,n.kt)("p",null,"Now let's assume we want to rearrange the ",(0,n.kt)("strong",{parentName:"p"},"Validator Keys"),"'s by having an equal amount of keys on both nodes."),(0,n.kt)("p",null,"We should:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Stop the validator nodes"),(0,n.kt)("li",{parentName:"ol"},"Delete the keystores"),(0,n.kt)("li",{parentName:"ol"},"Recreate the keystores with the same mnemonic ",(0,n.kt)("strong",{parentName:"li"},"m")),(0,n.kt)("li",{parentName:"ol"},"Start the nodes again")),(0,n.kt)("p",null,"The setup could be"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Node A")," has a keystore with keys from position ",(0,n.kt)("em",{parentName:"p"},"0")," to position ",(0,n.kt)("em",{parentName:"p"},"22"),"\n",(0,n.kt)("strong",{parentName:"p"},"Node B")," has a keystore with keys from position ",(0,n.kt)("em",{parentName:"p"},"23")," to position ",(0,n.kt)("em",{parentName:"p"},"45")),(0,n.kt)("h2",{id:"need-help"},"Need help?"),(0,n.kt)("p",null," Ask your question in the validators channel on the ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/u7cmyUyw8F"},"official LUKSO Discord server"),"."))}k.isMDXComponent=!0}}]);