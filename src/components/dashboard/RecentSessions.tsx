import { TEXTSTRING } from "@/constant/textString"
import Card from "@/components/ui/Card"

function RecentSessions() {
  return (
    

    <Card>  
      <h2 className="mb-6 text-xl font-semibold text-slate-800">
        {TEXTSTRING.recent.recent}
      </h2>

      <p className="text-gray-500">
        {TEXTSTRING.recent.EmpytRecent}
      </p>
    </Card>
  )
}

export default RecentSessions
