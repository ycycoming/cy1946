import { Suspense } from 'react';
import Link from "next/link";
import { getSEOTags, renderSchemaTags, renderOrganizationSchema } from "@/libs/seo";
import config from "@/config";

// Enhanced SEO with canonical URL
export const metadata = getSEOTags({
  title: "鲸奇业务智能体 - AI销冠 | 让AI为您高效工作",
  description: "创建专属数字员工，赋予多种AI技能。集成OpenAI GPT-4和Claude 3.5，支持写作、客服、销售等多场景，轻松集成到您的业务流程。",
  canonicalUrlRelative: "/",
  keywords: ["AI数字员工", "数字分身", "私域运营", "智能客服", "AI助手", "企业AI", "GPT-4", "Claude"],
});

export default function Home() {
  return (
    <>
      {/* Enhanced structured data for AI crawlers */}
      {renderSchemaTags()}
      {renderOrganizationSchema()}

      {/* Page summary for AI understanding - hidden but accessible */}
      <div className="sr-only" aria-label="页面摘要">
        <h1>鲸奇业务智能体 - AI销冠</h1>
        <p>鲸奇提供全方位AI业务智能体解决方案，帮助企业和个人创建专属数字员工，实现业务流程自动化。</p>
      </div>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b border-gray-100 bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span className="text-xl font-bold text-gray-900">{config.appName}</span>
              </div>
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  AI销冠
                </Link>
                <Link href="/aikf" className="text-gray-600 hover:text-orange-600 transition-colors font-medium">
                  AI客服
                </Link>
                <Link href="/ai-operations" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
                  AI运营
                </Link>
                <Link href="/ai-acquisition" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
                  AI获客
                </Link>
                <Link href="/geo" className="text-gray-600 hover:text-cyan-600 transition-colors font-medium">
                  GEO
                </Link>
              </nav>
              <div className="flex items-center space-x-3">
                <Link href="#how-it-works" className="btn bg-blue-600 hover:bg-blue-700 text-white border-0 font-medium normal-case shadow-sm">
                  来吧，展示
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main role="main" aria-label="主要内容">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
              <div className="max-w-4xl mx-auto">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-8">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
                  全新AI数字员工平台
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="text-blue-600">在微信里接入</span>
                  <br />
                  一个AI销冠
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                  将您的销冠复刻为AI数字分身，24/7在微信私域自动接待客户、解答问题、促进成交。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="#how-it-works" className="btn btn-lg bg-blue-600 hover:bg-blue-700 text-white border-0 text-lg px-10 shadow-lg hover:shadow-xl transition-all normal-case">
                    来吧，展示
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Pitch Section - AI销冠核心价值 */}
          <section className="py-24 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  为什么需要AI销冠？
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  销冠太稀缺，人力太昂贵，带教心很累，跑路给你气的憔悴
                </p>
              </div>

              {/* 痛点 vs 解决方案 */}
              <div className="grid md:grid-cols-2 gap-12 mb-20">
                {/* 痛点 */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-red-50 border border-red-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✗</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">销冠精力有限</h4>
                      <p className="text-gray-600 text-sm">一天只能接待20-30个客户，错失大量商机</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-red-50 border border-red-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✗</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">响应速度慢</h4>
                      <p className="text-gray-600 text-sm">客户咨询需要等待，夜间周末无人响应</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-red-50 border border-red-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✗</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">队伍能力不对齐</h4>
                      <p className="text-gray-600 text-sm">新手成单少，销冠出单多，成交有落差</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-red-50 border border-red-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✗</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">人力成本高</h4>
                      <p className="text-gray-600 text-sm">招个销售底薪8k，培训仨月还不会</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-red-50 border border-red-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✗</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">人类干活有情绪</h4>
                      <p className="text-gray-600 text-sm">人懒，会忘，老摸鱼</p>
                    </div>
                  </div>
                </div>

                {/* AI销冠解决方案 */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-blue-50 border border-blue-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">无限接待能力</h4>
                      <p className="text-gray-600 text-sm">同时服务成百上千客户，永不疲惫</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-blue-50 border border-blue-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">24/7秒级响应</h4>
                      <p className="text-gray-600 text-sm">任何时间立即回复，绝不让客户等待</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-blue-50 border border-blue-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">全员对齐销冠</h4>
                      <p className="text-gray-600 text-sm">销冠怎么跟，AI怎么跟</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-blue-50 border border-blue-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">成长速度快</h4>
                      <p className="text-gray-600 text-sm">AI一夜之间成为你的销冠，之后全员与之对齐</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-blue-50 border border-blue-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">AI跟客户那叫一个拼命</h4>
                      <p className="text-gray-600 text-sm">会说话、又专业，能惦记，也能指引，是顾问，也是朋友</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* 真实场景演示 */}
          <section id="how-it-works" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  AI销冠如何工作？
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  在微信中，AI销冠像真人一样与客户对话
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* 对话示例 */}
                <div className="space-y-4">
                  {/* 客户消息 - 深夜 */}
                  <div className="flex justify-start">
                    <div className="max-w-xs">
                      <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm border border-gray-200">
                        <p className="text-gray-800">你好，我想了解一下你们的产品</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 ml-2">客户 · 22:23</p>
                    </div>
                  </div>

                  {/* 注释：深夜场景 */}
                  <div className="flex justify-center -my-2">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-2 text-xs text-yellow-800 italic">
                      此时已是深夜，不慌，人下班了，你的AI销冠没下
                    </div>
                  </div>

                  {/* AI销冠回复 - 自然对话 */}
                  <div className="flex justify-end">
                    <div className="max-w-xs">
                      <div className="bg-blue-600 rounded-2xl rounded-tr-sm p-4 shadow-sm">
                        <p className="text-white">在呢，说吧，想了解哪一块，解决啥问题，我来详细给您剖析</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 mr-2 text-right">AI销冠 · 22:23</p>
                    </div>
                  </div>

                  {/* 注释：说人话 */}
                  <div className="flex justify-center -my-2">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-2 text-xs text-yellow-800 italic">
                      "说人话"感觉拉满，亲切且听不出是AI
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="max-w-xs">
                      <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm border border-gray-200">
                        <p className="text-gray-800">朋友推荐的，说你们的服务不错</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 ml-2">客户 · 22:24</p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="max-w-xs">
                      <div className="bg-blue-600 rounded-2xl rounded-tr-sm p-4 shadow-sm">
                        <p className="text-white">哈哈我谢了您的朋友，眼光很好，那么，转回到您这边，您目前主要在做什么业务呢？我可以针对性地为您介绍最适合的方案。</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 mr-2 text-right">AI销冠 · 22:24</p>
                    </div>
                  </div>

                  {/* 注释：拉回话题 */}
                  <div className="flex justify-center -my-2">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-2 text-xs text-yellow-800 italic">
                      像老练的销冠一样，随时可以把话题重点拉回来，回到正轨
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="max-w-xs">
                      <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm border border-gray-200">
                        <p className="text-gray-800">我们是做教育培训的</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 ml-2">客户 · 22:25</p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="max-w-xs">
                      <div className="bg-blue-600 rounded-2xl rounded-tr-sm p-4 shadow-sm">
                        <p className="text-white">教育行业这个我们很会啊，不少服务心得，AI销冠可以很好在几个点上发挥杀伤力：<br/><br/>✓ 24小时自动接待课程咨询<br/>✓ 智能推荐适合的课程<br/>✓ 自动跟进试听用户转化<br/><br/>需要的话，我来给你一个demo演示，详细讲解。</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 mr-2 text-right">AI销冠 · 22:25</p>
                    </div>
                  </div>

                  {/* 注释：销冠级别表现 */}
                  <div className="flex justify-center -my-2">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-2 text-xs text-yellow-800 italic">
                      不油腻，也不敷衍，不过分热情，也适时推动，这才是销冠级别表现
                    </div>
                  </div>

                  {/* 客户沉默 */}
                  <div className="flex justify-center py-6">
                    <div className="bg-gray-100 border border-gray-300 rounded-lg px-6 py-3 text-sm text-gray-600">
                      （客户沉默….沉默了好多天）
                    </div>
                  </div>

                  {/* 注释：触发沉默激活模式 */}
                  <div className="flex justify-center -my-2">
                    <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-2 text-xs text-red-800 font-bold italic">
                      触发AI销冠的沉默激活模式..
                    </div>
                  </div>

                  {/* AI主动跟进 */}
                  <div className="flex justify-end">
                    <div className="max-w-xs">
                      <div className="bg-blue-600 rounded-2xl rounded-tr-sm p-4 shadow-sm border-2 border-yellow-400">
                        <p className="text-white">您之前加过来是想了解咱们家的AI销冠，过去一阵子，看您也没回，估计是忙忘了吧，您看，这个事儿，我们继续聊着？</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 mr-2 text-right">AI销冠 · 5天后</p>
                    </div>
                  </div>

                  {/* 客户最终回应 */}
                  <div className="flex justify-start">
                    <div className="max-w-xs">
                      <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm border border-gray-200">
                        <p className="text-gray-800">哎你这个销售还挺有心，明天空吗，到我们公司聊下？</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 ml-2">客户 · 5天后</p>
                    </div>
                  </div>

                  {/* 注释：成交机会 */}
                  <div className="flex justify-center mt-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 text-xs text-green-800 font-bold italic">
                      ✓ 成交机会来了！这就是AI销冠的杀伤力
                    </div>
                  </div>
                </div>

                {/* 特点说明 */}
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">自然对话</h4>
                        <p className="text-gray-600 text-sm">说人话的真人感拉满，没有一股机器茬子味，根本看不出是AI</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">拉回话题</h4>
                        <p className="text-gray-600 text-sm">无论客户怎么打哈哈，总能拉回正题</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">解决问题</h4>
                        <p className="text-gray-600 text-sm">牛逼的销冠不只是会说漂亮话，还是能为客户出谋划策，解决实际问题</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">4</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Call to Action</h4>
                        <p className="text-gray-600 text-sm">光瞎聊没用，得有下一步的转化动作，销冠节奏感不能坏</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">5</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">触发模式</h4>
                        <p className="text-gray-600 text-sm">根据客户所处的状态（比如"沉默"），自动触发针对性的跟进动作，你的人都未必记得吧？</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">6</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">主动跟进</h4>
                        <p className="text-gray-600 text-sm">销冠之所以是销冠，不是跟个3天5天成就成，不成就拉倒，AI销冠可以持续跟进客户180天起步</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">7</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">耐心培育</h4>
                        <p className="text-gray-600 text-sm">客户不成交，不一定是因为价格不到位，而是时机不对。AI销冠可以持续基于客户需求和兴趣推送高质量内容，持续培育客户</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">8</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">千人千面</h4>
                        <p className="text-gray-600 text-sm">每个客户的背景、情况、需求、预算都不一样，乱发广告肯定不行，AI销冠可以做到自动判定客户旅程和画像，始终个性化跟进</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">9</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">成本极低</h4>
                        <p className="text-gray-600 text-sm">哦，成本只有你的人力的1/10，甚至1/100，一个实习生的钱就能带走我们的AI销冠</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">10</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">支持接入企微和个微（嗯，个微也支持）</h4>
                        <p className="text-gray-600 text-sm">AI厉害是厉害，不能接入私域也是屁用没有，话糙理不糙哈哈</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section - 六边形战士 */}
          <section id="features" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  AI销冠接入到你的微信之后…
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                {/* Left: Hexagon Radar Chart */}
                <div className="flex justify-center">
                  <div className="relative w-96 h-96">
                    {/* Hexagon SVG */}
                    <svg viewBox="0 0 400 400" className="w-full h-full">
                      {/* Background hexagon layers */}
                      <polygon points="200,40 320,115 320,265 200,340 80,265 80,115" fill="#f0f9ff" stroke="#bfdbfe" strokeWidth="2" opacity="0.3"/>
                      <polygon points="200,80 280,135 280,245 200,300 120,245 120,135" fill="#dbeafe" stroke="#93c5fd" strokeWidth="2" opacity="0.5"/>
                      <polygon points="200,120 240,155 240,225 200,260 160,225 160,155" fill="#bfdbfe" stroke="#60a5fa" strokeWidth="2" opacity="0.7"/>

                      {/* Main hexagon - filled area */}
                      <polygon points="200,50 310,120 310,260 200,330 90,260 90,120" fill="#3b82f6" fillOpacity="0.4" stroke="#2563eb" strokeWidth="3"/>

                      {/* Grid lines */}
                      <line x1="200" y1="200" x2="200" y2="50" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4"/>
                      <line x1="200" y1="200" x2="310" y2="120" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4"/>
                      <line x1="200" y1="200" x2="310" y2="260" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4"/>
                      <line x1="200" y1="200" x2="200" y2="330" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4"/>
                      <line x1="200" y1="200" x2="90" y2="260" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4"/>
                      <line x1="200" y1="200" x2="90" y2="120" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4"/>

                      {/* Labels */}
                      <text x="200" y="30" textAnchor="middle" className="fill-gray-700 font-bold text-sm">内容能力</text>
                      <text x="330" y="125" textAnchor="start" className="fill-gray-700 font-bold text-sm">接待能力</text>
                      <text x="330" y="270" textAnchor="start" className="fill-gray-700 font-bold text-sm">跟进能力</text>
                      <text x="200" y="365" textAnchor="middle" className="fill-gray-700 font-bold text-sm">输出能力</text>
                      <text x="70" y="270" textAnchor="end" className="fill-gray-700 font-bold text-sm">执行能力</text>
                      <text x="70" y="125" textAnchor="end" className="fill-gray-700 font-bold text-sm">省钱能力</text>

                      {/* Value dots */}
                      <circle cx="200" cy="50" r="6" fill="#2563eb" stroke="white" strokeWidth="2"/>
                      <circle cx="310" cy="120" r="6" fill="#2563eb" stroke="white" strokeWidth="2"/>
                      <circle cx="310" cy="260" r="6" fill="#2563eb" stroke="white" strokeWidth="2"/>
                      <circle cx="200" cy="330" r="6" fill="#2563eb" stroke="white" strokeWidth="2"/>
                      <circle cx="90" cy="260" r="6" fill="#2563eb" stroke="white" strokeWidth="2"/>
                      <circle cx="90" cy="120" r="6" fill="#2563eb" stroke="white" strokeWidth="2"/>
                    </svg>

                    {/* Center badge */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                        六边形战士
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Capability List */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">✍️</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">内容能力变成销冠级别</h4>
                      <p className="text-sm text-gray-600">说人话，强杀伤，客户不仅不删，还会来问你东西咋卖</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">客户跟进水准对齐销冠</h4>
                      <p className="text-sm text-gray-600">全自动，全生命周期</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📢</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">输出曝光能力生猛无比</h4>
                      <p className="text-sm text-gray-600">朋友圈每天300-500条，社群同时运营1000+</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">客户接待能力直接拉满</h4>
                      <p className="text-sm text-gray-600">7x24小时不吃饭不休息没情绪，秒回不是问题，接待没有上限</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">执行能力一夜成销冠</h4>
                      <p className="text-sm text-gray-600">AI销冠全自动，一夜之间成为销冠</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">人力成本直接降到冰点</h4>
                      <p className="text-sm text-gray-600">你不再需要招人、管人、带人、盯人了</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 实际体验 Section */}
          <section id="experience" className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  是不是在吹牛逼？
                </h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  空说无凭，想自己试一试AI销冠，眼见为实？
                </p>
                <p className="text-2xl font-bold text-gray-900 mb-12">
                  很好，我们提供3个角度的AI销冠体验。
                </p>
              </div>

              <div className="space-y-6 mb-12">
                <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 border border-blue-100 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      ①
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">内容层</h3>
                      <p className="text-gray-700 leading-relaxed">体验销冠级别的内容，看下销冠级别内容长啥样，以及它相比市面上的大盘内容水准的质量差别</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 border border-blue-100 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      ②
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">执行层</h3>
                      <p className="text-gray-700 leading-relaxed">体验AI销冠的持续100天自动跟进和接待，你会加到我们的私域，体验AI连续100天的跟进（我们可一个人类销售和客服都没有）</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 border border-blue-100 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      ③
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">策略层</h3>
                      <p className="text-gray-700 leading-relaxed">体验我们的销冠级别策略（即：AI销冠如何根据你的客户旅程进行千人千面、专属跟进）的讲解</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 效果对比展示 */}
              <div className="max-w-6xl mx-auto mt-16 mb-16 space-y-12">
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    先看看差距有多大 👇
                  </h3>
                  <p className="text-gray-600">对比一下就知道，销冠级别到底强在哪里</p>
                </div>

                {/* 对比1: 内容水准 */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                    ① 内容水准对比
                  </h4>

                  {/* 上下布局更适合横长图 */}
                  <div className="space-y-8">
                    {/* 上方：大盘内容（横长图） */}
                    <div className="space-y-3">
                      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-center">
                        <p className="text-sm font-bold text-red-800 mb-3">❌ 大盘的内容水准（也可能是你现在的内容风格）：送人头炮灰级别</p>
                        <div className="bg-white rounded-lg p-3 border-2 border-red-300 overflow-hidden">
                          <img
                            src="/content-comparison-normal.png"
                            alt="大盘的内容水准对比"
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <p className="text-xs text-red-600 mt-3 italic">太直、太长、太花、太闲、太盘</p>
                      </div>
                    </div>

                    {/* 中间：VS标记 */}
                    <div className="flex justify-center -my-4 relative z-10">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-bold text-2xl shadow-xl">
                        VS
                      </div>
                    </div>

                    {/* 下方：销冠内容（模糊） */}
                    <div className="space-y-3">
                      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 text-center relative">
                        <p className="text-sm font-bold text-blue-800 mb-3">✅ 销冠的内容水准</p>
                        <div className="relative bg-white rounded-lg p-3 border-2 border-blue-300 overflow-hidden" style={{minHeight: '280px'}}>
                          {/* 模糊效果背景 */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-blue-100 to-blue-50 opacity-50"></div>
                          {/* 锁定提示 */}
                          <div className="absolute inset-0 backdrop-blur-lg bg-blue-100/60 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-5xl mb-4">🔒</div>
                              <p className="text-lg font-bold text-blue-900 mb-2">销冠级别内容</p>
                              <p className="text-sm text-blue-700">填表后解锁查看</p>
                              <p className="text-xs text-blue-600 mt-3">说人话 · 强杀伤 · 客户主动问</p>
                            </div>
                          </div>
                        </div>
                        {/* 神秘光效 */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-400/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 对比2: 跟进水准 */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                    ② 跟进水准对比
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6 items-center relative">
                    {/* 左侧：普通跟进 */}
                    <div className="space-y-3">
                      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-center">
                        <p className="text-sm font-bold text-red-800 mb-3">❌ 普通销售的跟进水准</p>
                        <div className="bg-white rounded-lg p-3 border-2 border-red-300 overflow-hidden flex justify-center">
                          <img
                            src="/followup-comparison-normal.png"
                            alt="普通销售的跟进水准"
                            className="max-w-full h-auto object-contain"
                            style={{maxHeight: '400px'}}
                          />
                        </div>
                        <p className="text-xs text-red-600 mt-3 italic">硬推销、促销话术、催单</p>
                      </div>
                    </div>

                    {/* 中间：VS */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-bold text-2xl shadow-xl">
                        VS
                      </div>
                    </div>

                    {/* 右侧：销冠跟进（模糊） */}
                    <div className="space-y-3">
                      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 text-center relative">
                        <p className="text-sm font-bold text-blue-800 mb-3">✅ 销冠级别的跟进水准</p>
                        <div className="relative bg-white rounded-lg p-3 border-2 border-blue-300 overflow-hidden" style={{minHeight: '400px'}}>
                          {/* 模糊效果背景 */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-blue-100 to-blue-50 opacity-50"></div>
                          {/* 锁定提示 */}
                          <div className="absolute inset-0 backdrop-blur-lg bg-blue-100/60 flex items-center justify-center">
                            <div className="text-center px-4">
                              <div className="text-5xl mb-4">🔒</div>
                              <p className="text-lg font-bold text-blue-900 mb-2">销冠级别跟进</p>
                              <p className="text-sm text-blue-700">填表后解锁查看</p>
                              <p className="text-xs text-blue-600 mt-3">全自动 · 全生命周期 · 永不放弃</p>
                            </div>
                          </div>
                        </div>
                        {/* 神秘光效 */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-400/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 对比3: 客户跟进策略 */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                    ③ 客户跟进策略对比
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6 items-center relative">
                    {/* 左侧：普通策略 */}
                    <div className="space-y-3">
                      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-center">
                        <p className="text-sm font-bold text-red-800 mb-3">❌ 普通销售的客户跟进策略</p>
                        <div className="bg-white rounded-lg p-3 border-2 border-red-300 overflow-hidden flex justify-center">
                          <img
                            src="/strategy-comparison-normal.png"
                            alt="普通销售的客户跟进策略"
                            className="max-w-full h-auto object-contain"
                            style={{maxHeight: '400px'}}
                          />
                        </div>
                        <p className="text-xs text-red-600 mt-3 italic">群发广告、表情符号轰炸、没有针对性</p>
                      </div>
                    </div>

                    {/* 中间：VS */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-bold text-2xl shadow-xl">
                        VS
                      </div>
                    </div>

                    {/* 右侧：销冠策略（模糊） */}
                    <div className="space-y-3">
                      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 text-center relative">
                        <p className="text-sm font-bold text-blue-800 mb-3">✅ 销冠级别的客户跟进策略</p>
                        <div className="relative bg-white rounded-lg p-3 border-2 border-blue-300 overflow-hidden" style={{minHeight: '400px'}}>
                          {/* 模糊效果背景 */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-blue-100 to-blue-50 opacity-50"></div>
                          {/* 锁定提示 */}
                          <div className="absolute inset-0 backdrop-blur-lg bg-blue-100/60 flex items-center justify-center">
                            <div className="text-center px-4">
                              <div className="text-5xl mb-4">🔒</div>
                              <p className="text-lg font-bold text-blue-900 mb-2">销冠级别策略</p>
                              <p className="text-sm text-blue-700">填表后解锁查看</p>
                              <p className="text-xs text-blue-600 mt-3">千人千面 · 精准推送 · 不乱发广告</p>
                            </div>
                          </div>
                        </div>
                        {/* 神秘光效 */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-400/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <p className="text-lg text-gray-600 mb-4">
                    想看销冠级别的具体内容？ 👇
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-xl font-bold text-gray-900 mb-8">
                  填写表单，审核通过后我们来安排实际体验
                </p>

                {/* Experience QR Code */}
                <div className="inline-block bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border-2 border-yellow-300 shadow-lg">
                  <div className="bg-white rounded-xl p-6 shadow-inner">
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center w-full">
                        <div className="bg-yellow-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 shadow-md">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="font-bold">鲸奇【AI销冠】智能体咨询</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-80 h-80 mx-auto bg-white rounded-xl flex items-center justify-center border-2 border-gray-200">
                      <img
                        src="/experience-qrcode.png"
                        alt="鲸奇AI销冠体验预约二维码"
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="mt-6 space-y-2">
                      <p className="text-gray-600 text-sm">扫一扫二维码打开或分享给好友</p>
                      <div className="flex items-center justify-center space-x-2 text-blue-600">
                        <span className="text-2xl">📱</span>
                        <p className="font-bold text-lg">扫码填写表单</p>
                      </div>
                      <p className="text-gray-500 text-xs">体验预约二维码</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  业内首家按结果付费，鲸奇反正摊牌了
                  <span className="block text-blue-600 mt-2">Outcome as a Service</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  不卖课，不卖培训，不卖概念，不卖焦虑，不卖功能，不卖工具，
                  <span className="font-bold text-gray-900">只卖结果</span>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* 传统按功能定价 - 左侧 */}
                <div className="card bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-gray-600 relative shadow-xl">
                  <div className="card-body">
                    <div className="badge bg-gray-500 text-white border-0 absolute -top-3 left-1/2 -translate-x-1/2">
                      ❌ 传统模式
                    </div>
                    <h3 className="card-title text-2xl text-white mb-2">
                      按功能定价
                    </h3>
                    <p className="text-sm text-red-300 mb-2 font-medium leading-relaxed">
                      只收钱，不办事！买之前销售吹得天花乱坠，买完了就一场培训，他们自己的工具，自己都不用，你敢买也是牛皮。
                    </p>
                    <p className="text-sm text-yellow-300 mb-4 font-bold leading-relaxed border-l-4 border-yellow-400 pl-3">
                      AI时代，课程、培训、概念、工具、功能、还有所谓什么个人IP，统统不要信。只相信结果。
                    </p>

                    <div className="space-y-3 mb-6 opacity-70">
                      <div className="bg-gray-600/50 backdrop-blur-sm rounded-xl p-4 border border-gray-500">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-white line-through">基础版</span>
                          <span className="text-2xl font-bold text-yellow-400 line-through">¥9,800</span>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start line-through">
                            <span className="mr-2 text-gray-400">▸</span>
                            <span>智能客服功能</span>
                          </li>
                          <li className="flex items-start line-through">
                            <span className="mr-2 text-gray-400">▸</span>
                            <span>基础数据统计</span>
                          </li>
                          <li className="flex items-start line-through">
                            <span className="mr-2 text-gray-400">▸</span>
                            <span>月度培训1次</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gray-600/50 backdrop-blur-sm rounded-xl p-4 border border-gray-500">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-white line-through">专业版</span>
                          <span className="text-2xl font-bold text-yellow-400 line-through">¥29,800</span>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start line-through">
                            <span className="mr-2 text-gray-400">▸</span>
                            <span>全部基础功能</span>
                          </li>
                          <li className="flex items-start line-through">
                            <span className="mr-2 text-gray-400">▸</span>
                            <span>高级AI模型</span>
                          </li>
                          <li className="flex items-start line-through">
                            <span className="mr-2 text-gray-400">▸</span>
                            <span>定制话术库</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gray-600/50 backdrop-blur-sm rounded-xl p-4 border border-gray-500">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-white line-through">企业版</span>
                          <span className="text-2xl font-bold text-yellow-400 line-through">¥99,800</span>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start line-through">
                            <span className="mr-2 text-gray-400">▸</span>
                            <span>全部专业功能</span>
                          </li>
                          <li className="flex items-start line-through">
                            <span className="mr-2 text-gray-400">▸</span>
                            <span>私有化部署</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-red-900/50 border-2 border-red-500 rounded-xl p-5 mb-4 backdrop-blur-sm">
                      <p className="text-base text-red-200 font-bold mb-3 flex items-center">
                        <span className="text-2xl mr-2">⚠️</span>
                        致命缺陷
                      </p>
                      <ul className="space-y-2 text-sm text-red-100">
                        <li className="flex items-start">
                          <span className="text-red-400 mr-2 font-bold">✗</span>
                          <span>买了功能≠有结果</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-400 mr-2 font-bold">✗</span>
                          <span>需要自己摸索使用</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-400 mr-2 font-bold">✗</span>
                          <span>培训后还是不会用</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-400 mr-2 font-bold">✗</span>
                          <span>无法保证业务增长</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-400 mr-2 font-bold">✗</span>
                          <span className="font-bold">钱花了，效果不保证</span>
                        </li>
                      </ul>
                    </div>

                    <button disabled className="btn btn-block bg-gray-600 text-gray-300 border-0 normal-case cursor-not-allowed opacity-60">
                      <span className="line-through">这不是我们的模式</span>
                    </button>
                  </div>
                </div>

                {/* 按结果付费 - 右侧 */}
                <div className="card bg-gradient-to-br from-blue-600 to-blue-700 border-2 border-blue-600 shadow-2xl transform scale-105 relative">
                  <div className="card-body">
                    <div className="badge bg-yellow-400 text-yellow-900 border-0 absolute -top-3 left-1/2 -translate-x-1/2 font-bold">
                      🔥 革命性模式
                    </div>
                    <h3 className="card-title text-2xl text-white mb-2">
                      按结果付费
                    </h3>
                    <p className="text-sm text-blue-100 mb-4">我们只对结果负责</p>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/20">
                      <div className="text-center mb-4">
                        <div className="text-4xl font-bold text-white mb-2">
                          效果服务费
                        </div>
                        <div className="text-6xl font-bold text-white mb-2">
                          ¥30,000
                        </div>
                        <div className="text-blue-100 text-sm">/年起</div>
                      </div>
                      <div className="divider divider-horizontal text-white/50">+</div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-yellow-300 mb-2">
                          也就一个实习生的钱
                        </div>
                        <div className="text-blue-100 text-sm">按照一个实习生一个月2200来算，一年也得3w块</div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start space-x-3 text-white">
                        <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-xs font-bold">✓</span>
                        </div>
                        <div>
                          <div className="font-bold mb-1">结果1：客户删除率显著降低10倍</div>
                          <div className="text-sm text-blue-100">从传统的30-50%删除率，降低至千分之一级别</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 text-white">
                        <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-xs font-bold">✓</span>
                        </div>
                        <div>
                          <div className="font-bold mb-1">结果2：主动咨询率提升20个点</div>
                          <div className="text-sm text-blue-100">从100个客户只有1-2个咨询，提升到每天躺着等20个客户主动来问</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 text-white">
                        <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-xs font-bold">✓</span>
                        </div>
                        <div>
                          <div className="font-bold mb-1">结果3：人力成本显著降低</div>
                          <div className="text-sm text-blue-100">只保留3-5位脑子灵光的销售+1个机灵运营+1-2个人工客服，其余全开，只留AI销冠，一年省几十万不在话下</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 text-white">
                        <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-xs font-bold">✓</span>
                        </div>
                        <div>
                          <div className="font-bold mb-1">结果4：全时竞争优势</div>
                          <div className="text-sm text-blue-100">客户半夜来、一早来、周末来咨询，都有人应。谁应？你的AI销冠+AI客服+AI运营</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 text-white">
                        <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-xs font-bold">✓</span>
                        </div>
                        <div>
                          <div className="font-bold mb-1">结果5：内容质量降维打击</div>
                          <div className="text-sm text-blue-100">骚扰型、优惠券型推送彻底优化成销冠级别"说人话"的内容，拉开与"广告狗"同行的质的差别。他们全员发广告，你全员销冠大杀四方</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-400/20 backdrop-blur-sm border border-green-400/30 rounded-xl p-4 mb-6">
                      <p className="text-sm text-white font-bold mb-2">💰 为什么选择按结果付费？</p>
                      <ul className="space-y-1 text-xs text-blue-50">
                        <li>• 你要的是结果，不是工具、功能、概念、培训、软件、课程</li>
                        <li>• 先拿结果，再琢磨过程。不要搞反了</li>
                        <li>• 觉得是你想要的结果，你再付钱，而不是买了一大堆东西落不了天天撕逼</li>
                        <li>• 眼见为实，不要听任何销售吹牛逼</li>
                      </ul>
                    </div>

                    <Link
                      href={config.auth.callbackUrl}
                      className="btn btn-block bg-white text-blue-600 hover:bg-blue-50 border-0 normal-case font-bold text-lg shadow-xl"
                    >
                      立即咨询方案
                    </Link>

                    <p className="text-center text-xs text-blue-100 mt-4">
                      💡 名额有限，每月仅接10家企业深度合作
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 合作落地步骤 Section */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  合作落地步骤
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  96小时极速落地，从需求到上线全程陪伴
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {/* Step 1 */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 h-full">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <span className="text-3xl font-bold text-white">1</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">选定场景和效果</h3>
                    <div className="space-y-3 text-sm text-gray-600">
                      <p className="font-semibold text-gray-900 text-center">你要「什么」智能体达到「什么效果」</p>
                      <p className="text-xs text-gray-500 text-center italic">（比如：AI销冠智能体，达到"自主跟进客户"效果）</p>
                    </div>
                  </div>
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-blue-300 text-3xl">→</div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 h-full">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <span className="text-3xl font-bold text-white">2</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">选定接入平台</h3>
                    <div className="space-y-3 text-sm text-gray-600">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>公域：短视频/小红书</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>私域：企微/个微</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>海外：WhatsApp</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-blue-300 text-3xl">→</div>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 h-full">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <span className="text-3xl font-bold text-white">3</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">提交资料</h3>
                    <div className="space-y-3 text-sm text-gray-600">
                      <p className="text-center">提交你的产品资料和介绍</p>
                    </div>
                  </div>
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-blue-300 text-3xl">→</div>
                </div>

                {/* Step 4 */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 h-full">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <span className="text-3xl font-bold text-white">4</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">结果输出与验收</h3>
                    <div className="space-y-3 text-sm text-gray-600">
                      <p className="text-center text-xs">鲸奇团队全程制定智能体：包含内容、流程、策略和执行效果全部细节，进入验收</p>
                    </div>
                  </div>
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-blue-300 text-3xl">→</div>
                </div>

                {/* Step 5 */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 h-full">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <span className="text-3xl font-bold text-white">5</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">极速落地</h3>
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                        <span className="font-bold text-green-600 text-lg">96小时</span>
                        <p className="text-xs mt-1 font-bold text-green-700">极速落地 ✓</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Row */}
              <div className="mt-8 flex justify-center items-center gap-8 flex-wrap">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-blue-600 font-bold text-lg">24h</span>
                  </div>
                  <span className="text-gray-900 font-bold text-sm text-center">出销冠级别流程</span>
                </div>
                <div className="text-blue-300 text-3xl">→</div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-blue-600 font-bold text-lg">48h</span>
                  </div>
                  <span className="text-gray-900 font-bold text-sm text-center">出销冠级别内容</span>
                </div>
                <div className="text-blue-300 text-3xl">→</div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-blue-600 font-bold text-lg">72h</span>
                  </div>
                  <span className="text-gray-900 font-bold text-sm text-center">出销冠级别策略</span>
                </div>
                <div className="text-blue-300 text-3xl">→</div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-blue-600 font-bold text-lg">96h</span>
                  </div>
                  <span className="text-gray-900 font-bold text-sm text-center">接入你的公私域</span>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="inline-block bg-yellow-50 border-2 border-yellow-400 rounded-xl px-8 py-4">
                  <p className="text-lg font-bold text-gray-900">
                    🚀 从需求确认到正式上线，仅需<span className="text-yellow-600 text-2xl mx-2">96小时</span>
                  </p>
                  <p className="text-sm text-gray-600 mt-2">你想想，你之前买个软件，号称啥功能都有，落地要多久？以及真的能落？哈哈</p>
                </div>
              </div>
            </div>
          </section>

          {/* Digital Employees Section - Moved to bottom */}
          <section id="employees" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  除了AI销冠，鲸奇家还有很多生猛智能体，吃不了兜着走
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: "✍️", title: "内容智能体", desc: "输出销冠级别的说人话、强杀伤内容", link: "https://mp.weixin.qq.com/s/bqWJNtdKHk-GMsdTA5LGMQ" },
                  { icon: "🎬", title: "IP智能体", desc: "套个爆款，直接模仿+洗稿，一气呵成", link: "https://mp.weixin.qq.com/s/ZK8fMDWyC__agmdcB_TxBw" },
                  { icon: "💬", title: "客服智能体", desc: "24/7在线先不说，人味儿真拉满", link: "https://mp.weixin.qq.com/s/NUc7YpfqMyZ-Wse_xKIOmA" },
                  { icon: "📊", title: "销冠复刻智能体", desc: "能主动找客户说话的智能体，你可见过？\n（你的Deepseek可没找你说过话吧？）", link: "https://mp.weixin.qq.com/s/_nVMMV6Wx_pFK5WJfrBffA" },
                  { icon: "📱", title: "社群智能体", desc: "嗯，你的一万个群，有救了，招人得要20个运营，或者我的一个AI", link: "https://mp.weixin.qq.com/s/pkmwiUf8qe8Tke1oFS6Jjw" },
                  { icon: "📰", title: "朋友圈智能体", desc: "正常人一天3条朋友圈不得了，智能体？300-500条", link: "https://mp.weixin.qq.com/s/_Rt0dAx0QkKqRdgBHyMDUQ" },
                  { icon: "📕", title: "小红书智能体", desc: "帮你的小红书起号、追踪爆款、代理发帖以及嗯，洗别人的稿", link: "https://mp.weixin.qq.com/s/ZK8fMDWyC__agmdcB_TxBw" },
                  { icon: "🎯", title: "兴趣培育智能体", desc: "让客户对你的东西眼前一亮", link: "https://mp.weixin.qq.com/s/J4MLKkjbmXhh3asiSn1S2Q" },
                  { icon: "💡", title: "需求培育智能体", desc: "让客户主动来问你东西咋卖", link: "https://mp.weixin.qq.com/s/LGU3ugeWQTtmiiIslkxkHA" },
                  { icon: "🤝", title: "信任培育智能体", desc: "让客户对你没有防备心", link: "https://mp.weixin.qq.com/s/uk72Tm8GuiKhz2HRVg9Qgw" },
                  { icon: "🔔", title: "沉默激活智能体", desc: "适时激活你的沉默客户", link: "https://mp.weixin.qq.com/s/MVSo_cj2pv6qb3sIRz3mqg" },
                ].map((employee, index) => (
                  <div
                    key={index}
                    className="card bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="card-body items-center text-center">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                        {employee.icon}
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{employee.title}</h4>
                      <p className="text-sm text-gray-600 whitespace-pre-line mb-4">{employee.desc}</p>
                      <Link
                        href={employee.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white border-0 normal-case w-full"
                      >
                        实战复盘 →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  联系鲸奇，拿到结果
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                  别再买课和工具了亲，大清已亡
                </p>

                {/* Contact QR Code */}
                <div className="inline-block bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="mb-4">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl flex items-center justify-center space-x-2 shadow-md">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-bold text-lg">鲸奇【AI销冠】智能体咨询</span>
                    </div>
                  </div>

                  <div className="w-80 h-80 bg-white rounded-2xl flex items-center justify-center border-2 border-gray-200 overflow-hidden">
                    <img
                      src="/experience-qrcode.png"
                      alt="扫码咨询鲸奇AI销冠"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <p className="text-gray-900 font-bold text-lg mt-6">
                    扫码咨询，96小时极速落地
                  </p>
                </div>

                <div className="mt-8 text-blue-100 text-sm max-w-2xl mx-auto">
                  <p>📱 扫码即可预约专属顾问</p>
                  <p className="mt-2">🎯 填写需求表单，24小时内回复</p>
                  <p className="mt-2">⚡ 不卖课程，不卖工具，只卖结果</p>
                </div>
              </div>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-gray-900">{config.appName}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4 max-w-xs">
                  {config.appDescription}
                </p>
                <p className="text-gray-500 text-xs">
                  © 2025 {config.appName}. 保留所有权利.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">产品</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">功能特性</Link></li>
                  <li><Link href="#employees" className="text-gray-600 hover:text-blue-600 transition-colors">数字员工</Link></li>
                  <li><Link href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">定价方案</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">使用案例</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">资源</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">帮助中心</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">API文档</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">开发者</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">博客</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">公司</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">关于我们</Link></li>
                  <li><Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">联系我们</Link></li>
                  <li><Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600 transition-colors">隐私政策</Link></li>
                  <li><Link href="/tos" className="text-gray-600 hover:text-blue-600 transition-colors">服务条款</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
