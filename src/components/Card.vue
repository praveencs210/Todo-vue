<template>
    <div class="container">
        <div class="row">
            <div class="col-xl-4 col-lg-6" v-for="todo in todos">
                <!-- Card -->
                <div class="card card-stats shadow-lg">
                    <!-- Card body -->
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <span class="h2 font-weight-bold mb-0">{{todo.title}}</span>
                            </div>
                            <div class="col-auto">
                                <div class="icon icon-shape bg-gradient-primary text-white rounded-circle shadow">
                                    {{todo.userId}}
                                </div>
                            </div>
                        </div>
                        <div class="dropdown-divider"></div>
                        <p class="mt-3 mb-0 text-sm card-status">
                            <span class="font-weight-600 mr-2"><i class="fa fa-arrow-up"></i>Completed</span>
                            <span v-if="todo.completed == true" class="badge badge-success">{{todo.completed}}</span>
                            <span v-if="todo.completed == false" class="badge badge-danger">{{todo.completed}}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "Card",
        computed: mapState(['todos']),
        created() {
            this.$store.dispatch('loadTodos');
        }
    }
</script>

<style lang="scss" scoped>
    .card {
        margin-bottom: 1rem;

        .card-status {
            display: flex;
            justify-content: space-between;
        }
    }
</style>