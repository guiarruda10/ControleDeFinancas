import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListBymonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import {InputArea} from './components/inputArea'

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListBymonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

      for (let i in filteredList) {
        if (categories[filteredList[i].category].expense) {
          expenseCount += filteredList[i].value;
        } else {
          incomeCount += filteredList[i].value;
        }
      }

      setIncome(incomeCount);
      setExpense(expenseCount);
    }, [filteredList]);


  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  };

  const handleRemove = (item: Item) => {
    const newList = list.filter((i) => i !== item); 
    setList(newList); 
  };
  

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Controle de Finanças Pessoais</C.HeaderText>
      </C.Header>

      <C.Body>
        {/* área de informações */}
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        {/* área de inserção de info */}
        <InputArea onAdd={handleAddItem}  />

        {/* Tabela de Itens */}
        <TableArea
          list={filteredList}
          onRemove={handleRemove}
        />
      </C.Body>

    </C.Container>
  );
};

export default App;
