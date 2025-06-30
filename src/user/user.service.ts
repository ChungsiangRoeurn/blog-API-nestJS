import { CreateUserDto } from '@/user/dto/createUserDto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  createUser(createUserDto: CreateUserDto): CreateUserDto {
    return createUserDto;
  }
}
