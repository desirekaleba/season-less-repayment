import { MigrationInterface, QueryRunner } from "typeorm";

export class CustomerSummary1630483395570 implements MigrationInterface {
    name = 'CustomerSummary1630483395570'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE IF NOT EXISTS \`season_less_payment\`.\`customer\` (\`customer_id\` int NOT NULL AUTO_INCREMENT, \`customer_name\` varchar(255) NOT NULL, PRIMARY KEY (\`customer_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE IF NOT EXISTS \`season_less_payment\`.\`customer_summary\` (\`id\` int NOT NULL AUTO_INCREMENT, \`customer_id\` int NOT NULL, \`season_id\` int NOT NULL, \`total_paid\` decimal(10,2) NOT NULL, \`total_credit\` decimal(10,2) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE IF NOT EXISTS \`season_less_payment\`.\`payment\` (\`id\` int NOT NULL AUTO_INCREMENT, \`customer_id\` int NOT NULL, \`season_id\` int NOT NULL, \`amount\` decimal(10,2) NOT NULL, \`date\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE IF NOT EXISTS \`season_less_payment\`.\`season\` (\`season_id\` int NOT NULL AUTO_INCREMENT, \`season_name\` varchar(255) NOT NULL, \`start_date\` datetime NOT NULL, \`end_date\` datetime NOT NULL, PRIMARY KEY (\`season_id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS \`season_less_payment\`.\`season\``);
        await queryRunner.query(`DROP TABLE IF EXISTS \`season_less_payment\`.\`payment\``);
        await queryRunner.query(`DROP TABLE IF EXISTS \`season_less_payment\`.\`customer_summary\``);
        await queryRunner.query(`DROP TABLE IF EXISTS \`season_less_payment\`.\`customer\``);
    }

}
