import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ContactBody} from "../models/ContactBody.model";
import {Observable} from "rxjs";
import {CookieHelper} from "../utilities/cookie.util";
import {RestUrlBuilder} from "../utilities/rest-url-builder.util";
import {ServiceUrl} from "../constants/rest.constants";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  public showFeedbackPrompt = false;

  constructor(
    private http: HttpClient,
  ) { }

  public promptForFeedback() {
    this.showFeedbackPrompt = true;
  }

  public hidePrompt() {
    this.showFeedbackPrompt = false;
  }

  public contactAOTI(contactBody: ContactBody): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "contact"
    });
    return this.http.post(url, contactBody, CookieHelper.headers) as Observable<any>;
  }
}
