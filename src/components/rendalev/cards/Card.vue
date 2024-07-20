<template>
  <div
    class="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end"
    :class="className"
    :style="{ backgroundColor: bgColor, backgroundImage: `url('${bgImage}')` }"
  >
    <!--begin::Header-->
    <div class="card-header pt-5">
      <!--begin::Title-->
      <div class="card-title d-flex flex-column">
        <!--begin::Amount-->
        <span class="fs-2hx fw-bold text-white me-2 lh-1 ls-n2">
          <span class="svg-icon svg-icon-white svg-icon-3x ms-n1">
            <slot></slot>
          </span>
        </span>
        <!--end::Amount-->
        <!--begin::Subtitle-->
        <span class="text-white fw-bold fs-3 mb-2 mt-5"
          >Rp. {{ moneyValue }}</span
        >
        <!--end::Subtitle-->
        <span class="fw-semibold text-white">
          {{ description }}
        </span>
      </div>
      <!--end::Title-->
    </div>
    <!--end::Header-->
    <!--end::Card body-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconSlot from "@/assets/icon/ecm001.vue";
export default defineComponent({
  name: "default-dashboard-widget-1",
  components: {},
  props: {
    className: { type: String, required: false },
    bgColor: { type: String, required: false, default: "#080655" },
    bgImage: { type: String, required: false },
    description: { type: String, required: true },
    moneyValue: { type: String, requied: false },
  },
});
</script>
