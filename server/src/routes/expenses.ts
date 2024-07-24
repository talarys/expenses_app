import { Hono } from "hono";

export const expenses = new Hono()

type Expense = {
  id?: number
  title: string
  amount: number
}

const fakeExpenses: Expense[] = [
  { id: 1, title: 'Rent', amount: 1000 },
  { id: 2, title: 'Utilities', amount: 200 },
  { id: 3, title: 'Groceries', amount: 50 },
  { id: 4, title: 'Gasoline', amount: 75 },
  { id: 5, title: 'Dining out', amount: 30 },
  { id: 6, title: 'Travel', amount: 800 },
  { id: 7, title: 'Phone bill', amount: 120 },
  { id: 8, title: 'Internet bill', amount: 60 },
  { id: 9, title: 'Subscription services', amount: 40 },
  { id: 10, title: 'Gifts', amount: 25 }
]

expenses.get("/", c => {
  const result = { expenses: fakeExpenses };
  return c.json(result);
})

expenses.post("/", c => {
  const result = { message: "Expense created successfully" };
  return c.json(result);
})

