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
                <Link href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  效果
                </Link>
                <Link href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  实际体验
                </Link>
                <Link href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  定价
                </Link>
                <Link href="#employees" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  生猛智能体
                </Link>
              </nav>
              <div className="flex items-center space-x-3">
                <Link href={config.auth.loginUrl} className="btn btn-ghost text-gray-700 font-medium normal-case">
                  登录
                </Link>
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

          {/* Features Section */}
          <section id="features" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  AI销冠有点「顶」
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
                  这年头在中国社会挣点钱，光发广告可不行，你得做到顶
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg font-bold text-gray-900">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">顶级的内容</span>
                    <span className="text-gray-600">"会说人话"</span>
                  </div>
                  <div className="hidden md:block text-gray-300">•</div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">顶级的执行</span>
                    <span className="text-gray-600">"绝不放弃"</span>
                  </div>
                  <div className="hidden md:block text-gray-300">•</div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">顶级的策略</span>
                    <span className="text-gray-600">"千人千面"</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="group card bg-white border border-gray-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                  <div className="card-body">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                      <svg className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h3 className="card-title text-xl text-gray-900">顶级的内容"会说人话"</h3>
                    <p className="text-gray-600 leading-relaxed">
                      不是机器人式的官方回复，而是像真人销冠一样，用自然、亲切的语气与客户交流，让客户感受不到任何机器感
                    </p>
                  </div>
                </div>

                <div className="group card bg-white border border-gray-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                  <div className="card-body">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                      <svg className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="card-title text-xl text-gray-900">顶级的执行"绝不放弃"</h3>
                    <p className="text-gray-600 leading-relaxed">
                      销冠跟进3-5天就放弃，AI销冠可以跟进180天起步，自动触发沉默激活，永不疲惫，永不遗漏任何商机
                    </p>
                  </div>
                </div>

                <div className="group card bg-white border border-gray-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                  <div className="card-body">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                      <svg className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="card-title text-xl text-gray-900">顶级的策略"千人千面"</h3>
                    <p className="text-gray-600 leading-relaxed">
                      每个客户的背景、需求、预算都不一样，AI销冠自动判定客户旅程和画像，针对性推送内容，绝不乱发广告
                    </p>
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

              <div className="text-center">
                <p className="text-xl font-bold text-gray-900 mb-8">
                  填写表单，审核通过后我们来安排实际体验
                </p>

                {/* QR Code Placeholder */}
                <div className="inline-block bg-gray-100 rounded-2xl p-8 border-2 border-dashed border-gray-300">
                  <div className="w-64 h-64 bg-white rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📱</div>
                      <p className="text-gray-500 font-medium">扫码填写表单</p>
                      <p className="text-gray-400 text-sm mt-2">体验预约二维码</p>
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

                {/* QR Code Placeholder */}
                <div className="inline-block bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="w-64 h-64 bg-gray-100 rounded-2xl flex flex-col items-center justify-center border-4 border-dashed border-gray-300">
                    <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                    </svg>
                    <p className="text-gray-500 font-semibold text-lg">扫码填写表单</p>
                    <p className="text-gray-400 text-sm mt-2">QR Code Placeholder</p>
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
