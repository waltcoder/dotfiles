{
	"editor.fontFamily": "operator Mono, Menlo, Monaco, 'Courier New', monospace",
	"editor.fontSize": 25,
	"editor.quickSuggestionsDelay": 30,
	"editor.suggestFontSize": 20,
	"editor.suggestLineHeight": 30,
	"editor.letterSpacing": 0.5,
	"workbench.editor.tabSizing": "shrink",
	"html.format.enable": true,
	"html.format.preserveNewLines": true,
	"files.trimTrailingWhitespace": true,
	"editor.tabSize": 2,
	"editor.cursorWidth": 5,
	// this isn't really underline but we hack it to be a thicker cursor
	"editor.cursorStyle": "line",
	"editor.wordWrap": "on",
	"editor.multiCursorModifier": "ctrlCmd",
	"editor.fontWeight": "400",
	"editor.cursorBlinking": "solid",
	"editor.colorDecorators": false,
	"editor.minimap.enabled": false,
	"workbench.activityBar.visible": false,
	"editor.rulers": [80, 100],
	"editor.minimap.showSlider": "always",
	"workbench.startupEditor": "newUntitledFile",
	"extensions.ignoreRecommendations": false,
	"files.exclude": {
		"**/.cache": true,
		"**/.DS_Store": true,
		"**/.git": true,
		"**/.hg": true,
		"**/.next": true,
		"**/.svn": true,
		"**/CVS": true,
		"**/dist": false
	},
	"workbench.colorTheme": "Cobalt2",
	"workbench.editor.tabCloseButton": "off",
	"emmet.includeLanguages": {
		"javascript": "javascriptreact",
		"typescript": "html"
	},
	// this lets you quick open multiple items in a row and now have the previous ones closed on you
	"workbench.editor.enablePreviewFromQuickOpen": false,
	"window.title": "${dirty} ${activeEditorMedium}${separator}${rootName}",
	"sublimeTextKeymap.promptV3Features": true,
	// These are all my auto-save configs
	"editor.formatOnSave": true,
	// turn it off for JS
	"[javascript]": {
		"editor.formatOnSave": false
	},
	"[javascriptreact]": {
		"editor.formatOnSave": false
	},
	"[typescript]": {
		"editor.formatOnSave": false
	},
	"[typescriptreact]": {
		"editor.formatOnSave": false
	},
	// Optional: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already
	"prettier.disableLanguages": ["js", "javascriptreact", "typescript", "typescriptreact"],
	"eslint.alwaysShowStatus": true,
	"editor.autoIndent": true,
	"window.closeWhenEmpty": true,
	"editor.detectIndentation": false,
	"files.insertFinalNewline": true,
	"editor.showFoldingControls": "always",
	"editor.find.seedSearchStringFromSelection": true,
	"editor.matchBrackets": true,
	"window.openFilesInNewWindow": "off",
	"workbench.editor.enablePreview": true,
	"editor.scrollBeyondLastLine": true,
	"editor.useTabStops": true,
	"editor.formatOnPaste": true,
	"[jade]": {
		"togglequotes.chars": ["\"", "'", "`"]
	},
	"editor.parameterHints.enabled": false,
	"editor.suggestSelection": "first",
	"vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
	"editor.fontLigatures": true,
	"workbench.tree.indent": 20,
	"polacode.shadow": "rgba(0, 0, 0, 0.55) 0px 0 0",
	"polacode.transparentBackground": true,
	"polacode.target": "snippet",
	"terminal.integrated.shell.osx": "/bin/zsh",
	"terminal.integrated.fontSize": 20,
	"editor.lineHeight": 45,
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
	},
	"typescript.tsserver.log": "verbose",
	"propTypes.autoImport": "ES6",
	"kite.showWelcomeNotificationOnStartup": false,
	"liveshare.featureSet": "stable",
	"eslint.validate": ["typescript", "typescriptreact", "javascript", "javascriptreact"],
	"cSpell.enabled": true,
	"editor.renderControlCharacters": true,
	"editor.renderWhitespace": "trailing",
	"editor.copyWithSyntaxHighlighting": false,
	"cSpell.enableFiletypes": ["mdx"],
	// "vscode_custom_css.imports": [
	//   "file://Users/wesbos/Dropbox/vscode-theme-cobalt2/css-hacks.css"
	// ],
	// "vscode_custom_css.policy": true,
	"selectby.regexes": {
		"regex1": {
			"backward": "/\\*",
			"forward": "\\*/",
			"forwardInclude": true,
			"backwardInclude": true,
			"showSelection": true
		}
	},
	"workbench.iconTheme": "eq-material-theme-icons",
	"vsicons.presets.hideExplorerArrows": true,
	"errorLens.fontSize": "12",
	// "errorLens.fontFamily": "Comic Sans MS",
	"errorLens.onSave": true,
	"errorLens.enabledDiagnosticLevels": ["error", "warning", "hint"],
	"workbench.colorCustomizations": {
		"errorLens.hintForeground": "#ffc600A1",
		"errorLens.hintBackground": "#ffc60003",
		"errorLens.errorBackground": "#ff000005"
	},
	"errorLens.exclude": ["never (read|used)"],
	"css.validate": false,
	"less.validate": false,
	"scss.validate": false,
	"window.zoomLevel": -1,
	"better-comments.tags": [
		{
			"tag": "!",
			"color": "#FF2D00",
			"strikethrough": false,
			"underline": false,
			"backgroundColor": "transparent",
			"bold": false,
			"italic": false
		},
		{
			"tag": "?",
			"color": "#3498DB",
			"strikethrough": false,
			"underline": false,
			"backgroundColor": "transparent",
			"bold": false,
			"italic": false
		},
		{
			"tag": "//",
			"color": "#474747",
			"strikethrough": true,
			"underline": false,
			"backgroundColor": "transparent",
			"bold": false,
			"italic": false
		},
		{
			"tag": "todo",
			"color": "#ffc600",
			"strikethrough": false,
			"underline": false,
			"backgroundColor": "transparent",
			"bold": false,
			"italic": false
		},
		{
			"tag": "*",
			"color": "#98C379",
			"strikethrough": false,
			"underline": false,
			"backgroundColor": "transparent",
			"bold": false,
			"italic": false
		},
		{
			"tag": "Solution",
			"color": "#193549",
			"strikethrough": false,
			"underline": true,
			"backgroundColor": "#ffc600",
			"bold": true,
			"italic": true
		},
		{
			"tag": "Task",
			"color": "#ffc600",
			"strikethrough": false,
			"underline": true,
			"backgroundColor": "Transparent",
			"bold": true,
			"italic": true
		}
  ],
}
