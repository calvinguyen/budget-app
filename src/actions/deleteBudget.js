import { toast } from 'react-toastify';
import { deleteItem, getAllMatchingItems } from '../helpers';
import { redirect } from 'react-router-dom';

export function deleteBudget({ params }) {
  try {
    deleteItem({
      key: 'budgets',
      id: params.id,
    });

    const relatedExpenses = getAllMatchingItems({
      category: 'expenses',
      key: 'budgetId',
      value: params.id,
    });

    relatedExpenses.forEach((item) => {
      deleteItem({
        key: 'expenses',
        id: item.id,
      });
    });

    toast.success('Budget deleted successfully');
  } catch (error) {
    throw new Error('There was a problem deleting your budget.');
  }

  return redirect('/');
}
