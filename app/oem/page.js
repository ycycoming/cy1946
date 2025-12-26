import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import MobileNav from "@/components/MobileNav";

export const metadata = getSEOTags({
  title: `代理贴牌 - AI产品合作共赢 | ${config.appName}`,
  description: "AI时代想干点啥？我有产品，你有资源，一起赚钱分钱。加盟鲸奇代理，获取AI销冠、AI客服、AI顾问、AI运营、GEO五大产品矩阵的代理权。",
  canonicalUrlRelative: "/oem",
  keywords: ["AI代理", "AI贴牌", "OEM", "White Label", "AI产品代理", "鲸奇代理"],
});

export default function OEMPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
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
              <Link href="/aish" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
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
              <Link href="/oem" className="text-emerald-600 font-medium">
                代理贴牌
              </Link>
              <Link href="/hehuo" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">
                合伙人
              </Link>
            </nav>
            <MobileNav currentPath="/oem" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse"></span>
              合作共赢
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI时代想干点啥？
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 mb-4 leading-relaxed">
              很好，一起干吧，我出货，你出人。
            </p>
            <p className="text-xl md:text-2xl text-green-600 font-semibold mb-10">
              我有产品，你有资源，一起赚钱分钱
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#details" className="btn btn-lg bg-green-600 hover:bg-green-700 text-white border-0 text-lg px-10 shadow-lg hover:shadow-xl transition-all normal-case">
                了解鲸奇代理贴牌
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="details" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              AI时代打造产品很容易
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              一分钟就能给你写出一个贪吃蛇游戏
            </p>
            <p className="text-xl text-gray-600 mb-4">
              但想卖出好价钱并不简单
            </p>
            <p className="text-2xl font-bold text-red-500">
              绝大部分AI产品的宿命是：免费也没人用
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl border-2 border-green-200 shadow-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              打造产品只是第1步，还要：
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "要验证PMF",
                "投钱做推广",
                "有能卖的人",
                "还得会交付",
                "还要能落地",
                "客户会续费",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 mt-6">...</p>
            <div className="mt-8 text-center">
              <p className="text-2xl font-bold text-green-600">
                加盟鲸奇代理，一起抱团取暖
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Value Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              什么样的产品能卖给企业和老板，以及超级个体？
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              且能卖个好价钱？
            </p>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 mt-8">
              <p className="text-xl text-gray-800">
                降本增效只是基本，<span className="font-bold text-green-600">强化杀伤、复刻精英</span>才是增量。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Matrix Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              鲸奇的5大产品矩阵
            </h2>
            <p className="text-xl text-gray-600">
              【AI销冠】、【AI客服】、【AI顾问】、【AI运营】、【GEO】，已经悉数上线。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/" className="bg-white p-6 rounded-2xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all hover:scale-105 block">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">AI销冠 →</h3>
              <p className="text-gray-600">绝不单单是替代公司的销售，更多的是<span className="font-semibold text-blue-600">复刻公司里面最能卖的那个人</span></p>
            </Link>

            <Link href="/aikf" className="bg-white p-6 rounded-2xl border-2 border-orange-200 shadow-lg hover:shadow-xl transition-all hover:scale-105 block">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🎧</span>
              </div>
              <h3 className="text-xl font-bold text-orange-600 mb-3">AI客服 →</h3>
              <p className="text-gray-600">替代人工回答<span className="font-semibold text-orange-600">所有的标准化问题</span>。是的，所有的。</p>
            </Link>

            <Link href="/aigw" className="bg-white p-6 rounded-2xl border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all hover:scale-105 block">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-purple-600 mb-3">AI顾问 →</h3>
              <p className="text-gray-600"><span className="font-semibold text-purple-600">咨询师级别的顾问</span>，回答所有客户的个性化问题，并引导产品成交，为销售做好准备。</p>
            </Link>

            <Link href="/aiyy" className="bg-white p-6 rounded-2xl border-2 border-pink-200 shadow-lg hover:shadow-xl transition-all hover:scale-105 block">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-pink-600 mb-3">AI运营 →</h3>
              <p className="text-gray-600">私域运营朋友圈/社群，公域运营小红书和短视频。<span className="font-semibold text-pink-600">公私域一把抓</span>。</p>
            </Link>

            <Link href="/geo" className="bg-white p-6 rounded-2xl border-2 border-cyan-200 shadow-lg hover:shadow-xl transition-all hover:scale-105 block">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-cyan-600 mb-3">GEO →</h3>
              <p className="text-gray-600">让AI<span className="font-semibold text-cyan-600">收录你的产品作为答案</span>，并会说你的好话。</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Design Logic Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              鲸奇产品设计逻辑
            </h2>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 md:p-12">
            <p className="text-xl text-gray-800 leading-relaxed mb-8">
              牛逼轰轰的AI产品，必然能够<span className="font-bold text-green-600">替代企业的基础人力</span>，<span className="font-bold text-green-600">复刻企业的高级人力（销冠）</span>，<span className="font-bold text-green-600">放大企业的顶级人才（总裁/老板本人）</span>。
            </p>

            <div className="bg-white rounded-xl p-6 mb-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                就像一支NBA球队，如果5个位置都是勒布朗詹姆斯，对面就不用打了。
              </p>
            </div>

            <p className="text-xl font-semibold text-green-700 text-center">
              如果，一家公司所有的销售都是销冠，所有的客服都是咨询师级别呢？
            </p>
          </div>
        </div>
      </section>

      {/* Agency Logic Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              鲸奇产品代理逻辑
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border-2 border-green-200 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl mr-3">①</span>
                <h3 className="text-lg font-bold text-gray-900">推荐返点模式</h3>
              </div>
              <p className="text-gray-600">
                你有资源，但没有贩卖能力：<span className="font-semibold text-green-600">你出资源（推荐客户），鲸奇来卖，你拿返点</span>
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-green-200 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl mr-3">②</span>
                <h3 className="text-lg font-bold text-gray-900">差价模式</h3>
              </div>
              <p className="text-gray-600">
                你有资源，也有贩卖能力：<span className="font-semibold text-green-600">你出资源，你自己卖，低价拿货，高价卖出，你赚差价</span>
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-green-200 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl mr-3">③</span>
                <h3 className="text-lg font-bold text-gray-900">OEM贴牌模式</h3>
              </div>
              <p className="text-gray-600">
                你想直接贴牌鲸奇：<span className="font-semibold text-green-600">你既不想分成，也不想低价拿，你想直接贴牌回去，自己定价，自己卖，自己交付，拿走大部分利润</span>
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-green-200 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl mr-3">④</span>
                <h3 className="text-lg font-bold text-gray-900">White Label白牌模式</h3>
              </div>
              <p className="text-gray-600">
                你想白牌鲸奇：<span className="font-semibold text-green-600">移除鲸奇的logo，别人看不出来是鲸奇，于是你可以自由定价</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Industries Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              对AI接受度极高且有钱、有预算的行业招募
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              "医美", "医院", "教育（学校）", "培训（职业培训/MBA/考研）",
              "保险（理财）", "移民", "留学", "装修", "大健康", "减肥", "出海", "B2B"
            ].map((industry, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-full text-green-700 font-medium hover:bg-green-100 transition-colors"
              >
                {industry}
              </span>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">以上行业的共同特征是：</h3>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {["重认知输出", "长转化周期", "高客户单价", "强用户信任", "高人力成本"].map((feature, index) => (
                <span key={index} className="px-4 py-2 bg-white rounded-lg text-green-700 font-semibold border border-green-200">
                  {feature}
                </span>
              ))}
            </div>
            <p className="text-center text-gray-700">
              于是我们的AI全家桶产品能够<span className="font-bold text-green-600">卖出一个非常好的价钱</span>，且有广泛需求。
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border-2 border-green-200 shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                如果一个AI顾问比人类顾问回答客户的问题更专业，<br />
                一个AI销冠比人类的销售跟进更到位，<br />
                一个AI运营比人类的运营输出更凶猛，<br />
                <span className="font-bold text-green-600">企业和老板会怎么选？</span>
              </p>
              <p className="text-2xl font-bold text-gray-900 mb-8">
                如果你有积累以上行业的企业和老板资源，请抓紧时间与我们共创。
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 mb-8">
              <p className="text-center text-gray-700">
                填表验证你的资源真实性和行业影响力，审核通过之后，我们会给到具体的<span className="font-bold text-green-600">代理政策宣讲</span>，和<span className="font-bold text-green-600">产品体验入口</span>。
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-green-200 mb-4">
                <img
                  src="https://i.ibb.co/ks7qqNxL/image.png"
                  alt="代理申请表单二维码"
                  className="w-64 h-64 object-contain"
                />
              </div>
              <p className="text-center text-gray-600 font-medium">
                扫码填写代理申请表
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
