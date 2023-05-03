import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('user')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get('cart-history/:userId')
  async getCartHistory(@Param('userId', ParseIntPipe) userId: number) {
    return this.cartService.getCartHistory(userId);
  }
}
