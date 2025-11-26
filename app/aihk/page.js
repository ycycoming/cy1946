import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import ComingSoon from "@/components/ComingSoon";

export const metadata = getSEOTags({
  title: `AI获客 - 即将上线 | ${config.appName}`,
  description: "AI获客功能正在激情开发中，敬请期待！让AI帮你自动获取精准客户。",
  canonicalUrlRelative: "/aihk",
  keywords: ["AI获客", "智能获客", "自动获客", "精准获客", "AI营销"],
});

export default function AIAcquisitionPage() {
  return (
    <ComingSoon
      title="AI获客"
      description="让AI帮你自动获取精准客户，正在激情开发中"
      icon="🎯"
    />
  );
}
