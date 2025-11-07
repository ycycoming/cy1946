import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `AI客服 - 24/7智能客户服务 | ${config.appName}`,
  description: "鲸奇AI客服提供24小时全天候智能客户服务，自动应答、智能引导、高效转化。让AI替您接待每一位客户，提升满意度，降低人力成本。",
  canonicalUrlRelative: "/ai-customer-service",
  keywords: ["AI客服", "智能客服", "自动回复", "客户服务", "私域客服", "24小时客服"],
});

export default function AICustomerService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
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
        <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-2 animate-pulse"></span>
                7×24×365 无上限接客
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                在微信里接入
                <br />
                一个<span className="text-orange-600">AI客服</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                7×24×365无上限接客，将您的客服复刻为AI数字分身，24/7在微信私域自动接待客户、解答问题、促进成交。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="#features" className="btn btn-lg bg-orange-600 hover:bg-orange-700 text-white border-0 text-lg px-10 shadow-lg hover:shadow-xl transition-all normal-case">
                  了解功能
                </Link>
                <Link href="#pricing" className="btn btn-lg btn-outline border-orange-600 text-orange-600 hover:bg-orange-50 text-lg px-10 normal-case">
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
                不废话，先看实操效果
              </h2>
              <p className="text-xl text-gray-600">
                扫码感受AI客服的真实对话能力
              </p>
            </div>

            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-2xl border-2 border-orange-200 shadow-lg">
                <img
                  src="/ai-customer-service-qrcode.png"
                  alt="AI客服体验二维码"
                  className="w-64 h-64 md:w-80 md:h-80"
                />
                <p className="text-center text-gray-600 mt-4 font-medium">
                  微信扫码，听鲸奇CEO春阳讲解
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 核心价值 - 为什么需要AI客服 */}
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                为什么需要AI客服？
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                传统客服人力成本高、响应慢、服务质量不稳定
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* 传统客服痛点 */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-red-500 mr-3">✗</span>
                  传统客服的困境
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-red-50 border border-red-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">响应速度慢</h4>
                      <p className="text-gray-600 text-sm">现代人睡得都晚，客户晚上10点来找你，但你的客服7点就下班了，阁下如何应对？</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-red-50 border border-red-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">人力成本高</h4>
                      <p className="text-gray-600 text-sm">客服底薪4k-8k，3个客服年成本超30万</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-red-50 border border-red-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">接待能力低</h4>
                      <p className="text-gray-600 text-sm">最多同时回复10个客户不得了了，顾头不顾腚</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-red-50 border border-red-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">成长速度慢</h4>
                      <p className="text-gray-600 text-sm">人类客服你得天天盯着，带半年带不明白</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI客服优势 */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  AI客服的优势
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-green-50 border border-green-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">秒级响应，7×24在线</h4>
                      <p className="text-gray-600 text-sm">真的是秒回（也可以设定延时回复，真人感更强），周末节假日你睡觉它回客户消息</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-green-50 border border-green-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">成本降低十倍起步，可能还不止</h4>
                      <p className="text-gray-600 text-sm">一个AI客服=20个人类客户，省多少钱你自己算</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-green-50 border border-green-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">接待无上限</h4>
                      <p className="text-gray-600 text-sm">1000个10000个客户同时咨询尽管来，回不过来算我输</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-green-50 border border-green-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">AI一夜之间就牛逼了</h4>
                      <p className="text-gray-600 text-sm">AI学习一天，等于你的人类员工折腾一年，招啥人要啥自行车？</p>
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
                啥叫"咨询师"级别的AI客服？
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-200 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">人味儿拉满+说人话</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  AI客服的第一性原理：不能被客户看出来是机器人，否则必转人工
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    说人话
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    没有机器感，比什么傻缺关键词自动回复强多了
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    全程输出，客户感知不到是AI
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-200 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">绝不已读乱回</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  严格按照你的产品知识输出
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    绝不乱回，不确定的会和你（的人）确认后再回
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    客户瞎唠也能把话题拽回来（哈哈很牛逼这个）
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-200 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">老司机气场，专业性拉满</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  为啥客户不想搭理你的客服？因为感觉就是打杂的。。。
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    不会称呼客户亲~
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    气场很足，专业性拉满，客户很想聊
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    能结合客户情况出谋划策，咨询师级别
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-200 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">人工转接？当然，聊熟了，你的人来收单</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  客户的前几轮对话，AI肯定是帮你挡住了
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    人工随时介入
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    客户可能到成交都不知道你是AI
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-200 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">主动性拉满，智能引导转化</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  始终想着怎么推进客户，以及帮你挣钱，哈哈
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    客户聊偏了？AI能拉回来
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    同行来打听？AI能敷衍过去
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-200 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">多渠道接入，哪都能接</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  个微、企微，公众号甚至WhatsApp
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    智能体多的是，能接私域的有吗？
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Dify、扣子用的很溜，能接私域干活不？
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    想明白，来找我们
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 扫码体验 */}
        <section className="py-24 bg-gradient-to-b from-orange-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                是不是在吹牛逼？你自己扫码加过去聊一下，感受下？
              </h2>
            </div>

            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-2xl border-2 border-orange-200 shadow-lg max-w-md">
                <img
                  src="/ai-customer-service-qrcode-2.jpg"
                  alt="AI客服体验二维码"
                  className="w-full h-auto"
                />
                <p className="text-center text-gray-600 mt-4 font-medium">
                  扫码加企业微信，实测AI客服
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 使用场景 */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                别问你的业务适不适合了。
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                全行业都适合，人类客服多贵啊？AI客服全行业都能接，反正是根据你的提示词和知识库来的
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🛍️", title: "电商零售", desc: "商品咨询、订单查询、售后处理" },
                { icon: "🏢", title: "企业服务", desc: "产品介绍、方案咨询、商务对接" },
                { icon: "🎓", title: "教育培训", desc: "课程咨询、报名引导、学员服务" },
                { icon: "🏥", title: "医疗健康", desc: "预约挂号、健康咨询、用药指导" },
                { icon: "🏠", title: "房产中介", desc: "房源推荐、看房预约、价格咨询" },
                { icon: "💰", title: "金融保险", desc: "产品介绍、理赔咨询、开户引导" },
                { icon: "✈️", title: "旅游出行", desc: "行程规划、酒店预订、景点推荐" },
                { icon: "🎮", title: "游戏娱乐", desc: "账号问题、充值咨询、活动说明" },
              ].map((scenario, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 text-center cursor-pointer"
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
                他们都在使用AI客服
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                数百家企业选择我们，提升客户服务质量
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🛍️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">某美妆电商</h4>
                    <p className="text-sm text-gray-600">日咨询量3000+</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "接入AI客服后，客户响应速度从平均5分钟降到10秒，转化率提升35%，客服团队从15人减到5人，每年节省人力成本60万。"
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-semibold text-orange-600 mr-2">数据:</span>
                  转化率 +35% | 成本 -60万/年
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">某在线教育机构</h4>
                    <p className="text-sm text-gray-600">学员10万+</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "AI客服7×24小时解答学员问题，满意度从72%提升到91%。现在课程咨询、报名引导、学习答疑全部自动化，客服压力大幅降低。"
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-semibold text-orange-600 mr-2">数据:</span>
                  满意度 72% → 91%
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">某SaaS企业</h4>
                    <p className="text-sm text-gray-600">客户2000+</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "产品功能多，客户问题重复度高。AI客服解决了80%的常见问题，人工客服专注复杂咨询，工作效率提升3倍，客户等待时间减少70%。"
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-semibold text-orange-600 mr-2">数据:</span>
                  效率 +200% | 等待 -70%
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 交付和落地流程 */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                96小时极速落地，一点不拖泥带水
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                24小时喂资料，48小时调效果，72小时接私域，96小时就上线
              </p>
            </div>

            <div className="relative">
              {/* 连接线 */}
              <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200"></div>

              <div className="grid md:grid-cols-4 gap-8 relative">
                {/* 步骤1 */}
                <div className="relative">
                  <div className="bg-white p-6 rounded-2xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-xl transition-all duration-300 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">需求沟通</h3>
                    <p className="text-sm text-gray-600 text-center leading-relaxed">
                      深入了解你的业务场景、客户画像、常见问题，确定AI客服的定位和目标
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs text-orange-600 font-semibold text-center">1-2天</p>
                    </div>
                  </div>
                </div>

                {/* 步骤2 */}
                <div className="relative">
                  <div className="bg-white p-6 rounded-2xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-xl transition-all duration-300 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">方案设计</h3>
                    <p className="text-sm text-gray-600 text-center leading-relaxed">
                      设计AI客服的话术风格、对话流程、转人工规则，定制专属方案
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs text-orange-600 font-semibold text-center">2-3天</p>
                    </div>
                  </div>
                </div>

                {/* 步骤3 */}
                <div className="relative">
                  <div className="bg-white p-6 rounded-2xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-xl transition-all duration-300 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">知识库搭建</h3>
                    <p className="text-sm text-gray-600 text-center leading-relaxed">
                      整理产品资料、常见问答、销售话术，构建AI客服的知识体系
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs text-orange-600 font-semibold text-center">2-3天</p>
                    </div>
                  </div>
                </div>

                {/* 步骤4 */}
                <div className="relative">
                  <div className="bg-white p-6 rounded-2xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-xl transition-all duration-300 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                      <span className="text-2xl font-bold text-white">4</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">接入配置</h3>
                    <p className="text-sm text-gray-600 text-center leading-relaxed">
                      在你的微信/企微/公众号上接入AI客服，完成技术对接和权限配置
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs text-orange-600 font-semibold text-center">1-2天</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 第二排 */}
              <div className="grid md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
                {/* 步骤5 */}
                <div className="relative">
                  <div className="bg-white p-6 rounded-2xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                      <span className="text-2xl font-bold text-white">5</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">测试优化</h3>
                    <p className="text-sm text-gray-600 text-center leading-relaxed">
                      模拟真实对话场景，测试AI回复质量，根据反馈持续优化调整
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs text-orange-600 font-semibold text-center">2-3天</p>
                    </div>
                  </div>
                </div>

                {/* 步骤6 */}
                <div className="relative">
                  <div className="bg-white p-6 rounded-2xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                      <span className="text-2xl font-bold text-white">6</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">正式上线</h3>
                    <p className="text-sm text-gray-600 text-center leading-relaxed">
                      确认无误后正式启用AI客服，开始7×24小时自动接待客户
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs text-orange-600 font-semibold text-center">1天</p>
                    </div>
                  </div>
                </div>

                {/* 步骤7 */}
                <div className="relative">
                  <div className="bg-white p-6 rounded-2xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                      <span className="text-2xl font-bold text-white">7</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">持续迭代</h3>
                    <p className="text-sm text-gray-600 text-center leading-relaxed">
                      根据实际对话数据和客户反馈，持续优化AI话术和知识库
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs text-orange-600 font-semibold text-center">长期</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 服务保障 */}
            <div className="mt-16 bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">快速交付</h4>
                  <p className="text-sm text-gray-600">7-14天完成交付<br />最快3天可上线</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">专属服务</h4>
                  <p className="text-sm text-gray-600">1对1项目经理<br />全程跟进服务</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">满意保障</h4>
                  <p className="text-sm text-gray-600">不满意全额退款<br />零风险尝试</p>
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
                你问多少钱？嗯报价来了
                <br />
                人类客服的1/10成本，干活是他们的一百倍
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* 基础版 */}
              <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-orange-300 transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">基础版</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">¥6,800</span>
                  <span className="text-gray-600">/年</span>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  嗯也就相当于你原本人类客服一个月的工资。。
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">仅支持接入一个平台（个微、企微、公众号三选一）</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">仅支持1个知识库</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">接入私域服务费2000/次/平台</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">默认支持接入2个号，不够再加，一个月300，是你人工成本的1/20</span>
                  </li>
                </ul>
                <Link href="https://doc.weixin.qq.com/forms/AGMAagcLAAcAD4APQY0AMgCNQANhK63Ff?page=1" target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full normal-case">
                  人类一个月工资拿下AI客服，全年！
                </Link>
              </div>

              {/* 旗舰版 - 推荐 */}
              <div className="bg-orange-600 p-8 rounded-2xl border-2 border-orange-700 shadow-xl transform scale-105 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-700 text-white px-4 py-1 rounded-full text-sm font-medium">
                  最受欢迎
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">旗舰版</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">¥19,800</span>
                  <span className="text-orange-100">/年</span>
                </div>
                <p className="text-sm text-orange-100 mb-6">
                  2w块钱可能都不够你开除员工赔钱的。。AI能给你干一年客服。
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-orange-50">不限平台接入</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-orange-50">不限知识库</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-orange-50">免收接入服务费</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-orange-50">默认支持接入5个号，不够再加，一个月300，是你人工成本的1/20</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-orange-50">附赠【AI销冠】一个接入资格，全自动「主动」跟进客户（和AI客服互补）</span>
                  </li>
                </ul>
                <Link href="https://doc.weixin.qq.com/forms/AGMAagcLAAcAD4APQY0AMgCNQANhK63Ff?page=1" target="_blank" rel="noopener noreferrer" className="btn bg-white text-orange-600 hover:bg-orange-50 w-full border-0 normal-case">
                  有条件肯定上旗舰版啊，直接拉满
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">准备好干掉人类客服了吗（早晚的事）</h2>
            <p className="text-xl text-orange-100 mb-10">
              来，上一套鲸奇咨询师级别的AI客服，你会兴奋的晚上睡不着觉的
              <br />
              扫码填写表单登记进一步联系洽谈
            </p>
            <div className="flex justify-center">
              <Link href="https://doc.weixin.qq.com/forms/AGMAagcLAAcAD4APQY0AMgCNQANhK63Ff?page=1" target="_blank" rel="noopener noreferrer" className="btn btn-lg bg-white text-orange-600 hover:bg-orange-50 border-0 text-lg px-12 shadow-xl normal-case">
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
                <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-gray-900">{config.appName}</span>
              </Link>
              <p className="text-gray-600 text-sm mb-4 max-w-xs">
                AI智能客服解决方案，让每位客户都被秒回
              </p>
              <p className="text-gray-500 text-xs">
                © 2025 {config.appName}. 保留所有权利.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">产品</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#features" className="text-gray-600 hover:text-orange-600 transition-colors">功能特性</Link></li>
                <li><Link href="#pricing" className="text-gray-600 hover:text-orange-600 transition-colors">定价方案</Link></li>
                <li><Link href="/" className="text-gray-600 hover:text-orange-600 transition-colors">客户案例</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">公司</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-gray-600 hover:text-orange-600 transition-colors">关于我们</Link></li>
                <li><Link href="/" className="text-gray-600 hover:text-orange-600 transition-colors">联系我们</Link></li>
                <li><Link href="/privacy-policy" className="text-gray-600 hover:text-orange-600 transition-colors">隐私政策</Link></li>
                <li><Link href="/tos" className="text-gray-600 hover:text-orange-600 transition-colors">服务条款</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
