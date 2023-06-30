"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[9340],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),m=c(a),p=o,u=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return a?n.createElement(u,r(r({ref:t},h),{},{components:a})):n.createElement(u,r({ref:t},h))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},97454:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(83117),o=(a(67294),a(3905));const i={sidebar_label:"Comparison with BSC"},r="BNB Smart Chain vs Polygon - Comparing the Differences",s={unversionedId:"migration/evm-chains/chain-comparison",id:"migration/evm-chains/chain-comparison",title:"BNB Smart Chain vs Polygon - Comparing the Differences",description:"Launched in 2020, BNB Smart Chain quickly gained a lot of popularity due to its distinguishing features of low cost and faster transactions. Several projects that are based on other blockchain platforms are migrating to the BNB Chain platform. In this article, we provide a comparison of BNB Chain with other EVM Chains, to help the readers make sound decisions when migrating their projects from other EVM Chains to BNB Chain.",source:"@site/docs/migration/evm-chains/chain-comparison.md",sourceDirName:"migration/evm-chains",slug:"/migration/evm-chains/chain-comparison",permalink:"/docs/migration/evm-chains/chain-comparison",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/migration/evm-chains/chain-comparison.md",tags:[],version:"current",frontMatter:{sidebar_label:"Comparison with BSC"},sidebar:"bscSideBar",previous:{title:"Token Migration",permalink:"/docs/migration/non-evm-chains/solana/token-migration"},next:{title:"Token Standard Comparison",permalink:"/docs/migration/evm-chains/token-comparison"}},l={},c=[{value:"Ethereum Virtual Machine(EVM)",id:"ethereum-virtual-machineevm",level:3},{value:"BNB Chain",id:"bnb-chain",level:3},{value:"Polygon",id:"polygon",level:3},{value:"Comparing BSC and Polygon",id:"comparing-bsc-and-polygon",level:2},{value:"EVM Compatibility",id:"evm-compatibility",level:3},{value:"Architecture",id:"architecture",level:3},{value:"Overview of BSC\u2019s Architecture",id:"overview-of-bscs-architecture",level:4},{value:"Overview of the Polygon\u2019s Architecture",id:"overview-of-the-polygons-architecture",level:4},{value:"Staking management smart contracts on Ethereum",id:"staking-management-smart-contracts-on-ethereum",level:5},{value:"Heimdall (validation layer)",id:"heimdall-validation-layer",level:5},{value:"Checkpointing",id:"checkpointing",level:4},{value:"Overview of the Checkpointing Process.",id:"overview-of-the-checkpointing-process",level:4},{value:"Bor (block producer layer)",id:"bor-block-producer-layer",level:4},{value:"Consensus Algorithms",id:"consensus-algorithms",level:3},{value:"Conclusion",id:"conclusion",level:2}],h={toc:c},m="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(m,(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bnb-smart-chain-vs-polygon---comparing-the-differences"},"BNB Smart Chain vs Polygon - Comparing the Differences"),(0,o.kt)("p",null,"Launched in 2020, BNB Smart Chain quickly gained a lot of popularity due to its distinguishing features of low cost and faster transactions. Several projects that are based on other blockchain platforms are migrating to the BNB Chain platform. In this article, we provide a comparison of BNB Chain with other EVM Chains, to help the readers make sound decisions when migrating their projects from other EVM Chains to BNB Chain."),(0,o.kt)("h3",{id:"ethereum-virtual-machineevm"},"Ethereum Virtual Machine(EVM)"),(0,o.kt)("p",null,"EVM is the acronym for Ethereum Virtual Machine. In simpler words, EVM can be described as a virtual CPU for Ethereum to execute the bytecodes of smart contracts.\nEthereum is regarded as the pioneer public blockchain to offer smart contract programmability. However, with the passage of time, slower and more expensive transactions with network congestion have led to the explosion of new blockchains that not only offer much lower transaction costs and faster settlement but also offer EVM-compatibility to attract both developers and users.\nEVM-compatibility can be regarded as a stepping stone for achieving blockchain interoperability. EVM-compatibility means creating an EVM-like code execution environment that makes it easy for Ethereum developers to migrate smart contracts to an EVM compatible chain without having to write the code from scratch again. So, developers can conveniently migrate their dApps from the Ethereum network to BSC or other EVM-compatible networks. Some of the major EVM chains include BSC, Polygon, Avalanche, etc."),(0,o.kt)("h3",{id:"bnb-chain"},"BNB Chain"),(0,o.kt)("p",null,"The BNB Chain ecosystem comprises two blockchain giants, namely, BNB Beacon Chain (BC) and the BNB Smart Chain (BSC). The BNB Beacon Chain is responsible for the Governance of the BNB Chain, offering services such as (staking and voting. Whereas the BNB Smart Chain (BSC) blockchain, founded in 2020, is an EVM compatible blockchain and contains consensus layers and hubs to multi-chains.\nBSC is an improved Ethereum's hard fork and runs parallel to the BNB Beacon Chain. BSC offers smart contract functionality to the BNB Chain ecosystem and is a platform for creating DeFi, Gaming, Social and other DApps. BSC gained real popularity in early 2021 because of its lower gas fees and faster finality as compared to Ethereum's high gas fees and scalability problems."),(0,o.kt)("h3",{id:"polygon"},"Polygon"),(0,o.kt)("p",null,"Polygon, formerly known as Matic, is a Layer-2 scaling solution for the Ethereum Blockchain. It addresses some of the Ethereum fallbacks by utilizing sidechains, achieving similar decentralization and security of the Ethereum Network. It essentially addresses the issues inherent to the Ethereum blockchain\u2019s scalability and consensus algorithm for speeding up the transactions per second (or TPS)."),(0,o.kt)("h2",{id:"comparing-bsc-and-polygon"},"Comparing BSC and Polygon"),(0,o.kt)("p",null,"In this section, we provide a comparison of these two platforms with respect to different aspects.\nInnovation\nBSC is an improved version of Ethereum and uses the Proof of Staked Authority(PoSA) consensus algorithm which uses the best of two worlds - Proof of Authority (PoA) and Delegated Proof of Stake (DPoS). On the other hand, Polygon is a Layer-2 sidechain to Ethereum which utilizes Plasma framework & Proof of Stake (POS) chains to maintain asset security. Polygon is an interoperable, scaling framework for building Ethereum-compatible blockchains. BSC has recently announced the release of ZkRollup and Polygon aims to release one in the future.\nRelationship with Ethereum\nAs Polygon is a Layer-2 scaling solution that utilizes sidechains for performing computation, it can also be regarded as a Commit Chain of Ethereum. This means Polygon can't exist without Ethereum as all the final transactions are done on Ethereum. Currently, Polygon uses the POS (Proof of Stake) algorithm which is less decentralized, but they plan to move to ZK rollups to address the criticism it receives for itd.\nOn the other hand, BSC is a hard fork of Ethereum. As BSC is a separate Layer-1 blockchain of its own, it does not need Ethereum to survive and thus has achieved 100% availability since its inception - even during the time Ethereum experienced downtimes."),(0,o.kt)("h3",{id:"evm-compatibility"},"EVM Compatibility"),(0,o.kt)("p",null,"Support for the EVM allows interoperability between BSC, Polygon Network, and the Ethereum Network. So, developers can conveniently migrate their dApps from the Ethereum network to either Polygon or BSC and vice versa. "),(0,o.kt)("h3",{id:"architecture"},"Architecture"),(0,o.kt)("h4",{id:"overview-of-bscs-architecture"},"Overview of BSC\u2019s Architecture"),(0,o.kt)("p",null,"BNB Chain is an ecosystem comprising of two major blockchains that serve different purposes, namely, BNB Beacon Chain (BC) and BNB Smart Chain (BSC). To deal with the increased volumes of transactions and daily active users (DAU), BNB Chain ecosystem has evolved to add more scaling solutions and now includes the following components with different responsibilities and purposes."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.bnbchain.org/docs/learn/beaconIntro"},"BNB Beacon Chain")," - BNB Chain Governance (staking, voting)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.bnbchain.org/docs/learn/intro"},"BNB Smart Chain (BSC)")," - EVM compatible, consensus layers, and with hubs to multi-chains"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.bnbchain.org/docs/zkbnb/zkbnb-overview"},"ZkBNB"),"- ZkRollup solution to scale BSC as a super high-performance blockchain.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"bnb-chain-ecosystem",src:a(24179).Z,width:"960",height:"540"})),(0,o.kt)("p",null,"The design principles of ",(0,o.kt)("strong",{parentName:"p"},"BSC"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Standalone Blockchain:")," even though BSC can be termed as a Layer-2 solution to BNB Beacon Chain, technically, it is a standalone blockchain. Most of the fundamental technical and business functions of BSC are self-contained and it can run well even if the BC is stopped."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Ethereum Compatibility:")," To take advantage of the mature applications and community of Ethereum, BSC chooses to be compatible with the existing Ethereum mainnet. This means all of the dApps, ecosystem components, and toolings work with BSC and require zero or minimum changes. Furthermore, BSC nodes require similar (or a bit higher) hardware specification and skills to run and operate. "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Staking Involved Consensus and Governance:")," Staking-based consensus is more environmentally friendly and leaves more flexible options to community governance. Expectedly, this consensus enables better network performance over proof-of-work blockchain systems, i.e., faster blocking time and higher transaction capacity."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Native Cross-Chain Communication:")," both BC and BSC are implemented with native support for cross-chain communication among the two blockchains. The communication protocol is designed to be bi-directional, decentralized, and trustless. It concentrates on moving digital assets between BC and BSC, i.e., BEP2 tokens, and eventually, any other BEP tokens introduced later. ")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(70890).Z,width:"1280",height:"507"})),(0,o.kt)("h4",{id:"overview-of-the-polygons-architecture"},"Overview of the Polygon\u2019s Architecture"),(0,o.kt)("p",null,"Polygon\u2019s architecture can be divided into three layers. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"*Ethereum layer:")," comprises a set of contracts for different functionalities, like staking, checkpointing, and rewards, that exist on the Ethereum mainnet."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"*Heimdall layer:")," comprises a set of proof-of-stake Heimdall nodes that run parallel to the Ethereum mainnet and are responsible for monitoring the set of staking contracts deployed on the Ethereum mainnet and committing the Polygon Network checkpoints to the Ethereum mainnet. Heimdall is based on the Tendermint protocol."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"*Bor layer:")," a set of block-producing Bor nodes shuffled by Heimdall nodes. Bor is based on Go Ethereum.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(98494).Z,width:"2048",height:"1280"})),(0,o.kt)("h5",{id:"staking-management-smart-contracts-on-ethereum"},"Staking management smart contracts on Ethereum"),(0,o.kt)("p",null,"A set of staking management contracts are employed on the Ethereum mainnet which enable the Proof of Stake (PoS) mechanism on Polygon. The staking contracts implement the following features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Anyone can stake the MATIC tokens on the staking contracts existing on the Ethereum mainnet to join the Polygon system as a validator."),(0,o.kt)("li",{parentName:"ul"},"Earn staking rewards for validating state transitions on the Polygon Network."),(0,o.kt)("li",{parentName:"ul"},"Save checkpoints on the Ethereum mainnet.")),(0,o.kt)("h5",{id:"heimdall-validation-layer"},"Heimdall (validation layer)"),(0,o.kt)("p",null,"The Heimdall can rightfully be called the heart of the Polygon system. It is responsible for the management of validators, block producer selection, spans, the state-sync mechanism between Ethereum and Polygon and other essential aspects of the system. It uses the Cosmos-SDK and a forked version of Tendermint, called Peppermint. Even though Heimdall uses a customized version of the Cosmos-SDK, it follows the same pattern - for better for worse.\nThe Heimdall layer can also be called the validation layer. It is responsible for the collection of blocks produced by Bor into a Merkle tree and publishing the Merkle root periodically to the root chain. Checkpoints are referred to as the periodic publishing of snapshots of the Bor sidechain. For every few blocks produced on the Bor layer, a validator on the Heimdall layer is responsible for the following"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Validating all the blocks produced since the last checkpoint."),(0,o.kt)("li",{parentName:"ol"},"Creation of a Merkle tree of the block hashes."),(0,o.kt)("li",{parentName:"ol"},"Publishing the Merkle root hash to the Ethereum mainnet.")),(0,o.kt)("h4",{id:"checkpointing"},"Checkpointing"),(0,o.kt)("p",null,"In the Polygon network, Checkpoints hold greater significance, primarily due to the following reasons"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Providing finality on the root chain."),(0,o.kt)("li",{parentName:"ol"},"Providing proof of burn in withdrawal of assets.")),(0,o.kt)("h4",{id:"overview-of-the-checkpointing-process"},"Overview of the Checkpointing Process."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A subset of active validators from the pool is selected to act as block producers for a span and are responsible for the creation and broadcasting of new blocks on the network."),(0,o.kt)("li",{parentName:"ul"},"A checkpoint includes the Merkle root hash of all blocks created during any given interval. All nodes validate the Merkle root hash and attach their signature to it."),(0,o.kt)("li",{parentName:"ul"},"A proposer selected from the validator set is responsible for collecting all the signatures for a particular checkpoint and then committing the checkpoint on the Ethereum mainnet."),(0,o.kt)("li",{parentName:"ul"},"The responsibility of creating blocks and proposing checkpoints is variably dependent on a validator\u2019s stake ratio in the overall pool.")),(0,o.kt)("h4",{id:"bor-block-producer-layer"},"Bor (block producer layer)"),(0,o.kt)("p",null,"Bor can also be termed as Polygon's sidechain block producer. It is the entity which is responsible for the collection of transactions into blocks. Bor block producers are essentially a subset of the validators and to maintain decentralization these are periodically shuffled using historical Ethereum block hashes by the Heimdall validators. The Bor node implementation is basically the sidechain operator. The sidechain VM is EVM-compatible and is a basic Geth implementation with custom changes to the consensus algorithm."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(91166).Z,width:"877",height:"2048"})),(0,o.kt)("h3",{id:"consensus-algorithms"},"Consensus Algorithms"),(0,o.kt)("p",null,"Polygon utilizes the ",(0,o.kt)("strong",{parentName:"p"},"Proof-of-Stake (PoS)")," consensus algorithm, whereas BSC employs the ",(0,o.kt)("strong",{parentName:"p"},"Proof-of-Stake-Authority (PoSA)"),". Both consensus mechanisms' major concern is to overcome Ethereum\u2019s high gas fees and slower transactions. "),(0,o.kt)("p",null,"In the PoS consensus algorithm, validators are chosen based on a user's commitment to the network in terms of its stake, meaning that the higher the stake, higher the chances of getting selected as a validator. On the other hand, ",(0,o.kt)("strong",{parentName:"p"},"PoSA")," is a combination of the ",(0,o.kt)("strong",{parentName:"p"},"PoS")," and the ",(0,o.kt)("strong",{parentName:"p"},"PoA (Proof of Authority)")," consensus mechanisms. "),(0,o.kt)("p",null,"Utilizing the PoSA consensus mechanism, BSC was initially launched with ",(0,o.kt)("strong",{parentName:"p"},"21")," validators. However, now BSC supports a set of ",(0,o.kt)("strong",{parentName:"p"},"44")," validators, with ",(0,o.kt)("strong",{parentName:"p"},"26")," of them being active. In future, BSC plans to increase the active validators to ",(0,o.kt)("strong",{parentName:"p"},"41"),", and about ",(0,o.kt)("strong",{parentName:"p"},"80-100")," validators in total. The top validator candidates with the most bonded stakes are chosen to be part of the subset of active validators and produce blocks. The double-sign detection and other slashing logic guarantee security, stability, and chain finality. Other than the ",(0,o.kt)("strong",{parentName:"p"},"41 active validators"),", BSC also has a set of inactive validators known as the ",(0,o.kt)("strong",{parentName:"p"},"Candidates"),". Even though the chances of getting elected are less, the Candidates upon selection can produce blocks and charge gas fees in the BSC mainnet. Similar to Active Validators, unavailable candidates are slashed but for a smaller amount. In an extreme case, if a majority of the active 41 validators get attacked and offline, Candidate Validators can report to BNB Beacon Chain about the stale blocking, resume it and eventually propose re-election of the active validator set."),(0,o.kt)("p",null,"In contrast, Polygon uses the ",(0,o.kt)("strong",{parentName:"p"},"Proof-of-Stake (PoS)")," consensus mechanism on its ",(0,o.kt)("em",{parentName:"p"},"Plasma/POS commit chains"),". For any user willing to participate in the consensus process, users are required to stake MATIC tokens on the staking smart contracts on Ethereum mainnet. This staking indicates a user's commitment to the process. A slashing mechanism (removal of staked funds) is also implemented to discourage stakers from submitting invalid blocks, illegally verifying blocks, or executing invalid transactions. Requiring validators to put funds at risk before they can participate in consensus helps maintain the integrity of the network."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"There are a variety of EVM-compatible blockchain on the market, and while from the first sight, it may look as if all of them are the same, the reality is every blockchain is aimed for specific use cases and both security and availability requirements. This is why BSC has undergone several iterations of improvements to ensure superb performance and the most advanced security."))}d.isMDXComponent=!0},24179:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/BNBChain2022-f77353b5f3f677f9cb0c4c74e5f1e753.png"},70890:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bnb-cross-chain-a7b783e024746b0ec2d14a4e3d098b93.jpg"},91166:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/polygon-layers-extended-2b34941bc05a79abfb80a7cd8336b6a0.png"},98494:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/polygon-layers-9e0b4bcb1307bdcc5f0be8f7fcd12f56.png"}}]);