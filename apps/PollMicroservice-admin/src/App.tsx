import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PollList } from "./poll/PollList";
import { PollCreate } from "./poll/PollCreate";
import { PollEdit } from "./poll/PollEdit";
import { PollShow } from "./poll/PollShow";
import { OptionList } from "./option/OptionList";
import { OptionCreate } from "./option/OptionCreate";
import { OptionEdit } from "./option/OptionEdit";
import { OptionShow } from "./option/OptionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PollMicroservice"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Poll"
          list={PollList}
          edit={PollEdit}
          create={PollCreate}
          show={PollShow}
        />
        <Resource
          name="Option"
          list={OptionList}
          edit={OptionEdit}
          create={OptionCreate}
          show={OptionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
