import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AllData } from './Data/AllData';
import { CartProvider } from './Cart/CartContext';
import AllCart from './Cart/AllCart';
import AllProp from './Cart/properties/AllProp';
import AllDetails from './Details/AllDetails';
import AllContact from './Contact/AllContact';
import AllProducts from './Products/AllProducts';
import AllSingleProduct from './singleproduct/AllSingleProduct';

var ahmed = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "Properties", element: <AllProp /> },
  { path: "Details", element: <AllDetails /> },
  { path: "Contact", element: <AllContact /> },
  { path: "Products", element: <AllProducts /> },
  { path: "singleproduct/:id", element: <AllSingleProduct /> },
  { path: "Cart", element: <AllCart /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AllData>
    <CartProvider>
      <RouterProvider router={ahmed} />
    </CartProvider>
  </AllData>
);