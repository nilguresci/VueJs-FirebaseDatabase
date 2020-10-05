<template>
<div id="app">
    <div id="nav">
        <router-link to="/">
            <button type="button" class="btn btn-outline-primary">Giris</button>
        </router-link>
        <router-link to="/veriekle">
            <button type="button" class="btn btn-outline-success">Veri Ekle</button>
        </router-link>
        <router-link to="/verisil"><button type="button" class="btn btn-outline-danger">Veri Sil</button></router-link>
        <router-link to="/guncelle"><button type="button" class="btn btn-outline-warning">Güncelle</button></router-link>
    </div>
    <router-view />
</div>
</template>

<script>
export default {
    name: "App",
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

.btn {
    margin-left: 5px;
    margin-right: 5px;
}
</style>
