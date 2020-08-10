import { TestDrawer } from "./testDrawer";

const drawer = new TestDrawer();

$(document).on("DOMContentLoaded", drawer.draw.call(drawer));

$(document).on("click", ".services_card", function () {
  drawer.openModal($(this).attr("data_id"));
});

$(document).on("click", "#modal_close", function (e: any) {
  drawer.closeModal(e);
});