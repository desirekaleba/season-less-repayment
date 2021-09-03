export const findAll = (): string => {
    return `
        SELECT s.season_id, s.season_name, s.start_date, s.end_date FROM season s
        ORDER BY s.season_id DESC
    `;
};

export const findById = (seasonId: number): string => {
    return `
        SELECT s.season_id, s.season_name, s.start_date, s.end_date FROM season s
        WHERE s.season_id = ${seasonId}
    `;
};

export const findByName = (seasonName: string): string => {
    return `
        SELECT s.season_id, s.season_name, s.start_date, s.end_date FROM season s
        WHERE s.season_name LIKE '%${seasonName}%'
    `;
};
