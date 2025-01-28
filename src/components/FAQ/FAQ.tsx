import React, { useState } from "react";
import "./FAQ.scss";
import { Title } from "../Title";
import { faqData } from "../../types";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqDatas = faqData;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq" id="faq">
      <div className="faq__textCenter">
        <Title title="FAQ" />
      </div>

      <div className="faq__content">
        {faqDatas.map((item, index) => (
          <div key={index} className="faq__item">
            <div className="faq__question" onClick={() => toggleFAQ(index)}>
              <p>{item.question}</p>
              <button className="faq__toggle">
                {openIndex === index ? "−" : "+"}
              </button>
            </div>
            <div className={`faq__answer ${openIndex === index ? "open" : ""}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
