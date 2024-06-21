import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "../layout";
import { DashboardPage, ErrorPage } from "../pages";
import {
  Attendance,
  Event,
  Location,
  Region,
  Role,
  Users,
} from "../Components";

export const AppRouter = () => {
  return (
    <BaseLayout>
      <Routes>
        <Route path="/" exact element={<DashboardPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/makeattendance" element={<Attendance />} />
        <Route path="/role" element={<Role />} />
        <Route path="/event" element={<Event />} />
        <Route path="/region" element={<Region />} />
        <Route path="/location" element={<Location />} />
        <Route path="/*" element={<ErrorPage code={404} />} />
      </Routes>
    </BaseLayout>
  );
};
