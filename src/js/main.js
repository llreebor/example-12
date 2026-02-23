// Mobile Menu
function burgerMenu() {
	const menu = document.querySelector("#mobile-menu")
	const burger = document.querySelector("#burger")
	const body = document.querySelector("body")

	if (!menu) return

	burger.addEventListener("click", () => {
		burger.classList.toggle("active")
		menu.classList.toggle("open")
		menu.classList.toggle("hidden")
		body.classList.toggle("overflow-hidden")
	})

	menu.addEventListener("click", (e) => {
		if (e.target.classList.contains("mobile-menu")) {
			menu.classList.remove("open")
			burger.classList.remove("active")
			body.classList.remove("overflow-hidden")
		}
	})

	// Вот тут мы ставим брейкпоинт навбара
	window.addEventListener("resize", () => {
		if (window.innerWidth > 991.98) {
			menu.classList.remove("open")
			burger.classList.remove("active")
			menu.classList.add("hidden")
			body.classList.remove("overflow-hidden")
		}
	})
}
burgerMenu()

// FAQ Accordion
function accordion() {
	const items = document.querySelectorAll(".accordion-item")
	const triggers = document.querySelectorAll(".accordion-trigger")
	const contents = document.querySelectorAll(".accordion-content")
	if (!items) return
	triggers.forEach((trigger) => {
		if (items[0].classList.contains("active")) {
			contents[0].classList.add("active")
		}
		trigger.addEventListener("click", () => {
			const parent = trigger.parentNode
			if (!parent.classList.contains("active")) {
				// If you want only one to be open at a time, and others to close - UNCOMMENT the code below.
				// items.forEach((item, i) => {
				// 	if (i !== idx && item.classList.contains('active')) {
				// 		item.classList.remove('active')
				// 	}
				// })
				// Open the current accordion item
				parent.classList.add("active")
			} else {
				// Close the current accordion item
				parent.classList.remove("active")
			}
		})
	})
}
accordion()

// Price Toggle
function animatedTabs() {
	const tabs = document.querySelectorAll(".tab")
	const tabUnderline = document.getElementById("tab-underline")
	const subscriptionCheckbox = document.getElementById("subscriptionPeriod")
	const saveBadge = document.querySelector(".save-badge")

	if (!tabs.length) return

	function setActiveTab(index) {
		tabs.forEach((tab, i) => {
			tab.classList.toggle("text-white", i === index)
		})
	}

	tabs.forEach((tab, index) => {
		tab.onclick = () => {
			setActiveTab(index)

			// Update checkbox state: checked for yearly, unchecked for monthly
			subscriptionCheckbox.checked = tab.dataset.value === "yearly"

			if (subscriptionCheckbox.checked) {
				saveBadge.classList.add("active")
			} else {
				saveBadge.classList.remove("active")
			}

			const { offsetLeft, clientWidth } = tab
			tabUnderline.style.left = `${offsetLeft}px`
			tabUnderline.style.width = `${clientWidth}px`
			console.log()
		}
	})

	// Initialize first tab as active (Monthly)
	setActiveTab(0)
	const { offsetLeft, clientWidth } = tabs[0]
	tabUnderline.style.left = `${offsetLeft}px`
	tabUnderline.style.width = `${clientWidth}px`
	subscriptionCheckbox.checked = false // Monthly by default
}
animatedTabs()

// Show Campaign select visibility
function initializeCampaignInputToggle() {
	const differentRadio = document.getElementById("different")
	const campaignInput = document.getElementById("hidden_campaign_input")
	const radios = document.querySelectorAll('input[name="campaign"]')
	if (!radios.length) return
	function toggleCampaignInput() {
		if (differentRadio.checked) {
			campaignInput.classList.remove("hidden")
		} else {
			campaignInput.classList.add("hidden")
		}
	}

	toggleCampaignInput()

	radios.forEach((radio) => {
		radio.addEventListener("change", toggleCampaignInput)
	})
}

initializeCampaignInputToggle()
