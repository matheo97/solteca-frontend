import { Company, CompanyInfo } from 'services/api';
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

  async getCompaniesByName(name: string): Promise<Company[]> {
    try {
      const { data } = await axios.get<Company[]>(
        `${this.url}/getCompaniesByName?name=${name}`
      );
      return data;
    } catch (e) {
      throw new Error(e);
    }
  }
}

export const companyService = new CompanyService();
