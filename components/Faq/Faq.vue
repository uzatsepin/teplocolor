<template>
    <section class="faq" ref="faq">
        <div class="faq__container">
            <h2 class="faq__title" ref="faqTitle">Частые вопросы</h2>

            <div class="faq__content">
                <div class="faq__content-items" ref="faqItems">
                    <FaqItem v-for="question in questions" :key="question.id" :question="question.question" :answer="question.answer"/>
                </div>
                <div class="faq__content-img" ref="faqImg">
                    <NuxtImg src="/images/faq-painting.jpg" alt="Teplocolor – Часто задаваемые вопросы"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

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
]

const faqTitle = ref(null);
const faqItems = ref(null);
const faqImg = ref(null);

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Задержка для плавного появления
                setTimeout(() => {
                    entry.target.classList.add('faq__visible');
                }, index * 200); // Добавляем задержку для каждого элемента
            } else {
                entry.target.classList.remove('faq__visible');
            }
        });
    });

    // Наблюдаем за заголовком
    if (faqTitle.value) {
        observer.observe(faqTitle.value);
    }

    // Наблюдаем за элементами вопросов
    if (faqItems.value) {
        const items = faqItems.value.querySelectorAll('.FaqItem'); // Получаем все элементы FaqItem
        items.forEach((item, index) => {
            observer.observe(item); // Наблюдаем за каждым вопросом
        });
    }

    // Наблюдаем за изображением
    if (faqImg.value) {
        observer.observe(faqImg.value);
    }
});
</script>

<style scoped lang="scss">
.faq {
    margin-top: 48px;

    &__container {
        padding: 0 16px;
    }

    &__title {
        font-size: 36px;
        line-height: 61px;
        color: $mainBlack;
        font-weight: 900;
        text-align: center;
        position: relative;
        overflow: hidden;
        opacity: 0;
        transform: translateY(60px);
        transition: opacity 0.6s ease, transform 0.6s ease;

        &.faq__visible {
            opacity: 1;
            transform: translateY(0);
        }

        @media screen and (max-width: 767px) {
            font-size: 28px;
            line-height: 170%;
            text-align: left;
        }

        &:after {
            content: "";
            width: 242px;
            height: 136px;
            background: url("~/assets/images/spray-image.png") no-repeat center / cover;
            margin-top: 24px;
            position: absolute;
            right: 20%;
            bottom: -60%;
            opacity: 0;
            transform: scale(0.5);
            transition: opacity 0.5s ease, transform 0.5s ease;

            @media screen and (max-width: 767px) {
                right: -25%;
                bottom: -10%;
                max-width: 100%;
                max-height: 100%;
            }
        }

        &--visible:after {
            opacity: 1;
            transform: scale(1);
            bottom: -50%;

            @media screen and (max-width: 767px) {
                bottom: 0;
            }
        }
    }

    &__content {
        margin-top: 24px;
        display: flex;
        gap: 48px;

        @media screen and (max-width: 1365px) {
            flex-direction: column;
        }

        @media screen and (max-width: 767px) {
            gap: 24px;
        }

        &-items {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        &-img {
            border-radius: 30px;
            overflow: hidden;
            min-width: 510px;
            opacity: 0;
            transform: translateY(150px);
            transition: opacity 0.6s ease, transform 0.6s ease;

            &.faq__visible {
                opacity: 1;
                transform: translateY(0);
            }

            @media screen and (max-width: 1365px) {
                min-width: 100%;
            }

            & img {
                width: 100%;
            }
        }
    }
}
</style>
