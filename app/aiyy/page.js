import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `AI运营 - 公私域全自动运营 | ${config.appName}`,
  description: "让AI帮你运营个人IP、朋友圈、社群、小红书。一天300-500条朋友圈，1000个群同时管理，成本仅为人类运营的1/10。",
  canonicalUrlRelative: "/aiyy",
  keywords: ["AI运营", "私域运营", "社群运营", "朋友圈运营", "小红书运营", "AI自动化"],
});

export default function AIOperations() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-pink-600 rounded-xl flex items-center justify-center">
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
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
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
        <section className="relative overflow-hidden bg-gradient-to-b from-pink-50 via-white to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-pink-600 rounded-full mr-2 animate-pulse"></span>
                公私域全自动运营
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                你的个人IP/朋友圈/社群
                <br />
                甚至小红书...<span className="text-pink-600">可以交给AI了</span>
              </h1>
              <div className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed space-y-4">
                <p>
                  给运营发一个月15k的工资就有点冤种了。
                  <br />
                  如果是4个平台，你可能需要4个运营。
                </p>
                <p className="font-semibold text-pink-600 text-2xl">
                  我们隆重有请鲸奇「公私域运营」出场！
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="#build" className="btn btn-lg bg-pink-600 hover:bg-pink-700 text-white border-0 text-lg px-10 shadow-lg hover:shadow-xl transition-all normal-case">
                  来吧，展示
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 为什么需要AI运营 */}
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                为什么需要AI运营？
              </h2>
              <p className="text-xl text-gray-600">
                人类运营 VS AI运营
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* 人类运营痛点 */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-red-500 mr-3">✗</span>
                  人类运营
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-red-50 border border-red-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">运营能力差</h4>
                      <p className="text-gray-600 text-sm">同时管10个群都费劲</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-red-50 border border-red-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">输出能力差</h4>
                      <p className="text-gray-600 text-sm">你的运营一天能发个三条朋友圈不？能日更不？</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-red-50 border border-red-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">技能树单一</h4>
                      <p className="text-gray-600 text-sm">做公域运营的，管不了私域；做私域运营的，管不了公域；写公众号的拍不了短视频，做IP的干不了SOP..</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-red-50 border border-red-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">成本高昂</h4>
                      <p className="text-gray-600 text-sm">你的人类运营多少钱一个月？</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-red-50 border border-red-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">运营=群发广告？</h4>
                      <p className="text-gray-600 text-sm">你的运营说好听点叫运营，说难听点就是个逢年过节发广告的...</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-red-50 border border-red-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">6</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">全面落后</h4>
                      <p className="text-gray-600 text-sm">人类在执行力，在勤奋度，在技能树，在创意，在输出，全面落下风</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI运营优势 */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  AI运营
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-green-50 border border-green-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">运营能力拉满</h4>
                      <p className="text-gray-600 text-sm">1000、1万个群又何惧？拖入一个AI，一下全搞定</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-green-50 border border-green-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">输出能力爆表</h4>
                      <p className="text-gray-600 text-sm">一天300~500条朋友圈起步，而且每一条都定向可见。客户喜欢啥它发啥。这是重点，数量甚至都不是最可怕的。</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-green-50 border border-green-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">全都能干</h4>
                      <p className="text-gray-600 text-sm">就这4个字，看好了，"全都能干"，而且干的比你的人强的多。</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-green-50 border border-green-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">成本？1/10甚至1/100</h4>
                      <p className="text-gray-600 text-sm">不管你多少钱一个月，我只收他的1/10，甚至1/40。如果你的号和人足够多，我可能只用1/100的成本就能干掉他们100倍的活。</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-green-50 border border-green-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">千人千面，投其所好</h4>
                      <p className="text-gray-600 text-sm">AI的运营是千人千面，是满面春风，是定向可见，是投其所好。人怎么比？</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-green-50 border border-green-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">6</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">顶级AI加持</h4>
                      <p className="text-gray-600 text-sm">Gemini 3 和Grok 5这么强，你们就真的没想过把它接入到你的私域和公域，帮你运营吗？别想了，干吧。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 落地 Build - 四步构建 */}
        <section id="build" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                一共四步构建你的AI运营
              </h2>
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">选定你的平台</h3>
                    <p className="text-gray-600 text-lg">
                      公域（视频号，抖音，公众号，小红书）还是私域（企微，个微）？
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">选定你的触点</h3>
                    <p className="text-gray-600 text-lg mb-4">
                      图文还是短视频？社群还是朋友圈？
                    </p>
                    <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                      <p className="text-pink-800 text-sm mb-4">
                        我们在直播间将会提供整套运营SOP模板，你可以直接抄作业。
                        <br />
                        扫码关注我们的视频号，找到最近的一场直播来听。
                      </p>
                      <div className="flex justify-center">
                        <div className="bg-white p-4 rounded-lg border-2 border-pink-300">
                          <img
                            src="https://i.ibb.co/V00WRmfY/mmexport1764141306607.jpg"
                            alt="视频号二维码"
                            className="w-32 h-40 object-cover rounded"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">套SOP模板脚本</h3>
                    <p className="text-gray-600 text-lg mb-4">
                      是的，以上所有触点的整个工作流和SOP我们已经搞好了，你只要过来抄个作业就行。
                    </p>
                    <p className="text-gray-500 text-sm">
                      还是上面的直播间链接。你扫码关注我，然后找到最近的一场直播来听。
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">让你的人力运营收拾行李...</h3>
                    <p className="text-gray-600 text-lg mb-4">
                      不好意思，我们说话粗俗了一点。但基本上这个岗位可能永久就消失了。
                    </p>
                    <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                      <p className="text-pink-800 text-sm">
                        你可以留下两个脑子灵光的小朋友，让他们掌管整个运营工作流和SOP。
                        <br /><br />
                        是的，你要的不是运营本身，你要的是能够运营「AI运营」的人。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 定价 Pricing */}
        <section id="pricing" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                定价方案
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* 初级版 */}
              <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-pink-300 transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">初级版</h3>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>执行能力：</strong>半自动（部分操作需要手动执行，比如说推送群SOP，以及发布朋友圈和小红书，但AI会帮你把内容和人群准备好）</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>生态能力：</strong>公众号，视频号，小红书，企微，个微五选一</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>工作流和SOP能力：</strong>可以同时跑动1个工作流和SOP（上述的5个平台，分别对应一个工作流和SOP，比如小红书"洗稿"工作流，比如朋友圈SOP）</span>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="mb-4">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">¥500</span>
                      <span className="text-gray-600 ml-2">/月</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">按月需要支付接入服务费 ¥3,000/次/平台，按年无需</p>
                  </div>
                  <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 mb-6">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-pink-700">¥5,000</span>
                      <span className="text-pink-600 ml-2">/年</span>
                    </div>
                    <p className="text-sm text-pink-700 mt-1 font-medium">是的，一个初级人类运营的月薪，拿到一整年的AI运营</p>
                  </div>
                  <Link href="https://doc.weixin.qq.com/forms/AGMAagcLAAcAD4APQY0AMgCNQANhK63Ff?page=1" target="_blank" rel="noopener noreferrer" className="btn btn-outline border-pink-600 text-pink-600 hover:bg-pink-50 w-full normal-case">
                    立即咨询
                  </Link>
                </div>
              </div>

              {/* 旗舰版 */}
              <div className="bg-pink-600 p-8 rounded-2xl border-2 border-pink-700 shadow-xl transform scale-105 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-700 text-white px-4 py-1 rounded-full text-sm font-medium">
                  推荐
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">旗舰版</h3>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-pink-100"><strong className="text-white">执行能力：</strong>全自动</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-pink-100"><strong className="text-white">生态能力：</strong>公众号，视频号，小红书，企微，个微全支持（但不同生态能力有所差别，公域部分只有内容工作流，没有自动矩阵发布；私域部分有自动化执行）</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-pink-100"><strong className="text-white">工作流和SOP能力：</strong>无限工作流，无限SOP</span>
                  </div>
                </div>

                <div className="border-t border-pink-500 pt-6">
                  <div className="mb-4">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">¥1,500</span>
                      <span className="text-pink-200 ml-2">/月</span>
                    </div>
                    <p className="text-sm text-pink-200 mt-1">按月需要支付接入服务费 ¥3,000/次/平台，按年无需</p>
                  </div>
                  <div className="bg-pink-700/50 border border-pink-400 rounded-lg p-4 mb-6">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-white">¥15,000</span>
                      <span className="text-pink-200 ml-2">/年</span>
                    </div>
                    <p className="text-sm text-pink-100 mt-1 font-medium">一年万把块钱，可能也就是你一个月运营的基本工资，拿到全年的公私域托管式运营。</p>
                  </div>
                  <Link href="https://doc.weixin.qq.com/forms/AGMAagcLAAcAD4APQY0AMgCNQANhK63Ff?page=1" target="_blank" rel="noopener noreferrer" className="btn bg-white text-pink-600 hover:bg-pink-50 w-full border-0 normal-case">
                    立即咨询
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-pink-600 to-pink-700 text-white py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">准备好让AI接管运营了吗？</h2>
            <p className="text-xl text-pink-100 mb-10">
              一天300-500条朋友圈，1000个群同时管理
              <br />
              成本仅为人类运营的1/10
            </p>
            <div className="flex justify-center">
              <Link href="https://doc.weixin.qq.com/forms/AGMAagcLAAcAD4APQY0AMgCNQANhK63Ff?page=1" target="_blank" rel="noopener noreferrer" className="btn btn-lg bg-white text-pink-600 hover:bg-pink-50 border-0 text-lg px-12 shadow-xl normal-case">
                立即开始
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
                <div className="w-10 h-10 bg-pink-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-gray-900">{config.appName}</span>
              </Link>
              <p className="text-gray-600 text-sm mb-4 max-w-xs">
                AI运营解决方案，让公私域运营全自动化
              </p>
              <p className="text-gray-500 text-xs">
                © 2025 {config.appName}. 保留所有权利.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">产品</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#build" className="text-gray-600 hover:text-pink-600 transition-colors">构建流程</Link></li>
                <li><Link href="#pricing" className="text-gray-600 hover:text-pink-600 transition-colors">定价方案</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">公司</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-gray-600 hover:text-pink-600 transition-colors">关于我们</Link></li>
                <li><Link href="/" className="text-gray-600 hover:text-pink-600 transition-colors">联系我们</Link></li>
                <li><Link href="/privacy-policy" className="text-gray-600 hover:text-pink-600 transition-colors">隐私政策</Link></li>
                <li><Link href="/tos" className="text-gray-600 hover:text-pink-600 transition-colors">服务条款</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
