var simplemaps_countrymap_mapdata = {
  main_settings: {
    //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "black",

    //State defaults
    state_description: "",
    state_color: "#FFFFFF",
    state_hover_color: "#FFFFFF",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",

    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",

    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",

    //Zoom settings
    zoom: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,

    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 DM Sans, sans-serif;",
    popup_nocss: "no",

    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    INAN: {
      name: "Andaman and Nicobar",
      color: "#418cd8",
      zoomable: "no",
      hover_color: "#3B729F"
    },
    INAP: {
      name: "Andhra Pradesh",
      color: "#418cd8",
      zoomable: "no",
      hover_color: "#3B729F"
    },
    INAR: {
      name: "Arunachal Pradesh",
      zoomable: "no",
      inactive: "yes"
    },
    INAS: {
      name: "Assam",
      color: "#418cd8",
      zoomable: "no",
      hover_color: "#3B729F"
    },
    INBR: {
      name: "Bihar",
      color: "#418cd8",
      zoomable: "no",
      hover_color: "#3B729F"
    },
    INCH: {
      name: "Chandigarh",
      zoomable: "no",
      inactive: "yes"
    },
    INCT: {
      name: "Chhattisgarh",
      color: "#418cd8",
      zoomable: "no",
      hover_color: "#3B729F"
    },
    INDH: {
      name: "Dādra and Nagar Haveli and Damān and Diu",
      zoomable: "no",
      inactive: "yes"
    },
    INDL: {
      name: "Delhi",
      zoomable: "no",
      inactive: "yes"
    },
    INGA: {
      name: "Goa",
      color: "#418cd8",
      zoomable: "no",
      hover_color: "#3B729F"
    },
    INGJ: {
      name: "Gujarat",
      color: "#418cd8",
      zoomable: "no",
      hover_color: "#3B729F"
    },
    INHP: {
      name: "Himachal Pradesh",
      zoomable: "no",
      inactive: "yes"
    },
    INHR: {
      name: "Haryana",
      zoomable: "no",
      inactive: "yes"
    },
    INJH: {
      name: "Jharkhand",
      color: "#418cd8",
      zoomable: "no",
      hover_color: "#3B729F"
    },
    INJK: {
      name: "Jammu and Kashmir",
      zoomable: "no",
      inactive: "yes"
    },
    INKA: {
      name: "Karnataka",
      color: "#418cd8",
      zoomable: "no",
      hover_color: "#3B729F"
    },
    INKL: {
      name: "Kerala",
      zoomable: "no",
      inactive: "yes"
    },
    INLA: {
      name: "Ladakh",
      zoomable: "no",
      inactive: "yes"
    },
    INLD: {
      name: "Lakshadweep",
      zoomable: "no",
      inactive: "yes"
    },
    INMH: {
      name: "Maharashtra",
      color: "#418cd8",
      zoomable: "no",
      hover_color: "#3B729F"
    },
    INML: {
      name: "Meghalaya",
      zoomable: "no",
      inactive: "yes"
    },
    INMN: {
      name: "Manipur",
      zoomable: "no",
      inactive: "yes"
    },
    INMP: {
      name: "Madhya Pradesh",
      color: "#418cd8",
      zoomable: "no",
      hover_color: "#3B729F"
    },
    INMZ: {
      name: "Mizoram",
      zoomable: "no",
      inactive: "yes"
    },
    INNL: {
      name: "Nagaland",
      zoomable: "no",
      inactive: "yes"
    },
    INOR: {
      name: "Orissa",
      color: "#418cd8",
      zoomable: "no",
      hover_color: "#3B729F"
    },
    INPB: {
      name: "Punjab",
      zoomable: "no",
      inactive: "yes"
    },
    INPY: {
      name: "Puducherry",
      zoomable: "no",
      inactive: "yes"
    },
    INRJ: {
      name: "Rajasthan",
      zoomable: "no",
      inactive: "yes"
    },
    INSK: {
      name: "Sikkim",
      zoomable: "no",
      inactive: "yes"
    },
    INTG: {
      name: "Telangana",
      color: "#418cd8",
      zoomable: "no",
      hover_color: "#3B729F"
    },
    INTN: {
      name: "Tamil Nadu",
      color: "#418cd8",
      zoomable: "no",
      hover_color: "#3B729F"
    },
    INTR: {
      name: "Tripura",
      zoomable: "no",
      inactive: "yes"
    },
    INUP: {
      name: "Uttar Pradesh",
      zoomable: "no",
      inactive: "yes"
    },
    INUT: {
      name: "Uttaranchal",
      zoomable: "no",
      inactive: "yes"
    },
    INWB: {
      name: "West Bengal",
      color: "#418cd8",
      zoomable: "no",
      hover_color: "#3B729F"
    }
  },
  locations: {},
  labels: {
    INAN: {
      name: "Andaman and Nicobar",
      parent_id: "INAN"
    },
    INAP: {
      name: "Andhra Pradesh",
      parent_id: "INAP"
    },
    INAR: {
      name: "Arunachal Pradesh",
      parent_id: "INAR"
    },
    INAS: {
      name: "Assam",
      parent_id: "INAS"
    },
    INBR: {
      name: "Bihar",
      parent_id: "INBR"
    },
    INCH: {
      name: "Chandigarh",
      parent_id: "INCH"
    },
    INCT: {
      name: "Chhattisgarh",
      parent_id: "INCT"
    },
    INDH: {
      name: "Dādra and Nagar Haveli and Damān and Diu",
      parent_id: "INDH"
    },
    INDL: {
      name: "Delhi",
      parent_id: "INDL"
    },
    INGA: {
      name: "Goa",
      parent_id: "INGA"
    },
    INGJ: {
      name: "Gujarat",
      parent_id: "INGJ"
    },
    INHP: {
      name: "Himachal Pradesh",
      parent_id: "INHP"
    },
    INHR: {
      name: "Haryana",
      parent_id: "INHR"
    },
    INJH: {
      name: "Jharkhand",
      parent_id: "INJH"
    },
    INJK: {
      name: "Jammu and Kashmir",
      parent_id: "INJK"
    },
    INKA: {
      name: "Karnataka",
      parent_id: "INKA"
    },
    INKL: {
      name: "Kerala",
      parent_id: "INKL"
    },
    INLA: {
      name: "Ladakh",
      parent_id: "INLA"
    },
    INLD: {
      name: "Lakshadweep",
      parent_id: "INLD"
    },
    INMH: {
      name: "Maharashtra",
      parent_id: "INMH"
    },
    INML: {
      name: "Meghalaya",
      parent_id: "INML"
    },
    INMN: {
      name: "Manipur",
      parent_id: "INMN"
    },
    INMP: {
      name: "Madhya Pradesh",
      parent_id: "INMP"
    },
    INMZ: {
      name: "Mizoram",
      parent_id: "INMZ"
    },
    INNL: {
      name: "Nagaland",
      parent_id: "INNL"
    },
    INOR: {
      name: "Orissa",
      parent_id: "INOR"
    },
    INPB: {
      name: "Punjab",
      parent_id: "INPB"
    },
    INPY: {
      name: "Puducherry",
      parent_id: "INPY"
    },
    INRJ: {
      name: "Rajasthan",
      parent_id: "INRJ"
    },
    INSK: {
      name: "Sikkim",
      parent_id: "INSK"
    },
    INTG: {
      name: "Telangana",
      parent_id: "INTG"
    },
    INTN: {
      name: "Tamil Nadu",
      parent_id: "INTN"
    },
    INTR: {
      name: "Tripura",
      parent_id: "INTR"
    },
    INUP: {
      name: "Uttar Pradesh",
      parent_id: "INUP"
    },
    INUT: {
      name: "Uttaranchal",
      parent_id: "INUT"
    },
    INWB: {
      name: "West Bengal",
      parent_id: "INWB"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};