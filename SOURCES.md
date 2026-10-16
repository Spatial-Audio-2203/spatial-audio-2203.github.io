文献目录于2026年10月2日整理，PDF与公开资源入口于2026年10月15日补查。实验室名称采用用户提供的“3D Audio / 空间音频实验室”。曲天书老师的职称、学院、研究领域、邮箱和照片来自[北京大学智能学院](https://sai.pku.edu.cn/info/1479/2528.htm)；学历、博士后和访问学者经历来自[北京大学人工智能研究院](https://www.ai.pku.edu.cn/info/1326/2868.htm)。详细工作经历、教学课程、办公室与电话来自[北京大学国家生物医学成像科学中心](https://nbic.pku.edu.cn/rcdw/kyry/jzyjy/d5b0b96040d44195a5235f39f45f91fd.htm)。上述导师资料于2026年10月15日重新核对，结构化资料在 `data/faculty.json`。

成果目录以[曲老师的北大教师主页](http://scholar.pku.edu.cn/qutianshu/publications)为基础。第一页与 page=1 至 page=6 共7页，提供138条记录，其中94条是学术文献，43条是专利，1条是软件著作权。项目的 `data/publications.json` 保存每条记录的来源网址，并通过 `coverage` 记录这138条资料在网站中的对应项目。构建程序检查这些记录是否全部保留。软件著作权在教师主页采用了专利记录格式，本站按其登记编号“软著 2025SR1653141”归入软件栏目。

教师主页中的作者全名、年份、卷期和页码来自网页内的 COinS 引用字段。会议名称来自该条引用中的会议信息。教师页面若只提供作者首字母，目录保留首字母；同一条论文有出版者登记信息时，采用出版记录中的完整作者名单。每篇论文都提供教师记录、出版页面或作者版本的链接。无法查到原文链接的记录仍提供教师主页的单条引用页面。

本站另外补充13条公开文献，形成107条学术文献记录。补充内容包括 TWNM、具身认知声呐研究、NEMS 2026论文、两篇听觉认知期刊论文、2018及2019年的两篇信号处理会议论文、DNN声源定位论文、AES 2020多任务定位论文、两篇早期声源及房间几何预印本，以及两条声学会议摘要。OpenAlex 和 DBLP 用于查找线索；最终记录使用出版社登记信息、会议记录或论文作者版本。仅因英文姓名相同而出现的财务与企业研究论文没有纳入。

TWNM 的作者版本是 [arXiv:2601.02954](https://arxiv.org/abs/2601.02954)，发表信息来自 [NeurIPS 2026官方名单](https://neurips.cc/Downloads/2026)及[会议页面](https://neurips.cc/virtual/2026/poster/155515)。2026年9月的研究动态日期参考[第一作者的公开公告](https://konoyo-014.github.io/)。Flow-HOA 使用 [AES出版记录23190](https://aes.org/publications/elibrary-page/?id=23190)和 [arXiv:2606.04570](https://arxiv.org/abs/2606.04570)。SHB-AE 的2025会议论文和2026期刊论文分别保留；期刊的题目、作者、卷期页码及 DOI 来自 [JAES出版记录23239](https://aes.org/publications/elibrary-page/?id=23239)。

汽车声场论文已经发表于 [JASA 158(4)，3063–3077，2025](https://doi.org/10.1121/10.0039573)。网站采用正式发表时的作者顺序 Yufan Qian、Xihong Wu、Tianshu Qu，同时保留 [arXiv:2509.09149](https://arxiv.org/abs/2509.09149)的作者版本链接。论文不再标为仅有预印本。阿尔茨海默病双耳听觉论文的正确卷号为18，引用信息参考[出版者](https://doi.org/10.1002/alz.12464)和 [PubMed](https://pubmed.ncbi.nlm.nih.gov/34569690/)，保留正式卷期的2022年。

具身认知声呐研究的原文、中文与英文题目、作者和页码来自[声学技术](https://www.sxjs.ac.cn/cn/article/doi/10.16300/j.cnki.1000-3630.24121901)。Multi-Task Based Sound Localization Model 的作者、2020年会议与论文编号10366参考 [AES官方148届会议报告](https://www.aes.org/events/148/148thWrapUp.pdf)。2013年旋转图像与感知高度的六页会议论文使用 [POMA出版记录](https://doi.org/10.1121/1.4800104)；对应的 [JASA会议摘要](https://doi.org/10.1121/1.4806271)单独标为摘要。其余只有一页的JASA会议记录也标为会议摘要。

英文页面为中文论文与专利提供译名，并保留中文原题。除声呐论文已有出版社英文题目外，这些英文译名由本站翻译，详情页注明这一点。BibTeX 导出保留原文题目。专利编号按教师主页列出的申请或登记编号保存，没有统一将其描述为已授权专利。

首页六张卡片分别展示TWNM、Flow-HOA、SHB-AE、CrossMamba、Leveraging Sound Source Trajectories和TA-V2A的原图。图片直接从固定版本的公开作者PDF渲染并提取，保留完整图形和文字，网页不显示图注。每张图的PDF网址、版本、图号、页码、像素大小和哈希保存在 `data/paper-figures.json`，论文卡片提供原文链接。曲老师照片来自北大官方教师页面。

两轮PDF补查为原目录新增42个入口，其中37篇是论文全文或书籍章节，5条是已单独标明的会议摘要；新增入口中40个来自非arXiv来源。当前目录共52条记录提供PDF，其中47条是全文或章节，5条是摘要。第一轮新增30条，第二轮新增12条，逐条来源、检查结果和各轮数量保存在 `data/pdf-sources.json`。

第二轮检查了仍缺PDF且已匹配到曲天书Google Scholar的全部51条论文详情，并继续查找作者主页、机构文献存档、ResearchGate公开上传和会议论文集。新增全文包括2026年JAES球谐波束编码、2023年迭代嵌入分离SELD、2021年个体HRTF双耳渲染、2019年GAN带宽扩展，以及早期HRTF和听觉研究。JAES文件首页标有DRAFT，网页链接注明“PDF（作者稿）”，正式书目信息保持原目录记录。Stanford作者副本首页标明AES 150th Convention 2021，未使用Scholar中的2020年替换正式年份。同题的POMA 2013全文与JASA会议摘要按PDF内DOI分别对应。

新增42个入口中，30个通过普通HTTPS请求取得PDF并核对文件头、题名和作者；其余12个由网页工具实际按PDF解析并核对正文。ResearchGate文件由论文作者公开上传，普通本地请求可能被该站拦截，检查方法据实记录。ICASSP 2026两篇论文的会议Manuscript链接指向IEEE；已查的公开来源尚未提供可验证的作者PDF，IEEE访问要求与已查入口另存于 `unresolvedChecks`，未将其计入PDF数量。

非arXiv来源包括[北大HPC成果存档](https://hpc.pku.edu.cn/achievement_3.html)、[北大心理学院作者文献页](https://psy.pku.edu.cn/english/people/faculty/professor/liangli/index.htm)、[Deep-Modal作者项目页](https://hellojxt.github.io/DeepModal/)、[ISCA官方论文集](https://www.isca-archive.org/interspeech_2020/peng20_interspeech.html)、Frontiers、PLOS、ICA 2016及声学会议的官方论文集。会议摘要集的链接指定相应PDF页码。没有将只能打开元数据页面、返回HTML或已经失效的地址当作PDF。

2026年10月16日，为30条已核实IEEE出版页面的论文增加明确的“IEEE Xplore”按钮，包括两篇ICASSP 2026论文。28个地址来自Crossref中出版社登记的原文页面，已比较DOI和题名；另2个地址来自此前实际读取的Scholar单篇详情，题名与IEEE链接已核对。链接不按DOI末尾数字推测，因为期刊DOI编号可能不同于IEEE文章编号。逐条依据保存在 `data/ieee-sources.json`。需要订阅的IEEE页面同样提供入口，PDF按钮继续链接已核对的全文或摘要文件。

[TWNM-FOA Benchmark](https://huggingface.co/datasets/KonoyoBC/TWNM-FOA-Benchmark)的数据卡、公开测试与开发元数据以及音频清单已重新读取。实际测试文件含1000道题，开发文件含18道带答案的样例，题目覆盖感知、关系整合和场景推理。网站链接数据说明、公开文件和论文。官方评测Space在检查时报告启动错误，因此本站没有提供“在线评测可用”的按钮。检查使用的数据提交为09590f317a3fe1ef5328691f28eb433444f84259，具体依据保存在 `data/resources.json`。

代码栏目链接论文作者公开的[CrossMamba](https://github.com/WuDH2000/CrossMamba)与[MFTS](https://github.com/WuDH2000/MFTS)仓库，链接同时由论文脚注和仓库说明确认。[Deep-Modal项目页](https://hellojxt.github.io/DeepModal/)指向[NeuralSound](https://github.com/hellojxt/NeuralSound)，其README说明包含DeepModal的部分实现，网站保留这一范围。TWNM、Flow-HOA、SHB-AE与TA-V2A没有加入未经确认的代码地址。

网站使用用户指定的 [sbryngelson/academic-website-template](https://github.com/sbryngelson/academic-website-template)，对应 [Start Building Web 模板页面](https://startbuildingweb.com/zh-cn/template/gh-sbryngelson-academic-website-template)。模板源码固定为提交 157ec4089412e14c0c241f15b09632caadec6198。原模板的 SASS、Source Serif 4 与 DM Sans 字体、图标和首页双栏结构用于本站；Node.js 负责生成中英文页面和完整文献目录，Sass 编译模板样式。模板版权与 MIT 许可在 `vendor/academic-website-template/LICENSE` 及 `dist/licenses/academic-website-template-MIT.txt` 中保留。字体许可随字体文件保存在 `dist/fonts/`。

本次更新保留原107条学术文献、43条专利、1条软件著作权及教师主页138条记录的对应关系。原有题名、作者、发表年份与出版信息保持不变；此次新增PDF、作者版本、代码和基准入口。文献整理日期与链接检查日期分别记录。

首页FlashCards的两种排序依据[曲天书的Google Scholar主页](https://scholar.google.com/citations?user=WztllNMAAAAJ&hl=en)，于2026年10月15日读取。主页显示Peking University及已验证的pku.edu.cn邮箱。分别读取默认被引顺序和 `sortby=pubdate` 最新顺序，各分页100条加末页2条，共102条记录，末页没有更多结果。结构化结果、页面哈希、匹配依据与实际名次保存在 `data/google-scholar.json`。六张首页卡片的年份、引用数和名次均已逐条核对，不使用其他数据库计数代替Scholar。SHB-AE采用2025年AES会议记录的3次引用，没有与2026年预印本记录的2次引用相加。Scholar页面中未显示引用数的条目保留为空，没有用0替代。首页卡片显示数据日期，排序选择会保留到同一页面的另一语言版本。

研究生课程名称由用户在本会话中更正为“空间听觉与音频、音乐处理”，英文采用“Spatial Hearing and Audio/Music Processing”。首页与中英文个人介绍页采用这一名称；本科课程名称继续依据北大官方页面。课程更正来源同时记录在 `data/faculty.json`。
