import Container from "@/components/ui/Container"
import {
  WelcomeCard,
  StateCard,
  QuicActions,
  RecentSessions,
} from "@/components/dashboard";
import Test from "@/components/ui/test";




function Dashboard() {
  return (
    <Container>

      <div className="space-y-8 py-8">

        <WelcomeCard />
        <StateCard />
        <QuicActions />
        <RecentSessions />
      </div>

      </Container>
  )
}

export default Dashboard
