import React , { Fragment } from 'react';
import { Responsive , Button } from 'semantic-ui-react';

export default ({btnName})=>{
    return (
        <Fragment>
            <Responsive {...Responsive.onlyMobile}>
                <Button fluid type='submit' primary>{btnName}</Button>
            </Responsive>
            <Responsive {...Responsive.onlyTablet}>
                <Button fluid type='submit' primary>{btnName}</Button>
            </Responsive>
            <Responsive {...Responsive.onlyComputer}>
                <Button type='submit' primary>{btnName}</Button>
            </Responsive>
        </Fragment>
    )
}

