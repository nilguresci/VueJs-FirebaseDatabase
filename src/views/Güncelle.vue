<template>
<div id="Guncelle">
    <h1>Güncelleme sayfasi</h1>
    <div class="container">
        <div class="row">
            <div class="col" v-for="veri in VeriGetir" :key="veri.id">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">{{veri.ad}}</h5>
                        <p class="card-text">{{veri.yazi}}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{{veri.kategori}}</li>
                        <li class="list-group-item">Yiyecekler
                            <ul class="list-group">
                                <li class="list-group-item" v-for="yiyecek in veri.yiyecek" :key="yiyecek">{{yiyecek}}</li>
                            </ul>
                        </li>
                    </ul>
                    <div class="card-body">
                        <button type="button" class="btn btn-warning btn-lg btn-block" @click="Guncelle(veri.id)">Güncelle</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex';

export default {
    name: "Guncelle",
    computed: {
        ...mapGetters(['VeriGetir']),
    },
    methods: {
        Guncelle(id) {
            this.$router.replace(`/guncelle/${id}`);
        },
    },
};
</script>
