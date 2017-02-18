var form = $("#form-book-hotel");
var btn = $("#btn-book-hotel");

btn.click(function () {
    if (form.is(":visible")) {
      return form.hide();
    } else {
      return form.show();
    }
});
