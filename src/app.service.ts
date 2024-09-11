import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
  getIndice(): string {
    const filePath = path.join(__dirname, '..','..','..','./financial/krx_indices.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return data;
  }
}
