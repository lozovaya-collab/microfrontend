<template>
    <div>
        <nav>
            <nav>
                <router-link to="/start/dashboard">Dashboard</router-link> |
                <router-link to="/start/status">Status</router-link> |
                <router-link to="/start/services">Services</router-link>
            </nav>
        </nav>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: "devices-view"
    }
</script>

<style lang="scss" scoped>

</style>