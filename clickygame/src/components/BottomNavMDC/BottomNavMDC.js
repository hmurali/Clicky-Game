import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import "./BottomNavMDC.css"

const BottomNavMDC = props => (
    <ButtomNavigation {...props}>
        {props.children}
    </ButtomNavigation>
)

export default BottomNavMDC;