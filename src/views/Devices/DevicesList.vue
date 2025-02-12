<template>
    <div class="wrapper">
        <ul>
            <li><router-link to="/devices/1">device 1</router-link></li>
            <li><router-link to="/devices/2">device 2</router-link></li>
            <li><router-link to="/devices/3">device 3</router-link></li>
        </ul>
        <button @click="addDevice">Add Device</button>
    </div>
</template>

<script>
    export default {
        name: "devices-list",
        methods: {
            addDevice(){
                this.$router.push({ name: 'add-device'})
            }
        }
    }
</script>