update({"content":"<head>" + 
"<meta charset=\"utf-8\">" + 
"<script>" + 
"var kantanVersion = \"v1.20160221.01\";" + 
"</script>" + 
"<style>" + 
"body {" + 
"	margin: 0;" + 
"	padding: 0;" + 
"	position:relative;" + 
"}" + 
"" + 
".onDragover {" + 
"	border : 5px dashed #99cde1;" + 
"}" + 
"" + 
"nav {" + 
"	margint:0;" + 
"}" + 
"" + 
"#leftNav{" + 
"	float:left;" + 
"}" + 
"" + 
"#rightNav {" + 
"	float:right;" + 
"}" + 
"" + 
"nav:after {" + 
"	content: \".\"; " + 
"	display: block; " + 
"	height: 0; " + 
"	font-size:0;	" + 
"	clear: both; " + 
"	visibility:hidden;" + 
"}" + 
"" + 
"#attach {" + 
"	width:100%;" + 
"	border-top:1px solid gray;" + 
"	border-bottom:1px solid gray;" + 
"	display:none;" + 
"}" + 
"#attachForm {" + 
"	box-sizing:border-box;" + 
"	width:100%;" + 
"	height:100%;" + 
"	display:none;" + 
"}" + 
"" + 
"input[type=\"file\"] {" + 
"	width:100%;" + 
"}" + 
"" + 
"#filer{" + 
"	box-sizing:border-box;" + 
"	width:100%;" + 
"	height:150px;" + 
"	overflow: auto;" + 
"	display:none;" + 
"}" + 
"" + 
"#attachToggleButton," + 
"#previewToggleButton{" + 
"	width: 50%;" + 
"}" + 
"" + 
"#wrapper {" + 
"	overflow: auto;" + 
"}" + 
"" + 
"#editor {" + 
"	box-sizing:border-box;" + 
"	resize:none; " + 
"	width:50%;" + 
"	height:100%;" + 
"	float:left;" + 
"	border-top:none;" + 
"	display:none;" + 
"	-moz-tab-size: 4;" + 
"	-o-tab-size: 4;" + 
"	tab-size: 4;" + 
"	border:1px solid gray;" + 
"	margin: 0;" + 
"}" + 
"" + 
"#previewer {" + 
"	box-sizing:border-box;" + 
"	width:100%;" + 
"	margin: 0 auto;" + 
"	overflow:auto;" + 
"	word-wrap: break-word;" + 
"	border:1px solid gray;" + 
"}" + 
"" + 
"#previewer:empty {" + 
"	border: 0;" + 
"}" + 
"" + 
"#previewer:focus {" + 
"	outline:none;" + 
"}" + 
"" + 
"#previewer:after {" + 
"	content: \".\"; " + 
"	display: block; " + 
"	height: 0; " + 
"	font-size:0;	" + 
"	clear: both; " + 
"	visibility:hidden;" + 
"}" + 
"" + 
"#onlineMenu {" + 
"	display:none;" + 
"	border : 1px solid gray;" + 
"	position:absolute;" + 
"	margin:0;" + 
"	padding:0;" + 
"}" + 
"" + 
"#onlineMenu > ul {" + 
"	list-style-type: none;" + 
"	margin:0;" + 
"	padding:0;" + 
"}" + 
"" + 
"#onlineMenu > ul > li {" + 
"	margin:0;" + 
"}" + 
"" + 
"#onlineMenu > ul > li > a {" + 
"	box-sizing:border-box;" + 
"	text-decoration:none;" + 
"	display:block;" + 
"	margin:0;" + 
"	padding:10px;" + 
"	width:100%;" + 
"	height:100%;" + 
"	color : black;" + 
"	background-color:#ffffff;" + 
"}" + 
"" + 
"#onlineMenu > ul > li > a:hover {" + 
"	background-color:#99cde1;" + 
"}" + 
"" + 
"@media print{" + 
"	nav {" + 
"		display:none;" + 
"	}" + 
"" + 
"	#wrapper {" + 
"		overflow: visible;" + 
"	}" + 
"	" + 
"	#previewer {" + 
"		border: 0;" + 
"	}" + 
"}" + 
"</style>" + 
"<style>" + 
"#previewer {" + 
"  font-family: Helvetica, arial, sans-serif;" + 
"  font-size: 14px;" + 
"  line-height: 1.6;" + 
"  padding-top: 10px;" + 
"  padding-bottom: 10px;" + 
"  background-color: white;" + 
"  padding: 45px; }" + 
"#previewer > *:first-child {" + 
"  margin-top: 0 !important; }" + 
"#previewer > *:last-child {" + 
"  margin-bottom: 0 !important; }" + 
"a {" + 
"  color: #4183C4; }" + 
"a.absent {" + 
"  color: #cc0000; }" + 
"a.anchor {" + 
"  display: block;" + 
"  padding-left: 30px;" + 
"  margin-left: -30px;" + 
"  cursor: pointer;" + 
"  position: absolute;" + 
"  top: 0;" + 
"  left: 0;" + 
"  bottom: 0; }" + 
"h1, h2, h3, h4, h5, h6 {" + 
"  margin: 20px 0 10px;" + 
"  padding: 0;" + 
"  font-weight: bold;" + 
"  -webkit-font-smoothing: antialiased;" + 
"  cursor: text;" + 
"  position: relative; }" + 
"h1:hover a.anchor, h2:hover a.anchor, h3:hover a.anchor, h4:hover a.anchor, h5:hover a.anchor, h6:hover a.anchor {" + 
"  background: url(\"css/para.png\") no-repeat 10px center;" + 
"  text-decoration: none; }" + 
"h1 tt, h1 code {" + 
"  font-size: inherit; }" + 
"h2 tt, h2 code {" + 
"  font-size: inherit; }" + 
"h3 tt, h3 code {" + 
"  font-size: inherit; }" + 
"h4 tt, h4 code {" + 
"  font-size: inherit; }" + 
"h5 tt, h5 code {" + 
"  font-size: inherit; }" + 
"h6 tt, h6 code {" + 
"  font-size: inherit; }" + 
"h1 {" + 
"  font-size: 28px;" + 
"  color: black; }" + 
"h2 {" + 
"  font-size: 24px;" + 
"  border-bottom: 1px solid #cccccc;" + 
"  color: black; }" + 
"h3 {" + 
"  font-size: 18px; }" + 
"h4 {" + 
"  font-size: 16px; }" + 
"h5 {" + 
"  font-size: 14px; }" + 
"h6 {" + 
"  color: #777777;" + 
"  font-size: 14px; }" + 
"p, blockquote, ul, ol, dl, li:first, table, pre {" + 
"  margin: 15px 0; }" + 
"hr {" + 
"  background-color: #e7e7e7;" + 
"  border: 0 none;" + 
"  height: 4px;" + 
"  padding: 0; }" + 
"#previewer > h2:first-child {" + 
"  margin-top: 0;" + 
"  padding-top: 0; }" + 
"#previewer > h1:first-child {" + 
"  margin-top: 0;" + 
"  padding-top: 0; }" + 
"  #previewer > h1:first-child + h2 {" + 
"    margin-top: 0;" + 
"    padding-top: 0; }" + 
"#previewer > h3:first-child, #previewer > h4:first-child, #previewer > h5:first-child, #previewer > h6:first-child {" + 
"  margin-top: 0;" + 
"  padding-top: 0; }" + 
"a:first-child h1, a:first-child h2, a:first-child h3, a:first-child h4, a:first-child h5, a:first-child h6 {" + 
"  margin-top: 0;" + 
"  padding-top: 0; }" + 
"h1 p, h2 p, h3 p, h4 p, h5 p, h6 p {" + 
"  margin-top: 0; }" + 
"li p.first {" + 
"  display: inline-block; }" + 
"ul, ol {" + 
"  padding-left: 30px; }" + 
"ul :first-child, ol :first-child {" + 
"  margin-top: 0; }" + 
"ul :last-child, ol :last-child {" + 
"  margin-bottom: 0; }" + 
"dl {" + 
"  padding: 0; }" + 
"  dl dt {" + 
"    font-size: 14px;" + 
"    font-weight: bold;" + 
"    font-style: italic;" + 
"    padding: 0;" + 
"    margin: 15px 0 5px; }" + 
"    dl dt:first-child {" + 
"      padding: 0; }" + 
"    dl dt > :first-child {" + 
"      margin-top: 0; }" + 
"    dl dt > :last-child {" + 
"      margin-bottom: 0; }" + 
"  dl dd {" + 
"    margin: 0 0 15px;" + 
"    padding: 0 15px; }" + 
"    dl dd > :first-child {" + 
"      margin-top: 0; }" + 
"    dl dd > :last-child {" + 
"      margin-bottom: 0; }" + 
"blockquote {" + 
"  border-left: 4px solid #dddddd;" + 
"  padding: 0 15px;" + 
"  color: #777777; }" + 
"  blockquote > :first-child {" + 
"    margin-top: 0; }" + 
"  blockquote > :last-child {" + 
"    margin-bottom: 0; }" + 
"table {" + 
"  border-collapse : collapse; " + 
"  padding: 0; }" + 
"  table tr {" + 
"    border-top: 1px solid #cccccc;" + 
"    background-color: white;" + 
"    margin: 0;" + 
"    padding: 0; }" + 
"    table tr:nth-child(2n) {" + 
"      background-color: #f8f8f8; }" + 
"    table tr th {" + 
"      font-weight: bold;" + 
"      border: 1px solid #cccccc;" + 
"      text-align: left;" + 
"      margin: 0;" + 
"      padding: 6px 13px; }" + 
"    table tr td {" + 
"      border: 1px solid #cccccc;" + 
"      text-align: left;" + 
"      margin: 0;" + 
"      padding: 6px 13px; }" + 
"    table tr th :first-child, table tr td :first-child {" + 
"      margin-top: 0; }" + 
"    table tr th :last-child, table tr td :last-child {" + 
"      margin-bottom: 0; }" + 
"img {" + 
"  max-width: 100%; }" + 
"span.frame {" + 
"  display: block;" + 
"  overflow: hidden; }" + 
"  span.frame > span {" + 
"    border: 1px solid #dddddd;" + 
"    display: block;" + 
"    float: left;" + 
"    overflow: hidden;" + 
"    margin: 13px 0 0;" + 
"    padding: 7px;" + 
"    width: auto; }" + 
"  span.frame span img {" + 
"    display: block;" + 
"    float: left; }" + 
"  span.frame span span {" + 
"    clear: both;" + 
"    color: #333333;" + 
"    display: block;" + 
"    padding: 5px 0 0; }" + 
"span.align-center {" + 
"  display: block;" + 
"  overflow: hidden;" + 
"  clear: both; }" + 
"  span.align-center > span {" + 
"    display: block;" + 
"    overflow: hidden;" + 
"    margin: 13px auto 0;" + 
"    text-align: center; }" + 
"  span.align-center span img {" + 
"    margin: 0 auto;" + 
"    text-align: center; }" + 
"span.align-right {" + 
"  display: block;" + 
"  overflow: hidden;" + 
"  clear: both; }" + 
"  span.align-right > span {" + 
"    display: block;" + 
"    overflow: hidden;" + 
"    margin: 13px 0 0;" + 
"    text-align: right; }" + 
"  span.align-right span img {" + 
"    margin: 0;" + 
"    text-align: right; }" + 
"span.float-left {" + 
"  display: block;" + 
"  margin-right: 13px;" + 
"  overflow: hidden;" + 
"  float: left; }" + 
"  span.float-left span {" + 
"    margin: 13px 0 0; }" + 
"span.float-right {" + 
"  display: block;" + 
"  margin-left: 13px;" + 
"  overflow: hidden;" + 
"  float: right; }" + 
"  span.float-right > span {" + 
"    display: block;" + 
"    overflow: hidden;" + 
"    margin: 13px auto 0;" + 
"    text-align: right; }" + 
"code, tt {" + 
"  margin: 0 2px;" + 
"  padding: 0 5px;" + 
"  white-space: nowrap;" + 
"  border: 1px solid #eaeaea;" + 
"  background-color: #f8f8f8;" + 
"  border-radius: 3px; }" + 
"pre code {" + 
"  margin: 0;" + 
"  padding: 0;" + 
"  white-space: pre-wrap;" + 
"  border: none;" + 
"  background: transparent; }" + 
".highlight pre {" + 
"  background-color: #f8f8f8;" + 
"  border: 1px solid #cccccc;" + 
"  font-size: 13px;" + 
"  line-height: 19px;" + 
"  overflow: auto;" + 
"  padding: 6px 10px;" + 
"  border-radius: 3px; }" + 
"pre {" + 
"  background-color: #f8f8f8;" + 
"  border: 1px solid #cccccc;" + 
"  font-size: 13px;" + 
"  line-height: 19px;" + 
"  overflow: auto;" + 
"  padding: 6px 10px;" + 
"  border-radius: 3px; }" + 
"  pre code, pre tt {" + 
"    background-color: transparent;" + 
"    border: none; }" + 
".sequence, .flow {" + 
"  overflow:auto;" + 
"}" + 
".info{" + 
"	color : #3a87ad;" + 
"	background-color: #d9edf7;" + 
"	border: 1px solid #bce8f1;" + 
"	font-size: 13px;" + 
"	line-height: 19px;" + 
"	padding: 6px 10px;" + 
"	border-radius: 0px;" + 
"	margin: 1em 0px 1em;" + 
"}" + 
"" + 
".warn{" + 
"	color : #c09853;" + 
"	background-color: #fcf8e3;" + 
"	border: 1px solid #fbeed5;" + 
"	font-size: 13px;" + 
"	line-height: 19px;" + 
"	padding: 6px 10px;" + 
"	border-radius: 0px;" + 
"	margin: 1em 0px 1em;" + 
"}" + 
"" + 
".alert{" + 
"	color : #b94a48;" + 
"	background-color: #f2dede;" + 
"	border: 1px solid #eed3d7;" + 
"	font-size: 13px;" + 
"	line-height: 19px;" + 
"	padding: 6px 10px;" + 
"	border-radius: 0px;" + 
"	margin: 1em 0px 1em;" + 
"}" + 
"" + 
"/*" + 
"" + 
"github.com style (c) Vasily Polovnyov <vast@whiteants.net>" + 
"" + 
"*/" + 
"" + 
".hljs {" + 
"  display: block;" + 
"  overflow-x: auto;" + 
"  padding: 0.5em;" + 
"  color: #333;" + 
"  background: #f8f8f8;" + 
"}" + 
"" + 
".hljs-comment," + 
".hljs-quote {" + 
"  color: #998;" + 
"  font-style: italic;" + 
"}" + 
"" + 
".hljs-keyword," + 
".hljs-selector-tag," + 
".hljs-subst {" + 
"  color: #333;" + 
"  font-weight: bold;" + 
"}" + 
"" + 
".hljs-number," + 
".hljs-literal," + 
".hljs-variable," + 
".hljs-template-variable," + 
".hljs-tag .hljs-attr {" + 
"  color: #008080;" + 
"}" + 
"" + 
".hljs-string," + 
".hljs-doctag {" + 
"  color: #d14;" + 
"}" + 
"" + 
".hljs-title," + 
".hljs-section," + 
".hljs-selector-id {" + 
"  color: #900;" + 
"  font-weight: bold;" + 
"}" + 
"" + 
".hljs-subst {" + 
"  font-weight: normal;" + 
"}" + 
"" + 
".hljs-type," + 
".hljs-class .hljs-title {" + 
"  color: #458;" + 
"  font-weight: bold;" + 
"}" + 
"" + 
".hljs-tag," + 
".hljs-name," + 
".hljs-attribute {" + 
"  color: #000080;" + 
"  font-weight: normal;" + 
"}" + 
"" + 
".hljs-regexp," + 
".hljs-link {" + 
"  color: #009926;" + 
"}" + 
"" + 
".hljs-symbol," + 
".hljs-bullet {" + 
"  color: #990073;" + 
"}" + 
"" + 
".hljs-built_in," + 
".hljs-builtin-name {" + 
"  color: #0086b3;" + 
"}" + 
"" + 
".hljs-meta {" + 
"  color: #999;" + 
"  font-weight: bold;" + 
"}" + 
"" + 
".hljs-deletion {" + 
"  background: #fdd;" + 
"}" + 
"" + 
".hljs-addition {" + 
"  background: #dfd;" + 
"}" + 
"" + 
".hljs-emphasis {" + 
"  font-style: italic;" + 
"}" + 
"" + 
".hljs-strong {" + 
"  font-weight: bold;" + 
"}" + 
"</style>" + 
"" + 
"<title>無題</title>" + 
"</head>" + 
"<body>" + 
"<nav>" + 
"	<div id=\"leftNav\">" + 
"		<button id=\"onlineMenuButton\">オンラインメニュー</button>" + 
"	</div>" + 
"	<div id=\"rightNav\">" + 
"		<span id=\"messageArea\"></span>" + 
"		<input type=\"checkbox\" id=\"autoSyncButton\" name=\"autoSyncButton\" checked=\"checked\"><label for=\"autoSyncButton\">自動プレビュー</label>" + 
"		<button id=\"syncButton\">プレビューだおｗｗｗ(F5)</button><button id=\"headingSyncButton\">見出し同期(F2)</button><button id=\"toggleButton\">編集/閲覧(ESC)</button><button id=\"saveButton\">保存(Ctrl+S)</button>" + 
"	</div>" + 
"</nav>" + 
"<div id=\"attach\">" + 
"	<form id=\"attachForm\"><input type=\"file\" id=\"attachButton\" multiple multiple></form>" + 
"	<div id=\"filer\">" + 
"		<ul id=\"fileList\">" + 
"		</ul>" + 
"	</div>" + 
"	<button id=\"attachToggleButton\">添付ファイルを表示(Alt+↓)</button><button id=\"previewToggleButton\">プレビューを隠す(Alt+→)</button>" + 
"</div>" + 
"<div id=\"wrapper\">" + 
"	<noscript>このファイルはJavaScriptを有効にしないと閲覧できません。</noscript>" + 
"	<textarea id=\"editor\"></textarea>" + 
"	<div id=\"previewer\" tabIndex=\"-1\"></div>" + 
"</div>" + 
"<div id=\"onlineMenu\">" + 
"	<ul>" + 
"		<li><a href=\"http://tatesuke.github.io/KanTanMarkdown/ktm.html\" target=\"_blank\">新規作成</a></li>" + 
"		<li><a href=\"http://tatesuke.github.io/KanTanMarkdown/syntax.html\" id=\"helpButton\" target=\"_blank\">Markdown記法ヘルプ(F1)</a></li>" + 
"		<li><a href=\"http://tatesuke.github.io/KanTanMarkdown/\" target=\"_blank\">かんたんMarkdown <span class=\"version\"></span></a></li>" + 
"	</ul>" + 
"</div>" + 
"<script>" + 
"/**" + 
" * marked - a markdown parser" + 
" * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)" + 
" * https://github.com/chjj/marked" + 
" */" + 
"(function(){var block={newline:/^\\n+/,code:/^( {4}[^\\n]+\\n*)+/,fences:noop,hr:/^( *[-*_]){3,} *(?:\\n+|$)/,heading:/^ *(#{1,6}) *([^\\n]+?) *#* *(?:\\n+|$)/,nptable:noop,lheading:/^([^\\n]+)\\n *(=|-){2,} *(?:\\n+|$)/,blockquote:/^( *>[^\\n]+(\\n(?!def)[^\\n]+)*\\n*)+/,list:/^( *)(bull) [\\s\\S]+?(?:hr|def|\\n{2,}(?! )(?!\\1bull )\\n*|\\s*$)/,html:/^ *(?:comment *(?:\\n|\\s*$)|closed *(?:\\n{2,}|\\s*$)|closing *(?:\\n{2,}|\\s*$))/,def:/^ *\\[([^\\]]+)\\]: *<?([^\\s>]+)>?(?: +[\"(]([^\\n]+)[\")])? *(?:\\n+|$)/,table:noop,paragraph:/^((?:[^\\n]+\\n?(?!hr|heading|lheading|blockquote|tag|def))+)\\n*/,text:/^[^\\n]+/};block.bullet=/(?:[*+-]|\\d+\\.)/;block.item=/^( *)(bull) [^\\n]*(?:\\n(?!\\1bull )[^\\n]*)*/;block.item=replace(block.item,\"gm\")(/bull/g,block.bullet)();block.list=replace(block.list)(/bull/g,block.bullet)(\"hr\",\"\\\\n+(?=\\\\1?(?:[-*_] *){3,}(?:\\\\n+|$))\")(\"def\",\"\\\\n+(?=\"+block.def.source+\")\")();block.blockquote=replace(block.blockquote)(\"def\",block.def)();block._tag=\"(?!(?:\"+\"a|em|strong|small|s|cite|q|dfn|abbr|data|time|code\"+\"|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo\"+\"|span|br|wbr|ins|del|img)\\\\b)\\\\w+(?!:/|[^\\\\w\\\\s@]*@)\\\\b\";block.html=replace(block.html)(\"comment\",/<!--[\\s\\S]*?-->/)(\"closed\",/<(tag)[\\s\\S]+?<\\/\\1>/)(\"closing\",/<tag(?:\"[^\"]*\"|'[^']*'|[^'\">])*?>/)(/tag/g,block._tag)();block.paragraph=replace(block.paragraph)(\"hr\",block.hr)(\"heading\",block.heading)(\"lheading\",block.lheading)(\"blockquote\",block.blockquote)(\"tag\",\"<\"+block._tag)(\"def\",block.def)();block.normal=merge({},block);block.gfm=merge({},block.normal,{fences:/^ *(`{3,}|~{3,})[ \\.]*(\\S+)? *\\n([\\s\\S]*?)\\s*\\1 *(?:\\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\\n]+?) *#* *(?:\\n+|$)/});block.gfm.paragraph=replace(block.paragraph)(\"(?!\",\"(?!\"+block.gfm.fences.source.replace(\"\\\\1\",\"\\\\2\")+\"|\"+block.list.source.replace(\"\\\\1\",\"\\\\3\")+\"|\")();block.tables=merge({},block.gfm,{nptable:/^ *(\\S.*\\|.*)\\n *([-:]+ *\\|[-| :]*)\\n((?:.*\\|.*(?:\\n|$))*)\\n*/,table:/^ *\\|(.+)\\n *\\|( *[-:]+[-| :]*)\\n((?: *\\|.*(?:\\n|$))*)\\n*/});function Lexer(options){this.tokens=[];this.tokens.links={};this.options=options||marked.defaults;this.rules=block.normal;if(this.options.gfm){if(this.options.tables){this.rules=block.tables}else{this.rules=block.gfm}}}Lexer.rules=block;Lexer.lex=function(src,options){var lexer=new Lexer(options);return lexer.lex(src)};Lexer.prototype.lex=function(src){src=src.replace(/\\r\\n|\\r/g,\"\\n\").replace(/\\t/g,\"    \").replace(/\\u00a0/g,\" \").replace(/\\u2424/g,\"\\n\");return this.token(src,true)};Lexer.prototype.token=function(src,top,bq){var src=src.replace(/^ +$/gm,\"\"),next,loose,cap,bull,b,item,space,i,l;while(src){if(cap=this.rules.newline.exec(src)){src=src.substring(cap[0].length);if(cap[0].length>1){this.tokens.push({type:\"space\"})}}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);cap=cap[0].replace(/^ {4}/gm,\"\");this.tokens.push({type:\"code\",text:!this.options.pedantic?cap.replace(/\\n+$/,\"\"):cap});continue}if(cap=this.rules.fences.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:\"code\",lang:cap[2],text:cap[3]||\"\"});continue}if(cap=this.rules.heading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:\"heading\",depth:cap[1].length,text:cap[2]});continue}if(top&&(cap=this.rules.nptable.exec(src))){src=src.substring(cap[0].length);item={type:\"table\",header:cap[1].replace(/^ *| *\\| *$/g,\"\").split(/ *\\| */),align:cap[2].replace(/^ *|\\| *$/g,\"\").split(/ *\\| */),cells:cap[3].replace(/\\n$/,\"\").split(\"\\n\")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]=\"right\"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]=\"center\"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]=\"left\"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].split(/ *\\| */)}this.tokens.push(item);continue}if(cap=this.rules.lheading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:\"heading\",depth:cap[2]===\"=\"?1:2,text:cap[1]});continue}if(cap=this.rules.hr.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:\"hr\"});continue}if(cap=this.rules.blockquote.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:\"blockquote_start\"});cap=cap[0].replace(/^ *> ?/gm,\"\");this.token(cap,top,true);this.tokens.push({type:\"blockquote_end\"});continue}if(cap=this.rules.list.exec(src)){src=src.substring(cap[0].length);bull=cap[2];this.tokens.push({type:\"list_start\",ordered:bull.length>1});cap=cap[0].match(this.rules.item);next=false;l=cap.length;i=0;for(;i<l;i++){item=cap[i];space=item.length;item=item.replace(/^ *([*+-]|\\d+\\.) +/,\"\");if(~item.indexOf(\"\\n \")){space-=item.length;item=!this.options.pedantic?item.replace(new RegExp(\"^ {1,\"+space+\"}\",\"gm\"),\"\"):item.replace(/^ {1,4}/gm,\"\")}if(this.options.smartLists&&i!==l-1){b=block.bullet.exec(cap[i+1])[0];if(bull!==b&&!(bull.length>1&&b.length>1)){src=cap.slice(i+1).join(\"\\n\")+src;i=l-1}}loose=next||/\\n\\n(?!\\s*$)/.test(item);if(i!==l-1){next=item.charAt(item.length-1)===\"\\n\";if(!loose)loose=next}this.tokens.push({type:loose?\"loose_item_start\":\"list_item_start\"});this.token(item,false,bq);this.tokens.push({type:\"list_item_end\"})}this.tokens.push({type:\"list_end\"});continue}if(cap=this.rules.html.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:this.options.sanitize?\"paragraph\":\"html\",pre:!this.options.sanitizer&&(cap[1]===\"pre\"||cap[1]===\"script\"||cap[1]===\"style\"),text:cap[0]});continue}if(!bq&&top&&(cap=this.rules.def.exec(src))){src=src.substring(cap[0].length);this.tokens.links[cap[1].toLowerCase()]={href:cap[2],title:cap[3]};continue}if(top&&(cap=this.rules.table.exec(src))){src=src.substring(cap[0].length);item={type:\"table\",header:cap[1].replace(/^ *| *\\| *$/g,\"\").split(/ *\\| */),align:cap[2].replace(/^ *|\\| *$/g,\"\").split(/ *\\| */),cells:cap[3].replace(/(?: *\\| *)?\\n$/,\"\").split(\"\\n\")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]=\"right\"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]=\"center\"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]=\"left\"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].replace(/^ *\\| *| *\\| *$/g,\"\").split(/ *\\| */)}this.tokens.push(item);continue}if(top&&(cap=this.rules.paragraph.exec(src))){src=src.substring(cap[0].length);this.tokens.push({type:\"paragraph\",text:cap[1].charAt(cap[1].length-1)===\"\\n\"?cap[1].slice(0,-1):cap[1]});continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:\"text\",text:cap[0]});continue}if(src){throw new Error(\"Infinite loop on byte: \"+src.charCodeAt(0))}}return this.tokens};var inline={escape:/^\\\\([\\\\`*{}\\[\\]()#+\\-.!_>])/,autolink:/^<([^ >]+(@|:\\/)[^ >]+)>/,url:noop,tag:/^<!--[\\s\\S]*?-->|^<\\/?\\w+(?:\"[^\"]*\"|'[^']*'|[^'\">])*?>/,link:/^!?\\[(inside)\\]\\(href\\)/,reflink:/^!?\\[(inside)\\]\\s*\\[([^\\]]*)\\]/,nolink:/^!?\\[((?:\\[[^\\]]*\\]|[^\\[\\]])*)\\]/,strong:/^__([\\s\\S]+?)__(?!_)|^\\*\\*([\\s\\S]+?)\\*\\*(?!\\*)/,em:/^\\b_((?:[^_]|__)+?)_\\b|^\\*((?:\\*\\*|[\\s\\S])+?)\\*(?!\\*)/,code:/^(`+)\\s*([\\s\\S]*?[^`])\\s*\\1(?!`)/,br:/^ {2,}\\n(?!\\s*$)/,del:noop,text:/^[\\s\\S]+?(?=[\\\\<!\\[_*`]| {2,}\\n|$)/};inline._inside=/(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*/;inline._href=/\\s*<?([\\s\\S]*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*/;inline.link=replace(inline.link)(\"inside\",inline._inside)(\"href\",inline._href)();inline.reflink=replace(inline.reflink)(\"inside\",inline._inside)();inline.normal=merge({},inline);inline.pedantic=merge({},inline.normal,{strong:/^__(?=\\S)([\\s\\S]*?\\S)__(?!_)|^\\*\\*(?=\\S)([\\s\\S]*?\\S)\\*\\*(?!\\*)/,em:/^_(?=\\S)([\\s\\S]*?\\S)_(?!_)|^\\*(?=\\S)([\\s\\S]*?\\S)\\*(?!\\*)/});inline.gfm=merge({},inline.normal,{escape:replace(inline.escape)(\"])\",\"~|])\")(),url:/^(https?:\\/\\/[^\\s<]+[^<.,:;\"')\\]\\s])/,del:/^~~(?=\\S)([\\s\\S]*?\\S)~~/,text:replace(inline.text)(\"]|\",\"~]|\")(\"|\",\"|https?://|\")()});inline.breaks=merge({},inline.gfm,{br:replace(inline.br)(\"{2,}\",\"*\")(),text:replace(inline.gfm.text)(\"{2,}\",\"*\")()});function InlineLexer(links,options){this.options=options||marked.defaults;this.links=links;this.rules=inline.normal;this.renderer=this.options.renderer||new Renderer;this.renderer.options=this.options;if(!this.links){throw new Error(\"Tokens array requires a `links` property.\")}if(this.options.gfm){if(this.options.breaks){this.rules=inline.breaks}else{this.rules=inline.gfm}}else if(this.options.pedantic){this.rules=inline.pedantic}}InlineLexer.rules=inline;InlineLexer.output=function(src,links,options){var inline=new InlineLexer(links,options);return inline.output(src)};InlineLexer.prototype.output=function(src){var out=\"\",link,text,href,cap;while(src){if(cap=this.rules.escape.exec(src)){src=src.substring(cap[0].length);out+=cap[1];continue}if(cap=this.rules.autolink.exec(src)){src=src.substring(cap[0].length);if(cap[2]===\"@\"){text=cap[1].charAt(6)===\":\"?this.mangle(cap[1].substring(7)):this.mangle(cap[1]);href=this.mangle(\"mailto:\")+text}else{text=escape(cap[1]);href=text}out+=this.renderer.link(href,null,text);continue}if(!this.inLink&&(cap=this.rules.url.exec(src))){src=src.substring(cap[0].length);text=escape(cap[1]);href=text;out+=this.renderer.link(href,null,text);continue}if(cap=this.rules.tag.exec(src)){if(!this.inLink&&/^<a /i.test(cap[0])){this.inLink=true}else if(this.inLink&&/^<\\/a>/i.test(cap[0])){this.inLink=false}src=src.substring(cap[0].length);out+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(cap[0]):escape(cap[0]):cap[0];continue}if(cap=this.rules.link.exec(src)){src=src.substring(cap[0].length);this.inLink=true;out+=this.outputLink(cap,{href:cap[2],title:cap[3]});this.inLink=false;continue}if((cap=this.rules.reflink.exec(src))||(cap=this.rules.nolink.exec(src))){src=src.substring(cap[0].length);link=(cap[2]||cap[1]).replace(/\\s+/g,\" \");link=this.links[link.toLowerCase()];if(!link||!link.href){out+=cap[0].charAt(0);src=cap[0].substring(1)+src;continue}this.inLink=true;out+=this.outputLink(cap,link);this.inLink=false;continue}if(cap=this.rules.strong.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.strong(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.em.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.em(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.codespan(escape(cap[2],true));continue}if(cap=this.rules.br.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.br();continue}if(cap=this.rules.del.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.del(this.output(cap[1]));continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.text(escape(this.smartypants(cap[0])));continue}if(src){throw new Error(\"Infinite loop on byte: \"+src.charCodeAt(0))}}return out};InlineLexer.prototype.outputLink=function(cap,link){var href=escape(link.href),title=link.title?escape(link.title):null;return cap[0].charAt(0)!==\"!\"?this.renderer.link(href,title,this.output(cap[1])):this.renderer.image(href,title,escape(cap[1]))};InlineLexer.prototype.smartypants=function(text){if(!this.options.smartypants)return text;return text.replace(/---/g,\"—\").replace(/--/g,\"–\").replace(/(^|[-\\u2014/(\\[{\"\\s])'/g,\"$1‘\").replace(/'/g,\"’\").replace(/(^|[-\\u2014/(\\[{\\u2018\\s])\"/g,\"$1“\").replace(/\"/g,\"”\").replace(/\\.{3}/g,\"…\")};InlineLexer.prototype.mangle=function(text){if(!this.options.mangle)return text;var out=\"\",l=text.length,i=0,ch;for(;i<l;i++){ch=text.charCodeAt(i);if(Math.random()>.5){ch=\"x\"+ch.toString(16)}out+=\"&#\"+ch+\";\"}return out};function Renderer(options){this.options=options||{}}Renderer.prototype.code=function(code,lang,escaped){if(this.options.highlight){var out=this.options.highlight(code,lang);if(out!=null&&out!==code){escaped=true;code=out}}if(!lang){return\"<pre><code>\"+(escaped?code:escape(code,true))+\"\\n</code></pre>\"}return'<pre><code class=\"'+this.options.langPrefix+escape(lang,true)+'\">'+(escaped?code:escape(code,true))+\"\\n</code></pre>\\n\"};Renderer.prototype.blockquote=function(quote){return\"<blockquote>\\n\"+quote+\"</blockquote>\\n\"};Renderer.prototype.html=function(html){return html};Renderer.prototype.heading=function(text,level,raw){return\"<h\"+level+' id=\"'+this.options.headerPrefix+raw.toLowerCase().replace(/[^\\w]+/g,\"-\")+'\">'+text+\"</h\"+level+\">\\n\"};Renderer.prototype.hr=function(){return this.options.xhtml?\"<hr/>\\n\":\"<hr>\\n\"};Renderer.prototype.list=function(body,ordered){var type=ordered?\"ol\":\"ul\";return\"<\"+type+\">\\n\"+body+\"</\"+type+\">\\n\"};Renderer.prototype.listitem=function(text){return\"<li>\"+text+\"</li>\\n\"};Renderer.prototype.paragraph=function(text){return\"<p>\"+text+\"</p>\\n\"};Renderer.prototype.table=function(header,body){return\"<table>\\n\"+\"<thead>\\n\"+header+\"</thead>\\n\"+\"<tbody>\\n\"+body+\"</tbody>\\n\"+\"</table>\\n\"};Renderer.prototype.tablerow=function(content){return\"<tr>\\n\"+content+\"</tr>\\n\"};Renderer.prototype.tablecell=function(content,flags){var type=flags.header?\"th\":\"td\";var tag=flags.align?\"<\"+type+' style=\"text-align:'+flags.align+'\">':\"<\"+type+\">\";return tag+content+\"</\"+type+\">\\n\"};Renderer.prototype.strong=function(text){return\"<strong>\"+text+\"</strong>\"};Renderer.prototype.em=function(text){return\"<em>\"+text+\"</em>\"};Renderer.prototype.codespan=function(text){return\"<code>\"+text+\"</code>\"};Renderer.prototype.br=function(){return this.options.xhtml?\"<br/>\":\"<br>\"};Renderer.prototype.del=function(text){return\"<del>\"+text+\"</del>\"};Renderer.prototype.link=function(href,title,text){if(this.options.sanitize){try{var prot=decodeURIComponent(unescape(href)).replace(/[^\\w:]/g,\"\").toLowerCase()}catch(e){return\"\"}if(prot.indexOf(\"javascript:\")===0||prot.indexOf(\"vbscript:\")===0){return\"\"}}var out='<a href=\"'+href+'\"';if(title){out+=' title=\"'+title+'\"'}out+=\">\"+text+\"</a>\";return out};Renderer.prototype.image=function(href,title,text){var out='<img src=\"'+href+'\" alt=\"'+text+'\"';if(title){out+=' title=\"'+title+'\"'}out+=this.options.xhtml?\"/>\":\">\";return out};Renderer.prototype.text=function(text){return text};function Parser(options){this.tokens=[];this.token=null;this.options=options||marked.defaults;this.options.renderer=this.options.renderer||new Renderer;this.renderer=this.options.renderer;this.renderer.options=this.options}Parser.parse=function(src,options,renderer){var parser=new Parser(options,renderer);return parser.parse(src)};Parser.prototype.parse=function(src){this.inline=new InlineLexer(src.links,this.options,this.renderer);this.tokens=src.reverse();var out=\"\";while(this.next()){out+=this.tok()}return out};Parser.prototype.next=function(){return this.token=this.tokens.pop()};Parser.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0};Parser.prototype.parseText=function(){var body=this.token.text;while(this.peek().type===\"text\"){body+=\"\\n\"+this.next().text}return this.inline.output(body)};Parser.prototype.tok=function(){switch(this.token.type){case\"space\":{return\"\"}case\"hr\":{return this.renderer.hr()}case\"heading\":{return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text)}case\"code\":{return this.renderer.code(this.token.text,this.token.lang,this.token.escaped)}case\"table\":{var header=\"\",body=\"\",i,row,cell,flags,j;cell=\"\";for(i=0;i<this.token.header.length;i++){flags={header:true,align:this.token.align[i]};cell+=this.renderer.tablecell(this.inline.output(this.token.header[i]),{header:true,align:this.token.align[i]})}header+=this.renderer.tablerow(cell);for(i=0;i<this.token.cells.length;i++){row=this.token.cells[i];cell=\"\";for(j=0;j<row.length;j++){cell+=this.renderer.tablecell(this.inline.output(row[j]),{header:false,align:this.token.align[j]})}body+=this.renderer.tablerow(cell)}return this.renderer.table(header,body)}case\"blockquote_start\":{var body=\"\";while(this.next().type!==\"blockquote_end\"){body+=this.tok()}return this.renderer.blockquote(body)}case\"list_start\":{var body=\"\",ordered=this.token.ordered;while(this.next().type!==\"list_end\"){body+=this.tok()}return this.renderer.list(body,ordered)}case\"list_item_start\":{var body=\"\";while(this.next().type!==\"list_item_end\"){body+=this.token.type===\"text\"?this.parseText():this.tok()}return this.renderer.listitem(body)}case\"loose_item_start\":{var body=\"\";while(this.next().type!==\"list_item_end\"){body+=this.tok()}return this.renderer.listitem(body)}case\"html\":{var html=!this.token.pre&&!this.options.pedantic?this.inline.output(this.token.text):this.token.text;return this.renderer.html(html)}case\"paragraph\":{return this.renderer.paragraph(this.inline.output(this.token.text))}case\"text\":{return this.renderer.paragraph(this.parseText())}}};function escape(html,encode){return html.replace(!encode?/&(?!#?\\w+;)/g:/&/g,\"&amp;\").replace(/</g,\"&lt;\").replace(/>/g,\"&gt;\").replace(/\"/g,\"&quot;\").replace(/'/g,\"&#39;\")}function unescape(html){return html.replace(/&([#\\w]+);/g,function(_,n){n=n.toLowerCase();if(n===\"colon\")return\":\";if(n.charAt(0)===\"#\"){return n.charAt(1)===\"x\"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1))}return\"\"})}function replace(regex,opt){regex=regex.source;opt=opt||\"\";return function self(name,val){if(!name)return new RegExp(regex,opt);val=val.source||val;val=val.replace(/(^|[^\\[])\\^/g,\"$1\");regex=regex.replace(name,val);return self}}function noop(){}noop.exec=noop;function merge(obj){var i=1,target,key;for(;i<arguments.length;i++){target=arguments[i];for(key in target){if(Object.prototype.hasOwnProperty.call(target,key)){obj[key]=target[key]}}}return obj}function marked(src,opt,callback){if(callback||typeof opt===\"function\"){if(!callback){callback=opt;opt=null}opt=merge({},marked.defaults,opt||{});var highlight=opt.highlight,tokens,pending,i=0;try{tokens=Lexer.lex(src,opt)}catch(e){return callback(e)}pending=tokens.length;var done=function(err){if(err){opt.highlight=highlight;return callback(err)}var out;try{out=Parser.parse(tokens,opt)}catch(e){err=e}opt.highlight=highlight;return err?callback(err):callback(null,out)};if(!highlight||highlight.length<3){return done()}delete opt.highlight;if(!pending)return done();for(;i<tokens.length;i++){(function(token){if(token.type!==\"code\"){return--pending||done()}return highlight(token.text,token.lang,function(err,code){if(err)return done(err);if(code==null||code===token.text){return--pending||done()}token.text=code;token.escaped=true;--pending||done()})})(tokens[i])}return}try{if(opt)opt=merge({},marked.defaults,opt);return Parser.parse(Lexer.lex(src,opt),opt)}catch(e){e.message+=\"\\nPlease report this to https://github.com/chjj/marked.\";if((opt||marked.defaults).silent){return\"<p>An error occured:</p><pre>\"+escape(e.message+\"\",true)+\"</pre>\"}throw e}}marked.options=marked.setOptions=function(opt){merge(marked.defaults,opt);return marked};marked.defaults={gfm:true,tables:true,breaks:false,pedantic:false,sanitize:false,sanitizer:null,mangle:true,smartLists:false,silent:false,highlight:null,langPrefix:\"lang-\",smartypants:false,headerPrefix:\"\",renderer:new Renderer,xhtml:false};marked.Parser=Parser;marked.parser=Parser.parse;marked.Renderer=Renderer;marked.Lexer=Lexer;marked.lexer=Lexer.lex;marked.InlineLexer=InlineLexer;marked.inlineLexer=InlineLexer.output;marked.parse=marked;if(typeof module!==\"undefined\"&&typeof exports===\"object\"){module.exports=marked}else if(typeof define===\"function\"&&define.amd){define(function(){return marked})}else{this.marked=marked}}).call(function(){return this||(typeof window!==\"undefined\"?window:global)}());" + 
"</script>" + 
"<script>" + 
"/*! highlight.js v9.0.0 | BSD3 License | git.io/hljslicense */" + 
"!function(e){\"undefined\"!=typeof exports?e(exports):(self.hljs=e({}),\"function\"==typeof define&&define.amd&&define(\"hljs\",[],function(){return self.hljs}))}(function(e){function t(e){return e.replace(/&/gm,\"&amp;\").replace(/</gm,\"&lt;\").replace(/>/gm,\"&gt;\")}function r(e){return e.nodeName.toLowerCase()}function a(e,t){var r=e&&e.exec(t);return r&&0==r.index}function n(e){return/^(no-?highlight|plain|text)$/i.test(e)}function i(e){var t,r,a,i=e.className+\" \";if(i+=e.parentNode?e.parentNode.className:\"\",r=/\\blang(?:uage)?-([\\w-]+)\\b/i.exec(i))return y(r[1])?r[1]:\"no-highlight\";for(i=i.split(/\\s+/),t=0,a=i.length;a>t;t++)if(y(i[t])||n(i[t]))return i[t]}function s(e,t){var r,a={};for(r in e)a[r]=e[r];if(t)for(r in t)a[r]=t[r];return a}function c(e){var t=[];return function a(e,n){for(var i=e.firstChild;i;i=i.nextSibling)3==i.nodeType?n+=i.nodeValue.length:1==i.nodeType&&(t.push({event:\"start\",offset:n,node:i}),n=a(i,n),r(i).match(/br|hr|img|input/)||t.push({event:\"stop\",offset:n,node:i}));return n}(e,0),t}function o(e,a,n){function i(){return e.length&&a.length?e[0].offset!=a[0].offset?e[0].offset<a[0].offset?e:a:\"start\"==a[0].event?e:a:e.length?e:a}function s(e){function a(e){return\" \"+e.nodeName+'=\"'+t(e.value)+'\"'}u+=\"<\"+r(e)+Array.prototype.map.call(e.attributes,a).join(\"\")+\">\"}function c(e){u+=\"</\"+r(e)+\">\"}function o(e){(\"start\"==e.event?s:c)(e.node)}for(var l=0,u=\"\",d=[];e.length||a.length;){var b=i();if(u+=t(n.substr(l,b[0].offset-l)),l=b[0].offset,b==e){d.reverse().forEach(c);do o(b.splice(0,1)[0]),b=i();while(b==e&&b.length&&b[0].offset==l);d.reverse().forEach(s)}else\"start\"==b[0].event?d.push(b[0].node):d.pop(),o(b.splice(0,1)[0])}return u+t(n.substr(l))}function l(e){function t(e){return e&&e.source||e}function r(r,a){return new RegExp(t(r),\"m\"+(e.cI?\"i\":\"\")+(a?\"g\":\"\"))}function a(n,i){if(!n.compiled){if(n.compiled=!0,n.k=n.k||n.bK,n.k){var c={},o=function(t,r){e.cI&&(r=r.toLowerCase()),r.split(\" \").forEach(function(e){var r=e.split(\"|\");c[r[0]]=[t,r[1]?Number(r[1]):1]})};\"string\"==typeof n.k?o(\"keyword\",n.k):Object.keys(n.k).forEach(function(e){o(e,n.k[e])}),n.k=c}n.lR=r(n.l||/\\b\\w+\\b/,!0),i&&(n.bK&&(n.b=\"\\\\b(\"+n.bK.split(\" \").join(\"|\")+\")\\\\b\"),n.b||(n.b=/\\B|\\b/),n.bR=r(n.b),n.e||n.eW||(n.e=/\\B|\\b/),n.e&&(n.eR=r(n.e)),n.tE=t(n.e)||\"\",n.eW&&i.tE&&(n.tE+=(n.e?\"|\":\"\")+i.tE)),n.i&&(n.iR=r(n.i)),void 0===n.r&&(n.r=1),n.c||(n.c=[]);var l=[];n.c.forEach(function(e){e.v?e.v.forEach(function(t){l.push(s(e,t))}):l.push(\"self\"==e?n:e)}),n.c=l,n.c.forEach(function(e){a(e,n)}),n.starts&&a(n.starts,i);var u=n.c.map(function(e){return e.bK?\"\\\\.?(\"+e.b+\")\\\\.?\":e.b}).concat([n.tE,n.i]).map(t).filter(Boolean);n.t=u.length?r(u.join(\"|\"),!0):{exec:function(){return null}}}}a(e)}function u(e,r,n,i){function s(e,t){for(var r=0;r<t.c.length;r++)if(a(t.c[r].bR,e))return t.c[r]}function c(e,t){if(a(e.eR,t)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?c(e.parent,t):void 0}function o(e,t){return!n&&a(t.iR,e)}function b(e,t){var r=v.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(r)&&e.k[r]}function p(e,t,r,a){var n=a?\"\":w.classPrefix,i='<span class=\"'+n,s=r?\"\":\"</span>\";return i+=e+'\">',i+t+s}function m(){if(!x.k)return t(E);var e=\"\",r=0;x.lR.lastIndex=0;for(var a=x.lR.exec(E);a;){e+=t(E.substr(r,a.index-r));var n=b(x,a);n?(B+=n[1],e+=p(n[0],t(a[0]))):e+=t(a[0]),r=x.lR.lastIndex,a=x.lR.exec(E)}return e+t(E.substr(r))}function f(){var e=\"string\"==typeof x.sL;if(e&&!N[x.sL])return t(E);var r=e?u(x.sL,E,!0,C[x.sL]):d(E,x.sL.length?x.sL:void 0);return x.r>0&&(B+=r.r),e&&(C[x.sL]=r.top),p(r.language,r.value,!1,!0)}function g(){return void 0!==x.sL?f():m()}function h(e,r){var a=e.cN?p(e.cN,\"\",!0):\"\";e.rB?(M+=a,E=\"\"):e.eB?(M+=t(r)+a,E=\"\"):(M+=a,E=r),x=Object.create(e,{parent:{value:x}})}function _(e,r){if(E+=e,void 0===r)return M+=g(),0;var a=s(r,x);if(a)return M+=g(),h(a,r),a.rB?0:r.length;var n=c(x,r);if(n){var i=x;i.rE||i.eE||(E+=r),M+=g();do x.cN&&(M+=\"</span>\"),B+=x.r,x=x.parent;while(x!=n.parent);return i.eE&&(M+=t(r)),E=\"\",n.starts&&h(n.starts,\"\"),i.rE?0:r.length}if(o(r,x))throw new Error('Illegal lexeme \"'+r+'\" for mode \"'+(x.cN||\"<unnamed>\")+'\"');return E+=r,r.length||1}var v=y(e);if(!v)throw new Error('Unknown language: \"'+e+'\"');l(v);var k,x=i||v,C={},M=\"\";for(k=x;k!=v;k=k.parent)k.cN&&(M=p(k.cN,\"\",!0)+M);var E=\"\",B=0;try{for(var z,$,L=0;;){if(x.t.lastIndex=L,z=x.t.exec(r),!z)break;$=_(r.substr(L,z.index-L),z[0]),L=z.index+$}for(_(r.substr(L)),k=x;k.parent;k=k.parent)k.cN&&(M+=\"</span>\");return{r:B,value:M,language:e,top:x}}catch(q){if(-1!=q.message.indexOf(\"Illegal\"))return{r:0,value:t(r)};throw q}}function d(e,r){r=r||w.languages||Object.keys(N);var a={r:0,value:t(e)},n=a;return r.forEach(function(t){if(y(t)){var r=u(t,e,!1);r.language=t,r.r>n.r&&(n=r),r.r>a.r&&(n=a,a=r)}}),n.language&&(a.second_best=n),a}function b(e){return w.tabReplace&&(e=e.replace(/^((<[^>]+>|\\t)+)/gm,function(e,t){return t.replace(/\\t/g,w.tabReplace)})),w.useBR&&(e=e.replace(/\\n/g,\"<br>\")),e}function p(e,t,r){var a=t?k[t]:r,n=[e.trim()];return e.match(/\\bhljs\\b/)||n.push(\"hljs\"),-1===e.indexOf(a)&&n.push(a),n.join(\" \").trim()}function m(e){var t=i(e);if(!n(t)){var r;w.useBR?(r=document.createElementNS(\"http://www.w3.org/1999/xhtml\",\"div\"),r.innerHTML=e.innerHTML.replace(/\\n/g,\"\").replace(/<br[ \\/]*>/g,\"\\n\")):r=e;var a=r.textContent,s=t?u(t,a,!0):d(a),l=c(r);if(l.length){var m=document.createElementNS(\"http://www.w3.org/1999/xhtml\",\"div\");m.innerHTML=s.value,s.value=o(l,c(m),a)}s.value=b(s.value),e.innerHTML=s.value,e.className=p(e.className,t,s.language),e.result={language:s.language,re:s.r},s.second_best&&(e.second_best={language:s.second_best.language,re:s.second_best.r})}}function f(e){w=s(w,e)}function g(){if(!g.called){g.called=!0;var e=document.querySelectorAll(\"pre code\");Array.prototype.forEach.call(e,m)}}function h(){addEventListener(\"DOMContentLoaded\",g,!1),addEventListener(\"load\",g,!1)}function _(t,r){var a=N[t]=r(e);a.aliases&&a.aliases.forEach(function(e){k[e]=t})}function v(){return Object.keys(N)}function y(e){return e=(e||\"\").toLowerCase(),N[e]||N[k[e]]}var w={classPrefix:\"hljs-\",tabReplace:null,useBR:!1,languages:void 0},N={},k={};return e.highlight=u,e.highlightAuto=d,e.fixMarkup=b,e.highlightBlock=m,e.configure=f,e.initHighlighting=g,e.initHighlightingOnLoad=h,e.registerLanguage=_,e.listLanguages=v,e.getLanguage=y,e.inherit=s,e.IR=\"[a-zA-Z]\\\\w*\",e.UIR=\"[a-zA-Z_]\\\\w*\",e.NR=\"\\\\b\\\\d+(\\\\.\\\\d+)?\",e.CNR=\"(-?)(\\\\b0[xX][a-fA-F0-9]+|(\\\\b\\\\d+(\\\\.\\\\d*)?|\\\\.\\\\d+)([eE][-+]?\\\\d+)?)\",e.BNR=\"\\\\b(0b[01]+)\",e.RSR=\"!|!=|!==|%|%=|&|&&|&=|\\\\*|\\\\*=|\\\\+|\\\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\\\?|\\\\[|\\\\{|\\\\(|\\\\^|\\\\^=|\\\\||\\\\|=|\\\\|\\\\||~\",e.BE={b:\"\\\\\\\\[\\\\s\\\\S]\",r:0},e.ASM={cN:\"string\",b:\"'\",e:\"'\",i:\"\\\\n\",c:[e.BE]},e.QSM={cN:\"string\",b:'\"',e:'\"',i:\"\\\\n\",c:[e.BE]},e.PWM={b:/\\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\\b/},e.C=function(t,r,a){var n=e.inherit({cN:\"comment\",b:t,e:r,c:[]},a||{});return n.c.push(e.PWM),n.c.push({cN:\"doctag\",b:\"(?:TODO|FIXME|NOTE|BUG|XXX):\",r:0}),n},e.CLCM=e.C(\"//\",\"$\"),e.CBCM=e.C(\"/\\\\*\",\"\\\\*/\"),e.HCM=e.C(\"#\",\"$\"),e.NM={cN:\"number\",b:e.NR,r:0},e.CNM={cN:\"number\",b:e.CNR,r:0},e.BNM={cN:\"number\",b:e.BNR,r:0},e.CSSNM={cN:\"number\",b:e.NR+\"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?\",r:0},e.RM={cN:\"regexp\",b:/\\//,e:/\\/[gimuy]*/,i:/\\n/,c:[e.BE,{b:/\\[/,e:/\\]/,r:0,c:[e.BE]}]},e.TM={cN:\"title\",b:e.IR,r:0},e.UTM={cN:\"title\",b:e.UIR,r:0},e.registerLanguage(\"apache\",function(e){var t={cN:\"number\",b:\"[\\\\$%]\\\\d+\"};return{aliases:[\"apacheconf\"],cI:!0,c:[e.HCM,{cN:\"section\",b:\"</?\",e:\">\"},{cN:\"attribute\",b:/\\w+/,r:0,k:{nomarkup:\"order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername\"},starts:{e:/$/,r:0,k:{literal:\"on off all\"},c:[{cN:\"meta\",b:\"\\\\s\\\\[\",e:\"\\\\]$\"},{cN:\"variable\",b:\"[\\\\$%]\\\\{\",e:\"\\\\}\",c:[\"self\",t]},t,e.QSM]}}],i:/\\S/}}),e.registerLanguage(\"bash\",function(e){var t={cN:\"variable\",v:[{b:/\\$[\\w\\d#@][\\w\\d_]*/},{b:/\\$\\{(.*?)}/}]},r={cN:\"string\",b:/\"/,e:/\"/,c:[e.BE,t,{cN:\"variable\",b:/\\$\\(/,e:/\\)/,c:[e.BE]}]},a={cN:\"string\",b:/'/,e:/'/};return{aliases:[\"sh\",\"zsh\"],l:/-?[a-z\\.]+/,k:{keyword:\"if then else elif fi for while in do done case esac function\",literal:\"true false\",built_in:\"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp\",_:\"-ne -eq -lt -gt -f -d -e -s -l -a\"},c:[{cN:\"meta\",b:/^#![^\\n]+sh\\s*$/,r:10},{cN:\"function\",b:/\\w[\\w\\d_]*\\s*\\(\\s*\\)\\s*\\{/,rB:!0,c:[e.inherit(e.TM,{b:/\\w[\\w\\d_]*/})],r:0},e.HCM,r,a,t]}}),e.registerLanguage(\"coffeescript\",function(e){var t={keyword:\"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not\",literal:\"true false null undefined yes no on off\",built_in:\"npm require console print module global window document\"},r=\"[A-Za-z$_][0-9A-Za-z$_]*\",a={cN:\"subst\",b:/#\\{/,e:/}/,k:t},n=[e.BNM,e.inherit(e.CNM,{starts:{e:\"(\\\\s*/)?\",r:0}}),{cN:\"string\",v:[{b:/'''/,e:/'''/,c:[e.BE]},{b:/'/,e:/'/,c:[e.BE]},{b:/\"\"\"/,e:/\"\"\"/,c:[e.BE,a]},{b:/\"/,e:/\"/,c:[e.BE,a]}]},{cN:\"regexp\",v:[{b:\"///\",e:\"///\",c:[a,e.HCM]},{b:\"//[gim]*\",r:0},{b:/\\/(?![ *])(\\\\\\/|.)*?\\/[gim]*(?=\\W|$)/}]},{b:\"@\"+r},{b:\"`\",e:\"`\",eB:!0,eE:!0,sL:\"javascript\"}];a.c=n;var i=e.inherit(e.TM,{b:r}),s=\"(\\\\(.*\\\\))?\\\\s*\\\\B[-=]>\",c={cN:\"params\",b:\"\\\\([^\\\\(]\",rB:!0,c:[{b:/\\(/,e:/\\)/,k:t,c:[\"self\"].concat(n)}]};return{aliases:[\"coffee\",\"cson\",\"iced\"],k:t,i:/\\/\\*/,c:n.concat([e.C(\"###\",\"###\"),e.HCM,{cN:\"function\",b:\"^\\\\s*\"+r+\"\\\\s*=\\\\s*\"+s,e:\"[-=]>\",rB:!0,c:[i,c]},{b:/[:\\(,=]\\s*/,r:0,c:[{cN:\"function\",b:s,e:\"[-=]>\",rB:!0,c:[c]}]},{cN:\"class\",bK:\"class\",e:\"$\",i:/[:=\"\\[\\]]/,c:[{bK:\"extends\",eW:!0,i:/[:=\"\\[\\]]/,c:[i]},i]},{b:r+\":\",e:\":\",rB:!0,rE:!0,r:0}])}}),e.registerLanguage(\"cos\",function(e){var t={cN:\"string\",v:[{b:'\"',e:'\"',c:[{b:'\"\"',r:0}]}]},r={cN:\"number\",b:\"\\\\b(\\\\d+(\\\\.\\\\d*)?|\\\\.\\\\d+)\",r:0},a=(e.IR+\"\\\\s*\\\\(\",{keyword:[\"break\",\"catch\",\"close\",\"continue\",\"do\",\"d\",\"else\",\"elseif\",\"for\",\"goto\",\"halt\",\"hang\",\"h\",\"if\",\"job\",\"j\",\"kill\",\"k\",\"lock\",\"l\",\"merge\",\"new\",\"open\",\"quit\",\"q\",\"read\",\"r\",\"return\",\"set\",\"s\",\"tcommit\",\"throw\",\"trollback\",\"try\",\"tstart\",\"use\",\"view\",\"while\",\"write\",\"w\",\"xecute\",\"x\",\"zkill\",\"znspace\",\"zn\",\"ztrap\",\"zwrite\",\"zw\",\"zzdump\",\"zzwrite\",\"print\",\"zbreak\",\"zinsert\",\"zload\",\"zprint\",\"zremove\",\"zsave\",\"zzprint\",\"mv\",\"mvcall\",\"mvcrt\",\"mvdim\",\"mvprint\",\"zquit\",\"zsync\",\"ascii\"].join(\" \")});return{cI:!0,aliases:[\"cos\",\"cls\"],k:a,c:[r,t,e.CLCM,e.CBCM,{cN:\"built_in\",b:/\\$\\$?[a-zA-Z]+/},{cN:\"keyword\",b:/\\$\\$\\$[a-zA-Z]+/},{cN:\"symbol\",b:/\\^%?[a-zA-Z][\\w]*/},{cN:\"keyword\",b:/##class/},{b:/&sql\\(/,e:/\\)/,eB:!0,eE:!0,sL:\"sql\"},{b:/&(js|jscript|javascript)</,e:/>/,eB:!0,eE:!0,sL:\"javascript\"},{b:/&html<\\s*</,e:/>\\s*>/,sL:\"xml\"}]}}),e.registerLanguage(\"cpp\",function(e){var t={cN:\"keyword\",b:\"\\\\b[a-z\\\\d_]*_t\\\\b\"},r={cN:\"string\",v:[e.inherit(e.QSM,{b:'((u8?|U)|L)?\"'}),{b:'(u8?|U)?R\"',e:'\"',c:[e.BE]},{b:\"'\\\\\\\\?.\",e:\"'\",i:\".\"}]},a={cN:\"number\",v:[{b:\"\\\\b(\\\\d+(\\\\.\\\\d*)?|\\\\.\\\\d+)(u|U|l|L|ul|UL|f|F)\"},{b:e.CNR}],r:0},n={cN:\"meta\",b:\"#\",e:\"$\",k:{\"meta-keyword\":\"if else elif endif define undef warning error line pragma ifdef ifndef\"},c:[{b:/\\\\\\n/,r:0},{bK:\"include\",e:\"$\",k:{\"meta-keyword\":\"include\"},c:[e.inherit(r,{cN:\"meta-string\"}),{cN:\"meta-string\",b:\"<\",e:\">\",i:\"\\\\n\"}]},r,e.CLCM,e.CBCM]},i=e.IR+\"\\\\s*\\\\(\",s={keyword:\"int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong\",built_in:\"std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr\",literal:\"true false nullptr NULL\"};return{aliases:[\"c\",\"cc\",\"h\",\"c++\",\"h++\",\"hpp\"],k:s,i:\"</\",c:[t,e.CLCM,e.CBCM,a,r,n,{b:\"\\\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\\\s*<\",e:\">\",k:s,c:[\"self\",t]},{b:e.IR+\"::\",k:s},{bK:\"new throw return else\",r:0},{cN:\"function\",b:\"(\"+e.IR+\"[\\\\*&\\\\s]+)+\"+i,rB:!0,e:/[{;=]/,eE:!0,k:s,i:/[^\\w\\s\\*&]/,c:[{b:i,rB:!0,c:[e.TM],r:0},{cN:\"params\",b:/\\(/,e:/\\)/,k:s,r:0,c:[e.CLCM,e.CBCM,r,a]},e.CLCM,e.CBCM,n]}]}}),e.registerLanguage(\"cs\",function(e){var t=\"abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield\",r=e.IR+\"(<\"+e.IR+\">)?\";return{aliases:[\"csharp\"],k:t,i:/::/,c:[e.C(\"///\",\"$\",{rB:!0,c:[{cN:\"doctag\",v:[{b:\"///\",r:0},{b:\"<!--|-->\"},{b:\"</?\",e:\">\"}]}]}),e.CLCM,e.CBCM,{cN:\"meta\",b:\"#\",e:\"$\",k:{\"meta-keyword\":\"if else elif endif define undef warning error line region endregion pragma checksum\"}},{cN:\"string\",b:'@\"',e:'\"',c:[{b:'\"\"'}]},e.ASM,e.QSM,e.CNM,{bK:\"class interface\",e:/[{;=]/,i:/[^\\s:]/,c:[e.TM,e.CLCM,e.CBCM]},{bK:\"namespace\",e:/[{;=]/,i:/[^\\s:]/,c:[e.inherit(e.TM,{b:\"[a-zA-Z](\\\\.?\\\\w)*\"}),e.CLCM,e.CBCM]},{bK:\"new return throw await\",r:0},{cN:\"function\",b:\"(\"+r+\"\\\\s+)+\"+e.IR+\"\\\\s*\\\\(\",rB:!0,e:/[{;=]/,eE:!0,k:t,c:[{b:e.IR+\"\\\\s*\\\\(\",rB:!0,c:[e.TM],r:0},{cN:\"params\",b:/\\(/,e:/\\)/,eB:!0,eE:!0,k:t,r:0,c:[e.ASM,e.QSM,e.CNM,e.CBCM]},e.CLCM,e.CBCM]}]}}),e.registerLanguage(\"css\",function(e){var t=\"[a-zA-Z-][a-zA-Z0-9_-]*\",r={b:/[A-Z\\_\\.\\-]+\\s*:/,rB:!0,e:\";\",eW:!0,c:[{cN:\"attribute\",b:/\\S/,e:\":\",eE:!0,starts:{eW:!0,eE:!0,c:[{b:/[\\w-]+\\s*\\(/,rB:!0,c:[{cN:\"built_in\",b:/[\\w-]+/}]},e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:\"number\",b:\"#[0-9A-Fa-f]+\"},{cN:\"meta\",b:\"!important\"}]}}]};return{cI:!0,i:/[=\\/|'\\$]/,c:[e.CBCM,{cN:\"selector-id\",b:/#[A-Za-z0-9_-]+/},{cN:\"selector-class\",b:/\\.[A-Za-z0-9_-]+/},{cN:\"selector-attr\",b:/\\[/,e:/\\]/,i:\"$\"},{cN:\"selector-pseudo\",b:/:(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\"']+/},{b:\"@(font-face|page)\",l:\"[a-z-]+\",k:\"font-face page\"},{b:\"@\",e:\"[{;]\",c:[{cN:\"keyword\",b:/\\S+/},{b:/\\s/,eW:!0,eE:!0,r:0,c:[e.ASM,e.QSM,e.CSSNM]}]},{cN:\"selector-tag\",b:t,r:0},{b:\"{\",e:\"}\",i:/\\S/,c:[e.CBCM,r]}]}}),e.registerLanguage(\"diff\",function(e){return{aliases:[\"patch\"],c:[{cN:\"meta\",r:10,v:[{b:/^@@ +\\-\\d+,\\d+ +\\+\\d+,\\d+ +@@$/},{b:/^\\*\\*\\* +\\d+,\\d+ +\\*\\*\\*\\*$/},{b:/^\\-\\-\\- +\\d+,\\d+ +\\-\\-\\-\\-$/}]},{cN:\"comment\",v:[{b:/Index: /,e:/$/},{b:/=====/,e:/=====$/},{b:/^\\-\\-\\-/,e:/$/},{b:/^\\*{3} /,e:/$/},{b:/^\\+\\+\\+/,e:/$/},{b:/\\*{5}/,e:/\\*{5}$/}]},{cN:\"addition\",b:\"^\\\\+\",e:\"$\"},{cN:\"deletion\",b:\"^\\\\-\",e:\"$\"},{cN:\"addition\",b:\"^\\\\!\",e:\"$\"}]}}),e.registerLanguage(\"http\",function(e){var t=\"HTTP/[0-9\\\\.]+\";return{aliases:[\"https\"],i:\"\\\\S\",c:[{b:\"^\"+t,e:\"$\",c:[{cN:\"number\",b:\"\\\\b\\\\d{3}\\\\b\"}]},{b:\"^[A-Z]+ (.*?) \"+t+\"$\",rB:!0,e:\"$\",c:[{cN:\"string\",b:\" \",e:\" \",eB:!0,eE:!0},{b:t},{cN:\"keyword\",b:\"[A-Z]+\"}]},{cN:\"attribute\",b:\"^\\\\w\",e:\": \",eE:!0,i:\"\\\\n|\\\\s|=\",starts:{e:\"$\",r:0}},{b:\"\\\\n\\\\n\",starts:{sL:[],eW:!0}}]}}),e.registerLanguage(\"ini\",function(e){var t={cN:\"string\",c:[e.BE],v:[{b:\"'''\",e:\"'''\",r:10},{b:'\"\"\"',e:'\"\"\"',r:10},{b:'\"',e:'\"'},{b:\"'\",e:\"'\"}]};return{aliases:[\"toml\"],cI:!0,i:/\\S/,c:[e.C(\";\",\"$\"),e.HCM,{cN:\"section\",b:/^\\s*\\[+/,e:/\\]+/},{b:/^[a-z0-9\\[\\]_-]+\\s*=\\s*/,e:\"$\",rB:!0,c:[{cN:\"attr\",b:/[a-z0-9\\[\\]_-]+/},{b:/=/,eW:!0,r:0,c:[{cN:\"literal\",b:/\\bon|off|true|false|yes|no\\b/},{cN:\"variable\",v:[{b:/\\$[\\w\\d\"][\\w\\d_]*/},{b:/\\$\\{(.*?)}/}]},t,{cN:\"number\",b:/([\\+\\-]+)?[\\d]+_[\\d_]+/},e.NM]}]}]}}),e.registerLanguage(\"java\",function(e){var t=e.UIR+\"(<(\"+e.UIR+\"|\\\\s*,\\\\s*)+>)?\",r=\"false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private\",a=\"\\\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\\\d]+[\\\\d_]+[\\\\d]+|[\\\\d]+)(\\\\.([\\\\d]+[\\\\d_]+[\\\\d]+|[\\\\d]+))?|\\\\.([\\\\d]+[\\\\d_]+[\\\\d]+|[\\\\d]+))([eE][-+]?\\\\d+)?)[lLfF]?\",n={cN:\"number\",b:a,r:0};return{aliases:[\"jsp\"],k:r,i:/<\\/|#/,c:[e.C(\"/\\\\*\\\\*\",\"\\\\*/\",{r:0,c:[{b:/\\w+@/,r:0},{cN:\"doctag\",b:\"@[A-Za-z]+\"}]}),e.CLCM,e.CBCM,e.ASM,e.QSM,{cN:\"class\",bK:\"class interface\",e:/[{;=]/,eE:!0,k:\"class interface\",i:/[:\"\\[\\]]/,c:[{bK:\"extends implements\"},e.UTM]},{bK:\"new throw return else\",r:0},{cN:\"function\",b:\"(\"+t+\"\\\\s+)+\"+e.UIR+\"\\\\s*\\\\(\",rB:!0,e:/[{;=]/,eE:!0,k:r,c:[{b:e.UIR+\"\\\\s*\\\\(\",rB:!0,r:0,c:[e.UTM]},{cN:\"params\",b:/\\(/,e:/\\)/,k:r,r:0,c:[e.ASM,e.QSM,e.CNM,e.CBCM]},e.CLCM,e.CBCM]},n,{cN:\"meta\",b:\"@[A-Za-z]+\"}]}}),e.registerLanguage(\"javascript\",function(e){return{aliases:[\"js\"],k:{keyword:\"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await import from as\",literal:\"true false null undefined NaN Infinity\",built_in:\"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise\"},c:[{cN:\"meta\",r:10,b:/^\\s*['\"]use (strict|asm)['\"]/},e.ASM,e.QSM,{cN:\"string\",b:\"`\",e:\"`\",c:[e.BE,{cN:\"subst\",b:\"\\\\$\\\\{\",e:\"\\\\}\"}]},e.CLCM,e.CBCM,{cN:\"number\",v:[{b:\"\\\\b(0[bB][01]+)\"},{b:\"\\\\b(0[oO][0-7]+)\"},{b:e.CNR}],r:0},{b:\"(\"+e.RSR+\"|\\\\b(case|return|throw)\\\\b)\\\\s*\",k:\"return throw case\",c:[e.CLCM,e.CBCM,e.RM,{b:/</,e:/>\\s*[);\\]]/,r:0,sL:\"xml\"}],r:0},{cN:\"function\",bK:\"function\",e:/\\{/,eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:\"params\",b:/\\(/,e:/\\)/,eB:!0,eE:!0,c:[e.CLCM,e.CBCM]}],i:/\\[|%/},{b:/\\$[(.]/},{b:\"\\\\.\"+e.IR,r:0},{cN:\"class\",bK:\"class\",e:/[{;=]/,eE:!0,i:/[:\"\\[\\]]/,c:[{bK:\"extends\"},e.UTM]},{bK:\"constructor\",e:/\\{/,eE:!0}],i:/#/}}),e.registerLanguage(\"json\",function(e){var t={literal:\"true false null\"},r=[e.QSM,e.CNM],a={e:\",\",eW:!0,eE:!0,c:r,k:t},n={b:\"{\",e:\"}\",c:[{cN:\"attr\",b:'\\\\s*\"',e:'\"\\\\s*:\\\\s*',eB:!0,eE:!0,c:[e.BE],i:\"\\\\n\",starts:a}],i:\"\\\\S\"},i={b:\"\\\\[\",e:\"\\\\]\",c:[e.inherit(a)],i:\"\\\\S\"};return r.splice(r.length,0,n,i),{c:r,k:t,i:\"\\\\S\"}}),e.registerLanguage(\"makefile\",function(e){var t={cN:\"variable\",b:/\\$\\(/,e:/\\)/,c:[e.BE]};return{aliases:[\"mk\",\"mak\"],c:[e.HCM,{b:/^\\w+\\s*\\W*=/,rB:!0,r:0,starts:{e:/\\s*\\W*=/,eE:!0,starts:{e:/$/,r:0,c:[t]}}},{cN:\"section\",b:/^[\\w]+:\\s*$/},{cN:\"meta\",b:/^\\.PHONY:/,e:/$/,k:{\"meta-keyword\":\".PHONY\"},l:/[\\.\\w]+/},{b:/^\\t+/,e:/$/,r:0,c:[e.QSM,t]}]}}),e.registerLanguage(\"xml\",function(e){var t=\"[A-Za-z0-9\\\\._:-]+\",r={b:/<\\?(php)?(?!\\w)/,e:/\\?>/,sL:\"php\"},a={eW:!0,i:/</,r:0,c:[r,{cN:\"attr\",b:t,r:0},{b:\"=\",r:0,c:[{cN:\"string\",c:[r],v:[{b:/\"/,e:/\"/},{b:/'/,e:/'/},{b:/[^\\s\\/>]+/}]}]}]};return{aliases:[\"html\",\"xhtml\",\"rss\",\"atom\",\"xsl\",\"plist\"],cI:!0,c:[{cN:\"meta\",b:\"<!DOCTYPE\",e:\">\",r:10,c:[{b:\"\\\\[\",e:\"\\\\]\"}]},e.C(\"<!--\",\"-->\",{r:10}),{b:\"<\\\\!\\\\[CDATA\\\\[\",e:\"\\\\]\\\\]>\",r:10},{cN:\"tag\",b:\"<style(?=\\\\s|>|$)\",e:\">\",k:{name:\"style\"},c:[a],starts:{e:\"</style>\",rE:!0,sL:[\"css\",\"xml\"]}},{cN:\"tag\",b:\"<script(?=\\\\s|>|$)\",e:\">\",k:{name:\"script\"},c:[a],starts:{e:\"<\" + \"/script>\",rE:!0,sL:[\"actionscript\",\"javascript\",\"handlebars\",\"xml\"]}},r,{cN:\"meta\",b:/<\\?\\w+/,e:/\\?>/,r:10},{cN:\"tag\",b:\"</?\",e:\"/?>\",c:[{cN:\"name\",b:/[^\\/><\\s]+/,r:0},a]}]}}),e.registerLanguage(\"markdown\",function(e){return{aliases:[\"md\",\"mkdown\",\"mkd\"],c:[{cN:\"section\",v:[{b:\"^#{1,6}\",e:\"$\"},{b:\"^.+?\\\\n[=-]{2,}$\"}]},{b:\"<\",e:\">\",sL:\"xml\",r:0},{cN:\"bullet\",b:\"^([*+-]|(\\\\d+\\\\.))\\\\s+\"},{cN:\"strong\",b:\"[*_]{2}.+?[*_]{2}\"},{cN:\"emphasis\",v:[{b:\"\\\\*.+?\\\\*\"},{b:\"_.+?_\",r:0}]},{cN:\"quote\",b:\"^>\\\\s+\",e:\"$\"},{cN:\"code\",v:[{b:\"`.+?`\"},{b:\"^( {4}|	)\",e:\"$\",r:0}]},{b:\"^[-\\\\*]{3,}\",e:\"$\"},{b:\"\\\\[.+?\\\\][\\\\(\\\\[].*?[\\\\)\\\\]]\",rB:!0,c:[{cN:\"string\",b:\"\\\\[\",e:\"\\\\]\",eB:!0,rE:!0,r:0},{cN:\"link\",b:\"\\\\]\\\\(\",e:\"\\\\)\",eB:!0,eE:!0},{cN:\"symbol\",b:\"\\\\]\\\\[\",e:\"\\\\]\",eB:!0,eE:!0}],r:10},{b:\"^\\\\[.+\\\\]:\",rB:!0,c:[{cN:\"symbol\",b:\"\\\\[\",e:\"\\\\]:\",eB:!0,eE:!0,starts:{cN:\"link\",e:\"$\"}}]}]}}),e.registerLanguage(\"nginx\",function(e){var t={cN:\"variable\",v:[{b:/\\$\\d+/},{b:/\\$\\{/,e:/}/},{b:\"[\\\\$\\\\@]\"+e.UIR}]},r={eW:!0,l:\"[a-z/_]+\",k:{literal:\"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll\"},r:0,i:\"=>\",c:[e.HCM,{cN:\"string\",c:[e.BE,t],v:[{b:/\"/,e:/\"/},{b:/'/,e:/'/}]},{b:\"([a-z]+):/\",e:\"\\\\s\",eW:!0,eE:!0,c:[t]},{cN:\"regexp\",c:[e.BE,t],v:[{b:\"\\\\s\\\\^\",e:\"\\\\s|{|;\",rE:!0},{b:\"~\\\\*?\\\\s+\",e:\"\\\\s|{|;\",rE:!0},{b:\"\\\\*(\\\\.[a-z\\\\-]+)+\"},{b:\"([a-z\\\\-]+\\\\.)+\\\\*\"}]},{cN:\"number\",b:\"\\\\b\\\\d{1,3}\\\\.\\\\d{1,3}\\\\.\\\\d{1,3}\\\\.\\\\d{1,3}(:\\\\d{1,5})?\\\\b\"},{cN:\"number\",b:\"\\\\b\\\\d+[kKmMgGdshdwy]*\\\\b\",r:0},t]};return{aliases:[\"nginxconf\"],c:[e.HCM,{b:e.UIR+\"\\\\s+{\",rB:!0,e:\"{\",c:[{cN:\"section\",b:e.UIR}],r:0},{b:e.UIR+\"\\\\s\",e:\";|{\",rB:!0,c:[{cN:\"attribute\",b:e.UIR,starts:r}],r:0}],i:\"[^\\\\s\\\\}]\"}}),e.registerLanguage(\"objectivec\",function(e){var t={cN:\"built_in\",b:\"(AV|CA|CF|CG|CI|MK|MP|NS|UI|XC)\\\\w+\"},r={keyword:\"int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required\",literal:\"false true FALSE TRUE nil YES NO NULL\",built_in:\"BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once\"},a=/[a-zA-Z@][a-zA-Z0-9_]*/,n=\"@interface @class @protocol @implementation\";return{aliases:[\"mm\",\"objc\",\"obj-c\"],k:r,l:a,i:\"</\",c:[t,e.CLCM,e.CBCM,e.CNM,e.QSM,{cN:\"string\",v:[{b:'@\"',e:'\"',i:\"\\\\n\",c:[e.BE]},{b:\"'\",e:\"[^\\\\\\\\]'\",i:\"[^\\\\\\\\][^']\"}]},{cN:\"meta\",b:\"#\",e:\"$\",c:[{cN:\"meta-string\",v:[{b:'\"',e:'\"'},{b:\"<\",e:\">\"}]}]},{cN:\"class\",b:\"(\"+n.split(\" \").join(\"|\")+\")\\\\b\",e:\"({|$)\",eE:!0,k:n,l:a,c:[e.UTM]},{b:\"\\\\.\"+e.UIR,r:0}]}}),e.registerLanguage(\"perl\",function(e){var t=\"getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when\",r={cN:\"subst\",b:\"[$@]\\\\{\",e:\"\\\\}\",k:t},a={b:\"->{\",e:\"}\"},n={v:[{b:/\\$\\d/},{b:/[\\$%@](\\^\\w\\b|#\\w+(::\\w+)*|{\\w+}|\\w+(::\\w*)*)/},{b:/[\\$%@][^\\s\\w{]/,r:0}]},i=[e.BE,r,n],s=[n,e.HCM,e.C(\"^\\\\=\\\\w\",\"\\\\=cut\",{eW:!0}),a,{cN:\"string\",c:i,v:[{b:\"q[qwxr]?\\\\s*\\\\(\",e:\"\\\\)\",r:5},{b:\"q[qwxr]?\\\\s*\\\\[\",e:\"\\\\]\",r:5},{b:\"q[qwxr]?\\\\s*\\\\{\",e:\"\\\\}\",r:5},{b:\"q[qwxr]?\\\\s*\\\\|\",e:\"\\\\|\",r:5},{b:\"q[qwxr]?\\\\s*\\\\<\",e:\"\\\\>\",r:5},{b:\"qw\\\\s+q\",e:\"q\",r:5},{b:\"'\",e:\"'\",c:[e.BE]},{b:'\"',e:'\"'},{b:\"`\",e:\"`\",c:[e.BE]},{b:\"{\\\\w+}\",c:[],r:0},{b:\"-?\\\\w+\\\\s*\\\\=\\\\>\",c:[],r:0}]},{cN:\"number\",b:\"(\\\\b0[0-7_]+)|(\\\\b0x[0-9a-fA-F_]+)|(\\\\b[1-9][0-9_]*(\\\\.[0-9_]+)?)|[0_]\\\\b\",r:0},{b:\"(\\\\/\\\\/|\"+e.RSR+\"|\\\\b(split|return|print|reverse|grep)\\\\b)\\\\s*\",k:\"split return print reverse grep\",r:0,c:[e.HCM,{cN:\"regexp\",b:\"(s|tr|y)/(\\\\\\\\.|[^/])*/(\\\\\\\\.|[^/])*/[a-z]*\",r:10},{cN:\"regexp\",b:\"(m|qr)?/\",e:\"/[a-z]*\",c:[e.BE],r:0}]},{cN:\"function\",bK:\"sub\",e:\"(\\\\s*\\\\(.*?\\\\))?[;{]\",eE:!0,r:5,c:[e.TM]},{b:\"-\\\\w\\\\b\",r:0},{b:\"^__DATA__$\",e:\"^__END__$\",sL:\"mojolicious\",c:[{b:\"^@@.*\",e:\"$\",cN:\"comment\"}]}];return r.c=s,a.c=s,{aliases:[\"pl\"],k:t,c:s}}),e.registerLanguage(\"php\",function(e){var t={b:\"\\\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*\"},r={cN:\"meta\",b:/<\\?(php)?|\\?>/},a={cN:\"string\",c:[e.BE,r],v:[{b:'b\"',e:'\"'},{b:\"b'\",e:\"'\"},e.inherit(e.ASM,{i:null}),e.inherit(e.QSM,{i:null})]},n={v:[e.BNM,e.CNM]};return{aliases:[\"php3\",\"php4\",\"php5\",\"php6\"],cI:!0,k:\"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally\",c:[e.CLCM,e.HCM,e.C(\"/\\\\*\",\"\\\\*/\",{c:[{cN:\"doctag\",b:\"@[A-Za-z]+\"},r]}),e.C(\"__halt_compiler.+?;\",!1,{eW:!0,k:\"__halt_compiler\",l:e.UIR}),{cN:\"string\",b:/<<<['\"]?\\w+['\"]?$/,e:/^\\w+;?$/,c:[e.BE,{cN:\"subst\",v:[{b:/\\$\\w+/},{b:/\\{\\$/,e:/\\}/}]}]},r,t,{b:/(::|->)+[a-zA-Z_\\x7f-\\xff][a-zA-Z0-9_\\x7f-\\xff]*/},{cN:\"function\",bK:\"function\",e:/[;{]/,eE:!0,i:\"\\\\$|\\\\[|%\",c:[e.UTM,{cN:\"params\",b:\"\\\\(\",e:\"\\\\)\",c:[\"self\",t,e.CBCM,a,n]}]},{cN:\"class\",bK:\"class interface\",e:\"{\",eE:!0,i:/[:\\(\\$\"]/,c:[{bK:\"extends implements\"},e.UTM]},{bK:\"namespace\",e:\";\",i:/[\\.']/,c:[e.UTM]},{bK:\"use\",e:\";\",c:[e.UTM]},{b:\"=>\"},a,n]}}),e.registerLanguage(\"python\",function(e){var t={cN:\"meta\",b:/^(>>>|\\.\\.\\.) /},r={cN:\"string\",c:[e.BE],v:[{b:/(u|b)?r?'''/,e:/'''/,c:[t],r:10},{b:/(u|b)?r?\"\"\"/,e:/\"\"\"/,c:[t],r:10},{b:/(u|r|ur)'/,e:/'/,r:10},{b:/(u|r|ur)\"/,e:/\"/,r:10},{b:/(b|br)'/,e:/'/},{b:/(b|br)\"/,e:/\"/},e.ASM,e.QSM]},a={cN:\"number\",r:0,v:[{b:e.BNR+\"[lLjJ]?\"},{b:\"\\\\b(0o[0-7]+)[lLjJ]?\"},{b:e.CNR+\"[lLjJ]?\"}]},n={cN:\"params\",b:/\\(/,e:/\\)/,c:[\"self\",t,a,r]};return{aliases:[\"py\",\"gyp\"],k:{keyword:\"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False\",built_in:\"Ellipsis NotImplemented\"},i:/(<\\/|->|\\?)/,c:[t,a,r,e.HCM,{v:[{cN:\"function\",bK:\"def\",r:10},{cN:\"class\",bK:\"class\"}],e:/:/,i:/[${=;\\n,]/,c:[e.UTM,n]},{cN:\"meta\",b:/^[\\t ]*@/,e:/$/},{b:/\\b(print|exec)\\(/}]}}),e.registerLanguage(\"ruby\",function(e){var t=\"[a-zA-Z_]\\\\w*[!?=]?|[-+~]\\\\@|<<|>>|=~|===?|<=>|[<>]=?|\\\\*\\\\*|[-/+%^&*~`|]|\\\\[\\\\]=?\",r=\"and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor\",a={cN:\"doctag\",b:\"@[A-Za-z]+\"},n={b:\"#<\",e:\">\"},i=[e.C(\"#\",\"$\",{c:[a]}),e.C(\"^\\\\=begin\",\"^\\\\=end\",{c:[a],r:10}),e.C(\"^__END__\",\"\\\\n$\")],s={cN:\"subst\",b:\"#\\\\{\",e:\"}\",k:r},c={cN:\"string\",c:[e.BE,s],v:[{b:/'/,e:/'/},{b:/\"/,e:/\"/},{b:/`/,e:/`/},{b:\"%[qQwWx]?\\\\(\",e:\"\\\\)\"},{b:\"%[qQwWx]?\\\\[\",e:\"\\\\]\"},{b:\"%[qQwWx]?{\",e:\"}\"},{b:\"%[qQwWx]?<\",e:\">\"},{b:\"%[qQwWx]?/\",e:\"/\"},{b:\"%[qQwWx]?%\",e:\"%\"},{b:\"%[qQwWx]?-\",e:\"-\"},{b:\"%[qQwWx]?\\\\|\",e:\"\\\\|\"},{b:/\\B\\?(\\\\\\d{1,3}|\\\\x[A-Fa-f0-9]{1,2}|\\\\u[A-Fa-f0-9]{4}|\\\\?\\S)\\b/}]},o={cN:\"params\",b:\"\\\\(\",e:\"\\\\)\",endsParent:!0,k:r},l=[c,n,{cN:\"class\",bK:\"class module\",e:\"$|;\",i:/=/,c:[e.inherit(e.TM,{b:\"[A-Za-z_]\\\\w*(::\\\\w+)*(\\\\?|\\\\!)?\"}),{b:\"<\\\\s*\",c:[{b:\"(\"+e.IR+\"::)?\"+e.IR}]}].concat(i)},{cN:\"function\",bK:\"def\",e:\"$|;\",c:[e.inherit(e.TM,{b:t}),o].concat(i)},{cN:\"symbol\",b:e.UIR+\"(\\\\!|\\\\?)?:\",r:0},{cN:\"symbol\",b:\":\",c:[c,{b:t}],r:0},{cN:\"number\",b:\"(\\\\b0[0-7_]+)|(\\\\b0x[0-9a-fA-F_]+)|(\\\\b[1-9][0-9_]*(\\\\.[0-9_]+)?)|[0_]\\\\b\",r:0},{b:\"(\\\\$\\\\W)|((\\\\$|\\\\@\\\\@?)(\\\\w+))\"},{b:\"(\"+e.RSR+\")\\\\s*\",c:[n,{cN:\"regexp\",c:[e.BE,s],i:/\\n/,v:[{b:\"/\",e:\"/[a-z]*\"},{b:\"%r{\",e:\"}[a-z]*\"},{b:\"%r\\\\(\",e:\"\\\\)[a-z]*\"},{b:\"%r!\",e:\"![a-z]*\"},{b:\"%r\\\\[\",e:\"\\\\][a-z]*\"}]}].concat(i),r:0}].concat(i);s.c=l,o.c=l;var u=\"[>?]>\",d=\"[\\\\w#]+\\\\(\\\\w+\\\\):\\\\d+:\\\\d+>\",b=\"(\\\\w+-)?\\\\d+\\\\.\\\\d+\\\\.\\\\d(p\\\\d+)?[^>]+>\",p=[{b:/^\\s*=>/,starts:{e:\"$\",c:l}},{cN:\"meta\",b:\"^(\"+u+\"|\"+d+\"|\"+b+\")\",starts:{e:\"$\",c:l}}];return{aliases:[\"rb\",\"gemspec\",\"podspec\",\"thor\",\"irb\"],k:r,i:/\\/\\*/,c:i.concat(p).concat(l)}}),e.registerLanguage(\"sql\",function(e){var t=e.C(\"--\",\"$\");return{cI:!0,i:/[<>{}*]/,c:[{bK:\"begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke\",e:/;/,eW:!0," + 
"k:{keyword:\"abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes c cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle d data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration e each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract f failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function g general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http i id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists k keep keep_duplicates key keys kill l language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim m main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex n name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding p package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime t table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek\",literal:\"true false null\",built_in:\"array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void\"},c:[{cN:\"string\",b:\"'\",e:\"'\",c:[e.BE,{b:\"''\"}]},{cN:\"string\",b:'\"',e:'\"',c:[e.BE,{b:'\"\"'}]},{cN:\"string\",b:\"`\",e:\"`\",c:[e.BE]},e.CNM,e.CBCM,t]},e.CBCM,t]}}),e});" + 
"</script>" + 
"<script>" + 
"// ┌────────────────────────────────────────────────────────────────────┐ \\\\" + 
"// │ Raphaël 2.1.4 - JavaScript Vector Library                          │ \\\\" + 
"// ├────────────────────────────────────────────────────────────────────┤ \\\\" + 
"// │ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    │ \\\\" + 
"// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\\\" + 
"// ├────────────────────────────────────────────────────────────────────┤ \\\\" + 
"// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\\\" + 
"// └────────────────────────────────────────────────────────────────────┘ \\\\" + 
"!function(a){var b,c,d=\"0.4.2\",e=\"hasOwnProperty\",f=/[\\.\\/]/,g=\"*\",h=function(){},i=function(a,b){return a-b},j={n:{}},k=function(a,d){a=String(a);var e,f=c,g=Array.prototype.slice.call(arguments,2),h=k.listeners(a),j=0,l=[],m={},n=[],o=b;b=a,c=0;for(var p=0,q=h.length;q>p;p++)\"zIndex\"in h[p]&&(l.push(h[p].zIndex),h[p].zIndex<0&&(m[h[p].zIndex]=h[p]));for(l.sort(i);l[j]<0;)if(e=m[l[j++]],n.push(e.apply(d,g)),c)return c=f,n;for(p=0;q>p;p++)if(e=h[p],\"zIndex\"in e)if(e.zIndex==l[j]){if(n.push(e.apply(d,g)),c)break;do if(j++,e=m[l[j]],e&&n.push(e.apply(d,g)),c)break;while(e)}else m[e.zIndex]=e;else if(n.push(e.apply(d,g)),c)break;return c=f,b=o,n.length?n:null};k._events=j,k.listeners=function(a){var b,c,d,e,h,i,k,l,m=a.split(f),n=j,o=[n],p=[];for(e=0,h=m.length;h>e;e++){for(l=[],i=0,k=o.length;k>i;i++)for(n=o[i].n,c=[n[m[e]],n[g]],d=2;d--;)b=c[d],b&&(l.push(b),p=p.concat(b.f||[]));o=l}return p},k.on=function(a,b){if(a=String(a),\"function\"!=typeof b)return function(){};for(var c=a.split(f),d=j,e=0,g=c.length;g>e;e++)d=d.n,d=d.hasOwnProperty(c[e])&&d[c[e]]||(d[c[e]]={n:{}});for(d.f=d.f||[],e=0,g=d.f.length;g>e;e++)if(d.f[e]==b)return h;return d.f.push(b),function(a){+a==+a&&(b.zIndex=+a)}},k.f=function(a){var b=[].slice.call(arguments,1);return function(){k.apply(null,[a,null].concat(b).concat([].slice.call(arguments,0)))}},k.stop=function(){c=1},k.nt=function(a){return a?new RegExp(\"(?:\\\\.|\\\\/|^)\"+a+\"(?:\\\\.|\\\\/|$)\").test(b):b},k.nts=function(){return b.split(f)},k.off=k.unbind=function(a,b){if(!a)return void(k._events=j={n:{}});var c,d,h,i,l,m,n,o=a.split(f),p=[j];for(i=0,l=o.length;l>i;i++)for(m=0;m<p.length;m+=h.length-2){if(h=[m,1],c=p[m].n,o[i]!=g)c[o[i]]&&h.push(c[o[i]]);else for(d in c)c[e](d)&&h.push(c[d]);p.splice.apply(p,h)}for(i=0,l=p.length;l>i;i++)for(c=p[i];c.n;){if(b){if(c.f){for(m=0,n=c.f.length;n>m;m++)if(c.f[m]==b){c.f.splice(m,1);break}!c.f.length&&delete c.f}for(d in c.n)if(c.n[e](d)&&c.n[d].f){var q=c.n[d].f;for(m=0,n=q.length;n>m;m++)if(q[m]==b){q.splice(m,1);break}!q.length&&delete c.n[d].f}}else{delete c.f;for(d in c.n)c.n[e](d)&&c.n[d].f&&delete c.n[d].f}c=c.n}},k.once=function(a,b){var c=function(){return k.unbind(a,c),b.apply(this,arguments)};return k.on(a,c)},k.version=d,k.toString=function(){return\"You are running Eve \"+d},\"undefined\"!=typeof module&&module.exports?module.exports=k:\"undefined\"!=typeof define?define(\"eve\",[],function(){return k}):a.eve=k}(window||this),function(a,b){\"function\"==typeof define&&define.amd?define([\"eve\"],function(c){return b(a,c)}):b(a,a.eve||\"function\"==typeof require&&require(\"eve\"))}(this,function(a,b){function c(a){if(c.is(a,\"function\"))return u?a():b.on(\"raphael.DOMload\",a);if(c.is(a,V))return c._engine.create[D](c,a.splice(0,3+c.is(a[0],T))).add(a);var d=Array.prototype.slice.call(arguments,0);if(c.is(d[d.length-1],\"function\")){var e=d.pop();return u?e.call(c._engine.create[D](c,d)):b.on(\"raphael.DOMload\",function(){e.call(c._engine.create[D](c,d))})}return c._engine.create[D](c,arguments)}function d(a){if(\"function\"==typeof a||Object(a)!==a)return a;var b=new a.constructor;for(var c in a)a[z](c)&&(b[c]=d(a[c]));return b}function e(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function f(a,b,c){function d(){var f=Array.prototype.slice.call(arguments,0),g=f.join(\"␀\"),h=d.cache=d.cache||{},i=d.count=d.count||[];return h[z](g)?(e(i,g),c?c(h[g]):h[g]):(i.length>=1e3&&delete h[i.shift()],i.push(g),h[g]=a[D](b,f),c?c(h[g]):h[g])}return d}function g(){return this.hex}function h(a,b){for(var c=[],d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push([\"C\",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}function i(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function j(a,b,c,d,e,f,g,h,j){null==j&&(j=1),j=j>1?1:0>j?0:j;for(var k=j/2,l=12,m=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],n=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],o=0,p=0;l>p;p++){var q=k*m[p]+k,r=i(q,a,c,e,g),s=i(q,b,d,f,h),t=r*r+s*s;o+=n[p]*N.sqrt(t)}return k*o}function k(a,b,c,d,e,f,g,h,i){if(!(0>i||j(a,b,c,d,e,f,g,h)<i)){var k,l=1,m=l/2,n=l-m,o=.01;for(k=j(a,b,c,d,e,f,g,h,n);Q(k-i)>o;)m/=2,n+=(i>k?1:-1)*m,k=j(a,b,c,d,e,f,g,h,n);return n}}function l(a,b,c,d,e,f,g,h){if(!(O(a,c)<P(e,g)||P(a,c)>O(e,g)||O(b,d)<P(f,h)||P(b,d)>O(f,h))){var i=(a*d-b*c)*(e-g)-(a-c)*(e*h-f*g),j=(a*d-b*c)*(f-h)-(b-d)*(e*h-f*g),k=(a-c)*(f-h)-(b-d)*(e-g);if(k){var l=i/k,m=j/k,n=+l.toFixed(2),o=+m.toFixed(2);if(!(n<+P(a,c).toFixed(2)||n>+O(a,c).toFixed(2)||n<+P(e,g).toFixed(2)||n>+O(e,g).toFixed(2)||o<+P(b,d).toFixed(2)||o>+O(b,d).toFixed(2)||o<+P(f,h).toFixed(2)||o>+O(f,h).toFixed(2)))return{x:l,y:m}}}}function m(a,b,d){var e=c.bezierBBox(a),f=c.bezierBBox(b);if(!c.isBBoxIntersect(e,f))return d?0:[];for(var g=j.apply(0,a),h=j.apply(0,b),i=O(~~(g/5),1),k=O(~~(h/5),1),m=[],n=[],o={},p=d?0:[],q=0;i+1>q;q++){var r=c.findDotsAtSegment.apply(c,a.concat(q/i));m.push({x:r.x,y:r.y,t:q/i})}for(q=0;k+1>q;q++)r=c.findDotsAtSegment.apply(c,b.concat(q/k)),n.push({x:r.x,y:r.y,t:q/k});for(q=0;i>q;q++)for(var s=0;k>s;s++){var t=m[q],u=m[q+1],v=n[s],w=n[s+1],x=Q(u.x-t.x)<.001?\"y\":\"x\",y=Q(w.x-v.x)<.001?\"y\":\"x\",z=l(t.x,t.y,u.x,u.y,v.x,v.y,w.x,w.y);if(z){if(o[z.x.toFixed(4)]==z.y.toFixed(4))continue;o[z.x.toFixed(4)]=z.y.toFixed(4);var A=t.t+Q((z[x]-t[x])/(u[x]-t[x]))*(u.t-t.t),B=v.t+Q((z[y]-v[y])/(w[y]-v[y]))*(w.t-v.t);A>=0&&1.001>=A&&B>=0&&1.001>=B&&(d?p++:p.push({x:z.x,y:z.y,t1:P(A,1),t2:P(B,1)}))}}return p}function n(a,b,d){a=c._path2curve(a),b=c._path2curve(b);for(var e,f,g,h,i,j,k,l,n,o,p=d?0:[],q=0,r=a.length;r>q;q++){var s=a[q];if(\"M\"==s[0])e=i=s[1],f=j=s[2];else{\"C\"==s[0]?(n=[e,f].concat(s.slice(1)),e=n[6],f=n[7]):(n=[e,f,e,f,i,j,i,j],e=i,f=j);for(var t=0,u=b.length;u>t;t++){var v=b[t];if(\"M\"==v[0])g=k=v[1],h=l=v[2];else{\"C\"==v[0]?(o=[g,h].concat(v.slice(1)),g=o[6],h=o[7]):(o=[g,h,g,h,k,l,k,l],g=k,h=l);var w=m(n,o,d);if(d)p+=w;else{for(var x=0,y=w.length;y>x;x++)w[x].segment1=q,w[x].segment2=t,w[x].bez1=n,w[x].bez2=o;p=p.concat(w)}}}}}return p}function o(a,b,c,d,e,f){null!=a?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function p(){return this.x+H+this.y+H+this.width+\" × \"+this.height}function q(a,b,c,d,e,f){function g(a){return((l*a+k)*a+j)*a}function h(a,b){var c=i(a,b);return((o*c+n)*c+m)*c}function i(a,b){var c,d,e,f,h,i;for(e=a,i=0;8>i;i++){if(f=g(e)-a,Q(f)<b)return e;if(h=(3*l*e+2*k)*e+j,Q(h)<1e-6)break;e-=f/h}if(c=0,d=1,e=a,c>e)return c;if(e>d)return d;for(;d>c;){if(f=g(e),Q(f-a)<b)return e;a>f?c=e:d=e,e=(d-c)/2+c}return e}var j=3*b,k=3*(d-b)-j,l=1-j-k,m=3*c,n=3*(e-c)-m,o=1-m-n;return h(a,1/(200*f))}function r(a,b){var c=[],d={};if(this.ms=b,this.times=1,a){for(var e in a)a[z](e)&&(d[_(e)]=a[e],c.push(_(e)));c.sort(lb)}this.anim=d,this.top=c[c.length-1],this.percents=c}function s(a,d,e,f,g,h){e=_(e);var i,j,k,l,m,n,p=a.ms,r={},s={},t={};if(f)for(v=0,x=ic.length;x>v;v++){var u=ic[v];if(u.el.id==d.id&&u.anim==a){u.percent!=e?(ic.splice(v,1),k=1):j=u,d.attr(u.totalOrigin);break}}else f=+s;for(var v=0,x=a.percents.length;x>v;v++){if(a.percents[v]==e||a.percents[v]>f*a.top){e=a.percents[v],m=a.percents[v-1]||0,p=p/a.top*(e-m),l=a.percents[v+1],i=a.anim[e];break}f&&d.attr(a.anim[a.percents[v]])}if(i){if(j)j.initstatus=f,j.start=new Date-j.ms*f;else{for(var y in i)if(i[z](y)&&(db[z](y)||d.paper.customAttributes[z](y)))switch(r[y]=d.attr(y),null==r[y]&&(r[y]=cb[y]),s[y]=i[y],db[y]){case T:t[y]=(s[y]-r[y])/p;break;case\"colour\":r[y]=c.getRGB(r[y]);var A=c.getRGB(s[y]);t[y]={r:(A.r-r[y].r)/p,g:(A.g-r[y].g)/p,b:(A.b-r[y].b)/p};break;case\"path\":var B=Kb(r[y],s[y]),C=B[1];for(r[y]=B[0],t[y]=[],v=0,x=r[y].length;x>v;v++){t[y][v]=[0];for(var D=1,F=r[y][v].length;F>D;D++)t[y][v][D]=(C[v][D]-r[y][v][D])/p}break;case\"transform\":var G=d._,H=Pb(G[y],s[y]);if(H)for(r[y]=H.from,s[y]=H.to,t[y]=[],t[y].real=!0,v=0,x=r[y].length;x>v;v++)for(t[y][v]=[r[y][v][0]],D=1,F=r[y][v].length;F>D;D++)t[y][v][D]=(s[y][v][D]-r[y][v][D])/p;else{var K=d.matrix||new o,L={_:{transform:G.transform},getBBox:function(){return d.getBBox(1)}};r[y]=[K.a,K.b,K.c,K.d,K.e,K.f],Nb(L,s[y]),s[y]=L._.transform,t[y]=[(L.matrix.a-K.a)/p,(L.matrix.b-K.b)/p,(L.matrix.c-K.c)/p,(L.matrix.d-K.d)/p,(L.matrix.e-K.e)/p,(L.matrix.f-K.f)/p]}break;case\"csv\":var M=I(i[y])[J](w),N=I(r[y])[J](w);if(\"clip-rect\"==y)for(r[y]=N,t[y]=[],v=N.length;v--;)t[y][v]=(M[v]-r[y][v])/p;s[y]=M;break;default:for(M=[][E](i[y]),N=[][E](r[y]),t[y]=[],v=d.paper.customAttributes[y].length;v--;)t[y][v]=((M[v]||0)-(N[v]||0))/p}var O=i.easing,P=c.easing_formulas[O];if(!P)if(P=I(O).match(Z),P&&5==P.length){var Q=P;P=function(a){return q(a,+Q[1],+Q[2],+Q[3],+Q[4],p)}}else P=nb;if(n=i.start||a.start||+new Date,u={anim:a,percent:e,timestamp:n,start:n+(a.del||0),status:0,initstatus:f||0,stop:!1,ms:p,easing:P,from:r,diff:t,to:s,el:d,callback:i.callback,prev:m,next:l,repeat:h||a.times,origin:d.attr(),totalOrigin:g},ic.push(u),f&&!j&&!k&&(u.stop=!0,u.start=new Date-p*f,1==ic.length))return kc();k&&(u.start=new Date-u.ms*f),1==ic.length&&jc(kc)}b(\"raphael.anim.start.\"+d.id,d,a)}}function t(a){for(var b=0;b<ic.length;b++)ic[b].el.paper==a&&ic.splice(b--,1)}c.version=\"2.1.2\",c.eve=b;var u,v,w=/[, ]+/,x={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},y=/\\{(\\d+)\\}/g,z=\"hasOwnProperty\",A={doc:document,win:a},B={was:Object.prototype[z].call(A.win,\"Raphael\"),is:A.win.Raphael},C=function(){this.ca=this.customAttributes={}},D=\"apply\",E=\"concat\",F=\"ontouchstart\"in A.win||A.win.DocumentTouch&&A.doc instanceof DocumentTouch,G=\"\",H=\" \",I=String,J=\"split\",K=\"click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel\"[J](H),L={mousedown:\"touchstart\",mousemove:\"touchmove\",mouseup:\"touchend\"},M=I.prototype.toLowerCase,N=Math,O=N.max,P=N.min,Q=N.abs,R=N.pow,S=N.PI,T=\"number\",U=\"string\",V=\"array\",W=Object.prototype.toString,X=(c._ISURL=/^url\\(['\"]?(.+?)['\"]?\\)$/i,/^\\s*((#[a-f\\d]{6})|(#[a-f\\d]{3})|rgba?\\(\\s*([\\d\\.]+%?\\s*,\\s*[\\d\\.]+%?\\s*,\\s*[\\d\\.]+%?(?:\\s*,\\s*[\\d\\.]+%?)?)\\s*\\)|hsba?\\(\\s*([\\d\\.]+(?:deg|\\xb0|%)?\\s*,\\s*[\\d\\.]+%?\\s*,\\s*[\\d\\.]+(?:%?\\s*,\\s*[\\d\\.]+)?)%?\\s*\\)|hsla?\\(\\s*([\\d\\.]+(?:deg|\\xb0|%)?\\s*,\\s*[\\d\\.]+%?\\s*,\\s*[\\d\\.]+(?:%?\\s*,\\s*[\\d\\.]+)?)%?\\s*\\))\\s*$/i),Y={NaN:1,Infinity:1,\"-Infinity\":1},Z=/^(?:cubic-)?bezier\\(([^,]+),([^,]+),([^,]+),([^\\)]+)\\)/,$=N.round,_=parseFloat,ab=parseInt,bb=I.prototype.toUpperCase,cb=c._availableAttrs={\"arrow-end\":\"none\",\"arrow-start\":\"none\",blur:0,\"clip-rect\":\"0 0 1e9 1e9\",cursor:\"default\",cx:0,cy:0,fill:\"#fff\",\"fill-opacity\":1,font:'10px \"Arial\"',\"font-family\":'\"Arial\"',\"font-size\":\"10\",\"font-style\":\"normal\",\"font-weight\":400,gradient:0,height:0,href:\"http://raphaeljs.com/\",\"letter-spacing\":0,opacity:1,path:\"M0,0\",r:0,rx:0,ry:0,src:\"\",stroke:\"#000\",\"stroke-dasharray\":\"\",\"stroke-linecap\":\"butt\",\"stroke-linejoin\":\"butt\",\"stroke-miterlimit\":0,\"stroke-opacity\":1,\"stroke-width\":1,target:\"_blank\",\"text-anchor\":\"middle\",title:\"Raphael\",transform:\"\",width:0,x:0,y:0},db=c._availableAnimAttrs={blur:T,\"clip-rect\":\"csv\",cx:T,cy:T,fill:\"colour\",\"fill-opacity\":T,\"font-size\":T,height:T,opacity:T,path:\"path\",r:T,rx:T,ry:T,stroke:\"colour\",\"stroke-opacity\":T,\"stroke-width\":T,transform:\"transform\",width:T,x:T,y:T},eb=/[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\u2028\\u2029]*,[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\u2028\\u2029]*/,fb={hs:1,rg:1},gb=/,?([achlmqrstvxz]),?/gi,hb=/([achlmrqstvz])[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\u2028\\u2029,]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\u2028\\u2029]*,?[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\u2028\\u2029]*)+)/gi,ib=/([rstm])[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\u2028\\u2029,]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\u2028\\u2029]*,?[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\u2028\\u2029]*)+)/gi,jb=/(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\u2028\\u2029]*,?[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\u2028\\u2029]*/gi,kb=(c._radial_gradient=/^r(?:\\(([^,]+?)[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\u2028\\u2029]*,[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\u2028\\u2029]*([^\\)]+?)\\))?/,{}),lb=function(a,b){return _(a)-_(b)},mb=function(){},nb=function(a){return a},ob=c._rectPath=function(a,b,c,d,e){return e?[[\"M\",a+e,b],[\"l\",c-2*e,0],[\"a\",e,e,0,0,1,e,e],[\"l\",0,d-2*e],[\"a\",e,e,0,0,1,-e,e],[\"l\",2*e-c,0],[\"a\",e,e,0,0,1,-e,-e],[\"l\",0,2*e-d],[\"a\",e,e,0,0,1,e,-e],[\"z\"]]:[[\"M\",a,b],[\"l\",c,0],[\"l\",0,d],[\"l\",-c,0],[\"z\"]]},pb=function(a,b,c,d){return null==d&&(d=c),[[\"M\",a,b],[\"m\",0,-d],[\"a\",c,d,0,1,1,0,2*d],[\"a\",c,d,0,1,1,0,-2*d],[\"z\"]]},qb=c._getPath={path:function(a){return a.attr(\"path\")},circle:function(a){var b=a.attrs;return pb(b.cx,b.cy,b.r)},ellipse:function(a){var b=a.attrs;return pb(b.cx,b.cy,b.rx,b.ry)},rect:function(a){var b=a.attrs;return ob(b.x,b.y,b.width,b.height,b.r)},image:function(a){var b=a.attrs;return ob(b.x,b.y,b.width,b.height)},text:function(a){var b=a._getBBox();return ob(b.x,b.y,b.width,b.height)},set:function(a){var b=a._getBBox();return ob(b.x,b.y,b.width,b.height)}},rb=c.mapPath=function(a,b){if(!b)return a;var c,d,e,f,g,h,i;for(a=Kb(a),e=0,g=a.length;g>e;e++)for(i=a[e],f=1,h=i.length;h>f;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d;return a};if(c._g=A,c.type=A.win.SVGAngle||A.doc.implementation.hasFeature(\"http://www.w3.org/TR/SVG11/feature#BasicStructure\",\"1.1\")?\"SVG\":\"VML\",\"VML\"==c.type){var sb,tb=A.doc.createElement(\"div\");if(tb.innerHTML='<v:shape adj=\"1\"/>',sb=tb.firstChild,sb.style.behavior=\"url(#default#VML)\",!sb||\"object\"!=typeof sb.adj)return c.type=G;tb=null}c.svg=!(c.vml=\"VML\"==c.type),c._Paper=C,c.fn=v=C.prototype=c.prototype,c._id=0,c._oid=0,c.is=function(a,b){return b=M.call(b),\"finite\"==b?!Y[z](+a):\"array\"==b?a instanceof Array:\"null\"==b&&null===a||b==typeof a&&null!==a||\"object\"==b&&a===Object(a)||\"array\"==b&&Array.isArray&&Array.isArray(a)||W.call(a).slice(8,-1).toLowerCase()==b},c.angle=function(a,b,d,e,f,g){if(null==f){var h=a-d,i=b-e;return h||i?(180+180*N.atan2(-i,-h)/S+360)%360:0}return c.angle(a,b,f,g)-c.angle(d,e,f,g)},c.rad=function(a){return a%360*S/180},c.deg=function(a){return Math.round(180*a/S%360*1e3)/1e3},c.snapTo=function(a,b,d){if(d=c.is(d,\"finite\")?d:10,c.is(a,V)){for(var e=a.length;e--;)if(Q(a[e]-b)<=d)return a[e]}else{a=+a;var f=b%a;if(d>f)return b-f;if(f>a-d)return b-f+a}return b};c.createUUID=function(a,b){return function(){return\"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(a,b).toUpperCase()}}(/[xy]/g,function(a){var b=16*N.random()|0,c=\"x\"==a?b:3&b|8;return c.toString(16)});c.setWindow=function(a){b(\"raphael.setWindow\",c,A.win,a),A.win=a,A.doc=A.win.document,c._engine.initWin&&c._engine.initWin(A.win)};var ub=function(a){if(c.vml){var b,d=/^\\s+|\\s+$/g;try{var e=new ActiveXObject(\"htmlfile\");e.write(\"<body>\"),e.close(),b=e.body}catch(g){b=createPopup().document.body}var h=b.createTextRange();ub=f(function(a){try{b.style.color=I(a).replace(d,G);var c=h.queryCommandValue(\"ForeColor\");return c=(255&c)<<16|65280&c|(16711680&c)>>>16,\"#\"+(\"000000\"+c.toString(16)).slice(-6)}catch(e){return\"none\"}})}else{var i=A.doc.createElement(\"i\");i.title=\"Raphaël Colour Picker\",i.style.display=\"none\",A.doc.body.appendChild(i),ub=f(function(a){return i.style.color=a,A.doc.defaultView.getComputedStyle(i,G).getPropertyValue(\"color\")})}return ub(a)},vb=function(){return\"hsb(\"+[this.h,this.s,this.b]+\")\"},wb=function(){return\"hsl(\"+[this.h,this.s,this.l]+\")\"},xb=function(){return this.hex},yb=function(a,b,d){if(null==b&&c.is(a,\"object\")&&\"r\"in a&&\"g\"in a&&\"b\"in a&&(d=a.b,b=a.g,a=a.r),null==b&&c.is(a,U)){var e=c.getRGB(a);a=e.r,b=e.g,d=e.b}return(a>1||b>1||d>1)&&(a/=255,b/=255,d/=255),[a,b,d]},zb=function(a,b,d,e){a*=255,b*=255,d*=255;var f={r:a,g:b,b:d,hex:c.rgb(a,b,d),toString:xb};return c.is(e,\"finite\")&&(f.opacity=e),f};c.color=function(a){var b;return c.is(a,\"object\")&&\"h\"in a&&\"s\"in a&&\"b\"in a?(b=c.hsb2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.hex=b.hex):c.is(a,\"object\")&&\"h\"in a&&\"s\"in a&&\"l\"in a?(b=c.hsl2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.hex=b.hex):(c.is(a,\"string\")&&(a=c.getRGB(a)),c.is(a,\"object\")&&\"r\"in a&&\"g\"in a&&\"b\"in a?(b=c.rgb2hsl(a),a.h=b.h,a.s=b.s,a.l=b.l,b=c.rgb2hsb(a),a.v=b.b):(a={hex:\"none\"},a.r=a.g=a.b=a.h=a.s=a.v=a.l=-1)),a.toString=xb,a},c.hsb2rgb=function(a,b,c,d){this.is(a,\"object\")&&\"h\"in a&&\"s\"in a&&\"b\"in a&&(c=a.b,b=a.s,d=a.o,a=a.h),a*=360;var e,f,g,h,i;return a=a%360/60,i=c*b,h=i*(1-Q(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],zb(e,f,g,d)},c.hsl2rgb=function(a,b,c,d){this.is(a,\"object\")&&\"h\"in a&&\"s\"in a&&\"l\"in a&&(c=a.l,b=a.s,a=a.h),(a>1||b>1||c>1)&&(a/=360,b/=100,c/=100),a*=360;var e,f,g,h,i;return a=a%360/60,i=2*b*(.5>c?c:1-c),h=i*(1-Q(a%2-1)),e=f=g=c-i/2,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],zb(e,f,g,d)},c.rgb2hsb=function(a,b,c){c=yb(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;return f=O(a,b,c),g=f-P(a,b,c),d=0==g?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=(d+360)%6*60/360,e=0==g?0:g/f,{h:d,s:e,b:f,toString:vb}},c.rgb2hsl=function(a,b,c){c=yb(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;return g=O(a,b,c),h=P(a,b,c),i=g-h,d=0==i?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=(d+360)%6*60/360,f=(g+h)/2,e=0==i?0:.5>f?i/(2*f):i/(2-2*f),{h:d,s:e,l:f,toString:wb}},c._path2string=function(){return this.join(\",\").replace(gb,\"$1\")};c._preload=function(a,b){var c=A.doc.createElement(\"img\");c.style.cssText=\"position:absolute;left:-9999em;top:-9999em\",c.onload=function(){b.call(this),this.onload=null,A.doc.body.removeChild(this)},c.onerror=function(){A.doc.body.removeChild(this)},A.doc.body.appendChild(c),c.src=a};c.getRGB=f(function(a){if(!a||(a=I(a)).indexOf(\"-\")+1)return{r:-1,g:-1,b:-1,hex:\"none\",error:1,toString:g};if(\"none\"==a)return{r:-1,g:-1,b:-1,hex:\"none\",toString:g};!(fb[z](a.toLowerCase().substring(0,2))||\"#\"==a.charAt())&&(a=ub(a));var b,d,e,f,h,i,j=a.match(X);return j?(j[2]&&(e=ab(j[2].substring(5),16),d=ab(j[2].substring(3,5),16),b=ab(j[2].substring(1,3),16)),j[3]&&(e=ab((h=j[3].charAt(3))+h,16),d=ab((h=j[3].charAt(2))+h,16),b=ab((h=j[3].charAt(1))+h,16)),j[4]&&(i=j[4][J](eb),b=_(i[0]),\"%\"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),\"%\"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),\"%\"==i[2].slice(-1)&&(e*=2.55),\"rgba\"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&\"%\"==i[3].slice(-1)&&(f/=100)),j[5]?(i=j[5][J](eb),b=_(i[0]),\"%\"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),\"%\"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),\"%\"==i[2].slice(-1)&&(e*=2.55),(\"deg\"==i[0].slice(-3)||\"°\"==i[0].slice(-1))&&(b/=360),\"hsba\"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&\"%\"==i[3].slice(-1)&&(f/=100),c.hsb2rgb(b,d,e,f)):j[6]?(i=j[6][J](eb),b=_(i[0]),\"%\"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),\"%\"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),\"%\"==i[2].slice(-1)&&(e*=2.55),(\"deg\"==i[0].slice(-3)||\"°\"==i[0].slice(-1))&&(b/=360),\"hsla\"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&\"%\"==i[3].slice(-1)&&(f/=100),c.hsl2rgb(b,d,e,f)):(j={r:b,g:d,b:e,toString:g},j.hex=\"#\"+(16777216|e|d<<8|b<<16).toString(16).slice(1),c.is(f,\"finite\")&&(j.opacity=f),j)):{r:-1,g:-1,b:-1,hex:\"none\",error:1,toString:g}},c),c.hsb=f(function(a,b,d){return c.hsb2rgb(a,b,d).hex}),c.hsl=f(function(a,b,d){return c.hsl2rgb(a,b,d).hex}),c.rgb=f(function(a,b,c){return\"#\"+(16777216|c|b<<8|a<<16).toString(16).slice(1)}),c.getColor=function(a){var b=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||.75},c=this.hsb2rgb(b.h,b.s,b.b);return b.h+=.075,b.h>1&&(b.h=0,b.s-=.2,b.s<=0&&(this.getColor.start={h:0,s:1,b:b.b})),c.hex},c.getColor.reset=function(){delete this.start},c.parsePathString=function(a){if(!a)return null;var b=Ab(a);if(b.arr)return Cb(b.arr);var d={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},e=[];return c.is(a,V)&&c.is(a[0],V)&&(e=Cb(a)),e.length||I(a).replace(hb,function(a,b,c){var f=[],g=b.toLowerCase();if(c.replace(jb,function(a,b){b&&f.push(+b)}),\"m\"==g&&f.length>2&&(e.push([b][E](f.splice(0,2))),g=\"l\",b=\"m\"==b?\"l\":\"L\"),\"r\"==g)e.push([b][E](f));else for(;f.length>=d[g]&&(e.push([b][E](f.splice(0,d[g]))),d[g]););}),e.toString=c._path2string,b.arr=Cb(e),e},c.parseTransformString=f(function(a){if(!a)return null;var b=[];return c.is(a,V)&&c.is(a[0],V)&&(b=Cb(a)),b.length||I(a).replace(ib,function(a,c,d){{var e=[];M.call(c)}d.replace(jb,function(a,b){b&&e.push(+b)}),b.push([c][E](e))}),b.toString=c._path2string,b});var Ab=function(a){var b=Ab.ps=Ab.ps||{};return b[a]?b[a].sleep=100:b[a]={sleep:100},setTimeout(function(){for(var c in b)b[z](c)&&c!=a&&(b[c].sleep--,!b[c].sleep&&delete b[c])}),b[a]};c.findDotsAtSegment=function(a,b,c,d,e,f,g,h,i){var j=1-i,k=R(j,3),l=R(j,2),m=i*i,n=m*i,o=k*a+3*l*i*c+3*j*i*i*e+n*g,p=k*b+3*l*i*d+3*j*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,w=j*e+i*g,x=j*f+i*h,y=90-180*N.atan2(q-s,r-t)/S;return(q>s||t>r)&&(y+=180),{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:w,y:x},alpha:y}},c.bezierBBox=function(a,b,d,e,f,g,h,i){c.is(a,\"array\")||(a=[a,b,d,e,f,g,h,i]);var j=Jb.apply(null,a);return{x:j.min.x,y:j.min.y,x2:j.max.x,y2:j.max.y,width:j.max.x-j.min.x,height:j.max.y-j.min.y}},c.isPointInsideBBox=function(a,b,c){return b>=a.x&&b<=a.x2&&c>=a.y&&c<=a.y2},c.isBBoxIntersect=function(a,b){var d=c.isPointInsideBBox;return d(b,a.x,a.y)||d(b,a.x2,a.y)||d(b,a.x,a.y2)||d(b,a.x2,a.y2)||d(a,b.x,b.y)||d(a,b.x2,b.y)||d(a,b.x,b.y2)||d(a,b.x2,b.y2)||(a.x<b.x2&&a.x>b.x||b.x<a.x2&&b.x>a.x)&&(a.y<b.y2&&a.y>b.y||b.y<a.y2&&b.y>a.y)},c.pathIntersection=function(a,b){return n(a,b)},c.pathIntersectionNumber=function(a,b){return n(a,b,1)},c.isPointInsidePath=function(a,b,d){var e=c.pathBBox(a);return c.isPointInsideBBox(e,b,d)&&n(a,[[\"M\",b,d],[\"H\",e.x2+10]],1)%2==1},c._removedFactory=function(a){return function(){b(\"raphael.log\",null,\"Raphaël: you are calling to method “\"+a+\"” of removed object\",a)}};var Bb=c.pathBBox=function(a){var b=Ab(a);if(b.bbox)return d(b.bbox);if(!a)return{x:0,y:0,width:0,height:0,x2:0,y2:0};a=Kb(a);for(var c,e=0,f=0,g=[],h=[],i=0,j=a.length;j>i;i++)if(c=a[i],\"M\"==c[0])e=c[1],f=c[2],g.push(e),h.push(f);else{var k=Jb(e,f,c[1],c[2],c[3],c[4],c[5],c[6]);g=g[E](k.min.x,k.max.x),h=h[E](k.min.y,k.max.y),e=c[5],f=c[6]}var l=P[D](0,g),m=P[D](0,h),n=O[D](0,g),o=O[D](0,h),p=n-l,q=o-m,r={x:l,y:m,x2:n,y2:o,width:p,height:q,cx:l+p/2,cy:m+q/2};return b.bbox=d(r),r},Cb=function(a){var b=d(a);return b.toString=c._path2string,b},Db=c._pathToRelative=function(a){var b=Ab(a);if(b.rel)return Cb(b.rel);c.is(a,V)&&c.is(a&&a[0],V)||(a=c.parsePathString(a));var d=[],e=0,f=0,g=0,h=0,i=0;\"M\"==a[0][0]&&(e=a[0][1],f=a[0][2],g=e,h=f,i++,d.push([\"M\",e,f]));for(var j=i,k=a.length;k>j;j++){var l=d[j]=[],m=a[j];if(m[0]!=M.call(m[0]))switch(l[0]=M.call(m[0]),l[0]){case\"a\":l[1]=m[1],l[2]=m[2],l[3]=m[3],l[4]=m[4],l[5]=m[5],l[6]=+(m[6]-e).toFixed(3),l[7]=+(m[7]-f).toFixed(3);break;case\"v\":l[1]=+(m[1]-f).toFixed(3);break;case\"m\":g=m[1],h=m[2];default:for(var n=1,o=m.length;o>n;n++)l[n]=+(m[n]-(n%2?e:f)).toFixed(3)}else{l=d[j]=[],\"m\"==m[0]&&(g=m[1]+e,h=m[2]+f);for(var p=0,q=m.length;q>p;p++)d[j][p]=m[p]}var r=d[j].length;switch(d[j][0]){case\"z\":e=g,f=h;break;case\"h\":e+=+d[j][r-1];break;case\"v\":f+=+d[j][r-1];break;default:e+=+d[j][r-2],f+=+d[j][r-1]}}return d.toString=c._path2string,b.rel=Cb(d),d},Eb=c._pathToAbsolute=function(a){var b=Ab(a);if(b.abs)return Cb(b.abs);if(c.is(a,V)&&c.is(a&&a[0],V)||(a=c.parsePathString(a)),!a||!a.length)return[[\"M\",0,0]];var d=[],e=0,f=0,g=0,i=0,j=0;\"M\"==a[0][0]&&(e=+a[0][1],f=+a[0][2],g=e,i=f,j++,d[0]=[\"M\",e,f]);for(var k,l,m=3==a.length&&\"M\"==a[0][0]&&\"R\"==a[1][0].toUpperCase()&&\"Z\"==a[2][0].toUpperCase(),n=j,o=a.length;o>n;n++){if(d.push(k=[]),l=a[n],l[0]!=bb.call(l[0]))switch(k[0]=bb.call(l[0]),k[0]){case\"A\":k[1]=l[1],k[2]=l[2],k[3]=l[3],k[4]=l[4],k[5]=l[5],k[6]=+(l[6]+e),k[7]=+(l[7]+f);break;case\"V\":k[1]=+l[1]+f;break;case\"H\":k[1]=+l[1]+e;break;case\"R\":for(var p=[e,f][E](l.slice(1)),q=2,r=p.length;r>q;q++)p[q]=+p[q]+e,p[++q]=+p[q]+f;d.pop(),d=d[E](h(p,m));break;case\"M\":g=+l[1]+e,i=+l[2]+f;default:for(q=1,r=l.length;r>q;q++)k[q]=+l[q]+(q%2?e:f)}else if(\"R\"==l[0])p=[e,f][E](l.slice(1)),d.pop(),d=d[E](h(p,m)),k=[\"R\"][E](l.slice(-2));else for(var s=0,t=l.length;t>s;s++)k[s]=l[s];switch(k[0]){case\"Z\":e=g,f=i;break;case\"H\":e=k[1];break;case\"V\":f=k[1];break;case\"M\":g=k[k.length-2],i=k[k.length-1];default:e=k[k.length-2],f=k[k.length-1]}}return d.toString=c._path2string,b.abs=Cb(d),d},Fb=function(a,b,c,d){return[a,b,c,d,c,d]},Gb=function(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]},Hb=function(a,b,c,d,e,g,h,i,j,k){var l,m=120*S/180,n=S/180*(+e||0),o=[],p=f(function(a,b,c){var d=a*N.cos(c)-b*N.sin(c),e=a*N.sin(c)+b*N.cos(c);return{x:d,y:e}});if(k)y=k[0],z=k[1],w=k[2],x=k[3];else{l=p(a,b,-n),a=l.x,b=l.y,l=p(i,j,-n),i=l.x,j=l.y;var q=(N.cos(S/180*e),N.sin(S/180*e),(a-i)/2),r=(b-j)/2,s=q*q/(c*c)+r*r/(d*d);s>1&&(s=N.sqrt(s),c=s*c,d=s*d);var t=c*c,u=d*d,v=(g==h?-1:1)*N.sqrt(Q((t*u-t*r*r-u*q*q)/(t*r*r+u*q*q))),w=v*c*r/d+(a+i)/2,x=v*-d*q/c+(b+j)/2,y=N.asin(((b-x)/d).toFixed(9)),z=N.asin(((j-x)/d).toFixed(9));y=w>a?S-y:y,z=w>i?S-z:z,0>y&&(y=2*S+y),0>z&&(z=2*S+z),h&&y>z&&(y-=2*S),!h&&z>y&&(z-=2*S)}var A=z-y;if(Q(A)>m){var B=z,C=i,D=j;z=y+m*(h&&z>y?1:-1),i=w+c*N.cos(z),j=x+d*N.sin(z),o=Hb(i,j,c,d,e,0,h,C,D,[z,B,w,x])}A=z-y;var F=N.cos(y),G=N.sin(y),H=N.cos(z),I=N.sin(z),K=N.tan(A/4),L=4/3*c*K,M=4/3*d*K,O=[a,b],P=[a+L*G,b-M*F],R=[i+L*I,j-M*H],T=[i,j];if(P[0]=2*O[0]-P[0],P[1]=2*O[1]-P[1],k)return[P,R,T][E](o);o=[P,R,T][E](o).join()[J](\",\");for(var U=[],V=0,W=o.length;W>V;V++)U[V]=V%2?p(o[V-1],o[V],n).y:p(o[V],o[V+1],n).x;return U},Ib=function(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:R(j,3)*a+3*R(j,2)*i*c+3*j*i*i*e+R(i,3)*g,y:R(j,3)*b+3*R(j,2)*i*d+3*j*i*i*f+R(i,3)*h}},Jb=f(function(a,b,c,d,e,f,g,h){var i,j=e-2*c+a-(g-2*e+c),k=2*(c-a)-2*(e-c),l=a-c,m=(-k+N.sqrt(k*k-4*j*l))/2/j,n=(-k-N.sqrt(k*k-4*j*l))/2/j,o=[b,h],p=[a,g];return Q(m)>\"1e12\"&&(m=.5),Q(n)>\"1e12\"&&(n=.5),m>0&&1>m&&(i=Ib(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ib(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),j=f-2*d+b-(h-2*f+d),k=2*(d-b)-2*(f-d),l=b-d,m=(-k+N.sqrt(k*k-4*j*l))/2/j,n=(-k-N.sqrt(k*k-4*j*l))/2/j,Q(m)>\"1e12\"&&(m=.5),Q(n)>\"1e12\"&&(n=.5),m>0&&1>m&&(i=Ib(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ib(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),{min:{x:P[D](0,p),y:P[D](0,o)},max:{x:O[D](0,p),y:O[D](0,o)}}}),Kb=c._path2curve=f(function(a,b){var c=!b&&Ab(a);if(!b&&c.curve)return Cb(c.curve);for(var d=Eb(a),e=b&&Eb(b),f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},h=(function(a,b,c){var d,e,f={T:1,Q:1};if(!a)return[\"C\",b.x,b.y,b.x,b.y,b.x,b.y];switch(!(a[0]in f)&&(b.qx=b.qy=null),a[0]){case\"M\":b.X=a[1],b.Y=a[2];break;case\"A\":a=[\"C\"][E](Hb[D](0,[b.x,b.y][E](a.slice(1))));break;case\"S\":\"C\"==c||\"S\"==c?(d=2*b.x-b.bx,e=2*b.y-b.by):(d=b.x,e=b.y),a=[\"C\",d,e][E](a.slice(1));break;case\"T\":\"Q\"==c||\"T\"==c?(b.qx=2*b.x-b.qx,b.qy=2*b.y-b.qy):(b.qx=b.x,b.qy=b.y),a=[\"C\"][E](Gb(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case\"Q\":b.qx=a[1],b.qy=a[2],a=[\"C\"][E](Gb(b.x,b.y,a[1],a[2],a[3],a[4]));break;case\"L\":a=[\"C\"][E](Fb(b.x,b.y,a[1],a[2]));break;case\"H\":a=[\"C\"][E](Fb(b.x,b.y,a[1],b.y));break;case\"V\":a=[\"C\"][E](Fb(b.x,b.y,b.x,a[1]));break;case\"Z\":a=[\"C\"][E](Fb(b.x,b.y,b.X,b.Y))}return a}),i=function(a,b){if(a[b].length>7){a[b].shift();for(var c=a[b];c.length;)k[b]=\"A\",e&&(l[b]=\"A\"),a.splice(b++,0,[\"C\"][E](c.splice(0,6)));a.splice(b,1),p=O(d.length,e&&e.length||0)}},j=function(a,b,c,f,g){a&&b&&\"M\"==a[g][0]&&\"M\"!=b[g][0]&&(b.splice(g,0,[\"M\",f.x,f.y]),c.bx=0,c.by=0,c.x=a[g][1],c.y=a[g][2],p=O(d.length,e&&e.length||0))},k=[],l=[],m=\"\",n=\"\",o=0,p=O(d.length,e&&e.length||0);p>o;o++){d[o]&&(m=d[o][0]),\"C\"!=m&&(k[o]=m,o&&(n=k[o-1])),d[o]=h(d[o],f,n),\"A\"!=k[o]&&\"C\"==m&&(k[o]=\"C\"),i(d,o),e&&(e[o]&&(m=e[o][0]),\"C\"!=m&&(l[o]=m,o&&(n=l[o-1])),e[o]=h(e[o],g,n),\"A\"!=l[o]&&\"C\"==m&&(l[o]=\"C\"),i(e,o)),j(d,e,f,g,o),j(e,d,g,f,o);var q=d[o],r=e&&e[o],s=q.length,t=e&&r.length;f.x=q[s-2],f.y=q[s-1],f.bx=_(q[s-4])||f.x,f.by=_(q[s-3])||f.y,g.bx=e&&(_(r[t-4])||g.x),g.by=e&&(_(r[t-3])||g.y),g.x=e&&r[t-2],g.y=e&&r[t-1]}return e||(c.curve=Cb(d)),e?[d,e]:d},null,Cb),Lb=(c._parseDots=f(function(a){for(var b=[],d=0,e=a.length;e>d;d++){var f={},g=a[d].match(/^([^:]*):?([\\d\\.]*)/);if(f.color=c.getRGB(g[1]),f.color.error)return null;f.color=f.color.hex,g[2]&&(f.offset=g[2]+\"%\"),b.push(f)}for(d=1,e=b.length-1;e>d;d++)if(!b[d].offset){for(var h=_(b[d-1].offset||0),i=0,j=d+1;e>j;j++)if(b[j].offset){i=b[j].offset;break}i||(i=100,j=e),i=_(i);for(var k=(i-h)/(j-d+1);j>d;d++)h+=k,b[d].offset=h+\"%\"}return b}),c._tear=function(a,b){a==b.top&&(b.top=a.prev),a==b.bottom&&(b.bottom=a.next),a.next&&(a.next.prev=a.prev),a.prev&&(a.prev.next=a.next)}),Mb=(c._tofront=function(a,b){b.top!==a&&(Lb(a,b),a.next=null,a.prev=b.top,b.top.next=a,b.top=a)},c._toback=function(a,b){b.bottom!==a&&(Lb(a,b),a.next=b.bottom,a.prev=null,b.bottom.prev=a,b.bottom=a)},c._insertafter=function(a,b,c){Lb(a,c),b==c.top&&(c.top=a),b.next&&(b.next.prev=a),a.next=b.next,a.prev=b,b.next=a},c._insertbefore=function(a,b,c){Lb(a,c),b==c.bottom&&(c.bottom=a),b.prev&&(b.prev.next=a),a.prev=b.prev,b.prev=a,a.next=b},c.toMatrix=function(a,b){var c=Bb(a),d={_:{transform:G},getBBox:function(){return c}};return Nb(d,b),d.matrix}),Nb=(c.transformPath=function(a,b){return rb(a,Mb(a,b))},c._extractTransform=function(a,b){if(null==b)return a._.transform;b=I(b).replace(/\\.{3}|\\u2026/g,a._.transform||G);var d=c.parseTransformString(b),e=0,f=0,g=0,h=1,i=1,j=a._,k=new o;if(j.transform=d||[],d)for(var l=0,m=d.length;m>l;l++){var n,p,q,r,s,t=d[l],u=t.length,v=I(t[0]).toLowerCase(),w=t[0]!=v,x=w?k.invert():0;\"t\"==v&&3==u?w?(n=x.x(0,0),p=x.y(0,0),q=x.x(t[1],t[2]),r=x.y(t[1],t[2]),k.translate(q-n,r-p)):k.translate(t[1],t[2]):\"r\"==v?2==u?(s=s||a.getBBox(1),k.rotate(t[1],s.x+s.width/2,s.y+s.height/2),e+=t[1]):4==u&&(w?(q=x.x(t[2],t[3]),r=x.y(t[2],t[3]),k.rotate(t[1],q,r)):k.rotate(t[1],t[2],t[3]),e+=t[1]):\"s\"==v?2==u||3==u?(s=s||a.getBBox(1),k.scale(t[1],t[u-1],s.x+s.width/2,s.y+s.height/2),h*=t[1],i*=t[u-1]):5==u&&(w?(q=x.x(t[3],t[4]),r=x.y(t[3],t[4]),k.scale(t[1],t[2],q,r)):k.scale(t[1],t[2],t[3],t[4]),h*=t[1],i*=t[2]):\"m\"==v&&7==u&&k.add(t[1],t[2],t[3],t[4],t[5],t[6]),j.dirtyT=1,a.matrix=k}a.matrix=k,j.sx=h,j.sy=i,j.deg=e,j.dx=f=k.e,j.dy=g=k.f,1==h&&1==i&&!e&&j.bbox?(j.bbox.x+=+f,j.bbox.y+=+g):j.dirtyT=1}),Ob=function(a){var b=a[0];switch(b.toLowerCase()){case\"t\":return[b,0,0];case\"m\":return[b,1,0,0,1,0,0];case\"r\":return 4==a.length?[b,0,a[2],a[3]]:[b,0];case\"s\":return 5==a.length?[b,1,1,a[3],a[4]]:3==a.length?[b,1,1]:[b,1]}},Pb=c._equaliseTransform=function(a,b){b=I(b).replace(/\\.{3}|\\u2026/g,a),a=c.parseTransformString(a)||[],b=c.parseTransformString(b)||[];" + 
"for(var d,e,f,g,h=O(a.length,b.length),i=[],j=[],k=0;h>k;k++){if(f=a[k]||Ob(b[k]),g=b[k]||Ob(f),f[0]!=g[0]||\"r\"==f[0].toLowerCase()&&(f[2]!=g[2]||f[3]!=g[3])||\"s\"==f[0].toLowerCase()&&(f[3]!=g[3]||f[4]!=g[4]))return;for(i[k]=[],j[k]=[],d=0,e=O(f.length,g.length);e>d;d++)d in f&&(i[k][d]=f[d]),d in g&&(j[k][d]=g[d])}return{from:i,to:j}};c._getContainer=function(a,b,d,e){var f;return f=null!=e||c.is(a,\"object\")?a:A.doc.getElementById(a),null!=f?f.tagName?null==b?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.style.pixelHeight||f.offsetHeight}:{container:f,width:b,height:d}:{container:1,x:a,y:b,width:d,height:e}:void 0},c.pathToRelative=Db,c._engine={},c.path2curve=Kb,c.matrix=function(a,b,c,d,e,f){return new o(a,b,c,d,e,f)},function(a){function b(a){return a[0]*a[0]+a[1]*a[1]}function d(a){var c=N.sqrt(b(a));a[0]&&(a[0]/=c),a[1]&&(a[1]/=c)}a.add=function(a,b,c,d,e,f){var g,h,i,j,k=[[],[],[]],l=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],m=[[a,c,e],[b,d,f],[0,0,1]];for(a&&a instanceof o&&(m=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]),g=0;3>g;g++)for(h=0;3>h;h++){for(j=0,i=0;3>i;i++)j+=l[g][i]*m[i][h];k[g][h]=j}this.a=k[0][0],this.b=k[1][0],this.c=k[0][1],this.d=k[1][1],this.e=k[0][2],this.f=k[1][2]},a.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new o(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},a.clone=function(){return new o(this.a,this.b,this.c,this.d,this.e,this.f)},a.translate=function(a,b){this.add(1,0,0,1,a,b)},a.scale=function(a,b,c,d){null==b&&(b=a),(c||d)&&this.add(1,0,0,1,c,d),this.add(a,0,0,b,0,0),(c||d)&&this.add(1,0,0,1,-c,-d)},a.rotate=function(a,b,d){a=c.rad(a),b=b||0,d=d||0;var e=+N.cos(a).toFixed(9),f=+N.sin(a).toFixed(9);this.add(e,f,-f,e,b,d),this.add(1,0,0,1,-b,-d)},a.x=function(a,b){return a*this.a+b*this.c+this.e},a.y=function(a,b){return a*this.b+b*this.d+this.f},a.get=function(a){return+this[I.fromCharCode(97+a)].toFixed(4)},a.toString=function(){return c.svg?\"matrix(\"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+\")\":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},a.toFilter=function(){return\"progid:DXImageTransform.Microsoft.Matrix(M11=\"+this.get(0)+\", M12=\"+this.get(2)+\", M21=\"+this.get(1)+\", M22=\"+this.get(3)+\", Dx=\"+this.get(4)+\", Dy=\"+this.get(5)+\", sizingmethod='auto expand')\"},a.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},a.split=function(){var a={};a.dx=this.e,a.dy=this.f;var e=[[this.a,this.c],[this.b,this.d]];a.scalex=N.sqrt(b(e[0])),d(e[0]),a.shear=e[0][0]*e[1][0]+e[0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*a.shear,e[1][1]-e[0][1]*a.shear],a.scaley=N.sqrt(b(e[1])),d(e[1]),a.shear/=a.scaley;var f=-e[0][1],g=e[1][1];return 0>g?(a.rotate=c.deg(N.acos(g)),0>f&&(a.rotate=360-a.rotate)):a.rotate=c.deg(N.asin(f)),a.isSimple=!(+a.shear.toFixed(9)||a.scalex.toFixed(9)!=a.scaley.toFixed(9)&&a.rotate),a.isSuperSimple=!+a.shear.toFixed(9)&&a.scalex.toFixed(9)==a.scaley.toFixed(9)&&!a.rotate,a.noRotation=!+a.shear.toFixed(9)&&!a.rotate,a},a.toTransformString=function(a){var b=a||this[J]();return b.isSimple?(b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4),(b.dx||b.dy?\"t\"+[b.dx,b.dy]:G)+(1!=b.scalex||1!=b.scaley?\"s\"+[b.scalex,b.scaley,0,0]:G)+(b.rotate?\"r\"+[b.rotate,0,0]:G)):\"m\"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(o.prototype);var Qb=navigator.userAgent.match(/Version\\/(.*?)\\s/)||navigator.userAgent.match(/Chrome\\/(\\d+)/);v.safari=\"Apple Computer, Inc.\"==navigator.vendor&&(Qb&&Qb[1]<4||\"iP\"==navigator.platform.slice(0,2))||\"Google Inc.\"==navigator.vendor&&Qb&&Qb[1]<8?function(){var a=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:\"none\"});setTimeout(function(){a.remove()})}:mb;for(var Rb=function(){this.returnValue=!1},Sb=function(){return this.originalEvent.preventDefault()},Tb=function(){this.cancelBubble=!0},Ub=function(){return this.originalEvent.stopPropagation()},Vb=function(a){var b=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,c=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft;return{x:a.clientX+c,y:a.clientY+b}},Wb=function(){return A.doc.addEventListener?function(a,b,c,d){var e=function(a){var b=Vb(a);return c.call(d,a,b.x,b.y)};if(a.addEventListener(b,e,!1),F&&L[b]){var f=function(b){for(var e=Vb(b),f=b,g=0,h=b.targetTouches&&b.targetTouches.length;h>g;g++)if(b.targetTouches[g].target==a){b=b.targetTouches[g],b.originalEvent=f,b.preventDefault=Sb,b.stopPropagation=Ub;break}return c.call(d,b,e.x,e.y)};a.addEventListener(L[b],f,!1)}return function(){return a.removeEventListener(b,e,!1),F&&L[b]&&a.removeEventListener(L[b],f,!1),!0}}:A.doc.attachEvent?function(a,b,c,d){var e=function(a){a=a||A.win.event;var b=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,e=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft,f=a.clientX+e,g=a.clientY+b;return a.preventDefault=a.preventDefault||Rb,a.stopPropagation=a.stopPropagation||Tb,c.call(d,a,f,g)};a.attachEvent(\"on\"+b,e);var f=function(){return a.detachEvent(\"on\"+b,e),!0};return f}:void 0}(),Xb=[],Yb=function(a){for(var c,d=a.clientX,e=a.clientY,f=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,g=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft,h=Xb.length;h--;){if(c=Xb[h],F&&a.touches){for(var i,j=a.touches.length;j--;)if(i=a.touches[j],i.identifier==c.el._drag.id){d=i.clientX,e=i.clientY,(a.originalEvent?a.originalEvent:a).preventDefault();break}}else a.preventDefault();var k,l=c.el.node,m=l.nextSibling,n=l.parentNode,o=l.style.display;A.win.opera&&n.removeChild(l),l.style.display=\"none\",k=c.el.paper.getElementByPoint(d,e),l.style.display=o,A.win.opera&&(m?n.insertBefore(l,m):n.appendChild(l)),k&&b(\"raphael.drag.over.\"+c.el.id,c.el,k),d+=g,e+=f,b(\"raphael.drag.move.\"+c.el.id,c.move_scope||c.el,d-c.el._drag.x,e-c.el._drag.y,d,e,a)}},Zb=function(a){c.unmousemove(Yb).unmouseup(Zb);for(var d,e=Xb.length;e--;)d=Xb[e],d.el._drag={},b(\"raphael.drag.end.\"+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,a);Xb=[]},$b=c.el={},_b=K.length;_b--;)!function(a){c[a]=$b[a]=function(b,d){return c.is(b,\"function\")&&(this.events=this.events||[],this.events.push({name:a,f:b,unbind:Wb(this.shape||this.node||A.doc,a,b,d||this)})),this},c[\"un\"+a]=$b[\"un\"+a]=function(b){for(var d=this.events||[],e=d.length;e--;)d[e].name!=a||!c.is(b,\"undefined\")&&d[e].f!=b||(d[e].unbind(),d.splice(e,1),!d.length&&delete this.events);return this}}(K[_b]);$b.data=function(a,d){var e=kb[this.id]=kb[this.id]||{};if(0==arguments.length)return e;if(1==arguments.length){if(c.is(a,\"object\")){for(var f in a)a[z](f)&&this.data(f,a[f]);return this}return b(\"raphael.data.get.\"+this.id,this,e[a],a),e[a]}return e[a]=d,b(\"raphael.data.set.\"+this.id,this,d,a),this},$b.removeData=function(a){return null==a?kb[this.id]={}:kb[this.id]&&delete kb[this.id][a],this},$b.getData=function(){return d(kb[this.id]||{})},$b.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},$b.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var ac=[];$b.drag=function(a,d,e,f,g,h){function i(i){(i.originalEvent||i).preventDefault();var j=i.clientX,k=i.clientY,l=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,m=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft;if(this._drag.id=i.identifier,F&&i.touches)for(var n,o=i.touches.length;o--;)if(n=i.touches[o],this._drag.id=n.identifier,n.identifier==this._drag.id){j=n.clientX,k=n.clientY;break}this._drag.x=j+m,this._drag.y=k+l,!Xb.length&&c.mousemove(Yb).mouseup(Zb),Xb.push({el:this,move_scope:f,start_scope:g,end_scope:h}),d&&b.on(\"raphael.drag.start.\"+this.id,d),a&&b.on(\"raphael.drag.move.\"+this.id,a),e&&b.on(\"raphael.drag.end.\"+this.id,e),b(\"raphael.drag.start.\"+this.id,g||f||this,i.clientX+m,i.clientY+l,i)}return this._drag={},ac.push({el:this,start:i}),this.mousedown(i),this},$b.onDragOver=function(a){a?b.on(\"raphael.drag.over.\"+this.id,a):b.unbind(\"raphael.drag.over.\"+this.id)},$b.undrag=function(){for(var a=ac.length;a--;)ac[a].el==this&&(this.unmousedown(ac[a].start),ac.splice(a,1),b.unbind(\"raphael.drag.*.\"+this.id));!ac.length&&c.unmousemove(Yb).unmouseup(Zb),Xb=[]},v.circle=function(a,b,d){var e=c._engine.circle(this,a||0,b||0,d||0);return this.__set__&&this.__set__.push(e),e},v.rect=function(a,b,d,e,f){var g=c._engine.rect(this,a||0,b||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},v.ellipse=function(a,b,d,e){var f=c._engine.ellipse(this,a||0,b||0,d||0,e||0);return this.__set__&&this.__set__.push(f),f},v.path=function(a){a&&!c.is(a,U)&&!c.is(a[0],V)&&(a+=G);var b=c._engine.path(c.format[D](c,arguments),this);return this.__set__&&this.__set__.push(b),b},v.image=function(a,b,d,e,f){var g=c._engine.image(this,a||\"about:blank\",b||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},v.text=function(a,b,d){var e=c._engine.text(this,a||0,b||0,I(d));return this.__set__&&this.__set__.push(e),e},v.set=function(a){!c.is(a,\"array\")&&(a=Array.prototype.splice.call(arguments,0,arguments.length));var b=new mc(a);return this.__set__&&this.__set__.push(b),b.paper=this,b.type=\"set\",b},v.setStart=function(a){this.__set__=a||this.set()},v.setFinish=function(){var a=this.__set__;return delete this.__set__,a},v.getSize=function(){var a=this.canvas.parentNode;return{width:a.offsetWidth,height:a.offsetHeight}},v.setSize=function(a,b){return c._engine.setSize.call(this,a,b)},v.setViewBox=function(a,b,d,e,f){return c._engine.setViewBox.call(this,a,b,d,e,f)},v.top=v.bottom=null,v.raphael=c;var bc=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,g=e.clientLeft||d.clientLeft||0,h=b.top+(A.win.pageYOffset||e.scrollTop||d.scrollTop)-f,i=b.left+(A.win.pageXOffset||e.scrollLeft||d.scrollLeft)-g;return{y:h,x:i}};v.getElementByPoint=function(a,b){var c=this,d=c.canvas,e=A.doc.elementFromPoint(a,b);if(A.win.opera&&\"svg\"==e.tagName){var f=bc(d),g=d.createSVGRect();g.x=a-f.x,g.y=b-f.y,g.width=g.height=1;var h=d.getIntersectionList(g,null);h.length&&(e=h[h.length-1])}if(!e)return null;for(;e.parentNode&&e!=d.parentNode&&!e.raphael;)e=e.parentNode;return e==c.canvas.parentNode&&(e=d),e=e&&e.raphael?c.getById(e.raphaelid):null},v.getElementsByBBox=function(a){var b=this.set();return this.forEach(function(d){c.isBBoxIntersect(d.getBBox(),a)&&b.push(d)}),b},v.getById=function(a){for(var b=this.bottom;b;){if(b.id==a)return b;b=b.next}return null},v.forEach=function(a,b){for(var c=this.bottom;c;){if(a.call(b,c)===!1)return this;c=c.next}return this},v.getElementsByPoint=function(a,b){var c=this.set();return this.forEach(function(d){d.isPointInside(a,b)&&c.push(d)}),c},$b.isPointInside=function(a,b){var d=this.realPath=qb[this.type](this);return this.attr(\"transform\")&&this.attr(\"transform\").length&&(d=c.transformPath(d,this.attr(\"transform\"))),c.isPointInsidePath(d,a,b)},$b.getBBox=function(a){if(this.removed)return{};var b=this._;return a?((b.dirty||!b.bboxwt)&&(this.realPath=qb[this.type](this),b.bboxwt=Bb(this.realPath),b.bboxwt.toString=p,b.dirty=0),b.bboxwt):((b.dirty||b.dirtyT||!b.bbox)&&((b.dirty||!this.realPath)&&(b.bboxwt=0,this.realPath=qb[this.type](this)),b.bbox=Bb(rb(this.realPath,this.matrix)),b.bbox.toString=p,b.dirty=b.dirtyT=0),b.bbox)},$b.clone=function(){if(this.removed)return null;var a=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(a),a},$b.glow=function(a){if(\"text\"==this.type)return null;a=a||{};var b={width:(a.width||10)+(+this.attr(\"stroke-width\")||1),fill:a.fill||!1,opacity:a.opacity||.5,offsetx:a.offsetx||0,offsety:a.offsety||0,color:a.color||\"#000\"},c=b.width/2,d=this.paper,e=d.set(),f=this.realPath||qb[this.type](this);f=this.matrix?rb(f,this.matrix):f;for(var g=1;c+1>g;g++)e.push(d.path(f).attr({stroke:b.color,fill:b.fill?b.color:\"none\",\"stroke-linejoin\":\"round\",\"stroke-linecap\":\"round\",\"stroke-width\":+(b.width/c*g).toFixed(3),opacity:+(b.opacity/c).toFixed(3)}));return e.insertBefore(this).translate(b.offsetx,b.offsety)};var cc=function(a,b,d,e,f,g,h,i,l){return null==l?j(a,b,d,e,f,g,h,i):c.findDotsAtSegment(a,b,d,e,f,g,h,i,k(a,b,d,e,f,g,h,i,l))},dc=function(a,b){return function(d,e,f){d=Kb(d);for(var g,h,i,j,k,l=\"\",m={},n=0,o=0,p=d.length;p>o;o++){if(i=d[o],\"M\"==i[0])g=+i[1],h=+i[2];else{if(j=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6]),n+j>e){if(b&&!m.start){if(k=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),l+=[\"C\"+k.start.x,k.start.y,k.m.x,k.m.y,k.x,k.y],f)return l;m.start=l,l=[\"M\"+k.x,k.y+\"C\"+k.n.x,k.n.y,k.end.x,k.end.y,i[5],i[6]].join(),n+=j,g=+i[5],h=+i[6];continue}if(!a&&!b)return k=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),{x:k.x,y:k.y,alpha:k.alpha}}n+=j,g=+i[5],h=+i[6]}l+=i.shift()+i}return m.end=l,k=a?n:b?m:c.findDotsAtSegment(g,h,i[0],i[1],i[2],i[3],i[4],i[5],1),k.alpha&&(k={x:k.x,y:k.y,alpha:k.alpha}),k}},ec=dc(1),fc=dc(),gc=dc(0,1);c.getTotalLength=ec,c.getPointAtLength=fc,c.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return gc(a,b).end;var d=gc(a,c,1);return b?gc(d,b).end:d},$b.getTotalLength=function(){var a=this.getPath();if(a)return this.node.getTotalLength?this.node.getTotalLength():ec(a)},$b.getPointAtLength=function(a){var b=this.getPath();if(b)return fc(b,a)},$b.getPath=function(){var a,b=c._getPath[this.type];if(\"text\"!=this.type&&\"set\"!=this.type)return b&&(a=b(this)),a},$b.getSubpath=function(a,b){var d=this.getPath();if(d)return c.getSubpath(d,a,b)};var hc=c.easing_formulas={linear:function(a){return a},\"<\":function(a){return R(a,1.7)},\">\":function(a){return R(a,.48)},\"<>\":function(a){var b=.48-a/1.04,c=N.sqrt(.1734+b*b),d=c-b,e=R(Q(d),1/3)*(0>d?-1:1),f=-c-b,g=R(Q(f),1/3)*(0>f?-1:1),h=e+g+.5;return 3*(1-h)*h*h+h*h*h},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a-=1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){return a==!!a?a:R(2,-10*a)*N.sin(2*(a-.075)*S/.3)+1},bounce:function(a){var b,c=7.5625,d=2.75;return 1/d>a?b=c*a*a:2/d>a?(a-=1.5/d,b=c*a*a+.75):2.5/d>a?(a-=2.25/d,b=c*a*a+.9375):(a-=2.625/d,b=c*a*a+.984375),b}};hc.easeIn=hc[\"ease-in\"]=hc[\"<\"],hc.easeOut=hc[\"ease-out\"]=hc[\">\"],hc.easeInOut=hc[\"ease-in-out\"]=hc[\"<>\"],hc[\"back-in\"]=hc.backIn,hc[\"back-out\"]=hc.backOut;var ic=[],jc=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(a){setTimeout(a,16)},kc=function(){for(var a=+new Date,d=0;d<ic.length;d++){var e=ic[d];if(!e.el.removed&&!e.paused){var f,g,h=a-e.start,i=e.ms,j=e.easing,k=e.from,l=e.diff,m=e.to,n=(e.t,e.el),o={},p={};if(e.initstatus?(h=(e.initstatus*e.anim.top-e.prev)/(e.percent-e.prev)*i,e.status=e.initstatus,delete e.initstatus,e.stop&&ic.splice(d--,1)):e.status=(e.prev+(e.percent-e.prev)*(h/i))/e.anim.top,!(0>h))if(i>h){var q=j(h/i);for(var r in k)if(k[z](r)){switch(db[r]){case T:f=+k[r]+q*i*l[r];break;case\"colour\":f=\"rgb(\"+[lc($(k[r].r+q*i*l[r].r)),lc($(k[r].g+q*i*l[r].g)),lc($(k[r].b+q*i*l[r].b))].join(\",\")+\")\";break;case\"path\":f=[];for(var t=0,u=k[r].length;u>t;t++){f[t]=[k[r][t][0]];for(var v=1,w=k[r][t].length;w>v;v++)f[t][v]=+k[r][t][v]+q*i*l[r][t][v];f[t]=f[t].join(H)}f=f.join(H);break;case\"transform\":if(l[r].real)for(f=[],t=0,u=k[r].length;u>t;t++)for(f[t]=[k[r][t][0]],v=1,w=k[r][t].length;w>v;v++)f[t][v]=k[r][t][v]+q*i*l[r][t][v];else{var x=function(a){return+k[r][a]+q*i*l[r][a]};f=[[\"m\",x(0),x(1),x(2),x(3),x(4),x(5)]]}break;case\"csv\":if(\"clip-rect\"==r)for(f=[],t=4;t--;)f[t]=+k[r][t]+q*i*l[r][t];break;default:var y=[][E](k[r]);for(f=[],t=n.paper.customAttributes[r].length;t--;)f[t]=+y[t]+q*i*l[r][t]}o[r]=f}n.attr(o),function(a,c,d){setTimeout(function(){b(\"raphael.anim.frame.\"+a,c,d)})}(n.id,n,e.anim)}else{if(function(a,d,e){setTimeout(function(){b(\"raphael.anim.frame.\"+d.id,d,e),b(\"raphael.anim.finish.\"+d.id,d,e),c.is(a,\"function\")&&a.call(d)})}(e.callback,n,e.anim),n.attr(m),ic.splice(d--,1),e.repeat>1&&!e.next){for(g in m)m[z](g)&&(p[g]=e.totalOrigin[g]);e.el.attr(p),s(e.anim,e.el,e.anim.percents[0],null,e.totalOrigin,e.repeat-1)}e.next&&!e.stop&&s(e.anim,e.el,e.next,null,e.totalOrigin,e.repeat)}}}c.svg&&n&&n.paper&&n.paper.safari(),ic.length&&jc(kc)},lc=function(a){return a>255?255:0>a?0:a};$b.animateWith=function(a,b,d,e,f,g){var h=this;if(h.removed)return g&&g.call(h),h;var i=d instanceof r?d:c.animation(d,e,f,g);s(i,h,i.percents[0],null,h.attr());for(var j=0,k=ic.length;k>j;j++)if(ic[j].anim==b&&ic[j].el==a){ic[k-1].start=ic[j].start;break}return h},$b.onAnimation=function(a){return a?b.on(\"raphael.anim.frame.\"+this.id,a):b.unbind(\"raphael.anim.frame.\"+this.id),this},r.prototype.delay=function(a){var b=new r(this.anim,this.ms);return b.times=this.times,b.del=+a||0,b},r.prototype.repeat=function(a){var b=new r(this.anim,this.ms);return b.del=this.del,b.times=N.floor(O(a,0))||1,b},c.animation=function(a,b,d,e){if(a instanceof r)return a;(c.is(d,\"function\")||!d)&&(e=e||d||null,d=null),a=Object(a),b=+b||0;var f,g,h={};for(g in a)a[z](g)&&_(g)!=g&&_(g)+\"%\"!=g&&(f=!0,h[g]=a[g]);if(f)return d&&(h.easing=d),e&&(h.callback=e),new r({100:h},b);if(e){var i=0;for(var j in a){var k=ab(j);a[z](j)&&k>i&&(i=k)}i+=\"%\",!a[i].callback&&(a[i].callback=e)}return new r(a,b)},$b.animate=function(a,b,d,e){var f=this;if(f.removed)return e&&e.call(f),f;var g=a instanceof r?a:c.animation(a,b,d,e);return s(g,f,g.percents[0],null,f.attr()),f},$b.setTime=function(a,b){return a&&null!=b&&this.status(a,P(b,a.ms)/a.ms),this},$b.status=function(a,b){var c,d,e=[],f=0;if(null!=b)return s(a,this,-1,P(b,1)),this;for(c=ic.length;c>f;f++)if(d=ic[f],d.el.id==this.id&&(!a||d.anim==a)){if(a)return d.status;e.push({anim:d.anim,status:d.status})}return a?0:e},$b.pause=function(a){for(var c=0;c<ic.length;c++)ic[c].el.id!=this.id||a&&ic[c].anim!=a||b(\"raphael.anim.pause.\"+this.id,this,ic[c].anim)!==!1&&(ic[c].paused=!0);return this},$b.resume=function(a){for(var c=0;c<ic.length;c++)if(ic[c].el.id==this.id&&(!a||ic[c].anim==a)){var d=ic[c];b(\"raphael.anim.resume.\"+this.id,this,d.anim)!==!1&&(delete d.paused,this.status(d.anim,d.status))}return this},$b.stop=function(a){for(var c=0;c<ic.length;c++)ic[c].el.id!=this.id||a&&ic[c].anim!=a||b(\"raphael.anim.stop.\"+this.id,this,ic[c].anim)!==!1&&ic.splice(c--,1);return this},b.on(\"raphael.remove\",t),b.on(\"raphael.clear\",t),$b.toString=function(){return\"Raphaël’s object\"};var mc=function(a){if(this.items=[],this.length=0,this.type=\"set\",a)for(var b=0,c=a.length;c>b;b++)!a[b]||a[b].constructor!=$b.constructor&&a[b].constructor!=mc||(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},nc=mc.prototype;nc.push=function(){for(var a,b,c=0,d=arguments.length;d>c;c++)a=arguments[c],!a||a.constructor!=$b.constructor&&a.constructor!=mc||(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},nc.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},nc.forEach=function(a,b){for(var c=0,d=this.items.length;d>c;c++)if(a.call(b,this.items[c],c)===!1)return this;return this};for(var oc in $b)$b[z](oc)&&(nc[oc]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a][D](c,b)})}}(oc));return nc.attr=function(a,b){if(a&&c.is(a,V)&&c.is(a[0],\"object\"))for(var d=0,e=a.length;e>d;d++)this.items[d].attr(a[d]);else for(var f=0,g=this.items.length;g>f;f++)this.items[f].attr(a,b);return this},nc.clear=function(){for(;this.length;)this.pop()},nc.splice=function(a,b){a=0>a?O(this.length+a,0):a,b=O(0,P(this.length-a,b));var c,d=[],e=[],f=[];for(c=2;c<arguments.length;c++)f.push(arguments[c]);for(c=0;b>c;c++)e.push(this[a+c]);for(;c<this.length-a;c++)d.push(this[a+c]);var g=f.length;for(c=0;c<g+d.length;c++)this.items[a+c]=this[a+c]=g>c?f[c]:d[c-g];for(c=this.items.length=this.length-=b-g;this[c];)delete this[c++];return new mc(e)},nc.exclude=function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]==a)return this.splice(b,1),!0},nc.animate=function(a,b,d,e){(c.is(d,\"function\")||!d)&&(e=d||null);var f,g,h=this.items.length,i=h,j=this;if(!h)return this;e&&(g=function(){!--h&&e.call(j)}),d=c.is(d,U)?d:g;var k=c.animation(a,b,d,g);for(f=this.items[--i].animate(k);i--;)this.items[i]&&!this.items[i].removed&&this.items[i].animateWith(f,k,k),this.items[i]&&!this.items[i].removed||h--;return this},nc.insertAfter=function(a){for(var b=this.items.length;b--;)this.items[b].insertAfter(a);return this},nc.getBBox=function(){for(var a=[],b=[],c=[],d=[],e=this.items.length;e--;)if(!this.items[e].removed){var f=this.items[e].getBBox();a.push(f.x),b.push(f.y),c.push(f.x+f.width),d.push(f.y+f.height)}return a=P[D](0,a),b=P[D](0,b),c=O[D](0,c),d=O[D](0,d),{x:a,y:b,x2:c,y2:d,width:c-a,height:d-b}},nc.clone=function(a){a=this.paper.set();for(var b=0,c=this.items.length;c>b;b++)a.push(this.items[b].clone());return a},nc.toString=function(){return\"Raphaël‘s set\"},nc.glow=function(a){var b=this.paper.set();return this.forEach(function(c){var d=c.glow(a);null!=d&&d.forEach(function(a){b.push(a)})}),b},nc.isPointInside=function(a,b){var c=!1;return this.forEach(function(d){return d.isPointInside(a,b)?(c=!0,!1):void 0}),c},c.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face[\"font-family\"];for(var d in a.face)a.face[z](d)&&(b.face[d]=a.face[d]);if(this.fonts[c]?this.fonts[c].push(b):this.fonts[c]=[b],!a.svg){b.face[\"units-per-em\"]=ab(a.face[\"units-per-em\"],10);for(var e in a.glyphs)if(a.glyphs[z](e)){var f=a.glyphs[e];if(b.glyphs[e]={w:f.w,k:{},d:f.d&&\"M\"+f.d.replace(/[mlcxtrv]/g,function(a){return{l:\"L\",c:\"C\",x:\"z\",t:\"m\",r:\"l\",v:\"c\"}[a]||\"M\"})+\"z\"},f.k)for(var g in f.k)f[z](g)&&(b.glyphs[e].k[g]=f.k[g])}}return a},v.getFont=function(a,b,d,e){if(e=e||\"normal\",d=d||\"normal\",b=+b||{normal:400,bold:700,lighter:300,bolder:800}[b]||400,c.fonts){var f=c.fonts[a];if(!f){var g=new RegExp(\"(^|\\\\s)\"+a.replace(/[^\\w\\d\\s+!~.:_-]/g,G)+\"(\\\\s|$)\",\"i\");for(var h in c.fonts)if(c.fonts[z](h)&&g.test(h)){f=c.fonts[h];break}}var i;if(f)for(var j=0,k=f.length;k>j&&(i=f[j],i.face[\"font-weight\"]!=b||i.face[\"font-style\"]!=d&&i.face[\"font-style\"]||i.face[\"font-stretch\"]!=e);j++);return i}},v.print=function(a,b,d,e,f,g,h,i){g=g||\"middle\",h=O(P(h||0,1),-1),i=O(P(i||1,3),1);var j,k=I(d)[J](G),l=0,m=0,n=G;if(c.is(e,\"string\")&&(e=this.getFont(e)),e){j=(f||16)/e.face[\"units-per-em\"];for(var o=e.face.bbox[J](w),p=+o[0],q=o[3]-o[1],r=0,s=+o[1]+(\"baseline\"==g?q+ +e.face.descent:q/2),t=0,u=k.length;u>t;t++){if(\"\\n\"==k[t])l=0,x=0,m=0,r+=q*i;else{var v=m&&e.glyphs[k[t-1]]||{},x=e.glyphs[k[t]];l+=m?(v.w||e.w)+(v.k&&v.k[k[t]]||0)+e.w*h:0,m=1}x&&x.d&&(n+=c.transformPath(x.d,[\"t\",l*j,r*j,\"s\",j,j,p,s,\"t\",(a-p)/j,(b-s)/j]))}}return this.path(n).attr({fill:\"#000\",stroke:\"none\"})},v.add=function(a){if(c.is(a,\"array\"))for(var b,d=this.set(),e=0,f=a.length;f>e;e++)b=a[e]||{},x[z](b.type)&&d.push(this[b.type]().attr(b));return d},c.format=function(a,b){var d=c.is(b,V)?[0][E](b):arguments;return a&&c.is(a,U)&&d.length-1&&(a=a.replace(y,function(a,b){return null==d[++b]?G:d[b]})),a||G},c.fullfill=function(){var a=/\\{([^\\}]+)\\}/g,b=/(?:(?:^|\\.)(.+?)(?=\\[|\\.|$|\\()|\\[('|\")(.+?)\\2\\])(\\(\\))?/g,c=function(a,c,d){var e=d;return c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),\"function\"==typeof e&&f&&(e=e()))}),e=(null==e||e==d?a:e)+\"\"};return function(b,d){return String(b).replace(a,function(a,b){return c(a,b,d)})}}(),c.ninja=function(){return B.was?A.win.Raphael=B.is:delete Raphael,c},c.st=nc,b.on(\"raphael.DOMload\",function(){u=!0}),function(a,b,d){function e(){/in/.test(a.readyState)?setTimeout(e,9):c.eve(\"raphael.DOMload\")}null==a.readyState&&a.addEventListener&&(a.addEventListener(b,d=function(){a.removeEventListener(b,d,!1),a.readyState=\"complete\"},!1),a.readyState=\"loading\"),e()}(document,\"DOMContentLoaded\"),function(){if(c.svg){var a=\"hasOwnProperty\",b=String,d=parseFloat,e=parseInt,f=Math,g=f.max,h=f.abs,i=f.pow,j=/[, ]+/,k=c.eve,l=\"\",m=\" \",n=\"http://www.w3.org/1999/xlink\",o={block:\"M5,0 0,2.5 5,5z\",classic:\"M5,0 0,2.5 5,5 3.5,3 3.5,2z\",diamond:\"M2.5,0 5,2.5 2.5,5 0,2.5z\",open:\"M6,1 1,3.5 6,6\",oval:\"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z\"},p={};c.toString=function(){return\"Your browser supports SVG.\\nYou are running Raphaël \"+this.version};var q=function(d,e){if(e){\"string\"==typeof d&&(d=q(d));for(var f in e)e[a](f)&&(\"xlink:\"==f.substring(0,6)?d.setAttributeNS(n,f.substring(6),b(e[f])):d.setAttribute(f,b(e[f])))}else d=c._g.doc.createElementNS(\"http://www.w3.org/2000/svg\",d),d.style&&(d.style.webkitTapHighlightColor=\"rgba(0,0,0,0)\");return d},r=function(a,e){var j=\"linear\",k=a.id+e,m=.5,n=.5,o=a.node,p=a.paper,r=o.style,s=c._g.doc.getElementById(k);if(!s){if(e=b(e).replace(c._radial_gradient,function(a,b,c){if(j=\"radial\",b&&c){m=d(b),n=d(c);var e=2*(n>.5)-1;i(m-.5,2)+i(n-.5,2)>.25&&(n=f.sqrt(.25-i(m-.5,2))*e+.5)&&.5!=n&&(n=n.toFixed(5)-1e-5*e)}return l}),e=e.split(/\\s*\\-\\s*/),\"linear\"==j){var t=e.shift();if(t=-d(t),isNaN(t))return null;var u=[0,0,f.cos(c.rad(t)),f.sin(c.rad(t))],v=1/(g(h(u[2]),h(u[3]))||1);u[2]*=v,u[3]*=v,u[2]<0&&(u[0]=-u[2],u[2]=0),u[3]<0&&(u[1]=-u[3],u[3]=0)}var w=c._parseDots(e);if(!w)return null;if(k=k.replace(/[\\(\\)\\s,\\xb0#]/g,\"_\"),a.gradient&&k!=a.gradient.id&&(p.defs.removeChild(a.gradient),delete a.gradient),!a.gradient){s=q(j+\"Gradient\",{id:k}),a.gradient=s,q(s,\"radial\"==j?{fx:m,fy:n}:{x1:u[0],y1:u[1],x2:u[2],y2:u[3],gradientTransform:a.matrix.invert()}),p.defs.appendChild(s);for(var x=0,y=w.length;y>x;x++)s.appendChild(q(\"stop\",{offset:w[x].offset?w[x].offset:x?\"100%\":\"0%\",\"stop-color\":w[x].color||\"#fff\"}))}}return q(o,{fill:\"url('\"+document.location+\"#\"+k+\"')\",opacity:1,\"fill-opacity\":1}),r.fill=l,r.opacity=1,r.fillOpacity=1,1},s=function(a){var b=a.getBBox(1);q(a.pattern,{patternTransform:a.matrix.invert()+\" translate(\"+b.x+\",\"+b.y+\")\"})},t=function(d,e,f){if(\"path\"==d.type){for(var g,h,i,j,k,m=b(e).toLowerCase().split(\"-\"),n=d.paper,r=f?\"end\":\"start\",s=d.node,t=d.attrs,u=t[\"stroke-width\"],v=m.length,w=\"classic\",x=3,y=3,z=5;v--;)switch(m[v]){case\"block\":case\"classic\":case\"oval\":case\"diamond\":case\"open\":case\"none\":w=m[v];break;case\"wide\":y=5;break;case\"narrow\":y=2;break;case\"long\":x=5;break;case\"short\":x=2}if(\"open\"==w?(x+=2,y+=2,z+=2,i=1,j=f?4:1,k={fill:\"none\",stroke:t.stroke}):(j=i=x/2,k={fill:t.stroke,stroke:\"none\"}),d._.arrows?f?(d._.arrows.endPath&&p[d._.arrows.endPath]--,d._.arrows.endMarker&&p[d._.arrows.endMarker]--):(d._.arrows.startPath&&p[d._.arrows.startPath]--,d._.arrows.startMarker&&p[d._.arrows.startMarker]--):d._.arrows={},\"none\"!=w){var A=\"raphael-marker-\"+w,B=\"raphael-marker-\"+r+w+x+y+\"-obj\"+d.id;c._g.doc.getElementById(A)?p[A]++:(n.defs.appendChild(q(q(\"path\"),{\"stroke-linecap\":\"round\",d:o[w],id:A})),p[A]=1);var C,D=c._g.doc.getElementById(B);D?(p[B]++,C=D.getElementsByTagName(\"use\")[0]):(D=q(q(\"marker\"),{id:B,markerHeight:y,markerWidth:x,orient:\"auto\",refX:j,refY:y/2}),C=q(q(\"use\"),{\"xlink:href\":\"#\"+A,transform:(f?\"rotate(180 \"+x/2+\" \"+y/2+\") \":l)+\"scale(\"+x/z+\",\"+y/z+\")\",\"stroke-width\":(1/((x/z+y/z)/2)).toFixed(4)}),D.appendChild(C),n.defs.appendChild(D),p[B]=1),q(C,k);var E=i*(\"diamond\"!=w&&\"oval\"!=w);f?(g=d._.arrows.startdx*u||0,h=c.getTotalLength(t.path)-E*u):(g=E*u,h=c.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),k={},k[\"marker-\"+r]=\"url(#\"+B+\")\",(h||g)&&(k.d=c.getSubpath(t.path,g,h)),q(s,k),d._.arrows[r+\"Path\"]=A,d._.arrows[r+\"Marker\"]=B,d._.arrows[r+\"dx\"]=E,d._.arrows[r+\"Type\"]=w,d._.arrows[r+\"String\"]=e}else f?(g=d._.arrows.startdx*u||0,h=c.getTotalLength(t.path)-g):(g=0,h=c.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),d._.arrows[r+\"Path\"]&&q(s,{d:c.getSubpath(t.path,g,h)}),delete d._.arrows[r+\"Path\"],delete d._.arrows[r+\"Marker\"],delete d._.arrows[r+\"dx\"],delete d._.arrows[r+\"Type\"],delete d._.arrows[r+\"String\"];for(k in p)if(p[a](k)&&!p[k]){var F=c._g.doc.getElementById(k);F&&F.parentNode.removeChild(F)}}},u={\"\":[0],none:[0],\"-\":[3,1],\".\":[1,1],\"-.\":[3,1,1,1],\"-..\":[3,1,1,1,1,1],\". \":[1,3],\"- \":[4,3],\"--\":[8,3],\"- .\":[4,3,1,3],\"--.\":[8,3,1,3],\"--..\":[8,3,1,3,1,3]},v=function(a,c,d){if(c=u[b(c).toLowerCase()]){for(var e=a.attrs[\"stroke-width\"]||\"1\",f={round:e,square:e,butt:0}[a.attrs[\"stroke-linecap\"]||d[\"stroke-linecap\"]]||0,g=[],h=c.length;h--;)g[h]=c[h]*e+(h%2?1:-1)*f;q(a.node,{\"stroke-dasharray\":g.join(\",\")})}},w=function(d,f){var i=d.node,k=d.attrs,m=i.style.visibility;i.style.visibility=\"hidden\";for(var o in f)if(f[a](o)){if(!c._availableAttrs[a](o))continue;var p=f[o];switch(k[o]=p,o){case\"blur\":d.blur(p);break;case\"title\":var u=i.getElementsByTagName(\"title\");if(u.length&&(u=u[0]))u.firstChild.nodeValue=p;else{u=q(\"title\");var w=c._g.doc.createTextNode(p);u.appendChild(w),i.appendChild(u)}break;case\"href\":case\"target\":var x=i.parentNode;if(\"a\"!=x.tagName.toLowerCase()){var z=q(\"a\");x.insertBefore(z,i),z.appendChild(i),x=z}\"target\"==o?x.setAttributeNS(n,\"show\",\"blank\"==p?\"new\":p):x.setAttributeNS(n,o,p);break;case\"cursor\":i.style.cursor=p;break;case\"transform\":d.transform(p);break;case\"arrow-start\":t(d,p);break;case\"arrow-end\":t(d,p,1);break;case\"clip-rect\":var A=b(p).split(j);if(4==A.length){d.clip&&d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);var B=q(\"clipPath\"),C=q(\"rect\");B.id=c.createUUID(),q(C,{x:A[0],y:A[1],width:A[2],height:A[3]}),B.appendChild(C),d.paper.defs.appendChild(B),q(i,{\"clip-path\":\"url(#\"+B.id+\")\"}),d.clip=C}if(!p){var D=i.getAttribute(\"clip-path\");if(D){var E=c._g.doc.getElementById(D.replace(/(^url\\(#|\\)$)/g,l));E&&E.parentNode.removeChild(E),q(i,{\"clip-path\":l}),delete d.clip}}break;case\"path\":\"path\"==d.type&&(q(i,{d:p?k.path=c._pathToAbsolute(p):\"M0,0\"}),d._.dirty=1,d._.arrows&&(\"startString\"in d._.arrows&&t(d,d._.arrows.startString),\"endString\"in d._.arrows&&t(d,d._.arrows.endString,1)));break;case\"width\":if(i.setAttribute(o,p),d._.dirty=1,!k.fx)break;o=\"x\",p=k.x;case\"x\":k.fx&&(p=-k.x-(k.width||0));case\"rx\":if(\"rx\"==o&&\"rect\"==d.type)break;case\"cx\":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case\"height\":if(i.setAttribute(o,p),d._.dirty=1,!k.fy)break;o=\"y\",p=k.y;case\"y\":k.fy&&(p=-k.y-(k.height||0));case\"ry\":if(\"ry\"==o&&\"rect\"==d.type)break;case\"cy\":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case\"r\":\"rect\"==d.type?q(i,{rx:p,ry:p}):i.setAttribute(o,p),d._.dirty=1;break;case\"src\":\"image\"==d.type&&i.setAttributeNS(n,\"href\",p);break;case\"stroke-width\":(1!=d._.sx||1!=d._.sy)&&(p/=g(h(d._.sx),h(d._.sy))||1),i.setAttribute(o,p),k[\"stroke-dasharray\"]&&v(d,k[\"stroke-dasharray\"],f),d._.arrows&&(\"startString\"in d._.arrows&&t(d,d._.arrows.startString),\"endString\"in d._.arrows&&t(d,d._.arrows.endString,1));break;case\"stroke-dasharray\":v(d,p,f);break;case\"fill\":var F=b(p).match(c._ISURL);if(F){B=q(\"pattern\");var G=q(\"image\");B.id=c.createUUID(),q(B,{x:0,y:0,patternUnits:\"userSpaceOnUse\",height:1,width:1}),q(G,{x:0,y:0,\"xlink:href\":F[1]}),B.appendChild(G),function(a){c._preload(F[1],function(){var b=this.offsetWidth,c=this.offsetHeight;q(a,{width:b,height:c}),q(G,{width:b,height:c}),d.paper.safari()})}(B),d.paper.defs.appendChild(B),q(i,{fill:\"url(#\"+B.id+\")\"}),d.pattern=B,d.pattern&&s(d);break}var H=c.getRGB(p);if(H.error){if((\"circle\"==d.type||\"ellipse\"==d.type||\"r\"!=b(p).charAt())&&r(d,p)){if(\"opacity\"in k||\"fill-opacity\"in k){var I=c._g.doc.getElementById(i.getAttribute(\"fill\").replace(/^url\\(#|\\)$/g,l));if(I){var J=I.getElementsByTagName(\"stop\");q(J[J.length-1],{\"stop-opacity\":(\"opacity\"in k?k.opacity:1)*(\"fill-opacity\"in k?k[\"fill-opacity\"]:1)})}}k.gradient=p,k.fill=\"none\";break}}else delete f.gradient,delete k.gradient,!c.is(k.opacity,\"undefined\")&&c.is(f.opacity,\"undefined\")&&q(i,{opacity:k.opacity}),!c.is(k[\"fill-opacity\"],\"undefined\")&&c.is(f[\"fill-opacity\"],\"undefined\")&&q(i,{\"fill-opacity\":k[\"fill-opacity\"]});H[a](\"opacity\")&&q(i,{\"fill-opacity\":H.opacity>1?H.opacity/100:H.opacity});case\"stroke\":H=c.getRGB(p),i.setAttribute(o,H.hex),\"stroke\"==o&&H[a](\"opacity\")&&q(i,{\"stroke-opacity\":H.opacity>1?H.opacity/100:H.opacity}),\"stroke\"==o&&d._.arrows&&(\"startString\"in d._.arrows&&t(d,d._.arrows.startString),\"endString\"in d._.arrows&&t(d,d._.arrows.endString,1));break;case\"gradient\":(\"circle\"==d.type||\"ellipse\"==d.type||\"r\"!=b(p).charAt())&&r(d,p);break;" + 
"case\"opacity\":k.gradient&&!k[a](\"stroke-opacity\")&&q(i,{\"stroke-opacity\":p>1?p/100:p});case\"fill-opacity\":if(k.gradient){I=c._g.doc.getElementById(i.getAttribute(\"fill\").replace(/^url\\(#|\\)$/g,l)),I&&(J=I.getElementsByTagName(\"stop\"),q(J[J.length-1],{\"stop-opacity\":p}));break}default:\"font-size\"==o&&(p=e(p,10)+\"px\");var K=o.replace(/(\\-.)/g,function(a){return a.substring(1).toUpperCase()});i.style[K]=p,d._.dirty=1,i.setAttribute(o,p)}}y(d,f),i.style.visibility=m},x=1.2,y=function(d,f){if(\"text\"==d.type&&(f[a](\"text\")||f[a](\"font\")||f[a](\"font-size\")||f[a](\"x\")||f[a](\"y\"))){var g=d.attrs,h=d.node,i=h.firstChild?e(c._g.doc.defaultView.getComputedStyle(h.firstChild,l).getPropertyValue(\"font-size\"),10):10;if(f[a](\"text\")){for(g.text=f.text;h.firstChild;)h.removeChild(h.firstChild);for(var j,k=b(f.text).split(\"\\n\"),m=[],n=0,o=k.length;o>n;n++)j=q(\"tspan\"),n&&q(j,{dy:i*x,x:g.x}),j.appendChild(c._g.doc.createTextNode(k[n])),h.appendChild(j),m[n]=j}else for(m=h.getElementsByTagName(\"tspan\"),n=0,o=m.length;o>n;n++)n?q(m[n],{dy:i*x,x:g.x}):q(m[0],{dy:0});q(h,{x:g.x,y:g.y}),d._.dirty=1;var p=d._getBBox(),r=g.y-(p.y+p.height/2);r&&c.is(r,\"finite\")&&q(m[0],{dy:r})}},z=function(a){return a.parentNode&&\"a\"===a.parentNode.tagName.toLowerCase()?a.parentNode:a},A=function(a,b){this[0]=this.node=a,a.raphael=!0,this.id=c._oid++,a.raphaelid=this.id,this.matrix=c.matrix(),this.realPath=null,this.paper=b,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!b.bottom&&(b.bottom=this),this.prev=b.top,b.top&&(b.top.next=this),b.top=this,this.next=null},B=c.el;A.prototype=B,B.constructor=A,c._engine.path=function(a,b){var c=q(\"path\");b.canvas&&b.canvas.appendChild(c);var d=new A(c,b);return d.type=\"path\",w(d,{fill:\"none\",stroke:\"#000\",path:a}),d},B.rotate=function(a,c,e){if(this.removed)return this;if(a=b(a).split(j),a.length-1&&(c=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(c=e),null==c||null==e){var f=this.getBBox(1);c=f.x+f.width/2,e=f.y+f.height/2}return this.transform(this._.transform.concat([[\"r\",a,c,e]])),this},B.scale=function(a,c,e,f){if(this.removed)return this;if(a=b(a).split(j),a.length-1&&(c=d(a[1]),e=d(a[2]),f=d(a[3])),a=d(a[0]),null==c&&(c=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([[\"s\",a,c,e,f]])),this},B.translate=function(a,c){return this.removed?this:(a=b(a).split(j),a.length-1&&(c=d(a[1])),a=d(a[0])||0,c=+c||0,this.transform(this._.transform.concat([[\"t\",a,c]])),this)},B.transform=function(b){var d=this._;if(null==b)return d.transform;if(c._extractTransform(this,b),this.clip&&q(this.clip,{transform:this.matrix.invert()}),this.pattern&&s(this),this.node&&q(this.node,{transform:this.matrix}),1!=d.sx||1!=d.sy){var e=this.attrs[a](\"stroke-width\")?this.attrs[\"stroke-width\"]:1;this.attr({\"stroke-width\":e})}return this},B.hide=function(){return!this.removed&&this.paper.safari(this.node.style.display=\"none\"),this},B.show=function(){return!this.removed&&this.paper.safari(this.node.style.display=\"\"),this},B.remove=function(){var a=z(this.node);if(!this.removed&&a.parentNode){var b=this.paper;b.__set__&&b.__set__.exclude(this),k.unbind(\"raphael.*.*.\"+this.id),this.gradient&&b.defs.removeChild(this.gradient),c._tear(this,b),a.parentNode.removeChild(a),this.removeData();for(var d in this)this[d]=\"function\"==typeof this[d]?c._removedFactory(d):null;this.removed=!0}},B._getBBox=function(){if(\"none\"==this.node.style.display){this.show();var a=!0}var b,c=!1;this.paper.canvas.parentElement?b=this.paper.canvas.parentElement.style:this.paper.canvas.parentNode&&(b=this.paper.canvas.parentNode.style),b&&\"none\"==b.display&&(c=!0,b.display=\"\");var d={};try{d=this.node.getBBox()}catch(e){d={x:this.node.clientLeft,y:this.node.clientTop,width:this.node.clientWidth,height:this.node.clientHeight}}finally{d=d||{},c&&(b.display=\"none\")}return a&&this.hide(),d},B.attr=function(b,d){if(this.removed)return this;if(null==b){var e={};for(var f in this.attrs)this.attrs[a](f)&&(e[f]=this.attrs[f]);return e.gradient&&\"none\"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&c.is(b,\"string\")){if(\"fill\"==b&&\"none\"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if(\"transform\"==b)return this._.transform;for(var g=b.split(j),h={},i=0,l=g.length;l>i;i++)b=g[i],h[b]=b in this.attrs?this.attrs[b]:c.is(this.paper.customAttributes[b],\"function\")?this.paper.customAttributes[b].def:c._availableAttrs[b];return l-1?h:h[g[0]]}if(null==d&&c.is(b,\"array\")){for(h={},i=0,l=b.length;l>i;i++)h[b[i]]=this.attr(b[i]);return h}if(null!=d){var m={};m[b]=d}else null!=b&&c.is(b,\"object\")&&(m=b);for(var n in m)k(\"raphael.attr.\"+n+\".\"+this.id,this,m[n]);for(n in this.paper.customAttributes)if(this.paper.customAttributes[a](n)&&m[a](n)&&c.is(this.paper.customAttributes[n],\"function\")){var o=this.paper.customAttributes[n].apply(this,[].concat(m[n]));this.attrs[n]=m[n];for(var p in o)o[a](p)&&(m[p]=o[p])}return w(this,m),this},B.toFront=function(){if(this.removed)return this;var a=z(this.node);a.parentNode.appendChild(a);var b=this.paper;return b.top!=this&&c._tofront(this,b),this},B.toBack=function(){if(this.removed)return this;var a=z(this.node),b=a.parentNode;b.insertBefore(a,b.firstChild),c._toback(this,this.paper);this.paper;return this},B.insertAfter=function(a){if(this.removed||!a)return this;var b=z(this.node),d=z(a.node||a[a.length-1].node);return d.nextSibling?d.parentNode.insertBefore(b,d.nextSibling):d.parentNode.appendChild(b),c._insertafter(this,a,this.paper),this},B.insertBefore=function(a){if(this.removed||!a)return this;var b=z(this.node),d=z(a.node||a[0].node);return d.parentNode.insertBefore(b,d),c._insertbefore(this,a,this.paper),this},B.blur=function(a){var b=this;if(0!==+a){var d=q(\"filter\"),e=q(\"feGaussianBlur\");b.attrs.blur=a,d.id=c.createUUID(),q(e,{stdDeviation:+a||1.5}),d.appendChild(e),b.paper.defs.appendChild(d),b._blur=d,q(b.node,{filter:\"url(#\"+d.id+\")\"})}else b._blur&&(b._blur.parentNode.removeChild(b._blur),delete b._blur,delete b.attrs.blur),b.node.removeAttribute(\"filter\");return b},c._engine.circle=function(a,b,c,d){var e=q(\"circle\");a.canvas&&a.canvas.appendChild(e);var f=new A(e,a);return f.attrs={cx:b,cy:c,r:d,fill:\"none\",stroke:\"#000\"},f.type=\"circle\",q(e,f.attrs),f},c._engine.rect=function(a,b,c,d,e,f){var g=q(\"rect\");a.canvas&&a.canvas.appendChild(g);var h=new A(g,a);return h.attrs={x:b,y:c,width:d,height:e,rx:f||0,ry:f||0,fill:\"none\",stroke:\"#000\"},h.type=\"rect\",q(g,h.attrs),h},c._engine.ellipse=function(a,b,c,d,e){var f=q(\"ellipse\");a.canvas&&a.canvas.appendChild(f);var g=new A(f,a);return g.attrs={cx:b,cy:c,rx:d,ry:e,fill:\"none\",stroke:\"#000\"},g.type=\"ellipse\",q(f,g.attrs),g},c._engine.image=function(a,b,c,d,e,f){var g=q(\"image\");q(g,{x:c,y:d,width:e,height:f,preserveAspectRatio:\"none\"}),g.setAttributeNS(n,\"href\",b),a.canvas&&a.canvas.appendChild(g);var h=new A(g,a);return h.attrs={x:c,y:d,width:e,height:f,src:b},h.type=\"image\",h},c._engine.text=function(a,b,d,e){var f=q(\"text\");a.canvas&&a.canvas.appendChild(f);var g=new A(f,a);return g.attrs={x:b,y:d,\"text-anchor\":\"middle\",text:e,\"font-family\":c._availableAttrs[\"font-family\"],\"font-size\":c._availableAttrs[\"font-size\"],stroke:\"none\",fill:\"#000\"},g.type=\"text\",w(g,g.attrs),g},c._engine.setSize=function(a,b){return this.width=a||this.width,this.height=b||this.height,this.canvas.setAttribute(\"width\",this.width),this.canvas.setAttribute(\"height\",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},c._engine.create=function(){var a=c._getContainer.apply(0,arguments),b=a&&a.container,d=a.x,e=a.y,f=a.width,g=a.height;if(!b)throw new Error(\"SVG container not found.\");var h,i=q(\"svg\"),j=\"overflow:hidden;\";return d=d||0,e=e||0,f=f||512,g=g||342,q(i,{height:g,version:1.1,width:f,xmlns:\"http://www.w3.org/2000/svg\",\"xmlns:xlink\":\"http://www.w3.org/1999/xlink\"}),1==b?(i.style.cssText=j+\"position:absolute;left:\"+d+\"px;top:\"+e+\"px\",c._g.doc.body.appendChild(i),h=1):(i.style.cssText=j+\"position:relative\",b.firstChild?b.insertBefore(i,b.firstChild):b.appendChild(i)),b=new c._Paper,b.width=f,b.height=g,b.canvas=i,b.clear(),b._left=b._top=0,h&&(b.renderfix=function(){}),b.renderfix(),b},c._engine.setViewBox=function(a,b,c,d,e){k(\"raphael.setViewBox\",this,this._viewBox,[a,b,c,d,e]);var f,h,i=this.getSize(),j=g(c/i.width,d/i.height),l=this.top,n=e?\"xMidYMid meet\":\"xMinYMin\";for(null==a?(this._vbSize&&(j=1),delete this._vbSize,f=\"0 0 \"+this.width+m+this.height):(this._vbSize=j,f=a+m+b+m+c+m+d),q(this.canvas,{viewBox:f,preserveAspectRatio:n});j&&l;)h=\"stroke-width\"in l.attrs?l.attrs[\"stroke-width\"]:1,l.attr({\"stroke-width\":h}),l._.dirty=1,l._.dirtyT=1,l=l.prev;return this._viewBox=[a,b,c,d,!!e],this},c.prototype.renderfix=function(){var a,b=this.canvas,c=b.style;try{a=b.getScreenCTM()||b.createSVGMatrix()}catch(d){a=b.createSVGMatrix()}var e=-a.e%1,f=-a.f%1;(e||f)&&(e&&(this._left=(this._left+e)%1,c.left=this._left+\"px\"),f&&(this._top=(this._top+f)%1,c.top=this._top+\"px\"))},c.prototype.clear=function(){c.eve(\"raphael.clear\",this);for(var a=this.canvas;a.firstChild;)a.removeChild(a.firstChild);this.bottom=this.top=null,(this.desc=q(\"desc\")).appendChild(c._g.doc.createTextNode(\"Created with Raphaël \"+c.version)),a.appendChild(this.desc),a.appendChild(this.defs=q(\"defs\"))},c.prototype.remove=function(){k(\"raphael.remove\",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]=\"function\"==typeof this[a]?c._removedFactory(a):null};var C=c.st;for(var D in B)B[a](D)&&!C[a](D)&&(C[D]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(D))}}(),function(){if(c.vml){var a=\"hasOwnProperty\",b=String,d=parseFloat,e=Math,f=e.round,g=e.max,h=e.min,i=e.abs,j=\"fill\",k=/[, ]+/,l=c.eve,m=\" progid:DXImageTransform.Microsoft\",n=\" \",o=\"\",p={M:\"m\",L:\"l\",C:\"c\",Z:\"x\",m:\"t\",l:\"r\",c:\"v\",z:\"x\"},q=/([clmz]),?([^clmz]*)/gi,r=/ progid:\\S+Blur\\([^\\)]+\\)/g,s=/-?[^,\\s-]+/g,t=\"position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)\",u=21600,v={path:1,rect:1,image:1},w={circle:1,ellipse:1},x=function(a){var d=/[ahqstv]/gi,e=c._pathToAbsolute;if(b(a).match(d)&&(e=c._path2curve),d=/[clmz]/g,e==c._pathToAbsolute&&!b(a).match(d)){var g=b(a).replace(q,function(a,b,c){var d=[],e=\"m\"==b.toLowerCase(),g=p[b];return c.replace(s,function(a){e&&2==d.length&&(g+=d+p[\"m\"==b?\"l\":\"L\"],d=[]),d.push(f(a*u))}),g+d});return g}var h,i,j=e(a);g=[];for(var k=0,l=j.length;l>k;k++){h=j[k],i=j[k][0].toLowerCase(),\"z\"==i&&(i=\"x\");for(var m=1,r=h.length;r>m;m++)i+=f(h[m]*u)+(m!=r-1?\",\":o);g.push(i)}return g.join(n)},y=function(a,b,d){var e=c.matrix();return e.rotate(-a,.5,.5),{dx:e.x(b,d),dy:e.y(b,d)}},z=function(a,b,c,d,e,f){var g=a._,h=a.matrix,k=g.fillpos,l=a.node,m=l.style,o=1,p=\"\",q=u/b,r=u/c;if(m.visibility=\"hidden\",b&&c){if(l.coordsize=i(q)+n+i(r),m.rotation=f*(0>b*c?-1:1),f){var s=y(f,d,e);d=s.dx,e=s.dy}if(0>b&&(p+=\"x\"),0>c&&(p+=\" y\")&&(o=-1),m.flip=p,l.coordorigin=d*-q+n+e*-r,k||g.fillsize){var t=l.getElementsByTagName(j);t=t&&t[0],l.removeChild(t),k&&(s=y(f,h.x(k[0],k[1]),h.y(k[0],k[1])),t.position=s.dx*o+n+s.dy*o),g.fillsize&&(t.size=g.fillsize[0]*i(b)+n+g.fillsize[1]*i(c)),l.appendChild(t)}m.visibility=\"visible\"}};c.toString=function(){return\"Your browser doesn’t support SVG. Falling down to VML.\\nYou are running Raphaël \"+this.version};var A=function(a,c,d){for(var e=b(c).toLowerCase().split(\"-\"),f=d?\"end\":\"start\",g=e.length,h=\"classic\",i=\"medium\",j=\"medium\";g--;)switch(e[g]){case\"block\":case\"classic\":case\"oval\":case\"diamond\":case\"open\":case\"none\":h=e[g];break;case\"wide\":case\"narrow\":j=e[g];break;case\"long\":case\"short\":i=e[g]}var k=a.node.getElementsByTagName(\"stroke\")[0];k[f+\"arrow\"]=h,k[f+\"arrowlength\"]=i,k[f+\"arrowwidth\"]=j},B=function(e,i){e.attrs=e.attrs||{};var l=e.node,m=e.attrs,p=l.style,q=v[e.type]&&(i.x!=m.x||i.y!=m.y||i.width!=m.width||i.height!=m.height||i.cx!=m.cx||i.cy!=m.cy||i.rx!=m.rx||i.ry!=m.ry||i.r!=m.r),r=w[e.type]&&(m.cx!=i.cx||m.cy!=i.cy||m.r!=i.r||m.rx!=i.rx||m.ry!=i.ry),s=e;for(var t in i)i[a](t)&&(m[t]=i[t]);if(q&&(m.path=c._getPath[e.type](e),e._.dirty=1),i.href&&(l.href=i.href),i.title&&(l.title=i.title),i.target&&(l.target=i.target),i.cursor&&(p.cursor=i.cursor),\"blur\"in i&&e.blur(i.blur),(i.path&&\"path\"==e.type||q)&&(l.path=x(~b(m.path).toLowerCase().indexOf(\"r\")?c._pathToAbsolute(m.path):m.path),e._.dirty=1,\"image\"==e.type&&(e._.fillpos=[m.x,m.y],e._.fillsize=[m.width,m.height],z(e,1,1,0,0,0))),\"transform\"in i&&e.transform(i.transform),r){var y=+m.cx,B=+m.cy,D=+m.rx||+m.r||0,E=+m.ry||+m.r||0;l.path=c.format(\"ar{0},{1},{2},{3},{4},{1},{4},{1}x\",f((y-D)*u),f((B-E)*u),f((y+D)*u),f((B+E)*u),f(y*u)),e._.dirty=1}if(\"clip-rect\"in i){var G=b(i[\"clip-rect\"]).split(k);if(4==G.length){G[2]=+G[2]+ +G[0],G[3]=+G[3]+ +G[1];var H=l.clipRect||c._g.doc.createElement(\"div\"),I=H.style;I.clip=c.format(\"rect({1}px {2}px {3}px {0}px)\",G),l.clipRect||(I.position=\"absolute\",I.top=0,I.left=0,I.width=e.paper.width+\"px\",I.height=e.paper.height+\"px\",l.parentNode.insertBefore(H,l),H.appendChild(l),l.clipRect=H)}i[\"clip-rect\"]||l.clipRect&&(l.clipRect.style.clip=\"auto\")}if(e.textpath){var J=e.textpath.style;i.font&&(J.font=i.font),i[\"font-family\"]&&(J.fontFamily='\"'+i[\"font-family\"].split(\",\")[0].replace(/^['\"]+|['\"]+$/g,o)+'\"'),i[\"font-size\"]&&(J.fontSize=i[\"font-size\"]),i[\"font-weight\"]&&(J.fontWeight=i[\"font-weight\"]),i[\"font-style\"]&&(J.fontStyle=i[\"font-style\"])}if(\"arrow-start\"in i&&A(s,i[\"arrow-start\"]),\"arrow-end\"in i&&A(s,i[\"arrow-end\"],1),null!=i.opacity||null!=i[\"stroke-width\"]||null!=i.fill||null!=i.src||null!=i.stroke||null!=i[\"stroke-width\"]||null!=i[\"stroke-opacity\"]||null!=i[\"fill-opacity\"]||null!=i[\"stroke-dasharray\"]||null!=i[\"stroke-miterlimit\"]||null!=i[\"stroke-linejoin\"]||null!=i[\"stroke-linecap\"]){var K=l.getElementsByTagName(j),L=!1;if(K=K&&K[0],!K&&(L=K=F(j)),\"image\"==e.type&&i.src&&(K.src=i.src),i.fill&&(K.on=!0),(null==K.on||\"none\"==i.fill||null===i.fill)&&(K.on=!1),K.on&&i.fill){var M=b(i.fill).match(c._ISURL);if(M){K.parentNode==l&&l.removeChild(K),K.rotate=!0,K.src=M[1],K.type=\"tile\";var N=e.getBBox(1);K.position=N.x+n+N.y,e._.fillpos=[N.x,N.y],c._preload(M[1],function(){e._.fillsize=[this.offsetWidth,this.offsetHeight]})}else K.color=c.getRGB(i.fill).hex,K.src=o,K.type=\"solid\",c.getRGB(i.fill).error&&(s.type in{circle:1,ellipse:1}||\"r\"!=b(i.fill).charAt())&&C(s,i.fill,K)&&(m.fill=\"none\",m.gradient=i.fill,K.rotate=!1)}if(\"fill-opacity\"in i||\"opacity\"in i){var O=((+m[\"fill-opacity\"]+1||2)-1)*((+m.opacity+1||2)-1)*((+c.getRGB(i.fill).o+1||2)-1);O=h(g(O,0),1),K.opacity=O,K.src&&(K.color=\"none\")}l.appendChild(K);var P=l.getElementsByTagName(\"stroke\")&&l.getElementsByTagName(\"stroke\")[0],Q=!1;!P&&(Q=P=F(\"stroke\")),(i.stroke&&\"none\"!=i.stroke||i[\"stroke-width\"]||null!=i[\"stroke-opacity\"]||i[\"stroke-dasharray\"]||i[\"stroke-miterlimit\"]||i[\"stroke-linejoin\"]||i[\"stroke-linecap\"])&&(P.on=!0),(\"none\"==i.stroke||null===i.stroke||null==P.on||0==i.stroke||0==i[\"stroke-width\"])&&(P.on=!1);var R=c.getRGB(i.stroke);P.on&&i.stroke&&(P.color=R.hex),O=((+m[\"stroke-opacity\"]+1||2)-1)*((+m.opacity+1||2)-1)*((+R.o+1||2)-1);var S=.75*(d(i[\"stroke-width\"])||1);if(O=h(g(O,0),1),null==i[\"stroke-width\"]&&(S=m[\"stroke-width\"]),i[\"stroke-width\"]&&(P.weight=S),S&&1>S&&(O*=S)&&(P.weight=1),P.opacity=O,i[\"stroke-linejoin\"]&&(P.joinstyle=i[\"stroke-linejoin\"]||\"miter\"),P.miterlimit=i[\"stroke-miterlimit\"]||8,i[\"stroke-linecap\"]&&(P.endcap=\"butt\"==i[\"stroke-linecap\"]?\"flat\":\"square\"==i[\"stroke-linecap\"]?\"square\":\"round\"),\"stroke-dasharray\"in i){var T={\"-\":\"shortdash\",\".\":\"shortdot\",\"-.\":\"shortdashdot\",\"-..\":\"shortdashdotdot\",\". \":\"dot\",\"- \":\"dash\",\"--\":\"longdash\",\"- .\":\"dashdot\",\"--.\":\"longdashdot\",\"--..\":\"longdashdotdot\"};P.dashstyle=T[a](i[\"stroke-dasharray\"])?T[i[\"stroke-dasharray\"]]:o}Q&&l.appendChild(P)}if(\"text\"==s.type){s.paper.canvas.style.display=o;var U=s.paper.span,V=100,W=m.font&&m.font.match(/\\d+(?:\\.\\d*)?(?=px)/);p=U.style,m.font&&(p.font=m.font),m[\"font-family\"]&&(p.fontFamily=m[\"font-family\"]),m[\"font-weight\"]&&(p.fontWeight=m[\"font-weight\"]),m[\"font-style\"]&&(p.fontStyle=m[\"font-style\"]),W=d(m[\"font-size\"]||W&&W[0])||10,p.fontSize=W*V+\"px\",s.textpath.string&&(U.innerHTML=b(s.textpath.string).replace(/</g,\"&#60;\").replace(/&/g,\"&#38;\").replace(/\\n/g,\"<br>\"));var X=U.getBoundingClientRect();s.W=m.w=(X.right-X.left)/V,s.H=m.h=(X.bottom-X.top)/V,s.X=m.x,s.Y=m.y+s.H/2,(\"x\"in i||\"y\"in i)&&(s.path.v=c.format(\"m{0},{1}l{2},{1}\",f(m.x*u),f(m.y*u),f(m.x*u)+1));for(var Y=[\"x\",\"y\",\"text\",\"font\",\"font-family\",\"font-weight\",\"font-style\",\"font-size\"],Z=0,$=Y.length;$>Z;Z++)if(Y[Z]in i){s._.dirty=1;break}switch(m[\"text-anchor\"]){case\"start\":s.textpath.style[\"v-text-align\"]=\"left\",s.bbx=s.W/2;break;case\"end\":s.textpath.style[\"v-text-align\"]=\"right\",s.bbx=-s.W/2;break;default:s.textpath.style[\"v-text-align\"]=\"center\",s.bbx=0}s.textpath.style[\"v-text-kern\"]=!0}},C=function(a,f,g){a.attrs=a.attrs||{};var h=(a.attrs,Math.pow),i=\"linear\",j=\".5 .5\";if(a.attrs.gradient=f,f=b(f).replace(c._radial_gradient,function(a,b,c){return i=\"radial\",b&&c&&(b=d(b),c=d(c),h(b-.5,2)+h(c-.5,2)>.25&&(c=e.sqrt(.25-h(b-.5,2))*(2*(c>.5)-1)+.5),j=b+n+c),o}),f=f.split(/\\s*\\-\\s*/),\"linear\"==i){var k=f.shift();if(k=-d(k),isNaN(k))return null}var l=c._parseDots(f);if(!l)return null;if(a=a.shape||a.node,l.length){a.removeChild(g),g.on=!0,g.method=\"none\",g.color=l[0].color,g.color2=l[l.length-1].color;for(var m=[],p=0,q=l.length;q>p;p++)l[p].offset&&m.push(l[p].offset+n+l[p].color);g.colors=m.length?m.join():\"0% \"+g.color,\"radial\"==i?(g.type=\"gradientTitle\",g.focus=\"100%\",g.focussize=\"0 0\",g.focusposition=j,g.angle=0):(g.type=\"gradient\",g.angle=(270-k)%360),a.appendChild(g)}return 1},D=function(a,b){this[0]=this.node=a,a.raphael=!0,this.id=c._oid++,a.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=b,this.matrix=c.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!b.bottom&&(b.bottom=this),this.prev=b.top,b.top&&(b.top.next=this),b.top=this,this.next=null},E=c.el;D.prototype=E,E.constructor=D,E.transform=function(a){if(null==a)return this._.transform;var d,e=this.paper._viewBoxShift,f=e?\"s\"+[e.scale,e.scale]+\"-1-1t\"+[e.dx,e.dy]:o;e&&(d=a=b(a).replace(/\\.{3}|\\u2026/g,this._.transform||o)),c._extractTransform(this,f+a);var g,h=this.matrix.clone(),i=this.skew,j=this.node,k=~b(this.attrs.fill).indexOf(\"-\"),l=!b(this.attrs.fill).indexOf(\"url(\");if(h.translate(1,1),l||k||\"image\"==this.type)if(i.matrix=\"1 0 0 1\",i.offset=\"0 0\",g=h.split(),k&&g.noRotation||!g.isSimple){j.style.filter=h.toFilter();var m=this.getBBox(),p=this.getBBox(1),q=m.x-p.x,r=m.y-p.y;j.coordorigin=q*-u+n+r*-u,z(this,1,1,q,r,0)}else j.style.filter=o,z(this,g.scalex,g.scaley,g.dx,g.dy,g.rotate);else j.style.filter=o,i.matrix=b(h),i.offset=h.offset();return null!==d&&(this._.transform=d,c._extractTransform(this,d)),this},E.rotate=function(a,c,e){if(this.removed)return this;if(null!=a){if(a=b(a).split(k),a.length-1&&(c=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(c=e),null==c||null==e){var f=this.getBBox(1);c=f.x+f.width/2,e=f.y+f.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([[\"r\",a,c,e]])),this}},E.translate=function(a,c){return this.removed?this:(a=b(a).split(k),a.length-1&&(c=d(a[1])),a=d(a[0])||0,c=+c||0,this._.bbox&&(this._.bbox.x+=a,this._.bbox.y+=c),this.transform(this._.transform.concat([[\"t\",a,c]])),this)},E.scale=function(a,c,e,f){if(this.removed)return this;if(a=b(a).split(k),a.length-1&&(c=d(a[1]),e=d(a[2]),f=d(a[3]),isNaN(e)&&(e=null),isNaN(f)&&(f=null)),a=d(a[0]),null==c&&(c=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([[\"s\",a,c,e,f]])),this._.dirtyT=1,this},E.hide=function(){return!this.removed&&(this.node.style.display=\"none\"),this},E.show=function(){return!this.removed&&(this.node.style.display=o),this},E.auxGetBBox=c.el.getBBox,E.getBBox=function(){var a=this.auxGetBBox();if(this.paper&&this.paper._viewBoxShift){var b={},c=1/this.paper._viewBoxShift.scale;return b.x=a.x-this.paper._viewBoxShift.dx,b.x*=c,b.y=a.y-this.paper._viewBoxShift.dy,b.y*=c,b.width=a.width*c,b.height=a.height*c,b.x2=b.x+b.width,b.y2=b.y+b.height,b}return a},E._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),c.eve.unbind(\"raphael.*.*.\"+this.id),c._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var a in this)this[a]=\"function\"==typeof this[a]?c._removedFactory(a):null;this.removed=!0}},E.attr=function(b,d){if(this.removed)return this;if(null==b){var e={};for(var f in this.attrs)this.attrs[a](f)&&(e[f]=this.attrs[f]);return e.gradient&&\"none\"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&c.is(b,\"string\")){if(b==j&&\"none\"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var g=b.split(k),h={},i=0,m=g.length;m>i;i++)b=g[i],h[b]=b in this.attrs?this.attrs[b]:c.is(this.paper.customAttributes[b],\"function\")?this.paper.customAttributes[b].def:c._availableAttrs[b];return m-1?h:h[g[0]]}if(this.attrs&&null==d&&c.is(b,\"array\")){for(h={},i=0,m=b.length;m>i;i++)h[b[i]]=this.attr(b[i]);return h}var n;null!=d&&(n={},n[b]=d),null==d&&c.is(b,\"object\")&&(n=b);for(var o in n)l(\"raphael.attr.\"+o+\".\"+this.id,this,n[o]);if(n){for(o in this.paper.customAttributes)if(this.paper.customAttributes[a](o)&&n[a](o)&&c.is(this.paper.customAttributes[o],\"function\")){var p=this.paper.customAttributes[o].apply(this,[].concat(n[o]));this.attrs[o]=n[o];for(var q in p)p[a](q)&&(n[q]=p[q])}n.text&&\"text\"==this.type&&(this.textpath.string=n.text),B(this,n)}return this},E.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&c._tofront(this,this.paper),this},E.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),c._toback(this,this.paper)),this)},E.insertAfter=function(a){return this.removed?this:(a.constructor==c.st.constructor&&(a=a[a.length-1]),a.node.nextSibling?a.node.parentNode.insertBefore(this.node,a.node.nextSibling):a.node.parentNode.appendChild(this.node),c._insertafter(this,a,this.paper),this)},E.insertBefore=function(a){return this.removed?this:(a.constructor==c.st.constructor&&(a=a[0]),a.node.parentNode.insertBefore(this.node,a.node),c._insertbefore(this,a,this.paper),this)},E.blur=function(a){var b=this.node.runtimeStyle,d=b.filter;return d=d.replace(r,o),0!==+a?(this.attrs.blur=a,b.filter=d+n+m+\".Blur(pixelradius=\"+(+a||1.5)+\")\",b.margin=c.format(\"-{0}px 0 0 -{0}px\",f(+a||1.5))):(b.filter=d,b.margin=0,delete this.attrs.blur),this},c._engine.path=function(a,b){var c=F(\"shape\");c.style.cssText=t,c.coordsize=u+n+u,c.coordorigin=b.coordorigin;var d=new D(c,b),e={fill:\"none\",stroke:\"#000\"};a&&(e.path=a),d.type=\"path\",d.path=[],d.Path=o,B(d,e),b.canvas.appendChild(c);var f=F(\"skew\");return f.on=!0,c.appendChild(f),d.skew=f,d.transform(o),d},c._engine.rect=function(a,b,d,e,f,g){var h=c._rectPath(b,d,e,f,g),i=a.path(h),j=i.attrs;return i.X=j.x=b,i.Y=j.y=d,i.W=j.width=e,i.H=j.height=f,j.r=g,j.path=h,i.type=\"rect\",i},c._engine.ellipse=function(a,b,c,d,e){{var f=a.path();f.attrs}return f.X=b-d,f.Y=c-e,f.W=2*d,f.H=2*e,f.type=\"ellipse\",B(f,{cx:b,cy:c,rx:d,ry:e}),f},c._engine.circle=function(a,b,c,d){{var e=a.path();e.attrs}return e.X=b-d,e.Y=c-d,e.W=e.H=2*d,e.type=\"circle\",B(e,{cx:b,cy:c,r:d}),e},c._engine.image=function(a,b,d,e,f,g){var h=c._rectPath(d,e,f,g),i=a.path(h).attr({stroke:\"none\"}),k=i.attrs,l=i.node,m=l.getElementsByTagName(j)[0];return k.src=b,i.X=k.x=d,i.Y=k.y=e,i.W=k.width=f,i.H=k.height=g,k.path=h,i.type=\"image\",m.parentNode==l&&l.removeChild(m),m.rotate=!0,m.src=b,m.type=\"tile\",i._.fillpos=[d,e],i._.fillsize=[f,g],l.appendChild(m),z(i,1,1,0,0,0),i},c._engine.text=function(a,d,e,g){var h=F(\"shape\"),i=F(\"path\"),j=F(\"textpath\");d=d||0,e=e||0,g=g||\"\",i.v=c.format(\"m{0},{1}l{2},{1}\",f(d*u),f(e*u),f(d*u)+1),i.textpathok=!0,j.string=b(g),j.on=!0,h.style.cssText=t,h.coordsize=u+n+u,h.coordorigin=\"0 0\";var k=new D(h,a),l={fill:\"#000\",stroke:\"none\",font:c._availableAttrs.font,text:g};k.shape=h,k.path=i,k.textpath=j,k.type=\"text\",k.attrs.text=b(g),k.attrs.x=d,k.attrs.y=e,k.attrs.w=1,k.attrs.h=1,B(k,l),h.appendChild(j),h.appendChild(i),a.canvas.appendChild(h);var m=F(\"skew\");return m.on=!0,h.appendChild(m),k.skew=m,k.transform(o),k},c._engine.setSize=function(a,b){var d=this.canvas.style;return this.width=a,this.height=b,a==+a&&(a+=\"px\"),b==+b&&(b+=\"px\"),d.width=a,d.height=b,d.clip=\"rect(0 \"+a+\" \"+b+\" 0)\",this._viewBox&&c._engine.setViewBox.apply(this,this._viewBox),this},c._engine.setViewBox=function(a,b,d,e,f){c.eve(\"raphael.setViewBox\",this,this._viewBox,[a,b,d,e,f]);var g,h,i=this.getSize(),j=i.width,k=i.height;return f&&(g=k/e,h=j/d,j>d*g&&(a-=(j-d*g)/2/g),k>e*h&&(b-=(k-e*h)/2/h)),this._viewBox=[a,b,d,e,!!f],this._viewBoxShift={dx:-a,dy:-b,scale:i},this.forEach(function(a){a.transform(\"...\")}),this};var F;c._engine.initWin=function(a){var b=a.document;b.styleSheets.length<31?b.createStyleSheet().addRule(\".rvml\",\"behavior:url(#default#VML)\"):b.styleSheets[0].addRule(\".rvml\",\"behavior:url(#default#VML)\");try{!b.namespaces.rvml&&b.namespaces.add(\"rvml\",\"urn:schemas-microsoft-com:vml\"),F=function(a){return b.createElement(\"<rvml:\"+a+' class=\"rvml\">')}}catch(c){F=function(a){return b.createElement(\"<\"+a+' xmlns=\"urn:schemas-microsoft.com:vml\" class=\"rvml\">')}}},c._engine.initWin(c._g.win),c._engine.create=function(){var a=c._getContainer.apply(0,arguments),b=a.container,d=a.height,e=a.width,f=a.x,g=a.y;if(!b)throw new Error(\"VML container not found.\");var h=new c._Paper,i=h.canvas=c._g.doc.createElement(\"div\"),j=i.style;return f=f||0,g=g||0,e=e||512,d=d||342,h.width=e,h.height=d,e==+e&&(e+=\"px\"),d==+d&&(d+=\"px\"),h.coordsize=1e3*u+n+1e3*u,h.coordorigin=\"0 0\",h.span=c._g.doc.createElement(\"span\"),h.span.style.cssText=\"position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;\",i.appendChild(h.span),j.cssText=c.format(\"top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden\",e,d),1==b?(c._g.doc.body.appendChild(i),j.left=f+\"px\",j.top=g+\"px\",j.position=\"absolute\"):b.firstChild?b.insertBefore(i,b.firstChild):b.appendChild(i),h.renderfix=function(){},h},c.prototype.clear=function(){c.eve(\"raphael.clear\",this),this.canvas.innerHTML=o,this.span=c._g.doc.createElement(\"span\"),this.span.style.cssText=\"position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;\",this.canvas.appendChild(this.span),this.bottom=this.top=null},c.prototype.remove=function(){c.eve(\"raphael.remove\",this),this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]=\"function\"==typeof this[a]?c._removedFactory(a):null;return!0};var G=c.st;for(var H in E)E[a](H)&&!G[a](H)&&(G[H]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(H))}}(),B.was?A.win.Raphael=c:Raphael=c,\"object\"==typeof exports&&(module.exports=c),c});" + 
"</script>" + 
"<script>" + 
"(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};\"undefined\"!=typeof exports?(\"undefined\"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION=\"1.4.4\";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O=\"Reduce of empty array with no initial value\";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2),e=w.isFunction(t);return w.map(n,function(n){return(e?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t,r){return w.isEmpty(t)?r?null:[]:w[r?\"find\":\"filter\"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.findWhere=function(n,t){return w.where(n,t,!0)},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var k=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=k(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),\"value\")};var F=function(n,t,r,e){var u={},i=k(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return F(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return F(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,\"length\")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,\"\"+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if(\"number\"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i},w.bind=function(n,t){if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));var r=o.call(arguments,2);return function(){return n.apply(t,r.concat(o.call(arguments)))}},w.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},w.bindAll=function(n){var t=o.call(arguments,1);return 0===t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError(\"Invalid object\");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var I=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case\"[object String]\":return n==t+\"\";case\"[object Number]\":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case\"[object Date]\":case\"[object Boolean]\":return+n==+t;case\"[object RegExp]\":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if(\"object\"!=typeof n||\"object\"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if(\"[object Array]\"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=I(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&I(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return I(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return\"[object Array]\"==l.call(n)},w.isObject=function(n){return n===Object(n)},A([\"Arguments\",\"Function\",\"String\",\"Number\",\"Date\",\"RegExp\"],function(n){w[\"is\"+n]=function(t){return l.call(t)==\"[object \"+n+\"]\"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,\"callee\"))}),\"function\"!=typeof/./&&(w.isFunction=function(n){return\"function\"==typeof n}),w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||\"[object Boolean]\"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return n===void 0},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var M={escape:{\"&\":\"&amp;\",\"<\":\"&lt;\",\">\":\"&gt;\",'\"':\"&quot;\",\"'\":\"&#x27;\",\"/\":\"&#x2F;\"}};M.unescape=w.invert(M.escape);var S={escape:RegExp(\"[\"+w.keys(M.escape).join(\"\")+\"]\",\"g\"),unescape:RegExp(\"(\"+w.keys(M.unescape).join(\"|\")+\")\",\"g\")};w.each([\"escape\",\"unescape\"],function(n){w[n]=function(t){return null==t?\"\":(\"\"+t).replace(S[n],function(t){return M[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),D.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=++N+\"\";return n?n+t:t},w.templateSettings={evaluate:/<%([\\s\\S]+?)%>/g,interpolate:/<%=([\\s\\S]+?)%>/g,escape:/<%-([\\s\\S]+?)%>/g};var T=/(.)^/,q={\"'\":\"'\",\"\\\\\":\"\\\\\",\"\\r\":\"r\",\"\\n\":\"n\",\"	\":\"t\",\"\\u2028\":\"u2028\",\"\\u2029\":\"u2029\"},B=/\\\\|'|\\r|\\n|\\t|\\u2028|\\u2029/g;w.template=function(n,t,r){var e;r=w.defaults({},r,w.templateSettings);var u=RegExp([(r.escape||T).source,(r.interpolate||T).source,(r.evaluate||T).source].join(\"|\")+\"|$\",\"g\"),i=0,a=\"__p+='\";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(B,function(n){return\"\\\\\"+q[n]}),r&&(a+=\"'+\\n((__t=(\"+r+\"))==null?'':_.escape(__t))+\\n'\"),e&&(a+=\"'+\\n((__t=(\"+e+\"))==null?'':__t)+\\n'\"),u&&(a+=\"';\\n\"+u+\"\\n__p+='\"),i=o+t.length,t}),a+=\"';\\n\",r.variable||(a=\"with(obj||{}){\\n\"+a+\"}\\n\"),a=\"var __t,__p='',__j=Array.prototype.join,\"+\"print=function(){__p+=__j.call(arguments,'');};\\n\"+a+\"return __p;\\n\";try{e=Function(r.variable||\"obj\",\"_\",a)}catch(o){throw o.source=a,o}if(t)return e(t,w);var c=function(n){return e.call(this,n,w)};return c.source=\"function(\"+(r.variable||\"obj\")+\"){\\n\"+a+\"}\",c},w.chain=function(n){return w(n).chain()};var D=function(n){return this._chain?w(n).chain():n};w.mixin(w),A([\"pop\",\"push\",\"reverse\",\"shift\",\"sort\",\"splice\",\"unshift\"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),\"shift\"!=n&&\"splice\"!=n||0!==r.length||delete r[0],D.call(this,r)}}),A([\"concat\",\"join\",\"slice\"],function(n){var t=e[n];w.prototype[n]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);" + 
"</script>" + 
"<script>" + 
"/** js sequence diagrams 1.0.6" + 
" *  http://bramp.github.io/js-sequence-diagrams/" + 
" *  (c) 2012-2015 Andrew Brampton (bramp.net)" + 
" *  @license Simplified BSD license." + 
" */" + 
"!function(){\"use strict\";function Diagram(){this.title=void 0,this.actors=[],this.signals=[]}function ParseError(message,hash){_.extend(this,hash),this.name=\"ParseError\",this.message=message||\"\"}function AssertException(message){this.message=message}function assert(exp,message){if(!exp)throw new AssertException(message)}function getCenterX(box){return box.x+box.width/2}function getCenterY(box){return box.y+box.height/2}Diagram.prototype.getActor=function(alias){var name,s=/^(.+) as (\\S+)$/i.exec(alias.trim());s?(name=s[1].trim(),alias=s[2].trim()):name=alias.trim(),name=name.replace(/\\\\n/gm,\"\\n\");var i,actors=this.actors;for(i in actors)if(actors[i].alias==alias)return actors[i];return i=actors.push(new Diagram.Actor(alias,name,actors.length)),actors[i-1]},Diagram.prototype.setTitle=function(title){this.title=title},Diagram.prototype.addSignal=function(signal){this.signals.push(signal)},Diagram.Actor=function(alias,name,index){this.alias=alias,this.name=name,this.index=index},Diagram.Signal=function(actorA,signaltype,actorB,message){this.type=\"Signal\",this.actorA=actorA,this.actorB=actorB,this.linetype=3&signaltype,this.arrowtype=3&signaltype>>2,this.message=message},Diagram.Signal.prototype.isSelf=function(){return this.actorA.index==this.actorB.index},Diagram.Note=function(actor,placement,message){if(this.type=\"Note\",this.actor=actor,this.placement=placement,this.message=message,this.hasManyActors()&&actor[0]==actor[1])throw new Error(\"Note should be over two different actors\")},Diagram.Note.prototype.hasManyActors=function(){return _.isArray(this.actor)},Diagram.LINETYPE={SOLID:0,DOTTED:1},Diagram.ARROWTYPE={FILLED:0,OPEN:1},Diagram.PLACEMENT={LEFTOF:0,RIGHTOF:1,OVER:2};var grammar=function(){function Parser(){this.yy={}}var parser={trace:function(){},yy:{},symbols_:{error:2,start:3,document:4,EOF:5,line:6,statement:7,NL:8,participant:9,actor:10,signal:11,note_statement:12,title:13,message:14,note:15,placement:16,over:17,actor_pair:18,\",\":19,left_of:20,right_of:21,signaltype:22,ACTOR:23,linetype:24,arrowtype:25,LINE:26,DOTLINE:27,ARROW:28,OPENARROW:29,MESSAGE:30,$accept:0,$end:1},terminals_:{2:\"error\",5:\"EOF\",8:\"NL\",9:\"participant\",13:\"title\",15:\"note\",17:\"over\",19:\",\",20:\"left_of\",21:\"right_of\",23:\"ACTOR\",26:\"LINE\",27:\"DOTLINE\",28:\"ARROW\",29:\"OPENARROW\",30:\"MESSAGE\"},productions_:[0,[3,2],[4,0],[4,2],[6,1],[6,1],[7,2],[7,1],[7,1],[7,2],[12,4],[12,4],[18,1],[18,3],[16,1],[16,1],[11,4],[10,1],[22,2],[22,1],[24,1],[24,1],[25,1],[25,1],[14,1]],performAction:function(yytext,yyleng,yylineno,yy,yystate,$$){var $0=$$.length-1;switch(yystate){case 1:return yy;case 4:break;case 6:$$[$0];break;case 7:yy.addSignal($$[$0]);break;case 8:yy.addSignal($$[$0]);break;case 9:yy.setTitle($$[$0]);break;case 10:this.$=new Diagram.Note($$[$0-1],$$[$0-2],$$[$0]);break;case 11:this.$=new Diagram.Note($$[$0-1],Diagram.PLACEMENT.OVER,$$[$0]);break;case 12:this.$=$$[$0];break;case 13:this.$=[$$[$0-2],$$[$0]];break;case 14:this.$=Diagram.PLACEMENT.LEFTOF;break;case 15:this.$=Diagram.PLACEMENT.RIGHTOF;break;case 16:this.$=new Diagram.Signal($$[$0-3],$$[$0-2],$$[$0-1],$$[$0]);break;case 17:this.$=yy.getActor($$[$0]);break;case 18:this.$=$$[$0-1]|$$[$0]<<2;break;case 19:this.$=$$[$0];break;case 20:this.$=Diagram.LINETYPE.SOLID;break;case 21:this.$=Diagram.LINETYPE.DOTTED;break;case 22:this.$=Diagram.ARROWTYPE.FILLED;break;case 23:this.$=Diagram.ARROWTYPE.OPEN;break;case 24:this.$=$$[$0].substring(1).trim().replace(/\\\\n/gm,\"\\n\")}},table:[{3:1,4:2,5:[2,2],8:[2,2],9:[2,2],13:[2,2],15:[2,2],23:[2,2]},{1:[3]},{5:[1,3],6:4,7:5,8:[1,6],9:[1,7],10:11,11:8,12:9,13:[1,10],15:[1,12],23:[1,13]},{1:[2,1]},{5:[2,3],8:[2,3],9:[2,3],13:[2,3],15:[2,3],23:[2,3]},{5:[2,4],8:[2,4],9:[2,4],13:[2,4],15:[2,4],23:[2,4]},{5:[2,5],8:[2,5],9:[2,5],13:[2,5],15:[2,5],23:[2,5]},{10:14,23:[1,13]},{5:[2,7],8:[2,7],9:[2,7],13:[2,7],15:[2,7],23:[2,7]},{5:[2,8],8:[2,8],9:[2,8],13:[2,8],15:[2,8],23:[2,8]},{14:15,30:[1,16]},{22:17,24:18,26:[1,19],27:[1,20]},{16:21,17:[1,22],20:[1,23],21:[1,24]},{5:[2,17],8:[2,17],9:[2,17],13:[2,17],15:[2,17],19:[2,17],23:[2,17],26:[2,17],27:[2,17],30:[2,17]},{5:[2,6],8:[2,6],9:[2,6],13:[2,6],15:[2,6],23:[2,6]},{5:[2,9],8:[2,9],9:[2,9],13:[2,9],15:[2,9],23:[2,9]},{5:[2,24],8:[2,24],9:[2,24],13:[2,24],15:[2,24],23:[2,24]},{10:25,23:[1,13]},{23:[2,19],25:26,28:[1,27],29:[1,28]},{23:[2,20],28:[2,20],29:[2,20]},{23:[2,21],28:[2,21],29:[2,21]},{10:29,23:[1,13]},{10:31,18:30,23:[1,13]},{23:[2,14]},{23:[2,15]},{14:32,30:[1,16]},{23:[2,18]},{23:[2,22]},{23:[2,23]},{14:33,30:[1,16]},{14:34,30:[1,16]},{19:[1,35],30:[2,12]},{5:[2,16],8:[2,16],9:[2,16],13:[2,16],15:[2,16],23:[2,16]},{5:[2,10],8:[2,10],9:[2,10],13:[2,10],15:[2,10],23:[2,10]},{5:[2,11],8:[2,11],9:[2,11],13:[2,11],15:[2,11],23:[2,11]},{10:36,23:[1,13]},{30:[2,13]}],defaultActions:{3:[2,1],23:[2,14],24:[2,15],26:[2,18],27:[2,22],28:[2,23],36:[2,13]},parseError:function(str,hash){if(!hash.recoverable)throw new Error(str);this.trace(str)},parse:function(input){function lex(){var token;return token=self.lexer.lex()||EOF,\"number\"!=typeof token&&(token=self.symbols_[token]||token),token}var self=this,stack=[0],vstack=[null],lstack=[],table=this.table,yytext=\"\",yylineno=0,yyleng=0,recovering=0,TERROR=2,EOF=1;this.lexer.setInput(input),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,\"undefined\"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});var yyloc=this.lexer.yylloc;lstack.push(yyloc);var ranges=this.lexer.options&&this.lexer.options.ranges;this.parseError=\"function\"==typeof this.yy.parseError?this.yy.parseError:Object.getPrototypeOf(this).parseError;for(var symbol,preErrorSymbol,state,action,r,p,len,newState,expected,yyval={};;){if(state=stack[stack.length-1],this.defaultActions[state]?action=this.defaultActions[state]:((null===symbol||\"undefined\"==typeof symbol)&&(symbol=lex()),action=table[state]&&table[state][symbol]),\"undefined\"==typeof action||!action.length||!action[0]){var errStr=\"\";expected=[];for(p in table[state])this.terminals_[p]&&p>TERROR&&expected.push(\"'\"+this.terminals_[p]+\"'\");errStr=this.lexer.showPosition?\"Parse error on line \"+(yylineno+1)+\":\\n\"+this.lexer.showPosition()+\"\\nExpecting \"+expected.join(\", \")+\", got '\"+(this.terminals_[symbol]||symbol)+\"'\":\"Parse error on line \"+(yylineno+1)+\": Unexpected \"+(symbol==EOF?\"end of input\":\"'\"+(this.terminals_[symbol]||symbol)+\"'\"),this.parseError(errStr,{text:this.lexer.match,token:this.terminals_[symbol]||symbol,line:this.lexer.yylineno,loc:yyloc,expected:expected})}if(action[0]instanceof Array&&action.length>1)throw new Error(\"Parse Error: multiple actions possible at state: \"+state+\", token: \"+symbol);switch(action[0]){case 1:stack.push(symbol),vstack.push(this.lexer.yytext),lstack.push(this.lexer.yylloc),stack.push(action[1]),symbol=null,preErrorSymbol?(symbol=preErrorSymbol,preErrorSymbol=null):(yyleng=this.lexer.yyleng,yytext=this.lexer.yytext,yylineno=this.lexer.yylineno,yyloc=this.lexer.yylloc,recovering>0&&recovering--);break;case 2:if(len=this.productions_[action[1]][1],yyval.$=vstack[vstack.length-len],yyval._$={first_line:lstack[lstack.length-(len||1)].first_line,last_line:lstack[lstack.length-1].last_line,first_column:lstack[lstack.length-(len||1)].first_column,last_column:lstack[lstack.length-1].last_column},ranges&&(yyval._$.range=[lstack[lstack.length-(len||1)].range[0],lstack[lstack.length-1].range[1]]),r=this.performAction.call(yyval,yytext,yyleng,yylineno,this.yy,action[1],vstack,lstack),\"undefined\"!=typeof r)return r;len&&(stack=stack.slice(0,2*-1*len),vstack=vstack.slice(0,-1*len),lstack=lstack.slice(0,-1*len)),stack.push(this.productions_[action[1]][0]),vstack.push(yyval.$),lstack.push(yyval._$),newState=table[stack[stack.length-2]][stack[stack.length-1]],stack.push(newState);break;case 3:return!0}}return!0}},lexer=function(){var lexer={EOF:1,parseError:function(str,hash){if(!this.yy.parser)throw new Error(str);this.yy.parser.parseError(str,hash)},setInput:function(input){return this._input=input,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match=\"\",this.conditionStack=[\"INITIAL\"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var ch=this._input[0];this.yytext+=ch,this.yyleng++,this.offset++,this.match+=ch,this.matched+=ch;var lines=ch.match(/(?:\\r\\n?|\\n).*/g);return lines?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),ch},unput:function(ch){var len=ch.length,lines=ch.split(/(?:\\r\\n?|\\n)/g);this._input=ch+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-len-1),this.offset-=len;var oldLines=this.match.split(/(?:\\r\\n?|\\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),lines.length-1&&(this.yylineno-=lines.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:lines?(lines.length===oldLines.length?this.yylloc.first_column:0)+oldLines[oldLines.length-lines.length].length-lines[0].length:this.yylloc.first_column-len},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-len]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError(\"Lexical error on line \"+(this.yylineno+1)+\". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\\n\"+this.showPosition(),{text:\"\",token:null,line:this.yylineno})},less:function(n){this.unput(this.match.slice(n))},pastInput:function(){var past=this.matched.substr(0,this.matched.length-this.match.length);return(past.length>20?\"...\":\"\")+past.substr(-20).replace(/\\n/g,\"\")},upcomingInput:function(){var next=this.match;return next.length<20&&(next+=this._input.substr(0,20-next.length)),(next.substr(0,20)+(next.length>20?\"...\":\"\")).replace(/\\n/g,\"\")},showPosition:function(){var pre=this.pastInput(),c=new Array(pre.length+1).join(\"-\");return pre+this.upcomingInput()+\"\\n\"+c+\"^\"},test_match:function(match,indexed_rule){var token,lines,backup;if(this.options.backtrack_lexer&&(backup={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(backup.yylloc.range=this.yylloc.range.slice(0))),lines=match[0].match(/(?:\\r\\n?|\\n).*/g),lines&&(this.yylineno+=lines.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:lines?lines[lines.length-1].length-lines[lines.length-1].match(/\\r?\\n?/)[0].length:this.yylloc.last_column+match[0].length},this.yytext+=match[0],this.match+=match[0],this.matches=match,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(match[0].length),this.matched+=match[0],token=this.performAction.call(this,this.yy,this,indexed_rule,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),token)return token;if(this._backtrack){for(var k in backup)this[k]=backup[k];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var token,match,tempMatch,index;this._more||(this.yytext=\"\",this.match=\"\");for(var rules=this._currentRules(),i=0;i<rules.length;i++)if(tempMatch=this._input.match(this.rules[rules[i]]),tempMatch&&(!match||tempMatch[0].length>match[0].length)){if(match=tempMatch,index=i,this.options.backtrack_lexer){if(token=this.test_match(tempMatch,rules[i]),token!==!1)return token;if(this._backtrack){match=!1;continue}return!1}if(!this.options.flex)break}return match?(token=this.test_match(match,rules[index]),token!==!1?token:!1):\"\"===this._input?this.EOF:this.parseError(\"Lexical error on line \"+(this.yylineno+1)+\". Unrecognized text.\\n\"+this.showPosition(),{text:\"\",token:null,line:this.yylineno})},lex:function(){var r=this.next();return r?r:this.lex()},begin:function(condition){this.conditionStack.push(condition)},popState:function(){var n=this.conditionStack.length-1;return n>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(n){return n=this.conditionStack.length-1-Math.abs(n||0),n>=0?this.conditionStack[n]:\"INITIAL\"},pushState:function(condition){this.begin(condition)},stateStackSize:function(){return this.conditionStack.length},options:{\"case-insensitive\":!0},performAction:function(yy,yy_,$avoiding_name_collisions,YY_START){switch($avoiding_name_collisions){case 0:return 8;case 1:break;case 2:break;case 3:return 9;case 4:return 20;case 5:return 21;case 6:return 17;case 7:return 15;case 8:return 13;case 9:return 19;case 10:return 23;case 11:return 27;case 12:return 26;case 13:return 29;case 14:return 28;case 15:return 30;case 16:return 5;case 17:return\"INVALID\"}},rules:[/^(?:[\\n]+)/i,/^(?:\\s+)/i,/^(?:#[^\\n]*)/i,/^(?:participant\\b)/i,/^(?:left of\\b)/i,/^(?:right of\\b)/i,/^(?:over\\b)/i,/^(?:note\\b)/i,/^(?:title\\b)/i,/^(?:,)/i,/^(?:[^\\->:\\n,]+)/i,/^(?:--)/i,/^(?:-)/i,/^(?:>>)/i,/^(?:>)/i,/^(?:[^#\\n]+)/i,/^(?:$)/i,/^(?:.)/i],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],inclusive:!0}}};return lexer}();return parser.lexer=lexer,Parser.prototype=parser,parser.Parser=Parser,new Parser}();\"undefined\"!=typeof require&&\"undefined\"!=typeof exports&&(exports.parser=grammar,exports.Parser=grammar.Parser,exports.parse=function(){return grammar.parse.apply(grammar,arguments)},exports.main=function(args){args[1]||(console.log(\"Usage: \"+args[0]+\" FILE\"),process.exit(1));var source=require(\"fs\").readFileSync(require(\"path\").normalize(args[1]),\"utf8\");return exports.parser.parse(source)},\"undefined\"!=typeof module&&require.main===module&&exports.main(process.argv.slice(1))),ParseError.prototype=new Error,Diagram.ParseError=ParseError,grammar.parseError=function(message,hash){throw new ParseError(message,hash)},Diagram.parse=function(input){return grammar.yy=new Diagram,grammar.parse(input)},Raphael.registerFont({w:209,face:{\"font-family\":\"daniel\",\"font-weight\":700,\"font-stretch\":\"normal\",\"units-per-em\":\"360\",\"panose-1\":\"2 11 8 0 0 0 0 0 0 0\",ascent:\"288\",descent:\"-72\",\"x-height\":\"7\",bbox:\"-92.0373 -310.134 632 184.967\",\"underline-thickness\":\"3.51562\",\"underline-position\":\"-21.6211\",\"unicode-range\":\"U+0009-U+F002\"},glyphs:{\" \":{w:179},\"	\":{w:179},\"!\":{d:\"66,-306v9,3,18,11,19,24v-18,73,-20,111,-37,194v0,10,2,34,-12,34v-12,0,-18,-9,-18,-28v0,-85,23,-136,38,-214v1,-7,4,-10,10,-10xm25,-30v15,-1,28,34,5,35v-11,-1,-38,-36,-5,-35\",w:115},'\"':{d:\"91,-214v-32,3,-25,-40,-20,-68v3,-16,7,-25,12,-27v35,13,14,56,8,95xm8,-231v4,-31,1,-40,18,-75v37,7,11,51,11,79v-3,3,-4,8,-5,13v-17,4,-16,-10,-24,-17\",w:117},\"#\":{d:\"271,-64v-30,26,-96,-7,-102,51v-6,2,-13,2,-24,-2v-2,-11,10,-21,2,-28v-14,5,-48,0,-48,22v0,23,-11,14,-29,10v-7,-6,6,-19,-1,-24r-32,4v-19,-8,-15,-24,5,-28r33,-6v4,0,24,-23,11,-27v-26,0,-63,14,-74,-10v3,-1,9,-17,16,-10v15,-8,81,4,89,-30v8,-14,16,-34,24,-38v23,9,24,38,5,49v37,24,55,-38,72,-43v19,10,20,23,-1,45v2,8,23,1,29,4v3,3,6,6,10,11v-14,13,-20,12,-45,12v-17,0,-16,17,-19,29v18,-7,49,3,67,-2v4,0,8,4,12,11xm161,-104v-30,-1,-44,10,-44,37v14,1,24,0,40,-5v0,-1,3,-10,8,-26v0,-4,-1,-6,-4,-6\",w:285},$:{d:\"164,-257v29,4,1,42,-3,50v5,5,38,13,41,24v8,4,6,15,-2,21v-18,3,-36,-17,-49,-17v-17,1,-31,40,-28,48v5,4,8,8,9,10v13,1,35,37,28,44v-10,21,-36,20,-65,28v-10,10,-12,40,-17,51v-9,-3,-28,1,-18,-17v0,-13,5,-24,-1,-35v-18,1,-59,-10,-42,-29v21,0,56,16,55,-16v5,-4,9,-18,9,-26v-14,-15,-55,-41,-53,-65v2,-33,56,-19,98,-26v10,-14,31,-43,38,-45xm93,-152v11,-10,15,-15,14,-29v-17,-3,-37,1,-43,6v10,12,20,19,29,23xm111,-103v-8,1,-11,12,-10,22v10,0,28,2,27,-8v0,-4,-13,-15,-17,-14\",w:225},\"%\":{d:\"181,-96v24,-7,67,-13,104,1v14,18,21,19,22,44v-13,43,-99,61,-146,36v-9,-9,-22,-11,-32,-29v0,-27,24,-53,52,-52xm139,-185v-9,68,-138,73,-131,-5v0,-3,3,-9,9,-17v13,1,27,1,17,-16v5,-39,63,0,93,-6v36,1,80,-9,102,11v15,32,12,32,-8,56v-16,21,-103,78,-152,125r-14,28v-23,11,-25,-7,-29,-20v34,-71,133,-98,171,-162v-13,-12,-52,-5,-61,1v0,1,1,3,3,5xm38,-190v0,34,55,29,70,8v0,-14,-20,-11,-32,-14v-14,-3,-24,-9,-40,-10v1,0,5,11,2,16xm172,-53v12,27,90,18,102,-5v-18,-7,-32,-10,-40,-10v-29,3,-57,-4,-62,15\",w:308},\"&\":{d:\"145,-82v17,-8,47,-15,71,-26v13,2,25,12,9,23v-23,7,-40,16,-53,27r0,6v13,8,30,21,36,38v0,8,-4,12,-11,12v-19,0,-43,-39,-59,-44v-30,12,-65,29,-97,32v-32,3,-45,-41,-23,-63v21,-20,52,-26,70,-48v-4,-31,-12,-47,9,-73v13,-16,20,-29,23,-39v15,-15,32,-22,51,-22v30,9,62,64,32,96v-2,3,-47,42,-69,48v-15,8,-11,9,0,22v6,7,10,11,11,11xm114,-138v25,-13,62,-38,74,-62v0,-9,-10,-31,-20,-29v-28,7,-60,42,-60,75v0,10,2,15,6,16xm99,-91v-18,10,-54,18,-59,45v26,5,61,-12,77,-22v-1,-5,-13,-23,-18,-23\",w:253},\"'\":{d:\"36,-182v-36,7,-34,-61,-17,-80v15,1,21,19,21,20r-1,-1v0,0,-1,12,-5,35v1,5,3,17,2,26\",w:63},\"(\":{d:\"130,-306v13,2,23,43,-1,43v-49,43,-77,77,-90,148v5,49,27,67,64,101v4,14,5,6,2,19r-15,0v-35,-17,-79,-58,-79,-120v0,-58,66,-176,119,-191\",w:120},\")\":{d:\"108,-138v-2,73,-48,120,-98,153v-17,-5,-16,-20,-6,-31v52,-64,73,-62,74,-135v1,-42,-40,-98,-58,-128v0,-5,-1,-12,-2,-22v18,-18,25,0,42,27v25,39,50,66,48,136\",w:120},\"*\":{d:\"121,-271v15,-5,36,-8,40,9v-5,10,-31,19,-47,31v0,11,34,43,14,53v-18,8,-24,-24,-34,-20v-4,10,-4,19,-12,41v-25,7,-15,-30,-17,-47v-13,-1,-17,9,-46,30r-10,0v-20,-32,37,-43,54,-64v-10,-11,-36,-33,-16,-51v3,0,14,8,33,24v8,-10,26,-39,32,-42v14,7,15,23,9,36\",w:177},\"+\":{d:\"163,-64v-7,22,-65,2,-77,21v-2,10,-6,21,-11,35v-20,4,-21,-12,-19,-29v3,-23,-44,6,-39,-27v-8,-22,36,-8,49,-18v8,-13,6,-36,24,-40v19,-4,14,32,11,39v18,3,19,2,54,8v2,1,5,5,8,11\",w:170},\",\":{d:\"25,63v-26,21,-48,-2,-22,-24v14,-12,35,-40,35,-69v3,-2,3,-11,12,-9v35,17,5,88,-25,102\",w:97},\"-\":{d:\"57,-94v19,4,55,-5,54,17v-15,23,-54,20,-91,15v-4,2,-13,-10,-11,-16v-1,-22,28,-15,48,-16\",w:124},\".\":{d:\"40,-48v21,20,21,44,-4,44v-33,0,-26,-24,-10,-44r14,0\",w:67},\"/\":{d:\"21,20v-22,-45,21,-95,41,-126v38,-57,115,-158,193,-201v2,0,4,3,7,11v11,29,-15,34,-25,55v-81,56,-189,208,-197,261r-19,0\",w:275},0:{d:\"78,-237v70,-47,269,-41,270,59v0,34,-11,53,-29,76v-13,35,-30,32,-85,64v-6,2,-10,6,-7,8v-73,14,-98,38,-173,1v-7,-13,-52,-48,-46,-88v9,-57,27,-75,70,-120xm123,-38v100,0,202,-46,195,-153v-32,-55,-144,-73,-211,-35v-16,34,-68,54,-53,108v6,25,1,22,-3,39v6,24,41,41,72,41\",w:353},1:{d:\"39,-208v0,-14,6,-59,29,-39v3,4,6,13,10,24r-22,128r8,87v-4,6,-9,3,-16,2v-44,-38,-9,-137,-9,-202\",w:93},2:{d:\"88,-35v47,-10,119,-24,168,-9v0,12,-23,13,-35,16v1,1,3,1,5,1v-74,8,-118,23,-194,23v-14,0,-20,-13,-21,-28v55,-40,83,-61,123,-104v26,-13,65,-67,71,-102v-1,-9,-11,-16,-22,-16v-20,-1,-120,29,-156,49v-10,-2,-30,-20,-10,-28v50,-21,111,-51,178,-48v25,10,44,22,36,39v12,30,-19,64,-34,83v-39,48,-37,39,-115,109v0,5,-3,8,-8,11v4,3,8,4,14,4\",w:265},3:{d:\"188,-282v34,-10,74,25,47,51v-19,32,-55,50,-92,70v28,14,116,25,108,70v8,14,-49,40,-63,48v-29,9,-130,22,-168,42v-6,-5,-19,-7,-12,-22v56,-36,175,-21,210,-76v-9,-20,-88,-42,-97,-33v-20,-1,-41,2,-56,-7r5,-21v56,-25,103,-36,137,-78v1,-1,2,-5,4,-11v-15,-14,-56,7,-79,0v-10,9,-73,22,-92,31v-11,-4,-28,-23,-13,-30v50,-22,96,-26,154,-37v0,-1,8,3,7,3\",w:260},4:{d:\"79,-249v-7,17,-29,75,-33,96v0,6,3,8,8,8v43,-2,111,6,141,-6v17,-47,20,-100,63,-148v9,4,16,7,21,10v-17,31,-44,95,-51,141v7,4,24,-4,23,10v-1,16,-29,12,-31,23v-10,22,-9,69,-7,103v-3,2,-7,5,-10,9v-47,-11,-23,-74,-16,-114v0,-4,-2,-6,-7,-6v-65,2,-89,13,-162,4v-22,-22,-2,-53,5,-76v16,-15,17,-57,35,-70v6,-1,21,11,21,16\",w:267},5:{d:\"185,-272v30,7,45,-8,53,18v1,16,-17,18,-34,14v0,0,-95,-11,-129,1v-6,9,-24,33,-29,54v76,10,171,5,214,47v11,11,22,30,5,52v-14,12,-30,14,-34,27v-26,11,-141,63,-157,60v-16,-2,-25,-19,-4,-27v48,-18,128,-39,170,-86v4,-14,-65,-41,-85,-41r-92,0v-10,-4,-66,-1,-57,-23v0,-23,23,-51,35,-83v11,-28,133,-10,144,-13\",w:284},6:{d:\"70,-64v9,-51,63,-74,123,-71v43,2,109,3,111,41r-25,47v0,1,1,2,2,3v-5,0,-39,10,-41,20v-15,3,-22,4,-22,11v-39,1,-77,20,-119,13v-42,-7,-35,-9,-77,-46v-56,-118,94,-201,176,-229v7,0,21,8,20,15v-2,17,-23,15,-43,24v-69,31,-119,72,-134,145v-5,25,36,68,78,64v59,-6,128,-18,153,-61v-7,-14,-13,-9,-32,-21v-67,-15,-118,-5,-150,43r0,12v-13,4,-17,-3,-20,-10\",w:310},7:{d:\"37,-228v33,-14,173,-17,181,-19v28,-1,24,31,9,45v-17,15,-45,49,-59,69v-17,26,-55,67,-61,113v-10,13,-9,14,-14,20v-33,-13,-20,-25,-11,-53v16,-48,73,-115,109,-156v2,-7,5,-14,-10,-12v-26,4,-54,6,-76,13v-23,-5,-83,31,-94,-9v2,-8,18,-19,26,-11\",w:245},8:{d:\"57,-236v40,-50,166,-51,213,-10v22,28,10,63,-22,78r-35,17v8,5,54,24,53,44v-5,14,-4,33,-18,42v-13,13,-35,18,-44,34v-60,27,-190,49,-194,-42v7,-41,17,-54,59,-70r0,-4v-32,-9,-73,-62,-26,-85v4,0,8,-2,14,-4xm142,-160v24,-2,160,-31,99,-72v-28,-18,-108,-33,-146,-5v-16,12,-28,30,-33,59v24,12,37,20,80,18xm41,-62v30,65,189,6,199,-37v3,-14,-60,-30,-74,-30v-70,0,-118,10,-125,67\",w:290},9:{d:\"11,-192v15,-49,119,-61,161,-23v16,15,27,55,11,79v-20,62,-51,79,-96,118v-10,4,-45,27,-50,6v9,-15,66,-52,98,-99v-7,-7,-8,-3,-25,0v-49,-11,-96,-25,-99,-81xm145,-131v7,-5,13,-34,13,-41v-2,-51,-104,-38,-114,-6v-2,10,37,35,46,35v23,1,43,-1,55,12\",w:198},\":\":{d:\"39,-125v15,-8,40,-1,40,15v0,15,-6,22,-19,22v-13,0,-29,-21,-21,-37xm66,-17v-8,27,-51,19,-46,-8v-1,-6,8,-22,14,-20v29,0,30,6,32,28\",w:95},\";\":{d:\"56,-93v2,-30,37,-22,40,2v0,2,-1,7,-3,15v-13,8,-15,6,-27,4xm64,-44v11,-11,30,-4,32,14v-21,39,-63,71,-92,85v-5,0,-11,-2,-18,-8v11,-23,36,-36,50,-61v11,-7,19,-20,28,-30\",w:107},\"<\":{d:\"166,-202v12,0,29,15,24,29v0,4,-119,64,-120,73v15,21,89,64,91,86v2,29,-18,12,-30,15v-27,-29,-59,-54,-95,-75v-18,-10,-25,-13,-24,-41\",w:176},\"=\":{d:\"125,-121v18,7,55,-9,69,14v0,17,-45,26,-135,26v-18,0,-27,-7,-27,-21v-1,-37,60,-5,93,-19xm138,-71v20,0,48,-1,50,16v-13,24,-86,32,-131,29v-29,-2,-43,-10,-43,-24v-7,-23,36,-14,39,-17v27,6,57,-4,85,-4\",w:196},\">\":{d:\"4,-14v20,-48,77,-59,118,-94v-16,-19,-58,-52,-81,-75v-11,-7,-15,-38,-1,-40v33,16,83,71,121,105v26,23,-6,35,-41,53v-29,16,-56,28,-73,54v-21,15,-16,20,-34,15v-3,0,-9,-16,-9,-18\",w:174},\"?\":{d:\"105,-291v57,-13,107,-4,107,39v0,67,-136,85,-155,137v-1,6,10,23,-4,23v-23,1,-33,-35,-23,-57v31,-41,124,-60,149,-103v-8,-21,-72,-5,-88,-1v-23,6,-59,39,-71,8v0,0,-1,0,1,-17v10,-4,45,-20,84,-29xm80,-25v-6,4,-8,39,-24,22v-24,3,-22,-21,-13,-35v17,-7,29,5,37,13\",w:216},\"@\":{d:\"218,-207v23,8,42,14,47,37v44,68,-27,137,-87,85r1,0v0,2,-59,19,-61,17v-35,0,-42,-47,-17,-68r0,-4v-19,-1,-45,37,-49,40v-37,76,58,72,121,62v11,-2,34,-13,36,3v-14,31,-69,31,-114,33v-51,2,-99,-41,-80,-92v2,-30,22,-40,42,-63v35,-20,91,-53,161,-50xm217,-101v23,0,35,-19,35,-41v0,-43,-75,-41,-102,-19v36,3,55,16,62,41v-6,5,-6,19,5,19xm127,-110v8,5,51,-15,28,-16v-4,0,-25,4,-28,16\",w:291},A:{d:\"97,-81v-23,-10,-39,38,-52,60v-8,6,-8,6,-22,18v-22,-7,-23,-37,-4,-49v7,-8,11,-15,15,-23r-1,1v-14,-26,23,-29,31,-40v1,-1,15,-29,26,-36v17,-31,39,-58,54,-92v16,-20,20,-51,41,-66v29,5,34,62,45,92v9,64,21,103,49,155v-3,25,-44,11,-54,0v-34,-12,-97,-29,-128,-20xm107,-118v20,6,80,10,111,17v6,-7,-4,-15,-7,-24v-11,-28,-9,-92,-30,-117v-9,9,-19,44,-34,55v-9,23,-27,40,-40,69\",w:294},B:{d:\"256,-179v41,10,115,34,91,91v-6,3,-14,12,-19,20v-37,19,-50,34,-63,25v-9,10,-12,11,-34,13r3,-3v-4,-4,-12,-4,-18,0v0,0,2,2,5,4v-21,14,-26,6,-44,15v-4,0,-7,-2,-8,-5v-6,11,-20,-5,-18,11v-36,4,-91,35,-114,4v-7,-62,-10,-138,4,-199v-1,-19,-37,2,-37,-27v0,-8,2,-13,6,-15v68,-31,231,-92,311,-39v8,12,12,20,12,25v-8,42,-32,49,-77,80xm79,-160v72,-17,135,-39,184,-70v20,-13,31,-23,31,-27v1,-6,-30,-13,-38,-12v-54,0,-116,13,-186,41v11,21,1,48,9,68xm262,-43v0,-4,3,-6,-4,-5v0,1,1,2,4,5xm211,-140v-34,7,-94,24,-139,15v-6,20,-4,56,-4,82v0,29,43,1,56,2v48,-11,108,-25,154,-48v20,-10,32,-17,32,-25v0,-18,-33,-26,-99,-26xm195,-20v6,1,6,-2,5,-7v-3,2,-7,2,-5,7\",w:364},C:{d:\"51,-114v-12,75,96,76,166,71r145,-10v9,2,9,5,9,18v-37,18,-85,28,-109,22v-18,10,-47,10,-71,10v-29,0,-68,1,-105,-11v-6,-1,-10,-3,-10,-8v-33,-13,-48,-33,-66,-59v-19,-114,146,-150,224,-177v35,0,88,-31,99,7v-1,29,-49,14,-76,28v-55,8,-115,35,-175,71v-13,8,-23,21,-31,38\",w:376},D:{d:\"312,-78v-2,1,-3,7,-10,5v6,-3,10,-4,10,-5xm4,-252v2,-27,83,-38,106,-39v130,-7,267,1,291,109v0,0,-2,8,-3,25v-5,9,-4,28,-23,34v-4,4,-2,5,-7,0v-3,3,-15,7,-5,10v0,0,-10,14,-13,2v-11,1,-8,5,-20,14v1,2,7,3,9,1v-4,13,-22,13,-11,4v0,-3,1,-6,-3,-5v-40,29,-103,38,-141,65v10,6,22,-7,34,-3v-41,20,-127,44,-171,46v-21,1,-47,-33,-11,-39v15,-2,43,-6,56,-11v-16,-101,-5,-130,9,-207v2,0,4,-1,6,-3v-16,-17,-91,38,-103,-3xm297,-69v-7,3,-17,8,-25,7v1,1,3,2,5,2v-4,2,-11,5,-23,9v4,-11,30,-21,43,-18xm240,-51v10,0,12,2,0,6r0,-6xm220,-36v-1,-3,4,-6,6,-3v0,1,-2,1,-6,3xm125,-48v16,6,137,-46,155,-53v29,-18,101,-44,82,-93v-21,-53,-84,-61,-168,-67v-20,7,-50,3,-77,8v33,54,-12,132,8,205xm159,-22v-4,-1,-15,-5,-15,2v7,-1,12,-2,15,-2\",w:381},E:{d:\"45,-219v-19,-36,34,-41,63,-36v44,-10,133,-8,194,-15v3,2,38,11,52,15v-73,19,-171,21,-246,38v-9,11,-16,32,-20,61v35,11,133,-6,183,3v1,6,2,7,3,14v-46,24,-118,16,-193,27v-15,13,-22,52,-22,66v60,1,121,-20,188,-20v22,10,53,-7,74,5v16,29,-23,26,-43,32v-73,4,-139,13,-216,27r-52,-10v-4,-22,23,-69,26,-98v-3,0,-10,-15,-12,-24v20,-12,34,-23,35,-67v2,-1,5,-5,5,-7v0,-4,-14,-11,-19,-11\",w:353},F:{d:\"270,-258v13,2,59,6,48,34v-78,-3,-143,1,-212,22v-10,16,-21,43,-24,69r145,-9v8,3,29,-3,16,21v-14,-1,-59,13,-60,7v-12,13,-67,18,-108,21v-2,1,-4,3,-7,6v-2,23,-8,43,-7,69v1,28,-30,11,-40,5r10,-80r-26,-14v5,-10,10,-33,28,-25v21,-3,15,-46,26,-59v-1,-3,-32,-13,-28,-24v2,-22,45,-16,59,-30v47,4,99,-14,151,-9v5,-3,25,-3,29,-4\",w:236},G:{d:\"311,-168v53,0,94,57,74,110v-31,37,-71,34,-136,52v-13,-7,-41,10,-57,7v-73,-1,-122,-17,-162,-59v-49,-51,-24,-80,5,-130v35,-61,138,-93,214,-106v16,4,42,-1,40,21v-5,40,-39,2,-73,21v-76,19,-162,65,-177,142v28,103,237,76,312,29v2,-3,3,-7,3,-13v-10,-35,-37,-43,-87,-45v-16,-13,-53,-9,-78,1v-4,-3,-5,-7,-5,-11v17,-29,73,-17,108,-24v12,4,18,5,19,5\",w:391},H:{d:\"300,-268v18,12,19,32,4,51v-35,44,-34,140,-46,217v-1,5,-5,13,-11,12v-6,1,-19,-14,-18,-27r7,-106v-28,7,-76,22,-116,14v-18,2,-36,6,-55,3v-43,-8,-14,53,-33,75v-29,1,-26,-67,-21,-97v5,-31,28,-73,43,-98v2,2,7,3,14,3v13,33,-11,48,-13,78v61,4,118,2,176,2v8,0,13,-6,15,-20v4,-47,21,-87,54,-107\",w:288},I:{d:\"63,-266v34,10,-4,105,-8,128r-24,126v-2,2,-3,1,-9,6v-12,-10,-12,-15,-12,-47v0,-93,9,-156,28,-188v10,-17,19,-25,25,-25\",w:79},J:{d:\"235,-291v26,11,31,104,31,142v0,37,-2,95,-32,126v-33,34,-121,26,-167,1v-18,-11,-54,-29,-59,-59v0,-3,5,-15,16,-14v31,36,90,57,162,51v63,-30,56,-148,32,-226v-1,-16,11,-13,17,-21\",w:282},K:{d:\"212,-219v17,-5,80,-60,80,-19v0,9,-2,14,-5,16r-132,78v-34,23,-54,32,-21,50v39,21,74,23,124,41v5,2,7,5,7,9v-4,24,-55,15,-79,8v-67,-19,-98,-36,-116,-83v9,-24,38,-35,66,-61v7,-4,49,-30,76,-39xm47,-194v11,-20,11,-45,31,-55v2,2,4,3,6,0v29,39,-21,96,-18,128v-17,24,-15,62,-29,113v-4,3,-10,7,-19,11v-12,-13,-10,-28,-8,-53v3,-31,17,-79,37,-144\",w:270},L:{d:\"84,-43v58,0,179,-27,242,-4v3,17,-29,24,-40,26v-85,-4,-202,46,-268,3v-24,-16,-2,-33,-4,-57v26,-76,38,-108,86,-191v14,-7,26,-50,45,-32v6,22,5,31,-12,46v-20,39,-50,82,-67,142v-7,6,-19,46,-19,54v0,9,12,13,37,13\",w:331},M:{d:\"174,-236v-1,52,-11,92,-7,143v10,5,15,-12,22,-18v42,-55,90,-130,136,-174r15,-18v42,2,32,53,11,80v-12,58,-54,143,-34,210v0,3,-3,12,-9,10v-31,-5,-32,-57,-27,-92v4,-27,12,-58,25,-93v-5,-10,5,-19,6,-30v-46,44,-66,110,-129,172v-11,10,-18,15,-22,15v-34,6,-28,-103,-28,-152v-28,22,-65,119,-96,170v-9,15,-34,3,-31,-19v30,-64,91,-177,139,-229v12,-1,29,13,29,25\",w:343},N:{d:\"248,-20v-3,17,-37,18,-43,3v-24,-35,-53,-145,-80,-203v-32,40,-55,120,-92,174v-13,3,-26,-13,-27,-22r87,-171v4,-13,20,-57,42,-32v42,48,46,139,82,198v29,-45,46,-88,65,-153v12,-19,23,-42,38,-60v27,-1,14,18,4,44v-6,46,-32,68,-37,121v-15,29,-33,69,-39,101\",w:307},O:{d:\"240,-268v85,1,163,29,150,125v13,7,-12,18,-5,26v-23,63,-133,112,-228,124v-80,-16,-171,-56,-148,-153v11,-47,20,-43,53,-83v17,-9,39,-22,73,-29v45,-10,81,-10,105,-10xm363,-156v16,-51,-62,-85,-111,-79v-25,-11,-50,8,-81,0v-15,10,-70,16,-85,31v6,20,-27,24,-39,45v-42,75,40,128,115,128v56,0,209,-71,201,-125\",w:383},P:{d:\"70,-225v-7,-12,-36,16,-49,19v-4,0,-9,-5,-14,-17v21,-47,114,-55,172,-59v41,-3,132,33,99,87v-21,34,-72,59,-144,80v-2,16,-79,3,-74,46v3,25,-5,47,-10,68v-22,-1,-23,-29,-22,-56v2,-25,-20,-32,-8,-50v21,-5,10,-35,25,-57v6,-28,14,-48,25,-61xm71,-229v47,14,-2,50,-1,99v41,-3,113,-37,173,-76v5,-9,8,-14,8,-15v-28,-47,-125,-29,-180,-8\",w:252},Q:{d:\"374,-217v20,59,-11,127,-48,156r30,38v-1,6,-8,16,-14,9v-3,0,-19,-9,-47,-26v-72,35,-173,75,-236,12v-70,-40,-67,-213,26,-217r8,5v24,-20,72,-48,112,-38v21,-4,22,-1,50,-2v66,-2,94,20,119,63xm296,-88v13,5,61,-49,63,-84v4,-62,-54,-78,-119,-76v-14,-6,-49,5,-71,3v-42,16,-89,41,-93,94v-9,11,1,25,-7,38v-12,-19,-7,-67,-1,-88v-56,30,-37,137,19,155v27,17,92,19,119,0v12,-2,29,-9,52,-20v2,-2,3,-3,3,-6v-11,-12,-46,-27,-54,-56v0,-13,3,-19,9,-19v18,1,60,52,80,59\",w:379},R:{d:\"100,-275v96,-23,196,-10,208,78v-3,18,-17,52,-49,62v-14,20,-54,23,-79,40v-2,0,-14,2,-36,6v-40,8,-30,14,-3,33v37,27,52,30,118,55v16,6,31,23,12,27v-58,-2,-104,-29,-143,-61v-14,-3,-16,-15,-39,-27v-23,-19,-28,-12,-15,-38v63,-19,111,-15,163,-53v27,-20,43,-36,43,-49v0,-64,-120,-62,-173,-38v-9,4,-38,9,-40,18v-10,32,-16,70,-13,116v-10,21,-8,47,-6,75v2,31,-9,29,-27,22v-9,-55,5,-140,15,-190v-8,-6,-24,10,-24,-11v0,-34,16,-34,42,-55v2,-1,17,-4,46,-10\",w:297},S:{d:\"13,-3v-7,-3,-22,-18,-5,-22v68,-15,119,-32,154,-45v51,-19,39,-34,3,-53v-46,-25,-82,-30,-121,-64v-33,-29,-50,-35,-25,-58v37,-20,119,-29,181,-29v29,0,44,6,44,18v-9,26,-62,6,-104,14v-17,2,-72,6,-92,16v37,53,132,58,180,111v8,9,11,20,11,30v-4,17,-23,35,-42,34v-21,16,-17,1,-49,17v-14,7,-41,9,-56,20v-25,-3,-49,10,-79,11\",w:234},T:{d:\"141,-3v-36,-6,1,-49,-3,-79v10,-19,6,-35,15,-64r26,-85v-51,-9,-100,10,-141,14v-16,2,-30,-26,-11,-32v26,-8,143,-8,179,-19r12,6v67,-2,142,-1,200,-1v8,0,14,3,19,10v-18,16,-74,3,-103,14v-48,-4,-60,4,-113,7v-42,22,-36,130,-58,187v1,12,-9,44,-22,42\",w:277},U:{d:\"365,-262v13,56,-22,104,-36,141v-19,22,-30,38,-57,56v-4,18,-60,35,-78,50v-53,28,-142,0,-161,-34v-31,-56,-37,-108,-11,-164v17,-33,29,-50,48,-29v-2,2,-3,7,-4,13v-44,36,-38,149,7,174v30,26,55,19,102,4v56,-17,66,-34,120,-76v12,-24,56,-68,46,-122r0,-16v0,1,-1,3,-1,6v4,-13,11,-10,25,-3\",w:368},V:{d:\"246,-258v21,-22,31,-26,44,-8v1,1,-12,22,-28,35v-15,25,-41,38,-56,69v-13,15,-20,31,-28,57v-15,13,-11,29,-27,72v3,21,-5,24,-27,27v-33,-45,-54,-118,-84,-167v-5,-26,-18,-50,-25,-76v-3,-12,24,-8,29,-5v8,13,18,52,26,70r52,115v9,-2,4,-9,10,-21r25,-47v25,-44,46,-76,89,-121\",w:234},W:{d:\"31,-213v16,46,17,106,41,151v31,-35,49,-89,76,-127v30,-15,39,27,52,56v10,22,21,48,35,67v2,0,4,-1,5,-3v16,-28,50,-76,79,-121v14,-21,40,-63,64,-83r5,8v-30,58,-76,110,-97,173v-18,28,-25,37,-33,63v-11,1,-16,25,-30,15v-21,-31,-44,-89,-62,-131v0,-2,-1,-3,-5,-5v-17,11,-16,36,-31,50v-20,33,-20,84,-68,94v-24,-19,-23,-81,-39,-111v-1,-15,-29,-94,-10,-108v9,2,12,5,18,12\",w:331},X:{d:\"143,-183v43,-25,69,-36,126,-62v22,-10,86,-10,56,21v-51,3,-158,61,-154,64v10,15,41,30,50,52v27,17,46,60,70,82v9,14,-6,30,-24,20v-35,-43,-75,-100,-116,-132v-48,13,-100,47,-118,94v-1,49,-26,34,-27,4v-1,-26,13,-27,17,-48v22,-27,68,-55,90,-77v-9,-12,-60,-39,-79,-57v-6,-10,-6,-25,12,-25\",w:312},Y:{d:\"216,-240v19,-14,42,10,22,26v-54,66,-121,109,-156,197v-8,21,-11,15,-30,4v3,-37,27,-61,33,-76v12,-12,15,-19,32,-42v-8,-6,-40,5,-45,5v-48,-6,-69,-65,-56,-113v14,0,13,-1,24,7v2,33,12,75,42,73v36,-2,102,-57,134,-81\",w:189},Z:{d:\"60,-255v66,12,200,-34,240,21v-13,42,-63,62,-98,89v-19,15,-47,33,-82,55v-25,16,-47,32,-66,47v58,24,129,-6,208,-6v23,0,36,12,13,19v-33,2,-53,5,-86,10v-32,18,-88,15,-135,15v-9,-1,-55,-1,-48,-29v1,-24,30,-24,40,-41v64,-50,151,-86,208,-147v-38,-17,-155,12,-198,-4v0,0,-11,-33,4,-29\",w:310},\"[\":{d:\"72,-258r-15,250v30,4,55,-3,80,-6v7,-1,8,17,9,23v-28,15,-73,23,-121,21v-7,0,-10,-6,-10,-17v0,-60,25,-193,22,-288v0,-16,13,-20,33,-19v9,-3,34,-12,51,-12v16,0,15,16,19,29v-16,7,-48,10,-68,19\",w:151},\"\\\\\":{d:\"21,38v-20,-21,9,-72,13,-90v44,-78,113,-189,200,-253v2,0,5,4,7,12v11,31,-13,36,-24,58v-74,61,-174,219,-180,273r-16,0\",w:257},\"]\":{d:\"133,-258v-23,-13,-84,6,-85,-32v0,-10,5,-15,14,-15v0,0,30,2,90,7v10,1,15,13,15,36v2,7,-8,59,-13,112r-11,125v-9,48,9,90,-59,71v-20,-4,-39,-1,-59,-4v-5,-10,-25,-12,-14,-30v8,-3,61,-13,78,-8v14,1,8,-7,10,-17v15,-69,21,-166,34,-245\",w:171},\"^\":{d:\"68,-306v20,15,47,36,58,60v-1,4,0,7,-9,7v-26,0,-47,-38,-49,-32v-15,9,-41,50,-54,30v-2,-31,17,-23,33,-51v8,-9,15,-14,21,-14\",w:135},_:{d:\"11,15v-8,33,18,45,50,34r205,2r197,-5v11,-5,14,-9,7,-28v-95,-21,-258,-10,-376,-10v-25,0,-72,-3,-83,7\",w:485},\"`\":{d:\"75,-264v16,8,56,14,39,43v-30,-8,-65,-23,-105,-44v-1,-3,-3,-28,5,-25v16,5,44,17,61,26\",w:129},a:{d:\"124,-56v10,4,59,41,65,50v1,7,-6,17,-12,17r-60,-30v-22,2,-42,21,-65,19v-33,4,-68,-67,-15,-81v41,-27,96,-39,110,9v0,6,-4,12,-11,16v-33,-25,-67,-5,-88,12v10,16,61,-18,76,-12\",w:196},b:{d:\"80,-140v69,1,123,0,134,52v5,26,-71,71,-97,70v-11,11,-88,22,-94,22v-11,-3,-26,-18,-6,-24v19,-5,-2,-19,-1,-35v1,-18,11,-36,-5,-47v-6,-17,-6,-21,14,-32v6,-45,18,-89,28,-124v2,-7,8,-12,17,-15v5,3,10,11,16,28v-12,27,-13,63,-23,96v0,6,6,9,17,9xm87,-107v-40,-9,-31,31,-39,54v8,15,0,25,12,22v30,-8,60,-18,88,-32v39,-18,49,-33,-1,-42v-20,-4,-45,-7,-60,-2\",w:217},c:{d:\"128,-123v29,-7,37,29,12,33v-27,-4,-40,6,-79,25v-8,4,-13,11,-16,22v30,32,91,3,134,11v5,13,-8,26,-22,19v-51,25,-139,28,-150,-30v6,-50,69,-82,121,-80\",w:194},d:{d:\"224,-201v0,-35,-17,-111,24,-94v7,86,-2,119,0,197v-4,2,-8,21,-18,16v-62,-7,-154,-8,-185,29v6,17,28,26,51,26v16,0,100,-15,132,-18v7,5,-6,20,-10,22v-24,8,-122,42,-163,25v-32,-5,-62,-53,-36,-80v35,-37,118,-46,198,-43v1,-22,7,-49,7,-80\",w:265},e:{d:\"4,-57v0,-58,51,-71,110,-74v33,-1,45,16,59,35v1,14,2,39,-7,42v-24,-2,-73,13,-99,11v-2,2,-2,3,-2,3v0,3,12,8,37,15v21,0,69,9,31,22v-9,14,-34,6,-56,6v-27,-5,-73,-28,-73,-60xm123,-102v-22,2,-68,5,-65,26v24,-2,66,5,79,-6v-5,-13,-1,-13,-14,-20\",w:182},f:{d:\"6,-59v6,-29,53,-4,53,-43v0,-64,29,-118,84,-150v45,-25,167,-24,155,51v-1,2,-7,6,0,6r-10,2v-45,-58,-165,-39,-186,39v-7,26,-11,42,-9,62v44,8,95,-21,135,-7v-12,25,-39,21,-76,30v-19,5,-18,7,-54,19v-2,8,15,32,17,35v-6,25,-26,26,-40,-5r-15,-24v-41,10,-44,12,-54,-15\",w:234},g:{d:\"132,-97v30,27,21,75,30,117v-12,31,-11,66,-36,103v-32,46,-105,83,-167,39v-31,-21,-49,-29,-51,-75v-2,-37,77,-50,121,-57v37,-6,68,-10,95,-11v7,-6,3,-32,4,-46v0,0,-1,1,-1,2v0,-18,-5,-31,-14,-45v-44,5,-79,20,-94,-18v3,-54,73,-54,125,-50v12,7,12,13,4,25v-30,-11,-76,8,-90,20v23,3,50,-16,74,-4xm-34,121v60,53,168,1,159,-86v-47,-7,-93,24,-142,30v-12,7,-45,19,-42,29v0,10,8,19,25,27\",w:188},h:{d:\"100,-310v11,-2,10,19,11,20v-11,52,-40,133,-53,189v-6,30,-9,37,-9,47v27,0,113,-34,143,-34v42,0,31,47,39,79v0,4,-5,17,-16,16v4,2,11,3,4,6v-24,-1,-28,-34,-25,-64v-1,-1,-2,-3,-5,-5v-51,0,-110,38,-162,51v-9,1,-15,-15,-16,-23v17,-89,39,-141,71,-264v0,-9,6,-19,18,-18\",w:251},i:{d:\"62,-209v7,18,9,23,-5,38v-23,-6,-21,-18,-11,-36v2,0,8,-1,16,-2xm34,-7v-18,-21,-8,-73,-1,-106v7,-10,20,-8,23,6v-1,36,7,72,-2,104v-8,2,-8,0,-20,-4\",w:80},j:{d:\"88,-191v5,28,-18,40,-28,21v0,-20,12,-29,28,-21xm82,-99v28,-1,16,35,16,61v0,60,-19,150,-35,202v-12,8,-19,31,-35,16v-32,-7,-43,-19,-56,-44r2,-17v11,4,49,45,61,18v10,-55,27,-107,30,-171v0,-16,0,-59,17,-65\",w:120},k:{d:\"59,-66v33,26,114,37,155,62v8,-4,22,-2,19,-17v0,-4,-12,-11,-30,-24v-36,-25,-54,-22,-99,-33v14,-21,119,-13,103,-63r-16,-7r-123,47r25,-93v-3,-15,16,-49,18,-81v1,-15,-21,-14,-25,-3v-31,82,-49,168,-75,257v2,2,22,30,27,10v2,-5,4,-9,9,-11v4,-16,4,-15,12,-44\",w:236},l:{d:\"66,-300v21,-6,37,23,30,55v-10,51,-28,135,-28,208v0,11,6,36,-13,37v-29,-5,-30,-48,-25,-83r28,-177v-6,-17,1,-29,8,-40\",w:102},m:{d:\"348,-59v-2,21,0,57,3,73v-17,3,-30,-1,-32,-16v-8,-7,-5,-44,-13,-70v-35,3,-82,49,-111,70v-12,8,-40,4,-39,-15r2,-56v-1,-13,4,-28,-8,-29v-35,8,-79,72,-115,87v-6,2,-20,-18,-21,-22v1,-20,14,-105,39,-64r8,15v17,-14,72,-56,93,-54v27,3,49,40,43,80v24,-2,66,-55,124,-53v11,14,28,23,27,54\",w:368},n:{d:\"121,-136v37,6,62,54,62,111v0,32,-16,25,-31,17v-18,-30,-5,-45,-22,-85v-37,-13,-71,55,-92,65v-20,-3,-39,-39,-21,-62v2,-12,3,-15,11,-30v12,-8,20,11,29,12\",w:194},o:{d:\"108,-139v52,-24,104,18,104,63v0,59,-66,67,-114,83v-52,-2,-115,-50,-80,-105v23,-18,52,-35,90,-41xm45,-60v16,54,125,16,131,-23v-12,-59,-129,-8,-131,23\",w:217},p:{d:\"82,14v-10,12,-8,117,-24,142v-15,2,-19,0,-29,-13v0,-76,9,-113,22,-192v14,-27,35,-6,37,13v0,8,-3,21,-7,38v2,2,3,2,4,2v26,-9,116,-33,126,-72v-7,-17,-24,-33,-49,-31v-40,3,-116,13,-116,47v-5,7,-2,17,-16,20v-17,-12,-18,-20,-12,-38v8,-25,74,-61,110,-59v55,-15,113,15,118,70v-15,52,-84,79,-146,83v-5,0,-11,-4,-18,-10\",w:251},q:{d:\"144,-147v27,-8,89,-3,97,31v-9,29,-42,-4,-73,1v-32,6,-118,20,-111,49v0,7,13,13,21,13v21,0,78,-24,104,-34v2,0,9,8,22,21v1,1,1,2,1,5v-27,90,-22,70,-43,203v11,15,-15,54,-33,33v-6,-8,-10,-20,-3,-28v1,-72,5,-114,15,-172v-35,3,-35,10,-59,8v-41,-4,-98,-41,-56,-85v33,-34,59,-27,118,-45\",w:248},r:{d:\"242,-117v2,22,5,10,-14,23v-73,-7,-166,-23,-174,56v-8,6,-3,20,-8,36v-29,10,-40,-9,-33,-46v6,-31,7,-69,32,-55v58,-37,66,-42,175,-19v3,5,15,4,22,5\",w:229},s:{d:\"154,-151v19,1,27,24,13,32v-4,1,-22,4,-53,7v-16,8,-22,-2,-39,9v23,21,89,16,96,62v-13,24,-85,35,-124,42v-9,-3,-18,-3,-27,0v-6,-4,-21,-16,-8,-25v30,-6,83,-13,102,-24v-17,-16,-80,-33,-97,-48v-3,-2,-4,-7,-4,-15v-6,-6,3,-13,15,-18v22,-9,94,-23,126,-22\",w:188},t:{d:\"85,-150v10,-41,35,-126,65,-134v4,1,24,19,11,36v-17,22,-29,57,-36,104v26,8,50,-7,73,5v14,0,22,3,22,9v-1,19,-44,18,-57,23v-10,1,-46,0,-54,10v-10,24,-4,67,-20,98v-21,-3,-26,1,-26,-20v0,-9,2,-36,8,-81v-15,-13,-81,9,-77,-27v4,-38,71,6,91,-23\",w:194},u:{d:\"207,-136v-1,-2,11,-14,14,-13v6,0,10,7,10,22v-3,40,-23,56,-40,82v-13,19,-62,43,-93,43v-67,-2,-111,-75,-71,-133v26,-3,21,29,19,49v-1,27,26,44,57,42v41,-2,93,-55,104,-92\",w:242},v:{d:\"24,-127r52,71v42,-16,70,-54,124,-65v5,4,8,7,8,11v-8,19,-4,8,-33,32v0,1,-1,3,-1,5v-61,45,-93,68,-97,68v-40,-15,-50,-72,-68,-100v6,-14,10,-22,15,-22\",w:214},w:{d:\"15,-139v38,-2,27,57,45,86v30,2,67,-66,101,-78v26,6,36,69,60,78v47,-35,51,-54,119,-104v3,0,7,-2,15,-4v19,23,-9,28,-21,49v-33,28,-68,90,-107,109v-10,6,-52,-47,-72,-71v-20,17,-85,74,-97,73v-38,7,-41,-98,-52,-122v0,-1,3,-7,9,-16\",w:325},x:{d:\"95,-124v22,-13,78,-32,99,-31v16,0,23,6,23,18v0,22,-17,11,-49,21v-3,0,-45,20,-42,24v0,1,2,4,8,10v20,24,49,41,44,80v-35,3,-27,-9,-60,-44v-40,-43,-37,-26,-79,9v-1,1,-2,3,-3,8v-12,8,-28,10,-27,-11v-6,-8,45,-65,48,-65v-17,-21,-61,-52,-24,-68v9,0,48,37,62,49\",w:223},y:{d:\"44,-65v22,33,70,4,99,-8v5,-4,28,-15,41,-31r17,0v25,47,-26,70,-40,114v-5,4,-9,8,-10,21v-16,12,-11,33,-27,51v-5,18,-12,43,-23,71v-1,-1,-2,34,-18,29v-12,1,-22,-12,-22,-23v20,-70,24,-65,68,-177v-47,16,-111,8,-116,-39v-11,-13,-7,-62,8,-62v18,0,22,26,23,54\",w:216},z:{d:\"189,-43v9,-1,46,-6,41,12v0,7,-5,13,-15,14v-45,6,-148,24,-181,13v0,-3,-5,-8,-14,-15v5,-44,66,-46,90,-85v-15,-18,-84,21,-84,-14v0,-10,5,-17,14,-18v33,-3,79,-13,109,-3v4,-2,14,11,12,15v0,23,-26,51,-78,84v28,10,73,-3,106,-3\",w:244},\"{\":{d:\"94,-303v27,-9,90,-14,79,26v-20,17,-55,-5,-87,13v-4,1,-6,4,-6,8v33,42,31,44,7,85v-6,10,-13,16,-13,13v5,6,17,17,15,31r-33,78v7,35,28,49,57,63r49,0v7,42,-51,41,-86,20v-43,-13,-51,-51,-56,-89v-2,-25,25,-54,27,-71v-3,-4,-46,-5,-41,-21v2,-10,-3,-29,11,-25v2,0,51,-17,52,-38v4,-3,-25,-23,-25,-49v0,-41,8,-30,50,-44\",w:179},\"|\":{d:\"30,-308v26,5,14,50,15,80v5,78,-8,153,-3,225v-2,15,-1,31,-11,36v-8,-3,-25,-22,-25,-32r9,-183v0,-40,0,-78,1,-112v0,-4,9,-15,14,-14\",w:63},\"}\":{d:\"47,-298v34,-17,118,-18,112,36v6,25,-76,98,-69,103v4,16,39,7,44,28v7,34,-34,17,-37,39v8,29,49,83,23,123v-15,23,-43,26,-73,46v-34,8,-43,11,-49,-17v1,-15,30,-15,33,-20v24,-12,70,-27,55,-61v-14,-33,-37,-68,-19,-103v-46,-50,46,-100,60,-141v-10,-16,-68,6,-77,-12\",w:143},\"~\":{d:\"7,-254v2,-6,59,-50,67,-46v11,-1,35,19,46,26v5,0,27,-10,66,-31v21,8,-1,25,-7,38v-27,21,-48,31,-65,31v-24,-11,-37,-39,-65,-9v-7,7,-26,36,-42,11v3,-5,-3,-17,0,-20\",w:199},\"Ä\":{d:\"161,-217v20,53,23,124,54,170v-2,20,-34,9,-42,0v-27,-12,-78,-18,-101,-18v-26,6,-29,51,-54,63v-18,-4,-19,-30,-3,-38v5,-9,15,-16,8,-29v1,-12,23,-9,26,-19v6,-10,11,-20,20,-27r70,-121v12,-4,16,4,22,19xm82,-91v17,3,62,7,86,13v-13,-33,-13,-80,-29,-109v-15,30,-38,63,-57,96xm187,-259v0,8,-4,13,-12,13v-18,0,-21,-20,-16,-34v18,-1,28,2,28,21xm90,-284v7,3,28,11,28,18v0,9,-9,18,-18,17v-17,0,-25,-24,-10,-35\"},\"Å\":{d:\"161,-217v20,53,23,124,54,170v-2,20,-34,9,-42,0v-27,-12,-78,-18,-101,-18v-26,6,-29,51,-54,63v-18,-4,-19,-30,-3,-38v5,-9,15,-16,8,-29v1,-12,23,-9,26,-19v6,-10,11,-20,20,-27r70,-121v12,-4,16,4,22,19xm82,-91v17,3,62,7,86,13v-13,-33,-13,-80,-29,-109v-15,30,-38,63,-57,96xm112,-239v-31,-17,-9,-61,29,-56v12,2,22,3,33,12v24,39,-30,62,-62,44xm119,-262v2,14,41,8,41,-4v0,-4,-8,-6,-24,-9v-10,-2,-17,10,-17,13\"},\"Ç\":{d:\"48,-108v-12,70,90,71,159,67r138,-9v9,-1,7,9,7,17v-37,16,-80,27,-103,21v-14,9,-40,3,-67,9v-30,0,-64,1,-100,-10v-6,-1,-10,-4,-10,-8v-32,-12,-46,-31,-63,-56v-16,-61,47,-103,83,-121v82,-42,118,-45,200,-60v21,-4,36,34,11,37v-90,11,-148,31,-225,77v-12,8,-23,20,-30,36xm172,18v29,4,47,14,53,35v-2,7,-14,31,-27,31v-28,7,-55,9,-84,14v-18,-5,-13,-32,7,-32v21,0,55,-5,69,-13v-16,-14,-63,10,-50,-35v9,-10,1,-27,23,-29v7,8,11,16,9,29\",w:331},\"É\":{d:\"49,-160v1,-4,-10,-9,-15,-8v-15,-35,32,-30,57,-31r142,-8v2,1,30,7,40,10v-52,16,-133,17,-190,30v-7,9,-12,24,-15,47v26,10,102,-6,141,3v1,3,1,6,2,10v-36,18,-92,12,-149,21v-11,9,-16,41,-16,51v55,-1,111,-21,168,-13v15,-8,48,1,31,18v-53,16,-130,13,-198,29r-39,-8v-4,-19,17,-53,20,-76v-1,0,-7,-11,-9,-18v18,-7,22,-28,30,-57xm133,-248v27,-11,48,-32,59,-14v3,11,-79,52,-88,53v-14,1,-16,-11,-12,-21v10,-4,23,-11,41,-18\",w:252},\"Ñ\":{d:\"224,-182v1,-17,15,-24,22,-38v20,0,13,10,3,33v-3,36,-25,52,-28,94v-10,24,-30,55,-29,82r-19,7v-32,-8,-36,-70,-58,-111v-2,-23,-7,-27,-19,-54v-28,36,-41,93,-71,133v-9,5,-20,-9,-20,-17r73,-149v9,-24,31,-5,36,7v19,41,31,98,53,139v22,-35,34,-69,50,-118v2,-3,3,-3,7,-8xm203,-257v22,-8,41,-24,65,-26v3,11,-8,9,-7,21v-26,20,-46,31,-59,31v-2,3,-49,-27,-49,-29v-11,0,-32,31,-46,32v-11,-2,-12,-21,-4,-23v4,-6,28,-30,48,-34v17,-4,43,28,52,28\",w:219},\"Ö\":{d:\"62,-184v78,-31,249,-50,238,74v-6,65,-102,105,-179,115v-77,-7,-152,-71,-101,-149v2,-5,24,-33,42,-40xm279,-120v14,-38,-47,-64,-85,-61v-20,-9,-41,7,-62,0v-11,7,-54,12,-66,24v0,20,-51,35,-38,66v-1,43,50,67,96,67v44,0,162,-55,155,-96xm197,-229v0,8,-4,13,-12,13v-17,0,-19,-19,-16,-34v18,-1,29,1,28,21xm101,-254v7,3,28,9,27,18v1,8,-8,17,-17,17v-18,0,-26,-24,-10,-35\",w:273},\"Ü\":{d:\"281,-202v6,67,-30,121,-71,152v-3,14,-47,26,-60,39v-41,20,-110,1,-125,-26v-24,-44,-28,-84,-8,-127v12,-26,23,-38,37,-22v-2,2,-3,5,-3,10v-34,26,-29,116,5,134v22,32,86,-1,109,-8v38,-28,104,-64,97,-149v2,-10,7,-8,19,-3xm197,-227v0,8,-4,13,-12,13v-18,0,-21,-20,-16,-34v18,-1,28,2,28,21xm101,-252v7,3,27,10,27,18v0,8,-9,18,-18,17v-18,-1,-24,-25,-9,-35\",w:262},\"á\":{d:\"118,-53v10,4,55,41,62,47v0,7,-5,16,-12,16r-57,-28v-20,3,-40,19,-61,18v-10,2,-43,-17,-42,-36v0,-14,7,-40,27,-41v39,-26,92,-36,104,9v0,6,-2,11,-9,15v-32,-24,-64,-6,-84,11v8,15,58,-17,72,-11xm32,-117v24,-3,85,-55,101,-32v3,11,-80,53,-89,53v-13,2,-14,-10,-12,-21\",w:173},\"à\":{d:\"118,-53v10,4,55,41,62,47v0,7,-5,16,-12,16r-57,-28v-20,3,-40,19,-61,18v-10,2,-43,-17,-42,-36v0,-14,7,-40,27,-41v39,-26,92,-36,104,9v0,6,-2,11,-9,15v-32,-24,-64,-6,-84,11v8,15,58,-17,72,-11xm99,-137v7,6,56,14,37,40v-28,-7,-62,-21,-100,-41v-2,-3,-2,-26,5,-23v16,4,42,17,58,24\",w:173},\"â\":{d:\"118,-53v10,4,55,41,62,47v0,7,-5,16,-12,16r-57,-28v-20,3,-40,19,-61,18v-10,2,-43,-17,-42,-36v0,-14,7,-40,27,-41v39,-26,92,-36,104,9v0,6,-2,11,-9,15v-32,-24,-64,-6,-84,11v8,15,58,-17,72,-11xm147,-97v-27,-6,-39,-26,-60,-37v-21,7,-38,46,-65,23v-2,-5,-3,-10,-4,-14v18,-4,43,-31,61,-42v28,5,40,21,62,36v12,8,18,17,18,25v0,6,-4,9,-12,9\",w:173},\"ä\":{d:\"118,-53v10,4,55,41,62,47v0,7,-5,16,-12,16r-57,-28v-20,3,-40,19,-61,18v-32,5,-66,-64,-15,-77v39,-26,92,-36,104,9v0,6,-3,11,-9,15v-32,-24,-64,-6,-84,11v8,15,58,-17,72,-11xm142,-119v0,8,-4,13,-12,13v-18,0,-21,-20,-16,-34v18,-1,28,2,28,21xm46,-144v7,3,28,9,27,18v1,8,-9,18,-18,17v-18,-1,-25,-25,-9,-35\",w:173},\"ã\":{d:\"118,-53v10,4,55,41,62,47v0,7,-5,16,-12,16r-57,-28v-20,3,-40,19,-61,18v-10,2,-43,-17,-42,-36v0,-14,7,-40,27,-41v39,-26,92,-36,104,9v0,6,-2,11,-9,15v-32,-24,-64,-6,-84,11v8,15,58,-17,72,-11xm114,-136v22,-8,41,-24,64,-26v3,11,-7,10,-7,21v-26,20,-45,30,-58,30v-3,3,-49,-26,-49,-28v-10,-1,-32,35,-51,31v-12,-32,8,-29,32,-51v24,-21,54,20,69,23\",w:173},\"å\":{d:\"118,-53v10,4,55,41,62,47v0,7,-5,16,-12,16r-57,-28v-20,3,-40,19,-61,18v-10,2,-43,-17,-42,-36v0,-14,7,-40,27,-41v39,-26,92,-36,104,9v0,6,-2,11,-9,15v-32,-24,-64,-6,-84,11v8,15,58,-17,72,-11xm54,-101v-37,-20,-9,-71,34,-65v13,1,25,3,38,13v27,45,-34,73,-72,52xm61,-128v4,20,48,7,49,-5v0,-5,-9,-7,-28,-10v-12,-2,-21,11,-21,15\",w:173},\"ç\":{d:\"108,-118v30,-6,56,21,25,33v-24,-6,-39,5,-75,23v-7,4,-12,12,-15,22v31,28,86,3,128,9v3,28,-29,16,-44,28v-53,15,-106,10,-120,-37v0,-48,62,-70,101,-78xm92,18v23,4,45,12,48,32v-2,6,-12,28,-25,28v-24,6,-50,10,-77,13v-16,-4,-11,-28,7,-29v17,-1,51,-4,63,-12v-14,-15,-57,10,-46,-32v9,-8,0,-25,21,-26v6,6,12,14,9,26\",w:171},\"é\":{d:\"108,-124v42,-3,70,39,50,73v-22,-1,-70,12,-94,10v-1,1,-2,3,-2,3v0,3,12,7,35,14v18,0,64,7,30,21v-10,14,-31,6,-53,6v-26,-7,-70,-26,-70,-58v0,-54,48,-65,104,-69xm130,-78v-2,-35,-66,-13,-77,3v16,6,62,6,77,-3xm76,-169v26,-11,48,-32,59,-14v3,10,-80,53,-89,53v-14,1,-14,-10,-12,-21v15,-7,16,-7,42,-18\",w:161},\"è\":{d:\"108,-124v42,-3,70,39,50,73v-22,-1,-70,12,-94,10v-1,1,-2,3,-2,3v0,3,12,7,35,14v18,0,64,7,30,21v-10,14,-31,6,-53,6v-26,-7,-70,-26,-70,-58v0,-54,48,-65,104,-69xm130,-78v-2,-35,-66,-13,-77,3v16,6,62,6,77,-3xm95,-166v7,6,54,14,37,40v-28,-7,-62,-21,-100,-41v-3,-3,-3,-26,5,-24v16,5,42,18,58,25\",w:161},\"ê\":{d:\"108,-124v42,-3,70,39,50,73v-22,-1,-70,12,-94,10v-1,1,-2,3,-2,3v0,3,12,7,35,14v18,0,64,7,30,21v-10,14,-31,6,-53,6v-26,-7,-70,-26,-70,-58v0,-54,48,-65,104,-69xm130,-78v-2,-35,-66,-13,-77,3v16,6,62,6,77,-3xm145,-129v-27,-6,-39,-26,-60,-37v-8,0,-10,4,-14,10v-11,15,-51,34,-56,0v17,-4,44,-32,61,-43v28,5,41,21,63,36v12,8,17,17,17,25v0,6,-3,9,-11,9\",w:161},\"ë\":{d:\"108,-124v42,-3,70,39,50,73v-22,-1,-70,12,-94,10r-3,3v0,3,12,7,36,14v18,0,64,7,30,21v-10,14,-31,6,-53,6v-26,-7,-67,-27,-71,-58v7,-52,48,-65,105,-69xm130,-78v-2,-35,-66,-13,-77,3v16,6,62,6,77,-3xm140,-144v0,8,-4,12,-12,12v-18,0,-19,-19,-16,-33v18,-1,29,1,28,21xm44,-169v7,3,28,9,28,17v0,9,-9,18,-18,18v-18,0,-25,-24,-10,-35\",w:161},\"í\":{d:\"59,-98v20,4,15,53,10,95v-6,1,-11,2,-19,-4v1,-7,-12,-18,-10,-24v4,-22,-4,-65,19,-67xm50,-139v27,-11,49,-32,59,-14v3,11,-80,53,-89,53v-14,1,-14,-12,-11,-22v15,-7,14,-6,41,-17\",w:105},\"ì\":{d:\"57,-98v22,5,13,50,11,95v-7,1,-11,2,-20,-4v1,-7,-12,-18,-10,-24v4,-22,-2,-64,19,-67xm70,-139v14,10,54,14,37,41v-28,-7,-61,-22,-99,-42v-3,-2,-3,-25,5,-23v15,5,41,17,57,24\",w:109},\"î\":{d:\"72,-98v20,5,12,51,10,95v-6,2,-13,1,-20,-4v1,-8,-12,-18,-10,-24v4,-22,-3,-65,20,-67xm134,-94v-26,-7,-39,-25,-60,-37v-7,0,-9,4,-13,10v-14,15,-51,34,-56,-1v18,-4,45,-33,61,-43v27,6,40,22,62,37v12,8,18,17,18,25v0,6,-4,9,-12,9\",w:143},\"ï\":{d:\"55,-97v19,5,15,53,10,95v-17,5,-26,-14,-30,-28v6,-20,-3,-65,20,-67xm110,-118v0,8,-4,13,-12,13v-17,0,-19,-19,-16,-34v18,-1,29,1,28,21xm14,-143v6,3,28,8,28,17v0,9,-9,18,-18,18v-18,0,-25,-24,-10,-35\",w:107},\"ñ\":{d:\"115,-129v34,6,59,50,59,105v0,31,-15,24,-30,17v-15,-29,-5,-42,-20,-81v-35,-13,-68,52,-88,61v-20,-4,-38,-36,-19,-59v0,-12,3,-14,10,-28v11,-8,18,11,27,12xm117,-166v22,-7,41,-23,64,-26v3,11,-7,10,-7,21v-26,20,-45,30,-58,30v-3,3,-49,-26,-49,-28v-10,-1,-32,35,-51,31v-5,-12,-8,-16,0,-23v4,-6,28,-29,48,-33v17,-3,43,28,53,28\",w:171},\"ó\":{d:\"102,-132v50,-20,99,16,99,60v0,54,-60,64,-108,79v-50,-2,-110,-48,-76,-100v22,-17,49,-33,85,-39xm136,-104v-34,0,-91,27,-94,47v16,51,125,16,125,-22v0,-17,-10,-25,-31,-25xm49,-154v24,-3,85,-55,101,-32v3,11,-80,53,-89,53v-14,0,-13,-8,-12,-21\",w:191},\"ò\":{d:\"102,-132v50,-20,99,16,99,60v0,54,-60,64,-108,79v-50,-2,-110,-48,-76,-100v22,-17,49,-33,85,-39xm136,-104v-34,0,-91,27,-94,47v16,51,125,16,125,-22v0,-17,-10,-25,-31,-25xm115,-181v14,10,51,13,37,40v-28,-7,-62,-21,-100,-41v-3,-2,-3,-26,5,-23v16,5,42,17,58,24\",w:191},\"ô\":{d:\"102,-132v50,-20,99,16,99,60v0,54,-60,64,-108,79v-50,-2,-110,-48,-76,-100v22,-17,49,-33,85,-39xm136,-104v-34,0,-91,27,-94,47v16,51,125,16,125,-22v0,-17,-10,-25,-31,-25xm110,-177v-22,6,-38,45,-65,22v-2,-4,-3,-9,-4,-13v18,-4,43,-32,61,-43v27,6,40,21,62,36v12,9,18,17,18,25v1,11,-15,10,-23,7\",w:191},\"ö\":{d:\"102,-132v50,-20,99,16,99,60v0,54,-60,64,-108,79v-50,-2,-110,-48,-76,-100v22,-17,49,-33,85,-39xm136,-104v-34,0,-91,27,-94,47v16,51,125,16,125,-22v0,-17,-10,-25,-31,-25xm161,-160v0,8,-4,13,-12,13v-17,0,-19,-19,-16,-34v18,-1,29,1,28,21xm65,-185v7,3,28,9,28,18v0,7,-9,18,-18,17v-18,1,-25,-24,-10,-35\",w:191},\"õ\":{d:\"102,-132v50,-20,99,16,99,60v0,54,-60,64,-108,79v-50,-2,-110,-48,-76,-100v22,-17,49,-33,85,-39xm136,-104v-34,0,-91,27,-94,47v16,51,125,16,125,-22v0,-17,-10,-25,-31,-25xm58,-199v26,-21,54,18,69,22v4,0,15,-5,34,-13v22,-9,21,-16,31,-13v3,11,-9,9,-7,22v-26,20,-46,30,-59,30v-2,4,-49,-28,-49,-29v-11,0,-32,31,-46,32v-12,-3,-13,-21,-4,-23v4,-6,14,-15,31,-28\",w:191},\"ú\":{d:\"196,-129v-1,-4,12,-13,15,-13v6,0,8,7,8,21v0,24,-7,25,-13,45v-7,7,-14,21,-24,29v-9,24,-61,45,-89,45v-63,0,-105,-72,-67,-126v24,-3,19,27,18,46v-1,26,23,42,54,40v38,-3,88,-51,98,-87xm106,-174v26,-11,48,-32,59,-14v3,11,-81,53,-89,54v-13,1,-15,-12,-11,-22v15,-7,14,-7,41,-18\",w:213},\"ù\":{d:\"196,-129v-1,-4,12,-13,15,-13v6,0,8,7,8,21v0,24,-7,25,-13,45v-7,7,-14,21,-24,29v-9,24,-61,45,-89,45v-63,0,-105,-72,-67,-126v24,-3,19,27,18,46v-1,26,23,42,54,40v38,-3,88,-51,98,-87xm126,-166v7,6,56,14,37,40v-28,-7,-62,-22,-100,-42v-2,-3,-2,-26,5,-23v16,4,42,18,58,25\",w:213},\"û\":{d:\"196,-129v-1,-4,12,-13,15,-13v6,0,8,7,8,21v0,24,-7,25,-13,45v-7,7,-14,21,-24,29v-9,24,-61,45,-89,45v-63,0,-105,-72,-67,-126v24,-3,19,27,18,46v-1,26,23,42,54,40v38,-3,88,-51,98,-87xm172,-143v-27,-6,-39,-26,-60,-37v-8,0,-10,4,-14,10v-11,15,-49,35,-56,0v17,-4,44,-32,61,-43v27,6,41,21,63,36v12,9,17,17,17,25v0,6,-3,9,-11,9\",w:213},\"ü\":{d:\"196,-129v-1,-4,12,-13,15,-13v6,0,8,7,8,21v0,24,-7,25,-13,45v-7,7,-14,21,-24,29v-9,24,-61,45,-89,45v-63,0,-105,-72,-67,-126v24,-3,19,27,18,46v-1,26,23,42,54,40v38,-3,88,-51,98,-87xm168,-161v0,8,-3,13,-11,13v-17,0,-20,-19,-17,-34v18,-1,29,1,28,21xm72,-186v7,3,29,9,28,18v0,7,-9,18,-18,17v-18,1,-25,-24,-10,-35\",w:213},\"†\":{d:\"22,-286v15,6,5,-20,19,-19v9,-3,15,21,17,22v6,1,12,3,20,6v3,10,5,16,-9,16v-34,-10,-6,51,-34,52v-20,-7,11,-47,-15,-49v-14,3,-25,-5,-17,-24v7,-2,14,-4,19,-4\",w:77},\"°\":{d:\"106,-268v0,36,-35,38,-51,46v-48,5,-60,-58,-25,-78v33,-11,76,-9,76,32xm38,-257v16,7,39,2,38,-17v-13,-9,-28,-1,-32,11v-5,3,-7,0,-6,6\",w:114},\"¢\":{d:\"105,-188v13,-12,14,-18,26,-15v7,23,7,15,-3,49v6,0,18,14,17,20v-3,5,-12,19,-26,13v-14,1,-14,5,-16,21v10,10,46,-13,38,18v-9,17,-23,16,-54,20v-17,16,-4,55,-29,60v-37,-10,19,-64,-24,-71v-20,-10,-37,-47,-6,-62v23,-20,73,-4,77,-53xm65,-101v4,-9,7,-8,3,-13v-14,4,-22,10,-3,13\",w:154},\"£\":{d:\"153,-170v3,22,62,0,49,39v-18,6,-31,12,-58,9v-12,-1,-17,30,-23,39v19,26,50,56,91,35v9,-2,27,-13,27,4v0,27,-27,39,-58,42v-32,-5,-59,-19,-78,-39v-6,1,-35,44,-57,39v-25,0,-37,-15,-37,-46v0,-41,43,-53,73,-50v4,1,12,-18,12,-21v-7,-15,-49,0,-44,-30v-2,-31,31,-16,60,-19v16,-30,25,-119,93,-113v16,2,75,16,50,44v-4,5,-7,7,-12,8v-18,-12,-32,-18,-41,-18v-35,-1,-38,52,-47,77xm43,-45v4,5,12,-2,11,-9v-1,2,-12,1,-11,9\",w:242},\"§\":{d:\"141,-115v12,10,29,36,28,56v-4,68,-129,69,-152,16v-1,-12,-10,-22,8,-23v17,3,47,21,67,23v16,1,40,-8,38,-21v-8,-49,-119,-30,-117,-85v1,-28,15,-45,-3,-64v-1,-53,55,-61,103,-62v15,-5,6,-5,20,-2v16,17,23,27,23,30v-1,26,-29,7,-45,7v-21,0,-51,2,-62,17v19,14,87,8,97,43v18,14,16,57,-5,65xm64,-147r57,17v10,-28,-22,-43,-47,-44v-25,-1,-35,19,-10,27\",w:174},\"•\":{d:\"130,-114v0,47,-124,54,-120,-8r6,-31v44,-28,64,-34,104,0v8,6,10,20,10,39\",w:139},\"¶\":{d:\"121,-237v21,-9,44,-13,63,-1v-1,7,5,6,7,11r-4,190v-2,33,4,39,-15,40v-16,1,-10,-20,-10,-33r4,-161v0,-17,-1,-34,-16,-25v2,10,1,23,1,35v-9,46,-6,75,-15,156v-3,4,-7,5,-12,5v-17,-10,-3,-89,-10,-115v-43,14,-98,10,-101,-29v-4,-53,59,-63,104,-75v3,1,4,2,4,2xm95,-204v2,9,-30,50,1,50v35,0,23,-13,29,-43v0,-1,-2,-7,-4,-15v-12,-1,-14,2,-26,8\",w:206},\"ß\":{d:\"33,10v-29,4,-28,-32,-16,-70v18,-58,17,-137,56,-176v12,-24,46,-58,82,-43v20,8,47,24,47,54v0,30,-62,59,-67,90v33,23,56,33,63,63v-18,21,-22,36,-48,54v-24,17,-27,41,-53,16v-2,-19,7,-35,24,-42v15,-13,26,-22,34,-40v-13,-17,-78,-29,-56,-70v-3,-27,64,-54,66,-86v-8,-25,-41,-4,-52,8v-29,30,-47,83,-51,141v-17,25,-8,71,-29,101\"},\"®\":{d:\"75,-194v78,-29,116,9,130,84v-2,42,-22,47,-57,67v-74,20,-161,-19,-129,-110v6,-18,29,-34,57,-40xm46,-86v51,36,84,21,129,-15v7,-15,0,-39,-10,-49v-13,-37,-49,-26,-86,-18v-28,7,-49,46,-33,82xm72,-123v-5,-43,68,-57,75,-14v-17,26,-18,17,3,32v2,25,-25,18,-45,7r-4,-4v-1,8,-3,20,-12,24v-10,-3,-21,-34,-17,-45xm112,-135v-10,-1,-20,13,-9,14v6,-6,9,-11,9,-14\",w:217},\"©\":{d:\"102,-29v-74,5,-124,-84,-70,-140v22,-22,53,-35,97,-38v46,-4,88,49,74,100v0,44,-51,75,-101,78xm96,-66v42,-3,75,-23,75,-69v0,-23,-4,-38,-44,-38v-16,0,-33,6,-49,20v36,-4,55,-12,62,20v-5,16,-49,1,-50,21v10,15,53,-14,54,11v0,18,-14,27,-42,27v-22,1,-46,-11,-46,-31v0,-25,7,-39,20,-44v-1,-1,-2,-2,-3,-2v-51,22,-32,89,23,85\",w:217},\"™\":{d:\"213,-307v28,9,11,49,7,75v-1,4,-4,6,-11,6v-7,1,-11,-14,-11,-34v-14,-6,-34,34,-46,28v-2,0,-10,-9,-24,-27v-10,7,-3,36,-27,31v-15,-24,-3,-27,1,-48v-6,-7,-27,-1,-31,3v-3,14,-7,30,-11,51v-5,10,-29,9,-24,-12v-5,-8,1,-18,3,-35v-13,6,-33,2,-29,-18v20,-17,64,-17,100,-19v28,-1,29,30,45,39v11,-6,35,-32,58,-40\",w:239},\"´\":{d:\"52,-284v29,-11,50,-34,62,-14v3,12,-86,54,-94,56v-14,0,-16,-12,-12,-23v11,-5,25,-11,44,-19\",w:120},\"¨\":{d:\"124,-259v0,9,-4,13,-12,13v-18,0,-22,-21,-17,-35v19,-1,30,1,29,22xm23,-285v7,2,30,9,29,18v1,10,-9,19,-18,19v-19,0,-28,-26,-11,-37\",w:136},\"≠\":{d:\"48,-130v29,11,49,-57,60,-50v25,6,7,27,-1,46v22,5,29,7,21,22v-18,2,-48,-1,-50,15v9,8,53,-7,54,10v-4,22,-46,20,-72,24v-7,13,-18,32,-34,57v-8,6,-15,-3,-13,-14v-1,-9,15,-39,14,-45v-30,5,-24,-17,-13,-25v12,-1,36,4,29,-13v-14,0,-47,6,-36,-12v0,-18,27,-13,41,-15\",w:140},\"Æ\":{d:\"335,-259v0,30,-102,12,-122,34v10,21,2,79,16,100v24,-6,59,-13,86,-16v23,-2,32,21,13,26r-103,29v-3,22,-4,38,8,43v28,-5,60,-6,86,-14v5,-1,14,7,14,11v6,16,-90,40,-107,40v-29,0,-39,-19,-32,-46v-2,-4,0,-26,-9,-28v-29,2,-58,6,-88,6v-31,0,-40,74,-82,73v-18,-23,4,-37,12,-50v40,-65,112,-126,165,-207v20,-17,69,-11,112,-13v21,0,31,4,31,12xm123,-111v28,1,44,-2,67,-10v-4,-22,5,-49,-7,-65v-3,6,-65,61,-60,75\",w:348},\"Ø\":{d:\"76,-211v41,-13,100,-22,140,-3v26,-19,40,-29,44,-29v10,0,15,7,15,20v0,15,-23,23,-30,35v23,39,29,114,-21,139v-36,19,-102,35,-147,18v-14,-5,-29,29,-46,35v-25,-13,-19,-24,3,-56v-9,-17,-28,-27,-28,-60v0,-38,23,-72,70,-99xm107,-66v55,15,125,-12,123,-70v0,-16,-5,-25,-13,-29r-110,95r0,4xm39,-108v-1,3,17,31,22,27v8,-6,109,-90,123,-106v-15,-11,-43,1,-63,2v-33,10,-80,35,-82,77\",w:270},\"∞\":{d:\"322,-72v-4,22,-54,41,-76,41v-43,0,-83,-17,-114,-35v-46,19,-125,53,-128,-18v-1,-14,10,-22,13,-35v29,-10,62,-31,97,-4v37,28,47,5,75,-8v40,-19,73,-10,114,1v13,1,18,55,19,58xm228,-69v15,0,62,-12,61,-25v-19,-23,-89,-10,-105,11v0,2,1,4,2,4v28,6,42,10,42,10xm75,-102v-13,2,-41,4,-44,19v0,4,3,7,10,7v21,0,40,-6,54,-17v-9,-6,-16,-9,-20,-9\",w:330},\"±\":{d:\"93,-163v-7,46,76,-4,46,47v-14,6,-27,13,-38,8v-24,2,-14,28,-28,44r-14,0v-7,-12,-5,-15,-7,-33v-12,-7,-41,-1,-37,-24v2,-11,23,-17,36,-14r28,-38v4,0,9,4,14,10xm113,-27v-12,18,-58,27,-85,24v-16,2,-22,-23,-13,-36v28,-7,85,-11,98,12\",w:151},\"≤\":{d:\"73,-109v10,15,87,16,87,42v0,11,-5,16,-13,16v-36,-11,-69,-24,-109,-31v-18,-8,-18,-13,-9,-36v59,-56,93,-83,101,-83v16,0,18,17,14,28v-27,24,-42,35,-71,64xm10,-29v35,-12,117,-26,148,-3v1,2,-5,19,-8,18r-124,15v-16,2,-26,-18,-16,-30\",w:168},\"≥\":{d:\"115,-174v20,7,53,36,20,57v-19,11,-91,68,-82,59v-18,3,-25,-22,-13,-31v15,-10,14,-10,70,-51r-50,-37v-5,-4,-5,-27,4,-28v16,7,40,17,51,31xm14,-32v33,-10,86,-14,127,-10v12,12,5,23,-11,27v-49,9,-82,13,-99,13v-22,0,-24,-16,-17,-30\",w:163},\"¥\":{d:\"31,-248v30,-3,64,64,74,59v37,-22,77,-65,107,-82v20,-11,34,18,21,32v-28,19,-52,38,-70,57v-18,8,-40,21,-35,60v2,19,39,7,64,7v25,0,16,21,2,27v-36,16,-46,8,-68,18v6,11,101,-20,66,24v-21,11,-42,12,-75,20v-2,1,-5,6,-10,18v-8,3,-11,10,-24,8v-7,-17,-2,-18,-9,-26v-13,5,-39,3,-53,-2v-10,-17,-7,-27,0,-34v23,-1,45,1,64,-5v-11,-7,-28,-4,-64,-6v-13,-8,-15,-24,-6,-35v33,-2,102,9,76,-37v-14,-14,-33,-38,-60,-66v-10,-10,-8,-28,0,-37\",w:219},\"µ\":{d:\"123,-114v41,0,54,-9,127,-17v12,-2,20,-6,25,-12v5,-78,43,-127,119,-138v38,-5,46,23,55,48v-5,5,2,4,2,12v-2,47,-72,81,-129,95v-17,4,-12,32,-2,39v30,-5,24,0,99,4v14,9,14,20,-1,23v-17,3,-71,-1,-85,13v1,19,18,35,-3,47v-1,-6,-10,-7,-16,-5v-3,-3,-20,-37,-29,-41v-15,8,-50,22,-49,-9v1,-19,2,-27,28,-26v24,1,13,-12,8,-30v-22,1,-64,16,-111,23v-50,7,-17,47,-17,57v0,10,-5,15,-13,15v-20,-9,-27,-30,-33,-55v-20,-17,-52,8,-85,-6v-2,-10,-13,-26,4,-29v32,-6,41,-1,65,-7v-17,-74,-4,-173,69,-180v55,-20,130,8,131,65v-11,9,-10,2,-29,-11v-33,-23,-37,-26,-76,-25v-41,13,-69,38,-67,100v0,34,4,50,13,50xm317,-152v29,-6,106,-43,106,-71v0,-23,-24,-25,-42,-17v-31,1,-74,48,-64,88\",w:462},\"∂\":{d:\"456,-113v55,-37,119,-8,176,5v-19,37,-104,-5,-144,18v-5,64,-45,87,-130,87v-43,0,-70,-8,-96,-21v-54,15,-146,29,-209,10v-18,-11,-43,-26,-46,-53v-1,-9,28,-48,51,-46v55,-10,55,-8,101,-8v29,0,17,-26,23,-56v4,-19,4,-74,34,-49v4,42,-7,83,-10,124v0,4,-11,10,-34,17v-29,-1,-45,-4,-74,1v-10,2,-57,3,-52,18v30,43,132,30,190,18v2,-10,-7,-19,-5,-28v5,-36,31,-59,74,-56v27,2,71,4,70,35v-1,30,-37,41,-58,57v35,13,131,15,135,-23v2,-19,-5,-36,4,-50xm262,-85v0,3,13,28,19,25v7,0,48,-13,61,-29v-10,-17,-71,-17,-80,4\",w:640},\"∑\":{d:\"235,-95v-3,-59,120,-41,160,-28v3,-2,15,-3,14,4v1,3,-16,19,-21,18r-97,4v-25,5,-18,18,-23,56v-16,14,-25,24,-36,18v-83,32,-154,29,-212,-17v-45,-68,41,-114,107,-119v50,-4,59,66,22,85v-16,8,-61,10,-79,15v36,27,185,24,165,-36xm128,-119v-23,-3,-43,4,-53,15v13,5,46,-4,53,-15\",w:414},\"∏\":{d:\"243,-190v7,-18,27,-19,38,6v0,2,-5,8,-14,16v-8,-9,-27,-4,-24,-22xm221,-111v55,-7,60,22,45,64v5,23,17,47,-22,47v-35,0,-18,-40,-15,-70v-2,-19,-35,-13,-52,-18v-2,0,-13,1,-34,3v-4,0,-10,11,-13,31v-3,20,1,43,-11,54v-12,-4,-13,-5,-21,-3v-13,-13,-3,-25,-12,-41v7,-6,12,-22,10,-39v-23,-8,-79,15,-87,-21v12,-28,78,-4,101,-20r36,-96v8,-19,17,-28,27,-28v10,0,15,6,15,18v-6,32,-31,62,-38,109v25,10,47,-1,71,10\",w:282},\"π\":{d:\"247,-240v-3,5,-14,12,-21,6v-41,5,-71,-4,-85,37v-6,7,-21,42,-25,61v28,12,104,-16,129,24v8,11,12,24,12,38v-7,17,-2,99,-40,68v-9,-23,-5,-47,-1,-73v3,-24,-40,-24,-50,-19v-4,0,-18,2,-44,6v-30,-6,-16,49,-33,58v-19,-11,-14,2,-29,-10v8,-71,20,-114,43,-170v-24,-2,-49,4,-73,7v-30,3,-32,-33,-7,-36r184,-22v17,-1,40,13,40,25\",w:265},\"∫\":{d:\"62,-151v-7,-70,20,-130,63,-150v28,1,39,10,70,23v20,8,6,33,-6,35v-29,-13,-45,-20,-49,-20v-20,-4,-45,51,-43,70v8,60,5,129,5,189v0,62,-27,93,-79,93v-37,-1,-71,-14,-63,-57v21,0,79,34,91,-2v16,-3,14,-64,21,-85v-2,-31,-1,-74,-10,-96\",w:156},\"ª\":{d:\"6,-265v1,-31,58,-53,80,-22v-11,14,25,28,25,36v-2,8,-15,12,-27,10v-22,-29,-68,19,-78,-24xm52,-281v-8,1,-24,10,-9,13v11,1,24,-10,9,-13\",w:117},\"º\":{d:\"13,-273v1,-31,56,-41,83,-18v36,8,14,48,-9,52v-35,6,-64,-5,-74,-34xm81,-269v-7,-7,-20,-11,-29,-6v5,13,13,11,29,6\",w:128},\"Ω\":{d:\"121,-111v9,16,43,-5,54,5v28,-4,62,8,81,-5v48,-33,166,-28,160,44v15,34,-51,53,-88,53v-34,0,-53,-21,-71,-37v-15,7,-32,-4,-28,-22v-26,-4,-93,-6,-108,8v8,17,5,37,12,54v-1,15,-18,15,-31,10v-9,-15,-20,-39,-19,-63v-20,-9,-73,15,-79,-18v4,-28,50,-11,77,-24v12,-99,36,-168,137,-178v35,5,64,20,67,57v0,13,-14,18,-20,5v-15,-35,-83,-31,-104,4v-26,20,-39,82,-40,107xm334,-45v15,2,51,-14,53,-22v-7,-20,-36,-31,-69,-29v-8,-1,-39,6,-37,14v-3,10,44,38,53,37\",w:424},\"æ\":{d:\"145,-44r33,7v2,42,-59,29,-85,16v-6,7,-35,24,-48,15v-19,2,-35,-21,-33,-37v2,-24,5,-19,28,-36v-6,-8,-45,3,-33,-21v21,-22,58,-12,85,-1v6,-5,35,-28,45,-15v20,-4,36,17,36,35v0,23,-4,21,-28,37xm111,-72v12,3,49,-16,19,-17v-5,0,-20,12,-19,17xm74,-50v-14,-4,-48,16,-19,17v4,1,19,-14,19,-17\",w:184},\"ø\":{d:\"76,-136v17,7,33,-8,51,0v9,-6,21,-13,36,-21v23,22,-13,31,3,50v11,13,4,21,14,35v-4,5,-1,14,-4,23v-14,23,-45,41,-84,39v-12,2,-29,28,-41,38v-2,-11,-34,-10,-15,-30v3,-7,5,-11,5,-11v-15,-24,-60,-54,-22,-89v23,-21,25,-32,57,-34xm102,-54v18,1,50,-19,30,-32v-12,7,-22,18,-30,32xm85,-92v-14,3,-26,8,-38,17v2,20,17,13,26,0v6,-8,12,-13,12,-17\",w:188},\"¿\":{d:\"181,-247v3,1,31,2,29,15v-4,22,-37,27,-41,4v1,-5,7,-20,12,-19xm161,-34v-45,-1,-105,19,-124,51v0,11,18,17,54,17v39,0,82,-13,112,4v-10,35,-58,31,-100,31v-47,0,-80,-10,-99,-31v-10,-56,22,-73,64,-90v8,-3,32,-9,74,-18v21,-15,7,-62,22,-92v-1,-5,-1,-11,4,-12v16,0,24,7,24,22v-8,30,-8,73,-17,111v-3,5,-7,7,-14,7\",w:213},\"¡\":{d:\"86,-197v8,16,-7,41,-24,25v-11,-11,-4,-16,-3,-29v13,0,15,-2,27,4xm46,-107v4,-8,11,-16,23,-7v19,26,-5,57,-6,87v-7,0,-5,18,-9,28v0,14,-17,52,-11,70v-2,7,-15,28,-25,12v-4,-6,-15,-7,-6,-16v2,-39,14,-96,34,-174\",w:95},\"¬\":{d:\"141,-99v47,7,103,-3,149,6v14,24,18,15,10,39v-10,34,-7,31,-26,76v-4,6,-15,8,-16,21v-4,2,-4,1,-13,5v-22,-33,-4,-33,16,-104v-5,-9,-28,-4,-38,-6r-183,4v-14,0,-41,-29,-17,-36v31,-9,82,5,118,-5\",w:315},\"√\":{d:\"364,-218v43,-21,80,-51,104,-32v-3,19,-24,21,-44,40v-41,15,-78,53,-136,78r-137,98v-20,16,-79,66,-91,68v-3,1,-25,-11,-24,-13v-4,-28,-43,-61,-30,-85v26,-15,42,19,58,32r295,-188v0,1,2,2,5,2\",w:474},\"ƒ\":{d:\"115,-262v-23,6,-39,63,-38,96v1,3,57,2,54,16v1,22,-45,15,-51,30v3,34,12,68,10,103v14,17,-18,53,-28,63v-48,8,-89,5,-95,-37v20,-5,77,21,83,-18v17,-29,-4,-61,0,-98v0,-5,-3,-10,-7,-17v-33,4,-43,-17,-25,-37v10,-4,27,5,27,-10v0,-43,15,-77,32,-109v12,-7,16,-22,38,-20v11,1,51,35,25,55v-9,1,-16,-17,-25,-17\",w:145},\"≈\":{d:\"133,-112v21,15,48,-30,78,-17v3,3,5,7,5,9v-8,30,-47,45,-76,45v-19,0,-64,-48,-90,-21r-29,20v-6,-1,-17,-16,-15,-32v24,-17,70,-42,107,-21v4,4,10,9,20,17xm138,-57v28,2,48,-25,76,-26v13,30,-21,42,-40,53v-41,24,-77,-15,-114,-23v-15,14,-46,32,-49,-1v-3,-9,27,-28,54,-30\",w:223},\"∆\":{d:\"18,-1v-24,-30,8,-48,25,-71v14,-19,34,-28,40,-56v20,-35,29,-14,57,4v9,39,43,62,57,102v0,16,-34,17,-50,14v-28,2,-72,4,-129,7xm139,-47r-22,-52v-12,-5,-12,15,-24,27v-7,6,-14,16,-23,28v23,1,36,-1,69,-3\",w:199},\"«\":{d:\"191,-64v16,6,87,37,53,63v-39,-9,-71,-28,-107,-40v-14,-13,-13,-34,10,-47v27,-15,48,-55,84,-62v9,-2,21,10,21,18r-13,21v-16,5,-44,22,-51,41v0,4,1,6,3,6xm71,-65v17,6,87,35,55,62v-39,-8,-66,-27,-108,-40v-14,-13,-13,-36,10,-46v23,-18,50,-56,84,-63v9,-2,21,10,21,18r-13,22v-20,6,-32,17,-51,37v0,3,-1,11,2,10\",w:265},\"»\":{d:\"120,-129v9,-33,48,-10,64,5v9,20,86,52,50,86v-36,11,-66,31,-107,40v-6,-7,-9,-13,-9,-17v-2,-13,50,-46,63,-46v11,-18,-33,-42,-48,-47xm1,-128v10,-33,46,-8,64,6v8,19,86,50,51,85v-40,13,-69,30,-108,40v-6,-7,-8,-12,-8,-16v-2,-14,50,-46,63,-47v7,-13,-9,-20,-19,-30v-10,-9,-20,-15,-30,-17\",w:252},\"…\":{d:\"244,-24v-1,21,-38,32,-41,3v-2,-19,23,-22,34,-17v0,7,0,15,7,14xm113,-24v0,-22,28,-21,38,-8v5,34,-39,40,-38,8xm35,-2v-10,-2,-36,-17,-18,-29v-1,-15,17,-17,31,-6v7,17,6,33,-13,35\",w:258},/*\" \":{w:179},*/\"À\":{d:\"161,-217v20,53,23,124,54,170v-2,20,-34,9,-42,0v-27,-12,-78,-18,-101,-18v-26,6,-29,51,-54,63v-18,-4,-19,-30,-3,-38v5,-9,15,-16,8,-29v1,-12,23,-9,26,-19v6,-10,11,-20,20,-27r70,-121v12,-4,16,4,22,19xm82,-91v17,3,62,7,86,13v-13,-33,-13,-80,-29,-109v-15,30,-38,63,-57,96xm150,-268v14,10,54,14,37,41v-28,-7,-62,-22,-100,-42v-2,-3,-2,-26,5,-23v16,4,42,17,58,24\"},\"Ã\":{d:\"161,-217v20,53,23,124,54,170v-2,20,-34,9,-42,0v-27,-12,-78,-18,-101,-18v-26,6,-29,51,-54,63v-18,-4,-19,-30,-3,-38v5,-9,15,-16,8,-29v1,-12,23,-9,26,-19v6,-10,11,-20,20,-27r70,-121v12,-4,16,4,22,19xm82,-91v17,3,62,7,86,13v-13,-33,-13,-80,-29,-109v-15,30,-38,63,-57,96xm100,-285v26,-19,54,19,69,22v4,0,15,-5,34,-13v23,-9,22,-17,31,-12v3,11,-9,9,-7,21v-26,20,-46,30,-59,30v-3,3,-50,-26,-49,-29v-12,1,-31,35,-51,32v-3,-8,-5,-14,-5,-18v10,-9,16,-17,37,-33\"},\"Õ\":{d:\"62,-184v78,-31,249,-50,238,74v-6,65,-102,105,-179,115v-77,-7,-152,-71,-101,-149v2,-5,24,-33,42,-40xm279,-120v14,-38,-47,-64,-85,-61v-20,-9,-41,7,-62,0v-11,7,-54,12,-66,24v0,20,-51,35,-38,66v-1,43,50,67,96,67v44,0,162,-55,155,-96xm116,-270v26,-19,54,19,69,22v4,0,15,-5,34,-13v23,-10,22,-16,31,-12v3,11,-8,9,-7,21v-45,28,-47,42,-88,16v-29,-19,-12,-20,-43,2v-8,5,-12,18,-23,15v-13,-3,-12,-20,-4,-23v4,-6,14,-15,31,-28\",w:273},\"Œ\":{d:\"247,-243v71,4,161,-7,245,-8v17,0,27,6,27,17v-8,27,-70,14,-104,23v-3,1,-52,0,-65,7r0,4v16,16,17,29,17,65v32,10,74,-14,99,16v-14,25,-76,17,-127,24v-17,18,-55,32,-75,51v85,0,128,-3,204,-11v15,-2,21,11,20,29v-78,24,-177,12,-270,24v-24,3,-24,-29,-48,-15v-46,7,-70,4,-105,-4v-19,-18,-42,-22,-52,-55v-10,-34,0,-47,12,-78v-18,-59,48,-78,105,-84v17,-18,103,-13,117,-5xm125,-45v76,-9,186,-43,209,-105v-26,-67,-137,-83,-217,-54v3,34,-45,25,-60,58v-41,48,5,108,68,101\",w:492},\"œ\":{d:\"185,-54v25,28,107,-17,104,33v-12,12,-60,14,-87,14v0,0,1,1,2,1v-11,1,-39,-9,-50,-17v-28,17,-75,32,-114,7v-22,-14,-34,-11,-34,-41v0,-36,33,-49,48,-75v29,-16,72,-3,95,11v12,-9,48,-27,59,-26v30,0,64,15,65,40v0,7,-6,20,-20,37v-29,1,-44,11,-68,16xm226,-106v-21,-7,-41,-2,-48,13v14,1,42,-7,48,-13xm132,-87v-21,-35,-94,11,-92,24v-2,14,43,21,61,21v25,0,36,-20,31,-45\",w:295},\"–\":{d:\"6,-66v-8,-72,79,-21,146,-39v37,-10,79,7,111,0v9,8,14,13,14,17v2,26,-72,13,-99,21v-83,4,-124,21,-172,1\",w:282},\"—\":{d:\"175,-106v86,-9,201,1,286,-1v11,6,13,11,6,30v-118,15,-246,10,-377,10v-25,0,-73,3,-82,-8r-2,-26v11,-13,32,-9,52,-7v38,3,84,-5,117,2\",w:485},\"“\":{d:\"66,-261v-21,5,-37,51,-22,77v0,4,-2,6,-7,6v-31,-9,-38,-62,-12,-94v12,-15,21,-28,31,-34v16,-1,19,24,22,34v10,-11,22,-32,43,-23v-2,8,4,16,5,19v-6,11,-51,53,-29,74v-12,21,-30,5,-33,-17v-6,-13,9,-28,2,-42\",w:118},\"”\":{d:\"120,-294v12,3,30,26,19,34v2,15,-40,70,-55,66v-40,-10,10,-51,14,-64v3,-3,8,-31,22,-36xm70,-306v14,3,26,34,16,49v-19,30,-31,45,-58,59v-12,-11,-33,-17,-7,-36v13,-19,36,-27,36,-59v0,-5,9,-13,13,-13\",w:148},\"‘\":{d:\"73,-262v-10,7,-41,39,-38,69v-15,13,-27,-16,-28,-28v-2,-20,51,-83,66,-83v20,0,25,41,0,42\",w:95},\"’\":{d:\"74,-300v13,31,-1,99,-44,101v-13,0,-19,-5,-19,-15v6,-10,31,-34,35,-59v2,-11,1,-32,11,-32v6,0,11,2,17,5\",w:90},\"÷\":{d:\"167,-158v-4,3,-7,9,-10,20v-23,4,-34,-8,-29,-31v14,-6,18,1,39,11xm78,-72v-53,11,-53,12,-69,-15v-1,-12,11,-17,22,-14v71,-13,151,-18,230,-24v11,1,21,16,23,28v-28,20,-90,11,-126,16v-36,5,-62,5,-80,9xm123,-40v19,-17,41,-1,41,17v0,13,-6,19,-17,19v-15,0,-29,-14,-24,-36\",w:293},\"◊\":{d:\"76,-158v48,-8,64,11,100,36v28,19,-5,39,-22,54v-15,13,-40,32,-48,49v-17,5,-12,0,-27,-16v-6,-6,-86,-31,-68,-53r2,-9v27,-23,48,-44,63,-61xm93,-65v12,-2,35,-31,41,-38v-5,-10,-16,-14,-34,-24v-12,12,-36,29,-40,44v19,11,30,18,33,18\",w:199},\"ÿ\":{d:\"118,85v-11,11,-11,38,-22,61v-2,-1,-2,31,-17,27v-11,0,-21,-10,-21,-22v20,-66,23,-61,64,-168v-22,1,-38,16,-58,4v-22,4,-51,-16,-51,-42v-11,-13,-7,-59,7,-58v16,1,21,24,22,51v21,33,66,5,94,-7v4,-3,26,-14,38,-29r17,0v23,44,-23,59,-34,102v-6,9,-13,9,-13,26v-15,6,-12,33,-27,48v0,2,1,4,1,7xm158,-136v0,8,-4,13,-12,13v-18,0,-21,-20,-16,-34v18,-1,29,1,28,21xm62,-161v7,3,28,9,27,18v1,8,-8,17,-17,17v-18,0,-26,-24,-10,-35\",w:190},\"Ÿ\":{d:\"176,-189v35,20,-25,54,-39,72v-26,34,-57,57,-74,104v-10,15,-4,14,-23,3r0,-10v19,-44,27,-46,50,-81v-9,-5,-24,4,-34,4v-38,0,-54,-50,-44,-87v21,-5,18,19,22,35v4,18,15,27,29,27v41,0,60,-39,113,-67xm153,-222v0,8,-3,12,-11,12v-18,0,-21,-19,-16,-33v18,-1,28,2,27,21xm57,-247v8,2,29,9,28,17v0,21,-37,24,-36,1v0,-7,2,-13,8,-18\",w:135},\"⁄\":{d:\"193,-305v7,6,17,31,3,41v-10,7,-12,13,-21,25v-79,56,-190,209,-197,260r-18,0v-23,-19,9,-70,15,-85v52,-83,121,-179,218,-241\",w:120},\"¤\":{d:\"308,-133r-200,16v-2,1,-6,4,-10,10v70,-2,144,-14,211,-8v3,0,8,4,13,8v-1,4,-3,9,-9,17v-57,11,-164,6,-219,25v26,32,112,25,173,25v9,0,35,2,35,19v0,9,-4,13,-12,14v-115,12,-146,23,-211,-19v-12,-4,-22,-9,-25,-27v-6,-29,-61,3,-43,-49v17,-1,36,7,42,-12v-32,7,-36,-39,-11,-40v29,14,63,-25,73,-30v52,-25,72,-44,142,-44v23,0,21,41,-1,39v-35,-3,-61,9,-102,31v2,2,5,4,8,4v18,-6,101,-9,115,-9v7,0,55,13,31,30\",w:312},\"€\":{d:\"308,-133r-200,16v-2,1,-6,4,-10,10v70,-2,144,-14,211,-8v3,0,8,4,13,8v-1,4,-3,9,-9,17v-57,11,-164,6,-219,25v26,32,112,25,173,25v9,0,35,2,35,19v0,9,-4,13,-12,14v-115,12,-146,23,-211,-19v-12,-4,-22,-9,-25,-27v-6,-29,-61,3,-43,-49v17,-1,36,7,42,-12v-32,7,-36,-39,-11,-40v29,14,63,-25,73,-30v52,-25,72,-44,142,-44v23,0,21,41,-1,39v-35,-3,-61,9,-102,31v2,2,5,4,8,4v18,-6,101,-9,115,-9v7,0,55,13,31,30\",w:312},\"‹\":{d:\"64,-107v9,17,86,17,87,43v0,11,-4,16,-13,16v-36,-11,-70,-22,-109,-31v-19,-4,-18,-14,-9,-36v59,-56,93,-84,101,-84v17,0,19,20,13,29\",w:159},\"›\":{d:\"41,-181v26,27,112,44,70,91r-82,60v-20,3,-25,-23,-13,-32r70,-51r-66,-46v-5,-6,-4,-28,5,-29v4,2,9,4,16,7\",w:137},\"\":{d:\"74,-74v-6,-24,-70,8,-68,-27v0,-6,6,-20,20,-18v44,6,45,-9,42,-49v7,-40,26,-114,90,-104v48,-2,63,-1,90,30v11,25,4,14,2,44v-7,17,-54,9,-49,-7r8,-21v-5,-13,-22,-9,-43,-11v-56,-6,-63,45,-67,92v-2,21,5,23,22,22v37,-1,80,-9,113,-1v13,31,-9,82,-22,106v-13,10,-26,-6,-22,-25r11,-46v0,-3,-2,-6,-6,-6v-19,0,-47,3,-83,9v-6,1,-9,4,-8,11r12,59v-1,9,-11,30,-23,18v-18,-18,-15,-59,-19,-76\",w:272},\"\":{d:\"43,-61v-21,4,-36,2,-39,-15v-4,-35,41,-8,34,-47v4,-59,12,-99,46,-124v11,-42,157,-47,149,13v1,7,-7,15,-13,15v-18,-7,-19,-26,-47,-23v-34,3,-65,6,-79,37v-12,27,-22,52,-21,91v13,9,31,-11,45,-4v32,-15,50,-6,94,-13v12,-30,19,-79,36,-133v1,-5,5,-8,12,-8v44,18,-18,106,-12,144v-9,22,-1,73,-16,104v2,28,-23,28,-37,16v1,-26,9,-48,11,-75v0,-6,-3,-9,-9,-9v-43,0,-83,8,-119,24v8,40,17,33,-7,56v-20,-9,-21,-19,-28,-49\",w:283},\"‡\":{d:\"102,-284v16,2,42,-2,33,18v-7,15,-42,1,-38,30v3,3,31,1,30,11v4,15,-29,19,-36,24v-2,18,-4,24,-16,29r-25,-26v-25,7,-53,3,-42,-25v4,-10,70,0,51,-22v-17,4,-41,12,-39,-15v-5,-16,39,-18,44,-20v4,-2,7,-10,10,-24v19,-3,23,6,28,20\",w:145},\"∙\":{d:\"57,-77v6,18,-7,21,-19,23v-34,6,-25,-40,-9,-43v18,-3,29,8,28,20\",w:67},\"‚\":{d:\"25,63v-26,21,-48,-2,-22,-24v14,-12,35,-40,35,-69v3,-2,3,-11,12,-9v35,17,5,88,-25,102\",w:97},\"„\":{d:\"25,63v-26,21,-48,-2,-22,-24v11,-9,36,-41,35,-69v3,-2,4,-12,12,-9v36,14,5,89,-25,102xm84,64v-24,20,-45,-1,-21,-24v21,-20,32,-35,35,-69v3,-2,3,-11,12,-9v36,17,9,86,-26,102\",w:135},\"‰\":{d:\"398,-131v58,-1,87,13,72,65v-1,30,-66,63,-99,65v-56,3,-99,-58,-62,-102v2,2,5,2,8,2v20,-16,51,-17,81,-30xm202,-279v33,0,94,-24,95,18v-7,31,-33,27,-54,55v-36,32,-71,74,-112,99v-18,18,-40,34,-51,58v-19,14,-25,37,-56,40v-17,2,-25,-29,-10,-40v15,-11,40,-37,52,-52r87,-72v-51,13,-100,6,-116,-27v1,-5,-6,-30,-9,-36v-3,-5,22,-41,27,-39v29,2,16,34,5,49v0,15,14,23,42,23v42,0,59,-31,28,-38v-17,-4,-53,3,-50,-23v0,-7,1,-12,4,-16v16,-9,36,4,49,5v0,0,23,-4,69,-4xm222,-118v33,-2,55,18,50,57v-29,36,-48,45,-96,50v-27,-5,-56,-17,-58,-51v13,-37,64,-43,104,-56xm335,-61v13,44,101,7,108,-31v-11,-3,-20,-4,-30,-4v-18,-1,-82,18,-78,35xm225,-244v-18,0,-29,-1,-46,3v7,15,6,28,0,43v15,-14,34,-30,46,-46xm164,-53v26,5,59,-10,76,-26v-17,-16,-49,2,-67,14v1,8,-8,6,-9,12\",w:485},\"Â\":{d:\"161,-217v20,53,23,124,54,170v-2,20,-34,9,-42,0v-27,-12,-78,-18,-101,-18v-26,6,-29,51,-54,63v-18,-4,-19,-30,-3,-38v5,-9,15,-16,8,-29v1,-12,23,-9,26,-19v6,-10,11,-20,20,-27r70,-121v12,-4,16,4,22,19xm82,-91v17,3,62,7,86,13v-13,-33,-13,-80,-29,-109v-15,30,-38,63,-57,96xm202,-219v-27,-6,-40,-26,-61,-37v-21,7,-39,46,-65,23v-2,-4,-3,-10,-4,-14v19,-4,43,-32,61,-43v27,6,40,22,62,37v12,8,18,17,18,25v0,6,-3,9,-11,9\"},\"Ê\":{d:\"49,-160v1,-4,-10,-9,-15,-8v-15,-35,32,-30,57,-31r142,-8v2,1,30,7,40,10v-52,16,-133,17,-190,30v-7,9,-12,24,-15,47v26,10,102,-6,141,3v1,3,1,6,2,10v-36,18,-92,12,-149,21v-11,9,-16,41,-16,51v55,-1,111,-21,168,-13v15,-8,48,1,31,18v-53,16,-130,13,-198,29r-39,-8v-4,-19,17,-53,20,-76v-1,0,-7,-11,-9,-18v18,-7,22,-28,30,-57xm199,-211v-27,-6,-39,-26,-60,-37v-21,7,-40,47,-65,22v-2,-7,-2,-7,-4,-13v18,-5,44,-31,61,-43v27,6,41,22,62,37v12,9,18,17,18,25v0,6,-4,9,-12,9\",w:252},\"Á\":{d:\"161,-217v20,53,23,124,54,170v-2,20,-34,9,-42,0v-27,-12,-78,-18,-101,-18v-26,6,-29,51,-54,63v-18,-4,-19,-30,-3,-38v5,-9,15,-16,8,-29v1,-12,23,-9,26,-19v6,-10,11,-20,20,-27r70,-121v12,-4,16,4,22,19xm82,-91v17,3,62,7,86,13v-13,-33,-13,-80,-29,-109v-15,30,-38,63,-57,96xm84,-250v31,-5,83,-53,100,-31v0,5,-11,15,-35,28v-16,5,-51,28,-53,25v-14,1,-16,-11,-12,-22\"},\"Ë\":{d:\"49,-160v1,-4,-10,-9,-15,-8v-15,-35,32,-30,57,-31r142,-8v2,1,30,7,40,10v-52,16,-133,17,-190,30v-7,9,-12,24,-15,47v26,10,102,-6,141,3v1,3,1,6,2,10v-36,18,-92,12,-149,21v-11,9,-17,41,-17,51v55,0,112,-21,169,-13v15,-8,48,1,31,18v-53,16,-130,13,-198,29r-39,-8v-3,-21,17,-53,20,-76v-1,0,-7,-11,-9,-18v18,-7,22,-28,30,-57xm191,-236v0,8,-4,13,-12,13v-17,0,-19,-19,-16,-34v18,-1,29,1,28,21xm95,-261v7,3,29,9,28,18v0,7,-9,17,-18,17v-18,0,-26,-25,-10,-35\",w:252},\"È\":{d:\"49,-160v1,-4,-10,-9,-15,-8v-15,-35,32,-30,57,-31r142,-8v2,1,30,7,40,10v-52,16,-133,17,-190,30v-7,9,-12,24,-15,47v26,10,102,-6,141,3v1,3,1,6,2,10v-36,18,-92,12,-149,21v-11,9,-16,41,-16,51v55,-1,111,-21,168,-13v15,-8,48,1,31,18v-53,16,-130,13,-198,29r-39,-8v-4,-19,17,-53,20,-76v-1,0,-7,-11,-9,-18v18,-7,22,-28,30,-57xm184,-236v6,9,5,13,0,23v-28,-7,-62,-21,-100,-41v-3,-2,-3,-27,5,-23v34,11,60,25,95,41\",w:252},\"Í\":{d:\"26,-5v-9,-6,-9,-12,-9,-36v0,-71,7,-119,21,-144v8,-13,14,-20,19,-20v28,19,-7,89,-10,120v-2,21,-8,47,-14,76v-2,1,-2,0,-7,4xm6,-233v31,-6,83,-53,101,-31v2,11,-80,53,-89,53v-14,1,-14,-11,-12,-22\",w:104},\"Î\":{d:\"53,-9v-15,7,-16,-3,-16,-32v0,-71,7,-119,21,-144v8,-13,14,-20,19,-20v28,19,-7,89,-10,120v-2,21,-8,47,-14,76xm137,-209v-27,-6,-40,-26,-61,-37v-8,0,-9,4,-13,10v-11,13,-50,37,-56,0v18,-5,43,-32,61,-43v28,5,40,21,62,36v12,9,18,17,18,25v0,6,-4,9,-11,9\",w:144},\"Ï\":{d:\"33,-5v-9,-6,-9,-12,-9,-36v0,-71,8,-119,22,-144v8,-13,14,-20,19,-20v27,20,-11,87,-10,120r-15,76v-1,1,-4,2,-7,4xm111,-222v0,8,-4,12,-12,12v-18,0,-19,-19,-16,-33v18,-1,29,1,28,21xm15,-247v8,2,29,9,28,17v0,21,-37,24,-36,1v0,-7,2,-13,8,-18\",w:110},\"Ì\":{d:\"33,-5v-9,-6,-9,-12,-9,-36v0,-71,8,-119,22,-144v8,-13,14,-20,19,-20v27,20,-11,87,-10,120r-15,76v-1,1,-4,2,-7,4xm72,-247v7,6,55,15,36,40v-28,-7,-61,-21,-99,-41v-3,-2,-3,-27,5,-23v18,3,41,17,58,24\",w:111},\"Ó\":{d:\"62,-184v78,-31,249,-50,238,74v-6,65,-102,105,-179,115v-77,-7,-152,-71,-101,-149v2,-5,24,-33,42,-40xm279,-120v14,-38,-47,-64,-85,-61v-20,-9,-41,7,-62,0v-11,7,-54,12,-66,24v0,20,-51,35,-38,66v-1,43,50,67,96,67v44,0,162,-55,155,-96xm142,-250v27,-11,47,-32,59,-14v2,11,-80,53,-89,53v-13,1,-15,-11,-12,-21v10,-5,24,-11,42,-18\",w:273},\"Ô\":{d:\"62,-184v78,-31,249,-50,238,74v-6,65,-102,105,-179,115v-77,-7,-152,-71,-101,-149v2,-5,24,-33,42,-40xm279,-120v14,-38,-47,-64,-85,-61v-20,-9,-41,7,-62,0v-11,7,-54,12,-66,24v0,20,-51,35,-38,66v-1,43,50,67,96,67v44,0,162,-55,155,-96xm157,-282v17,18,52,34,54,63v-24,12,-52,-36,-53,-29r-42,34v-23,-4,-6,-31,5,-34v1,1,27,-37,36,-34\",w:273},\"\":{d:\"231,-188v31,-74,91,-99,188,-116v28,1,6,39,1,51v-20,52,-100,91,-148,126v2,4,6,7,12,10v42,-42,181,-41,166,46v-1,8,-19,8,-28,5v-43,1,-168,42,-106,86v15,16,33,28,61,39v0,10,0,17,-6,22v-8,8,-35,26,-78,51v-52,7,-128,22,-154,-17v-23,-35,-99,-35,-117,-77v-29,-68,25,-149,75,-175v44,-23,89,5,135,13v14,-26,2,-39,-1,-64\",w:461},\"Ò\":{d:\"62,-184v78,-31,249,-50,238,74v-6,65,-102,105,-179,115v-77,-7,-152,-71,-101,-149v2,-5,24,-33,42,-40xm279,-120v14,-38,-47,-64,-85,-61v-20,-9,-41,7,-62,0v-11,7,-54,12,-66,24v0,20,-51,35,-38,66v-1,43,50,67,96,67v44,0,162,-55,155,-96xm161,-262v14,10,52,13,37,41v-28,-7,-62,-21,-100,-41v-3,-3,-3,-26,5,-24v16,5,42,17,58,24\",w:273},\"Ú\":{d:\"281,-202v6,67,-30,121,-71,152v-3,14,-47,26,-60,39v-41,20,-110,1,-125,-26v-24,-44,-28,-84,-8,-127v12,-26,23,-38,37,-22v-2,2,-3,5,-3,10v-34,26,-30,116,5,134v22,32,86,-1,109,-8v38,-28,104,-64,97,-149v2,-10,7,-8,19,-3xm194,-265v3,-1,11,4,11,6v3,12,-81,52,-89,54v-14,0,-13,-9,-12,-22\",w:262},\"Û\":{d:\"281,-202v6,67,-30,121,-71,152v-3,14,-47,26,-60,39v-41,20,-110,1,-125,-26v-24,-44,-28,-84,-8,-127v12,-26,23,-38,37,-22v-2,2,-3,5,-3,10v-34,26,-30,116,5,134v22,32,86,-1,109,-8v38,-28,104,-64,97,-149v2,-10,7,-8,19,-3xm150,-266v24,11,58,27,73,46v0,5,-3,6,-10,6v-28,2,-61,-30,-63,-25v-10,0,-57,40,-69,23v3,-10,-8,-15,8,-19v17,-1,34,-29,61,-31\",w:262},\"Ù\":{d:\"281,-202v6,67,-30,121,-71,152v-3,14,-47,26,-60,39v-41,20,-110,1,-125,-26v-24,-44,-28,-84,-8,-127v12,-26,23,-38,37,-22v-2,2,-3,5,-3,10v-34,26,-30,116,5,134v22,32,86,-1,109,-8v38,-28,104,-64,97,-149v2,-10,7,-8,19,-3xm151,-243v14,10,54,14,37,41v-28,-7,-61,-22,-99,-42v-3,-2,-4,-25,4,-23v16,5,42,17,58,24\",w:262},\"ı\":{d:\"43,-103v21,4,16,56,11,100v-7,2,-11,1,-20,-5v0,-7,-13,-18,-11,-25v4,-23,-3,-68,20,-70\",w:80},\"ˆ\":{d:\"144,-220v-29,0,-41,-27,-63,-39v-8,0,-11,5,-15,11v-17,12,-32,31,-54,13v-2,-5,-3,-9,-4,-14v20,-5,45,-33,64,-45v28,6,43,23,65,38v12,9,19,19,19,27v0,6,-4,9,-12,9\",w:165},\"˜\":{d:\"47,-300v26,-21,57,19,72,23v4,0,16,-5,36,-14v24,-10,22,-16,32,-13v3,12,-7,11,-7,23v-27,21,-48,32,-62,32v-3,2,-52,-27,-51,-31v-12,-2,-34,40,-54,33v-4,-13,-8,-18,1,-24v5,-7,16,-15,33,-29\",w:186},\"¯\":{d:\"63,-295v28,-7,73,10,105,7v11,1,6,8,5,19v-37,21,-72,11,-136,11v-23,0,-31,-14,-27,-36v12,-15,40,0,53,-1\",w:183},\"˘\":{d:\"65,-269v20,-11,45,-31,74,-36v20,30,-42,40,-59,66v-5,6,-11,8,-18,8v-8,-3,-45,-32,-51,-54v5,-24,14,-13,34,1\",w:158},\"˙\":{d:\"23,-302v15,-13,32,1,32,18v1,22,-36,29,-39,4v0,0,3,-7,7,-22\",w:70},\"˚\":{d:\"23,-225v-43,-24,-11,-85,41,-78v16,2,31,4,46,17v32,54,-41,86,-87,61xm33,-257v2,20,57,11,57,-6v0,-6,-11,-9,-33,-12v-14,-2,-24,13,-24,18\",w:123},\"¸\":{d:\"74,16v32,2,49,14,55,36v-3,7,-14,31,-29,33v-28,4,-57,11,-88,14v-19,-6,-13,-31,8,-33v20,-1,59,-5,73,-14v-17,-14,-68,8,-53,-37v9,-10,2,-28,24,-30v8,8,13,17,10,31\",w:129},\"˝\":{d:\"91,-249v15,-11,38,-53,57,-29v0,9,0,14,-3,23v-2,3,-20,22,-54,55v-5,5,-10,8,-16,8v-17,2,-6,-22,-7,-31v-1,0,-2,0,-4,1v-17,21,-29,31,-50,27v-5,-18,-3,-15,3,-27v23,-27,40,-46,48,-59v7,-12,31,3,29,9v-1,14,-3,24,-13,31v4,4,9,-1,10,-8\",w:151},\"˛\":{d:\"82,-5v-8,12,-16,55,-21,75v0,4,2,7,7,7v6,0,22,-7,50,-20v8,0,12,7,12,20v-2,22,-6,14,-27,30v-15,12,-26,16,-30,16v-47,-8,-59,-14,-56,-75v8,-27,12,-54,25,-77v19,-21,35,15,40,24\",w:138},\"ˇ\":{d:\"39,-286v33,46,63,-4,96,-16v6,0,9,6,9,19v0,24,-49,46,-77,46v-32,0,-52,-28,-59,-48v0,-25,23,-17,31,-1\",w:153},\"\\r\":{w:179}}});" + 
"var DIAGRAM_MARGIN=10,ACTOR_MARGIN=10,ACTOR_PADDING=10,SIGNAL_MARGIN=5,SIGNAL_PADDING=5,NOTE_MARGIN=10,NOTE_PADDING=5,NOTE_OVERLAP=15,TITLE_MARGIN=0,TITLE_PADDING=5,SELF_SIGNAL_WIDTH=20,PLACEMENT=Diagram.PLACEMENT,LINETYPE=Diagram.LINETYPE,ARROWTYPE=Diagram.ARROWTYPE,LINE={stroke:\"#000\",\"stroke-width\":2},RECT={fill:\"#fff\"};AssertException.prototype.toString=function(){return\"AssertException: \"+this.message},String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\\s+|\\s+$/g,\"\")}),Raphael.fn.line=function(x1,y1,x2,y2){return assert(_.all([x1,x2,y1,y2],_.isFinite),\"x1,x2,y1,y2 must be numeric\"),this.path(\"M{0},{1} L{2},{3}\",x1,y1,x2,y2)},Raphael.fn.wobble=function(x1,y1,x2,y2){assert(_.all([x1,x2,y1,y2],_.isFinite),\"x1,x2,y1,y2 must be numeric\");var wobble=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1))/25,r1=Math.random(),r2=Math.random(),xfactor=Math.random()>.5?wobble:-wobble,yfactor=Math.random()>.5?wobble:-wobble,p1={x:(x2-x1)*r1+x1+xfactor,y:(y2-y1)*r1+y1+yfactor},p2={x:(x2-x1)*r2+x1-xfactor,y:(y2-y1)*r2+y1-yfactor};return\"C\"+p1.x+\",\"+p1.y+\" \"+p2.x+\",\"+p2.y+\" \"+x2+\",\"+y2},Raphael.fn.text_bbox=function(text,font){var p;font._obj?p=this.print_center(0,0,text,font._obj,font[\"font-size\"]):(p=this.text(0,0,text),p.attr(font));var bb=p.getBBox();return p.remove(),bb},Raphael.fn.handRect=function(x,y,w,h){return assert(_.all([x,y,w,h],_.isFinite),\"x, y, w, h must be numeric\"),this.path(\"M\"+x+\",\"+y+this.wobble(x,y,x+w,y)+this.wobble(x+w,y,x+w,y+h)+this.wobble(x+w,y+h,x,y+h)+this.wobble(x,y+h,x,y)).attr(RECT)},Raphael.fn.handLine=function(x1,y1,x2,y2){return assert(_.all([x1,x2,y1,y2],_.isFinite),\"x1,x2,y1,y2 must be numeric\"),this.path(\"M\"+x1+\",\"+y1+this.wobble(x1,y1,x2,y2))},Raphael.fn.print_center=function(x,y,string,font,size,letter_spacing){var path=this.print(x,y,string,font,size,\"baseline\",letter_spacing),bb=path.getBBox(),dx=x-bb.x-bb.width/2,dy=y-bb.y-bb.height/2,m=new Raphael.matrix;return m.translate(dx,dy),path.attr(\"path\",Raphael.mapPath(path.attr(\"path\"),m))};var BaseTheme=function(diagram){this.init(diagram)};_.extend(BaseTheme.prototype,{init:function(diagram){this.diagram=diagram,this._paper=void 0,this._font=void 0,this._title=void 0,this._actors_height=0,this._signals_height=0;var a=this.arrow_types={};a[ARROWTYPE.FILLED]=\"block\",a[ARROWTYPE.OPEN]=\"open\";var l=this.line_types={};l[LINETYPE.SOLID]=\"\",l[LINETYPE.DOTTED]=\"-\"},init_paper:function(container){this._paper=new Raphael(container,320,200)},init_font:function(){},draw_line:function(x1,y1,x2,y2){return this._paper.line(x1,y1,x2,y2)},draw_rect:function(x,y,w,h){return this._paper.rect(x,y,w,h)},draw:function(container){var diagram=this.diagram;this.init_paper(container),this.init_font(),this.layout();var title_height=this._title?this._title.height:0;this._paper.setStart(),this._paper.setSize(diagram.width,diagram.height);var y=DIAGRAM_MARGIN+title_height;this.draw_title(),this.draw_actors(y),this.draw_signals(y+this._actors_height),this._paper.setFinish()},layout:function(){function actor_ensure_distance(a,b,d){assert(b>a,\"a must be less than or equal to b\"),0>a?(b=actors[b],b.x=Math.max(d-b.width/2,b.x)):b>=actors.length?(a=actors[a],a.padding_right=Math.max(d,a.padding_right)):(a=actors[a],a.distances[b]=Math.max(d,a.distances[b]?a.distances[b]:0))}var diagram=this.diagram,paper=this._paper,font=this._font,actors=diagram.actors,signals=diagram.signals;if(diagram.width=0,diagram.height=0,diagram.title){var title=this._title={},bb=paper.text_bbox(diagram.title,font);title.text_bb=bb,title.message=diagram.title,title.width=bb.width+2*(TITLE_PADDING+TITLE_MARGIN),title.height=bb.height+2*(TITLE_PADDING+TITLE_MARGIN),title.x=DIAGRAM_MARGIN,title.y=DIAGRAM_MARGIN,diagram.width+=title.width,diagram.height+=title.height}_.each(actors,function(a){var bb=paper.text_bbox(a.name,font);a.text_bb=bb,a.x=0,a.y=0,a.width=bb.width+2*(ACTOR_PADDING+ACTOR_MARGIN),a.height=bb.height+2*(ACTOR_PADDING+ACTOR_MARGIN),a.distances=[],a.padding_right=0,this._actors_height=Math.max(a.height,this._actors_height)},this),_.each(signals,function(s){var a,b,bb=paper.text_bbox(s.message,font);s.text_bb=bb,s.width=bb.width,s.height=bb.height;var extra_width=0;if(\"Signal\"==s.type)s.width+=2*(SIGNAL_MARGIN+SIGNAL_PADDING),s.height+=2*(SIGNAL_MARGIN+SIGNAL_PADDING),s.isSelf()?(a=s.actorA.index,b=a+1,s.width+=SELF_SIGNAL_WIDTH):(a=Math.min(s.actorA.index,s.actorB.index),b=Math.max(s.actorA.index,s.actorB.index));else{if(\"Note\"!=s.type)throw new Error(\"Unhandled signal type:\"+s.type);if(s.width+=2*(NOTE_MARGIN+NOTE_PADDING),s.height+=2*(NOTE_MARGIN+NOTE_PADDING),extra_width=2*ACTOR_MARGIN,s.placement==PLACEMENT.LEFTOF)b=s.actor.index,a=b-1;else if(s.placement==PLACEMENT.RIGHTOF)a=s.actor.index,b=a+1;else if(s.placement==PLACEMENT.OVER&&s.hasManyActors())a=Math.min(s.actor[0].index,s.actor[1].index),b=Math.max(s.actor[0].index,s.actor[1].index),extra_width=-(2*NOTE_PADDING+2*NOTE_OVERLAP);else if(s.placement==PLACEMENT.OVER)return a=s.actor.index,actor_ensure_distance(a-1,a,s.width/2),actor_ensure_distance(a,a+1,s.width/2),this._signals_height+=s.height,void 0}actor_ensure_distance(a,b,s.width+extra_width),this._signals_height+=s.height},this);var actors_x=0;return _.each(actors,function(a){a.x=Math.max(actors_x,a.x),_.each(a.distances,function(distance,b){\"undefined\"!=typeof distance&&(b=actors[b],distance=Math.max(distance,a.width/2,b.width/2),b.x=Math.max(b.x,a.x+a.width/2+distance-b.width/2))}),actors_x=a.x+a.width+a.padding_right},this),diagram.width=Math.max(actors_x,diagram.width),diagram.width+=2*DIAGRAM_MARGIN,diagram.height+=2*DIAGRAM_MARGIN+2*this._actors_height+this._signals_height,this},draw_title:function(){var title=this._title;title&&this.draw_text_box(title,title.message,TITLE_MARGIN,TITLE_PADDING,this._font)},draw_actors:function(offsetY){var y=offsetY;_.each(this.diagram.actors,function(a){this.draw_actor(a,y,this._actors_height),this.draw_actor(a,y+this._actors_height+this._signals_height,this._actors_height);var aX=getCenterX(a),line=this.draw_line(aX,y+this._actors_height-ACTOR_MARGIN,aX,y+this._actors_height+ACTOR_MARGIN+this._signals_height);line.attr(LINE)},this)},draw_actor:function(actor,offsetY,height){actor.y=offsetY,actor.height=height,this.draw_text_box(actor,actor.name,ACTOR_MARGIN,ACTOR_PADDING,this._font)},draw_signals:function(offsetY){var y=offsetY;_.each(this.diagram.signals,function(s){\"Signal\"==s.type?s.isSelf()?this.draw_self_signal(s,y):this.draw_signal(s,y):\"Note\"==s.type&&this.draw_note(s,y),y+=s.height},this)},draw_self_signal:function(signal,offsetY){assert(signal.isSelf(),\"signal must be a self signal\");var text_bb=signal.text_bb,aX=getCenterX(signal.actorA),x=aX+SELF_SIGNAL_WIDTH+SIGNAL_PADDING-text_bb.x,y=offsetY+signal.height/2;this.draw_text(x,y,signal.message,this._font);var line,attr=_.extend({},LINE,{\"stroke-dasharray\":this.line_types[signal.linetype]}),y1=offsetY+SIGNAL_MARGIN,y2=y1+signal.height-SIGNAL_MARGIN;line=this.draw_line(aX,y1,aX+SELF_SIGNAL_WIDTH,y1),line.attr(attr),line=this.draw_line(aX+SELF_SIGNAL_WIDTH,y1,aX+SELF_SIGNAL_WIDTH,y2),line.attr(attr),line=this.draw_line(aX+SELF_SIGNAL_WIDTH,y2,aX,y2),attr[\"arrow-end\"]=this.arrow_types[signal.arrowtype]+\"-wide-long\",line.attr(attr)},draw_signal:function(signal,offsetY){var aX=getCenterX(signal.actorA),bX=getCenterX(signal.actorB),x=(bX-aX)/2+aX,y=offsetY+SIGNAL_MARGIN+2*SIGNAL_PADDING;this.draw_text(x,y,signal.message,this._font),y=offsetY+signal.height-SIGNAL_MARGIN-SIGNAL_PADDING;var line=this.draw_line(aX,y,bX,y);line.attr(LINE),line.attr({\"arrow-end\":this.arrow_types[signal.arrowtype]+\"-wide-long\",\"stroke-dasharray\":this.line_types[signal.linetype]})},draw_note:function(note,offsetY){note.y=offsetY;var actorA=note.hasManyActors()?note.actor[0]:note.actor,aX=getCenterX(actorA);switch(note.placement){case PLACEMENT.RIGHTOF:note.x=aX+ACTOR_MARGIN;break;case PLACEMENT.LEFTOF:note.x=aX-ACTOR_MARGIN-note.width;break;case PLACEMENT.OVER:if(note.hasManyActors()){var bX=getCenterX(note.actor[1]),overlap=NOTE_OVERLAP+NOTE_PADDING;note.x=aX-overlap,note.width=bX+overlap-note.x}else note.x=aX-note.width/2;break;default:throw new Error(\"Unhandled note placement:\"+note.placement)}this.draw_text_box(note,note.message,NOTE_MARGIN,NOTE_PADDING,this._font)},draw_text:function(x,y,text,font){var t,paper=this._paper,f=font||{};f._obj?t=paper.print_center(x,y,text,f._obj,f[\"font-size\"]):(t=paper.text(x,y,text),t.attr(f));var bb=t.getBBox(),r=paper.rect(bb.x,bb.y,bb.width,bb.height);r.attr({fill:\"#fff\",stroke:\"none\"}),t.toFront()},draw_text_box:function(box,text,margin,padding,font){var x=box.x+margin,y=box.y+margin,w=box.width-2*margin,h=box.height-2*margin,rect=this.draw_rect(x,y,w,h);rect.attr(LINE),x=getCenterX(box),y=getCenterY(box),this.draw_text(x,y,text,font)}});var RaphaelTheme=function(diagram){this.init(diagram)};_.extend(RaphaelTheme.prototype,BaseTheme.prototype,{init_font:function(){this._font={\"font-size\":16,\"font-family\":\"Andale Mono, monospace\"}}});var HandRaphaelTheme=function(diagram){this.init(diagram)};_.extend(HandRaphaelTheme.prototype,BaseTheme.prototype,{init_font:function(){this._font={\"font-size\":16,\"font-family\":\"daniel\"},this._font._obj=this._paper.getFont(\"daniel\")},draw_line:function(x1,y1,x2,y2){return this._paper.handLine(x1,y1,x2,y2)},draw_rect:function(x,y,w,h){return this._paper.handRect(x,y,w,h)}});var themes={simple:RaphaelTheme,hand:HandRaphaelTheme};Diagram.prototype.drawSVG=function(container,options){var default_options={theme:\"hand\"};if(options=_.defaults(options||{},default_options),!(options.theme in themes))throw new Error(\"Unsupported theme: \"+options.theme);var drawing=new themes[options.theme](this);drawing.draw(container)},\"undefined\"!=typeof jQuery&&function($){$.fn.sequenceDiagram=function(options){return this.each(function(){var $this=$(this),diagram=Diagram.parse($this.text());$this.html(\"\"),diagram.drawSVG(this,options)})}}(jQuery);var root=\"object\"==typeof self&&self.self==self&&self||\"object\"==typeof global&&global.global==global&&global;\"undefined\"!=typeof exports?(\"undefined\"!=typeof module&&module.exports&&(exports=module.exports=Diagram),exports.Diagram=Diagram):root.Diagram=Diagram}();" + 
"//# sourceMappingURL=sequence-diagram-min.js.map" + 
"</script>" + 
"<script>" + 
"// flowchart.js, v1.6.1" + 
"// Copyright (c)yyyy Adriano Raiano (adrai)." + 
"// Distributed under MIT license" + 
"// http://adrai.github.io/flowchart.js" + 
"" + 
"!function(t,i){if(\"object\"==typeof exports&&\"object\"==typeof module)module.exports=i(require(\"Raphael\"));else if(\"function\"==typeof define&&define.amd)define([\"Raphael\"],i);else{var e=i(\"object\"==typeof exports?require(\"Raphael\"):t.Raphael);for(var r in e)(\"object\"==typeof exports?exports:t)[r]=e[r]}}(this,function(t){return function(t){function i(r){if(e[r])return e[r].exports;var s=e[r]={exports:{},id:r,loaded:!1};return t[r].call(s.exports,s,s.exports,i),s.loaded=!0,s.exports}var e={};return i.m=t,i.c=e,i.p=\"\",i(0)}([function(t,i,e){e(8);var r=e(4);e(14);var s={parse:r};\"undefined\"!=typeof window&&(window.flowchart=s),t.exports=s},function(t,i){function e(t,i){if(!t||\"function\"==typeof t)return i;var r={};for(var s in i)r[s]=i[s];for(s in t)t[s]&&(\"object\"==typeof r[s]?r[s]=e(r[s],t[s]):r[s]=t[s]);return r}function r(t,i){if(\"function\"==typeof Object.create)t.super_=i,t.prototype=Object.create(i.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}});else{t.super_=i;var e=function(){};e.prototype=i.prototype,t.prototype=new e,t.prototype.constructor=t}}t.exports={defaults:e,inherits:r}},function(t,i,e){function r(t,i,e){this.chart=t,this.group=this.chart.paper.set(),this.symbol=e,this.connectedTo=[],this.symbolType=i.symbolType,this.flowstate=i.flowstate||\"future\",this.next_direction=i.next&&i.direction_next?i.direction_next:void 0,this.text=this.chart.paper.text(0,0,i.text),i.key&&(this.text.node.id=i.key+\"t\"),this.text.node.setAttribute(\"class\",this.getAttr(\"class\")+\"t\"),this.text.attr({\"text-anchor\":\"start\",x:this.getAttr(\"text-margin\"),fill:this.getAttr(\"font-color\"),\"font-size\":this.getAttr(\"font-size\")});var r=this.getAttr(\"font\"),s=this.getAttr(\"font-family\"),o=this.getAttr(\"font-weight\");r&&this.text.attr({font:r}),s&&this.text.attr({\"font-family\":s}),o&&this.text.attr({\"font-weight\":o}),i.link&&this.text.attr(\"href\",i.link),i.target&&this.text.attr(\"target\",i.target);var n=this.getAttr(\"maxWidth\");if(n){for(var h=i.text.split(\" \"),a=\"\",x=0,y=h.length;y>x;x++){var l=h[x];this.text.attr(\"text\",a+\" \"+l),a+=this.text.getBBox().width>n?\"\\n\"+l:\" \"+l}this.text.attr(\"text\",a.substring(1))}if(this.group.push(this.text),e){var g=this.getAttr(\"text-margin\");e.attr({fill:this.getAttr(\"fill\"),stroke:this.getAttr(\"element-color\"),\"stroke-width\":this.getAttr(\"line-width\"),width:this.text.getBBox().width+2*g,height:this.text.getBBox().height+2*g}),e.node.setAttribute(\"class\",this.getAttr(\"class\")),i.link&&e.attr(\"href\",i.link),i.target&&e.attr(\"target\",i.target),i.key&&(e.node.id=i.key),this.group.push(e),e.insertBefore(this.text),this.text.attr({y:e.getBBox().height/2}),this.initialize()}}var s=e(3),o=s.drawLine,n=s.checkLineIntersection;r.prototype.getAttr=function(t){if(this.chart){var i,e=this.chart.options?this.chart.options[t]:void 0,r=this.chart.options.symbols?this.chart.options.symbols[this.symbolType][t]:void 0;return this.chart.options.flowstate&&this.chart.options.flowstate[this.flowstate]&&(i=this.chart.options.flowstate[this.flowstate][t]),i||r||e}},r.prototype.initialize=function(){this.group.transform(\"t\"+this.getAttr(\"line-width\")+\",\"+this.getAttr(\"line-width\")),this.width=this.group.getBBox().width,this.height=this.group.getBBox().height},r.prototype.getCenter=function(){return{x:this.getX()+this.width/2,y:this.getY()+this.height/2}},r.prototype.getX=function(){return this.group.getBBox().x},r.prototype.getY=function(){return this.group.getBBox().y},r.prototype.shiftX=function(t){this.group.transform(\"t\"+(this.getX()+t)+\",\"+this.getY())},r.prototype.setX=function(t){this.group.transform(\"t\"+t+\",\"+this.getY())},r.prototype.shiftY=function(t){this.group.transform(\"t\"+this.getX()+\",\"+(this.getY()+t))},r.prototype.setY=function(t){this.group.transform(\"t\"+this.getX()+\",\"+t)},r.prototype.getTop=function(){var t=this.getY(),i=this.getX()+this.width/2;return{x:i,y:t}},r.prototype.getBottom=function(){var t=this.getY()+this.height,i=this.getX()+this.width/2;return{x:i,y:t}},r.prototype.getLeft=function(){var t=this.getY()+this.group.getBBox().height/2,i=this.getX();return{x:i,y:t}},r.prototype.getRight=function(){var t=this.getY()+this.group.getBBox().height/2,i=this.getX()+this.group.getBBox().width;return{x:i,y:t}},r.prototype.render=function(){if(this.next){var t=this.getAttr(\"line-length\");if(\"right\"===this.next_direction){var i=this.getRight();if(!this.next.isPositioned){this.next.setY(i.y-this.next.height/2),this.next.shiftX(this.group.getBBox().x+this.width+t);var e=this;!function s(){for(var i,r=!1,o=0,n=e.chart.symbols.length;n>o;o++){i=e.chart.symbols[o];var h=Math.abs(i.getCenter().x-e.next.getCenter().x);if(i.getCenter().y>e.next.getCenter().y&&h<=e.next.width/2){r=!0;break}}r&&(e.next.setX(i.getX()+i.width+t),s())}(),this.next.isPositioned=!0,this.next.render()}}else{var r=this.getBottom();this.next.isPositioned||(this.next.shiftY(this.getY()+this.height+t),this.next.setX(r.x-this.next.width/2),this.next.isPositioned=!0,this.next.render())}}},r.prototype.renderLines=function(){this.next&&(this.next_direction?this.drawLineTo(this.next,\"\",this.next_direction):this.drawLineTo(this.next))},r.prototype.drawLineTo=function(t,i,e){this.connectedTo.indexOf(t)<0&&this.connectedTo.push(t);var r,s=this.getCenter().x,h=this.getCenter().y,a=this.getRight(),x=this.getBottom(),y=this.getLeft(),l=t.getCenter().x,g=t.getCenter().y,f=t.getTop(),p=t.getRight(),c=t.getLeft(),u=s===l,d=h===g,m=g>h,b=h>g,v=s>l,w=l>s,k=0,_=this.getAttr(\"line-length\"),B=this.getAttr(\"line-width\");if(e&&\"bottom\"!==e||!u||!m)if(e&&\"right\"!==e||!d||!w)if(e&&\"left\"!==e||!d||!v)if(e&&\"right\"!==e||!u||!b)if(e&&\"right\"!==e||!u||!m)if(e&&\"bottom\"!==e||!v)if(e&&\"bottom\"!==e||!w)if(e&&\"right\"===e&&v)r=o(this.chart,a,[{x:a.x+_/2,y:a.y},{x:a.x+_/2,y:f.y-_/2},{x:f.x,y:f.y-_/2},{x:f.x,y:f.y}],i),this.rightStart=!0,t.topEnd=!0,k=a.x+_/2;else if(e&&\"right\"===e&&w)r=o(this.chart,a,[{x:f.x,y:a.y},{x:f.x,y:f.y}],i),this.rightStart=!0,t.topEnd=!0,k=a.x+_/2;else if(e&&\"bottom\"===e&&u&&b)r=o(this.chart,x,[{x:x.x,y:x.y+_/2},{x:a.x+_/2,y:x.y+_/2},{x:a.x+_/2,y:f.y-_/2},{x:f.x,y:f.y-_/2},{x:f.x,y:f.y}],i),this.bottomStart=!0,t.topEnd=!0,k=x.x+_/2;else if(\"left\"===e&&u&&b){var A=y.x-_/2;c.x<y.x&&(A=c.x-_/2),r=o(this.chart,y,[{x:A,y:y.y},{x:A,y:f.y-_/2},{x:f.x,y:f.y-_/2},{x:f.x,y:f.y}],i),this.leftStart=!0,t.topEnd=!0,k=y.x}else\"left\"===e&&(r=o(this.chart,y,[{x:f.x+(y.x-f.x)/2,y:y.y},{x:f.x+(y.x-f.x)/2,y:f.y-_/2},{x:f.x,y:f.y-_/2},{x:f.x,y:f.y}],i),this.leftStart=!0,t.topEnd=!0,k=y.x);else r=o(this.chart,x,[{x:x.x,y:x.y+_/2},{x:x.x+(x.x-f.x)/2,y:x.y+_/2},{x:x.x+(x.x-f.x)/2,y:f.y-_/2},{x:f.x,y:f.y-_/2},{x:f.x,y:f.y}],i),this.bottomStart=!0,t.topEnd=!0,k=x.x+(x.x-f.x)/2;else r=this.leftEnd&&b?o(this.chart,x,[{x:x.x,y:x.y+_/2},{x:x.x+(x.x-f.x)/2,y:x.y+_/2},{x:x.x+(x.x-f.x)/2,y:f.y-_/2},{x:f.x,y:f.y-_/2},{x:f.x,y:f.y}],i):o(this.chart,x,[{x:x.x,y:f.y-_/2},{x:f.x,y:f.y-_/2},{x:f.x,y:f.y}],i),this.bottomStart=!0,t.topEnd=!0,k=x.x+(x.x-f.x)/2;else r=o(this.chart,a,[{x:a.x+_/2,y:a.y},{x:a.x+_/2,y:f.y-_/2},{x:f.x,y:f.y-_/2},{x:f.x,y:f.y}],i),this.rightStart=!0,t.topEnd=!0,k=a.x+_/2;else r=o(this.chart,a,[{x:a.x+_/2,y:a.y},{x:a.x+_/2,y:f.y-_/2},{x:f.x,y:f.y-_/2},{x:f.x,y:f.y}],i),this.rightStart=!0,t.topEnd=!0,k=a.x+_/2;else r=o(this.chart,y,p,i),this.leftStart=!0,t.rightEnd=!0,k=p.x;else r=o(this.chart,a,c,i),this.rightStart=!0,t.leftEnd=!0,k=c.x;else r=o(this.chart,x,f,i),this.bottomStart=!0,t.topEnd=!0,k=x.x;if(r){for(var L=0,M=this.chart.lines.length;M>L;L++)for(var O,X=this.chart.lines[L],T=X.attr(\"path\"),Y=r.attr(\"path\"),C=0,S=T.length-1;S>C;C++){var j=[];j.push([\"M\",T[C][1],T[C][2]]),j.push([\"L\",T[C+1][1],T[C+1][2]]);for(var E=j[0][1],z=j[0][2],P=j[1][1],R=j[1][2],F=0,I=Y.length-1;I>F;F++){var W=[];W.push([\"M\",Y[F][1],Y[F][2]]),W.push([\"L\",Y[F+1][1],Y[F+1][2]]);var N=W[0][1],V=W[0][2],q=W[1][1],G=W[1][2],Q=n(E,z,P,R,N,V,q,G);if(Q.onLine1&&Q.onLine2){var $;V===G?N>q?($=[\"L\",Q.x+2*B,V],Y.splice(F+1,0,$),$=[\"C\",Q.x+2*B,V,Q.x,V-4*B,Q.x-2*B,V],Y.splice(F+2,0,$),r.attr(\"path\",Y)):($=[\"L\",Q.x-2*B,V],Y.splice(F+1,0,$),$=[\"C\",Q.x-2*B,V,Q.x,V-4*B,Q.x+2*B,V],Y.splice(F+2,0,$),r.attr(\"path\",Y)):V>G?($=[\"L\",N,Q.y+2*B],Y.splice(F+1,0,$),$=[\"C\",N,Q.y+2*B,N+4*B,Q.y,N,Q.y-2*B],Y.splice(F+2,0,$),r.attr(\"path\",Y)):($=[\"L\",N,Q.y-2*B],Y.splice(F+1,0,$),$=[\"C\",N,Q.y-2*B,N+4*B,Q.y,N,Q.y+2*B],Y.splice(F+2,0,$),r.attr(\"path\",Y)),F+=2,O+=2}}}this.chart.lines.push(r)}(!this.chart.maxXFromLine||this.chart.maxXFromLine&&k>this.chart.maxXFromLine)&&(this.chart.maxXFromLine=k)},t.exports=r},function(t,i){function e(t,i,e){var r,s,o=\"M{0},{1}\";for(r=2,s=2*e.length+2;s>r;r+=2)o+=\" L{\"+r+\"},{\"+(r+1)+\"}\";var n=[i.x,i.y];for(r=0,s=e.length;s>r;r++)n.push(e[r].x),n.push(e[r].y);var h=t.paper.path(o,n);h.attr(\"stroke\",t.options[\"element-color\"]),h.attr(\"stroke-width\",t.options[\"line-width\"]);var a=t.options.font,x=t.options[\"font-family\"],y=t.options[\"font-weight\"];return a&&h.attr({font:a}),x&&h.attr({\"font-family\":x}),y&&h.attr({\"font-weight\":y}),h}function r(t,i,e,r){var s,o;\"[object Array]\"!==Object.prototype.toString.call(e)&&(e=[e]);var n=\"M{0},{1}\";for(s=2,o=2*e.length+2;o>s;s+=2)n+=\" L{\"+s+\"},{\"+(s+1)+\"}\";var h=[i.x,i.y];for(s=0,o=e.length;o>s;s++)h.push(e[s].x),h.push(e[s].y);var a=t.paper.path(n,h);a.attr({stroke:t.options[\"line-color\"],\"stroke-width\":t.options[\"line-width\"],\"arrow-end\":t.options[\"arrow-end\"]});var x=t.options.font,y=t.options[\"font-family\"],l=t.options[\"font-weight\"];if(x&&a.attr({font:x}),y&&a.attr({\"font-family\":y}),l&&a.attr({\"font-weight\":l}),r){var g=!1,f=t.paper.text(0,0,r),p=!1,c=e[0];i.y===c.y&&(p=!0);var u=0,d=0;g?(u=i.x>c.x?i.x-(i.x-c.x)/2:c.x-(c.x-i.x)/2,d=i.y>c.y?i.y-(i.y-c.y)/2:c.y-(c.y-i.y)/2,p?(u-=f.getBBox().width/2,d-=t.options[\"text-margin\"]):(u+=t.options[\"text-margin\"],d-=f.getBBox().height/2)):(u=i.x,d=i.y,p?(u+=t.options[\"text-margin\"]/2,d-=t.options[\"text-margin\"]):(u+=t.options[\"text-margin\"]/2,d+=t.options[\"text-margin\"])),f.attr({\"text-anchor\":\"start\",\"font-size\":t.options[\"font-size\"],fill:t.options[\"font-color\"],x:u,y:d}),x&&f.attr({font:x}),y&&f.attr({\"font-family\":y}),l&&f.attr({\"font-weight\":l})}return a}function s(t,i,e,r,s,o,n,h){var a,x,y,l,g,f={x:null,y:null,onLine1:!1,onLine2:!1};return a=(h-o)*(e-t)-(n-s)*(r-i),0===a?f:(x=i-o,y=t-s,l=(n-s)*x-(h-o)*y,g=(e-t)*x-(r-i)*y,x=l/a,y=g/a,f.x=t+x*(e-t),f.y=i+x*(r-i),x>0&&1>x&&(f.onLine1=!0),y>0&&1>y&&(f.onLine2=!0),f)}t.exports={drawPath:e,drawLine:r,checkLineIntersection:s}},function(t,i,e){function r(t){function i(t){var i=t.indexOf(\"(\")+1,e=t.indexOf(\")\");return i>=0&&e>=0?r.symbols[t.substring(0,i-1)]:r.symbols[t]}function e(t){var i=\"next\",e=t.indexOf(\"(\")+1,r=t.indexOf(\")\");return e>=0&&r>=0&&(i=X.substring(e,r),i.indexOf(\",\")<0&&\"yes\"!==i&&\"no\"!==i&&(i=\"next, \"+i)),i}t=t||\"\",t=t.trim();for(var r={symbols:{},start:null,drawSVG:function(t,i){function e(t){if(g[t.key])return g[t.key];switch(t.symbolType){case\"start\":g[t.key]=new o(l,t);break;case\"end\":g[t.key]=new n(l,t);break;case\"operation\":g[t.key]=new h(l,t);break;case\"inputoutput\":g[t.key]=new a(l,t);break;case\"subroutine\":g[t.key]=new x(l,t);break;case\"condition\":g[t.key]=new y(l,t);break;default:return new Error(\"Wrong symbol type!\")}return g[t.key]}var r=this;this.diagram&&this.diagram.clean();var l=new s(t,i);this.diagram=l;var g={};!function f(t,i,s){var o=e(t);return r.start===t?l.startWith(o):i&&s&&!i.pathOk&&(i instanceof y?(s.yes===t&&i.yes(o),s.no===t&&i.no(o)):i.then(o)),o.pathOk?o:(o instanceof y?(t.yes&&f(t.yes,o,t),t.no&&f(t.no,o,t)):t.next&&f(t.next,o,t),o)}(this.start),l.render()},clean:function(){this.diagram.clean()}},l=[],g=0,f=1,p=t.length;p>f;f++)if(\"\\n\"===t[f]&&\"\\\\\"!==t[f-1]){var c=t.substring(g,f);g=f+1,l.push(c.replace(/\\\\\\n/g,\"\\n\"))}g<t.length&&l.push(t.substr(g));for(var u=1,d=l.length;d>u;){var m=l[u];m.indexOf(\"->\")<0&&m.indexOf(\"=>\")<0?(l[u-1]+=\"\\n\"+m,l.splice(u,1),d--):u++}for(;l.length>0;){var b=l.splice(0,1)[0];if(b.indexOf(\"=>\")>=0){var v,w=b.split(\"=>\"),k={key:w[0],symbolType:w[1],text:null,link:null,target:null,flowstate:null};if(k.symbolType.indexOf(\": \")>=0&&(v=k.symbolType.split(\": \"),k.symbolType=v.shift(),k.text=v.join(\": \")),k.text&&k.text.indexOf(\":>\")>=0?(v=k.text.split(\":>\"),k.text=v.shift(),k.link=v.join(\":>\")):k.symbolType.indexOf(\":>\")>=0&&(v=k.symbolType.split(\":>\"),k.symbolType=v.shift(),k.link=v.join(\":>\")),k.symbolType.indexOf(\"\\n\")>=0&&(k.symbolType=k.symbolType.split(\"\\n\")[0]),k.link){var _=k.link.indexOf(\"[\")+1,B=k.link.indexOf(\"]\");_>=0&&B>=0&&(k.target=k.link.substring(_,B),k.link=k.link.substring(0,_-1))}if(k.text&&k.text.indexOf(\"|\")>=0){var A=k.text.split(\"|\");k.flowstate=A.pop().trim(),k.text=A.join(\"|\")}r.symbols[k.key]=k}else if(b.indexOf(\"->\")>=0)for(var L=b.split(\"->\"),M=0,O=L.length;O>M;M++){var X=L[M],T=i(X),Y=e(X),C=null;if(Y.indexOf(\",\")>=0){var S=Y.split(\",\");Y=S[0],C=S[1].trim()}if(r.start||(r.start=T),O>M+1){var j=L[M+1];T[Y]=i(j),T[\"direction_\"+Y]=C,C=null}}}return r}var s=e(6),o=e(12),n=e(9),h=e(11),a=e(10),x=e(13),y=e(5);t.exports=r},function(t,i,e){function r(t,i){i=i||{},s.call(this,t,i),this.textMargin=this.getAttr(\"text-margin\"),this.yes_direction=\"bottom\",this.no_direction=\"right\",i.yes&&i.direction_yes&&i.no&&!i.direction_no?\"right\"===i.direction_yes?(this.no_direction=\"bottom\",this.yes_direction=\"right\"):(this.no_direction=\"right\",this.yes_direction=\"bottom\"):i.yes&&!i.direction_yes&&i.no&&i.direction_no?\"right\"===i.direction_no?(this.yes_direction=\"bottom\",this.no_direction=\"right\"):(this.yes_direction=\"right\",this.no_direction=\"bottom\"):(this.yes_direction=\"bottom\",this.no_direction=\"right\"),this.yes_direction=this.yes_direction||\"bottom\",this.no_direction=this.no_direction||\"right\",this.text.attr({x:2*this.textMargin});var e=this.text.getBBox().width+3*this.textMargin;e+=e/2;var r=this.text.getBBox().height+2*this.textMargin;r+=r/2,r=Math.max(.5*e,r);var o=e/4,n=r/4;this.text.attr({x:o+this.textMargin/2});var a={x:o,y:n},x=[{x:o-e/4,y:n+r/4},{x:o-e/4+e/2,y:n+r/4+r/2},{x:o-e/4+e,y:n+r/4},{x:o-e/4+e/2,y:n+r/4-r/2},{x:o-e/4,y:n+r/4}],y=h(t,a,x);y.attr({stroke:this.getAttr(\"element-color\"),\"stroke-width\":this.getAttr(\"line-width\"),fill:this.getAttr(\"fill\")}),i.link&&y.attr(\"href\",i.link),i.target&&y.attr(\"target\",i.target),i.key&&(y.node.id=i.key),y.node.setAttribute(\"class\",this.getAttr(\"class\")),this.text.attr({y:y.getBBox().height/2}),this.group.push(y),y.insertBefore(this.text),this.initialize()}var s=e(2),o=e(1).inherits,n=e(3),h=n.drawPath;o(r,s),r.prototype.render=function(){this.yes_direction&&(this[this.yes_direction+\"_symbol\"]=this.yes_symbol),this.no_direction&&(this[this.no_direction+\"_symbol\"]=this.no_symbol);var t=this.getAttr(\"line-length\");if(this.bottom_symbol){var i=this.getBottom();this.bottom_symbol.isPositioned||(this.bottom_symbol.shiftY(this.getY()+this.height+t),this.bottom_symbol.setX(i.x-this.bottom_symbol.width/2),this.bottom_symbol.isPositioned=!0,this.bottom_symbol.render())}if(this.right_symbol){var e=this.getRight();if(!this.right_symbol.isPositioned){this.right_symbol.setY(e.y-this.right_symbol.height/2),this.right_symbol.shiftX(this.group.getBBox().x+this.width+t);var r=this;!function s(){for(var i,e=!1,o=0,n=r.chart.symbols.length;n>o;o++){i=r.chart.symbols[o];var h=Math.abs(i.getCenter().x-r.right_symbol.getCenter().x);if(i.getCenter().y>r.right_symbol.getCenter().y&&h<=r.right_symbol.width/2){e=!0;break}}e&&(r.right_symbol.setX(i.getX()+i.width+t),s())}(),this.right_symbol.isPositioned=!0,this.right_symbol.render()}}},r.prototype.renderLines=function(){this.yes_symbol&&this.drawLineTo(this.yes_symbol,this.getAttr(\"yes-text\"),this.yes_direction),this.no_symbol&&this.drawLineTo(this.no_symbol,this.getAttr(\"no-text\"),this.no_direction)},t.exports=r},function(t,i,e){function r(t,i){i=i||{},this.paper=new s(t),this.options=o(i,n),this.symbols=[],this.lines=[],this.start=null}var s=e(15),o=e(1).defaults,n=e(7),h=e(5);r.prototype.handle=function(t){this.symbols.indexOf(t)<=-1&&this.symbols.push(t);var i=this;return t instanceof h?(t.yes=function(e){return t.yes_symbol=e,t.no_symbol&&(t.pathOk=!0),i.handle(e)},t.no=function(e){return t.no_symbol=e,t.yes_symbol&&(t.pathOk=!0),i.handle(e)}):t.then=function(e){return t.next=e,t.pathOk=!0,i.handle(e)},t},r.prototype.startWith=function(t){return this.start=t,this.handle(t)},r.prototype.render=function(){var t,i,e=0,r=0,s=0,o=0,n=0,h=0;for(s=0,o=this.symbols.length;o>s;s++)t=this.symbols[s],t.width>e&&(e=t.width),t.height>r&&(r=t.height);for(s=0,o=this.symbols.length;o>s;s++)t=this.symbols[s],t.shiftX(this.options.x+(e-t.width)/2+this.options[\"line-width\"]),t.shiftY(this.options.y+(r-t.height)/2+this.options[\"line-width\"]);for(this.start.render(),s=0,o=this.symbols.length;o>s;s++)t=this.symbols[s],t.renderLines();for(n=this.maxXFromLine,s=0,o=this.symbols.length;o>s;s++){t=this.symbols[s];var a=t.getX()+t.width,x=t.getY()+t.height;a>n&&(n=a),x>h&&(h=x)}for(s=0,o=this.lines.length;o>s;s++){i=this.lines[s].getBBox();var a=i.x2,x=i.y2;a>n&&(n=a),x>h&&(h=x)}var y=this.options.scale,l=this.options[\"line-width\"];this.paper.setSize(n*y+l*y,h*y+l*y),this.paper.setViewBox(0,0,n+l,h+l,!0)},r.prototype.clean=function(){if(this.paper){var t=this.paper.canvas;t.parentNode.removeChild(t)}},t.exports=r},function(t,i){t.exports={x:0,y:0,\"line-width\":3,\"line-length\":50,\"text-margin\":10,\"font-size\":14,\"font-color\":\"black\",\"line-color\":\"black\",\"element-color\":\"black\",fill:\"white\",\"yes-text\":\"yes\",\"no-text\":\"no\",\"arrow-end\":\"block\",\"class\":\"flowchart\",scale:1,symbols:{start:{},end:{},condition:{},inputoutput:{},operation:{},subroutine:{}}}},function(t,i){Array.prototype.indexOf||(Array.prototype.indexOf=function(t){\"use strict\";if(null===this)throw new TypeError;var i=Object(this),e=i.length>>>0;if(0===e)return-1;var r=0;if(arguments.length>0&&(r=Number(arguments[1]),r!=r?r=0:0!==r&&r!=1/0&&r!=-(1/0)&&(r=(r>0||-1)*Math.floor(Math.abs(r)))),r>=e)return-1;for(var s=r>=0?r:Math.max(e-Math.abs(r),0);e>s;s++)if(s in i&&i[s]===t)return s;return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(t){\"use strict\";if(null===this)throw new TypeError;var i=Object(this),e=i.length>>>0;if(0===e)return-1;var r=e;arguments.length>1&&(r=Number(arguments[1]),r!=r?r=0:0!==r&&r!=1/0&&r!=-(1/0)&&(r=(r>0||-1)*Math.floor(Math.abs(r))));for(var s=r>=0?Math.min(r,e-1):e-Math.abs(r);s>=0;s--)if(s in i&&i[s]===t)return s;return-1}),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\\s+|\\s+$/g,\"\")})},function(t,i,e){function r(t,i){var e=t.paper.rect(0,0,0,0,20);i=i||{},i.text=i.text||\"End\",s.call(this,t,i,e)}var s=e(2),o=e(1).inherits;o(r,s),t.exports=r},function(t,i,e){function r(t,i){i=i||{},s.call(this,t,i),this.textMargin=this.getAttr(\"text-margin\"),this.text.attr({x:3*this.textMargin});var e=this.text.getBBox().width+4*this.textMargin,r=this.text.getBBox().height+2*this.textMargin,o=this.textMargin,n=r/2,a={x:o,y:n},x=[{x:o-this.textMargin,y:r},{x:o-this.textMargin+e,y:r},{x:o-this.textMargin+e+2*this.textMargin,y:0},{x:o-this.textMargin+2*this.textMargin,y:0},{x:o,y:n}],y=h(t,a,x);y.attr({stroke:this.getAttr(\"element-color\"),\"stroke-width\":this.getAttr(\"line-width\"),fill:this.getAttr(\"fill\")}),i.link&&y.attr(\"href\",i.link),i.target&&y.attr(\"target\",i.target),i.key&&(y.node.id=i.key),y.node.setAttribute(\"class\",this.getAttr(\"class\")),this.text.attr({y:y.getBBox().height/2}),this.group.push(y),y.insertBefore(this.text),this.initialize()}var s=e(2),o=e(1).inherits,n=e(3),h=n.drawPath;o(r,s),r.prototype.getLeft=function(){var t=this.getY()+this.group.getBBox().height/2,i=this.getX()+this.textMargin;return{x:i,y:t}},r.prototype.getRight=function(){var t=this.getY()+this.group.getBBox().height/2,i=this.getX()+this.group.getBBox().width-this.textMargin;return{x:i,y:t}},t.exports=r},function(t,i,e){function r(t,i){var e=t.paper.rect(0,0,0,0);i=i||{},s.call(this,t,i,e)}var s=e(2),o=e(1).inherits;o(r,s),t.exports=r},function(t,i,e){function r(t,i){var e=t.paper.rect(0,0,0,0,20);i=i||{},i.text=i.text||\"Start\",s.call(this,t,i,e)}var s=e(2),o=e(1).inherits;o(r,s),t.exports=r},function(t,i,e){function r(t,i){var e=t.paper.rect(0,0,0,0);i=i||{},s.call(this,t,i,e),e.attr({width:this.text.getBBox().width+4*this.getAttr(\"text-margin\")}),this.text.attr({x:2*this.getAttr(\"text-margin\")});var r=t.paper.rect(0,0,0,0);r.attr({x:this.getAttr(\"text-margin\"),stroke:this.getAttr(\"element-color\"),\"stroke-width\":this.getAttr(\"line-width\"),width:this.text.getBBox().width+2*this.getAttr(\"text-margin\"),height:this.text.getBBox().height+2*this.getAttr(\"text-margin\"),fill:this.getAttr(\"fill\")}),i.key&&(r.node.id=i.key+\"i\");var o=this.getAttr(\"font\"),n=this.getAttr(\"font-family\"),h=this.getAttr(\"font-weight\");o&&r.attr({font:o}),n&&r.attr({\"font-family\":n}),h&&r.attr({\"font-weight\":h}),i.link&&r.attr(\"href\",i.link),i.target&&r.attr(\"target\",i.target),this.group.push(r),r.insertBefore(this.text),this.initialize()}var s=e(2),o=e(1).inherits;o(r,s),t.exports=r},function(t,i,e){if(\"undefined\"!=typeof jQuery){var r=e(4);!function(t){t.fn.flowChart=function(i){return this.each(function(){var e=t(this),s=r(e.text());e.html(\"\"),s.drawSVG(this,i)})}}(jQuery)}},function(i,e){i.exports=t}])});" + 
"//# sourceMappingURL=flowchart.min.js.map" + 
"</script>" + 
"<script>" + 
"function toKantanEditor(editor) {" + 
"	/* tabキーでtabを入力 */" + 
"	editor.addEventListener('keydown', function(e) {" + 
"		if ((e.which != 9) && (e.keyCode != 9)) {" + 
"			return true;" + 
"		}" + 
"		e.preventDefault();" + 
"		" + 
"		var start = editor.selectionStart;" + 
"		var end   = editor.selectionEnd;" + 
"		if (start == end) {" + 
"			/* いわゆる普通のtab */" + 
"			" + 
"			var text = editor.value;" + 
"			editor.value = text.substr(0, start) + '\\t' + text.substr(start, text.length);" + 
"			editor.setSelectionRange(start + 1, start + 1);" + 
"			updateScrollPos(e.target);" + 
"			saveUndo(e.target);" + 
"		} else {" + 
"			if (e.shiftKey) {" + 
"				/* 選択 + Shift + Tabで複数行アウトデント */" + 
"				var style = editor.currentStyle " + 
"						|| document.defaultView.getComputedStyle(editor, '');" + 
"				var tabSize = style.tabSize" + 
"							|| style.MozTabSize" + 
"							|| 8;" + 
"				tabSize = Number(tabSize);" + 
"				" + 
"				// スタート・エンド位置特定" + 
"				var orgText = editor.value;" + 
"				while ((0 < start) && (orgText.charAt(start - 1) != \"\\n\")) {" + 
"					start--;" + 
"				}" + 
"				if (orgText.charAt(end - 1) == \"\\n\") {" + 
"					end -= 1;" + 
"				}" + 
"				while ((end < orgText.length) && (orgText.charAt(end) != \"\\n\")) {" + 
"					end++;" + 
"				}" + 
"				end--;" + 
"				" + 
"				var deleteCount = 0;" + 
"				var newText = orgText.substring(0, start);" + 
"				var i = start;" + 
"				while (i < end) {" + 
"					var c = orgText.charAt(i);" + 
"					var spaceCount = 0;" + 
"					while (spaceCount < tabSize) {" + 
"						if (c == \" \") {" + 
"							spaceCount += 1;" + 
"							deleteCount++;" + 
"						} else if (c == \" \") {" + 
"							spaceCount += 2;" + 
"							deleteCount++;" + 
"						} else if (c == \"\\t\") {" + 
"							spaceCount += tabSize;" + 
"							deleteCount++;" + 
"						} else {" + 
"							newText += c;" + 
"							i++;" + 
"							break;" + 
"						}" + 
"						c = orgText.charAt(++i);" + 
"					}" + 
"					while ((c != \"\\n\") && (i < end)) {" + 
"						c = orgText.charAt(i++);" + 
"						newText += c;" + 
"					} " + 
"				}" + 
"				newText += orgText.substr(end)" + 
"				" + 
"				editor.value = newText;" + 
"				" + 
"				editor.selectionStart = start;" + 
"				editor.selectionEnd   = end - deleteCount + 1;" + 
"				updateScrollPos(e.target);" + 
"				saveUndo(e.target);" + 
"			} else {" + 
"				/* 選択 + Tabで複数行インデント */" + 
"				" + 
"				// スタート・エンド位置特定" + 
"				var orgText = editor.value;" + 
"				while ((0 < start) && (orgText.charAt(start - 1) != \"\\n\")) {" + 
"					start--;" + 
"				}" + 
"				if (orgText.charAt(end - 1) == \"\\n\") {" + 
"					end -= 1;" + 
"				}" + 
"				while ((end < orgText.length) && (orgText.charAt(end) != \"\\n\")) {" + 
"					end++;" + 
"				}" + 
"				" + 
"				// タブ挿入" + 
"				var count = 1;" + 
"				var newText = orgText.substring(0, start) + \"\\t\";" + 
"				for (var i = start; i < end; i++) {" + 
"					var c = orgText.charAt(i);" + 
"					newText += c;" + 
"					if (c == \"\\n\") {" + 
"						newText += \"\\t\";" + 
"						count++;" + 
"					}" + 
"				}" + 
"				newText += orgText.substr(end);" + 
"				" + 
"				// テキスト入れ替え" + 
"				editor.value = newText;" + 
"				" + 
"				// 選択位置修正" + 
"				editor.selectionStart = start;" + 
"				editor.selectionEnd   = end + count;" + 
"				updateScrollPos(e.target);" + 
"				saveUndo(e.target);" + 
"			}" + 
"		}" + 
"		" + 
"		return false;" + 
"	});" + 
"	" + 
"	/* オートインデント */" + 
"	editor.addEventListener('keydown', function(e) {" + 
"		" + 
"		// Enterキー" + 
"		if (e.which == 13 || e.keyCode == 13) {" + 
"			e.preventDefault();" + 
"			" + 
"			// 行頭か先頭に至るまでさかのぼる" + 
"			var count = 0;" + 
"			var text = editor.value;" + 
"			var pos = editor.selectionStart;" + 
"			while ((0 < pos) && (text.charAt(pos - 1) != \"\\n\")) {" + 
"				pos--;" + 
"				count++;" + 
"			}" + 
"			" + 
"			// 先頭の空白文字を記憶" + 
"			var spaces = \"\";" + 
"			for (var i = 0; i < count; i++) {" + 
"				var c = text.charAt(pos + i);" + 
"				if((c != \" \") && (c !=  \"　\") && (c != \"\\t\")) {" + 
"					break;" + 
"				}" + 
"				spaces += c;" + 
"			}			" + 
"			" + 
"			// 改行＋スペース（タブ）の挿入" + 
"			var newPos = editor.selectionStart + spaces.length + 1;" + 
"			var part1 = text.substring(0, editor.selectionStart);" + 
"			var part2 = text.substr(editor.selectionEnd);" + 
"			editor.value = part1 + \"\\n\" + spaces + part2;" + 
"			" + 
"			editor.selectionStart = newPos;" + 
"			editor.selectionEnd = newPos;" + 
"			updateScrollPos(e.target);" + 
"			" + 
"			saveUndo(e.target);" + 
"		}" + 
"	});" + 
"" + 
"	/* Undo, Redo */" + 
"	var isCtrlVDowning = false;" + 
"	var keyCache = {};" + 
"	var undoStack = [];" + 
"	var redoStack = [];" + 
"	var previousVal = {val:editor.value, selectionStart:undefined, selectionEnd:undefined};" + 
"	var valueAtArrowOrClick = undefined;" + 
"	editor.addEventListener(\"keydown\", function(e){" + 
"		if (e.code == \"Enter\") {" + 
"			saveUndo(e.target);" + 
"		} else if ((e.which == 86 || e.keyCode == 86) && (e.ctrlKey || e.metaKey) && !isCtrlVDowning) {" + 
"			// Ctrl + vの前にundoできるようにする" + 
"			saveUndoAfterPaste(e.target);" + 
"			isCtrlVDowning = true;" + 
"		} else if ((e.which == 86 || e.keyCode == 86) && (e.ctrlKey || e.metaKey) && isCtrlVDowning) {" + 
"			// Ctrl + vを押しっぱなしの時は普通のundo(#73 fix)" + 
"			saveUndo(e.target);" + 
"		} " + 
"		var code = (e.keyCode ? e.keyCode : e.which);" + 
"		if ((33 <= code) && (code <= 40)) {" + 
"			// PageUp, Pagedown, Home, End, 矢印キーはIME OFF判定" + 
"			keyCache[e.code] = true;" + 
"		}" + 
"	});" + 
"	editor.addEventListener(\"keypress\", function(e){" + 
"		// keypressが発生するキーはIME OFFと判定" + 
"		keyCache[e.code] = true;" + 
"	});" + 
"	editor.addEventListener(\"keyup\", function(e){" + 
"		if ((e.which == 13 || e.keyCode == 13)                          // ENTER" + 
"				|| (e.which == 8 || e.keyCode == 8)                      // BS" + 
"				|| (e.which == 46 || e.keyCode == 46)                    // DELETE" + 
"				|| ((e.which == 86 || e.keyCode == 86) && (e.ctrlKey || e.metaKey))     // Ctrl+v" + 
"				|| ((e.which == 88 || e.keyCode == 88) && (e.ctrlKey || e.metaKey))) {  //Ctrl+x" + 
"			" + 
"			saveUndo(e.target);" + 
"		} else if (keyCache[e.code] == true) {" + 
"			// keypressが発生していた(IME OFF)なら、Undo可能にする" + 
"			" + 
"			var code = (e.keyCode ? e.keyCode : e.which);" + 
"			if ((33 <= code) && (code <= 40)) {" + 
"				// PageUp, Pagedown, Home, End, 矢印キー" + 
"				valueAtArrowOrClick = {" + 
"					val: editor.value," + 
"					selectionStart: editor.selectionStart," + 
"					selectionEnd: editor.selectionEnd" + 
"				};" + 
"				keyCache[e.code] = false;" + 
"			} else {" + 
"				keyCache[e.code] = false;" + 
"				saveUndo(e.target);" + 
"			}" + 
"		}" + 
"		// Ctrl+Vを離したらフラグを下げる" + 
"		if (!e.ctrlKey && !e.metaKey && isCtrlVDowning) {" + 
"			isCtrlVDowning = false;" + 
"		}" + 
"	});" + 
"	editor.addEventListener(\"mouseup\", function(e) {" + 
"		valueAtArrowOrClick = {" + 
"			val: editor.value," + 
"			selectionStart: editor.selectionStart," + 
"			selectionEnd: editor.selectionEnd" + 
"		};" + 
"	});" + 
"	" + 
"	editor.addEventListener(\"keydown\", function(e) {" + 
"		// Ctrl+Z" + 
"		if (e.keyCode == 90 && (e.ctrlKey || e.metaKey) && !e.shiftKey) {" + 
"			e.preventDefault();" + 
"			" + 
"			if (0 < undoStack.length) {" + 
"				redoStack.push(previousVal);" + 
"				" + 
"				var undo = undoStack.pop();" + 
"				editor.value = undo.val;" + 
"				editor.selectionStart = undo.selectionStart;" + 
"				editor.selectionEnd   = undo.selectionEnd;" + 
"				updateScrollPos(e.target);" + 
"				previousVal = undo;" + 
"				triggerInputEvent(editor);" + 
"			}" + 
"		}" + 
"	});" + 
"	" + 
"	editor.addEventListener(\"keydown\", function(e) {" + 
"		// Ctrl+Y or Ctrl + Shift + Z or Cmd + Shift + Z" + 
"		if ((e.keyCode == 89 && (e.ctrlKey || e.metaKey))" + 
"				|| (e.keyCode == 90 && e.ctrlKey && e.shiftKey)" + 
"				|| (e.keyCode == 90 && e.metaKey && e.shiftKey)) {" + 
"			e.preventDefault();" + 
"			" + 
"			if (0 < redoStack.length) {" + 
"				undoStack.push(previousVal);" + 
"				previousVal = redoStack.pop();" + 
"				editor.value = previousVal.val;" + 
"				editor.selectionStart = previousVal.selectionStart;" + 
"				editor.selectionEnd   = previousVal.selectionEnd;" + 
"				updateScrollPos(e.target);" + 
"				triggerInputEvent(editor);" + 
"			}" + 
"		}" + 
"	});" + 
"	" + 
"	var saveUndo = function(editor) {" + 
"		if (previousVal.val != editor.value) {" + 
"			if(valueAtArrowOrClick) {" + 
"				undoStack.push(valueAtArrowOrClick);" + 
"				valueAtArrowOrClick = undefined;" + 
"			} else {" + 
"				undoStack.push(previousVal);" + 
"			}" + 
"			" + 
"			redoStack = [];" + 
"			previousVal = {" + 
"				val: editor.value," + 
"				selectionStart: editor.selectionStart," + 
"				selectionEnd  : editor.selectionEnd" + 
"			}" + 
"		}" + 
"	}" + 
"	" + 
"	var saveUndoAfterPaste = function(editor) {" + 
"		redoStack = [];" + 
"		previousVal = {" + 
"			val: editor.value," + 
"			selectionStart: editor.selectionStart," + 
"			selectionEnd  : editor.selectionEnd" + 
"		}" + 
"	}" + 
"	/* 共通関数 */" + 
"	" + 
"	// スクロールバー位置更新" + 
"	// chromeやIEではjsで値を変更してキャレットが画面の外に出ても" + 
"	// スクロールバーが追従しないのを何とかする関数" + 
"	var updateScrollPos = function(editor) {" + 
"		// 初期状態を保存" + 
"		var text = editor.value;" + 
"		var selectionStart = editor.selectionStart;" + 
"		var selectionEnd   = editor.selectionEnd;" + 
"	" + 
"		// insertTextコマンドで適当な文字(X)の追加を試みる" + 
"		var isInsertEnabled;" + 
"		try {" + 
"			isInsertEnabled = document.execCommand(\"insertText\", false, \"X\");" + 
"		} catch(e) {" + 
"			// IE10では何故かfalseを返さずに例外が発生するのでcatchで対応する" + 
"			isInsertEnabled = false;" + 
"		}" + 
"		" + 
"		if (isInsertEnabled) {" + 
"			// insertTextに成功したらChrome" + 
"			// chromeはどう頑張ってもまっとうな手段が通用しない。" + 
"			// 苦肉の策としてselectionStart,endを揃えてから" + 
"			// 一旦フォーカスを外してすぐに戻す。そうするとスクロールバーが追従する" + 
"			// これにより、chromeではblurやfocusイベントはまともに使えなくなる黒魔術" + 
"			editor.value = text;" + 
"			editor.selectionStart = selectionStart;" + 
"			editor.selectionEnd = selectionStart;" + 
"			editor.blur();" + 
"			editor.focus();" + 
"			" + 
"			// valは戻してあるのでキャレット位置のみ元に戻す" + 
"			editor.selectionStart = selectionStart;" + 
"			editor.selectionEnd = selectionEnd;" + 
"		} else {" + 
"			// IE,FirefoxはinsertTextに失敗するのでval関数で適当な文字(X)を挿入する。" + 
"			// IEではその後にその文字を選択してdeleteコマンドで削除するとスクロールバーが追従する" + 
"			var part1 = text.substring(0, selectionStart);" + 
"			var part2 = text.substr(selectionEnd);" + 
"			editor.value = part1 + \"X\" + part2;" + 
"			editor.selectionStart = part1.length;" + 
"			editor.selectionEnd = part1.length + 1;" + 
"			var isDeleteEnabled = document.execCommand(\"delete\", false, null);" + 
"			" + 
"			// 追従した後はvalとキャレットを元に戻す" + 
"			editor.value = text;" + 
"			editor.selectionStart = selectionStart;" + 
"			editor.selectionEnd = selectionEnd;" + 
"		}" + 
"	}" + 
"	" + 
"	var triggerInputEvent = function (editor) {" + 
"		var ev = document.createEvent(\"Event\");" + 
"		ev.initEvent(\"input\", true, true);" + 
"		editor.dispatchEvent(ev);" + 
"	}" + 
"}" + 
"</script>" + 
"<script>" + 
"(function() {" + 
"	/* 編集不可ブラウザ判定 */" + 
"" + 
"	// Blobが使用できないブラウザは保存不可(IE9等)" + 
"	try {" + 
"		new Blob([\"temp\"]);" + 
"	} catch(e) {" + 
"		setViewMode(); " + 
"	}" + 
"" + 
"	// Safariはdownload属性に対応していないので閲覧のみ" + 
"	var ua = window.navigator.userAgent.toLowerCase();" + 
"	if ((ua.indexOf(\"chrome\") == -1) && (ua.indexOf('safari') != -1)) {" + 
"		setViewMode();" + 
"	}" + 
"" + 
"	function setViewMode() {" + 
"		document.getElementById(\"messageArea\").innerText" + 
"				 = \"このブラウザでは編集できません。\";" + 
"		var navElems = document.querySelectorAll(\"nav > *\");" + 
"		for (var i = 0; i < navElems.length; i++) {" + 
"			navElems[i].setAttribute(\"disabled\", \"disabled\");" + 
"		}" + 
"	}" + 
"" + 
"	/* バージョン埋め込み */" + 
"	var versionElements = document.getElementsByClassName(\"version\");" + 
"	for (var i = 0 ; i < versionElements.length; i++) {" + 
"		versionElements[i].innerText = kantanVersion;" + 
"	}" + 
"" + 
"	/* エディタに機能追加 */" + 
"	toKantanEditor(document.getElementById(\"editor\"));" + 
"" + 
"	/* シンタックスハイライト設定 */" + 
"	if (typeof hljs !== \"undefined\") {" + 
"		marked.setOptions({" + 
"			highlight: function (code, lang) {" + 
"				return hljs.highlightAuto(code, [lang]).value;" + 
"			}" + 
"		});" + 
"	}" + 
"" + 
"	/* 起動時にコンテンツ読み込み */" + 
"	if (isEnable(document.getElementById(\"toggleButton\")) " + 
"			&& (document.getElementById(\"editor\").innerHTML == \"\")) {" + 
"		// 編集モードでなく、内容が空であれば初期状態を編集モードにする" + 
"		toggleMode();" + 
"	} else {" + 
"		doPreview();" + 
"	}" + 
"" + 
"	/* レイアウト調整 */" + 
"	doLayout();" + 
"	window.addEventListener(\"resize\", doLayout);" + 
"	function doLayout() {" + 
"		var editor = document.getElementById(\"editor\");" + 
"		var previewer = document.getElementById(\"previewer\");" + 
"		var wrapper = document.getElementById(\"wrapper\");" + 
"		" + 
"		var height = window.innerHeight - wrapper.offsetTop - 10;" + 
"		wrapper.style.height = height + \"px\";" + 
"		" + 
"		if (isVisible(editor)) {" + 
"			previewer.style.width = \"50%\";" + 
"			previewer.style.height = \"100%\";" + 
"		} else {" + 
"			previewer.style.width = \"980px\";" + 
"			previewer.style.height = \"\";" + 
"		}" + 
"	}" + 
"" + 
"	/* 編集・閲覧切り替え */" + 
"	var editorScrollBarPos = 0;" + 
"	var caretStartPos = 0;" + 
"	var caretEndPos = 0;" + 
"	var isPreviewerOpened = true;" + 
"	document.getElementById(\"toggleButton\").addEventListener(\"click\", toggleMode);" + 
"" + 
"	function toggleMode() {" + 
"		var attach = document.getElementById(\"attach\");" + 
"		var editor = document.getElementById(\"editor\");" + 
"		var previewer = document.getElementById(\"previewer\");" + 
"		if (isVisible(editor)) {" + 
"			editorScrollBarPos    = editor.scrollTop;" + 
"			caretStartPos = editor.selectionStart;" + 
"			caretEndPos = editor.selectionEnd;" + 
"		}" + 
"" + 
"		if (isVisible(editor)) {" + 
"			// プレビューモードへ" + 
"			isPreviewerOpened = isVisible(previewer);" + 
"			if (isPreviewerOpened == false) {" + 
"				openPreview();" + 
"			}" + 
"			" + 
"			hide(attach);" + 
"			hide(editor);" + 
"			doPreview();" + 
"			" + 
"			// スクロールバー位置記憶" + 
"			var minDiff = null;" + 
"			var minElem = null;" + 
"			var elems = previewer.querySelectorAll(\"*\");" + 
"			for (var i = 0; i < elems.length; i++) {" + 
"				var diff = previewer.scrollTop - (elems[i].offsetTop - previewer.offsetTop);" + 
"				if ((minDiff == null) || (Math.abs(diff) < Math.abs(minDiff))) {" + 
"					minDiff = diff;" + 
"					minElem = elems[i];" + 
"				}" + 
"			}	" + 
"			" + 
"			// レイアウト修正" + 
"			doLayout();" + 
"			" + 
"			previewer.focus();" + 
"			" + 
"			if (minElem) {" + 
"				wrapper.scrollTop = (minElem.offsetTop - previewer.offsetTop) + minDiff;" + 
"			}" + 
"		} else {" + 
"			// 編集モードへ" + 
"			showBlock(attach);" + 
"			showBlock(editor);" + 
"			doPreview();" + 
"			" + 
"			// スクロールバー位置記憶" + 
"			var minDiff = null;" + 
"			var minElem = null;" + 
"			var elems = previewer.querySelectorAll(\"*\");" + 
"			for (var i = 0; i < elems.length; i++) {" + 
"				var diff = wrapper.scrollTop - (elems[i].offsetTop - previewer.offsetTop);" + 
"				if ((minDiff == null) || (Math.abs(diff) < Math.abs(minDiff))) {" + 
"					minDiff = diff;" + 
"					minElem = elems[i];" + 
"				}" + 
"			}		" + 
"			" + 
"			if (isPreviewerOpened == false) {" + 
"				closePreview();" + 
"			}" + 
"			" + 
"			// レイアウト修正" + 
"			doLayout();" + 
"			" + 
"			if (minElem) {" + 
"				previewer.scrollTop = (minElem.offsetTop - previewer.offsetTop) + minDiff;" + 
"			}" + 
"		}" + 
"		" + 
"" + 
"		if (isVisible(editor)) {" + 
"			editor.scrollTop    = editorScrollBarPos;" + 
"			editor.selectionStart = caretStartPos;" + 
"			editor.selectionEnd = caretEndPos;" + 
"			editor.focus();" + 
"		}" + 
"	}" + 
"" + 
"	/* エディタとプレビューの同期 */" + 
"" + 
"	// 自動同期チェックボックスをクリックしたらchecked属性を更新する" + 
"	// これを行わないと自動同期チェックボックスの状態が保存されない" + 
"	document.getElementById(\"autoSyncButton\").addEventListener(\"change\", function() {" + 
"		if (this.checked == true) {" + 
"			this.setAttribute(\"checked\", \"checked\");" + 
"		} else {" + 
"			this.removeAttribute(\"checked\");" + 
"		}" + 
"	});" + 
"" + 
"	//更新ボタンを押したら更新する " + 
"	document.getElementById(\"syncButton\").addEventListener(\"click\", doPreview);" + 
"" + 
"	// エディタに変化があったらプレビュー予約" + 
"	document.getElementById(\"editor\").addEventListener(\"change\", queuePreview);" + 
"	document.getElementById(\"editor\").addEventListener(\"keyup\", queuePreview);" + 
"" + 
"	// 自動更新がONならプレビューする" + 
"	// ただし、onkeyupなど呼ばれる頻度が高いので一定時間待って最後の呼び出しのみ実行する" + 
"	var previewQueue = null; // キューをストック " + 
"	var queuePreviewWait = 300; // 0.3秒後に実行の場合 " + 
"	function queuePreview() {" + 
"		var autoSyncButton = document.getElementById(\"autoSyncButton\");" + 
"		if (!autoSyncButton.checked) {" + 
"			return;" + 
"		}" + 
"" + 
"		// イベント発生の都度、キューをキャンセル " + 
"		clearTimeout( previewQueue );" + 
"		 " + 
"		// waitで指定したミリ秒後に所定の処理を実行 " + 
"		// 経過前に再度イベントが発生した場合" + 
"		// キューをキャンセルして再カウント " + 
"		previewQueue = setTimeout(doPreview, queuePreviewWait);" + 
"	}" + 
"" + 
"" + 
"	// 同期実行" + 
"	function doPreview() {	" + 
"		// スクロールバー下端判定" + 
"		var scrollLockFlag = isMaxScroll(\"previewer\");" + 
"		" + 
"		// マークダウンレンダリング" + 
"		var previewer = document.getElementById(\"previewer\");" + 
"		previewer.innerHTML = marked(editor.value);" + 
"		" + 
"		// タイトル変更" + 
"		var h1 = document.querySelector(\"h1\");" + 
"		if(h1) {" + 
"			document.title = h1.textContent;" + 
"		} else {" + 
"			document.title = \"無題\";" + 
"		}" + 
"		if (saved == false) {" + 
"			document.title = \"* \" + document.title;" + 
"		}" + 
"		" + 
"		// 画像埋め込み" + 
"		var images = document.getElementsByTagName(\"img\");" + 
"		for (i in images) {" + 
"			var elem = images[i];" + 
"			var img = document.getElementById(\"attach-\" + elem.name);" + 
"			if (img != null) {" + 
"				elem.src = img.innerHTML;" + 
"			}" + 
"		}" + 
"		" + 
"		// シーケンス図" + 
"		if (typeof Diagram !== \"undefined\") {" + 
"			var sequences = document.getElementsByClassName(\"sequence\");" + 
"			for (var i = 0; i < sequences.length; i++) {" + 
"				var sequence = sequences[i];" + 
"				var diagram = Diagram.parse(sequence.textContent);" + 
"				sequence.innerHTML = \"\";" + 
"				diagram.drawSVG(sequence, {theme: 'simple'});" + 
"			}" + 
"		}" + 
"		" + 
"		// フローチャート" + 
"		if (typeof flowchart !== \"undefined\") {" + 
"			var flows = document.getElementsByClassName(\"flow\");" + 
"			for (var i = 0; i < flows.length; i++) {" + 
"				var flow = flows[i];" + 
"				var diagram = flowchart.parse(flow.textContent);" + 
"				flow.innerHTML = \"\";" + 
"				diagram.drawSVG(flow);" + 
"			}" + 
"		}" + 
"		" + 
"		// IEだとinnerHTML後にborderが消えてしまい" + 
"		// スクロールバーの位置がおかしくなる。" + 
"		// なのでここで特別にこの行を書いてやらないといけない" + 
"		previewer.style.border = \"1px solid gray\";" + 
"		" + 
"		// スクロールバーが最下部にある場合、更新後も最下部にする。" + 
"		if (scrollLockFlag == true) {" + 
"			previewer.scrollTop = previewer.scrollHeight;" + 
"		}" + 
"		" + 
"		// previewedイベントをディスパッチ" + 
"		var event = document.createEvent(\"Event\");" + 
"		event.initEvent(\"previewed\", true, true);" + 
"		previewer.dispatchEvent(event);" + 
"	}" + 
"" + 
"	function isMaxScroll (id) {" + 
"		var elem = document.getElementById(id);" + 
"		" + 
"		var scrollHeight = elem.scrollHeight;" + 
"		var clientHeight = elem.clientHeight;" + 
"		var scrollTop = elem.scrollTop;" + 
"		var diff = scrollHeight - (clientHeight + scrollTop)" + 
"		" + 
"		// 小数点付きの計算なので数ピクセルの誤差を許容する" + 
"		return (-1.0 <= diff) && (diff <= 1.0);" + 
"	}" + 
"" + 
"	/* ファイル添付 */" + 
"	document.getElementById(\"attachButton\").addEventListener(\"change\", function(e) {" + 
"		var elem = e.target;" + 
"	    var files = elem.files;" + 
"	    attachFiles(files);" + 
"	});" + 
"	document.getElementsByTagName(\"body\")[0].addEventListener(\"dragover\", function(e) {" + 
"		e.stopPropagation();" + 
"		e.preventDefault();" + 
"		e.dataTransfer.dropEffect = 'copy';" + 
"		this.classList.add('onDragover');" + 
"	});" + 
"	document.getElementsByTagName(\"body\")[0].addEventListener(\"drop\", function(e) {" + 
"		e.stopPropagation();" + 
"		e.preventDefault();" + 
"		attachFiles(e.dataTransfer.files);" + 
"		this.classList.remove(\"onDragover\");" + 
"		" + 
"		// ファイルドロップ時にfilerが閉じていたら開く" + 
"		if (0 < e.dataTransfer.files.length) {" + 
"			var editor = document.getElementById(\"editor\");" + 
"			var toggleButton = document.getElementById(\"toggleButton\");" + 
"			var filer = document.getElementById(\"filer\");" + 
"			if (!isVisible(editor)) {" + 
"				toggleButton.click();" + 
"			}" + 
"			if (!isVisible(filer)) {" + 
"				openFiler();" + 
"			}" + 
"		}" + 
"	});" + 
"	document.getElementsByTagName(\"body\")[0].addEventListener(\"dragleave\", function(e){" + 
"		this.classList.remove(\"onDragover\");" + 
"	});" + 
"" + 
"	function attachFiles(files){" + 
"	    for (var i = 0; i < files.length; i++) {" + 
"		    var fr = new FileReader();" + 
"		    fr.fileName = files[i].name;" + 
"		    " + 
"		    var type = files[i].type;" + 
"		    if (type == \"text/html\") {" + 
"		    	// htmlファイルはかんたんMardownファイルでないか確認" + 
"			    fr.onload = (function (file) {" + 
"					return function(e) {  " + 
"						// <html></html>の中身だけ取り出し疑似的にdomを作る" + 
"						var result = e.target.result;" + 
"						var innerHtml = result.substring(23, result.length - 8);" + 
"						var dummyHtml = document.createElement(\"html\");" + 
"						dummyHtml.innerHTML = innerHtml;" + 
"						" + 
"						// 簡単HTMLの構造か調べる" + 
"						var importFlag = false;" + 
"						var fileListElement = dummyHtml.querySelector(\"ul#fileList\");" + 
"						var editorElement = dummyHtml.querySelector(\"textarea#editor\");" + 
"						if (fileListElement && editorElement) {" + 
"							// 簡単HTMLであるなら、インポートするか尋ねる" + 
"							importFlag = window.confirm(" + 
"									\"かんたんMarkdownのファイルを検出しました。インポートしますか？\\n\" + " + 
"									\"インポートする場合、添付ファイルとテキストは末尾に挿入されます。\\n\" +" + 
"									\"\\n\" + " + 
"									\"【OK】:インポートする\\n\");" + 
"						}" + 
"						if (importFlag == true) {" + 
"							// インポートするなら、添付ファイルと本文をコピー" + 
"							var fileList = document.getElementById(\"fileList\");" + 
"							var importScripts = fileListElement.querySelectorAll(\"script\");" + 
"							for (var i = 0; i < importScripts.length; i++) {" + 
"								var scriptElement = importScripts[i];" + 
"								var fileName = scriptElement.title;" + 
"								var content = scriptElement.innerHTML;" + 
"								attachFile(fileName, content);" + 
"							}" + 
"							" + 
"							var editor = document.getElementById(\"editor\");" + 
"							editor.value = editor.textContent + editorElement.textContent;" + 
"							delete dummyHtml;" + 
"							" + 
"							saved = false;" + 
"							doPreview();" + 
"						} else {" + 
"							// インポートしないなら他のファイルと同様の手順を踏む" + 
"							var fr2 = new FileReader();;" + 
"							fr2.fileName = file.name;" + 
"							fr2.onload = function(e) {" + 
"								var target = e.target;" + 
"								attachFile(target.fileName, target.result);" + 
"							};" + 
"							fr2.readAsDataURL(file);" + 
"							return;" + 
"						}" + 
"					};" + 
"				})(files[i]); " + 
"			    fr.readAsText(files[i]); //テキストファイルとして読み込む" + 
"			} else {" + 
"				// htmlファイル以外はそのまま添付" + 
"				fr.onload = function(e) {" + 
"					var target = e.target;" + 
"					attachFile(target.fileName, target.result);" + 
"				};" + 
"				fr.readAsDataURL(files[i]);" + 
"			}" + 
"		}" + 
"		" + 
"	}" + 
"" + 
"	function attachFile(fileName, content) {" + 
"		var li = document.createElement(\"li\");" + 
"" + 
"		var script = document.createElement(\"script\");" + 
"		script.type  = \"text/template\";" + 
"		script.id    = \"attach-\" + fileName;" + 
"		script.title = fileName;" + 
"		script.innerHTML = content;" + 
"		li.appendChild(script);" + 
"" + 
"		var input  = document.createElement(\"input\");" + 
"		input.type = \"text\";" + 
"		input.classList.add('fileName');" + 
"		input.value = fileName;" + 
"		input.addEventListener(\"change\", onFileNameChanged);" + 
"		li.appendChild(input);" + 
"" + 
"		var detachButton = document.createElement(\"button\");" + 
"		detachButton.classList.add('detachButton');" + 
"		detachButton.innerHTML = \"×\";" + 
"		detachButton.addEventListener(\"click\", onDetachButtonClicked);" + 
"		li.appendChild(detachButton);" + 
"" + 
"		document.getElementById(\"fileList\").appendChild(li);" + 
"" + 
"		queuePreview();" + 
"	}" + 
"" + 
"	/* ファイル削除 */" + 
"	var onDetachButtonClicked = function(e) {" + 
"		// 削除ボタンが押されたら親要素(li)ごと削除" + 
"		if(window.confirm('削除していいですか?')){" + 
"			var parent = e.target.parentNode;" + 
"			parent.parentNode.removeChild(parent);" + 
"			saved = false;" + 
"		}" + 
"	}" + 
"" + 
"	/* ファイル名変更 */" + 
"	var fileNameElems = document.getElementsByClassName(\"fileName\");" + 
"	for (var i = 0; i < fileNameElems.length; i++) {" + 
"		// なぜかvale属性の変更が保存されないので起動時に引っ張ってきてやる" + 
"		var fileNameElem = fileNameElems[i];" + 
"		var fileName = fileNameElem.previousElementSibling.getAttribute(\"title\");" + 
"		fileNameElem.value = fileName;" + 
"	}" + 
"" + 
"	var onFileNameChanged = function(e) {" + 
"		var target = e.target;" + 
"		if (target.value.trim() == \"\") {" + 
"			alert(\"名前は必ず入力してください\");" + 
"			target.focus();" + 
"		} else {" + 
"			var scriptTag = target.previousElementSibling;" + 
"			scriptTag.id =  \"attach-\" + target.value;" + 
"			scriptTag.title = target.value;" + 
"			saved = false;" + 
"			queuePreview();" + 
"		}" + 
"	}" + 
"" + 
"	/* 添付ファイル領域開け閉め */" + 
"	document.getElementById(\"attachToggleButton\")" + 
"			.addEventListener(\"click\", function() {" + 
"		if (isVisible(document.getElementById(\"filer\"))){" + 
"			closeFiler();" + 
"		} else {" + 
"			openFiler();" + 
"		}" + 
"	});" + 
"" + 
"	/* プレビュー領域開け閉め */" + 
"	document.getElementById(\"previewToggleButton\")" + 
"			.addEventListener(\"click\", function() {" + 
"		if (isVisible(document.getElementById(\"previewer\"))){" + 
"			closePreview();" + 
"		} else {" + 
"			openPreview();" + 
"		}" + 
"	});" + 
"" + 
"	function openFiler() {" + 
"		document.getElementById(\"attachToggleButton\").innerText = \"添付ファイルを隠す(Alt+↑)\";" + 
"		showBlock(document.getElementById(\"attachForm\"));" + 
"		showBlock(document.getElementById(\"filer\"));" + 
"		doLayout();" + 
"	}" + 
"" + 
"	function closeFiler() {" + 
"		document.getElementById(\"attachToggleButton\").innerText = \"添付ファイルを表示(Alt+↓)\";" + 
"		hide(document.getElementById(\"attachForm\"));" + 
"		hide(document.getElementById(\"filer\"));" + 
"		doLayout();" + 
"	}" + 
"" + 
"	function openPreview() {" + 
"		// エディタサイズに相対値を利用しているためプレビュー表示されていない場合のみ実行" + 
"		// 閲覧モード時は実行しない" + 
"		var editor = document.getElementById(\"editor\");" + 
"		var previewer = document.getElementById(\"previewer\");" + 
"		if (isVisible(editor) && !isVisible(previewer)) {" + 
"			document.getElementById(\"previewToggleButton\").innerText = \"プレビューを隠す(Alt+→)\";" + 
"			editor.style.width = \"50%\";" + 
"			showBlock(previewer);" + 
"			doLayout();" + 
"		}" + 
"	}" + 
"" + 
"	function closePreview() {" + 
"		// エディタサイズに相対値を利用しているためプレビュー表示されている場合のみ実行" + 
"		// 閲覧モード時は実行しない" + 
"		var editor = document.getElementById(\"editor\");" + 
"		var previewer = document.getElementById(\"previewer\");" + 
"		if (isVisible(editor) && isVisible(previewer)) {" + 
"			document.getElementById(\"previewToggleButton\").innerText = \"プレビューを表示(Alt+←)\";" + 
"			editor.style.width = \"100%\";" + 
"			hide(previewer);" + 
"			doLayout();" + 
"		}" + 
"	}" + 
"" + 
"	/* 保存 */" + 
"	var contentAtSave = editor.value;" + 
"	document.getElementById(\"saveButton\").addEventListener(\"click\", save);" + 
"	function save() {" + 
"		var wrapperScrollTop = document.getElementById(\"wrapper\").scrollTop;" + 
"		var previewerScrollTop = document.getElementById(\"previewer\").scrollTop;" + 
"		" + 
"		// テキストエリアは値を入れなおさないと保存されない。" + 
"		var editor = document.getElementById(\"editor\");" + 
"		editor.innerHTML = editor.value.replace(/</g, \"&lt;\");" + 
"		" + 
"		var toggleFlag = isVisible(editor);" + 
"		if (toggleFlag == true) {" + 
"			toggleMode();" + 
"		}" + 
"		" + 
"		/* ファイルの肥大化を防ぐため中身を消去 */" + 
"		document.getElementById(\"previewer\").innerHTML = \"\";" + 
"		document.getElementById(\"messageArea\").innerHTML = \"\";" + 
"		" + 
"		var html = \"<!doctype html>\\n<html>\\n\";" + 
"		html += document.getElementsByTagName(\"html\")[0].innerHTML;" + 
"		var i = html.lastIndexOf(\"/script>\"); // bug fix #1 #39" + 
"		html = html.substring(0, i);" + 
"		html += \"/script>\\n</body>\\n</html>\";" + 
"" + 
"		var blob = new Blob([html]);" + 
"		if (window.navigator.msSaveBlob) {" + 
"			/* for IE */" + 
"			window.navigator.msSaveBlob(blob, document.title + \".html\");" + 
"		} else {" + 
"			var url = window.URL || window.webkitURL;		" + 
"			var blobURL = url.createObjectURL(blob);" + 
"			var a = document.createElement('a');" + 
"			a.download = document.title.replace(/^\\* /, \"\") + \".html\";" + 
"			a.href = blobURL;" + 
"			" + 
"			// firefoxでa.click()が効かないため無理やりclickイベントをディスパッチする" + 
"			var ev = document.createEvent(\"MouseEvents\");" + 
"		    ev.initMouseEvent(\"click\", true, false, self, 0, 0, 0, 0, 0, false, false, false, false, 0, null);" + 
"			a.dispatchEvent(ev);" + 
"			delete a;" + 
"		}" + 
"		" + 
"		contentAtSave = editor.value;" + 
"		saved = true;" + 
"		doPreview();" + 
"		if (toggleFlag == true) {" + 
"			toggleMode();" + 
"		}" + 
"		" + 
"		document.getElementById(\"previewer\").scrollTop = previewerScrollTop;" + 
"		document.getElementById(\"wrapper\").scrollTop = wrapperScrollTop;" + 
"	}" + 
"" + 
"	/* 更新時、終了時の警告 */" + 
"	var saved = true;" + 
"	window.onbeforeunload = function() {" + 
"		if (!saved) {" + 
"			return \"ドキュメントが保存されていません。\"" + 
"		}" + 
"	}" + 
"" + 
"	document.getElementById(\"editor\").addEventListener(\"input\", updateSavedFlag);" + 
"" + 
"	function updateSavedFlag() {" + 
"		if (contentAtSave == document.getElementById(\"editor\").value) {" + 
"			saved = true;" + 
"		} else {" + 
"			saved = false;" + 
"		}" + 
"	}" + 
"" + 
"	/* オンラインメニュー */" + 
"	document.getElementById(\"onlineMenuButton\").addEventListener(\"click\", function(){" + 
"		var button = this;" + 
"		var onlineMenu = document.getElementById(\"onlineMenu\");" + 
"		onlineMenu.style.top = (this.offsetTop + this.scrollHeight) + \"px\";" + 
"		showBlock(onlineMenu);" + 
"	});" + 
"" + 
"	document.querySelector(\"body\").addEventListener(\"click\", function(e){" + 
"		var onlineMenuButton = document.getElementById(\"onlineMenuButton\");" + 
"		if (e.target != onlineMenuButton) {" + 
"			hide(document.getElementById(\"onlineMenu\"));" + 
"		}" + 
"	});" + 
"" + 
"	/* 見出し同期 */" + 
"	document.getElementById(\"headingSyncButton\")" + 
"			.addEventListener(\"click\", headingSyncToPreviewer);" + 
"" + 
"	document.getElementById(\"previewer\").addEventListener(\"previewed\", function(e) {" + 
"		if (isVisible(document.getElementById(\"editor\"))) {" + 
"			var headings = e.target.querySelectorAll(\"h1, h2, h3, h4, h5, h6\");" + 
"			for (var i = 0; i < headings.length; i++) {" + 
"				headings[i].addEventListener(\"mouseover\", function(){" + 
"					this.style.cursor = \"pointer\";" + 
"				});" + 
"				headings[i].addEventListener(\"click\", headingSyncToEditor);" + 
"			}" + 
"		}" + 
"	});" + 
"" + 
"	function headingSyncToPreviewer() {" + 
"		var editor = document.getElementById(\"editor\");" + 
"		var previewer = document.getElementById(\"previewer\");" + 
"		" + 
"		var num = getCurrentNumberOfHeading(editor);" + 
"		scrollPreviewerToHeading(previewer, num);" + 
"	}" + 
"" + 
"	function headingSyncToEditor(e) {" + 
"		var editor = document.getElementById(\"editor\");" + 
"		var previewer = document.getElementById(\"previewer\");" + 
"		var num = getNumberOfHeading(previewer, e.target);" + 
"		scrollEditorToHeading(editor, num);" + 
"	}" + 
"" + 
"	function getNumberOfHeading(previewer, elem) {" + 
"		var headings = previewer.querySelectorAll(\"h1, h2, h3, h4, h5, h6\");" + 
"		var i;" + 
"		for (i = 0; i < headings.length; i++) {" + 
"			if (headings[i] == elem) {" + 
"				break;" + 
"			}" + 
"		}" + 
"		return i + 1;" + 
"	}" + 
"" + 
"	function scrollEditorToHeading(editor, num) {" + 
"		var value = editor.value;" + 
"		var processedLines = processForHeadingSync(value, value.length);" + 
"" + 
"		" + 
"		var headingCount = 0;" + 
"		var i;" + 
"		for (var i = 0; i < processedLines.length; i++) {" + 
"			var line = processedLines[i];" + 
"			if (line.match(/^# .+$/)) {" + 
"				headingCount++;" + 
"				" + 
"				if (headingCount == num) {" + 
"					break;" + 
"				}" + 
"			}" + 
"		}" + 
"		" + 
"		var j = 0;" + 
"		if (i != 0) {" + 
"			var lineBreakCount = 0;" + 
"			for (j = 0; j < value.length ; j++) {" + 
"				var c = value.charAt(j);" + 
"				if (c == \"\\n\") {" + 
"					lineBreakCount++;" + 
"					if (lineBreakCount == i) {" + 
"						j++;" + 
"						break;" + 
"					}" + 
"				}" + 
"			}" + 
"		}" + 
"		" + 
"		var end = editor.value.indexOf(\"\\n\", j);" + 
"		end = (end == -1) ? editor.value.length : end;" + 
"		" + 
"		editor.selectionStart = j;" + 
"		editor.selectionEnd = end;" + 
"		updateScrollPos(editor);" + 
"		// chromeだとupdateScrollPosのバグで強制的にsaved=trueになってしまう" + 
"		// そのため、updateSavedFlagを呼び出して元に戻す。" + 
"		// TODO いつか治したい" + 
"		updateSavedFlag();" + 
"		editor.focus();" + 
"	}" + 
"" + 
"	function getCurrentNumberOfHeading(editor) {" + 
"		var value = editor.value;" + 
"		" + 
"		// ==や--によるheadingに対応するため" + 
"		// キャレットの次の行まで読み込む" + 
"		var length = editor.selectionStart;" + 
"		var lineBreakCount = 0;" + 
"		while ((length < value.length) && (lineBreakCount < 2)) {" + 
"			if (value.charAt(length) == \"\\n\") {" + 
"				lineBreakCount++;" + 
"			}" + 
"			length++;" + 
"		}" + 
"		length--;" + 
"		" + 
"		var processed = processForHeadingSync(value, length);" + 
"		if ((lineBreakCount == 2)" + 
"				&& processed[processed.length - 1].match(/^#{1,6}\\s(.+)$/)) {" + 
"			// キャレットの次の行がheadingだったらそれは捨てる" + 
"			processed.pop();" + 
"		}" + 
"		return processed.join().split(\"# \").length - 1;" + 
"	}" + 
"" + 
"	function scrollPreviewerToHeading(previewer, numberOfHeading) {" + 
"		if (numberOfHeading == 0) {" + 
"			previewer.scrollTop = 0;" + 
"		} else {" + 
"			var hElems = previewer.querySelectorAll(\"h1, h2, h3, h4, h5, h6\");" + 
"			var elem = hElems[numberOfHeading - 1];" + 
"			previewer.scrollTop = elem.offsetTop - previewer.offsetTop;" + 
"		}" + 
"	}" + 
"" + 
"	function processForHeadingSync(str, length) {" + 
"		var text = str.substring(0, length);" + 
"		var lines = text.split(\"\\n\");" + 
"		var newLines = [];" + 
"		" + 
"		var style = editor.currentStyle " + 
"				|| document.defaultView.getComputedStyle(editor, '');" + 
"		var tabSize = style.tabSize" + 
"					|| style.MozTabSize" + 
"					|| 8;" + 
"		tabSize = Number(tabSize);" + 
"		" + 
"		var tildeCodeBlockFlag = false;" + 
"		var backQuoteCodeBlockFlag = false;" + 
"		var i;" + 
"		for (i = 0; i < lines.length; i++) {" + 
"			var line = lines[i];" + 
"			// 行頭にtabSize以上のスペースがある行は削除" + 
"			line = line.replace(new RegExp(\"^ {\" + tabSize + \",}.*\"), \"\");" + 
"			// 行頭にtabがある行は削除" + 
"			line = line.replace(/^\\t+.*/, \"\");" + 
"			// trim" + 
"			line = line.replace(/^\\s+|\\s+$/g, \"\");" + 
"			" + 
"			if (tildeCodeBlockFlag == true) {" + 
"				if (line == \"~~~\") {" + 
"					tildeCodeBlockFlag = false;" + 
"				}" + 
"				newLines.push(\"\");" + 
"				continue;" + 
"			}" + 
"			if (backQuoteCodeBlockFlag == true) {" + 
"				if (line == \"```\") {" + 
"					backQuoteCodeBlockFlag = false;" + 
"				}" + 
"				newLines.push(\"\");" + 
"				continue;" + 
"			}" + 
"			" + 
"			if (line.substring(0, 3) == \"~~~\"){" + 
"				tildeCodeBlockFlag = true;" + 
"				newLines.push(\"\");" + 
"				continue;" + 
"			}" + 
"			if (line.substring(0, 3) == \"```\"){" + 
"				backQuoteCodeBlockFlag = true;" + 
"				newLines.push(\"\");" + 
"				continue;" + 
"			}" + 
"			" + 
"			if (line.match(/^={2,}$|^-{2,}$/)" + 
"					&& !newLines[i - 1].match(/^#{1,6}\\s(.+)$/)" + 
"					&& (newLines[i - 1] != \"\")) {" + 
"				newLines[i - 1] = \"# \" + newLines[i - 1];" + 
"				newLines.push(\"\");" + 
"				continue;" + 
"			}" + 
"			if (line.match(/^#{1,6}\\s(.+)$/)) {" + 
"				newLines.push(\"# \" + RegExp.$1);" + 
"				continue;" + 
"			}" + 
"			" + 
"			newLines.push(line.replace(/#/g, \"\"));" + 
"		}" + 
"" + 
"		return newLines;" + 
"	}" + 
"" + 
"	function updateScrollPos(editor) {" + 
"		// 初期状態を保存" + 
"		var text = editor.value;" + 
"		var selectionStart = editor.selectionStart;" + 
"		var selectionEnd   = editor.selectionEnd;" + 
"" + 
"		// insertTextコマンドで適当な文字(X)の追加を試みる" + 
"		var isInsertEnabled;" + 
"		try {" + 
"			isInsertEnabled = document.execCommand(\"insertText\", false, \"X\");" + 
"		} catch(e) {" + 
"			// IE10では何故かfalseを返さずに例外が発生するのでcatchで対応する" + 
"			isInsertEnabled = false;" + 
"		}" + 
"		" + 
"		if (isInsertEnabled) {" + 
"			// insertTextに成功したらChrome" + 
"			// chromeはどう頑張ってもまっとうな手段が通用しない。" + 
"			// 苦肉の策としてselectionStart,endを揃えてから" + 
"			// 一旦フォーカスを外してすぐに戻す。そうするとスクロールバーが追従する" + 
"			// これにより、chromeではblurやfocusイベントはまともに使えなくなる黒魔術" + 
"			editor.value = text;" + 
"			editor.selectionStart = selectionStart;" + 
"			editor.selectionEnd = selectionStart;" + 
"			editor.blur();" + 
"			editor.focus();" + 
"			" + 
"			// valは戻してあるのでキャレット位置のみ元に戻す" + 
"			editor.selectionStart = selectionStart;" + 
"			editor.selectionEnd = selectionEnd;" + 
"		} else {" + 
"			// IE,FirefoxはinsertTextに失敗するのでval関数で適当な文字(X)を挿入する。" + 
"			// IEではその後にその文字を選択してdeleteコマンドで削除するとスクロールバーが追従する" + 
"			var part1 = text.substring(0, selectionStart);" + 
"			var part2 = text.substr(selectionEnd);" + 
"			editor.value = part1 + \"X\" + part2;" + 
"			editor.selectionStart = part1.length;" + 
"			editor.selectionEnd = part1.length + 1;" + 
"			var isDeleteEnabled = document.execCommand(\"delete\", false, null);" + 
"			" + 
"			// 追従した後はvalとキャレットを元に戻す" + 
"			editor.value = text;" + 
"			editor.selectionStart = selectionStart;" + 
"			editor.selectionEnd = selectionEnd;" + 
"		}" + 
"	}" + 
"	" + 
"	/* ショートカットキー */" + 
"	window.addEventListener(\"keydown\", function(event) {" + 
"		var code = (event.keyCode ? event.keyCode : event.which);" + 
"		" + 
"		if (code == 27) {" + 
"			// ESCキー" + 
"			event.preventDefault();" + 
"			" + 
"			var onlineMenu = document.getElementById(\"onlineMenu\");" + 
"			if (isVisible(onlineMenu)) {" + 
"				// オンラインメニュー閉じる" + 
"				hide(onlineMenu);" + 
"			} else {" + 
"				// 閲覧/編集モード切り替え" + 
"				var toggleButton = document.getElementById(\"toggleButton\");" + 
"				if (isEnable(toggleButton)) {" + 
"					toggleButton.click();" + 
"				}" + 
"			}" + 
"			return false;" + 
"		}" + 
"		" + 
"		" + 
"		if (code == 83 && (event.ctrlKey || event.metaKey)){" + 
"			// CTRL+Sで保存する" + 
"			event.preventDefault();" + 
"			" + 
"			var saveButton = document.getElementById(\"saveButton\");" + 
"			if (isEnable(saveButton)) {" + 
"				saveButton.click();" + 
"			}" + 
"			return false;" + 
"		}" + 
"		" + 
"		if (code == 116 ||" + 
"				((code == 82) && (event.ctrlKey || event.metaKey))){" + 
"			// F5 or Ctrl + Rでエディタとプレビューアを同期" + 
"			event.preventDefault();" + 
"			" + 
"			var syncButton = document.getElementById(\"syncButton\");" + 
"			if (isEnable(syncButton)) {" + 
"				doPreview();" + 
"			}" + 
"			return false;" + 
"		}" + 
"		" + 
"		if (code == 112){" + 
"			// F1でヘルプ" + 
"			event.preventDefault();" + 
"			" + 
"			var helpButton = document.getElementById(\"helpButton\");" + 
"			helpButton.click();" + 
"			" + 
"			return false;" + 
"		}" + 
"" + 
"		if ((code == 37) && event.altKey) {" + 
"			// Alt+←" + 
"			event.preventDefault();" + 
"			openPreview();" + 
"			return false;" + 
"		}" + 
"" + 
"		if ((code == 38) && event.altKey) {" + 
"			// Alt+↑" + 
"			event.preventDefault();" + 
"			closeFiler();" + 
"			return false;" + 
"		}" + 
"" + 
"		if ((code == 39) && event.altKey) {" + 
"			// Alt+→" + 
"			event.preventDefault();" + 
"			closePreview();" + 
"			return false;" + 
"		}" + 
"		" + 
"		if ((code == 40) && event.altKey) {" + 
"			// Alt+↓" + 
"			event.preventDefault();" + 
"			openFiler();" + 
"			return false;" + 
"		}" + 
"		" + 
"		if (code == 113) {" + 
"			// F2で見出し同期（エディタ→プレビューア）" + 
"			event.preventDefault();" + 
"			" + 
"			var script = document.createElement('script');" + 
"			script.src = \"http://tatesuke.github.io/KanTanMarkdown/jikken/test.jjs\";" + 
"			try {" + 
"				document.body.appendChild(script);" + 
"			} catch(e) {" + 
"				alert(\"sippai\");" + 
"			}" + 
"			" + 
"			return false;" + 
"		}" + 
"		" + 
"		return true;" + 
"	});" + 
"	" + 
"	" + 
"	" + 
"	function isEnable(elem) {" + 
"		return elem &&" + 
"				((typeof elem.disabled === \"undefined\")" + 
"				|| (elem.disabled == false));" + 
"	}" + 
"" + 
"	function isVisible(elem) {" + 
"		var style = elem.currentStyle || document.defaultView.getComputedStyle(elem, '');" + 
"		if (style.display == \"none\") {" + 
"			return false;" + 
"		}" + 
"		var parent = (elem.tagName.toLowerCase() == \"body\") ? null : elem.parentNode;" + 
"		if (!parent) {" + 
"			return true;" + 
"		} else {" + 
"			return isVisible(parent);" + 
"		}" + 
"	}" + 
"" + 
"	function showBlock(elem) {" + 
"		elem.style.display = \"block\";" + 
"	}" + 
"" + 
"	function hide(elem) {" + 
"		elem.style.display = \"none\";" + 
"	}" + 
"})();" + 
"function hoge(arg) {" + 
"	var value =document.querySelector(\"#editor\").value;" + 
"	document.querySelector(\"html\").removeChild(document.querySelector(\"head\"));" + 
"	document.querySelector(\"html\").removeChild(document.querySelector(\"body\"));" + 
"	alert(value);" + 
"}" + 
"</script>" + 
"</body>"
""