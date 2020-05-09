import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {InfoComponent} from "./components/info/info.component";
import {ROUTES_ENUM} from "./constants/routing.constants";
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AdminComponent} from "./components/admin/admin.component";
import {EvidenceOverviewComponent} from "./components/evidence-overview/evidence-overview.component";
import {EvidenceDisplayComponent} from "./components/evidence-display/evidence-display.component";
import {EvidenceFormComponent} from "./components/evidence-form/evidence-form.component";
import {IssueOverviewComponent} from "./components/issue-overview/issue-overview.component";
import {IssueDisplayComponent} from "./components/issue-display/issue-display.component";
import {IssueFormComponent} from "./components/issue-form/issue-form.component";
import {WitnessOverviewComponent} from "./components/witness-overview/witness-overview.component";
import {WitnessDisplayComponent} from "./components/witness-display/witness-display.component";
import {WitnessFormComponent} from "./components/witness-form/witness-form.component";
import {CaseOverviewComponent} from "./components/case-overview/case-overview.component";
import {CaseDisplayComponent} from "./components/case-display/case-display.component";
import {RoleSelectComponent} from "./components/role-select/role-select.component";
import {JudgeComponent} from "./components/judge/judge.component";
import {PlaintiffComponent} from "./components/plaintiff/plaintiff.component";
import {WitnessComponent} from "./components/witness/witness.component";
import {JuryComponent} from "./components/jury/jury.component";
import {DefendantComponent} from "./components/defendant/defendant.component";
import {RulesComponent} from "./components/rules/rules.component";
import {CaseSelectComponent} from "./components/case-select/case-select.component";
import {CaseArchiveComponent} from "./components/case-archive/case-archive.component";
import {ArchivedCaseComponent} from "./components/archived-case/archived-case.component";
import {ExtrasComponent} from './components/extras/extras.component';
import {RandomContentComponent} from './components/random-content/random-content.component';
import {CreditsComponent} from "./components/credits/credits.component";
import {SuggestContentComponent} from "./components/suggest-content/suggest-content.component";

const routes: Routes = [
  // main
  { path: ROUTES_ENUM.Dashboard, component: DashboardComponent },
  { path: ROUTES_ENUM.Info, component: InfoComponent },
  { path: ROUTES_ENUM.Login, component: LoginComponent },
  { path: ROUTES_ENUM.Profile, component: ProfileComponent },
  { path: ROUTES_ENUM.Admin, component: AdminComponent },
  { path: ROUTES_ENUM.Rules, component: RulesComponent },
  { path: ROUTES_ENUM.Extras, component: ExtrasComponent },
  { path: ROUTES_ENUM.RandomContent, component: RandomContentComponent },
  { path: ROUTES_ENUM.Credits, component: CreditsComponent },
  { path: ROUTES_ENUM.Suggestions, component: SuggestContentComponent },
  { path: ROUTES_ENUM.CaseSelect, component: CaseSelectComponent },
  { path: ROUTES_ENUM.CaseArchive, component: CaseArchiveComponent },
  // courtroom
  { path: ROUTES_ENUM.RoleSelect + "/:id", component: RoleSelectComponent },
  { path: ROUTES_ENUM.ArchivedCase + "/:id", component: ArchivedCaseComponent },
  { path: ROUTES_ENUM.Judge + "/:id", component: JudgeComponent },
  { path: ROUTES_ENUM.Plaintiff + "/:id", component: PlaintiffComponent },
  { path: ROUTES_ENUM.Defendant + "/:id", component: DefendantComponent },
  { path: ROUTES_ENUM.Witness + "/:id", component: WitnessComponent },
  { path: ROUTES_ENUM.Jury + "/:id", component: JuryComponent },
  // evidence
  { path: ROUTES_ENUM.EvidenceOverview, component: EvidenceOverviewComponent },
  { path: ROUTES_ENUM.EvidenceDetails + "/:id", component: EvidenceDisplayComponent },
  { path: ROUTES_ENUM.EvidenceForm, component: EvidenceFormComponent },
  { path: ROUTES_ENUM.EvidenceForm + "/:id", component: EvidenceFormComponent },
  // witness
  { path: ROUTES_ENUM.WitnessOverview, component: WitnessOverviewComponent },
  { path: ROUTES_ENUM.WitnessDetails + "/:id", component: WitnessDisplayComponent },
  { path: ROUTES_ENUM.WitnessForm, component: WitnessFormComponent },
  { path: ROUTES_ENUM.WitnessForm + "/:id", component: WitnessFormComponent },
  // issue
  { path: ROUTES_ENUM.IssueOverview, component: IssueOverviewComponent },
  { path: ROUTES_ENUM.IssueDetails + "/:id", component: IssueDisplayComponent },
  { path: ROUTES_ENUM.IssueForm, component: IssueFormComponent },
  { path: ROUTES_ENUM.IssueForm + "/:id", component: IssueFormComponent },
  // case
  { path: ROUTES_ENUM.CaseOverview, component: CaseOverviewComponent },
  { path: ROUTES_ENUM.CaseDetails + "/:id", component: CaseDisplayComponent },
  // default
  { path: "**", redirectTo: "dashboard" },
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
