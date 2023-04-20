import $ from "jquery";
import axios from "axios";
import { renderModalHeaderID, renderModalBodyID, renderModalHeaderEN, renderModalBodyEN } from "./modalBody.js";
import { renderCard, renderCardEN } from "./card.js";
import { darkMode } from "./darkMode.js";

const main = function () {
	const defaultWheather = async () => {
		try {
			const { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=cimahi&appid=84ad4dc0f79fd73d32fa5c7c776a8a5d&lang=id&units=metric");
			const [cuaca] = data.weather;
			$(".body-card").html(loadingAnimation);
			setTimeout(() => {
				$(".body-card").html(renderCard(data, cuaca));
				$(".modal-button").on("click", function () {
					$(".modal-header").html(renderModalHeaderID(data));
					$(".modal-body").html(renderModalBodyID(cuaca, data));
				});
			}, 1200);
		} catch (error) {
			alert(error.response.data.message);
		}
	};

	const getWheather = async (keyword, lang) => {
		try {
			const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${keyword}&appid=84ad4dc0f79fd73d32fa5c7c776a8a5d&lang=${lang}&units=metric`);
			const [cuaca] = data.weather;
			$(".body-card").html(loadingAnimation);
			setTimeout(() => {
				if (lang === "id") {
					changeToID();
					$(".body-card").html(renderCard(data, cuaca));
					$(".modal-button").on("click", function () {
						$(".modal-header").html(renderModalHeaderID(data));
						$(".modal-body").html(renderModalBodyID(cuaca, data));
					});
				} else {
					changeToEN();
					$(".body-card").html(renderCardEN(data, cuaca));
					$(".modal-button").on("click", function () {
						$(".modal-header").html(renderModalHeaderEN(data));
						$(".modal-body").html(renderModalBodyEN(cuaca, data));
					});
				}
			}, 1200);
		} catch (error) {
			popupAlertError(keyword, error);
		}
	};

	const getWheatherID = async (city, language) => {
		try {
			const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=84ad4dc0f79fd73d32fa5c7c776a8a5d&lang=${language}&units=metric`);
			const [cuaca] = data.weather;
			changeToID();
			$(".body-card").html(loadingAnimation);
			setTimeout(() => {
				$(".body-card").html(renderCard(data, cuaca));
				$(".modal-button").on("click", function () {
					$(".modal-header").html(renderModalHeaderID(data));
					$(".modal-body").html(renderModalBodyID(cuaca, data));
				});
			}, 1200);
		} catch (error) {
			popupAlertError(keyword, error);
		}
	};

	const getWheatherEN = async (city, language) => {
		try {
			const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=84ad4dc0f79fd73d32fa5c7c776a8a5d&lang=${language}&units=metric`);
			const [cuaca] = data.weather;
			changeToEN();
			$(".body-card").html(loadingAnimation);
			setTimeout(() => {
				$(".body-card").html(renderCardEN(data, cuaca));
				$(".modal-button").on("click", function () {
					$(".modal-header").html(renderModalHeaderEN(data));
					$(".modal-body").html(renderModalBodyEN(cuaca, data));
				});
			}, 1200);
		} catch (error) {
			popupAlertError(keyword, error);
		}
	};

	/* first time load in page */
	$(window).on("load", function () {
		/* event to get wheather data through keyword search input */
		$("#button-submit").on("click", function () {
			const keyword = $("#search-input").val();
			$(".button-lang").each(function () {
				if ($(this).hasClass("active")) {
					const langguage = $(this).data("lang");
					getWheather(keyword, langguage);
				}
			});
		});
		/* event to change langguage from Bahasa to English */
		$(".button-lang").on("click", function () {
			const getLangguage = $(this).data("lang");
			const getCityName = $("h2.card-title").attr("id");
			$(".button-lang").each(function () {
				if ($(this).hasClass("active")) {
					$(this).removeClass("active");
				} else {
					$(this).addClass("active");
				}
			});
			if (getLangguage === "en") {
				getWheatherEN(getCityName, getLangguage);
			} else {
				getWheatherID(getCityName, getLangguage);
			}
		});
		/* event to trigered Dark Mode icon */
		darkMode();
		/* first render wheather data */
		defaultWheather();
	});

	const popupAlertError = (keyword, error) => {
		alert(`Kota ${keyword} "${error.response.data.message}"`);
	};

	const loadingAnimation = () => {
		return `
			<div class="spinner-border text-primary m-5" style="width: 4rem; height: 4rem" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
			`;
	};

	const changeToID = () => {
		$(".title-wheather").text("Prakiraan Cuaca");
		$("#button-submit").text("Cari");
		$("#search-input").attr("placeholder", "Masukkan Nama Kota....");
	};

	const changeToEN = () => {
		$(".title-wheather").text("Weather Forecast");
		$("#button-submit").text("Search");
		$("#search-input").attr("placeholder", "Input City Name....");
	};
};

export { main };
