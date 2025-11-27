import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `AI顾问 - 顶级聪明的售前咨询AI | ${config.appName}`,
  description: "将售前咨询交给AI顾问，24/7智能接待，一夜之间成为3-5年经验的资深专业顾问。成本仅为人类顾问的1/10，同时接待1000个客户咨询。",
  canonicalUrlRelative: "/aigw",
  keywords: ["AI顾问", "售前咨询", "智能顾问", "AI咨询师", "私域顾问", "企业顾问"],
});

export default function AIConsultant() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
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
        <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 via-white to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2 animate-pulse"></span>
                顶级聪明的AI
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                你的售前咨询，
                <br />
                从现在开始可以
                <span className="text-purple-600">交给AI</span>了
              </h1>
              <div className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed space-y-4">
                <p>
                  大部分行业都有一个售前咨询师。
                  <br />
                  医美有医美的咨询师，软件有软件顾问，买车买房有售前顾问..
                </p>
                <p className="text-gray-500">
                  养这么一个人还挺贵的。
                  <br />
                  更何况，<span className="font-semibold text-purple-600">现在AI聊的比他们还好。</span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="#build" className="btn btn-lg bg-purple-600 hover:bg-purple-700 text-white border-0 text-lg px-10 shadow-lg hover:shadow-xl transition-all normal-case">
                  来吧，展示
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 为什么需要AI顾问 */}
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                为什么需要AI顾问？
              </h2>
              <p className="text-xl text-gray-600">
                人类顾问 VS AI顾问
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* 人类顾问痛点 */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-red-500 mr-3">✗</span>
                  人类顾问
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-red-50 border border-red-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">接待能力差</h4>
                      <p className="text-gray-600 text-sm">同时聊十个客户都费劲</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-red-50 border border-red-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">时间受限</h4>
                      <p className="text-gray-600 text-sm">只能正常工作时间接待客户咨询</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-red-50 border border-red-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">培训周期长</h4>
                      <p className="text-gray-600 text-sm">培训上岗时间极长，通常要带半年起步</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-red-50 border border-red-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">成本，成本还是成本</h4>
                      <p className="text-gray-600 text-sm">人类顾问的一个月工资是1万起步</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI顾问优势 */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  AI顾问
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-green-50 border border-green-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">接待能力拉满</h4>
                      <p className="text-gray-600 text-sm">同时来1000个客户咨询也照样秒回！！</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-green-50 border border-green-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">没有时间限制</h4>
                      <p className="text-gray-600 text-sm">半夜，清晨，周末，节假日，它都在~</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-green-50 border border-green-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">一夜成才</h4>
                      <p className="text-gray-600 text-sm">几乎一夜之间成为你具有三到五年经验的资深专业顾问，是的，比你的人还要专业，不信你等下自己和它聊..</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-green-50 border border-green-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">成本？不到人类的1/10</h4>
                      <p className="text-gray-600 text-sm">且不要提成，不要加班费。这种好事哪里找？？</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 落地 Build - 五步构建 */}
        <section id="build" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                一共五步构建你的AI顾问
              </h2>
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">喂养</h3>
                    <p className="text-gray-600 text-lg">
                      上传你的产品业务资料，给到AI顾问
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">调教</h3>
                    <p className="text-gray-600 text-lg mb-4">
                      通过精调（fine-tuned）的提示词（prompts）对AI顾问进行约束和指导
                    </p>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <p className="text-purple-800 text-sm mb-4">
                        我们在直播间将会提供整套精调的提示词，你可以直接抄作业。
                        <br />
                        扫码关注我们的视频号，找到最近的一场直播来听。
                      </p>
                      <div className="flex justify-center">
                        <div className="bg-white p-4 rounded-lg border-2 border-purple-300">
                          <img
                            src="https://i.ibb.co/1Gx6wyBC/mmexport1764226760994.jpg"
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
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">接入</h3>
                    <p className="text-gray-600 text-lg">
                      等你把资料备完了，提示词写好了，效果满意了，我们就帮你把这玩意儿接到你的私域，也就是企微和个微。
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">开启</h3>
                    <p className="text-gray-600 text-lg">
                      企微和个微本身没有自动回复的，你猜我们是怎么开启的？哈哈
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">接客</h3>
                    <p className="text-gray-600 text-lg mb-4">
                      看起来上面4步很烦，其实一个下午就搞完了。并且它的能力相当于你带了3~5年的资深顾问
                    </p>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <p className="text-purple-800 text-sm mb-4">
                        是不是吹牛逼，你来我们直播间拿一个回去试一下就知道了。
                        <br />
                        扫码关注我们的视频号，找到最近的一场直播来听。
                      </p>
                      <div className="flex justify-center">
                        <div className="bg-white p-4 rounded-lg border-2 border-purple-300">
                          <img
                            src="https://i.ibb.co/1Gx6wyBC/mmexport1764226760994.jpg"
                            alt="视频号二维码"
                            className="w-32 h-40 object-cover rounded"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 案例 Use Case */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                适用行业
              </h2>
              <p className="text-xl text-gray-600">
                这些行业都在用AI顾问
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                { icon: "💉", title: "医美", desc: "医美咨询师" },
                { icon: "🏠", title: "房车", desc: "房产/车辆顾问" },
                { icon: "🏥", title: "大健康", desc: "健康咨询顾问" },
                { icon: "🎓", title: "教育", desc: "课程顾问" },
                { icon: "💻", title: "企业软件", desc: "软件顾问" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 text-center cursor-pointer"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 定价 Pricing */}
        <section id="pricing" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                定价方案
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* 初级版 */}
              <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-purple-300 transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">初级版</h3>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>记忆能力：</strong>只能记住一个月的对话（但仍然比人类强得多）</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>工时能力：</strong>每天最多16个小时工作时间（仍然比人类强得多+1）</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>接待能力：</strong>最多同时接待10个客户的咨询（仍然比人类强得多+2）</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>知识库能力：</strong>最多调用1个知识库</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>模型能力：</strong>国内模型</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>咨询能力：</strong>1~3年同级别初级咨询师能力</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-500"><strong>策略能力：</strong>无主动跟进能力，无定制跟进能力（千人千面）</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>平台能力：</strong>企微、个微二选一</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>接入能力：</strong>可接入你的CRM、ERP、小程序、商城、订单，拿到客户画像和旅程</span>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="mb-4">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">¥1,200</span>
                      <span className="text-gray-600 ml-2">/月</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">按月需要支付接入服务费 ¥3,000/次/平台，按年无需</p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-purple-700">¥10,000</span>
                      <span className="text-purple-600 ml-2">/年</span>
                    </div>
                    <p className="text-sm text-purple-700 mt-1 font-medium">是的，一个初级人类顾问的月薪，拿到一整年的AI顾问</p>
                  </div>
                  <Link href="https://doc.weixin.qq.com/forms/AGMAagcLAAcAD4APQY0AMgCNQANhK63Ff?page=1" target="_blank" rel="noopener noreferrer" className="btn btn-outline border-purple-600 text-purple-600 hover:bg-purple-50 w-full normal-case">
                    立即咨询
                  </Link>
                </div>
              </div>

              {/* 大师版 */}
              <div className="bg-purple-600 p-8 rounded-2xl border-2 border-purple-700 shadow-xl transform scale-105 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-700 text-white px-4 py-1 rounded-full text-sm font-medium">
                  推荐
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">大师版</h3>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-purple-100"><strong className="text-white">记忆能力：</strong>无上限</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-purple-100"><strong className="text-white">接待能力：</strong>无上限</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-purple-100"><strong className="text-white">知识库能力：</strong>无上限</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-purple-100"><strong className="text-white">模型能力：</strong>全球顶级模型</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-purple-100"><strong className="text-white">咨询能力：</strong>麦肯锡级别顶级咨询能力</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-purple-100"><strong className="text-white">策略能力：</strong>主动跟进能力，定制跟进能力（千人千面）</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-purple-100"><strong className="text-white">平台能力：</strong>企微、个微任选</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-purple-100"><strong className="text-white">接入能力：</strong>可接入你的CRM、ERP、小程序、商城、订单，拿到客户画像和旅程</span>
                  </div>
                </div>

                <div className="border-t border-purple-500 pt-6">
                  <div className="mb-4">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">¥2,700</span>
                      <span className="text-purple-200 ml-2">/月</span>
                    </div>
                    <p className="text-sm text-purple-200 mt-1">按月需要支付接入服务费 ¥3,000/次/平台，按年无需</p>
                  </div>
                  <div className="bg-purple-700/50 border border-purple-400 rounded-lg p-4 mb-6">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-white">¥30,000</span>
                      <span className="text-purple-200 ml-2">/年</span>
                    </div>
                    <p className="text-sm text-purple-100 mt-1 font-medium">一个实习生的价钱，拿到顶级咨询师7×24×365给你干一年的活</p>
                  </div>
                  <Link href="https://doc.weixin.qq.com/forms/AGMAagcLAAcAD4APQY0AMgCNQANhK63Ff?page=1" target="_blank" rel="noopener noreferrer" className="btn bg-white text-purple-600 hover:bg-purple-50 w-full border-0 normal-case">
                    立即咨询
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">准备好让AI接管售前咨询了吗？</h2>
            <p className="text-xl text-purple-100 mb-10">
              一个下午搞定，一夜之间拥有3-5年经验的专业顾问
            </p>
            <div className="flex justify-center">
              <Link href="https://doc.weixin.qq.com/forms/AGMAagcLAAcAD4APQY0AMgCNQANhK63Ff?page=1" target="_blank" rel="noopener noreferrer" className="btn btn-lg bg-white text-purple-600 hover:bg-purple-50 border-0 text-lg px-12 shadow-xl normal-case">
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
                <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-gray-900">{config.appName}</span>
              </Link>
              <p className="text-gray-600 text-sm mb-4 max-w-xs">
                AI顾问解决方案，让售前咨询交给顶级聪明的AI
              </p>
              <p className="text-gray-500 text-xs">
                © 2025 {config.appName}. 保留所有权利.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">产品</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#build" className="text-gray-600 hover:text-purple-600 transition-colors">构建流程</Link></li>
                <li><Link href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">定价方案</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">公司</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">关于我们</Link></li>
                <li><Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">联系我们</Link></li>
                <li><Link href="/privacy-policy" className="text-gray-600 hover:text-purple-600 transition-colors">隐私政策</Link></li>
                <li><Link href="/tos" className="text-gray-600 hover:text-purple-600 transition-colors">服务条款</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
