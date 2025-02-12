<template>
    <router-view />
</template>

<script>
    export default {
        name: "devices-view"
    }
</script>

<style>
.wrapper {
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
ul {
    padding: 0;
    list-style: none;
}

button { 
    cursor: pointer;
    outline: none;
    border: 2px solid #42b983;
    font-size: 16px;
    font-weight: 600;
    color: #42b983;
    background: none;
    background-color: white;
}

button:hover { 
    color: white;
    background-color: #42b983;
}


ul > li {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>