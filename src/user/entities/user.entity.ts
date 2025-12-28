import { ApiProperty } from '@nestjs/swagger';
export class User {
  @ApiProperty({
    example: 'user@example.com',
    description: 'The email of the user',
  })
  email!: string;
  @ApiProperty({
    example: 'hashedpassword123',
    description: 'The hashed password of the user',
  })
  password!: string;
}
