<template>
    <div>
        <Switch/>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Switch from "../lib/Switch.vue";

export default defineComponent({
    name: "SwitchDemo",
    components: {Switch},
    setup() {
        return {};
    }
});
</script>

<style lang="scss" scoped>

</style>
