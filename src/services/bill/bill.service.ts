import { Consecutive } from 'services/api';
import axios from '../base';

export class BillService {
  private url = '/bill';

  async getBillConsecutive(): Promise<Consecutive> {
    try {
      const { data } = await axios.get<Consecutive>(`${this.url}/consecutive`);
      return data;
    } catch (e) {
      throw new Error(e);
    }
  }
}

export const billService = new BillService();
