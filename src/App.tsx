import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PredictingAI from "@/src/screens/predicting-ai";
import SettingsPage from "@/src/screens/settings";
import TermsAndConditions from "@/src/screens/terms-and-conditions";
import BitcoinPage from "@/src/screens/bitcoin";
import StakingPage from "@/src/screens/staking";
import StakingInsights from "@/src/screens/staking-insights";
import OverviewPage from "@/src/screens/overview";
import LandBotPage from "@/src/screens/landbot";
import MaevePage from "@/src/screens/maeve";
import PreaiPage from "@/src/screens/preai";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/predictingai" element={<PredictingAI />} />
        <Route path="/bitcoin" element={<BitcoinPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
         {/*Staking*/}
        <Route path="/" element={<OverviewPage />} />
        <Route path="/staking" element={<StakingPage />} />
        <Route path="/preai" element={<PreaiPage />} />
        <Route path="/landbot" element={<LandBotPage />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/maeve" element={<MaevePage />} />
        <Route path="/staking-insights" element={<StakingInsights />} />
      </Routes>
    </Router>
  );
}

export default App;
