<template>
<div id="veriGuncelle">
    <h1>Veri Güncelleme Sayfasi
        <div class="container">
            <div class="row">
                <div class="col-4"></div>
                <div class="col-4">
                    <form @submit.prevent="VeriGuncelle">
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Adınızı giriniz</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nil" v-model="veri.ad">
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Kategori</label>
                            <select class="form-control" id="exampleFormControlSelect1" v-model="veri.kategori">
                                <option>Bilim</option>
                                <option>İlişkiler</option>
                                <option>Kitaplar</option>
                                <option>Film/Dizi</option>
                                <option>Üniversite</option>
                                <option>Moda</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect2">Birden Fazla Kategori</label>
                            <select multiple class="form-control" id="exampleFormControlSelect2" v-model="veri.yiyecek">
                                <option>Brokoli</option>
                                <option>Ayran</option>
                                <option>Yoğurt</option>
                                <option>Pizza</option>
                                <option>Hamburger</option>
                                <option>Patates</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Yazınızı Yazın</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="veri.yazi"></textarea>
                        </div>
                        <button type="submit" class="btn btn-warning btn-lg btn-block">Güncelle</button>
                    </form>

                </div>
                <div class=" col-4">
                </div>
            </div>
        </div>
    </h1>
</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex';
export default {
    name: 'VeriGuncelle',
    data() {
        return {
            id: "",
            veri: {},
        };
    },
    computed: {
        ...mapGetters(['VeriGetir']),
    },
    created() {
        this.id = this.$route.params.id;
        try {
            this.veri = this.VeriGetir[this.id];
        } catch (err) {
            alert(err);
        }
    },
    methods: {
        ...mapActions(['veriGuncelle']),
        VeriGuncelle() {
            this.veriGuncelle(this.veri);
            alert('güncellendi');
            this.$router.replace(`/guncelle`);
        },
    },

};
</script>
