import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "a1b2c3d4",
            amount: 250,
            status: "pending",
            email: "alice@example.com",
        },
        {
            id: "e5f6g7h8",
            amount: 75,
            status: "failed",
            email: "bob@example.com",
        },
        {
            id: "i9j0k1l2",
            amount: 320,
            status: "pending",
            email: "carol@example.com",
        },
        {
            id: "m3n4o5p6",
            amount: 180,
            status: "pending",
            email: "dave@example.com",
        },
        {
            id: "q7r8s9t0",
            amount: 210,
            status: "pending",
            email: "eve@example.com",
        },
    ]
}

export default async function CustomTable() {
    const data = await getData()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}