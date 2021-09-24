import {useState} from "react";
import Button from "@mui/material/Button";
import VCManagementCSS from "../vaccine/VCMNCSS.module.scss";
import {connect} from "react-redux";

import CustomInput from "../../common/Input/CustomInput";
import {snackActions} from '../../../helper/showSnackBar';

//lay tu redux
import {editVaccine} from "../../../redux/actions/vaccinesAction";

import {validationInvalid} from "../../../helper/validation";
import CustomButtonModal from "../../common/Modal/customButtonModal";
import {number, string} from "prop-types";
import SCSS from "../vaccine/VCMNCSS.module.scss";

function EditVaccinationSite(props) {

    // Bật tắt modal thêm mới
    const [openModal, setModal] = useState(false);
    const handleOpenCreate = () => setModal(true);
    const handleCloseCreate = () => setModal(false);

    // Dữ liệu khởi tạo
    const [dataChangeVaccinationSite, setDataChangeVaccinationSite] = useState({
        value: {
            nameLocation: props.nameLocation,
            homeNumber: props.homeNumber,
            subDistrict: props.subDistrict,
            district: props.district,
            city: props.city,
            nameManager: props.nameManager,
            tableNumber: props.tableNumber
        },
        error: {
            nameLocation: false,
            homeNumber: false,
            subDistrict: false,
            district: false,
            city: false,
            nameManager: false,
            tableNumber: false
        }
    })

    // Thiết lập hàm onClick thêm mới vacxin
    const onClickChangeVaccine = async () => {
        if (dataChangeVaccinationSite.error.nameLocation ||
            dataChangeVaccinationSite.error.homeNumber ||
            dataChangeVaccinationSite.error.subDistrict ||
            dataChangeVaccinationSite.error.district ||
            dataChangeVaccinationSite.error.city ||
            dataChangeVaccinationSite.error.nameManager ||
            dataChangeVaccinationSite.error.tableNumber
            ) {
            snackActions.error('Tạo mới thất bại, dữ liệu không hợp lệ')
        } else {
            if (dataChangeVaccinationSite.value.nameLocation.length === 0 ||
                dataChangeVaccinationSite.value.homeNumber.length === 0 ||
                dataChangeVaccinationSite.value.subDistrict.length === 0 ||
                dataChangeVaccinationSite.value.district.length === 0 ||
                dataChangeVaccinationSite.value.city.length === 0 ||
                dataChangeVaccinationSite.value.nameManager === 0||
                dataChangeVaccinationSite.value.tableNumber === 0) {
                setDataChangeVaccine(state => ({
                    value: state.value,
                    error: {
                        nameLocation: validationInvalid(state.value.nameLocation),
                        homeNumber: validationInvalid(state.value.homeNumber),
                        subDistrict: validationInvalid(state.value.subDistrict),
                        district: validationInvalid(state.value.district),
                        city: validationInvalid(state.value.city),
                        nameManager: validationInvalid(state.value.nameManager),
                        tableNumber: validationInvalid(state.value.tableNumber)
                    }
                }))
                snackActions.error('Sửa thất bại, dữ liệu không hợp lệ')
            } else {
                const result = await props.editVaccine(dataChangeVaccinationSite.value)
                if (result) {
                    snackActions.success('Sửa thông tin điểm tiêm thành công 🎉')
                    setModal(false)
                } else {
                    snackActions.error('Sửa thất bại, hệ thống đang gặp vấn đề')
                }
            }
        }
    }

    return (
        <>
            <Button
                variant="contained"
                className={SCSS.buttonEdit}
                onClick={handleOpenCreate}
            >
                <i className="fas fa-edit"/>
            </Button>
            <CustomButtonModal isOpen={openModal} closeModal={handleCloseCreate}>
                <div className="d-flex text-right">
                    <button
                        className="cursor-pointer text-black opacity-50 px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        type="button"
                    >
                        <i
                            onClick={handleCloseCreate}
                            className="m-0 p-0 far fa-times-circle text-2xl font-bold text-blueGray-600"
                        />
                    </button>
                </div>
                <div className="block uppercase text-blueGray-600 text-lg font-bold mb-3 text-center">
                    Sửa đơn vị tiêm
                </div>
                {/* modal */}
                <div>
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-3"
                        htmlFor="grid-password"
                    >
                        ID: <span className="text-xl">{props.id}</span>
                    </label>
                    
                    <div className={VCManagementCSS.wrapperButtonModal}>
                        <Button
                            variant="contained"
                            className={[VCManagementCSS.customButton, VCManagementCSS.buttonClose].join(
                                " "
                            )}
                            onClick={handleCloseCreate}
                        >
                            Hủy
                        </Button>
                        <Button
                            variant="contained"
                            className={SCSS.buttonEdit}
                            onClick={() => {
                                onClickChangeVaccine()
                            }}
                        >
                            Sửa
                        </Button>
                    </div>
                </div>
            </CustomButtonModal>
        </>
    )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    editVaccine
};

EditVaccinationSite.prototype={
    id: number,
    nameLocation: string,
    homeNumber: string,
    subDistrict: string,
    district: string,
    city: string,
    nameManager: string,
    tableNumber: number
}

export default connect(mapStateToProps, mapDispatchToProps)(EditVaccinationSite);

