<template>
    <div>
        <div class="dialog-overlay"></div>
        <div class="dialog-wrapper">
            <header>标题</header>
            <main>
                <p>one</p>
                <p>two</p>
            </main>
            <footer>
                <Button>ok</Button>
                <Button>cancel</Button>
            </footer>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Button from "./Button.vue";

export default defineComponent({
    name: "Dialog",
    components: {Button},
    setup() {
        return {};
    }
});
</script>

<style lang="scss" scoped>

</style>
