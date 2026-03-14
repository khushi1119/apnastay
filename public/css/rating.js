ocument.addEventListener("DOMContentLoaded", () => {

  const reviewForm = document.querySelector(".needs-validation");

  if (!reviewForm) return;

  reviewForm.addEventListener("submit", function () {

    let rating = document.querySelector('input[name="review[rating]"]:checked');

    if (!rating || rating.value === "") {
      document.getElementById("slot-rate1").checked = true;
    }

  });

});