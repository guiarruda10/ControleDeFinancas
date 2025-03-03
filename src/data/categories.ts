import { Category } from '../types/Category'

export const categories: Category = {
    accounts: {title: 'Contas', color: '#BE3144', expense: true},
    shopping: {title: 'Variavéis', color: '#BE3144', expense: true},
    food: { title: 'Alimentação', color: '#98D8EF', expense: true },
    rent: { title: 'Aluguel', color: '#BE3144', expense: true  },
    extra: { title: 'Ganhos Extras', color: '#5D8736', expense: false },
    salary: { title: 'Salário', color: '#5D8736', expense: false }
}