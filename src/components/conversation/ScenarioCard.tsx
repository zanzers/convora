import Card from "@/components/ui/Card";
import type { Scenario } from "@/mock/scenario"


interface ScenarioProps {
    scenario: Scenario;
    onClick?: (id:string) => void;
}


function ScenarioCard({ scenario, onClick} : ScenarioProps) {
  return (

    <Card
        className="cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg rounded-2xl"
        onClick={() => onClick?.(scenario.id)}
    >
        <div className="flex items-start gap-4">

            <div className="text-4xl">
                {scenario.icon}
            </div>

            <div className="flex-1">
                <h2 className="text-lg font-semibold">
                    {scenario.title}
                </h2>

                <p className="mt-1 text-sm text-slate-600">
                    {scenario.description}
                </p>

                <span className="mt-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                    {scenario.difficulty}
                </span>
            </div>
        </div>

    </Card>
  )
}

export default ScenarioCard
