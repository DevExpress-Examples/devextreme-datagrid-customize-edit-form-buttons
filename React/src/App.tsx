import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import TabPanel, { Item } from 'devextreme-react/tab-panel';
import EditingPopup from './components/EditingPopup.tsx';
import EditingForm from './components/EditingForm.tsx';

function App(): JSX.Element {
  return (
    <div className="main">
      <TabPanel
        deferRendering={false}
      >
        <Item title="Popup" component={EditingPopup}></Item>
        <Item title="Form" component={EditingForm}></Item>
      </TabPanel>
    </div>
  );
}

export default App;
