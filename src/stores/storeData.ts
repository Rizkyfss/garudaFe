import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";

export interface kodeRek {
  kodeRek: Number;
  uraian: string;
}

export const useStoreData = defineStore("data", () => {
  const errors = ref({});
  const data = ref<kodeRek>({} as kodeRek);
  const dataField = ref({})
  
  function setError(error: any) {
    errors.value = { ...error };
  }
  function postKodeRek(credentials: kodeRek) {
    return ApiService.post("master-rekening/create", credentials)
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        setError(response.response.data.result);
      });
  }
  function updateKodeRek(id, credentials: kodeRek){
    return ApiService.update(`master-rekening/update/${id}`, credentials)
  }

  return {
    errors,
    data,
    postKodeRek,
    updateKodeRek
  }
});
