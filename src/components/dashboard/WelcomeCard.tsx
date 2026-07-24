import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

import { TEXTSTRING } from "@/constant/textString";
import { useNavigate } from "react-router-dom";

const navigate  = useNavigate;


function WelcomeCard() {

  const nav = navigate();
  return (
    
    <Card>
      <div className="flex flex-col gap-6 md:flex md:flex-row md:items-center md:justify-between">

        <div>
          <h1 className="text-3xl font-bold text-black">
            {TEXTSTRING.dashboard.welcomeTitle}
          </h1>

          <p className="mt-2 text-gray-600">
            {TEXTSTRING.dashboard.welcomeSubtitle}
          </p>
        </div>

        <Button onClick={() => nav("/practice")}>
           {TEXTSTRING.dashboard.startConversation}
        </Button>



      </div>
    </Card>
  )
}

export default WelcomeCard
