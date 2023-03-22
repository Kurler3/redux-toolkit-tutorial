import { createSlice } from '@reduxjs/toolkit';

export interface ModalState {
     isOpen: boolean;
}

const initialState: ModalState = {
    isOpen: false,
};

const modalSlice = createSlice({
    name: "model",
    initialState,
    reducers: {

        // OPEN MODAL
        openModal: (state) => {
            state.isOpen = true;
        },

        // CLOSE MODAL
        closeModal: (state) => {
            state.isOpen = false;
        }

    },
});

// EXPORT ACTIONS
export const {
    openModal,
    closeModal,
} = modalSlice.actions;

export default modalSlice.reducer;