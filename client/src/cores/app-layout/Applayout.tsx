import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "../../routing/intex";
import { Footer, Header } from "..";

const AppLayout: React.FC = () => {
  return (
    <>
      <main>
        <Header />
        <div>
          <Suspense fallback={<div>loading........</div>}>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default AppLayout;
