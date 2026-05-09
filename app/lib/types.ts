export interface Transaction{
    running_balance: string,
    account_id: string,
    amount: number,
    details: {
        processing_status: string,
        category: string,
    },
    description: string,
    date: string,
    type: string,
    id: string,
    status: string
}