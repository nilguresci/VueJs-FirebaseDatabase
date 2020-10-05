<template>
<div id="veriSil">
    <h1>Veri silme sayfasi</h1>
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
                        <button type="button" class="btn btn-danger btn-lg btn-block" @click="Sil(veri.id)">Sil</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex';

export default {
    name: "Sil",
    computed: {
        ...mapGetters(['VeriGetir']),
    },
    methods: {
        ...mapActions(['veriSil']),
        Sil(id) {
            this.veriSil(id);
            alert(`${id} li kart silindi`);
        },
    },
};
</script>
