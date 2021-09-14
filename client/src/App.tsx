import Header from "components/global/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageRender from "./PageRender";

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute bg-gradient-to-b from-gray-200 to-gray-100 opacity-75 inset-0 z-0" />
      <Router>
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
