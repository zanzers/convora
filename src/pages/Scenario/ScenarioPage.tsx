import ScenarioCard from "@/components/conversation/ScenarioCard"
import { TEXTSTRING } from "@/constant/textString"
import { scenarios } from "@/mock/scenarioModel";
import { useNavigate } from "react-router-dom";




function ScenarioPage() {
    const navigate = useNavigate();
  return (

    <div className="space-y-8 text-black">

        <div>

            <h1 className="text-3xl font-bold">
                {TEXTSTRING.Scenario.Practice}
            </h1>
            
            <p className="mt-2 text-slate-600">
                {TEXTSTRING.Scenario.choose}
            </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {scenarios.map((scenario) => (

                <ScenarioCard                 
                    key={scenario.id}
                    scenario={scenario}
                    onClick={(id) => navigate(`/practice/${id}`)}
                />

            ))}

        </div>
    </div>
   
  )
}

export default ScenarioPage





