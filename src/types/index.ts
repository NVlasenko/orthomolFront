export type ProductDescription = {
  text: string[];
};

export type ProductRecommendation = {
  title?: string[];
  text?: string[];
};

export type CompositionOfVitamins = {
  vitamin?: string;
  details?: string[]; // Поле details также необязательно
};

export type Product = {
  id: number;
  name: string;
  appointment: string;
  category: string;
  gender: "women" | "men" | "unisex";
  ageCategory: string[];
  healthCategory:string[];
  priceRegular: number;
  imgProductRef: string;
  imgCategoryRef: string;
  inStock: boolean;
  articleNumber: string;
  brand: string;
  shape: string;
  taste: string;
  hit: boolean;
  packaging: number;
  expirationDate: string;
  compositionOfVitamins?: CompositionOfVitamins[];
  description: ProductDescription[];
  recommendation: ProductRecommendation[];
};


type FAQItem = {
  question: string;
  answer: string;
};

export const faqData: FAQItem[] = [
  {
    question: "Наскільки корисно і доцільно приймати Orthomol?",
    answer:
      "Вітамінні комплекси Orthomol є доповненням до раціону для досягнення конкретних медичних цілей, так і щоденними харчовими добавками.",
  },
  {
    question: "Чи є підтвердження ефективності Orthomol?",
    answer:
      "Так, дослідження підтверджують високу ефективність Orthomol у підтримці здоров'я. Зокрема, їх вплив на імунну систему доведено клінічними випробуваннями.",
  },
  {
    question: "Чим обґрунтована висока ціна Orthomol?",
    answer:
      "Orthomol використовує тільки високоякісні інгредієнти, що забезпечують найкращий результат для здоров'я.",
  },
  {
    question: "У Orthomol присутній глютен?",
    answer: "Більшість продуктів Orthomol не містять глютен, що робить їх доступними для людей із целіакією.",
  },
  {
    question: "Чи містять продукти Orthomol фруктозу?",
    answer:
      "Деякі продукти Orthomol містять фруктозу. Рекомендуємо уважно ознайомитися зі складом перед покупкою.",
  },
  {
    question: "Чи містять продукти Orthomol лактозу?",
    answer:
      "Продукти Ортомол можуть зберігати лактозу, але не всі. Деякі комплекси розроблені без лактози, щоб бути безпечними для людей з лактазною недостатністю чи непереносимістю лактози.",
  },
];

export interface City {
  Ref: string;
  Description: string;
}

// Определяем тип данных для областей (если нужно)
export interface Oblast {
  Ref: string;
  Description: string;
}

// Определяем тип данных для отделений НП
export interface Warehouse {
  Ref: string;
  Description: string;
}

