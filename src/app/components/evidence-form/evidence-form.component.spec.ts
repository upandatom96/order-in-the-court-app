import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {EvidenceFormComponent} from "./evidence-form.component";
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {SimpleComponentsModule} from "../../simple-components/simple-components.module";

describe("EvidenceFormComponent", () => {
  let component: EvidenceFormComponent;
  let fixture: ComponentFixture<EvidenceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EvidenceFormComponent,
      ],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule, SimpleComponentsModule, ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidenceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
