import { TagEntity } from '@/tag/tag.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity)
    private readonly tagRespository: Repository<TagEntity>,
  ) {}
  async getAllTags() {
    return await this.tagRespository.find();
  }
}
