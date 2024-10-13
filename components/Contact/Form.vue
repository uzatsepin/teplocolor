<template>
    <div class="ContactForm">
        <input class="ContactForm__input" type="text" placeholder="Ваше имя" />
        <input class="ContactForm__input" type="text" placeholder="+7 (___) ___ - __ - __"/>
        <textarea placeholder="Хочу покрасить теплицу..." resize="false"/>

        <ButtonContact />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.ContactForm {
    display: flex;
    flex-direction: column;
    gap: 16px;

    & input {
        all: unset;
        width: -webkit-fill-available;
        border-radius: 16px;
        background: #FFF;
        padding: 12px 16px;
        border: 1px solid #DADAE0;
        font-size: 14px;
        transition: all 250ms ease-in-out;

        &::placeholder {
            color: #b0b0b4;
        }

        &:hover {
            border: 1px solid $mainGreen;
            cursor: pointer;
        }

        &:focus {
            background: $lightGreen;
        }
    }

    & textarea {
        all: unset;
        width: -webkit-fill-available;
        border-radius: 16px;
        background: #FFF;
        padding: 12px 16px;
        border: 1px solid #DADAE0;
        font-size: 14px;
        resize: none;
        transition: all 250ms ease-in-out;

        &::placeholder {
            color: #b0b0b4;
        }

        &:hover {
            border: 1px solid $mainGreen;
            cursor: pointer;
        }

        &:focus {
            background: $lightGreen;
        }
    }

    .ButtonContact {
        max-width: 191px;
        margin-left: auto;

        @media screen and (max-width: 767px) {
            max-width: 100%;
            margin: 0 auto;
        }
    }
}
</style>