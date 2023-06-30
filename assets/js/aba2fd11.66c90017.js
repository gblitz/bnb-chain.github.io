"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[5178],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return t?a.createElement(h,s(s({ref:n},d),{},{components:t})):a.createElement(h,s({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},89488:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(83117),o=(t(67294),t(3905));const r={},s="Encoding Examples",i={unversionedId:"beaconchain/learn/encoding/amino-example",id:"beaconchain/learn/encoding/amino-example",title:"Encoding Examples",description:"Encoding Output",source:"@site/docs/beaconchain/learn/encoding/amino-example.md",sourceDirName:"beaconchain/learn/encoding",slug:"/beaconchain/learn/encoding/amino-example",permalink:"/docs/beaconchain/learn/encoding/amino-example",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/learn/encoding/amino-example.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Types",permalink:"/docs/beaconchain/learn/encoding/"},next:{title:"RPC",permalink:"/docs/beaconchain/develop/rpc"}},l={},c=[{value:"Encoding Output",id:"encoding-output",level:2},{value:"JSON Marshal",id:"json-marshal",level:3},{value:"Examples in Go-SDK",id:"examples-in-go-sdk",level:3},{value:"Binary Marshal",id:"binary-marshal",level:3},{value:"Examples in Go-SDK",id:"examples-in-go-sdk-1",level:3},{value:"BNB Beacon Chain Transaction Encoding",id:"bnb-beacon-chain-transaction-encoding",level:2},{value:"Standard Transaction",id:"standard-transaction",level:3},{value:"StdSignBytes",id:"stdsignbytes",level:3},{value:"Canonical Bytes for Signing",id:"canonical-bytes-for-signing",level:3},{value:"Standard Signature",id:"standard-signature",level:3},{value:"Message Types",id:"message-types",level:3},{value:"Transfer",id:"transfer",level:4},{value:"Freeze",id:"freeze",level:4},{value:"Unfreeze",id:"unfreeze",level:4},{value:"Vote",id:"vote",level:4},{value:"Issue",id:"issue",level:4},{value:"Mint",id:"mint",level:4},{value:"Burn",id:"burn",level:4},{value:"Submit Proposal",id:"submit-proposal",level:4},{value:"Deposit",id:"deposit",level:4},{value:"Set Account Flags",id:"set-account-flags",level:4},{value:"Time-lock",id:"time-lock",level:4},{value:"Time-unlock",id:"time-unlock",level:4},{value:"Time-relock",id:"time-relock",level:4},{value:"HTLT",id:"htlt",level:4},{value:"Deposit HTLT",id:"deposit-htlt",level:4},{value:"Claim HTLT",id:"claim-htlt",level:4},{value:"Refund HTLT",id:"refund-htlt",level:4}],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"encoding-examples"},"Encoding Examples"),(0,o.kt)("h2",{id:"encoding-output"},"Encoding Output"),(0,o.kt)("p",null,"BNB Beacon Chain  (Amino) encoding logic may encode a data structure into two output formats: Binary and JSON."),(0,o.kt)("h3",{id:"json-marshal"},"JSON Marshal"),(0,o.kt)("p",null,"Amino supports JSON encoding natively, which is the same as other usual json marshalers. Except that it can add one more ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," info for registered type, as shown below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "<amino type name>",\n  "value": <JSON>\n}\n')),(0,o.kt)("h3",{id:"examples-in-go-sdk"},"Examples in Go-SDK"),(0,o.kt)("p",null,"Let's take a look at an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/go-sdk/blob/fe7524098533a6ce6077cf5f28f677329963d17b/client/rpc/dex_client.go#L373"},"example function")," of BNB Beacon Chain  go-sdk."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'func (c *HTTP) GetProposal(proposalId int64) (types.Proposal, error) {\n  params := types.QueryProposalParams{\n    ProposalID: proposalId,\n  }\n  bz, err := c.cdc.MarshalJSON(params)\n  if err != nil {\n    return nil, err\n  }\n  rawProposal, err := c.ABCIQuery("custom/gov/proposal", bz)\n  if err != nil {\n    return nil, err\n  }\n  if !rawProposal.Response.IsOK(){\n    return nil, fmt.Errorf(rawProposal.Response.Log)\n  }\n  var proposal types.Proposal\n\n  err = c.cdc.UnmarshalJSON(rawProposal.Response.GetValue(), &proposal)\n  return proposal, err\n}\n')),(0,o.kt)("p",null,"In order to query the proposal, you can use Amino to marshal the request JSON first."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},"  bz, err := c.cdc.MarshalJSON(params)\n")),(0,o.kt)("p",null,"Then, use the unmarshal method to get the returned result."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},"  err = c.cdc.UnmarshalJSON(rawProposal.Response.GetValue(), &proposal)\n")),(0,o.kt)("h3",{id:"binary-marshal"},"Binary Marshal"),(0,o.kt)("p",null,"Binary encoding is a variant of Google protocol buffer. The bytes are layed out in the below sequence:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"a ",(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/protocol-buffers/docs/encoding#varints"},"varint")," encoded integer - it contains the length of the encoded bytes for the object, which is displayed as ",(0,o.kt)("inlineCode",{parentName:"li"},"SIZE-OF-ENCODED")," in the below structs. Please note that it contains the length of encoded bytes and also the type prefix (below), but not itself, e.g. if the encoded msg is 20 bytes, then the length would be 20 + 4 = 24, while 4 is used for the type prefix bytes."),(0,o.kt)("li",{parentName:"ol"},"an object type prefix of 4-8 bytes - For different type of objects, there will be different type prefixes, and they are displayed as in the specific objects below (data structures)."),(0,o.kt)("li",{parentName:"ol"},"a binary encoded object - the encoding is mostly the same as protocol buffer encoding mechanism, except the embedded fields of complex type:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"to encode data field of some specific types, an object type prefix for the field will be added ahead of the real encoding."))),(0,o.kt)("li",{parentName:"ol"},"repeated (array) Encoding - it is the same as google protocol buffer, while encoding of the object/struct may contain the type prefix as shown below.")),(0,o.kt)("h3",{id:"examples-in-go-sdk-1"},"Examples in Go-SDK"),(0,o.kt)("p",null,"Let's take a look at an example function of BNB Beacon Chain  go-sdk. The signed transaction needs to be amino-encoded, thus ready to be posted to BncChain API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'rawBz, err := c.keyManager.Sign(*signMsg)\n  if err != nil {\n    return nil, err\n  }\n  hexTx := []byte(hex.EncodeToString(rawBz))\n  param := map[string]string{}\n  if sync {\n    param["sync"] = "true"\n  }\n  commits, err := c.basicClient.PostTx(hexTx, param)\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"hexTx")," is derived from the following function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},"  bz, err := tx.Cdc.MarshalBinaryLengthPrefixed(&newTx)\n\n")),(0,o.kt)("h2",{id:"bnb-beacon-chain-transaction-encoding"},"BNB Beacon Chain Transaction Encoding"),(0,o.kt)("p",null,"Below are the data types that can be sent to BNB Beacon Chain  as requests, and their encoding layout. To simplify the presentation, we will use a variant of ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/proto3"},"Google protocol buffer proto3")," language to illustrate how the data fields are organized. Except the all-capitalized fields, other fields will use the default ",(0,o.kt)("inlineCode",{parentName:"p"},"proto3")," encoding logic."),(0,o.kt)("h3",{id:"standard-transaction"},"Standard Transaction"),(0,o.kt)("p",null,'Transactions are each wrapped in the below "Standard Transaction": structure:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// please note the field name is the JSON name.\nmessage StdTx {\n  uint64 SIZE-OF-ENCODED // varint encoded length of the structure after encoding, please note this includes both the below type prefix (4 bytes) and the all encoding bytes\n  0xF0625DEE // hardcoded, object type prefix in 4 bytes\n  repeated Msg msgs // array of size 1, containing the transaction message, which are one of the transaction types below. please check the above \"Array Encoding\"\n  repeated StdSignature signatures // array of size 1, containing the standard signature structure of the transaction sender\n  string memo // a short sentence of remark for the transaction. Please only `Transfer` transaction allows 'memo' input, and other transactions with non-empty `Memo` will be rejected.\n  int64 source // an identifier for tools triggerring this transaction, set to zero if unwilling to disclose.\n  bytes data // byte array, reserved for future use\n}\n")),(0,o.kt)("h3",{id:"stdsignbytes"},"StdSignBytes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type StdSignDoc struct {\n  AccountNumber int64             `json:"account_number"`\n  ChainID       string            `json:"chain_id"`\n  Memo          string            `json:"memo"`\n  Msgs          []json.RawMessage `json:"msgs"`\n  Sequence      int64             `json:"sequence"`\n  Source        int64             `json:"source"`\n  Data          []byte            `json:"data"`\n}\n\n')),(0,o.kt)("h3",{id:"canonical-bytes-for-signing"},"Canonical Bytes for Signing"),(0,o.kt)("p",null,"A transaction signature is ",(0,o.kt)("strong",{parentName:"p"},"not")," formed from the Amino-encoded transaction bytes themselves. Rather, a canonical representation of the transaction is generated in JSON format for signing."),(0,o.kt)("p",null,"This would allow for clients to sign a transaction off-chain, for example, a hardware HSM device like a Ledger, or within a micro-service in an algorithmic trading system. For example an external system will not have to understand Amino encoding to be able to approve of the transaction's content and produce the signed JSON string."),(0,o.kt)("p",null,"The canonical bytes for signing are generated from the StdSignBytes method. It produces a JSON string similar to the format below (formatted for clarity):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "sequence" : "64",\n   "account_number" : "12",\n   "data" : null,\n   "chain_id" : "chain-bnb",\n   "memo" : "smiley",\n   "msgs" : [\n      {\n         "inputs" : [\n            {\n               "coins" : [\n                  {\n                     "denom" : "BNB",\n                     "amount" : "200000000"\n                  }\n               ],\n               "address" : "bnc1hgm0p7khfk85zpz5v0j8wnej3a90w7098fpxyh"\n            }\n         ],\n         "outputs" : [\n            {\n               "address" : "bnc1cku54wwn66w2rkgs3h6v5zxrwtzyew8chcl720",\n               "coins" : [\n                  {\n                     "denom" : "BNB",\n                     "amount" : "200000000"\n                  }\n               ]\n            }\n         ]\n      }\n   ],\n   "source" : "1"\n}\n')),(0,o.kt)("p",null,"This JSON string, ",(0,o.kt)("strong",{parentName:"p"},"with all whitespace removed and keys sorted in alphabetical order"),", is signed with the private key of the sender. This signature is then attached to the ",(0,o.kt)("inlineCode",{parentName:"p"},"StdTx")," structure described in the above section. Please note that the transaction broadcasted to the blockchain is not JSON - the JSON is merely used as a canonical representation to generate the signature."),(0,o.kt)("p",null,"The next section describes how the generated signature is attached to a transaction."),(0,o.kt)("h3",{id:"standard-signature"},"Standard Signature"),(0,o.kt)("p",null,"The sender's signature is stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Standard Transaction")," data via a ",(0,o.kt)("inlineCode",{parentName:"p"},"Standard Signature"),", as shown below. This structure is included in the ",(0,o.kt)("inlineCode",{parentName:"p"},"StdTx")," (see above)."),(0,o.kt)("p",null,"Please note that ",(0,o.kt)("inlineCode",{parentName:"p"},"StdSignature")," itself doesn't have type prefix, while the ",(0,o.kt)("inlineCode",{parentName:"p"},"PubKey")," does."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"message StdSignature {\n  uint64 SIZE-OF-ENCODED // varint encoded length of the structure after encoding\n  // please note there is no type prefix for StdSignature\n  message PubKey {\n    0xEB5AE987 // hardcoded, object type prefix in 4 bytes\n    uint64 SIZE-OF-ENCODED // varint encoded length of the bytes below\n    bytes // no name or field id, just encode the bytes\n  }\n  PubKey pub_key // public key bytes of the signer address\n  bytes signature // signature bytes, please check chain access section for signature generation\n  int64 account_number // another identifier of signer, which can be read from chain by account REST API or RPC\n  int64 sequence // sequence number for the next transaction of the client, which can be read from the chain by account REST API or RPC. Please check chain acces section for details.\n}\n")),(0,o.kt)("h3",{id:"message-types"},"Message Types"),(0,o.kt)("p",null,"Messages represent the individual operations possible on BNB Beacon Chain , and these can be inserted into ",(0,o.kt)("inlineCode",{parentName:"p"},"StdTx.msgs"),' field. Message types are otherwise known as "transaction types", and these terms are used interchangeably in this document and in our technical documentation. So far every ',(0,o.kt)("inlineCode",{parentName:"p"},"StdTx"),' transaction "container" can only contain one "message".'),(0,o.kt)("h4",{id:"transfer"},"Transfer"),(0,o.kt)("p",null,"Transfer is the transaction for transferring funds to different addresses."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// please note the field name is the JSON name.\nmessage Send {\n  0x2A2C87FA   // hardcoded, object type prefix in 4 bytes\n  message Token {\n    string denom\n    int64 amount\n  }\n  message Input {\n    bytes address\n    repeated Token coins\n  }\n  message Output {\n    bytes address\n    repeated Token coins\n  }\n  repeated Input inputs\n  repeated Output outputs\n}\n")),(0,o.kt)("h4",{id:"freeze"},"Freeze"),(0,o.kt)("p",null,"Freeze transaction will move the amount of the tokens into a ",(0,o.kt)("inlineCode",{parentName:"p"},"frozen")," state, in which they cannot be used for transfers or sending new orders."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// please note the field name is the JSON name.\nmessage TokenFreeze {\n  0xE774B32D // hardcoded, object type prefix in 4 bytes\n  bytes from // owner address\n  string symbol // token symbol, in full name with "-" suffix\n  int64 amount // amount of tokens to freeze\n}\n')),(0,o.kt)("h4",{id:"unfreeze"},"Unfreeze"),(0,o.kt)("p",null,"Unfreeze will reversely turn the amount of ",(0,o.kt)("inlineCode",{parentName:"p"},"frozen")," tokens back to free state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// please note the field name is the JSON name.\nmessage TokenUnfreeze {\n  0x6515FF0D // hardcoded, object type prefix in 4 bytes\n  bytes from // owner address\n  string symbol // token symbol, in full name with "-" suffix\n  int64 amount // amount of tokens to unfreeze\n}\n')),(0,o.kt)("h4",{id:"vote"},"Vote"),(0,o.kt)("p",null,"Vote transactions for proposals."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// please note the field name is the JSON name.\nmessage Vote {\n  0xA1CADD36 // hardcoded, object type prefix in 4 bytes\n  int64 proposal_id // ID of the proposal\n  bytes voter // address of the voter\n  uint64 option // option from OptionSet chosen by the voter\n}\n")),(0,o.kt)("p",null,"Below are options for ",(0,o.kt)("inlineCode",{parentName:"p"},"option"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"OptionYes           = 0x01  // yes\nOptionAbstain       = 0x02  // abstain\nOptionNo            = 0x03  // no\nOptionNoWithVeto    = 0x04  // no with veto\n")),(0,o.kt)("h4",{id:"issue"},"Issue"),(0,o.kt)("p",null,"Issue (create) new asset on BNB Beacon Chain ."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"message IssueTokenValue  {\n  0x17EFAB80 // hardcoded, object type prefix in 4 bytes\n  bytes  from  // issuer's address\n  string name // token name\n  string symbol // token symbol\n  string total_supply // total supply\n  bool mintable // is mintable\n}\n")),(0,o.kt)("h4",{id:"mint"},"Mint"),(0,o.kt)("p",null,"Mint is used to increase the total supply of a token."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"message Mint {\n  0x467E0829 // hardcoded, object type prefix in 4 bytes\n  bytes from // sender's address\n  string symbol string // token symbol\n  int64 amount // increase amount\n}\n")),(0,o.kt)("h4",{id:"burn"},"Burn"),(0,o.kt)("p",null,"Burn is used to decrease the total supply of a token."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"message TokenBurn {\n  0x7ED2D2A0 // hardcoded, object type prefix in 4 bytes\n  bytes from // sender's address\n  string symbol string // token symbol\n  int64 amount // increase amount\n}\n")),(0,o.kt)("h4",{id:"submit-proposal"},"Submit Proposal"),(0,o.kt)("p",null,"Submit proposal is used to create a proposal for validators about adding trading pairs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"message Submit{\n  0xB42D614E // hardcoded, object type prefix in 4 bytes\n  string title // Title of the proposal\n  string description // Description of the proposal\n  byte proposal_type // Type of proposal. Initial set {PlainTextProposal, SoftwareUpgradeProposal,ListTradingPair, FixedFeeParams}\n  bytes proposer // Address of the proposer\n  message Coin {\n    string denom\n    int64 amount\n  }\n  int64 VotingPeriod // Length of the voting period (s)\n}\n")),(0,o.kt)("h4",{id:"deposit"},"Deposit"),(0,o.kt)("p",null,"Deposit is used to increase the total deposit of a proposal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"message Deposit{\n  0xA18A56E5 // hardcoded, object type prefix in 4 bytes\n  int64 ProposalID // ID of the proposal\n  bytes Depositer // Address of the depositer\n  message Coin {\n    string denom\n    int64 amount\n  }\n}\n")),(0,o.kt)("h4",{id:"set-account-flags"},"Set Account Flags"),(0,o.kt)("p",null,"You can set the flag value of your account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"message SetAccountFlags{\n  0xBEA6E301 // hardcoded, object type prefix in 4 bytes\n  bytes from // sender's address\n  int64 flag // account flag\n}\n")),(0,o.kt)("h4",{id:"time-lock"},"Time-lock"),(0,o.kt)("p",null,"You can only lock tokens on your own account for a certain period of time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"message Timerelock{\n  0x07921531 // hardcoded, object type prefix in 4 bytes\n  bytes from // sender's address\n  string description // Description of the lock\n  message Coin {\n    string denom\n    int64 amount\n  }\n  repeated Coin amount\n  int64 lock_time // lock time\n}\n")),(0,o.kt)("h4",{id:"time-unlock"},"Time-unlock"),(0,o.kt)("p",null,"You can  unlock tokens on your own account after a certain period of time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"message Timeunlock{\n  0xC4050C6C   // hardcoded, object type prefix in 4 bytes\n  bytes from // sender's address\n  int64 id // lock time id\n}\n")),(0,o.kt)("h4",{id:"time-relock"},"Time-relock"),(0,o.kt)("p",null,"You can  relock tokens on your own account after a certain period of time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"message Timerelock{\n  0x504711DA // hardcoded, object type prefix in 4 bytes\n  bytes from // sender's address\n  int64 Id // lock time id\n  string description // Description of the lock\n  message Coin {\n    string denom\n    int64 amount\n  }\n  repeated Coin amount\n  int64 lock_time // lock time\n}\n")),(0,o.kt)("h4",{id:"htlt"},"HTLT"),(0,o.kt)("p",null,"Hash Timer Locked Transfer (HTLT) is a new transaction type on BNB Beacon Chain , to serve as HTLC in the first step of Atomic Swap"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"message HTLT{\n  0xB33F9A24 // hardcoded, object type prefix in 4 bytes\n  bytes from // sender's address\n  bytes to // receiver's address\n  string recipient_other_chain\n  string sender_other_chain\n  bytes random_number_hash\n  int64  timestamp\n  message Coin {\n    string denom\n    int64 amount\n  }\n  repeated Coin amount\n  string expected_income\n  int64 height_span\n  bool cross_chain\n}\n")),(0,o.kt)("h4",{id:"deposit-htlt"},"Deposit HTLT"),(0,o.kt)("p",null,"Deposit Hash Timer Locked Transfer is to lock new BEP2 asset to an existed HTLT which is for single chain atomic swap."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"message DepositHTLT{\n  0x63986496 // hardcoded, object type prefix in 4 bytes\n  bytes from // sender's address\n  message Coin {\n    string denom\n    int64 amount\n  }\n  repeated Coin amount\n  bytes swap_id\n}\n")),(0,o.kt)("h4",{id:"claim-htlt"},"Claim HTLT"),(0,o.kt)("p",null,"Claim Hash Timer Locked Transfer is to claim the locked asset by showing the random number value that matches the hash. Each HTLT locked asset is guaranteed to be release once."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"message ClaimHTLTMsg{\n  0xC1665300 // hardcoded, object type prefix in 4 bytes\n  bytes from // sender's address\n  bytes swap_id\n  bytes random_number\n}\n")),(0,o.kt)("h4",{id:"refund-htlt"},"Refund HTLT"),(0,o.kt)("p",null,"Refund Hash Timer Locked Transfer is to refund the locked asset after timelock is expired."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"message RefundHTLTMsg{\n  0x3454A27C // hardcoded, object type prefix in 4 bytes\n  bytes from // sender's address\n  bytes swap_id\n")))}u.isMDXComponent=!0}}]);