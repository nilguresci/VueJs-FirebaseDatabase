import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from "firebase";

var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
};

let app = Firebase.initializeApp(firebaseConfig);
let db = app.database();
const Veriler = db.ref("Veriler");

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        Veris: {}
    },
    getters: {
        VeriGetir(state) {
            Veriler.on('value', snapshot => {
                state.Veris = snapshot.val();
            })
            return state.Veris;
        }
    },
    mutations: {
        veriEkleme(state, veri) {
            const id = Veriler.push().key; //id veriyor
            veri.id = id;
            Veriler.child(id).set(veri);
        },
        veriSil(state, id) {
            Veriler.child(id).remove();
        },
        veriGuncelle(state, veri) {
            Veriler.child(veri.id).update(veri);
        }
    },
    actions: {
        veriEkle({ commit }, veri) {
            commit('veriEkleme', veri)
        },
        veriSil({ commit }, id) {
            commit('veriSil', id)
        },
        veriGuncelle({ commit }, veri) {
            commit('veriGuncelle', veri)
        }
    },
    modules: {}
})