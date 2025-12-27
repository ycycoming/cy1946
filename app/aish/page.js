import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import MobileNav from "@/components/MobileNav";
import QRCodeImage from "@/components/QRCodeImage";

export const metadata = getSEOTags({
  title: `AI售后 - AI客户成功CSM | ${config.appName}`,
  description: "你的售后和客户成功,可以交给AI了。不是呆萌的客服机器人,而是能交付最佳实践、帮客户把东西用起来的AI客户成功经理。",
  canonicalUrlRelative: "/aish",
  keywords: ["AI售后", "客户成功", "CSM", "售后交付", "客户服务", "AI顾问"],
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
              <Link href="/oem" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
                代理贴牌
              </Link>
              <Link href="/hehuo" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">
                合伙人
              </Link>
            </nav>
            <MobileNav currentPath="/aish" />
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
                AI客户成功经理
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                你的售后和客户成功,
                <br />
                <span className="text-indigo-600">可以交给AI了</span>
              </h1>
            </div>
          </div>
        </section>

        {/* 不要用成呆萌机器人 */}
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                但别把AI用成了呆萌的AI客服售后机器人
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                它甚至能够交付最佳实践,帮客户把东西用起来
              </p>
            </div>
          </div>
        </section>

        {/* 客户售后交付旅程 */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                客户售后交付旅程
              </h2>
            </div>

            <div className="space-y-8 max-w-5xl mx-auto">
              {/* 场景1 */}
              <div className="bg-white p-8 rounded-2xl border border-indigo-200 shadow-sm">
                <div className="flex flex-wrap items-center gap-3 text-lg">
                  <span className="px-4 py-2 bg-gray-100 rounded-lg font-medium">下单</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-4 py-2 bg-gray-100 rounded-lg font-medium">收货</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-4 py-2 bg-gray-100 rounded-lg font-medium">使用</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-4 py-2 bg-red-100 rounded-lg font-medium text-red-700">用不好</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-4 py-2 bg-indigo-600 rounded-lg font-medium text-white">AI 交付介入</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-4 py-2 bg-green-100 rounded-lg font-medium text-green-700">用起来</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-4 py-2 bg-green-100 rounded-lg font-medium text-green-700">用到爽</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-4 py-2 bg-yellow-100 rounded-lg font-medium text-yellow-700">续费/复购/转介绍</span>
                </div>
              </div>

              {/* 场景2 */}
              <div className="bg-white p-8 rounded-2xl border border-indigo-200 shadow-sm">
                <div className="flex flex-wrap items-center gap-3 text-lg">
                  <span className="px-4 py-2 bg-gray-100 rounded-lg font-medium">下单</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-4 py-2 bg-gray-100 rounded-lg font-medium">收货</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-4 py-2 bg-red-100 rounded-lg font-medium text-red-700">忘记用</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-4 py-2 bg-indigo-600 rounded-lg font-medium text-white">AI 交付介入</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-4 py-2 bg-green-100 rounded-lg font-medium text-green-700">用起来</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-4 py-2 bg-green-100 rounded-lg font-medium text-green-700">用到爽</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-4 py-2 bg-yellow-100 rounded-lg font-medium text-yellow-700">续费/复购/转介绍</span>
                </div>
              </div>

              {/* 场景3 */}
              <div className="bg-white p-8 rounded-2xl border border-indigo-200 shadow-sm">
                <div className="flex flex-wrap items-center gap-3 text-lg">
                  <span className="px-4 py-2 bg-gray-100 rounded-lg font-medium">下单</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-4 py-2 bg-gray-100 rounded-lg font-medium">收货</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-4 py-2 bg-red-100 rounded-lg font-medium text-red-700">不会用</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-4 py-2 bg-indigo-600 rounded-lg font-medium text-white">AI 交付介入</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-4 py-2 bg-green-100 rounded-lg font-medium text-green-700">用起来</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-4 py-2 bg-green-100 rounded-lg font-medium text-green-700">用到爽</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-4 py-2 bg-yellow-100 rounded-lg font-medium text-yellow-700">续费/复购/转介绍</span>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl text-gray-700 font-semibold max-w-3xl mx-auto leading-relaxed">
                无论哪种,AI售后交付的最终目的是为了帮客户把东西用起来。
                <br />
                <span className="text-indigo-600">不用起来,对方怎么续费,怎么复购,怎么转介绍?</span>
              </p>
            </div>
          </div>
        </section>

        {/* AI客户成功 CSM */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                这个AI售后不一般
              </h2>
              <p className="text-2xl text-indigo-600 font-semibold mb-6">
                我们管它叫AI客户成功
              </p>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                AI CSM, Customer Success Manager
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  CSM的存在,并不是为了帮你被动的解答客户的售后牢骚,而是主动的基于最佳的使用效果、基于客户能够续费和转介绍的标准,来为客户提供售后交付服务
                </p>
                <p className="text-2xl font-bold text-indigo-600 text-center">
                  客户成功,才是我们的成功
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                详细的查看我们家AI售后客户成功的细节和介绍,请阅读这边复盘:
              </p>
              <Link
                href="https://mp.weixin.qq.com/s/Yg_krOdlNOGhGjydwdFXkQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                鲸奇推出完全自主的「售后交付」AI顾问,把你的客户落地,引导复购,升单和转介绍 →
              </Link>
            </div>
          </div>
        </section>

        {/* AI售后的几个核心依据 */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                AI售后的几个核心依据
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* 依据1 */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">基于客户的使用状况</h3>
                <p className="text-gray-600 leading-relaxed">
                  比如客户用没用,用的怎么样,有没有用出来一个合适的指标
                </p>
              </div>

              {/* 依据2 */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">基于客户的购买和复购情况</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  AI能够接入你的CRM、ERP、你的小程序、你的商城*、你的视频号商店,他知道你的客户买了哪些东西
                </p>
                <p className="text-sm text-gray-500 italic">
                  *部分取决于你的商城是否支持API,以及能否和腾讯的生态打通
                </p>
              </div>

              {/* 依据3 */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl font-bold text-indigo-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">基于你们的售后交付经验和节奏</h3>
                <p className="text-gray-600 leading-relaxed">
                  比如第一周该交付什么,第二周该交付什么,第三周该交付什么,第四周该交付什么
                </p>
              </div>
            </div>

            <div className="mt-12 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl border-2 border-indigo-200">
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  将你售后的工作流程化、标准化、SOP化
                  <br />
                  之后将整套SOP交给我们的AI售后和客户成功经理,进行7×24×365的百分之百执行落地,
                  <br />
                  <span className="text-indigo-600 font-semibold">省去人工的同时,确保客户把东西用起来。</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* One more thing - 售后服务群 */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                One more thing
              </h2>
              <p className="text-xl text-gray-600">
                哦,差点忘了,还有你的售后服务群
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 md:p-12 rounded-2xl border-2 border-indigo-200 mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  有了AI售后,是否还需要拉售后交付服务群?
                </h3>
                <p className="text-xl text-center mb-8">
                  <span className="text-indigo-600 font-bold text-2xl">嗯,反正我们自己是解散了哈哈哈</span>
                </p>
                <p className="text-lg text-gray-700 text-center mb-8">
                  是的,鲸奇在部署AI售后的第一天,就解散了公司所有的售后服务群
                </p>
                <div className="text-center">
                  <Link
                    href="https://mp.weixin.qq.com/s/4CPr9LUzHDTQXQdjagTZFg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
                  >
                    查看我们这篇狂野的复盘 →
                  </Link>
                  <p className="text-sm text-gray-600 mt-2">
                    部署AI售后顾问第1件事...我们解散了公司所有的售后服务群
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold">但你大可不必。</span>
                  <br /><br />
                  因为我们的AI售后也可以支持接入到你的社群,回复客户的消息,并把群作为推送和交付的对象,持续主动推送。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 如何体验 */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                如何体验鲸奇的整套AI售后能力?
              </h2>
              <p className="text-xl text-gray-600">
                两种体验方式
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* 方式1 */}
              <div className="bg-white p-8 rounded-2xl border-2 border-indigo-200 shadow-lg">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    1
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      非老板群体体验方式
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      你可以关注我们CEO春阳的视频号,并在他的商城随便买一个东西,然后体验我们的整个交付流程,完全由AI驱动,没有任何的人力干预
                    </p>
                    <p className="text-sm text-indigo-600 font-medium mb-4">
                      (建议非老板群体采用这个方式)
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <QRCodeImage
                    src="https://i.ibb.co/V00WRmfY/mmexport1764141306607.jpg"
                    alt="春阳视频号二维码"
                    fallbackText="扫码关注春阳视频号"
                  />
                </div>
              </div>

              {/* 方式2 */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-8 rounded-2xl border-2 border-indigo-700 shadow-xl text-white transform scale-105 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                  推荐老板
                </div>
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 font-bold text-lg">
                    2
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-bold mb-3">
                      老板群体体验方式
                    </h3>
                    <p className="text-indigo-100 leading-relaxed mb-6">
                      你可以扫码登记公司和身份,针对老板群体,我们可以直接让AI扮演你的顾问和售后角色,你直接和它对话进行体验
                    </p>
                    <p className="text-sm text-yellow-300 font-medium mb-4">
                      (建议老板群体采用这个方式)
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <QRCodeImage
                    src="https://i.ibb.co/RkShm4N0/mmexport1766733478692.jpg"
                    alt="老板体验二维码"
                    fallbackText="扫码登记体验"
                    borderColor="border-white"
                    bgColor="bg-white/10"
                    textColor="text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              客户成功,才是我们的成功
            </h2>
            <p className="text-xl text-indigo-100 mb-10">
              让AI客户成功经理帮你实现客户的持续价值
              <br />
              续费、复购、转介绍,一个都不能少
            </p>
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
                AI客户成功解决方案,让每位客户都成功
              </p>
              <p className="text-gray-500 text-xs">
                © 2025 {config.appName}. 保留所有权利.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">产品</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">AI销冠</Link></li>
                <li><Link href="/aikf" className="text-gray-600 hover:text-indigo-600 transition-colors">AI客服</Link></li>
                <li><Link href="/aish" className="text-gray-600 hover:text-indigo-600 transition-colors">AI售后</Link></li>
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
