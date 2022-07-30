import Dashboard from "../pages/dashboard/Dashboard";
import { Grid } from "../pages/grid/Grid";
import LokiZone from "../pages/loki/LokiZone";

export const routes = [
  {
    header: "Dashboard",
    path: "/",
    component: Dashboard,
  },
  {
    header: "Loki Zone",
    path: "loki-zone",
    component: LokiZone,
  },
  {
    header: "Grid",
    path: "/grid",
    component: Grid,
  },
  {
    header: "TBD",
    path: "/2",
    component: () => <></>,
  },
  {
    header: "TBD",
    path: "/3",
    component: () => <></>,
  },
];
