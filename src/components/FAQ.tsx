import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left font-medium text-lg text-gray-900 py-2"
        onClick={onClick}
      >
        {question}
        {isOpen ? (
          <ChevronUp className="flex-shrink-0 ml-2 h-5 w-5" style={{ color: '#800080' }} />
        ) : (
          <ChevronDown className="flex-shrink-0 ml-2 h-5 w-5" style={{ color: '#800080' }} />
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="py-4 text-gray-700 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Нужен ли платный аккаунт ChatGPT?",
      answer: "Я бы сказал что нет, 2/3 гайда вполне ок и без подписки. Но сразу учтите, что GPT с подпиской и GPT без подписки это тоже самое, что Лада и Порш. И то и то едет, но по разному. В гайде я дополнительно отметил, какие методики требуют платной подписки, а какие доступны всем."
    },
    {
      question: "Сколько времени займет освоение материала?",
      answer: "Каждая глава читается минут за 15, и еще минут 45 я бы закладывал на то, чтобы поиграться с самим ChatGPT. Если читать и практиковать по главе в день, то займет около недели."
    },
    {
      question: "Подойдет ли гайд, если я совсем не технарь?",
      answer: "Да, гайд написан максимально простым языком, без сложных терминов. Все объясняется через практические примеры и аналогии. 3 глава будет немного сложнее, чем остальные, но ничего страшного там нет."
    },
    {
      question: "В каком формате будет гайд?",
      answer: "Ссылка с адаптированным текстом. Не PDF, не бот в телеграме. А красиво оформленные веб страницы."
    },
    {
      question: "Будут ли обновления гайда при появлении новых функций ChatGPT?",
      answer: "Какое-то время да. Пока он будет продаваться, я буду его обновлять. Так как даже за те три недели, пока я писал гайд, мне пришлось переписать 3 главы из за появления новых функций и изменения старых."
    },
    {
      question: "Можно ли использовать методики из гайда для работы с другими нейросетями?",
      answer: "Частично да. Основные принципы построения запросов применимы к большинству языковых моделей, но некоторые специфические функции доступны только в ChatGPT."
    },
    {
      question: "Я из России / Беларуси и не могу пользоваться и оплачивать ChatGPT",
      answer: "Для оплаты есть сервисы, VPN тоже сейчас не сложно ставится. Если возникнут проблемы, можете писать мне в телеграм @Ilya_Plv."
    },
    {
      question: "Есть ли в гайде готовые сценарии для конкретных профессий?",
      answer: "Прям конкретного нет. Целью гайда является не дать вам рыбу или удочку, а рассказать основные принципы. Конечно, какие-то идеи вы найдете и для своей професии, но я не затачивал гайд под конкретную профессию."
    },
    {
      question: "А вдруг гайд окажется бесполезным?",
      answer: "На гайд было потрачено уже больше 60 часов, что около 9 часов на главу. Если честно, на русском рынке я не еще не встречал настолько подробного материала. Если встречали — скиньте пожалуйста."
    },
    {
      question: "Написан ли гайд с помощью ИИ?",
      answer: "Конечно, часть идей не существовало бы без моей совместной работы с ИИ. Этому я и хочу тебя научить через этот гайд. Но это не простое 'ChatGPT — напиши мне гайд для ИИ'. Это огромный проект, который занял у меня более 60 часов чистой работы. При написании которого я использовал 4 разных LLM — ChatGPT, Claude, Gemini, NotebookLM. И да — заметь, стал бы ты считать этот гайд ценнее, если бы я сказал, что вообще не использовал нейросети? Многие ответят что да. Любая работа, где участвовали нейросети, автоматически будет считаться менее ценной. Это нормально — придерживаться старого способа мышления."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle title="Часто задаваемые вопросы" />
        
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;