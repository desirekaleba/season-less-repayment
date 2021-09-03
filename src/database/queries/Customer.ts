export const findAll = (): string => {
    return `
        SELECT c.customer_id, c.customer_name FROM customer c
    `;
};

export const findById = (customerId: number): string => {
    return `
        SELECT c.customer_id, c.customer_name FROM customer c
        WHERE c.customer_id = ${customerId}
    `;
};

export const findByName = (customerName: string): string => {
    return `
        SELECT c.customer_id, c.customer_name FROM customer c
        WHERE c.customer_name LIKE '%${customerName}%'
    `;
};
