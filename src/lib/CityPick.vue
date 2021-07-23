<template>
    <div class="citypickWrapper">
        <input :ref="inputRef" readonly="readonly" @focus="clickInput">
        <div class="container" v-show="show" :ref="selectRef">
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
import {defineComponent, PropType, ref, watch} from 'vue';
import useClickOutside from "./hooks/useClickOutside";

export default defineComponent({
    name: "CityPick",
    props: {
        cityData: {
            type: Object as PropType<Partial<CityData>>,
            required: true
        },
        // updateSelectedCity: {
        //     type: Function as PropType<(v: City) => void>,
        //     required: true
        // },
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
        const labelSource = ['ABCDE', 'FGHI', 'JKLMN', 'OPQRS', 'TUVW', 'XYZ'];

        let arr = ref<Partial<CityData>>({});

        watch(currentLabel, (val) => {
            (currentLabel.value.split('') as Array<keys>).forEach(item => {
                if (props.cityData [item]) {
                    arr.value[item] = props.cityData[item];
                }
            });
        }, {immediate: true});

        const isSelected = (k: string) => {
            if (k === currentLabel.value) {
                return 'isSelected';
            }
        };

        const selectCity = (name: string) => context.emit('update:value', name);

        const show = ref(true);

        const selectRef = ref<HTMLDivElement>();
        const inputRef = ref<HTMLInputElement>();

        const isClickOutside = useClickOutside(selectRef, inputRef);

        watch(isClickOutside, (val) => {
            console.log(1);
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
            arr
        };
    }
});
</script>

<style lang="scss" scoped>
.citypickWrapper {
    position: relative;

    .container {
        background: #ffffff;
        position: absolute;
        z-index: 9999;

        .label {
            display: flex;
            padding-bottom: 20px;
            padding-top: 10px;

            .labelLi {
                list-style: none;
                background: #f5f7fa;
                padding: 4px 8px;
                cursor: pointer;
                color: #666666;

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
