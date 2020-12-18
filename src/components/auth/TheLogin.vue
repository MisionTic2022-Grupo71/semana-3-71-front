<template>
<div class="container mt-5">
    <form>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" 
        id="exampleInputEmail1" aria-describedby="emailHelp"
        v-model="login.email">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" 
        id="exampleInputPassword1"
        v-model="login.password">
    </div>
    <button type="submit"
    class="btn btn-primary"
    @click.prevent="loginUser">Submit</button>
    </form>
    <pre>
        {{login}}
    </pre>
</div>
</template>

<script>
import swal from 'sweetalert';
export default {
    data(){
        return{
            login :{
                email:'',
                password:''
            }
        }
    },
    methods:{
        async loginUser(){
            try{
                let response = await this.$http.post('/api/auth/signin', this.login)
                console.log(response);
                let token = response.data.accessToken;
                localStorage.setItem('jwt', token);
                if(token){
                    this.$router.push('/home');
                }
            }catch(e){

            }
        }
    }
}
</script>