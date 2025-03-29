import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloworldResolver {
  @Query(() => String)
  helloWorld(): string {
    return 'Hello World!';
  }

  @Query(() => Float, { description: 'A random number between 0 and 100' })
  randomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Float, { description: 'A random number between 0 and limit' })
  randoNumberFromZeroTo(
    @Args('limit', { type: () => Int, nullable: true })
    limit: number = 10,
  ): number {
    return Math.floor(Math.random() * limit);
  }
}
