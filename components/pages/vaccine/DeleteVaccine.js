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
import SCSS from "./VCMNCSS.module.scss";
import VCManagementCSS from "./VCMNCSS.module.scss";

function DeleteVaccine(props) {

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
            snackActions.success('Xóa vacxin thành công 🎉')
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
                className={SCSS.buttonCancel}
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
                        <p>Vaccine ID: {props.id}</p>
                        <p>Tên vacxin: {props.name}</p>
                        <p>Hãng sản xuất: {props.nameProduct}</p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        className={[VCManagementCSS.customButton, VCManagementCSS.buttonClose, "text-left"].join(
                            " "
                        )}
                        onClick={handleClose}
                    >
                        Thoát
                    </Button>
                    <Button
                        variant="contained"
                        className={SCSS.buttonCancel}
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

DeleteVaccine.prototype = {
    id: number,
    name: string,
    nameProduct: string,
    numberVaccine: number,
    timeSpace: number,
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteVaccine);