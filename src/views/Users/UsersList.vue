<template>
    <div class="wrapper">
        <ul>
            <li><router-link to="/users/1">user 1</router-link></li>
            <li><router-link to="/users/2">user 2</router-link></li>
            <li><router-link to="/users/3">user 3</router-link></li>
        </ul>
        <button @click="addUser">Add User</button>
    </div>
</template>

<script>
    export default {
        name: "users-list",
        methods: {
            addUser(){
                this.$router.push({ name: 'add-user'})
            }
        }
    }
</script>