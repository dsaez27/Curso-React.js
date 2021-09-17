import { fileUpload } from './../../helpers/fileUpload';
import cloudinary from 'cloudinary';

cloudinary.config({
    cloud_name: 'djv0cypxw',
    api_key: '537475448129734',
    api_secret: 'uuWnAD3uuOpCKGwRq5FuUlIKUuw',
});

describe('Pruebas en fileUpload', () => {
    test('Debe de cargar un archivo y retornar un url', async (done) => {
        const img = await fetch(
            'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
        );
        const blob = await img.blob();
        const file = new File([blob], 'test.png', { type: 'image/png' });
        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        const segments = url.split('/');
        const public_id = segments[segments.length - 1].replace('.png', '');

        cloudinary.v2.api.delete_resources(public_id, {}, () => {
            done();
        });
    });

    test('Debe de retornar un error', async () => {
        const file = new File([], 'test.png');
        const url = await fileUpload(file);

        expect(url).toBe(null);
    });
});
