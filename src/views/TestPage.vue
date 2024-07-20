<!-- eslint-disable prettier/prettier -->
<template>
  <section>
    <h1>Table i Made for CRUD</h1>
    <form action="">
            <label for="" class="form-label mb-3">Masukkan text</label>
            <input type="text" v-model="text" class="form-control" placeholder="Masukkan Text"/>
            <label for="" class="form-label mb-3">Masukkan Angka</label>
            <input type="number" v-model="text" class="form-control" placeholder="Masukkan Text"/>
            <label for="" class="form-label mb-3">Masukkan Email</label>
            <input type="email" v-model="text" class="form-control" placeholder="Masukkan Text"/>
            <label for="" class="form-label mb-3">Masukkan Password</label>
            <input type="password" v-model="text" class="form-control" placeholder="Masukkan Text"/>
            <a href="#" class="btn btn-primary mt-3">Submit</a>
    </form>
    <h5>{{ tempats }}</h5>
    <h5>{{ tempat }}</h5>
  </section>
</template>

<script>
export default {};
</script>

<script setup>
import { ref } from "vue";
let text = ref("");
let tempats = ref([]);
let tempat = "";
let angka = "123450102";
function arsenal(angka) {
  for (let index = 0; index < angka.length; index++) {
    tempats.value.push(angka[index]);
    tempat = tempats.value.join(".");
    if(index > 4 && index < 7){
      tempats.value.push(angka[index]);
    }else if(index > 7){
      tempats.value.push(angka[index]);
    }
  }
}
arsenal(angka)

const resource = ref({})


</script>

<style>

</style>