<template>
    <div class="citypickWrapper">
        <input class="input" ref="inputRef" v-model="currentCity" readonly="readonly" @focus="clickInput"/>
        <div class="container" v-show="show" ref="selectRef">
            <ul class="label p10">
                <li class="labelLi" v-for="item in labelSource" :class="{isSelected:isSelected(item)}" :key="item" @click="selectLabel(item)">{{ item }}</li>
            </ul>
            <ul class="p10">
                <li v-for="item in currentLabel.split('')" class="mb5">
                    <ul class="pb2" v-if="arr[item]">
                        <li class="df">
                            <span class="blueText">{{ item }}</span>
                            <div>
                                <span class="cityName" v-for="it in arr[item]" @click="selectCity(it.name)">{{ it.name }}</span>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, ref, watch, watchEffect} from 'vue';
import useClickOutside from "./hooks/useClickOutside";
import Input from "./Input.vue";

export default defineComponent({
    name: "CityPick",
    components: {Input},
    props: {
        cityData: {
            type: Object as PropType<Partial<CityData>>,
            required: true
        },
        selectedCity: {
            type: String
        },
        readOnly: {
            type: Boolean,
            default: true
        }
    },
    setup(props, context) {
        const currentLabel = ref('ABCDE');
        const selectLabel = (i: string) => {
            currentLabel.value = i;
        };
        const currentCity = ref();
        const labelSource = ['ABCDE', 'FGHI', 'JKLMN', 'OPQRS', 'TUVW', 'XYZ'];

        let arr = ref<Partial<CityData>>({});

        watch(currentLabel, (val) => {
            (currentLabel.value.split('') as Array<keys>).forEach(item => {
                if (props.cityData [item]) {
                    arr.value[item] = props.cityData[item];
                }
            });
        }, {immediate: true});

        watchEffect(() => {
            currentCity.value = props.selectedCity;
        });

        const isSelected = (k: string) => {
            if (k === currentLabel.value) {
                return 'isSelected';
            }
        };

        const selectCity = (name: string) => context.emit('update:selectedCity', name);

        const show = ref(false);

        const selectRef = ref<HTMLDivElement>();
        const inputRef = ref<HTMLInputElement>();

        const isClickOutside = useClickOutside(selectRef, inputRef);

        watch(isClickOutside, (val) => {
            show.value = !val;
        });

        const clickInput = () => {
            if (show.value) return;
            show.value = !show.value;
        };
        return {
            inputRef,
            selectRef,
            isSelected,
            selectCity,
            clickInput,
            show,
            labelSource,
            selectLabel,
            currentLabel,
            arr,
            currentCity,
        };
    }
});
</script>

<style lang="scss" scoped>
@import "./src/style/theme.scss";

.input {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    width: 150px;

    &:hover {
        border: 1px solid #bdbec1;
        transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
        transition-property: border-color;
        transition-duration: 0.2s;
        transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
        transition-delay: 0s;
        cursor: pointer;
    }

    &:focus {
        outline: none;
        border-color: $o-type-primary;
    }
}

.citypickWrapper {
    position: relative;
    display: inline-block;
    margin-left: 10px;

    .container {
        background: #ffffff;
        position: absolute;
        z-index: 9999;
        max-width: 500px;
        height: 300px;
        overflow: auto;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        padding-left: 10px;
        padding-right: 15px;

        .label {
            display: flex;
            padding-bottom: 20px;
            padding-top: 10px;
            border-radius: 4px;

            .labelLi {
                list-style: none;
                background: #f5f7fa;
                padding: 4px 8px;
                cursor: pointer;
                color: #666666;

                &:first-child {
                    border-radius: 5px 0 0 5px;
                }

                &:last-child {
                    border-radius: 0 5px 5px 0;
                }

                &.isSelected {
                    color: #409EFF;
                    background: #F1F8FF;
                    transition: all .3s;
                }
            }
        }

    }
}

.mb5 {
    margin-bottom: 8px;
}

.df {
    display: flex;
    align-items: flex-start;
}

.pb2 {
    padding-bottom: 10px;
}

.pl0 {
    padding-left: 0;
}

.cityName {
    white-space: nowrap;
    color: #777777;
    padding: 4px 16px;
    margin-bottom: 8px;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    transition: all .3s;

    &:hover {
        background: #F1F8FF;
        color: #409EFF;
    }
}


.blueText {
    color: #409EFF;
    margin-right: 5px;
    padding: 4px;
}
</style>
