<template>
    <div class="slideshow-container">
        <div class="mySlides fade" v-for="(item,index) in defaults" :key="index">
            <div class="numbertext">{{ active + 1 }} / {{ defaults.length }}</div>
            <slot v-if="false"></slot>
            <div>
                <component :is="item" v-show="index===active"></component>
                <!--                <component :is="item"></component>-->
            </div>
        </div>
        <div class="dotWrapper">
            <span v-for="(item,index) in defaults" :key="index" class="dot" @click="currentSlide(index)"></span>
        </div>
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <br>
    <!--    <div style="text-align:center">-->
    <!--        <span class="dot" onclick="currentSlide(1)"></span>-->
    <!--        <span class="dot" onclick="currentSlide(2)"></span>-->
    <!--        <span class="dot" onclick="currentSlide(3)"></span>-->
    <!--    </div>-->
</template>

<script lang="ts">
import {defineComponent, onMounted, PropType, ref} from 'vue';

export default defineComponent({
    name: "Slides",
    props: {},
    setup(props, context) {
        const defaults = context.slots.default();
        const active = ref(0);
        const currentSlide = (val: number) => {
            active.value = val;
        };
        onMounted(() => {
            setInterval(() => {
                if (active.value === defaults.length - 1) {
                    active.value = 0;
                } else {
                    active.value += 1;
                }
            }, 3000);
        });
        return {defaults, active, currentSlide};
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

.slideshow-container {
    max-width: 1000px;
    position: relative;
    margin: auto;
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

.numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
}

.dot {
    cursor: pointer;
    height: 10px;
    width: 10px;
    margin: 0 4px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
}

.active, .dot:hover {
    background-color: #717171;
}

.fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
}

@-webkit-keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
}

@keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
    .prev, .next, .text {font-size: 11px}
}
</style>
