<script setup lang="ts">
import KTModalCard from "@/components/rendalev/modals/ModalButton.vue";
import KTNewCardModal from "@/components/rendalev/modals/ModalRekening.vue";
import KTEditModal from "@/components/rendalev/modals/ModalRekeningEdit.vue";
import { onMounted, reactive, ref, watch, watchEffect } from "vue";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import Swal from "sweetalert2";

const params = {
  limit: "10",
  offset: "0",
  tahun: JwtService.getYear(),
};
let dataField = ref({} as any[]);
let dataEdit = ref({
  kode_rekening: "",
  rekening_id: 0,
  uraian_rekening: "",
  tahun_anggaran: "",
  createlogin_pemakai: 0,
});

function getAllData() {
  ApiService.setHeader();
  return ApiService.getData(
    `master-rekening/get-list/?limit=${params.limit}&offset=${params.offset}&tahun=${params.tahun}`
  )
    .then(({ data }) => {
      dataField.value = data.result;
    })
    .catch((error) => {
      console.log(error.response.data.message);
    });
}

function reload() {
  console.log('Child has been created.');
  ApiService.setHeader();
  return ApiService.getData(
    `master-rekening/get-list/?limit=${params.limit}&offset=${params.offset}&tahun=${params.tahun}`
  )
    .then(({ data }) => {
      dataField.value = data.result;
    })
    .catch((error) => {
      console.log(error.response.data.message);
    });
}

function purgeData(id) {
  Swal.fire({
    text: "Apakah anda yakin akan menghapus data ini?",
    icon: "warning",
    showDenyButton: true,
    confirmButtonText: "Yes",
    denyButtonText: "No",
    customClass: {
      actions: "my-actions",
      confirmButton: "order-2",
      denyButton: "order-3",
    },
  }).then((result) => {
    if (result.isDenied) {
      Swal.fire("Data tidak terhapus");
    } else if (result.isConfirmed) {
      Swal.fire("Data telah dihapus", "", "info");
      return ApiService.deleteData(`master-rekening/delete/${id}`)
        .then(() => {
          reload()
        })
        .catch(() => {
          console.log("Error");
        });
    }
  });
}

function editData(id) {
  return ApiService.getDataValue(`master-rekening/get-data/${id}`).then(
    ({ data }) => {
      dataEdit.value.kode_rekening = data.result.kode_rekening;
      dataEdit.value.uraian_rekening = data.result.uraian_rekening;
      dataEdit.value.tahun_anggaran = data.result.tahun_anggaran;
      dataEdit.value.rekening_id = data.result.rekening_id;
    }
  );
}

onMounted(() => {
  getAllData(), editData;
});
</script>
<template>
  <section>
    <div class="post d-flex flex-column-fluid" id="kt_post">
      <!--begin::Container-->
      <div id="kt_content_container" class="container-xxl">
        <!--begin::details View-->
        <div class="card mb-5 mb-xl-10 shadow-sm" id="kt_profile_details_view">
          <!--begin::Card header-->
          <div class="card-header cursor-pointer">
            <!--begin::Card title-->
            <div class="card-title m-0">
              <h3 class="fw-bolder m-0">Informasi</h3>
            </div>
            <!--end::Card title-->
            <!--begin::Action-->

            <KTModalCard
              class="mt-auto"
              button-text="Tambah"
              modal-id="kt_modal_new_card"
            ></KTModalCard>
            <!--end::Action-->
          </div>
          <!--begin::Card header-->
          <!--begin::Card body-->
          <div class="card-body p-9">
            <div class="row g-6 g-xl-9 mb-6 mb-xl-9">
              <div class="table-responsive">
                <table
                  class="table table-hover table-rounded table-striped border gy-7 gs-0 cssTable"
                >
                  <thead>
                    <tr
                      class="fw-bold fs-8 text-gray-800 border-bottom-2 border-gray-200"
                    >
                      <th>Kode Rekening</th>
                      <th style="width: 50%">Uraian</th>
                      <th>Tahun Anggaran</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="fs-9" v-for="(j, i) in dataField" :key="i">
                      <td>{{ j.kode_rekening }}</td>
                      <td>{{ j.uraian_rekening }}</td>
                      <td>{{ j.tahun_anggaran }}</td>
                      <td>
                        <div class="btn-group" role="group" aria-label="bmse">
                          <button
                            @click.prevent="editData(j.rekening_id)"
                            type="button"
                            id="btn-edit"
                            class="btn btn-sm btn-warning fs-8"
                            data-bs-toggle="modal"
                            data-bs-target="#kt_modal_rekening_edit"
                          >
                            <i class="bi bi-pencil-fill"></i>
                          </button>
                          <button
                            @click.prevent="purgeData(j.rekening_id)"
                            type="button"
                            id="btn-hapus"
                            class="btn btn-sm btn-danger fs-8"
                          >
                            <i class="bi bi-trash-fill"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!--end::Card body-->
        </div>
        <!--end::details View-->
      </div>
      <!--end::Container-->
    </div>

    <KTNewCardModal @handleChange="reload"></KTNewCardModal>
    <KTEditModal
      :rekening_kode="dataEdit.kode_rekening"
      :uraian_rekening="dataEdit.uraian_rekening"
      :tahun_anggaran="dataEdit.tahun_anggaran"
      :createlogin_pemakai="dataEdit.createlogin_pemakai"
      :rekening_id="dataEdit.rekening_id"
    ></KTEditModal>
    <!--end::Post-->
  </section>
</template>
