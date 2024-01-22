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
          },
        ],
      }));
    },
  });
}
