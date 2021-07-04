<demo>
常规用法
</demo>
<template>
    <Radio v-model:value="selectedValue" label="watermelon">西瓜</Radio>
    <Radio v-model:value="selectedValue" label="lemon">柠檬</Radio>
</template>

<script lang="ts">
import Radio from "../../lib/Radio.vue";
import {ref} from 'vue';

export default {
    components: {Radio},
    setup() {
        const selectedValue = ref('watermelon');
        return {selectedValue};
    }
};
</script>
