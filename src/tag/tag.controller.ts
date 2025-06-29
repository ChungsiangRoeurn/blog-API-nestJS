import { TagService } from '@/tag/tag.service';
import { Controller, Get } from '@nestjs/common';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  async getAllTags() {
    const allTags = await this.tagService.getAllTags();
    const tags = allTags.map((tag) => tag.name);

    return { tags };
  }
}
