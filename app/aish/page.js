import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `AI售后 - 智能售后服务系统 | ${config.appName}`,
  description: "鲸奇AI售后提供7×24小时智能售后服务,自动处理退换货、投诉建议、产品咨询,让AI成为您的售后专家,提升客户满意度,降低售后成本。",
  canonicalUrlRelative: "/aish",
  keywords: ["AI售后", "智能售后", "售后服务", "客户服务", "退换货处理", "投诉处理"],
});

export default function AIAfterSales() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
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
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">{config.appName}</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                AI销冠
              </Link>
              <Link href="/aikf" className="text-gray-600 hover:text-orange-600 transition-colors font-medium">
                AI客服
              </Link>
              <Link href="/aish" className="text-indigo-600 font-medium">
                AI售后
              </Link>
              <Link href="/aigw" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
                AI顾问
              </Link>
              <Link href="/aiyy" className="text-gray-600 hover:text-pink-600 transition-colors font-medium">
                AI运营
              </Link>
              <Link href="/aihk" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
                AI获客
              </Link>
              <Link href="/geo" className="text-gray-600 hover:text-cyan-600 transition-colors font-medium">
                GEO
              </Link>
            </nav>
            <Link href="/" className="btn btn-ghost md:hidden">
              首页
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2 animate-pulse"></span>
                7×24×365 智能售后无忧
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                把售后交给
                <br />
                <span className="text-indigo-600">AI售后专家</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                7×24×365全天候智能售后服务,自动处理退换货、投诉建议、产品咨询,让您的售后团队效率提升10倍,成本降低80%。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="#features" className="btn btn-lg bg-indigo-600 hover:bg-indigo-700 text-white border-0 text-lg px-10 shadow-lg hover:shadow-xl transition-all normal-case">
                  了解功能
                </Link>
                <Link href="#pricing" className="btn btn-lg btn-outline border-indigo-600 text-indigo-600 hover:bg-indigo-50 text-lg px-10 normal-case">
                  查看定价
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 实操效果展示 */}
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                不废话,先看实操效果
              </h2>
              <p className="text-xl text-gray-600">
                扫码体验AI售后的真实服务能力
              </p>
            </div>

            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-2xl border-2 border-indigo-200 shadow-lg">
                <img
                  src="/ai-aftersales-qrcode.png"
                  alt="AI售后体验二维码"
                  className="w-64 h-64 md:w-80 md:h-80"
                />
                <p className="text-center text-gray-600 mt-4 font-medium">
                  微信扫码,体验AI售后服务
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 核心价值 - 为什么需要AI售后 */}
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                为什么需要AI售后?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                传统售后人力成本高、响应慢、处理效率低
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* 传统售后痛点 */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-red-500 mr-3">✗</span>
                  传统售后的困境
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-red-50 border border-red-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">响应速度慢</h4>
                      <p className="text-gray-600 text-sm">客户晚上10点遇到问题,但售后早就下班了,第二天才能处理,客户早就火冒三丈</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-red-50 border border-red-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">人力成本高</h4>
                      <p className="text-gray-600 text-sm">售后人员底薪5k-10k,3个售后年成本超40万</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-red-50 border border-red-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">处理能力低</h4>
                      <p className="text-gray-600 text-sm">同时处理10个售后问题就手忙脚乱,遇到突发情况更是手足无措</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-red-50 border border-red-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">情绪化严重</h4>
                      <p className="text-gray-600 text-sm">面对客户投诉和情绪,售后人员也会有情绪,服务质量波动大</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI售后优势 */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  AI售后的优势
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-green-50 border border-green-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">秒级响应,7×24在线</h4>
                      <p className="text-gray-600 text-sm">真正的秒回,凌晨3点客户遇到问题也能立即得到专业解答</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-green-50 border border-green-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">成本降低十倍起步</h4>
                      <p className="text-gray-600 text-sm">一个AI售后=20个人类售后,省下的钱够你干更多有价值的事</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-green-50 border border-green-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">处理无上限</h4>
                      <p className="text-gray-600 text-sm">1000个客户同时投诉也能逐一妥善处理,绝不遗漏</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-green-50 border border-green-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">永远专业耐心</h4>
                      <p className="text-gray-600 text-sm">AI永远不会有情绪,面对再刁难的客户也能保持专业和耐心</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 核心功能 */}
        <section id="features" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                啥叫"专家级"的AI售后?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-indigo-200 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">自动处理退换货</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  AI自动判断退换货条件,引导客户完成流程
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    自动核对订单信息
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    智能判断退换货条件
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    自动生成退货单
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-indigo-200 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">智能投诉处理</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  AI冷静分析问题,给出合理解决方案
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    安抚客户情绪
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    快速定位问题根源
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    提供合理补偿方案
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-indigo-200 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">产品使用指导</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  AI熟知所有产品细节,提供专业指导
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    常见问题即时解答
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    使用技巧分步讲解
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    故障排查支持
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-indigo-200 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">订单跟踪查询</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  实时掌握订单动态,主动告知客户
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    实时物流查询
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    订单状态推送
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    异常预警提醒
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-indigo-200 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">人工无缝转接</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  复杂问题智能识别,无缝转接人工
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    智能识别复杂问题
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    保留完整对话记录
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    人工随时介入
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-indigo-200 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">数据分析优化</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  售后数据全面分析,持续优化服务
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    问题类型统计分析
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    客户满意度追踪
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    产品问题反馈
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 使用场景 */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                全行业适用的AI售后解决方案
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                无论你是什么行业,只要有售后需求,AI售后都能帮你搞定
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🛍️", title: "电商零售", desc: "退换货处理、物流查询、商品咨询" },
                { icon: "📱", title: "数码3C", desc: "产品使用指导、故障排查、维修预约" },
                { icon: "🏠", title: "家居家装", desc: "安装指导、售后维修、质量问题处理" },
                { icon: "🚗", title: "汽车服务", desc: "保养提醒、维修预约、保险理赔" },
                { icon: "🎓", title: "教育培训", desc: "课程咨询、退费处理、学员服务" },
                { icon: "💰", title: "金融保险", desc: "理赔咨询、业务办理、投诉处理" },
                { icon: "🏥", title: "医疗健康", desc: "用药咨询、复诊预约、健康指导" },
                { icon: "✈️", title: "旅游出行", desc: "行程变更、退改签、投诉处理" },
              ].map((scenario, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 text-center cursor-pointer"
                >
                  <div className="text-4xl mb-4">{scenario.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-2">{scenario.title}</h4>
                  <p className="text-sm text-gray-600">{scenario.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 客户案例 */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                他们都在使用AI售后
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                数百家企业选择我们,提升售后服务质量
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🛍️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">某服装电商</h4>
                    <p className="text-sm text-gray-600">月售后量5000+</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "接入AI售后后,退换货处理时间从2天缩短到2小时,客户满意度从65%提升到92%,售后团队从12人减到3人,每年节省人力成本80万。"
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-semibold text-indigo-600 mr-2">数据:</span>
                  满意度 +27% | 成本 -80万/年
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">某3C品牌</h4>
                    <p className="text-sm text-gray-600">用户100万+</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "AI售后7×24小时处理产品使用咨询,常见问题解决率达85%,夜间售后响应速度提升100倍,用户口碑显著提升,复购率增长40%。"
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-semibold text-indigo-600 mr-2">数据:</span>
                  解决率 85% | 复购率 +40%
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">某家居品牌</h4>
                    <p className="text-sm text-gray-600">客户50000+</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "售后问题复杂多样,AI售后能快速定位问题并给出解决方案,投诉处理效率提升5倍,客户等待时间从平均4小时降到30分钟,投诉率下降60%。"
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-semibold text-indigo-600 mr-2">数据:</span>
                  效率 +400% | 投诉率 -60%
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 定价方案 */}
        <section id="pricing" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                定价方案
                <br />
                人类售后的1/10成本,效率提升10倍
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* 基础版 */}
              <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-indigo-300 transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">基础版</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">¥880</span>
                  <span className="text-gray-600">/月</span>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  适合中小型企业,月售后量1000单以内
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-900 font-medium">✓ 7×24小时自动回复</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-900 font-medium">✓ 退换货自动处理</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-900 font-medium">✓ 订单查询跟踪</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-900 font-medium">✓ 基础数据分析</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-500">✗ 智能投诉处理</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-500">✗ 高级数据分析</span>
                  </li>
                </ul>

                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    支持1个平台(企微/个微)
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    每月1000单售后处理
                  </li>
                  <li className="flex items-start font-semibold text-gray-900">
                    <span className="text-indigo-600 mr-2">💰</span>
                    按月购买需支付接入服务费 ¥3,000/平台/次
                  </li>
                </ul>

                <Link href="https://doc.weixin.qq.com/forms/AGMAagcLAAcAD4APQY0AMgCNQANhK63Ff?page=1" target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full normal-case">
                  人类1/10成本,效率十倍
                </Link>
              </div>

              {/* 旗舰版 - 推荐 */}
              <div className="bg-indigo-600 p-8 rounded-2xl border-2 border-indigo-700 shadow-xl transform scale-105 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-700 text-white px-4 py-1 rounded-full text-sm font-medium">
                  最受欢迎
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">旗舰版</h3>
                <div className="mb-4">
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-white">¥2,800</span>
                    <span className="text-indigo-100">/月</span>
                  </div>
                  <div className="text-indigo-100 text-sm">
                    或 <span className="text-2xl font-bold text-white">¥28,800</span>/年 <span className="font-semibold">(免接入费)</span>
                  </div>
                </div>
                <p className="text-sm text-indigo-100 mb-6">
                  适合大中型企业,售后量无上限
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white font-medium">✓ 全部基础版功能</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white font-medium">✓ 智能投诉处理</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white font-medium">✓ 高级数据分析</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white font-medium">✓ 产品使用指导</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white font-medium">✓ 主动售后提醒</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white font-medium">✓ 专属客户经理</span>
                  </li>
                </ul>

                <ul className="space-y-2 text-sm text-indigo-50 mb-6">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    支持多平台(企微+个微)
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    售后处理量无上限
                  </li>
                  <li className="flex items-start font-semibold text-white">
                    <span className="mr-2">💎</span>
                    年付免接入费,月付也可灵活选择
                  </li>
                </ul>

                <Link href="https://doc.weixin.qq.com/forms/AGMAagcLAAcAD4APQY0AMgCNQANhK63Ff?page=1" target="_blank" rel="noopener noreferrer" className="btn bg-white text-indigo-600 hover:bg-indigo-50 w-full border-0 normal-case">
                  全方位售后无忧,战斗力拉满
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">准备好让AI接管你的售后了吗?</h2>
            <p className="text-xl text-indigo-100 mb-10">
              让AI售后专家24小时守护您的客户体验
              <br />
              扫码填写表单登记进一步联系洽谈
            </p>
            <div className="flex justify-center">
              <Link href="https://doc.weixin.qq.com/forms/AGMAagcLAAcAD4APQY0AMgCNQANhK63Ff?page=1" target="_blank" rel="noopener noreferrer" className="btn btn-lg bg-white text-indigo-600 hover:bg-indigo-50 border-0 text-lg px-12 shadow-xl normal-case">
                扫码登记公司信息
              </Link>
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
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-gray-900">{config.appName}</span>
              </Link>
              <p className="text-gray-600 text-sm mb-4 max-w-xs">
                AI智能售后解决方案,让每位客户都满意
              </p>
              <p className="text-gray-500 text-xs">
                © 2025 {config.appName}. 保留所有权利.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">产品</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">功能特性</Link></li>
                <li><Link href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">定价方案</Link></li>
                <li><Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">客户案例</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">公司</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">关于我们</Link></li>
                <li><Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">联系我们</Link></li>
                <li><Link href="/privacy-policy" className="text-gray-600 hover:text-indigo-600 transition-colors">隐私政策</Link></li>
                <li><Link href="/tos" className="text-gray-600 hover:text-indigo-600 transition-colors">服务条款</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
