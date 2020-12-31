/** *?


peticion
    .then(res => res.json() )
    .then(({data}) => {
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn); */

    const getImagen = async () => {

        try {
            const apiKey = 's9DN1cA9IOkV4XmBGql9HPHoATL6rB28';
            const res = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
            const {
                data
            } = await res.json();
            const {
                url
            } = data.images.original;
            const img = document.createElement('img');
            img.src = url;
            document.body.append(img);
        } catch (error) {
    
        }
    
    }
    
    getImagen()