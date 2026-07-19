"use client";

import DashboardHome from "./DashboardHome";
import Portfolio from "./Portfolio";
import Watchlist from "./Watchlist";
import CompanyAnalysis from "./CompanyAnalysis";
import Screener from "./Screener";
import type { DashboardTab } from "../layout/Navbar";

interface DashboardLayoutProps {
  activeView: DashboardTab;
  onLanding: () => void;
}

export default function DashboardLayout({ activeView, onLanding }: DashboardLayoutProps) {
  switch (activeView) {
    case "portfolio":
      return <Portfolio />;
    case "watchlist":
      return <Watchlist />;
    case "company":
      return <CompanyAnalysis />;
    case "screener":
      return <Screener />;
    case "dashboard":
    default:
      return <DashboardHome onLanding={onLanding} />;
  }
}
