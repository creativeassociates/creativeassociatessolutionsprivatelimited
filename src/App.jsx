import {Routes, Route, Navigate} from "react-router-dom";
import {navRoutes, routes} from "./routes.jsx";
import styles from "./App.module.css";
import {Meta} from "./meta.jsx";


function App() {

    return (<>
        <Meta/>
        <Routes>
            {navRoutes.map(({path, element}, key) => element &&
                <Route key={key} exact path={path} element={element}/>)}
            {routes.map(({path, element}, key) => element &&
                <Route key={key} exact path={path} element={element}/>)}
        </Routes>
    </>);
}

export default App;