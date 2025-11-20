"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import config from "@/config";

const EXPERIENCE_STEPS = [
  {
    id: 1,
    title: "欢迎来到AI客服体验",
    description: "接下来，我将带您体验AI客服的5大核心能力",
    icon: "👋",
    action: "开始体验",
  },
  {
    id: 2,
    title: "能力1：自动回复",
    description: "AI客服可以24小时不间断自动回复客户消息，即使您在睡觉或忙碌，客户也能得到及时响应。",
    icon: "⚡",
    details: [
      "7×24小时全天候在线",
      "秒级响应速度",
      "无限并发接待",
    ],
    action: "继续",
  },
  {
    id: 3,
    title: "能力2：说人话",
    description: "不像传统机器人那样生硬，AI客服能够像真人一样自然对话，让客户感觉更亲切。",
    icon: "💬",
    details: [
      "自然语言理解",
      "情感化表达",
      "个性化沟通风格",
    ],
    action: "继续",
  },
  {
    id: 4,
    title: "能力3：专业咨询",
    description: "AI客服掌握您的产品和服务知识，能够准确回答客户的专业问题，提供有价值的咨询。",
    icon: "🎯",
    details: [
      "产品知识库",
      "精准问题解答",
      "专业建议推荐",
    ],
    action: "继续",
  },
  {
    id: 5,
    title: "能力4：话题拉回",
    description: "当客户聊到其他话题时，AI客服能够巧妙地将对话引导回业务主题，提高转化效率。",
    icon: "🧭",
    details: [
      "智能话题识别",
      "自然话题引导",
      "保持沟通焦点",
    ],
    action: "继续",
  },
  {
    id: 6,
    title: "能力5：主动跟进",
    description: "AI客服不仅被动回答，还会主动询问客户需求，推动对话进展，促进成交转化。",
    icon: "🚀",
    details: [
      "主动需求挖掘",
      "智能话术推进",
      "促进转化成交",
    ],
    action: "继续",
  },
  {
    id: 7,
    title: "体验完成！",
    description: "恭喜您了解了AI客服的5大核心能力。现在，让我们聊聊如何为您的业务定制专属AI客服。",
    icon: "🎉",
    cta: {
      title: "联系商务顾问",
      description: "扫描下方二维码，与我们的商务顾问深入交流",
    },
    action: "返回首页",
  },
];

export default function ExperiencePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [inviteCode, setInviteCode] = useState("");

  useEffect(() => {
    // 检查是否已验证邀请码
    const entered = localStorage.getItem("entered");
    const code = localStorage.getItem("inviteCode");

    if (!entered || !code) {
      // 未验证，跳转回邀请码页面
      router.push("/enter");
      return;
    }

    setInviteCode(code);

    // 显示内容动画
    setTimeout(() => setShowContent(true), 100);
  }, [router]);

  const handleNext = () => {
    if (currentStep < EXPERIENCE_STEPS.length - 1) {
      setShowContent(false);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setShowContent(true);
      }, 300);
    } else {
      router.push("/");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setShowContent(false);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setShowContent(true);
      }, 300);
    }
  };

  const step = EXPERIENCE_STEPS[currentStep];

  if (!inviteCode) {
    return null; // 等待跳转
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
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
              <span className="text-xl font-bold text-gray-900">
                {config.appName}
              </span>
            </Link>
            <div className="text-sm text-gray-600">
              邀请码：<span className="font-mono font-bold text-orange-600">{inviteCode}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-600">
              体验进度
            </span>
            <span className="text-sm font-medium text-orange-600">
              {currentStep + 1} / {EXPERIENCE_STEPS.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-orange-600 h-2 rounded-full transition-all duration-500"
              style={{
                width: `${((currentStep + 1) / EXPERIENCE_STEPS.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <div
          className={`transition-all duration-300 ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Step Header */}
            <div className="bg-gradient-to-r from-orange-500 to-purple-600 p-8 text-center">
              <div className="text-7xl mb-4">{step.icon}</div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {step.title}
              </h1>
              <p className="text-xl text-white/90">{step.description}</p>
            </div>

            {/* Step Body */}
            <div className="p-8 md:p-12">
              {step.details && (
                <div className="space-y-4 mb-8">
                  {step.details.map((detail, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-orange-50 rounded-xl"
                    >
                      <svg
                        className="w-6 h-6 text-orange-600 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 text-lg">{detail}</span>
                    </div>
                  ))}
                </div>
              )}

              {step.cta && (
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.cta.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{step.cta.description}</p>
                  <div className="inline-block bg-white p-6 rounded-2xl border-2 border-orange-200 shadow-lg">
                    <img
                      src="/chunyang.jpg"
                      alt="商务顾问二维码"
                      className="w-64 h-64"
                    />
                    <p className="mt-4 text-gray-600 font-medium">
                      扫码添加商务顾问
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center pt-8 border-t border-gray-200">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className={`btn btn-outline ${
                    currentStep === 0
                      ? "btn-disabled"
                      : "border-orange-600 text-orange-600 hover:bg-orange-50"
                  }`}
                >
                  上一步
                </button>
                <button
                  onClick={handleNext}
                  className="btn bg-orange-600 hover:bg-orange-700 text-white border-0 px-8"
                >
                  {step.action}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Exit Link */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-gray-600 hover:text-orange-600 transition-colors"
          >
            退出体验，返回首页
          </Link>
        </div>
      </main>
    </div>
  );
}
