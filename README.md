网站使用 [sbryngelson/academic-website-template](https://github.com/sbryngelson/academic-website-template)，提供北京大学空间音频实验室的中英文首页、学术论文、研究方向、曲天书老师介绍、代码与基准、联系页面。首页首先展示曲老师的照片、研究领域、主要经历与教学课程，随后以可翻页的卡片展示论文原图，双栏中保留研究动态与研究方向。各页面提供明暗主题切换和站内检索。

中文页面位于 `/`、`/publications/`、`/research/`、`/people/`、`/resources/`、`/contact/`，英文页面使用相同路径并加上 `/en/`。切换文献目录的语言时会保留搜索条件。目录保留107条学术文献、43条专利和1条软件著作权，可按题目、作者、研究方向、发表类型和年份检索，也可以只显示有PDF的记录。当前53条记录提供PDF，其中48条是全文或章节，5条明确标为会议摘要。JAES 2026球谐波束编码论文和ICASSP 2026包络分离论文的作者版本注明“PDF（作者稿）”。BibTeX 可在每条记录内展开、复制或下载，也可以下载全部引用。

论文卡片支持按钮翻页、键盘左右键与Home/End、手机横向滚动和点击放大。首页提供“最新论文”和“引用最多”两个入口，分别从已取得并核对主图的14篇论文中，按曲天书老师Google Scholar的最新顺序和被引次数选取前8篇。两种入口展示各自的论文集合；切换中英文后保留所选入口。引用数采用2026年10月15日的Scholar快照，未显示引用数的论文保留空值。此排序只用于首页FlashCards。新增图片包括ICASSP 2026包络分离辅助声源计数与定位、JAES 2026球谐波束编码、个性化HRTF建模、语音反射与掩蔽、选择性注意、Deep-Modal、空间分离与前脉冲抑制、语音知觉融合。所有图片都直接取自对应原文，网页不显示图注；图号、页码、PDF版本与文件哈希记录在 `data/paper-figures.json`。`perView`控制每个入口展示的篇数，新增主图后构建程序会依据Scholar数据重新选择和排列论文。代码与基准栏目收录TWNM-FOA Benchmark、CrossMamba、MFTS，以及NeuralSound仓库中的DeepModal部分实现。只有已确认与论文相关的作者公开资源会显示在此栏目。

30篇论文另提供明确的“IEEE Xplore”按钮，直接链接已核实的IEEE出版页面，包含需要机构或个人订阅的论文。两篇ICASSP 2026论文也提供该按钮。地址及对应依据保存在 `data/ieee-sources.json`；已有PDF、DOI、arXiv和代码链接继续显示。

项目使用 Node.js 20或更高版本，以及锁定版本的 Sass。准备依赖后即可在本地预览：

```sh
npm ci
npm run dev
```

预览地址为 `http://127.0.0.1:4173/`。以下命令编译原模板样式，生成十二个静态页面与引用下载文件，并检查链接、语言与文献资料：

```sh
npm run build
```

原模板的样式源码在 `vendor/academic-website-template/`，上游提交与许可保存在该目录的 `UPSTREAM.json` 和 `LICENSE`。原模板样式编译为 `dist/template.css`；本站的双语、文献目录、手机布局和可读性调整位于 `dist/styles.css`。字体保存在 `dist/fonts/`，各字体许可保存在同一目录。

`site.template.html` 定义首页，`publications.template.html` 定义完整文献目录，`page.template.html` 定义各页共用的框架。`scripts/generate.mjs` 生成页面，`dist/js/render.js` 显示文献记录，`dist/js/app.js` 处理导航、主题、搜索及引用复制。`dist/js/content.js` 保存中英文介绍、研究方向、研究动态和界面文字。

文献资料以 `data/publications.json` 为准，构建程序自动生成浏览器模块和下载文件。`coverage` 记录北大教师主页7页、138条成果与本地记录的对应关系，更新时保留该对应关系。所有成果都写入静态HTML，关闭JavaScript后仍可阅读文献、原文链接及BibTeX。英文译名与中文原题同时保留，引用导出使用原题。新增PDF的来源与检查方法在 `data/pdf-sources.json`；导师资料和来源在 `data/faculty.json`，公开代码与基准资料在 `data/resources.json`。Google Scholar的公开记录、实际排序、引用数和对应关系保存在 `data/google-scholar.json`。资料来源见 `SOURCES.md`。

生成的网站位于 `dist/`。`catalog.bib`、`patents.bib`、`software.bib` 分别保存文献、专利、软件引用；`catalog.json` 提供全部成果数据。公开网站为[中文主页](https://spatial-audio-2203.github.io/)与[英文主页](https://spatial-audio-2203.github.io/en/)。网站由实验室账号 Spatial-Audio-2203 的 GitHub Pages 发布，`main` 分支保存源码，`gh-pages` 分支保存生成的静态文件。

修改页面或文献数据后，先运行 `npm run build`，将修改提交并推送到 `main`，再运行以下命令发布。GitHub Pages 会自动处理 `gh-pages` 的更新，构建生成的 `.nojekyll` 文件用于直接发布静态页面。

```bash
git subtree push --prefix dist origin gh-pages
```

This repository contains the bilingual website of the 3D Audio Lab at Peking University, led by Associate Professor Tianshu Qu. The public site is available in [Chinese](https://spatial-audio-2203.github.io/) and [English](https://spatial-audio-2203.github.io/en/). Run `npm ci` and `npm run build` to generate and validate the site. The `main` branch contains the source; GitHub Pages publishes the static files from `gh-pages`.
