import {useState} from "react";
import Button from "@mui/material/Button";
import {connect} from "react-redux";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import {snackActions} from '../../../helper/showSnackBar';
import {deleteVaccine} from "../../../redux/actions/vaccinesAction";
import {number, string} from "prop-types";
import VaccSiteCSS from "../vaccine/VCMNCSS.module.scss";

function DeleteVaccinationSite(props) {

    const [openDelete, setOpenDelete] = useState(false);

    const handleClickOpen =  () => {
        setOpenDelete(true);
    };

    const handleClose = () => {
        setOpenDelete(false);
    };

    const onClickDeleteVaccine = async () => {
        const result = await props.deleteVaccine(props.id);
        if (result) {
            snackActions.success('Xóa thành công 🎉')
            handleClose()
        } else {
            snackActions.error('Xóa thất bại, hệ thống đang gặp vấn đề')
            handleClose()
        }
    }

    return (
        <>
            <Button
                variant="contained"
                className={VaccSiteCSS.buttonCancel}
                onClick={handleClickOpen}
            >
                <i className="fas fa-trash-alt"/>
            </Button>
            <Dialog
                open={openDelete}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Bạn có chắc chắn muốn xóa không?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <p>ID: {props.id}</p>
                        <p>Tên điểm tiêm: {props.nameLocation}</p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        className={[VaccSiteCSS.customButton, VaccSiteCSS.buttonClose, "text-left"].join(
                            " "
                        )}
                        onClick={handleClose}
                    >
                        Thoát
                    </Button>
                    <Button
                        variant="contained"
                        className={VaccSiteCSS.buttonCancel}
                        onClick={onClickDeleteVaccine}
                    >
                        Đồng ý
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    deleteVaccine
};

// DeleteVaccine.prototype = {
//     id: number,
//     name: string,
//     nameProduct: string,
//     numberVaccine: number,
//     timeSpace: number,
// }
DeleteVaccinationSite.prototype = {
    id: number,
    nameLocation: string,
    homeNumber: string,
    subDistrict: string,
    district: string,
    city: string,
    nameManager: string,
    tableNumber: number
}
export default connect(mapStateToProps, mapDispatchToProps)(DeleteVaccinationSite);