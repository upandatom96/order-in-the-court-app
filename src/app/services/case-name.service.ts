import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RestUrlBuilder} from "../utilities/rest-url-builder.util";
import {ServiceUrl} from "../constants/rest.constants";
import {CookieHelper} from "../utilities/cookie.util";

const controller = "case";

@Injectable({
  providedIn: "root"
})
export class CaseNameService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public assignJudgeName(caseId: string, judgeName: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `${caseId}/assignName/judge`
    });
    const params = {
      name: judgeName
    };
    return this.http.put(url, params, CookieHelper.headers) as Observable<any>;
  }

  public removeJudgeName(caseId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `${caseId}/removeName/judge`
    });
    return this.http.put(url, null, CookieHelper.headers) as Observable<any>;
  }

  public assignPlaintiffName(caseId: string, plaintiffName: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `${caseId}/assignName/plaintiff`
    });
    const params = {
      name: plaintiffName
    };
    return this.http.put(url, params, CookieHelper.headers) as Observable<any>;
  }

  public removePlaintiffName(caseId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `${caseId}/removeName/plaintiff`
    });
    return this.http.put(url, null, CookieHelper.headers) as Observable<any>;
  }

  public assignDefendantName(caseId: string, defendantName: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `${caseId}/assignName/defendant`
    });
    const params = {
      name: defendantName
    };
    return this.http.put(url, params, CookieHelper.headers) as Observable<any>;
  }

  public removeDefendantName(caseId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `${caseId}/removeName/defendant`
    });
    return this.http.put(url, null, CookieHelper.headers) as Observable<any>;
  }

  public assignWitnessName(caseId: string, witnessName: string, witnessNumber: number): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `${caseId}/assignName/witness/${witnessNumber}`
    });
    const params = {
      name: witnessName,
    };
    return this.http.put(url, params, CookieHelper.headers) as Observable<any>;
  }

  public removeWitnessName(caseId: string, witnessNumber: number): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `${caseId}/removeName/witness/${witnessNumber}`
    });
    return this.http.put(url, null, CookieHelper.headers) as Observable<any>;
  }
}
