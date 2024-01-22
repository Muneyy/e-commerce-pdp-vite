import { createServer } from 'miragejs';

export default function createMirageAPI() {
  createServer({
    routes() {
      this.get('/api/products', () => ({
        products: [
          {
            id: 1,
            company: 'Sneaker Company',
            title: 'Fall Limited Edition Sneakers',
            description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
            price: 250,
            discount: 0.5,
            thumbail: '@/assets/images/image-product-1-thumbnail.jpg',
          },
        ],
      }));
      this.get('/api/products/1/imageLinks', () => ({
        smallImagesLinks: {
          smallImage1: '@/assets/images/image-product-1-thumbnail.jpg',
          smallImage2: '@/assets/images/image-product-2-thumbnail.jpg',
          smallImage3: '@/assets/images/image-product-3-thumbnail.jpg',
          smallImage4: '@/assets/images/image-product-4-thumbnail.jpg',
        },
        largeImagesLinks: {
          largeImage1: '@/assets/images/image-product-1.jpg',
          largeImage2: '@/assets/images/image-product-2.jpg',
          largeImage3: '@/assets/images/image-product-3.jpg',
          largeImage4: '@/assets/images/image-product-4.jpg',
        },
      }));
    },
  });
}
