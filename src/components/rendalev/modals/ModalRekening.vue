<template>
  <!--begin::Modal - New Card-->
  <div
    class="modal fade "
    ref="newCardModalRef"
    id="kt_modal_new_card"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header">
          <!--begin::Modal title-->
          <h3>Tambah Rekening</h3>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg
                :src="getAssetPath('media/icons/duotune/arrows/arr061.svg')"
              />
            </span>
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->

        <!--begin::Modal body-->
        <div class="modal-body scroll-y">
          <div
            class="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6"
          >
            <!--begin::Icon-->
            <!--begin::Svg Icon | path: icons/duotune/general/gen044.svg-->
            <span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  opacity="0.3"
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="10"
                  fill="black"
                />
                <rect
                  x="11"
                  y="14"
                  width="7"
                  height="2"
                  rx="1"
                  transform="rotate(-90 11 14)"
                  fill="black"
                />
                <rect
                  x="11"
                  y="17"
                  width="2"
                  height="2"
                  rx="1"
                  transform="rotate(-90 11 17)"
                  fill="black"
                />
              </svg>
            </span>
            <!--end::Svg Icon-->
            <!--end::Icon-->
            <!--begin::Wrapper-->
            <div class="d-flex flex-stack flex-grow-1">
              <!--begin::Content-->
              <div class="fw-bold">
                <h4 class="text-gray-900 fw-bolder">Perhatian!</h4>
                <div class="fs-6 text-gray-700">
                  Kolom pengisian dengan tanda bintang *) berwarna merah adalah
                  wajib diisi.
                </div>
              </div>
              <!--end::Content-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--begin::Form-->
          <div class="col-xl-12" disabled>
                <label for="uraian_rekening" class="form-label"
                  >Tahun Anggaran <span class="text-danger">*</span></label
                >
                <div class="col">
                  <Field disabled
                    tabindex="2"
                    type="text"
                    name="tahun_anggaran"
                    :value="tahun"
                    v-model="tahun"
                    placeholder="Keterangan Uraian"
                    class="form-control bg-control bg-transparent col-6"
                  />
                </div>
              </div>
          <VForm
            id="kt_modal_new_card_form"
            class="form"
            @submit="submit"
            :validation-schema="validationSchema"
          >
            <div class="row gy-5 g-xl-8 mb-10 mt-1">
              <div class="col-xl-12" disabled hidden>
                <label for="uraian_rekening" class="form-label"
                  >Tahun Anggaran <span class="text-danger">*</span></label
                >
                <div class="col">
                  <Field disabled
                    tabindex="2"
                    type="text"
                    name="tahun_anggaran"
                    :value="tahun"
                    v-model="tahun"
                    placeholder="Keterangan Uraian"
                    class="form-control bg-control bg-transparent col-6"
                  />
                </div>
              </div>
              <div class="col-xl-4"></div>
              <div class="col-xl-12">
                <label for="basic-url" class="form-label"
                  >Kode Rekening <span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <Field
                    tabindex="1"
                    class="form-control bg-control bg-transparent col-6"
                    type="number"
                    name="kode_rekening"
                    placeholder="Masukkan Kode Rekening"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div class="col-xl-12">
                <label for="uraian_rekening" class="form-label"
                  >Uraian <span class="text-danger">*</span></label
                >
                <div class="col">
                  <Field
                    tabindex="2"
                    type="text"
                    name="uraian_rekening"
                    placeholder="Keterangan Uraian"
                    class="form-control bg-control bg-transparent col-6"
                  />
                </div>
              </div>
              <div class="col-xl-4"></div>

              <div class="col-xl-12" hidden>
                <label for="uraian_rekening" class="form-label"
                  >Pemakai <span class="text-danger">*</span></label
                >
                <div class="col">
                  <Field
                    tabindex="2"
                    type="number"
                    name="createlogin_pemakai"
                    :value="pemakai"
                    placeholder="Keterangan Uraian"
                    class="form-control bg-control bg-transparent col-6"
                  />
                </div>
              </div>
            </div>
            <!--begin::Actions-->
            <div class="modal-footer">
              <button
                type="reset"
                id="kt_modal_new_card_cancel"
                data-bs-dismiss="modal"
                class="btn btn-light me-3"
              >
                Tutup
              </button>

              <button
                ref="submitButtonRef"
                type="submit"
                id="kt_modal_new_card_submit"
                class="btn btn-danger"
              >
                <span class="indicator-label"> Simpan </span>
                <span class="indicator-progress">
                  Please wait...
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
              </button>
            </div>
            <!--end::Actions-->
          </VForm>
          <!--end::Form-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - New Card-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref, defineEmits, nextTick } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import Swal from "sweetalert2";
import { hideModal } from "@/core/helpers/dom";
import * as Yup from "yup";
import { useStoreData, type kodeRek } from "@/stores/storeData";
import JwtService from "@/core/services/JwtService";

interface CardData {
  kode_rekening: string;
  uraian_rekening: string;
  tahun_anggaran: string;
  createlogin_pemakai: number;
}

export default defineComponent({
  name: "new-sdm-belanja",
  
  components: {
    Field,
    VForm,
  },

  setup(props, context) {
    const emit = defineEmits(['created'])
    
    const pemakai = JwtService.getPemakai();
    const tahun = JwtService.getYear();
    const store = useStoreData();
    const submitButtonRef = ref<null | HTMLButtonElement>(null);
    const newCardModalRef = ref<null | HTMLElement>(null);

    const belanjaData = ref<CardData>({
      kode_rekening: "",
      uraian_rekening: "",
      tahun_anggaran: "",
      createlogin_pemakai: 0,
    });

    const validationSchema = Yup.object().shape({
      kode_rekening: Yup.string().required().label("Program"),
      uraian_rekening: Yup.string().required().label("Kegiatan"),
    });
    const handleChange = () =>{
        context.emit("handleChange")
      }
    const submit = async (values: any, {resetForm}) => {
      values = values as kodeRek;
      if (!submitButtonRef.value) {
        return;
      }
      //Disable button
      submitButtonRef.value.disabled = true;
      // Activate indicator
      submitButtonRef.value.setAttribute("data-kt-indicator", "on");
      await store.postKodeRek(values);
      handleChange()
      resetForm()
      setTimeout(() => {
        if (submitButtonRef.value) {
          submitButtonRef.value.disabled = false;

          submitButtonRef.value?.removeAttribute("data-kt-indicator");
        }

        Swal.fire({
          text: "Data telah ditambahkan!",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: {
            confirmButton: "btn btn-primary",
          },
        }).then(() => {
          hideModal(newCardModalRef.value); 
        })
        
      }, 500);
    };

    return {
      tahun,
      pemakai,
      belanjaData,
      validationSchema,
      submit,
      submitButtonRef,
      newCardModalRef,
      getAssetPath,
      handleChange
    };
  },
});
</script>
