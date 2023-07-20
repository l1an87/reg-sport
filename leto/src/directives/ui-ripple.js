/**
 * Handler click event
 * @param {MouseEvent} $event
 * @constructor
 */
const handlerClick = function ($event) {

	$event.stopPropagation();

	const button = $event.currentTarget;
	let diameter = Math.min(Math.max(button.clientWidth, button.clientHeight), 300);
	let radius = diameter / 2;

	if (window.getComputedStyle(button).position === 'static') {
		button.style.position = 'relative';
	}

	// Create ripple
	const ripple = document.createElement("span");
	const animation = document.createElement("span");

	ripple.classList.add("ripple");
	animation.classList.add("animation");
	animation.style.width = `${diameter}px`;
	animation.style.height = `${diameter}px`;
	animation.style.left = `${$event.clientX - (button.getBoundingClientRect().left + radius)}px`;
	animation.style.top = `${$event.clientY - (button.getBoundingClientRect().top + radius)}px`;

	if (button.clientWidth === button.clientHeight && diameter < 100) {
		animation.style.top = animation.style.left = '0';
	}

	setTimeout(() => ripple.remove(), 600);
	ripple.appendChild(animation);
	button.appendChild(ripple);
}

/**
 * Ripple directive
 */
export default {

	mounted(el, binding) {
		if (binding.value !== false) {
			el.classList.add('v-ripple');
			el.addEventListener('mousedown', handlerClick, {passive: true});
		}
	},

	unmounted(el) {
		el.removeEventListener('mousedown', handlerClick);
		el.classList.remove('v-ripple');
	}
}