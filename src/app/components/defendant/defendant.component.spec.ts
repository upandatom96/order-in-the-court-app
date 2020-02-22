import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DefendantComponent } from "./defendant.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IssueBlockComponent } from "../issue-block/issue-block.component";

describe("DefendantComponent", () => {
  let component: DefendantComponent;
  let fixture: ComponentFixture<DefendantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DefendantComponent, IssueBlockComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefendantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});