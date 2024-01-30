import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import { Button, Stack } from 'react-bootstrap'
import BudgetCard from './components/BudgetCard'
import AddBudgetModal from './components/AddBudgetModal'
import { useBudgets } from './context/BudgetsContext'
import AddExpenseModal from './components/AddBudgetModal'


function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const {budgets, getBudgetExpenses} = useBudgets()
  return (
    <>
    <Container className='my-4'>
      <Stack direction='horizontal' gap='2' className='mb-4'>
        <h1 className='me-auto'> Budgets</h1>
        <Button variant='primary' onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button>
        <Button variant='outline-primary'>Add Expense</Button>
      </Stack>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1rem',
        alignItems: 'flex-start',
        }}>
          
          {budgets.map(budgets => {
            const amount = getBudgetExpenses(budgets.id).reduce(
              (total, expense) => total + expense.amount, 0)
            return (
              <BudgetCard
                key={budgets.id}
                name={budgets.name}
                // gray
                amount={amount}
                max={budgets.max}>
              </BudgetCard>
          
            )


        
          })}

        


      </div>
    </Container>
      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => setShowAddBudgetModal(false)}
      />
      <AddExpenseModal show={true}
        // handleClose={() => setShowAddExpenseModal(false)}
      />
    </>
  );
}

export default App;
