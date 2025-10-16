"use client";

import { useRef, useState } from "react";
import { renderFAQSchema } from "@/libs/seo";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

// Export FAQ list for schema generation
export const faqList = [
  {
    question: "什么是AI数字分身？",
    answer: <div className="space-y-2 leading-relaxed">AI数字分身是基于您的个人特征、沟通风格、专业知识训练的AI助手，能够代替您完成客户接待、内容创作、私域运营等工作，7x24小时不间断服务。</div>,
  },
  {
    question: "我需要懂技术吗？",
    answer: (
      <p>
        完全不需要！春阳AI提供简单易用的界面，只需要上传您的资料和设置偏好，系统会自动完成AI训练和部署。我们还提供专业的技术支持团队帮助您。
      </p>
    ),
  },
  {
    question: "多久可以开始使用？",
    answer: (
      <div className="space-y-2 leading-relaxed">注册后立即可以开始配置您的AI数字分身，通常3-5个工作日完成训练即可投入使用。企业版提供加急服务，24小时内可完成部署。</div>
    ),
  },
  {
    question: "支持哪些应用场景？",
    answer: (
      <div className="space-y-2 leading-relaxed">支持私域客户运营、短视频内容生成、客户咨询接待、销售线索跟进、品牌内容创作等多个场景，可根据您的业务需求定制。</div>
    ),
  },
  {
    question: "数据安全吗？",
    answer: (
      <p>
        我们采用企业级加密技术保护您的数据，所有信息都存储在国内合规服务器，符合数据安全法规。您的AI数字分身仅为您服务，不会用于其他用途。
      </p>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  // Prepare FAQ data for schema (convert JSX to plain text)
  const faqSchemaData = faqList.map(item => ({
    question: item.question,
    answer: typeof item.answer === 'string'
      ? item.answer
      : item.answer?.props?.children || item.question
  }));

  return (
    <>
      {/* FAQ Schema for AI crawlers */}
      {renderFAQSchema(faqSchemaData)}

      <section className="bg-base-200" id="faq" aria-labelledby="faq-heading">
        <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="flex flex-col text-left basis-1/2">
            <p className="inline-block font-semibold text-primary mb-4">常见问题</p>
            <h2 id="faq-heading" className="sm:text-4xl text-3xl font-extrabold text-base-content">
              您可能想了解的问题
            </h2>
          </div>

          <ul className="basis-1/2" role="list">
            {faqList.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default FAQ;
