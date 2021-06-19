<template>
    <div class="zero-button-group-content">
        <slot>
            <Button v-for="(item,index) in buttonGroupText" :key="index">{{ item }}</Button>
        </slot>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Button from "./Button.vue";

export default defineComponent({
    name: "ButtonGroup",
    components: {Button},
    props: {
        buttonGroupText: Array
    },
    setup() {
        return {};
    }
});
</script>

<style lang="scss">
@import "./src/style/theme.scss";

.zero-button-group-content {
    button {
        margin-left: 0 !important;
        border-radius: 0;

        &:first-child {
            border-radius: 4px 0 0 4px;
        }

        &:last-child {
            border-radius: 0 4px 4px 0;
        }
    }
}
</style>
