import { NextResponse } from "next/server";
import { validateInviteCode } from "@/libs/invite-codes";

/**
 * POST /api/auth/verify-invite
 * 验证邀请码是否有效
 */
export async function POST(req) {
  try {
    const body = await req.json();
    const { inviteCode } = body;

    // 验证请求体
    if (!inviteCode) {
      return NextResponse.json(
        { error: "请提供邀请码" },
        { status: 400 }
      );
    }

    // 验证邀请码
    const isValid = validateInviteCode(inviteCode);

    if (isValid) {
      return NextResponse.json({
        success: true,
        message: "邀请码验证成功",
      });
    } else {
      return NextResponse.json(
        { error: "邀请码无效或已过期" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("验证邀请码时出错:", error);
    return NextResponse.json(
      { error: "服务器错误，请稍后重试" },
      { status: 500 }
    );
  }
}
