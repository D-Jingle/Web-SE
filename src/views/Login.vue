<template>
    <div class="container">
        <LoginCom/>
    </div>
</template>

<script>
    import LoginCom from '@/components/Login.vue'
    export default {
        name: "Login",
        components:{
            LoginCom
        },
        beforeRouteEnter (to, from, next) {
            console.log(to,from);
            console.log(sessionStorage.getItem('username'),sessionStorage.getItem('password'));
            if(sessionStorage.getItem('username') == 'admin' && sessionStorage.getItem('password') == '123456'){
                next({ path: '/Admin' });
                console.log(to,from);
            } else {
                next();
            }
        },
    }
</script>

<style scoped>

</style>