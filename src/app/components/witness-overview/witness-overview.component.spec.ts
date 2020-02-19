import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WitnessOverviewComponent } from "./witness-overview.component";
import { WitnessTableComponent } from "../witness-table/witness-table.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("WitnessOverviewComponent", () => {
  let component: WitnessOverviewComponent;
  let fixture: ComponentFixture<WitnessOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WitnessOverviewComponent, WitnessTableComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitnessOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
