<template>
  <section class="reviews" id="reviews" itemscope itemtype="http://schema.org/Review">
    <div class="reviews__container">
      <h2 class="reviews__title" ref="reviewTitle" itemprop="name">
        Отзывы наших клиентов
      </h2>
      <p class="reviews__descr" itemprop="description">
        TeploColour гордится доверием наших клиентов и всегда стремимся предоставлять
        качественные услуги. Надежность, профессионализм и индивидуальный подход —
        основные принципы нашей работы.
      </p>
      <div class="reviews__slider" role="region" aria-label="Отзывы клиентов">
        <ClientOnly>
          <swiper-container
            ref="containerRef"
            :slides-per-view="3.5"
            :space-between="16"
            :loop="true"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            :breakpoints="{
              360: { slidesPerView: 1.1 },
              768: { slidesPerView: 2.1 },
              1366: { slidesPerView: 3.1 },
              1440: { slidesPerView: 3.5 },
            }"
            aria-live="polite"
          >
            <swiper-slide
              v-for="review in reviews"
              :key="review.id"
              itemscope
              itemtype="http://schema.org/Review"
            >
              <ReviewsItem :review="review" itemprop="reviewBody" />
              <meta itemprop="author" :content="review.name" />
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
        <div
          class="reviews__slider-buttons"
          role="group"
          aria-label="Управление слайдером"
        >
          <button
            class="reviews__slider-buttons-button"
            @click="swiper.prev()"
            aria-label="Предыдущий отзыв"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m14 7l-5 5m0 0l5 5"
              />
            </svg>
          </button>
          <button
            class="reviews__slider-buttons-button"
            @click="swiper.next()"
            aria-label="Следующий отзыв"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m10 17l5-5m0 0l-5-5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const reviewTitle = ref(null);
const containerRef = ref(null);
const swiper = useSwiper(containerRef);

const slides = ref(Array.from({ length: 10 }));

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

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reviews__title--visible");
      } else {
        entry.target.classList.remove("reviews__title--visible");
      }
    });
  });

  if (reviewTitle.value) {
    observer.observe(reviewTitle.value);
  }
});
</script>

<style scoped lang="scss">
.reviews {
  margin-top: 46px;

  &__container {
    display: flex;
    flex-direction: column;
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
        right: -40%;
        bottom: -10%;
        max-width: 100%;
        max-height: 100%;
      }
    }
    &--visible:after {
      opacity: 1;
      transform: scale(1);
      bottom: -60%;

      @media screen and (max-width: 767px) {
        bottom: 0;
      }
    }
  }

  &__descr {
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: $mainBlack;
    max-width: 850px;
    margin: 16px auto 0;

    @media screen and (max-width: 767px) {
      text-align: left;
      font-size: 14px;
    }
  }

  &__items {
    display: flex;
    gap: 24px;
    overflow-x: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }

    @media screen and (max-width: 767px) {
      gap: 16px;
    }
  }

  &__slider {
    position: relative;

    &-buttons {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      display: flex;
      justify-content: space-between;
      z-index: 99999;
      pointer-events: none;

      @media screen and (max-width: 1365px) {
        display: none;
      }

      &-button {
        background: #f2f2f2;
        padding: 6px;
        border-radius: 50%;
        transition: all 0.3s ease;
        pointer-events: all;
        position: absolute;

        & svg {
          width: 24px;
          height: 24px;
        }

        &:hover {
          background: #e2e2e2;
        }

        &:first-child {
          left: -40px;
        }

        &:last-child {
          right: -40px;
        }

        @media screen and (max-width: 1439px) {
          &:first-child {
            left: 0;
          }

          &:last-child {
            right: 0;
          }
        }
      }
    }
  }
}
</style>
