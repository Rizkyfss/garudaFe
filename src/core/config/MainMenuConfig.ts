/* eslint-disable prettier/prettier */
import { getAssetPath } from "@/core/helpers/assets";

export interface MenuItem {
  heading?: string;
  sectionTitle?: string;
  route?: string;
  pages?: Array<MenuItem>;
  svgIcon?: string;
  fontIcon?: string;
  sub?: Array<MenuItem>;
}

const MainMenuConfig: Array<MenuItem> = [
  {
    pages: [
      {
        heading: "Dashboard",
        route: "/dashboard",
        svgIcon: getAssetPath("media/icons/duotune/art/art002.svg"),
        fontIcon: "bi-app-indicator",
      },
    ],
  },
  {
    heading: "Pendapatan",
    route: "/pendapatan",
    pages: [
      {
        heading: "Pendapatan",
        route: "/pendapatan",
        svgIcon: getAssetPath("media/icons/duotune/finance/fin001.svg"),
        fontIcon: "bi-calendar3-event",
      },
  ],
  },
  {
    heading: "Belanja",
    route: "/belanja",
    pages: [
      {
        sectionTitle: "Usulan Unit Kerja",
        route: "/usulan-unit-kerja",
        svgIcon: getAssetPath("media/icons/duotune/general/gen022.svg"),
        fontIcon: "bi-archive",
        sub: [
          {
            heading: "SDM",
            route: "/uuk/sdm",
          },
          {
            heading: "Pemeliharaan Peralatan",
            route: "/pemeliharaan-peralatan",
          },
          {
            heading: "Pendidikan/Penelitian",
            route: "/pendidikan-penelitian",
          },
          {
            heading: "Alat Kedokteran",
            route: "/alat-kedokteran",
          },
          {
            heading: "Perbekalan Farmasi",
            route: "/perbekalan-farmasi",
          },
          {
            heading: "Rekap Usulan Belanja",
            route: "/rekap-usulan-belanja",
          },
          
        ],
      },
      {
        sectionTitle: "Usulan Bidang Bagian",
        route: "/usulan-bidang-bagian",
        svgIcon: getAssetPath("media/icons/duotune/communication/com006.svg"),
        fontIcon: "bi-person",
        sub: [
          {
            heading: "SDM",
            route: "/belanja/ubb/sdm",
          },
          {
            heading: "Pemeliharaan Peralatan",
            route: "/belanja/ubb/pemeliharaan-peralatan",
          },
          {
            heading: "Pendidikan/Penelitian",
            route: "/belanja/ubb/pendidikan-penelitian",
          },
          {
            heading: "Alat Kedokteran",
            route: "/belanja/ubb/alat-kedokteran",
          },
          {
            heading: "Perbekalan Farmasi",
            route: "/belanja/ubb/perbekalan-farmasi",
          },
          {
            heading: "Rekap Usulan Kerja",
            route: "/belanja/ubb/rekap-usulan-kerja",
          },
        ],
      },
      {
        sectionTitle: "Verifikasi dan Distribusi",
        route: "/verifikasi-dan-distribusi",
        svgIcon: getAssetPath("media/icons/duotune/communication/com006.svg"),
        fontIcon: "bi-person",
        sub: [
          {
            heading: "Verifikasi Usulan",
            route: "/belanja/vd/verifikasi-usulan",
          },
        ],
      },
      {
        sectionTitle: "authentication",
        svgIcon: getAssetPath("media/icons/duotune/technology/teh004.svg"),
        fontIcon: "bi-sticky",
        sub: [
          {
            sectionTitle: "basicFlow",
            sub: [
              {
                heading: "signIn",
                route: "/sign-in",
              },
              {
                heading: "signUp",
                route: "/sign-up",
              },
              {
                heading: "passwordReset",
                route: "/password-reset",
              },
            ],
          },
          {
            heading: "multiStepSignUp",
            route: "/multi-step-sign-up",
          },
          {
            heading: "error404",
            route: "/404",
          },
          {
            heading: "error500",
            route: "/500",
          },
        ],
      },
    ],
  },
  {
    heading: "Pembiayaan",
    route: "/pembiayaan",
    pages: [
      {
        sectionTitle: "Usulan Unit Kerja",
        route: "/usulan-unit-kerja",
        svgIcon: getAssetPath("media/icons/duotune/general/gen022.svg"),
        fontIcon: "bi-archive",
        sub: [
          {
            sectionTitle: "SDM",
            route: "/sdm",
          },
          {
            sectionTitle: "Pemeliharaan Peralatan",
            route: "/pemeliharaan-peralatan",
          },
          {
            sectionTitle: "Pendidikan/Penelitian",
            route: "/pendidikan-penelitian",
          },
          {
            sectionTitle: "Alat Kedokteran",
            route: "/alat-kedokteran",
          },
          {
            sectionTitle: "Perbekalan Farmasi",
            route: "/perbekalan-farmasi",
          },
          {
            sectionTitle: "Rekap Usulan Belanja",
            route: "/rekap-usulan-belanja",
          },
          
        ],
      },
    ],
  },
  {
    heading: "RAK",
    route: "/rak",
    pages: [
      {
        sectionTitle: "Item 1",
        route: "/usulan-unit-kerja",
        svgIcon: getAssetPath("media/icons/duotune/general/gen022.svg"),
        fontIcon: "bi-archive",
        sub: [
          {
            sectionTitle: "SDM",
            route: "/sdm",
          },
        ],
      },
      {
        sectionTitle: "Item 2",
        route: "/usulan-unit-kerja",
        svgIcon: getAssetPath("media/icons/duotune/general/gen022.svg"),
        fontIcon: "bi-archive",
        sub: [
          {
            sectionTitle: "SDM",
            route: "/sdm",
          },
        ],
      },
      {
        sectionTitle: "Item 3",
        route: "/usulan-unit-kerja",
        svgIcon: getAssetPath("media/icons/duotune/general/gen022.svg"),
        fontIcon: "bi-archive",
        sub: [
          {
            sectionTitle: "SDM",
            route: "/sdm",
          },
        ],
      },
    ],
  },
  {
    heading: "RBA",
    route: "/rba",
    pages: [
      {
        heading: "RBA Pendapatan",
        route: "/rba-pendapatan",
        svgIcon: getAssetPath("media/icons/duotune/finance/fin001.svg"),
        fontIcon: "bi-calendar3-event",
      },
      {
        heading: "RBA-Belanja",
        route: "/rba-belanja",
        svgIcon: getAssetPath("media/icons/duotune/finance/fin001.svg"),
        fontIcon: "bi-calendar3-event",
      },
      {
        heading: "RBA-Pembiayaan",
        route: "/rba-pembiayaan",
        svgIcon: getAssetPath("media/icons/duotune/finance/fin001.svg"),
        fontIcon: "bi-calendar3-event",
      },
      {
        heading: "RBA-RAK",
        route: "/rba-rak",
        svgIcon: getAssetPath("media/icons/duotune/finance/fin001.svg"),
        fontIcon: "bi-calendar3-event",
      },
  ],
  },
  {
    heading: "Master Data",
    route:"/master-data",
    pages: [
      {
        heading: "Kode Program",
        route: "/master/kode-program",
        svgIcon: getAssetPath("media/icons/duotune/art/art002.svg"),
        fontIcon: "bi-app-indicator",
      },
      {
        heading: "Kode Kegiatan",
        route: "/master/kode-kegiatan",
        svgIcon: getAssetPath("media/icons/duotune/art/art002.svg"),
        fontIcon: "bi-app-indicator",
      },
      {
        heading: "Kode Rekening",
        route: "/master/kode-rekening",
        svgIcon: getAssetPath("media/icons/duotune/art/art002.svg"),
        fontIcon: "bi-app-indicator",
      },
    ],
  },
  {
    heading: "extra pages",
    route: "/extra-pages",
    pages: [
      {
        heading: "TestPage",
        route: "/test-page",
        svgIcon: getAssetPath("media/icons/duotune/general/gen014.svg"),
        fontIcon: "bi-calendar3-event",
      },
    ],
  },
];

export default MainMenuConfig;
