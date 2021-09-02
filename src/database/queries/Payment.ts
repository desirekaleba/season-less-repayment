export const findAll = (): string => {
    return `
        SELECT p.id, p.amount, p.date, c.customer_id, c.customer_name, s.season_id, s.season_name FROM payment p
        INNER JOIN customer c ON p.customer_id = c.customer_id
        INNER JOIN season s ON p.season_id = s.season_id
        GROUP BY p.id
        ORDER BY p.id DESC
    `;
};

export const findByCustomerId = (customerId: number): string => {
    return `
        SELECT p.id, p.amount, p.date, c.customer_id, c.customer_name, s.season_id, s.season_name FROM payment p
        INNER JOIN customer c ON p.customer_id = c.customer_id
        INNER JOIN season s ON p.season_id = s.season_id
        WHERE p.customer_id = ${customerId}
        GROUP BY p.id
        ORDER BY p.id DESC
    `;
};

export const findBySeasonId = (seasonId: number): string => {
    return `
        SELECT p.id, p.amount, p.date, c.customer_id, c.customer_name, s.season_id, s.season_name FROM payment p
        INNER JOIN customer c ON p.customer_id = c.customer_id
        INNER JOIN season s ON p.season_id = s.season_id
        WHERE p.season_id = ${seasonId}
        GROUP BY p.id
        ORDER BY p.id DESC
    `;
};
