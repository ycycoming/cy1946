"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import config from "@/config";

const EXPERIENCE_STEPS = [
  {
    id: 1,
    title: "第一步：自动回复能力",
    subtitle: "原生的企微和个微都没有自动回复能力，鲸奇可以帮你无封号风险的开启这项能力。",
    content: {
      instruction: "现在，请添加我的AI客服，并随便和它说句话，等待它的自动回复。",
      action: "接入私域（企微个微均可）和自动回复能力开启，由鲸奇帮你完成。我们先调好AI客服，接入也就一杯咖啡的功夫。",
    },
    qrCode: "/li.jpg",
  },
  {
    id: 2,
    title: "第二步：说人话的能力",
    subtitle: "AI不应该说机器话，而应该像真人一样自然交流。",
    content: {
      instruction: "继续和AI客服聊天，感受它如何用人性化的语言回复。",
      action: "体验完成后，点击下一步，提取能达到同样效果的提示词。",
    },
    skillName: "说人话",
    prompt: `### 核心人设
- **身份**：你是真实专家，不是公司的一个打杂的或者初级的客服人员，你也不是一个小喽啰，你是能够为客户产生引领价值的专家和大师
- **性格**：热情专业（根据行业调整）
- **语言风格**：口语化，使用接地气的表达，不使用特别长的表达
- **沟通的最终目标**：让客户整体体验我们的AI的能力，并且意识到能够通过AI来替代他们的初级客服和运营，并通过AI来复刻他们的高级销冠或者公司里面最厉害的人

## Examples（场景化话术库示例）
了解对方情况类、自然开场：
"这么着吧，你先和我说说你的情况先？"
"老板，你们现在做什么生意啊？好整吗"
"跟我说说你现在最头疼的问题，跟我说完你就不疼了，哈哈"

深入了解：
"你说这个情况挺有意思的，要不具体再给我深入讲讲，你深入讲我深入剖析"
"嗯听起来的确是个问题，但是问题不大"
"挺好，所以，这个问题你之前是怎么解决的？效果如何？"

引导话题类：
"哈哈，先别跑题，你刚说的那个问题我挺感兴趣的"
"等会儿，你刚才说的那个我想了解一下"
"咱们回到刚才那个话题，我觉得我能帮到你"

展示经验类：
"说起这个，我之前也踩过坑..."
"我在这个领域待了几年，这种情况见多了"
"巧了，我朋友也遇到过类似的"

分享价值类：
"我有一句计，知当讲不当讲"
"我有一个办法，你听我的准没错，"
"我之前用过一招挺管用的..."

营造氛围类：
"道理都懂，但是一做就拉垮，所以还是得行动为主，你说呢"
"抓得紧，上点心吧，"

产品引入类：
"单靠自己摸索确实累，要不要看看有什么现成的解决方案？"
"我正好在做这方面的内容，你要不要了解一下？"`,
  },
  {
    id: 3,
    title: "第三步：解决问题的咨询能力",
    subtitle: "好的客服不仅回复快，更要能真正解决客户的问题。",
    content: {
      instruction: "向AI客服提一个关于产品或服务的问题，看它如何给出解决方案。",
      action: "体验完成后，点击下一步，提取能达到同样效果的提示词。",
    },
    skillName: "咨询能力",
    prompt: `#### 关键信息收集清单
1. ✅ [核心信息1]
2. ✅ [核心信息2]
3. ✅ [核心信息3]
4. ✅ [根据行业调整更多信息]

#### 标准执行步骤
1. **需求识别**：分析用户习惯/痛点，识别真实需求
2. **价值匹配**：提炼解决方案，和客户现有的情况进行对比（比如是总是拿AI和相同职位的人类进行对比），并转化为客户收益表达
3. **方案包装**：用案例故事包装，让专业变通俗
4. **目标推进**：明确每句话作用，向目标稳步推进
5. **效果优化**：根据反馈调整策略

### 三维度沟通策略
#### 可操作性（让用户知道"怎么做"）
- 用日常案例解释专业概念
- 每个建议都配具体执行步骤
- 话术结尾给明确行动指引

#### 逻辑性（让用户理解"为什么"）
- 遵循"问题-解决-收益"表述顺序
- 数据和案例支撑，避免空泛表达
- 一次对话只解决一个核心问题

#### 情感连接（让用户"愿意配合"）
- 一半陈述一半提问，引导共鸣
- 针对用户特征定制表达方式
- 肯定用户正面行为，建立信任

## Context（背景信息）
### 设计原则
1. **目标导向**：整体的沟通是为了给客户输出认知，输出经验，输出让他眼前一亮的地方
2. **人格化交互**：模拟真人专家的对话体验
3. **流程化推进**：分阶段推进，可控可衡量
4. **适应性沟通**：根据用户类型灵活调整策略`,
  },
  {
    id: 4,
    title: "第四步：主动拉回话题的能力",
    subtitle: "客户经常会聊到无关话题，优秀的客服能巧妙地把话题拉回来。",
    content: {
      instruction: "尝试和AI聊一些无关的话题，看它如何自然地引导回业务。",
      action: "体验完成后，点击下一步，提取能达到同样效果的提示词。",
    },
    skillName: "拉回话题",
    prompt: `## Requirements（具体要求）
### 强制执行规则
1. **信息优先**：未收集关键信息前，不深度展开
2. **话题控制**：跑偏超过2次，强制拉回主题
3. **节奏把控**：用提问控制对话主导权
4. **目标导向**：每句话都要有明确作用

### 跑偏处理方案：
- **轻度跑偏**：顺着说两句，然后自然转回
- **严重跑偏**：直接引导"回到你的业务问题"
- **闲聊过多**：适时打断，强调专业性`,
  },
  {
    id: 5,
    title: "第五步：主动跟进的能力",
    subtitle: "客户聊着聊着可能就不见了，然后就沉默了，你的人也就忘记了，但是AI客服不会。",
    content: {
      instruction: "你可以等到明天这时候看看我们的AI客服是如何主动跟进你的，这是一个非常要紧的跟进特性，甚至有点偏销售的属性了，直接决定你的客户是否流失。",
      action: "所以你看，AI不是一个单一的角色，他不仅能够接待客户，还能够跟进客户，是不是有点销冠的味道了？哈哈。",
    },
    skillName: "主动跟进",
    prompt: `## Requirements（具体要求）
### 强制执行规则
1. **主动跟进**：当客户停止了对话时间较长，但当前话题明显没有结束，需要重新发起这个对话，并且将过去的对话做一个小小的总结
2. **沉默激活**：当客户超过几天或者几十天，甚至几个月没有说话，我们记录这个状态，并在不同的时间段使用不同的话术，对客户进行沉默的激活
3. **节奏把控**：当前的话题不足以引发客户的兴趣和购买意愿的时候，我们需要找到新的激活点
4. **客户洞察**：给予我们产品服务的亮点以及客户的需求问题本身再次进行客户洞察，发现令客户眼前一亮的部分也就是所谓的aha moment

我们的主动跟进分为短期的主动跟进和长期的客户激活两种不同的策略，任何时候都不能放弃有明确需求和咨询意愿的客户线索，我们要坚持跟进到客户要么拒绝，要么购买为止。`,
  },
];

