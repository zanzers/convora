
import type { ScenarioModel } from "@/mock/scenarioModel";
import { rule, Xiianger } from "@/services/AI/xiiangerAI";


function createPrompt(scenario: ScenarioModel) : string {
  return `
    
  ${Xiianger.baseRule}
    
    current scenario:
        ${scenario.title}
    Your Role:
        ${scenario.AIrole}
    objective:
        ${scenario.objective}
    
    Rules:
        ${rule.defaultRule}
  `;
    
}

export default createPrompt
