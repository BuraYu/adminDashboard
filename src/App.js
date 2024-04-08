import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import { Route, Routes } from "react-router-dom";
import Team from "./scenes/team";
// import Invoice from "./scenes/dashboard";
// import Contacts from "./scenes/contacts";
import Bar from "./components/BarChart"
import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/dashboard";
import Faq from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calender from "./scenes/calender";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              {/* <Route path="/invoice" element={<Invoice />} />
              <Route path="/contacts" element={<Contacts />} /> */}
              <Route path="/bar" element={<Bar />} />
              <Route path="/form" element={<Form />} />
              {/* <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} /> */}
              <Route path="/faq" element={<Faq />} />
              {/* <Route path="/geography" element={<Geography />} />
              <Route path="/calender" element={<Calender />} /> */}
            </Routes>
          </main>
        </div>
        ;
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
