import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepo: Repository<User>) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.usersRepo.create(createUserDto);
    return this.usersRepo.save(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepo.findOne({
      where: { id },
    });
    const updatedUser = Object.assign(user, updateUserDto);
    return this.usersRepo.save(updatedUser);
  }

  async remove(id: number) {
    const user = await this.usersRepo.findOne({
      where: { id },
    });
    return this.usersRepo.remove(user);
  }
}
