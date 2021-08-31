import { MigrationInterface, QueryRunner } from "typeorm";

export class Customer1630440687767 implements MigrationInterface {
    name = 'Customer1630440687767'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`season_less_payment\`.\`customer\` (\`customer_id\` int NOT NULL AUTO_INCREMENT, \`customer_name\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`customer_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`season_less_payment\`.\`customer_summary\` (\`id\` int NOT NULL AUTO_INCREMENT, \`customer_id\` int NOT NULL, \`season_id\` int NOT NULL, \`total_paid\` decimal(10,2) NOT NULL, \`total_credit\` int NOT NULL, \`created_at\` decimal(10,2) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`season_less_payment\`.\`season\` (\`season_id\` int NOT NULL AUTO_INCREMENT, \`season_name\` varchar(255) NOT NULL, \`start_date\` datetime NOT NULL, \`end_date\` datetime NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`season_id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`season_less_payment\`.\`season\``);
        await queryRunner.query(`DROP TABLE \`season_less_payment\`.\`customer_summary\``);
        await queryRunner.query(`DROP TABLE \`season_less_payment\`.\`customer\``);
    }

}
