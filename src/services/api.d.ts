export interface AccessToken {
  accessToken: string;
}

export interface User {
  /**
   * Date entity was created
   * @format date-time
   */
  createdAt: string;

  /**
   * Date entity was updated
   * @format date-time
   */
  updatedAt: string;

  /** Unique identifier for User */
  id: string | null;

  /** Name for User */
  name: string;

  /** Last name for User */
  lastName: string | null;

  /** Role for User in the app */
  roleApp: "solteca-admin" | "accountant" | "solteca-user" | null;

  /** Role for User in the company */
  role: string | null;

  /** Email for the user */
  email: string | null;

  /** Password for the user */
  password: string | null;

  /** Phone number */
  phone: string;

  /** Picture */
  pictureUrl: string;
}

export interface PageResponse {
  total: number;
}

export interface BillItem {
  /**
   * Date entity was created
   * @format date-time
   */
  createdAt: string;

  /**
   * Date entity was updated
   * @format date-time
   */
  updatedAt: string;

  /** Unique identifier for item */
  id: string | null;

  /** Number of elements for item */
  quantity: number;

  /** Name of the product */
  productName: string;

  /** Details for the item */
  details: string | null;

  /** Total cost of item */
  total: number | null;
}

export interface Bill {
  /**
   * Date entity was created
   * @format date-time
   */
  createdAt: string;

  /**
   * Date entity was updated
   * @format date-time
   */
  updatedAt: string;

  /** Unique identifier of bill */
  id: string | null;

  /** Bill number of bill */
  billNo: string | null;

  /** Total cost of bill */
  total: number | null;

  /** Total cost of IVA tax */
  totalIva: number | null;

  /** Unique identifier of company who ownes bill */
  companyId: string;

  /** Unique identifier of company who is related to bill */
  relatedCompanyId: string;

  /** Cost of other expense for bill */
  otherExpenses: number | null;

  /** Bill has been paid */
  isPaid: boolean | null;

  /** Bill is a Quote */
  isQuote: boolean | null;

  /** Bill is a for sales */
  isSaleReceipt: boolean | null;
  billItems: BillItem[];
}

export interface Consecutive {
  consecutive: number;
}

export interface SalesPerMonth {
  month: number;
  year: number;
  total: number;
}

export interface File {
  /**
   * Date entity was created
   * @format date-time
   */
  createdAt: string;

  /**
   * Date entity was updated
   * @format date-time
   */
  updatedAt: string;

  /** Unique identifier for File */
  id: string | null;

  /** Name for the File */
  name: string;

  /** Url for the File */
  fileUrl: string;
}

export interface Company {
  /**
   * Date entity was created
   * @format date-time
   */
  createdAt: string;

  /**
   * Date entity was updated
   * @format date-time
   */
  updatedAt: string;

  /** Unique identifier for Company */
  id: string | null;

  /** Number of Tributary Identification */
  nit: string | null;

  /** Name for the company */
  name: string | null;

  /** Address for the company */
  address: string | null;

  /** Identifier to differentiate if Company is SelfWithHolding */
  selfWithHoldingUrl: string | null;

  /** Money available in the bank account of the company */
  moneyAvailable: string | null;

  /** Type of company */
  type: "customer" | "supplier" | "both";

  /** Last time money in the account was updated */
  moneyAvailableUpdatedAt: string;
}

export interface IVABalance {
  iva: number;
  status: "pay" | "be paid" | "No bills found";
}

export interface CompanyInfo {
  salesPerMonth: SalesPerMonth[];
  files: File[];
  moneyOwned: number;
  moneyOwnedToUs: number;
  companyDetails: Company;
  balanceIVA: IVABalance;
}

export interface BillByQuarter {
  total: number;
  results: Bill[];
}

