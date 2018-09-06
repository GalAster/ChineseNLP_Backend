module.exports = {
	dest: 'docs/.build',
	locales: {
		'/': {
			lang: 'zh-CN',
			title: 'ChineseNLP',
			description: 'Mega NLP Tools Kits.'
		}
	},
	head: [
		['link', {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css'}]
	],
	themeConfig: {
		repo: 'GalAster/Deus',
		editLinks: true,
		docsDir: 'docs',
		markdown: {
			lineNumbers: true
		},
		sidebar: [
			{
				title: '开发文档',
				children: [
					'/Start/',
					'/Start/Developer.md',
					'/Start/Editor.md',
					'/Start/EditorAdv.md'
				]
			},
			{
				title: '信息提取模块',
				children: [
					'/Extract/'
				]
			},
			{
				title: 'NumberMaster 模块',
				children: [
					'/NumberMaster/'
				]
			},
			{
				title: 'HanoiTower 模块',
				children: [
					'/HanoiTower/'
				]
			},
			{
				title: 'Sudoku 模块',
				children: [
					'/Sudoku/',
					'/Sudoku/Object.md'
				]
			}
		]
	},
	serviceWorker: true,
	markdown: {
		config: md => {
			md.use(require("markdown-it-katex"));
		}
	}
};
