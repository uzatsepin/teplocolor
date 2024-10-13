<template>
    <div class="ChooseItem">
        <div class="ChooseItem__container">
            <div class="ChooseItem__top">
                <div class="ChooseItem__top-img">
                    <NuxtImg :src="image" :alt="text" width="32" height="32"/>
                </div>
                <h5 class="ChooseItem__top-text">
                    {{ text }}
                </h5>
            </div>
            <div class="ChooseItem__bottom">
                <p>{{sub}}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

defineProps({
    image: String,
    text: String,
    sub: String,
})

</script>

<style scoped lang="scss">
.ChooseItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    position: relative;
    transition: all 250ms ease-in-out;
    border-radius: 16px;
    background: #FFF;
    padding: 24px;

    @media screen and (max-width: 767px) {
        padding: 16px;
    }

    &:after {
        content: '';
        position: absolute;
        height: 130px;
        width: 200px;
        background: url("~/assets/images/bg-hover.png") no-repeat center;
        background-size: contain;
        bottom: -10px;
        right: -30px;
        opacity: 0;
        z-index: 0;
        transition: opacity 500ms ease-in-out, transform 500ms ease-in-out;
        transform: scale(0.8);
    }

    &:hover {
        box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
        cursor: pointer;

        &:after {
            opacity: 0.5;
            transform: scale(1);
        }
    }

    &__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: all 250ms ease-in-out;
    }

    &__top {
        display: flex;
        align-items: center;
        gap: 16px;

        @media screen and (max-width: 767px) {
            flex-direction: column;
        }

        &-img {
            border-radius: 100%;
            background: $lightGreen;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &-text {
            max-width: 127px;
            color: $mainBlack;
            line-height: 18px;
            font-size: 14px;
            font-weight: 600;

            @media screen and (max-width: 767px) {
                max-width: 100%;
                text-align: center;
            }
        }
    }

    &__bottom {
        margin-top: 24px;
        max-width: 208px;
        font-size: 14px;
        color: #606060;
        text-align: center;
        position: relative;
        z-index: 99;

        @media screen and (max-width: 767px) {
            margin-top: 8px;
        }
    }
}
</style>
