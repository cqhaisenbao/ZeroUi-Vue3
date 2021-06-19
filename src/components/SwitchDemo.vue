<template>
    <div>
        <Switch v-model:value="isChecked"/>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import Switch from "../lib/Switch.vue";

export default defineComponent({
    name: "SwitchDemo",
    components: {Switch},
    setup() {
        const isChecked = ref(true);
        return {isChecked};
    }
});
</script>

<style lang="scss" scoped>

</style>
