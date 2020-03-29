import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CaseOverviewComponent } from "./case-overview.component";
import { OpenCaseTableComponent } from "../open-case-table/open-case-table.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ClosedCaseTableComponent } from "../closed-case-table/closed-case-table.component";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";
import { LoadingComponent } from "../loading/loading.component";

describe("CaseOverviewComponent", () => {
  let component: CaseOverviewComponent;
  let fixture: ComponentFixture<CaseOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CaseOverviewComponent, OpenCaseTableComponent, ClosedCaseTableComponent,
        HeaderComponent, BodyComponent, LoadingComponent
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
