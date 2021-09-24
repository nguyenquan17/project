import { snackActions } from '../../helper/showSnackBar';
import { GET_ALL_VACCINES, CREATE_VACCINE, EDIT_VACCINE } from "../types/vaccinesType";
import {openLoadingAction, closeLoadingAction} from "./loaderAction";

// Định nghĩa Type và dữ liệu đẩy lên

// Lấy data vacxin
export const getAllVaccinesActions = (dataVaccines) => ({
    type: GET_ALL_VACCINES,
    dataVaccines,
});

// Thêm mới vacxin
export const addVaccineAction = (dataNewVaccine) => ({
    type: CREATE_VACCINE,
    dataNewVaccine,
});

// Sửa thông tin vacxin
export const editVaccineAction = (dataChangeVaccine) => ({
    type: EDIT_VACCINE,
    dataChangeVaccine
})

// Xóa vaccine
export const deleteVaccineAction = (idVaccine) => ({
    type: EDIT_VACCINE,
    idVaccine
})

// Thiết lập action call api trong này

// Call API dữ liệu vacxin
export const getDataVaccines = () => async dispatch => {
    let responseData = [
        {
            id: 1,
            name: "Phai dơ",
            nameProduct: "Mỹ",
            timeSpace: "20",
            numberVaccine: 2,
        },
        {
            id: 2,
            name: "Át tra",
            nameProduct: "Anh",
            timeSpace: "40",
            numberVaccine: 2,
        },
        {
            id: 3,
            name: "Cell",
            nameProduct: "Trung Quốc",
            timeSpace: "30",
            numberVaccine: 2,
        },
        {
            id: 4,
            name: "Sino",
            nameProduct: "Trung Quốc",
            timeSpace: "15",
            numberVaccine: 2,
        },
        {
            id: 5,
            name: "QUI",
            nameProduct: "Nga",
            timeSpace: "55",
            numberVaccine: 2,
        },
    ]

    dispatch(getAllVaccinesActions(responseData));
};

// Call API thêm mới vacxin
export const addVaccine = (dataNewVaccine) => async dispatch => {

    /// Bật loading lên khi nào call API xong thì tắt đi
    dispatch(openLoadingAction())

    /// Giả sử call API mất 3s
    setTimeout(() => {
        /// Tắt loading
        dispatch(closeLoadingAction())
    }, 3000)


    dispatch(addVaccineAction(dataNewVaccine))
    return true;
}

// Call API sửa vacxin
export const editVaccine = (dataChangeVaccine) => async dispatch => {

    /// Bật loading lên khi nào call API xong thì tắt đi
    dispatch(openLoadingAction())

    /// Giả sử call API mất 3s
    setTimeout(() => {
        /// Tắt loading
        dispatch(closeLoadingAction())
    }, 3000)


    dispatch(editVaccineAction(dataChangeVaccine))
    return true;
}

// Call API xóa vacxin
export const deleteVaccine = (idVaccine) => async dispatch => {

    /// Bật loading lên khi nào call API xong thì tắt đi
    dispatch(openLoadingAction())

    /// Giả sử call API mất 3s
    setTimeout(() => {
        /// Tắt loading
        dispatch(closeLoadingAction())
    }, 3000)


    dispatch(deleteVaccineAction(idVaccine))
    return true;
}