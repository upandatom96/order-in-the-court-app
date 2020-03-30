import { Component, OnInit } from "@angular/core";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { Case } from "src/app/models/Case.model";
import { CaseService } from "src/app/services/case.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-archived-case",
  templateUrl: "./archived-case.component.html",
  styleUrls: ["./archived-case.component.scss"]
})
export class ArchivedCaseComponent implements OnInit {
  public case: Case = null;
  public error = false;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.case);
  }

  public get witnessCount(): number {
    return this.case.unrevealedWitnesses.length + this.case.revealedWitnesses.length;
  }

  public get showWitness(): boolean {
    return this.witnessCount > 0;
  }

  constructor(
    private caseService: CaseService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit() {
    this.loadCase();
  }

  private loadCase() {
    this.case = null;
    this.error = false;
    const id = this.route.snapshot.paramMap.get("id");
    this.caseService.getSingleCase(id)
      .subscribe((res) => this.case = res,
        (error) => {
          this.error = true;
          console.log("get case failed");
        });
  }

}