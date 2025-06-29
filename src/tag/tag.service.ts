import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  getAllTags() {
    return [['All tags, including their counts, sorted by count descending']];
  }
}
