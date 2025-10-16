const config = {
  // REQUIRED
  appName: "鲸奇业务智能体",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "鲸奇业务智能体 - 帮助中小企业和个人IP复刻自己，打造AI数字分身，实现私域运营自动化，提升客户转化和品牌影响力。",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "CY1946.COM",
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (resend.supportEmail) otherwise customer support won't work.
    id: "",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1Niyy5AxyNprDp7iZIqEyD2h"
            : "price_456",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "SaaS订阅版",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "按年订阅，功能齐全",
        // The price you want to display, the one user will be charged on Stripe.
        price: 10000,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 15000,
        features: [
          {
            name: "完整AI数字分身系统",
          },
          { name: "短视频自动生成" },
          { name: "私域客户运营" },
          { name: "智能客服接待" },
          { name: "数据分析报告" },
          { name: "技术支持" },
        ],
      },
      {
        // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
        isFeatured: true,
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_456",
        name: "OaaS按结果付费版",
        description: "按效果付费，深度定制",
        price: 30000,
        priceAnchor: 50000,
        features: [
          {
            name: "定制化AI数字分身矩阵",
          },
          { name: "销冠/运营/客服多角色复刻" },
          { name: "私域全流程自动化" },
          { name: "ROI效果保障" },
          { name: "品牌形象深度定制" },
          { name: "专属客户成功团队" },
          { name: "按结果付费机制" },
          { name: "优先功能开发" },
        ],
      },
    ],
  },
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  resend: {
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `鲸奇业务智能体 <noreply@cy1946.com>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `鲸奇团队 <support@cy1946.com>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "support@cy1946.com",
  },
  colors: {
    // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
    theme: "light",
    // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
    // OR you can just do this to use a custom color: main: "#f37055". HEX only.
    main: "hsl(var(--p))", // Uses the primary color from the DaisyUI theme dynamically
  },
  auth: {
    // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API
    loginUrl: "/api/auth/signin",
    callbackUrl: "/dashboard",
  },
};

export default config;
