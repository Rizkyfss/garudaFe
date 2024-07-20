<template>
      <!--begin::Modal - New Card-->
  <div
    class="modal fade "
    ref="newCardModalRef"
    id="kt_modal_delete"
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
          <h3 class="bg-danger">Peringatan Hapus Data</h3>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
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
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - New Card-->
</template>