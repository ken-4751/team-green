const onTestimonialChange = () => {
	let firstChild, lastChild;
	const prevArrow = document.querySelector("#std-testimonials-prev");
	const nextArrow = document.querySelector("#std-testimonials-next");
	const testimonials = document.querySelector(".std-testimonials ul");

	document.addEventListener("click", () => {
		if(event.target === prevArrow){
			lastChild = testimonials.lastElementChild;
			testimonials.insertAdjacentElement("afterbegin", lastChild);
		} else if (event.target === nextArrow){
			firstChild = testimonials.firstElementChild;
			testimonials.insertAdjacentElement("beforeend", firstChild);
		}
	})
}


onTestimonialChange();