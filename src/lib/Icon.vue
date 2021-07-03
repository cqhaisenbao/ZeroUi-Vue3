<template>
    <svg class="o-icon" :style="style" aria-hidden="true">
        <use :xlink:href="'#'+name"></use>
    </svg>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import './iconfont';

export default defineComponent({
    name: "Icon",
    props: {
        name: {
            type: String,
            required: true,
            default: 'icon-upload'
        },
        fill: {
            type: String,
        },
    },
    computed: {
        style() {
            return {
                fill: this.fill,
            };
        }
    },
});
</script>

<style lang="scss">
.o-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    overflow: hidden;
}
</style>
