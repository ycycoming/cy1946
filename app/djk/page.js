import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `大健康全链路培训 - 从流量到转化 | ${config.appName}`,
  description: "大健康全链路培训服务，从获客流量到私域转化的完整解决方案。主播培养、直播脚本、对标账号分析、AI销冠转化，让你的大健康业务流量和转化都有救了。",
  canonicalUrlRelative: "/djk",
  keywords: ["大健康培训", "主播培养", "直播培训", "对标账号", "AI销冠", "私域转化", "流量获客"],
});

export default function HealthTrainingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
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
            </Link>
            <Link href="/" className="btn btn-ghost">
              返回首页
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse"></span>
                大健康全链路培训
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                你的大健康业务
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  流量和转化都有救了
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                从获客流量到私域转化的全链路培训服务
                <br />
                主播培养 × 直播脚本 × 对标分析 × AI销冠
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="#traffic"
                  className="btn btn-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-0 text-lg px-10 shadow-lg hover:shadow-xl transition-all normal-case"
                >
                  开始学习
                </Link>
                <Link
                  href="#ai-sales"
                  className="btn btn-lg btn-outline border-green-600 text-green-600 hover:bg-green-50 text-lg px-10 normal-case"
                >
                  查看AI销冠
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 流量培训部分 */}
        <section id="traffic" className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                让我们先从流量开始
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                要么你招主播，要么我们把你培养成最大的主播
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* 左侧：主播培养 */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-3xl border-2 border-green-200 shadow-lg">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">主播培养计划</h3>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  不想招主播？没关系，我们把你培养成最专业的主播
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">零基础上手</div>
                      <div className="text-gray-600">不需要任何直播经验，从0到1手把手教</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">专业话术培训</div>
                      <div className="text-gray-600">大健康行业话术体系，教你如何讲产品</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">实战陪练</div>
                      <div className="text-gray-600">真实场景模拟，反复练习直到熟练</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* 右侧：直播脚本 */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-10 rounded-3xl border-2 border-emerald-200 shadow-lg">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">现成的直播脚本</h3>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  直播的脚本我们有现成的，再不济，我们可以抄别人的
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">成熟脚本库</div>
                      <div className="text-gray-600">数百套经过验证的大健康直播脚本</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">智能优化</div>
                      <div className="text-gray-600">根据你的产品和客户，定制化优化脚本</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">持续更新</div>
                      <div className="text-gray-600">跟踪行业爆款，持续更新最新脚本</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 对标账号分析 */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                我们如何帮你找到对标账号？
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                你这个领域最火的短视频，还有最火的直播
                <br />
                <span className="font-bold text-green-600">三天我们就能给你刷出来，第4天就得给你抄明白</span>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* 步骤1 */}
              <div className="bg-white p-8 rounded-2xl border-2 border-green-200 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-2xl text-3xl font-bold mb-6 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">智能算法刷量</h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  通过AI算法快速筛选你领域内的高热度账号，找到真正有价值的对标目标
                </p>
              </div>

              {/* 步骤2 */}
              <div className="bg-white p-8 rounded-2xl border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center justify-center w-16 h-16 bg-emerald-600 text-white rounded-2xl text-3xl font-bold mb-6 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">深度数据分析</h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  分析对标账号的内容结构、话术套路、互动方式，提取核心成功要素
                </p>
              </div>

              {/* 步骤3 */}
              <div className="bg-white p-8 rounded-2xl border-2 border-teal-200 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center justify-center w-16 h-16 bg-teal-600 text-white rounded-2xl text-3xl font-bold mb-6 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">定制化复制</h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  结合你的产品特点，定制化改编对标内容，让你快速上手并超越对手
                </p>
              </div>
            </div>

            {/* 对标分析的价值 */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold mb-6 text-center">为什么对标分析这么重要？</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">避免走弯路</h4>
                      <p className="text-white/90">学习成功案例，避免从零摸索浪费时间和金钱</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">快速起量</h4>
                      <p className="text-white/90">复制验证过的成功模式，快速获得流量和转化</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">持续优化</h4>
                      <p className="text-white/90">实时跟踪行业动态，不断优化你的内容策略</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">降低风险</h4>
                      <p className="text-white/90">基于数据验证的方法，降低试错成本</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 私域转化 + AI销冠 */}
        <section id="ai-sales" className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                私域的消转
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  但你再也不需要找销售了
                </span>
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                隆重有请我们的AI销冠出场
              </p>
            </div>

            {/* AI销冠介绍 */}
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl p-12 border-2 border-green-200 shadow-2xl mb-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl mb-6 mx-auto shadow-xl">
                  <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">AI销冠：你的24小时私域转化机器</h3>
                <p className="text-xl text-gray-600">
                  不用招销售，不用管理团队，AI销冠为你自动完成私域转化
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">7×24小时在线</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    永不休息，永不疲惫，随时响应客户咨询，不错过任何成交机会
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">专业销售话术</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    内置大健康行业顶级销售话术，比人类销售更专业，转化率更高
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">无限接待能力</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    同时服务成百上千个客户，再多流量也能接得住，不流失任何潜在客户
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">智能数据分析</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    自动记录和分析客户数据，持续优化销售策略，转化率越来越高
                  </p>
                </div>
              </div>
            </div>

            {/* AI销冠的优势对比 */}
            <div className="max-w-6xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">人类销售 VS AI销冠</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {/* 人类销售 */}
                <div className="bg-red-50 p-8 rounded-2xl border-2 border-red-200">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="text-red-500 mr-3">✗</span>
                    人类销售的局限
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 text-xl">•</span>
                      <div>
                        <div className="font-bold text-gray-900">人力成本高</div>
                        <div className="text-gray-600 text-sm">底薪+提成，一个销售年成本10万+</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 text-xl">•</span>
                      <div>
                        <div className="font-bold text-gray-900">工作时间有限</div>
                        <div className="text-gray-600 text-sm">8小时工作制，晚上和周末找不到人</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 text-xl">•</span>
                      <div>
                        <div className="font-bold text-gray-900">接待能力低</div>
                        <div className="text-gray-600 text-sm">同时最多服务几个客户，流量大就接不过来</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 text-xl">•</span>
                      <div>
                        <div className="font-bold text-gray-900">培养周期长</div>
                        <div className="text-gray-600 text-sm">新人上手至少3-6个月，流失率还高</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 text-xl">•</span>
                      <div>
                        <div className="font-bold text-gray-900">状态不稳定</div>
                        <div className="text-gray-600 text-sm">心情不好、身体不适都会影响业绩</div>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* AI销冠 */}
                <div className="bg-green-50 p-8 rounded-2xl border-2 border-green-200">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    AI销冠的优势
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <div>
                        <div className="font-bold text-gray-900">成本极低</div>
                        <div className="text-gray-600 text-sm">相当于人类销售1/10的成本，还能干10倍的活</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <div>
                        <div className="font-bold text-gray-900">7×24小时在线</div>
                        <div className="text-gray-600 text-sm">永不休息，随时响应，不错过任何商机</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <div>
                        <div className="font-bold text-gray-900">无限接待能力</div>
                        <div className="text-gray-600 text-sm">同时服务数百上千客户，流量再大也不怕</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <div>
                        <div className="font-bold text-gray-900">即刻上岗</div>
                        <div className="text-gray-600 text-sm">配置好即可使用，无需培训，永不离职</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <div>
                        <div className="font-bold text-gray-900">持续优化</div>
                        <div className="text-gray-600 text-sm">基于数据不断学习进化，转化率越来越高</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 全链路服务流程 */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                完整的全链路服务流程
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                从流量到转化，一站式解决你的大健康业务增长问题
              </p>
            </div>

            <div className="relative">
              {/* 流程线 */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 -translate-y-1/2"></div>

              <div className="grid md:grid-cols-4 gap-8 relative">
                {/* 步骤1 */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 text-white rounded-full text-2xl font-bold mb-6 relative z-10 shadow-xl">
                    1
                  </div>
                  <h4 className="font-bold text-xl text-gray-900 mb-3">流量培养</h4>
                  <p className="text-gray-600">主播培训 + 直播脚本，快速获取精准流量</p>
                </div>

                {/* 步骤2 */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-600 text-white rounded-full text-2xl font-bold mb-6 relative z-10 shadow-xl">
                    2
                  </div>
                  <h4 className="font-bold text-xl text-gray-900 mb-3">对标优化</h4>
                  <p className="text-gray-600">找到对标账号，优化内容策略，提升流量质量</p>
                </div>

                {/* 步骤3 */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-600 text-white rounded-full text-2xl font-bold mb-6 relative z-10 shadow-xl">
                    3
                  </div>
                  <h4 className="font-bold text-xl text-gray-900 mb-3">私域沉淀</h4>
                  <p className="text-gray-600">将流量导入私域，建立客户资产池</p>
                </div>

                {/* 步骤4 */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan-600 text-white rounded-full text-2xl font-bold mb-6 relative z-10 shadow-xl">
                    4
                  </div>
                  <h4 className="font-bold text-xl text-gray-900 mb-3">AI转化</h4>
                  <p className="text-gray-600">AI销冠自动转化，持续产生收益</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white py-24">
          <div className="max-w-5xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              准备好让你的大健康业务起飞了吗？
            </h2>
            <p className="text-xl text-green-100 mb-12 leading-relaxed">
              从流量到转化的全链路培训服务
              <br />
              让你的大健康业务流量和转化都有救了
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="btn btn-lg bg-white text-green-600 hover:bg-green-50 border-0 text-lg px-12 shadow-xl normal-case"
              >
                立即咨询
              </Link>
              <Link
                href="/"
                className="btn btn-lg btn-outline border-2 border-white text-white hover:bg-white/10 text-lg px-12 normal-case"
              >
                查看案例
              </Link>
            </div>

            {/* 联系方式 */}
            <div className="mt-16 pt-12 border-t border-white/20">
              <h3 className="text-2xl font-bold mb-8">扫码咨询，获取定制化方案</h3>
              <div className="flex justify-center">
                <div className="bg-white p-6 rounded-2xl inline-block">
                  <div className="w-48 h-48 bg-gray-200 rounded-xl flex items-center justify-center">
                    <span className="text-gray-500 text-sm">二维码占位</span>
                  </div>
                  <p className="text-gray-700 mt-4 font-medium text-center">
                    微信扫码咨询
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-gray-900">{config.appName}</span>
              </Link>
              <p className="text-gray-600 text-sm mb-4 max-w-xs">
                大健康全链路培训服务，从流量到转化的完整解决方案
              </p>
              <p className="text-gray-500 text-xs">
                © 2025 {config.appName}. 保留所有权利.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">服务</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#traffic" className="text-gray-600 hover:text-green-600 transition-colors">流量培训</Link></li>
                <li><Link href="#ai-sales" className="text-gray-600 hover:text-green-600 transition-colors">AI销冠</Link></li>
                <li><Link href="/" className="text-gray-600 hover:text-green-600 transition-colors">案例展示</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">公司</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-gray-600 hover:text-green-600 transition-colors">关于我们</Link></li>
                <li><Link href="/" className="text-gray-600 hover:text-green-600 transition-colors">联系我们</Link></li>
                <li><Link href="/privacy-policy" className="text-gray-600 hover:text-green-600 transition-colors">隐私政策</Link></li>
                <li><Link href="/tos" className="text-gray-600 hover:text-green-600 transition-colors">服务条款</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
