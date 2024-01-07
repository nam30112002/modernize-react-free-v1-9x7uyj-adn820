import {CssBaseline, ThemeProvider} from '@mui/material';
import {useRoutes} from 'react-router-dom';
import Router from './routes/Router';

import {baselightTheme} from "./theme/DefaultColors";
import {Provider} from 'react-redux';
import {store} from './store/store';
import CheckAdmin from './views/myPage/userPageComponent/CheckAdmin';
import {SnackbarProvider} from "notistack";


function App() {
    const routing = useRoutes(Router);
    const theme = baselightTheme;
    return (
        <Provider store={store}>
            <SnackbarProvider maxSnack={3}>
                <ThemeProvider theme={theme}>
                    <CheckAdmin/>
                    <CssBaseline/>
                    {routing}
                </ThemeProvider>
            </SnackbarProvider>
        </Provider>
    );
}

export default App;
