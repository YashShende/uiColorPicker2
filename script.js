$(document).ready(function () {

      $(".card").click(function () {


                 var hex = this.textContent.trim();
                 var dummy = document.createElement("input");

                 document.body.appendChild(dummy);
                 dummy.setAttribute('value', hex);
                 dummy.select();
                 document.execCommand("copy");
                 document.body.removeChild(dummy);

                 swal("Copied!", {
                     icon: "success",
                     buttons: false,
                     timer: 1000,
                 });
      });
});
