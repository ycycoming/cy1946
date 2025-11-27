import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import ComingSoon from "@/components/ComingSoon";

export const metadata = getSEOTags({
  title: `GEO - 即将上线 | ${config.appName}`,
  description: "GEO功能正在激情开发中，敬请期待！",
  canonicalUrlRelative: "/geo",
});

export default function GeoPage() {
  return (
    <ComingSoon
      title="GEO"
      description="正在激情开发中，即将上线"
      icon="🌍"
      themeColor="cyan"
    />
  );
}
