import {useEffect, useState} from "react";
import {DataGrid} from '@mui/x-data-grid';
// import Button from "@mui/material/Button";
import {connect} from "react-redux";
import Chip from '@mui/material/Chip';

// import SCSS from "./VCMNCSS.module.scss";
import {getAllDataVaccSite} from '../../../redux/actions/vaccinationSiteAction'
import DeleteVaccinationSite from "./DeleteVaccinationSite";
import EditVaccinationSite from "./EditVaccinationSite";
import QuickSearchToolbar from './QuickSearchToolbar'
// import EditVaccine from  './EditVaccine'
// import DeleteVaccine from "./DeleteVaccine";

const columns = [
    {field: 'id', headerName: 'ID', width: 100},
    {field: 'nameLocation', headerName: 'Tên điểm tiêm', width: 200},
    {field: 'homeNumber', headerName: 'Số nhà', width: 200},
    {field: 'subDistrict', headerName: 'Xã/Phường', width: 200},
    {field: 'district', headerName: 'Quận/Huyện', width: 180},
    {field: 'city', headerName: 'Tỉnh/Thành phố', width: 190},
    {field: 'nameManager', headerName: 'Người phụ trách', width: 200},
    {
        field: 'tableNumber', headerName: 'Số bàn', width: 130, renderCell: (params) => {
            return <Chip color="success" label={params.row.tableNumber + " bàn"} variant="outlined"/>
        },
    },
    {
        field: 'editer',
        headerName: 'Chỉnh sửa',
        width: 160,
        renderCell: (params) => {
            const dataRow = {
                id: params.row.id,
                nameLocation: params.row.nameLocation,
                homeNumber: params.row.homeNumber,
                subDistrict: params.row.subDistrict,
                district: params.row.district,
                city: params.row.city,
                nameManager: params.row.nameManager,
                tableNumber: params.row.tableNumber
            }
            return (
                <>
                    <EditVaccinationSite {...dataRow} />
                    <DeleteVaccinationSite {...dataRow} />
                </>)
        },
    },
];

function escapeRegExp(value) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function DataTableVaccinationSite(props) {

    /// Lấy data từ trên redux về
    const {dataVaccSite} = props.dataVaccSiteFromRedux
    console.log(dataVaccSite);
    // State
    const [searchText, setSearchText] = useState('');
    const [rows, setRows] = useState([]);

    // search
    const requestSearch = (searchValue) => {
        setSearchText(searchValue);
        const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
        const filteredRows = dataVaccSite.filter((row) => {
            return Object.keys(row).some((field) => {
                return searchRegex.test(row[field].toString());
            });
        });
        setRows(filteredRows);
    };

    const [sortModel, setSortModel] = useState([
        {
            field: 'id',
            sort: 'asc',
        },
    ]);
    const [pageSize, setPageSize] = useState(5);

    useEffect(() => {
        setRows(dataVaccSite);
    }, [dataVaccSite]);

    /// Call api
    useEffect(() => {
        props.getAllDataVaccSite();
        console.log("run effect")
    }, [])

    return (
        <div style={{height: 450, width: '100%'}}>
            <DataGrid
                components={{Toolbar: QuickSearchToolbar}}
                rows={rows}
                columns={columns}
                sortModel={sortModel}
                onSortModelChange={(model) => setSortModel(model)}
                rowsPerPageOptions={[5, 10, 20, 30]}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                componentsProps={{
                    toolbar: {
                        value: searchText,
                        onChange: (event) => requestSearch(event.target.value),
                        clearSearch: () => requestSearch(''),
                    },
                }}
            />
        </div>
    );
}

const mapStateToProps = (state) => ({
    dataVaccSiteFromRedux: state.vaccinationSiteReducer,
});

const mapDispatchToProps = {
    getAllDataVaccSite
};

export default connect(mapStateToProps, mapDispatchToProps)(DataTableVaccinationSite);