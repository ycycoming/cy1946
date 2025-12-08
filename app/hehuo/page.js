import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `合伙人 - 请春阳做你的AI合伙人 | ${config.appName}`,
  description: "搞定了流量和产品？让春阳来帮你搞定内容和私域。春阳本人，会带着他调好的4大智能体加盟你的业务：AI销冠、AI客服、AI顾问、AI运营。",
  canonicalUrlRelative: "/hehuo",
  keywords: ["AI合伙人", "春阳", "私域运营", "AI销冠", "AI客服", "AI顾问", "AI运营", "鲸奇合伙人"],
});

export default function HehuoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center">
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
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
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
              <Link href="/oem" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
                代理贴牌
              </Link>
              <Link href="/hehuo" className="text-amber-600 font-medium">
                合伙人
              </Link>
            </nav>
            <Link href="/" className="btn btn-ghost md:hidden">
              返回首页
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-amber-600 rounded-full mr-2 animate-pulse"></span>
              合伙人计划
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              搞定了流量和产品？
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 mb-4 leading-relaxed">
              让春阳来帮你搞定内容和私域，售前咨询和跟进成交，以及落地续费。
            </p>
            <p className="text-xl text-gray-700 mb-10">
              春阳本人，会带着他调好的4大智能体加盟你的业务：
              <Link href="/" className="text-blue-600 hover:underline font-semibold">【AI销冠】</Link>、
              <Link href="/aikf" className="text-orange-600 hover:underline font-semibold">【AI客服】</Link>、
              <Link href="/aigw" className="text-purple-600 hover:underline font-semibold">【AI顾问】</Link>、
              <Link href="/aiyy" className="text-pink-600 hover:underline font-semibold">【AI运营】</Link>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#details" className="btn btn-lg bg-amber-600 hover:bg-amber-700 text-white border-0 text-lg px-10 shadow-lg hover:shadow-xl transition-all normal-case">
                不妨请春阳做你的AI合伙人
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI SaaS Concerns Section */}
      <section id="details" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              我们的确是一家AI SaaS公司
            </h2>
            <p className="text-2xl text-gray-600 mb-8">
              但我们无比担心你们不会用AI...
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl border-2 border-amber-200 shadow-xl">
            <div className="space-y-4 text-lg text-gray-700">
              <p>不会用AI来复刻你的<Link href="/" className="text-blue-600 hover:underline font-semibold">AI销冠</Link>，</p>
              <p>不会用AI打造咨询师级别的<Link href="/aigw" className="text-purple-600 hover:underline font-semibold">AI顾问</Link>，</p>
              <p>不会用AI打造千人千面的<Link href="/aiyy" className="text-pink-600 hover:underline font-semibold">AI运营</Link>，</p>
              <p>更不会用AI打造在公域大杀四方的洗稿工作流（比如：小红书）..</p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-xl text-gray-800 mb-4">
                那么此时我们卖给你再牛逼的AI套件也是没有意义的——因为你用不起来。
              </p>
              <p className="text-lg text-gray-600 mb-6">
                甚至我们发现有些人，我们给到他整套提示词...他抄都抄不会。
              </p>
              <p className="text-3xl font-bold text-amber-600 text-center">
                起开，让我们来。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Day 1-3 Work Approach Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              我们干活的方式极其简单粗暴
            </h2>
          </div>

          <div className="space-y-8">
            {/* Day 1 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <span className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">D1</span>
                <h3 className="text-2xl font-bold text-gray-900">Day 1：咨询师级别的AI顾问</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>春阳"入职"的第一天，我们就会将一个咨询师级别的<Link href="/aigw" className="text-purple-600 hover:underline font-semibold">AI顾问</Link>帮你调出来，用于接待售前的客户咨询，并结合客户的情况，给出扎实的咨询和解决方案，引导我们的产品服务。</p>
                <p>先解决售前咨询的问题，这个环节就是帮客户理清自己的情况，找到明确的方向，培养客户的兴趣，并尽可能朝销售成交引导。</p>
                <p className="text-blue-700 font-semibold">理想情况下，我们会在这个环节卖出我们的一个体验品，让客户先拿到第一阶段的成果和效果，有信心继续与我们合作。</p>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <span className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">D2</span>
                <h3 className="text-2xl font-bold text-gray-900">Day 2：主动跟进的AI销冠</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p><Link href="/aigw" className="text-purple-600 hover:underline font-semibold">AI顾问</Link>的确能够像咨询师一样，可以理清客户的需求和处境，培养客户的兴趣和意向，但客户一定会纠结，一定会考虑，一定会沉默——客户不可能加过来的当天就和你成交的，甚至一个礼拜、一个月都不一定。</p>
                <p className="text-green-700 font-semibold">于是在第2天，我们会精调出一个能够主动跟进客户的<Link href="/" className="text-blue-600 hover:underline font-semibold">AI销冠</Link>。</p>
                <p>我们可不会傻等着客户交钱..主动出击才能发家致富。</p>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-2 border-pink-200 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <span className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">D3</span>
                <h3 className="text-2xl font-bold text-gray-900">Day 3：疯狗般的AI运营</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p><strong>私域有三大触点</strong>：朋友圈，社群和一对一私聊</p>
                <p><strong>公域有两大阵地</strong>：小红书（图文）和抖音/视频号（短视频）</p>
                <p>1对1私聊，我们现在有<Link href="/aigw" className="text-purple-600 hover:underline font-semibold">AI顾问</Link>和<Link href="/" className="text-blue-600 hover:underline font-semibold">AI销冠</Link>跟着了，问题不大。</p>
                <p>那么你的朋友圈和社群呢？小红书和视频号呢？</p>
                <p className="text-pink-700 font-semibold">有请我们"疯狗般"的<Link href="/aiyy" className="text-pink-600 hover:underline font-semibold">AI运营</Link>出场：</p>
                <div className="bg-white rounded-xl p-4 mt-4">
                  <p className="text-gray-800 mb-2">鲸奇"疯狗般"公私域AI全栈运营已上线，把你的公私域输出拉满</p>
                  <a href="https://mp.weixin.qq.com/s/BzNglMjj6HAIXWu8AvvGlQ" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline font-medium">
                    👉 点击阅读复盘文章 →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-8 text-center">
            <p className="text-lg text-gray-700 mb-4">
              运营的底层逻辑无非就是：通过高质量的内容，高强度的输出（私域日更300~500条，公域365天不间断日更），占据客户的注意力和视野。
            </p>
            <p className="text-xl text-gray-800 font-semibold mb-6">
              客户都看不到你，怎么会想到你，怎么会买到你？
            </p>
            <div className="bg-white rounded-xl p-6">
              <p className="text-lg text-gray-700 mb-4">
                是的，你（的人）花三个月、还有小半年都搞不定的「企业级AI三件套」：
              </p>
              <p className="text-3xl font-bold text-amber-600 mb-4">
                我们三天给你搞定，72小时落地。
              </p>
              <p className="text-gray-600">
                这才是春阳这种合伙人级别的人，加入你团队的威力。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Included Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              当春阳成为你的合伙人之后
            </h2>
            <p className="text-2xl text-amber-600 font-bold">
              鲸奇所有AI工具免费用
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl border-2 border-amber-200 shadow-xl">
            <p className="text-xl text-gray-800 text-center mb-8">
              <Link href="/" className="text-blue-600 hover:underline font-semibold">【AI销冠】</Link>、
              <Link href="/aikf" className="text-orange-600 hover:underline font-semibold">【AI客服】</Link>、
              <Link href="/aigw" className="text-purple-600 hover:underline font-semibold">【AI顾问】</Link>、
              <Link href="/aiyy" className="text-pink-600 hover:underline font-semibold">【AI运营】</Link>
              加起来一年十万块。
            </p>
            <p className="text-3xl font-bold text-center text-amber-600 mb-8">全给你省了。</p>
            <p className="text-lg text-gray-600 text-center mb-6">
              但不是给你用，是给春阳用，哈哈哈。
            </p>
            <p className="text-lg text-gray-700 text-center mb-8">
              你缺的某种程度上不是AI或工具，而是<span className="font-bold text-amber-600">「一套工具以及会把工具用到极致的人」</span>的组合。
            </p>
            <div className="bg-amber-50 rounded-xl p-6 text-center">
              <p className="text-xl font-semibold text-gray-800">
                所以你是花钱买工具，<br />还是连人一起带走？
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-4">🛠️ 工具免费，我们布上</h3>
              <p className="text-gray-700 mb-4">查看鲸奇精心开发的全套AI智能体套件：</p>
              <a href="https://mp.weixin.qq.com/s/uGJcdTCr83i7yeMkCQ-Fsw" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium text-sm">
                「鲸奇14个私域智能体，打磨完毕，开始接受市场检验」→
              </a>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-amber-700 mb-4">✍️ 内容免费，春阳出好</h3>
              <p className="text-gray-700 mb-4">查看春阳手写的、销冠级别的强杀伤内容长啥样：</p>
              <a href="https://mp.weixin.qq.com/s/bqWJNtdKHk-GMsdTA5LGMQ" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline font-medium text-sm">
                「顶级强杀伤私域内容的6个特征」→
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-purple-700 mb-4">🎯 调教免费，春阳管上</h3>
              <p className="text-gray-700 mb-4">查看并感受我们精调的咨询师级别AI顾问水准：</p>
              <a href="https://mp.weixin.qq.com/s/mU35kh6OVszoDDu5QmbvcQ" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline font-medium text-sm">
                「抱歉，AI又干死了私域客服……认真的」→
              </a>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-green-700 mb-4">📋 流程免费，春阳安排</h3>
              <p className="text-gray-700 mb-4">看看什么叫天花板级别的私域成交路径：</p>
              <a href="https://mp.weixin.qq.com/s/i2io5o1pmXSV9k4kaS2Aug" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline font-medium text-sm">
                「私域成交9大流程，一次说透」→
              </a>
            </div>
          </div>

          <div className="mt-12 bg-gray-100 rounded-2xl p-8 text-center">
            <p className="text-lg text-gray-700 mb-6">
              还是那句话，等你研究好工具，整明白内容，设计好流程，打磨好体验，黄花菜都凉了。
            </p>
            <p className="text-2xl font-bold text-gray-800 mb-2">无需。一切交给春阳。</p>
            <p className="text-3xl font-bold text-amber-600">三天搞定，72小时落地。</p>
          </div>
        </div>
      </section>

      {/* How to Cooperate Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              如何合作，怎么分工
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-blue-200 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">你需要做的</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3 flex-shrink-0">①</span>
                  <p className="text-gray-700">搞定产品，且竞争力不错，验证了PMF（即市场真的有人需要这个产品）</p>
                </div>
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3 flex-shrink-0">②</span>
                  <p className="text-gray-700">搞定流量，无论你是通过直播，还是投流，还是广告，我们需要知道你的存量客户线索有多少，以及你的每天进量</p>
                </div>
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3 flex-shrink-0">③</span>
                  <p className="text-gray-700">想好你愿意花多大代价请合伙人，以及你愿意分钱多少</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-amber-200 shadow-lg">
              <h3 className="text-2xl font-bold text-amber-600 mb-6">我们做的</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold mr-3 flex-shrink-0">①</span>
                  <p className="text-gray-700"><strong>接管你的售前咨询（顾问岗）</strong>：先成交第1单再说（体验单/低客单）</p>
                </div>
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold mr-3 flex-shrink-0">②</span>
                  <p className="text-gray-700"><strong>接管你的长期跟进（销售岗）</strong>：持续跟进那些有意向但沉默的客户，以销冠的水准，稳定的拿下他们（高客单/利润品）</p>
                </div>
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold mr-3 flex-shrink-0">③</span>
                  <p className="text-gray-700"><strong>接管你的日常运营（运营岗）</strong>：你的私域和公域绝大部分触点的内容运营，由我们代为设计和执行，日更是跑不了的</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              合伙人收费（支持无效退款）
            </h2>
            <p className="text-lg text-gray-600">
              由四部分组成：每月代运营费用 + 基础销售分成 + 额外奖金 + 股权或期权激励
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-amber-700 mb-6 text-center">按月支付</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4">
                  <p className="font-semibold text-gray-800">每月代运营费用</p>
                  <p className="text-2xl font-bold text-amber-600">3万/月</p>
                  <p className="text-sm text-gray-500">一次性支付至少三个月</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <p className="font-semibold text-gray-800">基础销售分成</p>
                  <p className="text-2xl font-bold text-amber-600">45%以上</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <p className="font-semibold text-gray-800">额外奖金</p>
                  <p className="text-gray-600 text-sm">达到三倍你所支付费用的业绩指标后，按照业绩总额的不低于额外25%提点</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-700 mb-6 text-center">按年支付</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4">
                  <p className="font-semibold text-gray-800">年度费用</p>
                  <p className="text-2xl font-bold text-green-600">20万/年</p>
                  <p className="text-sm text-gray-500">一次性支付全年</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <p className="font-semibold text-gray-800">基础销售分成</p>
                  <p className="text-2xl font-bold text-green-600">45%以上</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <p className="font-semibold text-gray-800">额外奖金</p>
                  <p className="text-gray-600 text-sm">达到一定业绩指标后，按照业绩总额的不低于额外25%提点</p>
                </div>
              </div>
            </div>
          </div>

          {/* 无效退款大标语 */}
          <div className="mt-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-center shadow-2xl">
            <p className="text-5xl md:text-7xl font-black text-white tracking-wider animate-pulse">
              无效退款
            </p>
            <p className="text-xl text-white/90 mt-4 font-medium">
              我们对效果负责，让你零风险合作
            </p>
          </div>

          {/* 效果承诺 */}
          <div className="mt-8 bg-gray-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">效果承诺</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              当合伙周期产生的额外总体业绩价值，加上省去的人员成本（默认按照客服、运营、销售、顾问各1个计算），减去该周期内你所支付的服务费，结果为负的：我们按照8000/月，乘以已经合作的时长扣除基本人力工资，退还其余所有已支付费用。
            </p>
            <p className="text-amber-700 font-semibold">这是你唯一的风险项。</p>
            <p className="text-gray-600 text-sm mt-4">
              投资、合作、合伙做生意，不可能没有任何风险。我们尽可能将风险和损失压到最低，但即便你不和鲸奇合伙，你本身招人失败、亏钱的风险仍然存在。
            </p>
          </div>
        </div>
      </section>

      {/* Not Cooperate Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              以下情况，暂不合作
            </h2>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-red-200 shadow-lg">
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold mr-4 flex-shrink-0">①</span>
                <p className="text-gray-700">产品还没有开发出来，或产品本身没有竞争力的（我们前期会问你索要产品资料，并评估你的竞争力），我们要求甲方必须至少有一个能打的产品</p>
              </div>
              <div className="flex items-start">
                <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold mr-4 flex-shrink-0">②</span>
                <p className="text-gray-700">没有投流预算的，（每月和每日）新增流量和获客无法保证的——巧妇难为无米之炊，我们解决流程、内容、转化等问题，但不解决公域的获客问题</p>
              </div>
              <div className="flex items-start">
                <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold mr-4 flex-shrink-0">③</span>
                <p className="text-gray-700">原始存量客户过于古老，已经失去活性的（比如加了一堆不相关的人，根本不是目标精准客户）</p>
              </div>
              <div className="flex items-start">
                <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold mr-4 flex-shrink-0">④</span>
                <p className="text-gray-700">私自隐匿收入，恶意利用合同条款骗取退还服务费的</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Steps Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              合伙步骤
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "填写表格，提交你的产品资料和私域现状，我们评估综合竞争力",
              "初审通过，和春阳本人约谈腾讯会议，洽谈合作细节",
              "签订合伙人协议，约定好合作的各项落地细节",
              "支付定金（意向金）1万",
              "我们出好所有的流程，内容，SOP，调配好合作所需的「干活角色」：AI顾问，AI销冠，AI运营，甲方确认效果后再打尾款；如果效果不满意，我们退回所有意向金",
              "合同签好，尾款支付好之后，共同开设子公司，并设立公共收款账户（如需）",
              "一切准备就绪，开始计算合伙周期，开搞！",
              "按照周期进行结算，一起赚钱分钱（通常是每三个月结算一次）",
            ].map((step, index) => (
              <div key={index} className="flex items-start bg-amber-50 rounded-xl p-4">
                <span className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">{index + 1}</span>
                <p className="text-gray-700 pt-2">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk & Benefit Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Risk */}
            <div className="bg-white p-8 rounded-2xl border-2 border-orange-200 shadow-lg">
              <h3 className="text-2xl font-bold text-orange-600 mb-6">合伙风险预期</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold mr-3 flex-shrink-0 text-sm">①</span>
                  <p className="text-gray-700">前期你的投流和运营成本（但即便不和鲸奇合作，本身这项成本也存在）</p>
                </div>
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold mr-3 flex-shrink-0 text-sm">②</span>
                  <p className="text-gray-700">你派出的与我们日常进行协作的人员的时间和机会成本</p>
                </div>
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold mr-3 flex-shrink-0 text-sm">③</span>
                  <p className="text-gray-700">即便合作失败，你出具的也不过是一个初级人力成本的月薪：8000/月，请到春阳加上他精心调配好的14大智能体帮你输出、干活</p>
                </div>
              </div>
            </div>

            {/* Benefit */}
            <div className="bg-white p-8 rounded-2xl border-2 border-green-200 shadow-lg">
              <h3 className="text-2xl font-bold text-green-600 mb-6">合伙收益预期</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <p className="text-gray-700">AI销冠加持后的成交转化率提高所带来的<strong>业绩增量</strong></p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <p className="text-gray-700">AI运营加持后的客户线索激活<strong>咨询增量</strong></p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <p className="text-gray-700">AI顾问加持后的客户兴趣培育<strong>线索增量</strong></p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <p className="text-gray-700">AI客服加持后的客户满意度和落地效果<strong>续费增量</strong></p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <p className="text-gray-700">私域SOP加持后的客户旅程带来的<strong>客单价增量</strong></p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <p className="text-gray-700">省去的顾问、咨询师、运营、客服、销售人员的<strong>成本缩减</strong></p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <p className="text-gray-700">避免乱招人的<strong>薪水支出成本</strong></p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <p className="text-gray-700">直接给出AI最佳实践省去的<strong>机会成本</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Partner Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              如何判定你当前是否需要请春阳作为合伙人？
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { text: "产品已经打磨成熟，流量已经获取稳定，但转化欠缺，私域大量客户线索沉默", solution: "需要引入AI销冠，接管售中环节", link: "/", color: "blue" },
              { text: "产品竞争力不错，但价格迟迟上不来，于是利润单薄", solution: "需要引入销冠级别的强杀伤内容", link: "https://mp.weixin.qq.com/s/bqWJNtdKHk-GMsdTA5LGMQ", color: "amber", external: true },
              { text: "首单卖的还可以，引流品跑得很好，但综合一算不赚钱，客户落地效果一般，续费和增购不佳", solution: "需要引入AI客服，接管售后环节", link: "/aikf", color: "orange" },
              { text: "公司人力能力有限，学习速度太慢，执行力太弱，工作强度不够", solution: "需要引入7x24x365的咨询师级别顾问，接管售前环节", link: "/aigw", color: "purple" },
              { text: "公司业绩还不错，但是需要快速杠杆，业绩加倍", solution: "需要引入强力合伙人", link: null, color: "green" },
            ].map((item, index) => (
              <div key={index} className={`bg-${item.color}-50 border-2 border-${item.color}-200 rounded-xl p-6`} style={{ backgroundColor: `var(--${item.color}-50, #fef3c7)` }}>
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">{index + 1}</span>
                  <div>
                    <p className="text-gray-700 mb-2">{item.text}</p>
                    <p className="font-semibold text-amber-700">
                      → {item.link ? (
                        item.external ? (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline text-amber-600">{item.solution} →</a>
                        ) : (
                          <Link href={item.link} className="hover:underline">{item.solution}</Link>
                        )
                      ) : item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-100 rounded-2xl p-8 text-center">
            <p className="text-lg text-gray-700">
              当然，如果你觉得你有能力将上述
              <Link href="/" className="text-blue-600 hover:underline font-semibold">【AI销冠】</Link>、
              <Link href="/aikf" className="text-orange-600 hover:underline font-semibold">【AI客服】</Link>、
              <Link href="/aigw" className="text-purple-600 hover:underline font-semibold">【AI顾问】</Link>、
              <Link href="/aiyy" className="text-pink-600 hover:underline font-semibold">【AI运营】</Link>
              自行用好，也可以直接按照SaaS订阅，无需给我们分成、奖金和股权。
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border-2 border-amber-300 shadow-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              扫码填表，生猛合伙
            </h2>
            <p className="text-2xl text-amber-600 font-semibold mb-8">
              大方挣钱，快乐生活
            </p>

            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-amber-200 mb-4">
                <img
                  src="https://i.ibb.co/JR1txw0D/image.png"
                  alt="合伙人申请表单二维码"
                  className="w-64 h-64 object-contain"
                />
              </div>
              <p className="text-center text-gray-600 font-medium">
                扫码填写合伙人申请表
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} {config.appName}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
