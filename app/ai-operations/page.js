import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import ComingSoon from "@/components/ComingSoon";

export const metadata = getSEOTags({
  title: `AI运营 - 即将上线 | ${config.appName}`,
  description: "AI运营功能正在激情开发中，敬请期待！让AI帮你管理私域、社群和朋友圈。",
  canonicalUrlRelative: "/ai-operations",
  keywords: ["AI运营", "私域运营", "社群运营", "朋友圈运营", "AI自动化"],
});

export default function AIOperationsPage() {
  return (
    <ComingSoon
      title="AI运营"
      description="让AI帮你管理私域、社群和朋友圈，正在激情开发中"
      icon="🤖"
    />
  );
}
