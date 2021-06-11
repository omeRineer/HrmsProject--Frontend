import logo from './logo.svg';
import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import Sidebar from './layouts/Sidebar';
import { Container, Grid, GridColumn, GridRow } from 'semantic-ui-react';
import JobPostingList from './pages/JobPostingList';

function App() {
  return (
    <div className="App">
      <Dashboard/>
      {/* <Navi/>
      <Container className="main">
        <Grid>
          <GridRow>
            <GridColumn width={4}>
              <Sidebar/>
            </GridColumn>
            <GridColumn width={12}>
              <JobPostingList/>
            </GridColumn>
          </GridRow>
        </Grid>
      </Container> */}
    </div>
  );
}

export default App;
