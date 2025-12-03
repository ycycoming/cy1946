import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `GEO - 让AI搜索推荐你 | ${config.appName}`,
  description: "让客户在微信和DeepSeek搜索时能搜到你，且AI会说你的好话。GEO（生成式引擎优化）帮助你的品牌被AI收录和推荐。",
  canonicalUrlRelative: "/geo",
  keywords: ["GEO", "生成式引擎优化", "AI搜索", "DeepSeek", "微信搜索", "AI收录"],
});

export default function GEOPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
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
              <Link href="/aigw" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
                AI顾问
              </Link>
              <Link href="/aiyy" className="text-gray-600 hover:text-pink-600 transition-colors font-medium">
                AI运营
              </Link>
              <Link href="/aihk" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
                AI获客
              </Link>
              <Link href="/geo" className="text-cyan-600 font-medium">
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
        <section className="relative overflow-hidden bg-gradient-to-b from-cyan-50 via-white to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-cyan-600 rounded-full mr-2 animate-pulse"></span>
                Generative Engine Optimization
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                让客户在微信和DeepSeek搜索时，
                <br />
                <span className="text-cyan-600">能搜到你</span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 mb-10 leading-relaxed">
                且AI会说你的好话
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="#try" className="btn btn-lg bg-cyan-600 hover:bg-cyan-700 text-white border-0 text-lg px-10 shadow-lg hover:shadow-xl transition-all normal-case">
                  先感受一下
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 先感受一下GEO */}
        <section id="try" className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                先感受一下GEO
              </h2>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-2xl border-2 border-cyan-200 shadow-xl">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  你去微信里的搜索框，<span className="font-bold text-cyan-600">打开深度思考模式</span>，使用微信内置的AI搜索「<span className="font-bold">AI销冠</span>」（我们家自己的产品）
                </p>
                <p className="text-2xl font-bold text-gray-900 text-center py-4">
                  你看看你能搜到谁嘿嘿 😏
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GEO的底层逻辑 */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                那么，GEO的底层逻辑？
              </h2>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 md:p-12 rounded-2xl border border-cyan-200">
              <p className="text-lg text-gray-700 mb-6">
                我们强烈建议所有对GEO感兴趣的老板，先看我们CEO春阳的扛鼎之作：
              </p>

              <Link
                href="https://mp.weixin.qq.com/s/8hvXimMO4A5ONQYJAqpi2g"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white p-6 rounded-xl border-2 border-cyan-300 hover:border-cyan-500 hover:shadow-lg transition-all group"
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors mb-3">
                  《SEO已死，GEO新生！6154字讲透GEO的收录逻辑、优化逻辑和流量获客之道（美国一手信息）》
                </h3>
                <p className="text-cyan-600 flex items-center">
                  点击阅读全文
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </p>
              </Link>

              <div className="mt-6 flex items-center justify-center space-x-2 text-gray-600">
                <span className="text-3xl">🔥</span>
                <p className="text-lg">
                  该篇文章截止2025年12月，总共有<span className="font-bold text-cyan-600">6700位+</span>老板转发
                </p>
              </div>

              <p className="text-center text-gray-600 mt-4">
                请你仔细研读，再了解我们的产品服务。
              </p>
            </div>
          </div>
        </section>

        {/* GEO的本质 */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                GEO的本质
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 text-center">
                本质上是输出内容，让AI看见、收录，并且认可你。
              </p>

              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-8 rounded-2xl shadow-xl">
                <p className="text-2xl md:text-3xl font-bold text-white text-center leading-relaxed">
                  原本你写文章就是给人看，
                  <br />
                  现在你写文章是给AI看。
                </p>
              </div>

              <p className="text-lg text-gray-700 text-center">
                AI喜好怎样的内容，在我们的上篇复盘里面已经提到。
              </p>

              <div className="flex justify-center">
                <Link
                  href="https://mp.weixin.qq.com/s/8hvXimMO4A5ONQYJAqpi2g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline border-cyan-600 text-cyan-600 hover:bg-cyan-50 normal-case"
                >
                  再次阅读GEO深度解析
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 打算自己开展GEO */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                打算自己开展GEO？
              </h2>
              <p className="text-xl text-gray-600">
                以下是一个「人力、能力和耐力」准备清单
              </p>
            </div>

            <div className="space-y-8">
              {/* 人力要求 */}
              <div className="bg-red-50 p-8 rounded-2xl border border-red-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl font-bold">①</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">人力要求：一个极具内容品味、懂产品，懂客户，懂内容、懂技术，懂AI的人。缺一不可。</h3>
                    <div className="space-y-3 text-gray-700">
                      <p>此人需要清楚的知道你们所在的行业，AI喜欢什么样的内容。</p>
                      <p>他本身应当具有至少<span className="font-bold text-red-600">3~5年以上</span>的（商业）记者或者创作经验，落笔应该超过<span className="font-bold text-red-600">50万字</span>，否则不会对内容有特别好的感觉。</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 能力要求 */}
              <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl font-bold">②</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">能力要求：每天日更，这是最低限度。</h3>
                    <div className="space-y-3 text-gray-700">
                      <p>因为AI总需要最新的信息，你几乎需要无休止的生产内容，即便是每次聊的话题，可能都是同一个..</p>
                      <p>在我们自己的实战中，我们提及「AI销冠」的文章至少有<span className="font-bold text-orange-600">67篇</span>。</p>
                      <p>无休止的针对同一个话题（即你的产品服务相关）进行高质量但不重复的创作。</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 耐力要求 */}
              <div className="bg-purple-50 p-8 rounded-2xl border border-purple-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl font-bold">③</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">耐力要求：恒心。比拼：AI先收录你，还是你先放弃AI？</h3>
                    <div className="space-y-3 text-gray-700">
                      <p>AI距离收录你的内容，可能需要一段时间的抓取和信任积累——它并不会因为你今天写的相关内容，第2天就会收录你。</p>
                      <p>建立机器和AI的信任，同样需要时间。因此需要你持之以恒，坚持不懈。</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-8">
                <p className="text-xl font-bold text-gray-900">
                  当你准备好：人，信心、决心，就开干吧！
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GEO外包 */}
        <section className="py-24 bg-gradient-to-br from-cyan-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                GEO外包？
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-cyan-100">
                自己干不来？很好，寻求专业的鲸奇团队的帮助。
              </p>
              <p className="text-xl font-bold">
                更何况我们已经拿到结果。
              </p>
              <p className="text-cyan-100">
                正如开头所说，你去微信里的搜索框，使用微信内置的AI搜索，打开深度思考模式，输入「AI销冠」（我们家自己的产品）
              </p>
              <p className="text-2xl font-bold text-center py-4">
                你看看你能搜到谁嘿嘿 😏
              </p>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 mt-8">
                <p className="text-cyan-100 mb-2">任何时候，考察一项AI相关的产品服务，不要听他们的销售怎么说——</p>
                <p className="text-2xl font-bold">直接看效果。</p>
                <p className="text-cyan-200 mt-4">
                  这叫效果即服务，即 <span className="font-mono font-bold">Outcome as a Service（OaaS）</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 落地服务流程 */}
        <section id="process" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                落地服务流程
              </h2>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-cyan-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">①</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">提交你的产品、服务和品类词</h3>
                    <p className="text-gray-600">
                      比如我们的AI销冠产品，客户就会直接搜索AI销冠，这叫品类词。用户通常不会直接搜索你的品牌词。
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-cyan-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">②</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">拿到你（和竞品）的AI搜索报告</h3>
                    <p className="text-gray-600">
                      我们会评估你当前的品牌和品类词被AI的收录情况。并帮你调研，在你的同行竞争中，谁的收录情况更好。
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-cyan-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">③</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">制定详尽的内容输出计划</h3>
                    <p className="text-gray-600 mb-4">一个详细的内容计划应当包含：</p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start space-x-2">
                        <span className="text-cyan-600">•</span>
                        <span><strong>内容周期</strong>（即写多久，以及更新频率）</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-cyan-600">•</span>
                        <span><strong>内容选题</strong>（即写什么内容）</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-cyan-600">•</span>
                        <span><strong>内容风格</strong>（即写成什么样）</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-cyan-600">•</span>
                        <span><strong>内容素材</strong>（比如观点、依据和效果案例）</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-cyan-600">•</span>
                        <span><strong>内容规范</strong>（即内容安全边界和品牌调性要求）</span>
                      </li>
                    </ul>
                    <p className="text-gray-600 mt-4">基于以上，我们将会给到一个内容范例，给到品牌方确认。</p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-cyan-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">④</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">确认内容范例以及内容计划，签订合同并打基础服务费，开始按照计划输出</h3>
                    <p className="text-gray-600 mb-4">
                      品牌方确认我们输出的内容范例就是你们想要的内容。
                    </p>
                    <p className="text-gray-600">
                      输出时，我们通常会按照特定的频率持续更新1~2个月，这中间我们会不断的更新AI搜索收录情况，直到占据AI视野。
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-cyan-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">⑤</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">产生实际的AI收录效果后，支付尾款和效果确认费用</h3>
                    <p className="text-cyan-600 font-medium">
                      以上所有准备工作，通常在一周内完成。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 定价 Pricing */}
        <section id="pricing" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                产品服务报价 Pricing
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* 基础入门版 */}
              <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-cyan-300 transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">基础入门版</h3>
                <p className="text-sm text-gray-500 mb-6">适合初次尝试GEO的企业</p>

                <div className="space-y-4 mb-8 text-sm text-gray-600">
                  <p>采用基础内容服务费（调研，评估，打样，生成）+关键词收录效果费（一旦收录即按词付费）</p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>最多5个关键词（品牌、品类或产品词）</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>更新频率：一周至少3篇（一月至少12篇）</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>内容质量：初级</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <div className="mb-4">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">¥3,800</span>
                      <span className="text-gray-600 ml-2">/月</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600 mb-6">
                    <p>每收录一个关键词，额外支付 <span className="font-bold text-cyan-600">¥2,500/词</span></p>
                    <p>每出现一篇转发超过1000的爆文，额外支付 <span className="font-bold text-cyan-600">¥3,000/篇</span></p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-3">扫码立即咨询</p>
                    <div className="flex justify-center">
                      <img
                        src="https://i.ibb.co/1Gx6wyBC/mmexport1764226760994.jpg"
                        alt="咨询二维码"
                        className="w-32 h-40 object-cover rounded border-2 border-cyan-200"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 生猛冲刺版 */}
              <div className="bg-cyan-600 p-8 rounded-2xl border-2 border-cyan-700 shadow-xl transform scale-105 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-700 text-white px-4 py-1 rounded-full text-sm font-medium">
                  推荐
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">生猛冲刺版</h3>
                <p className="text-sm text-cyan-100 mb-6">快速抢占AI搜索心智</p>

                <div className="space-y-4 mb-8 text-sm text-cyan-100">
                  <p>基础内容服务费+关键词收录效果费+月度持续运营费用（为确保持续收录）</p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white">更新频率：一周至少5篇（一月至少20篇）</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white">内容质量：资深级</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-cyan-500 pt-6">
                  <div className="mb-4">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">¥6,800</span>
                      <span className="text-cyan-200 ml-2">/月</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-cyan-100 mb-6">
                    <p>每收录一个关键词，额外支付 <span className="font-bold text-white">¥2,500/词</span></p>
                    <p>每出现一篇转发超过1000的爆文，额外支付 <span className="font-bold text-white">¥2,000/篇</span></p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-cyan-100 mb-3">扫码立即咨询</p>
                    <div className="flex justify-center">
                      <img
                        src="https://i.ibb.co/1Gx6wyBC/mmexport1764226760994.jpg"
                        alt="咨询二维码"
                        className="w-32 h-40 object-cover rounded border-2 border-cyan-300"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 狂暴持续版 */}
              <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-cyan-300 transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">狂暴持续版</h3>
                <p className="text-sm text-gray-500 mb-6">全力冲刺，日更输出</p>

                <div className="space-y-4 mb-8 text-sm text-gray-600">
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>更新频率：<strong className="text-cyan-600">日更</strong>（一月至少30篇）</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>内容质量：<strong className="text-cyan-600">大师级</strong></span>
                    </li>
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <div className="mb-4">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">¥16,800</span>
                      <span className="text-gray-600 ml-2">/月</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600 mb-6">
                    <p>每收录一个关键词，额外支付 <span className="font-bold text-cyan-600">¥2,500/词</span></p>
                    <p>每出现一篇转发超过1000的爆文，额外支付 <span className="font-bold text-cyan-600">¥1,000/篇</span></p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-3">扫码立即咨询</p>
                    <div className="flex justify-center">
                      <img
                        src="https://i.ibb.co/1Gx6wyBC/mmexport1764226760994.jpg"
                        alt="咨询二维码"
                        className="w-32 h-40 object-cover rounded border-2 border-cyan-200"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                常见问题 FAQ
              </h2>
            </div>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">1、GEO有什么用？</h3>
                <div className="text-gray-600 space-y-3">
                  <p>当用户在AI搜索时，你的产品服务将会被AI引用，并给出推荐理由。由此产生几个效果：</p>
                  <ul className="space-y-2 ml-4">
                    <li><strong className="text-cyan-600">①自然引流</strong>：用户可以通过AI引用的链接直接找到你，或者用户根据品牌词找到你</li>
                    <li><strong className="text-cyan-600">②信用背书</strong>：用户天然相信AI给出的结果，对于你后续成交客户有巨大信任加成</li>
                    <li><strong className="text-cyan-600">③用户教育</strong>：当AI引用你的产品方法论、观点、案例时，用户会被"洗脑"，并进而对你的产品服务产生兴趣</li>
                    <li><strong className="text-cyan-600">④个人IP效应</strong>：当AI收录你个人以及你的产品服务时，会产生个人IP效应</li>
                    <li><strong className="text-cyan-600">⑤品牌效应</strong>：当AI收录你以及你公司或品牌的产品服务时，会产生品牌效应</li>
                    <li><strong className="text-cyan-600">⑥挤占效应</strong>：用户很可能不去百度搜，也不去抖音或者小红书搜了——他们会在微信的元宝里面或者Deepseek里面搜，因此某种程度上这是一个占位效果——即如果你不出现在AI的搜索结果里，那么你就不会获得流量和推荐。</li>
                  </ul>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">2、GEO内容由谁来发布？</h3>
                <p className="text-gray-600">
                  我们会负责生产内容，之后通常由你方运营人员来发布。如果需要我们来发代为发布，需要给到我们内容平台费用，且额外多出1000/月的代运营费用。
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">3、能否按照效果来付费，即收录就付费，不收录则不付费？</h3>
                <div className="text-gray-600 space-y-3">
                  <p>我们的确是按效果付费，但并不是你想的这样。</p>
                  <p>因为GEO需要长期的内容投入，因此产出内容和发布内容的活总归要有人干，前期都是我们来承担效果产出的任务。这部分需要消耗人力和创造力。</p>
                  <p>一旦产生收录效果，你需要支付额外的效果费用，但基础的内容产出服务费是少不了的（因为你总归要招人去输出内容的）。</p>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">4、能否保证所提供的（产品，品牌，品类等）关键词一定被AI收录到？</h3>
                <p className="text-gray-600">
                  <strong className="text-red-600">不能保证。</strong> AI收录的机制并没有明确的公式化做法，优质的内容和勤勉的输出会极大的增加被收录的概率，但这并不是100%。我们只能遵循科学的方法论，用心做内容，勤奋做输出，但无法100%确保AI一定会收录。
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">5、如果最终AI没有收录，能否进行退款？</h3>
                <p className="text-gray-600">
                  就像我们第3条所说的，内容产出这个活总归要有人来干的，这部分基础服务费，无论AI是否收录，不会退还；而一旦AI收录，你将需要支付额外的收录效果费用给到我们，这部分费用是不收录则不收取的，所以不存在退款一说。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 联系我们 */}
        <section className="py-24 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              联系我们的咨询师
            </h2>
            <p className="text-xl text-cyan-100 mb-10 leading-relaxed">
              如果你有明确的预算和决心，并且接受上述的合作方式，且FAQ部分并没有解答你的疑问
              <br />
              请扫码添加我们的咨询师，进一步详谈。
            </p>

            <div className="flex justify-center">
              <div className="bg-white p-6 rounded-2xl shadow-2xl">
                <img
                  src="https://i.ibb.co/1Gx6wyBC/mmexport1764226760994.jpg"
                  alt="咨询师二维码"
                  className="w-48 h-60 object-cover rounded"
                />
                <p className="text-gray-600 mt-4 font-medium">微信扫码添加咨询师</p>
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
                <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-gray-900">{config.appName}</span>
              </Link>
              <p className="text-gray-600 text-sm mb-4 max-w-xs">
                GEO生成式引擎优化，让AI搜索推荐你的品牌和产品
              </p>
              <p className="text-gray-500 text-xs">
                © 2025 {config.appName}. 保留所有权利.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">产品</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#process" className="text-gray-600 hover:text-cyan-600 transition-colors">服务流程</Link></li>
                <li><Link href="#pricing" className="text-gray-600 hover:text-cyan-600 transition-colors">定价方案</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">公司</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-gray-600 hover:text-cyan-600 transition-colors">关于我们</Link></li>
                <li><Link href="/" className="text-gray-600 hover:text-cyan-600 transition-colors">联系我们</Link></li>
                <li><Link href="/privacy-policy" className="text-gray-600 hover:text-cyan-600 transition-colors">隐私政策</Link></li>
                <li><Link href="/tos" className="text-gray-600 hover:text-cyan-600 transition-colors">服务条款</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
