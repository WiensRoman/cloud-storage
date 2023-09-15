import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'test@test.ru',
  })
  email: string;
  @ApiProperty({
    default: 'Мистер пользователь',
  })
  fullName: string;
  @ApiProperty({
    default: '111',
  })
  password: string;
}
