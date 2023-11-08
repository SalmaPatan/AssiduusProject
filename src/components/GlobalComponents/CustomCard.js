import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { OutlinedInput } from '@mui/material';
import LineGraph from '../Graphs/LineGraph';
import BarGraph from '../Graphs/BarGraph';
import BarInAndOutGraph from '../Graphs/BarInAndOutGraph';
import { getAccountWatchListData, getCashFlowListData } from '../../redux/userSlice';
import { connect } from 'react-redux';
import CustomMuiTable from './CustomMUiTable';
import CustomDialog from './CustomDailog';
import { Select, MenuItem, FormControl } from '@mui/material';

const CustomCard = ({ title, cardType, getAccountWatchListData, accountWatchListData, getCashFlowListData, cashFlowListData }) => {
  const [dialogDetails, setDailogDetails] = useState({ open: false, content: '', title: '', primaryButtonText: '', secondaryButtonText: '' });
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [selectedMonthData, setSelectedMonthData] = useState({});
  const Months = ['January', 'February'];
  const ManageOptions = ['Manage', 'Change'];

  useEffect(() => {
    getAccountWatchListData({});
    getCashFlowListData();

  },)

  useEffect(() => {
    if (cashFlowListData) {
      setSelectedMonthData(cashFlowListData.find(obj => obj.month === selectedMonth))

    }
    else {
      setSelectedMonthData(cashFlowListData[0])

    }

  }, [selectedMonth, cashFlowListData])

  const FileUploadContent = () => {
    return (
      <div class="h-36 w-96 border border-dashed border-black flex flex-col justify-center items-center">
        <p class="text-center font-bold">Upload your file here By clicking on Below Button</p>
        <div class="flex flex-col justify-center items-center">
          <input type="file" />
          <button class='bg-green-500 text-white rounded-lg m-2 h-10 w-20' >Upload</button>
        </div>
      </div>
    )
  }

  const handleCloseDialog = () => {
    setDailogDetails({ open: false, content: '', title: '', primaryButtonText: '', secondaryButtonText: '' })
  }

  const handleOpenDialog = () => {
    setDailogDetails({ open: true, content: <FileUploadContent />, title: 'File Upload', primaryButtonText: 'Upload', secondaryButtonText: 'Cancel' })
  }

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value)
  }

  return (
    <div>
      <Card className='h-full' style={{ borderRadius: '15px' }}>
        <CardContent class="p-1">
          <div class="flex justify-between items-center px-3 py-2 h-16">
            <h1 class="font-bold">{title}</h1>
            {cardType === "CHECKING_ACCOUNT" ?
              <div class="flex flex-row items-center">
                <FormControl sx={{ m: 1 }} variant="outlined" style={{ width: '120px' }} >
                  <Select
                    value={ManageOptions[0]}
                    onChange={handleMonthChange}
                    input={<OutlinedInput />}
                    style={{ height: '40px' }}
                    readOnly
                  >
                    {
                      ManageOptions.map((month) => (
                        <MenuItem value={month} >{month}</MenuItem>

                      ))
                    }

                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1 }} variant="outlined" style={{ width: '120px' }}>
                  <Select
                    value={selectedMonth}
                    onChange={handleMonthChange}
                    input={<OutlinedInput />}
                    style={{ height: '40px' }}
                  >
                    {
                      Months.map((month) => (
                        <MenuItem value={month}>{month}</MenuItem>

                      ))
                    }
                  </Select>
                </FormControl>
              </div>
              :
              cardType === "INVOICES_CARD" ?
                <button class="capitalize bg-sky-100 p-2 rounded-md text-sky-600 pointer" onClick={() => handleOpenDialog()}>
                  New Sales Invoice
                </button>
                :
                cardType === "CASH_FLOW" ?
                  <>
                    <div class="flex flex-row">
                      <span class="flex flex-row items-center mr-1">In <div class="h-5 w-5 rounded-lg bg-green-400 ml-1"> </div></span>
                      <span class="flex flex-row items-center mr-1">Out <div class="h-5 w-5 rounded-lg bg-green-600 ml-1"> </div></span>

                    </div>
                  </>
                  :
                  ''
            }
          </div>
          <hr class="bg-gray-100 h-px" />
          <Typography>
            {cardType === "CHECKING_ACCOUNT" && selectedMonthData ?
              <LineGraph
                data={selectedMonthData.data}
              />
              :
              cardType === "INVOICES_CARD" ?
                <BarGraph />
                :
                cardType === "CASH_FLOW" ?
                  <BarInAndOutGraph />
                  :
                  <CustomMuiTable
                    columns={accountWatchListData.columns}
                    data={accountWatchListData.data}

                  />
            }
          </Typography>
        </CardContent>
      </Card>
      <CustomDialog
        open={dialogDetails.open}
        title={dialogDetails.title}
        content={dialogDetails.content}
        primaryButtonText={dialogDetails.primaryButtonText}
        secondaryButtonText={dialogDetails.secondaryButtonText}
        handleClose={handleCloseDialog}

      />
    </div>

  );
};

const mapStateToProps = (state) => ({
  accountWatchListData: state.app.accountWatchListData,
  cashFlowListData: state.app.cashFlowListData,


})

const mapDispatchToProps = {
  getAccountWatchListData,
  getCashFlowListData
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomCard);



