import { Item } from '../../types/Item';
import * as C from './styles';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';
import trashIcon from './trashIcon.png';


type Props = {
    item: Item;
    onRemove: (item: Item) => void;
}

export const TableItem = ({ item, onRemove }: Props) => {
    const isExpense = categories[item.category]?.expense;

    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={isExpense ? '#BE3144' : 'green'}>
                    {isExpense ? '-' : '+'} R$ {item.value}
                </C.Value>
            </C.TableColumn>
            <C.TableColumn>
                <C.ButtonRemove onClick={() => onRemove(item)}>
                    <img src={trashIcon} alt="Remover" />
                </C.ButtonRemove>
            </C.TableColumn>
        </C.TableLine>
    );
};
