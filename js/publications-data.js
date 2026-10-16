// Generated from data/publications.json.
export const publicationData = {
  "checked": "2026-10-02",
  "sourcePages": 7,
  "facultyRecordCount": 138,
  "papers": [
    {
      "id": "twnm",
      "short": "TWNM",
      "title": "The World is Not Mono: Enabling Spatial Understanding in Large Audio-Language Models",
      "authors": [
        "Yuhuan You",
        "Lai Wei",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2026,
      "venue": "NeurIPS 2026",
      "type": "conference",
      "category": "perception",
      "arxiv": "2601.02954",
      "submitted": "2026-01-06",
      "publisher": "https://neurips.cc/virtual/2026/poster/155515",
      "source": "https://neurips.cc/Downloads/2026",
      "keywords": "FOA ASA LALM spatial language 场景 空间 大模型",
      "summary": {
        "zh": "将多通道空间线索引入音频语言模型，研究声源定位、属性关联与场景推理。",
        "en": "Bringing multichannel spatial cues into audio-language models for localization, attribute binding and scene reasoning."
      },
      "detail": {
        "zh": "TWNM 将听觉场景分析分为感知、关系理解与推理三个层次。方法使用一阶 Ambisonics 音频，结合空间与语义特征，并通过分阶段训练学习回答空间场景问题。论文在受控的元数据生成基准上进行评估。",
        "en": "TWNM organizes auditory scene analysis into perception, relational integration and reasoning. It combines spatial representations from first-order Ambisonics with semantic audio features and trains progressively to answer spatial scene questions. Evaluation uses a controlled benchmark generated from scene metadata."
      },
      "references": [
        "https://neurips.cc/Downloads/2026",
        "https://arxiv.org/abs/2601.02954",
        "https://huggingface.co/datasets/KonoyoBC/TWNM-FOA-Benchmark"
      ],
      "benchmark": "https://huggingface.co/datasets/KonoyoBC/TWNM-FOA-Benchmark"
    },
    {
      "id": "qu-8520e1d2fd",
      "title": "An Envelope Separation Aided Multi-Task Learning Model for Blind Source Counting and Localization",
      "authors": [
        "Jiaqi Du",
        "Donghang Wu",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2026,
      "venue": "ICASSP 2026 - 2026 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/envelope-separation-aided-multi-task-learning-model-blind-source-counting-and",
      "sourceIndex": 0,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/envelope-separation-aided-multi-task-learning-model-blind-source-counting-and",
        "https://doi.org/10.1109/icassp55912.2026.11464467",
        "https://ieeexplore.ieee.org/document/11464467"
      ],
      "category": "separation",
      "location": "Barcelona, Spain",
      "pages": "14852-14856",
      "type": "conference",
      "publisher": "https://doi.org/10.1109/icassp55912.2026.11464467",
      "doi": "10.1109/icassp55912.2026.11464467",
      "short": "An Envelope Separation Aided Multi-Tas",
      "ieee": "https://ieeexplore.ieee.org/document/11464467",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Ficassp55912.2026.11464467",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "qu-a07b08acaa",
      "title": "A Learning-Based Automotive Sound Field Reproduction Method Using Plane-Wave Decomposition and Multi-Position Constraint",
      "authors": [
        "Yufan Qian",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2026,
      "venue": "ICASSP 2026 - 2026 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/learning-based-automotive-sound-field-reproduction-method-using-plane-wave",
      "sourceIndex": 1,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/learning-based-automotive-sound-field-reproduction-method-using-plane-wave",
        "https://doi.org/10.1109/icassp55912.2026.11461391",
        "https://ieeexplore.ieee.org/document/11461391"
      ],
      "category": "rendering",
      "location": "Barcelona, Spain",
      "pages": "15032-15036",
      "type": "conference",
      "publisher": "https://doi.org/10.1109/icassp55912.2026.11461391",
      "doi": "10.1109/icassp55912.2026.11461391",
      "short": "A Learning-Based Automotive Sound Fiel",
      "ieee": "https://ieeexplore.ieee.org/document/11461391",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Ficassp55912.2026.11461391",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "flow-hoa",
      "title": "Flow-HOA: Generative Joint Optimization for Ambisonics Encoding via Flow Matching",
      "authors": [
        "Yuhuan You",
        "Yufan Qian",
        "Tianshu Qu",
        "Bin Wang",
        "Xueyang Lv"
      ],
      "year": 2026,
      "venue": "the AES 160th Convention",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/flow-hoa-generative-joint-optimization-ambisonics-encoding-flow-matching",
      "sourceIndex": 2,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/flow-hoa-generative-joint-optimization-ambisonics-encoding-flow-matching",
        "https://arxiv.org/abs/2606.04570"
      ],
      "category": "encoding",
      "location": "Copenhagen, Denmark",
      "type": "conference",
      "number": "10293",
      "publisher": "https://aes.org/publications/elibrary-page/?id=23190",
      "short": "Flow-HOA",
      "arxiv": "2606.04570",
      "submitted": "2026-06-03",
      "summary": {
        "zh": "通过流匹配联合优化编码滤波器，兼顾声音波形、频谱与空间结构。",
        "en": "Using flow matching to optimize encoding filters across waveform, spectral and spatial objectives."
      },
      "detail": {
        "zh": "Flow-HOA 面向稀疏、不规则麦克风阵列的高阶 Ambisonics 编码。方法在离线阶段生成 FIR 滤波器，联合考虑时域、频谱和空间目标；重放设备执行得到的滤波器。论文报告了模拟数据评估与真实录音的听音实验。",
        "en": "Flow-HOA targets higher-order Ambisonics encoding from sparse, irregular arrays. It generates FIR encoding filters offline with joint time, frequency and spatial objectives. The resulting filters can be applied without running the generator. The paper reports simulated-data evaluations and listening tests on real recordings."
      },
      "keywords": "FIR flow matching HOA 球谐 声场 滤波器"
    },
    {
      "id": "qu-931ae84a14",
      "title": "A Parametric Dual-Channel Audio Coding via Learned Time-Frequency Masking",
      "authors": [
        "Yihan Wang",
        "Yufan Qian",
        "Qingbo Huang",
        "Tianshu Qu"
      ],
      "year": 2026,
      "venue": "the AES 160th Convention",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/parametric-dual-channel-audio-coding-learned-time-frequency-masking",
      "sourceIndex": 3,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/parametric-dual-channel-audio-coding-learned-time-frequency-masking"
      ],
      "category": "encoding",
      "location": "Copenhagen, Denmark",
      "type": "conference",
      "number": "10294",
      "publisher": "https://aes.org/publications/elibrary-page/?id=23191",
      "short": "A Parametric Dual-Channel Audio Coding"
    },
    {
      "id": "qu-a2d10657f7",
      "title": "A Recursive Attractor Network for Long-Form Sound Source Localization and Identity Tracking with a Variable Number of Sources",
      "authors": [
        "Jiaqi Du",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2026,
      "venue": "the AES 160th Convention",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/recursive-attractor-network-long-form-sound-source-localization-and-identity",
      "sourceIndex": 4,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/recursive-attractor-network-long-form-sound-source-localization-and-identity"
      ],
      "category": "separation",
      "location": "Copenhagen, Denmark",
      "type": "conference",
      "number": "10271",
      "publisher": "https://aes.org/publications/elibrary-page/?id=23183",
      "short": "A Recursive Attractor Network for Long"
    },
    {
      "id": "qu-deef2b3edc",
      "title": "A Perceptual Evaluation Method for Binaural Rendering Algorithms via Minimum Audible Angle Measurements",
      "authors": [
        "Yufan Qian",
        "Houlin Zhu",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2026,
      "venue": "the AES 160th Convention",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/perceptual-evaluation-method-binaural-rendering-algorithms-minimum-audible",
      "sourceIndex": 5,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/perceptual-evaluation-method-binaural-rendering-algorithms-minimum-audible"
      ],
      "category": "rendering",
      "location": "Copenhagen, Denmark",
      "type": "conference",
      "number": "10292",
      "publisher": "https://aes.org/publications/elibrary-page/?id=23189",
      "short": "A Perceptual Evaluation Method for Bin"
    },
    {
      "id": "qu-d1d8c557f4",
      "title": "Gaussian Splatting-Based Head and Pinna Reconstruction for Individualized HRTF Computation from Commodity Multi-View Images",
      "authors": [
        "Houlin Zhu",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2026,
      "venue": "the AES 160th Convention",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/gaussian-splatting-based-head-and-pinna-reconstruction-individualized-hrtf",
      "sourceIndex": 6,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/gaussian-splatting-based-head-and-pinna-reconstruction-individualized-hrtf"
      ],
      "category": "rendering",
      "location": "Copenhagen, Denmark",
      "type": "conference",
      "number": "10290",
      "publisher": "https://aes.org/publications/elibrary-page/?id=23188",
      "short": "Gaussian Splatting-Based Head and Pinn"
    },
    {
      "id": "qu-3f2a8b8319",
      "title": "Spherical Harmonic Beamforming–Based Ambisonics Encoding Method in Frequency and Time Domain",
      "authors": [
        "Yuhuan You",
        "Yufan Qian",
        "Tianshu Qu",
        "Bin Wang",
        "Xueyang Lv"
      ],
      "year": 2026,
      "venue": "Journal of the Audio Engineering Society",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/spherical-harmonic-beamforming-based-ambisonics-encoding-method-frequency-and",
      "sourceIndex": 7,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/spherical-harmonic-beamforming-based-ambisonics-encoding-method-frequency-and",
        "https://doi.org/10.17743/jaes.2022.0275",
        "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=WztllNMAAAAJ&pagesize=100&citation_for_view=WztllNMAAAAJ:b0M2c_1WBrUC",
        "https://konoyo-014.github.io/files/JAES_SHBAE_After_Rebuttal3.pdf",
        "https://konoyo-014.github.io/"
      ],
      "category": "encoding",
      "volume": "74",
      "issue": "6",
      "pages": "417-429",
      "type": "journal",
      "publisher": "https://doi.org/10.17743/jaes.2022.0275",
      "doi": "10.17743/jaes.2022.0275",
      "short": "Spherical Harmonic Beamforming–Based A",
      "pdf": "https://konoyo-014.github.io/files/JAES_SHBAE_After_Rebuttal3.pdf",
      "pdfSource": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=WztllNMAAAAJ&pagesize=100&citation_for_view=WztllNMAAAAJ:b0M2c_1WBrUC",
      "pdfChecked": "2026-10-15",
      "pdfVersion": "author-manuscript"
    },
    {
      "id": "doi-6a92e53eba",
      "year": 2026,
      "title": "Piezoelectric Acoustic Surfaces for Sound Localization",
      "authors": [
        "Kaiteng Tan",
        "Simeng Wu",
        "Zhengshuai Wang",
        "Yufan Qian",
        "Junzhe Yu",
        "Yuwen Weng",
        "Tianshu Qu",
        "Jinchi Han"
      ],
      "type": "conference",
      "venue": "2026 IEEE 21st International Conference on Nano/Micro Engineered and Molecular Systems (NEMS)",
      "source": "https://doi.org/10.1109/nems69704.2026.11633751",
      "references": [
        "https://doi.org/10.1109/nems69704.2026.11633751",
        "https://ieeexplore.ieee.org/document/11633751"
      ],
      "category": "separation",
      "doi": "10.1109/nems69704.2026.11633751",
      "pages": "1030-1033",
      "short": "Piezoelectric Acoustic Surfaces for So",
      "publisher": "https://doi.org/10.1109/nems69704.2026.11633751",
      "ieee": "https://ieeexplore.ieee.org/document/11633751",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Fnems69704.2026.11633751",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "shb-ae",
      "title": "Spherical harmonic beamforming based Ambisonics encoding and upscaling method for smartphone microphone array",
      "authors": [
        "Yuhuan You",
        "Yufan Qian",
        "Tianshu Qu",
        "Bin Wang",
        "Xueyang Lv"
      ],
      "year": 2025,
      "venue": "the AES 158th Convention",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/spherical-harmonic-beamforming-basedambisonics-encoding-and-upscaling-method",
      "sourceIndex": 8,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/spherical-harmonic-beamforming-basedambisonics-encoding-and-upscaling-method",
        "https://arxiv.org/abs/2606.04584"
      ],
      "category": "encoding",
      "location": "Warsaw, Poland",
      "type": "conference",
      "number": "10230",
      "publisher": "https://aes.org/publications/elibrary-page/?id=22912",
      "short": "SHB-AE",
      "arxiv": "2606.04584",
      "submitted": "2026-06-03",
      "summary": {
        "zh": "为手机麦克风阵列设计球谐波束形成，实现 Ambisonics 编码与升阶。",
        "en": "Spherical harmonic beamforming for Ambisonics encoding and upscaling with smartphone microphone arrays."
      },
      "detail": {
        "zh": "SHB-AE 根据阵列的声学响应，为不同球谐通道设计波束形成器。论文研究四个不规则布局的手机麦克风如何编码空间声场，并在仿真和真实阵列录音上评估。会议年份为 2025，预印本于 2026 年 6 月公开。",
        "en": "SHB-AE designs beamformers for spherical harmonic channels from the array response. The paper studies spatial encoding with four irregularly placed smartphone microphones and evaluates simulated and real recordings. Its conference year is 2025; the author version was posted in June 2026."
      },
      "keywords": "smartphone beamforming HOA 手机 阵列 球谐 波束"
    },
    {
      "id": "qu-4b238438f9",
      "title": "Moving Sound Source Localization and Tracking based on Envelope Estimation for Unknown Number of Sources",
      "authors": [
        "Donghang Wu",
        "Jiaqi Du",
        "Tianshu Qu",
        "Qingbo Huang",
        "Dejun Zhang"
      ],
      "year": 2025,
      "venue": "the AES 158th Convention",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/moving-sound-source-localization-and-tracking-based-envelope-estimation",
      "sourceIndex": 9,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/moving-sound-source-localization-and-tracking-based-envelope-estimation"
      ],
      "category": "separation",
      "location": "Warsaw, Poland",
      "type": "conference",
      "number": "10216",
      "publisher": "https://aes.org/publications/elibrary-page/?id=22852",
      "short": "Moving Sound Source Localization and T"
    },
    {
      "id": "qu-f2c72aade4",
      "title": "Room Geometry Inference Using Localization of the Sound Source and Its Early Reflections",
      "authors": [
        "Donghang Wu",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2025,
      "venue": "the AES 158th Convention",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/room-geometry-inference-using-localization-soundsource-and-its-early",
      "sourceIndex": 10,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/room-geometry-inference-using-localization-soundsource-and-its-early"
      ],
      "category": "separation",
      "location": "Warsaw, Poland",
      "type": "conference",
      "number": "10215",
      "publisher": "https://aes.org/publications/elibrary-page/?id=22851",
      "short": "Room Geometry Inference Using Localiza"
    },
    {
      "id": "crossmamba",
      "title": "Cross-attention Inspired Selective State Space Models for Target Sound Extraction",
      "authors": [
        "Donghang Wu",
        "Yiwen Wang",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2025,
      "venue": "ICASSP 2025 - 2025 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/cross-attention-inspired-selective-state-space-models-target-sound-extraction",
      "sourceIndex": 11,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/cross-attention-inspired-selective-state-space-models-target-sound-extraction",
        "https://doi.org/10.1109/icassp49660.2025.10890178",
        "https://arxiv.org/abs/2409.04803",
        "https://github.com/WuDH2000/CrossMamba",
        "https://ieeexplore.ieee.org/document/10890178"
      ],
      "category": "separation",
      "location": "Hyderabad, India",
      "pages": "1-5",
      "type": "conference",
      "publisher": "https://doi.org/10.1109/icassp49660.2025.10890178",
      "doi": "10.1109/icassp49660.2025.10890178",
      "short": "CrossMamba",
      "arxiv": "2409.04803",
      "submitted": "2024-09-07",
      "summary": {
        "zh": "借鉴交叉注意力，让状态空间模型融合目标线索与混合音频。",
        "en": "Adapting selective state space models to combine target clues with an audio mixture."
      },
      "detail": {
        "zh": "CrossMamba 针对目标声音提取中的特征融合。方法借鉴交叉注意力的计算方式，使用目标线索与混合音频构造相互关联的表示，使状态空间模型能够处理不同序列之间的关系。",
        "en": "CrossMamba addresses feature fusion in target sound extraction. Inspired by cross-attention, it constructs related representations from target clues and the audio mixture so that a selective state space model can capture dependencies between the two sequences."
      },
      "keywords": "Mamba state space target clues 状态空间 目标 提取",
      "code": "https://github.com/WuDH2000/CrossMamba",
      "ieee": "https://ieeexplore.ieee.org/document/10890178",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Ficassp49660.2025.10890178",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "ta-v2a",
      "title": "TA-V2A: Textually Assisted Video-to-Audio Generation",
      "authors": [
        "Yuhuan You",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2025,
      "venue": "ICASSP 2025 - 2025 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/ta-v2a-textually-assisted-video-audio-generation",
      "sourceIndex": 12,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/ta-v2a-textually-assisted-video-audio-generation",
        "https://doi.org/10.1109/icassp49660.2025.10887573",
        "https://arxiv.org/abs/2503.10700",
        "https://ieeexplore.ieee.org/document/10887573"
      ],
      "category": "generation",
      "location": "Hyderabad, India",
      "pages": "1-5",
      "type": "conference",
      "publisher": "https://doi.org/10.1109/icassp49660.2025.10887573",
      "doi": "10.1109/icassp49660.2025.10887573",
      "short": "TA-V2A",
      "arxiv": "2503.10700",
      "submitted": "2025-03-12",
      "summary": {
        "zh": "结合视频、语言与音频信息，研究语义一致的视频配音生成。",
        "en": "Combining video, text and audio information for semantically aligned video-to-audio generation."
      },
      "detail": {
        "zh": "TA-V2A 利用文本信息补充视频的语义表示，并将视频、语言与音频特征融入扩散生成过程。研究关注生成音频与视频内容的语义一致性及时间对齐。",
        "en": "TA-V2A uses text to enrich video semantics and combines visual, language and audio features in a diffusion-based generation process. The work examines semantic consistency and temporal alignment between the generated audio and video content."
      },
      "keywords": "video text diffusion multimodal 视频 文本 生成 扩散",
      "ieee": "https://ieeexplore.ieee.org/document/10887573",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Ficassp49660.2025.10887573",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "automotive",
      "title": "Automotive sound field reproduction using deep optimization with spatial domain constraint",
      "authors": [
        "Yufan Qian",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2025,
      "venue": "The Journal of the Acoustical Society of America",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/automotive-sound-field-reproduction-using-deep-optimization-spatial-domain",
      "sourceIndex": 13,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/automotive-sound-field-reproduction-using-deep-optimization-spatial-domain",
        "https://doi.org/10.1121/10.0039573",
        "https://arxiv.org/abs/2509.09149"
      ],
      "category": "rendering",
      "volume": "158",
      "issue": "4",
      "pages": "3063-3077",
      "type": "journal",
      "publisher": "https://doi.org/10.1121/10.0039573",
      "doi": "10.1121/10.0039573",
      "short": "SPMnet",
      "arxiv": "2509.09149",
      "submitted": "2025-09-11",
      "summary": {
        "zh": "在复杂车内声学环境中，同时考虑音质与声源方位的重现。",
        "en": "Addressing sound quality and spatial localization together in the acoustics of an automotive cabin."
      },
      "detail": {
        "zh": "SPMnet 用空间功率图描述重现声场的角度能量分布，并将这一约束加入多通道均衡。方法通过深度优化设计滤波器，论文报告了车内的客观和主观评估。研究发表于 JASA 158(4)，3063–3077 页，2025 年。",
        "en": "SPMnet uses a spatial power map to constrain the angular energy distribution of a reproduced field during multichannel equalization. The paper reports objective and subjective evaluations in an automotive cabin. Published in JASA 158(4), pp. 3063–3077, 2025."
      },
      "keywords": "SPMnet spatial power map 车内 重放 优化"
    },
    {
      "id": "qu-b846624a69",
      "title": "Joint Estimation of Sound Source Position and Room Boundaries Using a Multitask Deep Neural Network Model",
      "authors": [
        "Shan Gao",
        "Yiwen Wang",
        "Zeyu Yuan",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2025,
      "venue": "Journal of the Audio Engineering Society",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/joint-estimation-sound-source-position-and-room-boundaries-using-multitask",
      "sourceIndex": 15,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/joint-estimation-sound-source-position-and-room-boundaries-using-multitask",
        "https://doi.org/10.17743/jaes.2022.0220"
      ],
      "category": "separation",
      "volume": "73",
      "issue": "10",
      "pages": "633-647",
      "type": "journal",
      "publisher": "https://doi.org/10.17743/jaes.2022.0220",
      "doi": "10.17743/jaes.2022.0220",
      "short": "Joint Estimation of Sound Source Posit"
    },
    {
      "id": "qu-dc65b29496",
      "title": "基于球麦克风阵列的高阶声场记录与重放在电影音频制作中的应用",
      "authors": [
        "曲天书",
        "吴玺宏"
      ],
      "year": 2025,
      "venue": "现代电影技术",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/ji-yu-qiu-mai-ke-feng-zhen-lie-de-gao-jie-sheng-chang-ji-lu-yu-zhong-fang-zai",
      "sourceIndex": 20,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/ji-yu-qiu-mai-ke-feng-zhen-lie-de-gao-jie-sheng-chang-ji-lu-yu-zhong-fang-zai"
      ],
      "category": "encoding",
      "issue": "2",
      "pages": "4–11",
      "type": "journal",
      "short": "基于球麦克风阵列的高阶声场记录与重放在电影音频制作中的应用",
      "titleEn": "Application of higher-order sound field recording and reproduction with spherical microphone arrays in film audio production",
      "titleEnTranslated": true
    },
    {
      "id": "trajectories",
      "title": "Leveraging Sound Source Trajectories for Universal Sound Separation",
      "authors": [
        "Donghang Wu",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2025,
      "venue": "IEEE Transactions on Audio, Speech and Language Processing",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/leveraging-sound-source-trajectories-universal-sound-separation",
      "sourceIndex": 22,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/leveraging-sound-source-trajectories-universal-sound-separation",
        "https://doi.org/10.1109/taslpro.2025.3577352",
        "https://arxiv.org/abs/2409.04843",
        "https://github.com/WuDH2000/MFTS",
        "https://ieeexplore.ieee.org/document/11027436"
      ],
      "category": "perception",
      "volume": "33",
      "pages": "2337-2348",
      "type": "journal",
      "publisher": "https://doi.org/10.1109/taslpro.2025.3577352",
      "doi": "10.1109/taslpro.2025.3577352",
      "short": "Moving sources",
      "arxiv": "2409.04843",
      "submitted": "2024-09-07",
      "summary": {
        "zh": "让声源追踪与声音分离相互帮助，处理混响环境中的移动声源。",
        "en": "Iteratively refining localization and separation for moving sources in reverberant conditions."
      },
      "detail": {
        "zh": "方法先从混合音频估计声源轨迹，再根据轨迹分离声音，并利用分离结果细化追踪。通过多次迭代，定位与分离相互改善，最后由神经波束形成器生成分离信号。",
        "en": "The method first estimates source trajectories from a mixture, separates audio using those trajectories, and refines tracking from the separated signals. Iteration lets localization and separation improve each other. A neural beamformer then produces the separated signals."
      },
      "keywords": "moving localization tracking 移动 轨迹 定位",
      "code": "https://github.com/WuDH2000/MFTS",
      "ieee": "https://ieeexplore.ieee.org/document/11027436",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Ftaslpro.2025.3577352",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "embodied-sonar",
      "title": "具身认知声呐探测技术研究",
      "titleEn": "Research on embodied cognitive for sonar detection technology",
      "authors": [
        "潘悦",
        "吴玺宏",
        "王强",
        "曹怀刚",
        "曲天书"
      ],
      "year": 2025,
      "venue": "声学技术",
      "venueEn": "Technical Acoustics",
      "type": "journal",
      "category": "separation",
      "volume": "44",
      "issue": "1",
      "pages": "1–12",
      "doi": "10.16300/j.cnki.1000-3630.24121901",
      "source": "https://www.sxjs.ac.cn/cn/article/doi/10.16300/j.cnki.1000-3630.24121901",
      "pdf": "https://www.sxjs.ac.cn/cn/article/pdf/preview/10.16300/j.cnki.1000-3630.24121901.pdf",
      "references": [
        "https://www.sxjs.ac.cn/cn/article/doi/10.16300/j.cnki.1000-3630.24121901"
      ],
      "short": "具身认知声呐探测技术研究",
      "publisher": "https://doi.org/10.16300/j.cnki.1000-3630.24121901"
    },
    {
      "id": "qu-4ee662a74a",
      "title": "A Hybrid Deep-Online Learning Based Method for Active Noise Control in Wave Domain",
      "authors": [
        "Donghang Wu",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2024,
      "venue": "ICASSP 2024 - 2024 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/hybrid-deep-online-learning-based-method-active-noise-controlin-wave-domain",
      "sourceIndex": 23,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/hybrid-deep-online-learning-based-method-active-noise-controlin-wave-domain",
        "https://doi.org/10.1109/icassp48485.2024.10446791",
        "https://ieeexplore.ieee.org/document/10446791"
      ],
      "category": "rendering",
      "location": "COEX, Seoul, Korea",
      "pages": "1301-1305",
      "type": "conference",
      "doi": "10.1109/icassp48485.2024.10446791",
      "short": "A Hybrid Deep-Online Learning Based Me",
      "publisher": "https://doi.org/10.1109/icassp48485.2024.10446791",
      "ieee": "https://ieeexplore.ieee.org/document/10446791",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Ficassp48485.2024.10446791",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "qu-930588f45d",
      "title": "Automotive acoustic channel equalization method using convex optimization in modal domain",
      "authors": [
        "Yufan Qian",
        "Tianshu Qu",
        "Wei Tang",
        "Shiyu Chen",
        "Weihua Shen",
        "Xiang Guo",
        "Hua Chai"
      ],
      "year": 2024,
      "venue": "the AES 156th Convention",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/automotive-acoustic-channel-equalization-method-using-convex-optimization",
      "sourceIndex": 24,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/automotive-acoustic-channel-equalization-method-using-convex-optimization"
      ],
      "category": "rendering",
      "location": "Madrid, Spain",
      "type": "conference",
      "number": "11696",
      "short": "Automotive acoustic channel equalizati"
    },
    {
      "id": "qu-5b9a330246",
      "title": "DOA-Informed Self-Supervised Learning Method for Sound Source Enhancement",
      "authors": [
        "Shan Gao",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2024,
      "venue": "the AES 156th Convention",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/doa-informed-self-supervised-learning-method-soundsource-enhancement",
      "sourceIndex": 25,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/doa-informed-self-supervised-learning-method-soundsource-enhancement"
      ],
      "category": "separation",
      "location": "Madrid, Spain",
      "type": "conference",
      "number": "10683",
      "short": "DOA-Informed Self-Supervised Learning "
    },
    {
      "id": "qu-a296b2aaa3",
      "title": "Exploiting Motion Information in Sound Source Localization and Tracking",
      "authors": [
        "Donghang Wu",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2024,
      "venue": "the AES 156th Convention",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/exploiting-motion-information-sound-source-localizationand-tracking",
      "sourceIndex": 26,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/exploiting-motion-information-sound-source-localizationand-tracking"
      ],
      "category": "separation",
      "location": "Madrid, Spain",
      "type": "conference",
      "number": "10687",
      "short": "Exploiting Motion Information in Sound"
    },
    {
      "id": "qu-730d8b7bad",
      "title": "A Hybrid Time and Time-frequency Domain Implicit Neural Representation for Acoustic Fields",
      "authors": [
        "Zhongshu Ge",
        "Liang Li",
        "Tianshu Qu"
      ],
      "year": 2024,
      "venue": "the AES 156th Convention",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/hybrid-time-and-time-frequency-domain-implicit-neuralrepresentation-acoustic",
      "sourceIndex": 27,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/hybrid-time-and-time-frequency-domain-implicit-neuralrepresentation-acoustic"
      ],
      "category": "perception",
      "location": "Madrid, Spain",
      "type": "conference",
      "number": "Express paper 196",
      "short": "A Hybrid Time and Time-frequency Domai"
    },
    {
      "id": "qu-60b2c39ccf",
      "title": "Spatial Covariant Matrix based Learning for DOA Estimation in Spherical Harmonics Domain",
      "authors": [
        "Zeyu Yuan",
        "Shan Gao",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2024,
      "venue": "the AES 156th Convention",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/spatial-covariant-matrix-based-learning-doa-estimationin-spherical-harmonics",
      "sourceIndex": 28,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/spatial-covariant-matrix-based-learning-doa-estimationin-spherical-harmonics"
      ],
      "category": "separation",
      "location": "Madrid, Spain",
      "type": "conference",
      "number": "10701",
      "short": "Spatial Covariant Matrix based Learnin"
    },
    {
      "id": "qu-ee153e0ffd",
      "title": "Sound Event Localization and Detection Based on Iterative Separation in Embedding Space",
      "authors": [
        "Zeyu Yuan",
        "Donghang Wu",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2023,
      "venue": "2023 6th International Conference on Information Communication and Signal Processing (ICICSP)",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/sound-event-localization-and-detection-based-iterative-separation-embedding",
      "sourceIndex": 32,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/sound-event-localization-and-detection-based-iterative-separation-embedding",
        "https://doi.org/10.1109/icicsp59554.2023.10390682",
        "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=WztllNMAAAAJ&pagesize=100&citation_for_view=WztllNMAAAAJ:35N4QoGY0k4C",
        "https://drive.usercontent.google.com/uc?id=1sP5QGuK8riaz6X--Z1bpinETv-EfpVqb&export=download",
        "https://drive.google.com/file/d/1sP5QGuK8riaz6X--Z1bpinETv-EfpVqb/view",
        "https://ieeexplore.ieee.org/document/10390682"
      ],
      "category": "separation",
      "location": "Xian, China",
      "pages": "455-459",
      "type": "conference",
      "doi": "10.1109/icicsp59554.2023.10390682",
      "short": "Sound Event Localization and Detection",
      "publisher": "https://doi.org/10.1109/icicsp59554.2023.10390682",
      "pdf": "https://drive.usercontent.google.com/uc?id=1sP5QGuK8riaz6X--Z1bpinETv-EfpVqb&export=download",
      "pdfSource": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=WztllNMAAAAJ&pagesize=100&citation_for_view=WztllNMAAAAJ:35N4QoGY0k4C",
      "pdfChecked": "2026-10-15",
      "ieee": "https://ieeexplore.ieee.org/document/10390682",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Ficicsp59554.2023.10390682",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "qu-43625d8865",
      "title": "Rendering Near-field Point Sound Sources Through an Iterative Weighted Crosstalk Cancellation Method",
      "authors": [
        "Zhongshu Ge",
        "Pei Tian",
        "Liang Li",
        "Tianshu Qu"
      ],
      "year": 2023,
      "venue": "Audio Engineering Society Convention 154",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/rendering-near-field-point-sound-sources-through-iterative-weighted-crosstalk",
      "sourceIndex": 33,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/rendering-near-field-point-sound-sources-through-iterative-weighted-crosstalk"
      ],
      "category": "rendering",
      "location": "Helsinki, Finland",
      "type": "conference",
      "number": "10649",
      "short": "Rendering Near-field Point Sound Sourc"
    },
    {
      "id": "qu-7e0d1cbfe2",
      "title": "TT-Net: Dual-Path Transformer Based Sound Field Translation in the Spherical Harmonic Domain",
      "authors": [
        "Yiwen Wang",
        "Zijian Lan",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2023,
      "venue": "ICASSP 2023 - 2023 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/tt-net-dual-path-transformer-based-sound-field-translation-spherical-harmonic",
      "sourceIndex": 34,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/tt-net-dual-path-transformer-based-sound-field-translation-spherical-harmonic",
        "https://doi.org/10.1109/icassp49357.2023.10094775",
        "https://arxiv.org/abs/2210.16849",
        "https://arxiv.org/pdf/2210.16849",
        "https://ieeexplore.ieee.org/document/10094775"
      ],
      "category": "encoding",
      "location": "Rhodes Island, Greece",
      "pages": "1-5",
      "type": "conference",
      "doi": "10.1109/icassp49357.2023.10094775",
      "short": "TT-Net",
      "publisher": "https://doi.org/10.1109/icassp49357.2023.10094775",
      "pdf": "https://arxiv.org/pdf/2210.16849",
      "pdfChecked": "2026-10-15",
      "pdfSource": "https://arxiv.org/abs/2210.16849",
      "arxiv": "2210.16849",
      "ieee": "https://ieeexplore.ieee.org/document/10094775",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Ficassp49357.2023.10094775",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "qu-08f982abd6",
      "title": "A Physical Model-Based Self-Supervised Learning Method for Signal Enhancement Under Reverberant Environment",
      "authors": [
        "Shan Gao",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2023,
      "venue": "IEEE/ACM Transactions on Audio, Speech, and Language Processing",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/physical-model-based-self-supervised-learning-method-signal-enhancement-und-0",
      "sourceIndex": 38,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/physical-model-based-self-supervised-learning-method-signal-enhancement-und-0",
        "https://doi.org/10.1109/taslp.2023.3277246",
        "https://ieeexplore.ieee.org/document/10129800"
      ],
      "category": "separation",
      "volume": "31",
      "pages": "2100-2110",
      "type": "journal",
      "doi": "10.1109/taslp.2023.3277246",
      "short": "A Physical Model-Based Self-Supervised",
      "publisher": "https://doi.org/10.1109/taslp.2023.3277246",
      "ieee": "https://ieeexplore.ieee.org/document/10129800",
      "ieeeSource": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=WztllNMAAAAJ&pagesize=100&citation_for_view=WztllNMAAAAJ:RGFaLdJalmkC",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "qu-08546468ea",
      "title": "Higher order ambisonics compression method based on autoencoder",
      "authors": [
        "Tianshu Qu",
        "Jiahao Xu",
        "Zeyu Yuan",
        "Xihong Wu"
      ],
      "year": 2022,
      "venue": "Audio Engineering Society Convention 153",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/higher-order-ambisonics-compression-method-based-onautoencoder",
      "sourceIndex": 39,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/higher-order-ambisonics-compression-method-based-onautoencoder"
      ],
      "category": "encoding",
      "location": "online",
      "type": "conference",
      "number": "Express paper 9",
      "publisher": "https://www.aes.org/e-lib/browse.cfm?elib=21943",
      "short": "Higher order ambisonics compression me"
    },
    {
      "id": "qu-f5dd520fe7",
      "title": "Localization of Direct Source and Early Reflections Using HOA Processing and DNN Model",
      "authors": [
        "Shan Gao",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2022,
      "venue": "Audio Engineering Society Convention 152",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/localization-direct-source-and-early-reflections-using-hoa-processing-and-d-0",
      "sourceIndex": 40,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/localization-direct-source-and-early-reflections-using-hoa-processing-and-d-0"
      ],
      "category": "separation",
      "type": "conference",
      "number": "10560",
      "publisher": "http://www.aes.org/e-lib/browse.cfm?elib=21673",
      "short": "Localization of Direct Source and Earl"
    },
    {
      "id": "qu-d8adffae31",
      "title": "UP-WGAN: Upscaling Ambisonic Sound Scenes Using Wasserstein Generative Adversarial Networks",
      "authors": [
        "Yiwen Wang",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2022,
      "venue": "Audio Engineering Society Convention 152",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/wgan-upscaling-ambisonic-sound-scenes-using-wasserstein-generative",
      "sourceIndex": 41,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/wgan-upscaling-ambisonic-sound-scenes-using-wasserstein-generative"
      ],
      "category": "encoding",
      "type": "conference",
      "number": "10577",
      "publisher": "http://www.aes.org/e-lib/browse.cfm?elib=21690",
      "short": "UP-WGAN"
    },
    {
      "id": "qu-23bd7f352d",
      "title": "Binaural processing deficit and cognitive impairment in Alzheimer's disease",
      "authors": [
        "Changming Wang",
        "Zhibin Wang",
        "Beijia Xie",
        "Xinrui Shi",
        "Pengcheng Yang",
        "Lei Liu",
        "Tianshu Qu",
        "Qi Qin",
        "Yi Xing",
        "Wei Zhu",
        "Stefan J. Teipel",
        "Jianping Jia",
        "Guoguang Zhao",
        "Liang Li",
        "Yi Tang"
      ],
      "year": 2022,
      "venue": "Alzheimer's & Dementia",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/binaural-processing-deficit-and-cognitive-impairment-alzheimers-disease",
      "sourceIndex": 42,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/binaural-processing-deficit-and-cognitive-impairment-alzheimers-disease",
        "https://doi.org/10.1002/alz.12464",
        "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=WztllNMAAAAJ&pagesize=100&citation_for_view=WztllNMAAAAJ:maZDTaKrznsC",
        "https://www.researchgate.net/profile/Lei-Liu-143/publication/354860172_Binaural_processing_deficit_and_cognitive_impairment_in_Alzheimer%27s_disease/links/6151aa52d2ebba7be74e843e/Binaural-processing-deficit-and-cognitive-impairment-in-Alzheimers-disease.pdf"
      ],
      "category": "perception",
      "volume": "18",
      "issue": "6",
      "pages": "1085-1099",
      "type": "journal",
      "doi": "10.1002/alz.12464",
      "short": "Binaural processing deficit and cognit",
      "publisher": "https://doi.org/10.1002/alz.12464",
      "pdf": "https://www.researchgate.net/profile/Lei-Liu-143/publication/354860172_Binaural_processing_deficit_and_cognitive_impairment_in_Alzheimer%27s_disease/links/6151aa52d2ebba7be74e843e/Binaural-processing-deficit-and-cognitive-impairment-in-Alzheimers-disease.pdf",
      "pdfSource": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=WztllNMAAAAJ&pagesize=100&citation_for_view=WztllNMAAAAJ:maZDTaKrznsC",
      "pdfChecked": "2026-10-15",
      "pdfHost": "ResearchGate"
    },
    {
      "id": "qu-353d5ce740",
      "title": "A Multi-channel Speech Separation System for Unknown Number of Multiple Speakers",
      "authors": [
        "Chao Peng",
        "Yiwen Wang",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2022,
      "venue": "2022 5th International Conference on Information Communication and Signal Processing (ICICSP)",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/multi-channel-speech-separation-system-unknown-number-multiple-speakers",
      "sourceIndex": 43,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/multi-channel-speech-separation-system-unknown-number-multiple-speakers",
        "https://doi.org/10.1109/icicsp55539.2022.10050619",
        "https://ieeexplore.ieee.org/document/10050619"
      ],
      "category": "perception",
      "location": "Shenzhen, China",
      "type": "conference",
      "doi": "10.1109/icicsp55539.2022.10050619",
      "pages": "158-162",
      "short": "A Multi-channel Speech Separation Syst",
      "publisher": "https://doi.org/10.1109/icicsp55539.2022.10050619",
      "ieee": "https://ieeexplore.ieee.org/document/10050619",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Ficicsp55539.2022.10050619",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "qu-0b6c80e0a5",
      "title": "Sparse DNN Model for Frequency Expanding of Higher Order Ambisonics Encoding Process",
      "authors": [
        "Shan Gao",
        "Jing Lin",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2022,
      "venue": "IEEE/ACM Transactions on Audio, Speech, and Language Processing",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/sparse-dnn-model-frequency-expanding-higher-order-ambisonics-encoding-process",
      "sourceIndex": 47,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/sparse-dnn-model-frequency-expanding-higher-order-ambisonics-encoding-process",
        "https://doi.org/10.1109/taslp.2022.3153266",
        "https://www.researchgate.net/publication/358837416_Sparse_DNN_model_for_Frequency_Expanding_of_Higher_Order_Ambisonics_Encoding_Process",
        "https://www.researchgate.net/profile/Tianshu-Qu/publication/358837416_Sparse_DNN_model_for_Frequency_Expanding_of_Higher_Order_Ambisonics_Encoding_Process/links/6406fb665749505945708eb1/Sparse-DNN-Model-for-Frequency-Expanding-of-Higher-Order-Ambisonics-Encoding-Process.pdf",
        "https://ieeexplore.ieee.org/document/9721123"
      ],
      "category": "encoding",
      "volume": "30",
      "pages": "1124-1135",
      "type": "journal",
      "publisher": "https://doi.org/10.1109/taslp.2022.3153266",
      "doi": "10.1109/taslp.2022.3153266",
      "short": "Sparse DNN Model for Frequency Expandi",
      "pdf": "https://www.researchgate.net/profile/Tianshu-Qu/publication/358837416_Sparse_DNN_model_for_Frequency_Expanding_of_Higher_Order_Ambisonics_Encoding_Process/links/6406fb665749505945708eb1/Sparse-DNN-Model-for-Frequency-Expanding-of-Higher-Order-Ambisonics-Encoding-Process.pdf",
      "pdfSource": "https://www.researchgate.net/publication/358837416_Sparse_DNN_model_for_Frequency_Expanding_of_Higher_Order_Ambisonics_Encoding_Process",
      "pdfChecked": "2026-10-15",
      "pdfHost": "ResearchGate",
      "ieee": "https://ieeexplore.ieee.org/document/9721123",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Ftaslp.2022.3153266",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "doi-26d0a33d6f",
      "year": 2022,
      "title": "Differences in auditory associative memory between younger adults and older adults",
      "authors": [
        "Zhemeng Wu",
        "Xiaohan Bao",
        "Yu Ding",
        "Yayue Gao",
        "Changxin Zhang",
        "Tianshu Qu",
        "Liang Li"
      ],
      "type": "journal",
      "venue": "Aging, Neuropsychology, and Cognition",
      "source": "https://doi.org/10.1080/13825585.2021.1932714",
      "references": [
        "https://doi.org/10.1080/13825585.2021.1932714",
        "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=WztllNMAAAAJ&pagesize=100&citation_for_view=WztllNMAAAAJ:k_IJM867U9cC",
        "https://www.researchgate.net/profile/Zhemeng-Wu/publication/352111661_Differences_in_auditory_associative_memory_between_younger_adults_and_older_adults/links/60c13d4f299bf1949f447017/Differences-in-auditory-associative-memory-between-younger-adults-and-older-adults.pdf"
      ],
      "category": "perception",
      "doi": "10.1080/13825585.2021.1932714",
      "volume": "29",
      "issue": "5",
      "pages": "882-902",
      "short": "Differences in auditory associative me",
      "publisher": "https://doi.org/10.1080/13825585.2021.1932714",
      "pdf": "https://www.researchgate.net/profile/Zhemeng-Wu/publication/352111661_Differences_in_auditory_associative_memory_between_younger_adults_and_older_adults/links/60c13d4f299bf1949f447017/Differences-in-auditory-associative-memory-between-younger-adults-and-older-adults.pdf",
      "pdfSource": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=WztllNMAAAAJ&pagesize=100&citation_for_view=WztllNMAAAAJ:k_IJM867U9cC",
      "pdfChecked": "2026-10-15",
      "pdfHost": "ResearchGate"
    },
    {
      "id": "arxiv-2207.10478",
      "title": "Room geometry blind inference based on the localization of real sound source and first order reflections",
      "authors": [
        "Shan Gao",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2022,
      "venue": "arXiv",
      "arxiv": "2207.10478",
      "type": "preprint",
      "category": "separation",
      "source": "https://arxiv.org/abs/2207.10478",
      "references": [
        "https://arxiv.org/abs/2207.10478"
      ],
      "short": "Room geometry blind inference based on"
    },
    {
      "id": "qu-48b7b41320",
      "title": "Higher order ambisonics compression method based on independent component analysis",
      "authors": [
        "Jiahao Xu",
        "Yadong Niu",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2021,
      "venue": "Audio Engineering Society Convention 150",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/higher-order-ambisonics-compression-method-based-independent-component",
      "sourceIndex": 48,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/higher-order-ambisonics-compression-method-based-independent-component"
      ],
      "category": "encoding",
      "type": "conference",
      "number": "10456",
      "short": "Higher order ambisonics compression me"
    },
    {
      "id": "qu-3a6ae81fd4",
      "title": "Individualized HRTF-based Binaural Renderer for Higher-Order Ambisonics",
      "authors": [
        "Mengfan Zhang",
        "Tiansyi Guan",
        "Lianwu Chen",
        "Tianxiao Fu",
        "Dan Su",
        "Tianshu Qu"
      ],
      "year": 2021,
      "venue": "Audio Engineering Society Convention 150",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/individualized-hrtf-based-binaural-renderer-higher-order-ambisonics",
      "sourceIndex": 49,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/individualized-hrtf-based-binaural-renderer-higher-order-ambisonics",
        "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=WztllNMAAAAJ&pagesize=100&citation_for_view=WztllNMAAAAJ:TFP_iSt0sucC",
        "https://ccrma.stanford.edu/~zhangmf/paper/AES2021.pdf"
      ],
      "category": "rendering",
      "type": "conference",
      "number": "10454",
      "short": "Individualized HRTF-based Binaural Ren",
      "pdf": "https://ccrma.stanford.edu/~zhangmf/paper/AES2021.pdf",
      "pdfSource": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=WztllNMAAAAJ&pagesize=100&citation_for_view=WztllNMAAAAJ:TFP_iSt0sucC",
      "pdfChecked": "2026-10-15"
    },
    {
      "id": "qu-ae48a7de0f",
      "title": "Early Reflections Based Speech Enhancement",
      "authors": [
        "Jianfei Chen",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2021,
      "venue": "2021 4th International Conference on Information Communication and Signal Processing (ICICSP)",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/early-reflections-based-speech-enhancement",
      "sourceIndex": 50,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/early-reflections-based-speech-enhancement",
        "https://doi.org/10.1109/icicsp54369.2021.9611883",
        "https://www.researchgate.net/publication/356545691_Early_Reflections_Based_Speech_Enhancement",
        "https://www.researchgate.net/profile/Tianshu-Qu/publication/356545691_Early_Reflections_Based_Speech_Enhancement/links/6406fbc70cf1030a567d550a/Early-Reflections-Based-Speech-Enhancement.pdf",
        "https://ieeexplore.ieee.org/document/9611883"
      ],
      "category": "separation",
      "location": "ShangHai, China",
      "pages": "183-187",
      "type": "conference",
      "doi": "10.1109/icicsp54369.2021.9611883",
      "short": "Early Reflections Based Speech Enhance",
      "publisher": "https://doi.org/10.1109/icicsp54369.2021.9611883",
      "pdf": "https://www.researchgate.net/profile/Tianshu-Qu/publication/356545691_Early_Reflections_Based_Speech_Enhancement/links/6406fbc70cf1030a567d550a/Early-Reflections-Based-Speech-Enhancement.pdf",
      "pdfSource": "https://www.researchgate.net/publication/356545691_Early_Reflections_Based_Speech_Enhancement",
      "pdfChecked": "2026-10-15",
      "pdfHost": "ResearchGate",
      "ieee": "https://ieeexplore.ieee.org/document/9611883",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Ficicsp54369.2021.9611883",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "qu-e781f20784",
      "title": "Partially Matching Projection Decoding Method Evaluation Under Different Playback Conditions",
      "authors": [
        "Zhongshu Ge",
        "Liang Li",
        "Tianshu Qu"
      ],
      "year": 2021,
      "venue": "IEEE/ACM Transactions on Audio, Speech, and Language Processing",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/partially-matching-projection-decoding-method-evaluation-under-different",
      "sourceIndex": 51,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/partially-matching-projection-decoding-method-evaluation-under-different",
        "https://doi.org/10.1109/taslp.2021.3068002",
        "https://ieeexplore.ieee.org/document/9384223"
      ],
      "category": "encoding",
      "volume": "29",
      "pages": "1411-1423",
      "type": "journal",
      "doi": "10.1109/taslp.2021.3068002",
      "short": "Partially Matching Projection Decoding",
      "publisher": "https://doi.org/10.1109/taslp.2021.3068002",
      "ieee": "https://ieeexplore.ieee.org/document/9384223",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Ftaslp.2021.3068002",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "qu-850644a50c",
      "title": "Sensitivity to a Break in Interaural Correlation in Frequency-Gliding Noises",
      "authors": [
        "Langchen Fan",
        "Lingzhi Kong",
        "Liang Li",
        "Tianshu Qu"
      ],
      "year": 2021,
      "venue": "Frontiers in Psychology",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/sensitivity-break-interaural-correlation-frequency-gliding-noises",
      "sourceIndex": 52,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/sensitivity-break-interaural-correlation-frequency-gliding-noises",
        "https://doi.org/10.3389/fpsyg.2021.692785",
        "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2021.692785/full",
        "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2021.692785/pdf"
      ],
      "category": "perception",
      "type": "journal",
      "doi": "10.3389/fpsyg.2021.692785",
      "volume": "12",
      "short": "Sensitivity to a Break in Interaural C",
      "publisher": "https://doi.org/10.3389/fpsyg.2021.692785",
      "pdf": "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2021.692785/pdf",
      "pdfChecked": "2026-10-15",
      "pdfSource": "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2021.692785/full"
    },
    {
      "id": "arxiv-2110.04850",
      "title": "Direct source and early reflections localization using deep deconvolution network under reverberant environment",
      "authors": [
        "Shan Gao",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2021,
      "venue": "arXiv",
      "arxiv": "2110.04850",
      "type": "preprint",
      "category": "separation",
      "source": "https://arxiv.org/abs/2110.04850",
      "references": [
        "https://arxiv.org/abs/2110.04850"
      ],
      "short": "Direct source and early reflections lo"
    },
    {
      "id": "qu-f628ebae2b",
      "title": "Deep-Modal: Real-Time Impact Sound Synthesis for Arbitrary Shapes",
      "authors": [
        "Xutong Jin",
        "Sheng Li",
        "Tianshu Qu",
        "Dinesh Manocha",
        "Guoping Wang"
      ],
      "year": 2020,
      "venue": "Proceedings of the 28th ACM International Conference on Multimedia",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/deep-modal-real-time-impact-sound-synthesis-arbitrary-shapes",
      "sourceIndex": 55,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/deep-modal-real-time-impact-sound-synthesis-arbitrary-shapes",
        "https://doi.org/10.1145/3394171.3413572",
        "https://hellojxt.github.io/DeepModal/",
        "https://hellojxt.github.io/DeepModal/ACMMM20_ModalSound.pdf"
      ],
      "category": "generation",
      "pages": "1171-1179",
      "type": "conference",
      "doi": "10.1145/3394171.3413572",
      "short": "Deep-Modal",
      "publisher": "https://doi.org/10.1145/3394171.3413572",
      "pdf": "https://hellojxt.github.io/DeepModal/ACMMM20_ModalSound.pdf",
      "pdfChecked": "2026-10-15",
      "pdfSource": "https://hellojxt.github.io/DeepModal/",
      "code": "https://github.com/hellojxt/NeuralSound",
      "project": "https://hellojxt.github.io/DeepModal/"
    },
    {
      "id": "qu-a45184b0e4",
      "title": "Anti Spatial Aliasing HOA Encoding Method based on Aliasing Projection Matrix",
      "authors": [
        "Jing Lin",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2020,
      "venue": "2020 IEEE 3rd International Conference on Information Communication and Signal Processing (ICICSP)",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/anti-spatial-aliasing-hoa-encoding-method-based-aliasing-projection-matrix",
      "sourceIndex": 56,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/anti-spatial-aliasing-hoa-encoding-method-based-aliasing-projection-matrix",
        "https://doi.org/10.1109/icicsp50920.2020.9232079",
        "https://ieeexplore.ieee.org/document/9232079"
      ],
      "category": "encoding",
      "pages": "321-325",
      "type": "conference",
      "doi": "10.1109/icicsp50920.2020.9232079",
      "short": "Anti Spatial Aliasing HOA Encoding Met",
      "publisher": "https://doi.org/10.1109/icicsp50920.2020.9232079",
      "ieee": "https://ieeexplore.ieee.org/document/9232079",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Ficicsp50920.2020.9232079",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "qu-0f2b676bda",
      "title": "A Time-domain Unsupervised Learning Based Sound Source Localization Method",
      "authors": [
        "Yankun Huang",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2020,
      "venue": "2020 IEEE 3rd International Conference on Information Communication and Signal Processing (ICICSP)",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/time-domain-unsupervised-learning-based-sound-source-localization-method",
      "sourceIndex": 57,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/time-domain-unsupervised-learning-based-sound-source-localization-method",
        "https://doi.org/10.1109/icicsp50920.2020.9232117",
        "https://ieeexplore.ieee.org/document/9232117"
      ],
      "category": "separation",
      "pages": "26-32",
      "type": "conference",
      "doi": "10.1109/icicsp50920.2020.9232117",
      "short": "A Time-domain Unsupervised Learning Ba",
      "publisher": "https://doi.org/10.1109/icicsp50920.2020.9232117",
      "ieee": "https://ieeexplore.ieee.org/document/9232117",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Ficicsp50920.2020.9232117",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "qu-c60937e73c",
      "title": "Competing Speaker Count Estimation on the Fusion of the Spectral and Spatial Embedding Space",
      "authors": [
        "Chao Peng",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2020,
      "venue": "Interspeech 2020",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/competing-speaker-count-estimation-fusion-spectral-and-spatial-embedding",
      "sourceIndex": 58,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/competing-speaker-count-estimation-fusion-spectral-and-spatial-embedding",
        "https://doi.org/10.21437/interspeech.2020-1781",
        "https://www.isca-archive.org/interspeech_2020/peng20_interspeech.html",
        "https://www.isca-archive.org/interspeech_2020/peng20_interspeech.pdf"
      ],
      "category": "perception",
      "location": "Shanghai China",
      "pages": "3077-3081",
      "type": "conference",
      "doi": "10.21437/interspeech.2020-1781",
      "short": "Competing Speaker Count Estimation on ",
      "publisher": "https://doi.org/10.21437/interspeech.2020-1781",
      "pdf": "https://www.isca-archive.org/interspeech_2020/peng20_interspeech.pdf",
      "pdfChecked": "2026-10-15",
      "pdfSource": "https://www.isca-archive.org/interspeech_2020/peng20_interspeech.html"
    },
    {
      "id": "qu-815d58c363",
      "title": "The Ambisonic Partially Matching Projection Decoding Method for Near-field Sound Sources",
      "authors": [
        "Zhongshu Ge",
        "Liang Li",
        "Tianshu Qu"
      ],
      "year": 2020,
      "venue": "148 AES Convension",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/ambisonic-partially-matching-projection-decoding-method-near-field-sound",
      "sourceIndex": 59,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/ambisonic-partially-matching-projection-decoding-method-near-field-sound"
      ],
      "category": "encoding",
      "location": "Vienna, Austria",
      "type": "conference",
      "number": "10372",
      "short": "The Ambisonic Partially Matching Proje"
    },
    {
      "id": "qu-844323e144",
      "title": "Direction of arrival estimation based on transfer function learning using autoencoder network",
      "authors": [
        "Yiwen Wang",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2020,
      "venue": "148 AES Convention",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/direction-arrival-estimation-based-transfer-function-learning-using",
      "sourceIndex": 60,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/direction-arrival-estimation-based-transfer-function-learning-using"
      ],
      "category": "perception",
      "location": "Vienna, Austria",
      "type": "conference",
      "number": "10370",
      "short": "Direction of arrival estimation based "
    },
    {
      "id": "qu-1e46a3032b",
      "title": "Individual Distance-Dependent HRTFS Modeling Through A Few Anthropometric Measurements",
      "authors": [
        "Mengfan Zhang",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2020,
      "venue": "ICASSP 2020 - 2020 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/individual-distance-dependent-hrtfs-modeling-through-few-anthropometric",
      "sourceIndex": 61,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/individual-distance-dependent-hrtfs-modeling-through-few-anthropometric",
        "https://doi.org/10.1109/icassp40776.2020.9052928",
        "https://www.researchgate.net/publication/341083417_Individual_Distance-Dependent_HRTFS_Modeling_Through_A_Few_Anthropometric_Measurements",
        "https://www.researchgate.net/profile/Tianshu-Qu/publication/341083417_Individual_Distance-Dependent_HRTFS_Modeling_Through_A_Few_Anthropometric_Measurements/links/5f05d2b8299bf188160a5c4d/Individual-Distance-Dependent-HRTFS-Modeling-Through-A-Few-Anthropometric-Measurements.pdf",
        "https://ieeexplore.ieee.org/document/9052928"
      ],
      "category": "rendering",
      "location": "Barcelona, Spain",
      "pages": "401-405",
      "type": "conference",
      "doi": "10.1109/icassp40776.2020.9052928",
      "short": "Individual Distance-Dependent HRTFS Mo",
      "publisher": "https://doi.org/10.1109/icassp40776.2020.9052928",
      "pdf": "https://www.researchgate.net/profile/Tianshu-Qu/publication/341083417_Individual_Distance-Dependent_HRTFS_Modeling_Through_A_Few_Anthropometric_Measurements/links/5f05d2b8299bf188160a5c4d/Individual-Distance-Dependent-HRTFS-Modeling-Through-A-Few-Anthropometric-Measurements.pdf",
      "pdfSource": "https://www.researchgate.net/publication/341083417_Individual_Distance-Dependent_HRTFS_Modeling_Through_A_Few_Anthropometric_Measurements",
      "pdfChecked": "2026-10-15",
      "pdfHost": "ResearchGate",
      "ieee": "https://ieeexplore.ieee.org/document/9052928",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Ficassp40776.2020.9052928",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "qu-30fa2c4be9",
      "title": "Modeling of Individual HRTFs Based on Spatial Principal Component Analysis",
      "authors": [
        "Mengfan Zhang",
        "Zhongshu Ge",
        "Tiejun Liu",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2020,
      "venue": "IEEE/ACM Transactions on Audio, Speech, and Language Processing",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/modeling-individual-hrtfs-based-spatial-principal-component-analysis",
      "sourceIndex": 64,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/modeling-individual-hrtfs-based-spatial-principal-component-analysis",
        "https://doi.org/10.1109/taslp.2020.2967539",
        "https://arxiv.org/abs/1910.09484",
        "https://arxiv.org/pdf/1910.09484",
        "https://ieeexplore.ieee.org/document/8962233"
      ],
      "category": "rendering",
      "volume": "28",
      "pages": "785-797",
      "type": "journal",
      "doi": "10.1109/taslp.2020.2967539",
      "short": "Modeling of Individual HRTFs Based on ",
      "publisher": "https://doi.org/10.1109/taslp.2020.2967539",
      "pdf": "https://arxiv.org/pdf/1910.09484",
      "pdfChecked": "2026-10-15",
      "pdfSource": "https://arxiv.org/abs/1910.09484",
      "arxiv": "1910.09484",
      "ieee": "https://ieeexplore.ieee.org/document/8962233",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Ftaslp.2020.2967539",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "aes-multitask-2020",
      "short": "Multi-task localization",
      "title": "Multi-Task Based Sound Localization Model",
      "authors": [
        "Tao Song",
        "Tianshu Qu",
        "Jing Chen"
      ],
      "year": 2020,
      "venue": "AES 148th Convention",
      "number": "10366",
      "type": "conference",
      "category": "separation",
      "publisher": "https://www.aes.org/events/148/148thWrapUp.pdf",
      "source": "https://www.aes.org/events/148/148thWrapUp.pdf",
      "references": [
        "https://www.aes.org/events/148/148thWrapUp.pdf"
      ]
    },
    {
      "id": "qu-e163657126",
      "title": "Eigen Beam Based Sound Source Localization Algorithms Evaluation on a Non-Spherical Microphone Array",
      "authors": [
        "Shan Gao",
        "Rui Liu",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2019,
      "venue": "2019 IEEE 2nd International Conference on Information Communication and Signal Processing (ICICSP)",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/eigen-beam-based-sound-source-localization-algorithms-evaluation-non",
      "sourceIndex": 69,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/eigen-beam-based-sound-source-localization-algorithms-evaluation-non",
        "https://doi.org/10.1109/icicsp48821.2019.8958569",
        "https://ieeexplore.ieee.org/document/8958569"
      ],
      "category": "separation",
      "location": "Weihai, China",
      "pages": "185-189",
      "type": "conference",
      "doi": "10.1109/icicsp48821.2019.8958569",
      "short": "Eigen Beam Based Sound Source Localiza",
      "publisher": "https://doi.org/10.1109/icicsp48821.2019.8958569",
      "ieee": "https://ieeexplore.ieee.org/document/8958569",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Ficicsp48821.2019.8958569",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "qu-fde7fb851d",
      "title": "A Time-domain End-to-End Method for Sound Source Localization Using Multi-Task Learning",
      "authors": [
        "Yankun Huang",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2019,
      "venue": "2019 IEEE 2nd International Conference on Information Communication and Signal Processing (ICICSP)",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/time-domain-end-end-method-sound-source-localization-using-multi-task",
      "sourceIndex": 70,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/time-domain-end-end-method-sound-source-localization-using-multi-task",
        "https://doi.org/10.1109/icicsp48821.2019.8958496",
        "https://ieeexplore.ieee.org/document/8958496"
      ],
      "category": "separation",
      "location": "Weihai, China",
      "pages": "52-56",
      "type": "conference",
      "doi": "10.1109/icicsp48821.2019.8958496",
      "short": "A Time-domain End-to-End Method for So",
      "publisher": "https://doi.org/10.1109/icicsp48821.2019.8958496",
      "ieee": "https://ieeexplore.ieee.org/document/8958496",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Ficicsp48821.2019.8958496",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "qu-ef735544c9",
      "title": "Distance-dependent Modeling of Head-related Transfer Functions",
      "authors": [
        "Mengfan Zhang",
        "Yue Qiao",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2019,
      "venue": "ICASSP 2019 - 2019 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/distance-dependent-modeling-head-related-transfer-functions",
      "sourceIndex": 71,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/distance-dependent-modeling-head-related-transfer-functions",
        "https://doi.org/10.1109/icassp.2019.8683756",
        "https://hpc.pku.edu.cn/achievement_3.html",
        "https://hpc.pku.edu.cn/docs/pdf/a20200915276.pdf",
        "https://ieeexplore.ieee.org/document/8683756"
      ],
      "category": "rendering",
      "location": "Brighton, United Kingdom",
      "pages": "276-280",
      "type": "conference",
      "doi": "10.1109/icassp.2019.8683756",
      "short": "Distance-dependent Modeling of Head-re",
      "publisher": "https://doi.org/10.1109/icassp.2019.8683756",
      "pdf": "https://hpc.pku.edu.cn/docs/pdf/a20200915276.pdf",
      "pdfSource": "https://hpc.pku.edu.cn/achievement_3.html",
      "pdfChecked": "2026-10-15",
      "ieee": "https://ieeexplore.ieee.org/document/8683756",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Ficassp.2019.8683756",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "qu-5537a9056a",
      "title": "Improvements to the Matching Projection Decoding Method for Ambisonic System with Irregular Loudspeaker Layouts",
      "authors": [
        "Zhongshu Ge",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2019,
      "venue": "ICASSP 2019 - 2019 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/improvements-matching-projection-decoding-method-ambisonic-system-irregular",
      "sourceIndex": 72,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/improvements-matching-projection-decoding-method-ambisonic-system-irregular",
        "https://doi.org/10.1109/icassp.2019.8683105",
        "https://hpc.pku.edu.cn/achievement_3.html",
        "https://hpc.pku.edu.cn/docs/pdf/a20200915275.pdf",
        "https://ieeexplore.ieee.org/document/8683105"
      ],
      "category": "rendering",
      "location": "Brighton, United Kingdom",
      "pages": "121-125",
      "type": "conference",
      "doi": "10.1109/icassp.2019.8683105",
      "short": "Improvements to the Matching Projectio",
      "publisher": "https://doi.org/10.1109/icassp.2019.8683105",
      "pdf": "https://hpc.pku.edu.cn/docs/pdf/a20200915275.pdf",
      "pdfSource": "https://hpc.pku.edu.cn/achievement_3.html",
      "pdfChecked": "2026-10-15",
      "ieee": "https://ieeexplore.ieee.org/document/8683105",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Ficassp.2019.8683105",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "qu-49026351f0",
      "title": "Sparse Autoencoder Based Multiple Audio Objects Coding Method",
      "authors": [
        "Shuang Zhang",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2019,
      "venue": "146 AES Convention",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/sparse-autoencoder-based-multiple-audio-objects-coding-method",
      "sourceIndex": 73,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/sparse-autoencoder-based-multiple-audio-objects-coding-method"
      ],
      "category": "encoding",
      "location": "Dublin, Ireland",
      "type": "conference",
      "number": "10172",
      "publisher": "http://www.aes.org/e-lib/browse.cfm?elib=20305",
      "short": "Sparse Autoencoder Based Multiple Audi"
    },
    {
      "id": "qu-e7526c5e65",
      "title": "A Generative Adversarial Net-Based Bandwidth Extension Method for Audio Compression",
      "authors": [
        "Qingbo Huang",
        "Tiekun Liu",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2019,
      "venue": "Journal of the Audio Engineering Society",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/generative-adervasarial-net-based-bandwidth-extension-method-audio",
      "sourceIndex": 74,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/generative-adervasarial-net-based-bandwidth-extension-method-audio",
        "https://doi.org/10.17743/jaes.2019.0047",
        "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=WztllNMAAAAJ&pagesize=100&citation_for_view=WztllNMAAAAJ:-f6ydRqryjwC",
        "https://www.researchgate.net/profile/Tianshu-Qu/publication/338366378_A_Generative_Adversarial_Net-Based_Bandwidth_Extension_Method_for_Audio_Compression/links/5e3d4928458515072d8681f6/A-Generative-Adversarial-Net-Based-Bandwidth-Extension-Method-for-Audio-Compression.pdf",
        "https://www.researchgate.net/publication/338366378_A_Generative_Adversarial_Net-Based_Bandwidth_Extension_Method_for_Audio_Compression"
      ],
      "category": "generation",
      "volume": "67",
      "issue": "12",
      "pages": "986-993",
      "type": "journal",
      "doi": "10.17743/jaes.2019.0047",
      "short": "A Generative Adversarial Net-Based Ban",
      "publisher": "https://doi.org/10.17743/jaes.2019.0047",
      "pdf": "https://www.researchgate.net/profile/Tianshu-Qu/publication/338366378_A_Generative_Adversarial_Net-Based_Bandwidth_Extension_Method_for_Audio_Compression/links/5e3d4928458515072d8681f6/A-Generative-Adversarial-Net-Based-Bandwidth-Extension-Method-for-Audio-Compression.pdf",
      "pdfSource": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=WztllNMAAAAJ&pagesize=100&citation_for_view=WztllNMAAAAJ:-f6ydRqryjwC",
      "pdfChecked": "2026-10-15",
      "pdfHost": "ResearchGate"
    },
    {
      "id": "doi-8a6a054205",
      "year": 2019,
      "title": "Beamforming and Deep Models Integrated Multi-talker Speech Separation",
      "authors": [
        "Chao Peng",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "type": "conference",
      "venue": "2019 IEEE International Conference on Signal, Information and Data Processing (ICSIDP)",
      "source": "https://doi.org/10.1109/icsidp47821.2019.9173118",
      "references": [
        "https://doi.org/10.1109/icsidp47821.2019.9173118",
        "https://ieeexplore.ieee.org/document/9173118"
      ],
      "category": "perception",
      "doi": "10.1109/icsidp47821.2019.9173118",
      "pages": "1-4",
      "short": "Beamforming and Deep Models Integrated",
      "publisher": "https://doi.org/10.1109/icsidp47821.2019.9173118",
      "ieee": "https://ieeexplore.ieee.org/document/9173118",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Ficsidp47821.2019.9173118",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "qu-54d3a07f93",
      "title": "A Parametric Spatial Audio Coding Method Based on Convolutional Neural Networks",
      "authors": [
        "Qingbo Huang",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2018,
      "venue": "145 AES Convention",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/parametric-spatial-audio-coding-method-based-convolutional-neural-networks",
      "sourceIndex": 77,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/parametric-spatial-audio-coding-method-based-convolutional-neural-networks",
        "https://hpc.pku.edu.cn/achievement_3.html",
        "https://hpc.pku.edu.cn/docs/pdf/a20191230059.pdf"
      ],
      "category": "encoding",
      "location": "New York, USA",
      "type": "conference",
      "number": "10126",
      "publisher": "http://www.aes.org/tmpFiles/elib/20181106/19852.pdf",
      "short": "A Parametric Spatial Audio Coding Meth",
      "pdf": "https://hpc.pku.edu.cn/docs/pdf/a20191230059.pdf",
      "pdfSource": "https://hpc.pku.edu.cn/achievement_3.html",
      "pdfChecked": "2026-10-15"
    },
    {
      "id": "qu-8986ed3516",
      "title": "Subjective Evaluation of Virtual Room Auralization System Based on the Ambisonics Matching Projection Decoding Method",
      "authors": [
        "Zhongshu Ge",
        "Yue Qiao",
        "Shusen Wang",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2018,
      "venue": "145 AES Convention",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/subjective-evaluation-virtual-room-auralization-system-based-ambisonics",
      "sourceIndex": 78,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/subjective-evaluation-virtual-room-auralization-system-based-ambisonics",
        "https://hpc.pku.edu.cn/achievement_3.html",
        "https://hpc.pku.edu.cn/docs/pdf/a20191230060.pdf"
      ],
      "category": "rendering",
      "location": "New York, USA",
      "type": "conference",
      "number": "10124",
      "publisher": "http://www.aes.org/tmpFiles/elib/20181106/19850.pdf",
      "short": "Subjective Evaluation of Virtual Room ",
      "pdf": "https://hpc.pku.edu.cn/docs/pdf/a20191230060.pdf",
      "pdfSource": "https://hpc.pku.edu.cn/achievement_3.html",
      "pdfChecked": "2026-10-15"
    },
    {
      "id": "qu-6a02c189ff",
      "title": "Bandwidth Extension Method Based on Generative Adversarial Nets for Audio Compression.",
      "authors": [
        "Qingbo Huang",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2018,
      "venue": "144 AES Convention",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/bandwidth-extension-method-based-generative-adversarial-nets-audio",
      "sourceIndex": 79,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/bandwidth-extension-method-based-generative-adversarial-nets-audio",
        "https://hpc.pku.edu.cn/achievement_3.html",
        "https://hpc.pku.edu.cn/docs/pdf/a20191230057.pdf"
      ],
      "category": "generation",
      "location": "Milan, Italian",
      "type": "conference",
      "number": "9954",
      "publisher": "http://www.aes.org/tmpFiles/elib/20181106/19471.pdf",
      "short": "Bandwidth Extension Method Based on Ge",
      "pdf": "https://hpc.pku.edu.cn/docs/pdf/a20191230057.pdf",
      "pdfSource": "https://hpc.pku.edu.cn/achievement_3.html",
      "pdfChecked": "2026-10-15"
    },
    {
      "id": "qu-865b8ea05f",
      "title": "High order Ambisonics encoding method using differential microphone array",
      "authors": [
        "Shan Gao",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2018,
      "venue": "144 AES Convention",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/high-order-ambisonics-encoding-method-using-differential-microphone-array",
      "sourceIndex": 80,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/high-order-ambisonics-encoding-method-using-differential-microphone-array",
        "https://hpc.pku.edu.cn/achievement_3.html",
        "https://hpc.pku.edu.cn/docs/pdf/a20191230058.pdf"
      ],
      "category": "encoding",
      "location": "Milan Italian",
      "type": "conference",
      "number": "10020",
      "publisher": "http://www.aes.org/tmpFiles/elib/20181106/19852.pdf",
      "short": "High order Ambisonics encoding method ",
      "pdf": "https://hpc.pku.edu.cn/docs/pdf/a20191230058.pdf",
      "pdfSource": "https://hpc.pku.edu.cn/achievement_3.html",
      "pdfChecked": "2026-10-15"
    },
    {
      "id": "qu-b4d8151910",
      "title": "Matching Projection Decoding Method for Ambisonics System",
      "authors": [
        "Tianshu Qu",
        "Zhichao Huang",
        "Yue Qiao",
        "Xihong Wu"
      ],
      "year": 2018,
      "venue": "2018 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/matching-projection-decoding-method-ambisonics-system",
      "sourceIndex": 81,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/matching-projection-decoding-method-ambisonics-system",
        "https://doi.org/10.1109/icassp.2018.8461515",
        "https://hpc.pku.edu.cn/achievement_3.html",
        "https://hpc.pku.edu.cn/docs/pdf/a20191230056.pdf",
        "https://ieeexplore.ieee.org/document/8461515"
      ],
      "category": "encoding",
      "location": "Calgary, Alberta, Canada",
      "pages": "561-565",
      "type": "conference",
      "publisher": "https://doi.org/10.1109/icassp.2018.8461515",
      "doi": "10.1109/icassp.2018.8461515",
      "short": "Matching Projection Decoding Method fo",
      "pdf": "https://hpc.pku.edu.cn/docs/pdf/a20191230056.pdf",
      "pdfSource": "https://hpc.pku.edu.cn/achievement_3.html",
      "pdfChecked": "2026-10-15",
      "ieee": "https://ieeexplore.ieee.org/document/8461515",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Ficassp.2018.8461515",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "doi-e7acb833e4",
      "year": 2018,
      "title": "A Modified Frequency Weighted MUSIC Algorithm for Multiple Sound Sources Localization",
      "authors": [
        "Shan Gao",
        "Yankun Huang",
        "Tao Zhang",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "type": "conference",
      "venue": "2018 IEEE 23rd International Conference on Digital Signal Processing (DSP)",
      "source": "https://doi.org/10.1109/icdsp.2018.8631636",
      "references": [
        "https://doi.org/10.1109/icdsp.2018.8631636",
        "https://ieeexplore.ieee.org/document/8631636"
      ],
      "category": "separation",
      "doi": "10.1109/icdsp.2018.8631636",
      "pages": "1-4",
      "short": "A Modified Frequency Weighted MUSIC Al",
      "publisher": "https://doi.org/10.1109/icdsp.2018.8631636",
      "ieee": "https://ieeexplore.ieee.org/document/8631636",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Ficdsp.2018.8631636",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "doi-e69953940c",
      "year": 2018,
      "title": "DNN-based Sound Source Localization Method with Microphone Array",
      "authors": [
        "Yankun Huang",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "type": "conference",
      "venue": "DEStech Transactions on Computer Science and Engineering",
      "source": "https://doi.org/10.12783/dtcse/iece2018/26627",
      "references": [
        "https://doi.org/10.12783/dtcse/iece2018/26627"
      ],
      "category": "separation",
      "doi": "10.12783/dtcse/iece2018/26627",
      "issue": "iece",
      "short": "DNN-based Sound Source Localization Me",
      "publisher": "https://doi.org/10.12783/dtcse/iece2018/26627"
    },
    {
      "id": "doi-6df25cf567",
      "year": 2018,
      "title": "Emotionally conditioning the target-speech voice enhances recognition of the target speech under “cocktail-party” listening conditions",
      "authors": [
        "Lingxi Lu",
        "Xiaohan Bao",
        "Jing Chen",
        "Tianshu Qu",
        "Xihong Wu",
        "Liang Li"
      ],
      "type": "journal",
      "venue": "Attention, Perception, & Psychophysics",
      "source": "https://doi.org/10.3758/s13414-018-1489-8",
      "references": [
        "https://doi.org/10.3758/s13414-018-1489-8",
        "https://psy.pku.edu.cn/docs/20180528092607427014.pdf"
      ],
      "category": "perception",
      "doi": "10.3758/s13414-018-1489-8",
      "volume": "80",
      "issue": "4",
      "pages": "871-883",
      "short": "Emotionally conditioning the target-sp",
      "publisher": "https://doi.org/10.3758/s13414-018-1489-8",
      "pdf": "https://psy.pku.edu.cn/docs/20180528092607427014.pdf",
      "pdfSource": "https://doi.org/10.3758/s13414-018-1489-8",
      "pdfChecked": "2026-10-15"
    },
    {
      "id": "qu-05040ed63c",
      "title": "The Microphone Array Arrangement Method for High Order Ambisonics Recordings",
      "authors": [
        "Shan Gao",
        "Xihong Wu",
        "Tianshu Qu"
      ],
      "year": 2017,
      "venue": "Lecture Notes in Computer Science",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/microphone-array-arrangement-method-high-order-ambisonics-recordings",
      "sourceIndex": 86,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/microphone-array-arrangement-method-high-order-ambisonics-recordings",
        "https://doi.org/10.1007/978-3-319-67777-4_1"
      ],
      "category": "encoding",
      "volume": "10559",
      "location": "Dalian, China",
      "pages": "3-10",
      "type": "conference",
      "doi": "10.1007/978-3-319-67777-4_1",
      "short": "The Microphone Array Arrangement Metho",
      "publisher": "https://doi.org/10.1007/978-3-319-67777-4_1"
    },
    {
      "id": "qu-cfe97db055",
      "title": "Selective Attention Enhances Beta-Band Cortical Oscillation to Speech under “Cocktail-Party” Listening Conditions",
      "authors": [
        "Yayue Gao",
        "Qian Wang",
        "Yu Ding",
        "Changming Wang",
        "Haifeng Li",
        "Xihong Wu",
        "Tianshu Qu",
        "Liang Li"
      ],
      "year": 2017,
      "venue": "Frontiers in Human Neuroscience",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/selective-attention-enhances-beta-band-cortical-oscillation-speech-under",
      "sourceIndex": 88,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/selective-attention-enhances-beta-band-cortical-oscillation-speech-under",
        "https://doi.org/10.3389/fnhum.2017.00034",
        "https://www.frontiersin.org/journals/human-neuroscience/articles/10.3389/fnhum.2017.00034/pdf"
      ],
      "category": "perception",
      "volume": "11",
      "pages": "Artical 34",
      "type": "journal",
      "doi": "10.3389/fnhum.2017.00034",
      "short": "Selective Attention Enhances Beta-Band",
      "publisher": "https://doi.org/10.3389/fnhum.2017.00034",
      "pdf": "https://www.frontiersin.org/journals/human-neuroscience/articles/10.3389/fnhum.2017.00034/pdf",
      "pdfSource": "https://doi.org/10.3389/fnhum.2017.00034",
      "pdfChecked": "2026-10-15"
    },
    {
      "id": "qu-806e2e2aa9",
      "title": "An accurate decorrelation method for parametric stereo coding",
      "authors": [
        "Tianshu Qu",
        "Qingbo Huang",
        "Yichao Huang",
        "Liang Li",
        "Xihong Wu"
      ],
      "year": 2016,
      "venue": "2016 International Conference on Audio, Language and Image Processing (ICALIP)",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/accurate-decorrelation-method-parametric-stereo-coding",
      "sourceIndex": 91,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/accurate-decorrelation-method-parametric-stereo-coding",
        "https://doi.org/10.1109/icalip.2016.7846596",
        "https://ieeexplore.ieee.org/document/7846596"
      ],
      "category": "encoding",
      "location": "Shanghai, China",
      "pages": "72-76",
      "type": "conference",
      "doi": "10.1109/icalip.2016.7846596",
      "short": "An accurate decorrelation method for p",
      "publisher": "https://doi.org/10.1109/icalip.2016.7846596",
      "ieee": "https://ieeexplore.ieee.org/document/7846596",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Ficalip.2016.7846596",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "qu-1420ebf58a",
      "title": "An asynchronous HRTF measurement method based on phase alignment",
      "authors": [
        "Mengfan Zhang",
        "Fengyun Zhu",
        "Tianshu Qu",
        "Xihong Wu"
      ],
      "year": 2016,
      "venue": "Proceedings of the 22nd International Congress on Acoustics",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/asynchronous-hrtf-measurement-method-based-phase-alignment",
      "sourceIndex": 92,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/asynchronous-hrtf-measurement-method-based-phase-alignment",
        "https://ica2016.org.ar/wp-content/uploads/Programme-ICA2016.pdf",
        "http://www.ica2016.org.ar/ica2016proceedings/ica2016/ICA2016-0342.pdf"
      ],
      "category": "rendering",
      "location": "Buenos Airs, Argentina",
      "pages": "342",
      "type": "conference",
      "short": "An asynchronous HRTF measurement metho",
      "pdf": "http://www.ica2016.org.ar/ica2016proceedings/ica2016/ICA2016-0342.pdf",
      "pdfSource": "https://ica2016.org.ar/wp-content/uploads/Programme-ICA2016.pdf",
      "pdfChecked": "2026-10-15"
    },
    {
      "id": "qu-dcfe795a14",
      "title": "An environment adaptive loudspeaker calibration method for Ambisonics decoding system",
      "authors": [
        "Zhichao Huang",
        "Shan Gao",
        "Tianshu Qu",
        "Liang Li",
        "Xihong Wu"
      ],
      "year": 2016,
      "venue": "2016 International Conference on Audio, Language and Image Processing (ICALIP)",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/environment-adaptive-loudspeaker-calibration-method-ambisonics-decoding",
      "sourceIndex": 93,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/environment-adaptive-loudspeaker-calibration-method-ambisonics-decoding",
        "https://doi.org/10.1109/icalip.2016.7846594",
        "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=WztllNMAAAAJ&pagesize=100&citation_for_view=WztllNMAAAAJ:4TOpqqG69KYC",
        "https://www.researchgate.net/profile/Huang-Zhichao-2/publication/313544885_An_environment_adaptive_loudspeaker_calibration_method_for_Ambisonics_decoding_system/links/61fb526a11a1090a79cc1340/An-environment-adaptive-loudspeaker-calibration-method-for-Ambisonics-decoding-system.pdf",
        "https://www.researchgate.net/publication/313544885_An_environment_adaptive_loudspeaker_calibration_method_for_Ambisonics_decoding_system",
        "https://ieeexplore.ieee.org/document/7846594"
      ],
      "category": "rendering",
      "location": "Shanghai, China",
      "pages": "24-27",
      "type": "conference",
      "doi": "10.1109/icalip.2016.7846594",
      "short": "An environment adaptive loudspeaker ca",
      "publisher": "https://doi.org/10.1109/icalip.2016.7846594",
      "pdf": "https://www.researchgate.net/profile/Huang-Zhichao-2/publication/313544885_An_environment_adaptive_loudspeaker_calibration_method_for_Ambisonics_decoding_system/links/61fb526a11a1090a79cc1340/An-environment-adaptive-loudspeaker-calibration-method-for-Ambisonics-decoding-system.pdf",
      "pdfSource": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=WztllNMAAAAJ&pagesize=100&citation_for_view=WztllNMAAAAJ:4TOpqqG69KYC",
      "pdfChecked": "2026-10-15",
      "pdfHost": "ResearchGate",
      "ieee": "https://ieeexplore.ieee.org/document/7846594",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Ficalip.2016.7846594",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "qu-77ae973a0c",
      "title": "Inter-channel transfer function based parametric stereo coding system",
      "authors": [
        "Qingbo Huang",
        "Tianshu Qu",
        "Liang Li",
        "Xihong Wu"
      ],
      "year": 2016,
      "venue": "Proceedings of the 22nd International Congress on Acoustics",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/inter-channeltransferfunctionbased-parametric-stereo-coding-system",
      "sourceIndex": 94,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/inter-channeltransferfunctionbased-parametric-stereo-coding-system",
        "https://ica2016.org.ar/wp-content/uploads/Programme-ICA2016.pdf",
        "http://www.ica2016.org.ar/ica2016proceedings/ica2016/ICA2016-0125.pdf"
      ],
      "category": "encoding",
      "location": "Buenos Airs, Argentina",
      "pages": "125",
      "type": "conference",
      "short": "Inter-channel transfer function based ",
      "pdf": "http://www.ica2016.org.ar/ica2016proceedings/ica2016/ICA2016-0125.pdf",
      "pdfSource": "https://ica2016.org.ar/wp-content/uploads/Programme-ICA2016.pdf",
      "pdfChecked": "2026-10-15"
    },
    {
      "id": "qu-2ae61c0157",
      "title": "A sound source localization algorithm using microphone array with rigid body",
      "authors": [
        "Tao Song",
        "Jing Chen",
        "DaiBing Zhang",
        "Tianshu Qu",
        "Xihong Wu"
      ],
      "year": 2016,
      "venue": "Proceedings of the 22nd International Congress on Acoustics",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/sound-source-localization-algorithm-using-microphone-array-rigid-body",
      "sourceIndex": 95,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/sound-source-localization-algorithm-using-microphone-array-rigid-body",
        "https://ica2016.org.ar/wp-content/uploads/Programme-ICA2016.pdf",
        "http://www.ica2016.org.ar/ica2016proceedings/ica2016/ICA2016-0352.pdf"
      ],
      "category": "separation",
      "location": "Buenos Airs, Argentina",
      "pages": "352",
      "type": "conference",
      "short": "A sound source localization algorithm ",
      "pdf": "http://www.ica2016.org.ar/ica2016proceedings/ica2016/ICA2016-0352.pdf",
      "pdfSource": "https://ica2016.org.ar/wp-content/uploads/Programme-ICA2016.pdf",
      "pdfChecked": "2026-10-15"
    },
    {
      "id": "qu-e533a1116f",
      "title": "Similar Impacts of the Interaural Delay and Interaural Correlation on Binaural Gap Detection",
      "authors": [
        "Lingzhi Kong",
        "Zilong Xie",
        "Lingxi Lu",
        "Tianshu Qu",
        "Xihong Wu",
        "Jun Yan",
        "Liang Li"
      ],
      "year": 2015,
      "venue": "PLOS ONE",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/similar-impacts-interaural-delay-and-interaural-correlation-binaural-gap",
      "sourceIndex": 98,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/similar-impacts-interaural-delay-and-interaural-correlation-binaural-gap",
        "https://doi.org/10.1371/journal.pone.0126342",
        "https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0126342&type=printable"
      ],
      "category": "perception",
      "volume": "10",
      "issue": "6",
      "pages": "e0126342",
      "type": "journal",
      "doi": "10.1371/journal.pone.0126342",
      "short": "Similar Impacts of the Interaural Dela",
      "publisher": "https://doi.org/10.1371/journal.pone.0126342",
      "pdf": "https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0126342&type=printable",
      "pdfSource": "https://doi.org/10.1371/journal.pone.0126342",
      "pdfChecked": "2026-10-15"
    },
    {
      "id": "qu-4022a05ec1",
      "title": "Perceived location specificity in perceptual separation-induced but not fear conditioning-induced enhancement of prepulse inhibition in rats",
      "authors": [
        "Ming Lei",
        "Lu Luo",
        "Tianshu Qu",
        "Hongxiao Jia",
        "Liang Li"
      ],
      "year": 2014,
      "venue": "Behavioural Brain Research",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/perceived-location-specificity-perceptual-separation-induced-not-fear",
      "sourceIndex": 102,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/perceived-location-specificity-perceptual-separation-induced-not-fear",
        "https://doi.org/10.1016/j.bbr.2014.04.030",
        "https://psy.pku.edu.cn/english/people/faculty/professor/liangli/index.htm",
        "https://psy.pku.edu.cn/static/main/uploads/faculty/li_liang/2014051200001.pdf"
      ],
      "category": "separation",
      "volume": "269",
      "pages": "87-94",
      "type": "journal",
      "doi": "10.1016/j.bbr.2014.04.030",
      "short": "Perceived location specificity in perc",
      "publisher": "https://doi.org/10.1016/j.bbr.2014.04.030",
      "pdf": "https://psy.pku.edu.cn/static/main/uploads/faculty/li_liang/2014051200001.pdf",
      "pdfSource": "https://psy.pku.edu.cn/english/people/faculty/professor/liangli/index.htm",
      "pdfChecked": "2026-10-15"
    },
    {
      "id": "qu-645a0bb11d",
      "title": "Voice-associated static face image releases speech from informational masking",
      "authors": [
        "Yayue Gao",
        "Shuyang Cao",
        "Tianshu Qu",
        "Xihong Wu",
        "Haifeng Li",
        "Jinsheng Zhang",
        "Liang Li"
      ],
      "year": 2014,
      "venue": "PsyCh Journal",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/voice-associated-static-face-image-releases-speech-informational-masking",
      "sourceIndex": 103,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/voice-associated-static-face-image-releases-speech-informational-masking",
        "https://doi.org/10.1002/pchj.45",
        "https://psy.pku.edu.cn/english/people/faculty/professor/liangli/index.htm",
        "https://psy.pku.edu.cn/static/main/uploads/faculty/li_liang/2015082500005.pdf"
      ],
      "category": "perception",
      "volume": "3",
      "pages": "113-120",
      "type": "journal",
      "doi": "10.1002/pchj.45",
      "issue": "2",
      "short": "Voice-associated static face image rel",
      "publisher": "https://doi.org/10.1002/pchj.45",
      "pdf": "https://psy.pku.edu.cn/static/main/uploads/faculty/li_liang/2015082500005.pdf",
      "pdfSource": "https://psy.pku.edu.cn/english/people/faculty/professor/liangli/index.htm",
      "pdfChecked": "2026-10-15"
    },
    {
      "id": "qu-5edfdaea78",
      "title": "近场结构化头相关传递函数的测量与分析",
      "authors": [
        "吴玺宏",
        "吕振扬",
        "高源",
        "曲天书"
      ],
      "year": 2014,
      "venue": "数据采集与处理",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E8%BF%91%E5%9C%BA%E7%BB%93%E6%9E%84%E5%8C%96%E5%A4%B4%E7%9B%B8%E5%85%B3%E4%BC%A0%E9%80%92%E5%87%BD%E6%95%B0%E7%9A%84%E6%B5%8B%E9%87%8F%E4%B8%8E%E5%88%86%E6%9E%90",
      "sourceIndex": 104,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/%E8%BF%91%E5%9C%BA%E7%BB%93%E6%9E%84%E5%8C%96%E5%A4%B4%E7%9B%B8%E5%85%B3%E4%BC%A0%E9%80%92%E5%87%BD%E6%95%B0%E7%9A%84%E6%B5%8B%E9%87%8F%E4%B8%8E%E5%88%86%E6%9E%90"
      ],
      "category": "rendering",
      "volume": "29",
      "issue": "2",
      "pages": "180–185",
      "type": "journal",
      "short": "近场结构化头相关传递函数的测量与分析",
      "titleEn": "Measurement and analysis of near-field structural head-related transfer functions",
      "titleEnTranslated": true
    },
    {
      "id": "qu-b30afadeb3",
      "title": "面向智能科学的机器感知实验课建设",
      "authors": [
        "曲天书",
        "高源",
        "邓志鸿",
        "谢昆青"
      ],
      "year": 2013,
      "venue": "计算机教育 2013;19:104-106",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E9%9D%A2%E5%90%91%E6%99%BA%E8%83%BD%E7%A7%91%E5%AD%A6%E7%9A%84%E6%9C%BA%E5%99%A8%E6%84%9F%E7%9F%A5%E5%AE%9E%E9%AA%8C%E8%AF%BE%E5%BB%BA%E8%AE%BE",
      "sourceIndex": 105,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/%E9%9D%A2%E5%90%91%E6%99%BA%E8%83%BD%E7%A7%91%E5%AD%A6%E7%9A%84%E6%9C%BA%E5%99%A8%E6%84%9F%E7%9F%A5%E5%AE%9E%E9%AA%8C%E8%AF%BE%E5%BB%BA%E8%AE%BE"
      ],
      "category": "perception",
      "volume": "19",
      "pages": "104–106",
      "type": "conference",
      "short": "面向智能科学的机器感知实验课建设",
      "titleEn": "Developing a machine perception laboratory course for intelligence science",
      "titleEnTranslated": true
    },
    {
      "id": "qu-4d69c00a1e",
      "title": "Audio lossless coding/decoding method using basis pursuit algorithm",
      "authors": [
        "Wenxin He",
        "Tianshu Qu"
      ],
      "year": 2013,
      "venue": "2013 IEEE International Conference on Acoustics, Speech and Signal Processing",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/audio-lossless-codingdecoding-method-using-basis-pursuit-algorithm",
      "sourceIndex": 106,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/audio-lossless-codingdecoding-method-using-basis-pursuit-algorithm",
        "https://doi.org/10.1109/icassp.2013.6637708",
        "https://ieeexplore.ieee.org/document/6637708"
      ],
      "category": "encoding",
      "location": "Vancouver, Canada",
      "pages": "552-555",
      "type": "conference",
      "doi": "10.1109/icassp.2013.6637708",
      "short": "Audio lossless coding/decoding method ",
      "publisher": "https://doi.org/10.1109/icassp.2013.6637708",
      "ieee": "https://ieeexplore.ieee.org/document/6637708",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Ficassp.2013.6637708",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "qu-4632e0a3d3",
      "title": "Head-Related Transfer Function Measurement",
      "authors": [
        "Tianshu Qu"
      ],
      "year": 2013,
      "venue": "the 16th International Conference on Digital Audio Effects(DAFx13)",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/head-related-transfer-function-measurement",
      "sourceIndex": 107,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/head-related-transfer-function-measurement"
      ],
      "category": "rendering",
      "location": "Maynooth, Ireland",
      "type": "conference",
      "short": "Head-Related Transfer Function Measure"
    },
    {
      "id": "qu-779bc0fded",
      "title": "Perceived elevation cued by images rotating in horizontal planes",
      "authors": [
        "Tianshu Qu",
        "Haoze Sun",
        "Ning Wang",
        "Xihong Wu",
        "William M. Hartmann"
      ],
      "year": 2013,
      "venue": "Proceedings of Meetings on Acoustics",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/perceived-elevation-cued-images-rotating-horizontal-planes",
      "sourceIndex": 108,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/perceived-elevation-cued-images-rotating-horizontal-planes",
        "https://doi.org/10.1121/1.4800104",
        "https://www.researchgate.net/publication/236663841_Perceived_elevation_cued_by_images_rotating_in_horizontal_planes",
        "https://www.researchgate.net/profile/William-Hartmann/publication/236663841_Perceived_elevation_cued_by_images_rotating_in_horizontal_planes/links/5729ef9608aef7c7e2c4d728/Perceived-elevation-cued-by-images-rotating-in-horizontal-planes.pdf"
      ],
      "category": "perception",
      "location": "Montreal, Canada",
      "pages": "050150-050150",
      "type": "conference",
      "doi": "10.1121/1.4800104",
      "volume": "133",
      "issue": "5_Supplement",
      "short": "Perceived elevation cued by images rot",
      "publisher": "https://doi.org/10.1121/1.4800104",
      "pdf": "https://www.researchgate.net/profile/William-Hartmann/publication/236663841_Perceived_elevation_cued_by_images_rotating_in_horizontal_planes/links/5729ef9608aef7c7e2c4d728/Perceived-elevation-cued-by-images-rotating-in-horizontal-planes.pdf",
      "pdfSource": "https://www.researchgate.net/publication/236663841_Perceived_elevation_cued_by_images_rotating_in_horizontal_planes",
      "pdfChecked": "2026-10-15",
      "pdfHost": "ResearchGate"
    },
    {
      "id": "qu-51d3734ba6",
      "title": "Interaural Time Difference Thresholds as a Function of Frequency",
      "authors": [
        "William M. Hartmann",
        "Larisa Dunai",
        "Tianshu Qu"
      ],
      "year": 2013,
      "venue": "Advances in Experimental Medicine and Biology",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/interaural-time-difference-thresholds-function-frequency",
      "sourceIndex": 109,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/interaural-time-difference-thresholds-function-frequency",
        "https://doi.org/10.1007/978-1-4614-1590-9_27",
        "https://www.researchgate.net/publication/236958373_Interaural_Time_Difference_Thresholds_as_a_Function_of_Frequency",
        "https://www.researchgate.net/profile/Larisa-Dunai/publication/236958373_Interaural_Time_Difference_Thresholds_as_a_Function_of_Frequency/links/5ba0eb0f299bf13e6039c053/Interaural-Time-Difference-Thresholds-as-a-Function-of-Frequency.pdf"
      ],
      "category": "perception",
      "pages": "239-246",
      "type": "chapter",
      "doi": "10.1007/978-1-4614-1590-9_27",
      "short": "Interaural Time Difference Thresholds ",
      "publisher": "https://doi.org/10.1007/978-1-4614-1590-9_27",
      "pdf": "https://www.researchgate.net/profile/Larisa-Dunai/publication/236958373_Interaural_Time_Difference_Thresholds_as_a_Function_of_Frequency/links/5ba0eb0f299bf13e6039c053/Interaural-Time-Difference-Thresholds-as-a-Function-of-Frequency.pdf",
      "pdfSource": "https://www.researchgate.net/publication/236958373_Interaural_Time_Difference_Thresholds_as_a_Function_of_Frequency",
      "pdfChecked": "2026-10-15",
      "pdfHost": "ResearchGate"
    },
    {
      "id": "qu-4c8872b7fd",
      "title": "Aging Effects on Detection of Spectral Changes Induced by a Break in Sound Correlation",
      "authors": [
        "Tianshu Qu",
        "Shuyang Cao",
        "Xun Chen",
        "Ying Huang",
        "Liang Li",
        "Xihong Wu",
        "Bruce A. Schneider"
      ],
      "year": 2013,
      "venue": "Ear & Hearing",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/aging-effects-detection-spectral-changes-induced-break-sound-correlation",
      "sourceIndex": 112,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/aging-effects-detection-spectral-changes-induced-break-sound-correlation",
        "https://doi.org/10.1097/aud.0b013e31826e4fe1",
        "https://www.psy.pku.edu.cn/english/people/faculty/professor/liangli/index.htm",
        "https://psy.pku.edu.cn/static/main/uploads/faculty/li_liang/2013051500001.pdf"
      ],
      "category": "perception",
      "volume": "34",
      "issue": "3",
      "pages": "280-287",
      "type": "journal",
      "doi": "10.1097/aud.0b013e31826e4fe1",
      "short": "Aging Effects on Detection of Spectral",
      "publisher": "https://doi.org/10.1097/aud.0b013e31826e4fe1",
      "pdf": "https://psy.pku.edu.cn/static/main/uploads/faculty/li_liang/2013051500001.pdf",
      "pdfSource": "https://www.psy.pku.edu.cn/english/people/faculty/professor/liangli/index.htm",
      "pdfChecked": "2026-10-15"
    },
    {
      "id": "doi-a8d4258d14",
      "year": 2013,
      "title": "Perceived elevation cued by images rotating in horizontal planes",
      "authors": [
        "Tianshu Qu",
        "Haoze Sun",
        "Ning Wang",
        "Xihong Wu",
        "William M. Hartmann"
      ],
      "type": "abstract",
      "venue": "The Journal of the Acoustical Society of America",
      "source": "https://doi.org/10.1121/1.4806271",
      "references": [
        "https://doi.org/10.1121/1.4806271",
        "https://acousticalsociety.org/wp-content/uploads/2018/03/thrusday_am.pdf",
        "https://acousticalsociety.org/wp-content/uploads/2018/03/thrusday_am.pdf#page=24"
      ],
      "category": "perception",
      "doi": "10.1121/1.4806271",
      "volume": "133",
      "issue": "5_Supplement",
      "pages": "3512-3512",
      "short": "Perceived elevation cued by images rot",
      "publisher": "https://doi.org/10.1121/1.4806271",
      "pdf": "https://acousticalsociety.org/wp-content/uploads/2018/03/thrusday_am.pdf#page=24",
      "pdfSource": "https://acousticalsociety.org/wp-content/uploads/2018/03/thrusday_am.pdf",
      "pdfChecked": "2026-10-15",
      "pdfIsAbstract": true,
      "pdfPage": 24
    },
    {
      "id": "qu-4d337d791d",
      "title": "Detection of spectral changes induced by a break in sound correlation in younger adults and older adults",
      "authors": [
        "Tianshu Qu",
        "Shuyang Cao",
        "Xun Chen",
        "Ying Huang",
        "Xihong Wu",
        "Bruce Schneider",
        "Liang Li"
      ],
      "year": 2012,
      "venue": "The Journal of the Acoustical Society of America",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/detection-spectral-changes-induced-break-sound-correlation-younger-adults-and",
      "sourceIndex": 113,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/detection-spectral-changes-induced-break-sound-correlation-younger-adults-and",
        "https://doi.org/10.1121/1.4708220",
        "https://acousticalsociety.org/wp-content/uploads/2018/03/hkfullweek.pdf#page=64"
      ],
      "category": "perception",
      "volume": "131",
      "pages": "3270-3270",
      "type": "abstract",
      "doi": "10.1121/1.4708220",
      "issue": "4_Supplement",
      "short": "Detection of spectral changes induced ",
      "publisher": "https://doi.org/10.1121/1.4708220",
      "pdf": "https://acousticalsociety.org/wp-content/uploads/2018/03/hkfullweek.pdf#page=64",
      "pdfSource": "https://doi.org/10.1121/1.4708220",
      "pdfChecked": "2026-10-15",
      "pdfIsAbstract": true,
      "pdfPage": 64
    },
    {
      "id": "qu-536a8dee15",
      "title": "Using low-frequency threshold interaural time differences to test models of binaural hearing",
      "authors": [
        "Tianshu Qu",
        "William Hartmann"
      ],
      "year": 2012,
      "venue": "The Journal of the Acoustical Society of America",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/using-low-frequency-threshold-interaural-time-differences-test-models",
      "sourceIndex": 114,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/using-low-frequency-threshold-interaural-time-differences-test-models",
        "https://doi.org/10.1121/1.4708216",
        "https://acousticalsociety.org/wp-content/uploads/2018/03/hkfullweek.pdf#page=63"
      ],
      "category": "perception",
      "volume": "131",
      "pages": "3269-3269",
      "type": "abstract",
      "doi": "10.1121/1.4708216",
      "issue": "4_Supplement",
      "short": "Using low-frequency threshold interaur",
      "publisher": "https://doi.org/10.1121/1.4708216",
      "pdf": "https://acousticalsociety.org/wp-content/uploads/2018/03/hkfullweek.pdf#page=63",
      "pdfSource": "http://scholar.pku.edu.cn/qutianshu/publications/using-low-frequency-threshold-interaural-time-differences-test-models",
      "pdfChecked": "2026-10-15",
      "pdfIsAbstract": true,
      "pdfPage": 63
    },
    {
      "id": "qu-796fcfcc60",
      "title": "Introduction to AVS Audio Lossless Coding/Decoding Standard",
      "authors": [
        "W X He",
        "Y Gao",
        "Tianshu Qu"
      ],
      "year": 2012,
      "venue": "IEEE Communications Society MMTC E-Letter",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/introduction-avs-audio-lossless-codingdecoding-standard",
      "sourceIndex": 115,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/introduction-avs-audio-lossless-codingdecoding-standard"
      ],
      "category": "encoding",
      "volume": "7",
      "issue": "2",
      "pages": "21–24",
      "type": "other",
      "short": "Introduction to AVS Audio Lossless Cod"
    },
    {
      "id": "qu-750bc2e39c",
      "title": "Perceptual Fusion Tendency of Speech Sounds",
      "authors": [
        "Ying Huang",
        "Jingyu Li",
        "Xuefei Zou",
        "Tianshu Qu",
        "Xihong Wu",
        "Lihua Mao",
        "Yanhong Wu",
        "Liang Li"
      ],
      "year": 2011,
      "venue": "Journal of Cognitive Neuroscience",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/perceptual-fusion-tendency-speech-sounds",
      "sourceIndex": 116,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/perceptual-fusion-tendency-speech-sounds",
        "https://doi.org/10.1162/jocn.2010.21470",
        "https://www.psy.pku.edu.cn/english/people/faculty/professor/liangli/index.htm",
        "https://psy.pku.edu.cn/static/main/uploads/faculty/li_liang/2011012500001.pdf"
      ],
      "category": "perception",
      "volume": "23",
      "issue": "4",
      "pages": "1003-1014",
      "type": "journal",
      "doi": "10.1162/jocn.2010.21470",
      "short": "Perceptual Fusion Tendency of Speech S",
      "publisher": "https://doi.org/10.1162/jocn.2010.21470",
      "pdf": "https://psy.pku.edu.cn/static/main/uploads/faculty/li_liang/2011012500001.pdf",
      "pdfSource": "https://www.psy.pku.edu.cn/english/people/faculty/professor/liangli/index.htm",
      "pdfChecked": "2026-10-15"
    },
    {
      "id": "qu-ffe750a83c",
      "title": "Relationship between Distance and Binaural Cues on Sound Source Localization",
      "authors": [
        "Tianshu Qu",
        "S W Cao",
        "Xihong Wu"
      ],
      "year": 2010,
      "venue": "Acta Scientiarum Naturalium Universitatis Pekinensis",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/relationship-between-distance-and-binaural-cues-sound-source-localization",
      "sourceIndex": 118,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/relationship-between-distance-and-binaural-cues-sound-source-localization"
      ],
      "category": "separation",
      "volume": "46",
      "issue": "06",
      "pages": "901–906",
      "type": "journal",
      "short": "Relationship between Distance and Bina"
    },
    {
      "id": "qu-bf92a91fc5",
      "title": "一种基于提升小波变换的音频无损编解码方法",
      "authors": [
        "曲天书",
        "何文欣",
        "高懿",
        "张搏",
        "吴玺宏"
      ],
      "year": 2010,
      "venue": "电声技术",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E5%9F%BA%E4%BA%8E%E6%8F%90%E5%8D%87%E5%B0%8F%E6%B3%A2%E5%8F%98%E6%8D%A2%E7%9A%84%E9%9F%B3%E9%A2%91%E6%97%A0%E6%8D%9F%E7%BC%96%E8%A7%A3%E7%A0%81%E6%96%B9%E6%B3%95",
      "sourceIndex": 119,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E5%9F%BA%E4%BA%8E%E6%8F%90%E5%8D%87%E5%B0%8F%E6%B3%A2%E5%8F%98%E6%8D%A2%E7%9A%84%E9%9F%B3%E9%A2%91%E6%97%A0%E6%8D%9F%E7%BC%96%E8%A7%A3%E7%A0%81%E6%96%B9%E6%B3%95"
      ],
      "category": "encoding",
      "volume": "34",
      "issue": "12",
      "pages": "65–68",
      "type": "journal",
      "short": "一种基于提升小波变换的音频无损编解码方法",
      "titleEn": "An audio lossless coding and decoding method based on the lifting wavelet transform",
      "titleEnTranslated": true
    },
    {
      "id": "qu-5d5887d763",
      "title": "从有损到无损的音频编解码框架",
      "authors": [
        "杨新辉",
        "舒海燕",
        "曲天书",
        "张涛",
        "窦维蓓"
      ],
      "year": 2010,
      "venue": "电声技术",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%BB%8E%E6%9C%89%E6%8D%9F%E5%88%B0%E6%97%A0%E6%8D%9F%E7%9A%84%E9%9F%B3%E9%A2%91%E7%BC%96%E8%A7%A3%E7%A0%81%E6%A1%86%E6%9E%B6",
      "sourceIndex": 120,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/%E4%BB%8E%E6%9C%89%E6%8D%9F%E5%88%B0%E6%97%A0%E6%8D%9F%E7%9A%84%E9%9F%B3%E9%A2%91%E7%BC%96%E8%A7%A3%E7%A0%81%E6%A1%86%E6%9E%B6"
      ],
      "category": "encoding",
      "volume": "34",
      "issue": "12",
      "pages": "60–64",
      "type": "journal",
      "short": "从有损到无损的音频编解码框架",
      "titleEn": "An audio coding and decoding framework from lossy to lossless coding",
      "titleEnTranslated": true
    },
    {
      "id": "qu-3a4a22e8be",
      "title": "A Measurement of Structural Head-related Transfer Functions in Proximal Region",
      "authors": [
        "Tianshu Qu",
        "Y Song",
        "XD Li",
        "Xihong Wu"
      ],
      "year": 2009,
      "venue": "The 10th Western Pacific Acoustics Conference",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/measurement-structural-head-related-transfer-functions-proximal-region",
      "sourceIndex": 121,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/measurement-structural-head-related-transfer-functions-proximal-region"
      ],
      "category": "rendering",
      "location": "Beijing China",
      "type": "conference",
      "short": "A Measurement of Structural Head-relat"
    },
    {
      "id": "qu-9276816fe6",
      "title": "Distance-Dependent Head-Related Transfer Functions Measured With High Spatial Resolution Using a Spark Gap",
      "authors": [
        "Tianshu Qu",
        "Zheng Xiao",
        "Mei Gong",
        "Ying Huang",
        "Xiaodong Li",
        "Xihong Wu"
      ],
      "year": 2009,
      "venue": "IEEE Transactions on Audio, Speech, and Language Processing",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/distance-dependent-head-related-transfer-functions-measured-high-spatial",
      "sourceIndex": 123,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/distance-dependent-head-related-transfer-functions-measured-high-spatial",
        "https://doi.org/10.1109/tasl.2009.2020532",
        "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=WztllNMAAAAJ&pagesize=100&citation_for_view=WztllNMAAAAJ:u-x6o8ySG0sC",
        "https://www.researchgate.net/profile/Tianshu-Qu/publication/224529850_Distance-Dependent_Head-Related_Transfer_Functions_Measured_With_High_Spatial_Resolution_Using_a_Spark_Gap/links/00b7d522717ff8d101000000/Distance-Dependent-Head-Related-Transfer-Functions-Measured-With-High-Spatial-Resolution-Using-a-Spark-Gap.pdf",
        "https://www.researchgate.net/publication/224529850_Distance-Dependent_Head-Related_Transfer_Functions_Measured_With_High_Spatial_Resolution_Using_a_Spark_Gap",
        "https://ieeexplore.ieee.org/document/5109764"
      ],
      "category": "rendering",
      "volume": "17",
      "issue": "6",
      "pages": "1124-1132",
      "type": "journal",
      "publisher": "https://doi.org/10.1109/tasl.2009.2020532",
      "doi": "10.1109/tasl.2009.2020532",
      "short": "Distance-Dependent Head-Related Transf",
      "pdf": "https://www.researchgate.net/profile/Tianshu-Qu/publication/224529850_Distance-Dependent_Head-Related_Transfer_Functions_Measured_With_High_Spatial_Resolution_Using_a_Spark_Gap/links/00b7d522717ff8d101000000/Distance-Dependent-Head-Related-Transfer-Functions-Measured-With-High-Spatial-Resolution-Using-a-Spark-Gap.pdf",
      "pdfSource": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=WztllNMAAAAJ&pagesize=100&citation_for_view=WztllNMAAAAJ:u-x6o8ySG0sC",
      "pdfChecked": "2026-10-15",
      "pdfHost": "ResearchGate",
      "ieee": "https://ieeexplore.ieee.org/document/5109764",
      "ieeeSource": "https://api.crossref.org/works/10.1109%2Ftasl.2009.2020532",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "qu-829637e3b1",
      "title": "Distance dependent head-related transfer function database of KEMAR",
      "authors": [
        "Tianshu Qu",
        "Zheng Xiao",
        "Mei Gong",
        "Ying Huang",
        "Xiaodong Li",
        "Xihong Wu"
      ],
      "year": 2008,
      "venue": "International Conference on Audio, Language and Image Processing",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/distance-dependent-head-related-transfer-function-database-kemar",
      "sourceIndex": 124,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/distance-dependent-head-related-transfer-function-database-kemar",
        "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=WztllNMAAAAJ&pagesize=100&citation_for_view=WztllNMAAAAJ:d1gkVwhDpl0C",
        "https://www.researchgate.net/profile/Tianshu-Qu/publication/4360136_Distance_dependent_head-related_transfer_function_database_of_KEMAR/links/00b4953684d2299d6f000000/Distance-dependent-head-related-transfer-function-database-of-KEMAR.pdf",
        "https://www.researchgate.net/publication/4360136_Distance_dependent_head-related_transfer_function_database_of_KEMAR",
        "https://ieeexplore.ieee.org/document/4590089"
      ],
      "category": "rendering",
      "type": "conference",
      "short": "Distance dependent head-related transf",
      "pdf": "https://www.researchgate.net/profile/Tianshu-Qu/publication/4360136_Distance_dependent_head-related_transfer_function_database_of_KEMAR/links/00b4953684d2299d6f000000/Distance-dependent-head-related-transfer-function-database-of-KEMAR.pdf",
      "pdfSource": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=WztllNMAAAAJ&pagesize=100&citation_for_view=WztllNMAAAAJ:d1gkVwhDpl0C",
      "pdfChecked": "2026-10-15",
      "pdfHost": "ResearchGate",
      "ieee": "https://ieeexplore.ieee.org/document/4590089",
      "ieeeSource": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=WztllNMAAAAJ&pagesize=100&citation_for_view=WztllNMAAAAJ:d1gkVwhDpl0C",
      "ieeeChecked": "2026-10-16"
    },
    {
      "id": "qu-dcd58dbaca",
      "title": "Frequency importance function of Mandarin Chinese speech",
      "authors": [
        "Jing Chen",
        "Tianshu Qu",
        "Xihong Wu",
        "Qiang Huang",
        "Ying Huang",
        "Liang Li",
        "Huisheng S. Chi"
      ],
      "year": 2008,
      "venue": "The Journal of the Acoustical Society of America",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/frequency-importance-function-mandarin-chinese-speech",
      "sourceIndex": 125,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/frequency-importance-function-mandarin-chinese-speech",
        "https://doi.org/10.1121/1.2933807",
        "https://dael.euracoustics.org/confs/acoustics2008/data/articles/001120.pdf"
      ],
      "category": "perception",
      "type": "abstract",
      "doi": "10.1121/1.2933807",
      "volume": "123",
      "issue": "5_Supplement",
      "pages": "3323-3323",
      "short": "Frequency importance function of Manda",
      "publisher": "https://doi.org/10.1121/1.2933807",
      "pdf": "https://dael.euracoustics.org/confs/acoustics2008/data/articles/001120.pdf",
      "pdfSource": "https://doi.org/10.1121/1.2933807",
      "pdfChecked": "2026-10-15",
      "pdfIsAbstract": true
    },
    {
      "id": "qu-4d05b149d3",
      "title": "Perceptual integration between target speech and target-speech reflection reduces masking for target-speech recognition in younger adults and older adults",
      "authors": [
        "Ying Huang",
        "Qiang Huang",
        "Xun Chen",
        "Tianshu Qu",
        "Xihong Wu",
        "Liang Li"
      ],
      "year": 2008,
      "venue": "Hearing Research",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/perceptual-integration-between-target-speech-and-target-speech-reflection",
      "sourceIndex": 126,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/perceptual-integration-between-target-speech-and-target-speech-reflection",
        "https://doi.org/10.1016/j.heares.2008.07.006",
        "https://www.psy.pku.edu.cn/english/people/faculty/professor/liangli/index.htm",
        "https://psy.pku.edu.cn/static/main/uploads/faculty/li_liang/2009052800009.pdf"
      ],
      "category": "perception",
      "volume": "244",
      "pages": "51-65",
      "type": "journal",
      "doi": "10.1016/j.heares.2008.07.006",
      "issue": "1-2",
      "short": "Perceptual integration between target ",
      "publisher": "https://doi.org/10.1016/j.heares.2008.07.006",
      "pdf": "https://psy.pku.edu.cn/static/main/uploads/faculty/li_liang/2009052800009.pdf",
      "pdfSource": "https://www.psy.pku.edu.cn/english/people/faculty/professor/liangli/index.htm",
      "pdfChecked": "2026-10-15"
    },
    {
      "id": "qu-9bef27d23d",
      "title": "近场头相关传输函数的测量与分析",
      "authors": [
        "龚玫",
        "肖峥",
        "曲天书",
        "吴玺宏",
        "李晓东"
      ],
      "year": 2007,
      "venue": "应用声学",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E8%BF%91%E5%9C%BA%E5%A4%B4%E7%9B%B8%E5%85%B3%E4%BC%A0%E8%BE%93%E5%87%BD%E6%95%B0%E7%9A%84%E6%B5%8B%E9%87%8F%E4%B8%8E%E5%88%86%E6%9E%90",
      "sourceIndex": 127,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/%E8%BF%91%E5%9C%BA%E5%A4%B4%E7%9B%B8%E5%85%B3%E4%BC%A0%E8%BE%93%E5%87%BD%E6%95%B0%E7%9A%84%E6%B5%8B%E9%87%8F%E4%B8%8E%E5%88%86%E6%9E%90"
      ],
      "category": "rendering",
      "issue": "06",
      "type": "journal",
      "short": "近场头相关传输函数的测量与分析",
      "titleEn": "Measurement and analysis of near-field head-related transfer functions",
      "titleEnTranslated": true
    },
    {
      "id": "doi-085ec42914",
      "year": 2007,
      "title": "The effect of the inter-target delay on informational and energetic masking of speech in younger and older adults",
      "authors": [
        "Liang Li",
        "Ying Huang",
        "Qiang Huang",
        "Xun Chen",
        "Tianshu Qu",
        "Xihong Wu"
      ],
      "type": "abstract",
      "venue": "The Journal of the Acoustical Society of America",
      "source": "https://doi.org/10.1121/1.4782444",
      "references": [
        "https://doi.org/10.1121/1.4782444"
      ],
      "category": "perception",
      "doi": "10.1121/1.4782444",
      "volume": "121",
      "issue": "5_Supplement",
      "pages": "3197-3197",
      "short": "The effect of the inter-target delay o",
      "publisher": "https://doi.org/10.1121/1.4782444"
    },
    {
      "id": "qu-3c2bbbaab0",
      "title": "A Novel Objective Spatial Quality Evaluation Method for Reproduced Sound",
      "authors": [
        "Yu Jiao",
        "Zhiping Zhang",
        "Tianshu Qu",
        "Xihong Wu"
      ],
      "year": 2005,
      "venue": "The 118th Convention of Audio Engineering Society",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/novel-objective-spatial-quality-evaluation-method-reproduced-sound",
      "sourceIndex": 128,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/novel-objective-spatial-quality-evaluation-method-reproduced-sound"
      ],
      "category": "rendering",
      "type": "conference",
      "short": "A Novel Objective Spatial Quality Eval"
    },
    {
      "id": "qu-79737d07ac",
      "title": "Simulated phase-locking stimulation: An improved signal processing strategy for cochlear implant",
      "authors": [
        "Xihong Wu",
        "Hongwei Qu",
        "Jing Chen",
        "Tianshu Qu",
        "Liang Li"
      ],
      "year": 2005,
      "venue": "The Journal of the Acoustical Society of America",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/simulated-phase-locking-stimulation-improved-signal-processing-strategy",
      "sourceIndex": 129,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/simulated-phase-locking-stimulation-improved-signal-processing-strategy",
        "https://doi.org/10.1121/1.4785964",
        "https://backend.orbit.dtu.dk/ws/portalfiles/portal/4447151/Vestergaard.pdf#page=36"
      ],
      "category": "perception",
      "type": "abstract",
      "doi": "10.1121/1.4785964",
      "volume": "117",
      "issue": "4_Supplement",
      "pages": "2397-2397",
      "short": "Simulated phase-locking stimulation",
      "publisher": "https://doi.org/10.1121/1.4785964",
      "pdf": "https://backend.orbit.dtu.dk/ws/portalfiles/portal/4447151/Vestergaard.pdf#page=36",
      "pdfSource": "https://doi.org/10.1121/1.4785964",
      "pdfChecked": "2026-10-15",
      "pdfIsAbstract": true,
      "pdfPage": 36
    },
    {
      "id": "qu-3145db9cd0",
      "title": "一种改进的AEDA声源定位及跟踪算法",
      "authors": [
        "李承智",
        "曲天书",
        "吴玺宏"
      ],
      "year": 2005,
      "venue": "北京大学学报",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E6%94%B9%E8%BF%9B%E7%9A%84aeda%E5%A3%B0%E6%BA%90%E5%AE%9A%E4%BD%8D%E5%8F%8A%E8%B7%9F%E8%B8%AA%E7%AE%97%E6%B3%95",
      "sourceIndex": 133,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E6%94%B9%E8%BF%9B%E7%9A%84aeda%E5%A3%B0%E6%BA%90%E5%AE%9A%E4%BD%8D%E5%8F%8A%E8%B7%9F%E8%B8%AA%E7%AE%97%E6%B3%95"
      ],
      "category": "separation",
      "type": "journal",
      "short": "一种改进的AEDA声源定位及跟踪算法",
      "titleEn": "An improved AEDA algorithm for sound source localization and tracking",
      "titleEnTranslated": true
    },
    {
      "id": "qu-34c31a7770",
      "title": "一种改进的基于双麦克风阵列的自适应零限波束形成语音增强方法",
      "authors": [
        "赵硕",
        "曲天书",
        "吴玺宏",
        "迟惠生"
      ],
      "year": 2005,
      "venue": "声学技术",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E6%94%B9%E8%BF%9B%E7%9A%84%E5%9F%BA%E4%BA%8E%E5%8F%8C%E9%BA%A6%E5%85%8B%E9%A3%8E%E9%98%B5%E5%88%97%E7%9A%84%E8%87%AA%E9%80%82%E5%BA%94%E9%9B%B6%E9%99%90%E6%B3%A2%E6%9D%9F%E5%BD%A2%E6%88%90%E8%AF%AD%E9%9F%B3%E5%A2%9E%E5%BC%BA%E6%96%B9%E6%B3%95",
      "sourceIndex": 134,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E6%94%B9%E8%BF%9B%E7%9A%84%E5%9F%BA%E4%BA%8E%E5%8F%8C%E9%BA%A6%E5%85%8B%E9%A3%8E%E9%98%B5%E5%88%97%E7%9A%84%E8%87%AA%E9%80%82%E5%BA%94%E9%9B%B6%E9%99%90%E6%B3%A2%E6%9D%9F%E5%BD%A2%E6%88%90%E8%AF%AD%E9%9F%B3%E5%A2%9E%E5%BC%BA%E6%96%B9%E6%B3%95"
      ],
      "category": "separation",
      "volume": "24",
      "pages": "454–457",
      "type": "journal",
      "short": "一种改进的基于双麦克风阵列的自适应零限波束形成语音增强方法",
      "titleEn": "An improved speech enhancement method using adaptive null-constrained beamforming with a two-microphone array",
      "titleEnTranslated": true
    },
    {
      "id": "qu-7abb36a297",
      "title": "一种改进的无参考源的客观音质评价方法",
      "authors": [
        "周丹",
        "曲天书",
        "吴玺宏",
        "迟惠生"
      ],
      "year": 2005,
      "venue": "声学技术",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E6%94%B9%E8%BF%9B%E7%9A%84%E6%97%A0%E5%8F%82%E8%80%83%E6%BA%90%E7%9A%84%E5%AE%A2%E8%A7%82%E9%9F%B3%E8%B4%A8%E8%AF%84%E4%BB%B7%E6%96%B9%E6%B3%95",
      "sourceIndex": 135,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E6%94%B9%E8%BF%9B%E7%9A%84%E6%97%A0%E5%8F%82%E8%80%83%E6%BA%90%E7%9A%84%E5%AE%A2%E8%A7%82%E9%9F%B3%E8%B4%A8%E8%AF%84%E4%BB%B7%E6%96%B9%E6%B3%95"
      ],
      "category": "perception",
      "volume": "24",
      "pages": "527–530",
      "type": "journal",
      "short": "一种改进的无参考源的客观音质评价方法",
      "titleEn": "An improved objective method for audio quality evaluation without a reference source",
      "titleEnTranslated": true
    },
    {
      "id": "qu-f84126bdfd",
      "title": "一种数字助听器系统研究开发平台的实现",
      "authors": [
        "马强",
        "吴荣彬",
        "周丹",
        "曲天书",
        "吴玺宏",
        "迟惠生"
      ],
      "year": 2005,
      "venue": "声学技术",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E6%95%B0%E5%AD%97%E5%8A%A9%E5%90%AC%E5%99%A8%E7%B3%BB%E7%BB%9F%E7%A0%94%E7%A9%B6%E5%BC%80%E5%8F%91%E5%B9%B3%E5%8F%B0%E7%9A%84%E5%AE%9E%E7%8E%B0",
      "sourceIndex": 136,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E6%95%B0%E5%AD%97%E5%8A%A9%E5%90%AC%E5%99%A8%E7%B3%BB%E7%BB%9F%E7%A0%94%E7%A9%B6%E5%BC%80%E5%8F%91%E5%B9%B3%E5%8F%B0%E7%9A%84%E5%AE%9E%E7%8E%B0"
      ],
      "category": "perception",
      "volume": "24",
      "pages": "574–577",
      "type": "journal",
      "short": "一种数字助听器系统研究开发平台的实现",
      "titleEn": "A research and development platform for a digital hearing aid system",
      "titleEnTranslated": true
    },
    {
      "id": "qu-6fb4b85c83",
      "title": "Location-Based Auditory Inhibition of Return Is Perceptually Drvien",
      "authors": [
        "C Wang",
        "Y Wang",
        "H Wu",
        "Q Huang",
        "Tianshu Qu",
        "Xihong Wu",
        "X L Zhou",
        "L Li"
      ],
      "year": 2004,
      "venue": "The 2004 annual conference of the Canadian Acoustical Association",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/location-based-auditory-inhibition-return-perceptually-drvien",
      "sourceIndex": 137,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/location-based-auditory-inhibition-return-perceptually-drvien"
      ],
      "category": "perception",
      "type": "conference",
      "short": "Location-Based Auditory Inhibition of "
    }
  ],
  "patents": [
    {
      "id": "qu-9c46f18246",
      "title": "一种基于空间能量图约束与深度优化的车舱声场重建方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "钱宇凡"
      ],
      "year": 2025,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-kong-jian-neng-liang-tu-yue-shu-yu-shen-du-you-hua-de-che-cang",
      "sourceIndex": 16,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-kong-jian-neng-liang-tu-yue-shu-yu-shen-du-you-hua-de-che-cang"
      ],
      "category": "perception",
      "number": "ZL202511274888.2",
      "type": "patent",
      "titleEn": "Automotive sound field reconstruction using spatial energy map constraints and deep optimization",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-4165075771",
      "title": "一种基于交叉注意力-状态空间模型的目标声源提取方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "吴东航"
      ],
      "year": 2025,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-jiao-cha-zhu-yi-li-zhuang-tai-kong-jian-mo-xing-de-mu-biao",
      "sourceIndex": 17,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-jiao-cha-zhu-yi-li-zhuang-tai-kong-jian-mo-xing-de-mu-biao"
      ],
      "category": "perception",
      "number": "202510290916.3",
      "type": "patent",
      "titleEn": "Target sound extraction using a cross-attention state space model",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-ca04fdfe52",
      "title": "一种基于包络估计的未知声源数量移动声源定位跟踪方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "吴东航",
        "杜佳琪"
      ],
      "year": 2025,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-bao-luo-gu-ji-de-wei-zhi-sheng-yuan-shu-liang-yi-dong-sheng",
      "sourceIndex": 18,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-bao-luo-gu-ji-de-wei-zhi-sheng-yuan-shu-liang-yi-dong-sheng"
      ],
      "category": "separation",
      "number": "202510538463.1",
      "type": "patent",
      "titleEn": "Localization and tracking of an unknown number of moving sound sources using envelope estimation",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-2073ee9ace",
      "title": "一种基于文本辅助的视频到音频生成方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "游宇寰"
      ],
      "year": 2025,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-wen-ben-fu-zhu-de-shi-pin-dao-yin-pin-sheng-cheng-fang-fa",
      "sourceIndex": 19,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-wen-ben-fu-zhu-de-shi-pin-dao-yin-pin-sheng-cheng-fang-fa"
      ],
      "category": "perception",
      "number": "202510298019.7",
      "type": "patent",
      "titleEn": "Video-to-audio generation with textual assistance",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-f79e441215",
      "title": "基于直达声源与一阶反射声源定位的房间几何推断方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "吴东航"
      ],
      "year": 2025,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/ji-yu-zhi-da-sheng-yuan-yu-yi-jie-fan-she-sheng-yuan-ding-wei-de-fang-jian-ji",
      "sourceIndex": 21,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/ji-yu-zhi-da-sheng-yuan-yu-yi-jie-fan-she-sheng-yuan-ding-wei-de-fang-jian-ji"
      ],
      "category": "separation",
      "number": "202510556943.0",
      "type": "patent",
      "titleEn": "Room geometry inference from localization of the direct sound source and first-order reflections",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-763d9025b4",
      "title": "一种基于模态分解与凸优化的车舱声学信道均衡方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "钱宇凡"
      ],
      "year": 2024,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-mo-tai-fen-jie-yu-tu-you-hua-de-che-cang-sheng-xue-xin-dao-jun",
      "sourceIndex": 29,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-mo-tai-fen-jie-yu-tu-you-hua-de-che-cang-sheng-xue-xin-dao-jun"
      ],
      "category": "perception",
      "number": "202410663433.9",
      "type": "patent",
      "titleEn": "Automotive acoustic channel equalization using modal decomposition and convex optimization",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-f0f0acbb51",
      "title": "室内声场的表征方法及室内声场时域表征模型",
      "authors": [
        "曲天书",
        "葛钟书"
      ],
      "year": 2024,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/shi-nei-sheng-chang-de-biao-zheng-fang-fa-ji-shi-nei-sheng-chang-shi-yu-biao",
      "sourceIndex": 30,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/shi-nei-sheng-chang-de-biao-zheng-fang-fa-ji-shi-nei-sheng-chang-shi-yu-biao"
      ],
      "category": "perception",
      "number": "202410741409.2",
      "type": "patent",
      "titleEn": "Indoor sound field representation and a time-domain representation model",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-2b68bca957",
      "title": "室内声场的表征方法及时域-时频域混合模型框架",
      "authors": [
        "曲天书",
        "葛钟书"
      ],
      "year": 2024,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/shi-nei-sheng-chang-de-biao-zheng-fang-fa-ji-shi-yu-shi-pin-yu-hun-he-mo-xing",
      "sourceIndex": 31,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/shi-nei-sheng-chang-de-biao-zheng-fang-fa-ji-shi-yu-shi-pin-yu-hun-he-mo-xing"
      ],
      "category": "perception",
      "number": "202410741392.0",
      "type": "patent",
      "titleEn": "Indoor sound field representation with a hybrid time and time-frequency domain model",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-a31fa1feda",
      "title": "一种基于双路自注意力机制学习的多点采样声场重建方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "王奕文"
      ],
      "year": 2023,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-shuang-lu-zi-zhu-yi-li-ji-zhi-xue-xi-de-duo-dian-cai-yang",
      "sourceIndex": 35,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-shuang-lu-zi-zhu-yi-li-ji-zhi-xue-xi-de-duo-dian-cai-yang"
      ],
      "category": "perception",
      "issue": "发明",
      "number": "202310667120.6",
      "type": "patent",
      "titleEn": "Sound field reconstruction from measurements at multiple positions using dual-path self-attention learning",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-7d17c37bdb",
      "title": "一种基于扬声器阵列的近场声源重放方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "葛钟书"
      ],
      "year": 2023,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-yang-sheng-qi-zhen-lie-de-jin-chang-sheng-yuan-zhong-fang-fang",
      "sourceIndex": 36,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-yang-sheng-qi-zhen-lie-de-jin-chang-sheng-yuan-zhong-fang-fang"
      ],
      "category": "rendering",
      "number": "202310532598.8",
      "type": "patent",
      "titleEn": "Near-field sound source reproduction using a loudspeaker array",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-fcc7439a82",
      "title": "一种基于深度学习和柱谐分解的空间主动降噪方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "吴东航"
      ],
      "year": 2023,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-shen-du-xue-xi-he-zhu-xie-fen-jie-de-kong-jian-zhu-dong-jiang",
      "sourceIndex": 37,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-shen-du-xue-xi-he-zhu-xie-fen-jie-de-kong-jian-zhu-dong-jiang"
      ],
      "category": "perception",
      "issue": "发明",
      "number": "ZL202310955389.4",
      "type": "patent",
      "titleEn": "Spatial active noise control using deep learning and cylindrical harmonic decomposition",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-9268dcec59",
      "title": "一种基于声压图学习的球谐系数升阶方法及声场描述方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "王奕文"
      ],
      "year": 2022,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-sheng-ya-tu-xue-xi-de-qiu-xie-xi-shu-sheng-jie-fang-fa-ji",
      "sourceIndex": 44,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-sheng-ya-tu-xue-xi-de-qiu-xie-xi-shu-sheng-jie-fang-fa-ji"
      ],
      "category": "perception",
      "issue": "发明",
      "number": "202210650517.X",
      "type": "patent",
      "titleEn": "Increasing the order of spherical harmonic coefficients through sound pressure map learning and describing sound fields",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-23735fbc20",
      "title": "一种基于稀疏网络模型的声场球谐函数信号频域扩展方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "高山"
      ],
      "year": 2022,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-xi-shu-wang-luo-mo-xing-de-sheng-chang-qiu-xie-han-shu-xin-hao",
      "sourceIndex": 45,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-xi-shu-wang-luo-mo-xing-de-sheng-chang-qiu-xie-han-shu-xin-hao"
      ],
      "category": "perception",
      "issue": "发明",
      "number": "202210231178.1",
      "type": "patent",
      "titleEn": "Frequency-domain extension of sound field spherical harmonic signals using a sparse network model",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-5e22f0d01b",
      "title": "一种房间混响环境下直达声和一次反射声定向方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "高山"
      ],
      "year": 2022,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-fang-jian-hun-xiang-huan-jing-xia-zhi-da-sheng-he-yi-ci-fan-she",
      "sourceIndex": 46,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-fang-jian-hun-xiang-huan-jing-xia-zhi-da-sheng-he-yi-ci-fan-she"
      ],
      "category": "perception",
      "issue": "发明",
      "number": "202210233276.9",
      "type": "patent",
      "titleEn": "Direction estimation of direct sound and first-order reflections in reverberant rooms",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-f36827fa15",
      "title": "一种基于独立成分分析的HOA信号压缩方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "徐佳浩"
      ],
      "year": 2021,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-du-li-cheng-fen-fen-xi-de-hoaxin-hao-ya-suo-fang-fa",
      "sourceIndex": 53,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-du-li-cheng-fen-fen-xi-de-hoaxin-hao-ya-suo-fang-fa"
      ],
      "category": "perception",
      "number": "ZL202110518042.4",
      "type": "patent",
      "titleEn": "HOA signal compression using independent component analysis",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-20ef4b2dd3",
      "title": "一种适应环境的声场重放空间解码方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "葛钟书"
      ],
      "year": 2021,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-gua-ying-huan-jing-de-sheng-chang-zhong-fang-kong-jian-jie-ma-fang",
      "sourceIndex": 54,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-gua-ying-huan-jing-de-sheng-chang-zhong-fang-kong-jian-jie-ma-fang"
      ],
      "category": "rendering",
      "number": "ZL202110480936.9",
      "type": "patent",
      "titleEn": "Spatial decoding for environment-adaptive sound field reproduction",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-0dc6b046f3",
      "title": "一种基于声传递函数学习的非监督声源定向方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "王奕文"
      ],
      "year": 2020,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-sheng-chuan-di-han-shu-xue-xi-de-fei-jian-du-sheng-yuan-ding",
      "sourceIndex": 62,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-sheng-chuan-di-han-shu-xue-xi-de-fei-jian-du-sheng-yuan-ding"
      ],
      "category": "perception",
      "number": "ZL202010485452.9",
      "type": "patent",
      "titleEn": "Unsupervised sound source direction estimation through acoustic transfer function learning",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-f751412cd1",
      "title": "一种说话人数未知的多通道语音分离方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "彭超"
      ],
      "year": 2020,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-shuo-hua-ren-shu-wei-zhi-de-duo-tong-dao-yu-yin-fen-chi-fang-fa",
      "sourceIndex": 63,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-shuo-hua-ren-shu-wei-zhi-de-duo-tong-dao-yu-yin-fen-chi-fang-fa"
      ],
      "category": "perception",
      "number": "ZL202010796279.4",
      "type": "patent",
      "titleEn": "Multichannel speech separation for an unknown number of speakers",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-7eceae9307",
      "title": "一种基于移动麦克风阵列的房间边界估计方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "高山"
      ],
      "year": 2020,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-yi-dong-mai-ke-feng-zhen-lie-de-fang-jian-bian-jie-gu-ji-fang",
      "sourceIndex": 65,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-yi-dong-mai-ke-feng-zhen-lie-de-fang-jian-bian-jie-gu-ji-fang"
      ],
      "category": "perception",
      "number": "ZL202010010360.5",
      "type": "patent",
      "titleEn": "Room boundary estimation with a moving microphone array",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-29b22bcf70",
      "title": "一种基于说话人嵌入空间的竞争说话人数量估计方法及系统",
      "authors": [
        "曲天书",
        "吴玺宏",
        "彭超"
      ],
      "year": 2020,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-shuo-hua-ren-qian-ru-kong-jian-de-jing-zheng-shuo-hua-ren-shu",
      "sourceIndex": 66,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-shuo-hua-ren-qian-ru-kong-jian-de-jing-zheng-shuo-hua-ren-shu"
      ],
      "category": "perception",
      "number": "ZL202010009945.5",
      "type": "patent",
      "titleEn": "A method and system for competing speaker count estimation using speaker embedding spaces",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-4f9af2ed6e",
      "title": "一种室内早期反射声定位方法及系统",
      "authors": [
        "曲天书",
        "吴玺宏",
        "陈建非"
      ],
      "year": 2020,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-shi-nei-zao-qi-fan-she-sheng-ding-wei-fang-fa-ji-xi-tong",
      "sourceIndex": 67,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-shi-nei-zao-qi-fan-she-sheng-ding-wei-fang-fa-ji-xi-tong"
      ],
      "category": "separation",
      "number": "ZL202010010386.X",
      "type": "patent",
      "titleEn": "A method and system for localizing early reflections in rooms",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-2dbdf5b35e",
      "title": "一种抗高频空间混叠的3D音频系统及实现方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "林晶"
      ],
      "year": 2020,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-kang-gao-pin-kong-jian-hun-die-de-3dyin-pin-xi-tong-ji-shi-xian-fang",
      "sourceIndex": 68,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-kang-gao-pin-kong-jian-hun-die-de-3dyin-pin-xi-tong-ji-shi-xian-fang"
      ],
      "category": "perception",
      "number": "ZL202010009944.0",
      "type": "patent",
      "titleEn": "A 3D audio system and implementation method resistant to high-frequency spatial aliasing",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-a97df84f6b",
      "title": "一种基于多任务学习的端到端声源定位方法及系统",
      "authors": [
        "曲天书",
        "吴玺宏",
        "黄炎坤"
      ],
      "year": 2019,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-duo-ren-wu-xue-xi-de-duan-dao-duan-sheng-yuan-ding-wei-fang-fa",
      "sourceIndex": 75,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-duo-ren-wu-xue-xi-de-duan-dao-duan-sheng-yuan-ding-wei-fang-fa"
      ],
      "category": "separation",
      "number": "ZL201910043338.8",
      "type": "patent",
      "titleEn": "A method and system for end-to-end sound source localization using multitask learning",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-65d85a4a6e",
      "title": "一种基于波束成形的多说话者语音分离方法及系统",
      "authors": [
        "曲天书",
        "吴玺宏",
        "彭超"
      ],
      "year": 2019,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-bo-shu-cheng-xing-de-duo-shuo-hua-zhe-yu-yin-fen-chi-fang-fa",
      "sourceIndex": 76,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-bo-shu-cheng-xing-de-duo-shuo-hua-zhe-yu-yin-fen-chi-fang-fa"
      ],
      "category": "perception",
      "number": "ZL201910001150.7",
      "type": "patent",
      "titleEn": "A method and system for multitalker speech separation using beamforming",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-84168fa083",
      "title": "一种基于深度神经网络的个性化头相关传输函数建模方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "张梦帆"
      ],
      "year": 2018,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-shen-du-shen-jing-wang-luo-de-ge-xing-hua-tou-xiang-guan-chuan",
      "sourceIndex": 82,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-shen-du-shen-jing-wang-luo-de-ge-xing-hua-tou-xiang-guan-chuan"
      ],
      "category": "rendering",
      "number": "ZL201810182617.8",
      "type": "patent",
      "titleEn": "Individualized head-related transfer function modeling using deep neural networks",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-4b4b03a2de",
      "title": "一种基于扬声器阵列的虚拟听觉环境可听化实现方法及系统",
      "authors": [
        "曲天书",
        "吴玺宏",
        "葛钟书"
      ],
      "year": 2018,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-yang-sheng-qi-zhen-lie-de-xu-ni-ting-jue-huan-jing-ke-ting-hua",
      "sourceIndex": 83,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-yang-sheng-qi-zhen-lie-de-xu-ni-ting-jue-huan-jing-ke-ting-hua"
      ],
      "category": "perception",
      "number": "ZL201810066540.8",
      "type": "patent",
      "titleEn": "A method and system for auralizing virtual auditory environments with a loudspeaker array",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-70edff2f35",
      "title": "一种应用于多声源环境的分频定位方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "高山"
      ],
      "year": 2018,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ying-yong-yu-duo-sheng-yuan-huan-jing-de-fen-pin-ding-wei-fang-fa",
      "sourceIndex": 84,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ying-yong-yu-duo-sheng-yuan-huan-jing-de-fen-pin-ding-wei-fang-fa"
      ],
      "category": "separation",
      "issue": "发明",
      "number": "ZL201810004440.2",
      "type": "patent",
      "titleEn": "Frequency-band localization in environments with multiple sound sources",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-01abc14089",
      "title": "一种基于神经网络的声源定位方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "黄炎坤"
      ],
      "year": 2017,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-shen-jing-wang-luo-de-sheng-yuan-ding-wei-fang-fa",
      "sourceIndex": 85,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-shen-jing-wang-luo-de-sheng-yuan-ding-wei-fang-fa"
      ],
      "category": "separation",
      "issue": "发明",
      "number": "ZL201711428934.5",
      "type": "patent",
      "titleEn": "Sound source localization using neural networks",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-41495fe3f0",
      "title": "一种面向频带扩展的生成式对抗网络训练方法及音频编码、解码方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "黄庆博"
      ],
      "year": 2017,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-mian-xiang-pin-dai-kuo-zhan-de-sheng-cheng-shi-dui-kang-wang-luo-xun",
      "sourceIndex": 87,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-mian-xiang-pin-dai-kuo-zhan-de-sheng-cheng-shi-dui-kang-wang-luo-xun"
      ],
      "category": "perception",
      "number": "ZL201710992311.4",
      "type": "patent",
      "titleEn": "Training a generative adversarial network for bandwidth extension, and audio coding and decoding methods",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-c59110452c",
      "title": "一种基于声传递函数的声源定位方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "宋涛"
      ],
      "year": 2017,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-sheng-chuan-di-han-shu-de-sheng-yuan-ding-wei-fang-fa",
      "sourceIndex": 89,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-sheng-chuan-di-han-shu-de-sheng-yuan-ding-wei-fang-fa"
      ],
      "category": "separation",
      "number": "ZL201710198420.9",
      "type": "patent",
      "titleEn": "Sound source localization using acoustic transfer functions",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-5dc25ac516",
      "title": "一种面向不规则扬声器摆放的Ambisonics匹配投影解码方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "黄智超"
      ],
      "year": 2017,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-mian-xiang-bu-gui-ze-yang-sheng-qi-bai-fang-de-ambisonicspi-pei-tou",
      "sourceIndex": 90,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-mian-xiang-bu-gui-ze-yang-sheng-qi-bai-fang-de-ambisonicspi-pei-tou"
      ],
      "category": "encoding",
      "number": "ZL201710283323.X",
      "type": "patent",
      "titleEn": "Ambisonics matching projection decoding for irregular loudspeaker layouts",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-5bc02fa1f5",
      "title": "一种基于相位补偿的异步头相关传输函数测量方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "张梦帆",
        "朱风云"
      ],
      "year": 2016,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E5%9F%BA%E4%BA%8E%E7%9B%B8%E4%BD%8D%E8%A1%A5%E5%81%BF%E7%9A%84%E5%BC%82%E6%AD%A5%E5%A4%B4%E7%9B%B8%E5%85%B3%E4%BC%A0%E8%BE%93%E5%87%BD%E6%95%B0%E6%B5%8B%E9%87%8F%E6%96%B9%E6%B3%95",
      "sourceIndex": 96,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E5%9F%BA%E4%BA%8E%E7%9B%B8%E4%BD%8D%E8%A1%A5%E5%81%BF%E7%9A%84%E5%BC%82%E6%AD%A5%E5%A4%B4%E7%9B%B8%E5%85%B3%E4%BC%A0%E8%BE%93%E5%87%BD%E6%95%B0%E6%B5%8B%E9%87%8F%E6%96%B9%E6%B3%95"
      ],
      "category": "rendering",
      "number": "ZL201610243270.4",
      "type": "patent",
      "titleEn": "Asynchronous head-related transfer function measurement using phase compensation",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-f2754cf49c",
      "title": "基于理想软阈值掩模IRM的多音频对象编解码方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "张爽",
        "黄庆博"
      ],
      "year": 2016,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E5%9F%BA%E4%BA%8E%E7%90%86%E6%83%B3%E8%BD%AF%E9%98%88%E5%80%BC%E6%8E%A9%E6%A8%A1irm%E7%9A%84%E5%A4%9A%E9%9F%B3%E9%A2%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E8%A7%A3%E7%A0%81%E6%96%B9%E6%B3%95",
      "sourceIndex": 97,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/%E5%9F%BA%E4%BA%8E%E7%90%86%E6%83%B3%E8%BD%AF%E9%98%88%E5%80%BC%E6%8E%A9%E6%A8%A1irm%E7%9A%84%E5%A4%9A%E9%9F%B3%E9%A2%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E8%A7%A3%E7%A0%81%E6%96%B9%E6%B3%95"
      ],
      "category": "encoding",
      "number": "ZL 201610861273.4",
      "type": "patent",
      "titleEn": "Multiple audio object coding and decoding using ideal ratio masks",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-0d03d4f979",
      "title": "一种3D录音系统球面麦克风阵列分布方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "高山"
      ],
      "year": 2015,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D3d%E5%BD%95%E9%9F%B3%E7%B3%BB%E7%BB%9F%E7%90%83%E9%9D%A2%E9%BA%A6%E5%85%8B%E9%A3%8E%E9%98%B5%E5%88%97%E5%88%86%E5%B8%83%E6%96%B9%E6%B3%95",
      "sourceIndex": 99,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D3d%E5%BD%95%E9%9F%B3%E7%B3%BB%E7%BB%9F%E7%90%83%E9%9D%A2%E9%BA%A6%E5%85%8B%E9%A3%8E%E9%98%B5%E5%88%97%E5%88%86%E5%B8%83%E6%96%B9%E6%B3%95"
      ],
      "category": "perception",
      "number": "ZL201510795213.2",
      "type": "patent",
      "titleEn": "Spherical microphone array arrangement for a 3D recording system",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-1e4e8d83cc",
      "title": "一种三维环绕声重放系统的扬声器环境自适应校准方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "黄智超"
      ],
      "year": 2015,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E4%B8%89%E7%BB%B4%E7%8E%AF%E7%BB%95%E5%A3%B0%E9%87%8D%E6%94%BE%E7%B3%BB%E7%BB%9F%E7%9A%84%E6%89%AC%E5%A3%B0%E5%99%A8%E7%8E%AF%E5%A2%83%E8%87%AA%E9%80%82%E5%BA%94%E6%A0%A1%E5%87%86%E6%96%B9%E6%B3%95",
      "sourceIndex": 100,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E4%B8%89%E7%BB%B4%E7%8E%AF%E7%BB%95%E5%A3%B0%E9%87%8D%E6%94%BE%E7%B3%BB%E7%BB%9F%E7%9A%84%E6%89%AC%E5%A3%B0%E5%99%A8%E7%8E%AF%E5%A2%83%E8%87%AA%E9%80%82%E5%BA%94%E6%A0%A1%E5%87%86%E6%96%B9%E6%B3%95"
      ],
      "category": "rendering",
      "number": "ZL201510490058.3",
      "type": "patent",
      "titleEn": "Environment-adaptive loudspeaker adjustment for a 3D surround sound reproduction system",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-92048120cf",
      "title": "一种基于声道间传递函数的参数立体声编码、解码方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "黄庆博"
      ],
      "year": 2015,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E5%9F%BA%E4%BA%8E%E5%A3%B0%E9%81%93%E9%97%B4%E4%BC%A0%E9%80%92%E5%87%BD%E6%95%B0%E7%9A%84%E5%8F%82%E6%95%B0%E7%AB%8B%E4%BD%93%E5%A3%B0%E7%BC%96%E7%A0%81%E3%80%81%E8%A7%A3%E7%A0%81%E6%96%B9%E6%B3%95",
      "sourceIndex": 101,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E5%9F%BA%E4%BA%8E%E5%A3%B0%E9%81%93%E9%97%B4%E4%BC%A0%E9%80%92%E5%87%BD%E6%95%B0%E7%9A%84%E5%8F%82%E6%95%B0%E7%AB%8B%E4%BD%93%E5%A3%B0%E7%BC%96%E7%A0%81%E3%80%81%E8%A7%A3%E7%A0%81%E6%96%B9%E6%B3%95"
      ],
      "category": "perception",
      "number": "ZL201510915572.7",
      "type": "patent",
      "titleEn": "Parametric stereo coding and decoding using interchannel transfer functions",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-5ce734ea05",
      "title": "一种基于基追踪的音频无损压缩编码、解码方法及系统",
      "authors": [
        "曲天书",
        "吴玺宏",
        "何文欣"
      ],
      "year": 2013,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E5%9F%BA%E4%BA%8E%E5%9F%BA%E8%BF%BD%E8%B8%AA%E7%9A%84%E9%9F%B3%E9%A2%91%E6%97%A0%E6%8D%9F%E5%8E%8B%E7%BC%A9%E7%BC%96%E7%A0%81%E3%80%81%E8%A7%A3%E7%A0%81%E6%96%B9%E6%B3%95%E5%8F%8A%E7%B3%BB%E7%BB%9F",
      "sourceIndex": 110,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E5%9F%BA%E4%BA%8E%E5%9F%BA%E8%BF%BD%E8%B8%AA%E7%9A%84%E9%9F%B3%E9%A2%91%E6%97%A0%E6%8D%9F%E5%8E%8B%E7%BC%A9%E7%BC%96%E7%A0%81%E3%80%81%E8%A7%A3%E7%A0%81%E6%96%B9%E6%B3%95%E5%8F%8A%E7%B3%BB%E7%BB%9F"
      ],
      "category": "encoding",
      "number": "ZL 201310169546.5",
      "type": "patent",
      "titleEn": "A method and system for lossless audio compression coding and decoding using basis pursuit",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-12baf6f365",
      "title": "一种基于正交解相关技术的参数立体声编码、解码方法",
      "authors": [
        "曲天书",
        "吴玺宏",
        "黄益超",
        "黄庆博"
      ],
      "year": 2013,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E5%9F%BA%E4%BA%8E%E6%AD%A3%E4%BA%A4%E8%A7%A3%E7%9B%B8%E5%85%B3%E6%8A%80%E6%9C%AF%E7%9A%84%E5%8F%82%E6%95%B0%E7%AB%8B%E4%BD%93%E5%A3%B0%E7%BC%96%E7%A0%81%E3%80%81%E8%A7%A3%E7%A0%81%E6%96%B9%E6%B3%95",
      "sourceIndex": 111,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E5%9F%BA%E4%BA%8E%E6%AD%A3%E4%BA%A4%E8%A7%A3%E7%9B%B8%E5%85%B3%E6%8A%80%E6%9C%AF%E7%9A%84%E5%8F%82%E6%95%B0%E7%AB%8B%E4%BD%93%E5%A3%B0%E7%BC%96%E7%A0%81%E3%80%81%E8%A7%A3%E7%A0%81%E6%96%B9%E6%B3%95"
      ],
      "category": "perception",
      "number": "ZL 201310745761.5",
      "type": "patent",
      "titleEn": "Parametric stereo coding and decoding using orthogonal decorrelation",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-502a3daefe",
      "title": "一种基于整形小波变换的音频无损压缩编码、解码方法",
      "authors": [
        "吴玺宏",
        "曲天书",
        "迟惠生",
        "高懿",
        "何文欣",
        "张搏"
      ],
      "year": 2010,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E5%9F%BA%E4%BA%8E%E6%95%B4%E5%BD%A2%E5%B0%8F%E6%B3%A2%E5%8F%98%E6%8D%A2%E7%9A%84%E9%9F%B3%E9%A2%91%E6%97%A0%E6%8D%9F%E5%8E%8B%E7%BC%A9%E7%BC%96%E7%A0%81%E3%80%81%E8%A7%A3%E7%A0%81%E6%96%B9%E6%B3%95",
      "sourceIndex": 117,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E5%9F%BA%E4%BA%8E%E6%95%B4%E5%BD%A2%E5%B0%8F%E6%B3%A2%E5%8F%98%E6%8D%A2%E7%9A%84%E9%9F%B3%E9%A2%91%E6%97%A0%E6%8D%9F%E5%8E%8B%E7%BC%A9%E7%BC%96%E7%A0%81%E3%80%81%E8%A7%A3%E7%A0%81%E6%96%B9%E6%B3%95"
      ],
      "category": "encoding",
      "number": "ZL201010281033.X",
      "type": "patent",
      "titleEn": "Lossless audio compression coding and decoding using an integer wavelet transform",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-0672a24f90",
      "title": "一种多层索引语音文档检索方法",
      "authors": [
        "吴玺宏",
        "迟惠生",
        "曲天书",
        "万广鲁"
      ],
      "year": 2009,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E5%A4%9A%E5%B1%82%E7%B4%A2%E5%BC%95%E8%AF%AD%E9%9F%B3%E6%96%87%E6%A1%A3%E6%A3%80%E7%B4%A2%E6%96%B9%E6%B3%95",
      "sourceIndex": 122,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E5%A4%9A%E5%B1%82%E7%B4%A2%E5%BC%95%E8%AF%AD%E9%9F%B3%E6%96%87%E6%A1%A3%E6%A3%80%E7%B4%A2%E6%96%B9%E6%B3%95"
      ],
      "category": "perception",
      "number": "ZL200910131828.X",
      "type": "patent",
      "titleEn": "Speech document retrieval with multiple levels of indexing",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-6816b454d1",
      "title": "制造适合汉语语音编码策略的人工耳蜗的方法",
      "authors": [
        "迟惠生",
        "吴玺宏",
        "曲天书",
        "屈宏伟"
      ],
      "year": 2005,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E5%88%B6%E9%80%A0%E9%80%82%E5%90%88%E6%B1%89%E8%AF%AD%E8%AF%AD%E9%9F%B3%E7%BC%96%E7%A0%81%E7%AD%96%E7%95%A5%E7%9A%84%E4%BA%BA%E5%B7%A5%E8%80%B3%E8%9C%97%E7%9A%84%E6%96%B9%E6%B3%95",
      "sourceIndex": 130,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/%E5%88%B6%E9%80%A0%E9%80%82%E5%90%88%E6%B1%89%E8%AF%AD%E8%AF%AD%E9%9F%B3%E7%BC%96%E7%A0%81%E7%AD%96%E7%95%A5%E7%9A%84%E4%BA%BA%E5%B7%A5%E8%80%B3%E8%9C%97%E7%9A%84%E6%96%B9%E6%B3%95"
      ],
      "category": "perception",
      "number": "ZL200510011783.4",
      "type": "patent",
      "titleEn": "Manufacturing a cochlear implant with a coding strategy suited to Mandarin speech",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-06cae029fd",
      "title": "基于音频的隐藏通信系统和通信方法",
      "authors": [
        "迟惠生",
        "吴玺宏",
        "张志平",
        "曲天书",
        "罗定生"
      ],
      "year": 2005,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E5%9F%BA%E4%BA%8E%E9%9F%B3%E9%A2%91%E7%9A%84%E9%9A%90%E8%97%8F%E9%80%9A%E4%BF%A1%E7%B3%BB%E7%BB%9F%E5%92%8C%E9%80%9A%E4%BF%A1%E6%96%B9%E6%B3%95",
      "sourceIndex": 131,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/%E5%9F%BA%E4%BA%8E%E9%9F%B3%E9%A2%91%E7%9A%84%E9%9A%90%E8%97%8F%E9%80%9A%E4%BF%A1%E7%B3%BB%E7%BB%9F%E5%92%8C%E9%80%9A%E4%BF%A1%E6%96%B9%E6%B3%95"
      ],
      "category": "perception",
      "number": "ZL200510069126.5",
      "type": "patent",
      "titleEn": "An audio-based covert communication system and communication method",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    },
    {
      "id": "qu-3e9ddeeb45",
      "title": "小尺度麦克风阵列抗噪系统及抗噪方法",
      "authors": [
        "迟惠生",
        "吴玺宏",
        "曲天书",
        "赵硕"
      ],
      "year": 2005,
      "venue": "中国专利",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E5%B0%8F%E5%B0%BA%E5%BA%A6%E9%BA%A6%E5%85%8B%E9%A3%8E%E9%98%B5%E5%88%97%E6%8A%97%E5%99%AA%E7%B3%BB%E7%BB%9F%E5%8F%8A%E6%8A%97%E5%99%AA%E6%96%B9%E6%B3%95",
      "sourceIndex": 132,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/%E5%B0%8F%E5%B0%BA%E5%BA%A6%E9%BA%A6%E5%85%8B%E9%A3%8E%E9%98%B5%E5%88%97%E6%8A%97%E5%99%AA%E7%B3%BB%E7%BB%9F%E5%8F%8A%E6%8A%97%E5%99%AA%E6%96%B9%E6%B3%95"
      ],
      "category": "perception",
      "number": "ZL200510086876.3",
      "type": "patent",
      "titleEn": "A noise-resistant small microphone array system and method",
      "titleEnTranslated": true,
      "venueEn": "Chinese patent"
    }
  ],
  "software": [
    {
      "id": "qu-cf396c2525",
      "title": "HOA Processing Application渲染工具软件",
      "authors": [
        "曲天书"
      ],
      "year": 2025,
      "venue": "软件著作权",
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/hoa-processing-applicationxuan-ran-gong-ju-ruan-jian",
      "sourceIndex": 14,
      "references": [
        "http://scholar.pku.edu.cn/qutianshu/publications/hoa-processing-applicationxuan-ran-gong-ju-ruan-jian"
      ],
      "category": "perception",
      "number": "软著 2025SR1653141",
      "type": "software",
      "titleEn": "HOA Processing Application: HOA rendering software",
      "titleEnTranslated": true,
      "venueEn": "Software copyright registration"
    }
  ],
  "coverage": [
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/envelope-separation-aided-multi-task-learning-model-blind-source-counting-and",
      "id": "qu-8520e1d2fd"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/learning-based-automotive-sound-field-reproduction-method-using-plane-wave",
      "id": "qu-a07b08acaa"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/flow-hoa-generative-joint-optimization-ambisonics-encoding-flow-matching",
      "id": "flow-hoa"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/parametric-dual-channel-audio-coding-learned-time-frequency-masking",
      "id": "qu-931ae84a14"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/recursive-attractor-network-long-form-sound-source-localization-and-identity",
      "id": "qu-a2d10657f7"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/perceptual-evaluation-method-binaural-rendering-algorithms-minimum-audible",
      "id": "qu-deef2b3edc"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/gaussian-splatting-based-head-and-pinna-reconstruction-individualized-hrtf",
      "id": "qu-d1d8c557f4"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/spherical-harmonic-beamforming-based-ambisonics-encoding-method-frequency-and",
      "id": "qu-3f2a8b8319"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/spherical-harmonic-beamforming-basedambisonics-encoding-and-upscaling-method",
      "id": "shb-ae"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/moving-sound-source-localization-and-tracking-based-envelope-estimation",
      "id": "qu-4b238438f9"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/room-geometry-inference-using-localization-soundsource-and-its-early",
      "id": "qu-f2c72aade4"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/cross-attention-inspired-selective-state-space-models-target-sound-extraction",
      "id": "crossmamba"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/ta-v2a-textually-assisted-video-audio-generation",
      "id": "ta-v2a"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/automotive-sound-field-reproduction-using-deep-optimization-spatial-domain",
      "id": "automotive"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/hoa-processing-applicationxuan-ran-gong-ju-ruan-jian",
      "id": "qu-cf396c2525"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/joint-estimation-sound-source-position-and-room-boundaries-using-multitask",
      "id": "qu-b846624a69"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-kong-jian-neng-liang-tu-yue-shu-yu-shen-du-you-hua-de-che-cang",
      "id": "qu-9c46f18246"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-jiao-cha-zhu-yi-li-zhuang-tai-kong-jian-mo-xing-de-mu-biao",
      "id": "qu-4165075771"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-bao-luo-gu-ji-de-wei-zhi-sheng-yuan-shu-liang-yi-dong-sheng",
      "id": "qu-ca04fdfe52"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-wen-ben-fu-zhu-de-shi-pin-dao-yin-pin-sheng-cheng-fang-fa",
      "id": "qu-2073ee9ace"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/ji-yu-qiu-mai-ke-feng-zhen-lie-de-gao-jie-sheng-chang-ji-lu-yu-zhong-fang-zai",
      "id": "qu-dc65b29496"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/ji-yu-zhi-da-sheng-yuan-yu-yi-jie-fan-she-sheng-yuan-ding-wei-de-fang-jian-ji",
      "id": "qu-f79e441215"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/leveraging-sound-source-trajectories-universal-sound-separation",
      "id": "trajectories"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/hybrid-deep-online-learning-based-method-active-noise-controlin-wave-domain",
      "id": "qu-4ee662a74a"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/automotive-acoustic-channel-equalization-method-using-convex-optimization",
      "id": "qu-930588f45d"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/doa-informed-self-supervised-learning-method-soundsource-enhancement",
      "id": "qu-5b9a330246"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/exploiting-motion-information-sound-source-localizationand-tracking",
      "id": "qu-a296b2aaa3"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/hybrid-time-and-time-frequency-domain-implicit-neuralrepresentation-acoustic",
      "id": "qu-730d8b7bad"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/spatial-covariant-matrix-based-learning-doa-estimationin-spherical-harmonics",
      "id": "qu-60b2c39ccf"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-mo-tai-fen-jie-yu-tu-you-hua-de-che-cang-sheng-xue-xin-dao-jun",
      "id": "qu-763d9025b4"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/shi-nei-sheng-chang-de-biao-zheng-fang-fa-ji-shi-nei-sheng-chang-shi-yu-biao",
      "id": "qu-f0f0acbb51"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/shi-nei-sheng-chang-de-biao-zheng-fang-fa-ji-shi-yu-shi-pin-yu-hun-he-mo-xing",
      "id": "qu-2b68bca957"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/sound-event-localization-and-detection-based-iterative-separation-embedding",
      "id": "qu-ee153e0ffd"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/rendering-near-field-point-sound-sources-through-iterative-weighted-crosstalk",
      "id": "qu-43625d8865"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/tt-net-dual-path-transformer-based-sound-field-translation-spherical-harmonic",
      "id": "qu-7e0d1cbfe2"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-shuang-lu-zi-zhu-yi-li-ji-zhi-xue-xi-de-duo-dian-cai-yang",
      "id": "qu-a31fa1feda"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-yang-sheng-qi-zhen-lie-de-jin-chang-sheng-yuan-zhong-fang-fang",
      "id": "qu-7d17c37bdb"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-shen-du-xue-xi-he-zhu-xie-fen-jie-de-kong-jian-zhu-dong-jiang",
      "id": "qu-fcc7439a82"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/physical-model-based-self-supervised-learning-method-signal-enhancement-und-0",
      "id": "qu-08f982abd6"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/higher-order-ambisonics-compression-method-based-onautoencoder",
      "id": "qu-08546468ea"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/localization-direct-source-and-early-reflections-using-hoa-processing-and-d-0",
      "id": "qu-f5dd520fe7"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/wgan-upscaling-ambisonic-sound-scenes-using-wasserstein-generative",
      "id": "qu-d8adffae31"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/binaural-processing-deficit-and-cognitive-impairment-alzheimers-disease",
      "id": "qu-23bd7f352d"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/multi-channel-speech-separation-system-unknown-number-multiple-speakers",
      "id": "qu-353d5ce740"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-sheng-ya-tu-xue-xi-de-qiu-xie-xi-shu-sheng-jie-fang-fa-ji",
      "id": "qu-9268dcec59"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-xi-shu-wang-luo-mo-xing-de-sheng-chang-qiu-xie-han-shu-xin-hao",
      "id": "qu-23735fbc20"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-fang-jian-hun-xiang-huan-jing-xia-zhi-da-sheng-he-yi-ci-fan-she",
      "id": "qu-5e22f0d01b"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/sparse-dnn-model-frequency-expanding-higher-order-ambisonics-encoding-process",
      "id": "qu-0b6c80e0a5"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/higher-order-ambisonics-compression-method-based-independent-component",
      "id": "qu-48b7b41320"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/individualized-hrtf-based-binaural-renderer-higher-order-ambisonics",
      "id": "qu-3a6ae81fd4"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/early-reflections-based-speech-enhancement",
      "id": "qu-ae48a7de0f"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/partially-matching-projection-decoding-method-evaluation-under-different",
      "id": "qu-e781f20784"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/sensitivity-break-interaural-correlation-frequency-gliding-noises",
      "id": "qu-850644a50c"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-du-li-cheng-fen-fen-xi-de-hoaxin-hao-ya-suo-fang-fa",
      "id": "qu-f36827fa15"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-gua-ying-huan-jing-de-sheng-chang-zhong-fang-kong-jian-jie-ma-fang",
      "id": "qu-20ef4b2dd3"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/deep-modal-real-time-impact-sound-synthesis-arbitrary-shapes",
      "id": "qu-f628ebae2b"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/anti-spatial-aliasing-hoa-encoding-method-based-aliasing-projection-matrix",
      "id": "qu-a45184b0e4"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/time-domain-unsupervised-learning-based-sound-source-localization-method",
      "id": "qu-0f2b676bda"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/competing-speaker-count-estimation-fusion-spectral-and-spatial-embedding",
      "id": "qu-c60937e73c"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/ambisonic-partially-matching-projection-decoding-method-near-field-sound",
      "id": "qu-815d58c363"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/direction-arrival-estimation-based-transfer-function-learning-using",
      "id": "qu-844323e144"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/individual-distance-dependent-hrtfs-modeling-through-few-anthropometric",
      "id": "qu-1e46a3032b"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-sheng-chuan-di-han-shu-xue-xi-de-fei-jian-du-sheng-yuan-ding",
      "id": "qu-0dc6b046f3"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-shuo-hua-ren-shu-wei-zhi-de-duo-tong-dao-yu-yin-fen-chi-fang-fa",
      "id": "qu-f751412cd1"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/modeling-individual-hrtfs-based-spatial-principal-component-analysis",
      "id": "qu-30fa2c4be9"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-yi-dong-mai-ke-feng-zhen-lie-de-fang-jian-bian-jie-gu-ji-fang",
      "id": "qu-7eceae9307"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-shuo-hua-ren-qian-ru-kong-jian-de-jing-zheng-shuo-hua-ren-shu",
      "id": "qu-29b22bcf70"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-shi-nei-zao-qi-fan-she-sheng-ding-wei-fang-fa-ji-xi-tong",
      "id": "qu-4f9af2ed6e"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-kang-gao-pin-kong-jian-hun-die-de-3dyin-pin-xi-tong-ji-shi-xian-fang",
      "id": "qu-2dbdf5b35e"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/eigen-beam-based-sound-source-localization-algorithms-evaluation-non",
      "id": "qu-e163657126"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/time-domain-end-end-method-sound-source-localization-using-multi-task",
      "id": "qu-fde7fb851d"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/distance-dependent-modeling-head-related-transfer-functions",
      "id": "qu-ef735544c9"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/improvements-matching-projection-decoding-method-ambisonic-system-irregular",
      "id": "qu-5537a9056a"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/sparse-autoencoder-based-multiple-audio-objects-coding-method",
      "id": "qu-49026351f0"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/generative-adervasarial-net-based-bandwidth-extension-method-audio",
      "id": "qu-e7526c5e65"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-duo-ren-wu-xue-xi-de-duan-dao-duan-sheng-yuan-ding-wei-fang-fa",
      "id": "qu-a97df84f6b"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-bo-shu-cheng-xing-de-duo-shuo-hua-zhe-yu-yin-fen-chi-fang-fa",
      "id": "qu-65d85a4a6e"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/parametric-spatial-audio-coding-method-based-convolutional-neural-networks",
      "id": "qu-54d3a07f93"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/subjective-evaluation-virtual-room-auralization-system-based-ambisonics",
      "id": "qu-8986ed3516"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/bandwidth-extension-method-based-generative-adversarial-nets-audio",
      "id": "qu-6a02c189ff"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/high-order-ambisonics-encoding-method-using-differential-microphone-array",
      "id": "qu-865b8ea05f"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/matching-projection-decoding-method-ambisonics-system",
      "id": "qu-b4d8151910"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-shen-du-shen-jing-wang-luo-de-ge-xing-hua-tou-xiang-guan-chuan",
      "id": "qu-84168fa083"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-yang-sheng-qi-zhen-lie-de-xu-ni-ting-jue-huan-jing-ke-ting-hua",
      "id": "qu-4b4b03a2de"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ying-yong-yu-duo-sheng-yuan-huan-jing-de-fen-pin-ding-wei-fang-fa",
      "id": "qu-70edff2f35"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-shen-jing-wang-luo-de-sheng-yuan-ding-wei-fang-fa",
      "id": "qu-01abc14089"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/microphone-array-arrangement-method-high-order-ambisonics-recordings",
      "id": "qu-05040ed63c"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-mian-xiang-pin-dai-kuo-zhan-de-sheng-cheng-shi-dui-kang-wang-luo-xun",
      "id": "qu-41495fe3f0"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/selective-attention-enhances-beta-band-cortical-oscillation-speech-under",
      "id": "qu-cfe97db055"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-ji-yu-sheng-chuan-di-han-shu-de-sheng-yuan-ding-wei-fang-fa",
      "id": "qu-c59110452c"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/yi-chong-mian-xiang-bu-gui-ze-yang-sheng-qi-bai-fang-de-ambisonicspi-pei-tou",
      "id": "qu-5dc25ac516"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/accurate-decorrelation-method-parametric-stereo-coding",
      "id": "qu-806e2e2aa9"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/asynchronous-hrtf-measurement-method-based-phase-alignment",
      "id": "qu-1420ebf58a"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/environment-adaptive-loudspeaker-calibration-method-ambisonics-decoding",
      "id": "qu-dcfe795a14"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/inter-channeltransferfunctionbased-parametric-stereo-coding-system",
      "id": "qu-77ae973a0c"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/sound-source-localization-algorithm-using-microphone-array-rigid-body",
      "id": "qu-2ae61c0157"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E5%9F%BA%E4%BA%8E%E7%9B%B8%E4%BD%8D%E8%A1%A5%E5%81%BF%E7%9A%84%E5%BC%82%E6%AD%A5%E5%A4%B4%E7%9B%B8%E5%85%B3%E4%BC%A0%E8%BE%93%E5%87%BD%E6%95%B0%E6%B5%8B%E9%87%8F%E6%96%B9%E6%B3%95",
      "id": "qu-5bc02fa1f5"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E5%9F%BA%E4%BA%8E%E7%90%86%E6%83%B3%E8%BD%AF%E9%98%88%E5%80%BC%E6%8E%A9%E6%A8%A1irm%E7%9A%84%E5%A4%9A%E9%9F%B3%E9%A2%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E8%A7%A3%E7%A0%81%E6%96%B9%E6%B3%95",
      "id": "qu-f2754cf49c"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/similar-impacts-interaural-delay-and-interaural-correlation-binaural-gap",
      "id": "qu-e533a1116f"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D3d%E5%BD%95%E9%9F%B3%E7%B3%BB%E7%BB%9F%E7%90%83%E9%9D%A2%E9%BA%A6%E5%85%8B%E9%A3%8E%E9%98%B5%E5%88%97%E5%88%86%E5%B8%83%E6%96%B9%E6%B3%95",
      "id": "qu-0d03d4f979"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E4%B8%89%E7%BB%B4%E7%8E%AF%E7%BB%95%E5%A3%B0%E9%87%8D%E6%94%BE%E7%B3%BB%E7%BB%9F%E7%9A%84%E6%89%AC%E5%A3%B0%E5%99%A8%E7%8E%AF%E5%A2%83%E8%87%AA%E9%80%82%E5%BA%94%E6%A0%A1%E5%87%86%E6%96%B9%E6%B3%95",
      "id": "qu-1e4e8d83cc"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E5%9F%BA%E4%BA%8E%E5%A3%B0%E9%81%93%E9%97%B4%E4%BC%A0%E9%80%92%E5%87%BD%E6%95%B0%E7%9A%84%E5%8F%82%E6%95%B0%E7%AB%8B%E4%BD%93%E5%A3%B0%E7%BC%96%E7%A0%81%E3%80%81%E8%A7%A3%E7%A0%81%E6%96%B9%E6%B3%95",
      "id": "qu-92048120cf"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/perceived-location-specificity-perceptual-separation-induced-not-fear",
      "id": "qu-4022a05ec1"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/voice-associated-static-face-image-releases-speech-informational-masking",
      "id": "qu-645a0bb11d"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E8%BF%91%E5%9C%BA%E7%BB%93%E6%9E%84%E5%8C%96%E5%A4%B4%E7%9B%B8%E5%85%B3%E4%BC%A0%E9%80%92%E5%87%BD%E6%95%B0%E7%9A%84%E6%B5%8B%E9%87%8F%E4%B8%8E%E5%88%86%E6%9E%90",
      "id": "qu-5edfdaea78"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E9%9D%A2%E5%90%91%E6%99%BA%E8%83%BD%E7%A7%91%E5%AD%A6%E7%9A%84%E6%9C%BA%E5%99%A8%E6%84%9F%E7%9F%A5%E5%AE%9E%E9%AA%8C%E8%AF%BE%E5%BB%BA%E8%AE%BE",
      "id": "qu-b30afadeb3"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/audio-lossless-codingdecoding-method-using-basis-pursuit-algorithm",
      "id": "qu-4d69c00a1e"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/head-related-transfer-function-measurement",
      "id": "qu-4632e0a3d3"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/perceived-elevation-cued-images-rotating-horizontal-planes",
      "id": "qu-779bc0fded"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/interaural-time-difference-thresholds-function-frequency",
      "id": "qu-51d3734ba6"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E5%9F%BA%E4%BA%8E%E5%9F%BA%E8%BF%BD%E8%B8%AA%E7%9A%84%E9%9F%B3%E9%A2%91%E6%97%A0%E6%8D%9F%E5%8E%8B%E7%BC%A9%E7%BC%96%E7%A0%81%E3%80%81%E8%A7%A3%E7%A0%81%E6%96%B9%E6%B3%95%E5%8F%8A%E7%B3%BB%E7%BB%9F",
      "id": "qu-5ce734ea05"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E5%9F%BA%E4%BA%8E%E6%AD%A3%E4%BA%A4%E8%A7%A3%E7%9B%B8%E5%85%B3%E6%8A%80%E6%9C%AF%E7%9A%84%E5%8F%82%E6%95%B0%E7%AB%8B%E4%BD%93%E5%A3%B0%E7%BC%96%E7%A0%81%E3%80%81%E8%A7%A3%E7%A0%81%E6%96%B9%E6%B3%95",
      "id": "qu-12baf6f365"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/aging-effects-detection-spectral-changes-induced-break-sound-correlation",
      "id": "qu-4c8872b7fd"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/detection-spectral-changes-induced-break-sound-correlation-younger-adults-and",
      "id": "qu-4d337d791d"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/using-low-frequency-threshold-interaural-time-differences-test-models",
      "id": "qu-536a8dee15"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/introduction-avs-audio-lossless-codingdecoding-standard",
      "id": "qu-796fcfcc60"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/perceptual-fusion-tendency-speech-sounds",
      "id": "qu-750bc2e39c"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E5%9F%BA%E4%BA%8E%E6%95%B4%E5%BD%A2%E5%B0%8F%E6%B3%A2%E5%8F%98%E6%8D%A2%E7%9A%84%E9%9F%B3%E9%A2%91%E6%97%A0%E6%8D%9F%E5%8E%8B%E7%BC%A9%E7%BC%96%E7%A0%81%E3%80%81%E8%A7%A3%E7%A0%81%E6%96%B9%E6%B3%95",
      "id": "qu-502a3daefe"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/relationship-between-distance-and-binaural-cues-sound-source-localization",
      "id": "qu-ffe750a83c"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E5%9F%BA%E4%BA%8E%E6%8F%90%E5%8D%87%E5%B0%8F%E6%B3%A2%E5%8F%98%E6%8D%A2%E7%9A%84%E9%9F%B3%E9%A2%91%E6%97%A0%E6%8D%9F%E7%BC%96%E8%A7%A3%E7%A0%81%E6%96%B9%E6%B3%95",
      "id": "qu-bf92a91fc5"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%BB%8E%E6%9C%89%E6%8D%9F%E5%88%B0%E6%97%A0%E6%8D%9F%E7%9A%84%E9%9F%B3%E9%A2%91%E7%BC%96%E8%A7%A3%E7%A0%81%E6%A1%86%E6%9E%B6",
      "id": "qu-5d5887d763"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/measurement-structural-head-related-transfer-functions-proximal-region",
      "id": "qu-3a4a22e8be"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E5%A4%9A%E5%B1%82%E7%B4%A2%E5%BC%95%E8%AF%AD%E9%9F%B3%E6%96%87%E6%A1%A3%E6%A3%80%E7%B4%A2%E6%96%B9%E6%B3%95",
      "id": "qu-0672a24f90"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/distance-dependent-head-related-transfer-functions-measured-high-spatial",
      "id": "qu-9276816fe6"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/distance-dependent-head-related-transfer-function-database-kemar",
      "id": "qu-829637e3b1"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/frequency-importance-function-mandarin-chinese-speech",
      "id": "qu-dcd58dbaca"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/perceptual-integration-between-target-speech-and-target-speech-reflection",
      "id": "qu-4d05b149d3"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E8%BF%91%E5%9C%BA%E5%A4%B4%E7%9B%B8%E5%85%B3%E4%BC%A0%E8%BE%93%E5%87%BD%E6%95%B0%E7%9A%84%E6%B5%8B%E9%87%8F%E4%B8%8E%E5%88%86%E6%9E%90",
      "id": "qu-9bef27d23d"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/novel-objective-spatial-quality-evaluation-method-reproduced-sound",
      "id": "qu-3c2bbbaab0"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/simulated-phase-locking-stimulation-improved-signal-processing-strategy",
      "id": "qu-79737d07ac"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E5%88%B6%E9%80%A0%E9%80%82%E5%90%88%E6%B1%89%E8%AF%AD%E8%AF%AD%E9%9F%B3%E7%BC%96%E7%A0%81%E7%AD%96%E7%95%A5%E7%9A%84%E4%BA%BA%E5%B7%A5%E8%80%B3%E8%9C%97%E7%9A%84%E6%96%B9%E6%B3%95",
      "id": "qu-6816b454d1"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E5%9F%BA%E4%BA%8E%E9%9F%B3%E9%A2%91%E7%9A%84%E9%9A%90%E8%97%8F%E9%80%9A%E4%BF%A1%E7%B3%BB%E7%BB%9F%E5%92%8C%E9%80%9A%E4%BF%A1%E6%96%B9%E6%B3%95",
      "id": "qu-06cae029fd"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E5%B0%8F%E5%B0%BA%E5%BA%A6%E9%BA%A6%E5%85%8B%E9%A3%8E%E9%98%B5%E5%88%97%E6%8A%97%E5%99%AA%E7%B3%BB%E7%BB%9F%E5%8F%8A%E6%8A%97%E5%99%AA%E6%96%B9%E6%B3%95",
      "id": "qu-3e9ddeeb45"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E6%94%B9%E8%BF%9B%E7%9A%84aeda%E5%A3%B0%E6%BA%90%E5%AE%9A%E4%BD%8D%E5%8F%8A%E8%B7%9F%E8%B8%AA%E7%AE%97%E6%B3%95",
      "id": "qu-3145db9cd0"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E6%94%B9%E8%BF%9B%E7%9A%84%E5%9F%BA%E4%BA%8E%E5%8F%8C%E9%BA%A6%E5%85%8B%E9%A3%8E%E9%98%B5%E5%88%97%E7%9A%84%E8%87%AA%E9%80%82%E5%BA%94%E9%9B%B6%E9%99%90%E6%B3%A2%E6%9D%9F%E5%BD%A2%E6%88%90%E8%AF%AD%E9%9F%B3%E5%A2%9E%E5%BC%BA%E6%96%B9%E6%B3%95",
      "id": "qu-34c31a7770"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E6%94%B9%E8%BF%9B%E7%9A%84%E6%97%A0%E5%8F%82%E8%80%83%E6%BA%90%E7%9A%84%E5%AE%A2%E8%A7%82%E9%9F%B3%E8%B4%A8%E8%AF%84%E4%BB%B7%E6%96%B9%E6%B3%95",
      "id": "qu-7abb36a297"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/%E4%B8%80%E7%A7%8D%E6%95%B0%E5%AD%97%E5%8A%A9%E5%90%AC%E5%99%A8%E7%B3%BB%E7%BB%9F%E7%A0%94%E7%A9%B6%E5%BC%80%E5%8F%91%E5%B9%B3%E5%8F%B0%E7%9A%84%E5%AE%9E%E7%8E%B0",
      "id": "qu-f84126bdfd"
    },
    {
      "source": "http://scholar.pku.edu.cn/qutianshu/publications/location-based-auditory-inhibition-return-perceptually-drvien",
      "id": "qu-6fb4b85c83"
    }
  ],
  "linksChecked": "2026-10-15"
};
