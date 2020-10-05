<template>
<div id="giris">
    <h1>Giris sayfasi</h1>
    <h1>Paylaşımlar</h1>
    <div class="container">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <ul class="list-group">
                    <li class="list-group-item list-group-item-primary" v-for="veri in VeriGetir" :key="veri.id">{{veri.ad}} - {{veri.yazi}}</li>
                </ul>
            </div>
            <div class="col-4"></div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex';
export default {
    name: "Giris",
    computed: {
        ...mapGetters(['VeriGetir']),
    },
};
</script>
