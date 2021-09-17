import Alert from "components/alert/Alert";
import Header from "components/global/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PageRender from "./PageRender";

function App() {
  return (
    <div className="relative min-h-screen pb-4 pt-20">
      <div className="absolute bg-gradient-to-b from-gray-200 to-gray-100 opacity-75 inset-0 z-0 h-full" />
      <Router>
        <ToastContainer />
        <Alert />
        <Header />
        <Switch>
          <Route exact path="/" component={PageRender} />
          <Route exact path="/:page" component={PageRender} />
          <Route exact path="/:page/:slug" component={PageRender} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
