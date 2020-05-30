import {Component, OnInit} from "@angular/core";
import {CaseManagerService} from "../../services/case-manager.service";
import {ActivatedRoute} from "@angular/router";
import {Evidence} from "../../models/Evidence.model";
import {EVIDENCE_HELP, PLAINTIFF_ROLE} from "../../constants/rule.constants";

@Component({
  selector: "app-plaintiff-role",
  templateUrl: "./plaintiff-role.component.html",
  styleUrls: ["./plaintiff-role.component.scss"]
})
export class PlaintiffRoleComponent implements OnInit {
  private caseId: string = null;

  public get caseLoaded(): boolean {
    return this.caseId &&
      this.caseManager.caseReady &&
      this.caseId === this.caseManager.activeCase._id;
  }

  public get waitingNotForRoles(): boolean {
    const waitingForSelections = this.caseManager.activeCase.isMakeSelections && !this.showEvidencePool;
    return waitingForSelections || this.caseManager.activeCase.isVerdictSelection;
  }

  public get assigningRoles(): boolean {
    return this.caseManager.activeCase.isAssignRoles;
  }

  public get showEvidencePool(): boolean {
    return this.caseManager.activeCase.isMakeSelections &&
      !this.caseManager.activeCase.isStartingDefendantEvidenceRevealed;
  }

  public get poolEvidence(): Evidence[] {
    return this.caseManager.activeCase.plaintiffEvidencePool;
  }

  public get courtEvidence(): Evidence[] {
    return this.caseManager.activeCase.plaintiffEvidenceCourt;
  }

  public get evidenceHelp(): string {
    return EVIDENCE_HELP;
  }

  public get showEvidenceRow(): boolean {
    return this.showOtherEvidence || this.someEvidenceSelected;
  }

  public get showOtherEvidence(): boolean {
    return this.caseManager.shouldShowEvidence;
  }

  public get otherListName(): string {
    return "Defendant Evidence";
  }

  public get otherEvidence(): Evidence[] {
    return this.caseManager.activeCase.defendantEvidenceCourt;
  }

  public get someEvidenceSelected(): boolean {
    return this.poolEvidence.length +
      this.courtEvidence.length > 0;
  }

  public get roleText(): string {
    return PLAINTIFF_ROLE;
  }

  public get canRevealEvidence(): boolean {
    return this.caseManager.activeCase.isInProgress && !this.caseManager.activeCase.isAllPlaintiffEvidenceRevealed;
  }

  constructor(
    private caseManager: CaseManagerService,
    private route: ActivatedRoute,
  ) {
  }

  public ngOnInit() {
    this.loadCase();
  }

  public backToRoleSelect() {
    this.caseManager.removePlaintiffName();
  }

  public selectEvidence(evidence: Evidence) {
    this.caseManager.pickStartingDefendantEvidence(evidence._id);
  }

  public revealEvidence(evidence: Evidence) {
    this.caseManager.revealPlaintiffEvidence(evidence._id);
  }

  private loadCase() {
    this.caseId = this.route.snapshot.paramMap.get("id");
    this.caseManager.loadExistingCase(this.caseId);
  }

}
