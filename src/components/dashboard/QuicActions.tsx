import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import { TEXTSTRING } from "@/constant/textString"

function QuicActions() {
  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold">
        {TEXTSTRING.actions.quickActions}
      </h2>

      <div className="flex flex-wrap gap-4">
        <Button> {TEXTSTRING.actions.newConvo} </Button>

        <Button className="bg-slate-700 hover:bg-slate-800">
          {TEXTSTRING.actions.progress}
        </Button>

        <Button className="bg-slate-700 hover:bg-slate-800">
          {TEXTSTRING.actions.vocabulary}
        </Button>


      </div>
      
    </Card>
  )
}

export default QuicActions
