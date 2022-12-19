import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonlibService {
    getName(): string{
        return 'my name is commonlib';
    }
}
