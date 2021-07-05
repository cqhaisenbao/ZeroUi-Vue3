<template>
    <div class="doc-layout">
        <Topnav :toggleMenuButtonVisible="true" class="nav"/>
        <div class="content">
            <aside v-if="menuVisible">
                <h3>文档</h3>
                <ol>
                    <li>
                        <router-link to="/doc/intro">介绍</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/install">安装</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/get-started">开始使用</router-link>
                    </li>
                </ol>
                <h3>组件列表</h3>
                <ol class="components">
                    <li>
                        <router-link to="/doc/switch">Switch 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/card">Card 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/icon">Icon 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/input">Input 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/loading">Loading 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/message">Message 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/collapse">Collapse 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/spread">Spread 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/radio">Radio 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dropdown">Dropdown 组件</router-link>
                    </li>
                </ol>
            </aside>
            <main>
                <router-view/>
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import {inject, Ref} from "vue";

export default {
    components: {Topnav},
    setup() {
        const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
        return {menuVisible};
    },
};
</script>

<style lang="scss" scoped>
@import "./src/style/theme.scss";

$aside-index: 0;
.doc-layout ::v-deep(.topnav) {
    box-shadow: 0 2px 8px #f0f1f2;
}

.doc-layout {
    > .nav {
        height: 60px;
        position: fixed;
        width: 100%;
        z-index: 10;
        background: #ffffff;
        color: #333;
    }

    > .content {
        padding-top: 60px;
        padding-left: 260px;
        @media (max-width: 500px) {
            padding-left: 0;
        }
    }
}

.content {
    display: flex;

    > aside {
        width: 260px;

        > ol {
            &.components {
                padding-bottom: 50px;
            }

            > li {
                &:hover {
                    background: $o-type-info-light;
                }
            }
        }
    }

    > main {
        flex-grow: 1;
        padding: 16px;
        background: white;
    }
}

aside {
    width: 260px;
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    top: 60px;
    left: 0;
    bottom: 0;
    border-right: 1px solid #e8e8e8;
    z-index: 10;
    background: #fff;

    > h3 {
        margin-bottom: 4px;
        margin-top: 3px;
        padding: 0 16px;
    }

    > ol {
        > li {
            > a {
                display: block;
                padding: 10px 16px;
                text-decoration: none;
            }

            .router-link-active {
                border-left: 4px solid #3f51b5;
                background: #323232;
                color: white;
                font-weight: 500;
                transition: all .3s linear;
            }
        }
    }
}

main {
    overflow: auto;
}
</style>
