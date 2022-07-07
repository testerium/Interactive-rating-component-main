const submit = document.querySelector("#submit_button");
const containerRating = document.querySelector("#container_rating")
const containerThanks = document.querySelector("#container_thanks");
const score = document.querySelector(".score");
const ratingButtons = document.querySelectorAll(".rating_button");

let stars_score = '';

submit.addEventListener("click", submitClick);

ratingButtons.forEach(btn => {
    btn.addEventListener("click", handleRatingBtnClick);
});

function submitClick() {
    containerRating.classList.add('hide');
    score.textContent = stars_score;
    containerThanks.classList.remove('hide');
}

function handleRatingBtnClick(event) {
    ratingButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    event.target.parentElement.classList.add('active');
    stars_score = event.target.textContent;
    console.log(stars_score);
}