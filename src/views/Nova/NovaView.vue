<template>
    <div id="react-app"></div>
</template>

<script>
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
    name: 'nova-view',
    setup() {
        onMounted(async () => {
        const { AppWrapper } = await import('AppWrapper/AppWrapper');
        // Рендеринг React-приложения
        AppWrapper(document.getElementById('react-app'));
        });
    },
});
</script>

<style lang="scss" scoped>

</style>