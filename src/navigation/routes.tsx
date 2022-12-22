import React from "react";

const CharactersListPage = React.lazy(() => import("../pages/CharactersListPage"));

const routes: Route[] = [
  {
    path: "/",
    component: CharactersListPage,
    title: "Rick And Morty",
  },
];

interface Route {
  path: string;
  component: React.LazyExoticComponent<any>;
  title: string;
}

export default routes;
