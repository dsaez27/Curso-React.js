// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async () => {
	try {
		const apiKey = 's9DN1cA9IOkV4XmBGql9HPHoATL6rB28';
		const resp = await fetch(
			`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
		);
		const { data } = await resp.json();

		const { url } = data.images.original;

        return url;
	} catch (error) {
		// manejo del error
		return error;
	}
};

getImagen();
