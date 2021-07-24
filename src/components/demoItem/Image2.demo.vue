<demo>
放大展示其他图片
</demo>
<template>
    <ImageModal modalImgSrc=../../src/assets/lights.jpg>
        <img src=../../assets/img_snow.jpg alt=""/>
    </ImageModal>
</template>

<script lang="ts">
import ImageModal from "../../lib/ImageModal.vue";

export default {
    components: {ImageModal},
    setup() {
        return {};
    }
};
</script>
