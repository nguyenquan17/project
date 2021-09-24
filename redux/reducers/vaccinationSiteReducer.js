import * as TYPE from "../types/vaccinationSiteType";

const initialState = {
    dataVaccSite: []
}

const vaccinationSiteReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.GET_ALL_VACCINATION_SITE:
            state.dataVaccSite = [...action.dataVaccSite];
            return {...state};
        
        case TYPE.CREATE_VACCINATION_SITE:

            const newVaccinationSite = {
                
            }
            return {...state};
        case TYPE.EDIT_VACCINATION_SITE:

            return {...state};

        case TYPE.DELETE_VACCINATION_SITE:

            return {...state};
        
        default:
            return {...state};
    }
}

export default vaccinationSiteReducer;