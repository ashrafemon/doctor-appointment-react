import React, {Suspense, useEffect} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import routes from "./router";
import SuspenseLoading from "./components/shared/SuspenseLoading";
import {useDispatch} from "react-redux";
import {fetchDoctors} from "./store/actions/doctor/actions";
import Header from "./components/shared/Header";

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        // fetch all doctors
        dispatch(fetchDoctors())
    }, [dispatch])

    return (
        <BrowserRouter>
            <Suspense fallback={<SuspenseLoading/>}>
                {/* Header */}
                <Header/>

                {/* Routes */}
                <Switch>
                    {routes.map((item, index) => (
                        <Route key={index} exact={item.exact} path={item.path} component={item.component}/>
                    ))}
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
