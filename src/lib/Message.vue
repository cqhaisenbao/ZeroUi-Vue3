<template>
    <teleport to="body">
        <div>
        </div>
    </teleport>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: "Message",
    props: {
        message: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'success'
        },
        showClose: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        return {close};
    }
});
</script>

<style lang="scss">
@import "./src/style/theme.scss";

</style>
