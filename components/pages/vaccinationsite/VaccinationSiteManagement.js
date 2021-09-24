import React from 'react'
import DataTableVaccinationSite from './DataTableVaccinationSite'


export default function VaccinationSiteManagement() {
    return (
        <>
            <div className="">
                <div className="my-5 ml-2 uppercase text-blueGray-600 text-lg font-bold ">
                    Đơn vị tiêm chủng
                </div>
            </div>
            <DataTableVaccinationSite />
            
        </>
    )
}


