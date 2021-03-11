import { CompanyInfo } from 'services/api';
import axios from '../base';

export class CompanyService {
  private url = '/company';

  async getCompanyInfo(): Promise<CompanyInfo> {
    try {
      const { data } = await axios.get<CompanyInfo>(`${this.url}/getInfo`);
      return data;
    } catch (e) {
      throw new Error(e);
    }
  }

  async getCompaniesByName(): Promise<CompanyInfo> {
    try {
      const { data } = await axios.get<CompanyInfo>(`${this.url}/getInfo`);
      return data;
    } catch (e) {
      throw new Error(e);
    }
  }
}

export const companyService = new CompanyService();
