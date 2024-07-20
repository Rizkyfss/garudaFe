import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";

export interface User {
  nik: string;
  password: string;
}

export const useAuthStore = defineStore("auth", () => {
  const errors = ref({});
  const user = ref<User>({} as User);

  function setAuth(authUser: User) {
    user.value = authUser;
    errors.value = {};
  }
  function setError(error: any) {
    errors.value = { ...error };
  }
  function login(credentials: User) {
    return ApiService.post("login", credentials)
      .then((response)=>{
        JwtService.saveToken(response.data)
      })
      .then(({ data }) => {
        setAuth(data);
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }
});
