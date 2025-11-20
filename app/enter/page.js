"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import config from "@/config";

export default function EnterPage() {
  const router = useRouter();
  const [inviteCode, setInviteCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/verify-invite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inviteCode: inviteCode.trim().toUpperCase() }),
      });

      const data = await response.json();

      if (response.ok) {
        // 保存邀请码到 localStorage
        localStorage.setItem("inviteCode", inviteCode.trim().toUpperCase());
        localStorage.setItem("entered", "true");

        // 跳转到体验页面
        router.push("/experience");
      } else {
        setError(data.error || "邀请码验证失败");
      }
    } catch (err) {
      console.error("验证邀请码时出错:", err);
      setError("网络错误，请稍后重试");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
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
            <span className="text-2xl font-bold text-gray-900">
              {config.appName}
            </span>
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            输入邀请码
          </h1>
          <p className="text-gray-600 text-lg">
            输入您的专属邀请码，开启AI客服体验之旅
          </p>
        </div>

        {/* 邀请码输入卡片 */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 邀请码输入框 */}
            <div>
              <label
                htmlFor="inviteCode"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                邀请码
              </label>
              <input
                type="text"
                id="inviteCode"
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value.toUpperCase())}
                placeholder="请输入邀请码"
                className="input input-bordered w-full text-lg tracking-wider"
                required
                disabled={loading}
                autoFocus
              />
              <p className="mt-2 text-sm text-gray-500">
                示例：JINGQI2025
              </p>
            </div>

            {/* 错误提示 */}
            {error && (
              <div className="alert alert-error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{error}</span>
              </div>
            )}

            {/* 提交按钮 */}
            <button
              type="submit"
              disabled={loading || !inviteCode.trim()}
              className={`btn btn-lg w-full text-white text-lg ${
                loading
                  ? "loading"
                  : "bg-orange-600 hover:bg-orange-700 border-0"
              }`}
            >
              {loading ? "验证中..." : "开始体验"}
            </button>
          </form>

          {/* 提示信息 */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-start space-x-3 text-sm text-gray-600">
              <svg
                className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <p className="font-medium text-gray-900 mb-1">如何获取邀请码？</p>
                <p>请联系我们的商务顾问获取专属邀请码</p>
              </div>
            </div>
          </div>
        </div>

        {/* 返回首页 */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-gray-600 hover:text-orange-600 transition-colors"
          >
            ← 返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}
