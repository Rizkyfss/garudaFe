<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted } from "vue";
import LayoutService from "@/core/services/LayoutService";
import { useBodyStore } from "@/stores/body";

export default defineComponent({
  name: "auth-layout",
  components: {},
  setup() {
    const store = useBodyStore();
    const date = "2023";
    onMounted(() => {
      LayoutService.emptyElementClassesAndAttributes(document.body);

      store.addBodyClassname("app-blank");
      store.addBodyClassname("bg-body");
    });

    return {
      getAssetPath,
      date,
    };
  },
});
</script>

<template>
  <div class="d-flex flex-column flex-root" id="kt_app_root">
    <img
      src="images/landingPage/bg-lp.webp"
      alt="bg"
      class="z-index-n1 position-absolute headline"
    />
    <!--begin::Authentication Layout -->
    <div class="d-flex flex-column flex-lg-row flex-column-fluid">
      <!--begin::Body-->
      <router-view></router-view>
      <!--end::Body-->

      <!--begin::Aside-->

      <div class="d-flex flex-lg-row-fluid">
        <!--begin::Content-->
        <div class="d-flex flex-column flex-center w-100">
          <!--begin::Image-->
          <img
            class="theme-light-show mx-auto mw-100 w-150px w-xl-1000px"
            src="images/landingPage/lp.png"
            alt=""
          />
          <img
            class="theme-dark-show mx-auto mw-100 w-150px w-xl-1000px"
            src="images/landingPage/lp.png"
            alt=""
          />
          <!--end::Image-->

          <!--begin::modalSandi-->
          <div class="modal fade" tabindex="-1" id="modalSandi">
            <div
              class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
            >
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title text-primary">
                    <div class="symbol">
                      <img src="images/icon/lupaSandi.png" alt="" />
                    </div>
                    &nbsp;Lupa Sandi
                  </h5>
                  <!--begin::Close-->
                  <div
                    class="btn btn-icon btn-sm btn-active-light-primary ms-2 btn-hover-scale me-5"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span class="svg-icon svg-icon-2x svg-icon-primary">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.3"
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="10"
                          fill="currentColor"
                        />
                        <rect
                          x="7"
                          y="15.3137"
                          width="12"
                          height="2"
                          rx="1"
                          transform="rotate(-45 7 15.3137)"
                          fill="currentColor"
                        />
                        <rect
                          x="8.41422"
                          y="7"
                          width="12"
                          height="2"
                          rx="1"
                          transform="rotate(45 8.41422 7)"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                  <!--end::Close-->
                </div>
                <div class="modal-body">
                  <img
                    src="images/icon/helpdesk.png"
                    alt="helpdesk_itki"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </div>
          <!--end::modalSandi-->
          <!--begin::modalHelpdesk-->
          <div class="modal fade" tabindex="-1" id="modalHelpdesk">
            <div
              class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
            >
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title text-primary">
                    <div class="symbol">
                      <img src="images/icon/lupaSandi.png" alt="" />
                    </div>
                    &nbsp;Helpdesk ITKI
                  </h5>
                  <!--begin::Close-->
                  <div
                    class="btn btn-icon btn-sm btn-active-light-primary ms-2 btn-hover-scale me-5"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span class="svg-icon svg-icon-2x svg-icon-primary">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.3"
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="10"
                          fill="currentColor"
                        />
                        <rect
                          x="7"
                          y="15.3137"
                          width="12"
                          height="2"
                          rx="1"
                          transform="rotate(-45 7 15.3137)"
                          fill="currentColor"
                        />
                        <rect
                          x="8.41422"
                          y="7"
                          width="12"
                          height="2"
                          rx="1"
                          transform="rotate(45 8.41422 7)"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                  <!--end::Close-->
                </div>
                <div class="modal-body">
                  <img
                    src="images/icon/helpdesk.png"
                    alt="helpdesk_itki"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </div>
          <!--end::modalHelpdesk-->
        </div>
        <!--end::Content-->
      </div>
      <!--end::Aside-->
    </div>
    <!--end::Authentication Layout -->
  </div>
</template>

<style scoped>
.headline {
  width: 100%;
}
.au-body {
  padding: 80px 0;
}
</style>
