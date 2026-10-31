/* ==========================================================
   项目数据 —— 以后添加项目只需改这个文件
   ----------------------------------------------------------
   结构：
   [
     {
       group: "分类名",
       items: [
         { name: "显示名称", href: "相对路径（不含 BASE_PATH）" }
       ]
     }
   ]
   ========================================================== */

// 所有链接的公共前缀。若项目就放在根目录，改成 ""
const BASE_PATH = "projects/";

const DATA = [
  {
    group: "工具",
    items: [
      { name: "点阵动画编辑器",     href: "pixel_animation_studio.html" },
      { name: "曼陀罗",             href: "mandala.html" },
      { name: "墨韵",               href: "ink_play.html" },
      { name: "可视化神经网络手册", href: "neuro_forge.html" },
      { name: "3D 模型节点编辑器",  href: "node_forge.html" },
      { name: "图像节点编辑器",     href: "pixel_flow.html" },
      { name: "快艇骰子",           href: "dice.html" },
      { name: "图片集",             href: "photo_gallery/index.html" },
      { name: "Pixel Music Canvas", href: "pixel_music_canvas.html" },
      { name: "JSON 数据分析",      href: "json_insight.html" },
      { name: "图片混淆器",         href: "image_scrambler.html" },
      { name: "ApiLite", href: "api_lite.html" }
    ],
  },
  {
    group: "数学之美",
    items: [
      { name: "二进制绘制",    href: "bitpaint.html" },
      { name: "线性代数之美",  href: "beauty_of_linear_algebra.html" },
      { name: "傅里叶变换",    href: "fourier_lab.html" },
      { name: "数字电路之美",  href: "digital_circuit_aesthetics.html" },
      { name: "AI 简史",       href: "ai_brief_history.html" },
      { name: "CSS Transform", href: "css_transform.html" },
      { name: "音频调音",      href: "audio_core_eq_lab.html" },
    ],
  },
  {
    group: "网页设计",
    items: [
      { name: "设计网页 0", href: "page_0.html" },
      { name: "设计网页 1", href: "page_1.html" },
      { name: "后台 0",  href: "nova_admin_0.html" },
    ],
  },
];