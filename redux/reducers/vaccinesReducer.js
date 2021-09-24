import * as TYPE from "../types/vaccinesType";

const initialState = {
    count: 5,
    dataVaccines: [],
}

const vaccinesReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.GET_ALL_VACCINES:
            state.dataVaccines = [...action.dataVaccines]
            return { ...state }

        case TYPE.CREATE_VACCINE:
            state.count += 1;
            const newVaccine = {
                    id: state.count,
                    name: action.dataNewVaccine.name,
                    nameProduct: action.dataNewVaccine.nameProduct,
                    timeSpace: action.dataNewVaccine.timeSpace,
                    numberVaccine: action.dataNewVaccine.numberVaccine,
                }
            state.dataVaccines = [...state.dataVaccines, ...[newVaccine]]
            return { ...state }

        case TYPE.EDIT_VACCINE:
            // Đợi có API thì load lại là xong
            return { ...state }

        case TYPE.DELETE_VACCINE:
            // Đợi có API thì load lại là xong
            return { ...state }

        default:
            return { ...state }
    }
}

export default vaccinesReducer