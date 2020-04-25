import { Injectable } from "@angular/core";
import { CaseService } from "./case.service";
import { Case } from "../models/Case.model";
import { LogService } from "./log.service";
import { NavHelperService } from "./nav-helper.service";
import { interval, Subscription } from "rxjs";
import { BooleanHelper } from "../utilities/boolean.util";

@Injectable({
  providedIn: "root"
})
export class CaseManagerService {
  public activeCase: Case = null;
  private caseId: string = null;

  private caseRefresher: Subscription;

  public get caseReady(): boolean {
    return this.activeCase !== null;
  }

  public get caseUnstarted(): boolean {
    return this.activeCase.status === 0;
  }

  public get caseStarted(): boolean {
    return this.activeCase.status === 1;
  }

  public get caseClosed(): boolean {
    return this.activeCase.status === 2;
  }

  public get caseOpen(): boolean {
    return !this.caseClosed;
  }

  public get hasJudgeName(): boolean {
    return BooleanHelper.hasValue(this.activeCase.judgeName);
  }

  public get hasPlaintiffName(): boolean {
    return BooleanHelper.hasValue(this.activeCase.plaintiffName);
  }

  public get hasDefendantName(): boolean {
    return BooleanHelper.hasValue(this.activeCase.defendantName);
  }

  public get hasAWitness(): boolean {
    return this.witnesses.length > 0;
  }

  public get hasMaxWitnesses(): boolean {
    return this.witnesses.length > 4;
  }

  public get canBeStarted(): boolean {
    return this.hasDefendantName && this.hasPlaintiffName && this.hasJudgeName;
  }

  public get witnesses() {
    const myWitnesses = [];
    this.activeCase.witnessNames.forEach((witness, i) => {
      myWitnesses.push({
        name: witness,
        character: this.activeCase.witnesses[i],
      });
    });
    return myWitnesses;
  }

  constructor(
    private caseService: CaseService,
    private logService: LogService,
    private navHelper: NavHelperService,
  ) { }

  public createNewCase() {
    let newCase: Case;
    this.caseService.create()
      .subscribe((res) => newCase = res,
        (error) => {
          console.log("make case failed");
        }, () => {
          this.logService.log("info", "Case Opened: The Case of the " + newCase.name).subscribe();
          this.navHelper.goToRoleSelect(newCase._id);
        });
  }

  public loadExistingCase(id: string) {
    if (this.shouldLoadCase(id)) {
      this.startRefresh(id);
    }
  }

  public assignJudgeName(name: string) {
    let response;
    this.caseService.assignJudgeName(this.activeCase._id, name)
      .subscribe((res) => response = res,
        (error) => {
          console.log("assign judge name failed");
        }, () => {
          this.navHelper.goToJudge(this.activeCase._id);
        });
  }

  public assignPlaintiffName(name: string) {
    let response;
    this.caseService.assignPlaintiffName(this.activeCase._id, name)
      .subscribe((res) => response = res,
        (error) => {
          console.log("assign plaintiff name failed");
        }, () => {
          this.navHelper.goToPlaintiff(this.activeCase._id);
        });
  }

  public assignDefendantName(name: string) {
    let response;
    this.caseService.assignDefendantName(this.activeCase._id, name)
      .subscribe((res) => response = res,
        (error) => {
          console.log("assign defendant name failed");
        }, () => {
          this.navHelper.goToDefendant(this.activeCase._id);
        });
  }

  public assignWitnessName(name: string) {
    let response;
    this.caseService.assignWitnessName(this.activeCase._id, name)
      .subscribe((res) => response = res,
        (error) => {
          console.log("assign witness name failed");
        }, () => {
          this.navHelper.goToWitness(this.activeCase._id);
        });
  }

  public startCase() {
    let response;
    this.caseService.startCase(this.activeCase._id)
      .subscribe((res) => response = res,
        (error) => {
          console.log("start case failed");
        });
  }

  public revealPlaintiffEvidence(evidenceId: string) {
    let response;
    this.caseService.revealPlaintiffEvidence(this.activeCase._id, evidenceId)
      .subscribe((res) => response = res,
        (error) => {
          console.log("reveal plaintiff evidence failed");
        });
  }

  public revealDefendantEvidence(evidenceId: string) {
    let response;
    this.caseService.revealDefendantEvidence(this.activeCase._id, evidenceId)
      .subscribe((res) => response = res,
        (error) => {
          console.log("reveal defendant evidence failed");
        });
  }

  public closeCase(isDefendantGuilty: boolean) {
    let response;
    this.caseService.closeCase(this.activeCase._id, isDefendantGuilty)
      .subscribe((res) => response = res,
        (error) => {
          console.log("close case failed");
        }, () => {
          this.logService.log("info", "Case Closed: " + this.activeCase.name).subscribe();
        });
  }

  public reset() {
    this.activeCase = null;
    if (BooleanHelper.hasValue(this.caseRefresher)) {
      this.caseRefresher.unsubscribe();
    }
  }

  private startRefresh(id: string) {
    this.caseId = id;
    this.reset();
    this.retrieveCase();
    const source = interval(1000);
    this.caseRefresher = source.subscribe(() => this.retrieveCase());
  }

  private retrieveCase() {
    this.caseService.getSingleCase(this.caseId)
      .subscribe((res) => this.activeCase = res,
        (error) => {
          console.log("get case failed");
        }, () => {
          if (this.caseClosed) {
            this.caseRefresher.unsubscribe();
          }
        });
  }

  private shouldLoadCase(id: string) {
    if (!this.caseReady) {
      return true;
    }
    const caseAlreadyLoaded = this.activeCase._id === id;
    return !caseAlreadyLoaded;
  }
}
