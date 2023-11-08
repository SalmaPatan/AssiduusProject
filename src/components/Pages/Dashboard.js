import React from "react";
import CustomCard from "../GlobalComponents/CustomCard.js";
const Dashboard = () => {
    return (
        <div class="w-screen bg-slate-300 px-10 pt-6 pb-5">
            <div class="grid grid-cols-2 gap-4">
                <CustomCard title={"Checking Account"} cardType={"CHECKING_ACCOUNT"} />
                <CustomCard title={"Invoices Owed to you"} cardType={"INVOICES_CARD"} />
                <CustomCard title={"Total cash flow"} cardType={"CASH_FLOW"} />
                <CustomCard title={"Account watchlist"} cardType={"ACCOUNT_WATCHLIST"} />
            </div>

        </div>
    )
}

export default Dashboard;