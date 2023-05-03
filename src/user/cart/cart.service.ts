import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

type Products = {
  id: number;
  title: string;
}[];

type User = {
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
};

type CartHistory = {
  id: string;
  products: {
    productId: number;
    quantity: number;
  }[];
}[];

@Injectable()
export class CartService {
  async getCartHistory(userId: number) {
    try {
      const [products, user, cartHistory]: [Products, User, CartHistory] =
        await Promise.all([
          fetch('https://fakestoreapi.com/products').then((res) => res.json()),
          fetch(`https://fakestoreapi.com/users/${userId}`).then((res) =>
            res.json(),
          ),
          fetch(`https://fakestoreapi.com/carts/user/${userId}`).then((res) =>
            res.json(),
          ),
        ]);

      if (!user) {
        throw new NotFoundException(`There is no user with id ${userId}!`);
      }

      const finalCartHistory = cartHistory.map((cart) => {
        return {
          cartId: cart.id,
          products: cart.products.map((product) => {
            return {
              name:
                products.find((p) => p.id === product.productId).title ||
                product.productId,
              quantity: product.quantity,
            };
          }),
        };
      });

      return {
        userName: `${user.name.firstname} ${user.name.lastname}`,
        userEmail: user.email,
        cartHistory: finalCartHistory,
      };
    } catch (e) {
      if (e instanceof NotFoundException) {
        throw e;
      }
      throw new HttpException(
        'Failed to fetch data. Something is wrong with FakeStore API. Please try again later or contact the admin.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
