import { BrowserRouter, Route, Routes } from "react-router-dom";
import SigninPage from "./components/SignIn";
import Signup from "./components/SignUp";
import ProviderSignup from "./components/ProviderSignup";
import EntrepreneurSignup from "./components/EntrepreneurSignup";
import AdminHome from "./components/HomePage/adminHome";
import ServiceProviderHome from "./components/HomePage/ServiceProviderHome";
import AddServiceProvider from "./components/Forms/AddServiceProvider";
import EditServiceProvider from "./components/Forms/EditServiceProvider";
import AddServices from "./components/Forms/AddServices";
import EditServiceCategory from "./components/Forms/EditServiceCateory";
import AddPackage from "./components/Forms/AddPackage";
import EntrepreneurHome from "./components/HomePage/EntrepreneurHome";
import AddProducts from "./components/Forms/AddProducts";
import EditProduct from "./components/Forms/EditProduct";
import CustomerHome from "./components/HomePage/CustomerHome";
import FullProductSection from "./components/Home_Components/FullProductSection";
import ServicesSection from "./components/Home_Components/ServicesSection";
import Cart from "./components/Home_Components/Cart";
import CheckoutPage from "./components/Home_Components/CheckoutPage";
import Checkout from "./components/Home_Components/Checkout";
import MyOrders from "./components/Home_Components/MyOrders";
import EntrepreneurOrders from "./components/Tables/EntrepreneurOrders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*---------------------------Authentication Pages Route Start---------------------------------- */}

        <Route path="/" element={<SigninPage/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/ProviderSignup" element={<ProviderSignup/>} />
        <Route path="/EntrepreneurSignup" element={<EntrepreneurSignup/>} />

        {/*---------------------------Authentication Pages Route End---------------------------------- */}

        {/*---------------------------HomePages Route Start---------------------------------- */}

        <Route path="/AdminHome" element={<AdminHome/>}/>
        <Route path="/ServiceProviderHome" element={<ServiceProviderHome/>} />
        <Route path="/EntrepreneurHome" element={<EntrepreneurHome/>} />
        <Route path="/CustomerHome" element={<CustomerHome/>} />

        {/* -------------------------- HomePages Route End----------------------------- */}
        <Route path="/EntreprenurOrders" element={<EntrepreneurOrders/>} />

        {/* -------------------------- CRUD Route Start----------------------------- */}

        <Route path="/AddServiceProvider" element={<AddServiceProvider/>} />
        <Route path="/EditServiceProvider" element={<EditServiceProvider/>} />

        {/*-------------SERVICE CATEGORY CRUD ----------------*/}
        <Route path="/AddServices" element={<AddServices/>} />
        <Route path="/EditServiceCategory" element={<EditServiceCategory/>} />

        
        {/* -------------------------- CRUD Route End----------------------------- */}
        <Route path="/AddPackage" element={<AddPackage/>} />
        <Route path="/AddProduct" element={<AddProducts/>} />
        <Route path="/EditProduct/:id" element={<EditProduct />} />





        {/*---------------------------Customer Page Route Start---------------------------------- */}

        <Route path="/Products" element={<FullProductSection />} />
        <Route path="/MyOrders" element={<MyOrders />} />
        <Route path="/Services" element={<ServicesSection />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/checkoutpage" element={<CheckoutPage />} />
        <Route path="/checkout" element={<Checkout />} />


        {/*---------------------------Customer Page Route End---------------------------------- */}


      </Routes>
    </BrowserRouter>
  );
}

export default App;
