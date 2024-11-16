<template>
    <section class="faq" ref="faq" id="faq" itemscope itemtype="https://schema.org/FAQPage">
        <div class="faq__container">
            <h2 class="faq__title" ref="faqTitle">Частые вопросы</h2>

            <div class="faq__content">
                <div class="faq__content-items" ref="faqItems" role="list">
                    <FaqItem 
                        v-for="question in questions" 
                        :key="question.id" 
                        :question="question.question" 
                        :answer="question.answer"
                        itemscope 
                        itemtype="https://schema.org/Question"
                    />
                </div>
                <div class="faq__content-img" ref="faqImg">
                    <NuxtImg 
                        src="/images/faq-painting.jpg" 
                        alt="TeploColour – Часто задаваемые вопросы"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
defineProps<{ questions: { id: number; question: string; answer: string }[] }>();


const faqTitle = ref(null);
const faqItems = ref<HTMLElement | null>(null);
const faqImg = ref(null);

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('faq__visible');
                }, index * 200);
            } else {
                entry.target.classList.remove('faq__visible');
            }
        });
    });

    if (faqTitle.value) {
        observer.observe(faqTitle.value);
    }

    if (faqItems.value) {
        const items = faqItems.value.querySelectorAll('.FaqItem');
        items.forEach((item, index) => {
            observer.observe(item); 
        });
    }

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
