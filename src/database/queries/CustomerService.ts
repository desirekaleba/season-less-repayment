export const findAll = (): string => {
    return `
        SELECT cs.id, cs.total_paid, cs.total_credit, c.customer_id, c.customer_name, s.season_id, s.season_name FROM customer_summary cs
        INNER JOIN customer c ON cs.customer_id = c.customer_id
        INNER JOIN season s ON cs.season_id = s.season_id
        GROUP BY cs.id
        ORDER BY cs.id DESC
    `;
};

export const findByCustomerAndSeason = (customerId: number, seasonId: number): string => {
    return `
        SELECT cs.id, c.customer_id, s.season_id, cs.total_paid, cs.total_credit FROM customer_summary cs
        INNER JOIN customer c ON cs.customer_id = c.customer_id
        INNER JOIN season s ON cs.season_id = s.season_id
        WHERE cs.customer_id = ${customerId} AND cs.season_id = ${seasonId}
        ORDER BY cs.id DESC
    `;
};

export const findByCustomer = (customerId: number): string => {
    return `
        SELECT cs.id, c.customer_id, cs.season_id, cs.total_paid, cs.total_credit FROM customer_summary cs
        INNER JOIN customer c ON cs.customer_id = c.customer_id
        WHERE cs.customer_id = ${customerId}
        GROUP BY cs.season_id
        ORDER BY cs.id
    `;
};

export const findSeason = (customerId: number): string => {
    return `
        SELECT cs.id, c.customer_id, cs.season_id, cs.total_paid, cs.total_credit FROM customer_summary cs
        INNER JOIN customer c ON cs.customer_id = c.customer_id
        WHERE cs.customer_id = ${customerId}
        GROUP BY cs.season_id
        ORDER BY cs.id ASC
    `;
};

