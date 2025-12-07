import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1765094765448 implements MigrationInterface {
    name = 'Initial1765094765448'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updatedAt" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updatedAt" SET NOT NULL`);
    }

}
