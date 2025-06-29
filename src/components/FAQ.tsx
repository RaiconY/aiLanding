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
        className="flex justify-between items-center w-full text-left font-medium text-lg sm:text-xl text-gray-900 py-2"
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
        <p className="py-4 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
  {
    question: "Нужен ли платный аккаунт ChatGPT?",
    answer: "Около 70% гайда можно применять без подписки. Но разница между бесплатной и платной версией ChatGPT — как между Ладой и Порше: обе едут, но впечатления разные. В гайде мы чётко отмечаем, какие техники требуют подписки, а какие доступны всем."
  },
  {
    question: "Сколько времени займет освоение материала?",
    answer: "Каждая глава читается за 15 минут, плюс 30-45 минут на практику с ChatGPT. При режиме «глава в день» ты освоишь весь гайд за неделю и сразу начнёшь экономить время на рутинных задачах."
  },
  {
    question: "Подойдет ли гайд, если я совсем не технарь?",
    answer: "Абсолютно! Гайд написан максимально простым языком, без технического жаргона. Все объяснения даются через практические примеры и понятные аналогии. Даже самая сложная третья глава про устройство нейросетей адаптирована для нетехнических специалистов."
  },
  {
    question: "В каком формате будет гайд?",
    answer: "Ты получишь доступ к адаптивному веб-сайту с удобной навигацией по главам. Никаких громоздких PDF или ботов в Телеграме — просто красиво оформленные, интерактивные веб-страницы, которые одинаково хорошо работают на компьютере и смартфоне."
  },
  {
    question: "Будут ли обновления гайда при появлении новых функций ChatGPT?",
    answer: "Да! Пока гайд в продаже, мы регулярно обновляем его под новые функции. Только за три недели написания нам пришлось переписать 3 главы из-за новых возможностей ChatGPT. Покупая сейчас, ты получаешь все будущие обновления бесплатно."
  },
  {
    question: "Можно ли использовать методики из гайда для работы с другими нейросетями?",
    answer: "Однозначно да. 80% принципов построения запросов универсальны и работают с любыми языковыми моделями. Освоив ChatGPT по этому гайду, ты легко перенесёшь навыки на Claude, Gemini или любую другую нейросеть."
  },
  {
    question: "Я из России / Беларуси и не могу пользоваться и оплачивать ChatGPT",
    answer: "Для оплаты есть удобные сервисы-посредники, а настройка VPN занимает буквально 5 минут. Если возникнут сложности, пиши нам в Телеграм @Ilya_Plv — поможем решить."
  },
  {
    question: "Есть ли в гайде готовые сценарии для конкретных профессий?",
    answer: "В гайде мы фокусируемся на универсальных принципах, которые работают в любой сфере. Но в разделе с 50+ промптами ты найдёшь готовые шаблоны для маркетологов, копирайтеров, дизайнеров, разработчиков, менеджеров и других профессий. Плюс ты научишься адаптировать любой шаблон под свои задачи."
  },
  {
    question: "А вдруг гайд окажется бесполезным?",
    answer: "На создание гайда мы потратили более 60 часов — это примерно 8-9 часов на главу. Уверены, что на русском рынке ты не найдёшь более подробного и структурированного материала по ChatGPT. Если найдешь, то будем рады ознакомиться"
  },
];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle title="Часто задаваемые вопросы" />
        
        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
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