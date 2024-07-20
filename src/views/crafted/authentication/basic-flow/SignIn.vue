<template>
  <!--begin::Wrapper-->
  <div
    class="au-body d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end px-12"
  >
    <!--begin::Form-->
    <div class="bg-body rounded-4 w-md-600px p-10">
      <div class="px-10 text-center mb-10">
        <img src="images/logo/logorsds_kars_jci.png" height="100" />
      </div>
      <div class="d-flex flex-center">
        <div class="w-md-400px">
          <VForm
            class="form w-100"
            id="kt_login_signin_form"
            @submit="onSubmitLogin"
            :validation-schema="login"
            :initial-values="{ nik: '', password: '' }"
          >
            <!--begin::Input group-->
            <div class="fv-row mb-8">
              <!--begin::Label-->
              <label class="form-label fs-6 fw-bolder text-primary"
                >NIP/NIPTT-PK/NIM</label
              >
              <!--end::Label-->

              <!--begin::Input-->
              <Field
                tabindex="1"
                class="form-control bg-control bg-transparent"
                type="text"
                name="nik"
                placeholder="NIP/NIPTT-PK/NIM"
                autocomplete="off"
              />
              <!--end::Input-->
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="nik" />
                </div>
              </div>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="fv-row mb-10">
              <!--begin::Wrapper-->
              <div class="d-flex flex-stack mb-2">
                <!--begin::Label-->
                <label class="form-label fw-bolder text-primary fs-6 mb-0"
                  >Sandi</label
                >
                <!--end::Label-->
              </div>
              <!--end::Wrapper-->

              <!--begin::Input-->
              <Field
                class="form-control bg-transparent"
                type="password"
                name="password"
                placeholder=""
                autocomplete="off"
              />
              <!--end::Input-->
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="password" />
                </div>
              </div>
            </div>
            <!--end::Input group-->
            <div class="fv-row mb-8">
              <!--begin::Label-->
              <label class="form-label fs-6 fw-bolder text-primary"
                >Tahun Anggaran</label
              >
              <Field
                name="year"
                as="select"
                class="form-control bg-transparent"
                placeholder="Pilih Tahun Anggaran"
                :value=yearNow
              >
                <option :value=yearNow-1>{{yearNow-1}}</option>
                <option :value=yearNow>{{yearNow}}</option>
                <option :value=yearNow+1>{{yearNow+1}}</option>
              </Field>
              <!--end::Label-->
            </div>
            <div class="d-flex flex-wrap gap-3 fs-base fw-semibold mb-8">
              <div></div>
              <!--begin::Link-->
              <div class="flex-container">
                <a
                  href="#"
                  class="link-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modalSandi"
                  >Lupa sandi?</a
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a
                  href="#"
                  class="link-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modalHelpdesk"
                  >Bantuan Lainnya?</a
                >
              </div>
              <!--end::Link-->
            </div>
            <!--begin::Actions-->
            <div class="text-center">
              <!--begin::Submit button-->
              <button
                tabindex="3"
                type="submit"
                ref="submitButton"
                id="kt_sign_in_submit"
                class="btn btn-lg btn-primary w-100 mb-5"
              >
                <span class="indicator-label"> Masuk </span>

                <span class="indicator-progress">
                  Mohon menunggu...
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
              </button>
              <!--end::Submit button-->
            </div>
            <!--end::Actions-->
          </VForm>
          <!--end::Form-->
        </div>
      </div>
      <div class="px-5 text-center">
        <div class="text-gray-600 fs-base text-center fw-semibold">
          <div class="text-dark order-2 order-md-1">
            <span class="text-gray-800 fw-semibold me-1"></span
            >&copy;
            <span class="text-gray-800"
              >Instalasi Teknologi Komunikasi dan Informasi & Bagian Perencanaan
              dan Evaluasi Anggaran,</span
            >
            <a
              href="https://rsudrsoetomo.jatimprov.go.id/"
              target="_blank"
              class="text-gray-800 text-hover-primary"
              ><b>RSUD Dr. Soetomo</b></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, reactive, ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import { useAuthStore, type User } from "@/stores/auth";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import * as Yup from "yup";
import JwtService from "@/core/services/JwtService";
export default defineComponent({
  name: "sign-in",
  components: {
    Field,
    VForm,
    ErrorMessage,
  },
  setup() {
    const store = useAuthStore();
    const router = useRouter();
    const submitButton = ref<HTMLButtonElement | null>(null);
    const d = new Date()
    const yearNow = d.getFullYear()
    //Create form validation object
    const login = Yup.object().shape({
      nik: Yup.string().required().label("NIK"),
      password: Yup.string().min(4).required().label("Password"),
      year: Yup.string().required().label("Year")
    });

    function saveYear(year) {
      return JwtService.saveYear(year)
    }

    //Form submit function
    const onSubmitLogin = async (values: any) => {
      values = values as User;
      // Clear existing errors
      store.logout();
      if (submitButton.value) {
        // eslint-disable-next-line
        submitButton.value!.disabled = true;
        // Activate indicator
        submitButton.value.setAttribute("data-kt-indicator", "on");
      }

      // Send login request
      await saveYear(values.year)
      await store.login(values);
      const error = Object.values(store.errors);

      if (error.length === 0) {
        Swal.fire({
          text: "Selamat, Anda telah sukses masuk!",
          icon: "success",
          buttonsStyling: false,
          showConfirmButton: false,
          heightAuto: false,
          timer: 1500,
        }).then(() => {
          // Go to page after successfully login
          router.push({ name: "dashboard" });
        });
      } else {
        Swal.fire({
          text: error[0] as string,
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Try again!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-danger",
          },
        }).then(() => {
          store.errors = {};
        });
      }

      //Deactivate indicator
      submitButton.value?.removeAttribute("data-kt-indicator");
      // eslint-disable-next-line
        submitButton.value!.disabled = false;
    };

    return {
      onSubmitLogin,
      login,
      submitButton,
      getAssetPath,
      yearNow
    };
  },
});
</script>
