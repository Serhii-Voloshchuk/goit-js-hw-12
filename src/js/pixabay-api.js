const API_KEY = '45071357-999033ebbf151b40dc2c05ece';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page: page,
                per_page: 12,
            },
        });

        return response.data;
    } catch (error) {
        throw new Error('Error fetching images');
    }
}