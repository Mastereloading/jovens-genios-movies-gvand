<template>
    <div id="login">
        <div class="card">
            <h2>Welcome to MJG Movies</h2>
            <div class="card-content">
                <div class="card-content-area">
                    <label>Username</label>
                    <input type="text" id="user">
                </div>
            </div>
            <div class="card-footer">
                <v-btn @click="login" class="submit">Login</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'LoginView',
        methods: {
            login() {
            this.$router.push("/home");
            },
        }
    })
</script>

<style scoped>
    body {
        padding: 0;
        margin: 0;
    }
    #login {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    .card {
        background-color: rgba(32, 32, 32);
        padding: 40px;
        border-radius: 3px;
        width:280px;
    }
    h2 {
        text-align: center;
        padding-bottom: 30px;
        color: #fff;
    }
    .card-content label {
    color: #fff;
    font-size: 12px;
    opacity: 0.8;
    }
    .card-content-area {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    }
    .card-content-area input {
    margin-top: 10px;
    padding:0 5px;
    background-color: transparent;
    border:none;
    border-bottom: 1px solid #e1e1e1;
    outline: none;
    color: #fff;
    }
    .card-footer {
    display: flex;
    flex-direction: column;
    }
    .card-footer .submit{
    width: 100%;
    height: 40px;
    background-color: yellow;
    border:none;
    color:#323232;
    margin: 10px 0;
    }
</style>