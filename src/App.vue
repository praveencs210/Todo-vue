<template>
    <div id="app">
        <h1 class="mt-5">Todos</h1>
        <div class="dropdown-divider mb-5"></div>
        <Card></Card>
        <router-view/>
    </div>
</template>

<script>
    import Card from "./components/Card";

    export default {
        components: {Card}
    }
</script>

<style lang="scss">
    @import 'assets/argon.min.css';

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    ::-webkit-scrollbar {
        width: 0.8rem;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: #c1c1c1;
        border-radius: 0.8rem;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #7068e4;
    }
</style>
