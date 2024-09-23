<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <!--
            `<router-link>`：
                这是 Vue Router 提供的用于导航的组件，相当于 HTML 中的 <a> 标签，但不会触发页面刷新。
                    它利用了 Vue Router 的功能，在不刷新页面的情况下实现路由跳转。
            `:to={ name : 'home'}`:
                `:to` 是 Vue 中的绑定语法，相当于 v-bind:to。它将一个 JavaScript 对象绑定到 to 属性上。
                `{ name: 'home' }` 是一个路由对象，指定了路由的名称（name: 'home'），这里表示跳转到名为 'home' 的路由。
                这个 name 对应的是在 router/index.js 中定义的路由。-->
            <router-link class="navbar-brand" :to="{ name: 'home' }">My Space</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page"
                            :to="{ name: 'home' }">首页</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'userlist' }">好友列表</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'userprofile' }">用户动态</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page"
                            :to="{ name: 'login' }">登录</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'register' }">注册</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
}
</script>

<style scoped></style>