<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <form class="d-flex">
                <button class="btn btn-outline-danger" type="submit" @click.prevent="logOut">X</button>
            </form>
        </div>
    </nav>
    <ul class="list-group">
        <li class="list-group-item"><span>Nombre: </span> {{user.name}}</li>
        <li class="list-group-item"><span>Apellido: </span> {{user.email}}</li>
    </ul>
</div>

</template>

<script>
var jwt = require('jsonwebtoken');
export default {
    data(){
        return{
            user : {}
        }
    },
    methods :{
        logOut(){
            localStorage.removeItem('jwt');
            this.$router.push('/')
        },
        getUserData(){
            let token = localStorage.getItem('jwt');
            let user = jwt.decode(token);
            this.user = user;
        }
    },
    created(){
        this.getUserData();
    }
}
</script>

<style scoped>
</style>