import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "../layout";
import {
  Attendance,
  DashboardPage,
  ErrorPage,
  Event,
  Location,
  Region,
  Role,
  Users,
} from "../pages";

export const AppRouter = () => {
  return (
    <BaseLayout>
      <Routes>
        <Route path="/" exact element={<DashboardPage />} />
        <Route path="/users/*" element={<Users />} />
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
