import { RootType } from '../../store';


// GET COUNT
export const getCount = (state: RootType) => state.cart.amount;