<template>
    <div>
        <NuxtLayout>
            <Header/>
            <Hero/>
            <Powder/>
            <Choose/>
            <Faq :questions="questions"/>
            <Reviews/>
            <Contact/>
            <Tags :tags="tags"/>
        </NuxtLayout>
        <Footer/>
    </div>
</template>

<script setup lang="ts">
const questions = [
    {
        id: 1,
        question: "Что такое порошковая покраска и чем она отличается от обычной?",
        answer: "Порошковая покраска — это процесс нанесения на поверхность порошкового состава, который затем запекается при высокой температуре. В отличие от обычной жидкой краски, порошковое покрытие не требует растворителей, обладает большей долговечностью и устойчивостью к механическим повреждениям."
    },
    {
        id: 2,
        question: "Почему порошковая покраска идеальна для теплиц?",
        answer: "Порошковая покраска обеспечивает надежную защиту металлических конструкций от коррозии, ультрафиолетового излучения и воздействия влаги, что особенно важно для теплиц, которые подвергаются воздействию агрессивных внешних факторов."
    },
    {
        id: 3,
        question: "Какие цвета доступны для порошковой покраски теплиц?",
        answer: 'Мы предлагаем широкий спектр цветов на основе международных цветовых стандартов (например, RAL). Вы можете выбрать любой оттенок, который лучше всего подходит для вашего проекта, включая как матовые, так и глянцевые покрытия.'
    },
    {
        id: 4,
        question: "Насколько долговечна порошковая покраска для теплиц?",
        answer: 'Порошковое покрытие служит значительно дольше обычных методов окраски. Средний срок службы такого покрытия для теплиц составляет 10–15 лет, в зависимости от условий эксплуатации и ухода за конструкцией.'
    },
    {
        id: 5,
        question: "Можно ли нанести порошковую краску на старые или ржавые конструкции теплиц?",
        answer: 'Перед нанесением порошковой краски металлические поверхности должны быть очищены и подготовлены. Это включает удаление ржавчины, грязи и старых покрытий. Мы также предлагаем услуги подготовки металла, чтобы обеспечить идеальное нанесение краски и долговечность покрытия.'
    }
];

const reviews = ref([
  {
    id: 1,
    text:
      "Обратился в эту компанию для покраски металлического каркаса теплицы. Результат отличный: ровное покрытие и надежная защита от коррозии. Теперь теплица выглядит как новая и прослужит долгие годы. Спасибо!",
    name: "Алексей И.",
    photo: "/images/reviews/aleksei-i.jpeg",
  },
  {
    id: 2,
    text:
      "Очень довольна покраской теплицы! Тут сотрудники мне помогли выбрать подходящий цвет и сделали покрытие, устойчивое к внешним воздействиям. Работой осталась полностью довольна!",
    name: "Мария П.",
    photo: "/images/reviews/mariya-p.jpg",
  },
  {
    id: 3,
    text:
      "Заказывал порошковую покраску тепличных конструкций. Понравилось, как тщательно выполнена работа: покрытие стойкое, все элементы прокрашены идеально. Теплица выглядит красиво и надежно защищена от ржавчины.",
    name: "Сергей С.",
    photo: "images/reviews/empty-avatar.webp",
  },
  {
    id: 4,
    text:
      "Понадобилась реставрация старой теплицы. В TeploColuor предложили порошковую покраску, и это было правильным решением. Конструкция стала выглядеть как новая, а покрытие выдерживает все погодные условия. Очень довольна!",
    name: "Елена К.",
    photo: "images/reviews/empty-avatar.webp",
  },
  {
    id: 5,
    text:
      "Заказывал в TeploColour покраску металлической теплицы. Работу выполнили быстро и качественно. Теперь конструкция защищена от коррозии, а цвет радует глаз. Рекомендую!",
    name: "Дмитрий С.",
    photo: "images/reviews/dmitriy-c.jpg",
  },
  {
    id: 6,
    text:
      "Покраска теплицы в TeploColour превзошла мои ожидания. Цвет ровный и насыщенный, а главное — покрытие устойчиво к дождю и солнцу. Теплица выглядит аккуратно и современно. Большое спасибо!",
    name: "Анна М.",
    photo: "images/reviews/empty-avatar.webp",
  },
  {
    id: 7,
    text:
      "Решил обновить свою теплицу перед сезоном и заказал порошковую покраску в TeploColour. Это лучшее решение! Конструкция стала выглядеть свежо, а краска отлично защищает металл от ржавчины. Очень доволен качеством!",
    name: "Владимир Н.",
    photo: "images/reviews/empty-avatar.webp",
  },
]);

