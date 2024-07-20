<template>
  <!--begin::Card-->
  <div>
    <button
      type="button"
      class="btn btn-primary align-self-center btn-hover-scale me-5"
      data-bs-toggle="modal"
      :data-bs-target="`#${modalId}`"
    >
      {{ buttonText }}
    </button>
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "modal-card",
  props: {
    buttonText: String,
    modalId: String,
  },
  components: {},
});
</script>
