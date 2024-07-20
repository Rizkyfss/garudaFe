<template>
  <div
    data-kt-menu-trigger="click"
    data-kt-menu-placement="bottom-start"
    class="menu-item menu-lg-down-accordion me-lg-1"
  >
    <div
      class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown w-100 w-lg-600px p-5 p-lg-5"
      style=""
    >
      <!--begin:Row-->
      <div class="row" data-kt-menu-dismiss="true">
        <!--begin:Col-->
        <div class="col-lg-4 border-left-lg-1">
          <div class="menu-inline menu-column menu-active-bg">
            <div class="menu-item">
              <a href="#" class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">{{ translate("exampleLink") }}</span>
              </a>
            </div>
            <div class="menu-item">
              <a href="#" class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">{{ translate("exampleLink") }}</span>
              </a>
            </div>
            <div class="menu-item">
              <a href="#" class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">{{ translate("exampleLink") }}</span>
              </a>
            </div>
            <div class="menu-item">
              <a href="#" class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">{{ translate("exampleLink") }}</span>
              </a>
            </div>
            <div class="menu-item">
              <a href="#" class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">{{ translate("exampleLink") }}</span>
              </a>
            </div>
          </div>
        </div>
        <!--end:Col-->
        <!--begin:Col-->
        <div class="col-lg-4 border-left-lg-1">
          <div class="menu-inline menu-column menu-active-bg">
            <div class="menu-item">
              <a href="#" class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">{{ translate("exampleLink") }}</span>
              </a>
            </div>
            <div class="menu-item">
              <a href="#" class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">{{ translate("exampleLink") }}</span>
              </a>
            </div>
            <div class="menu-item">
              <a href="#" class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">{{ translate("exampleLink") }}</span>
              </a>
            </div>
            <div class="menu-item">
              <a href="#" class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">{{ translate("exampleLink") }}</span>
              </a>
            </div>
            <div class="menu-item">
              <a href="#" class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">{{ translate("exampleLink") }}</span>
              </a>
            </div>
          </div>
        </div>
        <!--end:Col-->
        <!--begin:Col-->
        <div class="col-lg-4 border-left-lg-1">
          <div class="menu-inline menu-column menu-active-bg">
            <div class="menu-item">
              <a href="#" class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">{{ translate("exampleLink") }}</span>
              </a>
            </div>
            <div class="menu-item">
              <a href="#" class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">{{ translate("exampleLink") }}</span>
              </a>
            </div>
            <div class="menu-item">
              <a href="#" class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">{{ translate("exampleLink") }}</span>
              </a>
            </div>
            <div class="menu-item">
              <a href="#" class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">{{ translate("exampleLink") }}</span>
              </a>
            </div>
            <div class="menu-item">
              <a href="#" class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">{{ translate("exampleLink") }}</span>
              </a>
            </div>
          </div>
        </div>
        <!--end:Col-->
      </div>
      <!--end:Row-->
    </div>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import MainMenuConfig from "@/core/config/MainMenuConfig";
import { headerMenuIcons } from "@/core/helpers/config";

export default defineComponent({
  name: "KTMenu",
  components: {},
  setup() {
    const { t, te } = useI18n();
    const route = useRoute();

    const hasActiveChildren = (match: string) => {
      return route.path.indexOf(match) !== -1;
    };

    const translate = (text: string) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };

    return {
      hasActiveChildren,
      headerMenuIcons,
      MainMenuConfig,
      translate,
      getAssetPath,
    };
  },
});
</script>
