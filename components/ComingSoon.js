"use client";

import Link from "next/link";
import config from "@/config";

export default function ComingSoon({ title, description, icon = "🚀" }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Logo & Back Link */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center space-x-2 mb-8">
            <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
              <svg
                className="w-7 h-7 text-white"
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
            <span className="text-2xl font-bold text-gray-900">{config.appName}</span>
          </Link>
        </div>

        {/* Coming Soon Content */}
        <div className="relative">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>

          {/* Main Icon */}
          <div className="text-8xl mb-8 animate-bounce-slow">
            {icon}
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            {title || "激情开发中"}
          </h1>

          {/* Description */}
          <p className="text-2xl md:text-3xl text-gray-600 mb-8 leading-relaxed">
            {description || "即将上线，敬请期待"}
          </p>

          {/* Status Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 text-white text-lg font-medium mb-12 shadow-lg">
            <span className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></span>
            正在激情开发中
          </div>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-orange-500 to-purple-600 rounded-full animate-progress" style={{ width: "65%" }}></div>
            </div>
            <p className="text-sm text-gray-500 mt-3">开发进度 65%</p>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">即将上线</h3>
              <p className="text-sm text-gray-600">我们正在全力开发这个功能</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-gray-900 mb-2">精心打磨</h3>
              <p className="text-sm text-gray-600">只为给您最好的体验</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-bold text-gray-900 mb-2">敬请期待</h3>
              <p className="text-sm text-gray-600">很快就能和大家见面</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="btn btn-lg bg-orange-600 hover:bg-orange-700 text-white border-0 text-lg px-10 shadow-lg hover:shadow-xl transition-all normal-case"
            >
              返回首页
            </Link>
            <Link
              href="/#contact"
              className="btn btn-lg btn-outline border-orange-600 text-orange-600 hover:bg-orange-50 text-lg px-10 normal-case"
            >
              联系我们了解更多
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-gray-500 text-sm">
          <p>有任何问题或建议？欢迎随时联系我们</p>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 65%; }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-progress {
          animation: progress 2s ease-out;
        }
      `}</style>
    </div>
  );
}
