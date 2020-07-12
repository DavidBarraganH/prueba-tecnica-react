import React, {Fragment} from "react";
import Menu from "./Menu";
import Form from "./Form/Form";

const Layout = () => { 

    return (
        <Fragment>
            <div className="pageLayout">
                 <Menu/>
                 <Form/>
            </div>
        </Fragment>
    );
}

export default Layout;