import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";

export interface params {
  offset: string;
  limit: string;
  tahun: string;
}

export interface kodeRek {
  rekening_id : number,
  kode_rekening: string,
  uraian_rekening: string,
  tahun_anggaran: number
}

export const getData = defineStore("data", () => {

  function getKodeRek(url, credentials: params) {
    ApiService.setHeader();
    console.log(credentials);
    return ApiService.getData(url, credentials)
      .then(({data}) => {
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }
  return { getKodeRek };
});
