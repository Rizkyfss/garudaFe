<script setup lang="ts">
import KTModalCard from "@/components/rendalev/modals/ModalButton.vue";
import KTNewCardModal from "@/components/rendalev/modals/ModalComp.vue";
import { ref } from "vue";
const showModal = ref(false);
const tableHead = ref([
  {
    kode: "A",
    kegiatan: "B",
    rekening: "C",
    uraian: "D",
    volume: "E",
    satuan: "F",
    hargaSatuan: "G",
    jumlah: "H",
    keterangan: "I",
  },
]);
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
                  class="table table-hover table-rounded table-striped border gy-7 gs-7 cssTable"
                >
                  <thead>
                    <tr
                      class="fw-bold fs-8 text-gray-800 border-bottom-2 border-gray-200"
                    >
                      <th>Kode Program</th>
                      <th>Kode Kegiatan</th>
                      <th>Kode Rekening</th>
                      <th>Uraian</th>
                      <th>Volume</th>
                      <th>Satuan</th>
                      <th>Harga Satuan</th>
                      <th>Jumlah</th>
                      <th>Keterangan</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="fs-9" v-for="(title, i) in tableHead" :key="i">
                      <td>{{ title.kode }}</td>
                      <td>{{ title.kegiatan }}</td>
                      <td>{{ title.rekening }}</td>
                      <td>{{ title.uraian }}</td>
                      <td>{{ title.volume }}</td>
                      <td>{{ title.satuan }}</td>
                      <td>{{ title.hargaSatuan }}</td>
                      <td>{{ title.jumlah }}</td>
                      <td>{{ title.keterangan }}</td>
                      <td>
                        <div class="btn-group" role="group" aria-label="bmse">
                          <button
                            type="button"
                            id="btn-edit"
                            class="btn btn-sm btn-warning fs-8"
                          >
                            <i
                              class="bi bi-pencil-fill"
                              data-bs-toggle="modal"
                              data-bs-target="#modalUbah"
                            ></i>
                          </button>

                          <button
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
              <div class="row">
                <div
                  class="col-sm-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start"
                >
                  <div class="dataTables_length">
                    <label>
                      <select
                        class="form-control form-control-sm text-dark font-weight-bold mr-4 border-0 bg-light-dark"
                        style="width: 75px"
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="-1">SEMUA</option>
                      </select>
                    </label>
                  </div>
                  <div class="dataTables_info">Menampilkan 10 dari 13 data</div>
                </div>
                <div
                  class="col-sm-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-end"
                >
                  <ul class="pagination justify-content-end">
                    <li class="page-item previous disabled">
                      <a href="#" class="page-link"><i class="previous"></i></a>
                    </li>
                    <li class="page-item">
                      <a href="#" class="page-link">1</a>
                    </li>
                    <li class="page-item active">
                      <a href="#" class="page-link">2</a>
                    </li>
                    <li class="page-item">
                      <a href="#" class="page-link">3</a>
                    </li>
                    <li class="page-item">
                      <a href="#" class="page-link">4</a>
                    </li>
                    <li class="page-item">
                      <a href="#" class="page-link">5</a>
                    </li>
                    <li class="page-item">
                      <a href="#" class="page-link">6</a>
                    </li>
                    <li class="page-item next">
                      <a href="#" class="page-link"><i class="next"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!--end::Card body-->
        </div>
        <!--end::details View-->
      </div>
      <!--end::Container-->
    </div>

    <KTNewCardModal></KTNewCardModal>
    <!--end::Post-->
  </section>
</template>