const tags = [
    { name: "Покраска" },
    { name: 'teplogarden' },
    { name: 'теплицы' },
    { name: 'заказать покраску' },
    { name: 'покрасить теплицу' },
    { name: 'Купить теплицу' },
    { name: "покрасочная" },
    { name: "покрасить" },
    { name: "порошковая покраска" },
    { name: "покраска" },
    { name: "защита от коррозии" },
    { name: "покраска для теплиц" },
    { name: "профессиональная покраска" },
    { name: "устойчивое покрытие" },
    { name: "покраска металлоконструкций" },
    { name: "антикоррозийная обработка" },
    { name: "окрашивание металлических изделий" },
    { name: "долговечное покрытие" },
    { name: "сервис порошковой покраски" },
    { name: "качественная покраска металла" },
    { name: "покраска металлических каркасов" },
    { name: "покраска теплиц Москва" }
];

useHead({
  title: 'TeploColour - Порошковая покраска металлических изделий в Москве',
  meta: [
    { name: 'description', content: 'Профессиональная порошковая покраска металлических изделий в Москве. Качественное покрытие, доступные цены, гарантия на работы.' },
    { name: 'keywords', content: tags.map(tag => tag.name).join(", ") },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://teplocolour.ru'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "TeploColour",
        "url": "https://teplocolour.ru",
        "logo": "https://teplocolour.ru/images/logo.svg",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+7-495-123-4567",
          "contactType": "customer service",
          "areaServed": "RU",
          "availableLanguage": ["Russian"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ул. Иванова, д.23",
          "addressLocality": "Москва",
          "addressCountry": "RU"
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Преимущества TeploColour",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Индивидуальный подход",
            "description": "Подбираем оптимальные решения под ваши потребности."
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Синергия с teplogarden",
            "description": "Идеальная совместимость и интеграция с продукцией основного бренда."
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Экологические материалы",
            "description": "Заботимся об окружающей среде и вашем здоровье."
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Соблюдение сроков",
            "description": "Ценим ваше время и всегда выполняем работу вовремя."
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Современное оборудование",
            "description": "Гарантируем точность и качество нанесения покрытий."
          }
        ]
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": questions.map(q => ({
          "@type": "Question",
          "name": q.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": q.answer
          }
        }))
      })
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "TeploColour",
        description: "Профессиональная порошковая покраска в Москве",
        url: "https://teplocolour.ru",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://teplocolour.ru/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      }),
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: reviews.value.map((review, index) => ({
          "@type": "Review",
          position: index + 1,
          author: {
            "@type": "Person",
            name: review.name,
          },
          reviewBody: review.text,
          itemReviewed: {
            "@type": "Service",
            name: "TeploColour Порошковая покраска",
            provider: {
              "@type": "Organization",
              name: "TeploColour",
            },
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        })),
      }),
    },
    {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "keywords": tags.map(tag => tag.name).join(", "),
                "about": {
                    "@type": "Thing",
                    "name": "Порошковая покраска TeploColour",
                    "description": "Профессиональная порошковая покраска металлических изделий и теплиц в Москве"
                }
            })
        }
  ]
});

useSeoMeta({
  ogTitle: 'TeploColour - Порошковая покраска металлических изделий',
  ogDescription: 'Профессиональная порошковая покраска металлических изделий в Москве',
  ogImage: '/images/og-image.jpg',
  twitterCard: 'summary_large_image',
});

useSchemaOrg([
  defineOrganization({
    name: 'TeploColour',
    logo: 'https://teplocolour.ru/logo.svg',
    sameAs: [
      'https://vk.com/teplocolour',
      'https://t.me/teplocolour',
    ],
  }),
  defineWebPage({
    name: 'TeploColour - Порошковая покраска',
    description: 'Профессиональная порошковая покраска металлических изделий в Москве',
    image: '/images/og-image.jpg',
  }),
]);
</script>

<style scoped>

</style>