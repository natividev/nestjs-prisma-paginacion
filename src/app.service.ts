import { Inject, Injectable } from '@nestjs/common';
import { CustomPrismaService } from 'nestjs-prisma';
import { ExtendedPrismaClient } from './prisma.extension';

@Injectable()
export class AppService {
  constructor(
    @Inject('PrismaService')
    private prismaService: CustomPrismaService<ExtendedPrismaClient>,
  ) {}

  async getEmpledos() {
    const [data, paginacion] = await this.prismaService.client.empleados
      .paginate()
      .withPages({
        page: 1,
        limit: 5,
        includePageCount: true,
      });

    return {
      data,
      paginacion,
    };
  }
}
