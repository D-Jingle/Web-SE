<template>
    <div class="container">
        <NewsList/>
    </div>
</template>

<script>
    import NewsList from '@/components/NewsList.vue'
    export default {
        name: "Admin",
        components:{
            NewsList
        },
        beforeRouteEnter (to, from, next) {
            console.log(to,from);
            console.log(sessionStorage.getItem('username'),sessionStorage.getItem('password'));
            if(sessionStorage.getItem('username') == 'admin' && sessionStorage.getItem('password') == '123456'){
                next();
            } else {
                next({ path: '/login' });
                console.log(to,from);
            }
        },

    }
</script>

<style scoped>

</style>