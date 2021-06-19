<template>
    <div>
        <Switch v-model:value="isChecked" :disabled="false"/>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import Switch from "../lib/Switch.vue";

export default defineComponent({
    name: "SwitchDemo",
    components: {Switch},
    setup() {
        const isChecked = ref(false);
        return {isChecked};
    }
});
</script>

<style lang="scss" scoped>

</style>
