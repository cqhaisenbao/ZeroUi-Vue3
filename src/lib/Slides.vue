<template>
    <div class="o-slideshow-container">
        <div class="o-slides" v-for="(item,index) in defaults" :key="index" :class=getClass(index)>
            <div class="numbertext">{{ active + 1 }} / {{ defaults.length }}</div>
            <div class="fade">
                <component :is="item" v-if="index===active"></component>
            </div>
        </div>
        <div class="dotWrapper">
            <span v-for="(item,index) in defaults" :key="index" class="dot" @click="currentSlide(index)"></span>
        </div>
        <a class="prev" @click="reduceActive">&#10094;</a>
        <a class="next" @click="addActive">&#10095;</a>
    </div>
    <br>
    <slot v-if="false"></slot>
</template>

<script lang="ts">
import {defineComponent, onMounted, onUnmounted, ref} from 'vue';

export default defineComponent({
    name: "Slides",
    props: {},
    setup(props, context) {
        const defaults = context.slots.default!();
        const active = ref(0);
        const timer = ref<any>(0);
        const currentSlide = (val: number) => {
            active.value = val;
        };
        const getClass = (val: number) => {
            if (val === active.value) {
                return 'current';
            } else {
                return '';
            }
        };
        const addActive = () => {
            if (active.value === defaults.length - 1) {
                active.value = 0;
            } else {
                active.value += 1;
            }
        };
        const reduceActive = () => {
            if (active.value === 0) {
                active.value = defaults.length - 1;
            } else {
                active.value -= 1;
            }
        };
        const setActive = () => {
            if (active.value === defaults.length - 1) {
                active.value = 0;
            } else {
                active.value += 1;
            }
        };
        onMounted(() => {
            timer.value = setInterval(() => {
                setActive();
            }, 3000);
        });
        onUnmounted(() => {
            clearInterval(timer.value);
        });
        return {defaults, active, currentSlide, addActive, reduceActive, getClass};
    }
});
</script>

<style lang="scss">
@import "./src/style/theme.scss";

.dotWrapper {
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -60%);
}

.o-slideshow-container {
    max-width: 1000px;
    position: relative;
    margin: auto;
    display: flex;

    .o-slides {
        opacity: 0.5;
        transition: all 1s;

        &.current {
            width: 100%;
            opacity: 1;

            .fade {
                div {
                    transition: width 1s;
                }
            }
        }

        .numbertext {
            color: #f2f2f2;
            font-size: 12px;
            padding: 8px 12px;
            position: absolute;
            top: 0;
        }
    }

    .dotWrapper {
        .dot {
            cursor: pointer;
            height: 10px;
            width: 10px;
            margin: 0 4px;
            background-color: #fff;
            border-radius: 50%;
            display: inline-block;
            transition: background-color 0.6s ease;

            &:hover {
                background-color: #717171;
            }
        }
    }
}

.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
}

.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}

.prev:hover, .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
}
</style>
