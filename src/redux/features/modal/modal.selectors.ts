import { RootType } from '../../store';


// IS MODAL OPEN SELECTOR
export const isModalOpenSelector = (state: RootType) => state.modal.isOpen;