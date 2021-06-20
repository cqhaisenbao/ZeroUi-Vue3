<template>
    <div>
        <Dialog></Dialog>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Dialog from "../lib/Dialog.vue";

export default defineComponent({
    name: "DialogDemo",
    components: {Dialog},
    setup() {
        return {};
    }
});
</script>

<style lang="scss" scoped>

</style>
