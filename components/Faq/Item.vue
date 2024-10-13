<template>
    <div class="FaqItem" :class="{'active': isActive}">
        <div class="FaqItem__top" @click="toggleActive">
            <h3 class="FaqItem__top-title">
                {{ question }}
            </h3>
            <div class="FaqItem__top-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" fill="#F0F0F0"/>
                    <path d="M12 8L12 16" stroke="#7F7F88" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M16 12L8 12" stroke="#7F7F88" stroke-width="1.2" stroke-linecap="round"/>
                </svg>
            </div>
        </div>
        <div class="FaqItem__bottom" ref="bottomContent">
            <p class="FaqItem__bottom-text">
                {{ answer }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, nextTick, watch } from 'vue'

const isActive = ref(false)
const bottomContent = ref<HTMLElement | null>(null)

const toggleActive = () => {
    isActive.value = !isActive.value
}

watch(isActive, async (newValue) => {
    await nextTick() // Ждём обновления DOM
    if (bottomContent.value) {
        const scrollHeight = bottomContent.value.scrollHeight
        bottomContent.value.style.maxHeight = newValue ? `${scrollHeight}px` : '0px'
    }
})

defineProps({
    question: String,
    answer: String
})
</script>

<style scoped lang="scss">
.FaqItem {
    display: flex;
    flex-direction: column;
    transition: all 250ms ease-in-out;

    &:hover {
        cursor: pointer;
    }

    &.active & {
        &__top {
            background: $lightGreen;
            color: $darkGreen;

            &-icon {
                svg {
                    circle {
                        fill: #98CB9C;
                    }
                    path {
                        stroke: #FFF;

                        &:nth-child(2) {
                            display: none;
                        }
                    }
                }
            }
        }
    }

    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 24px;
        background: #FFF;
        border-radius: 16px;
        transition: all 250ms ease-in-out;

        &-title {
            font-size: 18px;

            @media screen and (max-width: 767px) {
                font-size: 16px;
            }
        }

        &-icon {
            margin-left: 16px;
        }
    }

    &__bottom {
        background: #FFF;
        border-radius: 16px;
        max-height: 0;
        overflow: hidden;
        transition: max-height 250ms ease-in-out, opacity 250ms ease-in-out;
        opacity: 0;
        padding: 0;
        margin-top: 0;
    }

    &.active &__bottom {
        opacity: 1;
        padding: 16px 24px;
        margin-top: 8px;
    }
}
</style>