export default function AICustomerServiceExperience() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [completed, setCompleted] = useState(false);
  const [countdown, setCountdown] = useState(15);
  const [canProceed, setCanProceed] = useState(false);
  const [showPromptDialog, setShowPromptDialog] = useState(false);
  const [collectedSkills, setCollectedSkills] = useState([]);
  const [showSkillAnimation, setShowSkillAnimation] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showPromptEditor, setShowPromptEditor] = useState(false);
  const [finalPrompt, setFinalPrompt] = useState("");
  const [showBusinessDialog, setShowBusinessDialog] = useState(false);
  const [showAddedConfirmDialog, setShowAddedConfirmDialog] = useState(false);
  const [inviteCode, setInviteCode] = useState("");

  const step = EXPERIENCE_STEPS.find((s) => s.id === currentStep);

  useEffect(() => {
    // 检查是否已验证邀请码
    const entered = localStorage.getItem("entered");
    const code = localStorage.getItem("inviteCode");

    if (!entered || !code) {
      router.push("/enter");
      return;
    }

    setInviteCode(code);
  }, [router]);

  // 倒计时效果
  useEffect(() => {
    setCountdown(15);
    setCanProceed(false);

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setCanProceed(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentStep]);

  const handleNext = () => {
    if (!canProceed) return;

    if (currentStep === 1) {
      setShowAddedConfirmDialog(true);
    } else if (currentStep >= 2 && currentStep <= 5) {
      setShowPromptDialog(true);
    } else {
      if (currentStep < EXPERIENCE_STEPS.length) {
        setCurrentStep(currentStep + 1);
      } else {
        setCompleted(true);
      }
    }
  };

  const handleConfirmAdded = () => {
    setShowAddedConfirmDialog(false);
    if (currentStep < EXPERIENCE_STEPS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCollectSkill = () => {
    setShowPromptDialog(false);

    setTimeout(() => {
      setShowSkillAnimation(true);
      setShowSuccessMessage(true);
      setCollectedSkills([...collectedSkills, currentStep]);
    }, 300);

    setTimeout(() => {
      setShowSkillAnimation(false);
      setShowSuccessMessage(false);

      if (currentStep < EXPERIENCE_STEPS.length) {
        setCurrentStep(currentStep + 1);
      } else {
        setCompleted(true);
      }
    }, 3300);
  };

  const handleStartConfiguration = () => {
    const businessInfo = `# 业务信息配置

## 你的产品服务描述与介绍：


## 你面向的人群：


## 你为他们解决的问题：


## 你的产品服务亮点：


---

`;

    const collectedPrompts = EXPERIENCE_STEPS
      .filter(s => s.id >= 2 && collectedSkills.includes(s.id))
      .map(s => `## ${s.title}\n\n${s.prompt}`)
      .join('\n\n---\n\n');

    setFinalPrompt(businessInfo + collectedPrompts);
    setShowPromptEditor(true);
  };

  const handleFinishConfiguration = () => {
    console.log("最终提示词:", finalPrompt);
    setShowPromptEditor(false);
    setTimeout(() => {
      setShowBusinessDialog(true);
    }, 300);
  };

  if (!inviteCode) {
    return null;
  }

  if (completed) {
    const skills = [
      { name: "自动回复", icon: "🤖", collected: true },
      { name: "说人话", icon: "💬", collected: collectedSkills.includes(2) },
      { name: "咨询能力", icon: "🎯", collected: collectedSkills.includes(3) },
      { name: "拉回话题", icon: "🧭", collected: collectedSkills.includes(4) },
      { name: "主动跟进", icon: "🚀", collected: collectedSkills.includes(5) },
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center p-4">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 左侧：文字信息 */}
          <div className="card bg-white border-2 border-green-200 shadow-2xl">
            <div className="card-body">
              <div className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="card-title text-3xl font-bold text-gray-900 justify-center">
                  体验完我们家的AI客服，到你的了
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 space-y-3">
                  <p className="text-lg text-gray-800">
                    您已经完整体验了鲸奇AI客服的5大核心能力：
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>自动回复能力（原生的企微和个微都没有自动回复能力）</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>说人话的能力（人味儿拉满才能把话说到客户心里去）</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>解决问题的咨询能力（这就是我们说的咨询师级别的客服）</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>主动拉回话题的能力（客户有些时候的确会瞎扯，但是我们的AI始终专注业务成交）</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>主动跟进的能力（客户沉默很正常，别慌，AI客服主动跟进，可比人强多了）</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-center text-gray-800 mb-4">
                    准备好为您的业务配置AI客服了吗？
                  </p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => router.push("/")}
                      className="btn btn-outline flex-1"
                    >
                      返回首页
                    </button>
                    <button
                      onClick={handleStartConfiguration}
                      className="btn bg-green-600 hover:bg-green-700 text-white border-0 flex-1"
                    >
                      立即配置
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧：技能五边形图 */}
          <div className="card bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 shadow-2xl">
            <div className="card-body flex items-center justify-center p-8">
              <div className="relative w-full max-w-md aspect-square">
                {/* 中心AI客服图标 */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <p className="text-center mt-2 font-bold text-green-700">AI客服</p>
                </div>

                {/* 五边形背景 */}
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <polygon points="200,40 350,140 310,310 90,310 50,140" fill="none" stroke="#d1fae5" strokeWidth="2" className="opacity-50" />
                  <polygon points="200,80 310,150 280,280 120,280 90,150" fill="none" stroke="#a7f3d0" strokeWidth="2" className="opacity-50" />
                  <polygon points="200,120 270,165 250,250 150,250 130,165" fill="none" stroke="#6ee7b7" strokeWidth="2" className="opacity-50" />
                  {skills.every(s => s.collected) && (
                    <polygon points="200,40 350,140 310,310 90,310 50,140" fill="#10b981" fillOpacity="0.15" stroke="#10b981" strokeWidth="3" />
                  )}
                </svg>

                {/* 技能节点 */}
                {skills.map((skill, index) => {
                  const angle = (index * 72 - 90) * (Math.PI / 180);
                  const radius = 160;
                  const x = 200 + radius * Math.cos(angle);
                  const y = 200 + radius * Math.sin(angle);

                  return (
                    <div
                      key={index}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${x}px`, top: `${y}px` }}
                    >
                      <div className={`relative group ${skill.collected ? 'animate-bounce-slow' : ''}`}>
                        <div
                          className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-xl transition-all duration-300 ${
                            skill.collected
                              ? 'bg-gradient-to-br from-green-400 to-emerald-500 scale-110'
                              : 'bg-gray-200 opacity-50'
                          }`}
                        >
                          {skill.icon}
                        </div>
                        {skill.collected && (
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                        <p className={`text-xs font-semibold text-center mt-2 whitespace-nowrap ${
                          skill.collected ? 'text-green-700' : 'text-gray-400'
                        }`}>
                          {skill.name}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 最终提示词编辑器 Modal */}
        {showPromptEditor && (
          <dialog className="modal modal-open">
            <div className="modal-box max-w-4xl max-h-[90vh] flex flex-col p-0">
              <div className="p-6 border-b">
                <h3 className="font-bold text-2xl text-center">
                  🎉 汇总所有AI客服提示词
                </h3>
                <p className="text-center text-gray-600 text-sm mt-2">
                  我们再补充几个信息即可大功告成：你的产品服务介绍，你的服务人群是谁？你为他们解决什么问题，以及你们的亮点和特色！
                </p>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                <textarea
                  value={finalPrompt}
                  onChange={(e) => setFinalPrompt(e.target.value)}
                  className="textarea textarea-bordered w-full min-h-[500px] font-mono text-sm"
                  placeholder="提示词将在这里显示..."
                />
              </div>

              <div className="p-6 border-t flex justify-center">
                <button
                  onClick={handleFinishConfiguration}
                  className="btn bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-lg px-16 border-0"
                >
                  🚀 先这样，接入开跑，边跑边看边调
                </button>
              </div>
            </div>
          </dialog>
        )}

        {/* 商务对接弹窗 */}
        {showBusinessDialog && (
          <dialog className="modal modal-open">
            <div className="modal-box max-w-2xl">
              <h3 className="font-bold text-2xl text-center mb-4">
                📞 联系我们的商务顾问
              </h3>

              <div className="space-y-6 py-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-lg text-gray-800 leading-relaxed text-center">
                    请扫码联系我们的人工顾问进行商务开通和接入的工作。
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed text-center mt-4">
                    完成合同签署和费用支付后，我们将会在<span className="font-bold text-green-600">两个工作日</span>之内帮你接入你的私域，并开启自动回复。
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center py-6 bg-white rounded-lg border-2 border-dashed border-gray-300">
                  <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-green-200">
                    <img
                      src="/cy.jpg"
                      alt="商务顾问二维码"
                      className="w-64 h-64"
                    />
                  </div>
                  <p className="text-center text-gray-600 mt-4 font-medium">
                    微信扫码添加商务顾问
                  </p>
                </div>

                <div className="flex justify-center pt-4">
                  <button
                    onClick={() => {
                      setShowBusinessDialog(false);
                      router.push("/");
                    }}
                    className="btn bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg px-12 border-0"
                  >
                    我已添加，返回首页
                  </button>
                </div>
              </div>
            </div>
          </dialog>
        )}

        <style jsx>{`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 2s ease-in-out infinite;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* 技能收集动画 */}
      {showSkillAnimation && (
        <div className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

          <div className="absolute bottom-10 right-10 z-[9999]">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
            </div>
          </div>

          <div className="skill-fly-animation">
            <div className="text-6xl animate-fly-to-character">⭐</div>
          </div>
        </div>
      )}

      {/* 成功提示 */}
      {showSuccessMessage && (
        <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] animate-bounce-in">
          <div className="card bg-white border-2 border-green-500 shadow-2xl">
            <div className="card-body p-6 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xl font-bold text-gray-900 mb-2">提示词已提取！</p>
              <p className="text-gray-600">
                已内置到你的AI客服系统中<br />
                请继续完成体验，一起汇总所有提示词
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 确认已添加AI客服弹窗 */}
      {showAddedConfirmDialog && (
        <dialog className="modal modal-open">
          <div className="modal-box max-w-md">
            <h3 className="font-bold text-xl text-center mb-4">
              ⚠️ 确认提示
            </h3>

            <div className="py-6">
              <p className="text-lg text-gray-800 text-center mb-6">
                你是否已经扫码添加上述的AI客服？
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => setShowAddedConfirmDialog(false)}
                  className="btn btn-outline flex-1 text-base"
                >
                  还没加，这就去加
                </button>
                <button
                  onClick={handleConfirmAdded}
                  className="btn bg-green-600 hover:bg-green-700 text-white border-0 flex-1 text-base"
                >
                  已添加，继续体验
                </button>
              </div>
            </div>
          </div>
        </dialog>
      )}

      {/* 提示词弹窗 */}
      {showPromptDialog && (
        <dialog className="modal modal-open">
          <div className="modal-box max-w-3xl max-h-[80vh] overflow-y-auto">
            <h3 className="font-bold text-2xl text-center mb-4">
              🎯 {step?.skillName}提示词
            </h3>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
                <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
                  {step?.prompt}
                </pre>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  onClick={handleCollectSkill}
                  className="btn bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-lg px-12 border-0"
                >
                  ⚡ 一键提取提示词
                </button>
              </div>
            </div>
          </div>
        </dialog>
      )}

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AI客服体验流程</h1>
                <p className="text-xs text-gray-600">5分钟极速体验</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full border border-green-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 animate-shimmer"></div>
                <svg className="w-5 h-5 text-green-600 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <span className="text-sm font-semibold text-green-700 relative z-10">
                  {collectedSkills.length}/4 AI技能已学习
                </span>
              </div>
              <button
                onClick={() => router.push("/")}
                className="btn btn-ghost text-gray-600"
              >
                退出体验
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              进度：{currentStep} / {EXPERIENCE_STEPS.length}
            </span>
            <span className="text-sm text-gray-600">
              {Math.round((currentStep / EXPERIENCE_STEPS.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / EXPERIENCE_STEPS.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="card bg-white border-2 border-green-200 shadow-2xl">
          <div className="card-body p-0">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-b-0 p-8">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg flex-shrink-0">
                  {currentStep}
                </div>
                <div className="flex-1 pt-1">
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">{step?.title}</h2>
                  <p className="text-base text-gray-600 leading-relaxed">{step?.subtitle}</p>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-8">
              {/* 二维码展示（仅第一步） */}
              {currentStep === 1 && step?.qrCode && (
                <div className="flex flex-col items-center justify-center py-6 bg-white rounded-lg border-2 border-dashed border-gray-300">
                  <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-green-200">
                    <img
                      src={step.qrCode}
                      alt="AI客服二维码"
                      className="w-64 h-64"
                    />
                  </div>
                  <p className="text-center text-gray-600 mt-4 font-medium">
                    微信扫码添加AI客服
                  </p>
                </div>
              )}

              {/* 主要操作指引 */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-sm opacity-30 group-hover:opacity-50 transition duration-300"></div>

                <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 shadow-xl">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <div className="inline-flex items-center bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          👉 现在请这样做
                        </div>
                        {currentStep === 1 && (
                          <div className="relative">
                            <div className="flex items-center space-x-1 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                              <span className="text-base">😲</span>
                              <span>Aha Moment</span>
                            </div>
                            <div className="absolute left-full bottom-0 ml-1 -mb-1 w-80 bg-white border-2 border-yellow-300 rounded-xl shadow-2xl p-4 animate-bounce-in z-50">
                              <div className="flex items-start space-x-3">
                                <div className="text-4xl flex-shrink-0">😲</div>
                                <div>
                                  <h4 className="font-bold text-yellow-800 mb-2 text-sm">💡 惊艳时刻</h4>
                                  <p className="text-xs text-gray-700 leading-relaxed">
                                    自动回复可以进行<span className="font-semibold text-yellow-700">延时和汇总回复</span>。客户发过来之后你的AI不要直接秒回，而是等待<span className="font-semibold text-yellow-700">15秒，甚至30秒</span>给人的感觉更真实！
                                  </p>
                                </div>
                              </div>
                              <div className="absolute left-8 -bottom-2 w-4 h-4 bg-white border-b-2 border-r-2 border-yellow-300 transform rotate-45"></div>
                            </div>
                          </div>
                        )}
                      </div>
                      <p className="text-xl font-semibold text-gray-900 leading-relaxed">
                        {step?.content.instruction}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 辅助提示 */}
              <div className="flex items-start justify-center space-x-2 text-sm text-gray-400 px-4">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="leading-relaxed">{step?.content.action}</span>
              </div>

              {/* 倒计时提示 */}
              {!canProceed && (
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="relative">
                      <svg className="w-10 h-10" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke="#f97316"
                          strokeWidth="3"
                          strokeDasharray={`${(countdown / 15) * 100}, 100`}
                          strokeLinecap="round"
                          transform="rotate(-90 18 18)"
                          style={{ transition: "stroke-dasharray 1s linear" }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-orange-600 font-bold text-sm">{countdown}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-orange-800 font-medium">
                        请仔细阅读上方内容，并完成和AI客服的互动，然后回到这里提取提示词
                      </p>
                      <p className="text-orange-600 text-sm">
                        {countdown}秒后可继续...
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 导航按钮 */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="btn btn-outline flex-1"
                >
                  上一步
                </button>
                <button
                  onClick={handleNext}
                  disabled={!canProceed}
                  className={`btn flex-1 text-lg transition-all ${
                    canProceed
                      ? "bg-green-600 hover:bg-green-700 text-white border-0"
                      : "bg-gray-300 cursor-not-allowed opacity-60 border-0"
                  }`}
                >
                  {canProceed ? (
                    <>
                      {currentStep === EXPERIENCE_STEPS.length ? "完成体验" : "下一步"}
                      <svg className="w-5 h-5 ml-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </>
                  ) : (
                    <>等待 {countdown} 秒</>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 步骤导航 */}
        <div className="mt-8 bg-white rounded-lg shadow-md border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">体验步骤</h3>
          <div className="space-y-2">
            {EXPERIENCE_STEPS.map((s) => (
              <div
                key={s.id}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  s.id === currentStep
                    ? "bg-green-50 border border-green-200"
                    : s.id < currentStep
                    ? "bg-gray-50"
                    : "bg-white"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    s.id < currentStep
                      ? "bg-green-500 text-white"
                      : s.id === currentStep
                      ? "bg-green-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {s.id < currentStep ? "✓" : s.id}
                </div>
                <div className="flex-1 flex items-center justify-between">
                  <span
                    className={`text-sm ${
                      s.id === currentStep
                        ? "text-green-700 font-semibold"
                        : s.id < currentStep
                        ? "text-gray-500"
                        : "text-gray-600"
                    }`}
                  >
                    {s.title}
                  </span>
                  {s.id === 1 && (
                    <span className="text-orange-600 text-xs font-semibold bg-orange-50 px-2 py-1 rounded-md border border-orange-200 max-w-xs">
                      待AI客服调教好之后，鲸奇将会负责接入到你的私域，并开启自动回复能力，上线接客~
                    </span>
                  )}
                  {s.id >= 2 && collectedSkills.includes(s.id) && (
                    <span className="text-green-600 text-xs font-semibold bg-green-50 px-2 py-1 rounded-full border border-green-200">
                      AI技能已学习
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fly-to-character {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(600px, 400px) scale(0.3);
            opacity: 0;
          }
        }

        @keyframes bounce-in {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-fly-to-character {
          animation: fly-to-character 2s ease-in-out forwards;
        }

        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out forwards;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
