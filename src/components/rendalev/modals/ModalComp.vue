<template>
  <!--begin::Modal - New Card-->
  <div
    class="modal fade"
    ref="newCardModalRef"
    id="kt_modal_new_card"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-fullscreen">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header">
          <!--begin::Modal title-->
          <h3>Tambah Belanja</h3>
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
          <!--end::Notice-->
          <div class="separator my-10"></div>

          <!--begin::Form-->
          <VForm
            id="kt_modal_new_card_form"
            class="form"
            @submit="submit"
            :validation-schema="validationSchema"
          >
            <div class="row gy-5 g-xl-8 mb-10">
              <div class="col-xl-4">
                <label for="basic-url" class="form-label"
                  >Program <span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <select
                    class="form-select"
                    data-control="select2"
                    data-dropdown-parent="#modalTambah"
                    data-placeholder="Pilih Program"
                    data-allow-clear="true"
                  >
                    <option hidden selected>Pilih Program</option>
                    <option value="1">A</option>
                    <option value="2">B</option>
                  </select>
                </div>
              </div>
              <div class="col-xl-4">
                <label for="basic-url" class="form-label"
                  >Kegiatan <span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <select
                    class="form-select"
                    data-control="select2"
                    data-dropdown-parent="#modalTambah"
                    data-placeholder="Pilih Kegiatan"
                    data-allow-clear="true"
                  >
                    <option hidden selected>Pilih Kegiatan</option>
                    <option value="1">C</option>
                    <option value="2">D</option>
                  </select>
                </div>
              </div>
              <div class="col-xl-4">
                <label for="basic-url" class="form-label"
                  >Kode Rekening <span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <select
                    class="form-select"
                    data-control="select2"
                    data-dropdown-parent="#modalTambah"
                    data-placeholder="Pilih Kode Rekening"
                    data-allow-clear="true"
                  >
                    <option hidden selected>Kode Rekening</option>
                    <option value="1">E</option>
                    <option value="2">F</option>
                  </select>
                </div>
              </div>
            </div>

            <!--Line 2-->
            <div class="mb-10">
              <label for="basic-url" class="form-label"
                >Rincian <span class="text-danger">*</span></label
              >
              <div @click="showRincian = ''" class="row gy-5 g-xl-8">
                <div class="col-xl-6">
                  <!--begin::Option-->
                  <input
                    type="radio"
                    class="btn-check"
                    name="sdm-rincian"
                    id="sdm-rincian1"
                    value="1"
                  />
                  <label
                    class="btn btn-outline btn-outline-secondary btn-active-primary p-3 d-flex align-items-center"
                    for="sdm-rincian1"
                  >
                    <span class="d-block fw-semibold text-start">
                      <span class="text-dark d-block">Ada</span>
                    </span>
                  </label>
                  <!--end::Option-->
                </div>
                <div @click="showRincian = '1'" class="col-xl-6">
                  <!--begin::Option-->
                  <input
                    type="radio"
                    class="btn-check"
                    name="sdm-rincian"
                    id="sdm-rincian2"
                    value="0"
                    v-model="showRincian"
                  />
                  <label
                    class="btn btn-outline btn-outline-secondary btn-active-primary p-3 d-flex align-items-center"
                    for="sdm-rincian2"
                  >
                    <span class="d-block fw-semibold text-start">
                      <span class="text-dark d-block"> Tidak Ada </span>
                    </span>
                  </label>
                  <!--end::Option-->
                </div>
              </div>
            </div>

            <!-- option 3-->
            <div
              class="notice mb-10 border-secondary border rounded p-6"
              v-if="showRincian.length !== 0"
            >
              <div class="row gy-5 g-xl-8 mb-10">
                <div class="col-xl-6">
                  <label for="basic-url" class="form-label"
                    >Volume <span class="text-danger">*</span></label
                  >
                  <div class="input-group">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-xl-6">
                  <label for="basic-url" class="form-label"
                    >Satuan <span class="text-danger">*</span></label
                  >
                  <div class="input-group">
                    <select
                      class="form-select"
                      data-control="select2"
                      data-dropdown-parent="#modalTambah"
                      data-placeholder="Pilih Satuan"
                      data-allow-clear="true"
                    >
                      <option></option>
                      <option value="1">C</option>
                      <option value="2">D</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row gy-5 g-xl-8 mb-10">
                <div class="col-xl-6">
                  <label for="basic-url" class="form-label"
                    >Harga Satuan <span class="text-danger">*</span></label
                  >
                  <div class="input-group">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-xl-6">
                  <label for="basic-url" class="form-label"
                    >Jumlah <span class="text-danger">*</span></label
                  >
                  <div class="input-group">
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>

              <div>
                <label for="basic-url" class="form-label">Keterangan</label>
                <div class="input-group">
                  <textarea class="form-control"></textarea>
                </div>
              </div>
            </div>
            <div
              class="notice mb-10 border-secondary border rounded p-6"
              v-if="showRincian.length == 0"
            >
              <div class="row gy-5 g-xl-8 mb-10">
                <div class="col-xl-4">
                  <label for="basic-url" class="form-label"
                    >Isi Rincian <span class="text-danger">*</span></label
                  >
                  <div class="input-group">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-xl-4">
                  <label for="basic-url" class="form-label"
                    >Volume <span class="text-danger">*</span></label
                  >
                  <div class="input-group">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-xl-4">
                  <label for="basic-url" class="form-label"
                    >Satuan <span class="text-danger">*</span></label
                  >
                  <div class="input-group">
                    <select
                      class="form-select"
                      data-control="select2"
                      data-dropdown-parent="#modalTambah"
                      data-placeholder="Pilih Satuan"
                      data-allow-clear="true"
                    >
                      <option></option>
                      <option value="1">C</option>
                      <option value="2">D</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row gy-5 g-xl-8 mb-10">
                <div class="col-xl-6">
                  <label for="basic-url" class="form-label"
                    >Harga Satuan <span class="text-danger">*</span></label
                  >
                  <div class="input-group">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-xl-6">
                  <label for="basic-url" class="form-label"
                    >Jumlah <span class="text-danger">*</span></label
                  >
                  <div class="input-group">
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>

              <div>
                <label for="basic-url" class="form-label">Keterangan</label>
                <div class="input-group">
                  <textarea class="form-control"></textarea>
                </div>
              </div>
            </div>
            <!--begin::Actions-->
            <div class="float-end pt-15">
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
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import Swal from "sweetalert2";
import { hideModal } from "@/core/helpers/dom";
import * as Yup from "yup";

