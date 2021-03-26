const contenedor = document.querySelector('.container');
const btnEnviar = document.querySelector('.enviar');
const formula = document.querySelector('.form');

const getImagenes = async () => {
	let input = document.querySelector('.buscador').value;
	const url = `https://pixabay.com/api/?key=20534356-64ad2d1f7662fca4af63dde69&q=${input}`;

	const resp = await fetch(url);

	const resul = await resp.json();

	console.log(resul);
	const data = resul.hits;

	data.forEach((imagenes) => {
		codigo = `
            <img src="${imagenes.webformatURL}" class="photo-img">`;
		contenedor.innerHTML += codigo;
	});
	if (input.length > 0) {
		btnEnviar.classList.add('correcto');
	} else {
		btnEnviar.classList.add('incorrecto');
	}
};
getImagenes();

formula.addEventListener('submit', (e) => {
	e.preventDefault();
	e.target.reset();
	limpiarHTML();

	// console.log(url);
});

function limpiarHTML() {
	while (contenedor.firstChild) {
		contenedor.removeChild(contenedor.firstChild);
	}
}
