import {GET_ALL_VACCINATION_SITE, CREATE_VACCINATION_SITE, EDIT_VACCINATION_SITE, DELETE_VACCINATION_SITE } from '../types/vaccinationSiteType'

//get data location
export const getAllVaccSiteActions = (dataVaccSite) => ({
    type: GET_ALL_VACCINATION_SITE,
    dataVaccSite
})
//thêm mới địa điểm
export const addVaccSiteActions = (dataNewVaccSite) => ({
    type: CREATE_VACCINATION_SITE,
    dataNewVaccSite
})
//Sửa địa điểm
export const editVaccSiteActions = (dataChangeVaccSite) => ({
    type: EDIT_VACCINATION_SITE,
    dataChangeVaccSite
})
export const delVaccSiteActions = (idVaccSite) => ({
    type: CREATE_VACCINATION_SITE,
    idVaccSite
})

//Call API
export const getAllDataVaccSite = () => async dispart =>{
    let res = [
        {
            id: 1,
            nameLocation: "Trạm Y Tế Phường Cát Linh",
            homeNumber: "22 Cát Linh",
            subDistrict: "Cát Linh",
            district: "Đống Đa",
            city: "Hà Nội",
            nameManager: "Nguyễn Thị Hồng Hoan",
            tableNumber: 1
        },
        {
            id: 2,
            nameLocation: "Trạm Y Tế Phường Cát Linh",
            homeNumber: "22 Cát Linh",
            subDistrict: "Cát Linh",
            district: "Đống Đa",
            city: "Hà Nội",
            nameManager: "Nguyễn Thị Hồng Hoan",
            tableNumber: 1
        },
        {
            id: 3,
            nameLocation: "Trạm Y Tế Phường Cát Linh",
            homeNumber: "22 Cát Linh",
            subDistrict: "Cát Linh",
            district: "Đống Đa",
            city: "Hà Nội",
            nameManager: "Nguyễn Thị Hồng Hoang",
            tableNumber: 2
        } 
    ]

    dispart(getAllVaccSiteActions(res));
}