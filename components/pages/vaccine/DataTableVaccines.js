import {useEffect, useState} from "react";
import {DataGrid} from '@mui/x-data-grid';
import Button from "@mui/material/Button";
import {connect} from "react-redux";
import Chip from '@mui/material/Chip';

import SCSS from "./VCMNCSS.module.scss";
import {getDataVaccines} from '../../../redux/actions/vaccinesAction'
import QuickSearchToolbar from './QuickSearchToolbar'
import EditVaccine from  './EditVaccine'
import DeleteVaccine from "./DeleteVaccine";

const columns = [
    {field: 'id', headerName: 'ID', width: 150},
    {field: 'name', headerName: 'Tên vacxin', width: 200},
    {field: 'nameProduct', headerName: 'Hãng sản xuất', width: 200},
    {
        field: 'numberVaccine', headerName: 'Số liều', width: 150, renderCell: (params) => {
            return <Chip color="success" label={params.row.numberVaccine + " liều"} variant="outlined"/>
        },
    },
    {
        field: 'timeSpace', headerName: 'Khoảng cách 2 mũi', width: 220, renderCell: (params) => {
            return <Chip color="success" label={params.row.timeSpace + " ngày"} variant="outlined"/>
        },
    },
    {
        field: 'editer',
        headerName: 'Chỉnh sửa',
        width: 160,
        renderCell: (params) => {
            const dataRow = {
                id: params.row.id,
                name: params.row.name,
                nameProduct: params.row.nameProduct,
                numberVaccine: params.row.numberVaccine,
                timeSpace: params.row.timeSpace,
            }
            return (
                <>
                    <EditVaccine {...dataRow} />
                    <DeleteVaccine {...dataRow} />
                </>)
        },
    },
];

function escapeRegExp(value) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function DataTableVaccines(props) {

    /// Lấy data từ trên redux về
    const {dataVaccines} = props.dataVaccines

    // State
    const [searchText, setSearchText] = useState('');
    const [rows, setRows] = useState([]);

    // search
    const requestSearch = (searchValue) => {
        setSearchText(searchValue);
        const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
        const filteredRows = dataVaccines.filter((row) => {
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
        setRows(dataVaccines);
    }, [dataVaccines]);

    /// Call api
    useEffect(() => {
        props.getDataVaccines();
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
    dataVaccines: state.vaccinesReducer,
});

const mapDispatchToProps = {
    getDataVaccines
};

export default connect(mapStateToProps, mapDispatchToProps)(DataTableVaccines);