
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield } from "lucide-react";

const Forbidden = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "403 Error: User attempted to access restricted resource:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-robin-cream px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl overflow-hidden border-2 border-robin-orange/10">
        <div className="bg-robin-orange p-6">
          <div className="flex justify-center">
            <Shield className="h-16 w-16 text-white" />
          </div>
        </div>
        <div className="p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-robin-dark mb-2 text-center">Access Denied</h1>
          <p className="text-gray-600 mb-6 text-center">
            You don't have permission to access this page. Please contact the administrator if you believe this is an error.
          </p>
          <div className="flex justify-center">
            <Link to="/">
              <Button variant="default" className="bg-robin-orange hover:bg-robin-dark text-white flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forbidden;
