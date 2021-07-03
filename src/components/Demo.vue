<template>
    <div class="demo">
        <h2>{{ component.__sourceCodeTitle }} </h2>
        <div class="demo-component">
            <component :is="component"/>
        </div>
        <div class="demo-actions">
            <Button @click="hideCode" v-if="codeVisible">隐藏代码</Button>
            <Button @click="showCode" v-else>查看代码</Button>
        </div>
            <Spread :visible="codeVisible">
                <pre class="language-html" v-html="html"></pre>
            </Spread>
    </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import Spread from "../lib/Spread.vue";
import 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import {computed, ref} from 'vue';

const Prism = (window as any).Prism;
export default {
    components: {Button, Spread},
    props: {
        component: Object
    },
    setup(props) {
        const html = computed(() => {
            return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
        });
        const codeVisible = ref(false);
        const showCode = () => {codeVisible.value = true;};
        const hideCode = () => {codeVisible.value = false;};
        return {Prism, Button, html, codeVisible, showCode, hideCode};
    }
};
</script>
<style lang="scss" scoped>
@import "./src/style/theme.scss";

.demo {
    border: 1px solid $o-border-color;
    margin: 16px 0 32px;

    > h2 {
        font-size: 20px;
        padding: 8px 16px;
        border-bottom: 1px solid $o-border-color;
    }

    &-component {
        padding: 16px;
    }

    &-actions {
        padding: 8px 16px;
        border-top: 1px dashed $o-border-color;
    }

    &-code {
        padding: 8px 16px;
        border-top: 1px dashed $o-border-color;

        > pre {
            line-height: 1.1;
            font-family: Consolas, 'Courier New', Courier, monospace;
            margin: 0;
        }
    }
}
</style>
