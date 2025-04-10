
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ServerCrash } from "lucide-react";

const ServerError = () => {
  useEffect(() => {
    console.error("500 Error: Internal server error encountered");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-robin-cream px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl overflow-hidden border-2 border-robin-orange/10">
        <div className="bg-robin-orange p-6">
          <div className="flex justify-center">
            <ServerCrash className="h-16 w-16 text-white" />
          </div>
        </div>
        <div className="p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-robin-dark mb-2 text-center">Server Error</h1>
          <p className="text-gray-600 mb-6 text-center">
            Something went wrong on our servers. We've been notified and are working to fix the issue. Please try again later.
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

export default ServerError;