interface CardData {
  program: string;
  kegiatan: string;
  kodeRekening: string;
  volume: string;
  satuan: string;
  hargaSatuan: string;
  jumlah: string;
  keterangan: string;
}

export default defineComponent({
  name: "new-sdm-belanja",
  components: {
    VForm,
  },
  setup() {
    const showRincian = ref("");
    const submitButtonRef = ref<null | HTMLButtonElement>(null);
    const newCardModalRef = ref<null | HTMLElement>(null);

    const belanjaData = ref<CardData>({
      program: "",
      kegiatan: "",
      kodeRekening: "",
      volume: "",
      satuan: "",
      hargaSatuan: "",
      jumlah: "",
      keterangan: "",
    });

    const validationSchema = Yup.object().shape({
      program: Yup.string().required().label("Program"),
      kegiatan: Yup.string().required().label("Kegiatan"),
      kodeRekening: Yup.string().required().label("Kode Rekening"),
      volume: Yup.string().required().label("Volume"),
      satuan: Yup.string().required().label("Satuan"),
      hargaSatuan: Yup.string().required().label("Harga Satuan"),
      jumlah: Yup.string().required().label("Jumlah"),
    });

    const submit = () => {
      if (!submitButtonRef.value) {
        return;
      }

      //Disable button
      submitButtonRef.value.disabled = true;
      // Activate indicator
      submitButtonRef.value.setAttribute("data-kt-indicator", "on");

      setTimeout(() => {
        if (submitButtonRef.value) {
          submitButtonRef.value.disabled = false;

          submitButtonRef.value?.removeAttribute("data-kt-indicator");
        }

        Swal.fire({
          text: "Form has been successfully submitted!",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok, got it!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn btn-primary",
          },
        }).then(() => {
          hideModal(newCardModalRef.value);
        });
      }, 2000);
    };

    return {
      showRincian,
      belanjaData,
      validationSchema,
      submit,
      submitButtonRef,
      newCardModalRef,
      getAssetPath,
    };
  },
});
</script>