export interface Taxes {
  balanceIVA: IVABalance;
  bills: BillByQuarter;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: keyof Omit<Body, "body" | "bodyUsed">;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) => (input !== null && typeof input === "object" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      headers: {
        ...(type ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      ...requestParams,
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Solteca APIs
 * @version 1.0
 * Everything about Solteca APIs
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * No description
     *
     * @tags Authentication
     * @name AuthControllerLogin
     * @summary Get access token
     * @request POST:/auth/login
     * @secure
     */
    authControllerLogin: (params: RequestParams = {}) =>
      this.request<AccessToken, any>({
        path: `/auth/login`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name AuthControllerGetProfile
     * @summary Get user from Request
     * @request GET:/auth/profile
     * @secure
     */
    authControllerGetProfile: (params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/auth/profile`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  user = {
    /**
     * No description
     *
     * @tags Users
     * @name UserControllerGetUserInfoById
     * @summary Get all info of a User based on its Id
     * @request GET:/user/{userId}
     * @secure
     */
    userControllerGetUserInfoById: (userId: string, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/user/${userId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  bill = {
    /**
     * No description
     *
     * @tags Bills
     * @name BillControllerGetAllBills
     * @summary Get list of all Bills
     * @request GET:/bill
     * @secure
     */
    billControllerGetAllBills: (
      query: {
        sale: boolean;
        quote: boolean;
        paid: boolean;
        month: number;
        quarter: string;
        searchText: string;
        page: number;
        pageSize: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PageResponse & { results?: Bill[] }, any>({
        path: `/bill`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bills
     * @name BillControllerCreateBill
     * @summary Create a Bill
     * @request POST:/bill
     * @secure
     */
    billControllerCreateBill: (data: Bill, params: RequestParams = {}) =>
      this.request<Bill, any>({
        path: `/bill`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bills
     * @name BillControllerUpdateBill
     * @summary Update a Bill
     * @request PUT:/bill
     * @secure
     */
    billControllerUpdateBill: (data: Bill, params: RequestParams = {}) =>
      this.request<Bill, any>({
        path: `/bill`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bills
     * @name BillControllerGetConsecutiveForBill
     * @summary Get consecutive for Bill
     * @request GET:/bill/consecutive
     * @secure
     */
    billControllerGetConsecutiveForBill: (params: RequestParams = {}) =>
      this.request<Consecutive, any>({
        path: `/bill/consecutive`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  company = {
    /**
     * No description
     *
     * @tags Company
     * @name CompanyControllerGetInfo
     * @summary Get all info of a Company
     * @request GET:/company/getInfo
     * @secure
     */
    companyControllerGetInfo: (params: RequestParams = {}) =>
      this.request<CompanyInfo, any>({
        path: `/company/getInfo`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Company
     * @name CompanyControllerGetCompaniesByName
     * @summary Get all info of Companies by name
     * @request GET:/company/getCompaniesByName
     * @secure
     */
    companyControllerGetCompaniesByName: (query: { name: string; type: string }, params: RequestParams = {}) =>
      this.request<Company[], any>({
        path: `/company/getCompaniesByName`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Company
     * @name CompanyControllerCreateCompany
     * @summary Create Company
     * @request POST:/company
     * @secure
     */
    companyControllerCreateCompany: (data: Company, params: RequestParams = {}) =>
      this.request<Company, any>({
        path: `/company`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Company
     * @name CompanyControllerUpdateCompany
     * @summary Update Company
     * @request PUT:/company
     * @secure
     */
    companyControllerUpdateCompany: (data: Company, params: RequestParams = {}) =>
      this.request<Company, any>({
        path: `/company`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Company
     * @name CompanyControllerCreateContact
     * @summary Create Contact
     * @request POST:/company/{companyId}/contact
     * @secure
     */
    companyControllerCreateContact: (companyId: string, data: User, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/company/${companyId}/contact`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Company
     * @name CompanyControllerUpdateContact
     * @summary Create Contact
     * @request PUT:/company/{companyId}/contact
     * @secure
     */
    companyControllerUpdateContact: (companyId: string, data: User, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/company/${companyId}/contact`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Company
     * @name CompanyControllerDeleteContact
     * @summary Delete Contact
     * @request DELETE:/company/contact/{contactId}
     * @secure
     */
    companyControllerDeleteContact: (contactId: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/company/contact/${contactId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Company
     * @name CompanyControllerGetTaxes
     * @summary Get the taxes of a company
     * @request GET:/company/taxes
     * @secure
     */
    companyControllerGetTaxes: (query: { isSale: boolean; quarter: string }, params: RequestParams = {}) =>
      this.request<Taxes, any>({
        path: `/company/taxes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  file = {
    /**
     * No description
     *
     * @tags Files
     * @name FileControllerCreateFile
     * @summary Create a File
     * @request POST:/file/create-file
     * @secure
     */
    fileControllerCreateFile: (data: File, params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/file/create-file`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name FileControllerGetInfo
     * @summary Delete a File
     * @request DELETE:/file/delete-file/{fileId}
     * @secure
     */
    fileControllerGetInfo: (fileId: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/file/delete-file/${fileId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
