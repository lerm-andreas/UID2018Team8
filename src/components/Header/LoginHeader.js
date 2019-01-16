import React from "react";
import Divider from "@material-ui/core/Divider/Divider";
import Typography from "@material-ui/core/Typography/Typography";

const LoginHeader = () => {
    return (
        <div>
            <Typography variant="h4">Welcome!  Please login to use our app.</Typography>
            <Divider/>
        </div>

    )
};

export default LoginHeader;